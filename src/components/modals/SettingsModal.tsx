import React from 'react';
import { useWorkspaceStore } from '@/store/workspaceStore';
import { SettingsWindowContent } from '@/components/settings/SettingsWindow';

export const SettingsModal: React.FC = React.memo(() => {
  const isSettingsOpen = useWorkspaceStore((state) => state.isSettingsOpen);
  const setIsSettingsOpen = useWorkspaceStore((state) => state.setIsSettingsOpen);
  const settingsInitialTab = useWorkspaceStore((state) => state.settingsInitialTab);

  if (!isSettingsOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsSettingsOpen(false);
        }
      }}
    >
      <SettingsWindowContent isModal initialTab={settingsInitialTab || undefined} onClose={() => setIsSettingsOpen(false)} />
    </div>
  );
});
