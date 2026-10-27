import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap, CSS_EASE } from '../lib/ease.js'

// CLONE_SPEC §4 — hero with 2 autoplay tabs (6s each, progress bar) + floating UI panels.

const A = '/assets/'
const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'

const TABS = [
  {
    title: 'Your view',
    text: "Easily create your products, manage your business, and customize your students' learning experience in one place.",
    img: `${A}68e47a1d7727e0f7bd1ac19e_8b04a4deab039f00b369cedcd9295a73_ui-main-hero-tab-1.webp`,
    imgMob: `${A}6960fced54a209a6ea49ac9b_home-hero-tab-1-mobile.webp`,
    // [first panel in (600ms delay), second panel in (900ms delay)]
    panels: [
      {
        src: `${A}68e4792744ebd84268993dcd_ui-panel-chart.webp`,
        cls: 'right-[-3rem] top-[3rem] md:right-[-1rem]', // .home-hero-tabs_ui-img-wrp-2
      },
      {
        src: `${A}68e47927acaba24419d39208_ui-panel-live-feed.webp`,
        cls: 'bottom-[-3rem] left-[4rem] md:bottom-[-2rem] md:left-[3rem]', // wrp-1
      },
    ],
  },
  {
    title: "Your student's view",
    text: 'Intuitive, mobile-friendly, and built for your students to seamlessly access and discover your products and offers.',
    img: `${A}68e47a1edeb440ab80fdf439_0eb0b462897381c9122d4546e00aca77_ui-main-hero-tab-2.webp`,
    imgMob: `${A}6960fcede45922073615d104_home-hero-tab-2-mobile.webp`,
    panels: [
      {
        src: `${A}68e479277271968905cb9424_ui-panel-resources.webp`,
        cls: 'right-[-3rem] top-[3rem] md:right-[-1rem]', // wrp-3
      },
      {
        src: `${A}68e47927ea3f4c60aa05f5fb_ui-panel-live-feed-student.webp`,
        cls: 'bottom-[-3rem] left-[6rem] md:bottom-[-2rem] md:left-[4rem]', // wrp-4
      },
    ],
  },
]

const DELAY = 6000 // ms per tab
const PANEL_DELAYS = [0.6, 0.9]

const remPx = (n) => n * parseFloat(getComputedStyle(document.documentElement).fontSize)

export default function Hero() {
  const [active, setActive] = useState(0)
  const paneRefs = useRef([])
  const panelRefs = useRef([[], []])
  const barRefs = useRef([])
  const menuRef = useRef(null)
  const current = useRef(0) // active tab (Webflow w--current)
  const visiblePane = useRef(0)
  const goToTabRef = useRef(() => {})

  // initial state: tab 1 visible, tab 2 hidden with panels in their "out" state
  useLayoutEffect(() => {
    gsap.set(paneRefs.current[0], { display: 'block', opacity: 1 })
    gsap.set(paneRefs.current[1], { display: 'none', opacity: 0 })
    gsap.set(panelRefs.current[1], { opacity: 0, scale: 0.98, y: remPx(0.5) })
  }, [])

  // Webflow tab switch: pane cross-fade 300ms ease (out, then in) + IX2 a-49..a-52 panel motion
  const activate = (next) => {
    if (next === current.current) return
    const prev = current.current
    current.current = next
    setActive(next)

    // a-50/a-52: deactivate panels → opacity 0, scale .98, y .5rem over 200ms ease
    gsap.to(panelRefs.current[prev], {
      opacity: 0,
      scale: 0.98,
      y: remPx(0.5),
      duration: 0.2,
      ease: CSS_EASE,
      overwrite: true,
    })
    // a-49/a-51: activate panels (initial state, then in with 600/900ms delays)
    const inPanels = panelRefs.current[next]
    gsap.killTweensOf(inPanels)
    gsap.set(inPanels, { opacity: 0, scale: 0.98, y: remPx(0.5) })
    inPanels.forEach((el, i) => {
      const delay = PANEL_DELAYS[i]
      gsap.to(el, { scale: 1, duration: 0.5, delay, ease: CSS_EASE })
      gsap.to(el, { opacity: 1, y: 0, duration: 0.4, delay, ease: CSS_EASE })
    })

    // pane cross-fade
    const panes = paneRefs.current
    gsap.killTweensOf(panes)
    const outPane = panes[visiblePane.current]
    gsap.to(outPane, {
      opacity: 0,
      duration: 0.3,
      ease: CSS_EASE,
      onComplete: () => {
        panes.forEach((p, i) => i !== next && gsap.set(p, { display: 'none' }))
        gsap.set(panes[next], { display: 'block', opacity: 0 })
        visiblePane.current = next
        gsap.to(panes[next], { opacity: 1, duration: 0.3, ease: CSS_EASE })
      },
    })
  }

  // Autoplay (verbatim logic of the original inline script)
  useEffect(() => {
    const bars = barRefs.current
    let isVisible = false
    let startTime = 0
    let elapsed = 0
    let frame

    const updateProgress = () => {
      if (!isVisible) return
      const progress = Math.min((elapsed + (Date.now() - startTime)) / DELAY, 1)
      bars[current.current].style.width = progress * 100 + '%'
      if (progress >= 1) {
        const next = (current.current + 1) % TABS.length
        elapsed = 0
        startTime = Date.now()
        activate(next)
        bars.forEach((b) => (b.style.width = '0%'))
      }
      frame = requestAnimationFrame(updateProgress)
    }
    const startAutoplay = () => {
      cancelAnimationFrame(frame)
      startTime = Date.now()
      frame = requestAnimationFrame(updateProgress)
    }
    const stopAutoplay = () => {
      cancelAnimationFrame(frame)
      elapsed += Date.now() - startTime
    }
    const goToTab = (index) => {
      elapsed = 0
      startTime = Date.now()
      activate(index)
      bars.forEach((b) => (b.style.width = '0%'))
      if (isVisible) startAutoplay()
    }
    goToTabRef.current = goToTab

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true
            startAutoplay()
          } else {
            isVisible = false
            stopAutoplay()
          }
        })
      },
      { threshold: 0.5, rootMargin: '0px 0px -5% 0px' }
    )
    observer.observe(menuRef.current)
    goToTab(0)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="relative flex flex-col items-stretch justify-center overflow-hidden bg-white px-8 pb-20 pt-0 sm:px-0 sm:pb-12">
      <div className="container-large">
        <div className="relative flex flex-1 flex-col items-center justify-start gap-20 pt-16 md:gap-12 sm:gap-8 xs:pt-8">
          {/* text */}
          <div className="flex w-full max-w-container-medium flex-col items-center justify-start gap-6 text-center md:max-w-[36rem] sm:px-8 xs:px-6">
            <h1 className="w-full xs:text-[length:var(--fs-h2)]">The future of your education business happens here</h1>
            <p className="w-full max-w-[52rem]">
              Whatever your expertise—languages, fitness, or coding—Teachable helps you deliver impactful learning, run a
              smarter business, and scale worldwide.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 sm:mt-0 sm:flex-wrap xs:w-full xs:flex-col xs:gap-2">
              <div className="xs:flex xs:w-full xs:flex-row xs:justify-start">
                <a href={SIGN_UP} className="btn-sso xs:w-full">
                  <span className="btn-txt">Start for free</span>
                </a>
              </div>
              <a href="https://www.teachable.com/pricing" className="btn-secondary xs:w-full">
                <span className="btn-txt">Explore our plans</span>
              </a>
            </div>
          </div>

          {/* screen frame + tabs */}
          <div className="relative w-full rounded-frame bg-grey-light bg-hero-frame pb-8 sm:-mt-4 sm:rounded-none sm:pb-6 xs:rounded-md xs:bg-transparent xs:pb-4">
            <div className="flex h-full flex-col justify-between">
              {/* tab menu (order 9999 → renders after panes) */}
              <div
                ref={menuRef}
                role="tablist"
                className="order-[9999] mt-20 flex gap-16 px-8 md:mt-12 md:gap-8 sm:mt-4 sm:gap-4 xs:gap-2 xs:px-6"
              >
                {TABS.map((t, i) => (
                  <a
                    key={t.title}
                    href={`#hero-pane-${i}`}
                    role="tab"
                    aria-selected={active === i}
                    aria-controls={`hero-pane-${i}`}
                    onClick={(e) => {
                      e.preventDefault()
                      goToTabRef.current(i)
                    }}
                    className="flex flex-1 cursor-pointer flex-col items-start justify-start gap-2 bg-transparent p-0 text-left text-medium font-bold text-grey-tab no-underline"
                  >
                    <div className="relative h-[2px] w-full bg-grey-track">
                      <div
                        ref={(el) => (barRefs.current[i] = el)}
                        data-anim="M12-hero-progress"
                        className="h-full w-0 bg-black"
                      />
                    </div>
                    <div>{t.title}</div>
                    <p className="font-normal sm:hidden">{t.text}</p>
                  </a>
                ))}
              </div>

              {/* panes */}
              <div className="relative block flex-1 overflow-visible">
                {TABS.map((t, i) => (
                  <div
                    key={t.title}
                    id={`hero-pane-${i}`}
                    role="tabpanel"
                    ref={(el) => (paneRefs.current[i] = el)}
                    className={`relative h-full ${i === 0 ? 'block' : 'hidden'}`}
                  >
                    <div className="flex h-full flex-col rounded-t-md sm:rounded-none sm:bg-grey-light sm:bg-hero-pane-mob sm:pl-8 sm:pt-8 xs:pl-0 xs:pt-0">
                      <div className="relative h-[48rem] overflow-hidden rounded-t-md md:h-[22rem] sm:h-[20rem] sm:rounded-none xs:h-auto">
                        <img
                          src={t.img}
                          alt=""
                          width="1376"
                          height="793"
                          fetchpriority={i === 0 ? 'high' : undefined}
                          className="h-full w-full object-cover object-left-top xs:hidden"
                        />
                        <img src={t.imgMob} alt="" className="hidden h-full w-full object-cover object-left-top xs:block" />
                      </div>
                      {t.panels.map((p, j) => (
                        <div
                          key={p.src}
                          ref={(el) => (panelRefs.current[i][j] = el)}
                          data-anim="M13-hero-panel"
                          className={`absolute w-[22rem] overflow-hidden rounded-panel border border-grey-light bg-white md:w-[12rem] sm:hidden ${p.cls}`}
                        >
                          <img src={p.src} alt="" className="relative h-auto w-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
