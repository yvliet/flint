import { PluginSettingTab, Disposable } from '../extensions/types';

export class SettingRegistry {
  private tabs: Map<string, PluginSettingTab> = new Map();
  private listeners: Set<() => void> = new Set();
  private cachedTabs: PluginSettingTab[] = [];

  public registerSettingTab(tab: PluginSettingTab): Disposable {
    this.tabs.set(tab.id, tab);
    this.recomputeCache();
    this.notify();

    return {
      dispose: () => {
        this.unregisterSettingTab(tab.id);
      },
    };
  }

  public unregisterSettingTab(id: string): void {
    if (this.tabs.delete(id)) {
      this.recomputeCache();
      this.notify();
    }
  }

  public getTabs(): PluginSettingTab[] {
    return this.cachedTabs;
  }

  public getTab(id: string): PluginSettingTab | undefined {
    return this.tabs.get(id);
  }

  public subscribe(listener: () => void): Disposable {
    this.listeners.add(listener);
    return {
      dispose: () => {
        this.listeners.delete(listener);
      },
    };
  }

  private recomputeCache(): void {
    this.cachedTabs = Array.from(this.tabs.values());
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error('[SettingRegistry] Error in listener:', err);
      }
    });
  }
}
