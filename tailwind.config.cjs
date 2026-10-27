/** @type {import('tailwindcss').Config} */
// Design tokens for the Teachable homepage clone. Source: CLONE_SPEC.md §0.
// Breakpoints are desktop-first (max-width), mirroring Webflow. Listed largest
// first so smaller-breakpoint utilities win in the cascade.
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      pricing: { max: '1320px' }, // §0.2 pricing card padding change
      nav: { max: '1145px' }, // §0.2 hamburger nav appears
      md: { max: '991px' }, // Webflow medium (tablet)
      sm: { max: '767px' }, // Webflow small (mobile landscape)
      xs: { max: '479px' }, // Webflow tiny (mobile portrait)
      xxs: { max: '359px' }, // §0.2 banner countdown hidden
    },
    extend: {
      colors: {
        // §0.5
        yellow: { DEFAULT: '#e6ff32', light: '#f8ffc6', fade: '#edf0e0', olive: '#687317' },
        grey: {
          light: '#f0f0f0',
          mid: '#bfbfbf',
          end: '#bebebe',
          slide: '#f5f5f5',
          muted: '#a0a0a0',
          title: '#979797',
          tab: '#222222',
          track: '#e7e7e7',
          rule: '#cccccc', // mobile nav dropdown divider (§2)
        },
        blue: { dark: '#1c4774', end: '#6f92b6' },
        red: { dark: '#7f2a23' },
        cream: '#fae6b6',
        focus: '#005fcc',
        // §3 Halloween banner palette
        halloween: {
          ink: '#0b0910',
          violet: '#1c1530',
          plum: '#2a1f45',
          text: '#ece8f5',
          note: '#cfc8e0',
          colon: '#6f6585',
          label: '#a79fbd',
          close: '#ffffff1f',
          rule: '#ffffff24',
          'rule-mob': '#ffffff1a',
          unit: '#ffffff12',
        },
        'nav-mob-card': 'rgba(255,255,255,.08)', // §2 .nav_btn-mob-wrp
        // Inner pages (product-template.md G5, feature-template.md T11)
        gold: '#ffd700', // Webflow --brand--gold
        'grey-footnote': '#444444', // app-hub footnote text
        'step-tint': { 1: '#fbf7e5', 2: '#e7eef3', 3: '#efe7e6' }, // customer-journey bgSteps tints
        // catalog-a "New tokens" (Phase 2b shared sections)
        navy: '#182a44', // --enterprise-colors--dark-navy: demo embed, sales form, migrate banner base
        warm: '#f5f2ee', // enterprise-work bg (FeatureList skin "white")
        charcoal: '#4e4e4e', // --enterprise-colors--charcoal: payment-logos subtitle
        tooltip: '#1a1a1a', // .fb-tip bg
        'form-required': '#668c00', // HubSpot required asterisk (SalesForm)
        'embed-border': 'rgba(63,95,172,.35)', // Storylane iframe border (DemoEmbed)
        'form-track': '#e9e9e9', // HubSpot progress bar track (SalesForm)
        'check-green': '#32d532', // pricing matrix check (CheckIcon colour)
        // Group C pages (catalog-a new tokens)
        'grey-strike': '#777777', // pricing strike price
        ice: '#e5f2ff', // pricing save tag
        'grey-card': '#e6e6e6', // pricing custom plan card
        'grey-card-border': '#aaaaaa', // pricing custom plan card border
        slate: '#555555', // custom-plan subheading, watch-demo legal line
        'grey-note': '#666666', // pricing exit-modal note
        'warm-light': '#f5f3f1', // payments testimonial bg
      },
      boxShadow: {
        tile: '0 2px 5px rgba(0,0,0,.08)', // payment-logos tile
        embed: '0 0 18px rgba(26,19,72,.15)', // Storylane iframe
        frame: '0 24px 60px rgba(17,43,70,.16)', // watch-demo video frame
        chip: '0 10px 30px rgba(0,0,0,.14)', // watch-demo unlock chip
        submit: '0 1px 4px rgba(30,48,39,.08)', // watch-demo submit button
        modal: '0 24px 64px rgba(0,0,0,.22)', // pricing exit modal card (#00000038)
      },
      fontFamily: {
        heading: ['Ivyprestoheadline', 'Georgia', 'sans-serif'],
        body: ['Peridotpenormvf', 'Arial', 'sans-serif'],
        mono: ['monospace'],
      },
      fontSize: {
        // Fluid tokens: values switch per breakpoint via CSS vars in index.css (§0.4)
        h1: ['var(--fs-h1)', { lineHeight: 'var(--lh-h1)' }],
        h2: ['var(--fs-h2)', { lineHeight: 'var(--lh-h2)' }],
        h3: ['var(--fs-h3)', { lineHeight: 'var(--lh-h3)' }],
        body: ['var(--fs-body)', { lineHeight: '1.5' }],
        medium: ['var(--fs-medium)', { lineHeight: '1.5' }],
        regular: ['var(--fs-regular)', { lineHeight: '1.5' }],
        small: ['var(--fs-small)', { lineHeight: '1.5' }],
        tiny: ['var(--fs-tiny)', { lineHeight: '1.5' }],
        large: ['var(--fs-large)', { lineHeight: '1.5' }],
        // Inner-page heading sizes (product-template.md G5, feature-template.md T11). Sizes switch via CSS vars.
        subheading: ['var(--fs-subheading)', { lineHeight: '1.2' }],
        'card-title': ['var(--fs-card-title)', { lineHeight: '1.1' }],
        'cta-heading': ['var(--fs-cta-heading)', { lineHeight: '1.1' }],
        'display-why': ['var(--fs-display-why)', { lineHeight: '1.1' }],
        'display-why-sm': ['var(--fs-display-why-sm)', { lineHeight: '1.1' }],
        'tools-heading': ['var(--fs-tools-heading)', { lineHeight: '1.1' }],
        'explainer-title': ['var(--fs-explainer-title)', { lineHeight: '1.1' }],
        'list-title': ['var(--fs-list-title)', { lineHeight: '1.1' }],
        'slider-title': ['var(--fs-slider-title)', { lineHeight: '1.1' }],
        'rating-title': ['var(--fs-rating-title)', { lineHeight: '1.2', fontWeight: '600' }],
        'tier-badge': ['var(--fs-tier-badge)', { lineHeight: '1.1', fontWeight: '800' }],
        'marquee-stat': ['var(--fs-marquee-stat)', { lineHeight: '1.5' }],
      },
      maxWidth: {
        'container-large': '86rem',
        'container-medium': '68rem',
        'container-small': '48rem',
        'container-nav': '87.5rem',
        'mw-large': '44rem',
        'mw-xlarge': '64rem',
        'mw-medium': '40rem',
      },
      spacing: {
        global: 'var(--global-padding)',
        'section-large': 'var(--section-large)',
        'section-small': 'var(--section-small)',
        'section-medium': 'var(--section-medium)', // G4 --section-padding--medium
        'hero-top': 'var(--hero-top)', // first section under the fixed nav (pt-hero-top)
      },
      borderRadius: {
        sm: '.25rem',
        md: '.6rem',
        lg: '1rem',
        panel: '.3rem',
        frame: '1.5rem',
        label: '.4rem', // pricing plan label, payments tag
        full: '9999px',
      },
      backgroundImage: {
        marquee: 'linear-gradient(90deg,#e6ff32 45%,#edf0e0)',
        'payments-cta': 'linear-gradient(135deg,#f8ffc6,#e6ff32)',
        'nav-promo': 'linear-gradient(140deg,#e6ff32,#f8ffc6)',
        placeholder: 'linear-gradient(180deg,#f0f0f0,#bebebe)',
        'hero-frame': 'linear-gradient(0deg,#f0f0f0 40%,#ffffff)',
        'hero-pane-mob': 'linear-gradient(180deg,#ffffff,#bfbfbf)',
        'pricing-card': 'linear-gradient(180deg,#1c4774,#6f92b6)',
        'stats-chip': 'linear-gradient(0deg,#fff 30%,#f0f0f0)', // Stats variant="stack" number chip
        'stats-rule': 'linear-gradient(90deg,#fff 5%,#000 50%,#fff 95%)', // Stats variant="stack" divider top line
        'migrate-cta': 'linear-gradient(#1c4774,#7791ac)', // ProductCta layout="split" (pair with bg-navy)
        'fade-l': 'linear-gradient(90deg,#fff 38%,#fff0)', // LogoMarquee edge fades
        'fade-r': 'linear-gradient(-90deg,#fff 38%,#fff0)',
        'enterprise-hero': 'linear-gradient(#1c2600,#465f01)', // SplitHero tone="dark" (enterprise.md §1)
        'platform-card': 'linear-gradient(180deg,#f0f0f0,#bfbfbf)', // StaggerCards skin="platform" image wrap (T6)
        'plan-label': 'linear-gradient(135deg,#000 10%,#4e4e4e)', // pricing custom-plan label
        'enterprise-quote': 'linear-gradient(158deg,#f8ffc6,#f0f0f0)', // enterprise quote (pair with bg-grey-light)
        'demo-hero': 'linear-gradient(rgba(255,255,255,.7),#fff),linear-gradient(150deg,#e0ff00,#f6f2ee 55%,#fff)', // watch-demo hero
        halloween:
          'radial-gradient(circle at 4% 18%,#e6ff3280 0 1px,#0000 2px),radial-gradient(circle at 33% 12%,#e6ff3266 0 1px,#0000 2px),radial-gradient(circle at 58% 22%,#e6ff3280 0 1px,#0000 2px),radial-gradient(circle at 47% 78%,#e6ff324d 0 1px,#0000 2px),radial-gradient(circle at 79% 15%,#e6ff3266 0 1px,#0000 2px),radial-gradient(circle at 92% 80%,#e6ff3259 0 1px,#0000 2px),linear-gradient(135deg,#0b0910,#1c1530 55%,#2a1f45)',
      },
      transitionTimingFunction: {
        css: 'ease', // Webflow IX2 "ease"
      },
      zIndex: {
        nav: '999',
        'nav-inner': '2147483647',
      },
    },
  },
  plugins: [],
}
