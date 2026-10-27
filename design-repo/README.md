# Teachable clone: design-repo

An AI-ready, machine-validated description of the local Teachable marketing-site replica in the parent project: tokens,
primitives, components, section contracts, page templates, a compatibility graph, a closed PageSpec schema, a semantic
validator and its adversarial suite. A generator composes a **PageSpec** from these parts; the validators decide whether
it is acceptable.

Status: `design-review-pending`, `productionApproved: false`. Counts below are recomputed by `extraction/verify_all.py`
(COUNTS) and must equal `registry.manifest.json`.

## Load-bearing constraints (read first)

- **Real company.** Teachable is a real, live company. The clone is a personal study replica. Nothing here licenses its
  brand, copy, screenshots, logos or photos. Do not publish this repo or anything generated from it, and do not make a
  repository holding it public.
- **Copy is never stored.** The clone's homepage carries real Teachable copy from a saved page; its 17 inner pages use
  original stand-in copy. This repo stores neither. Copy appears only as budgets (characters, words, rendered lines at
  1440 and 390, list sizes) and as one-way hashes (`schema/source-identity-hashes.json`) used to reject reuse.
  Reference examples therefore carry neutral filler of the measured length (`copyRole: copy.neutral-placeholder`).
- **Assets.** `public/assets` holds real logos (Teachable's own, third-party integrations, payment methods, customer
  organisations) and real photos of real creators. `assets/asset-roles.json` marks them `reference-only` or
  `blocked-for-generation`; generated pages may use `generation-safe` roles only. Availability and the policy of the
  compliance-critical roles are pinned in code (`PINNED_AVAILABILITY`, `PINNED_POLICY`).
- **Behaviour documented, not normalised:** forms never submit (sales form, watch-demo unlock); Vimeo / onelineplayer /
  Storylane embeds are domain-restricted and error locally; the countdown banner is a Halloween campaign ending
  31 Oct 2026 (retrieval-ineligible, optional); the live HubSpot pop-up and cookie banner were not cloned; decorative
  glyph letters replace characters in some headings; the enterprise quote band uses a placeholder logo and a fictional
  quote; one live third-party application-form link is forbidden in every mode.

## Modes

- `reference`: reconstructs a served route (structure, variants, measured budgets, real asset paths as evidence).
- `generated`: a new page for someone else. The semantic validator rejects source brand / parent company / domains,
  source-brand CTAs and reused CTA labels, source copy (hashed full strings and 6-word shingles), source routes and
  URLs, real people's names and photos, real organisation and partner names and logos, review handles / scores,
  app-store marks, third-party embeds and any non-generation-safe asset (rules `GENERATED_MODE_*`).

## Layout

```
registry.manifest.json   status, versions, counts, entry points (all inside this folder), constraints
tokens/                  00-foundation (cited path:line + matched text), 10-semantic, 20-component, 30-layout, themes/light, llm/
primitives/ components/  atomic and composed building blocks with source ranges
sections/                one contract per semantic section (source/semantic split, variants, budgets, assets, motion, responsive, heights)
templates/ routes/       page-purpose templates; every served route mapped exactly once
compatibility/graph.json rhythm/position rules, each implemented with the same severity in the validator
assets/asset-roles.json  closed media/link/copy role vocabulary with availability + generation policy
schema/                  PageSpec + section-contract schemas, semantic validator, synthesizer, examples, adversarial tests
extraction/              measured values (1440 heights, 390 heights, doc heights, citations), verify_all, wrapper gate, drift proof
```

## Run

```bash
pip install jsonschema                      # only dependency
python3 extraction/verify_all.py            # every structural / drift / citation / count / hygiene check
python3 schema/tests/adversarial_test.py    # every mutation rejected, every control passes
python3 extraction/prove_drift.py           # proves the drift checks fail on injected drift
python3 extraction/wrapper_gate.py          # R9 gate alone
python3 schema/semantic_validate.py schema/examples/*/*.json
python3 schema/synthesize.py T2 --rich      # a generation-safe skeleton for any template
```

Checks marked "(sibling)" in verify_all need the clone project around this folder (they re-read real source lines);
standalone they warn instead of failing. Re-measure heights with `extraction/measure_sections.mjs` (needs a running
clone and a Playwright install; see the file header).

## How budgets and heights were measured

Headless Chromium against the running clone at 1440, 1280 and 390 (`extraction/measured-values.json`). Each top-level
child of `<main>` is mapped to one semantic node; the pricing plan section is decomposed into its heading block (HERO)
and the plan cards (PRICING). Text slots come from a generic DOM slot extractor described in `copyBudgetExtractor`;
only counts are kept. Live-site pixel parity was **not** measured in this pass; a geometry cross-check against the
specs' live document heights is recorded instead (`liveParity`).

## Counts

<!-- counts:start -->
```json
{
 "tokensInCatalog": 199,
 "foundationTokens": 158,
 "layoutTokens": 9,
 "semanticTokens": 20,
 "componentTokens": 12,
 "motionPatterns": 24,
 "primitives": 10,
 "components": 4,
 "sections": 56,
 "sectionsRetrievalIneligible": 3,
 "templates": 10,
 "templateFamilies": 10,
 "routes": 18,
 "assetRoles": 30,
 "assetRolesGenerationSafe": 14,
 "graphRules": 13,
 "allowlistEntries": 70,
 "referenceExamples": 18,
 "generatedExamples": 10,
 "themes": 1,
 "measuredRoutes1440": 18,
 "wrapperWhitelistEntries": 0
}
```
<!-- counts:end -->
