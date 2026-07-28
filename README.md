# LENNOR — Premium Website

A fully static, dependency-free premium website for **Lennor Ply** (ISI-certified plywood
manufacturer, Hassan, Karnataka). White "material atelier" theme built around the
black/white LENNOR logo with a warm timber accent drawn from the product itself.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, manifesto scrub, metrics, 3-D layer press, grades, standard, pinned 17-station strip, gallery, pre-cut, CTA |
| `products.html` | Grade cards (Marine flagship), thickness ruler, true-scale sheet sizes, boards / doors / laminates |
| `process.html` | All 17 stations with live progress rail |
| `about.html` | Manifesto, the mark, commitments, facility |
| `contact.html` | Direct lines, WhatsApp quote form (no backend needed), locality panel |
| `404.html` | Branded not-found page |

## Stack

- Pure HTML + CSS + vanilla JS — **no build step, no framework, no external requests**
- Self-hosted fonts — the DM family only: DM Sans (variable, roman + italic) for all
  display and body text, DM Mono for technical labels
- [Lenis](https://lenis.darkroom.engineering/) vendored locally for smooth scrolling
  (site degrades gracefully to native scroll without it)
- All motion honours `prefers-reduced-motion`

## Motion system (js/main.js)

Preloader intro (first visit per session) · curtain page transitions · masked headline
reveals · scroll-scrubbed 3-D plywood press · pinned horizontal process strip ·
word-by-word manifesto scrub · odometer counters · parallax heroes · magnetic buttons ·
custom cursor · scroll-aware nav.

## Deploying

Upload the folder to any static host (Netlify, Vercel, GitHub Pages, cPanel, S3…).
Nothing to build. The contact form opens WhatsApp (`wa.me/917760778886`) with the
enquiry pre-filled, so no server is required.

**When you edit `css/style.css` or `js/main.js`, bump the `?v=` query string in all
HTML files** (currently `?v=2`) so browsers pick up the new version immediately.

## Local preview

```bash
python -m http.server 4620 --directory .
```

Then open http://localhost:4620

## Assets

- `assets/brand/` — logo lockups, wordmarks, circular mark (black + white, transparent),
  favicon and apple-touch icon, all extracted from the original `LOGO/LENNOR.png`
- `assets/img/` — AI-generated art-directed photography (warm white-oak palette),
  optimised JPEG/PNG — gallery images are full-quality PNG, consider
  converting to WebP for production
