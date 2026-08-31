/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        flint: {
          bgApp: 'var(--flint-bg-app)',
          bgTopBar: 'var(--flint-bg-topbar)',
          bgRibbon: 'var(--flint-bg-ribbon)',
          bgSidebar: 'var(--flint-bg-sidebar)',
          bgSidebarHover: 'var(--flint-bg-sidebar-hover)',
          bgSidebarActive: 'var(--flint-bg-sidebar-active)',
          bgMain: 'var(--flint-bg-main)',
          bgCard: 'var(--flint-bg-card)',
          bgCardHover: 'var(--flint-bg-card-hover)',
          bgPopover: 'var(--flint-bg-popover)',
          bgInput: 'var(--flint-bg-input)',
          bgInputFocus: 'var(--flint-bg-input-focus)',
          bgTabActive: 'var(--flint-bg-tab-active)',
          bgTabHover: 'var(--flint-bg-tab-hover)',
          bgStatusBar: 'var(--flint-bg-statusbar)',
          borderSubtle: 'var(--flint-border-subtle)',
          borderBase: 'var(--flint-border-base)',
          borderStrong: 'var(--flint-border-strong)',
          textPrimary: 'var(--flint-text-primary)',
          textSecondary: 'var(--flint-text-secondary)',
          textMuted: 'var(--flint-text-muted)',
          textFaint: 'var(--flint-text-faint)',
          accent: 'var(--flint-accent)',
          accentHover: 'var(--flint-accent-hover)',
          accentActive: 'var(--flint-accent-active)',
          accentSubtle: 'var(--flint-accent-subtle)',
        },
      },
      fontFamily: {
        sans: ['var(--font-interface)', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
        interface: ['var(--font-interface)', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
        text: ['var(--font-text)', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
        prose: ['var(--font-text)', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
        mono: ['var(--font-monospace)', 'ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Consolas', '"Liberation Mono"', 'monospace'],
        monospace: ['var(--font-monospace)', 'ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Consolas', '"Liberation Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
