# Optometry Clinical Learning

A modern, modular web application for optometry students, built around a shared design system so
new learning tools can be added without rewriting the existing app.

**Live site:** https://cataractz.github.io/Study-Tool/ (auto-deployed on every push to this branch)

## What's built (Phase 1)

- **Dashboard** — tool cards for each active tool plus labeled "Coming Soon" placeholders for
  future tools (Optics, Retinoscopy, Binocular Vision, Clinical Cases, Slit Lamp, Fundus,
  Pharmacology).
- **Teach Me This Disease** — a searchable disease library (21 conditions across Cornea, Glaucoma,
  Retina, Neuro-Ophthalmology, and Anterior Segment) and a structured 14-section disease page
  (Definition → NBEO High-Yield), plus **Quiz Me**, **Give Me a Clinical Case**, **Compare With
  Another Disease**, and **Show/Hide High-Yield Facts** interactivity generated from the disease's
  own structured data.
- **Differential Diagnosis Engine** — structured clinical-finding inputs (symptoms, pupils, VA/IOP,
  anterior/posterior segment findings, visual field, other testing) that produce a ranked
  differential with a "Clinical Match Score," supporting/contradicting findings, distinguishing
  factors, urgency, and next steps.
- **Drug Database** — 59 medications across all spec'd classes, searchable/filterable, with a full
  detail page (mechanism, dosing, side effects, contraindications, interactions, counseling,
  monitoring, pearls, NBEO facts, references) and a multi-drug comparison table.
- **Prescription Trainer** — generated patient scenarios across Easy/Medium/Hard/Expert difficulty,
  a structured prescription-construction form, and field-by-field grading with reasoning.
- Global search across diseases and drugs from the top bar.

## Project structure

```
/src
  /data          # disease, drug, and prescription-case content — separated from UI
    /diseases
    /drugs
    /cases
  /types         # TypeScript interfaces for Disease, Drug, Differential, Prescription
  /services      # pure functions over the data layer (search, matching, grading, quiz/case gen)
  /components
    /ui          # generic building blocks (Card, Badge, Button, Tabs, SearchInput...)
    /layout      # Sidebar, TopBar, GlobalSearch, AppLayout
    /disease     # disease-page-specific pieces (Quiz/Case/Compare panels, sign/risk lists)
    /differential
    /drug
    /prescription
  /pages         # one component per route, composed from the pieces above
  /config        # navigation and differential-engine vocabulary
```

This mirrors the UI / data / logic separation the spec calls for: pages never hard-code clinical
content, they read it through `services/*` from `data/*`.

## What's functional

All navigation, search, disease browsing, the differential engine (structured multi-select inputs
→ ranked results), drug search/filter/comparison, and the full prescription generate → submit →
grade loop are working end to end, verified with a headless browser pass (no console errors) across
every route and interaction. Responsive down to mobile (collapsible sidebar).

## Data included

- 21 diseases (5 Cornea, 4 Glaucoma, 4 Retina, 4 Neuro-Ophthalmology, 4 Anterior Segment)
- 59 drugs across Antibiotics, Antivirals, Antifungals, Steroids, NSAIDs, Anesthetics,
  Immunomodulators, Glaucoma medications (prostaglandins, beta blockers, CAIs, alpha agonists, rho
  kinase inhibitor, miotic, hyperosmotic, a combination product), Mydriatics, Cycloplegics, Allergy
  medications, Dry eye medications, and diagnostic dyes
- 11 prescription-trainer cases spanning all four difficulty levels

## How to add a new disease

Add an object matching the `Disease` type (`src/types/disease.ts`) to the matching category file in
`src/data/diseases/` (or a new file, re-exported from `src/data/diseases/index.ts`). Nothing else
needs to change — the library, search, quiz/case generators, and differential engine all read from
that array automatically.

## How to add a new drug

Same pattern: add a `Drug`-shaped object (`src/types/drug.ts`) to a file in `src/data/drugs/`,
exported from `src/data/drugs/index.ts`. It immediately appears in search, filters, comparison, and
is selectable in the Prescription Trainer.

## How to add a new future tool/page

1. Add a route + page component in `src/pages` and register it in `src/App.tsx`.
2. Move its entry from `futureToolsNav` to `primaryNav` in `src/config/navigation.ts` (or add a new
   entry) — the sidebar renders both lists automatically, including the "Coming Soon" badge for
   anything still in `futureToolsNav`.
3. Give it its own `data/`, `services/`, and `components/<tool>/` following the existing pattern.

## Limitations / next steps

- Quiz questions and clinical-case vignettes are generated on the fly from each disease's own
  structured fields rather than hand-authored, so phrasing can be verbose; a future pass could add
  curated `quiz`/`cases` content per disease (the `Disease` type already supports optional
  `quiz`/`cases` arrays).
- The differential engine matches findings against disease text via keyword heuristics rather than
  a curated finding↔disease weight table; this is functional but coarser than a hand-tuned model.
- No AI integration yet — the architecture (typed services returning plain data) is intentionally
  structured so an AI-generated content/question service can be swapped in later without UI changes.
- Drug/disease reference citations name authoritative source types (e.g. AAO Preferred Practice
  Pattern, Bartlett & Jaanus) rather than specific verifiable URLs, per the "do not invent
  references" constraint — a production version should link real, current citations.

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
```
