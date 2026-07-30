# Portfolio

Personal portfolio site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Project structure

```text
/
├── astro.config.mjs
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── Ticker.astro
│   │   ├── ImageLightbox.jsx
│   │   ├── CaseStudyCard.astro
│   │   └── Icon.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── CaseStudyLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── work/
│   │   │   ├── case-study-1.astro
│   │   │   ├── case-study-2.astro
│   │   │   └── case-study-3.astro
│   │   └── illustrations.astro
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── fonts.css
│   └── assets/
│       ├── images/
│       ├── motion/
│       └── icons/
└── .github/
    └── workflows/
        └── deploy.yml
```

## Commands

| Command             | Action                                       |
| :------------------- | :-------------------------------------------- |
| `npm install`         | Install dependencies                          |
| `npm run dev`          | Start local dev server at `localhost:4321`    |
| `npm run build`        | Build production site to `./dist/`            |
| `npm run preview`       | Preview the production build locally          |

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.

In the repo settings, under **Pages**, set the source to **GitHub Actions**.

The site is served from `https://nomorehumming-ux.github.io/portfolio-website/` (see `site`/`base` in [astro.config.mjs](astro.config.mjs)).
