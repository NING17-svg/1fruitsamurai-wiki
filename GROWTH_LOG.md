# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-16 - /updates refreshed to 2026-09-11 build and [UPD1] title prefix

- Task: Refresh the existing /updates page so the most-recent-universe-update row reflects the 2026-09-11 Roblox Games API 'updated' field, add a short note explaining the [UPD1] live game title prefix, and update the page's last-reviewed stamp to 2026-09-16.
- Files changed: `src/data/fruit-pages.ts`, `src/data/faq.ts`.
- URLs affected: `/updates` (and the four update-log FAQ entries it renders: `faq-latest-update`, `faq-update-changes`, `faq-update-cadence`, `faq-patch-notes-where`).
- Update baseline: timeline now lists 2026-07-01 (creation), 2026-08-21 (previous update), 2026-09-11 (most recent update), 2026-09-11 ([UPD1] live title prefix); keyFacts refreshed to "Latest updated: 2026-09-11" and "Per-build changelog: Not announced as of 2026-09-16"; no other pages or system facts were touched.
- Verification: `npm run verify`.

### 2026-09-01 - UPD1 active code surfaced on /codes, /beginner-tips, /creator-group

- Task: Update the wiki to surface UPD1 as the only currently active code on the official Roblox description, cite universe 10424311938 as the source, retain the two-step redemption (join creator group 918672217 then paste in the main menu codes text box with a refresh retry), and refresh review dates to 2026-09-01.
- Files changed: `src/data/fruit-pages.ts`, `src/data/faq.ts`.
- URLs affected: `/codes`, `/beginner-tips`, `/creator-group`.
- Code baseline: UPD1 is the only currently active code as of 2026-09-01; the codes-table row "A specific active code string is published" moved from "Not announced" to "Confirmed"; the two-step redemption (group join then main-menu paste with refresh retry) is preserved unchanged.
- Review dates: `lastReviewed` on `/codes`, `/creator-group`, and `/beginner-tips` refreshed from 2026-08-22 to 2026-09-01.
- Verification: `npm run verify`.

### 2026-08-30 - Adsterra six unit values re-encoded as string literals

- Task: Re-collect the six live Adsterra unit codes for `1fruitsamurai.wiki` and store them in `src/data/ads.ts` as plain double-quoted string literals instead of template literals, per `adsterra-integrator` contract.
- Files changed: `src/data/ads.ts`.
- URLs affected: None; ad units render in the existing fixed module slots, and no ad component was added, moved, or removed.
- Ad baseline: All six values (Native Banner, 728x90, 468x60, 320x50, 160x600, Smartlink) are identical to the codes collected from the Adsterra dashboard; only the literal encoding changed.
- Verification: `npm run verify`.

### 2026-08-25 - Static Assets deployment migration

- Task: Replace the OpenNext Worker runtime with Next.js static export served directly by Cloudflare Workers Static Assets.
- URLs affected: None; route, content, metadata, navigation, schema, titles, H1s, canonicals, and internal-link roles are unchanged.
- Runtime: Production output is `out/`; `wrangler.jsonc` has no Worker `main`, and fixed security headers are served from `public/_headers`.
- Verification: Full local verification and production public checks are required before the migration is considered complete.

### 2026-08-22 - Adsterra six units populated

- Task: Populate the fixed Adsterra Native Banner, 728x90, 468x60, 320x50, 160x600, and Smartlink values in `src/data/ads.ts` per `adsterra-integrator` contract.
- Files changed: `src/data/ads.ts`.
- URLs affected: None; ad units render in existing fixed module slots already declared by the builder.
- Ad baseline: All six placeholder values replaced with the live Adsterra codes for `1fruitsamurai.wiki`; no new ad components introduced.
- Verification: `npm run verify` (typecheck + validators) after the edit.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.

## 2026-10-01 — shared Worker deployment maintenance

User-authorized routing migration to `guide-pool-02` / Worker `task-bar-hero-calculator`; source push is connected to the shared Cloudflare Git build via the repository deploy hook. Content and public URL identities are unchanged. Completion is tracked by the central group migration report and live source/version verification.

## 2026-10-01 — static guide group correction

Production mapping: `guide-pool-02` / Worker `offbeat`. This group contains ten static guide sites and excludes the standalone calculator and OpenNext sites.
