import React, { useMemo } from 'react';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { AppShell } from '@/components/layout/AppShell';
import { SettingsWindow } from '@/components/settings/SettingsWindow';

export function App() {
  const { windowMode, initialTab } = useMemo(() => {
    if (typeof window === 'undefined') return { windowMode: 'main', initialTab: undefined };
    const params = new URLSearchParams(window.location.search);
    return {
      windowMode: params.get('window') || 'main',
      initialTab: params.get('tab') || undefined,
    };
  }, []);

  if (windowMode === 'settings') {
    return (
      <ErrorBoundary>
        <SettingsWindow initialTab={initialTab} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <AppShell />
    </ErrorBoundary>
  );
}

export default App;


