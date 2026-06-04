// Navigation data for the AR (default) and EN pages, derived from the i18n dictionaries
// in ~/i18n/ui so the two locales can't drift. Header is anchor-based (single-page site),
// with a language switcher as the action.

import { business, type Locale } from '~/i18n/ui';
import { useTranslations } from '~/i18n/utils';

const socialLinks = [
  { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: business.whatsappUrl },
  { ariaLabel: 'Phone', icon: 'tabler:phone', href: business.phoneTel },
];

// URL prefix for a locale: default (ar) lives at the root, others under /<locale>.
const localeBase = (locale: Locale) => (locale === 'ar' ? '' : `/${locale}`);
const localeHome = (locale: Locale) => (locale === 'ar' ? '/' : `/${locale}`);

export function getHeaderData(locale: Locale) {
  const t = useTranslations(locale);
  const base = localeBase(locale);
  const other: Locale = locale === 'ar' ? 'en' : 'ar';
  return {
    links: [
      { text: t('nav.products'), href: `${base}/#products` },
      { text: t('nav.whyUs'), href: `${base}/#why-us` },
      { text: t('nav.location'), href: `${base}/#location` },
      { text: t('nav.contact'), href: `${base}/#contact` },
    ],
    actions: [{ text: t('nav.switchLabel'), href: localeHome(other) }],
  };
}

export function getFooterData(locale: Locale) {
  const t = useTranslations(locale);
  return {
    links: [],
    secondaryLinks: [],
    socialLinks,
    footNote: `© ${new Date().getFullYear()} ${t('site.brand')} · ${t('footer.rights')}`,
  };
}
