Source: https://www.teachable.com/site-builder

# /site-builder: deltas from the feature template

Template: `specs/feature-template.md`. Measured 2026-10-27 at 1440 / 1280 / 390. Document height 6533 / 6374 / 7845. Shell per T0 (footer at y 5724 / 5584 / 6213).

## Section order
| # | Section | Component | y / h @1440 | h @1280 | h @390 | delta from template |
|---|---|---|---|---|---|---|
| 1 | `section_feature-hero.padding-bottom-0` | FeatureHero | 0 / 723.02 | 690.44 | 919.25 | **padding-bottom 0** at every width (top stays `--hero-top`). Image 542x720 → 409x543. **No glyph span** in the h1 |
| 2 | `section_feature-explainer` | FeatureExplainer | 723.02 / 1665.69 | 1591.42 | 1709.78 | **no why section on this page**, so the explainer follows the hero directly (its own 8rem top padding is the only gap). Header (h2 1 line + intro 2 lines) + 2 rows: row 1 [image, text(2 pairs; one italic word)], row 2 [text(2 pairs) + button, image] |
| 3 | `section_feature-list` (full padding) | FeatureList | 2388.7 / 1355.91 | 1324.64 | 1805.55 | padding **8rem top and bottom** (119.73 / 116.98 / 48). 8 cards, no icons. Header h2 13 chars with one italic `<em>` word |
| 4 | `section_stories` | Stories **variant** | 3744.61 / 968.45 | 990.38 | 903.63 | Swiper `centeredSlides: true, autoHeight: true` (own inline init). Active slide centred; wrapper height follows the active slide (440–462 @1440, 452–474 @1280, 394–417 @390) |
| 5 | `section_feature-cta.padding-0` | FeatureCta | 4713.06 / 306.48 | 299.47 | 279.36 | header-wrp: heading 20 chars + paragraph 40 chars (1 line each @1440) |
| 6 | `section_faq` | Faq (REUSE) | 5019.55 / 704.31 | 687.92 | 595.41 | **4 items** |

## Motion on this page
- MF1 on section 3 (live @1440: start 1579px, end 2389px). Because this list has 8rem top padding, the cards travel inside a taller section; behaviour is otherwise identical.
- Stories variant (centered + autoHeight; autoplay 2000ms, loop, speed 300 as M23).
- FAQ M26, button hovers M6.
- The page also loads a second copy of GSAP + ScrollTrigger from unpkg (`gsap@3`), which has no visible effect; ignore.

## Assets (all present)
- Hero: `68e52ddcebb6bce2b06892ac_e8f311733d860acfd0e50ff68f6553d6_site-build-hero.webp` (542x720)
- Explainer row 1: `68e52ddb42879a46f4588384_06f3f90b3622a2dd7b728b9e0890d7b7_site-build-customize-1.webp` (800x800)
- Explainer row 2: `68e52ddbc89b724d6a0c6305_7b9eb46dd19f179eaf7496793e36ff09_site-build-customize-2.webp` (800x800)
- Stories avatars: same 6 as homepage

Missing: none.

## Text slots (copy policy: purpose + length only)

### Slot table 1: section_feature-hero padding-bottom-0  (h 723 / 690 / 919)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| div | eyebrow tag (uppercase, starts with an em dash) | 14 | 1 | 1 | 1 | 14.97/22.45 → 15.6/23.4 |  |
| h1 | page title (h1) | 34 | 2 | 2 | 3 | 74.83/74.83 → 42.9/42.9 |  |
| p | intro paragraph | 115 | 2 | 2 | 3 | 19.46/29.18 → 15.6/23.4 |  |

Images: `68e52ddcebb6bce2b06892ac_e8f311733d860acfd0e50ff68f6553d6_site-build-hero.webp` (542x720 nat; 409x543@1440)

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 2: section_feature-explainer  (h 1666 / 1591 / 1710)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 36 | 1 | 1 | 2 | 59.87/65.85 → 39/42.9 |  |
| p | intro paragraph | 144 | 2 | 2 | 4 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 24 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 112 | 2 | 2 | 3 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 26 | 1 | 1 | 2 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 112 | 2 | 3 | 3 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 23 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 103 | 2 | 2 | 3 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 17 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 149 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |

Images: `68e52ddb42879a46f4588384_06f3f90b3622a2dd7b728b9e0890d7b7_site-build-customize-1.webp` (800x800 nat; 494x494@1440); `68e52ddbc89b724d6a0c6305_7b9eb46dd19f179eaf7496793e36ff09_site-build-customize-2.webp` (800x800 nat; 494x494@1440)

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 3: section_feature-list  (h 1356 / 1325 / 1806)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 13 | 1 | 1 | 1 | 59.87/65.85 → 39/42.9 |  |
| p | intro paragraph | 75 | 2 | 2 | 2 | 19.46/29.18 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 12 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 93 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 10 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 98 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 14 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 95 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 13 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 82 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 12 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 91 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 13 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 93 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 12 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 87 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 4 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 108 | 4 | 5 | 3 | 17.21/25.82 → 15.6/23.4 |  |

### Slot table 4: section_stories — REUSE Stories (copy & slides identical to homepage §13; not tabulated)

### Slot table 5: section_feature-cta padding-0  (h 306 / 299 / 279)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.feature-cta_heading | CTA heading | 20 | 1 | 1 | 2 | 44.9/49.39 → 39/42.9 |  |
| p | intro paragraph | 40 | 1 | 1 | 2 | 19.46/29.18 → 15.6/23.4 |  |

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 6: section_faq  (h 704 / 688 / 595)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.heading-style-h3 | FAQ heading | 26 | 1 | 1 | 2 | 44.9/49.39 → 31.2/34.32 |  |
| h3.accordion_label | FAQ question | 24 | 1 | 1 | 1 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 78 | 1 | 1 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 57 | 1 | 1 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 130 | 2 | 2 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 30 | 1 | 1 | 1 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 254 | 4 | 4 | 6 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 33 | 1 | 1 | 1 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 250 | 4 | 4 | 6 | 17.21/25.82 → 15.6/23.4 |  |

Links: a(inline) → `https://www.teachable.com/experts` (inline text link, 26 chars); a(inline) → `https://www.teachable.com/experts` (inline text link, 17 chars)
