# AGENTS.md amendment — DESIGN.md integration

Add this block near the beginning of the repository's existing `AGENTS.md`, immediately after the project mission / introductory instructions.

```md
## Required Project Sources

Three root-level files govern this project:

- `AGENTS.md` — how to build, test, and maintain the project.
- `DESIGN.md` — how every visible interface should look, feel, and behave.
- `CONTENT.md` — authoritative public copy, positioning, metrics, case-study facts, and content constraints.

Before implementing or modifying any visible UI:

1. Read `DESIGN.md`.
2. Read the relevant section of `CONTENT.md`.
3. Inspect existing design tokens and reusable components.
4. Reuse existing visual patterns before creating new ones.
5. Do not introduce a visual pattern that conflicts with `DESIGN.md`.
6. Do not change approved public facts or messaging merely to make a layout fit.
7. If implementation and design guidance conflict, preserve factual integrity and accessibility first, then follow `DESIGN.md`.

For substantial UI changes, verify the result against the design-drift tests in `DESIGN.md`.
```

## Recommended first Codex task after adding DESIGN.md

```text
Read AGENTS.md, DESIGN.md, and CONTENT.md in full.

Audit the current site against DESIGN.md without changing content facts.

Then:
1. identify design drift and inconsistencies,
2. normalize tokens/components where necessary,
3. create a development-only /dev/design-system visual catalog using existing production components,
4. verify the homepage, work index, case studies, experience/resume, and contact page at mobile, tablet, and desktop breakpoints,
5. preserve all authentic assets and existing functionality,
6. do not redesign merely for novelty.

Run lint, typecheck, and the production build after changes.

At the end, report:
- design-system inconsistencies found,
- files/components changed,
- remaining visual debt,
- accessibility issues,
- performance implications.
```
