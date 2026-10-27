Source: https://www.teachable.com/

# Teachable homepage: clone spec

Measured live on 2026-10-26 with Playwright (Chromium) at 1440x900, 1280x800 and 390x844. Cross-checked against `_snapshot/index.html`, the page CSS (`fs-teachable.68b18a…opt.min.css`), the inline scripts, the Webflow IX2 store (`Webflow.require('ix2').store.getState().ixData`), the Webflow IX3 instance, and the live `ScrollTrigger.getAll()` list.

px values are computed values at the stated viewport. Wherever the source uses rem, the rem value comes first, because the whole desktop layout scales fluidly (see 0.1).

---

## 0. Global foundations

### 0.1 Fluid root font-size (important)
```css
html { font-size: calc(0.7416576964477932rem + 0.21528525296017226vw); }      /* >1920 too */
@media screen and (max-width:1920px) { html { font-size: calc(0.7416576964477933rem + 0.21528525296017226vw); } }
@media screen and (max-width:991px)  { html { font-size: 1rem; } }              /* 16px */
```
- 1440px gives **1rem = 14.9666px**. 1280px gives **1rem = 14.6222px**. At 991px and below, 1rem = 16px.
- Every desktop measurement below follows from this. Build in rem with this html rule so all sizes scale exactly. The odd px numbers (e.g. 74.8332px) are this rem value times the rem multiplier.
- At **479px and below**, most type tokens switch to **vw units** (see 0.4).

### 0.2 Breakpoints
Webflow breakpoints: **main ≥992**, **medium 768–991**, **small 480–767**, **tiny ≤479**. Custom extra breakpoints:
- **≤1145px**: hamburger nav appears early. Custom embed CSS plus a script handle 992–1145.
- **≤1320px**: pricing card padding changes (see §13).
- **≤359px**: banner countdown hidden.

### 0.3 Fonts
The site loads only two families. Both are downloaded to `/public/fonts/`:

| File | Family | Weight/style | Original URL |
|---|---|---|---|
| `/fonts/IvyprestoHeadline-Regular.woff2` | Ivyprestoheadline | 400 normal | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e7d8dc76d80d682b7d1745_IvyprestoHeadline-Regular.woff2 |
| `/fonts/IvyprestoHeadline-RegularItalic.woff2` | Ivyprestoheadline | 400 italic | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68efd5d533c9a303121f3a7c_IvyprestoHeadline-RegularItalic.woff2 |
| `/fonts/PeridotPENormVF.woff2` | Peridotpenormvf | variable 100–950 | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e7d92793f6b8ba82401492_PeridotPENormVF.woff2 |

```css
@font-face{font-family:Ivyprestoheadline;src:url(/fonts/IvyprestoHeadline-Regular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}
@font-face{font-family:Ivyprestoheadline;src:url(/fonts/IvyprestoHeadline-RegularItalic.woff2) format("woff2");font-weight:400;font-style:italic;font-display:swap}
@font-face{font-family:Peridotpenormvf;src:url(/fonts/PeridotPENormVF.woff2) format("woff2");font-weight:100 950;font-style:normal;font-display:swap}
```
- Heading stack: `Ivyprestoheadline, Georgia, sans-serif`. Every heading is weight 400. Italic words use `<em>` and render in the italic face.
- Body stack: `Peridotpenormvf, Arial, sans-serif`. Weights in use: 400, 500, 600, 700, 800.
- The case-study pagination digits ("1 / 3") use the browser `monospace` font (no font set). Reproduce with `font-family: monospace`.
- `body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }`
- Letter-spacing is `normal`/0 everywhere except the banner tag and countdown label (0.5px, uppercase).
- The cookie-banner "Hotmart Sans" fonts belong to a third-party consent widget. Do not clone them.

### 0.4 Typography tokens (CSS variables, base ≥992 → ≤991 → ≤767 → ≤479)
| Token | ≥992 | ≤991 | ≤767 | ≤479 |
|---|---|---|---|---|
| body font-size | 1.3rem (19.4566px@1440, 19.0088@1280) | 1.3rem | 1rem | 4vw (15.6px@390) |
| body line-height | 1.5 | 1.5 | 1.5 | 1.5 |
| h1 / `.heading-style-h1` | 5rem / lh 1 (74.83/74.83@1440) | 3.5rem / 1.1 | 2.5rem / 1 | 11vw / 1 (42.9@390) |
| h2 | 4rem / 1.1 (59.87/65.85) | 2.5rem | 2rem | 10vw / 1.1 (39/42.9) |
| h3 / `.heading-style-h3` | 3rem / 1.1 (44.90/49.39) | 3rem | 2rem | 8vw / 1.1 (31.2/34.32) |
| font-size--medium (`.text-size-medium`) | 1.15rem (17.2116px), lh 1.5 | 1rem | 1rem | 4vw |
| font-size--small | .875rem (13.0958px), lh 1.5 | .875rem | .875rem | 3.5vw (13.65) |
| font-size--regular | 1rem | 1rem | 1rem | 4vw |
| global-padding | 2rem | 2rem | 2rem | 1.5rem (24px) |
| section-padding large | 8rem (119.73px) | 5rem | 3rem | 3rem (48px) |
| section-padding small | 2rem | 2rem | 1.5rem | 1.5rem |

Margins on h1–h6 and p are 0. `ul` has padding-left 1.5rem. `li` has margin-bottom .25rem.

### 0.5 Color tokens
| Name | Value |
|---|---|
| brand yellow | `#e6ff32` (rgb 230,255,50) |
| black / text-dark / background-primary | `#000000` |
| white | `#ffffff` |
| grey-light | `#f0f0f0` |
| grey-mid | `#bfbfbf` |
| gradient grey end | `#bebebe` |
| blue-dark (why bg, pricing card) | `#1c4774` (28,71,116) |
| pricing card gradient end | `#6f92b6` (111,146,182) |
| red-dark (case-study card) | `#7f2a23` (127,42,35) |
| case-study tag / CTA text | `#fae6b6` (250,230,182) |
| case-study slide bg | `#f5f5f5` |
| footer muted text | `#a0a0a0` (160,160,160) |
| dropdown column title | `#979797` (151,151,151) |
| tab text | `#222222` (34,34,34) |
| tab progress track | `#e7e7e7` |
| marquee bg | `linear-gradient(90deg,#e6ff32 45%,#edf0e0)` |
| marquee ✦ icon | `#687317` |
| payments CTA gradient | `linear-gradient(135deg,#f8ffc6,#e6ff32)` |
| nav promo card gradient | `linear-gradient(140deg,#e6ff32,#f8ffc6)` |
| image placeholder gradient | `linear-gradient(180deg,#f0f0f0,#bebebe)` |
| hero frame | `linear-gradient(0deg,#f0f0f0 40%,#ffffff)` on `#f0f0f0` |
| ::selection | bg black, text white. In the footer (`[text-selection=reverse]`) it is bg white, text black. |
| focus-visible | `outline: 2px solid #005fcc; outline-offset: 2px` |

### 0.6 Radii, borders, shadows
- radius small `.25rem`, **medium `.6rem` (8.98px@1440)**, large `1rem` (14.97px), full `100vh` (computes to 900px at 1440 / 844px at 390). Use `9999px`, the visual result is the same.
- Thin border `1px`.
- **No box-shadows anywhere on the page.**

### 0.7 Layout primitives
- `.padding-global`: padding-left/right = global-padding (2rem, so 29.93px@1440, 29.24@1280, 24px@390).
- `.container-large`: width 100%, max-width **86rem** (1287.13px@1440, 1257.5@1280), centered.
- `.container-medium`: max-width 68rem.
- `.container-small`: max-width 48rem (718.4px@1440).
- `.padding-section-large`: padding-top/bottom 8rem.
- `.max-width-large` 44rem. `.max-width-xlarge` 64rem. `.max-width-medium` 40rem.
- At 1440 the content column is x=76 to 1363 (1287px). At 1280 it is x=29 to 1251 (1222px): the 2rem gutter limits it, not the max-width.

### 0.8 Shared components

**Buttons.** All are pills (radius full), `display:flex; align-items:center; justify-content:center; gap:.25rem`. Label is `.button_txt`: font-size 1.1rem (16.46px@1440, 16.08@1280; 1.05rem = 16.8px at ≤479), weight 600, line-height 1.
| class | bg | border | text | padding @1440 |
|---|---|---|---|---|
| `.button-sso` (Start for free) | #e6ff32 | 1px #000 | #000 | 1rem 1.5rem (14.97/22.45) |
| `.button-secondary` (Explore our plans) | #fff | 1px #000 | #000 | 1rem 1.5rem |
| `.button-primary-new` | #e6ff32 | 1px #000 | #000 | .9rem 1.5rem 1.1rem (13.47/22.45/16.46) |
| `.button-primary-new` white variant (pricing "Explore plans") | #fff | 1px #000 | #000 | same |
| `.button-primary-new` black variant (pricing "Contact sales") | #000 | 1px #fff | #fff | same |
| `.button-black` | #000 | 1px #000 | #fff | 1.1rem 1.5rem (16.46/22.45) |
| `.nav_button-secondary` (Contact sales, nav) | transparent | 1px #fff | #fff | 1rem 1.5rem |
| `.arrow-btn` (Discover what's new) | #000 | none | #fff 1rem/600 | .5rem .5rem .5rem 1.5rem, gap 1.25rem. Holds a 2rem yellow circle (`.arrow-btn_arrow-wrp`) with a 1rem arrow SVG |

Heights @1440: sso/secondary/primary-new 48.4px, black 51.4px. @390: 50.8px / 54px.

At ≤991 the button font-size drops to .875rem on `.button-sso`, `.button-secondary`, `.button-primary-new`, `.nav_button-secondary` and `.button-black`. At ≤479 the computed label is 16.8px.

**Button hover (Webflow IX2).** Only the inner `.button_txt` scales, with transform-origin center:
- `.button-sso`: hover → scale **1.03**, 200ms `ease`. Mouse-out → scale 1, 200ms `ease`.
- `.button-secondary`, `.button-primary-new`, `.nav_button-primary`: hover → scale **1.02**, 200ms `ease`. Out → 1, 200ms `ease`.
- `.button-black`, `.nav_button-secondary`: no hover effect.
- `.arrow-btn:hover .arrow-btn_icon { transform: rotateZ(-45deg) }` with `transition: transform .2s ease`.
- No colour changes on hover. At ≤479 only, a generic `.button:hover` turns yellow on black, but no element on this page uses `.button`.

**Arrow icon SVG** (`.global_arrow-icon`, 1rem x ~0.56rem, `currentColor`):
```html
<svg viewBox="0 0 16 9" fill="none"><path d="M0.546875 3.79455H10.5469V5.29455H0.546875V3.79455Z" fill="currentColor"/><path d="M15.4766 4.54474L10.4719 8.87756V0.211914L15.4766 4.54474Z" fill="currentColor"/></svg>
```
`.is-flipped` = `transform: rotate(180deg)` (computed `matrix(-1,0,0,-1,0,0)`).

**List arrows** (`.global_list-wrp`): a flex column with .5rem gap and margin-top .5rem. Each row is `.global_list-content`, a flex row with .5rem gap: a "→" glyph, then the text. Uses body size 19.4566px / lh 29.18 @1440. At ≤991 `.global_list-content` is .875rem. At ≤479 it is 4vw. The extra margin-top is removed at ≤991.

### 0.9 Page order and section geometry (1440 / 1280 / 390)
| # | Element | 1440 y / h | 1280 y / h | 390 y / h |
|---|---|---|---|---|
| 1 | `.master-nav-marquee_component` (promo marquee) | 0 / 48 | 0 / 47 | 0 / 51 |
| 2 | `.nav_fixed.is-sticky` (nav) | 48 / 79.3 | 47 / 77 | 51 / 58.8 |
| 3 | `section.section_halloween_banner` (campaign) | 127 / 248 | 124 / 245 | 110 / 435 |
| 4 | `section.section_home-hero` | 376 / 1443 | 370 / 1410 | 545 / 810 |
| 5 | `section.section_home-stats` | 1819 / 183 | 1780 / 179 | 1355 / 222.5 |
| 6 | `section.section_demo-cta` | 2002 / 96 | 1959 / 94 | 1578 / 102 |
| 7 | `section.section_teach` | 2099 / 1055 | 2053 / 1023 | 1680 / 2205 |
| 8 | `section.section_payments-cta` | 3154 / 581 | 3077 / 567 | 3885 / 741 |
| 9 | `div.why_scroll` > sticky `section.section_why` | 3734 / 2520 (280vh) | 3644 / 2240 | 4627 / 320 |
| 10 | `section.section_why-card` (margin-top −17vh) | 6101 / 1605 | 5748 / 1515 | 4946 / 2615 |
| 11 | `div.scale_scroll` > sticky `section.section_scale` (desktop/tablet) | 7706 / 3600 (400vh) | 7263 / 3200 | hidden |
| 11m | `section.section_scale-mob` (≤767 only) | hidden | hidden | 7561 / 1097 |
| 12 | `section.section_smart` | 11306 / 905 | 10463 / 900 | 8658 / 1639 |
| 13 | `section.section_stories` | 12211 / 991 | 11363 / 1012 | 10297 / 904 |
| 14 | `section.section_home-pricing` | 13202 / 662 | 12375 / 649 | 11201 / 1555 |
| 15 | `section.section_hub` | 13864 / 881 | 13024 / 852 | 12756 / 793 |
| 16 | `section.section_case-study` | 14744 / 809 | 13877 / 777 | 13549 / 961 |
| 17 | `section.section_faq` | 15553 / 1231 | 14654 / 1203 | 14510 / 1155 |
| 18 | `section.section_impact` | 16784 / 645 | 15857 / 631 | 15665 / 518 |
| 19 | `footer.footer_component` | 17429 / 809 | 16488 / 790 | 16184 / 1632 |
| | document height | 18238 | 17278 | 17815 |

The page wrapper is `div.page-wrapper`, and sections sit inside `main.main-wrapper`. The marquee and nav come before `main`.

Third-party overlays were present on the live page and should **not** be cloned: the HubSpot modal overlay `#hs-interactives-modal-overlay` and the Hotmart cookie-policy banner (`teachable-cookie-policy`).

---

## 1. Promo marquee (`.master-nav-marquee_component.is-show`)
**Structure.** A flex row (overflow hidden, width 100%, gap 1.25rem = 18.71px) containing **3 identical `.master-nav-marquee_item`** copies. Each item is a flex row with align-items center, gap 1rem (14.97), padding .75rem 0 (11.225px) and `flex:none`. Each item holds:
`a.master-nav-marquee_link` "Selling more than US$12k/yr outside Teachable?" · `div.master-nav-marquee_icon` "✦" · `a` "Migrate this month and earn up to $6,500 in credits" · "✦" · `a.is-bold > strong` "See migration offer →" · "✦"
- All links → `https://www.teachable.com/lps/migrate-to-teachable?src=marquee`.
- Height 48px@1440 (2.85rem variant). Background `linear-gradient(90deg,#e6ff32 45%,#edf0e0)`.
- Link: Peridot .95rem (variant .88rem → **14.218px@1440**, 13.89@1280, 15.2px@390), weight 600 (bold one 800; computed shows 700 because of `strong`), line-height 1.8 (25.59px), black, no underline. Hover: underline.
- Icon ✦: .88rem (13.17px), line-height 1, color #687317.
- Item width @1440 is 929px (all 3 items are the same width).

**Motion (CSS, from inline embed):**
```css
@keyframes track { from{transform:translateX(0)} to{transform:translateX(calc(-100% - 1rem))} }
.master-nav-marquee_item { animation: track 25s linear infinite; }
.master-nav-marquee_component:hover .master-nav-marquee_item { animation-play-state: paused; }
```
The marquee scrolls away with the page. It is **not** sticky.

---

## 2. Navigation (`.nav_fixed.is-sticky > .master-nav_component > nav.nav_component`)
**Sticky behaviour.** `.nav_fixed.is-sticky { position: sticky; top: 0; z-index: 999 }`, and `.master-nav_component` has z-index 2147483647. It sits right after the marquee: on load it is 48px from the top and it pins at top:0 once the marquee scrolls out. The background stays solid black. There is no shrink or hide-on-scroll.

**Desktop layout (≥1146px).**
- `.nav_wrapper`: flex, space-between, bg #000, padding 1rem 1rem 1rem 2rem (14.97 14.97 14.97 29.93@1440). Height 79.3px@1440, 77@1280.
- **Left**, `.nav_content-l`: logo `a.nav_brand-link` (width 9rem = 134.7px), image `/assets/68daba31282892b31e937809_teachable-logo-color.svg` (300x46 natural; rendered 134.7x20.4@1440, 132x20@1280). Links to `/`.
- **Center**, `.nav_menu`: `position:absolute; inset:0; margin:0 auto; max-width:32rem (478.9px)`, flex centered, gap 2rem. Inside, `.nav_menu-wrp` is a flex row with gap 0:
  - Dropdown "Products" (`._wf-dropdown_toggle`: flex, gap .5rem, padding .5rem 1rem). Text Peridot 1rem (14.97px) / lh 1.5 / 600 / white. Chevron 10x6 SVG `<svg viewBox="0 0 10 6"><path d="M9 1L5 5L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`, offset 1.5px down (top:.1rem).
  - Dropdown "Resources" (same).
  - `a.nav_menu-link` "Pricing" → `/pricing` (padding .7rem 1rem .5rem). Text nudged up .1rem.
  - Hover: `._wf-dropdown_toggle:hover` and `.nav_menu-link:hover` get `text-decoration: underline`.
- **Right**, `.nav_content-right > .nav_button-wrp`: flex, gap 1rem (14.97):
  - `a.nav_link` "Creator login" → `https://sso.teachable.com/secure/teachable_accounts/sign_in`. 1.1rem/600/white, line-height 1, padding 1.1rem 0. No hover underline.
  - `a.nav_button-secondary` "Contact sales" → `/lps/migrate-to-teachable?src=navbar` (white 1px border pill, 156.5x48.4).
  - `a.button-sso` "Start for free" → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` (150.2x48.4).
- Measured x positions @1440: logo 30; Products toggle 564–675; Resources 676–797; Pricing 797–876; Creator login 984; Contact sales 1103; Start for free 1275–1425.

**Dropdown menus.** Webflow dropdown with `data-hover="false"`: it opens on **click**. Only one is open at a time, and clicking outside closes it.
- `nav._wf-dropdown_list` (when open): `position: fixed; left:0; right:0; width:100%; padding: .75rem 2rem 0; z-index:1; background transparent`. Its CSS `top` is 5rem, but an inline script overrides it when open: **top = `8rem` if `scrollY ≤ 150`, else `4.8rem`**, with `transition: top .3s ease` (applied on scroll and 10ms after a toggle click). The open panel's total height is 337.6px@1440.
- `.nav_dropdown-indicator`: a black 1rem square, radius .2rem, rotated 45°, absolute top .5rem. It points at the toggle: Products uses `left:-13rem` with auto margins, Resources `left:2.5rem`.
- `._wf-dropdown_list-wrp`: bg #000, radius .6rem, padding 0 2rem.
- Then `.container-medium.is-nav` (max-width 68rem... computed 1309.6px) > `.nav-menu_links-grid`: grid with **4 equal columns (304.9px@1440), gap 2rem**, padding-bottom 1.5rem.
- Column title `.home-screen_links-title`: Peridot .75rem (11.225px) / lh 1.5 / 600 / #979797, margin-bottom .25rem, inside a 1.5rem margin-top wrapper.
- Links `a.home-screen_link`: Peridot 1.15rem (17.21px) / lh 1.5 / **700** / white, padding .2rem 0, each row 31.8px. Hover: `padding-left:.15rem` + underline, `transition: padding .2s`.
- 4th column `.nav-menu-banner_component`: gradient `linear-gradient(140deg,#e6ff32,#f8ffc6)`, radius **0 0 1rem 1rem** (top corners square), padding 1.5rem 1rem, flex column gap 1.5rem, 305px wide.
  - "Introducing": Ivypresto 1.25rem (18.71px) / lh 1.1, centered.
  - "Teachable Payments": Ivypresto 2.5rem (37.42px) / lh 1.1, centered, wraps to 2 lines.
  - Paragraph "Capture more revenue with lower fees, global payments, and automatic tax handling.": Peridot 1rem / 1.5, centered.
  - `a.button-black` "Learn more" → `/payments`, full width (275px).

**Products dropdown copy**
- Column 1, title "What you can sell": Online Courses `/online-courses`, Digital Downloads `/digital-downloads`, Memberships `/memberships`, Coaching `/coaching`.
- Column 2, title "Feature highlights": AI Features `/ai-hub`, Payments `/payments`, Site Builder `/site-builder`, Sales and Marketing `/sales-and-marketing`.
- Column 3, no title (an empty spacer of the same height): Student Experience `/student-experience`, Mobile App `/mobile-app`, Integrations `/app-hub`, Analytics and Reporting `/analytics-and-reporting`.
- Column 4: the promo card above.

**Resources dropdown copy**
- Column 1, title "Resources": Product demo `/watch-demo`, Example Schools `/examples`, Success Stories `/blog-category/success-stories`, Blog `/blog`.
- Column 2, no title: Events `/events`, Newsletter and Podcast `/9to5-quitters-club`, Customer Journey `/customer-journey`, Teachable Academy `https://u.teachable.com/l/products?sortKey=recommended&sortDirection=asc&page=1`.
- Column 3: title "Solution" with Enterprise `/enterprise`, then title "Support" with Help center `https://support.teachable.com/`, Hire an expert `/experts`.
- Column 4: the same promo card.

**Dropdown chevron motion (IX2).** On open, `._wf-dropdown_icon` rotates 0→180deg over 300ms `ease`. On close it rotates to 360deg over 300ms `ease` after a 100ms delay, then snaps to 0.

**Hamburger / mobile menu (≤1145px).**
- `.nav_menu-button` is shown, and `.nav_button-secondary` / "Creator login" are hidden at ≤767. At 390 the nav row is: logo (width 7rem = 112px) left; right side holds `button-sso` "Start for free" (155x50.8) plus the hamburger (20x48). `.nav_wrapper` padding is .25rem 1.5rem (4px 24px) at ≤767 and .5rem 2rem at ≤991. Nav height 58.8px @390.
- Hamburger icon (`.nav_menu-line-wrapper`, 1.5rem x 1rem): 4 white 2px bars. Line-1 sits at the top, line-2 and line-3 overlap in the center, line-4 at the bottom.
- Open (IX2 a-85, on click): line-1 and line-4 width → 0%, wrapper rotate → 45deg, line-3 rotate → 90deg (forms an ×), and `.nav_menu` goes `display:flex` then translateX 100%→0%. All 200ms `ease`.
- Close (a-86): the reverse, 200ms `ease`, then `display:none`.
- Mobile `.nav_menu` (open): `position:absolute; top:100%` (58.8px below the nav top), left/right 0, bg #000, padding 2rem 1.5rem (32px 24px), max-height 92dvh, overflow auto, flex column space-between. Contents:
  - Two dropdown rows. Each is full width with border-bottom .5px #ccc, toggle padding .5rem 0, text 15.6px/600 white, chevron on the right. Dropdown lists become `position:relative` (accordion-like).
  - "Pricing" link, padding .5rem 0.
  - `.nav_btn-mob-wrp`: bg `rgba(255,255,255,.08)`, radius .6rem, padding 1.5rem, margin-top 1rem, flex column gap .5rem. It holds "Contact sales" (outlined white pill, full width), "Start for free" (yellow sso pill, full width) and "Creator login" (text link, padding .75rem 0).
- 992–1145 custom script: clicking `.nav_menu-button` toggles `.w--open` on `.nav_menu`/button and sets `transform: translate(0%,0)` (open) or `translate(100%,0)` (closed). Resizing above 1145 resets it.

---

## 3. Halloween campaign banner (`section.section_halloween_banner`)
> Time-limited campaign. The countdown targets **Oct 31 2026 23:59 local time**. It is present in both the snapshot and the live page, so clone it as is.

**Layout @1440.** Section: bg #fff, padding-top .5rem (7.48px), overflow hidden. Inside: `.container-large` > `.halloween_banner_wrp` (padding 0 2rem; 1rem at ≤767) > `.hero-banner_component[data-hero-perk=banner]`:
- `display:flex; flex-wrap:wrap; align-items:center; gap:1.25rem 2.5rem; padding:1.5rem 4.5rem 1.5rem 2rem` (22.45/67.35/22.45/29.93px), radius 1rem (14.97px), overflow hidden, text white. 1227x240.7px@1440.
- Background (exact):
```css
background-color:#0b0910;
background-image:radial-gradient(circle at 4% 18%,#e6ff3280 0 1px,#0000 2px),radial-gradient(circle at 33% 12%,#e6ff3266 0 1px,#0000 2px),radial-gradient(circle at 58% 22%,#e6ff3280 0 1px,#0000 2px),radial-gradient(circle at 47% 78%,#e6ff324d 0 1px,#0000 2px),radial-gradient(circle at 79% 15%,#e6ff3266 0 1px,#0000 2px),radial-gradient(circle at 92% 80%,#e6ff3259 0 1px,#0000 2px),linear-gradient(135deg,#0b0910,#1c1530 55%,#2a1f45);
```
- **Close button** `a.hero-banner_close[data-hero-perk=close]` "✕": absolute top 12px right 12px, 44x44, radius 50%, bg `#ffffff1f`, 16px white, z 2. Clicking it hides the banner (`display:none`) and clears the timer.
- **Content** `.hero-banner_content` (flex column, row-gap 12px, `flex: 999 1 460px`, 521.7px wide):
  - Tag `.hero-banner_tag`: 1px #e6ff32 border pill, padding 4px 12px 4px 9px, gap 6px. Holds "✦" and "No tricks, just a treat": 12px / 800 / lh 1.2 / letter-spacing .5px / uppercase / #e6ff32, no-wrap.
  - Title `.hero-banner_title`: Ivypresto 2.2rem (32.93px@1440, 32.17@1280; 32px@≤767) / lh 1.1 / white. Copy: "All free trials get a 1:1 with a " + `<em class="hero-banner_highlight">Teachable Expert</em>` (italic, #e6ff32) + ".". Wraps to 2 lines (72px tall).
  - List `.hero-banner_list`: flex wrap, gap 6px 22px, 15px / lh 1.4 / #ece8f5. Each item is "✓" (#e6ff32, weight 800) + text:
    1. "7-day free trial"
    2. desktop "Expert 1:1 to talk through your goals, key setup steps and questions" / mobile (≤767) "Expert 1:1 focused on your business"
    3. desktop "Access to webinar with the map to get to your first $10K" / mobile "“Your first $10K” webinar"
- **Countdown** `.hero-banner_countdown` (flex column, row-gap 10px, padding 0 2rem, border-left and border-right 1px `#ffffff24`, flex none, 301.6px wide):
  - Label: "☾" (16px #e6ff32) + "The treat ends on Halloween" (12px/800/uppercase/.5px/white). Mobile text: "Ends on Halloween".
  - Timer: flex, align-items flex-end, gap 8px. 4 units (`min-width:44px`, column centered), each a number in Ivypresto 2.5rem (37.42px) lh 1 #e6ff32 plus a label 13px #cfc8e0 lh 1.2 margin-top 4px: "days", "hrs", "min", "sec". Between units sits ":" in 1.5rem #6f6585 with padding-bottom 18px. Numbers are zero-padded 2 digits.
- **CTA** `.hero-banner_cta-wrap` (flex column centered, row-gap 10px):
  - `a.button-primary-new` "Start free trial" → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly&web_campaign=halloween-1on` (159.5x48.4).
  - Note `.hero-banner_note`: "Scared to start?<br>30-day money-back guarantee." in 13px / lh 1.35 / #cfc8e0, centered.
- Script (verbatim logic): every 1000ms compute `END - now`, split into d/h/m/s, and write the 2-digit padded values into `[data-hw=d|h|m|s]`.

**≤991.** Countdown loses its side borders and padding and gets `order:3`. The CTA wrap becomes a row with `order:4` and column-gap 16px.

**≤767 (measured @390, 358x411px card).**
- Margin-top 1rem. Padding 20px 18px 18px. Row-gap 14px. Close button 40x40 at top/right 8px, 14px font.
- Title 2rem/1.08 (32px/34.56).
- List becomes a column with row-gap 6px and items align flex-start.
- Countdown becomes a full-width row (`flex:100%`, space-between) with 1px `#ffffff1a` border, radius 12px, padding 6px 6px 6px 12px. Label is 11px/400/no uppercase, #cfc8e0. Units become pills (bg `#ffffff12`, radius 8px, padding 5px 7px, row baseline, gap 3px): number 15px, label 10px #a79fbd. Colons hidden.
- CTA wrap is a full-width column, row-gap 12px. Button is full width (322px).

**≤359px.** Countdown hidden.

---

## 4. Hero (`section.section_home-hero.is-migrate-cta`)
**Assets:**
- `/assets/68e47a1d7727e0f7bd1ac19e_8b04a4deab039f00b369cedcd9295a73_ui-main-hero-tab-1.webp` (1376x793). Preload it with high priority.
- `/assets/68e47a1edeb440ab80fdf439_0eb0b462897381c9122d4546e00aca77_ui-main-hero-tab-2.webp`
- Mobile: `/assets/6960fced54a209a6ea49ac9b_home-hero-tab-1-mobile.webp`, `/assets/6960fcede45922073615d104_home-hero-tab-2-mobile.webp`
- Floating panels: `/assets/68e47927acaba24419d39208_ui-panel-live-feed.webp` (742x780), `/assets/68e4792744ebd84268993dcd_ui-panel-chart.webp` (967x671), `/assets/68e479277271968905cb9424_ui-panel-resources.webp`, `/assets/68e47927ea3f4c60aa05f5fb_ui-panel-live-feed-student.webp`

**Layout @1440.**
- Section: flex column, justify center, padding 0 2rem 5rem (0 29.93 74.83 29.93), overflow hidden, white bg. Height 1443px.
- `.container-large` > `.home-hero_wrp.is-top-padding`: flex column, align center, **gap 5rem (74.83px)**, padding-top 4rem (59.87px).
- `.home-hero_txt-wrp`: flex column, align center, gap 1.5rem (22.45px), max-width 68rem (1017.7px). Contents:
  - `h1.home-hero_heading` "The future of your education business happens here": Ivypresto 5rem (74.83px) / lh 1 / 400 / black / centered. 2 lines, 149.7px tall at 1017.7 width.
  - `p.home-hero_paragraph` (max-width 52rem = 778.3px): "Whatever your expertise—languages, fitness, or coding—Teachable helps you deliver impactful learning, run a smarter business, and scale worldwide." Body 1.3rem (19.46px) / lh 1.5 (29.18) / centered. 2 lines.
  - `.home-hero_btn-wrp`: flex row centered, gap 1rem, margin-top 1rem. Buttons: `button-sso` "Start for free" (150.2x48.4) and `button-secondary` "Explore our plans" → `/pricing` (182x48.4).
- `.home-screen_frame`: bg `#f0f0f0` + `linear-gradient(0deg,#f0f0f0 40%,#fff)`, radius 1.5rem (22.45px), padding-bottom 2rem, full container width (1287x917.5). Inside is the Webflow tabs component `.home-hero-tabs_component`, a flex column with space-between:
  - **Pane** (`.home-hero-tabs_content`, flex 1): `.home-hero-tabs_pane-wrp` (radius .6rem .6rem 0 0) > `.home-hero-tabs_img-wrp` (height **48rem = 718.4px**, radius .6rem top corners, overflow hidden, position relative) > `img.home-hero-tabs_img` (100% x 100%, `object-fit:cover; object-position:0 0`). `img.home-hero-tabs_img-mob` stays hidden until ≤767.
  - Floating UI panels (absolute, bg white, 1px #f0f0f0 border, radius .3rem, overflow hidden, width **22rem**, height auto, image width 100%):
    - Tab 1 `.home-hero-tabs_ui-img-wrp-1` (live feed): `bottom:-3rem; left:4rem` (322.7x339px; it overflows the image bottom by 3rem).
    - Tab 1 `.home-hero-tabs_ui-img-wrp-2` (chart): `top:3rem; right:-3rem` (322.7x224px; overflows right).
    - Tab 2 `.home-hero-tabs_ui-img-wrp-3` (resources): top 3rem right -3rem.
    - Tab 2 `.home-hero-tabs_ui-img-wrp-4` (student live feed): bottom -3rem left 6rem.
  - **Tab menu** `.home-hero-tabs_menu` (rendered after the pane via `order:9999`): flex row, gap 4rem (59.87), padding 0 2rem, margin-top 5rem (74.83). Two `a.home-hero-tabs_link` (flex 1, column, gap .5rem, 583.7px each):
    - `.home-hero-tabs_progress-wrp`: height 2px, bg #e7e7e7, full width. Child `.home-hero-tabs_progress-bar` is bg #000, height 100%, width animated by JS.
    - Title (div): Peridot 1.15rem (17.21px) / lh 1.5 / 700 / #222.
    - `p.home-hero_tabs-link-txt`: same size, weight 400, #222.
    - Tab 1: "Your view" / "Easily create your products, manage your business, and customize your students' learning experience in one place."
    - Tab 2: "Your student's view" / "Intuitive, mobile-friendly, and built for your students to seamlessly access and discover your products and offers."
    - Both tabs look identical whether active or inactive (transparent bg). Only the progress bar indicates the active tab.

**@1280.** Container 1222 wide. h1 73.11px, 994px wide. Paragraph 19.01px. Tab image 1222x702. Panels 313px wide. Section height 1410.

**≤991.**
- Section padding-top 13rem.
- Wrapper gap 3rem.
- Text wrapper max-width 36rem.
- Tab image height 22rem.
- Panels 12rem wide (wrp-1 bottom -2rem left 3rem; wrp-2/3 right -1rem; wrp-4 bottom -2rem left 4rem).
- Tab menu gap 2rem, margin-top 3rem.

**≤767 (measured @390).**
- Section padding 0 0 3rem (bottom 48px).
- `.home-hero_wrp` gap 32px, padding-top 32px (4rem → `.is-top-padding` 4rem... computed 32px).
- Text wrapper padding 0 24px, gap 24px.
- h1 is 39px/39px (10vw), 3 lines, 342px wide.
- Paragraph 15.6px/23.4.
- Buttons stack vertically: flex column, gap 8px, each full width 342x50.8.
- `.home-screen_frame`: radius 9.6px... (measured 9.6px), margin-top -1rem, padding-bottom 16px.
- Pane-wrp: bg `#f0f0f0` with `linear-gradient(180deg,#fff,#bfbfbf)`, padding-top 2rem, padding-left 2rem, no top radius. The image wrap is 20rem tall. **Only the mobile image shows** (`.home-hero-tabs_img-mob`, 390x280.6 measured).
- Floating panels hidden.
- Tab menu gap 8px... (measured gap 8px, margin-top 16px, padding 0 24px). Each tab is 167px wide, the description is hidden, and the title is 15.6px/700.

**Hero tab behaviour.**
1. Webflow tabs: `data-duration-in=300`, `data-duration-out=300`, `data-easing=ease`. Panes cross-fade (opacity) 300ms ease.
2. Autoplay script (verbatim logic): `delay = 6000ms` per tab. A requestAnimationFrame loop sets the current `.home-hero-tabs_progress-bar` width to `progress*100%`. At 100% it moves to the next tab (loops 0→1→0), clicks it, and resets all bars to 0%.
   - It only runs while `.home-hero-tabs_menu` is intersecting (IntersectionObserver `threshold:0.5, rootMargin:"0px 0px -5% 0px"`). Elapsed time is preserved when paused.
   - Clicking a tab jumps to it, resets elapsed time and restarts. It starts on tab 0.
3. IX2 on tab activate (a-49 for tab 1, a-51 for tab 2):
   - Initial state for both panels: opacity 0, scale .98, translateY .5rem.
   - Tab 1 in: wrp-2 scale→1 (500ms ease), opacity→1 (400ms ease), y→0 (400ms ease), all with **600ms delay**. wrp-1 runs the same with a **900ms delay**.
   - Tab 2 in: wrp-3 at 600ms delay, wrp-4 at 900ms.
   - On tab deactivate (a-50/a-52): both panels go to opacity 0, scale .98, y .5rem over 200ms ease.

---

## 5. Stats (`section.section_home-stats`)
**Layout @1440.**
- Section: bg #f0f0f0, padding-top 2.5rem (37.42px).
- `.padding-global` > `.container-large` > `.stats-mob_content` > `.stats-mob_wrp`: **grid 3 cols x 299px, gap 2rem (29.93)**, 957px wide, centered (x 242–1199).
- Then `.home-stats_spacer` (padding-top 2.5rem = 37.4px). Total height 183px.

Each stat (`.stats-mob_content`, flex column centered):
- Number `.stats-mob_num-txt`: Ivypresto 2.75rem (41.16px) / lh 1 / centered / black, on a **white box** (padding .25rem 1rem .5rem). Box height 52.4px.
- Divider `.stats-mob_divider-wrp` (4rem wide, 1.5rem tall, overflow hidden): a vertical 1px black line (border-right) and, at its bottom, a **9x9px black dot** (`bottom:-5px`, centered).
- Label `.stats-mob_txt`: 1.3rem (19.46px) / lh 1.3 / 400 / centered, with border-top 1px solid black across the full 299px column width and padding .5rem 1rem 0.

Copy: "$3.5B+ earned" / "by Teachable creators"; "100M+ students" / "served on Teachable"; "180+ countries" / "using Teachable".

**@1280.** Grid 3x292px, number 40.21px, label 19.01px.

**≤767 (390).**
- Section padding 48px 0. Spacer hidden.
- The wrapper becomes a flex column, align flex-start, gap 16px, margin-bottom -2rem.
- Each row becomes a horizontal flex: number box (19.5px Ivypresto, left aligned, padding 4px 8px 8px) → divider (2rem wide, 1.1rem tall, now a **horizontal** 1px line with a 6x6 dot at the right end) → label (13.65px/17.7, left, no top border, padding 0 8px).

---

## 6. Demo CTA (`section.section_demo-cta`)
- Section: bg #fff, padding 2rem 0 1rem (29.93/14.97), overflow hidden.
- Holds `.home-hero_btn-wrp.is-padding` (flex centered) with `a.button-black` "Explore demo" → `/watch-demo` (154x51.4 @1440, centered).
- ≤767: margin-top 1rem, padding 0 2rem, button full width (294x54 @390).

---

## 7. Teach / products (`section.section_teach`)
**Assets (475x391 each):**
- `/assets/68e2fc0c548905717e540783_3ce1870c653da1545e1d5a5c6e2f0992_teachable-product-courses.webp`
- `/assets/68e2fc0c780c5ef76265386b_2d591819928fd2df51b40360964a5c1c_teachable-product-coaching.webp`
- `/assets/68e2fc0c8ae5b217815396ad_272dd01b1fa967d3f7374c715975249e_teachable-product-downloads.webp`
- `/assets/68e2fc0c583104a037c344a8_676e42d496d15ad0dc8039bf6d1db4e5_teachable-product-membership.webp`

**Layout @1440.**
- Section: white, padding 8rem 0 (119.73), overflow hidden. Height 1055.
- `.teach_wrapper`: flex column, gap 4rem (59.87).
- `.teach_header-wrp` (centered, max-width 68rem = 1017.7px, gap 1.5rem):
  - `h2.heading-style-h1` "Teach in every way your students want to learn": 5rem / lh 1 / centered, 2 lines.
  - `p` "Our products give students more choice in how they engage—live or on-demand, video or text, at home or on-the-go—while giving your business more sustainable ways to grow.": 1.3rem / 1.5 / centered, 2 lines.
- `.teach_grid`: **4 cols x 299.3px, gap 2rem**. Each card `a.teach_content` (flex column):
  - `.teach_frame-img-wrp`: radius .6rem, overflow hidden, bg `linear-gradient(180deg,#f0f0f0,#bebebe)`. Image width 100%, height auto (299.3x246.4).
  - `.teach_txt-wrp`: flex column, gap 1rem, padding 1.5rem 1rem 0 0.
  - Title row (flex, gap .5rem, align center): `h3.teach_frame-title` Ivypresto 2rem (29.93px) / lh 1, then a 1rem arrow icon.
  - `p.text-size-medium`: 1.15rem (17.21) / 1.5.
  - Hover: `.teach_content:hover .teach_frame-title { text-decoration: underline }`.
  - Cards:
    1. "Online Courses" → `/online-courses`: "Maximize student engagement with videos, quizzes, drip content, and mobile access."
    2. "Coaching" → `/coaching`: "Offer one-on-one or group online coaching sessions, with easy scheduling and payment management."
    3. "Digital Downloads" → `/digital-downloads`: "Sell digital products like templates, guides, and resources your audience can instantly access and use."
    4. "Memberships" → `/memberships`: "Build recurring revenue and stronger community with flexible subscription models."
- `.teach_btn-wrp` (centered): `button-sso` "Start for free".

**@1280.** Grid 4x283.4, image 283x233, h2 73.11px.

**≤991.** Grid 2 cols, row-gap 3rem.

**≤767.** Grid gap 2rem 1rem, title 1.5rem, text wrapper gap .5rem with padding-top 1rem.

**≤479 (390).**
- Section padding 48px 0. Wrapper gap 32px.
- h2 42.9px (11vw), 3 lines. p 15.6px/23.4.
- Grid is 1 column, row-gap 48px. Image 342x281.5. Title 31.2px (8vw). Text 15.6px.
- Button full width.

---

## 8. Payments CTA (`section.section_payments-cta`)
**Assets:** `/assets/6a479058f9d4bebff3e9174e_material-icon-refresh-black.svg` (tag icon), `/assets/6a4e8423b9ebadf800b9ce5b_payments_banner_2x.webp` (520x360 natural).

**Layout @1440.**
- Section padding 0 2rem 8rem (bottom 119.73). Height 581.
- `.container-large` > `.payments-cta_grid`: grid `727.4px 484.9px` (≈1.5fr 1fr), gap 0, padding 0 2rem 0 3rem (29.93 right, 44.9 left), bg `linear-gradient(135deg,#f8ffc6,#e6ff32)`, radius 1rem (14.97), overflow hidden. Height 461px.
- Left `.payments-cta_content-l`: flex column, justify center, gap 1rem, padding 4rem 0 (59.87).
  - Tag `.global_tag-wrp`: white, radius .4rem (5.99px), padding .65rem 1rem, gap .25rem. Icon 12x16 plus "Product Update": .875rem (13.1px) / 1.5 / 600 / uppercase.
  - `h2.heading-style-h3` "Teachable Payments: the checkout you've been waiting for": 3rem (44.9px) / 1.1, 2 lines.
  - `ul.list`: 3 `li`, each a div with body 1.3rem / 1.5, li margin-bottom .25rem. **The list markers are hidden** (each line starts with a literal "→ "). Lines:
    - "→ Sell globally with 35+ local payment methods and checkout experiences."
    - "→ Automate taxes with sales tax, VAT, and GST handled across 45+ countries"
    - "→ Capture more revenue with lower fees and built-in subscription recovery."
  - `.payments-cta_btn-wrp` (margin-top 1rem): `a.arrow-btn` "Discover what’s new" → `/payments` (223.7x44.9). Label 1rem/600 white. Yellow 2rem circle with a 1rem arrow. Arrow SVG: viewBox `0 0 13 12`, path `M12.7656 6.16705C13.0745 5.87022 13.0759 5.38761 12.7687 5.08911L7.76258 0.224769C7.45537 -0.0737306 6.95588 -0.075093 6.64694 0.221726C6.33802 0.518548 6.3366 1.00115 6.64381 1.29965L11.0937 5.62352L6.61859 9.92304C6.30967 10.2198 6.30825 10.7024 6.61546 11.001C6.92265 11.2995 7.42213 11.3008 7.73108 11.004L12.7656 6.16705ZM0.00222699 5.59326L0 6.35547L12.2071 6.38877L12.2093 5.62656L12.2115 4.86435L0.00445397 4.83105L0.00222699 5.59326Z`.
- Right `.payments-cta_content-r`: flex column, justify flex-end, align center. Image 478.9x331.7 sits flush with the bottom edge.

**≤991.** Grid becomes 1 column. Left padding-bottom 2rem.

**≤767 (390).**
- Section padding 0. The grid loses its radius (full-bleed) and gets padding 0 24px.
- Left padding 64px 0 32px. h2 31.2px/34.32. List lines 15.6/23.4. Arrow button 235x48.
- Image 342x236.8 at the bottom. Total 741px.

---

## 9. "Why" sticky scroll scene (`div.why_scroll > section.section_why`)
**Assets:**
- Background photo `/assets/68beb37e8514967a4d013c17_temp-stock-4.webp` (1200x1600, object-fit cover)
- Card image `/assets/68e2f9bc11c85940d12845ff_ead53d9e008958202ec4680f95334916_teachable-quiz.webp` (902x598)

**Structure.**
```
div.why_scroll (min-height 280vh; 2520px @900vh)
  section.section_why (position:sticky; top:0; min-height:100dvh; display:flex; center; padding 0 2rem; overflow hidden; color white)
    div.why_bg-color-wrp (absolute inset 0; bg #1c4774; overflow hidden)    <- scaled by IX2
      div.why_bg-img-wrp (100%x100%; radius .6rem; overflow hidden; transform scale(1.1))  <- scaled by IX2
        img.why_bg-img (cover)
      div.why_bg-blur (absolute inset 0; backdrop-filter: blur(12px))
    div.why_wrp (flex column; gap 4rem; relative; width 100%)
      div.why-header_wrp (flex column centered; gap 1rem)        <- slides right on scroll
        .container-large > .why-header_text-wrp (max-width 64rem = 957.9px; gap 1rem; left aligned)
          h2.heading-style-h1  "Why 150,000 industry leaders choose Teachable" (5rem/1, white, 2 lines)
          p.max-width-xlarge   "Student success drives business success, and you need a platform designed for both." (1.3rem/1.5 white)
      div.why-card-ani-wrp (absolute inset 0; flex centered; padding 0 2rem)
        div.why-card_ani-container (relative; width 100%; max-width 86rem; height 28rem = 419px)
          div.why-card_ani (absolute; left 0; bottom 0; z 2; width 23%; height 38%; radius .6rem; flex column; gap 1rem)   <- grows
            div.why-card_circle (absolute; aspect 1; bg #fff; radius full; opacity 0; inset 0 0 0 -50%; margin auto 0)  <- white disc that becomes the card bg
            div.why-card_grid (flex; space-between; overflow hidden; relative; height 100%)
              div.why-card_content-left (width 100%; height 100%; flex column; justify flex-end; gap 1rem; padding 2.5rem 0)
                h3.why-card_text-scale "Made for the modern<br>learner" (Ivypresto 2rem → 3rem via GSAP, lh 1.1)
                div.why-card_text-wrapper (width 35rem; height 0 → 14rem; overflow clip; flex column gap 1rem)
                  p.why-card_text-ani "You’re serious about education. We’re serious about engaging your students and turning them into loyal customers."
                  .global_list-wrp: → Innovative student dashboard / → Highly-rated mobile app / → Drip content / → Quizzes and completion certificates
              div.why-card_content-right (width 0% → 50%; height 100%; radius .6rem; bg linear-gradient(180deg,#f0f0f0,#bebebe))
                div.why-card_frame (opacity 0→1; radius .6rem; overflow hidden) > img.why_grid-img (cover)
      div.why_grid-wrp (relative; width 100%)       <- slides left on scroll
        div.why_grid (grid 4 x 299.3px; gap 2rem; max-width 86rem; centered)
          div.why-card (empty placeholder: the animated card starts here)
          div.why-card > h3.why-card_text-small "More time for<br>what matters" (Ivypresto 2rem/1.1 white)
          div.why-card > h3.why-card_text-small "Business growth<br>that lasts"
          div.why-card > h3.why-card_text-small "Made to adapt<br><em>and</em> evolve"
```
Initial geometry @1440: the bg-color panel is scaled 0.9 (1296x810 inside 1440x900). The header text block is at y≈290. The 4-column caption row is at y≈544. The animated card starts at 296x159 in grid column 1 (bottom-left of a 1287x419 box).

**Motion: Webflow IX2 "while scrolling in view" (scrubbed, smoothing 86).** Let `p = (scrollY − whyScrollTop) / (0.84 × whyScrollHeight)`, clamped to 0–1. This is measured: at 900px viewport p reaches 1 at offset 2117px of 2520. Keyframes in % of p:

| p% | `.why-header_wrp` | `.why_grid-wrp` | `.why-card_ani` | `.why-card_circle` | content-left / right | `.why-card_text-wrapper` | `.why-card_frame` |
|---|---|---|---|---|---|---|---|
| 0–2 | x 0% | x 0% | w 23% h 38%, color #fff | opacity 0, scale (0.6) | L 100% / R 0% | h 0 | 0 |
| 3 | | | color → #000 | opacity → 1 | | | |
| 6 | | | | scale 0.6 | | | |
| 45 | | | | | L 100% / R 0% | h 0rem | |
| 50 | **x 100%** (exits right) | **x −100%** (exits left) | | | | | |
| 55 | | | **w 100% h 100%** | | **L 50% / R 50%** | | 0 |
| 56 | | | | **scale 1.7** | | **h 14rem** | **1** |

Values interpolate linearly between keyframes, and each property interpolates only between the keyframes where it is defined. The card text color goes white→black between 2% and 3% as the white circle fades in behind it, so the card reads as a white panel growing out of the bottom-left. After 56% the scene holds still until the section un-sticks.

Measured samples @1440 (offset = scrollY − whyScrollTop):
- off 60: header x +22.8px, card 311x163.
- off 300: header +347px, card 522x218, circle scale .78.
- off 780: header +999px, card 946x330.
- off 1020: L 84.5% / R 15.5%, text-wrapper 3.94rem.
- off 1140: L 56% / R 44%.
- off ≥1260: final (header +1380px, card 1287x419, L/R 50/50, frame opacity 1, circle 1.7).

Other scroll links:
- `.why_bg-color-wrp` scale (IX2 a-13, its own in-view progress, offsets 50/50): **0.9 → 1** across the first 10%. Measured: 0.9 at off −900 (section top at viewport bottom), 1.0 by off −660.
- `.why_bg-img-wrp` scale (IX2 a-23 on `.why_scroll`): **1.1 → 1** linearly from p'=0 to 90%. Measured: 1.1 at off −900, 1.0 at off ≈ +2200 (full pass of the section through the viewport).
- **GSAP** (inline script):
```js
gsap.to(".why-card_text-scale", { scrollTrigger:{ trigger:".why_scroll", start:"10% top", end:"46% top", scrub:0.15 }, fontSize:"3rem", ease:"power2.out" });
```
  This takes the font size from 2rem (29.93px) to 3rem (44.9px).

**@1280.** why_scroll is 2240px (280vh of 800). h2 73.11, card container 1163x409.

**≤991.**
- `.why_scroll` min-height auto. `.section_why` becomes position relative (not sticky), padding 6rem 0.
- `.why_grid-wrp` and `.why-card-ani-wrp` are hidden, so only the header over the photo remains.
- Bg-img scale 1. Blur 6px.

**≤767 (390).**
- Section padding 64px 24px, height 320px. Header left aligned. h2 42.9px, 3 lines. p 15.6px.
- The bg-color panel still scales from 0.9 (IX2 a-13 runs at all breakpoints): measured `matrix(0.90029…)` at load. The card scene's content moves into `.section_why-card` (`.why_card-grid-mobile`, §10).

---

## 10. Why cards (`section.section_why-card`)
**Assets:**
- `/assets/68e2f9bd78675ff9624f0337_312443428e5accebfa7ef0601f27ed2f_teachable-ease-of-use.webp` (909x606)
- `/assets/68e2fa6d2f5c74270c78f226_610e5346b48fabfc73b14d5f4e4d4930_teachable-business-growth.webp` (1440x960)
- `/assets/68e2fd016e340a7e2edcd447_4450238b7ede5d143aefb69007202a91_teachable-zap.webp` (1440x960)
- Mobile-only first card: `/assets/68e2f9bc11c85940d12845ff_ead53d9e008958202ec4680f95334916_teachable-quiz.webp`

**Layout @1440.**
- Section: bg #fff, **margin-top −17vh (−153px @900)** so it slides over the bottom of the sticky why scene. Padding-bottom 8rem. Height 1605.
- `.why_grid-card-wrp`: flex column, **gap 99px** (measured; CSS gap is defined per breakpoint).
- 3 rows `.why_card-grid`: grid 2 x 643.56px, gap 0, height 429px. Rows alternate image-left / text-left:
  - **Image cell** `.why_grid-content-right`: bg #f0f0f0, radius .6rem, overflow hidden. Img cover, 643.6x429.
  - **Text cell** `.why_grid-content-left`: flex column, justify center, gap 1rem, padding 0 4rem (59.87):
    - `h3.why-card_title`: Ivypresto 3rem (44.9) / 1.1.
    - `p`: 1.3rem / 1.5.
    - `.global_list-wrp` (arrow list, 19.46px/29.18).
1. Image (ease-of-use) | text:
   - "More time for<br>what matters"
   - "We automate the operational headaches so you can keep growing your business without adding busywork."
   - → Drag-and-drop course builder
   - → Built-in AI creation and translation tools
   - → Tax calculated and remitted automatically in 45+ countries
   - → Daily payouts, no reserve held back
   - → Assisted migration and dedicated support
2. Text | image (business-growth):
   - "Business growth that lasts"
   - "Growth isn’t a one-time transaction. We help you build systems to acquire, convert, and retain at scale."
   - → Automated upsells and order bumps
   - → Cross-promotional tools built into dashboard
   - → Coupons and flexible payment options
   - → 35+ local payment methods
3. Image (zap) | text:
   - "Made to adapt<br><em>and</em> evolve" (the source includes a zero-width joiner)
   - "No two businesses are the same. Teachable flexes to fit your ideal workflow, future goals, and unique student needs."
   - → Intuitive 3rd-party app integrations
   - → Embeddable product cards and buy buttons
   - → Developer-friendly tools like APIs and webhooks

**≤991.**
- margin-top 0, padding-top 6rem, gap 4rem.
- Card title 2.25rem. Text cells padding 0 2rem. Image cells transparent, image `object-fit:contain`.
- `.why_card-grid-mobile` becomes visible as a 4th card at the top: "Made for the modern<br>learner", "You’re serious about education. We’re serious about engaging your students and turning them into loyal customers.", list → Innovative student dashboard / → iOS and Android mobile apps / → Drip content / → Quizzes and completion certificates, plus the quiz image.

**≤767 / 390.**
- Padding 48px 0 (padding-top 3rem). All grids are 1 column with gap 24px. Text first, then image, for every card.
- Title 35.1px/38.61. Text cell padding 0 32px 0 0. Images 342x227.
- Card gap 48px. Section height 2615.

---

## 11. Global scale: sticky 3-step slider (desktop/tablet `div.scale_scroll[data-fs-el=gsap-slider-instance]`)
**Assets:** 9 flags, each 512x512 SVG, rendered 51.9px inside 74.8px tiles:
- us `68d2c6d5b0fc8c729f84c732_2fe4c7e35a3ebbafd940ad130fb84c11_teachable-flag-us.svg`
- it `68d2c6d5edeb18f3aa7e6648_teachable-flag-it.svg`
- ae `68d2c6d5aa321b1ddf67748f_teachable-flag-ae.svg`
- fr `68d2c6d5f2f2058a2589834f_teachable-flag-fr.svg`
- es `68d2c6d5e5a86118515ff805_teachable-flag-es.svg`
- de `68d2c6d5fe2e5883e6d7fc92_teachable-flag-de.svg`
- ja `68d2c6d5f08fdd7fd0a7772e_teachable-flag-ja.svg`
- gb `68d2c6d5347ef46d02bff6ba_teachable-flag-gb.svg`
- au `68d2c6d50cd7ef0deab5f723_teachable-flag-au.svg`

Plus the CSS background "o" glyphs, which are **missing locally** (see §20).

**Structure.**
```
div.scale_scroll (relative; min-height 400vh = 3600px@900)
  section.section_scale (sticky top 0; z 1; min-height 100dvh; padding 2rem; flex column space-between; overflow hidden)
    div.scale_bg-wrapper-1 (absolute inset 0)
      9 x div.scale_badge-wrapper.is-1..is-9 (absolute inset 0; margin auto; 5rem x 5rem; opacity 0; flex centered)  <- burst outward
        div.scale_badge-content (100%; padding .7rem; 1px #f0f0f0 border; radius .6rem; relative)  <- floats
          img.scale_badge
      div.scale_progress-wrp (absolute; bottom 4rem; height .25rem... (3.7px); bg #f0f0f0; max-width 86rem; centered)
        div.scale_progress-bar (bg #000; height 100%; width 0→100%)
    div.scale_wrapper (flex 1; max-width 86rem; relative)
      3 x div.scale_content[data-fs-el=small-animation-side] (absolute inset 0; margin 0 auto; max-width 58rem = 868px; flex column centered; gap 1.5rem; centered text)
```
Content of the 3 steps. Heading `.scale_heading` is Ivypresto 5rem / lh 1 (74.83px), centered, width ~694px. Paragraph is 1.3rem / 1.5, centered.
1. `h2.scale_heading.is-1`: "Think bigger and gr<span class="span_h2-o">o</span>w at a <em>global</em> scale". p: "Teachable is part of Hotmart Company, a global leader in the creator economy. Together, Teachable and Hotmart support more than 200,000 creators, so we know how to grow at a global scale and help you do it, too."
2. `h2.scale_heading.is-2`: "Internati<span class="span_h2-o is-international">o</span>nal tax handling". `p.max-width-medium`: "Teachable automatically collects and remits sales tax, VAT, and GST across 45+ countries for your transactions."
3. `h3.scale_heading`: "Automatic vide<span class="span_h2-o is-video">o</span> subtitles <span class="scale_language-text">and translation</span>". p: "Generate video subtitles and translate them into over 70 other languages, making your content instantly more accessible and marketable."

**Decorative "o" glyph.**
- `.span_h2-o`: `color:transparent; background:url(teachable-char-o-long.svg) no-repeat 50% 69% / 100%; margin:0 -.7rem 0 -.2rem; padding:0 .2rem`.
- `.is-international`: margin-left 0.
- `.is-video`: uses `teachable-char-o.svg`, background-size 92%, margin-left 0.
- ≤991: margin -.1rem/-.5rem; is-video bg-pos 50% 68% / 87%.
- ≤767: bg-size 96% (is-video 81%), margin-right -.4rem.
- ≤479: 92% (is-video 79%, margin-left -.2rem).

**Motion.**
1. **Step switching** (custom GSAP code in gsap.js). For i = 0..2, `ScrollTrigger.create({trigger:.scale_scroll, start:\`top+=${i*innerHeight}px top\`})`:
   - onEnter(i) and onEnterBack(i) show step i. onLeaveBack shows i−1. onLeave shows i+1 (except the last).
   - Showing step `t` (direction forward = true/false):
     - The outgoing step tweens to `opacity:0, y: forward?-50:50` (0.4s `power2.in`), then gets `.hide` (display:none).
     - The incoming step is set to `opacity:0, y: forward?50:-50`, `.hide` is removed, then it tweens to `opacity:1, y:0` (0.6s `power2.out`, delay 0.1).
     - On first show with no visible step, it runs after a 500ms timeout.
   - The initial state is step 0 visible (opacity 1, y 0). The other steps have `.hide` and opacity 0, y 50.
   - Measured @900vh: step 1 visible until off 900, step 2 from 900 to 1800, step 3 from 1800 onward.
2. **Progress bar** (IX2 a-16, scrubbed). Progress p = off / H (H = 3600). Width 0% at p=4%, then linear to 100% at p=65%. Wrapper opacity 1 at 69%, 0 at 70%. Measured: 7.08% at off 300, 48.07% at 1200, 100% at ≥2400, hidden from ≈2520.
3. **Flag burst** (IX2 a-11, "scroll into view" when `.scale_scroll` reaches 50% of the viewport, i.e. off ≈ −450):
   - Initial: all tiles at translate(0,0) and opacity 0, stacked at the center.
   - Then, together, 500ms `outQuad` (≈ `power1.out`) moves to these translate values (% of the 5rem tile), with opacity → 1 over 500ms `ease` after a **100ms delay**:
     - is-1 (−350%, −320%); is-2 (0, −350%); is-3 (400%, −250%); is-4 (680%, −100%); is-5 (430%, 250%); is-6 (150%, 340%); is-7 (−180%, 260%); is-8 (−400%, 300%); is-9 (−680%, 0)
   - Flag order: is-1 us, is-2 it, is-3 ae, is-4 fr, is-5 es, is-6 de, is-7 ja, is-8 gb, is-9 au.
   - Scroll out of view (a-12): opacity → 0 over 300ms `ease`, then all translates reset to 0 instantly.
4. **Floating drift** (rAF, inline script). Each `.scale_badge-content` gets random phases x,y ∈ [0, 2π) and speeds 0.005 to 0.008 rad/frame. Each frame: `translate(sin(x)*16px, cos(y)*16px)`. Uses `will-change: transform`.
5. **Language cycler** (inline script) on `.scale_language-text` (white-space nowrap):
   - Cycle: "and translation" first, then a shuffled set of ["and traducción","and ترجمة","and traduction","and traduzione","and Übersetzung"].
   - Each step: fade opacity to 0 (600ms ease-in-out), swap the text, fade to 1, wait 800ms. Element is `display:inline-block; text-align:center`.

**≤991.**
- `.scale_scroll` height `calc(100vh + 3000px)`. Wrapper width 80%. Heading 3.5rem.
- Badges are visible (opacity 1) at 4rem tiles with fixed positions: is-1 top -36% left -50%; is-2 -40%/5%; is-3 -30%/60%; is-4 -10%/80%; is-5 30%/60%; is-6 36%/30%; is-7 30%/-20%; is-8 34%/-60%; is-9 left -80%.
- Progress bar width 90%, bottom 2rem.
- The step code switches the right-side axis to x when `innerWidth<750` (±100px instead of ±1000px). This only matters for `long-animation-side`, which does not exist on this page.

**≤767.** `.scale_scroll` is `display:none` and `.section_scale-mob` is shown instead (below).

### 11m. Mobile scale (`section.section_scale-mob`, ≤767)
@390: padding 32px 0, then `.padding-global` (24px) > `.scale-mob_wrp` (flex column, center, gap 64px). Order:
1. Content 1. h2 "Think bigger and gr[o]w at a <em>global</em> scale" in 39px (10vw) / lh 1 centered, 3 lines. p: "We're a part of Hotmart Company—and together we make up the <strong>#1 worldwide leader in the creator economy</strong>—so we know how to win at a global scale and help you do it, too" (15.6/23.4 centered).
2. Badge row: us, it, fr, es. Flex centered, gap 16px. Tiles 56x56 (3.5rem), white bg, 1px #f0f0f0 border, radius .4rem (6.4px), padding 4.8px.
3. Content 2. h2 "Internati[o]nal tax handling". p "Teachable <strong>automatically collects and remits</strong> sales tax, VAT, and GST across 45+ countries for your transactions."
4. Badge row: de, ja, gb, au.
5. Content 3. `.scale_heading-wrp` (column) containing `h2.is-mob-1` "Automatic vide[o] subtitles" plus `h2.is-mob-2` holding the cycling `.scale_language-text`. Then p "Generate video subtitles and translate them into over 70 other languages, making your content instantly more accessible and marketable."

Motion (IX2 a-54, scroll into view at 10% offset; small/tiny only):
- Badges start at translateX is-1 −40vw, is-2 −55vw, is-3 +55vw, is-4 +40vw.
- They slide to 0: is-2 and is-3 over 600ms `ease`; is-1 and is-4 over 600ms `ease` after a 200ms delay.
- Scroll out (a-55): back to the start offsets over 200ms ease.

---

## 12. AI automations (`section.section_smart`)
**Assets (616x452):**
- `/assets/692301d70b42ca77c9ed64a4_ai-outline-teachable.webp`
- `/assets/6923020ec5ae8e0e680dd555_ai-quiz-teachable.webp`
- `/assets/69230240dd5644a79fd72501_ai-subtitles-teachable.webp`

**Layout @1440.**
- Section: white, overflow hidden. `.padding-global.padding-section-large` (8rem 2rem). Height 905.
- `.smart_wrapper`: flex column, gap 4rem, overflow hidden.
- `.smart_header-wrp`: flex row, space-between, align center, gap 4rem.
  - Left `.smart_header-text-wrapper` (453.8px):
    - `.smart_ai-wrapper` (flex, gap .5rem, relative, overflow hidden) containing `h2.smart_ai-text` "AI automations" (Ivypresto 4rem/1.1 = 59.87/65.85), a 3rem sparkle SVG icon (`transform: rotateY(180deg)`, black), and `.smart_ai-shimmer`.
    - Then `h2` "that work with you".
  - Right `p.max-width-large` (44rem = 658.5px): "Our AI tools give you more space to drive the education, connection, and transformation that set Teachable businesses apart." (1.3rem/1.5)
  - Sparkle SVG: `viewBox="0 0 39.907 39.813" fill="currentColor"`, paths:
    - `M31.734,22.493l-7.852-2.648c-1.844-.622-3.292-2.07-3.914-3.914l-2.648-7.852c-.345-1.023-1.793-1.023-2.138,0l-2.648,7.852c-.622,1.844-2.07,3.292-3.914,3.914l-7.852,2.648c-1.023.345-1.023,1.793,0,2.138l7.852,2.648c1.844.622,3.292,2.07,3.914,3.914l2.648,7.852c.345,1.023,1.793,1.023,2.138,0l2.648-7.852c.622-1.844,2.07-3.292,3.914-3.914l7.852-2.648c1.023-.345,1.023-1.793,0-2.138Z`
    - `M39.503,7.988l-4.132-1.393c-.97-.327-1.732-1.089-2.059-2.059l-1.393-4.132c-.182-.539-.943-.539-1.125,0l-1.393,4.132c-.327.97-1.089,1.732-2.059,2.059l-4.132,1.393c-.539.182-.539.943,0,1.125l4.132,1.393c.97.327,1.732,1.089,2.059,2.059l1.393,4.132c.182.539.943.539,1.125,0l1.393-4.132c.327-.97,1.089-1.732,2.059-2.059l4.132-1.393c.539-.182.539-.943,0-1.125Z`
- `.smart_grid`: **3 cols x 389.1px, gap 4rem**. Each `a.smart_content` → `/ai-hub` is a flex column with gap 2rem:
  - `.smart_image-wrapper`: radius .6rem, overflow hidden. Img cover, `object-position:50% 0`, 389x285.5.
  - `.smart_text-wrapper` (gap 1rem): `h3.smart_title-text` Ivypresto 2rem/1.1 (29.93/32.93), then `p.text-size-medium`.
  - Hover: `.smart_content:hover .smart_title-text { text-decoration: underline }`.
  - Cards:
    1. "Course starter": "You're the expert. Get right to teaching and generate a ready-to-use curriculum in seconds with our AI course starter, designed for easy, bite-sized learning."
    2. "Quiz generator": "Flip your insightful course material into engaging quizzes with our built-in generator that naturally complements and elevates your content."
    3. "Automatic subtitles & translations": "Your video content deserves a bigger audience. Expand your reach with auto-generated subtitles and translations in 70+ languages."

**Motion: shimmer** (CSS) on `.smart_ai-shimmer` (absolute, full height, width 100%, `background-image: linear-gradient(310deg,#fff0 30%,#fff 48%,#fff0 70%)`):
```css
.smart_ai-shimmer { animation: shimmerMove 4.5s ease infinite; }
@keyframes shimmerMove { 0%{transform:translateX(-100%)} 45.45%{transform:translateX(100%)} 100%{transform:translateX(100%)} }
```

**≤991.** Header becomes a column (align start, gap 1.5rem, padding-bottom 2rem). Grid gap 1rem. Image margin-bottom .5rem. Text wrapper padding-right 1rem.

**≤767.** Grid 2 cols, row-gap 3rem. Title 1.5rem.

**390.**
- Padding 48px 24px. "AI automations" 39px/42.9 (the CSS sets 3rem at ≤767 and 10vw at ≤479). Icon 1.75rem (28px).
- Grid 1 column, gap 48px. Image 342x251. Title 24px/26.4. Text 15.6/23.4. Section height 1639.

---

## 13. Success stories (`section.section_stories`)
**Assets (avatars 160x160):**
- `68e472412b52873214f161ed_af941bac35e86470a5fc50c0e4d11805_DanGeorge.webp`
- `68e472411eac276ecb2a885d_acd3419cdc23d64a536b9362a0f77c55_Headshot.webp`
- `68e472413569b297952cca46_913afd2f27884db7e271d63afae0dc26_AnnaGeiger.webp`
- `68e47241731fcd597b0e34c7_5eac61fb053a8becdbd0a29455c59bb5_LeilaGharani_xel.webp`
- `68e472416ae55881ceb0b6ab_a2de2377ce4b09a8b5f8b765899567ca_RazvanCiobanu.webp`
- `68e696151b1e1847cbe8c324_6f744f022c2b792ccc48c4e542526f9f_FrancescoCositore.webp`

**Layout @1440.**
- Section: white, padding 8rem 0, overflow hidden. Height 991.
- `.stories_wrp`: flex column, gap 3rem (44.9).
- Header `.stories_header-wrp` (container 86rem, centered, gap 1rem):
  - `h2` "Teachable success stories write themselves" (4rem/1.1 centered, 1 line, 1026px).
  - `.text-block-5` (max-width 768px): "From language schools to reading specialists and data experts, creators in 180 countries use Teachable to share their expertise through courses, coaching, and memberships, and build thriving education businesses." (1.3rem/1.5 centered, 3 lines)
- `.stories-slider_instance[fs-swiper-element=stories]`: flex column, gap 2rem.
  - `.stories-slider_list-wrp.swiper`: **width 110%; left −5%** (1584px from x −72), overflow clip, min-height 1rem.
  - Slides `.stories-slider_slide.swiper-slide`: **width calc(20% − 12.8px) = 304px**, margin-right 16px (Swiper spaceBetween), padding 2rem (29.93), 1px #f0f0f0 border, radius .6rem, flex column, gap 1.5rem (22.45), overflow hidden. `transition: background-color .2s ease`, and **hover bg #f0f0f0**. Height 462px.
    - Author row (flex, gap 1rem): 5rem (74.8px) round avatar (`object-fit:cover`), with a `.stories-slider_author-bg` radial `circle,#fff 20%,#0000 90%` behind it on most slides.
    - Name (1rem/1.5/600) above company (.875rem/1.5/400).
    - Text block (flex column, gap .5rem, flex 1): headline `.stories-slider_skimmer-text` (1.3rem/1.5/**500**), quote `p.stories-slider_quote-text` (1rem/1.5, **opacity .7**).
    - Footer link row: "Explore school" (.875rem, underline on hover) + .75rem arrow icon.
  - Navigation `.stories-slider_navigation` (flex centered, gap 1rem, padding 0 2rem): `button.stories-slider_previous` (flipped arrow) and `button.stories-slider_next`, each a 3rem (44.9px) black circle with a white arrow.
- Slides in DOM order:
  1. **Dan George**, FlightInsight, "10,000+ Students": "Teachable gave me the structure to scale beyond the classroom. What started as a few dozen students has grown into 10,000+ pilots worldwide. My courses now run 24/7, serving pilots in every time zone, while I focus on teaching and Teachable handles the technology." → https://flightinsight.teachable.com/ (straight double quotes; no radial bg on this avatar)
  2. **Huzan R & Nicoleta S**, Speak Norsk, "Made Simple": “We realized we couldn’t do everything on our own—teaching, managing operations, and course delivery. That’s when Teachable came in. The platform made it simple to create and deliver our programs, and even let us offer a free course so students could get comfortable before enrolling.” → https://speaknorskonline.teachable.com/
  3. **Anna Geiger**, The Science of Reading, "Revenue Engine": “I’ve been using Teachable since 2017, and it continues to be a major revenue generator for my business. It’s easy to create and upload content, and I never have to worry about tax compliance or payment processing. I’ve tried other platforms—Teachable is hands down the best for me and my students.” → https://anna-geiger.teachable.com/
  4. **Leila Gharani**, XelPlus Academy, "Global Reach": “With students from 188 countries, tax compliance could have been a nightmare. Teachable handles it all, so instead of drowning in admin work, we can focus on helping our members upgrade their data skills. The platform makes our global reach possible.” → https://courses.xelplus.com/
  5. **Razvan Ciobanu**, Voxyde, "Peace of Mind": "Teachable is consistently monitored and delivers excellent uptime As an instructor, that peace of mind is invaluable. On top of that, Teachable’s built-in tax handling has been a huge advantage, freeing me up to focus more on creating content and supporting my students." → https://voxyde.teachable.com/
  6. **Francesco Cositore**, Vaporetto Italiano, "Has Been Essential": "Teachable has been essential for the growth of my business and for reaching thousands of students all over the world. It automatically takes care of payments, taxes, and enrollments, freeing me from administrative tasks so I can fully focus on the creative side of my job." → https://vaporettoitaliano.teachable.com/

**Swiper** (stories-slider.js), Swiper 11 bundle:
```js
new Swiper(el, { slidesPerView:"auto", centeredSlides:false, spaceBetween:16, autoHeight:false, grabCursor:true, loop:true,
  autoplay:{ enabled:true, delay:2000, pauseOnMouseEnter:true }, keyboard:{ enabled:true, pageUpDown:false },
  watchSlidesProgress:true, observer:true, observeParents:true, resistance:false });   // speed: default 300ms
```
Prev and next buttons call `slidePrev()` and `slideNext()`. The live effective autoplay has `disableOnInteraction:false` and `waitForTransition:true`.

**@1280.** h2 58.49, slide width ~255px (20% of 1408 − 12.8). Author name wraps to 2 lines.

**≤991.**
- Section padding 6rem 0. Header padding 0 2rem.
- List wrapper width 100%, left 0. Slides 40% wide. `.swiper { overflow: visible }`.

**≤767.** Section padding 4rem 2rem. Slides 100% wide.

**390.**
- Padding 64px 24px. h2 39/42.9 (3 lines). Paragraph 15.6.
- Slide 342x417, padding 24px, radius 9.6px. Avatar 80px. Name 15.6/600. Quote 15.6/23.4.
- Buttons 48px. Section height 904.

---

## 14. Pricing teaser (`section.section_home-pricing`)
**Asset:** `/assets/691ee172ca23ef48bdff028d_cta-image-phone-2.webp` (361x275).

**Layout @1440.**
- Section padding 0 2rem, overflow hidden. Height 662.
- `.home-pricing_grid`: **grid 3 x 389.1px, gap 2rem, padding 2rem, bg #f0f0f0, radius .6rem**.
- Card 1 `.home-pricing_content.is-2` (transparent, padding 3rem 3rem 3rem 2rem → measured 44.9/44.9/44.9/29.9):
  - `h2.home-pricing_heading` "We have plans to help you hit your biggest goals": Ivypresto 3.5rem (52.38px) / 1.1, 4 lines.
  - `p.text-size-medium` "The business you want tomorrow starts with the plan you pick today."
- Card 2 `.is-3` (bg `linear-gradient(180deg,#1c4774,#6f92b6)`, radius .6rem, padding 3rem 3rem 0, white text):
  - `.pricing_content-top` (height **15rem** = 224.5px, flex column space-between, gap 1rem):
    - `h3.pricing_title-text` "Flexible pricing tiers" (Ivypresto 2.3rem = 34.42px / 1.1)
    - p "Choose from Starter, Builder, and Growth plans, each with a 7-day free trial and a 30-day money-back guarantee."
    - `button-primary-new` white variant "Explore plans" → `/pricing`
  - Divider: 1px top border `rgba(255,255,255,.32)`.
  - `.home-pricing_img-wrp`: flex 1, radius .6rem .6rem 0 0, overflow hidden. Image cover, flush with the bottom.
- Card 3 `.is-4` (bg #fff, 1px #000 border, radius .6rem, padding 3rem):
  - Top (15rem): h3 "Scale smarter with Teachable Enterprise", p "Premium solutions for employee training and professional learning at scale. Book a call to build the best plan for your organization.", black variant `button-primary-new` "Contact sales" → `/lps/migrate-to-teachable`.
  - Divider: 1px #000.
  - Bullets (flex column, gap .5rem). Each is a 9x7 check SVG (`<svg viewBox="0 0 18 14"><path d="M1 8L6 13L17 1" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>`, nudged down .2rem) plus text at 1rem (14.97) / 1.5:
    - "All features, no limits"
    - "Single sign-on (SSO)"
    - "Advanced reporting"
    - "Seamless features for bulk sales and customer management"
    - "Native integrations and API to connect your full stack"
    - "Dedicated success manager, priority support, and white glove onboarding"

**Breakpoints.**
- ≤1320: `.pricing_content-top{height:auto}`, card padding 2rem.
- ≤992: card padding 1.5rem.
- ≤991: grid 2 cols with gap 1rem. Card 1 has padding-left 0. Image wrap aspect 3/2. Headings 2.5rem.
- ≤767: grid 1 col.
- 390:
  - Grid padding 48px 24px, gap 16px. Heading 46.8/51.48.
  - Card titles 39/42.9. Buttons full width.
  - Blue card 342x539. Enterprise card 342x663. Section height 1555.

---

## 15. Integrations hub (`section.section_hub`)
**Assets (96x96 SVGs, rendered 18px@1440):** grid order row 1 → row 2:
- Row 1: stripe `689d1d04db567f75f3a62261_app-hub-stripe.svg`, zapier `689d1d0462cca372190a9f08_app-hub-zapier.svg`, google analytics `689d1d031ce1b8ec9b345877_app-hub-google.svg`, mailchimp `689d1d034d45fa59de53e0c5_app-hub-mailchimp.svg`, google tag manager `689d1d030be3cefea715a32c_app-hub-google-tag.svg`, zoom `689d1d04e130432c21452468_app-hub-zoom.svg`, aweber `689d1d03069fb9e107602725_app-hub-aweber.svg`, pinterest `689d1d033b1293c193f48a60_app-hub-pinterest.svg`, unsplash `689d1d04993b4276e78c68e5_app-hub-unsplash.svg`
- Row 2: paypal `689d1d0487f229d324fbf8c5_app-hub-paypal.svg`, hotjar `689d1d037fd0b9b96a2d4300_app-hub-hotjar.svg`, "Microsoft OneDrive" `689d1d03db4b52548cb122f6_app-hub-google-one.svg`, tiktok `689d1d04a956c8a33c1e71d3_app-hub-tiktok.svg`, segment `689d1d0459fae685a34386f0_app-hub-segment.svg`, meta `689d1d03d25b95bae74b0354_app-hub-meta.svg`, dropbox `689d1d037a573eac3aeeed3c_app-hub-dropbox.svg`, google drive `689d1d03f8bf1534c5b7f992_app-hub-google-drive.svg`, calendly `689d1d03a956c8a33c1e71ae_app-hub-calendly.svg`

**Layout @1440.**
- Section: white, overflow hidden, padding 8rem 2rem. Height 881.
- `.hub_wrp`: flex column, gap 4rem.
- Header (centered, gap 1rem):
  - `h2` "Your stack, supercharged" (4rem/1.1)
  - `p.hub_paragraph` (max-width 58rem = 868px): "Connect Teachable with Stripe, Zapier, Mailchimp, Google Analytics, Zoom, and dozens of other apps you already use, and turn your tools into one system for growth."
- `.hub_grid`: **grid 9 cols x 143px, 2 rows x 143px, gap 0**, margin 1rem 0. Height 286.
  - Background lines `.hub_grid-bg`:
    - 10 vertical `.hub_grid-line-1`: 1px solid #f0f0f0 border-right, height 120%, top −10%, spread with flex space-between.
    - 3 horizontal `.hub_grid-line-2`: 1px **dashed** #f0f0f0 border-top, width 120%, left −10%. These sit at the top, middle and bottom.
  - Each `.hub_logo-wrp` (aspect 1, flex centered, relative) holds `img.hub_logo` (1.2rem ≈ 18px @1440) and `.hub_tooltip`.
- Tooltip `.hub_tooltip` (≥992 only):
  - `position:absolute; bottom:75%; left:50%; transform:translate(-50%,.5rem); opacity:0; pointer-events:none; z-index:10`.
  - Black pill, white .875rem text, nowrap, padding .1rem .65rem .25rem.
  - `.hub_tooltip-arrow`: .5rem black square rotated 45°, bottom −.2rem.
  - `transition: opacity .4s ease .1s, transform .25s ease`.
  - `.hub_logo-wrp:hover .hub_tooltip { opacity:1; transform:translate(-50%,0); pointer-events:auto; transition-delay:0s }`.
  - Tooltip labels: Stripe, Zapier, Google Analytics, Mailchimp, Google Tag Manager, Zoom, AWeber, Pinterest, Unsplash, PayPal, Hotjar, Microsoft OneDrive, TikTok, Segment, Meta, Dropbox, Google Drive, Calendly.
- `.hub_btn-wrp` (margin-top 1rem, centered): `button-black` "Explore integrations" → `/app-hub` (206x51.4).

**Motion: Webflow IX3 → GSAP ScrollTrigger (scrubbed).**
```js
gsap.timeline({ scrollTrigger:{ trigger:".section_hub", start:"clamp(20% bottom)", end:"clamp(50% 80%)", scrub:0.8 } })
  .fromTo(".hub_logo-wrp", { scale:0.2, opacity:0 }, { scale:1, opacity:1, duration:0.2, ease:"power1.out",
          stagger:{ amount:0.5, ease:"power1.out" }, force3D:true });
```
Logos start at `opacity:0; transform:scale(0.2)` (the CSS hides them until IX3 initialises: `html.w-mod-js:not(.w-mod-ix3) .hub_logo-wrp{visibility:hidden}`).

**Breakpoints.**
- ≤991: grid 6 cols with gap 1.5rem and padding .75rem, items centered, logo 5rem, the extra horizontal line `.show-tablet` appears.
- ≤767: logo 3rem, margin .5rem 0.
- 390:
  - Grid 4 cols x 48px with gap 16px, padding 8px, margin 8px 43px (256x320). 6 horizontal lines, 5 vertical lines.
  - Header h2 39/42.9. Button full width 342x54.

---

## 16. Case studies (`section.section_case-study`)
**Assets (409x659):**
- `/assets/697b7b664e764cabb7c5c1f6_stories-abagail.webp`
- `/assets/697b7bd3fedd95dc0d2b9607_stories-brian-kouhi.webp`
- `/assets/697b7c14f3eb4b90d2991ee2_stories-speak-norsk.webp`

**Layout @1440.**
- Section: bg #f0f0f0, overflow hidden, padding 8rem 2rem. Height 809.
- `.case-study_wrp`: flex row, gap 3rem (44.9), padding 2rem, **bg #fff, radius .6rem**. 1287x569.7.
- Left `.case-study_content-l` (507px, padding 2rem, flex column centered, gap 1rem):
  - `h2` "Over 150,000 experts and businesses rely on Teachable" (4rem/1.1 centered, 4 lines)
  - div "See how creators like Boss Project, ToAnimate, and Speak Norsk built and scaled their education businesses with Teachable." (1.3rem/1.5 centered)
- Right `.cs-slider_instance[fs-swiper-element=case-studies]` (675px, flex column, gap 1rem):
  - `.swiper` (overflow hidden). Slides `.cs-slider_slide` are 100% wide (675x450), `aspect-ratio:3/2`, radius .6rem, bg #f5f5f5, overflow hidden, flex row:
    - `a.cs-slider_link` (405px = 60%, bg #7f2a23, padding 3rem, flex column centered):
      - `.cs-slider_txt-wrp` (gap 3rem): `h3.cs-slider_title` Ivypresto 4rem (59.87) / **lh .9** white centered; `.cs-slider_tag` (bg #fae6b6, radius .6rem, padding .5rem 1rem, 1rem/600 uppercase black).
      - `.cs-slider_btn-wrp`: absolute at the bottom, flex space-between, padding 0 2rem 1.5rem. "Read case study" (1.3rem, #fae6b6) plus a 1.25rem arrow (viewBox 0 0 50 45, path `M49.1153 24.6928C50.2902 23.5245 50.2955 21.625 49.1273 20.4501L30.0894 1.30444C28.9211 0.129566 27.0216 0.124204 25.8467 1.29246C24.6719 2.46073 24.6665 4.36021 25.8348 5.53509L42.7573 22.5535L25.7389 39.4761C24.5641 40.6443 24.5587 42.5438 25.727 43.7187C26.8952 44.8936 28.7947 44.8989 29.9696 43.7307L49.1153 24.6928ZM0.577498 22.4344L0.569029 25.4344L46.9915 25.5655L47 22.5655L47.0084 19.5655L0.585967 19.4344L0.577498 22.4344Z`).
    - `.cs-slider_img-wrp` (270px = 40%, bg #000, overflow hidden): img cover, 270x450.
  - Slides:
    1. "Abagail Pumphrey", tag "Boss Project" → `/blog/abagail-pumphrey-case-study`
    2. "Brian Kouhi", tag "Toanimate" → `/blog/brian-kouhi-story`
    3. "Speak Norsk", tag "Huzan Raad & Nicoleta Stratan" → `/blog/speak-norsk-case-study`
  - `.cs-slider_navigation` (flex centered, gap 2rem): prev button (3rem black circle, flipped arrow), fraction "1 / 3" (monospace 1rem/1.5, gap .5rem), next button.

**Swiper** (case-study-slider.js):
```js
new Swiper(el, { slidesPerView:"auto", grabCursor:true, keyboard:{enabled:true}, watchSlidesProgress:true, observer:true, loop:true, observeParents:true }); // speed 300ms, no autoplay
// on slideChange: current.textContent = realIndex+1; total.textContent = slides.length
```

**≤991.** Wrapper becomes a column with gap 0. Both halves are 100% wide. Left padding-top 2rem. Link padding 2rem.

**≤767.**
- Title 2.5rem / lh 1.1. Tag .7rem. Button-row padding 0 1.5rem 1rem. Wrapper padding 1.5rem.

**390.**
- Wrapper padding 24px 0 16px. Left padding 16px 32px 32px. h2 39/42.9.
- The slide link takes the full slide (342x432, flex column space-between, padding 24px).
- Title 46.8/51.48 (12vw). Tag 11.7px.
- The image moves inside the link as `.cs-slider_img-wrp-mob`: a 160px circle with bg #fae6b6, margin 24px 0 16px, using `img.cs-slider_img-mob`.
- "Read case study" row is static.

---

## 17. FAQ (`section.section_faq`)
**Layout @1440.**
- Section padding 8rem 4rem (119.73/59.87), overflow hidden. Height 1231.
- `.container-small` (48rem = 718.4px) > `.faq_wrp` (flex column, gap 3rem).
- `h2.heading-style-h3` "Frequently asked questions about Teachable" (3rem/1.1 centered, 2 lines).
- List: flex column, row-gap .5rem. Each `.accordion_item` has margin-bottom .5rem.
  - `.accordion_header` (cursor pointer): flex space-between, align center, gap 1rem, padding 1rem 1rem 1rem 1.5rem, **bg #f0f0f0, radius 100vh (pill)**. Height 59.9px.
    - `h3.accordion_label`: **Peridot** 1.15rem (17.21px) / 1.5 / 400 / black, flex 1.
    - Icon `.accordion_icon-wrp` (2rem) > `.accordion_icon` (1rem), a plus built from 2 lines with 2.5px black borders. Open state rotates the icon 135deg (renders as ×).
  - `.accordion_content`: overflow hidden, `transition: height .3s ease`.
    - `.accordion_line` (1px, margin-bottom 1.5rem).
    - `.accordion_body` (flex, padding 0 3rem 2rem 1.5rem) > `.accordion_rich-text p`: 1.15rem / 1.5, `transition: transform .3s ease`.

Accordion script (verbatim behaviour):
- On load, item 0 is open (`.active`, height = scrollHeight, icon `rotateZ(135deg)`, text `translateY(0)`). The others have height 0px.
- Clicking a header closes all other items (height 0, icon rotateZ(0), text translateY(-1rem), `display:none` after 300ms).
- An open item toggles closed the same way.
- A closed item opens: `display:block`, then height = scrollHeight in the next rAF, icon 135deg, text translateY(0).

Q/A copy:
1. **What is Teachable?** Teachable is an all-in-one platform for experts and businesses to create and sell online courses, coaching, memberships, and digital downloads. It includes a course builder with AI tools, iOS and Android student apps, and Teachable Payments, a built-in checkout that handles sales tax, VAT, and GST. Teachable is part of Hotmart Company.
2. **How does Teachable work?** You create your products with Teachable's course builder, customize your school with your own brand and domain, and set your pricing. Students buy through Teachable Payments and access your content on the web or in the iOS and Android apps, while Teachable handles hosting, payments, and taxes behind the scenes. You can get started with a 7-day free trial.
3. **Who uses Teachable?** More than 150,000 creators, experts, and businesses use Teachable, from language teachers and finance professionals to fitness coaches and companies training their teams. What they have in common is a commitment to education: Teachable helps them turn real-world expertise into thriving education businesses.
4. **What can I sell on Teachable?** You can sell online courses, one-on-one or group coaching, digital downloads like templates and guides, and memberships with recurring subscriptions. You can also bundle products, add a community for your students, and offer upsells and order bumps at checkout.
5. **Is Teachable legit?** Yes. Teachable is part of Hotmart Company and is used by more than 150,000 experts and businesses. Together, Teachable and Hotmart creators have earned more than $10 billion, and students in 180 countries learn on Teachable.
6. **Is Teachable free?** No, Teachable doesn't have a free plan. Every self-serve plan (Starter, Builder, and Growth) includes a 7-day free trial and a 30-day money-back guarantee, so you can test the platform before committing. See current prices on our pricing page.
7. **Are there any transaction fees?** Only on the Starter plan, which has a 7.5% transaction fee. Builder, Growth, and Custom plans have 0% transaction fees when you use Teachable Payments. Standard payment processing fees may still apply.
8. **Can I change my plan once I sign up?** Yes. You can change your plan at any time from your school's admin. You'll be charged the new plan amount at your next billing date.
9. **Can I cancel my account at any time?** Yes, you can cancel your Teachable account at any time. If you're within your first 30 days, you can also request a refund under our 30-day money-back guarantee.

**Breakpoints.** ≤991: section padding 0 6rem. ≤767: padding 0 2rem, gap 1.5rem.

**390.**
- Section padding 48px 0. The container is full width (390). The headers are full-bleed pills (0 side margin). Header padding 16px 16px 16px 24px, height 64.
- h2 31.2/34.32. Label 15.6/23.4. Body padding 0 24px 16px.

---

## 18. Impact CTA (`section.section_impact`)
**Asset:** `/assets/68beb37f210630a32db2e951_temp-stock-1.webp` (1440x960; the original srcset goes up to 2800w).
- Section: relative, overflow hidden, padding **12rem 0** (179.6px; ≤991 10rem; ≤767 4rem; 390 = 128px). Height 645@1440 / 631@1280 / 518@390.
- `img.impact_bg-img`: absolute, covers the section (100%x100%, `object-fit:cover`). There is no overlay element; the photo itself is dark enough.
- `.padding-global > .container-small` (48rem):
  - `h2.heading-6` "Your expertise has always been your edge.<br>Let's scale it.": Ivypresto 4rem/1.1 (59.87/65.85) white centered, padding-bottom 40px, 3 lines (237.6px tall incl. padding).
  - `.impact_wrapper` (max-width 64rem, flex column centered; ≤991 max-width 32rem): `button-primary-new` (yellow) "Explore plans" → `/pricing`.
- 390: h2 39/42.9, 4 lines.

---

## 19. Footer (`footer.footer_component[text-selection=reverse]`)
**Assets:** `/assets/689f12f21a516225c689ca1d_teachable-logo-light.svg` (300x45), `/assets/6953d5310fcdb2da81b8b4d5_soc2-badge-teachable.svg` (104x104).

**Layout @1440.**
- bg #000, border-top 1px #000, padding 6rem 0 (89.8px), overflow hidden. Height 809.
- **Quirk to reproduce for spacing:** directly inside the footer, before `.padding-global`, the live page has **4 leftover `<div>`s reading "This is some text inside of a div block."**. They are body 1.3rem/1.5 black on black, so invisible, but each takes 29.2px of height (117px total; 23.4px each at 390). Keep them, or replace them with an equivalent empty spacer of that height.
- `.padding-global > .footer_wrp` (max-width 86rem) > `.footer_grid`: **grid `248.4 248.4 248.5 496.9` (1fr 1fr 1fr 2fr), gap 1rem**, align start, relative. Height 511.5.
  - Column header `.text-block-14`: Peridot 1.5rem (22.45px) / 1.5 / 700 / white. Column gap 1.5rem.
  - Links `a.footer_link` (flex column list, gap 0): padding .25rem 0. Text 1.15rem (17.21)/1.5 #a0a0a0. Hover: padding-left .2rem + underline, `transition: padding .2s`.
  - **Explore**: Pricing `/pricing`, Example Schools `/examples`, Product Demo `/watch-demo`.
  - **Company**: About us `/about`, Careers `/careers`, Press `/press`, Partners `/partners`.
  - **Support**: Help Center `https://support.teachable.com/en/`, Blog `/blog`, Pricing `/pricing`, House Rules `/legal/house-rules`, Content Guidelines `/legal/content-guidelines`.
  - **Teachable** (wide column):
    - `p.footer_paragraph` (max-width 32rem = 478.9px; .875rem/1.5 #a0a0a0): "Teachable is the platform for experts and businesses who take education seriously. In a world where anyone can ask AI for information, we're the home for those who educate with purpose, modernity, and humanity. Teachable powers human-led learning that drives student trust, connection, and results—all at a global scale. With a sleek, intuitive interface and AI as a time-saving partner, the platform enables transformative education rooted in real-world experience."
    - `.footer_social-grid`: 6 x 3.25rem (48.6px) cells. Each `a.footer_social-link` has a 1px white ring `.footer_social-circle` (inset ≈.33rem, radius full; ≤991 ring color `#ffffff4d`) and a 1rem white icon. Hover: `margin-top:-.25rem` with `transition: margin .2s`.
      - Order: YouTube `https://www.youtube.com/teachablehq`, Facebook `https://www.facebook.com/teachableHQ/`, Instagram `https://www.instagram.com/teachable/`, X `https://twitter.com/teachable/`, LinkedIn `https://www.linkedin.com/company/teachable/`, TikTok `https://www.tiktok.com/@teachable.com`.
      - Icons are inline 16x16 SVGs. Copy the paths from `_snapshot/index.html` (`.footer_social-icon`).
    - `.footer_base-wrp` (flex column). Links `.footer_base-link-text` (.875rem/1.5 #a0a0a0, padding .3rem 0, underline on hover): Privacy Policy `/legal/privacy-policy`, Terms of Use `/legal/terms-of-use`, Cookies Policy `/legal/cookies-policy`, Cookie Preferences (`#cookie-preference`, `href="#"`), Ethics Line `https://contatoseguro.com.br/en/ethicsline.hotmart.co`, Accessibility `/legal/accessibility`, Content Takedown `/legal/content-takedown`.
    - Then `.footer_base-text` "Copyright © <span class="footer_year-txt">2026</span> Teachable, Inc. All rights reserved." (margin-top .3rem). The year is set by JS to `new Date().getFullYear()`.
    - SOC2 badge `a.footer_soc2-badge` → `/security`: absolute bottom-right of this column, 6.25rem (93.5px).
  - **Big logo** `a.footer_logo-wrp` → `/`: absolute, bottom-left, width 54% (695px@1440), 105px tall. It is 4 stacked copies of the light logo: the base image, plus `.is-1/.is-2/.is-3` absolutely positioned at top 0 with **opacity .08**, translated by (0.125rem, −0.1875rem), (0.25rem, −0.375rem) and (0.375rem, −0.5625rem). This gives a static echo/offset effect (no animation found).

**@1280.** Grid 235.5 x3 + 471. Logo 660x100.

**≤991.**
- Padding 4rem 0. Grid 3 cols, gap 3rem.
- Logo wrap becomes position relative, width 100%. Social ring color `#ffffff4d`.

**≤767.** Padding 2rem 0. Grid gap 2rem 1rem. SOC badge 5rem.

**390.**
- Padding 48px 0 32px. Grid 1 col, gap 32px. Column gap 12px. Headers 24px/36.
- Links 15.6/23.4. Paragraph 13.65/20.48.
- Social grid 4 cols x 52px (2 rows), margin 16px 0.
- SOC badge static (80px, margin-top 16px). Logo 342x51.8 at the bottom with no offset transforms on the echo layers. Footer height 1632.

---

## 20. Asset inventory

### Present in `/public/assets/` (served at `/assets/<name>`)
All 63 snapshot images, mapped to sections above. The live page requests responsive variants such as `…-p-500.webp`, `…-p-800.webp`, `…-p-1080.webp` and `…-p-1600.webp`. Use the base files (same filename without `-p-NNN`), which are the full-resolution originals.

### Downloaded fonts (`/public/fonts/`)
`IvyprestoHeadline-Regular.woff2` (92 KB), `IvyprestoHeadline-RegularItalic.woff2` (98 KB), `PeridotPENormVF.woff2` (174 KB). All are valid WOFF2.

### NOT in `/public/assets/`: download these
| Used by | URL |
|---|---|
| `.span_h2-o` and `.is-international` (scale headings, the stylised "o") | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68d333eb7daf150f3f4d68c8_teachable-char-o-long.svg |
| `.span_h2-o.is-video` | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68b425e628e284c40abc6878_c598fb5409c83115d892ba631c5b226e_teachable-char-o.svg |
| `.span_h2-i` (only in the hidden `.cta_wrapper.hide` block; optional) | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68d33c6a7b106decaa3bbebc_ce6b5a44e0f4a5be0f42bd462d47b44d_teachable-char-i-long.svg |
| favicon | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68f25a556b13e5a2618da909_Favicon.png |

There are no videos, Lottie files or extra CSS background images on this page. Every other CSS background is a gradient.

### JS libraries the original uses
- GSAP 3.15.0 + ScrollTrigger (Webflow-hosted). The custom slider bundle `gsap.js` includes its own GSAP 3.13.
- Swiper 11 (`swiper-bundle.min.js`/`.css`).
- jQuery 3.5.1 (only for a skip-link).
- Webflow IX2/IX3 runtime. Re-implement its behaviour with GSAP as described in each section.

---

## 21. Motion index (quick reference)
| # | Where | Trigger | What | Timing |
|---|---|---|---|---|
| M1 | Marquee items | CSS, infinite | translateX 0 → calc(−100% − 1rem) | 25s linear, paused on hover |
| M2 | Banner countdown | setInterval 1s | text update | — |
| M3 | Nav dropdown chevron | dropdown open/close | rotate 0→180 / →360 then reset | 300ms ease (close has 100ms delay) |
| M4 | Dropdown panel top | scroll / open | top 8rem (scrollY≤150) or 4.8rem | transition top .3s ease |
| M5 | Hamburger | click (≤1145) | lines → ×, menu translateX 100%→0 | 200ms ease |
| M6 | `.button_txt` | hover | scale 1.02 (sso 1.03) | 200ms ease |
| M7 | arrow-btn icon | hover | rotate −45deg | .2s ease |
| M8 | Links | hover | underline (+padding-left .2rem footer / .15rem dropdown, .2s) | — |
| M9 | Footer social | hover | margin-top −.25rem | .2s |
| M10 | Stories slide | hover | bg → #f0f0f0 | .2s ease |
| M11 | Hub tooltip | hover (≥992) | opacity 0→1, y .5rem→0 | opacity .4s ease .1s; transform .25s ease |
| M12 | Hero tabs | autoplay 6s/tab while ≥50% visible | progress bar width 0→100%, then switch tab | rAF linear; pane fade 300ms ease |
| M13 | Hero UI panels | tab active | opacity 0→1, scale .98→1, y .5rem→0 | 400–500ms ease, delays 600/900ms; out 200ms |
| M14 | Why scene | scroll scrub (IX2, smoothing) | see §9 keyframe table | — |
| M15 | Why card heading | ScrollTrigger scrub .15 | fontSize 2rem→3rem | start "10% top", end "46% top", power2.out |
| M16 | Why bg panel / photo | scroll scrub | scale .9→1 / 1.1→1 | §9 |
| M17 | Scale steps | ScrollTrigger at top+i·100vh | out: opacity 0, y∓50 (0.4s power2.in); in: from y±50 to 0 (0.6s power2.out, delay .1) | — |
| M18 | Scale progress bar | scroll scrub | width 0→100% (4%→65%), hide at 70% | — |
| M19 | Scale flags | scroll into view (50%) | burst to offsets + fade in | 500ms outQuad, opacity 500ms ease delay 100ms; out 300ms |
| M20 | Flag float | rAF | ±16px sin/cos drift | continuous |
| M21 | Language word | timer | fade swap | 600ms ease-in-out, 800ms hold |
| M22 | AI shimmer | CSS infinite | translateX −100%→100% | 4.5s ease, sweep in first 45.45% |
| M23 | Stories Swiper | autoplay | slide | 2000ms delay, 300ms speed, loop, pause on hover |
| M24 | Case-study Swiper | buttons/drag | slide | 300ms, loop |
| M25 | Hub logos | ScrollTrigger scrub .8 | scale .2→1, opacity 0→1, stagger amount .5 | start "clamp(20% bottom)", end "clamp(50% 80%)" |
| M26 | FAQ | click | height 0↔scrollHeight; icon 0↔135deg; text y −1rem↔0 | .3s ease |
| M27 | Mobile flags (≤767) | scroll into view (10%) | slide in from ±40/55vw | 600ms ease (+200ms delay on outer pair) |

There are **no page-load entrance animations** (no IX2 PAGE_START or load timelines run on this page).
