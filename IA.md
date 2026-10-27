# Local replica of teachable.com (homepage + 17 main-nav pages), React + Vite clone at /src

Source: Local replica of teachable.com (homepage + 17 main-nav pages), React + Vite clone at /src
Status: **measured-from-codebase** · production approved: **false**
18 routes · 18 templates · 64 unique sections

> Generated from `ia.json` by `build.mjs`. Edit the JSON, not this file.

## Shape of the site

The largest 3 templates (Homepage, Online courses, Coaching) account for 3 of 18 routes (17%). The remaining 15 routes span 15 templates.

| template | routes | share |
|---|---:|---:|
| Homepage | 1 | 6% |
| Online courses | 1 | 6% |
| Coaching | 1 | 6% |
| Digital downloads | 1 | 6% |
| Memberships | 1 | 6% |
| Customer journey | 1 | 6% |
| Analytics and reporting | 1 | 6% |
| Mobile app | 1 | 6% |
| Sales and marketing | 1 | 6% |
| Site builder | 1 | 6% |
| Student experience | 1 | 6% |
| AI hub | 1 | 6% |
| App hub | 1 | 6% |
| Pricing | 1 | 6% |
| Enterprise | 1 | 6% |
| Payments | 1 | 6% |
| Watch demo | 1 | 6% |
| Examples | 1 | 6% |

## Page chrome

**1 routes carry chrome = `home-shell`** — Homepage.

**17 routes carry chrome = `page-shell`** — Online courses, Coaching, Digital downloads, Memberships, Customer journey, Analytics and reporting, Mobile app, Sales and marketing, Site builder, Student experience, AI hub, App hub, Pricing, Enterprise, Payments, Watch demo, Examples.

## Sections by reuse

How widely a section is shared determines whether it belongs in a shared
component library or stays local to its page.

| section | category | templates | routes | implementation | scope |
|---|---|---:|---:|---|---|
| `shell.footer` | SHELL | 18 | 18 | `components/Footer.jsx` | All 18 routes. |
| `shell.navbar-fixed` | SHELL | 17 | 17 | `components/Navbar.jsx (shell: page)` | Every non-home route; 17 routes. |
| `conversion.cta-card` | CONVERSION | 14 | 14 | `components/sections/ProductCta.jsx (layout: stack)` | Four product pages, customer-journey, five feature pages, ai-hub, app-hub, pricing and examples; 14 routes. |
| `proof.stories-carousel` | PROOF | 12 | 12 | `components/Stories.jsx` | Homepage, four product pages, five feature pages, ai-hub and pricing; 12 routes. |
| `support.faq` | SUPPORT | 9 | 9 | `components/Faq.jsx` | Homepage, three product pages, customer-journey, mobile-app, site-builder, pricing and payments; 9 routes. |
| `hero.feature` | HERO | 7 | 7 | `components/sections/FeatureHero.jsx` | Five feature pages plus ai-hub and app-hub; 7 routes. |
| `features.explainer` | FEATURES | 6 | 6 | `components/sections/FeatureExplainer.jsx` | Five feature pages plus ai-hub; 6 routes. |
| `campaign.halloween-banner` | CAMPAIGN | 5 | 5 | `components/HalloweenBanner.jsx` | Homepage plus four product pages; 5 routes. |
| `hero.product` | HERO | 5 | 5 | `components/sections/ProductHero.jsx` | The four product pages plus customer-journey; 5 routes. |
| `features.integrations-hub` | FEATURES | 5 | 5 | `components/Hub.jsx` | Homepage plus four product pages; 5 routes. |
| `features.why-band` | FEATURES | 5 | 5 | `components/sections/FeatureWhy.jsx` | Four feature pages plus customer-journey; 5 routes. |
| `proof.stats-marquee` | PROOF | 4 | 4 | `components/sections/StatsMarquee.jsx` | Three product pages plus ai-hub; 4 routes. |
| `proof.stats-stack` | PROOF | 4 | 4 | `components/Stats.jsx (variant: stack)` | Three product pages plus ai-hub; 4 routes. |
| `support.resource-cards` | SUPPORT | 4 | 4 | `components/sections/ResourceCards.jsx` | Coaching, memberships, analytics-and-reporting and ai-hub; 4 routes. |
| `features.feature-split` | FEATURES | 3 | 3 | `components/sections/FeatureSplit.jsx` | Online-courses, coaching and digital-downloads, used one to three times per page; 3 routes. |
| `features.card-list` | FEATURES | 3 | 3 | `components/sections/FeatureList.jsx (skin: grey)` | Mobile-app, sales-and-marketing and site-builder; 3 routes. |
| `hero.split` | HERO | 2 | 2 | `components/sections/SplitHero.jsx` | Enterprise and payments; 2 routes. |
| `features.stagger-cards` | FEATURES | 2 | 2 | `components/sections/StaggerCards.jsx` | Online-courses and coaching; 2 routes. |
| `features.two-col` | FEATURES | 2 | 2 | `components/sections/FeatureTwoCol.jsx` | Mobile-app and sales-and-marketing; 2 routes. |
| `offering.pricing-teaser` | OFFERING | 2 | 2 | `components/Pricing.jsx` | Homepage and memberships; 2 routes. |
| `conversion.sales-form` | CONVERSION | 2 | 2 | `components/sections/SalesForm.jsx` | Enterprise and payments; 2 routes. |
| `shell.promo-marquee` | SHELL | 1 | 1 | `components/PromoMarquee.jsx` | Homepage only; 1 route. |
| `shell.navbar-sticky` | SHELL | 1 | 1 | `components/Navbar.jsx (shell: home)` | Homepage only; 1 route. |
| `hero.home-tabs` | HERO | 1 | 1 | `components/Hero.jsx` | Homepage only; 1 route. |
| `hero.text-only` | HERO | 1 | 1 | `components/pages/examples/SimpleHero.jsx` | Examples only; 1 route. |
| `hero.demo-unlock` | HERO | 1 | 1 | `components/pages/watch-demo/DemoUnlockHero.jsx` | Watch-demo only; 1 route. |
| `proof.stats-row` | PROOF | 1 | 1 | `components/Stats.jsx (variant: home)` | Homepage only; 1 route. |
| `proof.case-study-slider` | PROOF | 1 | 1 | `components/CaseStudy.jsx` | Homepage only; 1 route. |
| `proof.video-review` | PROOF | 1 | 1 | `components/sections/VideoReview.jsx` | Ai-hub only; 1 route. |
| `proof.testimonial-slider` | PROOF | 1 | 1 | `components/pages/payments/TestimonialSlider.jsx` | Payments only; 1 route. |
| `proof.quote-banner` | PROOF | 1 | 1 | `components/pages/enterprise/QuoteBanner.jsx` | Enterprise only; 1 route. |
| `proof.security-badges` | PROOF | 1 | 1 | `components/sections/FeatureList.jsx (skin: badges)` | Enterprise only; 1 route. |
| `proof.logo-marquee` | PROOF | 1 | 1 | `components/sections/LogoMarquee.jsx (variant: tiles)` | Payments only; 1 route. |
| `proof.logo-row` | PROOF | 1 | 1 | `components/pages/examples/LogoRow.jsx` | Examples only; 1 route. |
| `proof.rating` | PROOF | 1 | 1 | `components/pages/mobile-app/Rating.jsx` | Mobile-app only; 1 route. |
| `features.demo-cta` | FEATURES | 1 | 1 | `components/DemoCta.jsx` | Homepage only; 1 route. |
| `features.why-scroll` | FEATURES | 1 | 1 | `components/WhyScroll.jsx` | Homepage only; 1 route. |
| `features.why-cards` | FEATURES | 1 | 1 | `components/WhyCards.jsx (overlap)` | Homepage only; 1 route. |
| `features.feature-rows` | FEATURES | 1 | 1 | `components/WhyCards.jsx (overlap: false)` | Payments only, used twice on the page; 1 route. |
| `features.scale-slider` | FEATURES | 1 | 1 | `components/Scale.jsx` | Homepage only; 1 route. |
| `features.ai-automations` | FEATURES | 1 | 1 | `components/Smart.jsx` | Homepage only; 1 route. |
| `features.steps` | FEATURES | 1 | 1 | `components/sections/Steps.jsx (variant: steps)` | Coaching only; 1 route. |
| `features.tier-cards` | FEATURES | 1 | 1 | `components/sections/Steps.jsx (variant: tiers)` | Customer-journey only; 1 route. |
| `features.why-statement` | FEATURES | 1 | 1 | `components/pages/memberships/WhyStatement.jsx` | Memberships only; 1 route. |
| `features.quick-links-slider` | FEATURES | 1 | 1 | `components/sections/QuickLinksSlider.jsx` | Sales-and-marketing only; 1 route. |
| `features.tools-grid` | FEATURES | 1 | 1 | `components/pages/online-courses/ToolsGrid.jsx` | Online-courses only; 1 route. |
| `features.sell-list` | FEATURES | 1 | 1 | `components/pages/digital-downloads/SellList.jsx` | Digital-downloads only; 1 route. |
| `features.dyna-slider` | FEATURES | 1 | 1 | `components/pages/memberships/DynaSlider.jsx` | Memberships only; 1 route. |
| `features.app-directory` | FEATURES | 1 | 1 | `components/pages/app-hub/AppDirectory.jsx` | App-hub only; 1 route. |
| `features.use-case-cards` | FEATURES | 1 | 1 | `components/Teach.jsx (skin: enterprise)` | Enterprise only; 1 route. |
| `features.demo-embed` | FEATURES | 1 | 1 | `components/sections/DemoEmbed.jsx` | Enterprise only; 1 route. |
| `features.work-cards` | FEATURES | 1 | 1 | `components/sections/FeatureList.jsx (skin: white)` | Enterprise only; 1 route. |
| `features.image-feature-grid` | FEATURES | 1 | 1 | `components/pages/enterprise/ImageFeatureGrid.jsx` | Enterprise only; 1 route. |
| `features.video-feature` | FEATURES | 1 | 1 | `components/pages/payments/VideoFeature.jsx` | Payments only; 1 route. |
| `features.compare-table` | FEATURES | 1 | 1 | `components/pages/payments/CompareTable.jsx` | Payments only; 1 route. |
| `features.examples-tabs` | FEATURES | 1 | 1 | `components/pages/examples/ExamplesTabs.jsx` | Examples only; 1 route. |
| `offering.product-cards` | OFFERING | 1 | 1 | `components/Teach.jsx` | Homepage only; 1 route. |
| `offering.plan-cards` | OFFERING | 1 | 1 | `components/pages/pricing/PlanCards.jsx` | Pricing only; 1 route. |
| `offering.plan-comparison` | OFFERING | 1 | 1 | `components/pages/pricing/PlanComparison.jsx` | Pricing only; 1 route. |
| `offering.fee-dropdowns` | OFFERING | 1 | 1 | `components/pages/pricing/FeeDropdowns.jsx` | Pricing only; 1 route. |
| `conversion.payments-cta` | CONVERSION | 1 | 1 | `components/PaymentsCta.jsx` | Homepage only; 1 route. |
| `conversion.migrate-banner` | CONVERSION | 1 | 1 | `components/sections/ProductCta.jsx (layout: split)` | Payments only; 1 route. |
| `conversion.impact-cta` | CONVERSION | 1 | 1 | `components/Impact.jsx` | Homepage only; 1 route. |
| `conversion.exit-modal` | CONVERSION | 1 | 1 | `components/pages/pricing/ExitModal.jsx` | Pricing only; 1 route. |

**21 shared sections** appear in more than one template and belong in a component library.

**43 single-use sections** appear in exactly one template. Building these
as "reusable" components up front would be speculative — keep them page-local
until a second caller actually appears.

## Templates

### Homepage — `template.home`

1 route · `/` · chrome: **home-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.promo-marquee` | page-local |
| 2 | SHELL | `shell.navbar-sticky` | page-local |
| 3 | CAMPAIGN | `campaign.halloween-banner` | shared ×5 |
| 4 | HERO | `hero.home-tabs` | page-local |
| 5 | PROOF | `proof.stats-row` | page-local |
| 6 | FEATURES | `features.demo-cta` | page-local |
| 7 | OFFERING | `offering.product-cards` | page-local |
| 8 | CONVERSION | `conversion.payments-cta` | page-local |
| 9 | FEATURES | `features.why-scroll` | page-local |
| 10 | FEATURES | `features.why-cards` | page-local |
| 11 | FEATURES | `features.scale-slider` | page-local |
| 12 | FEATURES | `features.ai-automations` | page-local |
| 13 | PROOF | `proof.stories-carousel` | shared ×12 |
| 14 | OFFERING | `offering.pricing-teaser` | shared ×2 |
| 15 | FEATURES | `features.integrations-hub` | shared ×5 |
| 16 | PROOF | `proof.case-study-slider` | page-local |
| 17 | SUPPORT | `support.faq` | shared ×9 |
| 18 | CONVERSION | `conversion.impact-cta` | page-local |
| 19 | SHELL | `shell.footer` | shared ×18 |

### Online courses — `template.online-courses`

1 route · `/online-courses` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | CAMPAIGN | `campaign.halloween-banner` | shared ×5 |
| 3 | HERO | `hero.product` | shared ×5 |
| 4 | PROOF | `proof.stats-marquee` | shared ×4 |
| 5 | PROOF | `proof.stats-stack` | shared ×4 |
| 6 | FEATURES | `features.feature-split` | shared ×3 |
| 7 | FEATURES | `features.feature-split` | shared ×3 |
| 8 | FEATURES | `features.stagger-cards` | shared ×2 |
| 9 | FEATURES | `features.integrations-hub` | shared ×5 |
| 10 | PROOF | `proof.stories-carousel` | shared ×12 |
| 11 | FEATURES | `features.tools-grid` | page-local |
| 12 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 13 | SUPPORT | `support.faq` | shared ×9 |
| 14 | SHELL | `shell.footer` | shared ×18 |

### Coaching — `template.coaching`

1 route · `/coaching` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | CAMPAIGN | `campaign.halloween-banner` | shared ×5 |
| 3 | HERO | `hero.product` | shared ×5 |
| 4 | PROOF | `proof.stats-marquee` | shared ×4 |
| 5 | PROOF | `proof.stats-stack` | shared ×4 |
| 6 | FEATURES | `features.steps` | page-local |
| 7 | FEATURES | `features.feature-split` | shared ×3 |
| 8 | FEATURES | `features.stagger-cards` | shared ×2 |
| 9 | SUPPORT | `support.resource-cards` | shared ×4 |
| 10 | FEATURES | `features.integrations-hub` | shared ×5 |
| 11 | PROOF | `proof.stories-carousel` | shared ×12 |
| 12 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 13 | SUPPORT | `support.faq` | shared ×9 |
| 14 | SHELL | `shell.footer` | shared ×18 |

### Digital downloads — `template.digital-downloads`

1 route · `/digital-downloads` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | CAMPAIGN | `campaign.halloween-banner` | shared ×5 |
| 3 | HERO | `hero.product` | shared ×5 |
| 4 | PROOF | `proof.stats-marquee` | shared ×4 |
| 5 | PROOF | `proof.stats-stack` | shared ×4 |
| 6 | FEATURES | `features.feature-split` | shared ×3 |
| 7 | FEATURES | `features.feature-split` | shared ×3 |
| 8 | FEATURES | `features.feature-split` | shared ×3 |
| 9 | FEATURES | `features.integrations-hub` | shared ×5 |
| 10 | PROOF | `proof.stories-carousel` | shared ×12 |
| 11 | FEATURES | `features.sell-list` | page-local |
| 12 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 13 | SUPPORT | `support.faq` | shared ×9 |
| 14 | SHELL | `shell.footer` | shared ×18 |

### Memberships — `template.memberships`

1 route · `/memberships` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | CAMPAIGN | `campaign.halloween-banner` | shared ×5 |
| 3 | HERO | `hero.product` | shared ×5 |
| 4 | FEATURES | `features.why-statement` | page-local |
| 5 | FEATURES | `features.dyna-slider` | page-local |
| 6 | OFFERING | `offering.pricing-teaser` | shared ×2 |
| 7 | SUPPORT | `support.resource-cards` | shared ×4 |
| 8 | FEATURES | `features.integrations-hub` | shared ×5 |
| 9 | PROOF | `proof.stories-carousel` | shared ×12 |
| 10 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 11 | SHELL | `shell.footer` | shared ×18 |

### Customer journey — `template.customer-journey`

1 route · `/customer-journey` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | HERO | `hero.product` | shared ×5 |
| 3 | FEATURES | `features.why-band` | shared ×5 |
| 4 | FEATURES | `features.tier-cards` | page-local |
| 5 | SUPPORT | `support.faq` | shared ×9 |
| 6 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 7 | SHELL | `shell.footer` | shared ×18 |

### Analytics and reporting — `template.analytics-and-reporting`

1 route · `/analytics-and-reporting` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | HERO | `hero.feature` | shared ×7 |
| 3 | FEATURES | `features.why-band` | shared ×5 |
| 4 | FEATURES | `features.explainer` | shared ×6 |
| 5 | PROOF | `proof.stories-carousel` | shared ×12 |
| 6 | SUPPORT | `support.resource-cards` | shared ×4 |
| 7 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 8 | SHELL | `shell.footer` | shared ×18 |

### Mobile app — `template.mobile-app`

1 route · `/mobile-app` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | HERO | `hero.feature` | shared ×7 |
| 3 | FEATURES | `features.why-band` | shared ×5 |
| 4 | FEATURES | `features.explainer` | shared ×6 |
| 5 | FEATURES | `features.card-list` | shared ×3 |
| 6 | FEATURES | `features.two-col` | shared ×2 |
| 7 | PROOF | `proof.stories-carousel` | shared ×12 |
| 8 | PROOF | `proof.rating` | page-local |
| 9 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 10 | SUPPORT | `support.faq` | shared ×9 |
| 11 | SHELL | `shell.footer` | shared ×18 |

### Sales and marketing — `template.sales-and-marketing`

1 route · `/sales-and-marketing` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | HERO | `hero.feature` | shared ×7 |
| 3 | FEATURES | `features.why-band` | shared ×5 |
| 4 | FEATURES | `features.explainer` | shared ×6 |
| 5 | FEATURES | `features.card-list` | shared ×3 |
| 6 | PROOF | `proof.stories-carousel` | shared ×12 |
| 7 | FEATURES | `features.two-col` | shared ×2 |
| 8 | FEATURES | `features.quick-links-slider` | page-local |
| 9 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 10 | SHELL | `shell.footer` | shared ×18 |

### Site builder — `template.site-builder`

1 route · `/site-builder` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | HERO | `hero.feature` | shared ×7 |
| 3 | FEATURES | `features.explainer` | shared ×6 |
| 4 | FEATURES | `features.card-list` | shared ×3 |
| 5 | PROOF | `proof.stories-carousel` | shared ×12 |
| 6 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 7 | SUPPORT | `support.faq` | shared ×9 |
| 8 | SHELL | `shell.footer` | shared ×18 |

### Student experience — `template.student-experience`

1 route · `/student-experience` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | HERO | `hero.feature` | shared ×7 |
| 3 | FEATURES | `features.why-band` | shared ×5 |
| 4 | FEATURES | `features.explainer` | shared ×6 |
| 5 | PROOF | `proof.stories-carousel` | shared ×12 |
| 6 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 7 | SHELL | `shell.footer` | shared ×18 |

### AI hub — `template.ai-hub`

1 route · `/ai-hub` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | HERO | `hero.feature` | shared ×7 |
| 3 | PROOF | `proof.video-review` | page-local |
| 4 | FEATURES | `features.explainer` | shared ×6 |
| 5 | PROOF | `proof.stats-marquee` | shared ×4 |
| 6 | PROOF | `proof.stats-stack` | shared ×4 |
| 7 | SUPPORT | `support.resource-cards` | shared ×4 |
| 8 | PROOF | `proof.stories-carousel` | shared ×12 |
| 9 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 10 | SHELL | `shell.footer` | shared ×18 |

### App hub — `template.app-hub`

1 route · `/app-hub` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | HERO | `hero.feature` | shared ×7 |
| 3 | FEATURES | `features.app-directory` | page-local |
| 4 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 5 | SHELL | `shell.footer` | shared ×18 |

### Pricing — `template.pricing`

1 route · `/pricing` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | OFFERING | `offering.plan-cards` | page-local |
| 3 | OFFERING | `offering.plan-comparison` | page-local |
| 4 | OFFERING | `offering.fee-dropdowns` | page-local |
| 5 | PROOF | `proof.stories-carousel` | shared ×12 |
| 6 | SUPPORT | `support.faq` | shared ×9 |
| 7 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 8 | CONVERSION | `conversion.exit-modal` | page-local |
| 9 | SHELL | `shell.footer` | shared ×18 |

### Enterprise — `template.enterprise`

1 route · `/enterprise` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | HERO | `hero.split` | shared ×2 |
| 3 | FEATURES | `features.use-case-cards` | page-local |
| 4 | FEATURES | `features.demo-embed` | page-local |
| 5 | FEATURES | `features.work-cards` | page-local |
| 6 | FEATURES | `features.image-feature-grid` | page-local |
| 7 | PROOF | `proof.quote-banner` | page-local |
| 8 | PROOF | `proof.security-badges` | page-local |
| 9 | CONVERSION | `conversion.sales-form` | shared ×2 |
| 10 | SHELL | `shell.footer` | shared ×18 |

### Payments — `template.payments`

1 route · `/payments` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | HERO | `hero.split` | shared ×2 |
| 3 | PROOF | `proof.testimonial-slider` | page-local |
| 4 | FEATURES | `features.video-feature` | page-local |
| 5 | FEATURES | `features.compare-table` | page-local |
| 6 | FEATURES | `features.feature-rows` | page-local |
| 7 | CONVERSION | `conversion.migrate-banner` | page-local |
| 8 | FEATURES | `features.feature-rows` | page-local |
| 9 | PROOF | `proof.logo-marquee` | page-local |
| 10 | CONVERSION | `conversion.sales-form` | shared ×2 |
| 11 | SUPPORT | `support.faq` | shared ×9 |
| 12 | SHELL | `shell.footer` | shared ×18 |

### Watch demo — `template.watch-demo`

1 route · `/watch-demo` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | HERO | `hero.demo-unlock` | page-local |
| 3 | SHELL | `shell.footer` | shared ×18 |

### Examples — `template.examples`

1 route · `/examples` · chrome: **page-shell**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.navbar-fixed` | shared ×17 |
| 2 | HERO | `hero.text-only` | page-local |
| 3 | FEATURES | `features.examples-tabs` | page-local |
| 4 | PROOF | `proof.logo-row` | page-local |
| 5 | CONVERSION | `conversion.cta-card` | shared ×14 |
| 6 | SHELL | `shell.footer` | shared ×18 |

## Section reference

### SHELL

_Chrome rendered by the shared layout around every route: navigation, promo strip, footer._

**`shell.promo-marquee`** — Thin full-width strip above the nav with a continuously scrolling row of promo links (25s CSS loop, pauses on hover).

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/PromoMarquee.jsx`

**`shell.navbar-sticky`** — Black navigation bar in sticky mode: logo, Products/Resources click-open mega-dropdowns whose panel top moves from 8rem to 4.8rem after 150px of scroll, login/sign-up actions, hamburger overlay at 1145px and below.

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/Navbar.jsx (shell: home)`

**`shell.navbar-fixed`** — The same navigation bar in fixed mode: pinned to the viewport top over the content, dropdown panel top constant at 5rem; the first section clears it with hero-top padding.

· Every non-home route; 17 routes. · appears on 17 routes · implemented by `components/Navbar.jsx (shell: page)`

**`shell.footer`** — Black footer: four link columns, social icons, compliance badge, oversized logo with three echo layers that follow the pointer, copyright row.

· All 18 routes. · appears on 18 routes · implemented by `components/Footer.jsx`

### CAMPAIGN

_Time-limited promotional blocks that sit above a page's hero._

**`campaign.halloween-banner`** — Seasonal campaign card with a live countdown to 31 Oct 2026 and a close button; time-limited, reuses one component with a larger top-padding variant on product pages.

· Homepage plus four product pages; 5 routes. · appears on 5 routes · implemented by `components/HalloweenBanner.jsx`

### HERO

_The page-opening block that clears the navigation._

**`hero.home-tabs`** — Homepage hero: h1, two pill buttons, two product tabs that autoplay every 6s with a progress bar, and floating UI panels animating in per tab.

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/Hero.jsx`

**`hero.product`** — Product-page hero: tag, h1 (glyph letters allowed), paragraph, one or two buttons, large product image; optional gold image backdrop.

· The four product pages plus customer-journey; 5 routes. · appears on 5 routes · implemented by `components/sections/ProductHero.jsx`

**`hero.feature`** — Feature-page hero: two columns at 0.5fr/1fr with the image first, tag, h1 that may swap a letter for a glyph, paragraph, button and optional login line.

· Five feature pages plus ai-hub and app-hub; 7 routes. · appears on 7 routes · implemented by `components/sections/FeatureHero.jsx`

**`hero.split`** — Split hero in dark-olive or light tone: copy and buttons on one side, video iframe or image on the other, optional logo marquee strip underneath.

· Enterprise and payments; 2 routes. · appears on 2 routes · implemented by `components/sections/SplitHero.jsx`

**`hero.text-only`** — Centred text-only hero: a single large h1 with no image or buttons.

· Examples only; 1 route. · appears on 1 routes · implemented by `components/pages/examples/SimpleHero.jsx`

**`hero.demo-unlock`** — Gated demo hero: email pill with the submit button inside it, consent checkbox, blurred video frame that unlocks to an autoplaying video and a slide-in offer banner; remembers unlocked visitors; no real submission.

· Watch-demo only; 1 route. · appears on 1 routes · implemented by `components/pages/watch-demo/DemoUnlockHero.jsx`

### PROOF

_Social proof and credibility: stats, stories, testimonials, logos, ratings, badges._

**`proof.stats-row`** — Homepage stats row: three large figures with labels separated by vertical dividers.

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/Stats.jsx (variant: home)`

**`proof.stats-marquee`** — Single-line marquee of stat chips with icons scrolling on a 60s linear loop; hidden at 479px and below where the stacked stats take over.

· Three product pages plus ai-hub; 4 routes. · appears on 4 routes · implemented by `components/sections/StatsMarquee.jsx`

**`proof.stats-stack`** — Mobile-only vertical stack of stat blocks that replaces the stats marquee at 479px and below.

· Three product pages plus ai-hub; 4 routes. · appears on 4 routes · implemented by `components/Stats.jsx (variant: stack)`

**`proof.stories-carousel`** — Creator success-stories carousel: six slides, 2s autoplay loop, prev/next buttons, pauses on hover; site-builder uses its centred-slides auto-height option.

· Homepage, four product pages, five feature pages, ai-hub and pricing; 12 routes. · appears on 12 routes · implemented by `components/Stories.jsx`

**`proof.case-study-slider`** — Two-column case-study block: intro on the left, looping slider of three case cards with an 'n / 3' counter on the right.

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/CaseStudy.jsx`

**`proof.video-review`** — Video testimonial: thumbnail with play button that opens a lightbox player, next to a quote and attribution.

· Ai-hub only; 1 route. · appears on 1 routes · implemented by `components/sections/VideoReview.jsx`

**`proof.testimonial-slider`** — Non-looping testimonial slider with arrows that hide at each end, dots and drag-swipe.

· Payments only; 1 route. · appears on 1 routes · implemented by `components/pages/payments/TestimonialSlider.jsx`

**`proof.quote-banner`** — Diagonal lemon-to-grey band with a company wordmark on the left and a large quote with attribution on the right.

· Enterprise only; 1 route. · appears on 1 routes · implemented by `components/pages/enterprise/QuoteBanner.jsx`

**`proof.security-badges`** — Row of four security/compliance badge cards under a heading.

· Enterprise only; 1 route. · appears on 1 routes · implemented by `components/sections/FeatureList.jsx (skin: badges)`

**`proof.logo-marquee`** — Section with a heading, text and button above two rows of payment-method logo tiles scrolling in opposite directions (24s), each row pausing on hover.

· Payments only; 1 route. · appears on 1 routes · implemented by `components/sections/LogoMarquee.jsx (variant: tiles)`

**`proof.logo-row`** — Static row of five customer logos under a short line of text.

· Examples only; 1 route. · appears on 1 routes · implemented by `components/pages/examples/LogoRow.jsx`

**`proof.rating`** — Grey band with an app-store rating heading and star-rated review cards, three columns collapsing to two and then one.

· Mobile-app only; 1 route. · appears on 1 routes · implemented by `components/pages/mobile-app/Rating.jsx`

### FEATURES

_Product explanation: capability rows, card grids, sliders, scroll scenes and directories._

**`features.demo-cta`** — Single centred 'Explore demo' button block directly under the homepage stats.

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/DemoCta.jsx`

**`features.why-scroll`** — Pinned 280vh scroll scene: a card grows out of the corner, its heading resizes and the blue backdrop and photo zoom, all scroll-scrubbed; not sticky below 992px.

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/WhyScroll.jsx`

**`features.why-cards`** — Three alternating image/text rows pulled up over the preceding scroll scene by 17vh.

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/WhyCards.jsx (overlap)`

**`features.feature-rows`** — Alternating image/text rows with an optional header and no overlap with the section above.

· Payments only, used twice on the page; 1 route. · appears on 1 routes · implemented by `components/WhyCards.jsx (overlap: false)`

**`features.scale-slider`** — Global-scale scene: sticky three-step slider with a progress bar, flag badges that burst out and drift, a cycling translated word; replaced by a stacked layout with sliding flag rows at 767px and below.

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/Scale.jsx`

**`features.ai-automations`** — AI section: heading with a shimmer gradient and three image cards whose titles underline on hover.

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/Smart.jsx`

**`features.integrations-hub`** — Integrations grid: 18 app logos on a ruled grid that scale in with a scroll-scrubbed stagger, hover tooltips, and a button to the app directory.

· Homepage plus four product pages; 5 routes. · appears on 5 routes · implemented by `components/Hub.jsx`

**`features.feature-split`** — Grey or white panel with a header and rows of image/text pairs that alternate the image side.

· Online-courses, coaching and digital-downloads, used one to three times per page; 3 routes. · appears on 3 routes · implemented by `components/sections/FeatureSplit.jsx`

**`features.stagger-cards`** — Three cards offset vertically by 6rem / 0 / 3rem, in a platform or spotlight skin.

· Online-courses and coaching; 2 routes. · appears on 2 routes · implemented by `components/sections/StaggerCards.jsx`

**`features.steps`** — Numbered step cards whose backgrounds pulse in sequence (4s loop, 0.2s stagger).

· Coaching only; 1 route. · appears on 1 routes · implemented by `components/sections/Steps.jsx (variant: steps)`

**`features.tier-cards`** — Anchored programme-tier cards with badges, bullet lists and tinted backgrounds that pulse in turn (6s, delays 0 / 1.5 / 3s).

· Customer-journey only; 1 route. · appears on 1 routes · implemented by `components/sections/Steps.jsx (variant: tiers)`

**`features.why-band`** — Yellow or gold band with a very large heading and a right column holding an optional pill label or icon circle.

· Four feature pages plus customer-journey; 5 routes. · appears on 5 routes · implemented by `components/sections/FeatureWhy.jsx`

**`features.why-statement`** — Standalone 6rem statement heading block introducing the membership slider.

· Memberships only; 1 route. · appears on 1 routes · implemented by `components/pages/memberships/WhyStatement.jsx`

**`features.explainer`** — Optional centred header, then one to three image/text rows alternating sides, each with one or two title/paragraph pairs and an optional button.

· Five feature pages plus ai-hub; 6 routes. · appears on 6 routes · implemented by `components/sections/FeatureExplainer.jsx`

**`features.card-list`** — Grid of four or eight grey feature cards, icons optional, that start staggered and flatten as you scroll (desktop only).

· Mobile-app, sales-and-marketing and site-builder; 3 routes. · appears on 3 routes · implemented by `components/sections/FeatureList.jsx (skin: grey)`

**`features.two-col`** — Two-column text/image block with a button; an 'int' variant keeps text first on mobile and uses a secondary button.

· Mobile-app and sales-and-marketing; 2 routes. · appears on 2 routes · implemented by `components/sections/FeatureTwoCol.jsx`

**`features.quick-links-slider`** — Looping slider of five link cards with images, controlled by a prev / 'n / N' / next pill.

· Sales-and-marketing only; 1 route. · appears on 1 routes · implemented by `components/sections/QuickLinksSlider.jsx`

**`features.tools-grid`** — Grid of tool cards that fade and slide up at 20% visibility, with dashed connector lines growing after 200ms; resets out of view and replays.

· Online-courses only; 1 route. · appears on 1 routes · implemented by `components/pages/online-courses/ToolsGrid.jsx`

**`features.sell-list`** — Header plus an iconised list of sellable item types.

· Digital-downloads only; 1 route. · appears on 1 routes · implemented by `components/pages/digital-downloads/SellList.jsx`

**`features.dyna-slider`** — Tabbed slider with 4s autoplay, progress bar, pause/play and prev/next; reproduces the original's empty-column loop quirk.

· Memberships only; 1 route. · appears on 1 routes · implemented by `components/pages/memberships/DynaSlider.jsx`

**`features.app-directory`** — Six category tabs (fade 100ms out / 300ms in) over a 3/2/1-column grid of 29 app cards with learn-more links, plus a footnote.

· App-hub only; 1 route. · appears on 1 routes · implemented by `components/pages/app-hub/AppDirectory.jsx`

**`features.use-case-cards`** — Four image cards in the enterprise skin of the product-card grid, titles underlining on hover.

· Enterprise only; 1 route. · appears on 1 routes · implemented by `components/Teach.jsx (skin: enterprise)`

**`features.demo-embed`** — Interactive demo frame that expands and collapses with text and thumbnail fades; hidden at 991px and below.

· Enterprise only; 1 route. · appears on 1 routes · implemented by `components/sections/DemoEmbed.jsx`

**`features.work-cards`** — Three white icon cards on a warm background.

· Enterprise only; 1 route. · appears on 1 routes · implemented by `components/sections/FeatureList.jsx (skin: white)`

**`features.image-feature-grid`** — Full-width image followed by a 2x2 feature grid and a button.

· Enterprise only; 1 route. · appears on 1 routes · implemented by `components/pages/enterprise/ImageFeatureGrid.jsx`

**`features.video-feature`** — Feature block built around an embedded video.

· Payments only; 1 route. · appears on 1 routes · implemented by `components/pages/payments/VideoFeature.jsx`

**`features.compare-table`** — Two-column comparison table with check and cross icons.

· Payments only; 1 route. · appears on 1 routes · implemented by `components/pages/payments/CompareTable.jsx`

**`features.examples-tabs`** — Six category pill tabs, each revealing five or six example cards; section height changes per tab.

· Examples only; 1 route. · appears on 1 routes · implemented by `components/pages/examples/ExamplesTabs.jsx`

### OFFERING

_What is for sale and at what price: product-type cards, plan cards, comparison and fees._

**`offering.product-cards`** — Four product-type cards (4 then 2 then 1 columns) with a start-free button.

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/Teach.jsx`

**`offering.pricing-teaser`** — Three-card pricing teaser: two plan cards and an enterprise card, linking to the full pricing page.

· Homepage and memberships; 2 routes. · appears on 2 routes · implemented by `components/Pricing.jsx`

**`offering.plan-cards`** — Full plan cards with a Monthly/Yearly toggle (Yearly default) that swaps prices and strike-throughs with a fade.

· Pricing only; 1 route. · appears on 1 routes · implemented by `components/pages/pricing/PlanCards.jsx`

**`offering.plan-comparison`** — Feature comparison matrix with eight filter pills (instant switch) and tooltips; becomes per-plan tabs at 991px and below.

· Pricing only; 1 route. · appears on 1 routes · implemented by `components/pages/pricing/PlanComparison.jsx`

**`offering.fee-dropdowns`** — Click-to-open fee dropdowns that push content down, with no animation.

· Pricing only; 1 route. · appears on 1 routes · implemented by `components/pages/pricing/FeeDropdowns.jsx`

### CONVERSION

_Blocks whose job is a sign-up, contact or demo action: CTA cards, forms, modals._

**`conversion.payments-cta`** — Gradient card at 1.5fr/1fr with a tag, heading, arrow list and an arrow button whose icon rotates on hover.

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/PaymentsCta.jsx`

**`conversion.cta-card`** — Coloured CTA card in a blue, red or black tone with a heading, optional paragraph, button and optional login line, and variable section padding.

· Four product pages, customer-journey, five feature pages, ai-hub, app-hub, pricing and examples; 14 routes. · appears on 14 routes · implemented by `components/sections/ProductCta.jsx (layout: stack)`

**`conversion.migrate-banner`** — Gradient split banner pairing a migration message with an image and button.

· Payments only; 1 route. · appears on 1 routes · implemented by `components/sections/ProductCta.jsx (layout: split)`

**`conversion.impact-cta`** — Full-bleed photo with a white heading and a primary button to pricing, closing the page.

· Homepage only; 1 route. · appears on 1 routes · implemented by `components/Impact.jsx`

**`conversion.sales-form`** — Contact-sales section: copy column and a static form card (progress bar, fields, consent, submit) that does not submit anywhere.

· Enterprise and payments; 2 routes. · appears on 2 routes · implemented by `components/sections/SalesForm.jsx`

**`conversion.exit-modal`** — Exit-intent modal armed after 5s: locks scroll, closes on Esc, shown at most once per session.

· Pricing only; 1 route. · appears on 1 routes · implemented by `components/pages/pricing/ExitModal.jsx`

### SUPPORT

_Help and further reading: FAQ accordions and resource/article cards._

**`support.faq`** — FAQ accordion: one item open at a time (first open on load), height animation and 135° icon rotation; answers may hold paragraphs, lists and links; optional footnote card.

· Homepage, three product pages, customer-journey, mobile-app, site-builder, pricing and payments; 9 routes. · appears on 9 routes · implemented by `components/Faq.jsx`

**`support.resource-cards`** — Resource or article cards, with or without images, whose titles underline and arrows rotate on hover.

· Coaching, memberships, analytics-and-reporting and ai-hub; 4 routes. · appears on 4 routes · implemented by `components/sections/ResourceCards.jsx`
