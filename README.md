# thailegeberel.com

Personal profile and portfolio site for **Tewodros Hailegeberel** — digital
transformation, digital health, and geospatial technology leader.

**Live:** https://thailegeberel.com

---

## Stack

| | |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16.3 (App Router, Turbopack) |
| UI | React 19.2, TypeScript 6.0 |
| Styling | Hand-written CSS with custom properties — no CSS framework |
| Fonts | `next/font/google` — Manrope (sans), Domine (serif) |
| Email | [Resend](https://resend.com) for the contact form |
| Hosting | Vercel, deployed from `main` |

## Getting started

Requires Node 20 or newer.

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

The site runs at http://localhost:3000.

### Environment variables

See [`.env.example`](.env.example) for the annotated list.

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production | Absolute origin for canonical URLs, `sitemap.xml`, `og:image`, and JSON-LD. Falls back to `http://localhost:3000`. |
| `RESEND_API_KEY` | For the contact form | Resend API key. |
| `CONTACT_TO_EMAIL` | Optional | Where enquiries land. Defaults to the address in `src/content/site.ts`. |
| `CONTACT_FROM_EMAIL` | Optional | Verified sending address. Without a verified domain, Resend's shared `onboarding@resend.dev` sender only delivers to the account's own address. |

### Scripts

```bash
npm run dev        # development server
npm run build      # production build
npm run start      # serve a production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

## Project structure

```
src/
  app/          routes (App Router), API route for the contact form,
                sitemap.ts, robots.ts, opengraph-image.tsx
  components/   layout/, content/, ui/
  content/      all copy and data, separated from presentation
  lib/          siteUrl helpers
  styles/       tokens.css, typography.css, globals.css, reset.css
  types/        shared content types
public/
  life-in-layers/   the interactive career map (static page)
  images/, icons/, resume/
```

Copy and data live in `src/content/`, not in JSX — `site.ts` (identity and
metadata), `career.ts` (roles), `education.ts`, `work/caseStudies.ts`,
`products.ts`, `projects.ts`, `gis.ts`.

## Notes on the build

A few decisions that are easy to undo by accident:

**Progressive enhancement.** Disclosures use native `<details>` / `<summary>`
and the booking link is a plain anchor, so both work before hydration, with
JavaScript disabled, and behind blockers. They are deliberately not React
state.

**The career map is a static page, not a route.** It lives at
`public/life-in-layers/index.html` and renders a Three.js globe with a Leaflet
inset across 13 chapters. Next serves `/public` at exact paths and does not map
a directory to `index.html`, so `/life-in-layers` depends on a rewrite in
[`next.config.ts`](next.config.ts). Links to it must be plain `<a>` rather than
`next/link`, which is what the `external` flag on `NavigationItem` is for.

**The world map is pre-projected data.** `src/content/worldMap.ts` holds
Natural Earth country outlines already projected into a 960×480 box and rounded
to whole pixels, generated once with `world-atlas`, `topojson-simplify`, and
`d3-geo`. The browser gets one inline SVG — no mapping library, no runtime
projection. Regenerate rather than hand-editing the path data.

**Design tokens.** Colours, spacing, and the type scale are defined in
`src/styles/tokens.css`. Values are not hard-coded elsewhere.

## Accessibility

Semantic landmarks and heading order throughout, a skip link, visible focus
styles, `prefers-reduced-motion` guards on animation, and text alternatives for
the maps — the country list beside the world map carries the same information
the shapes do.

## Deployment

Pushes to `main` deploy automatically on Vercel. Set
`NEXT_PUBLIC_SITE_URL` to the production origin in the project's environment
variables, or canonical URLs and social images will point at the preview
hostname.

## Credits

- Country outlines from [Natural Earth](https://www.naturalearthdata.com)
  via [world-atlas](https://github.com/topojson/world-atlas) (public domain)
- [Leaflet](https://leafletjs.com) and
  [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors for the
  inset maps
- [Three.js](https://threejs.org) for the globe
- Typefaces: [Manrope](https://fonts.google.com/specimen/Manrope) and
  [Domine](https://fonts.google.com/specimen/Domine)

## Use

The source is public so the work can be read. The written content, imagery, and
CV material are not licensed for reuse.
