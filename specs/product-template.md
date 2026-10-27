Source: https://www.teachable.com/online-courses

# Product page template (catalog B): /online-courses, /coaching, /digital-downloads, /memberships

Measured live on 2026-10-27 with Playwright (Chromium). Each page was loaded in a same-origin iframe sized exactly 1440x900, 1280x800 and 390x844, so `vw`, `rem` and media queries resolve as in a real window of that size. Values were cross-checked against `_snapshot/pages/<slug>/index.html`, the page CSS (`fs-teachable.<id>.opt.min.css`), the inline scripts and embeds, the Webflow IX2 store (`Webflow.require('ix2').store.getState().ixData`), `ScrollTrigger.getAll()` and the live Swiper instances.

The global foundations in `CLONE_SPEC.md §0` apply unchanged: fluid root (1rem = 14.9666px @1440, 14.6222px @1280, 16px @≤991), fonts, type tokens, colours, buttons. Values are given as **rem first, then px @1440**. "390:" values are computed px at 390.

**Copy policy.** Text slots are given as `element · ~N chars · lines @1440 / @390 · purpose`. Write original stand-in copy of about that length. Only short functional UI labels are reproduced verbatim.

**Confirmed: the four product pages share one template.** They use the same section classes (`section_product-hero`, `stats-marquee_instance` + `section_stats-mob`, `section_product`, `section_build`, `section_hub`, `section_stories`, `section_product-cta`, `section_faq`), the same CSS values and the same breakpoints. Each page then adds 1–3 page-specific sections. The per-page order and deltas are in `specs/<slug>.md`.

| Section (class) | OC | Coaching | DD | Memberships | Spec |
|---|---|---|---|---|---|
| Halloween banner `section_halloween_banner.padding-top-xlarge` | ✓ | ✓ | ✓ | ✓ | T1 |
| Product hero `section_product-hero.has-top-banner` | ✓ | ✓ (gold img bg) | ✓ | ✓ | T2 |
| Stats marquee `stats-marquee_instance` (≥480) | ✓ | ✓ | ✓ | – | T3 |
| Stats stack `section_stats-mob` (≤479 only) | ✓ | ✓ | ✓ | – | T4 |
| Feature split `section_product` (grey) / `section_build` (white) | 2 | 1 (2 rows) | 3 | – | T5 |
| Staggered 3-card row `section_platform` / `section_spotlight` | platform | spotlight | – | – | T6 |
| Steps `section_steps` | – | ✓ | – | – | T7 |
| Blog/resources cards `section_product-blog` | – | ✓ (with images) | – | ✓ (no images) | T8 |
| Tools 4-column `section_tools` | ✓ | – | – | – | T9 |
| Sell list `section_sell` | – | – | ✓ | – | T10 |
| Why statement `why_section_component` | – | – | – | ✓ | T11 |
| Dyna slider `section_product-tabs` | – | – | – | ✓ | T12 |
| Pricing teaser `section_home-pricing` | – | – | – | ✓ (identical to homepage §14) | REUSE `Pricing` |
| Hub `section_hub` | ✓ | ✓ | ✓ | ✓ | T13 |
| Stories `section_stories` | ✓ | ✓ | ✓ | ✓ | REUSE `Stories` unchanged |
| Product CTA `section_product-cta` | ✓ | ✓ | ✓ | ✓ | T14 |
| FAQ `section_faq` | ✓ | ✓ | ✓ | – | T15 |
| Footer | ✓ | ✓ | ✓ | ✓ | REUSE `Footer` (see G3) |

---

## G. Global/layout deltas versus the homepage (all six catalog-B pages)

### G1. No promo marquee, and the nav is `position: fixed`
- `.master-nav-marquee_component` is **absent** from the DOM on all six pages (`/online-courses`, `/coaching`, `/digital-downloads`, `/memberships`, `/ai-hub`, `/app-hub`).
- The nav wrapper is `div.nav_fixed` **without** `.is-sticky`: `position: fixed; inset: 0 0 auto; z-index: 999`. It overlays the page from y=0 (79.3px tall @1440, 77 @1280, 58.8 @390), and the inner bar is the same black bar as the homepage. The first section supplies the clearance (T1 here, or the feature-hero top padding on ai-hub/app-hub). There is no scroll behaviour (no hide or shrink). The only nav IX2 events are the existing dropdown and hamburger ones (M3/M5).
- **Layout change needed:** `Layout.jsx` renders `<PromoMarquee/>` plus a sticky nav on every route. These routes need a layout flag, for example `navMode="fixed"` with `showMarquee={false}`: skip the marquee and switch the nav wrapper from `sticky top-0` to `fixed inset-x-0 top-0`. Everything else in `Navbar` stays the same. Dropdown `--dd-top` (M4): with no marquee the nav sits at 0, so use the "scrolled" value `4.8rem` throughout.

### G2. Halloween banner top padding
Same `HalloweenBanner` component and markup, but the section has `.padding-top-xlarge`, which gives `padding-top: var(--section-padding-large)`: **8rem (119.73px) @≥992, 5rem @≤991, 3rem (48px) @≤767**. On the homepage it was ~.5rem. Banner card heights are unchanged (240.7 @1440, 238 @1280, 410.9 + 16 margin-top @390). Section height: 360.5 @1440 / 355 @1280 / 474.9 @390. → `HalloweenBanner` needs a `topPad` prop (or a className) for this variant. The banner is absent on ai-hub/app-hub.

### G3. Footer: undocumented mouse-move parallax (applies to the homepage too)
`ixData` holds a `MOUSE_MOVE` event on `footer.footer_component` ("Footer Logo [Mouse Move]", action list a-10). It is **not** in `CLONE_SPEC §19` and is not implemented in `Footer.jsx` (which uses static echo offsets). Continuous parameters, based on the element, smoothing 86, resting state 50%:
- X axis: 0% → `.footer_logo-large.is-1/.is-2/.is-3` translateX −0.5 / −1 / −1.5 rem; 40% → 0 / 0 / 0; 80% → +0.5 / +1 / +1.5 rem (held at 80–100%).
- Y axis: 0% → translateY −0.5 / −1 / −1.5 (unit stored as `PX` in ixData); 80% → 0.
- The static offsets measured on the homepage (0.125rem, −0.1875rem …) are exactly this at the 50% resting state. Implement as a pointermove listener on the footer: map pointer x/y to 0–1 across the footer box and lerp with smoothing ≈ 0.86 per frame (IX2 smoothing). It is desktop only in practice (no pointer on touch).

### G4. Section/spacing variables used by the template (resolved per breakpoint)
| CSS var | ≥992 | ≤991 | ≤767 | ≤479 |
|---|---|---|---|---|
| `--section-padding--large` (`.padding-section-large`) | 8rem | 5rem | 3rem | 3rem |
| `--section-padding--medium` (hero `.has-top-banner` top) | 5rem | 4rem | 3rem | 5rem |
| `--spacing--hero-top-padding` | 12rem | 9rem | 8rem | 7rem |
| gaps: xxsmall .25 / xsmall .5 / small 1 / regular 1.5 / medium 2 / large 3 / xlarge 4 rem | | | | |

### G5. New tokens (flag for `tailwind.config.cjs`)
| Proposed token | Value | Used by |
|---|---|---|
| `gold` | `#ffd700` (CSS `gold`, var `--brand--gold`) | coaching hero image bg, tools "Sell" card + its connector, tools icon `.is-2`, memberships why-section bg, feature-explainer gradients (not used on ai-hub) |
| `grey-footnote` | `#444444` | app-hub footnote text |
| `bg-stats-chip` | `linear-gradient(0deg,#fff 30%,#f0f0f0)` | T4 number chip |
| `bg-stats-rule` | `linear-gradient(90deg,#fff 5%,#000 50%,#fff 95%)` | T4 divider top line |
| type `subheading` | 2.25rem / lh 1.2 (33.68/40.42 @1440) → 1.75rem ≤991 → 1.25rem ≤767 → 7vw ≤479 (27.3/32.8 @390) | `.product_subheading` (T5) |
| type `card-title` | 2.25rem / lh 1.1 (33.68/37.05) → 1.75rem ≤991 → 1.5 or 1.25rem ≤767 → 7vw/8vw ≤479 (per component, see below) | platform/spotlight/blog/steps/tools titles |
| type `cta-heading` | 3rem / 1.1 (44.9/49.39) → 2.5rem ≤767 → 10vw ≤479 (39/42.9) | `.product-cta_heading`, `.feature-cta_heading` (h3 token differs at ≤479: 8vw) |
| type `display-why` | 6rem / 1.1 (89.8/98.8) → 5rem ≤991 → 3rem ≤767 → 12vw ≤479 (46.8/51.5) | memberships T11 |
| type `tools-heading` | 5rem / 1.1 (74.83/82.3) → 4rem → 3rem → 10vw | T9 header |
| type `marquee-stat` | 1.75rem / 1.5 (26.2/39.3) → 1.5rem ≤991 → 1.25rem ≤767 | T3 |

Existing tokens cover everything else: `text-h1` (hero h1), `text-h2` (section h2), `text-body` (1.3rem paragraphs), `text-medium` (1.15rem card/feature text), `text-regular`, `rounded-md` (.6rem, all cards and images), `rounded-sm` (.25rem), `rounded-panel` (.3rem), `blue-dark`, `grey-light`, `grey-mid`, `bg-placeholder`.

---

## T1. Halloween banner
REUSE `HalloweenBanner`. See G2 for the only difference.

## T2. Product hero (`section.section_product-hero.has-top-banner`)
**Structure**
```
section.section_product-hero.has-top-banner  (relative, overflow hidden; pad: 5rem 0 8rem)
  .padding-global > .container-large > .product-hero_wrp (flex col, gap 4rem)
    .product-hero_grid  grid 1fr 1fr, column-gap 2rem, row-gap 4rem
      .product-hero_content-l  flex col, justify center, align start, gap 1.5rem
        .section-tag_wrp  (flex, gap .5rem)  > div  "— TEACHABLE" | "— COACHING" | "— DIGITAL DOWNLOADS" | "— MEMBERSHIPS"
        h1
        p
        .product-hero_btn-wrp  flex row, gap 1rem → a.button-sso "Start for free" (sso signup URL) + a.button-secondary "Explore our plans" → /pricing
      .product-hero_content-r  radius .6rem, overflow hidden, flex col (+ `.is-coaching` bg #ffd700)
        img.product-hero_img  width 100%, height 100%, object-fit cover, loading eager
```
Without the campaign banner, the hero top padding would be `--spacing--hero-top-padding` (12rem). With the banner it is `--section-padding--medium` (5rem = 74.83px).

**Geometry @1440.** Grid 628.6 + 29.9 + 628.6 = 1287.1. **The row height is set by the image's natural aspect ratio** (the image fills the column width; the text column is shorter and vertically centred): OC 628.6x601 (1276x1220 image), coaching/DD 628.6x628.6 (1136², 1:1), memberships 628.6x633.8 (1440x1451). Section height = 74.8 + row + 119.7: OC 795.6, coaching/DD 823.2, memberships 828.3. **@1280:** 760.1 / 786.2 / 786.2 / 791.1.

**Typography**
| Slot | Style | @1440 | @390 |
|---|---|---|---|
| tag (eyebrow) | Peridot 1rem/1.5 600 uppercase black (`text-regular`) | 14.97/22.45 | 15.6/23.4 (4vw) |
| h1 · hero heading | `text-h1` left: 5rem/1 | 74.83/74.83 | 42.9/42.9 (11vw) |
| p · hero intro | `text-body` left | 19.46/29.18 | 15.6/23.4 |
| buttons | sso 150.2x48.4, secondary 182x48.4 | | each 342x50.8, stacked, gap 8px |

**Breakpoints**
- ≤991: grid stays 2 columns. Row height still follows the image.
- ≤767: grid gaps 2rem, button row `flex-wrap: wrap` with .5rem gaps. Wrapper gap 2rem.
- ≤479: grid 1 column (text row, then image row, gap 32px). `.product-hero_btn-wrp` width 100%, so both buttons become full width and stack (342x50.8, 8px gap). Section padding 80px 0 48px (padding-medium = 5rem at ≤479; bottom 3rem). Image 342 wide at natural aspect (OC 342x326.9, coaching/DD 342x342, memberships 342x344.7).

**Motion:** none apart from button hover (M6).

## T3. Stats marquee (`div.stats-marquee_instance.hide-mobile-portrait`, shown ≥480)
**Structure**
```
div.stats-marquee_instance  flex col, gap 1rem, padding 1rem 0, border-top/bottom 1px #f0f0f0, overflow hidden, full-bleed (no padding-global)
  .stats-marquee_list-wrapper (perspective 1200px, flex 1)
    .stats-marquee_list (flex row, preserve-3d)
      .stats-marquee_block  x2 identical copies  (flex row, gap 1.5rem, padding 0 1.5rem, flex none)
        repeat for each stat:
          .stats-marquee_item (flex row, gap .5rem, padding 0 1rem, font-size 1.75rem)
             .stats_num-txt   (bg #f0f0f0, radius .25rem, padding 0 .5rem .05rem, weight 700, flex none)  · ~3–5 chars · stat figure
             .stats-marquee_text (weight 500, nowrap)  · ~25–43 chars · stat label
          .stats-marquee_item > .stats_icon (inline SVG; `.is-dollar` 1rem wide, others 1.5rem) - an icon separator after every stat
  .stats-marquee_gradient-left / -right  (display:none, so don't build)
```
- Height 72px @1440 (40px line box + 2x15 padding + 2 borders), 70.3 @1280. Line box: Peridot 1.75rem/1.5 = 26.2/39.3 @1440.
- Items (OC, coaching, DD; identical content): 3 stats, each followed by an icon. Icon order: `is-dollar` (viewBox 0 0 133 205), then a 229x201 icon, then a 241x199 icon. Paths are in `specs/svg-icons-b.md` (`stats_icon` entries 1–3). One block is 1908.2px wide @1440.
- **Motion (CSS, from the page embed):** `[css-marquee-animation=enable] .stats-marquee_block { will-change: transform; animation: marquee-horizontal 60s linear infinite }` with `@keyframes marquee-horizontal { from{transform:translateX(0%)} to{transform:translateX(-100%)} }`. Both blocks translate by their own width, so the second copy seamlessly replaces the first. No hover pause.
- ≤991: item font 1.5rem. ≤767: list gap 1rem, block gap 1rem and padding 0 1rem, item padding 0 .5rem, font 1.25rem. **≤479: hidden** (`hide-mobile-portrait`) and T4 is shown instead.

## T4. Stats stack (`section.section_stats-mob`, ≤479 only)
`display:none` above 479. This is the **base variant** of the same `stats-mob_*` classes the homepage `Stats` component already uses (the homepage applies variant `a089…`), so it is a variant of `Stats`.
```
section.section_stats-mob  bg #f0f0f0, padding 3rem 0 (48px)
  .padding-global > .container-large > .stats-mob_wrp  flex column, gap 2rem (32px), centred
    .stats-mob_content x3  (flex col, align center)
      .stats-mob_txt-wrp  bg #fff + linear-gradient(0deg,#fff 30%,#f0f0f0), radius .3rem, padding .5rem 1rem .3rem (8/16/4.8)
        .stats-mob_num-txt  Ivypresto 8vw (31.2px), lh 1.5 (46.8), centred · ~12–14 chars · figure + unit word (e.g. "N+ unit")
      .stats-mob_divider-wrp  3rem x 2rem (48x32), overflow hidden
        .stats-mob_line-top  1px tall, full width, linear-gradient(90deg,#fff 5%,#000 50%,#fff 95%)
        .stats-mob_line      1px vertical black line, full height
        .stats-mob_connector 9x9px black dot, absolute bottom -5px, centred
      .stats-mob_txt  Peridot 4vw (15.6) / 1.3 (20.3) / 500, centred, padding 8px 8px 0, border-top 1px #000 (width = text width) · ~15–33 chars · stat label
```
Measured @390: content blocks 342x120.9, section 522.6 tall.

## T5. Feature split (`section_product` grey, `section_build` white)
These are one pattern with two skins. Header block, then one or more 2-column rows of image and text.
```
section.section_product (bg #f0f0f0) | section.section_build (bg #fff)   overflow hidden
  .padding-global.padding-section-large (8rem 2rem)
    .container-large > .product_wrp | .build_wrp   flex col, gap 4rem
      .product_header-wrp (max-width 64rem) | .build_header-wrp (max-width 58rem)   flex col centred, gap 1.5rem, text-align center
        h2  · section heading
        p   · optional section intro
      .product_grid | .build_grid   grid 1fr 1fr, gap 4rem   (repeatable rows; rows alternate image side)
        image cell  (.product_content-l | .build_content-right): radius .6rem, overflow hidden → img.product-hero_img 100%/cover (1100x1100 or 1176x1176 squares, lazy)
        text cell   (.product_content-r | .build_content-left): flex col, justify center, align start, gap 2rem
          .product_txt-wrp x2–3 (flex col, gap 1rem): h3/div.product_subheading · feature title ; p.text-size-medium · feature description
          .product_btn-wrp (optional): a.button-sso "Start for free"
```
- @1440: grid 613.6 + 59.9 + 613.6. The image is a 613.6 square, so the row is 613.6 tall and the text column is centred inside it.
- Typography: h2 `text-h2` centred (59.87/65.85). Section intro p `text-body` centred. `.product_subheading` uses the new `subheading` token (2.25rem/1.2 = 33.68/40.42), Ivypresto. Description `text-medium` (17.21/25.82).
- Section heights @1440: header with p + 1 row = 1125.5 (OC); header without p + 1 row = 978.8 (DD); 2 rows (coaching) = 1703.9.
- **Breakpoints:** ≤991 grid gap 2rem, subheading 1.75rem, build text gap 1rem. ≤767 `.product_grid` becomes 1 column (`.build_grid` stays 2 columns until 479), wrapper gap 2rem, subheading 1.25rem. **≤479:** both grids are 1 column with gap 1rem (product) / 2rem (build). **The image always comes first** (build rows reorder so the image sits above the text). Headers become **left-aligned** (`text-align:left; align-items:flex-start`, gap 1rem). Subheading 7vw (27.3/32.8). Text column gap 1rem. Button full width (342x50.8). Image 342x342.
- @390 heights: OC product 1179.9, OC build 1340.4.
- Hover/motion: none.

## T6. Staggered 3-card row (`section_platform` / `section_spotlight`)
One pattern: a 2-column header (h2 left, p right), then 3 cards where card 1 is pushed down 6rem and card 3 down 3rem. Optional centred button below.
```
section (white, relative, overflow hidden) > .padding-global.padding-section-large > .container-large
  .platform_wrp | .spotlight_wrp  flex col, gap 4rem
    .platform_header-grid | .spotlight_header-grid  grid 1fr 1fr, column-gap 6rem, align-items center
      h2 (left)  · section heading
      p  (left, body)  · section intro
    .platform_grid | .spotlight_grid  grid 3 x 1fr, gap 2rem
      .…-card_component(.is-2 | — | .is-3)  flex col, gap 1rem; padding-top: is-2 6rem (89.8), middle 0, is-3 3rem (44.9)
        .…-card_img-wrp  radius .6rem, overflow hidden, flex align end
             platform: bg #f0f0f0 + linear-gradient(180deg,#f0f0f0,#bfbfbf); img 736x612 cover, object-position 50% 0
             spotlight: no bg; img 740x744 cover
        .…-card_txt-wrp  flex col, gap 1rem (spotlight: padding-right 1rem)
          h3/div card title (Ivypresto 2.25rem/1.1 = 33.68/37.05)
          p.text-size-medium
        spotlight only: .spotlight-card_btn-wrp > a.button-secondary "See it in action" (162.8x48.4, external link)
    platform only: .platform_btn-wrp (centred) > a.button-sso "Start for free"
```
- Card DOM order is is-2, plain, is-3. @1440 cards are 409.1 wide. Platform image 409.1x340.2. Spotlight image 409.1x411.3.
- Heights @1440: platform 1205.3, spotlight 1099.8. @1280: 1167.6 / 1062.5.
- **Breakpoints:** ≤991 header column-gap 4rem, stagger becomes is-2 3rem / is-3 1.5rem, title 1.75rem, image margin-bottom .5rem, platform wrapper gap 3rem, spotlight grid gap 1rem. ≤767 header gap 2rem, platform stagger 2rem / 1rem, spotlight grid 2 columns with no stagger, platform title 1.25rem. **≤479:** header 1 column (gap 1rem). Grid 1 column (platform gap 32px, spotlight row-gap 32 / col 16). **No stagger.** Card gap .5rem (platform) / 1rem (spotlight). Titles: platform 1.25rem (20/22), spotlight 7vw (27.3/30). Buttons full width.
- Hover/motion: none. The stagger is static CSS padding, not scroll-driven (no IX2/ScrollTrigger targets these elements).

## T7. Steps (`section.section_steps`, coaching) — see coaching.md
## T8. Blog/resource cards (`section.section_product-blog`)
```
section.section_product-blog (white, relative, overflow hidden)
  .padding-global.padding-section-large > .container-medium (68rem = 1017.7px) > .product-blog_wrp (flex col, gap 4rem)
    .product-blog_header-wrp  flex col centred, gap 1rem, text-align center:  h2 · section heading ; p · intro (body)
    .product-blog_grid  grid 3 x 1fr (319.3 each @1440), gap 2rem
      a.product-blog-card_component  flex col, gap 1rem, cursor pointer → blog URL
        [optional] .product-blog-card_img-wrp  bg #f0f0f0, radius .6rem, overflow hidden, flex align end → img 360x279, cover, object-position 50% 0  (319.3x247.4 @1440)
        .product-blog-card_txt-wrp  flex col, flex 1, gap 1rem, padding-right 1rem
          div.product-blog-card_subheading  Ivypresto 2.25rem/1.1 (33.68/37.05) · card title
          p.text-size-medium  · card summary
        .product-blog-card_btn-wrp > div.button-simple  (flex, gap .25rem) : div.button_txt "READ MORE" (Peridot 1.1rem/1.5 = 16.46/24.7, 400) + .button-simple-icon (.75rem arrow svg, `rotate(-45deg)`, margin-top .15rem)
```
- The card's button row sits at the bottom because the text wrapper is `flex:1`. The cards stretch to the tallest one.
- **Hover (CSS embeds):** `.product-blog-card_component:hover .product-blog-card_subheading { text-decoration: underline }`; `.button-simple-icon { transform: rotateZ(-45deg); transition: transform .2s ease }`, and on card hover `rotateZ(0deg)`.
- Breakpoints: ≤991 wrapper gap 3rem, grid gap 1rem, image margin-bottom .5rem, title 1.75rem. ≤767 title 1.5rem, icon .85rem. **≤479:** header left-aligned. Grid 1 column, row-gap 3rem (48px). Card gap .5rem. Title 8vw (31.2/34.3). Image 342x265.

## T9. Tools 4-column (`section.section_tools`, online-courses) — see online-courses.md
## T10. Sell list (`section.section_sell`, digital-downloads) — see digital-downloads.md
## T11. Why statement (`why_section_component`, memberships) — see memberships.md
## T12. Dyna slider (`section_product-tabs`, memberships) — see memberships.md

## T13. Hub (`section.section_hub`)
REUSE `Hub` (homepage §15). Logos (18), grid, tooltips, ScrollTrigger (M25, verified identical: `start "clamp(20% bottom)"`, `end "clamp(50% 80%)"`, scrub .8, stagger amount .5), and `button-black` "Explore integrations" → /app-hub are all identical. Only the header copy differs:
- h2 · ~28 chars · 1 line @1440 / 2 @390 · section heading.
- p.hub_paragraph · OC ~220 chars (3 lines @1440 / 5 @390; section 909.8 tall) · coaching/DD/memberships ~160 chars (2 lines / 4; section 880.6) · integrations intro.
→ `Hub` needs `heading` and `text` props.

## T14. Product CTA (`section.section_product-cta`)
```
section.section_product-cta(.padding-0 | .padding-top-0 | .padding-bottom-0)  base padding 8rem 0 (≤991 6rem, ≤767 4rem; ≤479 also padding-x 0)
  .padding-global > .container-large
    .product-cta_wrp  bg #1c4774 (blue-dark), white text, radius .6rem, padding 4rem, flex col centred, gap 2rem, text-align center
      [.product-cta_header-wrp  (max-width 64rem, flex col centred, gap 1rem)]  used when there is a paragraph
        h2.product-cta_heading  `cta-heading` token 3rem/1.1 (44.9/49.39)   (.is-2 → width 100%, max-width 58rem)
        p (body, white)
      .product-cta_btn-wrp  margin-top 1rem → a.button-sso "Start for free"  or  a.button-primary-new "Explore our plans" (/pricing)
```
- Padding variants: `.padding-0` → 0/0 (OC, coaching; it sits between Stories and FAQ, which bring their own 8rem). `.padding-bottom-0` → 8rem/0 (DD). `.padding-top-0` → 0/8rem (memberships).
- Heights @1440: OC 350.7 (heading 1 line + p 2 lines), coaching 306.5 (1 + 1), DD 431.5 incl. 119.7 top padding (2-line heading, no p), memberships 426.3 incl. 119.7 bottom padding.
- ≤767: wrap padding 2rem, heading 2.5rem. **≤479:** wrap padding 1.5rem, gap 1rem. Heading 10vw (39/42.9), still centred (the header wrapper gets `align-items:flex-start`, but the h2/p keep `text-align:center` and fill the width). Button wrapper full width (button 294x50.8).

## T15. FAQ (`section.section_faq`)
REUSE `Faq` (homepage §17): same accordion (M26, item 0 open on load), same pill headers, same `.container-small`. It needs `heading` and `items` props, plus support for **rich answers**:
- Some answers have 2 paragraphs and a bulleted `<ul>` (OC items 2 and 6), and DD answers contain inline links. Render the answer slot as rich text: `p` 1.15rem/1.5 with a margin between paragraphs, `ul` default (padding-left 1.5rem, li margin-bottom .25rem), links underlined black.
- The heading is `h2.heading-style-h3` (3rem/1.1). Lengths per page are in each page spec.
- Section padding 8rem 4rem @≥992 (heights @1440: OC 1543.7, coaching 707.7, DD 1055.7).

---

## Motion summary (product template)
| # | Where | Trigger | What | Timing |
|---|---|---|---|---|
| B1 | Stats marquee blocks | CSS infinite | translateX 0 → −100% (each of 2 blocks) | 60s linear, no pause on hover |
| B2 | Hub logos | ScrollTrigger scrub | = homepage M25 | — |
| B3 | Stories | Swiper autoplay | = homepage M23 (`delay 2000`, `speed 300`, loop, pauseOnMouseEnter, `disableOnInteraction:false`) | — |
| B4 | FAQ | click | = M26 | .3s ease |
| B5 | Buttons | hover | = M6 (`.button_txt` scale 1.02/1.03) | 200ms ease |
| B6 | Blog card | hover | title underline; arrow icon −45deg → 0 | .2s ease |
| B7 | Footer logo echo | mouse move | G3 | smoothing .86 |
| Page-specific | Tools cards (OC), Steps bg pulse (coaching), Dyna slider (memberships) | | see page specs | |

There are no page-load entrance animations on any of the four pages. The only scroll-triggered entrance is the OC tools cards.

## Assets
Every image used by the template and the four pages is in `public/assets/` (checked against the live `currentSrc` at all three widths, the snapshot HTML and the CSS `url()`s; `-p-NNN` responsive variants map to the base file). The one missing file is listed in coaching.md. Inline SVGs are in `specs/svg-icons-b.md`.
