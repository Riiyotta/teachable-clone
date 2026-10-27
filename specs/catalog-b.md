Source: https://www.teachable.com/

# Catalog B: section → component mapping
Pages covered: /online-courses, /coaching, /digital-downloads, /memberships, /ai-hub, /app-hub. Details are in `specs/product-template.md`, `specs/<slug>.md` and `specs/svg-icons-b.md`.

"Also used by" comes from a class search across all 17 snapshot pages in `_snapshot/pages/` (catalog A/C pages included), so shared components can be built once.

## Layout-level changes (not sections)
| Item | Decision | Props / notes | Also applies to |
|---|---|---|---|
| Promo marquee | **hidden** on these routes | `Layout` flag `showMarquee={false}` | every non-home snapshot page (none of them contain `.master-nav-marquee_component`) |
| Nav | REUSE `Navbar` | wrapper `position: fixed` instead of sticky (`nav_fixed` without `.is-sticky`). Add `navMode="fixed"`; dropdown top always 4.8rem | **all 17 non-home pages** use `nav_fixed` (only the homepage has `.is-sticky`) |
| Footer | REUSE `Footer` | add the IX2 mouse-move parallax on the echo logos (product-template G3); it is missing from the current build and also applies to the homepage | all pages |

## Section table
| Page | # | Section (original class) | REUSE / NEW | Component + props | Also used by |
|---|---|---|---|---|---|
| online-courses, coaching, digital-downloads, memberships | 1 | Campaign banner `section_halloween_banner.padding-top-xlarge` | REUSE | `HalloweenBanner` + `topPad` (8rem / 5rem ≤991 / 3rem ≤767) | – |
| online-courses, coaching, digital-downloads, memberships | 2 | Product hero `section_product-hero` | NEW | `ProductHero` { tag, heading, text (rich: strong), image {src,w,h}, imageBg? ('gold' for coaching), primary/secondary buttons, hasTopBanner (top pad 5rem vs 12rem) } | customer-journey (catalog C) |
| online-courses, coaching, digital-downloads, ai-hub | 3 | Stats marquee `stats-marquee_instance` (≥480) | NEW | `StatsMarquee` { items:[{num,label,icon:'dollar'\|'students'\|'globe'}] }; 2 duplicated blocks, CSS 60s loop | enterprise has an `.is-enterprise` variant in CSS (yellow-light bg, olive num) – check catalog A |
| online-courses, coaching, digital-downloads, ai-hub | 3m | Stats stack `section_stats-mob` (≤479) | REUSE (variant) | `Stats` + `variant="stack"` + `items` (same `stats-mob_*` DOM as the homepage Stats, base variant: vertical stack, gradient chip, vertical divider with dot). Render it together with `StatsMarquee` via one wrapper `ProductStats { marquee, stack }` | – |
| online-courses (×2), coaching (×1, 2 rows), digital-downloads (×3) | 4–6 | Feature split `section_product` (grey) / `section_build` (white) | NEW | `FeatureSplit` { tone:'grey'\|'white', heading, text?, headerMax:'64rem'\|'58rem', rows:[{ image, imageSide:'left'\|'right', items:[{title,text}], button? }] } | – |
| online-courses | 6 | Platform cards `section_platform` | NEW | `StaggerCards` { heading, text, skin:'platform'\|'spotlight', cards:[{image,title,text,button?}], footerButton? } (stagger 6rem/0/3rem) | – |
| coaching | 6 | Spotlight cards `section_spotlight` | NEW (same as above) | `StaggerCards skin="spotlight"`, card buttons "See it in action", heading glyph `span_h2-spotlight` | – |
| coaching | 4 | Steps `section_steps` | NEW | `Steps` { heading, text, steps:[{label,title,text}] }, CSS bgSteps 4s pulse, 0/.2/.4s stagger | customer-journey (catalog C) |
| coaching (images), memberships (no images), ai-hub (no images) | 7 / 6 / 5 | Resource cards `section_product-blog` | NEW | `ResourceCards` { heading, text, cards:[{href,image?,title,text}] } with "READ MORE" button-simple and hover underline + arrow | analytics-and-reporting, customer-journey (catalog C) |
| online-courses | 9 | Tools 4-column `section_tools` | NEW (page-specific) | `ToolsGrid` { heading (with o-glyph), text, columns:[{title,icon,tone:'white'\|'gold',items[]}] } + IX2 scroll-in per card (translateY 1rem/opacity, dashed connector lines grow) | – |
| digital-downloads | 9 | Sell list `section_sell` | NEW (page-specific) | `SellList` { heading, text, items:[{icon,label}] } (reuses the `.tools_list-content` row style from ToolsGrid → share a `CheckRow`/`IconRow` primitive) | – |
| memberships | 3 | Why statement `why_section_component` | NEW | `WhyStatement` { heading, text (rich), bg:'gold'\|'yellow' } (a CSS variant has a yellow bg and a 4rem heading) | – |
| memberships | 4 | Dyna slider `section_product-tabs` | NEW | `DynaSlider` { heading, text, tabs:[{title,text,image,imageBg?}], button } with a 4s autoplay rAF progress, pause/play, prev/next, the 500%-wide image strip and accordion details | – |
| memberships | 5 | Pricing teaser `section_home-pricing` | REUSE | `Pricing` unchanged (identical copy and asset) | – |
| online-courses, coaching, digital-downloads, memberships | – | Hub `section_hub` | REUSE | `Hub` + `heading`, `text` props (logos, grid, tooltips, ScrollTrigger and button unchanged) | – |
| online-courses, coaching, digital-downloads, memberships, ai-hub | – | Stories `section_stories` | REUSE | `Stories` unchanged (same 6 slides, same copy, same Swiper config) | analytics, mobile-app, sales-and-marketing, site-builder, student-experience, pricing |
| online-courses (`padding-0`), coaching (`padding-0`), digital-downloads (`padding-bottom-0`), memberships (`padding-top-0`) | – | Product CTA `section_product-cta` | NEW | `ProductCta` { tone:'blue'\|'red', heading, text?, headingMax?:'58rem', button:{variant:'sso'\|'primary', label, href}, loginLine?, padTop:boolean, padBottom:boolean } | customer-journey, examples, pricing (catalog A/C) |
| ai-hub, app-hub | – | Feature CTA `section_feature-cta` (red #7f2a23) | NEW (same component) | `ProductCta tone="red"`; app-hub adds the paragraph + `loginLine` | analytics, mobile-app, sales-and-marketing, site-builder, student-experience (catalog C) |
| online-courses (11 items), coaching (3), digital-downloads (8) | – | FAQ `section_faq` | REUSE | `Faq` + `heading`, `items:[{q, a (rich: paragraphs, ul, links)}]` | customer-journey, mobile-app, pricing, payments, site-builder |
| ai-hub, app-hub | 1 | Feature hero `section_feature-hero` | NEW | `FeatureHero` { tag, heading (rich: em, glyph span), text (rich), image (3:4), button, loginLine?, padBottom:boolean } | analytics, site-builder, mobile-app, student-experience, sales-and-marketing (catalog C) |
| ai-hub | 2 | Video testimonial `section_video-review` | NEW | `VideoReview` { thumb, caption, duration, quote (rich), attribution, video:{vimeoUrl,w,h} } + a `Lightbox` modal; it shares the `global_video-icon` play glyph (make `PlayIcon` a shared primitive) | – |
| ai-hub | 3 | Feature explainer `section_feature-explainer` | NEW | `FeatureExplainer` { heading, text, rows:[{image, imageSide, title, text, button?}] } (similar idea to FeatureSplit, but with different padding/type, so keep it separate or make it a `FeatureSplit` skin) | analytics, mobile-app, sales-and-marketing, student-experience, site-builder (catalog C) |
| app-hub | 2 | App directory tabs `section_feature-apps` | NEW (page-specific) | `AppDirectory` { tabs:[{label, intro, apps:[{name,logo,text,href?}]}], footnote } (Webflow-tabs fade 300/100ms) | – |
| all six | – | Footer | REUSE | `Footer` (+ G3 parallax) | all |

**Naming alignment with catalog C (`specs/feature-template.md`):** `FeatureHero`, `FeatureExplainer` and `FeatureCta`/`ProductCta` above are the same components as catalog C's T2/T4/T7. `ResourceCards` = their `ProductBlog` (T9c). Use one implementation of each.

## Shared primitives worth extracting
- `SectionTag` ("— LABEL" eyebrow, 1rem/600 uppercase): ProductHero, FeatureHero.
- `GlyphSpan` (transparent letter plus SVG background: `o-long`, `i-long`, `text-a`), with per-glyph background-position, size and margins: tools heading, coaching headings, app-hub h1. The homepage scale headings already use the `o` variants.
- `ButtonSimple` ("READ MORE"/"LEARN MORE" + .75rem arrow at −45°): ResourceCards, AppDirectory.
- `PlayIcon` (`global_video-icon`, `.is-black` variant): VideoReview (and probably catalog-A watch-demo).
- `IconRow` (`.tools_list-content`: icon + label + bottom rule): ToolsGrid, SellList.

## New tokens to add (detail in product-template.md G5)
`gold #ffd700`, `grey-footnote #444`, `bg-stats-chip`, `bg-stats-rule`, plus type sizes `subheading` (2.25rem/1.2), `card-title` (2.25rem/1.1), `cta-heading` (3rem/1.1 → 2.5rem → 10vw), `display-why` (6rem/1.1), `tools-heading` (5rem/1.1), `marquee-stat` (1.75rem/1.5).

## Missing assets (catalog B)
| Page | Used by | URL |
|---|---|---|
| coaching | `span.span_h2-all` glyph | https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68b7568dc595a93d5c9a9b0d_teachable-text-a.svg |
