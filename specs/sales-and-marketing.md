Source: https://www.teachable.com/sales-and-marketing

# /sales-and-marketing: deltas from the feature template

Template: `specs/feature-template.md`. Measured 2026-10-27 at 1440 / 1280 / 390. Document height 8845 / 8585 / 10296. Shell per T0 (footer at y 8036 / 7795 / 8665).

## Section order
| # | Section | Component | y / h @1440 | h @1280 | h @390 | delta from template |
|---|---|---|---|---|---|---|
| 1 | `section_feature-hero` | FeatureHero | 0 / 844.75 | 809.31 | 899.48 | short h1 (16 chars, **1 line** at every width) with `.span_h1-e`; intro 2 lines |
| 2 | `section_feature-why` | FeatureWhy | 844.75 / 535.73 | 523.44 | 538.22 | default 6rem heading (3 lines @1440, 4 @390); **icon circle**, no pill |
| 3 | `section_feature-explainer` | FeatureExplainer | 1380.48 / 2345.91 | 2237.98 | 2388.72 | header (h2 2 lines + intro 1 line) + **3 rows**, each text column has **2** subheading/paragraph pairs: row 1 [image, text], row 2 [text, image] (one italic word in its 2nd paragraph), row 3 [image, text + "Start for free" button] |
| 4 | `section_feature-list.padding-top-0` | FeatureList | 3726.39 / 1236.19 | 1207.67 | 1757.55 | **8 cards, no icons** (2 rows of 4). Header h2 13 chars, 1 line, contains one italic `<em>` word. Card sizes at load @1440: is-2 299x241, is-3 299x450; @390 all 342x168 |
| 5 | `section_stories` | Stories (REUSE as-is) | 4962.58 / 990.81 | 1012.05 | 903.63 | none |
| 6 | `section_feature-int` | FeatureTwoCol (T9a, `variant="int"`) | 5953.39 / 718.39 | 683.88 | 762.92 | section padding: top 0, bottom 8rem (119.73 / 116.98 / 64). Grid `.feature_int-grid` = same 1fr 1fr gap 6rem. Button is **`button-secondary`** "Explore the App Hub" → `https://www.teachable.com/app-hub` (207x48 @1440, full width 342x51 @390) |
| 7 | `section_quick-links` | QuickLinksSlider (T9d) | 6671.78 / 818.36 | 787.56 | 921.08 | grey #f0f0f0 band; 5 slides; Swiper MF3 |
| 8 | `section_feature-cta` | FeatureCta | 7490.14 / 545.92 | 533.41 | 493.14 | **full section padding** 8rem top and bottom (119.73; 64px @390); header-wrp with long heading (59 chars, 1 line @1440, 4 @390) + paragraph |

## Motion on this page
- MF1 on section 4 (live @1440: start 2916px, end 3726px scroll).
- MF3 quick-links Swiper (5 slides, loop, no autoplay, fraction "1 / 5").
- Stories M23, button hovers M6 (incl. `.button-secondary` 1.02).

## Quick-links slide data (functional)
| slide | image (in `public/assets/`) | natural | footer label | link |
|---|---|---|---|---|
| 1 | `6909f376f617b202473f6891_sales_page_template_image.webp` | 1140x920 | `DOWNLOAD NOW` | https://teachable.com/resources/sales-page-template |
| 2 | `6909f3b3d144f20f54dcd99e_marketing_your_course_image.webp` | 1140x920 | `DOWNLOAD NOW` | https://teachable.com/resources/marketing-your-course |
| 3 | `6909f3d3e90347e451381aea_sales_email_template.webp` | 1140x920 | `DOWNLOAD NOW` | https://teachable.com/resources/sales-email-template |
| 4 | `6909f3f217e741c797c97f70_how-to-market-online-courses.webp` | 1440x961 | `READ MORE` | https://teachable.com/blog/how-to-market-online-courses |
| 5 | `6909f401c34e333d68a1ac7e_tips-to-create-a-landing-page-design.webp` | 1000x667 | `READ MORE` | https://teachable.com/blog/best-practices-for-great-landing-page-design |

Geometry @1440: slide 1287x409 (image column 613.6x409 = 3:2), text column padding-top 4rem / left 2rem; the white nav pill (206x60) is absolutely placed at bottom 3rem / left 2rem of the slider, i.e. over the bottom-left of the text column (x 106, y 594 within the section). @390: slides 342 wide and 522–575 tall (text column first, then the 342x342 image, in DOM order), nav pill full width 342x64 below the slides.

## Assets (all present)
- Hero: `68e52e9d14557697d9ae0484_ff57db87a6ae14cdb21384071e977997_marketing-hero.webp` (540x720)
- Explainer rows 1–3: `68e52e9dd386474569db797f_7d329d470926e58f793b4e6445b99609_marketing-bundle.webp`, `68e52e9d3a176e729514b895_2e6daba931d56fdcb734dd5082c2e7a9_marketing-magnet.webp`, `68e52e9da44532cd636a5d27_07a232c89cfedcd7725986f9c6fbbfc5_marketing-integrations.webp` (800x800 each)
- Integrations 2-col: `68e53e81d90343a0a6ac8eb7_2b8009ba8a1414043a5fd3b0d88bf5e2_marketing-meta-pixel.webp` (800x800)
- Quick-links: 5 files above
- Inline SVGs: why icon, arrow 16x9

Missing: `68b754d6a559281c2a42e12b_teachable-text-e.svg` → https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68b754d6a559281c2a42e12b_teachable-text-e.svg

## Text slots (copy policy: purpose + length only)

### Slot table 1: section_feature-hero  (h 845 / 809 / 899)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| div | eyebrow tag (uppercase, starts with an em dash) | 25 | 1 | 1 | 1 | 14.97/22.45 → 15.6/23.4 |  |
| h1 | page title (h1) | 16 | 1 | 1 | 1 | 74.83/74.83 → 42.9/42.9 |  |
| p | intro paragraph | 129 | 2 | 2 | 3 | 19.46/29.18 → 15.6/23.4 |  |

Images: `68e52e9d14557697d9ae0484_ff57db87a6ae14cdb21384071e977997_marketing-hero.webp` (540x720 nat; 409x545@1440)

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 2: section_feature-why  (h 536 / 523 / 538)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.feature-why_heading | section heading (display) | 44 | 3 | 3 | 4 | 89.8/98.78 → 46.8/51.48 |  |
| p | body paragraph | 225 | 5 | 5 | 6 | 19.46/29.18 → 15.6/23.4 |  |

### Slot table 3: section_feature-explainer  (h 2346 / 2238 / 2389)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 44 | 2 | 2 | 3 | 59.87/65.85 → 39/42.9 |  |
| p | intro paragraph | 73 | 1 | 1 | 2 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 13 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 155 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 7 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 86 | 2 | 2 | 2 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 12 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 173 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 20 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 194 | 4 | 4 | 5 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 15 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 118 | 2 | 3 | 3 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 19 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 140 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |

Images: `68e52e9dd386474569db797f_7d329d470926e58f793b4e6445b99609_marketing-bundle.webp` (800x800 nat; 494x494@1440); `68e52e9d3a176e729514b895_2e6daba931d56fdcb734dd5082c2e7a9_marketing-magnet.webp` (800x800 nat; 494x494@1440); `68e52e9da44532cd636a5d27_07a232c89cfedcd7725986f9c6fbbfc5_marketing-integrations.webp` (800x800 nat; 494x494@1440)

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 4: section_feature-list padding-top-0  (h 1236 / 1208 / 1758)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 13 | 1 | 1 | 1 | 59.87/65.85 → 39/42.9 |  |
| p | intro paragraph | 75 | 2 | 2 | 2 | 19.46/29.18 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 7 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 89 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 11 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 104 | 4 | 5 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 7 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 95 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 12 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 86 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 14 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 81 | 3 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 13 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 88 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 3 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 81 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.feature-list_subheading | card title | 17 | 1 | 1 | 1 | 29.93/32.93 → 31.2/34.32 |  |
| p.text-size-medium | card body | 88 | 4 | 4 | 3 | 17.21/25.82 → 15.6/23.4 |  |

### Slot table 5: section_stories — REUSE Stories (copy & slides identical to homepage §13; not tabulated)

### Slot table 6: section_feature-int  (h 718 / 684 / 763)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 22 | 1 | 1 | 2 | 59.87/65.85 → 39/42.9 |  |
| p | paragraph | 214 | 4 | 4 | 6 | 19.46/29.18 → 15.6/23.4 |  |

Images: `68e53e81d90343a0a6ac8eb7_2b8009ba8a1414043a5fd3b0d88bf5e2_marketing-meta-pixel.webp` (800x800 nat; 599x599@1440)

Links: button-secondary → `https://www.teachable.com/app-hub` label `Explore the App Hub`

### Slot table 7: section_quick-links  (h 818 / 788 / 921)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 11 | 1 | 1 | 1 | 59.87/65.85 → 39/42.9 |  |
| p | intro paragraph | 52 | 1 | 1 | 2 | 19.46/29.18 → 15.6/23.4 |  |
| div.quick-slider_subheading | slide title | 39 | 2 | 2 | 2 | 44.9/49.39 → 27.3/30.03 |  |
| p | slide body | 64 | 2 | 2 | 2 | 19.46/29.18 → 15.6/23.4 |  |
| div.quick-slider_subheading | slide title | 54 | 2 | 2 | 3 | 44.9/49.39 → 27.3/30.03 |  |
| p | slide body | 94 | 2 | 2 | 3 | 19.46/29.18 → 15.6/23.4 |  |
| div.quick-slider_subheading | slide title | 42 | 2 | 2 | 2 | 44.9/49.39 → 27.3/30.03 |  |
| p | slide body | 85 | 2 | 2 | 3 | 19.46/29.18 → 15.6/23.4 |  |
| div.quick-slider_subheading | slide title | 57 | 2 | 2 | 3 | 44.9/49.39 → 27.3/30.03 |  |
| p | slide body | 44 | 1 | 1 | 2 | 19.46/29.18 → 15.6/23.4 |  |
| div.quick-slider_subheading | slide title | 48 | 2 | 2 | 2 | 44.9/49.39 → 27.3/30.03 |  |
| p | slide body | 62 | 1 | 2 | 2 | 19.46/29.18 → 15.6/23.4 |  |

Images: `6909f376f617b202473f6891_sales_page_template_image.webp` (1140x920 nat; 614x409@1440); `6909f3b3d144f20f54dcd99e_marketing_your_course_image.webp` (1140x920 nat; 614x409@1440); `6909f3d3e90347e451381aea_sales_email_template.webp` (1140x920 nat; 614x409@1440); `6909f3f217e741c797c97f70_how-to-market-online-courses.webp` (1440x961 nat; 614x409@1440); `6909f401c34e333d68a1ac7e_tips-to-create-a-landing-page-design.webp` (1000x667 nat; 614x409@1440)

Links: button-simple → `https://teachable.com/resources/sales-page-template` label `DOWNLOAD NOW`; button-simple → `https://teachable.com/resources/marketing-your-course` label `DOWNLOAD NOW`; button-simple → `https://teachable.com/resources/sales-email-template` label `DOWNLOAD NOW`; button-simple → `https://teachable.com/blog/how-to-market-online-courses` label `READ MORE`; button-simple → `https://teachable.com/blog/best-practices-for-great-landing-page-design` label `READ MORE`

### Slot table 8: section_feature-cta  (h 546 / 533 / 493)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.feature-cta_heading | CTA heading | 59 | 1 | 1 | 4 | 44.9/49.39 → 39/42.9 |  |
| p | intro paragraph | 67 | 1 | 1 | 2 | 19.46/29.18 → 15.6/23.4 |  |

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`
