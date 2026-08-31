import { create } from 'zustand';
import { DocumentItem } from '@/types';
import { restoreTrashItem, moveToTrash } from '@/lib/db/trash';
import { updateDocumentTitle, updateInternalLinksAcrossDocuments, moveDocument as dbMoveDocument, getAllDocuments } from '@/lib/db/documents';
import { useDocumentStore } from './documentStore';
import { useWorkspaceStore } from './workspaceStore';
import { useSettingsStore } from './settingsStore';
import { bindFlintStores } from '@/core/app/FlintApp';

export interface DeleteFileAction {
  type: 'delete';
  items: DocumentItem[];
  activeDocIdBefore?: string | null;
  timestamp: number;
}

export interface RenameFileAction {
  type: 'rename';
  id: string;
  oldTitle: string;
  newTitle: string;
  timestamp: number;
}

export interface MoveFileAction {
  type: 'move';
  id: string;
  oldParentId: string | null;
  newParentId: string | null;
  title: string;
  oldTitle?: string;
  newTitle?: string;
  timestamp: number;
}

export type FileHistoryAction = DeleteFileAction | RenameFileAction | MoveFileAction;

interface FileHistoryState {
  undoStack: FileHistoryAction[];
  redoStack: FileHistoryAction[];
  isExecuting: boolean;

  recordDelete: (items: DocumentItem[], activeDocIdBefore?: string | null) => void;
  recordRename: (id: string, oldTitle: string, newTitle: string) => void;
  recordMove: (
    id: string,
    oldParentId: string | null,
    newParentId: string | null,
    title: string,
    oldTitle?: string,
    newTitle?: string
  ) => void;
  undo: () => Promise<boolean>;
  redo: () => Promise<boolean>;
  clearHistory: () => void;
}

const MAX_HISTORY_LENGTH = 50;

export const useFileHistoryStore = create<FileHistoryState>((set, get) => ({
  undoStack: [],
  redoStack: [],
  isExecuting: false,

  recordDelete: (items, activeDocIdBefore) => {
    if (!items || items.length === 0) return;
    set((state) => ({
      undoStack: [
        { type: 'delete', items, activeDocIdBefore, timestamp: Date.now() },
        ...state.undoStack.slice(0, MAX_HISTORY_LENGTH - 1),
      ],
      redoStack: [],
    }));
  },

  recordRename: (id, oldTitle, newTitle) => {
    if (!id || !oldTitle || !newTitle || oldTitle === newTitle) return;
    set((state) => ({
      undoStack: [
        { type: 'rename', id, oldTitle, newTitle, timestamp: Date.now() },
        ...state.undoStack.slice(0, MAX_HISTORY_LENGTH - 1),
      ],
      redoStack: [],
    }));
  },

  recordMove: (id, oldParentId, newParentId, title, oldTitle, newTitle) => {
    if (!id || oldParentId === newParentId) return;
    set((state) => ({
      undoStack: [
        { type: 'move', id, oldParentId, newParentId, title, oldTitle, newTitle, timestamp: Date.now() },
        ...state.undoStack.slice(0, MAX_HISTORY_LENGTH - 1),
      ],
      redoStack: [],
    }));
  },

  undo: async () => {
    const { undoStack, isExecuting } = get();
    if (isExecuting || undoStack.length === 0) return false;

    set({ isExecuting: true });
    const action = undoStack[0];
    const remainingUndo = undoStack.slice(1);

    try {
      if (action.type === 'delete') {
        const rootItem = action.items[0];
        if (rootItem) {
          await restoreTrashItem(rootItem.id);
          const docs = await getAllDocuments();
          useDocumentStore.setState({ documents: docs });

          if (action.activeDocIdBefore) {
            await useDocumentStore.getState().setActiveDocumentById(action.activeDocIdBefore);
          } else if (!rootItem.is_folder) {
            await useDocumentStore.getState().setActiveDocumentById(rootItem.id);
          }

          useWorkspaceStore.getState().showToast(`Restored "${rootItem.title}"`, 'success');
        }
      } else if (action.type === 'rename') {
        await updateDocumentTitle(action.id, action.oldTitle);

        const { autoUpdateLinks } = useSettingsStore.getState();
        if (autoUpdateLinks) {
          await updateInternalLinksAcrossDocuments(action.newTitle, action.oldTitle);
        }

        const docs = await getAllDocuments();
        const active = useDocumentStore.getState().activeDocument;
        useDocumentStore.setState({
          documents: docs,
          activeDocument: active && active.id === action.id ? { ...active, title: action.oldTitle } : active,
        });
        useWorkspaceStore.getState().updateTabTitle(action.id, action.oldTitle);
        useWorkspaceStore.getState().showToast(`Restored name to "${action.oldTitle}"`, 'success');
      } else if (action.type === 'move') {
        const titleToRestore = action.oldTitle || action.title;
        if (action.oldTitle && action.newTitle && action.oldTitle !== action.newTitle) {
          await updateDocumentTitle(action.id, action.oldTitle);
        }
        await dbMoveDocument(action.id, action.oldParentId);
        const docs = await getAllDocuments();
        const active = useDocumentStore.getState().activeDocument;
        useDocumentStore.setState({
          documents: docs,
          activeDocument: active && active.id === action.id ? { ...active, parent_id: action.oldParentId, title: titleToRestore } : active,
        });
        if (action.oldTitle && action.newTitle && action.oldTitle !== action.newTitle) {
          useWorkspaceStore.getState().updateTabTitle(action.id, action.oldTitle);
        }
        useWorkspaceStore.getState().showToast(`Restored position of "${titleToRestore}"`, 'success');
      }

      set((state) => ({
        undoStack: remainingUndo,
        redoStack: [action, ...state.redoStack.slice(0, MAX_HISTORY_LENGTH - 1)],
        isExecuting: false,
      }));
      return true;
    } catch (err) {
      console.error('[Flint History] Undo error:', err);
      set({ isExecuting: false });
      return false;
    }
  },

  redo: async () => {
    const { redoStack, isExecuting } = get();
    if (isExecuting || redoStack.length === 0) return false;

    set({ isExecuting: true });
    const action = redoStack[0];
    const remainingRedo = redoStack.slice(1);

    try {
      if (action.type === 'delete') {
        const rootItem = action.items[0];
        if (rootItem) {
          await moveToTrash(rootItem.id);
          const docs = await getAllDocuments();
          const active = useDocumentStore.getState().activeDocument;

          if (active?.id === rootItem.id) {
            const nextDoc = docs.find((d) => !d.is_folder && d.id !== rootItem.id);
            if (nextDoc) {
              await useDocumentStore.getState().setActiveDocumentById(nextDoc.id);
            } else {
              useDocumentStore.setState({ activeDocument: null, headings: [], backlinks: [] });
            }
          }
          useDocumentStore.setState({ documents: docs });
          useWorkspaceStore.getState().showToast(`Deleted "${rootItem.title}"`, 'info');
        }
      } else if (action.type === 'rename') {
        await updateDocumentTitle(action.id, action.newTitle);

        const { autoUpdateLinks } = useSettingsStore.getState();
        if (autoUpdateLinks) {
          await updateInternalLinksAcrossDocuments(action.oldTitle, action.newTitle);
        }

        const docs = await getAllDocuments();
        const active = useDocumentStore.getState().activeDocument;
        useDocumentStore.setState({
          documents: docs,
          activeDocument: active && active.id === action.id ? { ...active, title: action.newTitle } : active,
        });
        useWorkspaceStore.getState().updateTabTitle(action.id, action.newTitle);
        useWorkspaceStore.getState().showToast(`Renamed to "${action.newTitle}"`, 'success');
      } else if (action.type === 'move') {
        const titleToApply = action.newTitle || action.title;
        if (action.oldTitle && action.newTitle && action.oldTitle !== action.newTitle) {
          await updateDocumentTitle(action.id, action.newTitle);
        }
        await dbMoveDocument(action.id, action.newParentId);
        const docs = await getAllDocuments();
        const active = useDocumentStore.getState().activeDocument;
        useDocumentStore.setState({
          documents: docs,
          activeDocument: active && active.id === action.id ? { ...active, parent_id: action.newParentId, title: titleToApply } : active,
        });
        if (action.oldTitle && action.newTitle && action.oldTitle !== action.newTitle) {
          useWorkspaceStore.getState().updateTabTitle(action.id, action.newTitle);
        }
        useWorkspaceStore.getState().showToast(`Moved "${titleToApply}"`, 'success');
      }

      set((state) => ({
        redoStack: remainingRedo,
        undoStack: [action, ...state.undoStack.slice(0, MAX_HISTORY_LENGTH - 1)],
        isExecuting: false,
      }));
      return true;
    } catch (err) {
      console.error('[Flint History] Redo error:', err);
      set({ isExecuting: false });
      return false;
    }
  },

  clearHistory: () => set({ undoStack: [], redoStack: [] }),
}));

bindFlintStores({ fileHistory: useFileHistoryStore });

