# Teachable replica

A local, personal replica of teachable.com: the homepage plus 17 main-nav pages, built with React 18, Vite 5, Tailwind CSS v3, GSAP and Swiper.

```bash
npm ci
npm run dev   # http://localhost:5310
```

Not for publishing. The homepage uses copy from a page the owner saved. The other 17 pages use original stand-in text. Logos and photos in `public/assets` belong to Teachable, its partners and real creators.

## Information architecture

`ia.json` is the only IA file to edit by hand. `IA.md` and `matrix.csv` are generated from it and get overwritten.

```bash
node validate.mjs   # hard invariants: route/template totals, section references, categories
node build.mjs      # regenerates IA.md (readable doc) and matrix.csv (section × template)
```

Each section is defined once in `ia.json`. Its `implementedBy` field names the component that renders it (paths relative to `src/`), and templates refer to sections by id. After adding a route or section, edit `ia.json` and re-run both scripts.

### What the data shows

- **One template per route.** There are 18 routes and 18 templates, because every page has its own section order. Reuse happens at the section level: 21 of the 64 sections appear on more than one route. The other 43 are page-local, though one of them (`features.feature-rows`) is used twice on the payments page.
- **The heavily shared sections are few.**
  - Outside the shell, the most reused sections are the CTA card (14 routes), the stories carousel (12), the FAQ (9), the feature hero (7) and the explainer rows (6).
  - The footer is on all 18 routes and the fixed nav on 17.
  - These few components carry most of the cross-page consistency, so changes to them affect the most pages.
- **Single-use sections cluster in two places.**
  - The homepage has 13 sections no other route uses, including the scroll scene, the scale slider and the case-study slider.
  - The five commercial pages (pricing, enterprise, payments, watch-demo and examples) have 19 between them.
  - Product, feature and hub pages are mostly built from shared sections; they have only 10 single-use sections in total across 12 routes.
- **Two page shells.** The `chrome` field splits the routes 1 / 17. Only the homepage has the promo marquee and the sticky nav. Every other route uses the fixed nav with hero-top padding.

### Caveats

- `campaign.halloween-banner` is a time-limited campaign (countdown to 31 Oct 2026) on 5 routes. It is in the IA because it renders today, not because it is permanent.
- Some sections share a component but have different ids because they play different roles. For example, `features.card-list`, `features.work-cards` and `proof.security-badges` are all rendered by `FeatureList`. In each case the `implementedBy` field names the variant.
