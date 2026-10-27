Source: https://www.teachable.com/online-courses

# /online-courses

Uses the product template: read `specs/product-template.md` first. Measured live on 2026-10-27 at 1440x900 / 1280x800 / 390x844. Text slots use the format `element · ~chars · lines @1440/@390 · purpose`.

## Page order and geometry (y / height in px)
| # | Section | 1440 | 1280 | 390 |
|---|---|---|---|---|
| 1 | Halloween banner (T1, G2) | 0 / 360.5 | 0 / 355 | 0 / 474.9 |
| 2 | Product hero (T2) | 360.5 / 795.6 | 355 / 760.1 | 474.9 / 937.6 |
| 3 | Stats marquee (T3) | 1156 / 72 | 1115.1 / 70.3 | hidden |
| 3m | Stats stack (T4) | hidden | hidden | 1412.5 / 522.6 |
| 4 | Feature split, grey `section_product` (T5) | 1228 / 1125.5 | 1185.4 / 1081.6 | 1935.2 / 1179.9 |
| 5 | Feature split, white `section_build` (T5, text left) | 2353.4 / 1125.5 | 2267 / 1081.6 | 3115.1 / 1340.4 |
| – | `section_embed-watch-demo` (Storylane iframe `app.storylane.io/demo/jjiurfvxjiys`) | display:none at all widths, **don't build** | | |
| 6 | Platform cards `section_platform` (T6) | 3478.9 / 1205.3 | 3348.5 / 1167.6 | 4455.5 / 1786.1 |
| 7 | Hub (T13) | 4684.1 / 909.8 | 4516.2 / 880.9 | 6241.6 / 816.8 |
| 8 | Stories (REUSE) | 5594 / 990.9 | 5397.1 / 1012.1 | 7058.4 / 903.7 |
| 9 | **Tools** `section_tools` (page-specific, below) | 6584.9 / 1246.1 | 6409.2 / 1218.9 | 7962.1 / 3472.3 |
| 10 | Product CTA `.padding-0` (T14) | 7831 / 350.7 | 7628.1 / 342.7 | 11434.4 / 369.1 |
| 11 | FAQ (T15) | 8181.7 / 1543.7 | 7970.7 / 1508.2 | 11803.5 / 1556.1 |
| 12 | Footer | 9725.4 / 808.8 | 9479 / 790.4 | 13359.7 / 1631.6 |
| | document height | 10534 | 10269 | 14991 |

## Slots and assets per section

**2. Hero.** tag "— TEACHABLE". h1 · ~49c · 3L/3L · hero heading. p · ~197c · 3L/5L · product intro. Image `/assets/68e311765f5241a3d356f305_314b597993ae3f81ca355bfa6eb4b708_courses-hero.webp` (1276x1220, eager). Row is 601px tall @1440 (image aspect).

**3/3m. Stats.** Three stats: figures ~5c, ~5c, ~3c. Marquee labels ~40c, ~28c, ~25c. The stack variant combines figure and unit word (~12c, ~14c, ~13c) with labels ~33c, ~19c, ~15c (1 line each @390).

**4. Feature split (grey, image left).** Header: h2 · ~48c · 2L/3L · section heading; p · ~164c · 2L/4L · section intro. One row: image `/assets/68e3117618576ae8098abc7b_b98cb8e56c799a3342711e81f7fb0fce_courses-quiz-1.webp` (1100², 613.6² @1440). Three feature items, each `h3.product_subheading` (~18c, ~21c, ~19c; 1L/1L) + p.text-size-medium (~110c, ~117c, ~105c; 2L/3L). Then `button-sso` "Start for free".

**5. Feature split (white, text left, image right; at ≤479 the image moves first).** Header: h2 · ~64c · 2L/4L; p · ~157c · 2L/4L. Items: h3 ~24c / ~26c / ~13c (1L); p ~176c (3L/4L), ~196c (3L/5L), ~147c (2L/4L). Then `button-sso`. Image `/assets/68e31176489d43d06d91c2a4_de40b7dd8f24f29c9f0a8704b2f53a34_courses-quiz-2.webp` (1100²).

**6. Platform cards (T6, platform skin, with "Start for free" button below).** Header: h2 · ~55c · 3L/3L (598.7 wide column); p · ~204c · 4L/5L. Cards in DOM order:
1. `.is-2` (pt 6rem): `/assets/68e311765fa29efc8085f497_943111b162257a8d92b15efa8ad802c4_courses-payments-2.webp` (736x612). Title ~13c, text ~157c (4L/4L).
2. plain: `/assets/68e31176548905717e562e8a_4ce85045ea6d6abfccfc6ba00aed2594_courses-payments-1.webp`. Title ~19c, text ~132c (3L/3L).
3. `.is-3` (pt 3rem): `/assets/68e31176a0248cabd8f02012_763b4baf45e90e34561637b98bbac9d5_courses-pay-their-way.webp`. Title ~20c, text ~115c (3L/3L).

**7. Hub.** h2 ~28c (1L/2L). Paragraph ~220c (3L/5L).

**10. Product CTA** (`.padding-0`, blue). h2.product-cta_heading · ~44c · 1L/3L · proof-point headline. p.product-cta_paragraph (max-width 46rem = 688.5) · ~141c · 2L/4L. `button-sso` "Start for free".

**11. FAQ.** h2.heading-style-h3 · ~56c · 2L/3L · FAQ heading. 11 items. Question lengths (lines @1440 / @390): 34 (1/1), 48 (1/2), 42 (1/2), 46 (1/2), 35 (1/1), 29 (1/1), 29 (1/1), 41 (1/2), 41 (1/1), 58 (1/2), 45 (1/2). Answer lengths in chars: 418, 593 (2 paragraphs + a 5-item bulleted list), 359, 332, 222, 477 (2 paragraphs + a 4-item list), 590, 414, 471, 402, 231. Item 1 is open on load.

---

## 9. Tools (`section.section_tools`), OC only
Four white cards in a bottom-aligned 4-column grid. A centred section header is absolutely positioned over columns 2–3, and dashed connector lines draw in when each card scrolls into view.

**Structure**
```
section.section_tools  bg #f0f0f0, relative, overflow hidden
  div.tools_bg  absolute, left/right/bottom 0, height 16rem (239.5 @1440), bg #fff   (white band behind the card bottoms)
  .padding-global.padding-section-large > .container-large > .tools_wrp (flex col, gap 3rem)
    .tools_grid  grid 4 x 1fr (310.6 @1440), gap 1rem, place-items: end stretch (cards align to the grid bottom), relative
      .tools_header-wrp.is-raised  absolute top 0, left/right 0, margin 0 auto, max-width 44rem (658.5), padding 2rem 2rem 0, flex col centred, gap 1rem, text-align center
        h2.tools_heading  `tools-heading` 5rem/1.1 (74.83/82.3) · ~27c · 2L/2L · section heading.  One "o" is wrapped in span.span_h2-o (stylised glyph, see below)
        p (body) · ~150c · 3L/4L · section intro
      card 1  .tools_content           (bg #fff, radius .6rem, padding 2rem, flex col gap 2rem, z-index 1)   "Create"   18 items   1006.7 tall @1440
      card 2  .tools_content.is-middle (transparent, padding 0, justify flex-end) > .tools_sticky (bg #fff, radius .6rem, padding 2rem, gap 2rem)  "Host"   7 items   476.7 tall
      card 3  .tools_content.is-middle > .tools_sticky                                                     "Manage"  10 items  621.2 tall
      card 4  .tools_content.is-2      (bg #ffd700 gold, padding 2rem)                                         "Sell"    15 items  910.3 tall
```
Each card's contents:
- `.tools_subheading-wrp`: flex row, gap .75rem, padding-bottom 1rem, border-bottom 1px #000.
  - `.tools_icon-wrp`: 3rem circle (44.9), bg #f0f0f0, padding .85rem, holding the icon (`.tools_subheading-icon`, 100% wide). Card 4 uses `.is-2`: bg #000 with the icon in #ffd700.
  - Then `h3.tools_subheading`: Ivypresto 2.25rem/1.1 (33.68/37.05). Category labels "Create", "Host", "Manage", "Sell" (functional labels).
- `ul.tools_list-wrp`: flex col, gap .75rem, no list style, padding 0. Each `li.tools_list-content`: flex row, gap .725rem, padding 0 0 1rem 1rem, border-bottom 1px #000, Peridot 1.15rem / lh 1.1 (17.21/18.93). Each holds:
  - `.tools_checkmark-wrp`: circle, 1px #000 border, padding .35rem, with a .65rem check icon (`tools_icon` SVG).
  - A feature label of ~4–21 chars (short feature names; write stand-ins). Item counts: Create 18, Host 7, Manage 10, Sell 15.
- Icons: `specs/svg-icons-b.md`. The `tools_subheading-icon` entries are in card order (Create, Host, Manage, Sell), and `tools_icon` is the check.

**Connector lines** (all dashed 1px, absolute, children of their card). The lines below are the **final** state after the scroll-in animation:
| Line | Card | Geometry (final) | Connector dot |
|---|---|---|---|
| `.tools_line-1` | Create | horizontal, `border-top:1px dashed #000`, top 9rem (134.7) from the card top, starting at the card's right edge and running 7rem (104.8) to the right (`inset: 9rem -7rem auto auto`) | `.tools_connector-1` at its left end (−8px/−8px): 15px circle, `linear-gradient(270deg,#000 50%,transparent 50%)` (half disc) |
| `.tools_line-3` | Host | vertical, `border-right:1px dashed #000`, height 14rem (209.5), sitting **above** the card (`top:-14rem`), centred horizontally (`left:2rem; right:0; margin:0 auto`) | `.tools_connector-3` at its bottom (−8px/−7px), `linear-gradient(180deg,#000 50%,transparent 50%)` |
| `.tools_line-4` | Manage | vertical, height 5rem (74.8) above the card (`top:-5rem; left:-2rem; right:0; margin:auto`) | `.tools_connector-3` at the bottom |
| `.tools_line-2.is-short` | Sell | horizontal, `border-top:1px dashed #ffd700`, top 9rem, starting at `left:-2rem`. CSS width 2rem, but **IX2 animates it to 7rem**, so its last 5rem lies over the gold card and is invisible | `.tools_connector-2` at its right end (−8px), `linear-gradient(90deg,#ffd700 50%,transparent 50%)` |

**Motion (Webflow IX2, one SCROLL_INTO_VIEW + SCROLL_OUT_OF_VIEW pair per card, "Tools Card 1–4").**
- Trigger: the card element, **in** when 20% of it is in view (`scrollOffsetValue:20%`), **out** when it fully leaves (offset 0%). It replays every time.
- Initial state (set on in-start): card `translateY(1rem)` (measured 14.97px @1440), opacity 0. Line width (or height) 0. Connector opacity 0.
- In: card `y → 0` 500ms ease, `opacity → 1` 400ms ease (both delay 0). Line grows to its final size: line-1 / line-2 width 0 → 7rem, 500ms ease, **delay 200ms**. line-3 height 0 → 14rem, **800ms** ease, delay 200ms. line-4 height 0 → 5rem, 500ms ease, delay 200ms. Connector opacity → 1, 100ms ease, delay 600ms (line-3's connector: delay 900ms).
- Out: card y → 1rem, opacity → 0, line → 0, connector → 0, all 200ms ease.
- Observed order while scrolling down @1440: the Create and Sell cards trigger together, then Manage, then Host (grid bottom alignment puts the taller cards' tops higher).
- GSAP: use one ScrollTrigger per card (`start: "top 80%"` ≈ 20% visible for these tall cards, or compute `top bottom-=20% of card height`), with `onEnter`/`onEnterBack` playing the in-timeline and `onLeave`/`onLeaveBack` playing the out-timeline.

**@1280:** grid 4 x 294.4, section 1218.9. Card heights 984.9 / 466.3 / 607.7 / 890.6.

**Breakpoints**
- ≤991: header no longer absolute in effect (`margin-bottom 2rem`, no top padding). Grid 2 columns with gap 2rem, `place-items: start stretch`. Card padding 1.5rem. Titles 1.75rem. Heading 4rem. Icon wrap 2.5rem (padding .75rem). line-2 width 2rem at left −2rem. line-3 height 33.5rem placed below the card (`top:100%`). line-4 height 2rem above.
- ≤767: section padding 0 (the inner padding-section-large still applies). Wrapper gap 2rem. Card padding 1rem. Titles 1.5rem. List items `padding-left:0`, .875rem. Heading 3rem. line-3 34.5rem.
- **≤479 (390):** grid 1 column with gap 1.5rem (24px), header first (static, 342x195.4). Cards stack in order Create (1048.6) → Host (468.2) → Manage (622.1) → Sell (946). Card padding 1.5rem (24) on the white cards; the `.tools_sticky` inner card has padding 16px. Titles 8vw (31.2/34.3). List text 4vw (15.6/17.2), item padding 0 0 16px 0. Icon wrap 40px. Heading 10vw (39/42.9). All connector lines become **vertical 1.5rem (24px) dashed links in the 24px gaps between stacked cards**: line-1 below the Create card, line-4 above Manage, line-2 above Sell (gold). Line-3 ends at 0 height. Connectors become top-half discs (`180deg` gradient) at the lower end. The white `tools_bg` band is 16rem (256px).

**Stylised glyph.** `span.span_h2-o` inside the tools heading: `color: transparent; background: url(/assets/68d333eb7daf150f3f4d68c8_teachable-char-o-long.svg) 50% 69% / 92–100% no-repeat; padding 0 .2rem; margin 0 -.7rem 0 -.2rem` (≤991 the background-size steps to 96% and 92% with margin-right −.4rem). Same as the homepage scale headings. Present in `public/assets`.

## Missing assets
None for this page.
