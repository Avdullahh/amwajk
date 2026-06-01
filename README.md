# Amwaj Alkhaleej — امواج الخليج

Multilingual website for **Amwaj Alkhaleej**, a sanitary-ware & plumbing supplies retailer
in Ghorab Market, Aziziyah district, Jeddah, Saudi Arabia.

The site is **bilingual** — Arabic primary (RTL) at `/`, English secondary (LTR) at `/en/` —
and serves as both a **brochure** (this repo) and the front door to an online **store**.

- **Brochure** — `amwajk.com`, built here with [Astro 5](https://astro.build/) +
  [Tailwind CSS](https://tailwindcss.com/) (AstroWind theme). Static-first, near-zero JS.
- **Store** — `store.amwajk.com`, a hosted [Zid](https://zid.sa) storefront. The catalog,
  cart, checkout, payments, and orders are managed in Zid, **not in this repo**.

## Tech stack

- **Astro 5** (static output) + **Tailwind CSS**
- Astro built-in **i18n** routing (Arabic default, English under `/en/`)
- `astro-icon` + Iconify for icons
- Deployed on **Netlify** (build `npm run build`, output `dist/`)

## Getting started

```shell
npm install
npm run dev      # local dev server at http://localhost:4321
```

## Commands

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Install dependencies                            |
| `npm run dev`     | Start local dev server at `localhost:4321`      |
| `npm run build`   | Build the production site to `dist/`            |
| `npm run preview` | Preview the production build locally            |
| `npm run check`   | Type-check (Astro), lint (ESLint), format check |
| `npm run fix`     | Auto-fix ESLint + Prettier                      |

## Project structure

```
src/
├── pages/         # routes — index.astro (AR, /), en/index.astro (EN, /en/), 404.astro
├── components/    # ui/, common/, widgets/, blog/
├── layouts/       # page layouts
├── config.yaml    # site config (name, SEO defaults, analytics)
├── navigation.ts  # header / footer navigation
├── data/          # structured content (Markdown/MDX)
└── assets/        # images, styles, favicons (processed by Astro)
public/            # static assets served as-is
astro.config.ts    # Astro configuration
```

Import from `src` using the `~` alias (e.g. `import Header from '~/components/widgets/Header.astro'`).
Edit site-wide settings in `src/config.yaml` rather than in components.

## Deploy

Connected to Netlify and auto-deploys from `main`. Build command `npm run build`, publish directory `dist`.
