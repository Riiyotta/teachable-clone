Source: https://www.teachable.com/analytics-and-reporting

# /analytics-and-reporting: deltas from the feature template

Template: `specs/feature-template.md`. Measured 2026-10-27 at 1440 / 1280 / 390. Document height 5826 / 5685 / 6977. Shell per T0 (footer at y 5017 / 4895 / 5345).

## Section order
| # | Section | Component | y / h @1440 | h @1280 | h @390 | delta from template |
|---|---|---|---|---|---|---|
| 1 | `section_feature-hero` | FeatureHero | 0 / 799.36 | 766.31 | 1009.42 | hero image is **589x720** (not 540x720) → image box 409x500 @1440, 388x474 @1280, 342x418 @390, so the section is 45px shorter. h1 is long (67 chars, 3 lines @1440, 5 @390) and uses the **`.span_h1-o`** glyph (char-o-long SVG; rendered 48x111 @1440 incl. padding .2rem/.3rem, margin-right −.7rem). Intro is short (1 line @1440) |
| 2 | `section_feature-why` | FeatureWhy | 799.36 / 504.23 | 492.73 | 458.67 | default 6rem heading (2 lines @1440 and @390); right column has the **icon circle** (44.9px), no pill |
| 3 | `section_feature-explainer` | FeatureExplainer | 1303.59 / 1636.52 | 1562.91 | 1698.86 | **header** (h2 1 line @1440 + intro 1 line) + **2 rows**: row 1 [image, text(2 pairs)], row 2 [text(2 pairs, inline link to `https://teachable.com/app-hub` in the 2nd paragraph, then button), image]. Row text column heights 614 (square rows) |
| 4 | `section_stories` | Stories (REUSE as-is) | 2940.11 / 990.81 | 1012.05 | 903.63 | none |
| 5 | `section_product-blog` | ProductBlog (T9c) | 3930.92 / 704.11 | 687.86 | 951.33 | 3 text-only blog cards, whole card links to the blog; hover MF2 |
| 6 | `section_feature-cta.padding-top-0` | FeatureCta | 4635.03 / 382.08 | 373.31 | 323.47 | **heading only** (no header-wrp, no paragraph): card 1287x262 @1440, 342x259 @390. Section pb 8rem (119.73 / 116.98 / 64) |

## Motion on this page
Stories (M23), product-blog card hover (MF2: subheading underline + arrow −45° → 0°, .2s ease), button hovers. No feature-list, so no MF1.

## Assets (all present)
- Hero: `68e3249c0f41e4018e2e3ff6_d857aaab4288158f407ca1b3e06e0c45_analytics-hero.webp` (589x720)
- Explainer row 1: `68e3249c5ae0ff5ee986c46f_44296f1d8adc00860772f3972549ef21_analytics-course-Rrport.webp` (800x800)
- Explainer row 2: `68e3249c2154bcc026606403_679cee997f4f68c76fa4674e3ba92828_analytics-integrations.webp` (800x800)
- Glyph: `68d333eb7daf150f3f4d68c8_teachable-char-o-long.svg` (present)
- Inline SVGs: why icon (viewBox 0 0 133 205, copy from `_snapshot/pages/analytics-and-reporting/index.html`), arrow 16x9.

Missing: none.

## Product-blog card links (functional, not copy)
Cards link to `https://teachable.com/blog/google-analytics-for-beginners`, `https://teachable.com/blog/choosing-platform-social-media-analytics`, `https://teachable.com/blog/user-tagging-teachable` (keep or point to `#`). Card footer label: `READ MORE` (literal uppercase, weight 400).

## Text slots (copy policy: purpose + length only)

### Slot table 1: section_feature-hero  (h 799 / 766 / 1009)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| div | eyebrow tag (uppercase, starts with an em dash) | 23 | 1 | 1 | 1 | 14.97/22.45 → 15.6/23.4 |  |
| h1 | page title (h1) | 67 | 3 | 3 | 5 | 74.83/74.83 → 42.9/42.9 |  |
| p | intro paragraph | 56 | 1 | 1 | 2 | 19.46/29.18 → 15.6/23.4 |  |

Images: `68e3249c0f41e4018e2e3ff6_d857aaab4288158f407ca1b3e06e0c45_analytics-hero.webp` (589x720 nat; 409x500@1440)

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 2: section_feature-why  (h 504 / 493 / 459)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.feature-why_heading | section heading (display) | 20 | 2 | 2 | 2 | 89.8/98.78 → 46.8/51.48 |  |
| p | body paragraph | 312 | 6 | 6 | 7 | 19.46/29.18 → 15.6/23.4 |  |

### Slot table 3: section_feature-explainer  (h 1637 / 1563 / 1699)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 34 | 1 | 1 | 2 | 59.87/65.85 → 39/42.9 |  |
| p | intro paragraph | 89 | 1 | 1 | 3 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 14 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 132 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 13 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 136 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 24 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 102 | 2 | 2 | 3 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 12 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 159 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |

Images: `68e3249c5ae0ff5ee986c46f_44296f1d8adc00860772f3972549ef21_analytics-course-Rrport.webp` (800x800 nat; 494x494@1440); `68e3249c2154bcc026606403_679cee997f4f68c76fa4674e3ba92828_analytics-integrations.webp` (800x800 nat; 494x494@1440)

Links: a(inline) → `https://teachable.com/app-hub` (inline text link, 14 chars); button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 4: section_stories — REUSE Stories (copy & slides identical to homepage §13; not tabulated)

### Slot table 5: section_product-blog  (h 704 / 688 / 951)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 11 | 1 | 1 | 1 | 59.87/65.85 → 39/42.9 |  |
| p | intro paragraph | 55 | 1 | 1 | 2 | 19.46/29.18 → 15.6/23.4 |  |
| div.product-blog-card_subheading | blog card title | 30 | 2 | 2 | 2 | 33.67/37.04 → 31.2/34.32 |  |
| p.text-size-medium | blog card excerpt | 127 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.product-blog-card_subheading | blog card title | 59 | 3 | 3 | 3 | 33.67/37.04 → 31.2/34.32 |  |
| p.text-size-medium | blog card excerpt | 137 | 5 | 5 | 4 | 17.21/25.82 → 15.6/23.4 |  |
| div.product-blog-card_subheading | blog card title | 42 | 2 | 2 | 2 | 33.67/37.04 → 31.2/34.32 |  |
| p.text-size-medium | blog card excerpt | 81 | 3 | 3 | 3 | 17.21/25.82 → 15.6/23.4 |  |

Links: product-blog-card_component (whole card) → `https://teachable.com/blog/google-analytics-for-beginners`; product-blog-card_component (whole card) → `https://teachable.com/blog/choosing-platform-social-media-analytics`; product-blog-card_component (whole card) → `https://teachable.com/blog/user-tagging-teachable`

### Slot table 6: section_feature-cta padding-top-0  (h 382 / 373 / 323)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.feature-cta_heading | CTA heading | 34 | 1 | 1 | 3 | 44.9/49.39 → 39/42.9 |  |

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`
