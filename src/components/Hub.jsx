// CLONE_SPEC §15 Integrations hub (`section.section_hub`).
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HUB_HEADING, HUB_LOGOS, HUB_TEXT } from '../content/home.js'

gsap.registerPlugin(ScrollTrigger)

// Horizontal dashed lines: 3 base, +1 at ≤991 (.show-tablet), +2 at ≤479 (.show-mobile-portrait)
const H_LINES = ['', '', '', 'hidden md:block', 'hidden xs:block', 'hidden xs:block']
// Vertical lines: 10 base, 3 hidden ≤991 (.hide-tablet), 2 hidden ≤479 (.hide-mobile-portrait)
const V_LINES = ['', '', '', '', '', 'xs:hidden', 'xs:hidden', 'md:hidden', 'md:hidden', 'md:hidden']

function Logo({ src, label }) {
  return (
    <div data-anim="M25-hub-logo" className="group relative flex aspect-square items-center justify-center">
      <img src={src} loading="lazy" width="48" height="48" alt={`${label} logo`} className="h-[6rem] w-[6rem] md:h-[5rem] md:w-[5rem] sm:h-[3rem] sm:w-[3rem]" />
      {/* M11 tooltip: hover only ≥992 */}
      <div className="pointer-events-none absolute bottom-[75%] left-1/2 z-10 flex -translate-x-1/2 translate-y-[.5rem] items-center justify-center whitespace-nowrap rounded-full bg-black px-[.65rem] pb-[.25rem] pt-[.1rem] text-center text-small text-white opacity-0 [transition:opacity_.4s_ease_.1s,transform_.25s_ease] group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-hover:[transition-delay:0s] md:[transition:none] md:group-hover:pointer-events-none md:group-hover:translate-y-[.5rem] md:group-hover:opacity-0">
        <div className="absolute inset-x-0 bottom-[-.2rem] mx-auto h-[.5rem] w-[.5rem] rotate-45 bg-black" />
        <div>{label}</div>
      </div>
    </div>
  )
}

// heading / text: header copy (nodes). Logos, grid, tooltips, M25 ScrollTrigger and the button are fixed.
export default function Hub({ heading = HUB_HEADING, text = HUB_TEXT }) {
  const root = useRef(null)

  // M25 — Webflow IX3 timeline t-4db0eaf4 (measured from the live site's IX3 config, all breakpoints):
  // trigger .section_hub, clamp:true, start "20% bottom", end "50% 80%", scrub .8;
  // .hub_logo-wrp scale .2→1 + opacity 0→1, duration .2, ease power1.out, stagger {amount .5, ease power1.out}.
  useLayoutEffect(() => {
    const el = root.current
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: 'clamp(20% bottom)',
            end: 'clamp(50% 80%)',
            scrub: 0.8,
          },
        })
        .fromTo(
          '[data-anim="M25-hub-logo"]',
          { scale: 0.2, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.2, ease: 'power1.out', stagger: { amount: 0.5, ease: 'power1.out' } },
        )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="relative overflow-hidden bg-white">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="relative flex flex-col gap-[4rem] md:gap-[3rem]">
            <div className="relative flex flex-col items-center justify-between gap-4 text-center">
              <h2>{heading}</h2>
              <p className="w-full max-w-[58rem]">{text}</p>
            </div>

            <div
              data-anim="M25-hub-grid"
              className="relative mx-auto my-4 grid w-full grid-cols-9 gap-0 md:w-auto md:grid-cols-6 md:place-items-center md:gap-[1.5rem] md:p-[.75rem] sm:my-2 xs:grid-cols-4 xs:gap-4 xs:p-2"
            >
              <div className="absolute inset-0 flex justify-between" aria-hidden="true">
                <div className="absolute inset-0 flex flex-col justify-between">
                  {H_LINES.map((c, i) => (
                    <div key={i} className={`relative left-[-10%] h-px w-[120%] border-t border-dashed border-grey-light ${c}`} />
                  ))}
                </div>
                {V_LINES.map((c, i) => (
                  <div key={i} className={`relative top-[-10%] h-[120%] w-px border-r border-grey-light ${c}`} />
                ))}
              </div>
              {HUB_LOGOS.map(([src, label]) => (
                <Logo key={label} src={src} label={label} />
              ))}
            </div>

            <div className="relative mt-4 flex items-center justify-center">
              <a href="https://www.teachable.com/app-hub" className="btn-black sm:w-full">
                <span className="btn-txt">Explore integrations</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
