const { contextBridge, ipcRenderer, webFrame } = require('electron');

// Lock visual zoom level limits to disable Chromium window visual pinch zooming
try {
  webFrame.setVisualZoomLevelLimits(1, 1);
} catch (e) {}

contextBridge.exposeInMainWorld('electronAPI', {
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close: () => ipcRenderer.send('window-close'),
  isMaximized: () => ipcRenderer.invoke('is-window-maximized'),
  isMaximizedSync: () => {
    try {
      return ipcRenderer.sendSync('is-window-maximized-sync');
    } catch {
      return false;
    }
  },
  onMaximizedChange: (callback) => {
    const listener = (event, isMaximized) => callback(isMaximized);
    ipcRenderer.on('window-maximized-change', listener);
    return () => ipcRenderer.removeListener('window-maximized-change', listener);
  },
  openVaultWindow: () => ipcRenderer.invoke('open-vault-window'),
  closeVaultWindow: () => ipcRenderer.invoke('close-vault-window'),
  openSettingsWindow: () => ipcRenderer.invoke('open-settings-window'),
  closeSettingsWindow: () => ipcRenderer.invoke('close-settings-window'),
  onVaultChanged: (callback) => {
    const listener = (event, data) => callback(data);
    ipcRenderer.on('vault-changed', listener);
    return () => ipcRenderer.removeListener('vault-changed', listener);
  },
  getCurrentVault: () => ipcRenderer.invoke('get-current-vault'),
  selectVaultFolder: () => ipcRenderer.invoke('select-vault-folder'),
  selectParentFolder: () => ipcRenderer.invoke('select-parent-folder'),
  createNewVault: (name, parentPath) => ipcRenderer.invoke('create-new-vault', { name, parentPath }),
  removeRecentVault: (vaultPath) => ipcRenderer.invoke('remove-recent-vault', vaultPath),
  setCurrentVault: (vaultPath) => ipcRenderer.invoke('set-current-vault', vaultPath),
  openVaultInExplorer: (vaultPath) => ipcRenderer.invoke('open-vault-in-explorer', vaultPath),
  saveDatabase: (bytes) => ipcRenderer.invoke('save-database', bytes),
  loadDatabase: () => ipcRenderer.invoke('load-database'),
  onVaultFilesChanged: (callback) => {
    const listener = () => callback();
    ipcRenderer.on('vault-files-changed', listener);
    return () => ipcRenderer.removeListener('vault-files-changed', listener);
  },
  scanVaultFiles: (customVaultPath) => ipcRenderer.invoke('scan-vault-files', customVaultPath),
  saveMarkdownFile: (filename, content, relativePath) =>
    ipcRenderer.invoke('save-markdown-file', { filename, content, relativePath }),
  deleteMarkdownFile: (filenameOrPath) => ipcRenderer.invoke('delete-markdown-file', filenameOrPath),
  renameMarkdownFile: (oldFilename, newFilename, oldRelativePath, newRelativePath) =>
    ipcRenderer.invoke('rename-markdown-file', { oldFilename, newFilename, oldRelativePath, newRelativePath }),
  openPluginsFolder: () => ipcRenderer.invoke('open-plugins-folder'),
  openTrashFolder: () => ipcRenderer.invoke('open-trash-folder'),
  saveTrashFile: (filename, content, relativePath) =>
    ipcRenderer.invoke('save-trash-file', { filename, content, relativePath }),
  deleteTrashFile: (filenameOrPath) => ipcRenderer.invoke('delete-trash-file', filenameOrPath),
  emptyTrashFolder: () => ipcRenderer.invoke('empty-trash-folder'),
  listInstalledPlugins: () => ipcRenderer.invoke('list-installed-plugins'),
  readPluginBundle: (pluginFolder) => ipcRenderer.invoke('read-plugin-bundle', pluginFolder),
  setZoomFactor: (factor) => webFrame.setZoomFactor(factor),
  getZoomFactor: () => webFrame.getZoomFactor(),
  setWindowTitle: (title) => ipcRenderer.send('window-set-title', title),
  isElectron: true,
});


