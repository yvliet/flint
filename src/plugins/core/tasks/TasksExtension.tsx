/**
 * @module TasksExtension
 * @description
 * Built-in core extension aggregating todo items and checklists across all hearth notes.
 * Registers the tasks dashboard view, action rail launcher, navigation command, and settings tab.
 *
 * Uses native FlintApp APIs (app.workspace.setMainViewMode).
 *
 * @since 0.2.0
 */

import React from 'react';
import { Extension } from '@/core/extensions/Extension';
import { ExtensionManifest } from '@/core/extensions/types';
import { FlintApp } from '@/core/app/FlintApp';
import { CheckmarkSquare02Icon } from '@/components/common/Icons';
import { tasksReadme } from './readme';

const LazyTasksView = React.lazy(() =>
  import('./TasksView').then((m) => ({ default: m.TasksView }))
);
const LazyTasksSettingsTab = React.lazy(() =>
  import('./TasksSettingsTab').then((m) => ({ default: m.TasksSettingsTab }))
);

export const TASKS_MANIFEST: ExtensionManifest = {
  id: 'tasks',
  name: 'Tasks & Checklists',
  version: '1.0.0',
  description: 'Global task aggregation dashboard extracting checklists and todo items across all notes.',
  author: 'Yuliet Li',
  isCore: true,
  tags: ['tasks', 'todo', 'checklists', 'productivity', 'tracking'],
  readme: tasksReadme,
};

export class TasksExtension extends Extension {
  constructor(app: FlintApp, manifest: ExtensionManifest = TASKS_MANIFEST) {
    super(app, manifest);
  }

  public onload(): void {
    // 1. Register Main View
    this.registerView({
      type: 'tasks',
      title: 'Tasks Center',
      icon: <CheckmarkSquare02Icon size={14} />,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyTasksView />
        </React.Suspense>
      ),
    });

    // 2. Register Action Rail item
    this.addActionRailIcon(
      'open-tasks-view',
      <CheckmarkSquare02Icon size={16} />,
      'Open tasks center',
      (app) => {
        app.workspace.setMainViewMode('tasks');
      },
      60
    );

    // 3. Register Command
    this.addCommand({
      id: 'cmd-open-tasks',
      title: 'Open tasks center',
      section: 'Navigation',
      icon: <CheckmarkSquare02Icon size={16} />,
      action: (app) => {
        app.workspace.setMainViewMode('tasks');
      },
    });

    // 4. Register Extension Settings Tab
    this.registerSettingTab({
      id: 'tasks-settings',
      name: 'Tasks',
      icon: <CheckmarkSquare02Icon size={14} />,
      render: () => (
        <React.Suspense fallback={null}>
          <LazyTasksSettingsTab />
        </React.Suspense>
      ),
    });
  }
}

// Backwards compatibility alias
export const TasksPlugin = TasksExtension;
export default TasksExtension;
