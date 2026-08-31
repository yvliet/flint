import { StatusBarItem, Disposable } from '../extensions/types';

export class StatusBarRegistry {
  private items: Map<string, StatusBarItem> = new Map();
  private listeners: Set<() => void> = new Set();
  private cachedAll: StatusBarItem[] = [];
  private cachedLeft: StatusBarItem[] = [];
  private cachedRight: StatusBarItem[] = [];

  public registerStatusBarItem(item: StatusBarItem): Disposable {
    this.items.set(item.id, item);
    this.recomputeCaches();
    this.notify();

    return {
      dispose: () => {
        this.unregisterStatusBarItem(item.id);
      },
    };
  }

  public unregisterStatusBarItem(id: string): void {
    if (this.items.delete(id)) {
      this.recomputeCaches();
      this.notify();
    }
  }

  public getItems(alignment?: 'left' | 'right'): StatusBarItem[] {
    if (alignment === 'left') return this.cachedLeft;
    if (alignment === 'right') return this.cachedRight;
    return this.cachedAll;
  }

  public subscribe(listener: () => void): Disposable {
    this.listeners.add(listener);
    return {
      dispose: () => {
        this.listeners.delete(listener);
      },
    };
  }

  private recomputeCaches(): void {
    const list = Array.from(this.items.values()).sort((a, b) => (a.order ?? 50) - (b.order ?? 50));
    this.cachedAll = list;
    this.cachedLeft = list.filter((i) => i.alignment === 'left');
    this.cachedRight = list.filter((i) => (i.alignment || 'right') === 'right');
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error('[StatusBarRegistry] Error in listener:', err);
      }
    });
  }
}
