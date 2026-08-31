/**
 * @module BookmarksExtension
 * @description
 * Built-in core extension for bookmarking notes and searches for 1-click sidebar access.
 *
 * Uses native FlintApp APIs (app.hearth.toggleBookmark, app.workspace.setActiveSidebarTab, app.workspace.showToast).
 *
 * @since 0.1.0
 */

import React from 'react';
import { Extension } from '@/core/extensions/Extension';
import { ExtensionManifest } from '@/core/extensions/types';
import { FlintApp } from '@/core/app/FlintApp';
import { Bookmark01Icon } from '@/components/common/Icons';
import { bookmarksReadme } from './readme';

const LazyBookmarksView = React.lazy(() =>
  import('./BookmarksView').then((m) => ({ default: m.BookmarksView }))
);
const LazyBookmarksSettingsTab = React.lazy(() =>
  import('./BookmarksSettingsTab').then((m) => ({ default: m.BookmarksSettingsTab }))
);

export const BOOKMARKS_MANIFEST: ExtensionManifest = {
  id: 'bookmarks',
  name: 'Bookmarks',
  version: '1.0.0',
  description: 'Bookmark important notes and searches for fast 1-click access in your workspace sidebar.',
  author: 'Yuliet Li',
  isCore: true,
  tags: ['bookmarks', 'favorites', 'pinned', 'sidebar', 'workspace'],
  readme: bookmarksReadme,
};

export class BookmarksExtension extends Extension {
  constructor(app: FlintApp, manifest: ExtensionManifest = BOOKMARKS_MANIFEST) {
    super(app, manifest);
  }

  public onload(): void {
    // 1. Register Left Sidebar Tab
    this.registerSidebarTab({
      id: 'bookmarks',
      title: 'Bookmarks',
      icon: <Bookmark01Icon size={14} />,
      side: 'left',
      order: 20,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyBookmarksView />
        </React.Suspense>
      ),
    });

    // 2. Register Toggle Bookmark Command
    this.addCommand({
      id: 'cmd-toggle-bookmark',
      title: 'Toggle bookmark for active note',
      section: 'Navigation',
      icon: <Bookmark01Icon size={16} />,
      hotkey: 'Ctrl+Shift+B',
      action: async (app) => {
        const activeDoc = app.vault.activeDocument;
        if (activeDoc) {
          const isNowBookmarked = await app.vault.toggleBookmark(activeDoc.id);
          app.workspace.showToast(
            isNowBookmarked ? `Bookmarked "${activeDoc.title}"` : `Removed bookmark for "${activeDoc.title}"`,
            'info'
          );
        }
      },
    });

    // 3. Register Open Bookmarks View Command
    this.addCommand({
      id: 'cmd-open-bookmarks-view',
      title: 'Open Bookmarks sidebar tab',
      section: 'Navigation',
      icon: <Bookmark01Icon size={16} />,
      action: (app) => {
        app.workspace.setActiveSidebarTab('left', 'bookmarks');
      },
    });

    // 4. Register Extension Settings Tab
    this.registerSettingTab({
      id: 'bookmarks-settings',
      name: 'Bookmarks',
      icon: <Bookmark01Icon size={14} />,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyBookmarksSettingsTab />
        </React.Suspense>
      ),
    });
  }
}

// Backwards-compat alias
export const BookmarksPlugin = BookmarksExtension;
