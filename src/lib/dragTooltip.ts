export const STICKY_NOTE_02_SVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dcdcdc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M11.5 5C14.3284 5 15.7426 5 16.6213 5.87868C17.5 6.75736 17.5 8.17157 17.5 11C17.5 19 21.5 19 21.5 19H7.23863C6.91067 19 6.74668 19 6.37485 18.9032C6.00302 18.8063 5.94387 18.7733 5.82558 18.7072C4.6855 18.0702 2.5 16.1742 2.5 11C2.5 8.17157 2.5 6.75736 3.37868 5.87868C4.25736 5 5.67157 5 8.5 5"/><path d="M2.5 10V16C2.5 18.8284 2.5 20.2426 3.37868 21.1213C4.25736 22 5.67157 22 8.5 22H11.5761C14.4045 22 15.8188 22 16.6974 21.1213C17.1873 20.6314 17.4041 19.9751 17.5 19"/><path d="M11.5 3.5V6.5C11.5 6.96594 11.5 7.19891 11.4239 7.38268C11.3224 7.62771 11.1277 7.82239 10.8827 7.92388C10.6989 8 10.4659 8 10 8C9.53406 8 9.30109 8 9.11732 7.92388C8.87229 7.82239 8.67761 7.62771 8.57612 7.38268C8.5 7.19891 8.5 6.96594 8.5 6.5V3.5C8.5 3.03406 8.5 2.80109 8.57612 2.61732C8.67761 2.37229 8.87229 2.17761 9.11732 2.07612C9.30109 2 9.53406 2 10 2C10.4659 2 10.6989 2 10.8827 2.07612C11.1277 2.17761 11.3224 2.37229 11.4239 2.61732C11.5 2.80109 11.5 3.03406 11.5 3.5Z"/></svg>`;

export const FOLDER_SVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dcdcdc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`;

export const NEURAL_NETWORK_SVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dcdcdc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M21.5 12C21.5 13.3807 20.3807 14.5 19 14.5C17.6193 14.5 16.5 13.3807 16.5 12C16.5 10.6193 17.6193 9.5 19 9.5C20.3807 9.5 21.5 10.6193 21.5 12Z"/><path d="M13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4Z"/><path d="M12.5 11.5C12.5 12.3284 11.8284 13 11 13C10.1716 13 9.5 12.3284 9.5 11.5C9.5 10.6716 10.1716 10 11 10C11.8284 10 12.5 10.6716 12.5 11.5Z"/><path d="M6.5 7.5C6.5 8.60457 5.60457 9.5 4.5 9.5C3.39543 9.5 2.5 8.60457 2.5 7.5C2.5 6.39543 3.39543 5.5 4.5 5.5C5.60457 5.5 6.5 6.39543 6.5 7.5Z"/><path d="M10.5 19.5C10.5 20.6046 9.60457 21.5 8.5 21.5C7.39543 21.5 6.5 20.6046 6.5 19.5C6.5 18.3954 7.39543 17.5 8.5 17.5C9.60457 17.5 10.5 18.3954 10.5 19.5Z"/><path d="M13.5 5L17.5 10M14.5 15.5L10.5 18.5M8 17.5L5 9.5M6.31298 6.65431L10.5 4.5M12.5 11.5L16.505 11.8443"/><path d="M12 5.5L11 10"/></svg>`;
export const GIT_FORK_SVG = NEURAL_NETWORK_SVG;

export const CANVAS_LAYOUT_SVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#dcdcdc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`;

class DragTooltipManager {
  private el: HTMLElement | null = null;
  private titleEl: HTMLElement | null = null;
  private subtitleEl: HTMLElement | null = null;
  private iconEl: HTMLElement | null = null;

  init() {
    if (this.el || typeof document === 'undefined') return;

    const container = document.createElement('div');
    container.id = 'flint-drag-preview-tooltip';
    container.style.position = 'fixed';
    container.style.top = '0px';
    container.style.left = '0px';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '999999';
    container.style.display = 'none';
    container.style.willChange = 'transform';
    container.style.backgroundColor = '#080808';
    container.style.color = '#ffffff';
    container.style.padding = '6px 12px';
    container.style.borderRadius = '6px';
    container.style.border = '1px solid rgba(255,255,255,0.12)';
    container.style.boxShadow = '0 6px 16px rgba(0,0,0,0.6)';
    container.style.fontFamily = 'var(--font-interface)';
    container.style.flexDirection = 'column';
    container.style.gap = '2px';
    container.style.minWidth = '120px';
    container.style.maxWidth = '260px';
    container.style.userSelect = 'none';

    const header = document.createElement('div');
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.gap = '6px';
    header.style.minWidth = '0';

    const icon = document.createElement('span');
    icon.style.display = 'flex';
    icon.style.alignItems = 'center';
    icon.style.flexShrink = '0';
    this.iconEl = icon;

    const title = document.createElement('span');
    title.style.fontWeight = '600';
    title.style.fontSize = '13px';
    title.style.color = '#ffffff';
    title.style.lineHeight = '1.2';
    title.style.overflow = 'hidden';
    title.style.textOverflow = 'ellipsis';
    title.style.whiteSpace = 'nowrap';
    title.style.letterSpacing = '-0.01em';
    this.titleEl = title;

    header.appendChild(icon);
    header.appendChild(title);

    const subtitle = document.createElement('div');
    subtitle.style.fontSize = '11.5px';
    subtitle.style.fontWeight = '500';
    subtitle.style.color = '#9e9e9e';
    subtitle.style.lineHeight = '1.2';
    subtitle.style.overflow = 'hidden';
    subtitle.style.textOverflow = 'ellipsis';
    subtitle.style.whiteSpace = 'nowrap';
    subtitle.style.marginTop = '2px';
    subtitle.style.display = 'none';
    this.subtitleEl = subtitle;

    container.appendChild(header);
    container.appendChild(subtitle);

    document.body.appendChild(container);
    this.el = container;
  }

  show(title: string, subtitle: string | null, iconSvg: string, x: number, y: number) {
    this.init();
    if (!this.el || !this.titleEl || !this.subtitleEl || !this.iconEl) return;

    this.titleEl.textContent = title;
    if (subtitle) {
      this.subtitleEl.textContent = subtitle;
      this.subtitleEl.style.display = 'block';
    } else {
      this.subtitleEl.textContent = '';
      this.subtitleEl.style.display = 'none';
    }
    this.iconEl.innerHTML = iconSvg;
    this.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    this.el.style.display = 'flex';
  }

  updatePosition(x: number, y: number) {
    if (!this.el || this.el.style.display === 'none') return;
    if (x === 0 && y === 0) return;
    this.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  updateSubtitle(subtitle: string | null) {
    if (!this.subtitleEl) return;
    if (subtitle) {
      if (this.subtitleEl.textContent !== subtitle) {
        this.subtitleEl.textContent = subtitle;
      }
      this.subtitleEl.style.display = 'block';
    } else {
      this.subtitleEl.textContent = '';
      this.subtitleEl.style.display = 'none';
    }
  }

  hide() {
    if (this.el) {
      this.el.style.display = 'none';
    }
  }
}

export const dragTooltipManager = new DragTooltipManager();
