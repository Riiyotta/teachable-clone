Source: https://www.teachable.com/ (catalog C: /analytics-and-reporting, /customer-journey, /mobile-app, /sales-and-marketing, /site-builder, /student-experience)

# Catalog C: section → component mapping

Specs: `specs/feature-template.md` (shared template, T0–T12) and one delta file per page. Five pages share the feature template; **/customer-journey uses catalog-B product sections** (see `specs/customer-journey.md`, `specs/product-template.md`).

## Shell (all six pages)
| page(s) | piece | REUSE / NEW | what it needs |
|---|---|---|---|
| all 6 | PromoMarquee | REUSE (omit) | `Layout` must skip it on these routes (e.g. a per-route `marquee` flag, default on for `/` only) |
| all 6 | Navbar | REUSE + prop | `mode="fixed"`: `position:fixed; top:0; z-999` instead of sticky; dropdown panel top constant `5rem` (no scrollY 8rem/4.8rem switch) |
| all 6 | Footer | REUSE as-is | (shared gap, not page-specific: the IX2 footer-logo mouse-move parallax a-10 isn't built; see template T0) |
| all 6 | HalloweenBanner | not used | — |

## Sections
| page | # | section (Webflow class) | REUSE / NEW | component + props |
|---|---|---|---|---|
| analytics-and-reporting | 1 | `section_feature-hero` | NEW | **FeatureHero** `{tag, title (node, may contain <Glyph letter="o"/>), text, image:{src,w:589,h:720}, cta:"sso"}` |
| analytics-and-reporting | 2 | `section_feature-why` | NEW | **FeatureWhy** `{heading, size:"display", icon:true, text}` |
| analytics-and-reporting | 3 | `section_feature-explainer` | NEW | **FeatureExplainer** `{header:{title,text}, rows:[{image, pairs:[2]}, {image, pairs:[2], cta:"sso"}]}` (row order alternates automatically) |
| analytics-and-reporting | 4 | `section_stories` | REUSE | **Stories** (no props) |
| analytics-and-reporting | 5 | `section_product-blog` | NEW (shared with catalog B T8) | **ProductBlog** `{title, text, cards:[{title, text, href}] (no image), linkLabel:"READ MORE"}` + MF2 hover |
| analytics-and-reporting | 6 | `section_feature-cta.padding-top-0` | NEW | **FeatureCta** `{title, text:null, pad:"bottom"}` |
| customer-journey | 1 | `section_product-hero` (no banner) | REUSE catalog-B **ProductHero** (NEW there) | variant `{top:"hero" (12rem/9/8/7), buttons:[{variant:"secondary", label:"Explore the program", href:"#tiers-and-perks"}], image square, title with <Glyph e/> + <Glyph o/>}` |
| customer-journey | 2 | `section_product-why` | NEW (same as analytics #2) | **FeatureWhy** `{heading (3 italic lead words), size:"smaller", bg:"gold", text}` |
| customer-journey | 3 | `section_steps` | REUSE catalog-B **Steps** (coaching) | variant `"tiers"`: `{id:"tiers-and-perks", title (with <Glyph o/>), cards:[{badge, tone:"gold"|"navy"|"maroon", title, summary, bullets:[…], tail:{button}|{footnote}|null}], pulse:{duration:6s, delays:[0,1.5,3], tints:[#fbf7e5,#e7eef3,#efe7e6]}}` |
| customer-journey | 4 | `section_product-blog` | — | empty on the live page: render nothing |
| customer-journey | 5 | `section_product-cta.padding-0` | — | empty: render nothing |
| customer-journey | 6 | `section_faq.padding-top-0` | REUSE | **Faq** `{heading, items (6; one answer = 3 paragraphs), paddingTop:0}` |
| customer-journey | 7 | `section_product-cta.padding-top-0` | REUSE catalog-B **ProductCta** (NEW there) | variant `"black"`: `{bg:#000, headingColor:yellow, noHeaderWrap:true, title, text, button:{variant:"secondary", label:"See tiers + rewards", href:"#tiers-and-perks"}, pad:"bottom"}` |
| mobile-app | 1 | `section_feature-hero` | NEW | **FeatureHero** `{tag, title (<Glyph e/>), text (one bold-italic run), image:{540x720}}` |
| mobile-app | 2 | `section_feature-why` | NEW | **FeatureWhy** `{heading, size:"smaller", pill:"<25-char label>", text}` |
| mobile-app | 3 | `section_feature-explainer` | NEW | **FeatureExplainer** `{header:null, rows:[{image, pairs:[1], cta:"sso"}]}` |
| mobile-app | 4 | `section_feature-list.padding-top-0` | NEW | **FeatureList** `{title, text, cards:[4], icons:true, padTop:false}` + MF1 scrub |
| mobile-app | 5 | `section_feature-2col.padding-0` | NEW | **FeatureTwoCol** `{title, text, image, button:{variant:"sso"}, pad:"none"}` |
| mobile-app | 6 | `section_stories` | REUSE | **Stories** |
| mobile-app | 7 | `section_rating` | NEW | **Rating** `{title, text, reviews:[{title, text, byline}] ×3}` |
| mobile-app | 8 | `section_feature-cta.padding-0` | NEW | **FeatureCta** `{title, text, pad:"none"}` |
| mobile-app | 9 | `section_faq` | REUSE | **Faq** `{heading, items (6)}` |
| sales-and-marketing | 1 | `section_feature-hero` | NEW | **FeatureHero** `{tag, title (<Glyph e/>), text, image 540x720}` |
| sales-and-marketing | 2 | `section_feature-why` | NEW | **FeatureWhy** `{heading, size:"display", icon:true, text}` |
| sales-and-marketing | 3 | `section_feature-explainer` | NEW | **FeatureExplainer** `{header, rows:[{pairs:2},{pairs:2},{pairs:2, cta:"sso"}]}` |
| sales-and-marketing | 4 | `section_feature-list.padding-top-0` | NEW | **FeatureList** `{title (one <em> word), text, cards:[8], icons:false, padTop:false}` + MF1 |
| sales-and-marketing | 5 | `section_stories` | REUSE | **Stories** |
| sales-and-marketing | 6 | `section_feature-int` | NEW | **FeatureTwoCol** `{variant:"int" (pt 0 / pb 8rem), title, text, image, button:{variant:"secondary", label:"Explore the App Hub", href:"/app-hub"}}` |
| sales-and-marketing | 7 | `section_quick-links` | NEW | **QuickLinksSlider** `{title, text, slides:[{title, text, label:"DOWNLOAD NOW"|"READ MORE", href, image}] ×5}` (Swiper MF3; reuse the prev / "n / N" / next nav from `CaseStudy`, ideally extracted as a shared `SliderNav`) |
| sales-and-marketing | 8 | `section_feature-cta` | NEW | **FeatureCta** `{title, text, pad:"full"}` |
| site-builder | 1 | `section_feature-hero.padding-bottom-0` | NEW | **FeatureHero** `{…, image 542x720, padBottom:false}` (no glyph) |
| site-builder | 2 | `section_feature-explainer` | NEW | **FeatureExplainer** `{header, rows:[{pairs:2},{pairs:2, cta:"sso"}]}` |
| site-builder | 3 | `section_feature-list` | NEW | **FeatureList** `{title (<em> word), text, cards:[8], icons:false, padTop:true}` + MF1 |
| site-builder | 4 | `section_stories` | REUSE + prop | **Stories** `{centered:true}` → Swiper `centeredSlides:true, autoHeight:true` |
| site-builder | 5 | `section_feature-cta.padding-0` | NEW | **FeatureCta** `{title, text, pad:"none"}` |
| site-builder | 6 | `section_faq` | REUSE | **Faq** `{heading, items (4)}` |
| student-experience | 1 | `section_feature-hero` | NEW | **FeatureHero** `{tag, title (<Glyph e/>), text, image 540x720}` |
| student-experience | 2 | `section_feature-why` | NEW | **FeatureWhy** `{heading, size:"display", text}` (no pill, no icon) |
| student-experience | 3 | `section_feature-explainer` | NEW | **FeatureExplainer** `{header, rows:[{pairs:2},{pairs:2},{pairs:2 (2nd title is a link), cta:"sso"}]}` |
| student-experience | 4 | `section_stories` | REUSE | **Stories** |
| student-experience | 5 | `section_feature-cta.padding-top-0` | NEW | **FeatureCta** `{title, text:null, pad:"bottom"}` |

## Proposed new shared components (one per pattern)
| component | used by (catalog C) | also used elsewhere | key variants |
|---|---|---|---|
| FeatureHero | analytics, mobile, sales, site-builder, student | — | `padBottom`, image ratio from the asset, optional glyph in title |
| FeatureWhy | analytics, mobile, sales, student, customer-journey | — | `size: display (6rem) / smaller (4rem)`, `bg: yellow / gold`, `pill` or `icon` or neither |
| FeatureExplainer | all 5 template pages | — | optional header; 1–3 alternating rows; 1–2 title/text pairs per row; optional row CTA |
| FeatureList | mobile, sales, site-builder | — | `icons`, `padTop`, 4 or 8 cards; MF1 GSAP scrub |
| FeatureTwoCol | mobile (2col), sales (int) | — | `variant: 2col / int`, `pad`, button variant |
| FeatureCta | analytics, mobile, sales, site-builder, student | ai-hub, app-hub (`feature-cta_heading` present in their snapshots) | `pad: full / bottom / none`, optional paragraph |
| Rating | mobile | — | — |
| QuickLinksSlider | sales | — | — |
| ProductBlog | analytics | catalog B (coaching with images, memberships without) | optional card image |
| ProductHero / Steps / ProductCta | customer-journey | catalog B (defined there) | `top:"hero"`, `variant:"tiers"`, `variant:"black"` |
| Glyph (helper) | heroes, steps heading | homepage scale headings (`scale/shared.jsx` already has the "o") | `letter: e / o`, `size: h1 / h2` |
| ButtonSimple (helper) | product-blog, quick-links | catalog B | label + arrow rotated −45°, optional hover un-rotate |

## Tokens to add (details in feature-template.md T11)
- `--hero-top`: 12rem / 9rem ≤991 / 8rem ≤767 / 7rem ≤479.
- Color `gold` #ffd700. Step tints #fbf7e5, #e7eef3, #efe7e6 (customer-journey only; can stay local).
- Display/heading sizes: why heading 6rem→5→3→12vw; `.is-smaller` 4rem→3→2.5→10vw; explainer subheading 3rem→2rem→8vw; list card title 2rem→1.75→1.5→8vw; CTA heading 3rem→2.5→10vw; quick-slider title 3rem→2.5→1.5→7vw; 2.25rem card titles; rating title 1.5rem/1.2.

## Missing assets
Only one, used by the `e` glyph on mobile-app, sales, student and customer-journey:
`68b754d6a559281c2a42e12b_teachable-text-e.svg` → https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68b754d6a559281c2a42e12b_teachable-text-e.svg
