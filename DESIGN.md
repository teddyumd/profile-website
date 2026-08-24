---
version: 1.0
name: tewodros-hailegeberel-design-system
description: >
  Design system for Tewodros Hailegeberel's public profile website.
  Institutional authority meets systems intelligence: an editorial, evidence-led
  interface for a senior public-sector transformation and digital systems leader.
  Warm paper surfaces, near-black ink, restrained institutional teal, sparse ochre,
  Manrope display typography, Source Serif 4 editorial copy, authentic work imagery,
  information-design diagrams, and minimal motion.
---

# DESIGN.md — Tewodros Hailegeberel

## Purpose

This file is the authoritative visual source of truth for the website.

- `AGENTS.md` defines **how the project is built**.
- `DESIGN.md` defines **how the project looks, feels, and behaves visually**.
- `CONTENT.md` defines **what the website says**.

Before implementing or modifying any visible interface, read this file and the relevant content in `CONTENT.md`.

Do not invent a new design language for individual pages.

---

# 1. Visual Theme & Atmosphere

## Core art-direction statement

> **Institutional authority meets systems intelligence.**

The website should feel like the digital presence of someone who can:

- sit with ministers, utility executives, donors, and institutional leaders;
- understand architecture, data, systems, and implementation deeply enough to challenge technical teams;
- turn those perspectives into a practical path forward.

It is a personal website, but it should not feel like a personal-brand template.

It should sit visually between:

- an excellent strategy consultancy;
- a rigorous public institution;
- a sophisticated technology practice;
- an editorial publication.

The result must still feel unmistakably like **one senior practitioner**, not a corporation.

## Desired emotional response

The visitor should feel:

- confidence;
- clarity;
- authority;
- judgment;
- depth;
- technical credibility;
- institutional maturity;
- grounded African operating experience;
- international relevance.

## Desired perception

> **Senior. Technical. Institutional. African. Global.**

## Visual personality

Use:

- editorial restraint;
- deliberate whitespace;
- strong typographic hierarchy;
- structured grids;
- meaningful evidence;
- thin rules;
- numbered sequences;
- maps and diagrams as information, not decoration;
- authentic documentary imagery;
- subtle systems/network motifs.

Avoid:

- portfolio-template energy;
- SaaS landing-page aesthetics;
- NGO visual clichés;
- generic developer aesthetics;
- GIS conference styling;
- startup hype;
- ornamental complexity.

## Governing visual test

Before approving any screen, ask:

> **Does this look like someone I would trust with a complex institutional problem?**

If not, remove decoration and strengthen hierarchy, evidence, or clarity.

---

# 2. Design Philosophy

## Evidence before adjectives

The site should visually privilege:

- metrics;
- artifacts;
- case studies;
- systems;
- project scale;
- decisions;
- real work.

Do not compensate for weak evidence with visual excitement.

## Restraint communicates seniority

Senior positioning should come from:

- confidence in whitespace;
- fewer, better components;
- clear hierarchy;
- controlled color;
- large but not theatrical typography;
- strong editorial pacing.

## Technology is infrastructure, not decoration

Technology appears through:

- product screenshots;
- architecture diagrams;
- maps;
- workflows;
- data visualizations;
- systems relationships;
- authentic technical artifacts.

Do not use code, grids, satellites, maps, or network lines merely to make the site look "technical."

## Africa is context, not an aesthetic theme

Show African context through:

- authentic locations;
- institutions;
- infrastructure;
- project work;
- documentary photography;
- real urban and professional environments.

Never communicate "Africa" through:

- continent silhouettes;
- safari or savannah imagery;
- flag-inspired palettes;
- generic village photography;
- decorative cultural motifs unrelated to the work.

## Make complexity look ordered

When the subject is complex, use:

- sequence;
- grouping;
- hierarchy;
- labels;
- numbering;
- relationships;
- controlled diagrams;
- explanatory captions.

The visual system should itself demonstrate systems thinking.

---

# 3. Color Palette & Semantic Roles

## Core palette

```yaml
colors:
  ink-950: "#10181B"
  ink-800: "#263238"
  slate-600: "#5D676B"
  slate-300: "#CBD0CF"
  paper-100: "#F4F1E9"
  paper-50: "#FAF9F5"
  white: "#FFFFFF"
  teal-700: "#236662"
  teal-800: "#194F4C"
  ochre-600: "#AE6B3C"
  error: "#A4493D"
```

## Semantic aliases

```yaml
semantic:
  canvas: "#FAF9F5"
  canvas-warm: "#F4F1E9"
  surface: "#FFFFFF"
  surface-dark: "#10181B"

  text-primary: "#10181B"
  text-secondary: "#5D676B"
  text-inverse: "#FFFFFF"
  text-inverse-muted: "#CBD0CF"

  action-primary: "#236662"
  action-hover: "#194F4C"

  border: "#CBD0CF"
  border-strong: "#5D676B"

  accent-editorial: "#AE6B3C"
  state-error: "#A4493D"
```

## Approximate color distribution

- **65%** warm neutrals;
- **25%** ink/dark surfaces and typography;
- **8%** institutional teal;
- **2%** ochre.

This is a guideline, not a mathematical requirement.

## Color roles

### Ink — `#10181B`

Use for:

- primary typography;
- footer;
- selected dark sections;
- high-emphasis diagram lines;
- strong structural contrast.

### Paper — `#FAF9F5`

The default site canvas.

Use warm paper rather than pure white for most full-page backgrounds.

### Warm Paper — `#F4F1E9`

Use for:

- methodology;
- editorial interludes;
- quiet supporting sections;
- selected content blocks.

### White — `#FFFFFF`

Use as a controlled surface for:

- screenshot frames;
- forms;
- occasional evidence panels;
- technical artifacts.

White is a surface, not the main visual identity.

### Teal — `#236662`

Use for:

- primary CTA;
- links where emphasis is useful;
- active/focus states;
- one important data series;
- selected diagram relationships;
- small technical emphasis.

Teal is the only primary action color.

### Ochre — `#AE6B3C`

Use rarely for:

- a location or human-context accent;
- one key annotation;
- a selected editorial mark;
- a secondary chart highlight.

Ochre must never compete with teal.

## Prohibited color behavior

Do not use:

- gradients;
- neon cyan;
- rainbow data palettes;
- multiple competing brand colors;
- Ethiopian flag color schemes;
- bright startup-purple;
- saturated blue as a second primary action color.

---

# 4. Typography Rules

## Font families

### Primary sans

**Manrope**

Use for:

- navigation;
- headlines;
- buttons;
- metrics;
- labels;
- case-study titles;
- captions;
- metadata;
- UI.

### Editorial serif

**Source Serif 4**

Use for:

- narrative intros;
- long-form case-study copy;
- essays;
- pull quotes;
- selected explanatory paragraphs.

Do not introduce a third font family unless explicitly approved.

## Desktop type scale

| Role | Family | Size / Line height | Weight | Notes |
|---|---|---:|---:|---|
| Display | Manrope | 68 / 72px | 550–600 | Rare; high-impact hero only |
| H1 | Manrope | 56 / 62px | 600 | Page titles |
| H2 | Manrope | 44 / 50px | 600 | Major sections |
| H3 | Manrope | 30 / 38px | 600 | Case/section subsections |
| H4 | Manrope | 22 / 29px | 600 | Supporting headings |
| Intro | Source Serif 4 | 26 / 38px | 400 | Editorial lead |
| Body Large | Source Serif 4 | 20 / 32px | 400 | Case-study narrative |
| Body | Manrope | 17 / 28px | 400 | UI/general copy |
| Small | Manrope | 14 / 21px | 400 | Metadata/support |
| Caption | Manrope | 12 / 18px | 500 | Captions/technical labels |
| Eyebrow | Manrope | 12 / 16px | 650 | Uppercase, tracked |
| Metric | Manrope | 52 / 56px | 600 | Evidence figures |

## Mobile type scale

| Role | Size / Line height |
|---|---:|
| Display | 44 / 48px |
| H1 | 40 / 45px |
| H2 | 34 / 40px |
| H3 | 26 / 33px |
| H4 | 21 / 28px |
| Intro | 22 / 32px |
| Body Large | 19 / 30px |
| Body | 16 / 26px |
| Metric | 40 / 44px |

Minimum normal text size:

> **16px**

Do not reduce body text to preserve a desktop composition.

## Eyebrow styling

Use:

```css
font-family: var(--font-sans);
font-size: 12px;
line-height: 16px;
font-weight: 650;
letter-spacing: 0.10em;
text-transform: uppercase;
```

Allow up to `0.14em` tracking where useful.

## Letter spacing

- Large Manrope headings may use subtle negative tracking.
- Body copy should use normal tracking.
- Never heavily track normal headings.
- Uppercase is reserved for eyebrows and compact metadata.

## Reading width

Narrative content:

- ideal: `660–720px`;
- maximum line measure: approximately **68 characters**.

Hero:

- maximum text block around `850px`.

Do not allow long paragraphs to span the full page container.

## Hierarchy rule

Use size and whitespace before:

- color;
- borders;
- cards;
- icons.

---

# 5. Layout Principles

## Containers

```yaml
layout:
  page-max: 1280px
  content-max: 1180px
  reading-max: 720px
```

## Desktop grid

At `1200px+`:

- 12 columns;
- 24px gap;
- 48–64px exterior gutters;
- content max `1180px`.

Typical usage:

- hero: 9–10 columns;
- reading copy: ~7 columns;
- case study: common 5/7 split;
- wide artifacts: may span 10–12 columns.

## Tablet grid

At `768–1199px`:

- 8 columns;
- 32px page gutter.

## Mobile grid

At `0–767px`:

- conceptual 4-column grid;
- 20px page gutter;
- 16px absolute minimum.

## Spacing scale

```yaml
spacing:
  s1: 4px
  s2: 8px
  s3: 12px
  s4: 16px
  s5: 24px
  s6: 32px
  s7: 48px
  s8: 64px
  s9: 80px
  s10: 96px
  s11: 120px
  s12: 144px
```

## Section rhythm

Desktop:

- standard major section: `120px 0`;
- dense evidence section: `96px 0`;
- hero: approximately `140–180px` vertical;
- final CTA may use `120–144px`.

Mobile:

- major sections: approximately `72–88px`;
- reduce internal spacing carefully;
- never compress copy into visual density.

## Whitespace philosophy

Whitespace should distinguish:

- major narrative chapters;
- evidence from explanation;
- strategic work from technical detail;
- case-study sections.

Prefer whitespace over unnecessary horizontal lines.

## Alignment

Default:

- left-aligned.

Centered layouts should be exceptional and short:

- possibly one final CTA;
- not long-form copy;
- not case-study narratives.

Avoid centered text throughout the site.

---

# 6. Surface, Depth & Elevation

## Surface hierarchy

Only four primary surfaces:

1. `paper-50` — default;
2. `paper-100` — warm secondary;
3. white — artifact/component surface;
4. `ink-950` — dark emphasis.

Do not create many tinted section backgrounds.

## Corner radius

```yaml
rounded:
  input: 4px
  image: 4px-8px
  button: 6px
  card: 8px
```

Avoid:

- 20px+ SaaS cards;
- giant rounded section wrappers;
- pill-shaped containers unless the semantic element is truly a tag.

## Borders

Default:

```css
border: 1px solid #CBD0CF;
```

Use thin rules and boundaries.

Avoid thick decorative borders.

## Shadows

Default:

> **none**

Optional for a genuinely floating artifact:

```css
box-shadow: 0 8px 30px rgba(16, 24, 27, 0.08);
```

Never stack multiple shadows.

## Elevation philosophy

Hierarchy should be created primarily by:

- spacing;
- typography;
- surface contrast;
- scale;
- placement.

Not by shadows.

---

# 7. Component Styling

## Primary Button

Purpose:

> **Conversion only**

Canonical label:

> **Discuss an opportunity**

Desktop/mobile minimum height:

`52px`

Style:

```yaml
button-primary:
  background: "#236662"
  color: "#FFFFFF"
  radius: 6px
  padding-inline: 22px
  min-height: 52px
  font: Manrope
  weight: 600
```

Hover:

- background `#194F4C`;
- arrow translates ~3px right;
- transition ~160ms ease-out.

Focus:

- strong visible external ring;
- suggested: `0 0 0 3px rgba(35,102,98,.28)`.

Disabled:

- opacity ~0.42;
- no active-looking hover state.

Never:

- scale;
- bounce;
- glow;
- pulse;
- use a gradient.

## Text Links

Purpose:

> **Exploration**

Examples:

- Explore selected work ↓
- View case study →
- View full résumé →
- Read perspective →

Style:

- ink by default;
- teal on hover/focus if appropriate;
- underline or strong text decoration on interaction;
- subtle arrow movement permitted.

Rule:

> **Button = conversion. Text link = exploration.**

## Header

Desktop:

- approximately 72–80px high;
- name wordmark left;
- nav right;
- primary CTA far right.

Preferred navigation:

- Work
- Expertise
- Perspective
- About
- Résumé
- Discuss an opportunity

If Perspective is not launched, do not show it.

Sticky behavior:

- may become sticky after initial scroll;
- paper background;
- subtle hairline border;
- optional mild opacity only if contrast remains strong.

Avoid:

- heavy glassmorphism;
- floating pill nav;
- oversized logo treatment.

## Mobile Navigation

Use a conventional accessible menu.

Requirements:

- clear menu button;
- adequate touch target;
- full keyboard support;
- focus management;
- escape closes;
- body scroll handled correctly.

Visual style:

- quiet;
- paper background;
- large simple links;
- primary CTA at bottom.

Do not create an elaborate animated overlay.

## Forms

### Fields

Min height:

`52px`

Textarea:

approximately `160px`.

Default:

```yaml
input:
  background: "#FFFFFF"
  text: "#10181B"
  border: "#AEB6B5"
  radius: 4px
```

Hover:

- border darkens modestly.

Focus:

- teal border;
- visible outer focus ring.

Error:

- `#A4493D`;
- textual message required;
- never communicate error with color alone.

Labels:

- persistent;
- visible;
- no placeholder-only labeling.

## Cards

Cards are not the dominant page structure.

Use cards for:

- compact Technology Lab items;
- occasional supporting evidence;
- discrete artifacts.

Do not use uniform card grids for every section.

### Case-study preview

Preferred editorial structure:

```text
01
SECTOR / CONTEXT

Large case-study title
Short executive summary

Evidence / role

View case study →

                    [image / artifact]
──────────────────────────────────────
```

Use a divider or whitespace, not a floating SaaS card.

## Metrics

Metric treatment:

- large Manrope numeric value;
- small explanation;
- no icon required;
- no circular chart;
- no counting animation unless subtle and optional.

Metrics should feel like evidence, not dashboard widgets.

## Tags

Use sparingly.

Tags are acceptable for:

- sector;
- project type;
- technology labels in the Technology Lab.

Do not turn every concept into a pill.

---

# 8. Case-Study Information Design

Case studies are the most important evidence surfaces on the site.

They should feel like:

> **executive project narratives with technical depth**

not:

- résumé bullet pages;
- agency portfolio tiles;
- software product landing pages.

## Case-study page anatomy

Recommended order:

1. Eyebrow
2. H1
3. Deck / thesis
4. Role / period / location / scale
5. Hero artifact or image
6. Context / challenge
7. My role
8. What I did
9. System / approach diagram
10. Evidence / scale
11. What changed, was enabled, or was learned
12. What this demonstrates
13. Key lesson
14. Next case / CTA

Not every case needs the exact same number of sections.

The narrative should follow the actual work.

## Evidence sidebar / fact rail

May contain:

- role;
- organization;
- date;
- geography;
- project scale;
- 2–4 quantitative facts.

Keep it simple.

Do not create dashboard-like metric clutter.

## Digital Health visual logic

Do **not** use utility-system labels such as ERP/SAP or SCADA here.

Preferred conceptual relationship:

```text
GOVERNMENT PRIORITIES
        ↓
PORTFOLIO & INVESTMENT
        ↓
DIGITAL PLATFORMS
        ↕
INTEROPERABILITY & DATA
        ↓
SERVICE DELIVERY / DECISIONS
        ↓
INSTITUTIONAL OWNERSHIP
```

Supporting platform/domain layer may include:

- community health;
- EMR;
- logistics/supply chain;
- workforce;
- registries;
- regulatory systems;
- analytics.

## Utility visual logic

Preferred relationship:

```text
ASSETS ───── GIS ───── CUSTOMERS
   │          │            │
   ├──── ERP / SAP ────────┤
   │          │            │
 SCADA ── OPERATIONS ── METERING
              │
       OUTAGE MANAGEMENT
```

The diagram should communicate **relationships**, not exact confidential architecture.

## eAdrasha visual logic

Prefer authentic product and operational evidence.

Possible visual story:

```text
LOCAL PLACE DATA
      ↓
FIELD COLLECTION
      ↓
QUALITY CONTROL
      ↓
LOCATION PLATFORM
   ↙    ↓     ↘
SEARCH ROUTING GEOCODING/API
      ↓
USERS / BUSINESSES / PARTNERS
```

Use original screenshots and photos where available.

---

# 9. Image & Artifact Direction

## Priority order

1. authentic documentary work photography;
2. real product/system artifact;
3. map/data visualization;
4. purpose-built explanatory graphic;
5. restrained abstract system graphic.

Never use generic stock photography to fill a major case study.

## Flagship portrait

Target impression:

> **Senior adviser at work, not candidate seeking employment.**

Prefer:

- environmental portrait;
- waist-up or three-quarter framing;
- natural light;
- contemporary Addis or institutional environment;
- structured business casual / jacket;
- direct but relaxed expression.

Avoid:

- overly staged corporate headshot;
- artificial studio background if a strong environmental portrait exists;
- exaggerated executive poses.

## Documentary work photography

Favor:

- real workshops;
- technical discussions;
- infrastructure;
- site visits;
- whiteboards;
- presentations;
- collaborative sessions;
- urban context.

Treatment:

- natural skin tones;
- restrained saturation;
- moderate contrast;
- no teal-and-orange cinematic grading;
- no monochrome-only system.

## Screenshots

Present screenshots as evidence.

Use:

- clean crop;
- enough context to understand the artifact;
- captions;
- device/browser chrome only when it adds meaning;
- light white surface if required.

Do not place screenshots inside excessive 3D browser mockups.

## Maps

Maps are information design.

Use:

- thin boundaries;
- limited labels;
- one primary highlight color;
- negative space;
- direct annotation.

Avoid:

- satellite-background decoration;
- default GIS symbology;
- rainbow choropleths;
- giant pins;
- screenshots of Google Maps;
- unnecessary legends.

## Data visualization

Preferred:

- teal primary;
- slate secondary;
- ochre highlight.

Use:

- direct labels;
- concise annotation;
- clean axes;
- limited chart furniture.

Avoid:

- 3D charts;
- rainbow palettes;
- decorative dashboards;
- pie charts unless genuinely appropriate.

## Architecture / workflow diagrams

Use:

- clear sequence;
- simple nodes;
- thin lines;
- minimal color;
- labels;
- explicit relationships.

Diagrams should explain one idea at a time.

---

# 10. Signature Motif — Connected Systems

The visual motif is:

> **Connected systems**

Use subtly through:

- nodes;
- paths;
- coordinates;
- grids;
- relationships;
- annotations;
- thin lines.

Conceptual brand logic:

```text
INSTITUTION
     │
     ↓
 STRATEGY ─── DATA
     │           │
     ↓           ↓
GOVERNANCE → SYSTEM
                 │
                 ↓
              OUTCOME
```

This is a conceptual visual language, not a logo.

Use at low visual intensity.

Default opacity for decorative linework:

approximately `6–12%`.

Never let the motif reduce text readability.

---

# 11. Iconography

Prefer:

- typography;
- numbering;
- labels;
- diagram marks.

If icons are needed:

- one coherent line-icon system;
- stroke approximately `1.5–1.75px`;
- geometric and restrained.

Never:

- mix icon libraries;
- use emoji as interface icons;
- use colorful illustration icons;
- use icons where a number or word is clearer.

Example:

```text
01 Strategy
02 Systems
03 Implementation
```

is preferable to three generic icons.

---

# 12. Motion & Interaction

Motion should suggest:

> **systems coming into order**

Allowed:

- soft opacity/translate reveal;
- short line drawing;
- restrained metric count-up;
- diagram-node appearance;
- arrow translation;
- underline animation.

Timing:

```yaml
motion:
  fast: 160ms
  standard: 280ms
  slow: 500ms
```

Easing:

- calm ease-out;
- avoid elastic or springy motion for core UI.

Never use:

- scroll hijacking;
- autoplay video;
- gratuitous parallax;
- mouse-following gradients;
- floating 3D objects;
- rotating globes;
- typewriter hero text;
- page transitions that delay navigation.

Honor:

`prefers-reduced-motion`.

All essential information must remain available with motion disabled.

---

# 13. Responsive Behavior

## Mobile — `0–767px`

Rules:

- one-column major sections;
- 20px side gutter;
- mobile nav;
- metrics usually 2×2;
- methodology becomes vertical;
- timeline one-sided;
- case-study media follows the relevant text;
- decorative systems motif simplifies or disappears;
- avoid tiny multi-column metadata;
- body text minimum 16px;
- touch targets ~44×44px or larger where practical.

Hero:

- headline may wrap across 3–5 lines;
- CTA remains content-width unless full-width is clearly better;
- proof line may wrap into two clean rows.

## Tablet — `768–1199px`

Rules:

- 8-column grid;
- 32px outer gutter;
- hero roughly 7/8 columns;
- case studies approximately 4/4 split;
- About may use 3/5 portrait/text;
- methodology can remain horizontal only when readable;
- desktop navigation only when it genuinely fits.

Tablet is a distinct layout mode, not a scaled desktop.

## Desktop — `1200px+`

Rules:

- 12-column grid;
- 1180px content max;
- hero roughly 9–10 columns;
- reading copy around 7 columns;
- case-study copy/media common split 5/7;
- wide technical artifacts may extend beyond reading column;
- center layout at very wide viewport widths;
- do not keep stretching content indefinitely.

## Responsive implementation principle

Prefer:

> **one semantic component, responsive CSS**

over:

> separate desktop and mobile component trees.

Only create separate components when the behavior truly differs.

---

# 14. Accessibility as Visual Design

Target:

> **WCAG 2.2 AA**

Visual requirements:

- visible focus on every interactive control;
- sufficient contrast;
- primary controls ~44px minimum target where practical;
- no text smaller than 16px for normal body;
- persistent form labels;
- underlines or equivalent cues for links;
- no color-only states;
- layouts survive 200% zoom;
- image captions readable;
- charts/maps have textual explanation;
- focus rings work on both paper and dark surfaces.

Never remove outlines for aesthetic reasons.

---

# 15. Page-Level Visual Rhythm

Homepage rhythm should feel intentionally varied:

```text
QUIET
Hero

PROOF
Metrics

EXPLANATION
Expertise

IMMERSIVE
Case study

QUIET
Case study

STRUCTURED
How I work

TECHNICAL
Technology Lab

EDITORIAL
Perspective

HUMAN
About

DECISIVE
Final CTA
```

Do not make every section:

- same padding;
- same card grid;
- same background;
- same title alignment.

Consistency comes from the design system, not repetition of one layout.

---

# 16. Page-Specific Direction

## Homepage

Goal:

> Understand the positioning in seconds, then progressively prove it.

Visual priorities:

1. headline;
2. concise proof;
3. selected work;
4. methodology;
5. human context;
6. CTA.

Do not place a full résumé timeline above case studies.

## Work Index

Should feel editorial.

Each project should have:

- number;
- sector;
- title;
- one meaningful summary;
- role/evidence;
- artifact/image;
- text link.

Avoid a uniform portfolio-card wall.

## Case Studies

Optimize for reading and evidence.

Use:

- generous reading measure;
- wide artifacts;
- small fact rails;
- diagrams;
- real images;
- selected metrics.

## Experience / Résumé Page

The page should communicate career progression.

Use:

- chronological timeline;
- recent roles with more detail;
- older roles compressed;
- evidence selectively.

Do not make it resemble a PDF résumé pasted into HTML.

## Contact

Should be one of the calmest pages.

Use:

- strong heading;
- short opportunity framing;
- minimal form;
- direct email fallback;
- no sales funnel visuals.

---

# 17. Hard Do's

## DO

- use authentic evidence;
- use warm paper as the core canvas;
- keep teal reserved for action and technical emphasis;
- use serif narrative copy selectively;
- use numbered sequences;
- use thin rules;
- show real artifacts;
- use whitespace generously;
- make case studies substantial;
- show institutional relationships;
- keep diagrams explanatory;
- keep executive readers in mind;
- make mobile reading excellent;
- design for variable connectivity;
- preserve project confidentiality.

---

# 18. Hard Don'ts

## NEVER

Do not use:

- gradients;
- glassmorphism as a theme;
- giant pill buttons;
- rounded SaaS containers everywhere;
- excessive cards;
- heavy shadows;
- neon colors;
- generic Africa stock;
- African continent silhouettes;
- Ethiopian flag color identity;
- stock handshakes;
- rotating globes;
- glowing location pins;
- full-screen satellite imagery;
- default ArcGIS exports;
- rainbow maps;
- software-logo clouds;
- skill bars;
- percentage skill meters;
- circular proficiency charts;
- code wallpaper;
- animated terminal backgrounds;
- typewriter hero effects;
- autoplay video;
- carousels;
- popups;
- newsletter interruptions;
- fake testimonials;
- fake client logos;
- unverifiable "Trusted by" claims;
- emojis in professional headings;
- more than one competing primary CTA;
- long centered paragraphs;
- decorative icons for every concept.

Do not build a visual system that could be mistaken for a generic GIS consultant portfolio.

---

# 19. Design Drift Detection

Before merging any major UI change, evaluate:

## Trust test

**Does this look appropriate for someone advising governments, donors, utilities, and senior institutional leaders?**

## Evidence test

**Is the design helping evidence become easier to understand?**

## Category test

**Could this page belong to a generic GIS freelancer or developer?**

If yes, elevate it.

## Restraint test

**Is there a visual element that is present only because the page felt empty?**

If yes, remove it.

## System test

**Does the new component use established typography, spacing, color, radius, and interaction rules?**

If not, justify the deviation.

## Authenticity test

**Does imagery show real work or meaningful artifacts?**

If not, reconsider whether imagery is needed.

---

# 20. Agent Implementation Guide

When asked to build or modify a page:

1. Read `DESIGN.md`.
2. Read the relevant section of `CONTENT.md`.
3. Inspect existing components and tokens.
4. Reuse established patterns.
5. Design the hierarchy before adding decoration.
6. Use real assets where available.
7. Do not invent imagery, metrics, or project facts.
8. Preserve accessibility.
9. Check all three responsive modes.
10. Remove unnecessary client-side behavior.
11. Compare the result to the hard Don't list.
12. Run the visual review tests before considering the page complete.

## When requirements conflict

Priority order:

1. factual/content integrity;
2. accessibility;
3. usability;
4. design-system consistency;
5. visual flourish.

Never sacrifice the first four for the fifth.

---

# 21. Quick Reference

## Brand

```text
Institutional authority meets systems intelligence.
```

## Desired perception

```text
Senior. Technical. Institutional. African. Global.
```

## Primary CTA

```text
Discuss an opportunity
```

## Palette

```text
Canvas       #FAF9F5
Warm canvas  #F4F1E9
Ink          #10181B
Secondary    #5D676B
Border       #CBD0CF
Teal         #236662
Teal hover   #194F4C
Ochre        #AE6B3C
Error        #A4493D
```

## Fonts

```text
Manrope
Source Serif 4
```

## Container

```text
1180px
```

## Reading width

```text
~720px / ~68 characters
```

## Radius

```text
4–8px
```

## Shadow

```text
none by default
```

## Responsive modes

```text
Mobile   0–767
Tablet   768–1199
Desktop  1200+
```

---

# 22. Design-System Preview Route

For development, create a visual catalog at a clearly non-production-facing route such as:

```text
/dev/design-system
```

It should display:

- full color palette;
- typography scale;
- spacing scale;
- buttons and states;
- links;
- inputs and error states;
- metric style;
- eyebrow labels;
- case-study preview;
- dark surface;
- image treatment examples;
- map/data-viz style sample;
- system diagram sample.

The route exists to detect design drift.

It should:

- reuse production components;
- not introduce new visual patterns;
- be excluded from navigation;
- be excluded from indexing;
- be removable or gated for production if desired.

Do not create a separate second design system just for the preview.

---

# 23. Final Governing Principle

> **Do not design a website for a GIS expert who has done strategy work. Design a website for a public-sector transformation leader whose technical depth happens to include GIS, digital systems, data, software, architecture, and implementation.**

Every visual decision should support that distinction.
