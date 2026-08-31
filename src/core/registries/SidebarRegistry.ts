import {
  SidebarTabDefinition,
  FileTreeActionDefinition,
  FileTreeSectionDefinition,
  FileTreeItemDecorator,
  Disposable,
} from '../extensions/types';

export class SidebarRegistry {
  private tabs: Map<string, SidebarTabDefinition> = new Map();
  private fileTreeActions: Map<string, FileTreeActionDefinition> = new Map();
  private fileTreeSections: Map<string, FileTreeSectionDefinition> = new Map();
  private fileTreeDecorators: Map<string, FileTreeItemDecorator> = new Map();
  private listeners: Set<() => void> = new Set();
  private cachedAll: SidebarTabDefinition[] = [];
  private cachedLeft: SidebarTabDefinition[] = [];
  private cachedRight: SidebarTabDefinition[] = [];
  private cachedFileTreeActions: FileTreeActionDefinition[] = [];
  private cachedFileTreeSections: FileTreeSectionDefinition[] = [];
  private cachedFileTreeDecorators: FileTreeItemDecorator[] = [];

  public registerSidebarTab(tab: SidebarTabDefinition): Disposable {
    this.tabs.set(tab.id, tab);
    this.recomputeCaches();
    this.notify();

    return {
      dispose: () => {
        this.unregisterSidebarTab(tab.id);
      },
    };
  }

  public unregisterSidebarTab(id: string): void {
    if (this.tabs.delete(id)) {
      this.recomputeCaches();
      this.notify();
    }
  }

  public getTabs(side?: 'left' | 'right'): SidebarTabDefinition[] {
    if (side === 'left') return this.cachedLeft;
    if (side === 'right') return this.cachedRight;
    return this.cachedAll;
  }

  public getTab(id: string): SidebarTabDefinition | undefined {
    return this.tabs.get(id);
  }

  public registerFileTreeAction(action: FileTreeActionDefinition): Disposable {
    this.fileTreeActions.set(action.id, action);
    this.recomputeFileTreeActions();
    this.notify();

    return {
      dispose: () => {
        this.fileTreeActions.delete(action.id);
        this.recomputeFileTreeActions();
        this.notify();
      },
    };
  }

  public getFileTreeActions(): FileTreeActionDefinition[] {
    return this.cachedFileTreeActions;
  }

  public registerFileTreeSection(section: FileTreeSectionDefinition): Disposable {
    this.fileTreeSections.set(section.id, section);
    this.recomputeFileTreeSections();
    this.notify();

    return {
      dispose: () => {
        this.fileTreeSections.delete(section.id);
        this.recomputeFileTreeSections();
        this.notify();
      },
    };
  }

  public getFileTreeSections(): FileTreeSectionDefinition[] {
    return this.cachedFileTreeSections;
  }

  public registerFileTreeDecorator(decorator: FileTreeItemDecorator): Disposable {
    this.fileTreeDecorators.set(decorator.id, decorator);
    this.recomputeFileTreeDecorators();
    this.notify();

    return {
      dispose: () => {
        this.fileTreeDecorators.delete(decorator.id);
        this.recomputeFileTreeDecorators();
        this.notify();
      },
    };
  }

  public getFileTreeDecorators(): FileTreeItemDecorator[] {
    return this.cachedFileTreeDecorators;
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
    const list = Array.from(this.tabs.values()).sort((a, b) => (a.order ?? 50) - (b.order ?? 50));
    this.cachedAll = list;
    this.cachedLeft = list.filter((t) => t.side === 'left');
    this.cachedRight = list.filter((t) => t.side === 'right');
  }

  private recomputeFileTreeActions(): void {
    this.cachedFileTreeActions = Array.from(this.fileTreeActions.values()).sort((a, b) => (a.order ?? 50) - (b.order ?? 50));
  }

  private recomputeFileTreeSections(): void {
    this.cachedFileTreeSections = Array.from(this.fileTreeSections.values()).sort((a, b) => (a.order ?? 50) - (b.order ?? 50));
  }

  private recomputeFileTreeDecorators(): void {
    this.cachedFileTreeDecorators = Array.from(this.fileTreeDecorators.values());
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error('[SidebarRegistry] Error in listener:', err);
      }
    });
  }
}
