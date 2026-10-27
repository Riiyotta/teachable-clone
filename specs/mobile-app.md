Source: https://www.teachable.com/mobile-app

# /mobile-app: deltas from the feature template

Template: `specs/feature-template.md` (read it first). Measured 2026-10-27 at 1440 / 1280 / 390. Document height 7361 / 7230 / 9103. Shell per T0 (no marquee, fixed nav, footer unchanged at y 6552 / 6440 / 7471).

## Section order
| # | Section | Component | y / h @1440 | h @1280 | h @390 | delta from template |
|---|---|---|---|---|---|---|
| 1 | `section_feature-hero` | FeatureHero | 0 / 844.75 | 809.31 | 1008.69 | h1 uses `.span_h1-e` glyph (1 letter, mid-heading on the 1st line); intro `p` contains one bold+italic run (17 chars, of which 4 italic) |
| 2 | `section_feature-why` | FeatureWhy | 844.75 / 502.81 | 512.47 | 626.25 | heading `.is-smaller` (4rem); right column has the **pill** (`.feature-why_subheading-wrp`, 253x36 @1440, 265x38 @390), no icon |
| 3 | `section_feature-explainer` | FeatureExplainer | 1347.56 / 853.06 | 815.45 | 745.77 | **no header**; 1 row [image, text]; text has **one** subheading + paragraph, then the "Start for free" button |
| 4 | `section_feature-list.padding-top-0` | FeatureList | 2200.63 / 884.45 | 889.3 | 1325.44 | **4 cards, each with the black check-icon circle**. pt 0, pb 8rem (119.73; 48px @390). Card sizes at load @1440: is-2 299x334 (margin-top 239.47), is-3 299x543 (margin-top 29.93) |
| 5 | `section_feature-2col.padding-0` | FeatureTwoCol (T9a) | 3085.08 / 598.67 | 566.91 | 695.03 | padding 0. Button = `button-sso` "Start for free" |
| 6 | `section_stories` | Stories (REUSE as-is) | 3683.75 / 990.81 | 1012.05 | 903.63 | none |
| 7 | `section_rating` | Rating (T9b) | 4674.56 / 691.27 | 675.36 | 993.78 | only page with it |
| 8 | `section_feature-cta.padding-0` | FeatureCta | 5365.83 / 306.48 | 299.47 | 326.14 | header-wrp with heading + paragraph; padding 0 |
| 9 | `section_faq` | Faq (REUSE) | 5672.31 / 879.84 | 860.02 | 846.75 | 6 items; heading 1 line @1440 |

Spacing note: sections 3→4 and 4→5 butt directly (4 has pt 0, 5 has padding 0), so the vertical rhythm comes from the explainer's and list's 8rem bottom paddings only. Section 8 (padding 0) sits directly under the rating section's 8rem bottom padding and directly above the FAQ's 8rem top padding.

## Motion on this page
MF1 (feature-list stairs → flat, scrub) on section 4. Live ScrollTrigger @1440: start 1391px, end 2201px. Stories autoplay (M23), FAQ (M26), button hovers (M6). Nothing else.

## Assets (all present in `public/assets/`)
- Hero: `68e32d8cfee16c7f8ffd6f4d_0f6c569c458119895376f18daca277f1_mobile-hero.webp` (540x720)
- Explainer: `68e32d8c5b4fb72c7d99bab0_629f32065c13978b1396aef348a17a67_mobile-phone.webp` (800x800)
- 2-col: `68e32d8cd2184c530694454c_e59143675b533f49c845c81e525c398b_mobile-video.webp` (800x800)
- Stories avatars: same 6 as homepage §13
- Inline SVGs: list check icon (T5), rating star (T9b)

Missing: `68b754d6a559281c2a42e12b_teachable-text-e.svg` → https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68b754d6a559281c2a42e12b_teachable-text-e.svg (hero glyph span).

## Rating cards: extra slots not in the table below
Each card also has a 5-star row (gold #ffd700) and an italic reviewer line of 29 / 28 / 25 chars (handle + " • " + date), 1 line at all widths.

## Text slots (copy policy: purpose + length only)
Lines are rendered lines. "px fs/lh" is the computed font-size / line-height. The button label "Start for free" is the only UI label.

### Slot table 1: section_feature-hero  (h 845 / 809 / 1009)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| div | eyebrow tag (uppercase, starts with an em dash) | 12 | 1 | 1 | 1 | 14.97/22.45 → 15.6/23.4 |  |
| h1 | page title (h1) | 36 | 2 | 2 | 3 | 74.83/74.83 → 42.9/42.9 |  |
| p | intro paragraph | 184 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |

Images: `68e32d8cfee16c7f8ffd6f4d_0f6c569c458119895376f18daca277f1_mobile-hero.webp` (540x720 nat; 409x545@1440)

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 2: section_feature-why  (h 503 / 512 / 626)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.feature-why_heading | section heading (display) | 80 | 4 | 4 | 6 | 59.87/65.85 → 39/42.9 |  |
| div | pill label (uppercase, yellow on black) | 25 | 1 | 1 | 1 | 14.97/22.45 → 15.6/23.4 |  |
| p | body paragraph | 339 | 6 | 7 | 8 | 19.46/29.18 → 15.6/23.4 |  |

### Slot table 3: section_feature-explainer  (h 853 / 815 / 746)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.feature-explainer_subheading | row subheading | 31 | 2 | 2 | 2 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 238 | 5 | 5 | 6 | 19.46/29.18 → 15.6/23.4 |  |

Images: `68e32d8c5b4fb72c7d99bab0_629f32065c13978b1396aef348a17a67_mobile-phone.webp` (800x800 nat; 494x494@1440)

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 4: section_feature-list padding-top-0  (h 884 / 889 / 1325)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 38 | 2 | 2 | 2 | 59.87/65.85 → 39/42.9 |  |
| p | intro paragraph | 103 | 2 | 2 | 3 | 19.46/29.18 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 30 | 2 | 2 | 2 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 81 | 3 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 16 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 100 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 26 | 2 | 2 | 2 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 100 | 4 | 5 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 22 | 2 | 2 | 2 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 73 | 3 | 3 | 2 | 17.21/25.82 → 15.6/23.4 |  |

### Slot table 5: section_feature-2col padding-0  (h 599 / 567 / 695)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 46 | 3 | 3 | 3 | 59.87/65.85 → 39/42.9 |  |
| p | paragraph | 152 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |

Images: `68e32d8cd2184c530694454c_e59143675b533f49c845c81e525c398b_mobile-video.webp` (800x800 nat; 599x599@1440)

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 6: section_stories — REUSE Stories (copy & slides identical to homepage §13; not tabulated)

### Slot table 7: section_rating  (h 691 / 675 / 994)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 25 | 1 | 1 | 2 | 59.87/65.85 → 39/42.9 |  |
| p | intro paragraph | 108 | 1 | 1 | 3 | 19.46/29.18 → 15.6/23.4 |  |
| div.rating-card_quote-title | review title | 18 | 1 | 1 | 1 | 22.45/26.94 → 23.4/28.08 |  |
| div.text-size-medium | review body | 64 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.rating-card_quote-title | review title | 14 | 1 | 1 | 1 | 22.45/26.94 → 23.4/28.08 |  |
| div.text-size-medium | review body | 142 | 4 | 4 | 4 | 17.21/25.82 → 15.6/23.4 |  |
| div.rating-card_quote-title | review title | 3 | 1 | 1 | 1 | 22.45/26.94 → 23.4/28.08 |  |
| div.text-size-medium | review body | 45 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |

### Slot table 8: section_feature-cta padding-0  (h 306 / 299 / 326)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.feature-cta_heading | CTA heading | 25 | 1 | 1 | 2 | 44.9/49.39 → 39/42.9 |  |
| p | intro paragraph | 124 | 1 | 1 | 4 | 19.46/29.18 → 15.6/23.4 |  |

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 9: section_faq  (h 880 / 860 / 847)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.heading-style-h3 | FAQ heading | 26 | 1 | 1 | 2 | 44.9/49.39 → 31.2/34.32 |  |
| h3.accordion_label | FAQ question | 51 | 1 | 1 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 152 | 2 | 2 | 4 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 41 | 1 | 1 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 306 | 4 | 4 | 8 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 61 | 1 | 1 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 139 | 2 | 2 | 4 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 27 | 1 | 1 | 1 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 64 | 1 | 1 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 36 | 1 | 1 | 1 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 106 | 2 | 2 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 46 | 1 | 1 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 349 | 5 | 5 | 9 | 17.21/25.82 → 15.6/23.4 |  |

Links: a(inline) → `https://support.teachable.com/hc/en-us/articles/115000766167-Use-the-iOS-App-as-a-Student#h_01HR8KR5` (inline text link, 5 chars)
