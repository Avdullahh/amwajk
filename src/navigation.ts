// Navigation data for the AR (default) and EN pages.
// Header is anchor-based (single-page site), with a language switcher as the action.

export const headerDataAr = {
  links: [
    { text: 'منتجاتنا', href: '/#products' },
    { text: 'لماذا نحن', href: '/#why-us' },
    { text: 'الموقع', href: '/#location' },
    { text: 'تواصل معنا', href: '/#contact' },
  ],
  actions: [{ text: 'EN', href: '/en/' }],
};

export const headerDataEn = {
  links: [
    { text: 'Products', href: '/en/#products' },
    { text: 'Why Us', href: '/en/#why-us' },
    { text: 'Location', href: '/en/#location' },
    { text: 'Contact', href: '/en/#contact' },
  ],
  actions: [{ text: 'AR', href: '/' }],
};

export const footerDataAr = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/966579779897' },
    { ariaLabel: 'Phone', icon: 'tabler:phone', href: 'tel:+966579779897' },
  ],
  footNote: `
    © ${new Date().getFullYear()} مؤسسة أمواج الخليج للأدوات الصحية · جميع الحقوق محفوظة.
  `,
};

export const footerDataEn = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/966579779897' },
    { ariaLabel: 'Phone', icon: 'tabler:phone', href: 'tel:+966579779897' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Amwaj Alkhaleej Sanitary Tools · All rights reserved.
  `,
};
