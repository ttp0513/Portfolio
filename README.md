# Trong Phan Portfolio

A React portfolio focused on experimentation analytics, marketing measurement, and applied data science. The repository also documents the requirements and design decisions used to develop the site.

## Requirements

- Node.js 24 LTS
- npm 11 or newer

## Run locally

From the `Portfolio` directory:

```powershell
npm install
npm run dev
```

Open the local address printed by Vite. It is usually `http://localhost:5173`.

The routing prototype is available at:

```text
http://localhost:5173/projects/routing-preview
```

## Validate a production build

```powershell
npm run build
npm run preview
```

The optimized site is written to `dist/`.

## Current routes

- `/` - Portfolio homepage
- `/projects/routing-preview` - Dummy reusable case-study page
- `/not-found` - Unknown-route fallback

## Project documentation

- [`docs/01-project-brief.md`](docs/01-project-brief.md)
- [`docs/02-user-requirements.md`](docs/02-user-requirements.md)
- [`docs/diagrams/portfolio-use-cases.mmd`](docs/diagrams/portfolio-use-cases.mmd)

The dummy case study is intentionally labeled as a prototype. It will be replaced with evidence-backed project content after the reusable route and information architecture are approved.
