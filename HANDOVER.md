# Lennor Ply — Project Handover

A static marketing website for **Lennor Ply**, an ISI-certified plywood
manufacturer in Karnataka, India. This file is the single source of truth for
picking the project up on a new machine or in a fresh Claude Code session.

> This file is also loaded as project context (see `CLAUDE.md`, which points
> here). Read it first before making changes.

---

## 1. Live locations

| What | Where |
|------|-------|
| Git remote (SSH) | `git@github.com:truffaire/lennor.git` |
| GitHub account | `truffaire` |
| Hosting | Vercel — auto-deploys on every push to `main` |
| Local dev URL | http://localhost:4620 |

Vercel is already connected to the GitHub repo. **Push to `main` = live in ~1 min.**
No build step, no environment variables, no server code.

---

## 2. Tech stack

- **Plain static HTML + CSS + JS.** No framework, no bundler, no `package.json`.
- **CSS**: one file, `css/style.css` (~2900 lines).
- **JS**: one file, `js/main.js` (~1100 lines, vanilla, IIFE-wrapped).
- **Smooth scroll**: [Lenis](https://github.com/darkroomengineering/lenis) (vendored in `vendor/`).
- **Map**: [Leaflet](https://leafletjs.com/) (vendored) — used only on `contact.html`.
- **Fonts**: DM Sans + DM Mono, self-hosted in `assets/fonts/` (woff2).

### File structure
```
index.html        Home / overview
products.html     Grades, thicknesses, boards & doors
process.html      16-station manufacturing line
about.html        Company story
contact.html      Contact form + Leaflet map
404.html          Not-found page
sections-lab.html, standard-options.html   Scratch/reference pages (not linked in nav)

css/style.css     All styles
js/main.js        All behaviour
assets/           img/, brand/, fonts/, machines/, img/gallery/
vendor/           leaflet + lenis (do not edit)
.claude/launch.json   Dev-server config for Claude Code preview
```

---

## 3. Local development

The dev server is just Python's built-in HTTP server on port **4620**
(configured in `.claude/launch.json`):

```bash
python -m http.server 4620 --directory .
```

Then open http://localhost:4620. In Claude Code, the preview tool launches this
automatically via the `lennor-site` launch config.

**Requirement:** Python 3 on PATH. That's the only local dependency.

---

## 4. Conventions & gotchas (IMPORTANT)

### 4a. Cache-busting query strings
Every page links CSS/JS with a `?v=N` version string, e.g.
`css/style.css?v=64` and `js/main.js?v=29`. **When you edit `style.css` or
`main.js`, bump the number on ALL pages** or the browser (and the embedded
preview) will serve stale files.

- Current versions: **`style.css?v=64`**, **`main.js?v=29`**.
- The 5 nav pages must stay in sync. `404.html`, `sections-lab.html`,
  `standard-options.html` may lag — update if you touch them.

### 4b. Embedded-browser CSS transition quirks
The Claude Code preview browser is unreliable with transitions triggered by
class changes. Learned the hard way this session:
- `max-height`, `grid-template-rows`, and `flex-basis` transitions **do not
  animate** when toggled by a class. Computed values stay at the initial state.
- **Workarounds that DO work:** animate `min-width` instead of `flex-basis`;
  use `display: none/block` instead of `max-height` for reveal/collapse.

### 4c. Location wording
Show the location as **"Karnataka"** everywhere across the site — EXCEPT on
`contact.html`, which keeps the full address (KIADB Industrial Growth Centre,
Hassan — 573201, Karnataka). The JSON-LD `addressLocality` in `index.html`
still says "Hassan" on purpose (structured data for search engines).

### 4d. Scroll animations
Elements with `data-reveal`, `data-mask`, `data-plate`, `data-io` are animated
in by an IntersectionObserver in `main.js`. `data-count` drives number
counters. Add these attributes to opt new elements into the reveal system.

### 4e. Floating dock (all pages)
Bottom-right dock (`#dock`) has two liquid-glass buttons: **WhatsApp** and
**back-to-top** (`#toTop`). It fades in after scrolling ~560px. The glass is a
dark translucent tint with white icons so it stays visible on both light and
dark sections; a cursor-tracking specular highlight is driven by a `mousemove`
handler in `main.js`.

---

## 5. Deployment workflow

```bash
# make edits, bump ?v= cache busters, then:
git add -A
git commit -m "your message"
git push origin main          # Vercel auto-deploys
```

Commit messages in this repo end with a Co-Authored-By trailer for Claude.

---

## 6. State as of this handover (2026-07-28)

Recent work completed and pushed (latest commit `4957977`):
- Removed "Overview" from all nav / mobile menu / footer; the logo now links home.
- Replaced the factory "press" photo with a cleaner AI-generated facility image
  (`assets/img/press.jpg`, ~218 KB, 1584×672).
- Location wording changed to "Karnataka" site-wide (contact keeps full address).
- Contact map: added a **Bengaluru** manufacturing-unit marker (city pin only,
  no address) alongside Hassan, and widened the view east so **Chennai** shows
  for regional context (no marker there). Removed the "Find us / Coordinates /
  Factory visits" locality block under the map.
- Centered the home spec bar; trimmed hero subtext to
  "Composed, calibrated, and lab-tested."
- Redesigned the products grade-strip cards: bigger, all info visible by
  default, glossy hover, infinite auto-scroll marquee (JS clones cards).
- Floating dock: replaced the Call button with a back-to-top button, kept
  WhatsApp, and gave both a clear liquid-glass look with cursor-tracking glare.

No known open bugs. No pending TODOs.

---

## 7. Assets note

Some imagery is AI-generated (e.g. `assets/img/press.jpg`). Brand marks and
wordmarks live in `assets/brand/`. The `assets/machines/` folder holds the
17 process-step photos used on `process.html`.
