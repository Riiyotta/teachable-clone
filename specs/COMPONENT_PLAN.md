# Component plan: built once, reused everywhere

Merged from catalog-a.md, catalog-b.md and catalog-c.md. Each component below has exactly one owner and lives in one file. Page builders import components; they never re-implement a section that is listed here. If a page needs a variant, add a prop to the owning component (and note it in BUILD_NOTES.md) instead of copying it.

## Copy policy (non-home pages)
These 17 pages were fetched from the live site, not supplied by the user, so their original wording is not reproduced. Every text slot gets short original stand-in text that has the character count and line count the spec records, so the layout matches. Write it fresh from the slot's purpose; don't open the snapshot HTML to paraphrase or lightly reword the original sentences. Functional UI labels the specs record as-is (nav, button labels, plan names, prices, comparison-table feature names, app and integration names, filter/tab names) are used as recorded. Stand-in text lives in `src/content/<slug>.js`, never inline in components.

## Phase 1: shell and existing components (in progress)
Owner: refactor agent. It covers the per-route shell (no marquee, fixed nav, dropdown top 5rem, `--hero-top`), the footer parallax, props on Faq / Hub / HalloweenBanner / Stats / Stories, the `Glyph` primitive, and the shared new tokens. Its API is documented in BUILD_NOTES.md → "Reusable components".

## Phase 2: new shared components (used by 2+ pages)
Owner: shared-components agent. Files go in `src/components/sections/` (sections) and `src/components/shared/` (primitives).

| Component | Variants / props | Used by | Spec source |
|---|---|---|---|
| ProductHero | buttons (primary+secondary / secondary only), image, bg (default / gold image) | online-courses, coaching, digital-downloads, memberships, customer-journey | product-template T-hero, customer-journey |
| FeatureHero | glyph letter in title, image size, bottom padding on/off, login line | analytics, mobile-app, sales, site-builder, student-experience, ai-hub, app-hub | feature-template, ai-hub F1, app-hub |
| SplitHero | tone (dark olive / light), media (vimeo / image), logo marquee slot, button layout | enterprise, payments | enterprise, payments |
| FeatureExplainer | optional centred header, rows[] alternating sides, 1–2 text pairs per row | 5 feature pages, ai-hub | feature-template, ai-hub F3 |
| FeatureSplit | skin grey / white, rows alternate image side | online-courses, coaching, digital-downloads | product-template |
| FeatureWhy | heading size (6rem / 4rem), right column: pill / icon circle / none, gold tone | 4 feature pages, customer-journey | feature-template, customer-journey |
| FeatureList | 4 / 8 cards, icons optional, stagger-flatten scrub on/off, skin (grey / white icon cards / badges) | 5 feature pages, enterprise ×2 | feature-template, enterprise |
| FeatureTwoCol | secondary button optional | mobile-app, sales | feature-template |
| StaggerCards | skin platform / spotlight | online-courses, coaching | product-template |
| Steps | background pulse 4s, stagger .2s; tier-card variant with 6s pulse and tints | coaching, customer-journey | product-template, customer-journey |
| StatsMarquee | 60s linear CSS loop, stacked at ≤479 | product pages | product-template |
| ResourceCards (= ProductBlog) | with images / text-only | coaching, memberships, ai-hub, analytics | product-template, ai-hub, analytics |
| ProductCta (= FeatureCta) | tone blue / red / black-with-yellow-heading; paragraph optional; login line; section padding full / bottom / none; split banner variant | pricing, examples, payments banner, all product pages, all feature pages, ai-hub, app-hub, customer-journey | product-template, feature-template, catalog-a |
| LogoMarquee | rows 1 / 2, reverse second row, duration, pause on hover | enterprise, payments | enterprise, payments |
| SalesForm | static replica of the HubSpot form (no submission) | enterprise, payments | enterprise, payments |
| DemoEmbed | expand/collapse frame, hidden ≤991 | enterprise (online-courses' copy is display:none, so it is not built) | enterprise |
| VideoReview + Lightbox | Vimeo lightbox | ai-hub, payments video section if it matches | ai-hub, payments |
| PillTabs | pill filter/tab row, fade 100ms out / 300ms in | pricing ×2, examples, app-hub AppDirectory | pricing, examples, app-hub |
| QuickLinksSlider | Swiper, prev / "n / N" / next | sales | feature-template (kept shared; same control pattern as CaseStudy) |
| shared/SectionTag, shared/Tooltip, shared/CheckIcon, shared/XIcon, shared/PostCard, shared/ButtonSimple | primitives | several | catalogs |

Generalise these existing homepage components instead of creating new ones:
- `Teach`: add `cards` / heading props so it can render the enterprise use-case cards.
- `WhyCards`: add `rows`, an optional header and `overlap={false}` for the payments feature rows.

## Phase 3: pages (one builder per group, run in parallel)
Each builder composes its pages from Phase 1 and 2 components and builds only the single-page components listed for its group, under `src/components/pages/<slug>/`.

- **Group P (product)**: online-courses (ToolsGrid), coaching, digital-downloads (SellList), memberships (WhyStatement, DynaSlider), customer-journey.
- **Group F (feature and hubs)**: analytics-and-reporting, mobile-app (Rating), sales-and-marketing, site-builder, student-experience, ai-hub, app-hub (AppDirectory).
- **Group C (commercial)**: pricing (PlanCards, PlanComparison, FeeDropdowns, ExitModal), enterprise (ImageFeatureGrid, QuoteBanner), payments (TestimonialSlider, VideoFeature, CompareTable), watch-demo (DemoUnlockHero; thumbnail at /assets/watch-demo-thumb.webp), examples (SimpleHero, ExamplesTabs, LogoRow).

Each page registers itself in `PAGES` in src/App.jsx with one import line plus one map entry. Builders edit only their own lines there.
