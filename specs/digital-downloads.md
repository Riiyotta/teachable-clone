Source: https://www.teachable.com/digital-downloads

# /digital-downloads

Uses the product template: read `specs/product-template.md` first. Measured live on 2026-10-27 at 1440x900 / 1280x800 / 390x844. Text slots use the format `element · ~chars · lines @1440/@390 · purpose`.

## Page order and geometry (y / height in px)
| # | Section | 1440 | 1280 | 390 |
|---|---|---|---|---|
| 1 | Halloween banner (T1, G2) | 0 / 360.5 | 0 / 355 | 0 / 474.9 |
| 2 | Product hero (T2) | 360.5 / 823.2 | 355 / 786.2 | 474.9 / 948.8 |
| 3 | Stats marquee (T3) | 1183.6 / 72 | 1141.2 / 70.3 | hidden |
| 3m | Stats stack (T4) | hidden | hidden | 1423.7 / 522.6 |
| 4 | Feature split, grey, image left (T5) | 1255.6 / 978.8 | 1211.6 / 938.3 | 1946.3 / 1004 |
| 5 | Feature split, white `section_build`, text left (T5) | 2234.4 / 978.8 | 2149.9 / 938.3 | 2950.4 / 1020 |
| 6 | Feature split, grey, image left (T5) | 3213.2 / 1044.6 | 3088.1 / 1002.6 | 3970.4 / 1070.3 |
| 7 | Hub (T13) | 4257.8 / 880.6 | 4090.8 / 852.4 | 5040.7 / 793.4 |
| 8 | Stories (REUSE) | 5138.4 / 990.9 | 4943.2 / 1012.1 | 5834.1 / 903.7 |
| 9 | **Sell list** `section_sell` (below) | 6129.4 / 634.4 | 5955.3 / 623.5 | 6737.8 / 671.6 |
| 10 | Product CTA `.padding-bottom-0` (T14) | 6763.7 / 431.5 | 6578.8 / 421.6 | 7409.4 / 366.4 |
| 11 | FAQ (T15) | 7195.2 / 1055.7 | 7000.5 / 1031.4 | 7775.8 / 1021.6 |
| 12 | Footer | 8250.9 / 808.8 | 8031.9 / 790.4 | 8797.4 / 1631.6 |
| | document height | 9060 | 8822 | 10429 |

## Slots and assets per section

**2. Hero.** tag "— DIGITAL DOWNLOADS". h1 · ~54c · 4L/4L. p · ~103c · 2L/3L. Image `/assets/68e312b82e25e8adbdfdcf7f_be4c6433f3fbbb2b9ac7f13f005a98d5_downloads-hero.webp` (1136², eager).

**3/3m. Stats.** Same three stats as online-courses.

**4. Feature split (grey, image left)**, header with **no paragraph**: h2 · ~29c · 1L/2L. Items (`div.product_subheading` + p.text-size-medium): ~30c + ~96c (2L/3L); ~21c + ~83c (2L/2L); ~25c + ~96c (2L/3L). Then `button-sso`. Image `/assets/68e312b8b22ffc35efd64f80_c95bed4688c4ad117b1872828f979f5d_downloads-professor.webp` (1100²).

**5. Feature split (white, text left)**, no paragraph: h2 · ~27c · 1L/2L. Items: ~24c + ~91c (2L/2L); ~27c + ~84c (2L/3L); ~22c + ~104c (2L/3L). Then `button-sso`. Image `/assets/68e312b8e1011afe97803293_4ab9cc3e69ab46ee450c7fc313656224_downloads-presentation.webp` (**1176x1176**).

**6. Feature split (grey, image left)**, no paragraph: h2 · ~42c · 2L/3L. Items: ~26c + ~108c (2L/3L); ~14c + ~124c (2L/3L); ~25c + ~105c (2L/3L). Then `button-sso`. Image `/assets/68e312b8f5dee38f94c3758e_9b6b25c689db93f16558b264b1223e6e_downloads-courses.webp` (1100²).

**7. Hub.** h2 ~28c (1L/2L), paragraph ~160c (2L/4L).

**10. Product CTA** (`.padding-bottom-0`: padding-top 8rem @≥992, 64px @390; bottom 0). There is no header wrapper and no paragraph. `h2.product-cta_heading.is-2` (width 100%, max-width 58rem = 868.1) · ~61c · 2L/4L. Then `button-sso` "Start for free".

**11. FAQ.** h2 · ~26c · 1L/2L. 8 items: questions 39 (1L/2L), 49 (1/2), 48 (1/2), 36 (1/1), 49 (1/2), 50 (1/2), 38 (1/1), 34 (1/1). Answers 164, 279, 345, 225, 259, 272, 150 and 130 chars, one paragraph each, **with inline links** (1, 1, 1, 0, 1, 3, 1 and 4 links). Render links underlined in black.

---

## 9. Sell list (`section.section_sell`), DD only
**Structure**
```
section.section_sell  bg #f0f0f0, relative, overflow hidden
  .padding-global.padding-section-large > .container-medium (68rem = 1017.7)
    .sell_grid  grid 1fr 1fr (478.9 each @1440), gap 4rem, relative
      .sell_content-l  flex col, justify/align center, gap 1rem, text-align center
        h2 · ~37c · 2L/2L · section heading
        p (body) · ~82c · 2L/2L · section intro
      .sell_content-r  bg #fff, radius .6rem, padding 2rem, flex col, gap 2rem, z-index 1
        .tools_list-wrp  flex col, gap .75rem
          .tools_list-content x7  flex row, gap .725rem, padding 0 0 1rem 1rem, border-bottom 1px #000
            .seel_icon  inline SVG, 22x22 (the 5th item's icon is 24x24), color #1c4774 (blue-dark)
            div label  Peridot 1.15rem / lh 1.1 (17.21/18.93)
```
- Labels are file-type names (short functional labels, may be kept verbatim): Design files · Spreadsheets · Ebooks · Stock imagery · Email templates · Lesson plans · Asset libraries. The icons are the 7 `seel_icon` entries in `specs/svg-icons-b.md`, in the same order.
- @1440: grid row 394.9 tall (the right card sets it). Items are 38px rows (40 for the 24px-icon row).
- **Breakpoints:** ≤991 grid gap 2rem, card padding 1.5rem. ≤767 section padding 0 (inner padding-section-large remains), card padding 1rem, list items `padding-left:0` .875rem (inherited `.tools_list-content` rule). **≤479 (390):** grid 1 column (gap 32px). Left text block 342x148.6, centred text. Card padding 24px, 342x395. Item text 4vw (15.6/17.2), item padding 0 0 16px 0.
- Motion: none.

## Missing assets
None for this page.
