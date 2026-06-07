// Single source of truth for translatable UI strings and shared business constants.
//
// Why this exists: the site is Arabic-first (default, RTL) with an English (/en/) twin
// and will grow to many pages. Holding nav/footer/brand/meta copy in one place keeps the
// two locales from drifting (e.g. the /en page used to inherit the Arabic meta description,
// and the AR/EN footers had drifted to different brand names).
//
// Pattern for new pages: add the page's strings here under each locale, then have the
// route read them via `useTranslations(locale)` from `./utils`. Long-form/body content
// can graduate to an Astro content collection later; strings live here.

export const locales = ['ar', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ar';

// Locale-independent business facts (phone, links, etc.) — never duplicate these per locale.
export const business = {
  lat: 21.55124,
  lng: 39.1769838,
  phoneDisplay: '+966 57 977 9897',
  phoneTel: 'tel:+966579779897',
  whatsappUrl: 'https://wa.me/966579779897',
  email: 'Hazmiao@amwajk.com',
  mapEmbedAr: 'https://maps.google.com/maps?q=21.55124,39.1769838&hl=ar&z=16&output=embed',
  mapEmbedEn: 'https://maps.google.com/maps?q=21.55124,39.1769838&hl=en&z=16&output=embed',
  mapDirections: 'https://www.google.com/maps/dir/?api=1&destination=21.55124,39.1769838',
} as const;

export const ui = {
  ar: {
    'site.brand': 'مؤسسة أمواج الخليج التجارية',
    'meta.title': 'مؤسسة أمواج الخليج التجارية — جدة',
    'meta.description':
      'مؤسسة أمواج الخليج التجارية — متجر متخصص في الأدوات الصحية ومستلزمات السباكة في حي العزيزية، جدة (سوق غراب).',
    'nav.products': 'منتجاتنا',
    'nav.whyUs': 'لماذا نحن',
    'nav.location': 'الموقع',
    'nav.contact': 'تواصل معنا',
    'nav.switchLabel': 'EN',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
  en: {
    'site.brand': 'Amwaj Alkhaleej Establishment',
    'meta.title': 'Amwaj Alkhaleej Establishment — Jeddah',
    'meta.description':
      'Amwaj Alkhaleej Establishment — sanitary ware & plumbing supplies in the Al Aziziyah district, Jeddah (Ghurab market).',
    'nav.products': 'Products',
    'nav.whyUs': 'Why Us',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    'nav.switchLabel': 'AR',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLocale];

// Structured body content for the single-page brochure, per locale. Icons are
// locale-independent and live in `BrochureContent.astro` (paired by index), so the
// same product/why-us ordering must be kept across locales here.
export const brochure = {
  ar: {
    hero: {
      title: 'مؤسسة أمواج الخليج التجارية',
      subtitle: 'متجركم في حي العزيزية بجدة (سوق غراب) — أدوات صحية ومستلزمات سباكة لمشاريعكم وبيوتكم.',
      eyebrow: 'جدة · العزيزية',
      directions: 'الاتجاهات على الخريطة',
      call: 'اتصل بنا',
    },
    products: {
      tagline: 'منتجاتنا',
      title: 'ماذا نبيع',
      subtitle: 'تشكيلة واسعة من الأدوات الصحية ومستلزمات السباكة.',
      items: [
        { title: 'كراسي حمام', description: 'كراسي عربي وإفرنجي بمختلف التصاميم.' },
        { title: 'خلاطات ومغاسل', description: 'خلاطات حمام ومطبخ ومغاسل.' },
        { title: 'دشات', description: 'دش يدوي وعمودي وملحقاته.' },
        { title: 'مواسير ووصلات', description: 'PPR وPVC وجميع أنواع الوصلات.' },
        { title: 'سخانات مياه', description: 'سخانات كهربائية وغازية.' },
        { title: 'إكسسوارات الحمام', description: 'حاملات وفرش ومرايا وملحقات.' },
      ],
    },
    whyUs: {
      tagline: 'لماذا نحن',
      title: 'ثلاثة أسباب لزيارتنا',
      items: [
        { title: 'تشكيلة كبيرة بأسعار منافسة', description: 'مجموعة واسعة من الماركات بأسعار للمقاولين والمستهلكين.' },
        { title: 'فريق يعرف ما يبيع', description: 'موظفون يساعدونك في اختيار المناسب لمشروعك.' },
        { title: 'موقع سهل ومواقف متاحة', description: 'في قلب سوق غراب بحي العزيزية، سهل الوصول.' },
      ],
    },
    location: {
      eyebrow: 'الموقع',
      title: 'تجدوننا هنا',
      addressLabel: 'العنوان:',
      address: 'سوق غراب، حي العزيزية، جدة، المملكة العربية السعودية.',
      hoursLabel: 'ساعات العمل:',
      hours: ['السبت – الخميس: 9:00 صباحًا – 10:00 مساءً', 'الجمعة: مغلق'],
      mapsCta: 'افتح الاتجاهات في خرائط جوجل',
      mapTitle: 'موقع مؤسسة أمواج الخليج على الخريطة',
    },
    contact: {
      eyebrow: 'تواصل معنا',
      title: 'كلمونا أو زورونا',
      phoneLabel: 'اتصل',
      whatsappLabel: 'واتساب',
      emailLabel: 'البريد الإلكتروني',
    },
  },
  en: {
    hero: {
      title: 'Amwaj Alkhaleej Establishment',
      subtitle:
        'Your shop in Aziziyah, Jeddah (Ghorab Market) — sanitary ware and plumbing supplies for projects and homes.',
      eyebrow: 'Jeddah · Aziziyah',
      directions: 'Get Directions',
      call: 'Call Us',
    },
    products: {
      tagline: 'Products',
      title: 'What We Sell',
      subtitle: 'A wide selection of sanitary ware and plumbing supplies.',
      items: [
        { title: 'Toilets', description: 'Western and Eastern style, various designs.' },
        { title: 'Faucets & Basins', description: 'Bathroom, kitchen, and basin fittings.' },
        { title: 'Showers', description: 'Hand-held, overhead, and accessories.' },
        { title: 'Pipes & Fittings', description: 'PPR, PVC, and all connector types.' },
        { title: 'Water Heaters', description: 'Electric and gas models.' },
        { title: 'Bathroom Accessories', description: 'Holders, brushes, mirrors, and more.' },
      ],
    },
    whyUs: {
      tagline: 'Why Us',
      title: 'Three Reasons to Visit',
      items: [
        {
          title: 'Wide selection at fair prices',
          description: 'A broad range of brands at prices that work for contractors and homeowners alike.',
        },
        {
          title: 'Staff who know what they sell',
          description: 'Helpful team that guides you to the right pick for your project.',
        },
        {
          title: 'Easy to find, easy to park',
          description: 'In the heart of Ghorab Market, Aziziyah — easy access and parking nearby.',
        },
      ],
    },
    location: {
      eyebrow: 'Location',
      title: 'Find Us Here',
      addressLabel: 'Address:',
      address: 'Ghorab Market, Aziziyah district, Jeddah, Saudi Arabia.',
      hoursLabel: 'Hours:',
      hours: ['Saturday – Thursday: 9:00 AM – 10:00 PM', 'Friday: Closed'],
      mapsCta: 'Open directions in Google Maps',
      mapTitle: 'Amwaj Alkhaleej location on map',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Call or Visit Us',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
    },
  },
} as const;
