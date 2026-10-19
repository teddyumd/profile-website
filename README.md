# thailegeberel.com

Personal profile and portfolio site for Tewodros Hailegeberel — digital
transformation, digital health, and geospatial technology leader.

**Live:** https://thailegeberel.com

---

## Why I built this

I built this site because a résumé can only list job descriptions. Twenty years
of work across government, utilities, donor programmes, and a company I founded
in Addis Ababa does not fit into bullet points, and the part that matters most —
how I think, how I work with institutions, and what I leave behind when a
project ends — is exactly the part a CV cannot carry.

The people I want to reach are hiring managers, ministry counterparts, and
funders, and they read quickly. So the site is built to be scanned: the work
comes early, the claims carry numbers, and the longer reasoning sits behind a
click for anyone who wants it. Nothing on it is filler.

I also wanted the site to demonstrate the work rather than describe it. I spent
my career making maps, so this site has real ones: an interactive career map
that moves between the places the work actually happened, and a world map drawn
from proper geographic data rather than a decorative graphic.

## How I built it

I designed and built it myself, in Next.js and TypeScript with hand-written CSS
— no templates, no page builder, no component library.

A few choices I made deliberately:

**All the copy lives apart from the code.** Every role, case study, and project
is data in one folder, so the writing can be revised without touching markup.

**It works before JavaScript does.** The expandable sections are native HTML
disclosures and the booking link is an ordinary link, so the site stays usable
on a slow connection, behind a blocker, or with scripting off.

**The maps are real geography.** The world map is Natural Earth country
outlines, projected and simplified ahead of time so the page ships one inline
SVG instead of a mapping library. The career map is a separate page built on a
WebGL globe with Leaflet insets, covering thirteen chapters from Addis Ababa to
Maryland, Malawi, Haiti, Washington DC, and Burundi.

**Accessibility was part of the build, not an afterthought.** Semantic
structure, a skip link, visible focus states, reduced-motion support, and text
alternatives that carry the same information the maps do.

It deploys on Vercel from this repository.

## Credits

- Country outlines from [Natural Earth](https://www.naturalearthdata.com) via
  [world-atlas](https://github.com/topojson/world-atlas) (public domain)
- [Leaflet](https://leafletjs.com) and
  [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors for the
  inset maps
- [Three.js](https://threejs.org) for the globe
- Typefaces: [Manrope](https://fonts.google.com/specimen/Manrope) and
  [Domine](https://fonts.google.com/specimen/Domine)

## Use

This repository is visible so that the work can be read. It is not a template
and it is not open source.

The design, the code, the writing, the imagery, and the CV material are mine,
all rights reserved. Please do not copy this site, in whole or in part, or
reuse it as the basis for your own. If something here is useful to you, get in
touch and ask.
