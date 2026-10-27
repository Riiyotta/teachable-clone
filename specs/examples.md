Source: https://www.teachable.com/examples

# /examples: page spec

Measured live on 2026-10-27 with Playwright (Chromium, isolated headless context) at 1440x900, 1280x800 and 390x844. Cross-checked against `_snapshot/pages/examples/` (HTML, page CSS `fs-teachable.68ada468….opt.min.css`) and the IX2 store.

Globals follow `CLONE_SPEC.md` §0 / `BUILD_NOTES.md`. 1rem = 14.9666px @1440, 14.6222px @1280 (linear scale; no layout change between 1280 and 1440), 16px @390.

**Copy policy:** body copy is not transcribed. Text slots give element, approximate character count, lines at 1440 / 390, and purpose. Functional labels (tab names, school/product names used as card titles, buttons) are verbatim.

---

## 0. Page chrome
- No promo marquee, no Halloween banner. Nav `div.nav_fixed` is **position fixed**, and the hero's 12rem top padding clears it.
- Footer: homepage `Footer` unchanged.

### Section geometry (y / height)
| # | Section | 1440 | 1280 | 390 |
|---|---|---|---|---|
| 1 | `section.section_examples-hero` | 0 / 293.3 | 0 / 286.6 | 0 / 252.4 |
| 2 | `section.section_examples-tabs` | 293.3 / 1458 | 286.6 / 1433.7 | 252.4 / 2768.5 |
| 3 | `section.section_leaders` (logo row) | 1751.4 / 238.4 | 1720.3 / 233 | 3020.9 / 240.5 |
| 4 | `section.section_product-cta.padding-top-0` | 1989.8 / 431.5 | 1953.2 / 421.6 | 3261.5 / 366.3 |
| 5 | `footer.footer_component` | 2421.3 / 808.8 | 2374.8 / 790.1 | 3627.8 / 1631.8 |
| | document height | 3230 | 3165 | 5260 |

Heights are for the default "Niche" tab. Other tabs change section 2's height (see §2).

---

## 1. Hero (`section.section_examples-hero`)
- Padding `12rem 2rem 4rem` (179.6 / 29.93 / 59.87 @1440). ≤991 padding-bottom 0. ≤767 side padding 0 (390: 112px 0 0). Flex column, justify center, align stretch. Overflow hidden.
- `.container-large > .examples-hero_wrp` (flex column, align start, gap 1.5rem; 390 padding 0 24px, gap 32px):
  - `h1.examples-hero_heading`: Ivypresto **3rem / 1.2** (44.9/53.88 @1440; ≤991 2.5rem; ≤479 10vw = 39/46.8), `align-self:center`, text left (one line, so it reads as centred at 1440). 50 chars, 1 line @1440 (905 wide) / 3 lines @390. Purpose: page headline.

## 2. Example tabs (`section.section_examples-tabs`)
Padding 0 0 8rem (≤991 6rem 0; ≤767 4rem 0; 390 = 64px 0; ≤479 sides 0).
```
.padding-global > .container-large > .examples-tabs_wrp (flex column; gap 3rem)
  .examples-tabs_component.w-tabs   (data-current "Niche"; duration in 300 / out 100; easing ease)
    .examples-tabs_menu.w-tab-menu  flex centred; gap .5rem; margin-bottom 3rem (≤767 wrap, margin-bottom 2rem)
      6 x a.examples-tabs_link      pill: 1px #000; radius full; transparent; padding .7rem 1rem (10.48/14.97); 1rem / 1.5 / 600 / #222 (≤479 4vw)
         .w--current                bg #000; text #fff
         labels: Niche · Health · Business · Academics · Membership · Arts
    .examples-tabs_content > .w-tab-pane > .examples-tabs_pane-wrp   flex column; gap 3rem (≤767 1.5rem)
      .examples-tabs_header-wrp     max-width 58rem (868.1); centred; flex column; gap 1rem; text centred
         h2 (4rem/1.1)              tab title (same word as the tab, 4–10 chars), 1 / 1 lines
         p (body)                   tab intro
      .global_collection > .global_collection-list   grid 3 x 1fr (409.1); gap 4rem 2rem (≤991 3rem 1rem; ≤767 2 cols, 2rem 1rem; ≤479 1 col, row gap 3rem)
         a.global_post-card          flex column; gap 1rem (≤479 .5rem); width/height 100%; no underline
           .global_post-wrp          flex column; gap 1rem; flex 1
             .global_post-img-wrp    aspect-ratio 3/2; radius .6rem; overflow hidden   (409.1x272.7 @1440; 342x228 @390)
                img.global_post-img  cover (360x279 avif sources)
             .global_post-txt-wrp    flex column; gap .5rem
                .global_post-title   Peridot font-size--large 1.5rem / 1.3 / 600 (22.45/29.18; ≤991 1.25rem; ≤479 6vw = 23.4/30.42)
                p.global_post-paragraph   1.15rem / 1.5 (17.21/25.82; 390 15.6/23.4)
           .global_post-author-wrp   flex; align center; gap 1rem
             .global_post-author-img-wrp   3rem circle (44.9; 48 @390); img cover
             .global_post-author-name      1rem / 1.5
```
- Menu @1440: links 72.5–~100 wide, 45.4 tall, centred row. @390: menu wraps to 2 rows (342x103.5); links 47.8 tall, 15.6px text.
- Header text slots per tab:
  | Tab | h2 chars | p chars | p lines 1440 / 390 | cards | card paragraph lines 1440 / 390 | section height 1440 / 390 |
  |---|---|---|---|---|---|---|
  | Niche | 5 | 209 | 3 / 5 | 5 | 4,3,3,4,3 / 4,3,3,5,3 | 1458 / 2769 |
  | Health | 6 | 177 | 2 / 4 | 5 | 3,4,4,4,3 / 3,4,4,5,3 | 1429 / 2769 |
  | Business | 8 | 130 | 2 / 4 | 6 | 4,3,3,4,3,3 / 4,3,3,4,3,3 | 1429 / 3178 |
  | Academics | 9 | 122 | 2 / 3 | 6 | 5,4,3,4,3,5 / 5,5,3,4,3,5 | 1481 / 3272 |
  | Membership | 10 | 162 | 2 / 4 | 5 | 4,3,3,3,3 / 4,3,3,3,3 | 1403 / 2698 |
  | Arts | 4 | 156 | 2 / 4 | 5 | 4,4,4,4,3 / 4,4,4,4,4 | 1429 / 2792 |

  All card titles take 1 line at both widths. The section height changes with the tab (the grid rows grow with the longest paragraph), so content below shifts when switching tabs.
  Purpose of p: category intro.
- Card text slots: title = school/course name (9–26 chars, 1 line at both widths). Paragraph = school summary (93–211 chars; 3–4 lines @1440, 3–5 @390). Author = creator/brand name (11–26 chars, 1 line). Use stand-in names of similar length.
- Card data (cover image → avatar image → link; all files present in `public/assets/`). All links are external school URLs ending `?src=teachable-examples`. **Only the Niche tab's cards have `target="_blank"`.**

| Tab | # | Cover | Avatar | Title chars / para chars | href |
|---|---|---|---|---|---|
| Niche | 1 | `689a0566c5af7a6407f42f5b_6596ef8bfc941a2e93d4d508_home-cooking.avif` | `689a0566c5af7a6407f42f57_6596ef87fc941a2e93d4d31d_mike-greenfield.avif` | 12 / 161 | https://www.sourdoughu.com/join-now?src=teachable-examples |
| Niche | 2 | `689a05668ac0c083c53f8d9f_6596ef5aaeabd76693839c00_alec-steele-blacksmith.avif` | `689a05668ac0c083c53f8d9b_6596ef5dbf147c8467e0369d_alec-steele.avif` | 22 / 120 | https://beginblacksmithing.com/?src=teachable-examples |
| Niche | 3 | `689a0566d000b7bd733937c9_6596efb0072f90c0beea0fcf_uav-coach.avif` | `689a0566d000b7bd733937d1_6596efada34db62434fc6833_alan-perlman.avif` | 9 / 125 | https://learn.uavcoach.com/?src=teachable-examples |
| Niche | 4 | `689a05664dd435d768457945_6596efff30beb6878c72b241_shoemaking.avif` | `689a05664dd435d768457948_6596effcbf147c8467e0909e_amanda-overs.avif` | 10 / 193 | https://icanmakeshoes.teachable.com/?src=teachable-examples |
| Niche | 5 | `689a05665b5018222d5b69ec_6596efd7ad41b4bafccb89ea_houseplant-care.avif` | `689a05665b5018222d5b69f0_6596efd4b6cd5bb6d3c785f5_summer-rayne-oakes.avif` | 15 / 129 | https://www.houseplantmasterclass.com/?src=teachable-examples |
| Health | 1 | `689a056760ab6de42c6a5b5e_6596ed0fe5a1e91fa62114b8_yoga.avif` | `689a056760ab6de42c6a5b67_6596ed0b89c89cde31bcdc28_rachel-jesien.avif` | 4 / 93 | https://racheljesienyoga.teachable.com/?src=teachable-examples |
| Health | 2 | `689a0567a98d95fb21bbc1db_6596ecead25eaf40a5debef3_fitness-bootcamp.avif` | `689a0567a98d95fb21bbc1d3_6596ece7b27739948a0f53c3_greg-o-gallagher.avif` | 16 / 164 | https://my.kinobody.com/?src=teachable-examples |
| Health | 3 | `689a0567f3fdaa7502d1fb47_6596ee877c21212f7a141fbc_breastfeeding.avif` | `689a0567f3fdaa7502d1fb43_6596ee85299a388ddada0945_stacey-stewart.avif` | 13 / 141 | https://milkology.teachable.com/?src=teachable-examples |
| Health | 4 | `689a05670035af5ade3f08d3_6596ee5eab45a707ae20e95a_nutrition.avif` | `689a05670035af5ade3f08d0_6596ee5bacbc4da003f0e700_susan-watson-rd.avif` | 9 / 171 | https://courses.nutritionacademy.co/courses?src=teachable-examples |
| Health | 5 | `689a0566884de518dfd486d4_6596eeb08bc665e6138e33e7_healthy-cooking.avif` | `689a0566884de518dfd486d0_6596eeac113efb16ddb1a211_happy-bellyfish.avif` | 15 / 124 | https://school.happybellyfish.com/?src=teachable-examples |
| Business | 1 | `689a056409b9a7867fcef83a_6596f5fe45a286d397820897_product-marketing-alliance.avif` | `689a056409b9a7867fcef83d_6596f6031dccad79cecaa9b2_product-marketing-alliancel-ogo.avif` | 26 / 145 | https://certified.productmarketingalliance.com/p/product-marketing-certified-core?src=teachable-examples |
| Business | 2 | `689a0564c10a2b6c76eaf6dc_6596f5a9403bd0bbd663fb89_gsn3-academy.avif` | `689a0564c10a2b6c76eaf6e0_6596f5a79821a3382a2b1089_gsn3.avif` | 12 / 120 | https://gns3.teachable.com/?src=teachable-examples |
| Business | 3 | `689a05648058b17def8509ab_6596f62a31d488dcab30f7b2_cover-insurance.avif` | `689a05648058b17def8509a8_6596f62d15e5d97421287db5_cover-insurance-logo.avif` | 15 / 131 | https://drivingschoolacademy.teachable.com/?src=teachable-examples |
| Business | 4 | `689a0564215a15b845819e09_6596f52c7e279d5bdb3de7c4_the-new-york-times.avif` | `689a0564215a15b845819e0d_6596f5224f4f03820202c789_the-new-york-times-logo.avif` | 18 / 158 | https://online.nytedu.com/p/how-to-tell-brand-stories-with-video?src=teachable-examples |
| Business | 5 | `689a0564d38020c93d36e955_6596f4e7eddfbce0d268e1c1_stackskills.avif` | `689a0564d38020c93d36e951_6596f4e4b8068a3300aa0882_stackskillslogo.avif` | 11 / 104 | https://stackskills.com/?src=teachable-examples |
| Business | 6 | `689a05640587fc371d7a9f69_6596f5da5977dcf1ebf89c76_getresponse.avif` | `689a05640587fc371d7a9f6d_6596f5d1afc36ed962038f7d_getresponse-logo.avif` | 11 / 105 | https://www.certification.getresponse.com/?src=teachable-examples |
| Academics | 1 | `689a05660e20918a4185ea65_6596f0c9aeabd76693848f1e_a-levels-tutoring.avif` | `689a05660e20918a4185ea61_6596f0cc6d61aa5f06351d86_tailored-tutors.avif` | 17 / 211 | https://tailoredtutors.co.uk/?src=teachable-examples |
| Academics | 2 | `689a05663972616cfc9d417c_6596f0f7976302ad69ef1429_languages.avif` | `689a05663972616cfc9d4177_6596f0f37648e97a7872c62d_coffee-break-languages.avif` | 9 / 185 | https://coffeebreaklanguages.com/?src=teachable-examples |
| Academics | 3 | `689a0566ccbdc3f3226fa72c_6596f149070874eade6ac271_self-published-authors.avif` | `689a0566ccbdc3f3226fa730_6596f146abe54f58ebd9fb91_mark-dawson.avif` | 22 / 130 | https://learn.selfpublishingformula.com/?src=teachable-examples |
| Academics | 4 | `689a0566248df625a23e2067_6596f129ac0d55644f947a96_3d-design.avif` | `689a0566248df625a23e2063_6596f1278bc665e6138fd38e_zacharias-reinhardt.avif` | 9 / 162 | https://cgboost.com/academy/?src=teachable-examples |
| Academics | 5 | `689a0566608dd89ca8fe42d1_6596f16cd7997cd15e3acc49_e-learning-courses.avif` | `689a0566608dd89ca8fe42d5_6596f16ad0980aaf95325162_henry-reich.avif` | 18 / 121 | https://academy-hacker.teachable.com/?src=teachable-examples |
| Academics | 6 | `689a056582a5b28675036e0a_6596f1987648e97a78731c88_music-production.avif` | `689a056582a5b28675036e01_6596f191a7ae2814f8be7051_io-music-academy.avif` | 16 / 184 | https://online.iomusic.academy/?src=teachable-examples |
| Membership | 1 | `689a05650a98667ef4195d8e_6596f2cfde14c2d27c3aa436_harmonica-school.avif` | `689a05650a98667ef4195d8a_6596f2cc813c0bd8a6e3e4f4_tomlin-leckie.avif` | 16 / 167 | https://www.tomlinharmonicaschool.com/?src=teachable-examples |
| Membership | 2 | `689a0565bc32c4ddac7b87e9_6596f31eb41e333d9feb365b_jewelry.avif` | `689a0565bc32c4ddac7b87e5_6596f31b93f068aa38873291_jessica-rose.avif` | 7 / 122 | https://jewelleryschoolonline.teachable.com/?src=teachable-examples |
| Membership | 3 | `689a05655466f2999ad9543f_6596f355aba0759b4faee740_coding-classes.avif` | `689a05655466f2999ad95443_6596f35097f2933bb79fa94f_tyler-mcginnis.avif` | 14 / 131 | https://ui.dev/courses/?src=teachable-examples |
| Membership | 4 | `689a056526d64eab83fb0617_6596f2eb7e7f1549f45439aa_trading-skills.avif` | `689a056526d64eab83fb061b_6596f2e8e34ebc99e895f63f_sean-jantz.avif` | 14 / 129 | https://tvc.teachable.com/p/btgtradingmembership |
| Membership | 5 | `689a0565c033fc596be2e75c_6596f3b75e8ac74a643d8c3e_marketing.avif` | `689a0565c033fc596be2e760_6596f3b29e7eaa16daf18a30_edward-zia.avif` | 9 / 97 | https://edwardzia.teachable.com/p/theawesomemarketingvault?src=teachable-examples |
| Arts | 1 | `689a05675b5018222d5b6a74_6596eb3371c0f452f63204f8_watercolor.avif` | `689a05675b5018222d5b6a78_6596eb2f30a4ae80fc261d9a_angela-fehr.avif` | 19 / 162 | https://learn.angelafehr.com/p/creativewatercolour?src=teachable-examples |
| Arts | 2 | `689a0567b56d5bf38a2c57cc_6596eb677c21212f7a11dc24_hand-lettering-course.avif` | `689a0567b56d5bf38a2c57cf_6596eb64de14c2d27c35cdad_lauren-hom.avif` | 14 / 170 | https://homsweethom.teachable.com/?src=teachable-examples |
| Arts | 3 | `689a05677ed36eb33a44922e_6596eba8a7ae2814f8badbad_arcylic-pouring-course.avif` | `689a05677ed36eb33a449232_6596eba6e2c6f5c0bae1400d_deby-coles.avif` | 15 / 174 | https://acrylicpouring.teachable.com/?src=teachable-examples |
| Arts | 4 | `689a0567e42e27e034d8bc52_6596ec0830beb6878c6fc53b_paper-flower-course.avif` | `689a0567e42e27e034d8bc5d_6596ebfe0a805a81fbe82edf_catherine-oxley.avif` | 12 / 156 | https://bouqpaperflowers.teachable.com/?src=teachable-examples |
| Arts | 5 | `689a0567248df625a23e20f3_6596ebcd1767ebfae5134d8e_make-fabulous-cakes-course.avif` | `689a0567248df625a23e20ef_6596ebca02f47727d23e785e_darlene-abarquez.avif` | 19 / 134 | https://learn.make-fabulous-cakes.com/?src=teachable-examples |

- Card @1440: 409.1x487.5 (image 272.7, title row 29.2, paragraph 3–4 lines, author row 44.9). @390: 342x432.
- **Hover:** none. The CSS has `.global_post-link:hover .global_post-title { underline }`, but these cards use `.global_post-card`, so no hover effect applies.

### Motion
| # | Trigger | What | Timing |
|---|---|---|---|
| X-M1 | click a tab link | Webflow tabs: current pane fades out, new pane fades in; link style swaps instantly | out **100ms**, in **300ms**, `ease` |

No scroll or load animations, no IX2 beyond button and nav hovers.

## 3. Leaders logo row (`section.section_leaders`)
- Padding 0 0 8rem (≤991 3rem 0; ≤767 bottom 0; 390 = 48px 0 0).
- `.leaders_wrp`: flex column, gap 3rem (≤767 1.5rem, centred).
  - `.leaders_header-wrp > div` (body, centred): 66 chars, 1 / 2 lines. Purpose: "trusted by" line.
  - `.leaders_grid`: grid 5 x 1fr, gap 1rem (245.5 cells @1440). ≤991: flex-wrap, gap 1.5rem 2rem. ≤767: centred. 390: 342x121.8, 3 rows.
    - `.leaders_content` (flex centred) > `img.leaders_logo` width 10rem (149.7 @1440; ≤767 8rem; ≤479 6.5rem = 104px). `.is-larger` 12rem (≤767 10rem; ≤479 8rem). `.is-smaller` 8rem (≤767 6.5rem; ≤479 5rem).
    - Order and size class: `68d51329c3e11f4a3f681a6c_the-new-york-times-logo.svg` (.is-larger), `68de6926069edd6be4caa969_shopify-logo.svg`, `68d513297751735c9b29d6f9_pearson-logo.svg`, `68de6926991aef872e27c9ea_intuit-logo.svg` (.is-smaller), `68de69269f37095cb963ff00_penn-law-logo.svg`. All are black SVG wordmarks, natural 200 wide.

## 4. Product CTA (`section.section_product-cta.padding-top-0`)
Same component as `/pricing` §6 (blue #1c4774 card, radius .6rem, padding 4rem, gap 2rem, centred). Differences:
- **No paragraph.** `h2.product-cta_heading` (3rem/1.1) is 51 chars with a `<br>`, 2 lines @1440 / 4 lines @390 (10vw = 39/42.9). The header wrap is not used here: h2 and button are direct children of `.product-cta_wrp`.
- Button `button-primary-new` (yellow, i.e. `.btn-primary`) "Explore Demo" → `https://www.teachable.com/watch-demo` (155.4x48.4; 390 full width 294x50.8). Hover: label scale 1.02 (IX2 a-40/a-127).
- Card 1287.1x311.8 @1440, 342x302.3 @390 (padding 24px, gap 16px).

## 5. Footer
REUSE `Footer`.

## Assets
All images used by this page (60 avif covers/avatars for 6 tabs, 5 leader logos) are present in `public/assets/`. Nothing missing.
