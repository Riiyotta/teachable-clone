Source: https://www.teachable.com/watch-demo

# /watch-demo: page spec

Measured live on 2026-10-27 with Playwright (Chromium, isolated headless context) at 1440x900, 1280x800 and 390x844. Cross-checked against `_snapshot/pages/watch-demo/` (HTML incl. the section's inline `<style>` and `<script>` blocks, page CSS `fs-teachable.68ada4b4….opt.min.css`).

Globals follow `CLONE_SPEC.md` §0 / `BUILD_NOTES.md`. 1rem = 14.9666px @1440, 14.6222px @1280, 16px @390.

**Copy policy:** body copy is not transcribed. Text slots give element, approximate character count, lines at 1440 / 390, and purpose. Functional labels are verbatim.

---

## 0. Page chrome
- No promo marquee, no Halloween banner. Nav `div.nav_fixed` is **position fixed**, and the hero's 12rem top padding clears it.
- The page has **one visible section** plus the footer. A second `section.section_demo-hero` (the older Storylane "unlock" variant, with `.storylane-container`, `.preview-overlay`, its own form and `demo.gif`) is in the DOM but **hidden** (0 height at every width; Webflow optimisation variant). Do not build it.
- Footer: homepage `Footer` unchanged.

### Section geometry (y / height)
| # | Section | 1440 | 1280 | 390 |
|---|---|---|---|---|
| 1 | `section.section_demo-hero.is-gradient` | 0 / 839.1 | 0 / 816.3 | 0 / 971.9 |
| — | `section.section_demo-hero` (hidden variant) | 0 / 0 | 0 / 0 | 0 / 0 |
| 2 | `footer.footer_component` | 839.1 / 808.8 | 816.3 / 790.1 | 971.9 / 1631.8 |
| | document height | 1648 | 1606 | 2604 |

---

## 1. Demo hero (`section.section_demo-hero.is-gradient`)

### Background
```css
background-image: linear-gradient(rgba(255,255,255,.7), #fff),
                  linear-gradient(150deg, #e0ff00, #f6f2ee 55%, #fff);
```
This is a soft lime wash in the top-left fading to white. `#e0ff00` and `#f6f2ee` are new values used only here. Padding 12rem 0 8rem (179.6 / 119.73 @1440; 390 = 112px 0 48px). Relative, overflow hidden.

### Structure
```
.padding-global > .container-large
  .w-layout-grid.grid-demo   grid minmax(0,27.5rem) minmax(0,1fr)  (411.6 / 815.7 @1440); column-gap 4rem; row-gap 3rem; align-items center
    .demo-content            flex column; gap 1.25rem (18.71)
      .section-tag_wrp > div   eyebrow "— Teachable DEMO": 1rem / 1.5 / 600 / uppercase (16 chars)
      h1                       Ivypresto clamp(2.5rem, 3.6vw, 3.25rem) / lh 1.04 / letter-spacing -.5px (48.64/50.59 @1440; 40/41.6 @390)
      p                        body 1.3rem/1.5
      .form-block.w-form#mkt_ben_test > form#wf-form-mkt_template_form.global-form_block   (relative; flex column; gap .25rem)
         input#mkt_email_address.input-email   type email; placeholder "hello@example.com"
         input.btn-submit.large-btn            type submit; value "Unlock demo"; data-wait "Unlocking…"
         .global-form_disc-wrp                 flex column; align start; gap .625rem; margin-top .75rem; padding-top .25rem
            .eu-disclaimer-2 > label.w-checkbox.global-form_checkbox-wrp   (required consent checkbox)
                div.global-form_checkbox (15x15; 1px #000; radius 2px; margin-right .5rem) + hidden native input
                span.global-form_checkbox-label   1rem / 1.4 (14.97/20.95), #444   (63 chars; 2 / 2 lines)
            .global-form_consent-wrp > .paragraph-x-small.slate   10px / 15px, #555   (92 chars; 2 / 2 lines) with 2 underlined black links: "Terms of use" → /legal/terms-of-use, "Privacy Policy" → /legal/privacy-policy
      .global_success.w-form-done (hidden until submit)   left aligned; radius 1rem; bg #f8ffc6; weight 600; ::before = 28px #e6ff32 circle with a 16px check data-URI icon, margin-right 12px
      .global_error.w-form-fail (hidden)
      a[data-demo-trial]   "Prefer to try it yourself? Start for free" style: .9375rem / 600 / #000 / underline (offset 3px); align-self flex-start → https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly   (41 chars, 1 line)
    ._wf-storylane-wrapper (grid col 2) > .storylane-embed-wrapper
      .dv-frame.is-locked    relative; width 100%; aspect-ratio 16/9; radius 1.5rem (22.45; ≤479 1rem); overflow hidden; bg #000;
                             box-shadow 0 24px 60px rgba(17,43,70,.16); border 1px rgba(0,0,0,.08)
         img.dv-thumb        absolute inset 0; 100%x100%; cover; filter blur(6px); transform scale(1.06); transition filter .4s ease, opacity .4s ease
         .dv-overlay         absolute inset 0; flex centred; bg rgba(246,242,238,.35)
            button.dv-chip   inline-flex; gap .625rem; min-height 48px; padding .875rem 1.375rem; radius 100vh; bg #fff; #000; 1rem / 1 / 600;
                             box-shadow 0 10px 30px rgba(0,0,0,.14); 18px lock SVG + "Enter your email to unlock"
         .dv-player          absolute inset 0; display none (gets the video iframe after unlock)
      .dv-offer[hidden]      (shown after unlock, see Motion)
```

| Slot | Chars | Lines 1440 / 390 | Purpose |
|---|---|---|---|
| Eyebrow | 16 | 1 / 1 | section tag |
| H1 | 41 | 3 / 3 | page headline |
| Paragraph | 128 | 3 / 3 | what the demo shows |
| Consent label | 63 | 2 / 2 | marketing opt-in |
| Legal line | 92 | 2 / 2 | terms notice |
| Trial link | 41 | 1 / 1 | secondary CTA |
| Offer eyebrow / title (hidden until unlock) | 30 / 30 | 1 / 1 | 30-day trial offer |

### Email pill field
- `#mkt_email_address`: bg #fff, **1.5px solid #000** (computes to 1px at 1440 DPR 1), radius full, height **4rem** (59.9 @1440; 64 @390), padding .5rem **11.5rem** .5rem 1.5rem (the right padding leaves room for the button), 1rem text. `transition: all .2s ease`.
- Submit `.btn-submit`: **absolute inside the field**, top/right .375rem, height 3.25rem (48.6), padding 0 1.625rem 0 2.875rem, radius full, bg #000 with a white 16px lock icon (data-URI SVG: `rect x5 y11 w14 h10 rx2` + shackle `M8 11V7a4 4 0 0 1 8 0v4`, stroke #fff 2) at `1.375rem 50%`. White 1rem / 1 / 600. box-shadow 0 1px 4px rgba(30,48,39,.08). `transition: all .3s ease`. 160.1x48.6 @1440.
  - **Hover:** bg **#e6ff32**, text #000, and the icon swaps to the same lock drawn in black (transition .3s ease).
- ≤479: field padding-right 1.5rem. The button becomes **static, full width**, height 3.5rem (56px), margin-top .5rem, background-position `calc(50% − 4.25rem) 50%`, padding-left 1.625rem. 390: field 342x64, button 342x56.

### Video frame
- @1440: frame 815.7x458.8; thumb 862.5x484.2 (scaled 1.06); chip 253.9x48 centred. @390: frame 342x192.4; chip 233.5x44 (≤479 font .875rem, padding .625rem 1rem, min-height 44px; the label wraps to 2 lines at 390).
- `.dv-chip:hover` → `transform: translateY(-2px)` (.2s ease). Focus-visible: 2px #000 outline, offset 3px. Clicking the chip focuses the email input.
- **Thumbnail** is an inline `data:image/webp;base64,…` (≈3.9 KB, 800x450 attrs, renders 192x108 natural). It is not a CDN asset. Copy the data URI from the snapshot (`img.dv-thumb` inside `.section_demo-hero.is-gradient`), or save it to `/assets/watch-demo-thumb.webp`.

### Breakpoints
- ≤991: grid becomes one column (`minmax(0,1fr)`), row-gap 2.5rem. `.demo-content` max-width 40rem, then the video frame below it.
- ≤767: `.dv-offer` stacks (column, align start, padding 1.25rem), offer title 1.5rem, offer button full width.
- 390 measured: content column 342x579.5 (gap 20px), form block 243.7 tall, video 342x192.4. Section 971.9 tall.

### Motion / behaviour (W-M*)
| # | Trigger | What | Timing |
|---|---|---|---|
| W-M1 | hover `.btn-submit` | bg #000→#e6ff32, text →#000, icon swap | .3s ease (CSS `transition: all`) |
| W-M2 | hover `.dv-chip` | translateY 0 → −2px | .2s ease |
| W-M3 | form submit success (Webflow `.w-form-done` becomes visible) | `localStorage['teachable_demo_video_unlocked']='true'`, success text replaced, **unlock**: append iframe `https://onelineplayer.com/player.html?autoplay=true&autopause=false&muted=false&loop=true&url=https%3A%2F%2Fvimeo.com%2F1232149464&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true` to `.dv-player`, `.dv-frame` `.is-locked`→`.is-unlocked` (overlay and thumb hidden, player shown), un-hide `.dv-offer` and add `.is-in`, hide `[data-demo-trial]` | instant swap |
| W-M4 | returning visitor (localStorage key already set, section visible) | same unlock with `autoplay=false`. The form is hidden and the done message is shown | on load |
| W-M5 | `.dv-offer.is-in` | `@keyframes dvOfferIn { from{opacity:0; transform:translateY(12px)} to{opacity:1; transform:none} }` | .5s ease both |
| W-M6 | hover `.dv-offer-btn` | translateY −2px | .2s ease |

`prefers-reduced-motion: reduce` disables the thumb/chip/offer-button transitions and the offer animation.

For the local clone, submitting the form can simply run the unlock locally (no network), with a placeholder in place of the Vimeo iframe if offline.

**Offer banner** `.dv-offer` (after unlock): flex row, space-between, gap 1.5rem, margin-top 1.25rem, padding 1.375rem 1.5rem 1.375rem 1.75rem, radius 1.25rem, bg #000, white. Copy column (gap .375rem): eyebrow .75rem / 1 / 800 / letter-spacing .5px / uppercase / #e6ff32, title Ivypresto 1.875rem / 1.1 white. Button `.dv-offer-btn` "Claim 30-day trial" + 16px arrow SVG: inline-flex, gap .625rem, height 3.5rem, padding 0 1.75rem, radius 100vh, bg #e6ff32, #000, 1rem / 1 / 600, nowrap → `https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly&tds=M2nylo&web_campaign=demo_offer&web_placement=video_demo_banner&web_asset=30-day-trial-banner`.

There are no IX2 interactions other than nav and `.button-sso` hovers, and no ScrollTriggers.

## Assets
- `68d2c18f51ca3b02bcfef23a_demo.gif` is loaded by the hidden variant only. It is present locally but not needed.
- Missing: the dv-thumb image is an inline data URI in the snapshot HTML (no URL). Extract it from `_snapshot/pages/watch-demo/index.html`.
- External: Vimeo `1232149464` via onelineplayer, loaded only after unlock.
