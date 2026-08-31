/**
 * @module MarketplaceExtension
 * @description
 * Built-in core extension for discovering, browsing, and installing community extensions.
 * Registers the marketplace tab view, action rail icon button, and settings tab.
 *
 * Uses native FlintApp APIs (app.workspace.openCustomTab, app.workspace.getTabs).
 *
 * @since 0.1.0
 */

import React from 'react';
import { Extension } from '@/core/extensions/Extension';
import { ExtensionManifest } from '@/core/extensions/types';
import { FlintApp } from '@/core/app/FlintApp';
import { Store01Icon } from '@/components/common/Icons';
import { marketplaceReadme } from './readme';

const LazyMarketplaceView = React.lazy(() =>
  import('./MarketplaceView').then((m) => ({ default: m.MarketplaceView }))
);
const LazyMarketplaceSettingsTab = React.lazy(() =>
  import('./MarketplaceSettingsTab').then((m) => ({ default: m.MarketplaceSettingsTab }))
);

export const MARKETPLACE_MANIFEST: ExtensionManifest = {
  id: 'plugin-marketplace',
  name: 'Community Extensions Marketplace',
  version: '1.0.0',
  description: 'Browse, discover, and install community extensions into your Hearth.',
  author: 'Yuliet Li',
  isCore: true,
  tags: ['marketplace', 'extensions', 'community', 'plugins', 'themes'],
  readme: marketplaceReadme,
};

export class MarketplaceExtension extends Extension {
  constructor(app: FlintApp, manifest: ExtensionManifest = MARKETPLACE_MANIFEST) {
    super(app, manifest);
  }

  public onload(): void {
    // 1. Register Main Marketplace View
    this.registerView({
      type: 'marketplace',
      title: 'Marketplace',
      icon: <Store01Icon size={14} />,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyMarketplaceView />
        </React.Suspense>
      ),
    });

    // 2. Register Action Rail item
    this.addActionRailIcon(
      'open-marketplace',
      <Store01Icon size={16} />,
      'Extensions Marketplace',
      (app) => {
        app.workspace.openCustomTab({
          viewType: 'marketplace',
          title: 'Marketplace',
          icon: <Store01Icon size={14} />,
        });
      },
      65,
      (app) => {
        const tabs = app.workspace.getTabs();
        const activeTabId = app.workspace.activeTabId;
        const mainViewMode = app.workspace.mainViewMode;
        const currentTab = tabs.find((t) => t.id === activeTabId);
        return (
          currentTab?.view_type === 'marketplace' ||
          currentTab?.view_mode === 'marketplace' ||
          mainViewMode === 'marketplace'
        );
      }
    );

    // 3. Register Command
    this.addCommand({
      id: 'cmd-open-marketplace',
      title: 'Marketplace: Browse extension marketplace',
      section: 'Navigation',
      icon: <Store01Icon size={16} />,
      action: (app) => {
        app.workspace.openCustomTab({
          viewType: 'marketplace',
          title: 'Marketplace',
          icon: <Store01Icon size={14} />,
        });
      },
    });

    // 4. Register Extension Settings Tab
    this.registerSettingTab({
      id: 'marketplace-settings',
      name: 'Community extensions',
      icon: <Store01Icon size={14} />,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyMarketplaceSettingsTab />
        </React.Suspense>
      ),
    });
  }
}

// Backwards-compat alias
export const MarketplacePlugin = MarketplaceExtension;
