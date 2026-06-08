# Ghost-to-Solid Header Design

**Date:** 2026-06-07  
**Status:** Approved  
**Scope:** `src/components/widgets/Header.astro` — CSS only, no JS changes, no new files

---

## Problem

The sticky header feels visually heavy at page-top, where it sits over the time-of-day wave animation in the hero. Mid-page (once the hero is scrolled past) it is fine.

## Goal

Make the header transparent and lightweight when the user is at the top of the page, transitioning smoothly to a solid bar as they scroll past the hero.

---

## Architecture

`BasicScripts.astro` already toggles a `scroll` class on `#header` once `scrollY > 60`. No JS changes are needed — the feature is entirely driven by CSS reacting to that class.

All changes are a `<style>` block appended to `Header.astro`.

---

## Two States

### Ghost state (no `.scroll` class — user is at the top)

- **Background:** transparent
- **Scrim:** the existing empty `<div class="absolute inset-0">` inside the header gets a `linear-gradient(to bottom, rgba(0,0,0,0.20), transparent)` — a subtle dark anchor so text has contrast in all conditions
- **Text & logo color:** `color: var(--h-text)` — the hero's JS already sets this CSS custom property on `document.documentElement` each minute based on the time-of-day palette. Values are either dark blue (`#16324f`, for bright/warm skies 7–20 h) or near-white (`#EFF6FF`, for dark skies 0–6 h, 21–23 h). The header inherits it automatically with no extra code.
- **Shadow:** none

### Scrolled state (`.scroll` class active — user scrolled past 60 px)

- **Background:** `var(--aw-color-bg-page)` — the site's page background token
- **Scrim:** hidden (`opacity: 0`)
- **Text & logo color:** reverts to `currentColor` (normal page text)
- **Shadow:** `0 1px 4px rgba(0,0,0,0.10)`

A `transition` on `background`, `box-shadow`, and `color` (0.3 s ease) makes the change smooth.

---

## Key Constraints

- **RTL/LTR safe:** CSS-only change, no directional logic introduced.
- **No logo recolor needed:** text color inherits `--h-text` which covers both locales since the header component is shared.
- **prefers-reduced-motion:** transitions can be wrapped in `@media (prefers-reduced-motion: no-preference)` so the switch is instant for users who prefer it.
- **MobileCTABar unaffected:** fixed bottom bar, completely separate from the header.
- **`--h-text` availability:** the hero JS sets this on page load and re-applies every 60 s. In the rare case the hero isn't on the page (e.g. a future sub-page), `var(--h-text, currentColor)` falls back to normal text color safely.

---

## Files Changed

| File                                  | Change                                              |
| ------------------------------------- | --------------------------------------------------- |
| `src/components/widgets/Header.astro` | Add `<style>` block at bottom with ghost/scroll CSS |

No other files touched.

---

## Out of Scope

- Shrinking the header height on scroll (can be added later as an enhancement)
- Backdrop-blur / frosted glass (deferred; heavier on low-end mobile)
- Auto-hide on scroll-down (separate feature)
