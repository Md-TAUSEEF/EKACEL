# Voltnova Energy — Frontend

A premium, original frontend for a battery & energy solutions company, built with React,
Vite, Tailwind CSS and React Router. Frontend only — all data is local/static so an API
can be wired in later without changing component structure.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    layout/    Navbar, Footer, DesktopDropdown, MobileMenu, ScrollToTop
    sections/  Homepage sections + PageHero, CardGrid, ListGrid
    ui/        Button, Container, SectionHeading, Badge, StatCard, ImageCard, Breadcrumb
  pages/       One file per route (or shared Hub/Detail templates for repeated patterns)
  routes/      AppRoutes.jsx — all app routes
  data/        navigation.js, products.js, solutions.js, industries.js, global.js, resources.js
```

## Notes

- Editing a file under `src/data/` updates every place that data is used (nav menus, homepage
  cards, hub pages, footer), so start there when changing products, solutions, industries,
  global markets or resources.
- Images currently point to stock photography URLs (Unsplash) as placeholders — swap the
  `image` fields in `src/data/*.js` for your own assets when ready.
- The navbar and mobile menu implement the interaction rules from the brief: only one desktop
  dropdown open at a time, nested flyouts beside their parent, Escape/outside-click closes
  everything, and the mobile accordion allows only one top-level and one nested section open
  at once.
