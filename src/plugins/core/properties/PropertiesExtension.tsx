/**
 * @module PropertiesExtension
 * @description
 * Built-in core extension managing structured YAML frontmatter note properties.
 * Registers the properties sidebar tab, in-document header editor, and doc menu action.
 *
 * Uses native FlintApp APIs (app.workspace.setActiveSidebarTab, app.workspace.showToast).
 *
 * @since 0.1.0
 */

import React from 'react';
import { Extension } from '@/core/extensions/Extension';
import { ExtensionManifest } from '@/core/extensions/types';
import { FlintApp } from '@/core/app/FlintApp';
import { PackageIcon, PlusCircleIcon } from '@/components/common/Icons';
import { propertiesReadme } from './readme';
import { PropertiesView } from './PropertiesView';
import { DocumentPropertiesHeader } from './DocumentPropertiesHeader';
import { PropertiesSettingsTab } from './PropertiesSettingsTab';

export const PROPERTIES_MANIFEST: ExtensionManifest = {
  id: 'note-properties',
  name: 'Note Properties',
  version: '1.0.0',
  description: 'Structured frontmatter metadata and property fields editor.',
  author: 'Yuliet Li',
  isCore: true,
  tags: ['properties', 'frontmatter', 'yaml', 'metadata', 'editor'],
  readme: propertiesReadme,
};

export class PropertiesExtension extends Extension {
  constructor(app: FlintApp, manifest: ExtensionManifest = PROPERTIES_MANIFEST) {
    super(app, manifest);
  }

  public onload(): void {
    // 1. Register Right Sidebar Tab
    this.registerSidebarTab({
      id: 'properties',
      title: 'Properties',
      icon: <PackageIcon size={14} />,
      side: 'right',
      order: 40,
      render: () => <PropertiesView />,
    });

    // 2. Register In-Document Properties Header Widget
    this.registerDocumentHeader({
      id: 'note-properties-header',
      order: 10,
      render: ({ documentId, mode, isFolded }) => {
        if (isFolded) return null;
        return <DocumentPropertiesHeader documentId={documentId} mode={mode} isFolded={isFolded} />;
      },
    });

    // 3. Register Extension Settings Tab
    this.registerSettingTab({
      id: 'properties-settings',
      name: 'Properties',
      icon: <PackageIcon size={14} />,
      render: () => <PropertiesSettingsTab />,
    });

    // 4. Register Document Menu Action
    this.registerDocMenuAction({
      id: 'add-file-property',
      title: 'Add file property',
      icon: <PlusCircleIcon size={14} className="text-[#8b8e95] group-hover:text-white shrink-0" />,
      group: 'tools',
      order: 30,
      onClick: (app) => {
        app.workspace.setActiveSidebarTab('right', 'properties');
        app.workspace.showToast('Opened properties panel', 'info');
      },
    });
  }
}

// Backwards-compat alias
export const PropertiesPlugin = PropertiesExtension;
