import React, { useCallback } from 'react';
import { useSidebarDockStore, DockZone, DockItem } from '@/store/sidebarDockStore';
import { useSidebarTabs } from '@/core/app/AppContext';
import { StickyNote02Icon, Cancel01Icon, Folder01Icon, Search01Icon } from '@/components/common/Icons';

import { useAppContextMenu, ContextMenuItem } from '@/components/common/ContextMenu';
import { useWorkspaceStore } from '@/store/workspaceStore';
import { useDockReorder } from '@/hooks/useTabReorder';

interface SidebarSecondaryIconBarProps {
  zone: 'left-bottom' | 'right-bottom';
}

export const SidebarSecondaryIconBar: React.FC<SidebarSecondaryIconBarProps> = React.memo(({ zone }) => {
  const items = useSidebarDockStore((s) => s.items);
  const activeItemId = useSidebarDockStore((s) => s.activeItemByZone[zone]);
  const setActiveItemInZone = useSidebarDockStore((s) => s.setActiveItemInZone);
  const undockItem = useSidebarDockStore((s) => s.undockItem);
  const moveItemToZone = useSidebarDockStore((s) => s.moveItemToZone);
  const toggleItemEnabled = useSidebarDockStore((s) => s.toggleItemEnabled);
  const openTabInPane = useWorkspaceStore((s) => s.openTabInPane);
  const focusedPaneId = useWorkspaceStore((s) => s.focusedPaneId);
  const { showContextMenu } = useAppContextMenu();

  const side = zone.startsWith('left') ? 'left' : 'right';
  const sidebarTabs = useSidebarTabs(side);

  const zoneItems = items
    .filter((it) => it.zone === zone && it.enabled)
    .sort((a, b) => (a.order ?? 50) - (b.order ?? 50));

  const allItemsInSide = items.filter((it) => it.zone.startsWith(side));

  const dockReorder = useDockReorder({
    zone,
    items: zoneItems,
    getDisplayTitle: (it) => it.title,
  });

  const renderIcon = (item: DockItem) => {
    if (item.type === 'document') {
      return <StickyNote02Icon size={14} />;
    }
    const extTab = sidebarTabs.find((t) => t.id === item.id || t.id === item.viewType);
    if (extTab?.icon && React.isValidElement(extTab.icon)) {
      return React.cloneElement(extTab.icon as React.ReactElement<any>, {
        size: 15,
      });
    }
    return extTab?.icon || <Folder01Icon size={15} />;
  };

  const getSidebarExtensionList = useCallback(() => {
    const list: Array<{ id: string; title: string; icon: React.ReactNode }> = [];
    if (side === 'left') {
      list.push({ id: 'files', title: 'Files & folders', icon: <Folder01Icon size={14} /> });
      list.push({ id: 'search', title: 'Search', icon: <Search01Icon size={14} /> });
      sidebarTabs.forEach((t) => {
        list.push({ id: t.id, title: t.title, icon: t.icon || <Folder01Icon size={14} /> });
      });
    } else {
      sidebarTabs.forEach((t) => {
        list.push({ id: t.id, title: t.title, icon: t.icon || <Folder01Icon size={14} /> });
      });
    }
    return list;
  }, [side, sidebarTabs]);

  const handleContextMenu = useCallback(
    (e: React.MouseEvent, item: DockItem) => {
      e.preventDefault();
      e.stopPropagation();

      const targetTopZone: DockZone = side === 'left' ? 'left-top' : 'right-top';

      const menuItems: ContextMenuItem[] = [
        {
          id: 'move-to-top',
          title: 'Move to top zone',
          onClick: () => moveItemToZone(item.id, targetTopZone),
        },
      ];

      if (item.type === 'document' && item.documentId) {
        menuItems.push({
          id: 'open-in-center',
          title: 'Open in editor pane',
          onClick: () => {
            openTabInPane(focusedPaneId || 'main', item.documentId!);
          },
        });
        menuItems.push({
          id: 'remove-dock',
          title: 'Remove from sidebar',
          isDanger: true,
          onClick: () => undockItem(item.id),
        });
      } else {
        menuItems.push({
          id: 'hide-dock',
          title: 'Hide from sidebar',
          isDanger: true,
          onClick: () => toggleItemEnabled(item.id, false),
        });
      }

      menuItems.push({
        id: 'sep-tabs',
        type: 'separator',
      });

      const extList = getSidebarExtensionList();
      extList.forEach((ext) => {
        const dockItem = items.find(
          (it) => it.id === ext.id || it.extensionId === ext.id || it.viewType === ext.id
        );
        const isInThisZone = dockItem ? dockItem.zone === zone && dockItem.enabled : false;

        menuItems.push({
          id: `toggle-${ext.id}`,
          title: ext.title,
          icon: ext.icon,
          checked: isInThisZone,
          onClick: () => {
            if (isInThisZone) {
              if (dockItem) toggleItemEnabled(dockItem.id, false);
            } else {
              if (dockItem) {
                moveItemToZone(dockItem.id, zone);
                toggleItemEnabled(dockItem.id, true);
              } else {
                useSidebarDockStore.getState().dockTab(
                  { id: ext.id, title: ext.title, view_type: ext.id } as any,
                  zone
                );
              }
            }
          },
        });
      });

      showContextMenu(e, menuItems);
    },
    [side, zone, moveItemToZone, openTabInPane, focusedPaneId, undockItem, toggleItemEnabled, getSidebarExtensionList, items, showContextMenu]
  );

  const handleBarContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const extList = getSidebarExtensionList();

      const menuItems: ContextMenuItem[] = [
        {
          id: 'tabs-header',
          title: `${side === 'left' ? 'Left' : 'Right'} sidebar tabs`,
          disabled: true,
        },
        ...extList.map((ext) => {
          const dockItem = items.find(
            (it) => it.id === ext.id || it.extensionId === ext.id || it.viewType === ext.id
          );
          const isInThisZone = dockItem ? dockItem.zone === zone && dockItem.enabled : false;

          return {
            id: `toggle-${ext.id}`,
            title: ext.title,
            icon: ext.icon,
            checked: isInThisZone,
            onClick: () => {
              if (isInThisZone) {
                if (dockItem) toggleItemEnabled(dockItem.id, false);
              } else {
                if (dockItem) {
                  moveItemToZone(dockItem.id, zone);
                  toggleItemEnabled(dockItem.id, true);
                } else {
                  useSidebarDockStore.getState().dockTab(
                    { id: ext.id, title: ext.title, view_type: ext.id } as any,
                    zone
                  );
                }
              }
            },
          };
        }),
      ];


      showContextMenu(e, menuItems);
    },
    [side, getSidebarExtensionList, items, toggleItemEnabled, showContextMenu]
  );



  if (zoneItems.length === 0) return null;

  return (
    <div
      data-dock-zone={zone}
      onContextMenu={handleBarContextMenu}
      style={{
        background: '#151515',
        borderTop: '1px solid var(--flint-border-base)',
        borderBottom: '1px solid var(--flint-border-base)',
      }}
      className="h-[38px] px-2 flex items-center justify-between shrink-0 select-none z-10 relative"
    >
      <div
        ref={dockReorder.containerRef}
        className="flex items-center gap-0.5 min-w-0 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden relative"
      >

        {zoneItems.map((item, index) => {
          const isActive = activeItemId === item.id;
          return (
            <button
              key={item.id}
              ref={(el) => dockReorder.registerItemRef(index, el)}
              onPointerDown={(e) => dockReorder.handlePointerDown(index, e)}
              onClick={() => {
                if (dockReorder.hasDragged()) return;
                setActiveItemInZone(zone, item.id);
              }}
              onContextMenu={(e) => handleContextMenu(e, item)}
              title={item.title}
              className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
                isActive
                  ? 'text-[var(--flint-text-secondary)] bg-[var(--flint-bg-card-hover)]'
                  : 'text-[var(--flint-text-muted)] hover:text-[var(--flint-text-primary)] hover:bg-[var(--flint-bg-card-hover)]'
              }`}
            >
              {renderIcon(item)}
            </button>
          );
        })}

        {dockReorder.dropIndicatorLeft !== null && (
          <div
            style={{
              left: `${dockReorder.dropIndicatorLeft}px`,
            }}
            className="absolute top-1/2 -translate-y-1/2 w-[3px] h-[20px] bg-white rounded-full pointer-events-none z-50 shadow-[0_0_4px_rgba(255,255,255,0.6)]"
          />
        )}
      </div>

      <button
        onClick={() => {
          // Move all bottom items to top zone
          const targetTopZone: DockZone = side === 'left' ? 'left-top' : 'right-top';
          zoneItems.forEach((it) => moveItemToZone(it.id, targetTopZone));
        }}
        title="Collapse bottom split"
        className="w-7 h-7 rounded-md flex items-center justify-center text-[var(--flint-text-muted)] hover:text-[var(--flint-text-primary)] hover:bg-[var(--flint-bg-card-hover)] transition-colors cursor-pointer shrink-0"
      >
        <Cancel01Icon size={13} />
      </button>
    </div>
  );
});

