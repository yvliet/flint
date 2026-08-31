/**
 * @module ViewRegistry
 * @description
 * Registry for custom workspace views rendered in the main content area.
 * Plugins register views during onload(), and the workspace router
 * renders the appropriate view based on the active tab's view_type.
 *
 * Tracks plugin ownership dynamically to handle views from disabled
 * or uninstalled plugins gracefully.
 *
 * @since 0.1.0
 */

import { ViewDefinition, Disposable } from '../extensions/types';

export class ViewRegistry {
  private views: Map<string, ViewDefinition> = new Map();
  private listeners: Set<() => void> = new Set();
  private cachedViews: ViewDefinition[] = [];

  /**
   * Dynamic mapping from view type string to owning plugin metadata.
   * Populated automatically when plugins register views — no hardcoded entries.
   */
  private viewTypeToPlugin: Map<string, { pluginId: string; title?: string }> = new Map();

  /**
   * Registers a new custom view definition.
   *
   * @param view - View configuration including type key, title, icon, and render function.
   * @returns A Disposable to unregister the view.
   * @since 0.1.0
   */
  public registerView(view: ViewDefinition): Disposable {
    this.views.set(view.type, view);
    if (view.pluginId) {
      this.viewTypeToPlugin.set(view.type, { pluginId: view.pluginId, title: view.title });
    }
    this.recomputeCache();
    this.notify();

    return {
      dispose: () => {
        this.unregisterView(view.type);
      },
    };
  }

  /**
   * Unregisters a view definition by its type key.
   *
   * @param type - Unique view type key.
   * @since 0.1.0
   */
  public unregisterView(type: string): void {
    if (this.views.delete(type)) {
      this.recomputeCache();
      this.notify();
    }
  }

  /**
   * Retrieves ownership information for a view type (for disabled plugin placeholders).
   *
   * @param type - View type key.
   * @since 0.1.0
   */
  public getViewPluginInfo(type: string): { pluginId: string; title?: string } | undefined {
    return this.viewTypeToPlugin.get(type);
  }

  /**
   * Explicitly associates a view type with a plugin identifier.
   *
   * @param type - View type key.
   * @param pluginId - Owning plugin ID.
   * @param title - Display title for placeholder states.
   * @since 0.1.0
   */
  public registerViewPluginMapping(type: string, pluginId: string, title?: string): void {
    this.viewTypeToPlugin.set(type, { pluginId, title });
  }

  /**
   * Retrieves a registered view definition by its type key.
   *
   * @param type - View type key.
   * @since 0.1.0
   */
  public getView(type: string): ViewDefinition | undefined {
    return this.views.get(type);
  }

  /**
   * Returns a snapshot array of all currently registered active views.
   * @since 0.1.0
   */
  public getAllViews(): ViewDefinition[] {
    return this.cachedViews;
  }

  /**
   * Subscribes to changes in the view registry (additions/removals).
   *
   * @param listener - Callback invoked on registry changes.
   * @returns A Disposable to cancel the subscription.
   * @since 0.1.0
   */
  public subscribe(listener: () => void): Disposable {
    this.listeners.add(listener);
    return {
      dispose: () => {
        this.listeners.delete(listener);
      },
    };
  }

  private recomputeCache(): void {
    this.cachedViews = Array.from(this.views.values());
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error('[ViewRegistry] Error in listener:', err);
      }
    });
  }
}
