import { ThemeDefinition } from '../types';
import { FLINT_DARK_THEME } from './flintDark';
import { FLINT_LIGHT_THEME } from './flintLight';
import { MINIMAL_THEME } from './minimal';
import { NORD_THEME } from './nord';
import { CATPPUCCIN_THEME } from './catppuccin';
import { TOKYO_NIGHT_THEME } from './tokyoNight';
import { ROSE_PINE_THEME } from './rosePine';
import { FOREST_EMERALD_THEME } from './forestEmerald';
import { MIDNIGHT_VIOLET_THEME } from './midnightViolet';
import { SUNSET_EMBER_THEME } from './sunsetEmber';
import { OCEANIC_ABYSS_THEME } from './oceanicAbyss';
import { CYBERPUNK_NEON_THEME } from './cyberpunkNeon';
import { SOLARIZED_DARK_THEME } from './solarizedDark';
import { SOLARIZED_LIGHT_THEME } from './solarizedLight';

export {
  FLINT_DARK_THEME,
  FLINT_LIGHT_THEME,
  MINIMAL_THEME,
  NORD_THEME,
  CATPPUCCIN_THEME,
  TOKYO_NIGHT_THEME,
  ROSE_PINE_THEME,
  FOREST_EMERALD_THEME,
  MIDNIGHT_VIOLET_THEME,
  SUNSET_EMBER_THEME,
  OCEANIC_ABYSS_THEME,
  CYBERPUNK_NEON_THEME,
  SOLARIZED_DARK_THEME,
  SOLARIZED_LIGHT_THEME,
};

/**
 * The sole core baseline theme required by the Flint engine as fallback.
 */
export const CORE_THEME: ThemeDefinition = FLINT_DARK_THEME;

/**
 * All preinstalled modular themes shipped with Flint.
 */
export const PREINSTALLED_THEMES: ThemeDefinition[] = [
  FLINT_DARK_THEME,
  FLINT_LIGHT_THEME,
  MINIMAL_THEME,
  NORD_THEME,
  CATPPUCCIN_THEME,
  TOKYO_NIGHT_THEME,
  ROSE_PINE_THEME,
  FOREST_EMERALD_THEME,
  MIDNIGHT_VIOLET_THEME,
  SUNSET_EMBER_THEME,
  OCEANIC_ABYSS_THEME,
  CYBERPUNK_NEON_THEME,
  SOLARIZED_DARK_THEME,
  SOLARIZED_LIGHT_THEME,
];
