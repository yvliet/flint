import React from 'react';
import { useCascadeSettings } from './cascadeSettings';
import { CascadeIcon } from './cascadeIcons';
import { ToggleSwitch } from '@/components/common/ToggleSwitch';
import { CommandIcon, BookOpen01Icon } from '@/components/common/Icons';

export const CascadeSettingsTab: React.FC = () => {
  const {
    showInStatusBar,
    setShowInStatusBar,
    autoRenameSuffix,
    setAutoRenameSuffix,
    prevPageHotkey,
    nextPageHotkey,
  } = useCascadeSettings();

  return (
    <div className="p-6 max-w-2xl space-y-6 text-sm text-[var(--flint-text-primary,#dcddde)] font-sans">
      {/* Plugin Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-[var(--flint-border-base,#333)]">
        <div className="w-10 h-10 rounded-xl bg-[#2a2a2a] text-[#dcddde] flex items-center justify-center shadow-inner">
          <CascadeIcon size={22} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            Cascade
            <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-[#2a2a2a] text-[#aaa] border border-[#383838]">
              by Yuliet Li
            </span>
          </h2>
          <p className="text-xs text-[var(--flint-text-muted,#888)]">
            Create structured books of notes with status-bar linking, sequential navigation, and graph backlinks.
          </p>
        </div>
      </div>

      {/* Settings Group: Behavior & Organization */}
      <div className="space-y-4">
        <h3 className="text-xs uppercase font-bold tracking-wider text-[var(--flint-text-muted,#888)]">
          Behavior & Display
        </h3>

        {/* Show in Status Bar */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--flint-bg-card,#222)] border border-[var(--flint-border-subtle,#2e2e2e)]">
          <div className="space-y-0.5 pr-4">
            <div className="font-medium text-white flex items-center gap-1.5">
              <CascadeIcon size={14} className="text-[#aaa]" />
              Status bar cascade item
            </div>
            <div className="text-xs text-[var(--flint-text-muted,#888)] leading-relaxed">
              Show the interactive Cascade icon in the status bar to link notes and adjust page numbers.
            </div>
          </div>
          <ToggleSwitch
            checked={showInStatusBar}
            onChange={setShowInStatusBar}
          />
        </div>

        {/* Automatic [n] Title Suffix */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--flint-bg-card,#222)] border border-[var(--flint-border-subtle,#2e2e2e)]">
          <div className="space-y-0.5 pr-4">
            <div className="font-medium text-white flex items-center gap-1.5">
              <BookOpen01Icon size={14} className="text-[#aaa]" />
              Automatic [n] title suffix
            </div>
            <div className="text-xs text-[var(--flint-text-muted,#888)] leading-relaxed">
              Automatically append or update “ [n]” at the end of the note title (e.g. “Untitled [1]”) when assigned to a cascade page.
            </div>
          </div>
          <ToggleSwitch
            checked={autoRenameSuffix}
            onChange={setAutoRenameSuffix}
          />
        </div>
      </div>

      {/* Settings Group: Hotkeys & Shortcuts */}
      <div className="space-y-3 pt-2">
        <h3 className="text-xs uppercase font-bold tracking-wider text-[var(--flint-text-muted,#888)]">
          Default Hotkeys
        </h3>

        <div className="p-3 rounded-lg bg-[var(--flint-bg-card,#222)] border border-[var(--flint-border-subtle,#2e2e2e)] space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#aaa]">Previous Page in Cascade</span>
            <kbd className="px-2 py-0.5 rounded bg-[#181818] border border-[#333] font-mono text-[11px] text-[#dcddde]">
              {prevPageHotkey}
            </kbd>
          </div>

          <div className="flex items-center justify-between text-xs border-t border-[#2a2a2a] pt-2">
            <span className="text-[#aaa]">Next Page in Cascade</span>
            <kbd className="px-2 py-0.5 rounded bg-[#181818] border border-[#333] font-mono text-[11px] text-[#dcddde]">
              {nextPageHotkey}
            </kbd>
          </div>

          <div className="text-[11px] text-[#777] pt-1">
            Note: You can rebind these hotkeys at any time in Flint's Hotkeys settings tab.
          </div>
        </div>
      </div>

      {/* How it works note */}
      <div className="p-3.5 rounded-lg bg-[#202020] border border-[#2e2e2e] text-xs text-[#aaa] space-y-1.5">
        <div className="font-semibold text-white flex items-center gap-1.5">
          <CommandIcon size={13} />
          Cascade Properties & Graph Links
        </div>
        <p className="text-[11px] text-[#888] leading-relaxed">
          Cascaded notes store a <code className="bg-[#181818] px-1 py-0.5 rounded text-white font-mono">Cascade Page</code> property (and optional <code className="bg-[#181818] px-1 py-0.5 rounded text-white font-mono">Cascade</code> book name). Deleting this property automatically removes the note from the cascade. All pages in a cascade are connected as backlinks in the Graph View without modifying your note content.
        </p>
      </div>
    </div>
  );
};
