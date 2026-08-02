# SEO notes (Kanmon concept site)

Date: 2026-08-01

## Fixed in this pass
- Unique `<title>` and meta description on every page (including partner landings and vs-competitors)
- Canonical URLs under `https://ant2624.github.io/kanmon-case/site/`
- Open Graph + Twitter summary cards
- FAQPage JSON-LD on `index.html`
- Organization JSON-LD on `about.html`
- `sitemap.xml` and `robots.txt` ready to flip
- Internal links from home verticals, case studies, platforms, about, and footer into partner landings + vs page
- Logo alt text clarified as concept redesign

## Still blocked by portfolio framing
- Every page keeps `<meta name="robots" content="noindex, nofollow">` so crawlers should not index this demo
- Concept banner remains on every page
- OG image currently points at the logo asset, not a dedicated social card
- No production analytics or Search Console verification

## Flip checklist when you want indexing
1. Remove or change `noindex, nofollow` on pages you want indexed
2. Confirm `robots.txt` Allow + sitemap URL
3. Replace OG image with a 1200x630 social card
4. Submit sitemap in Search Console for the GitHub Pages host
