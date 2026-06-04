# Amwaj Alkhaleej — امواج الخليج

Multilingual website for **Amwaj Alkhaleej**, a sanitary-ware & plumbing supplies retailer
in Ghorab Market, Aziziyah district, Jeddah, Saudi Arabia.

The site is **bilingual** — Arabic primary (RTL) at `/`, English secondary (LTR) at `/en/` —
and serves as a **marketing brochure** (no online store/checkout).

- **Brochure** — `amwajk.com`, built here with [Astro 5](https://astro.build/) +
  [Tailwind CSS](https://tailwindcss.com/) (AstroWind theme). Static-first, near-zero JS.
  Products are showcased; conversions happen via WhatsApp, phone, or an in-store visit.

## Tech stack

- **Astro 5** (static output) + **Tailwind CSS**
- Astro built-in **i18n** routing (Arabic default, English under `/en/`)
- `astro-icon` + Iconify for icons
- Deployed on **Netlify** (build `npm run build`, output `dist/`)

## Project structure

```
src/
├── pages/         # routes — index.astro (AR, /), en/index.astro (EN, /en/), 404.astro (thin wrappers)
├── components/    # ui/, common/, widgets/ + BrochureContent.astro (shared page body)
├── i18n/          # ui.ts (strings + brochure body dict), utils.ts (useTranslations)
├── layouts/       # page layouts
├── config.yaml    # site config (name, SEO defaults, analytics)
├── navigation.ts  # header / footer navigation
├── data/          # structured content (Markdown/MDX)
└── assets/        # images, styles, favicons (processed by Astro)
public/            # static assets served as-is
astro.config.ts    # Astro configuration
```

