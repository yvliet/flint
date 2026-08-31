import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';

export const ActiveBlockSymbolsPluginKey = new PluginKey('activeBlockSymbols');

export const ActiveBlockSymbols = Extension.create({
  name: 'activeBlockSymbols',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: ActiveBlockSymbolsPluginKey,
        state: {
          init() {
            return DecorationSet.empty;
          },
          apply(tr, oldSet, oldState, newState) {
            // Early exit if neither selection nor doc changed
            if (!tr.selectionSet && !tr.docChanged) {
              return oldSet.map(tr.mapping, newState.doc);
            }

            const { selection, doc } = newState;
            const { $from, from, to } = selection;

            const decorations: Decoration[] = [];

            // 1. Block-level indicators (Headings & Blockquotes)
            for (let d = $from.depth; d > 0; d--) {
              const node = $from.node(d);
              const pos = $from.before(d);

              if (node.type.name === 'heading') {
                decorations.push(
                  Decoration.node(pos, pos + node.nodeSize, {
                    class: `is-active-heading is-active-h${node.attrs.level || 1}`,
                  })
                );
                break;
              } else if (node.type.name === 'blockquote') {
                decorations.push(
                  Decoration.node(pos, pos + node.nodeSize, {
                    class: 'is-active-blockquote',
                  })
                );
                break;
              }
            }

            // 2. Inline mark indicators (Bold, Italic, Code, Strike, Highlight)
            const parent = $from.parent;
            const parentStart = $from.start();

            parent.forEach((child, offset) => {
              if (!child.isText || !child.marks.length) return;

              const nodeStart = parentStart + offset;
              const nodeEnd = nodeStart + child.nodeSize;

              // Check if selection touches or overlaps this marked text
              if (from <= nodeEnd && to >= nodeStart) {
                for (const mark of child.marks) {
                  let className = '';
                  if (mark.type.name === 'bold') className = 'is-active-bold';
                  else if (mark.type.name === 'italic') className = 'is-active-italic';
                  else if (mark.type.name === 'code') className = 'is-active-code';
                  else if (mark.type.name === 'strike') className = 'is-active-strike';
                  else if (mark.type.name === 'highlight') className = 'is-active-highlight';

                  if (className) {
                    decorations.push(
                      Decoration.inline(nodeStart, nodeEnd, {
                        class: className,
                      })
                    );
                  }
                }
              }
            });

            return DecorationSet.create(doc, decorations);
          },
        },
        props: {
          decorations(state) {
            return this.getState(state);
          },
        },
      }),
    ];
  },
});
