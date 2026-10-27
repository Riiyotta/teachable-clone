Source: https://www.teachable.com/coaching

# /coaching

Uses the product template: read `specs/product-template.md` first. Measured live on 2026-10-27 at 1440x900 / 1280x800 / 390x844. Text slots use the format `element · ~chars · lines @1440/@390 · purpose`.

## Page order and geometry (y / height in px)
| # | Section | 1440 | 1280 | 390 |
|---|---|---|---|---|
| 1 | Halloween banner (T1, G2) | 0 / 360.5 | 0 / 355 | 0 / 474.9 |
| 2 | Product hero (T2, `.is-coaching` gold image bg) | 360.5 / 823.2 | 355 / 786.2 | 474.9 / 948.8 |
| 3 | Stats marquee (T3) | 1183.6 / 72 | 1141.2 / 70.3 | hidden |
| 3m | Stats stack (T4) | hidden | hidden | 1423.7 / 522.6 |
| 4 | **Steps** `section_steps` (below) | 1255.6 / 748.9 | 1211.6 / 760.2 | 1946.3 / 1070.8 |
| 5 | Feature split, grey `section_product`, **2 rows** (T5) | 2004.4 / 1703.9 | 1971.7 / 1628.7 | 3017.2 / 1926.8 |
| 6 | Spotlight cards `section_spotlight` (T6) | 3708.3 / 1099.8 | 3600.5 / 1062.5 | 4943.9 / 2012.9 |
| 7 | Resource cards with images `section_product-blog` (T8) | 4808.1 / 903.6 | 4663 / 882.9 | 6956.8 / 1779.8 |
| 8 | Hub (T13) | 5711.8 / 880.6 | 5545.8 / 852.4 | 8736.6 / 793.4 |
| 9 | Stories (REUSE) | 6592.4 / 990.9 | 6398.3 / 1012.1 | 9530 / 903.7 |
| 10 | Product CTA `.padding-0` (T14) | 7583.4 / 306.5 | 7410.4 / 299.5 | 10433.7 / 322.3 |
| 11 | FAQ (T15) | 7889.9 / 707.7 | 7709.9 / 691 | 10756 / 647.2 |
| 12 | Footer | 8597.6 / 808.8 | 8400.9 / 790.4 | 11403.3 / 1631.6 |
| | document height | 9406 | 9191 | 13035 |

## Slots and assets per section

**2. Hero.** tag "— COACHING". h1 · ~64c · 4L/4L. p · ~95c · 2L/3L. `.product-hero_content-r.is-coaching` has **bg #ffd700** behind the image. Image `/assets/68e31566ba04d34559e26a3a_fd601d05a29162ddeb9baddb60e93809_coaching-hero.webp` (1136², eager), row 628.6 @1440.

**3/3m. Stats.** Same three stats as online-courses.

**5. Feature split (grey) with two rows.** Header: h2 · ~34c · 1L/2L. The h2 contains a stylised "a" (`span.span_h2-all`, below). p · ~86c · 1L/2L (no max-width beyond the 64rem header). Rows:
- Row 1, image left: `/assets/68e315653367f98e10ec6ae5_037c101c36cf96f98a221aa50e9fc83c_coaching-reg.webp` (1100²). Items: `div.product_subheading` ~27c + p ~316c (5L/8L); ~16c + p ~279c (4L/7L). No button.
- Row 2, **text left, image right** (at ≤479 the image goes first): items ~15c + p ~259c (4L/6L); ~15c + p ~197c (3L/5L). Then `button-sso` "Start for free". Image `/assets/68e315658a243929a99efa2a_8a65322ddac2552da79486b2e2d8ec07_coaching-payments.webp` (1100²).
- Row gap 4rem (59.9) @1440, 1rem @390 (the 2 grids are siblings in `.product_wrp`, gap 4rem → 2rem@≤767 → `grid-row-gap 2rem` @479 = 32px measured between rows).
- Note: coaching titles are `div.product_subheading` rather than `h3`. The styling is the same.

**6. Spotlight (T6, spotlight skin).** Header: h2 · ~18c · 1L/1L. The h2 contains a stylised "i" (`span.span_h2-spotlight`, below). p · ~107c · 2L/3L. Cards (DOM order is-2, plain, is-3), images 740x744:
1. `/assets/68e31565462ce99fd25619b6_2f7fe33c2394fed7660b5e02890ef5e1_coaching-kindbody.webp`. Title ~16c (business name), text ~149c (4L/4L).
2. `/assets/68e3156585a3ac7e20de905f_0678e1a776ebfa2d88508064c1e7c04a_coaching-tailored-tutors.webp`. Title ~15c, text ~97c (3L/3L).
3. `/assets/68e3156551c4edf905e2e46a_c6b6d4e08a1ee9c97b1f5fbd8cd13344_coaching-drone-pilot.webp`. Title ~9c, text ~125c (3L/4L).
- Each card has `button-secondary` "See it in action" linking to an external creator site (use `#` or a neutral placeholder in the replica).

**7. Resource cards (T8, with images).** Header: h2 · ~35c · 1L/2L; p · ~71c · 1L/2L. Three cards → `/blog/...` articles. Images (360x279):
- `/assets/68e4875b3d30cff2711e69e8_coaching-fitness-bootcamp.webp`. Title ~32c (2L/2L), text ~86c (3L/3L).
- `/assets/68e4875ba24112f3e56905e6_coaching-a-levels-tutoring.webp`. Title ~27c (2L/2L), text ~102c (3L/3L).
- `/assets/68e4875bdb85f4d7bd5c897e_coaching-uav-coach.webp`. Title ~35c (2L/2L), text ~106c (4L/3L).
- Card size @1440: 319.3x494.3, image 319.3x247.4. Button "READ MORE".

**8. Hub.** h2 ~28c (1L/2L), paragraph ~160c (2L/4L).

**10. Product CTA** (`.padding-0`). Header wrapper with h2 · ~41c · 1L/3L and p · ~67c · 1L/2L. Then `button-sso` "Start for free".

**11. FAQ.** h2 · ~26c · 1L/2L. 3 items: questions 41c (1L/2L), 33c (1L/1L), 48c (1L/2L). Answers 265, 207 and 189 chars, one paragraph each.

---

## 4. Steps (`section.section_steps`), coaching only
**Structure**
```
section.section_steps  bg #fff, relative, overflow hidden
  [div.code_steps-bg  display:none  (holds the CSS embed below)]
  .padding-global.padding-section-large > .container-large > .steps_wrp (flex col, gap 4rem)
    .steps_header-wrp  max-width 65rem (972.8), flex col centred, gap 1rem, text-align center
      h2 · ~41c · 1L/2L · section heading
      p (body) · ~139c · 2L/4L · section intro
    .steps_grid  grid 3 x 1fr (409.1 @1440), gap 2rem, relative
      .steps_content x3  flex col, gap 1rem, padding 2rem, radius .6rem, bg animated (below)
        .steps_subheader-wrp  flex row, padding-bottom 1rem, border-bottom 1px #f0f0f0
          div.steps_subheading  Ivypresto 2.25rem/1.1 (33.68/37.05)  label "Step 1" / "Step 2" / "Step 3"
        .steps_txt-wrp  flex col, gap .5rem
          div.step_txt  Peridot body 1.3rem/1.5 **700** · ~18–28c · 1L/1L · step title
          p (body 400) · ~104–169c · 4–5L @1440 / 3–5L @390 · step description
```
Grid row height @1440 is 310.4 (all three cards stretch to the tallest).

**Motion: background pulse (CSS embed, verbatim)**
```css
.steps_content { background-color: transparent; animation: bgSteps 4s infinite; }   /* timing-function default = ease */
.steps_content:nth-child(1) { animation-delay: 0s; }
.steps_content:nth-child(2) { animation-delay: 0.2s; }
.steps_content:nth-child(3) { animation-delay: 0.4s; }
@keyframes bgSteps {
  0%   { background-color: transparent; }
  5%   { background-color: #f0f0f0; }
  16%  { background-color: #f0f0f0; }
  30%  { background-color: transparent; }
  100% { background-color: transparent; }
}
```
It runs on load and loops forever, with no scroll trigger. The cards light up grey left to right in a 0.2s stagger, hold, fade out together and then pause about 2.8s.

**Breakpoints.** ≤991: wrapper gap 2rem, grid gap .5rem, card padding 1.5rem 1rem, step label 1.75rem. ≤767: card padding 1rem. **≤479 (390):** grid 1 column with gap 8px. Card padding 24px. Label 7vw (27.3/30). Step title and text 4vw (15.6/23.4). Cards 342x259.4 / 259.4 / 212.6. The section is 1070.8 tall.

## Stylised glyphs (coaching)
- `span.span_h2-all` (letter "a" in the feature-split h2): `color: transparent; background-image: url(<teachable-text-a.svg>); background-position: 50% 64%; background-repeat: no-repeat; background-size: 100%; margin: 0 -.5rem 0 -.2rem; padding-right: .6rem`. Responsive: background-size 86% then 84%, margin 0 −.3rem 0 0 and padding-right .4rem at smaller breakpoints. Measured 36.2x89 @1440. **Asset missing** (see below).
- `span.span_h2-spotlight` (letter "i"): background `url(/assets/68d33c6a7b106decaa3bbebc_ce6b5a44e0f4a5be0f42bd462d47b44d_teachable-char-i-long.svg)` 50% 59% / 100% no-repeat; padding 0 .4rem; margin-right −.5rem (≤991: size 82%, margin-left −.1rem; ≤767: 79%). Present.

## Missing assets
| Used by | URL |
|---|---|
| `span.span_h2-all` (stylised "a" in the section-5 h2) | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68b7568dc595a93d5c9a9b0d_teachable-text-a.svg |
