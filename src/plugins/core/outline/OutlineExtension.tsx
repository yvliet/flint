/**
 * @module OutlineExtension
 * @description
 * Built-in core extension rendering a document outline and table of contents
 * in the right sidebar tab based on Markdown headings in the active note.
 *
 * @since 0.1.0
 */

import React from 'react';
import { Extension } from '@/core/extensions/Extension';
import { ExtensionManifest } from '@/core/extensions/types';
import { FlintApp } from '@/core/app/FlintApp';
import { LeftToRightListBulletIcon } from '@/components/common/Icons';
import { outlineReadme } from './readme';

const LazyOutlineView = React.lazy(() =>
  import('./OutlineView').then((m) => ({ default: m.OutlineView }))
);
const LazyOutlineSettingsTab = React.lazy(() =>
  import('./OutlineSettingsTab').then((m) => ({ default: m.OutlineSettingsTab }))
);

export const OUTLINE_MANIFEST: ExtensionManifest = {
  id: 'outline',
  name: 'Document Outline',
  version: '1.0.0',
  description: 'Interactive table of contents and document outline navigator based on Markdown headings.',
  author: 'Yuliet Li',
  isCore: true,
  tags: ['outline', 'headings', 'toc', 'navigation', 'structure'],
  readme: outlineReadme,
};

export class OutlineExtension extends Extension {
  constructor(app: FlintApp, manifest: ExtensionManifest = OUTLINE_MANIFEST) {
    super(app, manifest);
  }

  public onload(): void {
    // 1. Register Right Sidebar Tab
    this.registerSidebarTab({
      id: 'outline',
      title: 'Outline',
      icon: <LeftToRightListBulletIcon size={14} />,
      side: 'right',
      order: 10,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyOutlineView />
        </React.Suspense>
      ),
    });

    // 2. Register Extension Settings Tab
    this.registerSettingTab({
      id: 'outline-settings',
      name: 'Outline',
      icon: <LeftToRightListBulletIcon size={14} />,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyOutlineSettingsTab />
        </React.Suspense>
      ),
    });
  }
}

// Backwards-compat alias
export const OutlinePlugin = OutlineExtension;
