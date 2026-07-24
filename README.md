# Thar - The Taste of Rajasthan

A restaurant website built with React and Vite, showcasing the menu, gallery, and catering services for a Rajasthani restaurant.

**Live site:** [tharthetasteofrajasthan.vercel.app](https://tharthetasteofrajasthan.vercel.app)

## Features

- Single-page layout with Hero, About, Menu, Gallery, Catering, and Contact sections
- Categorized menu (Must Haves, Starters, Main Course, Royal Thalis, Breads & Rice) driven from a data file, not hardcoded in components
- Order modal for placing orders directly from the site
- Downloadable PDF menu
- Scroll reveal animations on section entry
- Fully responsive layout

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 7
- [React Router](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/) for icons
- ESLint for linting

## Project structure

```
src/
  components/   Shared UI components (Navbar, Footer, OrderModal, Reveal)
  sections/     Page sections (Hero, About, Menu, Gallery, Catering, Contact)
  data/         Static content (menu.js)
  assets/       Images, logo, and gallery photos
  styles/       Global styles and CSS variables
public/         Static files served as-is (menu.pdf, favicon)
```

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Linting

```bash
npm run lint
```
