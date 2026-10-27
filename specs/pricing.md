Source: https://www.teachable.com/pricing

# /pricing: page spec

Measured live on 2026-10-27 with Playwright (Chromium, isolated headless context) at 1440x900, 1280x800 and 390x844. Cross-checked against `_snapshot/pages/pricing/` (HTML, the page CSS `fs-teachable.68ada846….opt.min.css` and the inline `<style>`/`<script>` blocks) and the live Webflow IX2 store.

Global foundations (fluid rem root, fonts, colour tokens, button classes, hover scale M6) follow `CLONE_SPEC.md` §0 and `BUILD_NOTES.md`. This spec covers only what is specific to this page. At 1440, 1rem = 14.9666px. At 1280, every value is the same rem value × 14.6222, with no layout changes between 1280 and 1440 unless noted. At 390, 1rem = 16px.

**Copy policy.** Body copy is not transcribed. Each text slot gives: element, approximate character count, rendered lines at 1440 / 390, and its purpose. Functional labels (buttons, plan names, prices, table feature names, filter labels) are recorded verbatim.

---

## 0. Page chrome (deviates from the homepage)

- **No promo marquee** and **no Halloween banner** on this page.
- The nav is `div.nav_fixed` **without** `.is-sticky`: `position: fixed; inset: 0 0 auto; z-index: 999`. `main` starts at y=0 under the nav, so the first section's padding-top includes the nav height (79.3px at 1440, 77px at 1280, 58.8px at 390). The nav bar itself (black, same markup as homepage §2) is unchanged.
  - Build: render `Navbar` in a `fixed` variant and leave out `PromoMarquee` for this route. Rendering the nav sticky would push every section down by the nav height.
- Nav dropdown panel: on this page `._wf-dropdown_list` uses the CSS default `top: 5rem` (74.83px at 1440). It stays the same at scrollY 0 and 400; the homepage's 8rem/4.8rem script adjustment (M4) does not apply.
- The nav "Pricing" link has `.w--current`. There is no visual difference (no current-link style exists).
- The footer is the homepage `Footer` (§19), including the 4 invisible spacer divs. Height 808.8 / 790.1 / 1631.8.
- `.fb-tip` tooltip element is appended to `<body>` (see §2 motion).
- An exit-intent modal `.modal-exit` (A/B test) is present. See §8.

### Section geometry (y / height)
| # | Section | 1440 | 1280 | 390 |
|---|---|---|---|---|
| 1 | `section.section_pricing-b` (hero + plan cards) | 0 / 1472.1 | 0 / 1438.4 | 0 / 3446.4 |
| 2 | `section.section_price-filter-b` (comparison table) | 1472.1 / 885.4 | 1438.4 / 865.2 | 3446.4 / 2833.2 |
| 3 | `section.section_pricing-all` (fees dropdowns) | 2357.4 / 516.3 | 2303.6 / 504.4 | 6279.6 / 545.1 |
| 4 | `section.section_stories` | 2873.7 / 990.8 | 2808 / 1012 | 6824.6 / 903.6 |
| 5 | `section.section_faq` | 3864.5 / 1029.4 | 3820.1 / 1031.1 | 7728.3 / 947.6 |
| 6 | `section.section_product-cta.padding-top-0` | 4893.9 / 433.7 | 4851.2 / 423.8 | 8675.9 / 320 |
| 7 | `footer.footer_component` | 5327.6 / 808.8 | 5274.9 / 790.1 | 8995.8 / 1631.8 |
| | document height | 6136 | 6065 | 10628 |

Section 2's height is measured in its **default** filter state ("Transaction fees & Usage"). With "All" selected it becomes 3396.3px at 1440.

---

## 1. Hero + plan cards (`section.section_pricing-b`)

### Structure
```
section.section_pricing-b            bg #f0f0f0; padding 10rem 0 8rem; relative; overflow hidden
  .padding-global > .container-large (86rem)
    .pricing_header-wrp              flex column centred; gap 1rem; margin-bottom 1rem
      h1.heading-style-h2            page title
    .pricing_wrp                     flex column; gap 2rem
      div
        p.pricing-tabs-main_paragragh   centred; margin 2rem 0
        .pricing-tabs_component.w-tabs  (Webflow tabs, data-current="Annually", in 300ms / out 100ms, ease)
          .pricing-tabs_menu            flex centred; gap .5rem; margin-bottom 3rem
            a.pricing-tabs_menu-link  "Monthly"
            a.pricing-tabs_menu-link.w--current  [check icon] "Yearly" + .pricing-tabs_discount-txt "22% OFF"
          .pricing-tabs_content
            .w-tab-pane (Monthly) / .w-tab-pane (Annually, active)
              .pricing-green_tab > .pricing-green_grid.is-alt   grid 4 x 1fr; gap 2.5rem 1rem
                .pricing-green_component            (Starter)
                .pricing-green_component.is-growth  (Builder, "Popular")
                .pricing-green_component            (Growth)
                .pricing-green_component            (Custom: contains .pricing-green_unlimited)
```

### Text slots
| Slot | Element / style | Chars | Lines 1440 / 390 | Purpose |
|---|---|---|---|---|
| Page title | `h1.heading-style-h2`: Ivypresto 4rem/1.1 (59.87/65.85 @1440; 39/42.9 @390), centred | 17 | 1 / 1 | page title |
| Intro line | `p`: body 1.3rem/1.5 (19.46/29.18; 15.6/23.4), centred | 45 | 1 / 1 | trial reassurance line |
| Plan description | `.pricing_desc-txt`: Peridot 1rem/1.2 (14.97/17.96; 15.6/18.72) | 45, 55, 52 | 2 / 2 | plan one-liner |
| Trial note | `.pricing_trial-txt.is-smaller`: .75rem/1.1 (11.23/12.35; 11.7/12.87), centred, margin-bottom 1rem | 35 | 1 / 1 | trial + guarantee note (same in all 3 cards) |
| Custom intro | `.pricing_unlimited-txt`: 1rem/1.5 (14.97/22.45; 15.6/23.4) | 131 | 5 / 4 | custom-plan pitch |
| Custom label body | `.pricing-card_label p`: .875rem/1.5 (13.10/19.64; 13.65/20.48) white | 63 | 3 / 2 | migration promo blurb |
| Tooltip messages | `[fb-tooltip-message]` attribute | 66–162 | n/a | bullet explanations |

### Tab menu (Monthly / Yearly toggle)
- `.pricing-tabs_menu-link`: flex centred, gap .25rem, padding .75rem 1.25rem (11.23/18.71), 1px #000 border, radius full, transparent bg, Peridot 1rem / lh 1.2 / 400 / #222. Size 97x42.4 (Monthly) and 158.3x42.4 (Yearly) @1440.
- `.w--current`: bg #000, text #fff, weight 700. The check icon `.pricing-tabs_link-icon` (9x7, `<svg viewBox="0 0 18 14"><path d="M1 8L6 13L17 1" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/></svg>`) is `display:none` except inside the current link (inline style rule). Both links carry the icon markup.
- `.pricing-tabs_discount-txt` "22% OFF": .875rem / 600, margin-left .25rem (0 at ≤479), inherits colour (white on the current link).
- There is no hover style on the tab links.
- ≤767: menu margin-bottom 1rem. ≤479: menu `justify-content:flex-start; align-items:stretch; width:100%`, each link `flex:1` (167x44.7 @390, padding 12px 20px, 15.6px text).

### Plan card (`.pricing-green_component`), 310.6 x 945.6 @1440 (294.4 x 924 @1280)
- Component: flex column, space-between, `padding-top:1.75rem` (26.19px). This leaves room for the badge on the popular card, so all cards line up. ≤991: padding-top 0.
- `.pricing-green_bg`: bg #fff, radius .6rem (8.98), flex column, gap 2rem, `flex:1`, padding-top 3rem (44.9). ≤479: padding-top 2rem.
- `.pricing-green_top-wrp`: flex column, gap 1rem, padding 0 2rem (≤767: 0 1.5rem).
  1. `.pricing-green_title-wrp` (flex column, gap 1rem): `.pricing-green_title-text` (Peridot 2rem / 1.1 / 600; 29.93px @1440, 28px @390; ≤767 1.75rem), then the description. ≤479: the title-wrp becomes a wrapping row with gap .5rem.
  2. `.pricing-green_price-wrp` (flex column, gap .5rem):
     - `.pricing_strike-txt` (annual only): 1.75rem / 1.2, #777, line-through. Values $39 / $89 / $189.
     - `.pricing-green_price-txt`: Peridot 3.5rem / 1 / 700 (52.38px; ≤767 2.5rem; ≤479 **16vw** = 62.4px). It contains the price plus a `span.pricing_price-span` "/mo" (1.5rem / 400; ≤479 1.25rem = 20px).
  3. `.pricing_billed-wrp` (flex row, space-between, gap 1rem): `.pricing_billed-txt` (1.0625rem / 1.1 = 15.9px) and (annual only) `.pricing_tag-wrp`: bg **#e5f2ff**, radius .2rem, padding .2rem .5rem, .875rem / 600 / uppercase, e.g. "Save $120".
  4. `.pricing-green_btn-wrp` (margin-top .5rem; ≤767 0): full-width pill button, 48.4px tall @1440 (50.8 @390). See button variants below.
  5. Trial note (centred).
  6. `.pricing_bullet-wrp` (flex column, gap .75rem, font .95rem = 14.22px @1440 / 15.2px @390, lh 1.5). Each `.pricing_bullet-content` is flex, gap .5rem: icon wrap (`height:1.2rem`, `top:.05rem`) holding a .6rem-wide (9x7) check SVG (same path as above, `currentColor` black), then `.pricing_bullet-text-wrp` (flex, gap .25rem) with the text, optionally a `<strong>` first item, optionally a tooltip trigger.
- `.pricing_compare-wrp` (padding-bottom 2rem, centred) > `a.pricing-green_compare-link` "Compare all features" → `#Features-Matrix`: 1rem / 500 / #1c4774, underline. **Hover: underline removed.** ≤767: link hidden, wrap padding 0.
- **Popular card** `.is-growth`: 2px solid #1c4774 border, radius .6rem, overflow hidden, padding-top 0. `.pricing-green_badge` "Popular": bg #1c4774, height 1.75rem, white .875rem / 600 / uppercase, centred, padding .15rem 2rem. `.pricing-green_bg.is-popular` has `margin:-2px`.
- **Custom card**: no `.pricing-green_bg`. It uses `.pricing-green_unlimited`: bg **#e6e6e6**, 1px solid **#aaa**, radius .6rem, flex column gap 2rem, padding 2rem 0.
  - `.pricing-green_title-wrp.is-custom` (min-height 14rem; auto at ≤991): header row (flex, gap .5rem, mb .5rem) = black 2.1875rem square (radius .25rem) with a white 14x19 "T" glyph SVG (copy `.pricing-unlimited_icon` from the snapshot), then the title "Custom". Then the intro text.
  - Button: `.button-black` "Contact sales" → `https://www.teachable.com/lps/migrate-to-teachable?src=custom_card` (248.7x51.4).
  - `.pricing-unlimited_features-wrp` (padding-top 1.5rem, gap 1rem): `.pricing-unlimited_subheading` "Everything in Growth, plus:" (.875rem / 600 / uppercase / #555; ≤479 4vw), then the bullet list. Some bullets have a tooltip icon `.global_tooltip-wrp.is-unlimited` (flex).
  - `.pricing-card_label` (margin-top .5rem, padding 1.5rem, gap .75rem, radius .4rem, `linear-gradient(135deg,#000 10%,#4e4e4e)`, white): title row = 11x16 dollar-sign SVG filled **#F0FF82** + "Selling more than $12k/yr?" (.9rem / 600), then the blurb paragraph.

### Plan data (functional labels verbatim)
| | Starter | Builder (Popular) | Growth | Custom |
|---|---|---|---|---|
| Monthly price | $39/mo | $89/mo | $189/mo | n/a |
| Annual price (strike) | $29/mo ($39) | $69/mo ($89) | $139/mo ($189) | n/a |
| Billed text | "Billed monthly" / "Billed annually" | same | same | n/a |
| Annual tag | Save $120 | Save $240 | Save $600 | n/a |
| Button | `.pricing_btn-outline` "Try for free" | `.pricing_btn-full` "Try for free" | `.pricing_btn-outline` "Try for free" | `.button-black` "Contact sales" |
| Button href (monthly / annual) | `…sign_up?trial_plan_id=starter-usd-monthly` / `starter-usd-yearly` | `builder-usd-monthly` / `builder-usd-yearly` | `growth-usd-monthly` / `growth-usd-yearly` | `/lps/migrate-to-teachable?src=custom_card` |

Href prefix: `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=`.

Bullets (verbatim feature names; **(t)** = has a tooltip icon; **bold** = wrapped in `<strong>`):
- Starter: **5 products** (t), Create with AI, iOS & Android student apps, Global payments & taxes (t), Upsells & cart recovery, 7.5% transaction fee
- Builder: **10 products** (t), Create with AI, iOS & Android student apps, Global payments & taxes (t), Upsells & cart recovery, 0% transaction fee, Affiliate program, Real time support
- Growth: **50 products** (t), Create with AI, iOS & Android student apps, Global payments & taxes (t), Upsells & cart recovery, 0% transaction fee, Affiliate program, Real time support, Course certificates, Remove Teachable branding (t), Imported students (t), Custom admin permissions, Free subtitles and translations
- Custom: Dedicated success manager, Seamless features for bulk sales (t), Flexible product, students, and admin seats (t), Sandbox school for testing, Priority SLA-based support, Automated international tax handling (t), White glove onboarding, Migration Assistance

Tooltip trigger `.global_tooltip-wrp`: 1rem square, `opacity:.5`, `top:.05rem`. It holds the 22x22-viewBox question-circle SVG (stroke currentColor 1.5; copy `.tooltip-icon` from the snapshot).

### Plan button variants
- `.pricing_btn-outline`: bg #fff, 1px #1c4774 border, text #1c4774, radius full, width 100%, padding 1rem 1.5rem, 1rem / 1 / 600. The label is a `.button_txt` (16.46px).
- `.pricing_btn-full`: same, but bg #1c4774 and text #fff.
- Hover on both: IX2 a-40/a-41, `.button_txt` scales to **1.02** over 200ms ease and back. Same as `.btn-secondary`.

### Breakpoints
- ≤991: section padding 8rem 0 6rem. `.pricing-green_grid.is-alt` becomes a **flex column** with gap 1.5rem (single column, cards full width).
- ≤767: section padding 6rem 0 4rem. `.pricing_wrp` gap 1.5rem. Header/menu margin-bottom 1rem. Intro paragraph margin 1rem 0.
- 390 measured: padding 96px 0 64px. Cards are 342 wide: Starter 628, Builder 725.6 (incl. 28px badge), Growth 871.6, Custom 814.2 tall, 24px apart. Card inner padding 0 24px, title 28px/30.8, price 62.4px, strike 28px, billed 17px/18.7, tag 85x27, buttons 294x50.8, bullets 15.2px/22.8 with gap 12px.

### Motion
- **Monthly/Yearly toggle** (Webflow tabs, M-P1): clicking a link fades the old pane out over **100ms** and the new pane in over **300ms** (`ease`). Measured: old pane opacity 0.78 → 0.08 in about 90ms, then display swaps, then the new pane goes 0 → 1 between t≈135ms and t≈460ms. The link styles swap instantly. The default is **Annually**. Inline script: `?tab=sellers|enterprise` selects tab 0/1 of `[data-tabs="pricing"]`, and a click pushes `?tab=` to the URL. The pricing tabs don't carry that attribute, so the script has no visible effect here and can be skipped.
- **Tooltip** (`.fb-tip`, M-P2): a body-level fixed div, max-width 260px, padding 8px 12px, radius 6px, bg **#1a1a1a**, white, 13px / 1.4 (18.2px), z 99999, `pointer-events:none`. Hidden state: `opacity:0; transform:translateY(4px)`. `.is-visible`: `opacity:1; translateY(0)`. Transition `opacity .15s ease, transform .15s ease`.
  - Show after `fb-tooltip-show-delay` = **50ms** on mouseover/focusin/touchstart of any `[fb-tooltip-message]` element.
  - Positioning: prefer **above** the trigger with an 8px gap. If `top < 4`, flip below. Centre it horizontally, clamped to [4, innerWidth − width − 4].
  - Hide on mouseout, focusout, scroll and resize. On touch, tapping the same trigger toggles it.
  - Measured: a 126-character message gives a 260x88.75 box.
- Buttons: M6 (`.button-sso` 1.03, the others 1.02).

### Assets
None (all icons are inline SVG; copy the paths from the snapshot).

---

## 2. Feature comparison (`section.section_price-filter-b`, id `Features-Matrix` target)

Padding 8rem 0 (≤991 6rem, ≤767 4rem; 390 = 64px 0). No background (white).

### Desktop (≥992): `.pricing-tiers_desktop`
```
.price-form-filter_component > form > .price-filters_wrp     flex row; gap .5rem; align center
   8 x label.price-filters_radio-btn (custom Webflow radios, fs-list filter "category")
.price-filter_title-grid      grid .35fr 1fr (333.7 / 953.4 @1440). The CSS declares border-bottom 1px #000, but the computed border-style is none, so nothing renders.
   .price-tabs_name-wrp (empty)
   .price-tabs_type-grid.is-4col   4 x 1fr (238.4)
      .price-tabs_type-content (padding 1rem; centred) > .price-table_header-txt  Ivypresto 2rem / lh 1.5 (29.93/44.9)  "Starter" "Builder" "Growth" "Custom"
.price-filter_content-wrp     flex column; gap 2rem; padding-top 1.5rem
   .price-coll_list[fs-list-element=wrapper] > .price-coll_item[fs-list-element=list]  (flex column, gap 2rem, padding-top 1.5rem)
      7 x .price-tabs_group-wrp[fs-list-element=item]  (flex column, gap 2rem); one per category, filtered
         .price-tabs_header-wrp > .price-table_subheading    Peridot 1.5rem / 1.5 / 600 (22.45/33.67)
         .price-tabs_collection-grid   grid .35fr 1fr; border-top & bottom 1px #f0f0f0
            .price-tabs_name-wrp (column of row labels)
               .price-tabs_name-content  flex; gap .25rem; height 3.5rem (52.4); padding .5rem 1rem; 1rem / 1.5
                    alternate rows get .is-color: bg #f0f0f0, radius .6rem 0 0 .6rem
            .price-tabs_collection-list.is-4col   4 x 1fr
               .price-tabs_collection-item (one column per plan)
                  .price-tabs_item-wrp  height 3.5rem; centred; 1rem; .is-color rows bg #f0f0f0
                  (the last plan column's cells get radius 0 .6rem .6rem 0)
```
- **Filter pills** `.price-filters_radio-btn`: bg #fff, 1px #000, radius full, padding .6rem 1rem (8.98/14.97), Peridot 1rem / 1.5, label weight 600, height 42.4. **Active** `.is-list-active`: bg #000, text #fff. There is no hover style (cursor default; the hidden radio input sits underneath).
  - Labels and values: All (""), Transaction fees & Usage (1), Platform features (2), Sales & marketing (3), Customizations (4), Integrations (5), Developer tools (6), Learning & support (7).
  - **Default active: "Transaction fees & Usage"**, so only the first group is visible on load.
  - Clicking a pill shows only the matching group ("All" shows the 7 groups stacked). The switch is **instant**: no fade or height animation (sampled every 40ms for 850ms, opacity stayed 1).
- Row height variants: `.is-tooltip-bottom` / `.is-deeper` = 4.5rem (67.3px). `.is-small-txt` / `.is-3-lines` labels use .875rem.
- Value cells hold text (1rem), a **check** (`.price-table_check-icon`, 1.125rem wide, colour **#32d532**, 18x14 SVG `M1 8L6 13L17 1` stroke 2.5) or an **x** (`.price-table_x-icon`, .875rem wide, colour **#bfbfbf**, `rotate(180deg)`, 14x14 SVG `M1 13L13 1M1 1L13 13` stroke 2.5). The "Contact Sales" value cells are underlined links (1rem, black) → `https://www.teachable.com/lps/migrate-to-teachable`.
- Measured @1440: filter row 42.4 tall. Title grid 75.8 tall at y=207 (section-relative). Group heading 33.7 tall. Rows 52.4 / 67.3.

### Matrix (feature names and values verbatim; (t) = tooltip icon after the label; the `.is-color` stripe falls on every 2nd row of each group, starting with the 2nd row of "Usage" and the 1st row of each later group, as listed)
| Group / feature | Starter | Builder | Growth | Custom |
|---|---|---|---|---|
| **Transaction Fees** | | | | |
| Sales transaction fees (t) | 7.5% | 0%* | 0%* | 0%* |
| **Usage** | | | | |
| Products (t) [color] | 5 | 10 | 50 | Contact Sales |
| Admin-level users (t) | 1 | 1 | 5 | Contact Sales |
| Students enrolled through Teachable checkout (t) [color, 4.5rem tall] | Unlimited | Unlimited | Unlimited | Contact Sales |
| Video storage | Up to 1TB | Up to 1TB | Up to 1TB | Contact Sales |
| **Platform features** | | | | |
| Student management [color] | ✓ | ✓ | ✓ | ✓ |
| Memberships | ✓ | ✓ | ✓ | ✓ |
| Course design templates (t) [color] | ✓ | ✓ | ✓ | ✓ |
| Lesson comments | ✓ | ✓ | ✓ | ✓ |
| Drip course content (t) [color] | ✓ | ✓ | ✓ | ✓ |
| Auto-graded quizzes | ✓ | ✓ | ✓ | ✓ |
| Short answer assessments [color] | ✓ | ✓ | ✓ | ✓ |
| Certificates | ✕ | ✕ | ✓ | ✓ |
| Course compliance (t) [color] | ✓ | ✓ | ✓ | ✓ |
| Bulk student imports | ✕ | ✕ | ✓ | ✓ |
| **Sales & marketing** | | | | |
| Teachable Payments (t) | ✓ | ✓ | ✓ | ✓ |
| U.S. sales tax, global VAT, and GST handling (t) [color, small text] | ✓ | ✓ | ✓ | ✓ |
| Student referrals | ✓ | ✓ | ✓ | ✓ |
| Coupons, upsells, order bumps [color] | ✓ | ✓ | ✓ | ✓ |
| Abandoned cart emails | ✓ | ✓ | ✓ | ✓ |
| Bundles [color] | ✓ | ✓ | ✓ | ✓ |
| Built-in email marketing | ✕ | ✓ | ✓ | ✓ |
| Integrated affiliate program (t) [color] | ✕ | ✓ | ✓ | ✓ |
| Custom reporting | ✕ | ✕ | ✕ | Contact Sales |
| **Customizations** | | | | |
| CSS snippets | ✕ | ✓ | ✓ | ✓ |
| Custom domain [color] | ✕ | ✓ | ✓ | ✓ |
| Remove Teachable branding (t) | ✕ | ✕ | ✓ | ✓ |
| Custom user roles [color] | ✕ | ✕ | ✓ | ✓ |
| **Integrations** | | | | |
| Third party integrations (t) | 1 | 3 | 5 | Unlimited |
| Zapier [color] | ✕ | ✕ | ✓ | ✓ |
| Webhooks | ✕ | ✕ | ✓ | ✓ |
| **Developer tools** | | | | |
| Public API (t) | ✕ | ✕ | ✓ | ✓ |
| API request volume limit [color] | ✕ | ✕ | 10,000/month | Contact Sales |
| API request rate limit | ✕ | ✕ | 100/minute | Contact Sales |
| OAuth (t) [color] | ✕ | ✕ | ✓ | ✓ |
| **Learning & support** | | | | |
| Email support | ✓ | ✓ | ✓ | ✓ |
| Teachable University access [color] | ✓ | ✓ | ✓ | ✓ |
| Launch Accelerator access | ✓ | ✓ | ✓ | ✓ |
| Real time support [color] | ✕ | ✓ | ✓ | ✓ |
| Priority support | ✕ | ✕ | ✕ | ✓ |
| Dedicated account manager [color] | ✕ | ✕ | ✕ | Contact Sales |
| Implementation & migration services | ✕ | ✕ | ✕ | Contact Sales |

Tooltip messages are 60–165 characters. Use stand-in text.

### Mobile/tablet (≤991): `.pricing-tiers_mobile` (desktop block hidden)
- `.pricing-tabs-mob_component.w-tabs` (300ms in / 100ms out, ease). Menu `.pricing-tabs-mob_menu`: flex-wrap, gap .5rem (≤767 .25rem). Links `.pricing-tabs-mob_link` are pills: 1px #000, padding .6rem 1rem (≤767 .4rem 1rem), 1rem / 600 (≤767 .875rem; ≤479 **3vw** = 11.7px); current = bg #000 / #fff. Labels: Starter, Builder, Growth, Custom. 390: 74.5x32.3 per pill, gap 4px.
- Each pane lists **all 8 groups** for that one plan (no category filter). Group heading `.price-table_subheading` 6vw (23.4/35.1 @390). Rows `.price-tabs_collection-grid-mob`: grid **1fr .5fr** (228 / 114 @390), border-top/bottom 1px #f0f0f0. Name cell height 3rem (48px), padding 12px 16px, 3.25vw (12.68px). `.is-3-lines` rows 5.5rem (88px). `.is-2-lines` 4rem. Coloured rows: name cell radius .6rem 0 0 .6rem, value cell radius 0 .6rem .6rem 0, both bg #f0f0f0. Group gap 1rem (≤767).
- The mobile panes differ slightly from the desktop matrix: Starter has no "Community" row, Builder/Growth add a "Community" row after "Student management", and the "Teachable Payments" label reads "teachable:pay" on Builder/Growth. Build from the desktop matrix; adding the Community row to every plan except Starter is optional.
- 390: section padding 64px 0. The pane for Starter is 2672.9 tall.

---

## 3. Payment fees (`section.section_pricing-all`)
- bg #f0f0f0, padding 8rem 0 (≤991 6rem, ≤767 4rem; 390 64px 0).
- `.pricing-all_wrp`: flex column, gap 3rem (≤767 2rem).
  - `h2` (4rem/1.1, **left aligned**): 27 chars, 1 line @1440 / 2 @390. Purpose: fees section title.
  - `.pricing-all_dropdown-wrp`: grid 1fr 1fr, gap 2rem 4rem (613.6 each @1440). ≤767: flex column, gap 1.5rem.
    - 2 × `.pricing-all_dropdown.w-dropdown` (`data-hover=false`, click to open). Toggle `.pricing-all_dropdown-toggle`: flex, gap 1rem, padding 0, 1.5rem / 600 / #222 (22.45/33.67 @1440). Text `nowrap` ("Processing fees", "Payouts"), then a 1.375rem (20.6px) **filled circle down-arrow** icon (22x22 viewBox, copy `.pricing-all_dropdown-icon` from the snapshot). ≤479: toggle space-between, text 6vw / lh 1.2, pre-wrap, icon at the right edge.
    - Open list `.pricing-all_dropdown-list`: `display:none` → `block`, **position relative** (it pushes the content below; the section grows 516 → 852px). Padding-top 1rem, transparent. **No animation** (no IX2 on it) and **the icon does not rotate**. Toggle gets `.w--open`.
    - List content `.pricing-all_table-wrp` (flex column) of `.pricing-all_row`: grid **2.5fr 1fr** (406 / 162.5 @1440), gap 1rem, padding 1rem (≤767 .5rem 1rem; ≤479 .5rem 0), **border-top 1px #000**; the last row `.is-last` also has border-bottom. Cells `.pricing-all_item`: flex, gap .25rem, 1rem (≤479 4vw). Row 53px tall.
    - Rows (verbatim fee labels): Processing fees = U.S credit & debit card sales | 2.9% + 30¢; International credit & debit card sales | 3.9% + 30¢; U.S PayPal sales | 3.49% + 49¢; International PayPal sales | 4.99% + 49¢; Chargeback fee | $15; BackOffice fee (optional) | short value with tooltip icon. Payouts = Teachable Payments | Daily; Monthly payment gateway | Monthly.
  - `p` (body 1.3rem/1.5): 281 visible chars, 3 lines @1440 / 8 @390. Purpose: fees fine print. It contains 3 inline underlined links (body size): "Terms of Use" → `https://teachable.com/terms-of-use`, "Usage Fees", "Fair Use Policy".

---

## 4. Stories (`section.section_stories`)
Identical to homepage §13 (same 6 slides, avatars, Swiper config M23, heights 990.8 / 1012 / 903.6). **REUSE `Stories` unchanged.**

## 5. FAQ (`section.section_faq`)
Same component and styling as homepage §17 (pill headers, M26 accordion, item 0 open). Differences: heading 26 chars (1 line @1440, 2 @390), **8 items**.
| # | Question chars | Answer chars | Answer lines 1440 / 390 |
|---|---|---|---|
| 1 | 36 | 161 | 3 / 4 |
| 2 | 36 | 132 | 2 / 3 |
| 3 | 31 | 201 | 3 / 5 |
| 4 | 19 | 308 | 5 / 8 |
| 5 | 25 | 397 | 6 / 9 |
| 6 | 21 | 162 | 3 / 4 |
| 7 | 25 | 141 | 2 / 4 |
| 8 | 38 | 154 | 2 / 4 |

All questions take 1 line at both widths. Purpose: pricing/billing FAQs. Heights 1029.4 / 1031.1 / 947.6.

## 6. Product CTA (`section.section_product-cta.padding-top-0`)
- Section padding 0 0 8rem (390: 0 0 64px). `.padding-global > .container-large`.
- `.product-cta_wrp`: bg **#1c4774** (blue-dark), radius .6rem, padding 4rem (≤767 2rem; ≤479 1.5rem), flex column, space-between, centred, gap 2rem (≤479 1rem), white, centred text. 1287x314 @1440, 342x256 @390.
  - `.product_header-wrp` (max-width 64rem, flex column, gap 1.5rem; ≤479 gap 1rem, **left aligned**):
    - `h2.product-cta_heading`: Ivypresto 3rem / 1.1 (44.9/49.39; ≤767 2.5rem; ≤479 10vw = 39/42.9). 28 chars, 1 line @1440 / 2 @390. Purpose: CTA headline.
    - `p` (body): 30 chars, 1 / 1. Purpose: CTA subline.
  - `.product-cta_btn-wrp` (margin-top 1rem): `button-sso` "Start for free" → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly` (150.2x48.4; 390: full width 294x50.8).

## 7. Footer
REUSE `Footer` (homepage §19).

## 8. Exit-intent modal (`.modal-wrapper.modal-exit`), optional
An A/B "special offer" popup. It is **not** inside a hidden variation, so it is live.
- Trigger (once per session, `sessionStorage['ta_exitModalShown']`, only after ≥5000ms on the page):
  - Desktop (`pointer: fine`): `document` `mouseleave` with `clientY ≤ 20`.
  - Touch: a fast scroll-up gesture (≥100px accumulated, velocity ≥0.3px/ms, gaps <200ms).
- Open: `display:flex`, `body{overflow:hidden}`, focus trap. Close on the × button, a backdrop click or Esc (instant, no animation).
- Styles @1440: wrapper fixed full-viewport, bg `rgba(255,255,255,.2)`, z 999. Backdrop `.modal-exit-backdrop` is full-viewport with `backdrop-filter: blur(6px)`. Card `.div-block-2`: 540x620 centred, bg #fff, radius 20px, padding 40px 32px, flex column, gap 24px. Close `a.modal-close-button` "X": 44x44, absolute top-right, bg `rgba(0,0,0,.1)`, radius 999px, Arial 900. Tag `.text-block-6`: yellow #e6ff32 pill, padding 5px 10px, 1rem / 900, 13 chars. Title `.heading-3`: Ivypresto 3.5rem/1.1 (52.38/57.6), 30 chars, 2 lines. Body `.text-block-7`: 1rem/1.5, 107 chars, 2 lines. Image `.div-block-4` (476x180, radius 8px, img cover). CTA `a.modal-exit-cta` "Start 30-day trial": full width, 60px, bg #e6ff32, 1px #000, radius 999px, padding 18px 32px, 1.3rem / 700. Note `.text-block-8`: .875rem, #666, 37 chars.
- Asset: `AI outline (1).webp` (missing; see below).

---

## Motion index (this page)
| # | Where | Trigger | What | Timing |
|---|---|---|---|---|
| M6 | `.button_txt` in all buttons incl. `.pricing_btn-outline/-full` | hover | scale 1.02 (`.button-sso` 1.03) | 200ms ease |
| P1 | Monthly/Yearly tabs, mobile plan tabs | click | pane fade out / in | out 100ms, in 300ms, ease |
| P2 | `.fb-tip` tooltip | hover/focus/tap on `[fb-tooltip-message]` (50ms delay) | opacity 0→1, y 4px→0 | .15s ease |
| P3 | Comparison filter pills | click | show matching group only | instant |
| P4 | Fees dropdowns | click | list display none↔block (pushes layout) | instant |
| P5 | Compare link | hover | underline → none | instant |
| M23 | Stories Swiper | autoplay | as homepage | 2000ms / 300ms |
| M26 | FAQ | click | as homepage | .3s ease |
| P6 | Exit modal | exit intent | display flex | instant |

There are no scroll-triggered or load animations on this page (IX2 events here are only button hovers and nav dropdowns; `ScrollTrigger.getAll()` is empty).

## Assets
Present: stories avatars (homepage §13), logos, SOC2 badge.

Missing from `public/assets/`:
| Used by | URL |
|---|---|
| Exit-modal image (`.modal-exit img.image-2`) | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/6ac683dd4b3f37acba0805c0_AI%20outline%20(1).webp |
