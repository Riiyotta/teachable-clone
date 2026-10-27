Source: https://www.teachable.com/customer-journey

# /customer-journey: NOT the feature template (product-page sections)

Measured 2026-10-27 at 1440 / 1280 / 390 (isolated headless Chromium). Document height 4436 / 4342 / 6039. Shell per `feature-template.md` T0 (no marquee, fixed nav, constant 5rem dropdown top, footer unchanged at y 3627 / 3551 / 4408).

This page is assembled from **product-page** sections (catalog B, `specs/product-template.md`): `section_product-hero`, `section_product-why`, `section_steps`, `section_product-cta`. It also has the shared FAQ. Its why section reuses the feature template's `.feature-why_grid` classes (T3). Build it from the catalog-B components with the variants below, not from the feature template.

## Section order
| # | Section | Component | y / h @1440 | h @1280 | h @390 | notes |
|---|---|---|---|---|---|---|
| 1 | `section_product-hero` (no `.has-top-banner`) | ProductHero (catalog B T2), variant `top="hero"`, one secondary button | 0 / 927.92 | 888.58 | 925.86 | see §1 |
| 2 | `section_product-why` | FeatureWhy, `bg="gold"`, `size="smaller"` | 927.92 / 524.42 | 512.5 | 471.08 | see §2 |
| 3 | `section_steps` | Steps (catalog B T7), `variant="tiers"` | 1452.34 / 944.34 | 947.67 | 1851.88 | see §3 |
| 4 | `section_product-blog` | — | 2396.69 / **0** | 0 | 0 | **empty** in the live page (only the two hover `<style>` embeds). Render nothing |
| 5 | `section_product-cta.padding-0` | — | 2396.69 / **0** | 0 | 0 | **empty**. Render nothing |
| 6 | `section_faq.padding-top-0` | Faq (REUSE), `paddingTop={0}` | 2396.69 / 760.13 | 743.05 | 745.19 | 6 items; item 5's answer has **3 paragraphs**; section pt 0, pb 8rem (119.73 / 116.98 / 48) |
| 7 | `section_product-cta.padding-top-0` | ProductCta (catalog B T14), `variant="black"` | 3156.81 / 470.34 | 459.58 | 413.53 | see §4 |

## §1. Product hero (variant without the campaign banner)
- Section: relative, overflow hidden, **padding-top `--hero-top`** (12rem → 179.6 @1440, 175.47 @1280, 112 @390; this is the `.section_product-hero` default; catalog B pages use `.has-top-banner` = 5rem instead), padding-bottom `--section-large` (119.73 / 116.98 / **48**). Sides from `.padding-global` (29.93 / 29.24 / 24).
- `.container-large` > `.product-hero_wrp` (flex column, gap 4rem; ≤767 2rem) > `.product-hero_grid`: `1fr 1fr`, column-gap 2rem (29.93), row-gap 4rem → **628.59 + 628.61** @1440; ≤479 one column, gap 32px.
- Left `.product-hero_content-l`: flex column, justify center, align start, gap 1.5rem (22.45; 24px @390), vertically centred against the image:
  - eyebrow `.section-tag_wrp > div`: "— " followed by a `<strong>` run (weight 700; the dash itself is 600), uppercase, 1rem/1.5.
  - `h1` (`text-h1`) with **two glyph spans**: one `.span_h1-e` and one `.span_h1-o` (see template T2 glyphs).
  - `p` (`text-body`).
  - `.product-hero_btn-wrp` (flex, gap 1rem; ≤767 wrap, gap .5rem; ≤479 width 100%): **only one button**, `a.button-secondary` `Explore the program` → `#tiers-and-perks` (in-page anchor to the steps header). 208x48.4 @1440; 342x50.8 @390.
- Right `.product-hero_content-r`: radius .6rem, overflow hidden, flex column; `img.product-hero_img` cover 100%x100%, eager. Image is square (1439x1439 natural; `width=1136 height=1136` attrs) → **628.6x628.6** @1440 (row height), 342x342 @390 (below the text).
- Heights 927.92 / 888.58 / 925.86.

## §2. Why (gold)
- `section.section_product-why`: **bg #ffd700** (brand gold, new token), relative, overflow hidden. Inside: `.padding-global.padding-section-large` > `.container-large` > `.feature-why_grid` exactly as template T3 (1fr 1fr, gap 3rem, centred rows; ≤991 one column).
- Left: `h2.feature-why_heading.is-smaller` (4rem/1.1 → 59.87/65.85; ≤991 3rem; ≤767 2.5rem; ≤479 10vw = 39/42.9). The heading is three short parallel phrases, each starting with the **same 4-letter italic word** (`<em>`, Ivypresto italic). Stand-in copy should keep 3 italic lead words.
- Right: padding 1.5rem 0 0 4rem (≤991 0); **paragraph only** (no pill, no icon), 449 chars, 9 lines @1440.
- Heights 524.42 / 512.5 / 471.08.

## §3. Steps → "tiers" variant (`section.section_steps`)
Same section shell as catalog B's coaching Steps (T7), but a different card body and a different background animation.
- Section: bg #fff, relative, overflow hidden. `.padding-global.padding-section-large` (119.73/29.93; 48/24 @390) > `.container-large` > `.steps_wrp` (flex column, gap 4rem; ≤991 2rem → 32px @390).
- Header `.steps_header-wrp#tiers-and-perks` (anchor target): max-width **65rem** (972.83 @1440), centred, flex column, gap 1rem, text centred. `h2` (`text-h2`) with one plain `<span>` around a single letter (no class, no style) and one `.span_h2-o` glyph.
- `.steps_grid`: 3 × 1fr, gap 2rem → **409.09** each @1440 (≤991 gap .5rem; ≤479 1 column, gap .5rem = 8px). Cards are equal height in the row: **409x579** @1440 (387.7x590.9 @1280), 342 x 499 / 559 / 565 @390.
- Card `.steps_content`: flex column, gap 1rem, padding 2rem (≤991 1.5rem 1rem; ≤767 1rem; ≤479 1.5rem → 24px), radius .6rem, background animated (MF4).
  1. `.rewards_subhead_wrp`: flex column, centred, gap 1.25rem (18.71), padding-bottom 1rem, **border-bottom 1px solid #bfbfbf** (`grey-mid`). 349x105 @1440.
     - `.sub-badge-highlight` pill: radius 5rem, padding .5rem 1rem (7.48/14.97), `position:relative; top:.25rem`, centred text. Card 1: bg **#ffd700**, black text. Card 2 `.is-navy`: bg #1c4774, white. Card 3 `.is-maroon`: bg #7f2a23, white. Sizes @1440: 125x33, 286x33, 267x33.
       - `.rewards-badge-text-wrp`: Peridot **1.1rem / 1.1 / 800, uppercase** (16.46/18.11 @1440; ≤991 1rem → 16/17.6 @390).
     - `.steps_subheading`: Ivypresto 2.25rem/1.1 (33.67/37.04; ≤991 1.75rem; ≤479 7vw = 27.3/30.03), centred by the flex parent.
  2. `.rewards_txt_wrp`: flex column, gap 2rem, align-items center (children are full-width blocks, text left-aligned):
     - `p.text-size-medium` summary.
     - `.rewards-bullets-section-wrp` (flex column, gap 1rem) > N × `.rewards-bullet-wrp` (flex row, gap .5rem, align start):
       - `.bf-stats_bullet-icon-wrp`: 1.2rem circle (17x18 @1440), **1px solid #000**, padding .25rem .2rem .2rem, `position:relative; top:.2rem` (≤479 .05rem) > `.bf-stats_bullet-icon` (.6rem wide) > check SVG `<svg viewBox="0 0 18 14" fill="none"><path d="M1 8L6 13L17 1" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>`.
       - `div.text-size-medium` bullet text; several bullets start with a `<strong>` lead-in (weight 700).
     - Bullets per card: **3 / 4 / 5**.
  3. Card-specific tail:
     - Card 1: `.card-btn-wrp` (margin-top 1rem, centred; ≤479 width 100%) > `a.button-secondary` `Explore events` → `https://www.teachable.com/events` (162x48 @1440; 294x51 @390).
     - Card 2: `p.text-size-small` (.875rem/1.5 → 13.1/19.64; 13.65/20.48 @390), whole text in `<em>`, ending with an inline underlined link (13 chars) → `https://teachable.typeform.com/to/fcdyz2cS`.
     - Card 3: nothing after the bullets.
- **MF4 background pulse** (inline `<style>` in `.code_steps-bg`, verbatim):
```css
.steps_content { background-color: transparent; transition: background-color .3s ease; animation: bgSteps 6s infinite; } /* timing: ease (default) */
.steps_content:nth-of-type(1) { --step-bg: #FBF7E5; animation-delay: 0s; }
.steps_content:nth-of-type(2) { --step-bg: #E7EEF3; animation-delay: 1.5s; }
.steps_content:nth-of-type(3) { --step-bg: #EFE7E6; animation-delay: 3s; }
@keyframes bgSteps { 0% { background-color: transparent; } 5% { background-color: var(--step-bg); } 35% { background-color: var(--step-bg); } 45%, 100% { background-color: transparent; } }
```
  Each card fades in its own tint at 5% (0.3s), holds to 35% (2.1s), fades out by 45% (2.7s), then stays clear; staggered 1.5s, so the tint walks left→right and the first card restarts at 6s. Runs at every width. (Coaching's Steps in catalog B uses different values: 4s, delays 0/.2/.4s. Parameterise duration, delays and tints.)
- Heights 944.34 / 947.67 / 1851.88.

## §4. Product CTA, black "rewards" variant (`section.section_product-cta.padding-top-0`)
- Section: padding-top 0, padding-bottom 8rem (119.73 / 116.98 / **64** — `section_product-cta` uses 4rem at ≤767), relative, overflow hidden. `.padding-global` > `.container-large` >
- `.rewards_cta_wrp`: **bg #000**, white text, radius .6rem, padding 4rem (59.87; ≤767 2rem; ≤479 1.5rem with gap 1rem), flex column, `justify-content:space-between; align-items:center; gap:2rem`, text centred. 1287x351 @1440; 342x350 @390.
  - `h2.product-cta_heading.is-black.heading-style-h3`: 3rem/1.1 (44.9/49.39; ≤767 2.5rem; ≤479 10vw = 39/42.9), **color #e6ff32** (`.is-black` = yellow text on the black card).
  - `p` (`text-body`, white).
  - `.product-cta_btn-wrp` (margin-top 1rem, centred; ≤479 width 100%) > `a.button-secondary` `See tiers + rewards` → `#tiers-and-perks` (197x48 @1440; 294x51 @390).
- Note: unlike the other CTAs there is **no header wrapper**; heading, paragraph and button are direct flex children (2rem gaps).

## Motion on this page
MF4 (steps tint pulse), FAQ accordion (M26), button hovers (M6 for `.button-secondary`: label scale 1.02, 200ms ease). In-page anchor links (`#tiers-and-perks`) jump; the original has no smooth-scroll script (browser default jump). Nothing scroll-driven, no Swiper.

## Assets
- Hero: `6983a59119d93770e2e10364_2674bac7db10d7d5fa0d9a4f5c672888_London-1.webp` (1439x1439), present.
- Glyphs: `68d333eb7daf150f3f4d68c8_teachable-char-o-long.svg` (present), `68b754d6a559281c2a42e12b_teachable-text-e.svg` (**missing**) → https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68b754d6a559281c2a42e12b_teachable-text-e.svg
- Inline SVG: bullet check (above).

## Text slots (copy policy: purpose + length only)
Sections 4 and 5 are empty and have no slots.

### Slot table 1: section_product-hero  (h 928 / 889 / 926)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| div | eyebrow tag (uppercase, starts with an em dash) | 28 | 1 | 1 | 1 | 14.97/22.45 → 15.6/23.4 |  |
| h1 | page title (h1) | 41 | 2 | 3 | 3 | 74.83/74.83 → 42.9/42.9 |  |
| p | intro paragraph | 190 | 4 | 4 | 5 | 19.46/29.18 → 15.6/23.4 |  |

Images: `6983a59119d93770e2e10364_2674bac7db10d7d5fa0d9a4f5c672888_London-1.webp` (1439x1439 nat; 629x629@1440)

Links: button-secondary → `#tiers-and-perks` label `Explore the program`

### Slot table 2: section_product-why  (h 524 / 512 / 471)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.feature-why_heading | section heading (display) | 36 | 2 | 2 | 2 | 59.87/65.85 → 39/42.9 |  |
| p | body paragraph | 449 | 9 | 9 | 11 | 19.46/29.18 → 15.6/23.4 |  |

### Slot table 3: section_steps  (h 944 / 948 / 1852)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2 | section heading | 32 | 1 | 1 | 2 | 59.87/65.85 → 39/42.9 |  |
| div.rewards-badge-text-wrp | tier badge (uppercase) | 10 | 1 | 1 | 1 | 16.46/18.11 → 16/17.6 |  |
| div.steps_subheading | tier title | 14 | 1 | 1 | 1 | 33.67/37.04 → 27.3/30.03 |  |
| p.text-size-medium | tier summary | 64 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.text-size-medium | bullet | 49 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.text-size-medium | bullet | 58 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.text-size-medium | bullet | 54 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.rewards-badge-text-wrp | tier badge (uppercase) | 27 | 1 | 1 | 1 | 16.46/18.11 → 16/17.6 |  |
| div.steps_subheading | tier title | 16 | 1 | 1 | 1 | 33.67/37.04 → 27.3/30.03 |  |
| p.text-size-medium | tier summary | 52 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.text-size-medium | bullet | 55 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.text-size-medium | bullet | 47 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.text-size-medium | bullet | 63 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.text-size-medium | bullet | 79 | 2 | 3 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| p.text-size-small | footnote (small, italic, with link) | 77 | 2 | 2 | 2 | 13.1/19.64 → 13.65/20.48 |  |
| div.rewards-badge-text-wrp | tier badge (uppercase) | 25 | 1 | 1 | 1 | 16.46/18.11 → 16/17.6 |  |
| div.steps_subheading | tier title | 15 | 1 | 1 | 1 | 33.67/37.04 → 27.3/30.03 |  |
| p.text-size-medium | tier summary | 59 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.text-size-medium | bullet | 51 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.text-size-medium | bullet | 60 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.text-size-medium | bullet | 78 | 2 | 3 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| div.text-size-medium | bullet | 64 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| div.text-size-medium | bullet | 55 | 2 | 2 | 2 | 17.21/25.82 → 15.6/23.4 |  |

Links: button-secondary → `https://www.teachable.com/events` label `Explore events`; a(inline) → `https://teachable.typeform.com/to/fcdyz2cS` (inline text link, 13 chars)

### Slot table 4: section_product-blog  (h 0 / 0 / 0)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|


### Slot table 5: section_product-cta padding-0  (h 0 / 0 / 0)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|


### Slot table 6: section_faq padding-top-0  (h 760 / 743 / 745)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.heading-style-h3 | FAQ heading | 26 | 1 | 1 | 2 | 44.9/49.39 → 31.2/34.32 |  |
| h3.accordion_label | FAQ question | 21 | 1 | 1 | 1 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 120 | 2 | 2 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 16 | 1 | 1 | 1 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 175 | 3 | 3 | 5 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 40 | 1 | 1 | 1 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 158 | 3 | 3 | 4 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 54 | 1 | 1 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 170 | 3 | 3 | 4 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 29 | 1 | 1 | 1 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 103 | 2 | 2 | 3 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 237 | 4 | 4 | 7 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 203 | 3 | 3 | 5 | 17.21/25.82 → 15.6/23.4 |  |
| h3.accordion_label | FAQ question | 54 | 1 | 1 | 2 | 17.21/25.82 → 15.6/23.4 |  |
| p | FAQ answer paragraph | 67 | 1 | 1 | 2 | 17.21/25.82 → 15.6/23.4 |  |

Links: a(inline) → `mailto:support@teachable.com` (inline text link, 17 chars)

### Slot table 7: section_product-cta padding-top-0  (h 470 / 460 / 414)
| element | purpose | chars | lines@1440 | @1280 | @390 | px fs/lh 1440 → 390 | UI label |
|---|---|---|---|---|---|---|---|
| h2.product-cta_heading | FAQ heading | 23 | 1 | 1 | 2 | 44.9/49.39 → 39/42.9 |  |
| p | CTA paragraph | 181 | 2 | 2 | 5 | 19.46/29.18 → 15.6/23.4 |  |

Links: button-secondary → `#tiers-and-perks` label `See tiers + rewards`
