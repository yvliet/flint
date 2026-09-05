import { Extension } from '@tiptap/core';
import { Plugin, PluginKey, TextSelection } from '@tiptap/pm/state';
import { getEffectiveTextRange } from './markdown-shortcuts';
import { useSettingsStore } from '@/store/settingsStore';
import {
  analyzeSelectionWrap,
  getCollapsedPairingAction,
  getSmartBackspaceAction,
} from './smart-pairing-utils';

export const AutoPairingPluginKey = new PluginKey('autoPairing');

export interface AutoPairingStorage {
  autoPairing: boolean;
  unsubscribe: (() => void) | null;
}

/**
 * Smart Auto-Pairing and Autowrapping Extension for Flint.
 *
 * WHY THIS, NOT THAT:
 * Instead of naive, unconditional pair insertion, this extension evaluates syntactic context:
 * 1. Asymmetric selections (e.g. `*|text|` + `*`) balance into `*text*` by inserting 1 delimiter
 *    instead of producing malformed syntax like `**text*`.
 * 2. Unclosed opening delimiters on the current line are closed with a single character rather than
 *    blindly creating unwanted trailing pairs (e.g. `*text|` + `*` -> `*text*|`).
 * 3. Delimiter escalation within empty pairs allows smooth formatting progression (`*|*` -> `**|**` -> `***|***`)
 *    with matching symmetrical Backspace contraction.
 * 4. List bullet conversion cleanly absorbs trailing auto-pair characters when typing spaces.
 */
export const AutoPairing = Extension.create<never, AutoPairingStorage>({
  name: 'autoPairing',

  addStorage() {
    return {
      autoPairing: useSettingsStore.getState().autoPairing ?? true,
      unsubscribe: null,
    };
  },

  onCreate() {
    this.storage.autoPairing = useSettingsStore.getState().autoPairing ?? true;
    this.storage.unsubscribe = useSettingsStore.subscribe((state) => {
      this.storage.autoPairing = state.autoPairing ?? true;
    });
  },

  onDestroy() {
    if (this.storage.unsubscribe) {
      this.storage.unsubscribe();
      this.storage.unsubscribe = null;
    }
  },

  addProseMirrorPlugins() {
    const extensionThis = this;

    return [
      new Plugin({
        key: AutoPairingPluginKey,
        props: {
          handleDOMEvents: {
            keydown(view, event) {
              if (event.ctrlKey || event.metaKey || event.altKey) return false;
              if (!extensionThis.storage.autoPairing) return false;

              const key = event.key;
              const { state } = view;
              const { selection } = state;
              const { from, to, empty } = selection;

              // 1. Text is selected: wrap or unwrap via smart selection wrapping
              if (!empty) {
                const range = getEffectiveTextRange(state.doc, selection);
                if (range.empty) return false;
                const { from: selFrom, to: selTo, text: selText } = range;

                const $from = state.doc.resolve(selFrom);
                const blockStart = $from.start();
                const blockEnd = $from.end();
                const blockText = state.doc.textBetween(blockStart, blockEnd);
                const selStartInBlock = selFrom - blockStart;
                const selEndInBlock = selTo - blockStart;

                const wrapResult = analyzeSelectionWrap(
                  selFrom,
                  selTo,
                  selText,
                  blockText,
                  selStartInBlock,
                  selEndInBlock,
                  key
                );

                if (wrapResult) {
                  event.preventDefault();
                  event.stopPropagation();
                  const tr = state.tr.replaceWith(
                    wrapResult.replaceFrom,
                    wrapResult.replaceTo,
                    state.schema.text(wrapResult.text)
                  );
                  tr.setSelection(
                    TextSelection.create(tr.doc, wrapResult.selectionFrom, wrapResult.selectionTo)
                  );
                  view.dispatch(tr);
                  return true;
                }
                return false;
              }

              // 2. Selection is collapsed: auto-pair, step-over, bullet cleanup, or backspace
              if (empty) {
                const $from = state.doc.resolve(from);
                const blockStart = $from.start();
                const blockEnd = $from.end();
                const blockText = state.doc.textBetween(blockStart, blockEnd);
                const caretPosInBlock = from - blockStart;

                // 2A. Backspace handling: symmetrical contraction
                if (key === 'Backspace') {
                  const bsAction = getSmartBackspaceAction(blockText, caretPosInBlock);
                  if (bsAction) {
                    event.preventDefault();
                    event.stopPropagation();
                    const tr = state.tr.delete(
                      from - bsAction.deleteBefore,
                      from + bsAction.deleteAfter
                    );
                    view.dispatch(tr);
                    return true;
                  }
                  return false;
                }

                // 2B. Character pairing and smart actions
                const pairResult = getCollapsedPairingAction(key, blockText, caretPosInBlock);
                if (pairResult.action === 'none') {
                  return false;
                }

                event.preventDefault();
                event.stopPropagation();

                if (pairResult.action === 'step_over') {
                  const tr = state.tr.setSelection(
                    TextSelection.create(state.doc, from + (pairResult.caretDelta ?? 1))
                  );
                  view.dispatch(tr);
                  return true;
                }

                if (pairResult.action === 'bullet_space') {
                  const tr = state.tr;
                  if (pairResult.deleteAfter) {
                    tr.delete(from, from + pairResult.deleteAfter);
                  }
                  tr.insertText(pairResult.insertText ?? ' ', from);
                  tr.setSelection(
                    TextSelection.create(tr.doc, from + (pairResult.caretDelta ?? 1))
                  );
                  view.dispatch(tr);
                  return true;
                }

                if (pairResult.action === 'close_single') {
                  const tr = state.tr.insertText(pairResult.insertText ?? key, from);
                  tr.setSelection(
                    TextSelection.create(tr.doc, from + (pairResult.caretDelta ?? 1))
                  );
                  view.dispatch(tr);
                  return true;
                }

                if (pairResult.action === 'escalate') {
                  const insert = pairResult.insertText ?? '**';
                  const half = Math.floor(insert.length / 2);
                  const leftPart = insert.slice(0, half);
                  const rightPart = insert.slice(half);
                  const tr = state.tr;
                  tr.insertText(rightPart, from);
                  tr.insertText(leftPart, from);
                  tr.setSelection(TextSelection.create(tr.doc, from + leftPart.length));
                  view.dispatch(tr);
                  return true;
                }

                if (pairResult.action === 'pair') {
                  const insert = pairResult.insertText ?? `${key}${key}`;
                  const tr = state.tr.insertText(insert, from);
                  tr.setSelection(
                    TextSelection.create(tr.doc, from + (pairResult.caretDelta ?? 1))
                  );
                  view.dispatch(tr);
                  return true;
                }
              }

              return false;
            },
          },
        },
      }),
    ];
  },
});
