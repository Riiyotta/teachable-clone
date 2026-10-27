Source: https://www.teachable.com/payments

# /payments: page spec

Measured live on 2026-10-27 with Playwright (Chromium, isolated headless context) at 1440x900, 1280x800 and 390x844. Cross-checked against `_snapshot/pages/payments/` (HTML, page CSS `fs-teachable.68ad9d73….opt.min.css`, inline styles/scripts) and the live IX2 store.

Globals follow `CLONE_SPEC.md` §0 / `BUILD_NOTES.md`. 1rem = 14.9666px @1440 and 14.6222px @1280 (all desktop values scale linearly; there are no layout changes between 1280 and 1440). 1rem = 16px @390.

**Copy policy:** no body copy is transcribed. Text slots give element, approximate character count, lines at 1440 / 390, and purpose. Functional labels are verbatim.

---

## 0. Page chrome (deviates from the homepage)
- No promo marquee, no Halloween banner. Nav `div.nav_fixed` is **position fixed** (not sticky). `main` starts at y=0 and the hero's 12rem top padding clears the nav. Dropdown panel top 5rem.
- Footer: homepage `Footer` unchanged.
- Webflow `--_layout---section-padding--medium` = 5rem (≥992) / 4rem / 3rem, but 80px was measured at 390 on `section_compare_cms`. Use the measured values below.

### Section geometry (y / height)
| # | Section | 1440 | 1280 | 390 |
|---|---|---|---|---|
| 1 | `section.section_tpay_hero` | 0 / 805.5 | 0 / 770.8 | 0 / 734.6 |
| 2 | `section.section_testimonial` (Webflow slider) | 805.5 / 424.5 | 770.8 / 415.8 | 734.6 / 539.3 |
| 3 | `section.section_video_focus` | 1230 / 693.5 | 1186.6 / 678.1 | 1273.9 / 424.5 |
| 4 | `section.section_compare_cms` (Teachable vs Others table) | 1923.5 / 870.3 | 1864.6 / 850.4 | 1698.5 / 1183 |
| 5 | `section.section_features.is-white` #1 (header + 2 rows) | 2793.8 / 1334.3 | 2715.1 / 1272 | 2881.4 / 1623.8 |
| 6 | `section.section_migrate-cta` (blue banner) | 4128.2 / 268.6 | 3987.1 / 262.4 | 4505.2 / 534.1 |
| 7 | `section.section_features.is-white` #2 (2 rows, no header) | 4396.8 / 1157.1 | 4249.6 / 1098.9 | 5039.3 / 1404.8 |
| 8 | `section.section_payment-logos` (2-row logo marquee) | 5553.9 / 649.2 | 5348.5 / 634.3 | 6444.1 / 659.1 |
| 9 | `section.section_migrate-form-2#talk-to-team` (HubSpot form) | 6203.1 / 889.9 | 5982.8 / 883 | 7103.2 / 1126.2 |
| 10 | `section.section_faq` | 7093 / 1055.4 | 6865.8 / 1031.1 | 8229.3 / 1059.3 |
| 11 | `footer.footer_component` | 8148.4 / 808.8 | 7896.9 / 790.1 | 9288.6 / 1631.8 |
| | document height | 8957 | 8687 | 10920 |

---

## 1. Hero (`section.section_tpay_hero`)
White background (the CSS sets a light text colour, but `.teachpay_hero_l` resets it to dark). Padding 12rem 0 5rem (179.6 / 74.83; ≤767 bottom 3rem; 390 = 112px 0 48px). Overflow hidden.
```
.padding-global > .container-large
  .migrate-hero_grid       grid .75fr 1fr (526 / 701.3); gap 4rem (≤991 1 column, gap 2rem)
    .teachpay_hero_l       flex column; justify center; align start; gap 1.5rem; text #000 (≤767 padding-right 4rem; ≤479 0)
      h1.migrate-hero_heading   Ivypresto 4rem / 1.1 (≤767 2.5rem = 40/44). Contains one <em> italic word (3 chars)
      p                          body 1.3rem/1.5
      .teachpay_hero_btn_wrp     flex row; gap 1rem
        .button_wrapper > a.button-sso "Start for free" → https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly
        a.button-primary-new (white variant) "Talk to our team" → #talk-to-team
    .migrate-hero_content-r > img.migrate-hero_img   eager; 1158x910 → 701.3x551.1 (@1440), 342x268.8 (@390)
```
| Slot | Chars | Lines 1440 / 390 | Purpose |
|---|---|---|---|
| H1 | 31 (incl. 3-char italic word) | 2 / 2 | page headline |
| Paragraph | 119 | 3 / 3 | value proposition |

- Buttons @1440: 150.2x48.4 and 174.8x48.4. `.button-primary-new` white variant = bg #fff, 1px #000, padding .9rem 1.5rem 1.1rem (`.btn-primary` with a white bg, which BUILD_NOTES calls `.btn-primary-white`).
- **390 quirk:** the two buttons stay side by side, and both labels wrap to **2 lines** (buttons 148.9x67.6 and 177.1x67.6, label 16.8px/16.8). Reproduce it: keep the row with no wrap and don't make the buttons full width.
- Image: `6a4e7ed52971b84972fdf6c3_payments_hero_image_2x.webp`.

---

## 2. Testimonial slider (`section.section_testimonial`)
bg **#f5f3f1** (new warm off-white). Padding 2rem 0 (section-padding small; 390 24px 0).
```
.container-large > .testimonial_wrp > div
  .testimonial-slider_component.w-slider   padding 0 6rem (≤991 0); transparent
     data: animation "slide", duration 500, easing "ease", autoplay false, infinite false, hide-arrows true, nav-spacing 6, disable-swipe false
    .testimonial-slider_mask.w-slider-mask (1107.5 wide @1440)
      2 x .w-slide
        .testimonial-slider_slide-grid   grid .3fr 1fr (255.6 / 852); gap 0 (≤991 1 column, gap 1rem)
          .testimonial-slider_content-l  flex column centred; gap 1rem (≤991 flex row)
             .testimonial-slider_img-wrp  10rem circle (149.7; 64px @390); radius full; img cover (500x500 source)
             .testimonial-slider_author-wrp (flex column centred, gap .25rem)
                .text-weight-semibold   1rem / 1.5 / 600: author name (13 / 11 chars)
                .text-style-allcaps     1rem / 1.5 / uppercase: school name (15 / 22 chars)
          .testimonial-slider_content-r  bg #fff; radius 1rem (14.97); padding 4rem (≤991 3rem; ≤767 2.5rem global-padding; 390 40px 24px); flex column; gap 1.5rem
             .testimonial-slider_header-wrp (flex, gap 1rem): img quote icon 2rem wide (29.9x24.5; 689d06ccf7eea453b43bcb38_teachable-quotemark-dark.svg) + headline div (Peridot body; 31 / 14 chars)
             p  body 1.3rem/1.5; one <strong> phrase inside (40 chars)
    .testimonial-slider_arrow.w-slider-arrow-left/right   3rem black circle (44.9) with a white 16x9 arrow (.global_arrow-icon.is-wf-slider); absolute, vertically centred at the component's left/right edge; z 4. Hidden ≤991 (!important).
    .testimonial-slider_nav.w-slider-nav.w-round   margin-top 2rem (≤767 1rem); centred dots
```
| Slot | Chars | Lines 1440 / 390 | Purpose |
|---|---|---|---|
| Slide headline | 31, 14 | 1 / 1 | testimonial summary |
| Quote | 204, 253 | 3, 4 / 6, 7 | customer testimonial |

Slide images: `6a4fbfc1facbb36352e0c3b1_Leila_Quality_Gemini (3).webp` (**missing**) and `6a4fd566ea8b1c280fd0bdce_Anna_mid.webp`.

**Slider behaviour (P-M1, Webflow slider):**
- Slide transition: translateX by one slide width, **500ms `ease`**. No autoplay, no loop.
- `data-hide-arrows=true`: on slide 1 only the right arrow shows (left is `display:none`); on the last slide only the left arrow shows.
- Dots: 2 × 11.2px circles, 1px #000 border, margin 0 6px. The active dot is filled #000 (`transition: background-color .1s, color .1s`). Clicking a dot jumps to that slide. Swipe is enabled.
- 390: slide 342x435.3 (avatar row 64px tall, then the white card 342x355.3).

---

## 3. Video (`section.section_video_focus`)
Flex centred, padding 0 2rem (≤991 bottom 6rem; ≤767 bottom 4rem; 390 = 0 32px 64px).
```
.container-large > .about-hero_wrp   flex column; space-between; align center; gap 4rem
  .video-focus-wrp   max-width 58rem (868.1); padding-top 3rem; flex column centred; gap 1.5rem (≤767 1rem); centred text
    .eyebrow-wrp     1rem / 600 / uppercase (eyebrow, 30 chars, no icon)
    .payments-video-wrp   radius .6rem; overflow hidden; 100% wide
       iframe (onelineplayer → vimeo 1207879910), 100% x 100%, aspect-ratio 1920/1080 → 868.1x488.3 @1440, 326x183.4 @390
  a.button-primary-new (transparent variant: no bg, 1px #000) "Talk to our team" → #talk-to-team   (174.8x48.4; 390 full width 326x50.8)
```
Iframe src: `https://onelineplayer.com/player.html?autoplay=false&autopause=false&muted=false&loop=true&url=https%3A%2F%2Fvimeo.com%2F1207879910%3Fshare%3Dcopy%26fl%3Dsv%26fe%3Dci&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true`. External embed: embed it as-is or use a 16:9 placeholder.

---

## 4. Comparison table (`section.section_compare_cms`)
White, padding 5rem 0 (74.83 @1440; 80px @390). Overflow hidden.
```
.container-large > .compare_static_wrp   flex column; gap 4rem
  .compare_header-cms-wrp   flex column centred; gap 1rem; max-width auto (740.2 @1440)
     h2.compare-header-cms  4rem / 1.1 centred: 29 chars, 1 / 2 lines (section title)
     p.compare-subhead-cms  (empty, 0 height)
  .comparison-component-wrp
     .compare-table-static_component > .compare-table-static_top_row   grid 2fr 1fr 1fr (643.6 / 321.8 / 321.8)
         cells: [empty] | "Teachable" (yellow cell) | "Others"   header text 1rem / 700, centred
     .compare-component-row-slot > .comparison-slot-row > 7 x .compare-table-static-row  (same grid; 72.2 tall @1440)
  .compare-table-static-button-wrp (flex centred) > button-sso "Start for free"
```
- Cell `.compare-table-static-content`: flex, gap .5rem, padding 1rem, font 1.15rem / 1.2 (17.21/20.65), centred. The CSS declares border-bottom 1px #000, but it does **not render** (border-style computes to `none`). Rows are separated only by padding.
  - `.is-left-align` (first column): left aligned, padding-left 1.5rem (≤767 0).
  - `.is-teachable` (middle column): **bg #e6ff32** on every row incl. the header, so it forms a continuous yellow column.
- Check icon (16.8x14 SVG `M1 8L6 13L17 1`, black) and × icon (`.compare-table-static_x-icon`, .875rem, **opacity .32**).
- Rows (feature labels verbatim; long cells as char counts):
  | Feature | Teachable | Others |
  |---|---|---|
  | Processing rate | 2.9% | 42-char text |
  | Tax Handling (Calculation, collection AND remittance) | 40-char text | 17-char text ("Limited or manual") |
  | Support | Dedicated account manager | Self-serve ticket queue |
  | Instant payouts | ✓ | 41-char text |
  | Buy Now, Pay Later | ✓ | Paid add-on |
  | Local currency display & checkout translation | ✓ | ✕ |
  | Learning Experience + Checkout | ✓ | ✕ |

  A duplicate "Processing rate | 1.5%" row exists in the DOM but is hidden (Webflow conditional visibility). Skip it.
- Breakpoints: ≤991 columns 1.5fr 1fr 1fr. ≤767 1fr 1fr 1fr. ≤479 cell padding .5rem sides. 390: columns 114px each, rows 126.5 tall, text 15.6px/18.72 (wraps to 2–5 lines), header row 51.7.

---

## 5 & 7. Feature rows (`section.section_features.is-white`, two instances)
This is the **homepage WhyCards row pattern** (`.why_card-grid`, image cell `.why_grid-content-right` with bg #f0f0f0 / radius .6rem, text cell `.why_grid-content-left` padding 0 4rem, `.global_list-wrp` arrow list). Differences from homepage §10:
- Section: white, overflow hidden, padding `8rem` top and bottom via `.padding-global.padding-section-large` (no negative margin).
- `.product_wrp`: flex column, gap 4rem (≤767 2rem).
- Instance #1 starts with `.product_header-wrp` (max-width 64rem, centred, flex column, gap 1.5rem): `h2` 4rem/1.1 (38 chars; 1 / 2 lines) and `p` body (92 chars; 1 / 3 lines). Instance #2 has no header.
- `.why_grid-card-wrp` gap 99px @1440 (homepage value; 48px @390). Each instance has **2 rows**: row 1 image-left, row 2 text-left.
- Card title is `h2.why-card_title` (3rem/1.1 = 44.9/49.39; 390 35.1/38.61). Paragraph is body.
- Row 2 of each instance ends its text column with a `button-sso` "Start for free" (→ builder-usd-monthly signup).
- Image cell 643.6x409.4 @1440 (342x217.5 @390), img cover.

| Instance / row | Image | Title chars (lines 1440/390) | Text chars | List items (chars) |
|---|---|---|---|---|
| #1 row 1 | `6a4e7c79738b531761234b2d_payments_3x copy.webp` | 24 (1/2) | 71 | 4 (34, 39, 39, 41) |
| #1 row 2 | `6a4eb4968867005543c44b6b_payments_affiliate_colleagues_2x.webp` | 39 (2/3) | 88 | 4 (45, 33, 41, 41) + button |
| #2 row 1 | `6a4e7c784a812dbd7ab7af64_payments_3x.webp` | 20 (1/2) | 84 | 4 (43, 45, 46, 45) |
| #2 row 2 | `6a4e7c78769e81f32a20a775_migrate_2x.webp` | 19 (1/1) | 90 | 3 (43, 44, 84) + button |

Breakpoints as homepage §10 (≤991 text padding 0 2rem; ≤767 single column with gap 2rem, text cell padding-left 0; 390 text cell padding 0 32px 0 0).

---

## 6. Migrate CTA (`section.section_migrate-cta`)
White section, no padding.
```
.padding-global > .container-large > .migrate-cta_content > .migrate-cta_wrp-2
   bg #182a44 + linear-gradient(#1c4774, #7791ac) (top→bottom); radius .6rem; padding 5rem (74.83); flex row; space-between; align center; gap 4rem; white
   .migrate-cta_l   flex column; gap .75rem; max-width 64rem
      h2.heading-style-h3-2  Ivypresto 3rem / 1.1 (44.9/49.39): 29 chars, 1 / 3 lines (390 = 48px/52.8)
      p  body: 141 chars incl. 3 <strong> phrases (12, 20, 19 chars); 2 / 5 lines
   .migrate-cta_r > a.button-primary-new (white) "See migration offer" → https://www.teachable.com/migrate?src=section_banner (199.4x48.4)
```
- ≤991 gap 2rem. ≤767: flex column centred, text-align center, padding 2rem. ≤479: padding 2rem 1.5rem (390 measured 32px 24px; card 326x438.1).
- This is the same visual family as the homepage nav promo/pricing blue card. It is a new banner component.

---

## 8. Payment-method logos (`section.section_payment-logos`)
`.padding-global.padding-section-medium` (5rem top/bottom = 74.83 @1440). `.container-medium` (68rem = 1017.7).
```
.payment-logos_content    flex column; gap 4rem
  .payment-logos_top      flex column; gap 2rem (≤767 1.5rem)
    h2.payment-logos_heading  4rem/1.1, centred, align-self center, max-width 60rem: 25 chars incl. a 9-char <em> italic phrase; 1 / 2 lines
    p.text-size-medium.text-color-grey  font-size--large 1.5rem / 1.5 (22.45/33.67; 390 = 5vw 19.5px), colour #4e4e4e (charcoal), align-self center (≤479 also text-align center): 55 chars, 1 / 2 lines
  .payment-logos_bottom   relative; overflow hidden; padding .5rem 0; flex column; gap 1.5rem
    .payment-logos_marquee-wrp (row 1)   flex; gap 1.5rem
       2 x .payment-logos_marquee        flex none; gap 1.5rem; 10 logos each
    .payment-logos_marquee-wrp (row 2)
       2 x .payment-logos_marquee.reverse
    .payment-logos_side-gradient         absolute left; width 3rem (≤767 2rem; ≤479 1.5rem); linear-gradient(90deg, #fff 38%, #fff0)
    .payment-logos_side-gradient.is-right absolute right; linear-gradient(-90deg, #fff 38%, #fff0)
  .payment-logos_button   flex centred > button-sso "Start for free"
```
- Logo tile `.payment-logos_logo-wrp`: **5.5rem** square (82.3 @1440; ≤767 4.5rem = 72px), border 1px `rgba(0,0,0,.08)`, radius 1rem, **box-shadow 0 2px 5px rgba(0,0,0,.08)**, flex centred. Img `.payment-logos_logo` 3.5rem (52.4; 40px @390), radius 50%, object-fit contain (56x56 SVGs).
- Row 1 order: blik, sepa, affirm, alipay, apple-pay, google-pay, klarna, mastercard, visa, wechat-pay.
- Row 2 order: afterpay, bancontact, grabpay, mobilepay, multibanco, pix, przelewy24, revolut-pay, twint, amex.
- Filenames: `6a4569ead5f160b7b58f0a00_blik.svg`, `6a4569e7b5099af9908584ba_sepa.svg`, `6a4569e5b2828a1a3bb3313c_affirm.svg`, `6a4569e237b0be9a4f1507cf_alipay.svg`, `6a4569e09032b8cc2f706a8f_apple-pay.svg`, `6a4569de082db8336b0b92b3_google-pay.svg`, `6a4569dd267b40a32a057a15_klarna.svg`, `6a4569db84cda9f84297d16f_mastercard.svg`, `6a4569d83ab56a1352592e8a_visa.svg`, `6a4569c7bbf7ba0f63370ace_wechat-pay.svg`, `6a456a3d819c3fed3c24c5a5_afterpay.svg`, `6a456a3fbbf7ba0f63376187_bancontact.svg`, `6a456a41b5099af99085afb7_grabpay.svg`, `6a456a43700a97857a35fe7c_mobilepay.svg`, `6a46ba61e1389f203c93c9c0_multibanco (1).svg` (**missing**), `6a456a33318f96e57792f76b_pix.svg`, `6a456a353f10cc03265c354e_przelewy24.svg`, `6a456a3737b0be9a4f153028_revolut-pay.svg`, `6a456a39ac2a88af8e8a7784_twint.svg`, `6a456a3b8dd01aae28f0e28b_amex.svg`.

**Motion (P-M2, CSS):**
```css
@keyframes payment-logos_marquee { from{transform:translateX(0)} to{transform:translateX(calc(-100% - 1.5rem))} }
.payment-logos_marquee { animation: payment-logos_marquee 24s linear infinite; }
.payment-logos_marquee.reverse { animation-duration: 24s; animation-direction: reverse; }
.payment-logos_marquee-wrp:hover .payment-logos_marquee { animation-play-state: paused; }
```
(Seamless loop. Each copy is 1025.1 wide @1440 and 936 @390. Each row pauses independently on hover.)

---

## 9. Sales form (`section.section_migrate-form-2#talk-to-team`)
Same visual pattern as `/enterprise` §8 (shared component). Differences:
- Section bg #fff, padding 0 0 5rem (74.83; ≤991 0). Grid `.migrate-form_grid-2` is the same (bg #182a44, radius .6rem, padding 4rem, grid 1fr 1fr, gap 6rem). ≤767 flex column with padding 4rem 2rem. ≤479 padding 4rem .5rem (390 measured 64px 8px, full-bleed 390 wide, radius 0).
- Left column `.enterprise-form_content-l.is-left` (left aligned): h2 3rem/1.1 with **51 chars, 2 / 3 lines**. p ×2 (93 and 79 chars; 2 / 3 and 2 / 2 lines).
- Right column `.enterprise-form_content-r-2`: the same HubSpot form (identical fields and styles; see enterprise.md §8).

## 10. FAQ (`section.section_faq`)
Homepage §17 component. Heading 26 chars (1 / 2 lines). **8 items**:
| # | Q chars | Q lines 1440 / 390 | A chars | A lines 1440 / 390 |
|---|---|---|---|---|
| 1 | 41 | 1 / 2 | 199 | 3 / 5 |
| 2 | 52 | 1 / 2 | 268 | 4 / 7 |
| 3 | 58 | 1 / 2 | 263 | 4 / 6 |
| 4 | 55 | 1 / 2 | 289 | 4 / 7 |
| 5 | 37 | 1 / 1 | 200 | 3 / 5 |
| 6 | 52 | 1 / 2 | 210 | 3 / 5 |
| 7 | 75 | 1 / 2 | 276 | 4 / 7 |
| 8 | 36 | 1 / 1 | 259 | 4 / 6 |

Purpose: payments FAQs. Heights 1055.4 / 1031.1 / 1059.3.

## 11. Footer
REUSE `Footer`.

---

## Motion index (this page)
| # | Where | Trigger | What | Timing |
|---|---|---|---|---|
| M6 | `.button-sso` | hover | label scale 1.03 | 200ms ease |
| M6 | `.button-primary-new` (all variants) | hover | label scale 1.02 (IX2 a-40 and a-127, both identical, bound at all breakpoints) | 200ms ease |
| P-M1 | Testimonial slider | arrow/dot/swipe | slide translateX | 500ms ease, no loop, no autoplay |
| P-M2 | Payment logo rows | CSS infinite | translateX 0 → calc(−100% − 1.5rem); row 2 reversed | 24s linear; pause on row hover |
| M26 | FAQ | click | as homepage | .3s ease |

No scroll-triggered or load animations (`ScrollTrigger.getAll()` is empty; IX2 has only hover and nav events).

## Assets
Present: hero image, quote icon, `Anna_mid.webp`, 4 feature-row images (use the base files, not `-p-1080/1600`), 19 of 20 payment logos.

Missing from `public/assets/`:
| Used by | URL |
|---|---|
| Testimonial slide 1 avatar | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/6a4fbfc1facbb36352e0c3b1_Leila_Quality_Gemini%20(3).webp |
| Payment logo row 2 (multibanco) | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/6a46ba61e1389f203c93c9c0_multibanco%20(1).svg |
| HubSpot form header wordmark | https://50445500.fs1.hubspotusercontent-na1.net/hub/50445500/hubfs/Color_Wordmark_Icon_Wordmark_Black-2.png |

External embed: Vimeo `1207879910` via onelineplayer.
