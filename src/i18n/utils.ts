// i18n helpers. Pair with `./ui` for the string dictionaries.

import { getRelativeLocaleUrl } from 'astro:i18n';
import { ui, defaultLocale, locales, type Locale, type UIKey } from './ui';

/**
 * Returns a `t(key)` function bound to a locale, falling back to the default
 * locale when a key is missing in the requested one.
 *
 *   const t = useTranslations('en');
 *   t('nav.products'); // "Products"
 */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

/** Narrow an arbitrary string (e.g. `Astro.currentLocale`) to a known Locale. */
export function asLocale(value: string | undefined): Locale {
  return (locales as readonly string[]).includes(value ?? '') ? (value as Locale) : defaultLocale;
}

export { getRelativeLocaleUrl };
