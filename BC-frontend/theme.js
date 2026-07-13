// ── theme.js ──────────────────────────────────────────────────────────────────
// Shared theme utilities. Import wherever theme needs to be read or changed.
//

const THEME_COOKIE_KEY = 'pv_theme';
const DEFAULT_THEME = 'light';
const COOKIE_DAYS = 365;

// ── Internal helpers ───────────────────────────────────────────────────────────

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name, value, days = COOKIE_DAYS) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

/**
 * Read the saved theme cookie and apply it to <html>.
 * Call once on mount in any page that needs the theme to be in sync.
 */
export function initTheme() {
  const theme = getTheme();
  applyTheme(theme);
}

// ── Public API ─────────────────────────────────────────────────────────────────

/**
 * Set the theme, persisting the choice to a cookie.
 * @param {string} layout - .
 */
export function setTheme(layout) {
  setCookie(THEME_COOKIE_KEY, String(layout));
}

/**
 * Returns the current theme by reading the cookie directly.
 * @returns {string}
 */
export function getTheme() {
  return getCookie(THEME_COOKIE_KEY) ?? DEFAULT_THEME;
}