/**
 * @module TablesExtension
 * @description
 * Built-in core extension for inserting and formatting interactive table blocks.
 * Registers settings tabs and editor insertion commands.
 *
 * @since 0.1.0
 */

import React from 'react';
import { Extension } from '@/core/extensions/Extension';
import { ExtensionManifest } from '@/core/extensions/types';
import { FlintApp } from '@/core/app/FlintApp';
import { TableIcon } from '@/components/common/Icons';
import { tablesReadme } from './readme';
import { useTablesSettings } from './tablesSettings';

const LazyTablesSettingsTab = React.lazy(() =>
  import('./TablesSettingsTab').then((m) => ({ default: m.TablesSettingsTab }))
);

export const TABLES_MANIFEST: ExtensionManifest = {
  id: 'tables',
  name: 'Table Blocks',
  version: '1.0.0',
  description: 'Create and format interactive tables with a Google Docs-style grid dimension picker, AI Markdown interoperability, and rich column resizing.',
  author: 'Yuliet Li',
  isCore: true,
  tags: ['tables', 'grid', 'gdocs', 'markdown', 'formatting'],
  readme: tablesReadme,
};

export class TablesExtension extends Extension {
  constructor(app: FlintApp, manifest: ExtensionManifest = TABLES_MANIFEST) {
    super(app, manifest);
  }

  public onload(): void {
    // 1. Register Extension Settings Tab in Settings Window
    this.registerSettingTab({
      id: 'tables-settings',
      name: 'Table Blocks',
      icon: <TableIcon size={14} />,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyTablesSettingsTab />
        </React.Suspense>
      ),
    });

    // 2. Register Command Palette Command
    this.addCommand({
      id: 'editor:insert-table',
      title: 'Insert table block',
      icon: <TableIcon size={14} />,
      action: (app) => {
        const { defaultRows, defaultCols } = useTablesSettings.getState();
        app.events.emit('editor:action', { action: 'insert-table', payload: { rows: defaultRows, cols: defaultCols } });
        window.dispatchEvent(new CustomEvent('flint:insert-table-command', { detail: { rows: defaultRows, cols: defaultCols } }));
      },
    });

    // 3. Register Slash Command
    this.registerSlashCommand({
      title: 'Table',
      description: 'Insert a customizable table',
      icon: 'table',
      command: ({ editor, range }: any) => {
        const { defaultRows, defaultCols } = useTablesSettings.getState();
        editor
          .chain()
          .focus()
          .deleteRange(range)
          .insertTable({ rows: defaultRows || 3, cols: defaultCols || 3, withHeaderRow: false })
          .run();
      },
    });
  }
}

// Backwards-compat alias
export const TablesPlugin = TablesExtension;
