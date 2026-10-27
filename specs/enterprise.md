Source: https://www.teachable.com/enterprise

# /enterprise: page spec

Measured live on 2026-10-27 with Playwright (Chromium, isolated headless context) at 1440x900, 1280x800 and 390x844. Cross-checked against `_snapshot/pages/enterprise/` (HTML, page CSS `fs-teachable.6a272a68….opt.min.css`, inline styles/scripts) and the live IX2 store / `ScrollTrigger.getAll()`.

Globals follow `CLONE_SPEC.md` §0 / `BUILD_NOTES.md`. 1rem = 14.9666px @1440, 14.6222px @1280 (every desktop value scales linearly; there are no layout changes between 1280 and 1440), 16px @390.

**Copy policy:** body copy is not transcribed. Text slots give element, approximate character count, lines at 1440 / 390, and purpose. Functional labels are verbatim.

---

## 0. Page chrome (deviates from the homepage)
- No promo marquee, no Halloween banner. The nav is `div.nav_fixed` (**position fixed**, top 0, z 999, not sticky). `main` starts at y=0 and the hero's 12rem top padding clears the nav. Nav dropdown panel top = 5rem (static).
- Footer: homepage `Footer`, unchanged.
- Webflow `--_layout---spacing--hero-top-padding` = **12rem** (≥992) / 9rem (≤991) / 8rem (≤767) / 7rem (≤479). Measured 179.6px @1440 and 112px @390.
- New colour variables used on this page: `--enterprise-colors--dark-navy` **#182a44**, `--dark-olive` #1e2605 (unused here), `--charcoal` #4e4e4e, `--light-lemon` #f8ffc6 (= existing `yellow-light`).

### Section geometry (y / height)
| # | Section | 1440 | 1280 | 390 |
|---|---|---|---|---|
| 1 | `section.section_enterprise-hero` (+ logo marquee) | 0 / 747.7 | 0 / 719.5 | 0 / 813.6 |
| 2 | `section.section_enterprise-built` (4 use-case cards) | 747.7 / 626.9 | 719.5 / 605 | 813.6 / 1870.5 |
| 3 | `section.section_enterprise-demo#watch-demo` (Storylane) | 1374.6 / 671.3 | 1324.5 / 648 | **hidden ≤991** |
| 4 | `section.section_enterprise-work#form-submit` (3 cards) | 2045.9 / 686.9 | 1972.5 / 671.1 | 2684.1 / 1206.4 |
| 5 | `section.section_foundation` (image + 2x2 grid) | 2732.8 / 1537.8 | 2643.6 / 1482.9 | 3890.5 / 1108.3 |
| 6 | `section.section_enterprise-quote` | 4270.6 / 358.7 | 4126.4 / 351.3 | 4998.8 / 527.8 |
| 7 | `section.section_security_badges` (4 badges) | 4629.4 / 547.7 | 4477.8 / 535.1 | 5526.7 / 1079.7 |
| 8 | `section.section_enterprise-form#talk-to-team` (HubSpot form) | 5177.1 / 934.8 | 5012.9 / 926.9 | 6606.4 / 1083.3 |
| 9 | `footer.footer_component` | 6111.9 / 808.8 | 5939.8 / 790.1 | 7689.7 / 1631.8 |
| | document height | 6921 | 6730 | 9321 |

---

## 1. Hero (`section.section_enterprise-hero#hero`)
**Background:** `background-color:#1c2600; background-image: linear-gradient(#1c2600, #465f01)` (dark olive to olive, top to bottom). Text white. Padding 12rem 0 5rem (179.6 / 74.83; ≤767 bottom 3rem; 390 = 112px 0 48px). Overflow hidden.

```
.padding-global > .container-large
  .enterprise-hero_grid            grid .75fr 1fr (526 / 701.3 @1440); gap 4rem
    .enterprise-hero_content-l     flex column; justify center; align start; gap 1.5rem
      .enterprise-hero_tag-wrp     bg #000; 1px solid rgba(255,255,255,.15); radius .25rem; padding .5rem 1rem
        .text-block-4              .875rem / 1.5; rgba(255,255,255,.86)
      h1.enterprise-hero_heading   Ivypresto 4rem / 1.1 (59.87/65.85); ≤767 2.5rem (40/44)
      p                            body 1.3rem / 1.5
      .enterprise-hero_btn-wrp     flex; gap 1rem
        a.enterprise-btn_primary   "Talk to our team" → #talk-to-team
        a.enterprise-btn_secondary "See it in action" → #watch-demo
    .enterprise-hero_content-r > .enterprise-hero_video-wrp (flex; justify center; align flex-end; height 100%)
      .enterprise-hero_video-embed > iframe (100% x 100%; aspect-ratio 3840/2160)
.enterprise-hero_spacer            height 3rem
.enterprise-hero_marquee-wrp       logo marquee (see Motion)
```
| Slot | Style | Chars | Lines 1440 / 390 | Purpose |
|---|---|---|---|---|
| Tag | `.text-block-4` | 34 | 1 / 1 | social-proof tag |
| H1 | `h1.enterprise-hero_heading` | 28 | 2 / 2 | page headline |
| Paragraph | `p` body | 150 | 3 / 4 | value proposition |

- **Buttons:** `.enterprise-btn_primary` = same look as `.btn-sso` (bg #e6ff32, 1px #000, text #000, radius full, padding 1rem 1.5rem, 1rem / 1 / 600, label `.button_txt` 1.1rem). 174.8x48.4. `.enterprise-btn_secondary` = transparent, **1px #fff** border, white text, same padding (162.8x48.4); it behaves like `.btn-nav-secondary`.
  - Hover: neither class is in the IX2 hover list, so **no hover effect** (see the Motion index).
  - ≤991: font .875rem, **secondary hidden**. ≤479: btn-wrp and buttons `width:100%` (342x50.8).
- **Video:** iframe `https://onelineplayer.com/player.html?autoplay=false&autopause=false&muted=false&loop=true&url=https%3A%2F%2Fvimeo.com%2F1199890205&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true`. Rendered 701.3x394.5 @1440 (inside a 401.6-tall cell, bottom-aligned) and 342x192.4 @390. This is an external embed: either embed the same URL or show a 16:9 `bg-placeholder` with a play affordance. There is no poster asset.
- ≤991: grid becomes 1 column, gap 2rem. ≤767: content-l padding-right 4rem (0 at ≤479). 390: content column 342x342.8, then the video.

### Logo marquee
- `.enterprise-hero_marquee-wrp`: flex, gap 4rem (≤991 3rem, ≤767 2rem), overflow hidden, white-space nowrap. 1440x46.8 (390: 390x32).
- 2 identical `.enterprise-hero_marquee-trk` tracks (inline-flex, gap 4rem/3rem/2rem). Each has 9 `.enterprise-hero_marquee-logo-wrp` (width **12.5rem** = 187.1px; ≤767 8rem = 128px) holding a white SVG logo img (200x50 natural → 187.1x46.8).
- Logo order: adobe, manychat, pma, gns3, getresponse, nytimes, shopify, cnbc, penn.
- Track width @1440: 2162.6px.

---

## 2. Built-for cards (`section.section_enterprise-built`)
Padding 8rem 2rem 0 (≤767 adds padding-bottom 8rem→section-large; 390 = 48px 24px). White.
```
.container-large > .enterprise-built_wrp   flex column; gap 4rem (≤991 3rem; 390 32px)
  .enterprise-built_heading-wrp (flex column centred) > h2 (4rem/1.1 centred)
  .enterprise-built_grid    grid 4 x 1fr; gap 2rem (≤991 1rem; ≤479 1 column, gap 2rem)
    a.enterprise-built_card  flex column; gap 1rem; font 1.15rem (17.21/25.82)
      .enterprise-built_card-img-wrp   radius 1rem (14.97); overflow hidden
        img.enterprise-built_card-img  599x493 jpg → 299.3x246.3 @1440, 342x281.8 @390
      .enterprise_card-txt-wrp   flex column; gap .75rem
        .enterprise-built_card-title   Ivypresto 1.75rem / 1.2 (26.19/31.43; 390 28/33.6)
        p                               1.15rem / 1.5 (390 15.6/23.4)
```
| Slot | Chars | Lines 1440 / 390 | Purpose |
|---|---|---|---|
| h2 | 32 | 1 / 2 | section title |
| Card title | 21, 19, 18, 18 | 1 / 1 | use-case name |
| Card text | 75, 80, 80, 79 | 3 / 2 | use-case summary |

Cards, in order (image → href):
1. `6a2979598143fc927ac1b869_1044157c36c019533c5b1844e2c29053_workplace-dev.jpg` → `/enterprise/employee-training`
2. `6a297959979511dfc16b5972_1c5cbe1215ded7cfe733cb6b245f621b_compliance-training.jpg` → `/enterprise/compliance-training-lms`
3. `6a29795944cb8bf6cdbe105f_5aa766f3b2777f5a9b5525247354c201_partner-enable.jpg` → `/enterprise/partner-training-lms`
4. `6a29795983b8703229776359_42e07aa138837bb8e329a5bd2632f6b8_customer-education.jpg` → `/enterprise/customer-training-lms`

**Hover:** `.enterprise-built_card:hover .enterprise-built_card-title { text-decoration: underline }` (instant). This is the same pattern as homepage Teach cards.

---

## 3. Product demo (`section.section_enterprise-demo#watch-demo`), desktop only
Padding 8rem 0, white text. **`display:none` at ≤991.**
```
.container-large > .watch-demo_wrp.is-enterprise   bg #182a44; radius .6rem; padding 3rem; flex column; align flex-end; gap 1rem; relative; overflow hidden (1287x431.9)
  .watch-demo_header-wrp      flex space-between
    .section-tag_wrp          1rem / 600 / uppercase; "— PRODUCT DEMO" (eyebrow, 14 chars)
    .watch-demo_expand-wrp    display none → flex when expanded: .watch-demo_collapse ("Collapse" + 16px bi-arrows-collapse-vertical SVG; 1rem; cursor pointer; gap .5rem)
  .watch-demo_content-wrp     flex row; justify flex-end; relative (1197x304.7)
    .watch-demo_content       absolute top-left; width 50%; height 22rem; padding-right 4rem; flex column centred; gap 1rem; transition opacity .2s
      h2.watch-demo_heading   4rem / 1.1, white   (23 chars; 2 lines)
      p.watch-demo_paragraph  body, white          (112 chars; 2 lines)
    .watch-demo_embed-wrp     width 50% (598.7); transition width .5s; z 1
      .watch-demo_embed > .storylane-embed > .sl-embed (padding-bottom calc(46.72% + 25px)) > iframe.sl-demo
           (absolute inset 0; border 1px rgba(63,95,172,.35); radius 10px; box-shadow 0 0 18px rgba(26,19,72,.15))
      img.watch-demo_thumbnail   absolute inset 0; cover; radius .625rem; pointer-events none; transition all .2s
```
- Iframe: `https://app.storylane.io/demo/jjiurfvxjiys?embed=inline` (Storylane interactive demo). Thumbnail `6a29890f3e3ddf7e511e229a_47fb3151dd4fa88097eb068b33d6ee4c_enterprise-storylane-img.webp` (1440x683) covers it until interaction.
- **Expand/collapse (inline script, E1):**
  - On the first `pointerdown` on `.watch-demo_embed-wrp`, or a window blur while the iframe is focused: `.watch-demo_content` opacity → 0 (.2s), `.watch-demo_embed-wrp` width 50% → **100%** (.5s, CSS `ease`), `.watch-demo_expand-wrp` → `display:flex`. After **700ms** the thumbnail gets `transition: opacity .3s ease` and opacity 0.
  - Clicking `.watch-demo_collapse` clears all inline styles (back to 50% width; content fades back in).
  - For a local clone without the live iframe, the expand can still be reproduced around a placeholder.

---

## 4. Workplace cards (`section.section_enterprise-work#form-submit`)
bg **#f5f2ee** (warm grey, new). Padding 8rem 0 (≤991 6rem; ≤767 4rem; ≤479 side padding 0 on the section). 390 = 64px 0.
```
.enterprise-work_wrp   flex column; gap 4rem (390 32px)
  .enterprise-work_header-wrp > h2 (4rem/1.1 centred): 29 chars, 1 / 2 lines
  .enterprise-work_grid  grid 3 x 1fr (409.1); gap 2rem (≤991 1rem; ≤767 1 column)
    .enterprise-work_card  bg #fff; radius .6rem; padding 3rem (≤991 2rem); flex column; gap 1.5rem; font 1.15rem
      .enterprise-work_icon-wrp  3.5rem square (52.4; 56 @390); bg #e6ff32; radius .25rem
         img.enterprise-work_icon (52x52 svg, fills the square)
      .enterprise-work_txt-wrp   flex column; gap 1.5rem (390 16px)
        .enterprise-work_card-heading  Ivypresto 1.75rem / 1.2 (26.19/31.43)
        p  1.15rem / 1.5
```
| Slot | Chars | Lines 1440 / 390 | Purpose |
|---|---|---|---|
| Card heading | 24, 22, 24 | 1 / 1–2 | benefit title |
| Card text | 122, 112, 110 | 4,3,3 / 4 | benefit detail |

Icons in order: `698a3853476554b524bf6397_Engage.svg`, `698a389f7737dadc49db4716_Manage.svg`, `698a389f43201300526cc4ad_8a8d54f2fef3bce404fd8dd60fac97db_Secure.svg`. Card 409.1x321.8 @1440, 342x287.2 @390.

---

## 5. Foundation (`section.section_foundation`)
Padding 8rem 2rem (390: 48px 24px). White.
```
.container-large > .foundation_wrp     flex column; gap 4rem (390 32px)
  .foundation_heading-wrp   flex column; gap 1rem
     h2 (4rem/1.1 centred): 34 chars, 1 / 2 lines
     p  (body, centred): 66 chars, 1 / 2 lines
  .foundation_img-wrp  radius 1rem; overflow hidden
     img.foundation-img  6a298f9445d1887067288238_foundation-full.webp (1376x750) → 1287.1x701.5 @1440, 342x186.7 @390
  .foundation_grid     grid 2 x 1fr; 2 rows; gap 4rem (≤991 2rem; ≤479 1 column); font 1.15rem
     4 x .foundation_content   flex column; gap 1rem (390 12px)
        h2.foundation_title    Ivypresto 2rem / 1.1 (29.93/32.93; 390 24/26.4)
        p                       body 1.3rem/1.5 (computed 19.46/29.18; 390 15.6/23.4)
  .foundation_btn-wrp  flex centred; gap 1rem
     a.enterprise-btn_primary "Talk to our team" → #talk-to-team (390: full width)
```
| Slot | Chars | Lines 1440 / 390 | Purpose |
|---|---|---|---|
| Item title | 19, 19, 20, 23 | 1 / 1 | capability name |
| Item text | 128, 110, 111, 121 | 2 / 3 | capability detail |

---

## 6. Customer quote (`section.section_enterprise-quote`)
- Background `#f0f0f0` + `linear-gradient(158deg, #f8ffc6, #f0f0f0)`. Padding 4rem 0 (≤991 6rem; ≤767 4rem; 390 64px 0; ≤479 side padding 0).
- `.enterprise-quote_wrp`: flex row, align center, gap 4rem (≤767 2rem). ≤479: flex column, align start.
  - `.enterprise-quote_content-l` > `.enterprise-quote_logo` (inline SVG, viewBox `0 0 240 43`, rendered 209.5x37.5 @1440, 192x34.4 @390). This is a customer wordmark: copy the SVG from the snapshot (`.enterprise-quote_logo`).
  - `.enterprise-quote_content-r` (flex 1, flex column, gap 1.5rem):
    - `.enterprise-quote_icon` (inline 45x37 quote-mark SVG; copy from the snapshot)
    - `p.enterprise-quote_quote-txt`: Peridot **1.9rem** / 1.5 (28.44/42.65 @1440; ≤991 1.7rem; ≤767 1.4rem = 22.4/33.6 @390). 162 chars, 3 / 6 lines. Purpose: customer testimonial.
    - `div` (body): 56 chars, 1 / 1+ lines. Purpose: attribution (name, role).

---

## 7. Security badges (`section.section_security_badges`)
Padding 8rem 0 (390: 48px 0). White.
```
.feature-list_wrp   flex column; gap 4rem (390 32px)
  h2 (4rem/1.1, left): 22 chars, 1 / 2 lines
  .feature-list_grid  grid 4 x 1fr; gap 2rem (≤991 2 cols; ≤479 1 col)
    .security-card-wrp  flex column; gap 1rem
      .security-header-wrp (flex column; gap 1rem)
         img.security-icon-img  3.5rem square (52.4 / 56); padding .5rem; bg #e6ff32; radius .25rem
         .security-header-txt   Peridot 2rem / 1.1 / 600 (29.93/32.93; 390 31.2/34.32)  "SOC 2" "PCI DSS" "GDPR" "CCPA"
      p.feature-paragraph-txt   1rem / 1.5 (14.97/22.45; 390 15.6/23.4)
```
Text: 115, 102, 109, 100 chars; 3 lines at both widths. Purpose: compliance description.

Icons: `69e0e2f8ab376492b66e3173_security-soc2-icon-black.svg`, `69e0e2f8bba97ee0f04598a9_security-pci-dss-icon-black.svg`, `69e0e2f8f3673b5a9d910a2e_security-gdpr-icon-black.svg`, `69e0e2f8a1fd8534085a20b3_security-ccpa-icon-black.svg` (49x58 natural, shown at 52.4 incl. padding).

Note: an inline GSAP snippet targets `.feature-list_content` / `.section_feature-list` (`marginTop → 0rem`, scrub, start "top 90%", end "top 0%"). **Neither class exists on this page**, so the tween does nothing (the live ScrollTrigger is created but animates no element). Do not reproduce it.

---

## 8. Sales form (`section.section_enterprise-form#talk-to-team`)
Section padding 0 0 8rem (≤991 0; ≤479 sides 0). An absolute `.sales-form-anchor` (2rem x 8rem) sits 8rem above it as the scroll target for `#talk-to-team`.
```
.container-large > .enterprise-form_grid   bg #182a44; radius .6rem (≤991 0); padding 4rem (≤767 4rem 2rem; ≤479 4rem 1.5rem);
                                          grid 1fr 1fr (538.8 each), gap 6rem (≤991 2rem; ≤767 1 col); align center; white
  .enterprise-form_content-l   flex column; gap 2rem (390 16px); max-width 64rem
     h2.enterprise-form_heading   Ivypresto 3rem / 1.1 (44.9/49.39; ≤767 2.5rem; 390 39/42.9)
     p (x2) body
  .enterprise-form_content-r   bg #fff; radius .6rem; overflow hidden   (538.8x695.4 @1440; 342x751.3 @390)
     HubSpot embedded form (third party)
```
| Slot | Chars | Lines 1440 / 390 | Purpose |
|---|---|---|---|
| h2 | 40 | 2 / 2 | form headline |
| p 1 | 116 | 3 / 3 | form pitch |
| p 2 | 79 | 2 / 2 | response-time note |

**HubSpot form (`form.hsfc-Form`), measured @1440.** Build it as a static replica: same fields, no submission.
- Padding 40px. Rows `.hsfc-Row` 459px wide, margin-bottom 20px.
- Row 1: wordmark image 137x40 (`Color_Wordmark_Icon_Wordmark_Black-2.png`, HubSpot-hosted; missing locally. The local `68daba31282892b31e937809_teachable-logo-color.svg` is an acceptable substitute).
- Row 2: rich text, 2 paragraphs (40 + ~10 chars, 17.56px/26.34, `rgba(0,0,0,.65)`).
- Row 3: two half-width fields: "First Name", "Last Name".
- Row 4: "Email".
- Row 5: "Phone Number". A country-code select (≈100px) sits left of a 349px tel input.
- Labels `.hsfc-FieldLabel`: Peridot 16px/24px, #000, margin-bottom 8px. Required asterisks are present in the original.
- Inputs `.hsfc-TextInput`: height 57px, bg #fff, **1px solid #ccc**, radius .6rem (8.98px), padding 16px 18px, Peridot 1.3rem (19.46px), #000.
- Submit `button.hsfc-Button`: full width 459x60, bg #000, white 16px/24 / 700, radius 999px, padding 18px 58px 18px 24px (space on the right for an arrow glyph). 4-character label.
- Field font sizes are fixed px and do not scale with rem except the input text.

---

## Motion index (this page)
| # | Where | Trigger | What | Timing |
|---|---|---|---|---|
| M6 | `.button-sso` (nav) | hover | label scale 1.03 | 200ms ease |
| — | `.enterprise-btn_primary/_secondary` | hover | **none** (not bound to IX2) | — |
| E-M1 | Logo marquee tracks | CSS infinite | `@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }` on each `.enterprise-hero_marquee-trk` | **30s linear infinite**, `will-change:transform`, no hover pause |
| E-M2 | Built-card title | hover | underline | instant |
| E-M3 | Demo embed expand | pointerdown on embed / iframe focus | content opacity 1→0, embed width 50%→100%, collapse control shown; thumbnail opacity 0 after 700ms | .2s / .5s ease / .3s ease |
| E-M4 | Collapse | click | reset all of the above | same transitions reversed |

The marquee tracks each translate by −50% of their **own** width (−1081px @1440). Because that is not a multiple of the logo period, the original has a visible jump at the loop point. Reproduce it exactly (two tracks, same keyframes) for fidelity, or loop at −(trackWidth + gap) for a seamless version (flag this choice in BUILD_NOTES).

No other scroll or load animations: IX2 has only button and nav events here, and the single ScrollTrigger targets a non-existent element.

## Assets
Present in `public/assets/`: all 9 marquee logos (`6a2975ed…enterprise-*-logo.svg`, `6a2976ab20f85959a03342c8_enterprise-nytimes-logo.svg`), 4 card JPGs, `enterprise-storylane-img.webp`, `Engage/Manage/Secure.svg`, `foundation-full.webp`, 4 security icons.

Missing:
| Used by | URL |
|---|---|
| HubSpot form header wordmark | https://50445500.fs1.hubspotusercontent-na1.net/hub/50445500/hubfs/Color_Wordmark_Icon_Wordmark_Black-2.png |

External embeds (not downloadable assets): Vimeo via onelineplayer (`vimeo.com/1199890205`) and Storylane demo `jjiurfvxjiys`.
