# DocSpace

DocSpace is a small Vite + Tailwind site that showcases Solar System planets with rich pop-up descriptions, a rotating missions banner, and supporting pages for documentation, about, and contact.

## Features
- Interactive planet grid (`index.html`) with modal details powered by `src/main.js`.
- Auto-rotating missions banner with titles/descriptions and fades.
- Tailwind v4 styling via `@tailwindcss/vite` and `src/style.css`.
- Secondary pages: `src/about.html`, `src/documentation.html`, `src/contact.html`.
- Image set in `src/images/` for planets and mission art.

## Tech Stack
- Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Vanilla JS

## Getting Started
1) Ensure Node.js 18+ is installed.  
2) Install dependencies: `npm install`  
3) Start dev server: `npm run dev` (opens on http://localhost:5173)  
4) Build for production: `npm run build`  
5) Preview production build: `npm run preview`

## Project Structure
- `index.html` — landing page with planet grid and banner.
- `src/main.js` — modal logic and banner rotation.
- `src/style.css` — Tailwind entry point.
- `src/about.html`, `src/documentation.html`, `src/contact.html` — secondary pages.
- `src/images/` — planet sprites and mission photos.
- `public/` — static assets served as-is (Vite standard).

## Usage Notes
- Planet texts are in Portuguese and currently contain mojibake; consider saving `src/main.js` as UTF-8 and retyping accented characters for readability.
- Navigation links assume the site is served from the project root; adjust paths if deploying under a subfolder.

## Roadmap Ideas
- Fix encoding issues in planet descriptions.
- Add real documentation content to `src/documentation.html`.
- Implement a contact form and basic validation in `src/contact.html`.
- Add ARIA labels and focus traps to the modal for accessibility.

