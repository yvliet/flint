import {
  PropertyTypeDefinition,
  PropertyFilterDefinition,
  PropertyIconDefinition,
  Disposable,
} from '../extensions/types';

export class PropertyRegistry {
  private types: Map<string, PropertyTypeDefinition> = new Map();
  private filters: Map<string, PropertyFilterDefinition> = new Map();
  private icons: Map<string, PropertyIconDefinition> = new Map();
  private listeners: Set<() => void> = new Set();

  private cachedTypes: PropertyTypeDefinition[] = [];
  private cachedFilters: PropertyFilterDefinition[] = [];
  private cachedIcons: PropertyIconDefinition[] = [];

  public registerPropertyType(def: PropertyTypeDefinition): Disposable {
    this.types.set(def.id, def);
    this.recomputeTypes();
    this.notify();

    return {
      dispose: () => {
        this.types.delete(def.id);
        this.recomputeTypes();
        this.notify();
      },
    };
  }

  public registerPropertyFilter(def: PropertyFilterDefinition): Disposable {
    this.filters.set(def.id, def);
    this.recomputeFilters();
    this.notify();

    return {
      dispose: () => {
        this.filters.delete(def.id);
        this.recomputeFilters();
        this.notify();
      },
    };
  }

  public registerPropertyIcon(def: PropertyIconDefinition): Disposable {
    this.icons.set(def.id, def);
    this.recomputeIcons();
    this.notify();

    return {
      dispose: () => {
        this.icons.delete(def.id);
        this.recomputeIcons();
        this.notify();
      },
    };
  }

  public getPropertyTypes(): PropertyTypeDefinition[] {
    return this.cachedTypes;
  }

  public findPropertyType(key: string): PropertyTypeDefinition | undefined {
    return this.cachedTypes.find((t) => t.matchKey(key));
  }

  public getPropertyFilters(): PropertyFilterDefinition[] {
    return this.cachedFilters;
  }

  public getPropertyIcons(): PropertyIconDefinition[] {
    return this.cachedIcons;
  }

  public subscribe(listener: () => void): Disposable {
    this.listeners.add(listener);
    return {
      dispose: () => {
        this.listeners.delete(listener);
      },
    };
  }

  private recomputeTypes(): void {
    this.cachedTypes = Array.from(this.types.values());
  }

  private recomputeFilters(): void {
    this.cachedFilters = Array.from(this.filters.values());
  }

  private recomputeIcons(): void {
    this.cachedIcons = Array.from(this.icons.values());
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error('[PropertyRegistry] Error in listener:', err);
      }
    });
  }
}
