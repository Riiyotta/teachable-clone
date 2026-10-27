// Webflow Tabs clone with pill links (pricing ×2, examples, app-hub). Link styles swap instantly; the
// outgoing pane fades out over 100ms, then the incoming one fades in over 300ms (CSS `ease`), as the live
// `data-duration-out=100 / data-duration-in=300 / data-easing=ease` tabs do. Panes not shown are display:none,
// so the layout below moves with the pane height (no height animation).
//
// tabs: [{ label: node, icon?: node (shown only on the current link, e.g. the pricing check), content: node }]
// size: 'pricing'  `.pricing-tabs_menu-link`  .75rem 1.25rem, 1rem/1.2/400 → current 700; menu gap .5rem,
//                  mb 3rem (≤767 1rem); ≤479 links stretch (flex 1), menu left-aligned
//       'examples' `.examples-tabs_link`  .7rem 1rem, 1rem/1.5/600 (≤479 4vw); menu mb 3rem, ≤767 wraps, mb 2rem
//       'compact'  `.pricing-tabs-mob_link`  .6rem 1rem, 1rem/600 (≤767 .4rem 1rem, .875rem; ≤479 3vw);
//                  menu wraps, left-aligned, gap .5rem (≤767 .25rem)
//       'apps'     `.feature-apps-tabs_link`  grey pills (#f0f0f0 / #222), .6rem 1.5rem .7rem, 1rem/1.5/400,
//                  flex 1, menu space-between mb 4rem; ≤991 wraps, content width, mb 3rem; ≤767 mb 2rem;
//                  ≤479 3.5vw
// defaultIndex: initial tab. onChange(index): optional. className: outer wrapper.
import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { gsap, CSS_EASE } from '../../lib/ease.js'

// `link` = shared box styles, `idle` / `current` = the state colours (kept apart so only one bg/colour applies).
const SIZES = {
  pricing: {
    menu: 'mb-12 flex items-center justify-center gap-2 sm:mb-4 xs:w-full xs:items-stretch xs:justify-start',
    link: 'flex items-center justify-center gap-1 rounded-full border border-black px-5 py-3 text-center text-regular leading-[1.2] xs:flex-1',
    idle: 'bg-transparent font-normal text-grey-tab',
    current: 'bg-black font-bold text-white',
  },
  examples: {
    menu: 'mb-12 flex items-center justify-center gap-2 sm:mb-8 sm:flex-wrap',
    link: 'inline-block rounded-full border border-black px-4 py-[.7rem] text-left text-[1rem] font-semibold leading-[1.5] xs:block xs:text-[4vw]',
    idle: 'bg-transparent text-grey-tab',
    current: 'bg-black text-white',
  },
  compact: {
    menu: 'flex flex-wrap items-center justify-start gap-2 sm:gap-1',
    link: 'inline-block rounded-full border border-black px-4 py-[.6rem] text-left text-[1rem] font-semibold leading-[1.5] sm:py-[.4rem] sm:text-[.875rem] xs:block xs:text-[3vw]',
    idle: 'bg-transparent text-grey-tab',
    current: 'bg-black text-white',
  },
  apps: {
    menu: 'mb-16 flex justify-between gap-2 md:mb-12 md:flex-wrap md:items-start md:justify-start sm:mb-8',
    link: 'inline-block flex-1 rounded-full px-6 pb-[.7rem] pt-[.6rem] text-center text-[1rem] leading-[1.5] md:flex-[0_auto] xs:block xs:text-[3.5vw]',
    idle: 'bg-grey-light text-grey-tab',
    current: 'bg-black text-white',
  },
}

export default function PillTabs({ tabs, size = 'pricing', defaultIndex = 0, onChange, className = '' }) {
  const s = SIZES[size]
  const uid = useId()
  const [active, setActive] = useState(defaultIndex) // link state (instant)
  const [shown, setShown] = useState(defaultIndex) // pane on screen
  const paneRef = useRef(null)
  const ctx = useRef(null)
  const fadingIn = useRef(false)

  useEffect(() => {
    ctx.current = gsap.context(() => {})
    return () => ctx.current.revert()
  }, [])

  const select = (i) => {
    if (i === active) return
    setActive(i)
    onChange?.(i)
    ctx.current.add(() => {
      gsap.killTweensOf(paneRef.current)
      gsap.to(paneRef.current, {
        opacity: 0,
        duration: 0.1,
        ease: CSS_EASE,
        onComplete: () => {
          fadingIn.current = true
          setShown(i)
        },
      })
    })
  }

  // after the swap renders, fade the new pane in
  useLayoutEffect(() => {
    if (!fadingIn.current) return
    fadingIn.current = false
    ctx.current.add(() => {
      gsap.fromTo(paneRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: CSS_EASE, clearProps: 'opacity' })
    })
  }, [shown])

  const onKey = (e, i) => {
    const n = tabs.length
    let j = null
    if (e.key === 'ArrowRight') j = (i + 1) % n
    if (e.key === 'ArrowLeft') j = (i - 1 + n) % n
    if (j === null) return
    e.preventDefault()
    select(j)
    document.getElementById(`${uid}-tab-${j}`)?.focus()
  }

  return (
    <div className={className} data-anim="P1-pill-tabs-fade">
      <div role="tablist" className={s.menu}>
        {tabs.map((t, i) => {
          const cur = i === active
          return (
            <button
              key={i}
              id={`${uid}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={cur}
              aria-controls={`${uid}-pane`}
              tabIndex={cur ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`relative cursor-pointer align-top no-underline ${s.link} ${cur ? s.current : s.idle}`}
            >
              {cur && t.icon}
              {t.label}
            </button>
          )
        })}
      </div>
      <div className="relative w-full overflow-hidden">
        <div ref={paneRef} id={`${uid}-pane`} role="tabpanel" aria-labelledby={`${uid}-tab-${shown}`} className="relative">
          {tabs[shown].content}
        </div>
      </div>
    </div>
  )
}
