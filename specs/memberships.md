Source: https://www.teachable.com/memberships

# /memberships

Uses the product template: read `specs/product-template.md` first. Measured live on 2026-10-27 at 1440x900 / 1280x800 / 390x844. Text slots use the format `element · ~chars · lines @1440/@390 · purpose`.

This page has **no stats marquee/stack and no FAQ**. It adds the why statement, the dyna slider and the homepage pricing teaser.

## Page order and geometry (y / height in px)
| # | Section | 1440 | 1280 | 390 |
|---|---|---|---|---|
| 1 | Halloween banner (T1, G2) | 0 / 360.5 | 0 / 355 | 0 / 474.9 |
| 2 | Product hero (T2) | 360.5 / 828.3 | 355 / 791.1 | 474.9 / 1017.8 |
| 3 | **Why statement** `why_section_component` (below) | 1188.8 / 437 | 1146.1 / 427 | 1492.7 / 410.1 |
| 4 | **Dyna slider** `section_product-tabs` (below) | 1625.8 / 927.9 | 1573.1 / 906.6 | 1902.8 / 1010.2 |
| 5 | Pricing teaser `section_home-pricing` (REUSE `Pricing`, identical to homepage §14) | 2553.7 / 661.5 | 2479.6 / 649.2 | 2913 / 1555.1 |
| 6 | Resource cards, **no images** `section_product-blog` (T8) | 3215.2 / 678.3 | 3128.9 / 662.7 | 4468.1 / 1041.2 |
| 7 | Hub (T13) | 3893.5 / 880.6 | 3791.5 / 852.4 | 5509.3 / 793.4 |
| 8 | Stories (REUSE) | 4774.1 / 990.9 | 4644 / 1012.1 | 6302.7 / 903.7 |
| 9 | Product CTA `.padding-top-0` (T14) | 5765 / 426.3 | 5656.1 / 416.5 | 7206.4 / 343.4 |
| 10 | Footer | 6191.3 / 808.8 | 6072.6 / 790.4 | 7549.8 / 1631.6 |
| | document height | 7000 | 6863 | 9181 |

## Slots and assets per section

**2. Hero.** tag "— MEMBERSHIPS". h1 · ~61c · 5L/5L. p · ~155c · 3L/4L, whose first sentence (~49c) is wrapped in `<strong>` (700). Image `/assets/68e31876ef07c53d2e736220_99e4d641d0282b025350e92028eadb89_memberships-hero.webp` (1440x1451, eager). Row 633.8 @1440.

**5. Pricing.** REUSE `Pricing` unchanged: same three cards, copy, buttons and asset `691ee172ca23ef48bdff028d_cta-image-phone-2.webp`. Section padding 0 2rem. It sits between section 4 (bottom padding 8rem) and section 6 (top padding 8rem).

**6. Resource cards (T8, no image wrapper).** Header: h2 · ~38c · 1L/2L; p · ~78c · 1L/2L. Three text-only cards → `/blog/...`: titles ~35c (2L/2L), ~40c (2L/2L), ~49c (3L/3L); texts ~121c, ~130c, ~134c (4L/4L). Cards are 319.3x269 @1440, with "READ MORE" pinned to the card bottom.

**7. Hub.** h2 ~28c (1L/2L), paragraph ~160c (2L/4L).

**9. Product CTA** (`.padding-top-0`: top 0, bottom 8rem / 64px @390). Header wrapper with h2 · ~22c · 1L/2L and p · ~70c · 1L/2L. Button `button-primary-new` (yellow) **"Explore our plans"** → /pricing (182x48.4).

---

## 3. Why statement (`section.why_section_component`)
```
section.why_section_component  bg #ffd700 (gold), relative, overflow hidden
  .padding-global.padding-section-large > .container-large
    .why_section_grid  grid 1fr 1fr (621.1 each @1440), gap 3rem
      .why_product_content_left > h2.why_heading_text  Ivypresto `display-why` 6rem / 1.1 (89.8/98.8) left · ~22c · 2L/2L · big question heading
      .why_section_content_right  flex col, justify center, align start, padding-left 4rem
        p.why_paragraph_copy (body) · ~319c · 6L/8L · rationale paragraph, of which ~80c (2 lines @1440) is wrapped in <strong> (700)
```
- Height 437 @1440 (padding 8rem + 197.5 content).
- Breakpoints: ≤991 grid 1 column, right padding-left 0, heading 5rem. ≤767 gap 1.5rem, heading 3rem. **≤479:** heading 12vw (46.8/51.5), paragraph 15.6/23.4, gap 24px, section 410.1.
- Motion: none.

## 4. Dyna slider (`section.section_product-tabs`)
An image carousel on the left with an autoplaying accordion list on the right. **2 tabs.**

**Structure**
```
section.section_product-tabs  bg #fff, relative, overflow hidden
  .padding-global.padding-section-large > .container-large > .dyna-slider_wrp
    .dyna-slider_component  grid 1fr 1fr, gap 4rem, height 46rem (688.5 @1440)
      .dyna-slider_content-left  relative, radius .6rem, overflow hidden
        .dyna-slider_image-grid  grid 5 x 1fr, width 500%, height 100%, relative; transform translateX(-index*20%); transition transform .5s ease-in-out
          .dyna-slider_image-wrapper           > img.dyna-slider_image (contain, 100%x100%)  /assets/68e31875b534a5ce617838d9_c4398c92b94d56a8ec34565305533cc3_memberships-compare-tiers.webp (1440x1392)
          .dyna-slider_image-wrapper.is-slide-2 (bg #f0f0f0) > img  /assets/68e31876583104a037c5fc6e_c298f6deb596dad2eff2ef8b22571c01_memberships-manage.webp (1440x1392)
          (columns 3–5 empty)
        .dyna-slider_nav-wrapper  absolute, right 2rem, bottom 2rem, flex gap 1rem, z 1
          .dyna-slider_nav-button-prev / -next  2rem black circles, 1px #000 border, white chevron icon (.5rem wide, viewBox 0 0 8 14), padding-right/left .1rem; transition color .1s, background-color .1s (hover keeps the same colours)
        .dyna-slider_t-icon  absolute top 2.5rem, left 2.5rem, width 1.5rem: Teachable "t" mark SVG (viewBox 0 0 286 381, black)
      .dyna-slider_content-right  flex col, gap 2rem, padding 2rem 0 1.5rem, overflow hidden
        .dyna-slider_heading-wrapper  flex col, gap 1rem, padding-right 2rem, relative
          h2 (text-h2, left) · ~30c · 2L/2L · section heading
          p (body) · ~138c · 3L/4L · section intro
          .dyna-slider_pause-button  absolute top-right, 2rem square, cursor pointer → .dyna-slider_pause-icon (shown) / .dyna-slider_play-icon (display:none), 22x22 SVGs, black
        .dyna-slider_nav-grid  flex col, flex 1
          .dyna-slider_nav-link x2 (cursor pointer)  flex col, gap .25rem, padding 1rem 0, relative
            .dyna-slider_progress-wrapper  absolute top 0, full width, border-top 1px #f0f0f0
              .dyna-slider_progress-bar  border-top 1px #000, width 0–100%, relative top -1px
            .dyna-slider_title-wrapper  flex, space-between, align center
              div.dyna-slider_title-text  Ivypresto 2.25rem / 1.2 (33.68/40.42) · ~24–29c · 1L/1L · tab title
              .dyna-slider_icon-wrapper  2rem black circle, 1px #000 border: a white "+" made of
                   .dyna-slider_icon-line-1 (vertical 1px, height 44%) and .dyna-slider_icon-line-2 (horizontal, width 44%), both absolute inset 0, margin auto
            .dyna-slider_detail-wrapper  flex col, gap 1rem, padding-right 2rem, overflow hidden, height 0, opacity 0
              p.dyna-slider_paragraph  Peridot 1rem / 1.5 (14.97/22.45) · ~133–178c · 2–3L @1440 / 4–5L @390 · tab description
        .dyna-slider_btn-wrp > a.button-primary-new "Explore our plans" → /pricing  (182x48.4)
```
@1440: each column is 613.6. Inactive nav link 74.1 tall, active 119.1 (one 2-line paragraph open). @1280: component 1221.5x672.6 (46rem).

**Behaviour (inline script, verbatim logic)**
- `tabCount = 2`, `tabDuration = 4000ms`. Start on tab 0: `updateUI(skipTransition=true)`, then a requestAnimationFrame loop. No IntersectionObserver, so it runs from page load whether visible or not.
- `updateUI()`:
  - image grid `transform: translateX(-${current*20}%)` with `transition: transform .5s ease-in-out` (no transition when skipping).
  - each `.dyna-slider_icon-line-1` height = `0%` for the active tab (the "+" becomes "−") and `44%` otherwise, `transition: height .2s ease-in-out`.
  - active link gets `.active`. Its detail wrapper is measured (`scrollHeight`), set to height 0 / opacity 0, then after 20ms animates to height = scrollHeight and opacity 1 (`transition: opacity .2s ease, height .2s ease`). Inactive details go to height 0 / opacity 0 over .2s.
  - progress bars: active = `elapsed/4000*100%`, others 0, `transition: none`.
- rAF loop: while not paused, `elapsed = now - start` and the active bar's width = elapsed/4000. At 4000ms it calls `nextTab()` and resets the timer.
- `nextTab()`: `current++`, `updateUI()`. If `current === tabCount` (2), it slides to the **empty third column** (a blank panel for 500ms), then sets `current = 0` and calls `updateUI(true)` (snaps back without a transition). This is what happens on the live site: there is a 0.5s blank slide on every loop. Reproduce it faithfully, or add a clone of slide 1 in column 3 if a cleaner loop is preferred (the script comment says that was the intent).
- `prevTab()`: `current--`. At −1 the transform string is invalid, so the image stays put; after 500ms `current = tabCount-1` and `updateUI(true)`.
- Prev/next buttons call prevTab/nextTab **without** resetting the timer. Clicking a nav link resets all bars to 0, sets that tab, `elapsed = 0`, restarts the timer and calls `updateUI()`.
- Pause button: sets paused (the bar freezes), hides the pause icon and shows the play icon. Play resumes with `start = now - elapsed`.

**Breakpoints**
- ≤991: component gap 2rem, height 40rem. Title 1.25rem. Content-right padding-bottom 1rem. Nav wrapper bottom/right 1.5rem. t-icon top/left 1.5rem.
- ≤767: content-right padding 0.
- **≤479 (390):** component becomes 1 column with auto height and gap 32px. Content-left is `aspect-ratio:1` (342x342). The image grid is 1710 wide. Nav buttons are centred at the bottom (`inset: auto 0 1rem`, 32px circles at y+294). t-icon hidden. Heading 39/42.9 (2L). Title 5.5vw (21.5/25.7). Paragraph 4vw (15.6/23.4). Button full width 342x50.8. Section 1010.2 tall.

## Missing assets
None for this page. Icons (nav chevrons, t-mark, pause, play) are in `specs/svg-icons-b.md` (`dyna-slider_*` entries).
