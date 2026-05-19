/**
 * tracker.js — GC Portfolio · Tracker léger
 * ─────────────────────────────────────────────────────────────────
 * Collecte silencieusement : navigateur, appareil, OS, langue, page.
 * Stocke dans localStorage['gc_tracker_log'] (max 5 000 entrées).
 * Lu par stats.html pour les graphiques Donuts.
 *
 * Usage : <script src="tracker.js" defer></script>
 *         (dans <head> ou avant </body> de chaque page du portfolio)
 * ─────────────────────────────────────────────────────────────────
 */
(function () {
  'use strict';

  const ua  = navigator.userAgent || '';
  const lng = ((navigator.languages?.[0]) || navigator.language || 'unknown').slice(0, 5);

  const detect = (rules, fallback) => {
    for (const [rx, label] of rules) {
      if (rx.test(ua)) return label;
    }
    return fallback;
  };

  const browser = detect([
    [/Edg\//,          'Edge'],
    [/OPR\/|Opera/,    'Opera'],
    [/Firefox\//,      'Firefox'],
    [/Chromium\//,     'Chromium'],
    [/Chrome\//,       'Chrome'],
    [/Safari\//,       'Safari'],
    [/MSIE|Trident\//, 'IE'],
  ], 'Autre');

  const device = /Mobi|Android|iPhone|iPod/.test(ua) ? 'Mobile'
               : /iPad|Tablet|PlayBook/.test(ua)      ? 'Tablette'
               : 'Desktop';

  const os = detect([
    [/Windows NT 10/,    'Windows 10/11'],
    [/Windows NT/,       'Windows'],
    [/iPhone|iPad|iPod/, 'iOS'],
    [/Android/,          'Android'],
    [/Mac OS X/,         'macOS'],
    [/Linux/,            'Linux'],
    [/CrOS/,             'ChromeOS'],
  ], 'Autre');

  const LANG_NAMES = {
    'fr': 'Français',    'fr-FR': 'Français',     'fr-BE': 'Français (BE)',
    'en': 'English',     'en-US': 'English (US)', 'en-GB': 'English (GB)',
    'de': 'Deutsch',     'es':    'Español',       'it':    'Italiano',
    'pt': 'Português',   'nl':    'Nederlands',    'ja':    '日本語',
    'zh': '中文',         'ko':    '한국어',          'ru':    'Русский',
    'ar': 'العربية',
  };
  const lang = LANG_NAMES[lng] || LANG_NAMES[lng.slice(0, 2)] || lng;

  const entry = {
    ts:      new Date().toISOString(),
    page:    (location.pathname || '/').replace(/\/ganaelchevallier\/portfolio/, ''),
    browser,
    device,
    os,
    lang,
  };

  try {
    const KEY = 'gc_tracker_log';
    let log = [];
    try { log = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { /* JSON corrompu */ }
    if (!Array.isArray(log)) log = [];
    log.push(entry);
    if (log.length > 5000) log = log.slice(-5000);
    localStorage.setItem(KEY, JSON.stringify(log));
  } catch { /* storage pleine ou désactivée — silencieux */ }

})();
