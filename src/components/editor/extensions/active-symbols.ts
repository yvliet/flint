import { Extension } from '@tiptap/core';
import { PluginKey } from '@tiptap/pm/state';

export const ActiveSymbolsPluginKey = new PluginKey('activeSymbols');

/**
 * @deprecated Consolidated into ActiveBlockSymbols in active-block-symbols.ts
 */
export const ActiveSymbols = Extension.create({
  name: 'activeSymbols',
});

