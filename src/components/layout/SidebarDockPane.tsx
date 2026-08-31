import React, { useMemo } from 'react';
import { useSidebarDockStore, DockZone } from '@/store/sidebarDockStore';
import { useFlintApp, useSidebarTabs } from '@/core/app/AppContext';
import { EditorCanvas } from '@/components/editor/EditorCanvas';

interface SidebarDockPaneProps {
  zone: DockZone;
}

export const SidebarDockPane: React.FC<SidebarDockPaneProps> = React.memo(({ zone }) => {
  const app = useFlintApp();
  const items = useSidebarDockStore((s) => s.items);
  const activeItemId = useSidebarDockStore((s) => s.activeItemByZone[zone]);
  const side = zone.startsWith('left') ? 'left' : 'right';
  const sidebarTabs = useSidebarTabs(side);

  const activeItem = useMemo(() => {
    return items.find((it) => it.id === activeItemId && it.zone === zone && it.enabled) || null;
  }, [items, activeItemId, zone]);

  if (!activeItem) {
    return (
      <div className="flex-1 flex items-center justify-center text-xs text-[var(--flint-text-muted)] select-none">
        No active panel
      </div>
    );
  }

  // 1. If it is a document, render full editable EditorCanvas
  if (activeItem.type === 'document' && activeItem.documentId) {
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



  // 2. If it is an extension view, render the registered extension component
  const extTab = sidebarTabs.find(
    (t) => t.id === activeItem.id || t.id === activeItem.viewType || t.id.endsWith(`:${activeItem.id}`)
  );

  if (extTab) {
    return (
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {extTab.render(app)}
      </div>
    );
  }

  // 3. Check general views
  const viewDef = app.views.getView(activeItem.viewType || activeItem.id);
  if (viewDef) {
    return (
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {viewDef.render({ tabId: activeItem.id, documentId: activeItem.documentId, app })}
      </div>
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center text-xs text-[var(--flint-text-muted)] select-none">
      Panel content unavailable
    </div>
  );
});
