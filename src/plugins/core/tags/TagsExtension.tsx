/**
 * @module TagsExtension
 * @description
 * Built-in core extension that parses hashtag taxonomy across all hearth documents
 * and renders an interactive hierarchical nested tags tree in the right sidebar.
 *
 * @since 0.2.0
 */

import React from 'react';
import { Extension } from '@/core/extensions/Extension';
import { ExtensionManifest } from '@/core/extensions/types';
import { FlintApp } from '@/core/app/FlintApp';
import { Tag01Icon } from '@/components/common/Icons';
import { tagsReadme } from './readme';

const LazyTagsView = React.lazy(() =>
  import('./TagsView').then((m) => ({ default: m.TagsView }))
);
const LazyTagsSettingsTab = React.lazy(() =>
  import('./TagsSettingsTab').then((m) => ({ default: m.TagsSettingsTab }))
);

export const TAGS_MANIFEST: ExtensionManifest = {
  id: 'tags-explorer',
  name: 'Tags Explorer',
  version: '1.0.0',
  description: 'Hierarchical nested tags tree view across all documents in the hearth.',
  author: 'Yuliet Li',
  isCore: true,
  tags: ['tags', 'categories', 'organization', 'taxonomy', 'explorer'],
  readme: tagsReadme,
};

export class TagsExtension extends Extension {
  constructor(app: FlintApp, manifest: ExtensionManifest = TAGS_MANIFEST) {
    super(app, manifest);
  }

  public onload(): void {
    // 1. Register Right Sidebar Tab
    this.registerSidebarTab({
      id: 'tags',
      title: 'Tags Explorer',
      icon: <Tag01Icon size={14} />,
      side: 'right',
      order: 30,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyTagsView />
        </React.Suspense>
      ),
    });

    // 2. Register Extension Settings Tab
    this.registerSettingTab({
      id: 'tags-settings',
      name: 'Tags explorer',
      icon: <Tag01Icon size={14} />,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyTagsSettingsTab />
        </React.Suspense>
      ),
    });
  }
}

// Backwards compatibility alias
export const TagsPlugin = TagsExtension;
export default TagsExtension;
