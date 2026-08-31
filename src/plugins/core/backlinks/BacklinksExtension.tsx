/**
 * @module BacklinksExtension
 * @description
 * Built-in core extension that manages bidirectional backlinks and unlinked mentions.
 * Registers a right sidebar tab, in-document footer widget, status bar metric,
 * and document menu actions.
 *
 * Uses native FlintApp APIs for sidebar activation, toasts, and settings.
 *
 * @since 0.2.0
 */

import React from 'react';
import { Extension } from '@/core/extensions/Extension';
import { ExtensionManifest } from '@/core/extensions/types';
import { FlintApp } from '@/core/app/FlintApp';
import { LinkSquare02Icon } from '@/components/common/Icons';
import { useBacklinksSettings } from './backlinksSettings';
import { backlinksReadme } from './readme';

const LazyBacklinksView = React.lazy(() =>
  import('./BacklinksView').then((m) => ({ default: m.BacklinksView }))
);
const LazyDocumentBacklinks = React.lazy(() =>
  import('./DocumentBacklinks').then((m) => ({ default: m.DocumentBacklinks }))
);
const LazyBacklinksSettingsTab = React.lazy(() =>
  import('./BacklinksSettingsTab').then((m) => ({ default: m.BacklinksSettingsTab }))
);

export const BACKLINKS_MANIFEST: ExtensionManifest = {
  id: 'backlinks',
  name: 'Backlinks & Unlinked Mentions',
  version: '1.0.0',
  description: 'Displays incoming bidirectional backlinks and unlinked mentions to the active note.',
  author: 'Yuliet Li',
  isCore: true,
  tags: ['backlinks', 'mentions', 'wikilinks', 'graph', 'navigation'],
  readme: backlinksReadme,
};

const BacklinkCountItem: React.FC<{ app: FlintApp }> = ({ app }) => {
  const count = app.workspace.backlinkCount;
  return (
    <span className="text-[#777777] cursor-default select-none">
      {count} {count === 1 ? 'backlink' : 'backlinks'}
    </span>
  );
};

export class BacklinksExtension extends Extension {
  constructor(app: FlintApp, manifest: ExtensionManifest = BACKLINKS_MANIFEST) {
    super(app, manifest);
  }

  public onload(): void {
    // 1. Register Right Sidebar Tab
    this.registerSidebarTab({
      id: 'backlinks',
      title: 'Backlinks & Mentions',
      icon: <LinkSquare02Icon size={14} />,
      side: 'right',
      order: 20,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyBacklinksView />
        </React.Suspense>
      ),
    });

    // 2. Register Document Footer Widget (In-Note Backlinks)
    this.registerDocumentFooter({
      id: 'document-backlinks',
      order: 10,
      render: ({ documentId, documentTitle, document }) => {
        const { showBacklinksInDoc } = useBacklinksSettings.getState();
        if (!showBacklinksInDoc) return null;
        if (document?.is_folder || document?.doc_type === 'canvas') return null;
        return (
          <React.Suspense fallback={null}>
            <LazyDocumentBacklinks
              documentId={documentId}
              documentTitle={documentTitle || document?.title || 'Untitled'}
            />
          </React.Suspense>
        );
      },
    });

    // 3. Register Status Bar backlink count
    this.addStatusBarItem({
      id: 'backlink-count',
      alignment: 'right',
      order: 10,
      render: (app) => <BacklinkCountItem app={app} />,
    });

    // 4. Register Command to toggle in-document backlinks
    this.addCommand({
      id: 'cmd-toggle-backlinks-in-doc',
      title: 'Backlinks: Toggle backlinks in document',
      section: 'Backlinks',
      icon: <LinkSquare02Icon size={16} />,
      action: (app) => {
        const { showBacklinksInDoc, setShowBacklinksInDoc } = useBacklinksSettings.getState();
        const next = !showBacklinksInDoc;
        setShowBacklinksInDoc(next);
        app.workspace.showToast(
          next ? 'Backlinks in document enabled' : 'Backlinks in document disabled',
          'info'
        );
      },
    });

    // 5. Register Extension Settings Tab
    this.registerSettingTab({
      id: 'backlinks',
      name: 'Backlinks',
      icon: <LinkSquare02Icon size={14} />,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyBacklinksSettingsTab />
        </React.Suspense>
      ),
    });

    // 6. Register Document Menu Actions
    this.registerDocMenuAction({
      id: 'toggle-backlinks-in-doc',
      title: 'Backlinks in document',
      icon: <LinkSquare02Icon size={14} className="text-[#8b8e95] group-hover:text-white shrink-0" />,
      group: 'primary',
      order: 10,
      isChecked: () => useBacklinksSettings.getState().showBacklinksInDoc,
      onClick: (app) => {
        const { showBacklinksInDoc, setShowBacklinksInDoc } = useBacklinksSettings.getState();
        const next = !showBacklinksInDoc;
        setShowBacklinksInDoc(next);
        app.workspace.showToast(
          next ? 'Backlinks in document enabled' : 'Backlinks in document disabled',
          'info'
        );
      },
    });

    this.registerDocMenuAction({
      id: 'open-backlinks-view',
      title: 'Backlinks',
      group: 'linked-view',
      order: 10,
      onClick: (app) => {
        app.workspace.setActiveSidebarTab('right', 'backlinks');
        app.workspace.setSidebarOpen('right', true);
      },
    });

    this.registerDocMenuAction({
      id: 'open-outgoing-links-view',
      title: 'Outgoing links',
      group: 'linked-view',
      order: 20,
      onClick: (app) => {
        app.workspace.setActiveSidebarTab('right', 'backlinks');
        app.workspace.setSidebarOpen('right', true);
      },
    });
  }
}

// Backwards compatibility alias
export const BacklinksPlugin = BacklinksExtension;
export default BacklinksExtension;
