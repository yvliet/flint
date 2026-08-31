/**
 * @module CanvasExtension
 * @description
 * Built-in core extension providing an infinite 2D spatial canvas view.
 * Registers the canvas view, action rail button, command, settings tab,
 * and file tree action button.
 *
 * Uses native FlintApp APIs (app.workspace.setMainViewMode, app.hearth.createNewCanvas).
 *
 * @since 0.2.0
 */

import React from 'react';
import { Extension } from '@/core/extensions/Extension';
import { ExtensionManifest } from '@/core/extensions/types';
import { FlintApp } from '@/core/app/FlintApp';
import { Layout01Icon } from '@/components/common/Icons';
import { CanvasSettingsTab } from './CanvasSettingsTab';
import { canvasReadme } from './readme';

const LazyCanvasView = React.lazy(() =>
  import('./CanvasView').then((m) => ({ default: m.CanvasView }))
);

export const CANVAS_MANIFEST: ExtensionManifest = {
  id: 'canvas',
  name: 'Infinite Canvas',
  version: '1.0.0',
  description: 'Infinite 2D spatial canvas to map out notes, ideas, media, and visual cards.',
  author: 'Yuliet Li',
  isCore: true,
  tags: ['canvas', 'whiteboard', 'mindmap', 'spatial', 'visual'],
  readme: canvasReadme,
};

export class CanvasExtension extends Extension {
  constructor(app: FlintApp, manifest: ExtensionManifest = CANVAS_MANIFEST) {
    super(app, manifest);
  }

  public onload(): void {
    // 1. Register Main View
    this.registerView({
      type: 'canvas',
      title: 'Canvas',
      icon: <Layout01Icon size={14} />,
      render: () => (
        <React.Suspense fallback={<div className="w-full h-full bg-[#181818]" />}>
          <LazyCanvasView />
        </React.Suspense>
      ),
    });

    // 2. Register Action Rail item
    this.addActionRailIcon(
      'open-canvas',
      <Layout01Icon size={16} />,
      'Open spatial canvas',
      (app) => {
        app.workspace.setMainViewMode('canvas');
      },
      40
    );

    // 3. Register Command
    this.addCommand({
      id: 'cmd-open-canvas',
      title: 'Open spatial canvas',
      section: 'Navigation',
      icon: <Layout01Icon size={16} />,
      action: (app) => {
        app.workspace.setMainViewMode('canvas');
      },
    });

    // 4. Register Extension Settings Tab
    this.registerSettingTab({
      id: 'canvas-settings',
      name: 'Canvas',
      icon: <Layout01Icon size={14} />,
      render: () => <CanvasSettingsTab />,
    });

    // 5. Register File Tree Action (New canvas button)
    this.registerFileTreeAction({
      id: 'create-canvas',
      title: 'New canvas',
      icon: <Layout01Icon size={14} />,
      order: 20,
      onClick: async (app) => {
        await app.hearth.createNewCanvas();
        app.workspace.setMainViewMode('canvas');
      },
    });
  }
}

// Backwards compatibility alias
export const CanvasPlugin = CanvasExtension;
export default CanvasExtension;
