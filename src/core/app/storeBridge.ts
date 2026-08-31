/**
 * @module storeBridge
 * @description
 * Zero-dependency bridge connecting internal Zustand state stores to the FlintApp
 * singleton. Kept in an isolated module to prevent circular dependency TDZ errors
 * during ES module evaluation.
 *
 * @since 0.2.0
 */

export interface StoreGetter<T = any> {
  getState: () => T;
}

export const storeRefs: {
  workspace: StoreGetter | null;
  document: StoreGetter | null;
  contextMenu: StoreGetter | null;
  settings: StoreGetter | null;
  fileHistory: StoreGetter | null;
} = {
  workspace: null,
  document: null,
  contextMenu: null,
  settings: null,
  fileHistory: null,
};

/**
 * Connects internal Zustand state stores to the FlintApp bridge.
 *
 * @param stores - Map of store getters.
 * @since 0.1.0
 */
export function bindFlintStores(stores: {
  workspace?: StoreGetter;
  document?: StoreGetter;
  contextMenu?: StoreGetter;
  settings?: StoreGetter;
  fileHistory?: StoreGetter;
}): void {
  if (stores.workspace) storeRefs.workspace = stores.workspace;
  if (stores.document) storeRefs.document = stores.document;
  if (stores.contextMenu) storeRefs.contextMenu = stores.contextMenu;
  if (stores.settings) storeRefs.settings = stores.settings;
  if (stores.fileHistory) storeRefs.fileHistory = stores.fileHistory;
}
