Source: https://www.teachable.com/student-experience

# /student-experience: deltas from the feature template

Template: `specs/feature-template.md`. Measured 2026-10-27 at 1440 / 1280 / 390. Document height 5838 / 5678 / 6713. Shell per T0 (footer at y 5030 / 4888 / 5082). This is the plainest instance of the template.

## Section order
| # | Section | Component | y / h @1440 | h @1280 | h @390 | delta from template |
|---|---|---|---|---|---|---|
| 1 | `section_feature-hero` | FeatureHero | 0 / 844.75 | 809.31 | 965.78 | h1 2 lines with `.span_h1-e`; intro 2 lines @1440 (3 @1280, 4 @390) |
| 2 | `section_feature-why` | FeatureWhy | 844.75 / 436.97 | 426.94 | 375.97 | default 6rem heading (2 lines); **no pill, no icon**: the right column holds only the paragraph (3 lines) |
| 3 | `section_feature-explainer` | FeatureExplainer | 1281.72 / 2375.08 | 2266.5 | 2512.7 | header (h2 2 lines + intro 2 lines) + **3 rows** with 2 pairs each: row 1 [image, text], row 2 [text (inline link in the 2nd paragraph → `https://teachable.com/ai-quiz-generator`), image], row 3 [image, text: the 2nd subheading is a `.feature_txt-link` → `https://www.teachable.com/mobile-app` (underlined, no underline on hover); one italic word in the last paragraph; then button] |
| 4 | `section_stories` | Stories (REUSE as-is) | 3656.8 / 990.81 | 1012.05 | 903.63 | none |
| 5 | `section_feature-cta.padding-top-0` | FeatureCta | 4647.61 / 382.08 | 373.31 | 323.47 | **heading only** (48 chars, 1 line @1440, 3 @390), pb 8rem |

## Motion on this page
Stories M23, button hovers M6. No MF1 (no feature-list). Nothing else.

## Assets (all present)
- Hero: `68e32bbbd697cbcde513a02e_44457b5af9a67abe60efcd791968cf2d_student-hero.webp` (540x720)
- Explainer rows 1–3: `68e32bbb89a5744b2cfb2b44_4163b1b648dd6f629cb4cd18005119c2_student-ui.webp`, `68e32bbb1c1656ec77669a05_8abc362844c85c6fb4a6390c2a2a890f_student-coaching.webp`, `68e32bbb8f41907707e17334_2135b0167e18a8b69c966fbd071e6df5_student-compliance-mobile.webp` (800x800 each)

Missing: `68b754d6a559281c2a42e12b_teachable-text-e.svg` → https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68b754d6a559281c2a42e12b_teachable-text-e.svg

## Text slots (copy policy: purpose + length only)

### Slot table 1: section_feature-hero  (h 845 / 809 / 966)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| div | eyebrow tag (uppercase, starts with an em dash) | 20 | 1 | 1 | 1 | 14.97/22.45 → 15.6/23.4 |  |
| h1 | page title (h1) | 31 | 2 | 2 | 2 | 74.83/74.83 → 42.9/42.9 |  |
| p | intro paragraph | 166 | 2 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |

Images: `68e32bbbd697cbcde513a02e_44457b5af9a67abe60efcd791968cf2d_student-hero.webp` (540x720 nat; 409x545@1440)

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 2: section_feature-why  (h 437 / 427 / 376)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.feature-why_heading | section heading (display) | 32 | 2 | 2 | 3 | 89.8/98.78 → 46.8/51.48 |  |
| p | body paragraph | 151 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |

### Slot table 3: section_feature-explainer  (h 2375 / 2266 / 2513)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 68 | 2 | 2 | 4 | 59.87/65.85 → 39/42.9 |  |
| p | intro paragraph | 151 | 2 | 2 | 4 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 42 | 2 | 2 | 2 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 127 | 3 | 3 | 3 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 22 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 111 | 2 | 2 | 3 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 14 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 155 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 16 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 133 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 17 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 165 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |
| h2.feature-explainer_subheading | row subheading | 10 | 1 | 1 | 1 | 44.9/49.39 → 31.2/34.32 |  |
| p | paragraph | 154 | 3 | 3 | 4 | 19.46/29.18 → 15.6/23.4 |  |

Images: `68e32bbb89a5744b2cfb2b44_4163b1b648dd6f629cb4cd18005119c2_student-ui.webp` (800x800 nat; 494x494@1440); `68e32bbb1c1656ec77669a05_8abc362844c85c6fb4a6390c2a2a890f_student-coaching.webp` (800x800 nat; 494x494@1440); `68e32bbb8f41907707e17334_2135b0167e18a8b69c966fbd071e6df5_student-compliance-mobile.webp` (800x800 nat; 494x494@1440)

Links: a(inline) → `https://teachable.com/ai-quiz-generator` (inline text link, 17 chars); feature_txt-link → `https://www.teachable.com/mobile-app` (inline text link, 10 chars); button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`

### Slot table 4: section_stories — REUSE Stories (copy & slides identical to homepage §13; not tabulated)

### Slot table 5: section_feature-cta padding-top-0  (h 382 / 373 / 323)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.feature-cta_heading | CTA heading | 48 | 1 | 1 | 3 | 44.9/49.39 → 39/42.9 |  |

Links: button-sso → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` label `Start for free`
