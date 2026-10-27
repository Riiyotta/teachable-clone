# Build notes: shared tokens and utilities

Reuse these. Don't add raw hex in JSX and don't create duplicate tokens. Sources: `tailwind.config.cjs` and `src/index.css`.

> The Tailwind config is **`tailwind.config.cjs`** (CommonJS) on purpose. With Node 20.19+, an ESM `tailwind.config.js` gets cached by `require(esm)`, and the running dev server never picks up edits to it. Keep it `.cjs`.

## Breakpoints (desktop-first, `max-width`)
| prefix | applies at | use |
|---|---|---|
| `pricing:` | ≤1320px | pricing card padding (§13) |
| `nav:` | ≤1145px | hamburger nav |
| `md:` | ≤991px | Webflow tablet |
| `sm:` | ≤767px | Webflow mobile landscape |
| `xs:` | ≤479px | Webflow mobile portrait |
| `xxs:` | ≤359px | tiny phones |

Unprefixed classes are the desktop (≥992) values. The defaults (`lg`, `xl`, …) have been removed. Because these are max-width screens, `min-[…]` arbitrary variants don't work.

## Root size
`html` font-size is fluid at ≥992 (`calc(0.7416…rem + 0.2152…vw)`) and 16px at ≤991. **Size everything in rem** (Tailwind spacing `p-4` = 1rem, etc.). Use px only where the spec gives px (banner, flags, and so on).

## Colors (`bg-*`, `text-*`, `border-*`)
- `yellow` #e6ff32, `yellow-light` #f8ffc6, `yellow-fade` #edf0e0, `yellow-olive` #687317
- `black`, `white` (Tailwind defaults)
- `grey-light` #f0f0f0, `grey-mid` #bfbfbf, `grey-end` #bebebe, `grey-slide` #f5f5f5, `grey-muted` #a0a0a0 (footer), `grey-title` #979797, `grey-tab` #222, `grey-track` #e7e7e7, `grey-rule` #ccc
- `blue-dark` #1c4774, `blue-end` #6f92b6, `red-dark` #7f2a23, `cream` #fae6b6, `focus` #005fcc
- `halloween-*` (banner only): ink, violet, plum, text, note, colon, label, close, rule, rule-mob, unit
- `nav-mob-card` rgba(255,255,255,.08)
- Inner pages: `gold` #ffd700 (Webflow `--brand--gold`), `grey-footnote` #444444 (app-hub footnote), `step-tint-1` #fbf7e5 / `step-tint-2` #e7eef3 / `step-tint-3` #efe7e6 (customer-journey step pulse)

## Gradients (`bg-*`)
`bg-marquee`, `bg-payments-cta`, `bg-nav-promo`, `bg-placeholder` (image placeholder 180deg #f0f0f0→#bebebe), `bg-hero-frame`, `bg-hero-pane-mob`, `bg-pricing-card` (180deg #1c4774→#6f92b6, §14 card 2), `bg-halloween`, `bg-stats-chip` (0deg #fff 30%→#f0f0f0), `bg-stats-rule` (90deg #fff 5%, #000 50%, #fff 95%).

## Fonts
`font-heading` (Ivyprestoheadline, Georgia), `font-body` (Peridotpenormvf, Arial), `font-mono` (case-study "1 / 3"). Italic heading words: use `<em>`. It renders in the italic face automatically.

## Fluid type tokens (switch per breakpoint via CSS vars)
`text-h1`, `text-h2`, `text-h3` (size plus line-height), `text-body`, `text-medium`, `text-regular`, `text-small`, `text-tiny`, `text-large` (lh 1.5).
Raw vars: `--fs-h1/--lh-h1`, `--fs-h2/--lh-h2`, `--fs-h3/--lh-h3`, `--fs-body`, `--fs-medium`, `--fs-regular`, `--fs-small`, `--fs-tiny`, `--fs-large`, `--global-padding`, `--section-large`, `--section-small`, `--spacing-medium`.
To change only the size and keep the line-height: `text-[length:var(--fs-h2)]`.

Inner-page heading sizes (same pattern: `text-<name>` sets size via `--fs-<name>` plus a fixed line-height; values ≥992 / ≤991 / ≤767 / ≤479):
| class | lh | sizes | used by |
|---|---|---|---|
| `text-subheading` | 1.2 | 2.25rem / 1.75 / 1.25 / 7vw | product `.product_subheading` (T5) |
| `text-card-title` | 1.1 | 2.25rem / 1.75 / 1.5 / 8vw | blog/resource card titles, platform/spotlight/tools titles. Steps tier title differs (≤767 1.75rem, ≤479 7vw): override at the call site |
| `text-cta-heading` | 1.1 | 3rem / 3 / 2.5 / 10vw | product/feature CTA heading |
| `text-display-why` | 1.1 | 6rem / 5 / 3 / 12vw | feature-why heading, memberships why statement |
| `text-display-why-sm` | 1.1 | 4rem / 3 / 2.5 / 10vw | feature-why `.is-smaller` (mobile-app, customer-journey) |
| `text-tools-heading` | 1.1 | 5rem / 4 / 3 / 10vw | OC tools header |
| `text-explainer-title` | 1.1 | 3rem / 2 / 2 / 8vw | feature-explainer subheading |
| `text-list-title` | 1.1 | 2rem / 1.75 / 1.5 / 8vw | feature-list card title |
| `text-slider-title` | 1.1 | 3rem / 2.5 / 1.5 / 7vw | quick-links slider title |
| `text-rating-title` | 1.2, weight 600 | 1.5rem / – / – / 6vw | rating card title |
| `text-tier-badge` | 1.1, weight 800 | 1.1rem / 1 / 1 / 1rem | customer-journey tier badge (add `uppercase`) |
| `text-marquee-stat` | 1.5 | 1.75rem / 1.5 / 1.25 / (hidden ≤479) | product stats marquee |
`h1`/`h2`/`h3` elements already get the heading font and token sizes by default, with margins at 0.

## Spacing, sizes, radii
- spacing: `p-global` / `px-global` (global padding), `py-section-large`, `py-section-small`, `pt-section-medium` (`--section-medium` 5 / 4 / 3 / 5rem: product hero `.has-top-banner` top), **`pt-hero-top`** (`--hero-top` 12 / 9 / 8 / 7rem: the first section of every inner page clears the fixed nav with this)
- max-width: `max-w-container-large` 86rem, `max-w-container-medium` 68rem, `max-w-container-small` 48rem, `max-w-container-nav` 87.5rem, `max-w-mw-large` 44rem, `max-w-mw-xlarge` 64rem, `max-w-mw-medium` 40rem
- radius: `rounded-sm` .25rem, `rounded-md` .6rem, `rounded-lg` 1rem, `rounded-panel` .3rem, `rounded-frame` 1.5rem, `rounded-full`
- easing: `ease-css` (= CSS `ease`, the same curve as Webflow IX2 "ease"). For GSAP, `import { gsap, CSS_EASE } from '../lib/ease.js'`
- z-index: `z-nav` 999, `z-nav-inner` 2147483647

## Shared component classes (`src/index.css`)
- Layout: `.padding-global`, `.container-large`, `.container-medium`, `.container-small`, `.padding-section-large`, `.padding-section-small`
- Type: `.heading-style-h1`, `.heading-style-h2`, `.heading-style-h3`, `.text-size-medium`, `.text-size-regular`, `.text-size-small`
- Visibility: `.hide-mobile-landscape` (hidden ≤767), `.hide-mobile-portrait` (hidden ≤479)
- **Buttons** (§0.8). Markup is `<a className="btn-sso"><span className="btn-txt">Label</span></a>`. The label must be `.btn-txt`, because only the label scales on hover.
  - `.btn-sso` (yellow, hover 1.03), `.btn-secondary` (white, 1.02), `.btn-primary` (yellow, button-primary-new padding, 1.02), `.btn-primary-white`, `.btn-primary-black`, `.btn-black` (no hover), `.btn-nav-secondary` (outlined white, no hover)
  - Width rules are **not** built in. Add `xs:w-full` / `sm:w-full` at the call site where the spec says the button goes full width.
  - `.btn-arrow` > text + `.btn-arrow__circle` > `.btn-arrow__icon` > `<ArrowIcon className="..."/>`; on hover the icon rotates -45deg.
- `<ArrowIcon flipped? />` from `src/components/shared/ArrowIcon.jsx` gives the `.arrow-icon` 16x9 currentColor arrow (1rem wide, .85rem at ≤767).
- "→ text" lists: `.list-arrows` > `.list-arrows__row`
- Marquee keyframe `track` plus `.marquee` / `.marquee-item` (§1 only)

## Motion markers
Elements with motion carry `data-anim="M<n>-<name>"`, matching the §21 motion index. M1–M5, M12 and M13 are **already implemented** in their components (CSS, React state and tab-driven GSAP). Don't animate them again. Sections 1–6 have no scroll-triggered entrance animations.

## Reusable components (inner pages)

Every prop defaults to the homepage behaviour, so `<Home/>` passes no props. Homepage copy lives in `src/content/home.js` (`HOME_STATS`, `HOME_STORIES`, `HUB_HEADING`, `HUB_TEXT`, `HUB_LOGOS`, `HOME_FAQ_HEADING`, `HOME_FAQ`). Put a page's own copy in that page's file (or in `src/content/<slug>.js`), not in the shared component.

### Page shell (route metadata, no props)
`src/routes.js` has `SHELLS`, `ROUTE_SHELL` and `shellFor(pathname)`. `src/layout/useShell.js` returns `{ marquee, nav }` for the current route. `Layout` and `Navbar` both read it.
| shell | routes | marquee | nav | dropdown panel top |
|---|---|---|---|---|
| `SHELLS.home` | `/` | yes | `sticky top-0` | 8rem if scrollY ≤ 150 else 4.8rem (M4) |
| `SHELLS.page` | every other route (the 17 slugs) | no | `fixed inset-x-0 top-0` (79.3 / 58.8px tall) | constant 5rem |
- With the fixed nav, `main` starts at y = 0 under the nav. **Your first section must add `pt-hero-top`** (or `pt-section-medium` for the product hero under the Halloween banner).
- Don't render a nav or marquee in a page. To give a route a different shell, add it to `ROUTE_SHELL`.
- On client-side navigation the Navbar closes any open dropdown and the mobile menu.
- Footer: no props. It has the B7 mouse-move parallax on the three echo logos everywhere (rest state = the §19 static offsets; none at ≤479).

### `<HalloweenBanner topPad />`
| prop | default | values |
|---|---|---|
| `topPad` | `'home'` (pt .5rem) | `'large'` = `.padding-top-xlarge`: 8 / 5 / 3rem (OC, coaching, DD, memberships). Section 360.4px @1440, 474.7 @390 |
Not used on feature pages, ai-hub or app-hub.

### `<Stats variant items />`
| prop | default | notes |
|---|---|---|
| `variant` | `'home'` | `'stack'` = product-template T4 `section_stats-mob`: **renders only at ≤479** (display none above). Pair it with the new StatsMarquee (shown ≥480) |
| `items` | `HOME_STATS` | `[{ num, label }]` |

### `<Stories centered />`
| prop | default | notes |
|---|---|---|
| `centered` | `false` | `true` (site-builder only): Swiper `centeredSlides` + `autoHeight`. Same slides, copy and autoplay |
Slides and header copy are identical on every page, so there are no content props.

### `<Hub heading text />`
| prop | default |
|---|---|
| `heading` | `HUB_HEADING` (node) |
| `text` | `HUB_TEXT` (node, rendered in `p.max-w-[58rem]`) |
Logos, grid, tooltips, the M25 ScrollTrigger and the "Explore integrations" button are fixed.

### `<Faq heading items padTop />`
| prop | default | notes |
|---|---|---|
| `heading` | `HOME_FAQ_HEADING` | node, `h2.heading-style-h3` |
| `items` | `HOME_FAQ` | `[{ q, a }]`. `a` as a **string** renders as one `<p class="text-medium">`. `a` as **JSX** renders inside `.faq-rich` (`.accordion_rich-text`): write plain `<p>`, `<ul><li>`, `<a>`, `<strong>`, `<br/>`. Paragraph/list font is `--fs-medium`, `ul` padding-left 1.2rem, `ol` 2rem, `li` margin 0, links underlined (none on hover) |
| `padTop` | `true` | `false` = `.padding-top-0` (customer-journey): pt 0, pb 8rem |
| `footnote` | — | node → `.footnote-wrp` card under the list (online-courses: `<><sup>1</sup> <em>…</em></>`): grey, max-width 32rem, `text-regular`, padding 2rem (1.5rem ≤479), mb 10px. Adds 137.2px @1440 incl. the 3rem gap (Group P) |
Item 0 is open on load (M26).

### `<Glyph variant />` (`src/components/shared/Glyph.jsx`)
Decorative letter inside a heading: `Think bigger and gr<Glyph />w`. The letter is rendered transparent and the SVG is its background, so the text still reads correctly.
| variant | letter | where |
|---|---|---|
| `'h2-o'` (default) | o | `.span_h2-o`: homepage scale headings, OC tools heading, customer-journey steps h2 |
| `'h2-o-international'`, `'h2-o-video'` | o | homepage §11 only |
| `'h1-o'` | o | `.span_h1-o`: analytics, app-hub, customer-journey hero h1 |
| `'h1-e'` | e | `.span_h1-e`: mobile-app, sales, student-experience, customer-journey hero h1 |
| `'h2-a'` | a | `.span_h2-all`: coaching feature-split h2 |
| `'h2-i'` | i | `.span_h2-spotlight`: coaching spotlight h2. Page-CSS values (coaching.md's breakpoint list is wrong): 100% / 50% 59%, px .4rem, mr -.5rem; 79% ≤991; 82% + ml -.1rem ≤767; 79% ≤479 (Group P) |
`children` overrides the letter. `GlyphO` in `scale/shared.jsx` is now an alias for this.

### `<ButtonSimple label href hover className />` (`src/components/shared/ButtonSimple.jsx`)
`.button-simple`: label (1.1rem / 1.5 / 400, 1.05rem at ≤479; pass literal uppercase text such as `"READ MORE"`) plus a .75rem arrow rotated -45deg (.85rem at ≤767).
| prop | default | notes |
|---|---|---|
| `label` | — | text |
| `href` | — | when set, renders `<a>` (quick-links slider). Without it, renders `<div>` (for use inside a card that is itself the `<a>`) |
| `hover` | `false` | `true` = MF2/B6: the arrow rotates back to 0 when the **card** is hovered. Add Tailwind `group` to the card. The card also owns the title underline (`group-hover:underline`) |

### Phase 2a section components (`src/components/sections/`)
These are pure templates: every text, image and list comes in through props, and copy lives in `src/content/<slug>.js`. Shared prop shapes:
- **button**: `{ label, href, variant = 'sso', target? }`. `variant` is one of `'sso' | 'secondary' | 'primary' | 'primary-white' | 'primary-black' | 'enterprise-primary' | 'enterprise-secondary'`. Every variant gets `xs:w-full`, matching Webflow's global ≤479 rule; the section's wrapper decides the final width. The `enterprise-*` variants have no hover, and the secondary one is hidden at ≤991.
- **image**: `{ src, w, h, alt? }`. Pass the natural `w`/`h`, because row heights follow the image aspect.
- Text slots accept nodes (`<em>`, `<strong>`, `<Glyph/>`, links).
- New tokens: `bg-enterprise-hero` (linear-gradient #1c2600→#465f01) and `bg-platform-card` (#f0f0f0→#bfbfbf). New keyframes in index.css: `bgSteps` and `bgStepsTiers` (both take `--step-bg`).

#### `<ProductHero tag heading text buttons image imageBg top />` (product-template T2, customer-journey §1)
| prop | default | notes |
|---|---|---|
| `top` | `'banner'` | `'banner'` = `pt-section-medium` (under the Halloween banner). `'hero'` = `pt-hero-top` (customer-journey, first section) |
| `imageBg` | `'none'` | `'gold'` = coaching `.is-coaching` |
| `buttons` | `[]` | 0–2 buttons. They wrap at ≤767 and stack full width at ≤479 |
```jsx
<ProductHero tag="— COACHING" heading={c.h1} text={c.intro} imageBg="gold"
  buttons={[{ label: 'Start for free', href: SIGN_UP }, { label: 'Explore our plans', href: '/pricing', variant: 'secondary' }]}
  image={{ src: '/assets/…coaching-hero.webp', w: 1136, h: 1136 }} />
```

#### `<FeatureHero tag heading text button image padBottom login />` (feature-template T2, ai-hub F1, app-hub §1)
`padBottom={false}` = `.padding-bottom-0` (site-builder, app-hub). `login={{ prefix, label, href }}` renders the app-hub "Already a customer? Log in…" line; the link is underlined and loses the underline on hover. At ≤479 the text column moves above the image (this happens on every feature page).
```jsx
<FeatureHero tag="— APP HUB" padBottom={false} heading={<>… t<Glyph variant="h1-o" />…</>} text={c.intro}
  button={{ label: 'Start for free', href: SIGN_UP }} image={{ src: '/assets/…ai-hub-hero.webp', w: 540, h: 720 }}
  login={{ prefix: 'Already a customer? ', label: 'Log in to access apps', href: SIGN_IN }} />
```

#### `<SplitHero tone tag heading text buttons buttonLayout media marquee />` (enterprise §1, payments §1)
| prop | default | notes |
|---|---|---|
| `tone` | `'dark'` | `'dark'` = olive gradient, white text, black `tag` pill. `'light'` = payments |
| `media` | — | `{ type: 'iframe', src, title }`, `{ type: 'placeholder' }` (16:9 `bg-placeholder`, no third-party embed) or `{ type: 'image', src, w, h, alt }`. The iframe and placeholder stay **inline** on purpose: the line-box descent below them is part of the measured cell height |
| `buttonLayout` | `'stack'` | `'stack'` = full-width buttons at ≤479 (enterprise). `'row'` = payments: the buttons stay side by side and the labels wrap (148.9 / 177.1 @390; sso gets the `.button_wrapper` div, which produces that split) |
| `marquee` | — | node rendered full-bleed after a 3rem spacer (pass `<LogoMarquee …/>`) |
```jsx
<SplitHero tag={c.tag} heading={c.h1} text={c.intro} media={{ type: 'iframe', src: VIMEO_URL, title: 'Product video' }}
  buttons={[{ label: 'Talk to our team', href: '#talk-to-team', variant: 'enterprise-primary' },
            { label: 'See it in action', href: '#watch-demo', variant: 'enterprise-secondary' }]}
  marquee={<LogoMarquee … />} />
```

#### `<FeatureExplainer heading text rows />` (feature-template T4, ai-hub F3)
`rows: [{ image, imageSide?, items: [{ title, text }], button? }]`. Rows alternate [image, text] / [text, image] unless `imageSide` is set. At ≤479 the image comes first in every row (the page CSS does this on all feature pages; it corrects feature-template T4, which says DOM order). The header is omitted when there is no `heading`/`text`. Links inside `text` are underlined. A link inside a `title` (student-experience `.feature_txt-link`) loses its underline on hover.
```jsx
<FeatureExplainer rows={[{ image: { src: '/assets/…mobile-phone.webp', w: 800, h: 800 },
  items: [{ title: c.rowTitle, text: c.rowText }], button: { label: 'Start for free', href: SIGN_UP } }]} />
```

#### `<FeatureSplit skin heading text rows titleTag />` (product-template T5)
| prop | default | notes |
|---|---|---|
| `skin` | `'grey'` | `'grey'` = `section_product`. `'white'` = `section_build`, which stays 2 columns down to 480 and uses different gaps |
| `rows` | `[]` | `[{ image, imageSide?, items: [{ title, text }], button? }]`. The default side alternates, starting `left` (grey) or `right` (white). At ≤479 the image always comes first |
| `titleTag` | `'h3'` | `'div'` for coaching and DD |
```jsx
<FeatureSplit skin="white" heading={c.h2} text={c.intro} rows={[{ image: IMG, items: c.items, button: { label: 'Start for free', href: SIGN_UP } }]} />
```

#### `<FeatureWhy heading text size narrow tone pill icon />` (feature-template T3, customer-journey §2)
`size`: `'large'` (6rem) or `'small'` (`.is-smaller` 4rem). `narrow` = analytics `.is-analytics`: heading width 65% (100% at ≤991, 75% at ≤479). `tone`: `'yellow'` or `'gold'`. `pill` = pill text, which renders as given (the class has no text-transform). `icon` = the yellow glyph in a black circle.
```jsx
<FeatureWhy size="small" heading={c.whyH2} pill={c.pill} text={c.whyText} />
<FeatureWhy tone="gold" size="small" heading={<><em>Word</em> …</>} text={c.whyText} />
```

#### `<FeatureTwoCol variant padded heading text button image />` (feature-template T9a)
`variant`: `'2col'` (mobile-app; the image goes first at ≤479) or `'int'` (sales `section_feature-int`: bottom padding only, the grid gap becomes 2rem at ≤991, and the text stays first). `padded={false}` = `.padding-0` (variant `2col`).
```jsx
<FeatureTwoCol variant="int" heading={c.h2} text={c.text} image={IMG}
  button={{ label: 'Explore the App Hub', href: 'https://www.teachable.com/app-hub', variant: 'secondary' }} />
```

#### `<StaggerCards skin heading text cards button />` (product-template T6)
`skin`: `'platform'` (OC: grey gradient behind the image, optional centred `button` under the grid) or `'spotlight'` (coaching: per-card `cards[i].button`, 2 columns at ≤767). `cards: [{ image, title, text, button? }]` ×3. Card 1 drops 6rem and card 3 drops 3rem (static CSS).
```jsx
<StaggerCards skin="spotlight" heading={c.h2} text={c.intro} cards={c.cards} />
// coaching's h2 uses `.span_h2-spotlight` (stylised "i"). Glyph has no variant for it yet (Glyph owner: add one)
```

#### `<Steps variant heading text headerId items />` (coaching §4, customer-journey §3)
| variant | items | pulse (CSS, starts on load, every width) |
|---|---|---|
| `'steps'` | `[{ label, title, text }]` | `bgSteps` 4s, delays 0 / .2 / .4s, #f0f0f0 |
| `'tiers'` | `[{ badge, tone: 'gold'│'navy'│'maroon', title, summary, bullets: [node], button?, note? }]` | `bgStepsTiers` 6s, delays 0 / 1.5 / 3s, `step-tint-1/2/3` |
`note` renders as `p.text-size-small` wrapped in `<em>`, with underlined links. `headerId` puts an id on the header (`'tiers-and-perks'`).
```jsx
<Steps variant="tiers" headerId="tiers-and-perks" heading={<>…gr<Glyph />…</>} items={c.tiers} />
```

### Phase 2b section components (`src/components/sections/`) and primitives (`src/components/shared/`)
Pure templates: all copy comes in through props (put it in `src/content/<slug>.js`). Button objects are `{ variant = 'sso', label, href }`, where `variant` is the `.btn-*` suffix (`'sso' | 'primary' | 'secondary' | 'primary-white'`).
- New tokens: colours `navy` #182a44, `warm` #f5f2ee, `charcoal` #4e4e4e, `tooltip` #1a1a1a, `form-required` #668c00, `form-track` #e9e9e9, `check-green` #32d532, `embed-border` rgba(63,95,172,.35); gradients `bg-migrate-cta` (#1c4774→#7791ac, pair with `bg-navy`), `bg-fade-l` / `bg-fade-r` (white 38% → transparent); shadows `shadow-tile` (0 2px 5px rgba(0,0,0,.08)) and `shadow-embed` (0 0 18px rgba(26,19,72,.15)).
- New keyframes (index.css): `marquee-horizontal` (StatsMarquee), `logo-marquee-half` and `logo-marquee-gap` (LogoMarquee; the latter reads `--logo-gap`).
- Motion owned here (already implemented; don't animate again): B1 stats marquee, B6/MF2 card hover, MF1 feature-list flatten scrub, MF3 quick-links Swiper, E-M1 / P-M2 logo marquees, E-M3/E-M4 demo expand/collapse, P1 / X-M1 pill-tab fades, P2 tooltip, the F2 lightbox. Each carries a `data-anim` marker.

#### `<Teach heading text cards button skin />` (homepage §7, enterprise §2)
All props default to the homepage, so `<Teach/>` is unchanged (verified: same y/height and every descendant box at 1440 and 390). `cards: [{ title, href, img, alt, text, w?, h? }]`, `text={null}` hides the paragraph, `button={null}` hides the button. `skin="enterprise"` = `section_enterprise-built`: h2, padding-top only (bottom too at ≤767), 4 columns until ≤479, 1rem image radius, Ivypresto 1.75rem/1.2 title without an arrow, and the title underlines on card hover.
```jsx
<Teach skin="enterprise" heading={c.builtH2} text={null} button={null}
  cards={[{ title: c.c1Title, text: c.c1Text, href: '/enterprise/employee-training', alt: '', img: '/assets/6a2979598143fc927ac1b869_…workplace-dev.jpg' }, …]} />
```

#### `<WhyCards rows header overlap titleTag mobileCard />` (homepage §10, payments §5 and §7)
Defaults are the homepage (verified identical, including the WhyCards outerHTML). `rows: [{ img, w, h, alt, imageFirst, title, text, list: [string], cta?: { label, href } }]`; `cta` appends a `btn-sso`. `overlap={false}` gives the payments `section_features.is-white` layout: white, `padding-section-large`, no -17vh margin, no ≤991 "modern learner" card. `header: { title, text }` (centred, max 64rem; left-aligned at ≤479). Use `titleTag="h2"` for payments. At ≤767 the text always comes first.
```jsx
<WhyCards overlap={false} titleTag="h2" header={{ title: c.featH2, text: c.featIntro }}
  rows={[{ img: '/assets/6a4e7c79738b531761234b2d_payments_3x copy.webp', w: 909.5, h: 606.5, alt: '', imageFirst: true, title: c.r1Title, text: c.r1Text, list: c.r1List },
         { img: '/assets/6a4eb4968867005543c44b6b_payments_affiliate_colleagues_2x.webp', w: 1818, h: 606, alt: '', imageFirst: false, title: c.r2Title, text: c.r2Text, list: c.r2List, cta: { label: 'Start for free', href: SIGN_UP } }]} />
<WhyCards overlap={false} titleTag="h2" rows={c.secondRows} />   {/* §7: no header */}
```

#### `<FeatureList skin heading text items icons scrub padTop id />` (feature-template T5, enterprise §4 and §7)
| skin | section | notes |
|---|---|---|
| `'grey'` (default) | `section_feature-list` | 2-col header (h2 / p), 4-col grey cards with stair offsets (16rem / 2rem, flat at ≤991). `icons` = black 3rem check circle. `scrub` (default true) = MF1: GSAP `matchMedia('(min-width: 992px)')` + ScrollTrigger scrubs every card's margin-top to 0 from "top 90%" to "top 0%"; reverted on unmount. `padTop={false}` = `.padding-top-0` |
| `'white'` | `section_enterprise-work` | #f5f2ee band, centred h2, 3 white cards, 3.5rem yellow icon tile (`items[].icon` = src) |
| `'badges'` | `section_security_badges` | left h2, 4 plain cards, 3.5rem yellow icon (padding .5rem), Peridot 2rem/600 title, 1rem text |
`items: [{ title, text, icon?, iconAlt? }]`.
```jsx
<FeatureList heading={<>Word <em>word</em></>} text={c.listIntro} items={c.cards} padTop={false} />          {/* sales */}
<FeatureList icons heading={c.listH2} text={c.listIntro} items={c.cards} padTop={false} />                  {/* mobile-app */}
<FeatureList skin="white" id="form-submit" heading={c.workH2} items={[{ icon: '/assets/698a3853476554b524bf6397_Engage.svg', title, text }, …]} />
<FeatureList skin="badges" heading={c.badgesH2} items={[{ icon: '/assets/69e0e2f8ab376492b66e3173_security-soc2-icon-black.svg', title: 'SOC 2', text }, …]} />
```

#### `<StatsMarquee items />` (product-template T3; ai-hub §4)
`items: [{ num, label, icon: 'dollar' | 'check' | 'chat' }]`. Each stat is followed by its icon. Two identical blocks, 60s linear loop, no hover pause, hidden at ≤479. Render `<Stats variant="stack" items={…}/>` next to it for ≤479 (ai-hub passes a different, 4-item list to the stack).
```jsx
<StatsMarquee items={[{ num: c.s1, label: c.l1, icon: 'dollar' }, { num: c.s2, label: c.l2, icon: 'check' }, { num: c.s3, label: c.l3, icon: 'chat' }]} />
<Stats variant="stack" items={c.stackStats} />
```

#### `<ResourceCards heading text cards linkLabel />` (product-template T8 = ProductBlog, feature-template T9c)
`cards: [{ href, title, text, image?: { src, alt } }]` (omit `image` for the text-only memberships / ai-hub / analytics cards). `linkLabel` defaults to `'READ MORE'`. Hover: title underline and the arrow un-rotates (.2s).
```jsx
<ResourceCards heading={<>{c.blogH2}<br /></>} text={c.blogIntro}
  cards={[{ href: 'https://teachable.com/blog/…', title: c.b1Title, text: c.b1Text, image: { src: '/assets/68e4875b3d30cff2711e69e8_coaching-fitness-bootcamp.webp' } }, …]} />
```

#### `<ProductCta tone layout header heading text narrow button login padTop padBottom />` (T14 / T7 / F4 / payments §6)
| prop | default | values |
|---|---|---|
| `tone` | `'blue'` | `'red'` (feature CTA; children stretch at ≤479), `'black'` (customer-journey: black card, yellow heading) |
| `layout` | `'stack'` | `'split'` = payments migrate banner (navy + blue gradient, text left / button right, 5rem padding, column at ≤767; ignores `tone`, `header` and padding props) |
| `header` | `text ? 'cta' : 'none'` | `'none'`: h2/p/button are direct card children (2rem gaps): OC, examples, analytics, **customer-journey**. `'cta'`: coaching, memberships. `'product'`: pricing (gap 1.5rem, left-aligned at ≤479). `'feature'`: feature pages and app-hub |
| `narrow` | `false` | heading `.is-2` / `.is-narrow` (max-width 58rem) |
| `login` | — | `{ text, linkLabel, href }`: white login line under the button (app-hub) |
| `padTop` / `padBottom` | `true` | section padding 8 / 6 / 4rem. `.padding-top-0` → `padTop={false}`, `.padding-0` → both false |
```jsx
<ProductCta header="product" heading={c.ctaH2} text={c.ctaText} padTop={false} button={{ label: 'Start for free', href: SIGN_UP }} />           {/* pricing */}
<ProductCta heading={<>{c.l1}<br />{c.l2}</>} padTop={false} button={{ variant: 'primary', label: 'Explore Demo', href: '/watch-demo' }} /> {/* examples */}
<ProductCta tone="red" header="feature" heading={c.ctaH2} text={c.ctaText} padTop={false} button={{ label: 'Start for free', href: SIGN_UP }}
  login={{ text: 'Already a customer? ', linkLabel: 'Log in to access apps', href: SIGN_IN }} />                                            {/* app-hub */}
<ProductCta tone="black" header="none" heading={c.h2} text={c.p} padTop={false} button={{ variant: 'secondary', label: 'See tiers + rewards', href: '#tiers-and-perks' }} />
<ProductCta layout="split" heading={c.migrateH2} text={c.migrateText} button={{ variant: 'primary-white', label: 'See migration offer', href: 'https://www.teachable.com/migrate?src=section_banner' }} />
```

#### `<LogoMarquee variant rows heading text button duration loop pauseOnHover edgeFade />` (enterprise §1b, payments §8)
`rows: [{ logos: [{ src, alt }], reverse? }]`. `variant="strip"` (default) is the enterprise hero row: bare markup, no section, so it can go in SplitHero's `marquee` slot. 12.5rem cells, 30s, `loop="half"` (each track moves -50% of its own width; this reproduces the live jump at the loop point on purpose, see enterprise.md E-M1). `variant="tiles"` is payments: 5.5rem shadowed tiles, 24s, `loop="gap"` (seamless), each row pauses on its own hover, white edge fades, `reverse` per row. Adding `heading` / `text` / `button` wraps it in the payments section (5 / 4 / 3 / 5rem padding, `.container-medium`, charcoal 1.5rem subtitle).
```jsx
<SplitHero … marquee={<LogoMarquee rows={[{ logos: ENTERPRISE_LOGOS }]} />} />
<LogoMarquee variant="tiles" heading={<>Word <em>word word</em></>} text={c.logosText} button={{ label: 'Start for free', href: SIGN_UP }}
  rows={[{ logos: ROW_1 }, { logos: ROW_2, reverse: true }]} />
```

#### `<SalesForm variant align heading paragraphs anchorId form />` (enterprise §8, payments §9)
`variant`: `'enterprise'` (pb 8rem, 0 at ≤991; 1.5rem side padding at ≤479) or `'payments'` (white, pb 5rem; column flex at ≤767, .5rem side padding at ≤479). `align`: `'center'` | `'left'`. `paragraphs`: **one** paragraph on both pages (the snapshot has one; the spec's "p2 · 79 chars" is the form intro). `anchorId="talk-to-team"` adds the absolute scroll anchor 8 / 6 / 4rem above. `form: { logo: { src, alt }, intro: [node], fields: { firstName, lastName, email, phone } each { label, required? }, submitLabel }`. This is a static replica: submitting is prevented. Card heights match the live render (695.4 @1440, 751.3 @390), including the 8px progress bar and the empty reCAPTCHA row.
```jsx
<SalesForm heading={c.formH2} paragraphs={[c.formText]} anchorId="talk-to-team"
  form={{ logo: { src: '/assets/68daba31282892b31e937809_teachable-logo-color.svg', alt: 'Teachable' }, intro: [c.formIntro, ' '],
          fields: { firstName: { label: 'First Name', required: true }, lastName: { label: 'Last Name', required: true },
                    email: { label: 'Email', required: true }, phone: { label: 'Phone Number' } }, submitLabel: c.submit }} />
<SalesForm variant="payments" align="left" heading={c.formH2} paragraphs={[c.formText]} anchorId="talk-to-team" form={FORM} />
```

#### `<DemoEmbed id tag heading text collapseLabel iframe thumbnail />` (enterprise §3)
Hidden at ≤991. `thumbnail: { src, alt, w, h }`. `iframe` = the Storylane src. Omit it to keep a thumbnail-only placeholder; the expand still works on pointerdown. Expand: the text fades (.2s), the embed widens 50% → 100% (.5s ease), "Collapse" appears, and the thumbnail fades after 700ms. Collapse resets.
```jsx
<DemoEmbed id="watch-demo" tag="— PRODUCT DEMO" heading={c.demoH2} text={c.demoText} collapseLabel="Collapse"
  iframe="https://app.storylane.io/demo/jjiurfvxjiys?embed=inline"
  thumbnail={{ src: '/assets/6a29890f3e3ddf7e511e229a_47fb3151dd4fa88097eb068b33d6ee4c_enterprise-storylane-img.webp', w: 1440, h: 683 }} />
```

#### `<VideoReview thumb caption duration quote attribution quoteIcon video />` (ai-hub F2) + `shared/Lightbox`, `shared/PlayIcon`
`video: { src, w, h, title }` opens in `<Lightbox open onClose src w h title />` (portal, 300ms fade, Esc / backdrop / close button, focus returns to the trigger, body scroll locked). `<PlayIcon tone="black" | "white" />` is the `.global_video-icon` outline play glyph.
```jsx
<VideoReview thumb={{ src: '/assets/68e481a2e6c643add77ac08b_StacieBittle.webp', alt: '' }} caption={c.caption} duration={c.duration}
  quote={<>{c.quote} <strong>{c.quoteEnd}</strong></>} attribution={c.byline}
  quoteIcon={{ src: '/assets/689d06ccf7eea453b43bcb38_teachable-quotemark-dark.svg', alt: '' }}
  video={{ src: 'https://player.vimeo.com/video/1043511253', w: 940, h: 529, title: c.videoTitle }} />
```

#### `<PillTabs tabs size defaultIndex onChange className />` (pricing ×2, examples, app-hub)
`tabs: [{ label, icon?, content }]`. `icon` shows on the current link only (pricing check). Links swap instantly; the pane fades out over 100ms, then the new pane fades in over 300ms (GSAP, CSS ease). Arrow keys move between tabs. `size`: `'pricing'` (Monthly/Yearly), `'examples'`, `'compact'` (pricing ≤991 plan tabs), `'apps'` (grey pills, flex 1). Inline extras in a label must inherit the link's line-height, e.g. `<span className="ml-1 text-[length:var(--fs-small)] font-semibold xs:ml-0">22% OFF</span>` (`text-small` would set lh 1.5 and make the pill 44.1 tall instead of 42.4).
```jsx
<PillTabs size="pricing" defaultIndex={1} tabs={[
  { label: 'Monthly', icon: <CheckIcon className="w-[.6rem]" />, content: <Plans billing="monthly" /> },
  { label: <>Yearly<span className="ml-1 text-[length:var(--fs-small)] font-semibold xs:ml-0">22% OFF</span></>, icon: <CheckIcon className="w-[.6rem]" />, content: <Plans billing="annual" /> },
]} />
<PillTabs size="examples" tabs={c.tabs.map((t) => ({ label: t.label, content: <TabPane {...t} /> }))} />
```

#### `<QuickLinksSlider heading text slides />` (feature-template T9d, sales)
`slides: [{ title, text, label, href, image: { src, alt, w, h } }]`, where `label` is the literal uppercase footer (`'DOWNLOAD NOW'` / `'READ MORE'`). Looping Swiper with prev / "n / N" / next in a white pill (over the text column at ≥992, below the slides at ≤991).
```jsx
<QuickLinksSlider heading={c.qlH2} text={c.qlIntro} slides={[{ title: c.s1Title, text: c.s1Text, label: 'DOWNLOAD NOW', href: 'https://teachable.com/resources/sales-page-template',
  image: { src: '/assets/6909f376f617b202473f6891_sales_page_template_image.webp', w: 1140, h: 920 } }, …]} />
```

#### Primitives (`src/components/shared/`)
- `<SectionTag>— PRODUCT DEMO</SectionTag>`: `.section-tag_wrp` eyebrow (1rem / 600 / uppercase; pass the dash yourself).
- `<CheckIcon className />` (18x14 check) and `<XIcon className />` (14x14 cross): stroke `currentColor` 2.5. Set size, colour, opacity and rotation at the call site, e.g. `<XIcon className="w-[.875rem] rotate-180 text-grey-mid" />`, `<CheckIcon className="w-[1.125rem] text-check-green" />`.
- `<Tooltip message delay=50 as className>trigger</Tooltip>` and `<TooltipIcon message className />`: a single body-level `.fb-tip` shared by all triggers, shown 50ms after hover/focus/touch, placed above the trigger (flips below), clamped to the viewport, hidden on scroll/resize. `TooltipIcon` is the `.global_tooltip-wrp` 1rem question circle at opacity .5.
- `<PostCard href image imageAlt title text author avatar avatarAlt newTab />`: examples `.global_post-card` (3/2 image, 1.5rem/600 title, author row). No hover.

### Group F page components (`src/components/pages/<slug>/`)
No shared component was changed for Group F (analytics, mobile-app, sales, site-builder, student, ai-hub, app-hub); every variant needed already existed as a prop.
- `pages/mobile-app/Rating.jsx` `<Rating heading text cards />`: feature-template T9b. `cards: [{ by, title, text }]` (`by` = italic handle • date line; 5 gold stars each). Grey band 75% / 85% ≤767, 3 → 2 (≤767) → 1 (≤479) columns. No motion.
- `pages/app-hub/AppDirectory.jsx` `<AppDirectory tabs footnote />`: app-hub §2. `tabs: [{ label, intro, apps: [{ name, logo, text, more?: { label, href } }] }]`; uses `PillTabs size="apps"` (fade out 100ms / in 300ms). `more` = `.button-simple` with the static −45° arrow (no hover on this page).
- Page copy: `src/content/{analytics-and-reporting,mobile-app,sales-and-marketing,site-builder,student-experience,ai-hub,app-hub}.js`. Strings only; headings with a glyph, `<em>`, `<strong>` or an inline link are stored as `{ pre, …, post }` parts and assembled in the page file.

### Group P page components (`src/components/pages/<slug>/`)
Shared changes (all backward compatible): `Glyph` variant `'h2-i'`; `Faq` prop `footnote`; `Layout` click handler now re-jumps when an in-page `#hash` link points at the hash already in the URL (previously the second click on `#tiers-and-perks` did nothing because the location didn't change).
- `pages/faqAnswer.jsx` `faqItems(items)` / `faqAnswer(a)`: turns content-file answers into `Faq` items. `a` = string (one `<p>`) or an array of blocks: string → `<p>`, array of segments → `<p>` with inline links (`{ label, href }`), `{ ul: [...] }` → list. Used by OC, DD, customer-journey.
- `pages/online-courses/ToolsGrid.jsx` `<ToolsGrid heading text cards />`: OC §9. `cards: [{ title, items: [string] }]` ×4 (Create / Host / Manage / Sell). Motion (IX2 "Tools Card 1–4"): IntersectionObserver per card, in at ≥20% visible, out when fully gone, replays; GSAP card y 1rem→0 (.5s) + opacity (.4s), line grows after .2s (.5s; line-3 .8s), connector after .6s (.9s); out .2s. ≥992 lengths are the IX2 values (7 / 14 / 5 / 7rem); below 992 each line grows to its CSS size for that breakpoint (vertical 1.5rem links ≤479; line-3 stays 0 there). `gsap.matchMedia` re-inits on breakpoint change. Sell has **16** items in the snapshot (the spec says 15; 16 reproduces the 910.3 card height).
- `pages/digital-downloads/SellList.jsx` `<SellList heading text items />`: DD §9, 7 file-type rows with the `seel_icon` SVGs.
- `pages/memberships/WhyStatement.jsx` `<WhyStatement heading text />`: gold `why_section_component`, `text-display-why`.
- `pages/memberships/DynaSlider.jsx` `<DynaSlider heading text tabs button />`: port of the live inline script (4s autoplay, rAF progress bar, pause/play, prev/next, tab click resets). The live **empty-third-column** loop is reproduced (0.5s blank slide, then snap to tab 0). Breakpoints follow the page CSS (height 40rem and nav/t-icon 1.5rem at ≤767, not ≤991 as memberships.md says).
- Icons: `pages/<slug>/icons.jsx` generated verbatim from `specs/svg-icons-b.md`.
- Page copy: `src/content/{online-courses,coaching,digital-downloads,memberships,customer-journey}.js`.

## Group C pages (pricing, enterprise, payments, watch-demo, examples)
Page-only components live in `src/components/pages/<slug>/`; stand-in copy in `src/content/<slug>.js`.
- pricing: `PlanCards` (PillTabs Monthly/Yearly, Yearly default; exports `PlanBullets`), `PlanComparison` (8 filter pills, default "Transaction fees & Usage", instant switch; ≤991 PillTabs `compact` per plan), `FeeDropdowns` (click toggles display, in flow, no animation), `ExitModal` (once per session `ta_exitModalShown`, ≥5s, mouseleave clientY ≤20 / fast scroll-up on touch; Esc/backdrop/× close; focus trap; body lock).
- enterprise: `ImageFeatureGrid` (foundation), `QuoteBanner`. The customer wordmark was extracted from the snapshot to `/assets/enterprise-quote-logo.svg`.
- payments: `TestimonialSlider` (500ms ease, no loop, hide-arrows, dots, pointer swipe), `VideoFeature`, `CompareTable`.
- watch-demo: `DemoUnlockHero` (local unlock only, `localStorage.teachable_demo_video_unlocked`; offer entrance W-M5 runs via the Web Animations API on unlock).
- examples: `SimpleHero`, `ExamplesTabs` (PillTabs `examples` + PostCard), `LogoRow`.

Shared changes made by Group C (all backward compatible):
- `SplitHero`: the `media.type: 'iframe'` iframe now has `inline … align-baseline`. Tailwind preflight makes iframes `display:block`, which dropped the 7.2px line-box descent the component's own comment says is part of the measured cell (enterprise hero was 740.5 instead of 747.7 @1440). Payments uses `image`, so it is unaffected.
- `tailwind.config.cjs` tokens: colours `grey-strike` #777, `ice` #e5f2ff, `grey-card` #e6e6e6, `grey-card-border` #aaa, `slate` #555, `grey-note` #666, `warm-light` #f5f3f1; shadows `frame`, `chip`, `submit`, `modal`; radius `rounded-label` .4rem; gradients `bg-plan-label`, `bg-enterprise-quote` (pair with `bg-grey-light`), `bg-demo-hero`.

Notes for anyone reusing these sections:
- `SalesForm` `form.intro`: the live HubSpot rich text is **3 lines at every width** (a ~40-char paragraph, an empty line, a ~10-char paragraph). Pass `[text, ' ', shortText]`. A plain `' '` paragraph collapses to 0px, which leaves the card 52.7px short of 695.4 @1440 (751.3 @390).
- Payments feature-row images are 1931x1228 (`payments_3x*.webp`) and 1288x819 (`affiliate_colleagues_2x`, `migrate_2x`), not the dimensions in the WhyCards example above. Lazy images lay out from the `w`/`h` attributes, so wrong values change the ≤991 row heights.
- Payments compare cells and the pricing matrix title row each carry a 1px bottom border that takes space but is not visible (live rows 72.2 @1440, header 51.7 @390; title grid 75.8). They are rendered `border-transparent`.
- The enterprise foundation item paragraphs inherit the grid's 1.15rem (`font-size--medium`), not 1.3rem as the spec text says; the live 1537.8 @1440 only adds up with 1.15rem.
