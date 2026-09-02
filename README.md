# D Product Lab

A professional, extensible portfolio for D's working software products and product prototypes. The public site uses only the name **D**.

## What is included

- Premium responsive portfolio homepage
- Working category filters
- One portfolio listing for each of the 14 distinct supplied apps
- A consistent demo launcher with an obvious return path
- Repaired production copies in `public/apps/`
- Untouched supplied references in `source_apps/original/`
- Product content in one reusable data file, `app/products.ts`
- Static verification tests, repair notes, and QA report

## Project map

```text
app/
  page.tsx          portfolio homepage and filters
  products.ts       reusable product catalog; add future projects here
  demo/page.tsx     shared app-launch experience
  globals.css       portfolio design system and responsive styles
public/apps/        repaired, deployed interactive app demos
source_apps/original/ untouched handoff files and master instructions
tests/              automated integrity checks
REPAIR_LOG.md       changes and honest limitations by app
QA_REPORT.md        tested flows and Definition of Done record
```

## Run locally

1. Install Node.js 22 or newer.
2. In this folder, run `npm ci`.
3. Run `npm run dev`.
4. Open the address shown by the development server.

## Test

- `npm run lint` checks the TypeScript/React project.
- `npm test` creates a production build and runs the portfolio integrity tests.

## Deploy to Vercel

Import this repository into Vercel with the Next.js framework preset. No environment variables are required. Vercel installs dependencies and runs `npm run build` automatically.

## Add a future GitHub project

1. Add a normalized product record to `app/products.ts`.
2. Set its `slug`, descriptive content, categories, commercial path, status, icon, and demo file.
3. Place a browser-ready demo in `public/apps/`, or update the shared demo route for a hosted external project.
4. Run the tests and complete the browser QA checklist in `QA_REPORT.md`.

Do not add fabricated traction, customers, testimonials, or revenue. Product descriptions should stay grounded in working source.
