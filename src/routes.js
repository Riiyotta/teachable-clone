// Every route the clone builds. Links to these on teachable.com are rewritten to local navigation by Layout.
export const PAGE_SLUGS = [
  'pricing', 'online-courses', 'coaching', 'digital-downloads', 'memberships', 'payments', 'enterprise',
  'ai-hub', 'app-hub', 'analytics-and-reporting', 'customer-journey', 'mobile-app', 'sales-and-marketing',
  'site-builder', 'student-experience', 'watch-demo', 'examples',
]

// Page shell per route (read by Layout and Navbar through useShell()).
// - marquee: render the §1 promo marquee above the nav.
// - nav: 'sticky' = homepage `.nav_fixed.is-sticky` (dropdown top 8rem / 4.8rem by scrollY, M4);
//        'fixed'  = inner pages `.nav_fixed` (position fixed, top 0, dropdown top constant 5rem).
//        With 'fixed' the page's first section must clear the nav itself: use `pt-hero-top`.
export const SHELLS = {
  home: { marquee: true, nav: 'sticky' },
  page: { marquee: false, nav: 'fixed' }, // all 17 inner pages (feature-template.md T0, product-template.md G1)
}

// Per-route overrides; any route not listed gets SHELLS.page.
export const ROUTE_SHELL = {
  '/': SHELLS.home,
}

export function shellFor(pathname) {
  const path = '/' + pathname.replace(/^\/+|\/+$/g, '')
  return ROUTE_SHELL[path] ?? SHELLS.page
}
