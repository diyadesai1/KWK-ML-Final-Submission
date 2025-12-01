# Diya's KWK Machine Learning Challenge Submission

Modern React + TypeScript + Vite application showcasing research on women's gold ownership and financial empowerment in India.

## Overview
This app provides:
- A clean landing page summarizing the project
- Links to presentation video, slide deck, and Google Colab notebook
- Modular React components styled with Tailwind CSS

## Tech Stack
- React 18 + TypeScript
- Vite for fast dev/build
- React Router for client-side routing
- Tailwind CSS (+ Typography plugin) for styling
- Lucide React icons
- ESLint + TypeScript ESLint config

## Getting Started
```bash
npm install
npm run dev
```
Open the local URL (usually http://localhost:5173).

## Scripts
- dev: Start development server
- build: Type-check then build to `dist/`
- preview: Preview production build
- lint: Run ESLint

## Folder Structure
```
my-app/
  src/
    components/    # Reusable UI (NavBar, etc.)
    pages/         # Route-level pages
    assets/        # Static assets (SVG, images)
    App.tsx        # Root app component with routes
    main.tsx       # React entry point
    index.css      # Tailwind directives + global styles
  public/          # Static public assets
```

## Deployment
1. Build: `npm run build`
2. Serve `dist/` with any static host (Netlify, Vercel, GitHub Pages).