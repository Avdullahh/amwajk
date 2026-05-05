# Amwaj Alkhaleej — Project Plan (Day 0)

**Business:** Amwaj Alkhaleej / امواج الخليج
**Sector:** Sanitary ware & plumbing supplies — retail
**Location:** Ghorab Market, Aziziyah district, Jeddah, Saudi Arabia
**Hours:** Saturday – Thursday, 9:00 AM – 10:00 PM. Closed Fridays.
**Repo:** https://github.com/avdullahh/amwajk

---

## 1. Aim

A multilingual brochure website (Arabic primary / RTL, English secondary / LTR) that helps a customer in Jeddah do four things in under 30 seconds on their phone:

1. **Find the store** on a map (Ghorab Market, Aziziyah).
2. **See if it's open** right now (Sat–Thu 9 AM – 10 PM, closed Fri).
3. **Browse product categories** (sanitary ware, plumbing supplies).
4. **Contact** via phone or WhatsApp in one tap.

v1 is a **brochure site, not an e-commerce store**. Catalog browsing only — no cart, no checkout, no payments. We can revisit e-commerce after v1 is live and we know what customers actually ask for.

---

## 2. Frameworks & tooling

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro 5** | Static-first, ships near-zero JS, ideal for brochure sites. |
| Styling | **Tailwind CSS** (`@astrojs/tailwind`) | Fast iteration, RTL-friendly via `dir="rtl"`. |
| i18n | **Astro built-in i18n routing** | `/` → Arabic, `/en/` → English. |
| Content | `.astro` pages + `.md`/`.mdx` for product copy | Edits without touching components. |
| Icons | `astro-icon` + Iconify | Lightweight, no runtime cost. |
| Deploy | **Cloudflare Pages** (or Netlify) | Free tier, global CDN, auto-deploy from GitHub. |
| Source control | GitHub (`avdullahh/amwajk`) | Already created. |
| Runtime | Node 24, npm 11 | Already installed. |

---

## 3. Step-by-step roadmap

1. **Scaffold Astro** — `npm create astro@latest .` (Empty template, TypeScript: Strict, no integrations yet).
2. **Verify dev server** — `npm run dev` → open `http://localhost:4321`, confirm welcome page.
3. **First commit** — confirm `.gitignore` excludes `node_modules/`, `dist/`, `.astro/` (it does), then `git add`, commit, push.
4. **Add Tailwind** — `npx astro add tailwind`. Test a styled element.
5. **Configure i18n** — `astro.config.mjs`: `defaultLocale: 'ar'`, `locales: ['ar', 'en']`, `routing: { prefixDefaultLocale: false }`. Set `<html dir="rtl">` for Arabic pages, `dir="ltr"` for English.
6. **Layout component** — Header (logo, nav, language switcher) and Footer (address, hours, phone, WhatsApp link).
7. **Pages** — Home, About, Products (category grid), Contact. Each duplicated for AR and EN.
8. **Location** — Embed Google Maps iframe for the Ghorab Market storefront. Add a "Get Directions" link that opens the user's map app.
9. **Contact CTAs** — `tel:` link and `https://wa.me/<number>` for WhatsApp.
10. **SEO** — `<title>`, `<meta description>`, OpenGraph tags, and `application/ld+json` with `schema.org/LocalBusiness` (name, address, geo, openingHours, telephone). This is what makes the store appear nicely in Google search.
11. **Favicon + logo** — bilingual logo if available, otherwise a clean text mark.
12. **Mobile QA** — most visitors will be on phones. Test at 360px and 414px widths.
13. **Build + preview** — `npm run build && npm run preview`. Inspect `dist/`.
14. **Deploy** — connect the GitHub repo to Cloudflare Pages. Build command: `npm run build`. Output: `dist`.
15. **Custom domain** — point a domain at Pages, enable HTTPS.
16. **Lighthouse pass** — aim 95+ on Performance, Accessibility, SEO.

---

## 4. `.gitignore` — Claude reminder

The current `.gitignore` is the standard Node template. It does **not** yet ignore Claude Code's local artifacts. Before the first real commit, append:

```gitignore
# Claude Code
.claude/
.claude.local.json
.claudeignore
```

Notes:
- **Keep `CLAUDE.md` tracked** if you want session-to-session project memory shared across machines. Only ignore it if it ever contains secrets.
- The `.claude/` folder usually holds per-machine settings and local state — safe to ignore.

---

## 5. Problem-solving approach

When something breaks (and it will), follow this order:

1. **Read the error first.** Line 1 of an error usually tells you the problem. The rest is stack trace.
2. **Reproduce locally before deploying.** If `npm run build` fails on your machine, it'll fail in the cloud too. Don't push and pray.
3. **One change at a time.** When something breaks, the last change is the prime suspect. Avoid bundling unrelated edits.
4. **Commit early, commit small.** A clean `git log` is a debugging tool — `git bisect` becomes useful.
5. **Test on a real phone.** Browser DevTools' mobile mode lies about touch behavior, fonts, and Safari quirks.
6. **Search the exact error string in quotes.** Astro, Tailwind, and Node have very active communities — someone has hit this before.
7. **Don't add what you don't need.** No CMS, no React, no analytics on day 0. Add only when a real need shows up.

---

## 6. Open decisions (confirm before scaffolding)

- [ ] **Phone / WhatsApp number** +966579779897.
- [ ] **Logo / brand assets** — Design a placeholder text-mark for v1.
- [ ] **Domain name** — the domain name of the website amwajk.com is rented for a year from cloudflare and will be hosted on netlify
- [ ] **Product catalog depth** — Categories only.
- [ ] **Photography** — Stock imagery for v1.
