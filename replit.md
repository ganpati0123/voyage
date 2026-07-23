# Voyage 2026 — GRID Community Hackathon Website

## Project Overview
A single-page hackathon website for **Voyage 2026**, organized by GRID Community. The design is inspired by HackVerse 2.0 — dark navy/teal theme with pixel fonts, parallax hero with animated starfield and 3D floating objects, and full-page sections.

## Stack
- Pure HTML + CSS + Vanilla JS (no framework, no build step)
- Served with Python's `http.server` from the `voyage/` directory
- Google Fonts: Press Start 2P (pixel headings), Space Mono, Inter

## How to Run
```bash
cd voyage && python3 -m http.server 5000
```
Then open the preview at port 5000.

## File Structure
```
voyage/
  index.html      — full single-page website
  css/style.css   — all styles (CSS variables, responsive)
  js/script.js    — starfield canvas, parallax, FAQ, form logic
```

## Key Content (from brochure)
- **Event:** VOYAGE 2026 — 36-hour national hackathon
- **Organizer:** GRID Community (2000+ members)
- **Date:** 26–27 September 2026
- **Teams:** 40 teams, 3–4 members each
- **Prize Pool:** ₹25,000 (1st: ₹10k, 2nd: ₹7k, 3rd: ₹5k)
- **Tracks:** Devil's Triangle (AI/ML), Fountain of Youth (HealthTech), Open Seas (Open Innovation)
- **Sponsors:** Algorand, OSEN, Mewayz Global Corporation
- **Contacts:** Ganpati Raj (+91 9507542854), Krishna Raj Barnwal (+91 7362994375)

## User Preferences
- Only Ganpati Raj and Krishna Raj Barnwal in the Contact section
- All content sourced from the uploaded brochure PDF
- Design matches the HackVerse 2.0 style: dark navy, teal + gold accents, pixel font headings, animated starfield hero
