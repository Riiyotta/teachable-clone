Source: https://www.teachable.com/mobile-app (shared feature-page template; also measured on /analytics-and-reporting, /sales-and-marketing, /site-builder, /student-experience)

# Feature-page template ("feature-*" Webflow sections)

Measured live on 2026-10-27 in an isolated headless Chromium (Playwright 1.63, DPR 1) at **1440x900, 1280x800 and 390x844**. One navigation per page per width; everything below is computed style / `getBoundingClientRect`. Cross-checked against `_snapshot/pages/<slug>/*.css` (media-query-aware parse), the inline embeds in `_snapshot/pages/<slug>/index.html`, the live Webflow IX2 store, `ScrollTrigger.getAll()` and live `swiper.params`.

Globals (fluid rem, fonts, type tokens, colors, buttons) are exactly CLONE_SPEC §0. 1rem = 14.9666px @1440, 14.6222px @1280, 16px @390. Values are given as rem first, px second. Copy is NOT transcribed (see COPY POLICY): text slots are given as purpose + character count + rendered lines; each page file has the per-slot tables.

**Which pages use it.** `/analytics-and-reporting`, `/mobile-app`, `/sales-and-marketing`, `/site-builder`, `/student-experience` all use this template. **`/customer-journey` does NOT**: it is built from the *product-page* sections (`section_product-hero`, `section_product-why`, `section_steps`, `section_product-cta`), shares only the FAQ with this template and the why-grid classes. See `specs/customer-journey.md`.

---

## T0. Page shell: differences from the homepage (important)

| | Homepage | Feature pages (all 6) |
|---|---|---|
| Promo marquee (§1) | present | **absent** (not in DOM) |
| Halloween banner (§3) | present | **absent** |
| Nav wrapper | `.nav_fixed.is-sticky` → `position: sticky` | `.nav_fixed` → **`position: fixed; inset: 0 0 auto; z-index: 999`**, at y=0 from load |
| Nav contents | §2 | identical (same links, buttons, dropdowns, hamburger ≤1145). Height 79.28 / 77.45 / 58.8 px |
| Dropdown panel `top` | 8rem if scrollY ≤ 150 else 4.8rem (script) | **constant 5rem** (74.83px @1440). Measured open at scrollY 0 and at scrollY 1200: both 74.83px. The scroll script has no effect here |
| Space under the nav | the marquee + sticky flow | the first section clears the fixed nav with its own top padding `--hero-top` (see T1) |
| Footer (§19) | — | identical, same heights (808.78 / 790.13 / 1631.75) |
| body bg | #fff | #fff |

Build implications (no code here, just what Build needs):
- `Layout` must be able to omit `PromoMarquee` per route (all six of these routes: off).
- `Navbar` needs a `fixed` mode (position fixed, top 0, no sticky) and, in that mode, a constant dropdown top of `5rem` instead of the scrollY-driven `8rem / 4.8rem`.
- Footer: the live IX2 store has a `MOUSE_MOVE` interaction on `footer.footer_component` ("Footer Logo [Mouse Move]", action list a-10, smoothing 86, resting state 50%) that moves the 3 echo logos `.footer_logo-large.is-1/2/3`. X axis keyframes: at 0% mouse-X they sit at translateX −0.5 / −1 / −1.5rem, at 40% at 0, at 80% at +0.5 / +1 / +1.5rem. The Y axis has a matching group (0% keyframe −0.5 / −1 / −1.5rem translateY; the remaining Y keyframes were truncated in my read). It is present on every page (homepage included) and is **not** implemented in `src/components/Footer.jsx`. It belongs to the shared Footer, so I'm only flagging it here.

### New layout token
`--hero-top` (Webflow `--_layout---spacing--hero-top-padding`): **12rem ≥992 · 9rem ≤991 · 8rem ≤767 · 7rem ≤479**. Measured hero padding-top: 179.6px @1440, 175.47 @1280, 112px @390. It doesn't exist in `src/index.css` yet. Add it next to `--section-large`.

---

## T1. Section order and which pages use which section

`●` = present. Heights are 1440 / 1280 / 390 (px).

| # | Section (Webflow class) | analytics | mobile-app | sales-mkt | site-builder | student-exp |
|---|---|---|---|---|---|---|
| 1 | `section_feature-hero` (T2) | ● 799/766/1009 | ● 845/809/1009 | ● 845/809/899 | ● `padding-bottom-0` 723/690/919 | ● 845/809/966 |
| 2 | `section_feature-why` (T3) | ● 504/493/459 | ● is-smaller + pill 503/512/626 | ● 536/523/538 | — | ● 437/427/376 |
| 3 | `section_feature-explainer` (T4) | ● header + 2 rows 1637/1563/1699 | ● 1 row, no header 853/815/746 | ● header + 3 rows 2346/2238/2389 | ● header + 2 rows 1666/1591/1710 | ● header + 3 rows 2375/2267/2513 |
| 4 | `section_feature-list` (T5) | — | ● `padding-top-0`, 4 cards with icons 884/889/1325 | ● `padding-top-0`, 8 cards 1236/1208/1758 | ● full padding, 8 cards 1356/1325/1806 | — |
| 5 | `section_feature-2col` (T9a) | — | ● `padding-0` 599/567/695 | — | — | — |
| 6 | `section_stories` (T6, REUSE) | ● 991/1012/904 | ● 991/1012/904 | ● 991/1012/904 | ● variant 968/990/904 | ● 991/1012/904 |
| 7 | `section_product-blog` (T9c) | ● 704/688/951 | — | — | — | — |
| 8 | `section_rating` (T9b) | — | ● 691/675/994 | — | — | — |
| 9 | `section_feature-int` (T9a variant) | — | — | ● 718/684/763 | — | — |
| 10 | `section_quick-links` (T9d) | — | — | ● 818/788/921 | — | — |
| 11 | `section_feature-cta` (T7) | ● `padding-top-0` 382/373/323 | ● `padding-0` 306/299/326 | ● full padding 546/533/493 | ● `padding-0` 306/299/279 | ● `padding-top-0` 382/373/323 |
| 12 | `section_faq` (T8, REUSE) | — | ● 880/860/847 | — | ● 704/688/595 | — |

The order on each page is exactly the column order of the ● marks top to bottom, except **mobile-app** (hero, why, explainer, list, 2col, stories, rating, cta, faq) and **sales** (hero, why, explainer, list, stories, int, quick-links, cta). Doc heights: analytics 5826/5685/6977, mobile-app 7361/7230/9103, sales 8845/8585/10296, site-builder 6533/6374/7845, student 5838/5678/6713.

Spacing utilities used as section modifiers (all `!important` in Webflow): `.padding-0` (padding 0), `.padding-top-0`, `.padding-bottom-0`.

---

## T2. FeatureHero (`section.section_feature-hero`)

**DOM.** `section.section_feature-hero` > `.container-large` > `.feature-hero_grid` > [`.feature-hero_col1` > `.feature-hero_img-wrp` > `img.feature-hero_img`] + [`.feature-hero_col2` > `.section-tag_wrp` > div(text) · `h1` · `p` · `.feature-hero_btn-wrp` > `.button_wrapper` > `a.button-sso` > `.button_txt`].
Note: the section itself carries the side padding (no `.padding-global` wrapper).

**Section.** `display:flex; justify-content:center; align-items:center; padding: var(--hero-top) var(--global-padding) 8rem`.
- 1440: padding 179.6 / 29.93 / 119.73. 1280: 175.47 / 29.24 / 116.98. 390: 112 / 24 / **64** (pb: ≤991 6rem, ≤767 4rem).
- Variant `.padding-bottom-0` (site-builder): pb 0 at all widths.

**Grid.** `.feature-hero_grid`: `grid-template-columns: .5fr 1fr; gap: 4rem` → **409.08 + 818.19** @1440 (gap 59.87), 387.67 + 775.38 @1280 (gap 58.49). ≤991 `.65fr 1fr`, gap 2rem. ≤479 one column, gap 2rem (32px). Grid width = container-large (1287.13 @1440, x 76.4–1363.6; 1222 @1280; 342 @390).

**Image column.** `.feature-hero_img-wrp`: radius .6rem (8.98 @1440, 9.6px @390), overflow hidden, width/height 100%. `img`: `object-fit:cover; width/height 100%`. The image sets the row height (its natural 3:4 ratio): 409x545 @1440, 388x517 @1280, 342x456 @390 (analytics' image is 589x720 → 409x500 / 388x474 / 342x418). ≤479 `.feature-hero_img-wrp{height:auto}`.

**Text column.** `.feature-hero_col2`: flex column, `justify-content:center; align-items:flex-start; gap:1.5rem` (22.45 @1440; ≤767 1rem = 16px). Vertically centred against the image.

| slot | element | token / computed @1440 → @390 | notes |
|---|---|---|---|
| eyebrow | `.section-tag_wrp > div` | `text-regular`, weight 600, uppercase, lh 1.5: 14.97/22.45 → 15.6/23.4 (4vw) | 1 line everywhere. Starts with an em dash + space. Wrapper is flex, gap .5rem |
| title | `h1` | `text-h1` (5rem/1 → 74.83/74.83; 1280 73.11; 390 11vw 42.9/42.9) | 2–3 lines @1440. One letter may be a **glyph span** (see below) |
| intro | `p` | `text-body` 1.3rem/1.5 → 19.46/29.18; 1280 19.01/28.51; 390 15.6/23.4 | may contain one `<strong><em>` run (weight 700 + italic) |
| CTA | `a.button-sso` "Start for free" | §0.8 `.btn-sso` (150.16x48.38 @1440, 147x47 @1280) | → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly`. ≤479 the `.feature-hero_btn-wrp` is width 100% and the button fills it (342x50.8 @390, label 16.8px) |

**Glyph spans in headings** (decorative letter swaps; text color transparent, the SVG is the background). Already partially built as `.span_h2-o` in `src/components/scale/shared.jsx`; promote to a shared helper with these variants:
- `.span_h1-e`: `background: url(/assets/68b754d6a559281c2a42e12b_teachable-text-e.svg) 50% 64% / 96% no-repeat` (≤991 size 100%). **SVG missing from public/assets** (see T12). Rendered box @1440 34.8x111 (inline, lh 74.83).
- `.span_h1-o`: `/assets/68d333eb7daf150f3f4d68c8_teachable-char-o-long.svg`, position 50% 69%, size 100%, `margin: 0 -.7rem 0 0; padding: 0 .2rem 0 .3rem`; ≤991 `margin-left:-.1rem; margin-right:-.5rem`; ≤767 size 92%, margin-right −.4rem; ≤479 size 92%.
- `.span_h2-o` (customer-journey only): as in §11 (`ml -.2rem, mr -.7rem, px .2rem`, pos 50% 69%, size 100%; ≤991 ml −.1rem mr −.5rem; ≤767 size 96% mr −.4rem; ≤479 92%).
Since the stand-in heading copy differs, apply the span to one matching letter ("e" or "o") of the stand-in, in the same relative position (mid-heading).

**Hover.** Only the button (M6, `.btn-txt` scale 1.03, 200ms ease). No other hover.

---

## T3. FeatureWhy (`section.section_feature-why`)

**DOM.** `section` > `.padding-global.padding-section-large` > `.container-large` > `.feature-why_grid` > [`.feature-why_content-left` > `h2.feature-why_heading[.is-smaller]`] + [`.feature-why_content-right` > optional `.feature-why_subheading-wrp` (pill) OR optional `.feature-why_icon-wrp` (icon) · `p`].

**Section.** bg **#e6ff32** (`bg-yellow`), relative, overflow hidden. Inner padding 8rem 2rem (119.73/29.93 @1440; 116.98/29.24 @1280; 48/24 @390).

**Grid.** `grid-template-columns: 1fr 1fr; gap: 3rem; place-items: center stretch` → 621.11 + 621.13 @1440 (gap 44.9); 588.83 + 588.84 @1280. ≤991 one column, gap 2rem (32px @390).
- Left: flex column, gap 2rem. ≤991 `padding-right: 2rem` (310px text width @390).
- Right: flex column, `justify-content:center; align-items:flex-start; gap:1.5rem` (≤767 1rem), **padding: 1.5rem 0 0 4rem** (22.45 / 59.87 @1440). ≤991 padding 0. So the body text starts at x=802 @1440 (742 + 59.87).

| slot | element | computed @1440 → @390 | notes |
|---|---|---|---|
| heading | `h2.feature-why_heading` | **6rem / 1.1** → 89.8/98.78 @1440, 87.73/96.51 @1280; ≤991 5rem; ≤767 3rem; ≤479 **12vw** (46.8/51.48) | NEW size token (`text-[6rem]` + per-bp overrides, or a `--fs-display` var) |
| heading (`.is-smaller`) | same | **4rem / 1.1** (= h2 token) → 59.87/65.85; ≤991 3rem; ≤767 2.5rem; ≤479 **10vw** (39/42.9) | mobile-app and customer-journey |
| pill (optional) | `.feature-why_subheading-wrp > div` | wrap: bg #000, radius full, padding .4rem 1.25rem .5rem (5.99/18.71/7.48 @1440; 6.4/20/8 @390), 253x36 @1440. Text 1rem/1.5 **700 uppercase #e6ff32** (14.97/22.45 → 15.6/23.4) | mobile-app only |
| icon (optional) | `.feature-why_icon-wrp` | 3rem circle (44.9 @1440, 48 @390), bg #000, padding 1rem, color #e6ff32; inner `.feature-why_icon` width 100%. SVG `viewBox="0 0 133 205" fill="currentColor"` (Teachable dollar-like glyph). Copy the path verbatim from `_snapshot/pages/analytics-and-reporting/index.html` (`.feature-why_icon svg`) | analytics, sales |
| body | `p` | `text-body` 19.46/29.18 → 15.6/23.4 | 3–9 lines @1440 |

Vertical alignment: `align-items:center` on the grid, so the shorter column is vertically centred (mobile-app right column starts at y+3.8px; student's right column sits centred against a 2-line heading).

No hover, no motion.

---

## T4. FeatureExplainer (`section.section_feature-explainer`)

**DOM.** `section` > `.padding-global.padding-section-large` > `.container-large` > `.feature-explainer_wrp` > optional `.feature-explainer_header-wrp` (h2 + p) + N × `.feature-explainer_grid` (rows). Each row has `.feature-explainer_col1` (image) and `.feature-explainer_col2` (text); **DOM order alternates**: row 1 = col1, col2; row 2 = col2, col1; row 3 = col1, col2. At ≤479 the grid stacks in DOM order, so row 2's text sits above its image.

**Section.** relative, overflow hidden, white. Inner padding 8rem 2rem → 48px 24px @390.

**Wrapper.** flex column, gap 2rem (29.93 @1440; 32px @390).

**Header (optional).** `.feature-explainer_header-wrp`: max-width **60rem** (898 @1440, 877 @1280), centred (`margin: 0 auto`), flex column, gap 1rem, `align-items:center`, text centred. ≤991 max-width 32rem (512px); ≤479 `text-align:left; align-items:flex-start`. Contents: `h2` (`text-h2`: 59.87/65.85 @1440 → 39/42.9 @390) + `p` (`text-body`).

**Row grid.** `.feature-explainer_grid`: `1fr 1fr`, gap 4rem → **613.63 + 613.64** @1440 (row height 613.6, square), 582 @1280. ≤991 gap 2rem. ≤479 one column, gap 1rem (16px).

**Image column `.feature-explainer_col1`.** padding **4rem** (59.87) → `.feature-explainer_img-wrp` 493.9x493.9 @1440 (465 @1280), radius .6rem, overflow hidden, w/h 100%. `img`: cover, 100%x100%, 800x800 source. ≤991: col padding `2rem 2rem 2rem 0` and **img `object-fit:contain; object-position:50% 100%`**. ≤767: padding-top/bottom 1rem, right 0 (left stays 0). ≤479: padding 0 → image 342x342 @390, still `contain 50% 100%`.
Optional `.is-2` / `.is-3` img-wrp variants exist in CSS (gold→grey gradients) but none of these pages use them.

**Text column `.feature-explainer_col2`.** flex column, `justify-content:center; align-items:flex-start; gap:1.5rem` (22.45), padding **4rem 4rem 4rem 0** (top/right/bottom 59.87, left 0) → content width 553.8 @1440. ≤991 padding 3rem 2rem 3rem 0. ≤767 padding 2rem 0 2rem 0, gap 1rem. ≤479 padding 0, gap 1rem (16px).

| slot | element | computed @1440 → @390 |
|---|---|---|
| row subheading | `h2.feature-explainer_subheading` | 3rem/1.1 → 44.9/49.39 @1440, 43.87/48.25 @1280; ≤991 2rem; ≤479 **8vw** 31.2/34.32 (= `text-h3` at ≥992 and ≤479, but 2rem at 480–991; use `text-h3` + an `md:` override to 2rem) |
| row body | `p` | `text-body` |
| optional button | `.feature-explainer_btn-wrp > a.button-sso` "Start for free" | on the last row of most pages; ≤479 wrap is width 100% → 342x50.8 |

A text column holds 1 or 2 subheading+paragraph pairs (pages specify). Inline links inside `p` are plain `a` with `text-decoration: underline`, black. One subheading (student-experience) contains an inline `a.feature_txt-link` (underlined, Ivypresto at the subheading size; `:hover { text-decoration: none }`).

No motion, no hover (other than inline links/buttons).

---

## T5. FeatureList (`section.section_feature-list`)

**DOM.** `section` > hidden `.code_feature-list-scroll` (the GSAP script) + `.padding-global` > `.container-large` > `.feature-list_wrp` > [`.feature-list_header-grid` > `.feature-list_header-col1` > `h2`, `.feature-list_header-col2` > `p`] + `.feature-list_grid` > N × `.feature-list_content.is-2|.is-3` (alternating, starting with `.is-2`) > optional `.feature-list_icon-wrp` > `.feature-list_icon` > svg · `.feature-list_subheading` (div) · `p.text-size-medium`.

**Section.** relative, overflow hidden. Padding 8rem 0 (≤991 5rem; 390: 48px 0) — variant `.padding-top-0` removes the top. Side padding from `.padding-global` (2rem / 24px).

**Wrapper.** flex column, gap **4rem** (59.87); ≤991 3rem; ≤767 2rem (32px @390).

**Header grid.** `1fr 1fr`, gap 0 → 643.56 each @1440. Col1 `h2` (`text-h2`). Col2: flex column, `justify-content:center; align-items:flex-end`, holds `p` (`text-body`, left-aligned text in a full-width block). ≤479 one column, gap 1rem.

**Card grid.** `.feature-list_grid`: `repeat(4, 1fr)`, gap 2rem → **299.33** wide @1440 (283.4 @1280). ≤991 2 columns; ≤479 1 column (gap 32px @390). 4 cards = 1 row, 8 cards = 2 rows.

**Card `.feature-list_content`.** flex column, `align-items:flex-start`, gap 1rem (14.97), bg **#f0f0f0**, radius .6rem, padding 2rem, position relative.
- `.is-2` (1st, 3rd, 5th, 7th): **margin-top 16rem** (239.47 @1440, 233.96 @1280), padding-top 4rem → padding 4rem 2rem 2rem.
- `.is-3` (2nd, 4th, …): **margin-top 2rem** (29.93), padding 4rem 2rem.
- The grid stretches the cards in a row to equal outer height, so `.is-3` cards are 210px taller than `.is-2` at load (e.g. 299x543 vs 299x334 with icons; 299x450 vs 299x241 without). The staggered "stairs" look is the margin difference.
- ≤991: both margins 0, padding-top 2rem (is-3 also pb 2rem). ≤767: padding 1.5rem (24px). @390 cards 342 wide, 168–259 tall.

| slot | element | computed @1440 → @390 |
|---|---|---|
| section heading | `h2` | `text-h2` 59.87/65.85 → 39/42.9 |
| intro | `p` | `text-body` |
| icon (optional) | `.feature-list_icon-wrp` | 3rem circle, bg #000, padding 1rem, white (`color: var(--text-light)`); icon width 1.25rem (14.98x13.14 @1440). ≤479 2.5rem, padding .85rem (40px @390). SVG: `<svg viewBox="0 0 229 201" fill="none"><path d="M116.523 84.8345C99.3237 106.024 84.7713 128.654 72.4892 153.374L30.2959 76.5697L0 93.124L59.012 200.538L90.2507 198.525C103.778 163.981 121.154 133.883 143.374 106.511C165.531 79.2174 193.305 53.6477 228.282 28.346L207.998 0.458496C170.539 27.5583 140.62 55.1571 116.527 84.8304L116.523 84.8345Z" fill="currentColor"/></svg>` |
| card title | `.feature-list_subheading` | Ivypresto **2rem/1.1** (29.93/32.93 @1440; 29.24/32.17 @1280); ≤991 1.75rem; ≤767 1.5rem; ≤479 **8vw** (31.2/34.32). Note it gets *bigger* at 390 than at 1440 |
| card body | `p.text-size-medium` | `text-medium` 17.21/25.82 → 15.6/23.4 |

**Motion MF1 (scroll-scrubbed stairs → flat).** Inline script, verbatim behaviour:
```js
gsap.registerPlugin(ScrollTrigger);
gsap.to(".feature-list_content", {
  marginTop: "0rem",
  scrollTrigger: { trigger: ".section_feature-list", start: "top 90%", end: "top 0%", scrub: true }
}); // default ease (power1.out), duration .5 (irrelevant under scrub)
```
- All cards (both `.is-2` and `.is-3`) animate from their CSS margin-top (16rem / 2rem) to 0 as the section top travels from 90% of the viewport to the top edge. `scrub: true` (no smoothing). Live check @1440 on mobile-app: start = 1391px, end = 2201px scroll (section top at 2200.6).
- The section height shrinks while scrolling (by 16rem on the first row of `.is-2` cards). All heights in this spec are at scrollY 0.
- At ≤991 the CSS margins are already 0, so the tween is a no-op; it's fine to only create it when `matchMedia('(min-width: 992px)')` matches, but then keep the CSS margins only ≥992.
- Must be created per section instance (the original uses the class selector, which grabs every list on the page; each page has at most one).
- ScrollTrigger must `refresh()` after images load (the Layout already refreshes on route change).

No hover.

---

## T6. Stories: REUSE `Stories` (homepage §13)

On analytics, mobile-app, sales and student-experience the section is **identical** to the homepage: same `data-wf--testimonials-slider-section--variant=base`, same header slot sizes (h2 42 chars 1 line @1440 / 3 lines @390; paragraph 212 chars 3 / 5 lines), same 6 slides and avatars, same Swiper params (`slidesPerView:'auto', spaceBetween:16, loop, autoplay {delay:2000, pauseOnMouseEnter:true, disableOnInteraction:false, waitForTransition:true}, keyboard, grabCursor, speed 300`), same heights 990.81 / 1012.05 / 903.63. Slides 304x462 @1440, 269x496 @1280, 342x417 @390; list wrapper 110% wide at left −5% (1584px from x −72 @1440).

(Correction for CLONE_SPEC §13: the slide width @1280 is 268.8px = 20% of 1408 − 12.8, and the slide is 496px tall there, not ~255px.)

**Site-builder variant.** Its stories Swiper is created by its own inline script with **`centeredSlides: true, autoHeight: true`** (everything else identical). Result: the active slide is centred in the 110%-wide track and the wrapper height follows the active slide (slide heights 440–462 @1440). Section heights 968.45 / 990.38 / 903.63. → `Stories` needs a `centered` (bool) prop that sets both.

The original pages load `swiper@12` (homepage notes Swiper 11). No behavioural difference for these params.

---

## T7. FeatureCta (`section.section_feature-cta`)

**DOM.** `section` > `.padding-global` > `.container-large` > `.feature-cta_wrp` > [optional `.feature-cta_header-wrp` > `h2.feature-cta_heading` + `p`] or [bare `h2.feature-cta_heading`] + `.feature-cta_btn-wrp` > `a.button-sso`.

**Section.** relative, overflow hidden, padding 8rem 0 (≤991 6rem; ≤767 4rem → 64px @390). Variants: `.padding-0` → 0 (mobile-app, site-builder); `.padding-top-0` → bottom only (analytics, student); none (sales: 119.73 top and bottom).

**Card `.feature-cta_wrp`.** flex column, `justify-content:space-between; align-items:center; gap:2rem` (29.93), padding **4rem** (59.87), bg **#7f2a23** (`bg-red-dark`), radius .6rem, color #fff, text centred. Full container width (1287 @1440).
- ≤767 padding 2rem. ≤479 padding 1.5rem (24px), gap 1rem, `align-items:stretch` (button full width 294px @390).
- Card heights @1440: heading + paragraph (1 line each) **306.48**; heading only **262.**

| slot | element | computed @1440 → @390 |
|---|---|---|
| header wrap | `.feature-cta_header-wrp` | flex column, gap 1rem, centred |
| heading | `h2.feature-cta_heading` | 3rem/1.1 → 44.9/49.39 (= `text-h3` at ≥992); ≤767 2.5rem; ≤479 **10vw** 39/42.9 (≠ `text-h3`'s 8vw, so override at xs) |
| paragraph | `p` | `text-body`, white |
| button | `.feature-cta_btn-wrp` (margin-top 1rem, centred) > `a.button-sso` "Start for free" | 150x48 @1440; ≤479 wrap width 100% → 294x50.8 |

A `.is-blue-bg` (#1c4774) and `.is-magic10` (gold→grey gradient, dark text) variant exist in CSS; unused on these pages. `/ai-hub` and `/app-hub` (catalog-b) also contain `feature-cta_heading`, so this component is shared beyond catalog C.

---

## T8. FAQ: REUSE `Faq` (homepage §17)

Identical structure, classes, colors, accordion behaviour (M26, item 0 open on load, one-at-a-time, height/rotate/translate .3s ease), section padding 8rem 4rem (390: 48px 0), `container-small` 48rem.
Differences per page:
- Items: mobile-app 6, site-builder 4, customer-journey 6 (homepage 9).
- Heading slot: 26 chars, **1 line @1440** / 2 lines @390 (homepage's heading was 2 lines @1440).
- Some answers contain inline links (underlined; `.accordion_rich-text a:hover { text-decoration: none }`); one answer (customer-journey #5) has **3 paragraphs**.
- customer-journey: `.padding-top-0` (pt 0, pb 8rem).
→ `Faq` needs props `heading`, `items: [{q, a: string | string[]}]`, `className`/`paddingTop` override. Heights: mobile-app 880/860/847, site-builder 704/688/595, customer-journey 760/743/745.

---

## T9. Optional modules (used by one or two pages)

### T9a. FeatureTwoCol (`section.section_feature-2col`; also `section.section_feature-int`)
Used by mobile-app (`feature-2col.padding-0`) and sales (`section_feature-int`, whose grid is `.feature_int-grid` but whose children reuse `.feature-2col_col1/.feature-2col_col2/.feature-2col_btn-wrp/.feature-2col_img`; computed values identical).

- Section: `.section_feature-2col` padding 8rem 0 (≤991 side padding 6rem; ≤767 2rem; ≤479 0); `.padding-0` kills all of it (mobile-app). `.section_feature-int`: padding-bottom 8rem only (≤991 6rem; ≤767 4rem → 64px), top 0. Both: relative, overflow hidden; `.padding-global` > `.container-large` inside.
- Grid: `1fr 1fr`, gap **6rem** (89.8) → **598.66 + 598.67** @1440 (566.9 tall @1280); ≤767 gap 2rem; ≤479 one column (32px gap @390).
- col1: flex column, `justify-content:center; align-items:flex-start; gap:1.5rem` (≤767 24px stays 1.5rem): `h2` (`text-h2`) · `p` (`text-body`) · `.feature-2col_btn-wrp` (margin-top 1rem; ≤767 0; ≤479 width 100%) with `a.button-sso` "Start for free" (mobile-app) or `a.button-secondary` "Explore the App Hub" → `https://www.teachable.com/app-hub` (sales; 207x48 @1440).
- col2: radius .6rem, overflow hidden, flex centred; `img.feature-2col_img` cover, width 100%, height auto (800x800 → 598.7 square @1440, 342 @390).

### T9b. Rating (`section.section_rating`), mobile-app only
- Section relative, overflow hidden. `.rating_bg`: absolute, `inset: 0 0 auto`, **height 75%** (≤767 85%), bg #f0f0f0 → 518.4px tall @1440, 845 @390 (grey band behind header + top of cards; cards overhang onto white).
- `.padding-global.padding-section-large` > `.container-large` > `.rating_wrp` (flex column, gap 4rem; ≤991 3rem; ≤767 1.5rem = 24px @390).
- Header `.rating_header-wrp`: flex column, gap 1rem, centred, text centred: `h2` (`text-h2`) + `p` (`text-body`).
- `.rating_grid`: 3 × 1fr, gap 2rem → 409.09 each @1440; ≤991 gap .5rem; ≤767 2 columns; ≤479 1 column (gap 8px @390).
- Card `.rating-card_component`: bg #fff, **1px solid #f0f0f0**, radius .6rem, padding 2rem (≤479 1.5rem), flex column, gap 2rem (≤991 1.5rem), overflow hidden. 409x282 @1440 (equal heights per row), 342x213–260 @390.
  - `.rating-card_content` (flex column, gap 1rem):
    - `.rating-card_stars-wrp`: flex, gap .5rem, **color #ffd700** (brand gold, NEW token); 5 × `.rating-card_star-icon` (width 1.25rem → 18.7x17.92 @1440). Star SVG `viewBox="0 0 24 23" fill="currentColor"`; copy the path from `_snapshot/pages/mobile-app/index.html` (`.rating-card_star-icon svg`).
    - `.rating-card_details-wrp`: flex, gap .5rem, font-size .875rem (13.1 @1440, 13.65 @390), contains a div > `em` (italic, reviewer handle + " • " + date, 25–29 chars, 1 line). ≤991 padding-right 2rem.
  - `.rating-card_quote-wrp` (flex column, gap .5rem): `.rating-card_quote-title` 1.5rem / **1.2** / 600 (22.45/26.94 @1440; ≤479 6vw 23.4/28.08) + `div.text-size-medium` body.
- No hover, no motion.

### T9c. ProductBlog (`section.section_product-blog`), analytics (and an empty instance on customer-journey)
- `.padding-global.padding-section-large` > **`.container-medium`** (68rem = 1017.7 @1440, x 211–1229) > `.product-blog_wrp` (flex column, gap 4rem; ≤991 3rem; ≤479 2rem).
- Header `.product-blog_header-wrp`: flex column, gap 1rem, centred, text centred; ≤479 left-aligned. `h2` (`text-h2`, contains a trailing `<br>`) + `p` (`text-body`).
- `.product-blog_grid`: 3 × 1fr, gap 2rem → 319.28 each @1440; ≤991 gap 1rem; ≤479 1 column, row-gap 3rem (48px @390).
- Card `a.product-blog-card_component` (whole card is the link; `cursor:pointer`, no underline, flex column, gap 1rem; ≤479 gap .5rem). **No image.**
  - `.product-blog-card_txt-wrp` (flex 1, flex column, gap 1rem, padding-right 1rem): `.product-blog-card_subheading` Ivypresto **2.25rem/1.1** (33.67/37.04 @1440; ≤991 1.75rem; ≤767 1.5rem; ≤479 8vw 31.2/34.32) + `p.text-size-medium`.
  - `.product-blog-card_btn-wrp` > `div.button-simple`: flex, gap .25rem, label `.button_txt` "READ MORE" (literal uppercase in source; 1.1rem / 1.5 → 16.46/24.69 @1440, 16.8/25.2 @390; weight 400), then `.button-simple-icon` (width .75rem, margin-top .15rem; ≤767 .85rem) holding the 16x9 arrow.
  - Cards in a row are equal height (295 @1440); the button row is pinned to the bottom because the text wrap is `flex:1`.
- **Hover MF2** (inline `<style>` embeds in the section):
```css
.product-blog-card_component:hover .product-blog-card_subheading { text-decoration: underline; }
.button-simple-icon { transform: rotateZ(-45deg); transition: transform .2s ease; }
.product-blog-card_component:hover .button-simple-icon { transform: rotateZ(0deg); }
```

### T9d. QuickLinks slider (`section.section_quick-links`), sales only
- Section bg **#f0f0f0**, padding 8rem 0 (≤991 6rem; ≤767 4rem → 64px), relative, overflow hidden. `.padding-global` > `.container-large` > `.quick-links_wrp` (flex column, gap 4rem; ≤991 3rem; ≤767 2rem).
- Header `.quick-links_header-wrp`: flex column, gap 1rem, centred, text centred: `h2` (`text-h2`) + `p` (`text-body`).
- `.quick-slider_instance[fs-swiper-element=case-studies]` (flex column, gap 1rem, relative, min-width 0):
  - `.quick-slider_list-wrapper.swiper` (flex 1, `overflow: clip`, perspective 1200px) > `.quick-slider_list.swiper-wrapper` > **5** × `.quick-slider_slide.swiper-slide` (width 100%, flex, `align-items:stretch`).
  - Slide > `.quick-slider_slide-grid`: `1fr 1fr`, gap 4rem → 613.63 each @1440 (≤991 gap 2rem; ≤479 1 column, gap 1rem).
    - `.quick-slider_col1`: flex column, `justify-content:flex-start`, gap 1rem, **padding-top 4rem, padding-left 2rem** (≤991 padding 0, `justify-content:center`) > `.quick-slider_txt-wrp` (flex column, gap 1rem; ≤479 padding-right 2rem) > `.quick-slider_subheading` (Ivypresto **3rem/1.1** 44.9/49.39; ≤991 2.5rem; ≤767 1.5rem; ≤479 **7vw** 27.3/30.03) + `p` (`text-body`); then `.quick-slider_btn-wrp` > `a.button-simple` (label `DOWNLOAD NOW` or `READ MORE`, literal uppercase, weight 400, 16.46/24.69 @1440; icon `.button-simple-icon` statically rotated −45°, 12x12 @1440, 15x15 @390; no hover rule on this page).
    - `.quick-slider_col2`: **aspect-ratio 3/2** (≤991 1/1), bg #fff, radius .6rem, overflow hidden > `img.quick-slider_img` cover 100%x100% (613.6x409 @1440; 342x342 @390).
  - `.quick-slider_navigation`: white pill (radius full, padding .5rem, flex, gap 2rem), **absolute at `bottom: 3rem; left: 2rem`** over the slide's text column @≥992 (206x60 @1440, x=106). ≤991 static (relative), centred; ≤767 `justify-content: space-between` (full width 342x64 @390).
    - prev `button.quick-slider_button` (3rem black circle, white flipped 16x9 arrow; 44.9 @1440, 48 @390) · `.quick-slider_pagination` (monospace 1rem / 1.1, gap .5rem: current · "/" · total) · next button.
- **Motion MF3**: the case-study-slider.js instance (same as homepage §16):
```js
new Swiper(el, { slidesPerView:"auto", grabCursor:true, keyboard:{enabled:true}, watchSlidesProgress:true, observer:true, loop:true, observeParents:true });
// speed 300 (default), no autoplay, spaceBetween 0; on slideChange: current = realIndex+1, total = slides.length (5)
```
Prev/next call `slidePrev()` / `slideNext()`.

---

## T10. Motion index (feature pages)
| id | where | trigger | what | timing |
|---|---|---|---|---|
| M6 (existing) | `.button-sso`, `.button-secondary` label | hover | `.btn-txt` scale 1.03 / 1.02 | 200ms ease (IX2 a-3/a-4, a-40/a-41) |
| M23 (existing) | Stories Swiper | autoplay | as homepage. site-builder: + `centeredSlides`, `autoHeight` | 2000ms delay, 300ms |
| M10 (existing) | stories slide | hover | bg → #f0f0f0 | .2s ease |
| M26 (existing) | FAQ | click | accordion | .3s ease |
| **MF1** | `.feature-list_content` | ScrollTrigger scrub | margin-top 16rem/2rem → 0 | start "top 90%", end "top 0%", scrub true |
| **MF2** | product-blog card | hover | subheading underline; icon rotate −45° → 0 | .2s ease |
| **MF3** | quick-links Swiper | buttons/drag/keyboard | slide + fraction update | 300ms, loop |
| **MF4** | customer-journey `.steps_content` | CSS infinite | background tint pulse (see customer-journey.md) | 6s, delays 0/1.5/3s |
| footer a-10 | footer echo logos | mouse move | translate ±.5/1/1.5rem | IX2 continuous, smoothing 86 (shared Footer, not built) |

Verified absent: no IX2 scroll/page-load events on any of the six pages, no IX3 (`html` has `w-mod-ix` only), no CSS keyframe animations other than `bgSteps` (customer-journey), no videos, no Lottie, no IntersectionObserver-driven reveals. Only the hover/click/scroll items above.

---

## T11. Type and token map
Existing tokens cover: `text-h1` (hero h1), `text-h2` (section h2s), `text-h3` (FAQ heading; explainer subheading ≥992 and ≤479), `text-body`, `text-medium`, `text-regular` (eyebrow), `text-small`.

**New sizes (no existing token)**:
| use | ≥992 | ≤991 | ≤767 | ≤479 |
|---|---|---|---|---|
| why heading (display) | 6rem / 1.1 | 5rem | 3rem | 12vw |
| why heading `.is-smaller` | 4rem / 1.1 | 3rem | 2.5rem | 10vw |
| explainer subheading | 3rem / 1.1 | 2rem | 2rem | 8vw |
| feature-list card title | 2rem / 1.1 | 1.75rem | 1.5rem | 8vw |
| feature-cta heading | 3rem / 1.1 | 3rem | 2.5rem | 10vw |
| quick-slider title | 3rem / 1.1 | 2.5rem | 1.5rem | 7vw |
| product-blog card title / steps tier title | 2.25rem / 1.1 | 1.75rem | 1.5rem (blog) · 1.75rem (steps) | 8vw (blog) · 7vw (steps) |
| rating review title | 1.5rem / 1.2 / 600 | — | — | 6vw |
| tier badge (customer-journey) | 1.1rem / 1.1 / 800 uppercase | 1rem | 1rem | 1rem |

**New colors**: gold **#ffd700** (`--brand--gold`: rating stars, customer-journey why bg + first tier badge), step tints **#fbf7e5 / #e7eef3 / #efe7e6** (customer-journey only). Existing tokens reused: `yellow`, `grey-light`, `grey-mid` (#bfbfbf rules), `red-dark` (CTA card, maroon badge), `blue-dark` (navy badge), black/white.
Note: Webflow's `--brand--yellow-light` is **#f5fad2**, which differs from the clone's `yellow-light` (#f8ffc6, which is Webflow's `--enterprise-colors--light-lemon`). None of these six pages use either.

**New layout token**: `--hero-top` 12 / 9 / 8 / 7rem (T0).

No new radii (all `.6rem` or full), no shadows, no new fonts.

---

## T12. Assets
All images used by the five template pages are already in `public/assets/` (base files; the live pages request `-p-500/-p-800/-p-1080` variants of the same names). Per-page filenames are in each page spec.

**Missing (needed by the hero glyph span on mobile-app, sales, student, customer-journey):**
| file | URL |
|---|---|
| `68b754d6a559281c2a42e12b_teachable-text-e.svg` | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68b754d6a559281c2a42e12b_teachable-text-e.svg |

Inline SVGs (copy from the snapshot HTML, not files): why icon (`.feature-why_icon`, viewBox 0 0 133 205), list check (above), rating star (`.rating-card_star-icon`, 0 0 24 23), arrow 16x9 (`ArrowIcon`), bullet check (customer-journey, `<path d="M1 8L6 13L17 1" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>` in viewBox 0 0 18 14).
