# Ghost-to-Solid Header Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the sticky header transparent over the hero (adapting text color to the time-of-day palette) and transition to a solid bar once the user scrolls past 60 px.

**Architecture:** `BasicScripts.astro` already toggles a `scroll` class on `#header` at `scrollY > 60`. We add a `<style>` block at the bottom of `Header.astro` that reacts to the presence/absence of that class. The hero JS already sets `--h-text` on `document.documentElement`; the ghost state inherits it for nav text color. No JS changes required.

**Tech Stack:** Astro 5, Tailwind CSS v4, vanilla CSS custom properties (`--h-text`, `--aw-color-bg-page`)

---

### Task 1: Add ghost-to-solid CSS to Header.astro

**Files:**

- Modify: `src/components/widgets/Header.astro` (append `<style>` block at end of file)

- [ ] **Step 1: Open the file and locate the end**

  `src/components/widgets/Header.astro` currently ends at line 167 (`</header>`). The `<style>` block goes after that closing tag.

- [ ] **Step 2: Append the style block**

  Add the following after the closing `</header>` tag (line 167):

  ```astro
  <style>
    /* ── Ghost ↔ Solid header transition ─────────────────────────────────── */

    /* 1. Smooth state change — skip for users who prefer reduced motion */
    @media (prefers-reduced-motion: no-preference) {
      #header {
        transition:
          background 0.3s ease,
          box-shadow 0.3s ease;
      }
    }

    /* 2. Ghost state (user is at the top of the page) */
    #header:not(.scroll) {
      background: transparent;
      box-shadow: none;
    }

    /* 2a. Nav text follows the hero's time-of-day palette (--h-text set by HeroSection.astro JS) */
    #header:not(.scroll) nav,
    #header:not(.scroll) nav a,
    #header:not(.scroll) nav button {
      color: var(--h-text, currentColor);
    }

    /* 2b. Scrim: subtle dark gradient anchors text over any sky colour */
    #header:not(.scroll) > div:first-child {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent);
    }

    /* 3. Scrolled state (.scroll toggled by BasicScripts.astro at scrollY > 60) */
    #header.scroll {
      background: var(--aw-color-bg-page);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    }

    /* 3a. Hide scrim once solid background takes over */
    #header.scroll > div:first-child {
      opacity: 0;
    }
  </style>
  ```

- [ ] **Step 3: Run the type/lint check**

  ```
  npm run check:astro
  ```

  Expected: 0 errors. (CSS in an Astro `<style>` block is not type-checked, but the check confirms no broken imports or TS errors were introduced.)

- [ ] **Step 4: Start the dev server and verify visually**

  ```
  npm run dev
  ```

  Open `http://localhost:4321` (AR) and `http://localhost:4321/en` (EN).

  **Ghost state checks (at page top):**
  - Header background is fully transparent — hero sky and wave animation are visible through it
  - Nav link text is readable. If it's currently daytime (7–20 h), `--h-text` is dark blue (`#16324f`); if night/dusk (0–6 h, 21–23 h) it is near-white (`#EFF6FF`). Confirm the text matches the hero sky's contrast needs
  - The scrim gradient is visible as a very subtle dark tint behind the header (not a heavy overlay)
  - Language switcher button retains its own styling (it is outside `nav`, so it is intentionally not recolored)

  **Scrolled state checks (scroll down past the hero):**
  - Header snaps to a solid background (matches page bg color)
  - Shadow is visible beneath the bar
  - Nav text reverts to the normal page text color
  - Scrim is gone (invisible)
  - Transition between states is smooth (0.3 s)

  **Quick devtools verification:**
  - In the Elements panel, manually add/remove the `scroll` class on `#header` to confirm the CSS rules fire correctly without needing to scroll

  **Reduced-motion check:**
  - In DevTools → Rendering → "Emulate CSS media feature prefers-reduced-motion: reduce"
  - Toggle the `scroll` class manually — the state change should be instant (no 0.3 s transition)

- [ ] **Step 5: Commit**

  ```bash
  git add src/components/widgets/Header.astro
  git commit -m "feat: ghost-to-solid header — transparent over hero, solid on scroll"
  ```

- [ ] **Step 6: Push**

  ```bash
  git push
  ```

---

## Out of scope (future enhancements)

- Height/padding shrink on scroll
- Backdrop-blur / frosted glass variant
- Auto-hide on scroll-down
