import React, { useMemo } from 'react';
import { useSidebarDockStore, DockZone } from '@/store/sidebarDockStore';
import { useFlintApp, useSidebarTabs, useViews, usePluginList } from '@/core/app/AppContext';
import { EditorCanvas } from '@/components/editor/EditorCanvas';

const LazyDisabledExtensionView = React.lazy(() =>
  import('@/components/extension-viewer/DisabledExtensionView').then((m) => ({ default: m.DisabledExtensionView }))
);

interface SidebarDockPaneProps {
  zone: DockZone;
}

export const SidebarDockPane: React.FC<SidebarDockPaneProps> = React.memo(({ zone }) => {
  const app = useFlintApp();
  useViews(); // Reactive updates on view registrations
  usePluginList(); // Reactive updates on plugin state changes
  const items = useSidebarDockStore((s) => s.items);
  const activeItemId = useSidebarDockStore((s) => s.activeItemByZone[zone]);
  const leftTabs = useSidebarTabs('left');
  const rightTabs = useSidebarTabs('right');

  const activeItem = useMemo(() => {
    const direct = items.find((it) => it.id === activeItemId && it.zone === zone && it.enabled);
    if (direct) return direct;
    const zoneItems = items
      .filter((it) => it.zone === zone && it.enabled)
      .sort((a, b) => (a.order ?? 50) - (b.order ?? 50));
    return zoneItems.length > 0 ? zoneItems[0] : null;
  }, [items, activeItemId, zone]);

  if (!activeItem) {
    return (
      <div className="flex-1 flex items-center justify-center text-xs text-[var(--flint-text-muted)] select-none">
        No active panel
      </div>
    );
  }

  // 1. If it is a real document, render full editable EditorCanvas
  const isDoc =
    (activeItem.type === 'document' || activeItem.id.startsWith('doc:')) &&
    activeItem.documentId &&
    !activeItem.documentId.startsWith('__');

  if (isDoc && activeItem.documentId) {
    return (
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <EditorCanvas
          key={`sidebar-canvas-${zone}-${activeItem.documentId}`}
          pane="split"
          paneId={`sidebar:${zone}`}
          documentId={activeItem.documentId}
          isSidebar={true}
        />
      </div>
    );
  }

  // 2. If it is a registered sidebar tab extension (Outline, Bookmarks, Backlinks, etc.)
  const allSidebarTabs = [...leftTabs, ...rightTabs];
  const extTab = allSidebarTabs.find(
    (t) =>
      t.id === activeItem.id ||
      t.id === activeItem.viewType ||
      t.id.endsWith(`:${activeItem.id}`) ||
      (activeItem.id.includes(':') && t.id === activeItem.id.split(':')[1])
  );

  if (extTab) {
    return (
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {extTab.render(app)}
      </div>
    );
  }

  // 3. If it is a workspace view (Graph View, Canvas, Marketplace, Tasks, Flashcards, etc.)
  const viewType =
    activeItem.viewType ||
    (activeItem.id.startsWith('view:') ? activeItem.id.slice(5) : activeItem.id);

  if (viewType && viewType !== 'document') {
    const pluginState = app.plugins.getViewPluginState(viewType);
    if (pluginState.state === 'active') {
      return (
        <div data-sidebar-dock-pane="true" className="flex-1 flex flex-col h-full overflow-hidden relative">
          {pluginState.view.render({
            tabId: activeItem.id,
            documentId: activeItem.documentId || `__${viewType}__`,
            app,
            isSidebar: true,
          } as any)}
        </div>
      );
    }
    if (pluginState.state === 'disabled') {
      return (
        <div data-sidebar-dock-pane="true" className="flex-1 flex flex-col h-full overflow-hidden relative">
          <React.Suspense fallback={null}>
            <LazyDisabledExtensionView
              extensionId={pluginState.pluginId}
              extensionName={pluginState.manifest.name}
              viewTitle={pluginState.viewTitle}
              tabId={activeItem.id}
            />
          </React.Suspense>
        </div>
      );
    }

    const regView = app.views.getView(viewType);
    if (regView) {
      return (
        <div data-sidebar-dock-pane="true" className="flex-1 flex flex-col h-full overflow-hidden relative">
          {regView.render({
            tabId: activeItem.id,
            documentId: activeItem.documentId || `__${viewType}__`,
            app,
            isSidebar: true,
          } as any)}
        </div>
      );
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center text-xs text-[var(--flint-text-muted)] select-none">
      Panel content unavailable
    </div>
  );
});
