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

// Supplier brands stocked in store. Confirmed by the owner 2026-08-08 — only real product
// brands belong here, never neighbouring establishments or fellow retailers. Rendered as
// typographic wordmarks (see BrandStrip.astro); brand names stay in Latin script in both
// locales, which is how they're recognised in the Saudi market.
// `logo` is reserved for real SVG assets if they're ever licensed — until then the type
// treatment stands on its own rather than using traced or invented logo art.
export const brands = [
  { name: 'Hesanit' },
  { name: 'Tredex' },
  { name: 'Stamina' },
  { name: 'Villeroy & Boch' },
  { name: 'GROHE' },
] as const;

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
      // `{category}` is replaced with the card's title, then the whole string is
      // encodeURIComponent-ed into the wa.me link.
      whatsappTemplate: 'السلام عليكم، أستفسر عن {category}.',
      whatsappCta: 'تواصل عبر واتساب',
      items: [
        {
          title: 'كراسي حمام',
          description: 'كراسي عربي وإفرنجي بمختلف التصاميم.',
          chips: ['عربي', 'إفرنجي', 'معلق', 'ذكي'],
          alt: 'كرسي حمام أبيض حديث',
        },
        {
          title: 'خلاطات ومغاسل',
          description: 'خلاطات حمام ومطبخ ومغاسل.',
          chips: ['خلاط مغسلة', 'خلاط مطبخ', 'مغسلة', 'مخفي'],
          alt: 'خلاط مغسلة وحوض حمام',
        },
        {
          title: 'دشات',
          description: 'دش يدوي وعمودي وملحقاته.',
          chips: ['دش يدوي', 'دش مطر', 'طقم دش', 'شاور'],
          alt: 'رأس دش مطر في حمام حديث',
        },
        {
          title: 'مواصير ووصلات',
          description: 'PPR وPVC وجميع أنواع الوصلات.',
          chips: ['PPR', 'PVC', 'وصلات', 'محابس'],
          alt: 'مواصير ووصلات سباكة',
        },
        {
          title: 'سخانات مياه',
          description: 'سخانات كهربائية وغازية.',
          chips: ['كهربائي', 'غاز', 'فوري'],
          alt: 'سخان مياه كهربائي',
        },
        {
          title: 'إكسسوارات الحمام',
          description: 'حاملات وفرش ومرايا وملحقات.',
          chips: ['مرايا', 'حاملات', 'رفوف', 'مساند'],
          alt: 'إكسسوارات حمام معدنية',
        },
      ],
    },
    brands: {
      title: 'ماركات نوفرها',
    },
    steps: {
      tagline: 'كيف تطلب',
      title: 'ثلاث خطوات وخلصت',
      items: [
        { title: 'راسلنا على واتساب', description: 'أرسل صورة أو اسم المنتج اللي تحتاجه.' },
        { title: 'نؤكد التوفر والسعر', description: 'نرد عليك بالتوفر والسعر بسرعة.' },
        { title: 'استلم من المعرض أو رتّب التوصيل', description: 'تعال المحل أو ننسق لك التوصيل.' },
      ],
    },
    // Four mutually exclusive states, rendered from data- attributes by OpenStatus.astro.
    // Written out by hand (Arabic-Indic numerals included) so no Intl formatting is
    // needed at runtime — the script only picks which one to show.
    // Western digits throughout, matching `location.hours` directly below the pill — the
    // two sit side by side on the page and must not disagree on numeral system.
    openStatus: {
      // Server-rendered fallback: factual and correct with JS disabled, since the script
      // is what turns this into a live open/closed reading.
      hoursShort: 'السبت – الخميس 9:00 ص – 10:00 م',
      open: 'مفتوح الآن · يغلق 10:00 مساءً',
      closedOpensToday: 'مغلق · يفتح 9:00 صباحًا',
      closedOpensTomorrow: 'مغلق · يفتح غدًا 9:00 صباحًا',
      // Thursday after closing: shut for the night, and Friday is the weekend, so the next
      // opening is Saturday. Distinct from closedFriday — the shop *was* open today.
      closedOpensSaturday: 'مغلق · يفتح السبت 9:00 صباحًا',
      closedFriday: 'مغلق اليوم · يفتح السبت 9:00 صباحًا',
    },
    whyUs: {
      tagline: 'لماذا نحن',
      title: 'ثلاثة أسباب لزيارتنا',
      items: [
        { title: 'تشكيلة كبيرة بأسعار منافسة', description: 'مجموعة واسعة من الماركات بأسعار للمقاولين والمستهلكين.' },
        { title: 'فريق فاهم و مساعد', description: 'موظفون يساعدونك في اختيار المناسب لمشروعك.' },
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
      whatsappTemplate: 'Hello, I have a question about {category}.',
      whatsappCta: 'Ask on WhatsApp',
      items: [
        {
          title: 'Toilets',
          description: 'Western and Eastern style, various designs.',
          chips: ['Eastern', 'Western', 'Wall-hung', 'Smart'],
          alt: 'Modern white toilet',
        },
        {
          title: 'Faucets & Basins',
          description: 'Bathroom, kitchen, and basin fittings.',
          chips: ['Basin mixer', 'Kitchen mixer', 'Basin', 'Concealed'],
          alt: 'Basin mixer tap and washbasin',
        },
        {
          title: 'Showers',
          description: 'Hand-held, overhead, and accessories.',
          chips: ['Hand shower', 'Rain head', 'Shower set', 'Rails'],
          alt: 'Rain shower head in a modern bathroom',
        },
        {
          title: 'Pipes & Fittings',
          description: 'PPR, PVC, and all connector types.',
          chips: ['PPR', 'PVC', 'Fittings', 'Valves'],
          alt: 'Plumbing pipes and fittings',
        },
        {
          title: 'Water Heaters',
          description: 'Electric and gas models.',
          chips: ['Electric', 'Gas', 'Instant'],
          alt: 'Electric water heater',
        },
        {
          title: 'Bathroom Accessories',
          description: 'Holders, brushes, mirrors, and more.',
          chips: ['Mirrors', 'Holders', 'Shelves', 'Grab bars'],
          alt: 'Metal bathroom accessories',
        },
      ],
    },
    brands: {
      title: 'Brands We Stock',
    },
    steps: {
      tagline: 'How to Order',
      title: 'Three Steps and You’re Done',
      items: [
        { title: 'Message us on WhatsApp', description: 'Send a photo or the name of what you need.' },
        { title: 'We confirm stock and price', description: 'We get back to you quickly with both.' },
        { title: 'Collect in store or arrange delivery', description: 'Drop by the shop or we’ll sort delivery.' },
      ],
    },
    openStatus: {
      hoursShort: 'Sat–Thu 9 AM – 10 PM',
      open: 'Open now · closes 10:00 PM',
      closedOpensToday: 'Closed · opens 9:00 AM',
      closedOpensTomorrow: 'Closed · opens tomorrow 9:00 AM',
      closedOpensSaturday: 'Closed · opens Saturday 9:00 AM',
      closedFriday: 'Closed today · opens Saturday 9:00 AM',
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
