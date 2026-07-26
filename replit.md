# Voyage 2026 — GRID Community Hackathon

A fully responsive, Pirates-of-the-Arabian-Sea themed hackathon landing page built with React + Vite.

## Stack
- **Framework**: React 19 + Vite 8
- **Styling**: Pure CSS (no UI library) — custom design system in `src/App.css` + `src/index.css`
- **Fonts**: Cinzel Decorative, Cinzel (Google Fonts) + Inter, Space Mono

## How to run
```bash
cd voyage-react
npm run dev
```
App serves on port 5000.

## Project structure
```
voyage-react/
  src/
    components/     # One file per section
    App.jsx         # Root — imports all sections in order
    App.css         # All component styles + animations + responsive
    index.css       # CSS variables + global reset
  index.html        # Fonts loaded here
  vite.config.js    # port 5000, host 0.0.0.0
```

## Design system
- **Theme**: Dark deep ocean (#020810) with treasure gold (#d4a843) and corsair teal (#00c4a4)
- **Typography**: Cinzel Decorative for logo/display, Cinzel for headings, Inter for body
- **Animations**: floatY, shimmer, glowPulse, spinSlow, fadeSlideUp via IntersectionObserver
- **Responsive**: hamburger menu on ≤768px, grid collapses on ≤900px

## User preferences
- Pirates / Arabian sea theme throughout all copy and visuals
- Dark futuristic deep design with gold depth
- Fully responsive — mobile navbar must be compact and clean
- Pro top-notch quality — every element intentional
