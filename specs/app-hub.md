Source: https://www.teachable.com/app-hub

# /app-hub

Measured live on 2026-10-27 at 1440x900 / 1280x800 / 390x844. Text slots use the format `element · ~chars · lines @1440/@390 · purpose`. **Global deltas G1 and G3 from `specs/product-template.md` apply** (no promo marquee, fixed nav, footer mouse-move). There is no Halloween banner. Feature-template blocks F1 and F4 are defined in `specs/ai-hub.md`.

## Page order and geometry (y / height in px)
| # | Section | 1440 | 1280 | 390 |
|---|---|---|---|---|
| 1 | Feature hero `.padding-bottom-0` (F1 + login line) | 0 / 725 | 0 / 692.4 | 0 / 1007.5 |
| 2 | **App directory tabs** `section_feature-apps` (below) | 725 / 1351.7 | 692.4 / 1345.9 | 1007.5 / 2094.9 |
| 3 | Feature CTA `.padding-top-0`, red, with login line (F4) | 2076.8 / 482 | 2038.2 / 471 | 3102.4 / 406.2 |
| 4 | Footer | 2558.7 / 808.8 | 2509.2 / 790.4 | 3508.6 / 1631.6 |
| | document height (tab 1 active) | 3367 | 3299 | 5140 |

Section 2's height depends on the active tab. The values above are for tab 1 ("Email marketing", 5 apps).

## 1. Feature hero (F1 with `.padding-bottom-0`)
- Bottom padding 0 (top 12rem / 112px @390). Height 725 @1440.
- Image `/assets/68e52f30cddfb3ef98be880b_115157c9f8625f15d85454aaceeed7a6_ai-hub-hero.webp` (540x720, eager). Despite the filename it is the app-hub hero.
- tag "— APP HUB". h1 · ~41c · 2L/3L. One letter "o" is a stylised glyph `span.span_h1-o` (below). p · ~202c · 3L/5L, whose first ~53c are `<strong>` and a ~9c phrase near the end is `<em>` (Peridot italic, synthesised).
- `button-sso` "Start for free".
- **Login line** `.feature-hero_login-wrp` (relative; 344.7x25.8 @1440): a div in `text-medium` (1.15rem/1.5 = 17.21/25.82) reading "Already a customer? " followed by `a.feature_txt-link` "Log in to access apps" (underlined, black) → `https://sso.teachable.com/secure/teachable_accounts/sign_in`. **Hover: `text-decoration: none`.** @390: 15.6/23.4, 1 line (312.5 wide).
- `span.span_h1-o`: `color: transparent; background: url(/assets/68d333eb7daf150f3f4d68c8_teachable-char-o-long.svg) 50% 69% / 100% no-repeat; padding 0 .2rem 0 .3rem; margin 0 -.7rem 0 0` (responsive: size 92%, margin −.1rem/−.5rem, as on the homepage `.span_h2-o`). Measured 47.9x111 @1440, 31.2x64 @390.

## 2. App directory tabs (`section.section_feature-apps`)
**Structure (Webflow Tabs, `data-duration-in=300`, `data-duration-out=100`, `data-easing=ease`, default tab 1)**
```
section.section_feature-apps  white, relative, overflow hidden
  .padding-global.padding-section-large > .container-large > .feature-apps_wrp (flex col, gap 6rem)
    .feature-apps-tabs_component.w-tabs
      .feature-apps-tabs_menu.w-tab-menu  flex row, space-between, gap .5rem, margin-bottom 4rem
        a.feature-apps-tabs_link x6  flex 1 (208.3x41.9 @1440), padding .6rem 1.5rem .7rem, radius full, text-align center, Peridot 1rem/1.5 400
             inactive: bg #f0f0f0, text #222 ; active (.w--current): bg #000, text #fff   (no hover style, no transition on the pill colours)
      .feature-apps-tabs_content.w-tab-content (relative, overflow hidden)
        .w-tab-pane x6 → .feature-apps-tabs_tab-wrp (flex col, gap 4rem)
          .feature-apps_header-wrp  max-width 60rem (898), flex col centred, gap 1rem, text-align center
            h2 (text-h2) = the category name (same as the tab label)
            p (body) · pane intro
          .feature-apps-tabs_grid  grid 3 x 1fr (389.1 @1440), gap 4rem
            .feature-apps-tabs_tab-content  flex col, align start, gap 1rem
              .feature-apps-tabs_logo-wrp  4rem square (59.9) → img (96x96 SVG logo, 100%)
              div.feature-apps-tabs_subheading  Ivypresto 2rem / 1.5 (29.93/44.9)  = app name (functional label)
              p.text-size-medium · app description (~68–156c)
              [optional] .product-blog-card_btn-wrp > a.button-simple "LEARN MORE" (+ -45° arrow icon) → https://teachable.com/aweber   (AWeber only)
    .feature-apps_footnote-wrp  max-width 58rem (868.1), centred, bg #f0f0f0, radius .6rem, padding 2rem 3rem, text-align center
      p.text-size-regular  1rem/1.5, color #444444 · ~503c · 5L/14L · trademark disclaimer
```
**Tabs and apps** (tab labels, app names and logos are functional and may be kept verbatim; descriptions are stand-in copy of the given length):
| Tab (label) | Pane intro | Apps: name → logo file in `/assets/` · description chars |
|---|---|---|
| Email marketing | ~165c (2L/4L) | Mailchimp → `689d1d034d45fa59de53e0c5_app-hub-mailchimp.svg` · 151 ; Kit → `68c20cdd6bb8435136af9d87_app-hub-kit.svg` · 129 ; AWeber → `689d1d03069fb9e107602725_app-hub-aweber.svg` · 118 + LEARN MORE ; ActiveCampaign → `68ca43b89a4062cd6367c53f_app-hub-activecamp.svg` · 145 ; MailerLite → `68ca4445d69b50a6599be639_app-hub-mailerlite.svg` · 113 |
| Analytics | ~131c | Google Analytics 4 → `689d1d031ce1b8ec9b345877_app-hub-google.svg` · 117 ; Google Tag Manager → `689d1d030be3cefea715a32c_app-hub-google-tag.svg` · 99 ; Hotjar → `689d1d037fd0b9b96a2d4300_app-hub-hotjar.svg` · 116 |
| Sales & Conversions | ~230c | Linktree → `68f3a1e2456c17720f2f5a10_app-hub-linktree.svg` · 89 ; WordPress Plugin → `68f3a27e1a7ad765f1e4b284_app-hub-wordpress.svg` · 147 ; Stripe → `689d1d04db567f75f3a62261_app-hub-stripe.svg` · 122 ; PayPal → `689d1d0487f229d324fbf8c5_app-hub-paypal.svg` · 136 ; Witness → `68f3a3f8c516a2bfdafa1bb8_app-hub-witness.svg` · 156 ; Deadline Funnel → `68f3a5983f65034b708d9086_app-hub-deadline.svg` · 118 ; Sumo → `68f3a6ed9a35d3f4f923098a_app-hub-sumo.svg` · 79 ; Pinterest Ads (sic "Pinterst Ads" on the live site) → `689d1d033b1293c193f48a60_app-hub-pinterest.svg` · 116 ; TikTok Pixel → `689d1d04a956c8a33c1e71d3_app-hub-tiktok.svg` · 88 ; Meta Pixel → `689d1d03d25b95bae74b0354_app-hub-meta.svg` · 92 ; Linkedin Insight Tag → `68f3a7639039ffc9b855871b_app-hub-linkedin.svg` · 119 |
| Business | ~105c | Calendly → `689d1d03a956c8a33c1e71ae_app-hub-calendly.svg` · 98 ; Segment → `689d1d0459fae685a34386f0_app-hub-segment.svg` · 135 ; Zapier → `689d1d0462cca372190a9f08_app-hub-zapier.svg` · 129 ; Google Drive → `689d1d03f8bf1534c5b7f992_app-hub-google-drive.svg` · 92 ; Dropbox → `689d1d037a573eac3aeeed3c_app-hub-dropbox.svg` · 68 ; OneDrive & OneDrive Business → `689d1d03db4b52548cb122f6_app-hub-google-one.svg` · 120 |
| Learning experience | ~147c | Wobo → `68f3a81d1897843038b3bebf_app-hub-wobo.svg` · 146 ; Zoom → `689d1d04e130432c21452468_app-hub-zoom.svg` · 134 |
| Site design | ~100c | DropInBlog → `68f3a8ec4abb4cd2054f172f_app-hub-dropinblog.svg` · 126 ; Unsplash → `689d1d04993b4276e78c68e5_app-hub-unsplash.svg` · 91 |

- @1440 (tab 1): grid rows 251.8 + 237.9 (gap 59.9). The tab component is 850.3 tall. The footnote is 868.1x172.1. Section 1351.7. @1280: tab links 197.5x40.9, section 1345.9.
- **Tab switching (Webflow Tabs):** clicking a pill makes it `.w--current` and swaps the pane. The outgoing pane fades out in 100ms, the incoming one fades in over 300ms (`ease`). The section height changes with the pane content (no height animation). No autoplay, no URL hash change. Keyboard: the tablist is focusable.
- **Breakpoints:** ≤991 wrapper gap 4rem. The menu wraps (`flex-wrap: wrap`, `justify-content: flex-start`, margin-bottom 3rem) and pills become `flex: 0 auto` (content width). Tab-wrp and grid gaps 3rem. ≤767 menu margin-bottom 2rem, tab-wrp gap 2rem, grid 2 columns with gap 2rem, item gap .5rem, app name 1.5rem, footnote padding-x 1.5rem. **≤479 (390):** pill text 3.5vw (13.65/20.5), pills content-width and wrapped into 3 rows of 2 (row height 41.3, gap 8px; menu 342x139.8, margin-bottom 32px). Pane header left-aligned (h2 39/42.9, 1 line). Grid 1 column (gap 32px). App name 7vw (27.3/41). Footnote 342x391.6 (padding 32/24), 14 lines. Section 2094.9 (tab 1).
- Hover: `a.button-simple` arrow `rotate(-45deg)`. The rotate-to-0 hover rule is only defined for `.product-blog-card_component:hover`, so on this page the arrow stays at −45°. No other hovers.

## 3. Feature CTA (F4, red, with header paragraph and login line)
- `.padding-top-0` (bottom 8rem; 64px @390). Wrap 1287.1x362.3 @1440.
- `.feature-cta_header-wrp` (flex col centred, gap 1rem, 527.3 wide content): h2.feature-cta_heading · ~27c · 1L/2L · closing headline; p (body, white) · ~55c · 1L/2L.
- `button-sso` "Start for free".
- `.feature-cta_login-wrp`: the same login line as the hero, but white and centred, with `a.feature-cta_txt-link` (white, underlined) → sign-in URL.

## Motion (app-hub)
Tabs fade (300ms in / 100ms out, ease), button hover M6, footer mouse-move G3. No scroll animations, ScrollTriggers or Swipers.

## Missing assets
None. All 29 app logos and the hero image are in `public/assets/`.
