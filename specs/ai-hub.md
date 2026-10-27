Source: https://www.teachable.com/ai-hub

# /ai-hub

Measured live on 2026-10-27 at 1440x900 / 1280x800 / 390x844 (same method as `specs/product-template.md`). Text slots use the format `element · ~chars · lines @1440/@390 · purpose`. **Global deltas G1 and G3 from `product-template.md` apply**: no promo marquee, fixed nav, footer mouse-move. There is **no Halloween banner** on this page.

This page uses the **feature template** (`section_feature-hero`, `section_feature-explainer`, `section_feature-cta`), which `/app-hub` shares (and probably the feature pages in catalog C). Those blocks are defined here as F1–F4. **Cross-reference:** catalog C's `specs/feature-template.md` independently specs the same `FeatureHero` (its T2), `FeatureExplainer` (T4), `ProductBlog` (T9c) and `FeatureCta` (T7). The measurements agree. Build each once and treat F1/F3/F4 here as the ai-hub/app-hub instances of those components. It also reuses product-template blocks T3/T4 (stats), T8 (resource cards) and Stories.

## Page order and geometry (y / height in px)
| # | Section | 1440 | 1280 | 390 |
|---|---|---|---|---|
| 1 | Feature hero `section_feature-hero` (F1) | 0 / 844.8 | 0 / 809.3 | 0 / 1032.1 |
| 2 | Video testimonial `section_video-review` (F2) | 844.8 / 470 | 809.3 / 503.1 | 1032.1 / 811.6 |
| 3 | Feature explainer `section_feature-explainer` (F3) | 1314.8 / 2346 | 1312.4 / 2238 | 1843.7 / 2165.1 |
| 4 | Stats marquee (T3), AI stats | 3660.8 / 72 | 3550.4 / 70.3 | hidden |
| 4m | Stats stack (T4), **4 items** | hidden | hidden | 4008.7 / 756.7 |
| 5 | Resource cards, no images (T8) | 3732.7 / 744.1 | 3620.8 / 727 | 4765.4 / 1003 |
| 6 | Stories (REUSE, unchanged) | 4476.9 / 990.9 | 4347.8 / 1012.1 | 5768.4 / 903.7 |
| 7 | Feature CTA `.padding-top-0`, red (F4) | 5467.8 / 431.5 | 5359.9 / 421.6 | 6672.1 / 366.4 |
| 8 | Footer | 5899.3 / 808.8 | 5781.5 / 790.4 | 7038.5 / 1631.6 |
| | document height | 6708 | 6572 | 8670 |

---

## F1. Feature hero (`section.section_feature-hero`)
```
section.section_feature-hero  flex, justify/align center; padding: var(--hero-top-padding) 2rem 8rem  (12rem top = 179.6 @1440)
  .container-large > .feature-hero_grid  grid .5fr 1fr (409.1 | 818.2 @1440), gap 4rem
    .feature-hero_col1 > .feature-hero_img-wrp  radius .6rem, overflow hidden, 100% x 100%
        img.feature-hero_img  cover, 540x720 (portrait 3:4), eager   → row height = image aspect (545.4 @1440)
    .feature-hero_col2  flex col, justify center, align start, gap 1.5rem, relative
      .section-tag_wrp > div  eyebrow, 1rem/1.5/600 uppercase   "— AI TOOLS"
      h1  text-h1 left (74.83/74.83) · ~40c · 2L/3L · hero heading; one word (~7c) is wrapped in <em> (renders in the italic face)
      p (body) · ~214c · 3L/5L · hero intro
      .feature-hero_btn-wrp > a.button-sso "Start for free"
      [app-hub only: .feature-hero_login-wrp, see app-hub.md]
```
- Image: `/assets/68e330d6d82d27e378693191_4e808200b6f59745ffedff4a04559c12_ai-hero.webp` (540x720).
- Height 844.8 @1440 = 179.6 + 545.4 + 119.7. @1280: 809.3.
- Breakpoints: ≤991 bottom padding 6rem, grid .65fr 1fr with gap 2rem (top padding var 9rem). ≤767 bottom 4rem, col2 gap 1rem (top 8rem). **≤479 (390):** padding 112px 24px 64px (7rem top). Grid 1 column, gap 32px, and **the text column comes first** (`order:-9999` on col2). Button wrapper full width (342x50.8). Image 342x456.2 (natural 3:4). Section 1032.1.

## F2. Video testimonial (`section.section_video-review`)
```
section.section_video-review  bg #f0f0f0
  .padding-global.padding-section-large > .container-large
    .video-review_grid  grid .5fr 1fr (409.1 | 818.2), gap 4rem
      .video-review_content-l  grid 2 x 1fr (204.5 each), align center, font 1rem
        .video-review_thumb-wrp  12rem (179.6) circle, overflow hidden → img.video-review_thumb cover  /assets/68e481a2e6c643add77ac08b_StacieBittle.webp (230x230)
        .video-review_play-wrp  flex col, justify center, align start, gap .5rem
          a.global_lightbox.w-lightbox  (opens video)
            .global_video-icon.is-black  5rem (74.8) circle, border 1px #000, backdrop-filter blur(5px), cursor pointer
              .global_video-icon-wrapper.is-black  1.5rem square, border-left 1px #000, relative, left .25rem
                .global_video-icon-line-1  100% wide, border-top 1px #000, transform-origin left, rotate(30deg)
                .global_video-icon-line-2  same, anchored bottom, rotate(-30deg)        → outline "play" triangle
          div  Peridot 1rem/1.5 · ~38c · 2L/2L · watch caption; its trailing duration (~11c) is span.span_time-txt (700, inline-block, top -.175rem)
      .video-review_content-r  flex col, justify center, align start, gap 1rem
        img.video-review_quote-icon  3rem wide (44.9x36.8)  /assets/689d06ccf7eea453b43bcb38_teachable-quotemark-dark.svg (61x50)
        div.video-review_quote-txt  Peridot 2rem / 1.5 (29.93/44.9) · ~171c · 3L/7L · customer quote; its last sentence (~22c) is <strong>
        div (body 1.3rem) · ~51c · 1L/2L · quote attribution (name, business)
```
- **Lightbox (Webflow `w-lightbox`).** The item is a Vimeo embed: `https://player.vimeo.com/video/1043511253`, 940x529, thumbnail `https://i.vimeocdn.com/video/1966728061-167f21a2d7731798f8b5ab63234857b46e4bca817fc5d509ec57aafbff61a460-d_1280?region=us`. Click opens a full-screen dark overlay with the iframe centred (Webflow lightbox default: fade in about 300ms, close button top-right, Esc closes). Build a simple accessible modal; no autoplay is required.
- Height 470 @1440, 503.1 @1280 (the quote wraps to 4 lines).
- Breakpoints: ≤991 grid 1 column (gap 2rem). Left becomes a centred flex row (gap 2rem), right is centred text. ≤767 thumb 10rem, quote 1.5rem. **≤479 (390):** left is a column (thumb 160 circle, then the play block with margin-top −16px, centred). Quote 7vw (27.3/41), 7 lines, centred. Section 811.6.
- Hover: none defined (only the cursor changes).

## F3. Feature explainer (`section.section_feature-explainer`)
```
section.section_feature-explainer  white, relative, overflow hidden
  .padding-global.padding-section-large > .container-large > .feature-explainer_wrp (flex col, gap 2rem)
    .feature-explainer_header-wrp  max-width 60rem (898), flex col centred, gap 1rem, text-align center
      h2 · ~42c · 2L/3L · section heading
      p (body) · ~87c · 1L/3L · section intro
    .feature-explainer_grid x3  grid 1fr 1fr (613.6), gap 4rem; rows alternate image left / right
      .feature-explainer_col1  padding 4rem → .feature-explainer_img-wrp (radius .6rem, overflow hidden) → img cover, 493.9 square @1440
      .feature-explainer_col2  flex col, justify center, align start, gap 1.5rem, padding 4rem 4rem 4rem 0
        h2.feature-explainer_subheading  Ivypresto 3rem / 1.1 (44.9/49.39) · feature title
        p (body) · feature description
        [row 3 only] .feature-explainer_btn-wrp > a.button-sso "Start for free"
```
- Rows: (1) image left `/assets/68e326f273e123ac5703d426_2cd789bd3bb0286f938d5a438ee1d577_earn-ai.webp` (795²), title ~29c (1L/2L), text ~207c (4L/5L). (2) **text left**, image right `/assets/68e330d63bd0b1ca001259a6_fc222074039d4ab4c0dc48a750151bf1_ai-outline.webp` (800²), title ~25c (1L/1L), text ~254c (5L/6L). (3) image left `/assets/68e330d689a5744b2cfbb322_39528a1c0202d75a95a71132c1679a8b_ai-quiz.webp` (795²), title ~30c (2L/2L), text ~243c (5L/6L), then the button.
- Each grid row is 613.6 tall @1440. Section 2346 @1440, 2238 @1280.
- Breakpoints: ≤991 grid gap 2rem, col1 padding 2rem 2rem 2rem 0, col2 padding 3rem 2rem 3rem 0, header max-width 32rem, subheading 2rem, image `object-fit: contain; object-position: 50% 100%`. ≤767 col1 padding 1rem 0, col2 padding 2rem 0 with gap 1rem. **≤479 (390):** header left-aligned (max-width 32rem = 512, so it fills 342). Each grid is 1 column, gap 16px, **image first** in every row (342 square). Subheading 8vw (31.2/34.3). Paragraph 15.6/23.4. Button full width. Grids are 32px apart.
- Note: CSS also defines `.feature-explainer_img-wrp.is-2/.is-3` gold/grey gradient skins. They are not used on ai-hub.

## F4. Feature CTA (`section.section_feature-cta`)
Same component as product template **T14**, with these differences: `.feature-cta_wrp` **bg #7f2a23 (red-dark)** (variants in CSS: `.is-blue-bg` #1c4774; `.is-magic10` gold→grey gradient with dark text); `.feature-cta_heading` 3rem/1.1 (`.is-narrow` max-width 58rem); `.feature-cta_btn-wrp` margin-top 1rem. At ≤479, `align-items: stretch` and the button wrapper is full width.
- ai-hub: `.padding-top-0` (bottom 8rem / 64px @390). Only h2 · ~57c · 2L/4L · closing headline, then `button-sso` "Start for free". Wrap 1287.1x311.8 @1440.
→ Build T14 and F4 as **one component** (`ProductCta`) with `tone="blue"|"red"`.

---

## 4/4m. Stats (T3/T4) with AI stats
- Marquee: 3 stats (the figure is ~5c, ~2c, ~3c; labels ~43c, ~46c, ~52c). The block is 2412.5px wide @1440. Same icons and 60s loop.
- Stack @390: **4 items** (the figure alone, ~5c / 2c / 6c / 3c, no unit word). Labels ~43c, ~46c, ~59c, ~52c, each **2 lines** @390 (342 wide). Item 141.2 tall, section 756.7. The marquee and the stack hold different sets (the stack has one extra stat), so pass them separately.

## 5. Resource cards (T8, no images)
Header: h2 · ~49c · 2L/3L; p · ~105c · 1L/3L. Three text-only cards → blog/resource URLs: titles ~57c (3L/3L), ~50c (3L/2L), ~18c (1L/1L); texts ~124c (4L/3L), ~89c (3L/2L), ~154c (5L/4L). Card 319.3x269 @1440.

## Motion (ai-hub)
| Where | Trigger | What |
|---|---|---|
| Stats marquee | CSS infinite | product template B1 (60s linear) |
| Stories | Swiper autoplay | homepage M23 |
| Buttons | hover | M6 |
| Resource cards | hover | B6 (title underline, arrow −45° → 0, .2s ease) |
| Video icon | click | opens the lightbox (no hover animation) |
| Footer | mouse move | G3 |
There are no scroll-triggered animations and no ScrollTriggers on this page (`ScrollTrigger.getAll()` is empty and the IX2 events are only buttons, nav and footer).

## Missing assets
None (all images are in `public/assets/`). The video is an external Vimeo embed.
