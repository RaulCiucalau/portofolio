/**
 * @fileoverview Dynamic favicon switching based on user's color scheme preference.
 * Automatically updates the favicon when the system theme changes between light and dark mode.
 */

/**
 * Favicon link element from the document head.
 * @type {HTMLLinkElement}
 */
const favicon = document.getElementById('favicon');

/**
 * Media query to detect dark mode preference.
 * @type {MediaQueryList}
 */
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

/**
 * Updates the favicon based on the color scheme preference.
 * @param {boolean} isDark - Whether dark mode is currently active.
 */
function updateFavicon(isDark) {
  favicon.href = isDark 
    ? './assets/favicon/favicon-dark-mode.png'
    : './assets/favicon/favicon-light-mode.png';
}

updateFavicon(darkModeQuery.matches);

darkModeQuery.addEventListener('change', (e) => updateFavicon(e.matches));
