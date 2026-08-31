export type ThemeType = 'dark' | 'light';

export interface ThemeColorTokens {
  // Surface / Background tokens
  bgApp: string;
  bgTopBar: string;
  bgRibbon: string;
  bgSidebar: string;
  bgSidebarHover: string;
  bgSidebarActive: string;
  bgMain: string;
  bgCard: string;
  bgCardHover: string;
  bgPopover: string;
  bgInput: string;
  bgInputFocus?: string;
  bgTabActive: string;
  bgTabHover?: string;
  bgTabInactive?: string;
  tabCornerFill: string;
  tabCornerHoverFill?: string;
  bgStatusBar?: string;

  // Border tokens
  borderSubtle: string;
  borderBase: string;
  borderStrong: string;

  // Text / Foreground tokens
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textFaint: string;

  // Accent tokens
  accent: string;
  accentHover?: string;
  accentActive?: string;
  accentSubtle?: string;
  accentGradient?: string;

  // Optional Gradient overlays
  topBarGradient?: string;
  sidebarGradient?: string;
  mainGradient?: string;

  // Selection & Scrollbars
  selectionBg?: string;
  selectionText?: string;
  scrollbarThumb?: string;
  scrollbarThumbHover?: string;

  // Code / Editor tokens
  codeBg?: string;
  codeText?: string;

  // Tooltip tokens
  tooltipBg?: string;
  tooltipText?: string;
  tooltipMuted?: string;
  tooltipBorder?: string;

  // Elevation / Shadow tokens
  shadow1?: string;
  shadow2?: string;
  shadow3?: string;

  // Extensible custom tokens
  [key: string]: string | undefined;
}

export interface ThemeDefinition {
  id: string;
  name: string;
  description?: string;
  author?: string;
  type: ThemeType;
  isCore?: boolean;
  isPreinstalled?: boolean;
  isBuiltIn?: boolean;
  hasGradient?: boolean;
  previewColors: [string, string, string, string]; // [Topbar, Sidebar, Canvas, Accent]
  variables: ThemeColorTokens;
  customCss?: string;
}
