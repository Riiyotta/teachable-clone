import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useShell from '../layout/useShell.js'

// CLONE_SPEC §2 — sticky nav, click-to-open mega dropdowns, ≤1145px hamburger menu.
// Inner pages (shell nav 'fixed', feature-template.md T0): position fixed at top 0, dropdown top constant 5rem.

const T = 'https://www.teachable.com'
const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'
const SIGN_IN = 'https://sso.teachable.com/secure/teachable_accounts/sign_in'
const CONTACT = `${T}/lps/migrate-to-teachable?src=navbar`

const PRODUCTS = [
  {
    title: 'What you can sell',
    links: [
      ['Online Courses', `${T}/online-courses`],
      ['Digital Downloads', `${T}/digital-downloads`],
      ['Memberships', `${T}/memberships`],
      ['Coaching', `${T}/coaching`],
    ],
  },
  {
    title: 'Feature highlights',
    links: [
      ['AI Features', `${T}/ai-hub`],
      ['Payments', `${T}/payments`],
      ['Site Builder', `${T}/site-builder`],
      ['Sales and Marketing', `${T}/sales-and-marketing`],
    ],
  },
  {
    title: null, // empty spacer of the same height
    links: [
      ['Student Experience', `${T}/student-experience`],
      ['Mobile App', `${T}/mobile-app`],
      ['Integrations', `${T}/app-hub`],
      ['Analytics and Reporting', `${T}/analytics-and-reporting`],
    ],
  },
]

const RESOURCES = [
  {
    title: 'Resources',
    links: [
      ['Product demo', `${T}/watch-demo`],
      ['Example Schools', `${T}/examples`],
      ['Success Stories', `${T}/blog-category/success-stories`],
      ['Blog', `${T}/blog`],
    ],
  },
  {
    title: null,
    links: [
      ['Events', `${T}/events`],
      ['Newsletter and Podcast', `${T}/9to5-quitters-club`],
      ['Customer Journey', `${T}/customer-journey`],
      ['Teachable Academy', 'https://u.teachable.com/l/products?sortKey=recommended&sortDirection=asc&page=1'],
    ],
  },
  {
    blocks: [
      { title: 'Solution', links: [['Enterprise', `${T}/enterprise`]] },
      {
        title: 'Support',
        links: [
          ['Help center', 'https://support.teachable.com/'],
          ['Hire an expert', `${T}/experts`],
        ],
      },
    ],
  },
]

/* ---------- dropdown pieces ---------- */

function Chevron({ open }) {
  // IX2: open 0→180deg 300ms ease; close →360deg 300ms ease after 100ms, then snap to 0.
  const [state, setState] = useState({ deg: 0, transition: 'none' })
  const first = useRef(true)
  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (open) setState({ deg: 180, transition: 'transform 300ms ease' })
    else setState({ deg: 360, transition: 'transform 300ms ease 100ms' })
  }, [open])
  return (
    <div
      data-anim="M3-dropdown-chevron"
      className="relative top-[.1rem] flex w-[10px] items-center justify-center"
      style={{ transform: `rotate(${state.deg}deg)`, transition: state.transition }}
      onTransitionEnd={() => {
        if (state.deg === 360) setState({ deg: 0, transition: 'none' })
      }}
    >
      <svg viewBox="0 0 10 6" width="10" height="6" fill="none" aria-hidden="true">
        <path d="M9 1L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

const linkCls =
  'flex items-center justify-start py-[.2rem] text-[1.15rem] font-bold text-white no-underline transition-[padding] duration-200 ease-css hover:pl-[.15rem] hover:underline md:text-[1rem] sm:text-[.875rem] xs:text-[4vw]'

function ColTitle({ title }) {
  return (
    <div className={`mt-6 flex h-6 items-center justify-start md:mt-2 sm:mt-0 ${title ? '' : 'hide-mobile-portrait'}`}>
      {title && <div className="mb-1 text-tiny font-semibold text-grey-title">{title}</div>}
    </div>
  )
}

function Links({ links }) {
  return links.map(([label, href], i) => (
    <a key={label} href={href} className={`${linkCls} ${i === links.length - 1 ? 'xs:mb-4' : ''}`}>
      <div>{label}</div>
    </a>
  ))
}

function PromoCard() {
  return (
    <div className="flex flex-col gap-6 rounded-b-lg bg-nav-promo px-4 py-6 text-center text-regular text-black md:hidden">
      <div className="flex flex-col gap-4 text-regular">
        <div className="font-heading text-[2.5rem] font-normal leading-[1.1]">
          <div className="text-[1.25rem]">Introducing</div>
          <div>Teachable Payments</div>
        </div>
        <p>Capture more revenue with lower fees, global payments, and automatic tax handling.</p>
      </div>
      <a href={`${T}/payments`} className="btn-black w-full">
        <span className="btn-txt">Learn more</span>
      </a>
    </div>
  )
}

function DropdownPanel({ columns, indicatorCls }) {
  return (
    <>
      <div
        className={`absolute right-0 top-2 mx-auto h-4 w-4 rotate-45 rounded-[.2rem] bg-black md:hidden ${indicatorCls}`}
      />
      <div className="rounded-md bg-black px-8 md:px-0">
        <div className="mx-auto w-full max-w-container-nav">
          <div className="relative grid w-full grid-cols-4 gap-8 pb-6 md:grid-cols-3 md:p-4 sm:gap-y-4 xs:grid-cols-1 xs:gap-0">
            {columns.map((col, i) => (
              <div key={i} className="flex flex-col">
                {col.blocks ? (
                  <div className="flex flex-col xs:gap-4">
                    {col.blocks.map((b) => (
                      <div key={b.title}>
                        <ColTitle title={b.title} />
                        <Links links={b.links} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <ColTitle title={col.title} />
                    <Links links={col.links} />
                  </>
                )}
              </div>
            ))}
            <PromoCard />
          </div>
        </div>
      </div>
    </>
  )
}

function Dropdown({ id, label, open, onToggle, columns, indicatorCls, listTop, rootRef }) {
  return (
    <div ref={rootRef} className="relative z-0 block h-full md:w-full md:border-b-[.5px] md:border-grey-rule">
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={`nav-dd-${id}`}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onToggle()
          }
        }}
        className="relative z-0 flex h-full cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap px-4 py-2 font-semibold text-white hover:underline md:justify-between md:px-0"
      >
        <div>{label}</div>
        <Chevron open={open} />
      </div>
      <nav
        id={`nav-dd-${id}`}
        data-anim="M4-dropdown-top"
        style={{ '--dd-top': listTop }}
        className={`fixed left-0 right-0 top-[var(--dd-top)] z-[1] w-full bg-transparent px-8 pt-3 transition-[top] duration-300 ease-css md:relative md:top-0 md:px-0 ${
          open ? 'block' : 'hidden'
        }`}
      >
        <DropdownPanel columns={columns} indicatorCls={indicatorCls} />
      </nav>
    </div>
  )
}

/* ---------- hamburger ---------- */

function Hamburger({ open, onClick }) {
  const line = 'h-[2px] w-full bg-white transition-[width] duration-200 ease-css'
  return (
    <button
      type="button"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      onClick={onClick}
      data-anim="M5-hamburger"
      className="hidden h-12 bg-transparent p-0 nav:block"
    >
      <div className="flex h-full w-full cursor-pointer items-center justify-end">
        <div
          className="relative z-[1] flex h-4 w-6 flex-col items-center justify-center transition-transform duration-200 ease-css xs:w-5"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <div className={`${line} absolute left-0 top-0`} style={{ width: open ? '0%' : '100%' }} />
          <div className="relative h-[2px] w-full">
            <div className="h-[2px] w-full bg-white" />
            <div
              className="absolute inset-0 h-[2px] w-full bg-white transition-transform duration-200 ease-css"
              style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
            />
          </div>
          <div className={`${line} absolute bottom-0 right-0`} style={{ width: open ? '0%' : '100%' }} />
        </div>
      </div>
    </button>
  )
}

/* ---------- navbar ---------- */

export default function Navbar() {
  const { nav: mode } = useShell()
  const { pathname } = useLocation()
  const [openDd, setOpenDd] = useState(null) // 'products' | 'resources' | null
  const [scrollTop, setScrollTop] = useState('8rem')
  const listTop = mode === 'fixed' ? '5rem' : scrollTop
  const [menuMounted, setMenuMounted] = useState(false) // display:flex (≤1145)
  const [menuOpen, setMenuOpen] = useState(false) // translateX 0
  const ddRefs = { products: useRef(null), resources: useRef(null) }
  const closeTimer = useRef(null)

  // Inline script: top = 8rem if scrollY ≤ 150 else 4.8rem (on scroll + 10ms after a toggle click)
  // (homepage only; the fixed inner-page nav keeps a constant 5rem)
  const adjustTop = useCallback(() => {
    if (mode === 'fixed') return
    setScrollTop(window.scrollY > 150 ? '4.8rem' : '8rem')
  }, [mode])

  const toggleDd = (id) => {
    setOpenDd((cur) => (cur === id ? null : id))
    setTimeout(adjustTop, 10)
  }

  // Client-side navigation keeps the nav mounted; close the dropdown and mobile menu like a page load would.
  useEffect(() => {
    clearTimeout(closeTimer.current)
    setOpenDd(null)
    setMenuOpen(false)
    setMenuMounted(false)
  }, [pathname])

  useEffect(() => {
    if (!openDd) return
    window.addEventListener('scroll', adjustTop, { passive: true })
    const onDocClick = (e) => {
      const inside = Object.values(ddRefs).some((r) => r.current && r.current.contains(e.target))
      if (!inside) setOpenDd(null)
    }
    document.addEventListener('click', onDocClick)
    return () => {
      window.removeEventListener('scroll', adjustTop)
      document.removeEventListener('click', onDocClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDd, adjustTop])

  // Hamburger: display:flex then translateX 100%→0 (200ms ease); reverse then display:none.
  const toggleMenu = () => {
    clearTimeout(closeTimer.current)
    if (!menuOpen) {
      setMenuMounted(true)
      requestAnimationFrame(() => requestAnimationFrame(() => setMenuOpen(true)))
    } else {
      setMenuOpen(false)
      closeTimer.current = setTimeout(() => setMenuMounted(false), 200)
    }
  }

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1145) {
        clearTimeout(closeTimer.current)
        setMenuOpen(false)
        setMenuMounted(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className={`${mode === 'fixed' ? 'fixed inset-x-0 top-0' : 'sticky top-0'} z-nav`}>
      <div className="relative z-nav-inner">
        <nav className="relative z-[1000000] flex flex-col justify-center text-regular">
          <div className="relative z-[1] flex justify-between bg-black py-4 pl-8 pr-4 md:px-global md:py-2 sm:py-1">
            {/* left: logo */}
            <div className="flex items-center justify-start">
              <a href="/" aria-current="page" className="flex w-[9rem] items-center justify-start sm:w-[7rem]">
                <img
                  src="/assets/68daba31282892b31e937809_teachable-logo-color.svg"
                  alt="Teachable"
                  width="300"
                  height="46"
                  className="h-auto w-full"
                />
              </a>
            </div>

            {/* center menu (desktop) / slide-in menu (≤1145) */}
            <div
              className={`absolute inset-0 mx-auto flex w-full max-w-[32rem] items-center justify-center gap-8 overflow-visible nav:bottom-auto nav:top-full nav:max-h-[92dvh] nav:max-w-none nav:flex-col nav:items-stretch nav:justify-between nav:gap-0 nav:bg-black nav:px-global nav:py-8 nav:text-white nav:transition-transform nav:duration-200 nav:ease-css md:overflow-auto ${
                menuMounted ? 'nav:flex' : 'nav:hidden'
              } ${menuOpen ? 'nav:translate-x-0' : 'nav:translate-x-full'}`}
            >
              <div className="static flex h-full items-center justify-center gap-0 md:flex-1 md:flex-col md:items-start md:justify-start md:gap-4 sm:gap-0">
                <Dropdown
                  id="products"
                  label="Products"
                  open={openDd === 'products'}
                  onToggle={() => toggleDd('products')}
                  columns={PRODUCTS}
                  indicatorCls="left-[-13rem]"
                  listTop={listTop}
                  rootRef={ddRefs.products}
                />
                <Dropdown
                  id="resources"
                  label="Resources"
                  open={openDd === 'resources'}
                  onToggle={() => toggleDd('resources')}
                  columns={RESOURCES}
                  indicatorCls="left-[2.5rem]"
                  listTop={listTop}
                  rootRef={ddRefs.resources}
                />
                <a
                  href={`${T}/pricing`}
                  className="flex h-full items-center justify-center px-4 pb-2 pt-[.7rem] font-semibold text-white no-underline hover:underline md:px-0 md:pt-2 sm:w-full sm:justify-start"
                >
                  <div className="relative top-[-.1rem]">Pricing</div>
                </a>

                {/* mobile CTA card (visible ≤767) */}
                <div className="sm:mt-4 sm:flex sm:w-full sm:flex-row sm:items-center sm:justify-start sm:gap-2 sm:rounded-md sm:bg-nav-mob-card sm:p-6 xs:flex-col xs:items-start xs:justify-center">
                  <a
                    href={CONTACT}
                    className="hidden items-center justify-center gap-1 rounded-full border border-white px-6 pb-[1.1rem] pt-[.9rem] text-center font-semibold leading-none text-white no-underline sm:flex xs:w-full"
                  >
                    <span className="btn-txt">Contact sales</span>
                  </a>
                  <div className="hidden xs:flex xs:w-full">
                    <div className="xs:flex xs:w-full xs:flex-row xs:justify-start">
                      <a href={SIGN_UP} className="btn-sso xs:w-full">
                        <span className="btn-txt">Start for free</span>
                      </a>
                    </div>
                  </div>
                  <a
                    href={SIGN_IN}
                    className="hidden items-center justify-center gap-1 py-[1.1rem] text-center font-semibold leading-none text-white underline hover:no-underline sm:py-3 xs:flex xs:w-full"
                  >
                    <span className="btn-txt">Creator login</span>
                  </a>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex items-center justify-end gap-8 md:gap-6 xs:gap-4">
              <div className="flex items-center justify-end gap-4">
                <a
                  href={SIGN_IN}
                  className="flex items-center justify-center gap-1 py-[1.1rem] text-left font-semibold leading-none text-white underline hover:no-underline sm:py-3 xs:hidden"
                >
                  <span className="btn-txt">Creator login</span>
                </a>
                <a href={CONTACT} className="btn-nav-secondary sm:hidden">
                  <span className="btn-txt">Contact sales</span>
                </a>
                <div>
                  <a href={SIGN_UP} className="btn-sso">
                    <span className="btn-txt">Start for free</span>
                  </a>
                </div>
              </div>
              <Hamburger open={menuOpen} onClick={toggleMenu} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
