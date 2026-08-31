import { Extension } from '@tiptap/core';
import Suggestion, { SuggestionOptions } from '@tiptap/suggestion';
import { PluginKey } from '@tiptap/pm/state';

export interface WikiLinkItem {
  id: string;
  title: string;
  isNew?: boolean;
}

export const WikiLinkPluginKey = new PluginKey('wikiLinks');

export const WikiLinks = Extension.create<{
  suggestion: Omit<SuggestionOptions<WikiLinkItem>, 'editor'>;
}>({
  name: 'wikiLinks',

  addOptions() {
    return {
      suggestion: {
        char: '[[',
        allowSpaces: true,
        pluginKey: WikiLinkPluginKey,
        command: ({ editor, range, props }) => {
          const { state } = editor;
          const { from, to } = range;
          const docSize = state.doc.content.size;

          // Clean up any trailing closing brackets already inserted by auto-pairing
          const textAfter = state.doc.textBetween(to, Math.min(to + 2, docSize));
          let deleteTo = to;
          if (textAfter.startsWith(']]')) {
            deleteTo += 2;
          } else if (textAfter.startsWith(']')) {
            deleteTo += 1;
          }

          editor
            .chain()
            .focus()
            .deleteRange({ from, to: deleteTo })
            .insertContent(`[[${props.title}]] `)
            .run();
        },
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
      }),
    ];
  },
});
