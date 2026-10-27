Source: https://www.teachable.com/

# Catalog A: section → component map for /pricing, /enterprise, /payments, /watch-demo, /examples

The per-page specs are `specs/pricing.md`, `specs/enterprise.md`, `specs/payments.md`, `specs/watch-demo.md` and `specs/examples.md`. Component names match catalog B/C where the same pattern appears: `ProductCta`, `SectionTag`, `FeatureList`, Navbar `mode="fixed"`, and the Layout `marquee` flag. "Also used by" was checked by grepping every `_snapshot/pages/*/index.html` for the section's root class.

## Layout-level changes (all 5 pages)
| Item | Decision | Props / change | Also used by |
|---|---|---|---|
| Promo marquee | REUSE `PromoMarquee` (omitted) | `Layout` per-route flag `marquee` (true only on `/`) | every non-home page |
| Nav | REUSE `Navbar` | `mode="fixed"`: `position:fixed; inset:0 0 auto; z-999`, page content starts at y=0 under it; dropdown panel `top:5rem` constant (no 8rem/4.8rem scroll switch); "Pricing" link has `.w--current` but no visual change | every non-home page (catalog B/C agree) |
| Halloween banner | not present on any of these 5 pages | none | (product pages B have it) |
| Footer | REUSE `Footer` unchanged (inside `main` on these pages; same markup and size 808.8 / 790.1 / 1631.8) | none | all |
| Hero top padding | token `--hero-top` = 12rem / 9rem (≤991) / 8rem (≤767) / 7rem (≤479) (Webflow `--_layout---spacing--hero-top-padding`) | new CSS var + `pt-hero` utility | enterprise, payments, watch-demo, examples (and B/C heroes) |

## Section table
| Page | # | Section (root class) | REUSE / NEW | Component + props | Same pattern elsewhere |
|---|---|---|---|---|---|
| pricing | 1 | Hero + plan cards `section_pricing-b` | NEW | `PlanCards` { heading, intro, defaultBilling:'annual', plans:[{name, desc, popular?, monthly:{price, href}, annual:{price, strike, save, href}, bullets:[{text, strong?, tip?}], custom?:{intro, subheading, button, label:{title, text}}}] }. Uses `PillTabs` for the Monthly/Yearly toggle and `Tooltip` for bullet tips | pricing only |
| pricing | 2 | Comparison matrix `section_price-filter-b` | NEW | `PlanComparison` { plans:[4 names], groups:[{title, filterLabel, rows:[{label, tip?, color?, tall?, values:[4 × (string \| '✓' \| '✕' \| {link})]}]}], defaultFilter:1 }. Desktop = filter pills + 0.35fr/1fr grid; ≤991 = `PillTabs` per plan (1fr .5fr rows) | pricing only |
| pricing | 3 | Fees dropdowns `section_pricing-all` | NEW | `FeeDropdowns` { heading, columns:[{title, rows:[{label, value, tip?}]}], footnote (rich, links) }: click toggles display, pushes layout, no animation | pricing only |
| pricing | 4 | Stories `section_stories` | REUSE | `Stories` unchanged (same 6 slides) | 11 product/feature pages (B/C) |
| pricing | 5 | FAQ `section_faq` | REUSE | `Faq` { heading, items:[{q, a}] × 8 } | payments, + B/C pages |
| pricing | 6 | Product CTA `section_product-cta.padding-top-0` | NEW (shared, defined in catalog B) | `ProductCta` { tone:'blue', heading, text, button:{variant:'sso', label:'Start for free', href}, padTop:false } | examples (no text, `button.variant:'primary'`); coaching, customer-journey, digital-downloads, memberships, online-courses (B/C) |
| pricing | 7 | Exit-intent modal `.modal-exit` (optional) | NEW | `ExitModal` { tag, title, text, image, cta:{label, href}, note, minDelay:5000, sessionKey } | pricing only |
| pricing | (util) | `.fb-tip` tooltip | NEW primitive | `Tooltip` (body portal, 50ms show delay, above/flip-below, .15s fade+4px rise) wrapping a `TooltipIcon` (16px question circle, opacity .5) | pricing only |
| enterprise | 1 | Split hero `section_enterprise-hero` | NEW (shared) | `SplitHero` { theme:'dark', bg:'bg-enterprise-hero', tag?, heading, text, buttons:[{variant:'sso'\|'outline-white', label, href}], media:{type:'iframe', src, aspect:'3840/2160'}, after: `<LogoMarquee …/>` } | payments hero (`theme:'light'`, media img, heading with `<em>`) |
| enterprise | 1b | Hero logo marquee `enterprise-hero_marquee-wrp` | NEW (shared) | `LogoMarquee` { rows:[{logos:[9 svg]}], logoWidth:'12.5rem', gap:'4rem', duration:30, keyframes:'half' (translateX −50%), tile:false, pauseOnHover:false } | payments logos (`tile:true`, 2 rows, row 2 reverse, `keyframes:'fullPlusGap'`, 24s, pauseOnHover, edge gradients) |
| enterprise | 2 | Use-case cards `section_enterprise-built` | REUSE (variant) | `Teach` → generalise to { heading, text?, cards:[{img, title, text, href}], arrow:false, imgRadius:'1rem', titleSize:'1.75rem/1.2', button:null }. Same 4-col image card + Ivypresto title + text + hover underline as homepage Teach | none |
| enterprise | 3 | Product demo `section_enterprise-demo` | NEW (shared) | `DemoEmbed` { tag:'— PRODUCT DEMO', heading, text, iframe:'storylane url', thumbnail, expandable:true, bg:'#182a44' }; hidden ≤991 | online-courses `section_watch-demo` (`.watch-demo_wrp`, catalog B) |
| enterprise | 4 | Workplace cards `section_enterprise-work` | NEW (shared) | `FeatureList` { title, align:'center', columns:3, card:'white', bg:'#f5f2ee', items:[{icon, title, text}], iconTile:'yellow 3.5rem', titleFont:'heading 1.75rem' } | enterprise §7, mobile-app / sales-and-marketing / site-builder `FeatureList` (catalog C) |
| enterprise | 5 | Foundation `section_foundation` | NEW (page-specific) | `ImageFeatureGrid` { heading, text, image, items:[4 × {title, text}], button } | enterprise only |
| enterprise | 6 | Quote `section_enterprise-quote` | NEW | `QuoteBanner` { logoSvg, quote, attribution, bg:'bg-enterprise-quote' } | enterprise only |
| enterprise | 7 | Security badges `section_security_badges` (`feature-list_grid`) | NEW (shared) | `FeatureList` { title, align:'left', columns:4, card:'plain', items:[{icon, title, text}] × 4, iconTile:'yellow', titleFont:'body 2rem/600' } | same as enterprise §4; `.feature-list_grid` also on mobile-app, sales-and-marketing, site-builder |
| enterprise | 8 | Sales form `section_enterprise-form#talk-to-team` | NEW (shared) | `SalesForm` { heading, paragraphs:[2], align:'center', padBottom:true } + static `HubspotForm` (fields First/Last name, Email, Phone + country select, submit) | payments §9 (`align:'left'`, padBottom 5rem) |
| payments | 1 | Hero `section_tpay_hero` | NEW (shared) | `SplitHero` { theme:'light', heading (with `<em>` word), text, buttons:[sso "Start for free", primary-white "Talk to our team"], media:{type:'img', src:'…payments_hero_image_2x.webp'}, mobileButtonsRow:true } | enterprise §1 |
| payments | 2 | Testimonial slider `section_testimonial` | NEW | `TestimonialSlider` { slides:[{avatar, name, school, headline, quote (rich, 1 strong)}], bg:'#f5f3f1' }: Webflow-style slide 500ms ease, no loop, hide-arrows, dots | payments only |
| payments | 3 | Video focus `section_video_focus` | NEW | `VideoFeature` { eyebrow, iframeSrc, aspect:'16/9', button:{variant:'primary-outline', label, href} } | payments only (compare catalog B `VideoReview` for ai-hub: different layout) |
| payments | 4 | Teachable-vs-others table `section_compare_cms` | NEW | `CompareTable` { heading, columns:['', 'Teachable', 'Others'], highlightCol:1, rows:[{label, values:[string\|'✓'\|'✕', …]}], button } | payments only |
| payments | 5 | Feature rows + header `section_features.is-white` | REUSE (variant) | `WhyCards` → generalise to { header?:{title, text}, rows:[{img, title, text, list:[…], cta?}], startWith:'image', variant:'section' (no −17vh margin, padding-section-large top+bottom, no mobile "modern learner" card), titleTag:'h2' } | payments §7 |
| payments | 6 | Migrate banner `section_migrate-cta` | NEW (shared) | `ProductCta` { tone:'blue-gradient' (`linear-gradient(#1c4774,#7791ac)`), layout:'split' (text left, button right; column ≤767), heading (h3 size), text (rich, strong), button:{variant:'primary-white', label:'See migration offer', href} } | pricing §6 / examples §4 (`layout:'stack'`) |
| payments | 7 | Feature rows `section_features.is-white` | REUSE (variant) | `WhyCards` { rows:[2], no header } (as §5) | payments §5 |
| payments | 8 | Payment-method logos `section_payment-logos` | NEW (shared) | `LogoMarquee` { heading (with `<em>`), text, rows:[{logos:[10]}, {logos:[10], reverse:true}], tile:true, edgeFade:true, duration:24, pauseOnHover:true, button } | enterprise §1b |
| payments | 9 | Sales form `section_migrate-form-2` | NEW (shared) | `SalesForm` { heading, paragraphs:[2], align:'left' } | enterprise §8 |
| payments | 10 | FAQ `section_faq` | REUSE | `Faq` { heading, items × 8 } | pricing §5 |
| watch-demo | 1 | Demo unlock hero `section_demo-hero.is-gradient` | NEW (page-specific) | `DemoUnlockHero` { tag, heading, text, form:{placeholder, submit:'Unlock demo', consent, legal}, trialLink, thumbDataUri, videoSrc, offer:{eyebrow, title, cta} }: localStorage unlock, offer slide-in | watch-demo only (the hidden older variant is not built) |
| examples | 1 | Simple hero `section_examples-hero` | NEW | `SimpleHero` { heading (3rem/1.2) } | examples only |
| examples | 2 | Category tabs + cards `section_examples-tabs` | NEW | `ExamplesTabs` { tabs:[{label, title, intro, cards:[{img, title, text, author, avatar, href, newTab?}]}] } built on `PillTabs` + `PostCard` | examples only |
| examples | 3 | Logo row `section_leaders` | NEW | `LogoRow` { text, logos:[{src, size:'sm'\|'md'\|'lg'}] } (static grid; could be `LogoMarquee` with `static:true`) | examples only |
| examples | 4 | Product CTA `section_product-cta.padding-top-0` | NEW (shared, catalog B) | `ProductCta` { tone:'blue', heading (with `<br>`), text:null, noHeaderWrap:true, button:{variant:'primary', label:'Explore Demo', href:'/watch-demo'}, padTop:false } | pricing §6 |

## Shared primitives proposed here
| Primitive | What | Used in this set | Also |
|---|---|---|---|
| `PillTabs` | Webflow-tabs clone: pill links (1px #000, radius full; current = black fill/white text), pane fade out 100ms / in 300ms `ease`. Size presets: `pricing` (.75rem 1.25rem, 400→700 weight), `examples` (.7rem 1rem, 600), `compact` (mobile plan tabs) | pricing ×2, examples | catalog B `AppDirectory` uses the same 300/100 fade |
| `SectionTag` | "— LABEL" eyebrow, 1rem / 1.5 / 600 / uppercase, flex gap .5rem | enterprise demo, watch-demo hero; payments `.eyebrow-wrp` is the same style without the dash | catalog B (ProductHero, FeatureHero) |
| `Tooltip` + `TooltipIcon` | see pricing §1 motion | pricing | none |
| `CheckIcon` / `XIcon` | 18x14 check `M1 8L6 13L17 1` stroke 2.5; 14x14 × `M1 13L13 1M1 1L13 13` stroke 2.5 | pricing bullets/matrix, payments table | homepage Pricing teaser already has the check |
| `HubspotForm` | static replica of the HubSpot form (see enterprise §8) | enterprise, payments | none |
| `PostCard` | 3/2 image (radius .6rem) + 1.5rem/600 title + 1.15rem text + 3rem avatar row | examples | none |

## New tokens to add (flagged; nothing in BUILD_NOTES covers them)
**Colours**
- `navy` #182a44 (enterprise demo/form, payments form, migrate banner base)
- `olive-deep` #1c2600 and `olive` #465f01 (enterprise hero gradient)
- `warm` #f5f2ee (enterprise-work bg; also the demo-hero gradient stop)
- `warm-light` #f5f3f1 (payments testimonial bg)
- `lime` #e0ff00 (demo-hero gradient start)
- `ice` #e5f2ff (pricing save tag)
- `grey-strike` #777
- `grey-card` #e6e6e6 and `grey-card-border` #aaa (custom plan card)
- `slate` #555 (custom-plan subheading, legal text)
- `charcoal` #4e4e4e (payments subtitle; label gradient end)
- `ink-soft` #444 (consent label)
- `check-green` #32d532
- `tooltip` #1a1a1a
- `lemon-icon` #f0ff82
- `steel` #7791ac (migrate banner gradient end)

Existing tokens already cover #ccc (`grey-rule`, HubSpot input border), #bfbfbf (`grey-mid`, matrix ✕) and #f8ffc6 (`yellow-light`).

**Gradients**
- `bg-enterprise-hero` `linear-gradient(#1c2600,#465f01)`
- `bg-enterprise-quote` `#f0f0f0` + `linear-gradient(158deg,#f8ffc6,#f0f0f0)`
- `bg-migrate-cta` `#182a44` + `linear-gradient(#1c4774,#7791ac)`
- `bg-demo-hero` `linear-gradient(rgba(255,255,255,.7),#fff), linear-gradient(150deg,#e0ff00,#f6f2ee 55%,#fff)`
- `bg-plan-label` `linear-gradient(135deg,#000 10%,#4e4e4e)`
- `bg-fade-l/-r` `linear-gradient(±90deg,#fff 38%,#fff0)`

**Spacing:** `--hero-top` (12/9/8/7rem), `--section-medium` (5rem / 4rem / 3rem; 80px measured at 390 on payments).

**Type sizes** (Ivypresto unless noted):
- 1.75rem/1.2 card titles (enterprise)
- 3.5rem/1 Peridot 700 price (≤767 2.5rem, ≤479 16vw)
- 1.75rem/1.2 Peridot strike price
- 1.0625rem/1.1 billed text
- .95rem bullets
- 1.9rem / 1.7 / 1.4rem quote (Peridot)
- 3rem/1.2 examples h1 (≤991 2.5rem, ≤479 10vw)
- `clamp(2.5rem,3.6vw,3.25rem)`/1.04, letter-spacing −.5px (watch-demo h1)

`text-large` (1.5rem/1.5) already exists. Catalog B's `cta-heading` (3rem/1.1 → 2.5rem → 10vw) is the same as `.product-cta_heading`, so reuse it.

**Radii:** .4rem (`rounded-label`: plan label, payments tag), 1.25rem (dv-offer), 20px (modal), 6px (tooltip), 2px (checkbox). `rounded-lg` 1rem and `rounded-frame` 1.5rem already exist.

**Shadows** (the homepage had none, so these are the first in the project):
- `shadow-tile` 0 2px 5px rgba(0,0,0,.08)
- `shadow-frame` 0 24px 60px rgba(17,43,70,.16)
- `shadow-chip` 0 10px 30px rgba(0,0,0,.14)
- `shadow-embed` 0 0 18px rgba(26,19,72,.15)
- `shadow-submit` 0 1px 4px rgba(30,48,39,.08)

## Missing assets (all pages in this set)
| Page | Used by | URL |
|---|---|---|
| pricing | exit-modal image | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/6ac683dd4b3f37acba0805c0_AI%20outline%20(1).webp |
| payments | testimonial avatar 1 | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/6a4fbfc1facbb36352e0c3b1_Leila_Quality_Gemini%20(3).webp |
| payments | multibanco logo | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/6a46ba61e1389f203c93c9c0_multibanco%20(1).svg |
| enterprise, payments | HubSpot form wordmark | https://50445500.fs1.hubspotusercontent-na1.net/hub/50445500/hubfs/Color_Wordmark_Icon_Wordmark_Black-2.png |
| watch-demo | blurred video thumbnail | inline `data:image/webp;base64` in `_snapshot/pages/watch-demo/index.html` (`img.dv-thumb`); no URL |

External embeds (no files): Vimeo 1199890205 (enterprise hero), 1207879910 (payments), 1232149464 (watch-demo, after unlock), all via onelineplayer.com; Storylane demo `jjiurfvxjiys` (enterprise).
