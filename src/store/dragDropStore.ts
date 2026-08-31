import { create } from 'zustand';
import { DocumentItem } from '@/types';

interface DragDropState {
  draggedItem: DocumentItem | null;
  dragOverFolderId: string | null; // null represents none or root
  isTargetValid: boolean;

  setDraggedItem: (item: DocumentItem | null) => void;
  setDragOverFolder: (folderId: string | null, isValid?: boolean) => void;
  resetDragState: () => void;
}

export const useDragDropStore = create<DragDropState>((set, get) => ({
  draggedItem: null,
  dragOverFolderId: null,
  isTargetValid: true,

  setDraggedItem: (item) => {
    if (get().draggedItem?.id !== item?.id) {
      set({ draggedItem: item });
    }
  },

  setDragOverFolder: (folderId, isValid = true) => {
    const state = get();
    if (state.dragOverFolderId !== folderId || state.isTargetValid !== isValid) {
      set({ dragOverFolderId: folderId, isTargetValid: isValid });
    }
  },

  resetDragState: () => {
    const state = get();
    if (state.draggedItem !== null || state.dragOverFolderId !== null) {
      set({
        draggedItem: null,
        dragOverFolderId: null,
        isTargetValid: true,
      });
    }
  },
}));
