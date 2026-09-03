import React from 'react';
import { useSettingsStore } from '@/store/settingsStore';
import { useDocumentStore } from '@/store/documentStore';

export const BROKEN_EMBED_TOOLTIP_NOTE =
  'Missing or broken attachment/embed detected in this note.\nYou can disable this alert in Settings > Files and links.';

export const BROKEN_EMBED_TOOLTIP_FOLDER =
  'This folder contains notes with missing or broken attachments/embeds.\nYou can disable this alert in Settings > Files and links.';

export interface BrokenEmbedIndicatorProps {
  documentId?: string | null;
  isFolder?: boolean;
  hasBroken?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

/**
 * Reusable indicator that alerts the user when an embedded image/file in a note
 * (or within any note in a folder) is missing or broken.
 */
export const BrokenEmbedIndicator: React.FC<BrokenEmbedIndicatorProps> = React.memo(
  ({ documentId, isFolder = false, hasBroken, position = 'bottom', className = '' }) => {
    const show = useSettingsStore((s) => s.showBrokenEmbedIndicators);
    const brokenIds = useDocumentStore((s) => s.brokenEmbedDocIds);

    if (!show) return null;

    const isVisible =
      hasBroken !== undefined ? hasBroken : Boolean(documentId && brokenIds.has(documentId));

    if (!isVisible) return null;

    return (
      <span
        data-tooltip={isFolder ? BROKEN_EMBED_TOOLTIP_FOLDER : BROKEN_EMBED_TOOLTIP_NOTE}
        data-tooltip-position={position}
        style={{ width: 6, height: 6, minWidth: 6, minHeight: 6, maxWidth: 6, maxHeight: 6, aspectRatio: '1 / 1' }}
        className={`w-[6px] h-[6px] min-w-[6px] min-h-[6px] max-w-[6px] max-h-[6px] aspect-square rounded-full bg-amber-400 shrink-0 select-none cursor-help ${className}`}
        aria-label="Broken embed alert"
      />
    );
  }
);

BrokenEmbedIndicator.displayName = 'BrokenEmbedIndicator';
