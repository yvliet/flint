import React, { useCallback, useMemo } from 'react';
import { PageSubHeader } from '@/components/layout/PageSubHeader';
import { Alert02Icon, RotateCcwIcon, PlusSignIcon, Cancel01Icon } from '@/components/common/Icons';
import { useWorkspaceStore } from '@/store/workspaceStore';
import { useDocumentStore } from '@/store/documentStore';

export interface DeadDocumentViewProps {
  paneId: string;
  tabId: string;
  documentId: string;
  title?: string;
}

export const DeadDocumentView: React.FC<DeadDocumentViewProps> = React.memo(({
  paneId,
  tabId,
  documentId,
  title,
}) => {
  const displayTitle = title || 'Untitled';
  const trashItems = useDocumentStore((s) => s.trashItems);
  const restoreFromTrash = useDocumentStore((s) => s.restoreFromTrash);
  const createNewNote = useDocumentStore((s) => s.createNewNote);
  const showToast = useWorkspaceStore((s) => s.showToast);
  const closeTabInPane = useWorkspaceStore((s) => s.closeTabInPane);
  const openTabInPane = useWorkspaceStore((s) => s.openTabInPane);

  const matchingTrashItem = useMemo(() => {
    return trashItems.find(
      (t) =>
        t.original_id === documentId ||
        t.id === documentId ||
        (t.title && t.title.toLowerCase() === displayTitle.toLowerCase())
    );
  }, [trashItems, documentId, displayTitle]);

  const handleRestore = useCallback(async (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!matchingTrashItem) return;
    try {
      await restoreFromTrash(matchingTrashItem.id);
    } catch (err) {
      console.error('[DeadDocumentView] Error restoring note:', err);
      showToast(`Failed to restore "${displayTitle}"`, 'warning');
    }
  }, [matchingTrashItem, restoreFromTrash, displayTitle, showToast]);

  const handleRecreate = useCallback(async (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    try {
      const newDoc = await createNewNote(displayTitle, null, 'base', false);
      if (newDoc) {
        openTabInPane(paneId, newDoc.id, newDoc.title, { id: tabId });
        showToast(`Created new note "${newDoc.title}"`, 'success');
      }
    } catch (err) {
      console.error('[DeadDocumentView] Error recreating note:', err);
      showToast(`Failed to recreate "${displayTitle}"`, 'warning');
    }
  }, [createNewNote, displayTitle, openTabInPane, paneId, tabId, showToast]);

  const handleCloseTab = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    closeTabInPane(paneId, tabId);
  }, [closeTabInPane, paneId, tabId]);

  return (
    <div className="w-full h-full flex flex-col min-w-0 overflow-hidden font-sans select-none bg-[var(--flint-bg-main)]">
      {/* 1. Subheader with warning banner and quick action */}
      <PageSubHeader
        title={displayTitle}
        icon={<Alert02Icon size={14} className="text-amber-400" />}
        centerContent={
          <div className="text-[11px] text-[var(--flint-text-muted)] truncate max-w-lg px-2 py-0.5 text-center select-none flex items-center justify-center gap-1.5 font-sans">
            <Alert02Icon size={12} className="text-amber-400 shrink-0" />
            <span className="truncate">
              This file <strong className="text-[var(--flint-text-secondary)] font-medium">{displayTitle}</strong> has been deleted or cannot be found.{' '}
              {matchingTrashItem ? (
                <button
                  type="button"
                  onClick={handleRestore}
                  className="text-[var(--flint-accent)] hover:underline font-medium cursor-pointer transition-colors bg-transparent border-0 p-0 inline ml-1"
                >
                  Restore it back?
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleRecreate}
                  className="text-[var(--flint-accent)] hover:underline font-medium cursor-pointer transition-colors bg-transparent border-0 p-0 inline ml-1"
                >
                  Recreate note?
                </button>
              )}
            </span>
          </div>
        }
        showReadingToggle={false}
        showBookmark={false}
        showSearch={false}
        showDocOptions={false}
      />

      {/* 2. Main Body: Actionable Dead Tab Recovery Card */}
      <div className="flex-1 w-full h-full flex flex-col items-center justify-center select-none p-6 gap-3 bg-[var(--flint-bg-main)]">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-1">
          <Alert02Icon size={24} className="text-amber-400" />
        </div>
        <div className="text-sm font-semibold text-[var(--flint-text-primary)]">
          "{displayTitle}" was deleted
        </div>
        <div className="text-xs text-[var(--flint-text-muted)] max-w-sm text-center leading-relaxed">
          This file is no longer available in your Hearth. You can restore it from trash, recreate it as a new note, or close this tab.
        </div>
        <div className="flex items-center gap-2 mt-2">
          {matchingTrashItem && (
            <button
              type="button"
              onClick={handleRestore}
              className="px-3.5 py-1.5 bg-[var(--flint-accent)] hover:brightness-110 active:brightness-95 text-white text-xs font-semibold rounded-[5px] shadow-[0_1px_2px_rgba(0,0,0,0.35)] border border-black/20 cursor-pointer transition-all flex items-center gap-1.5"
            >
              <RotateCcwIcon size={12} />
              <span>Restore from trash</span>
            </button>
          )}
          <button
            type="button"
            onClick={handleRecreate}
            className="px-3.5 py-1.5 bg-[#2a2a2a] hover:bg-[#333333] active:bg-[#222222] border border-[#383838] hover:border-[#484848] text-[#dcddde] hover:text-white text-xs font-medium rounded-[5px] shadow-[0_1px_2px_rgba(0,0,0,0.35)] cursor-pointer transition-all flex items-center gap-1.5"
          >
            <PlusSignIcon size={12} />
            <span>Recreate note</span>
          </button>
          <button
            type="button"
            onClick={handleCloseTab}
            className="px-3.5 py-1.5 bg-[#2a2a2a] hover:bg-[#333333] active:bg-[#222222] border border-[#383838] hover:border-[#484848] text-[#dcddde] hover:text-white text-xs font-medium rounded-[5px] shadow-[0_1px_2px_rgba(0,0,0,0.35)] cursor-pointer transition-all flex items-center gap-1.5"
          >
            <Cancel01Icon size={12} />
            <span>Close tab</span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default DeadDocumentView;
