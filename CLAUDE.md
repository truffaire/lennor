# Lennor Ply — project instructions

Read **[HANDOVER.md](HANDOVER.md)** for the full project context: stack, file
structure, local dev, conventions, deployment, and current state.

## Quick reminders
- Static site: plain HTML/CSS/JS, no build tools. Dev server: `python -m http.server 4620`.
- **Bump the `?v=N` cache buster on every page** when you edit `css/style.css`
  or `js/main.js` (currently `style.css?v=64`, `main.js?v=29`).
- Show location as "Karnataka" everywhere except `contact.html` (full address).
- Deploy = `git push origin main` → Vercel auto-deploys.
- Preview-browser quirk: animate `min-width` (not `flex-basis`) and use
  `display:none/block` (not `max-height`) for class-triggered transitions.
