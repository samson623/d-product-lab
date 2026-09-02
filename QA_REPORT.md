# QA report

This file records the final validation of the delivered portfolio. Source inspection covered every supplied HTML, CSS, JavaScript, and instruction file. The original sources remain preserved in `source_apps/original/`.

## Automated gates

- Production build
- TypeScript/React lint
- Fourteen unique product records
- Fourteen matching deployed HTML demos
- Valid title and viewport metadata on every app
- Inline JavaScript syntax check for every app
- Duplicate HTML ID scan
- Placeholder purchase-link scan
- Product route and source-file mapping

## Browser test matrix

The final browser pass completed on September 2, 2026 and covered:

- Homepage anchors, sticky navigation, mobile navigation, category filters, product count, and project-brief copy action
- Every product card and every shared demo route
- Return-to-portfolio and full-screen actions
- Desktop at approximately 1440px
- Tablet at approximately 768px
- Mobile at approximately 375px
- Horizontal overflow, clipped content, missing assets, failed routes, and console exceptions

Responsive measurements used real nested browser viewports at 375px, 768px, and 1440px. Document widths stayed inside each viewport (360/753/1425 CSS pixels after scrollbar allowance), the mobile menu appeared at 375px and 768px, the desktop navigation appeared at 1440px, and the product grid changed from one column to two without horizontal overflow.

App routes and representative interactions tested:

- BidLens: estimator loaded; client proposal rendered through the proposal navigation.
- SOWGuard: request-analysis modal opened.
- NudgeLedger: reminder composer opened from the collection queue.
- ProfitPreflight: sample-estimate modal and load flow opened.
- PixelGate: generated test image populated the batch.
- Ledgerfold: realistic demo ledger loaded and deposit matching produced results.
- QuoteFast: line-item creation worked.
- IronRedact: licence dialog opened; PDF processing remains dependent on a user-selected local PDF.
- BlackBar: privacy audit dialog opened; mobile tools drawer was added and verified by responsive rules.
- SitePulse: URL audit ran; rate-limited/unavailable public services produced the labeled demo fallback with 72/84/91/88 example scores instead of a broken screen.
- CoreCred: return tracking and vendor-credit recovery queue loaded with locally saved demo data.
- FreightDue: sample rate-confirmation analysis surfaced accessorial rules and recovery workflow controls.
- LedgerLens: demo ledger analysis populated recurring-charge, duplicate, fee, price-hike, and spending-pattern findings.
- ShiftForge: demo team loaded and the constraint-aware rota solver produced a weekly schedule.

Expected environment-only log noise was excluded: the testing browser extension mutates the root HTML before React hydration. SitePulse reports its handled live-service failures as warnings before presenting the labeled fallback. No unhandled application exception was found in the tested flows.

## Honest limitations

- This is a portfolio of working prototypes, not a claim that billing, authentication, production accounts, customer data, or server-backed entitlements are connected.
- SitePulse depends on public live audit services. It falls back to a labeled demo report when they are unavailable.
- IronRedact and BlackBar process documents in the browser, but load startup libraries from public CDNs unless an offline copy is created.
- Browser print, mailto, clipboard permissions, and download behavior can vary by browser policy.
- Local-only saved data is device/browser specific.

## Definition of Done

- [x] Every supplied source file inspected
- [x] Every distinct app appears exactly once
- [x] Portfolio navigation and filters implemented
- [x] Every app has a working route and launcher
- [x] Broken placeholder commerce removed from the delivered demos
- [x] Preventable discovered script and interaction issues repaired where reasonable
- [x] Responsive portfolio layouts implemented for mobile, tablet, and desktop
- [x] Product descriptions grounded in source behavior
- [x] Monetization language presented as realistic product paths, not results
- [x] Future product additions centralized in a reusable catalog
- [x] Local, test, and deployment instructions included
