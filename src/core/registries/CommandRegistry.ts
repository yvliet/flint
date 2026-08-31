import { CommandItem, Disposable } from '../extensions/types';

export class CommandRegistry {
  private commands: Map<string, CommandItem> = new Map();
  private listeners: Set<() => void> = new Set();
  private cachedCommands: CommandItem[] = [];

  public registerCommand(command: CommandItem): Disposable {
    this.commands.set(command.id, command);
    this.recomputeCache();
    this.notify();

    return {
      dispose: () => {
        this.unregisterCommand(command.id);
      },
    };
  }

  public unregisterCommand(id: string): void {
    if (this.commands.delete(id)) {
      this.recomputeCache();
      this.notify();
    }
  }

  public getCommand(id: string): CommandItem | undefined {
    return this.commands.get(id);
  }

  public getAllCommands(): CommandItem[] {
    return this.cachedCommands;
  }

  public async executeCommand(id: string, app: any): Promise<boolean> {
    const cmd = this.commands.get(id);
    if (!cmd) return false;
    try {
      await cmd.action(app);
      return true;
    } catch (err) {
      console.error(`[CommandRegistry] Error executing command ${id}:`, err);
      return false;
    }
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
    this.cachedCommands = Array.from(this.commands.values());
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error('[CommandRegistry] Error in listener:', err);
      }
    });
  }
}
