import { ModalDefinition, Disposable } from '../extensions/types';

export class ModalRegistry {
  private modals: Map<string, ModalDefinition> = new Map();
  private listeners: Set<() => void> = new Set();
  private cachedModals: ModalDefinition[] = [];

  public registerModal(modal: ModalDefinition): Disposable {
    this.modals.set(modal.id, modal);
    this.recomputeCache();
    this.notify();

    return {
      dispose: () => {
        this.unregisterModal(modal.id);
      },
    };
  }

  public unregisterModal(id: string): void {
    if (this.modals.delete(id)) {
      this.recomputeCache();
      this.notify();
    }
  }

  public getModal(id: string): ModalDefinition | undefined {
    return this.modals.get(id);
  }

  public getAllModals(): ModalDefinition[] {
    return this.cachedModals;
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
    this.cachedModals = Array.from(this.modals.values());
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error('[ModalRegistry] Error in listener:', err);
      }
    });
  }
}
