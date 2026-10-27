import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSS_EASE } from '../../lib/ease.js'
import { FLAG, SCALE_HEADING, GlyphO, LanguageText } from './shared.jsx'

gsap.registerPlugin(ScrollTrigger)

// §11m `.section_scale-mob` (≤767 only). Badge entrance M27 = IX2 e-180/e-181 (a-54 / a-55), per row
// `.scale-mob_badge-wrp`, media "small"+"tiny" (≤767):
//  - initial state: translateX is-1 −40vw, is-2 −55vw, is-3 +55vw, is-4 +40vw
//  - scroll into view (offset 10%: row top above 90% vh / bottom below 10% vh): inner pair (is-2, is-3)
//    → 0 over 600ms CSS `ease`; outer pair (is-1, is-4) same with 200ms delay
//  - scroll fully out of view (offset 0%): all four back to start over 200ms `ease` (replays on re-entry)
const START_X = ['-40vw', '-55vw', '55vw', '40vw']

function BadgeRow({ flags }) {
  return (
    <div data-anim="M27-row" className="flex items-end justify-center gap-[1.5rem] xs:gap-[1rem]">
      {flags.map((flag, i) => (
        <div
          key={flag}
          data-anim="M27-mobile-flag"
          data-anim-index={i + 1}
          data-start-x={START_X[i]}
          className="relative flex h-[4rem] w-[4rem] items-center justify-center xs:h-[3.5rem] xs:w-[3.5rem]"
        >
          <div className="relative flex h-full w-full items-center justify-center rounded-[.4rem] border border-grey-light bg-white p-[.5rem] xs:p-[.3rem]">
            <img src={flag} loading="lazy" alt="" className="h-full w-full object-fill" />
          </div>
        </div>
      ))}
    </div>
  )
}

const CONTENT = 'relative flex w-full max-w-[58rem] flex-col items-center justify-center gap-[1rem] text-center xs:w-[92%] xs:gap-[1.5rem]'

export default function ScaleMobile() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    const mm = gsap.matchMedia(el)
    mm.add('(max-width: 767px)', () => {
      el.querySelectorAll('[data-anim="M27-row"]').forEach((row) => {
        const tiles = [...row.querySelectorAll('[data-anim="M27-mobile-flag"]')]
        const startX = (i, t) => t.dataset.startX
        gsap.set(tiles, { x: startX })
        // IX2 edges are inclusive (fires with top exactly at 90% vh; resets only once bottom < 0), hence ±1px.
        // Resolve state from geometry at each boundary crossing so fast jumps (which can fire several
        // callbacks at once) always land in the same state IX2 would: in-view (10% inset) → in,
        // fully out of view → out, otherwise keep the current state.
        let state = 'out'
        const sync = () => {
          const r = row.getBoundingClientRect()
          const vh = window.innerHeight
          if (state !== 'in' && r.top < vh * 0.9 + 1 && r.bottom > vh * 0.1 - 1) {
            state = 'in'
            tiles.forEach((t) => {
              const outer = t.dataset.animIndex === '1' || t.dataset.animIndex === '4'
              gsap.to(t, { x: 0, duration: 0.6, delay: outer ? 0.2 : 0, ease: CSS_EASE, overwrite: true })
            })
          } else if (state !== 'out' && (r.bottom < -0.5 || r.top > vh + 0.5)) {
            state = 'out'
            gsap.to(tiles, { x: startX, duration: 0.2, ease: CSS_EASE, overwrite: true })
          }
        }
        ScrollTrigger.create({ trigger: row, start: 'top 90%+=1', end: 'bottom 10%-=1', onToggle: sync })
        ScrollTrigger.create({ trigger: row, start: 'top bottom+=1', end: 'bottom top-=1', onToggle: sync })
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <section ref={root} className="relative hidden overflow-hidden py-[2rem] sm:block">
      <div className="padding-global">
        <div className="container-large">
          <div className="flex flex-col items-center justify-between gap-[4rem]">
            <div className={CONTENT}>
              <h2 className={`${SCALE_HEADING} w-full xs:w-[70%]`}>
                Think bigger and gr<GlyphO />w at a <em>global</em> scale
              </h2>
              <p>
                We're a part of Hotmart Company—and together we make up the{' '}
                <strong>#1 worldwide leader in the creator economy</strong>—so we know how to win at a global scale and
                help you do it, too
              </p>
            </div>
            <BadgeRow flags={[FLAG.us, FLAG.it, FLAG.fr, FLAG.es]} />
            <div className={CONTENT}>
              <h2 className={`${SCALE_HEADING} w-[75%] xs:w-[80%]`}>
                Internati<GlyphO variant="international" />nal tax handling
              </h2>
              <p className="w-full max-w-mw-medium">
                Teachable <strong>automatically collects and remits </strong>sales tax, VAT, and GST across 45+
                countries for your transactions.
              </p>
            </div>
            <BadgeRow flags={[FLAG.de, FLAG.ja, FLAG.gb, FLAG.au]} />
            <div className={CONTENT}>
              <div className="flex flex-col items-center justify-start gap-0">
                {/* 480–767: original markup reads "subtitles and <span>and …</span>" (duplicated "and" on the live site) */}
                <h2 className={`${SCALE_HEADING} w-[86%] xs:hidden`}>
                  Automatic vide<GlyphO variant="video" /> subtitles and <LanguageText />
                </h2>
                <h2 className={`${SCALE_HEADING} hidden w-[86%] xs:block`}>
                  Automatic vide<GlyphO variant="video" /> subtitles
                </h2>
                <h2 className={`${SCALE_HEADING} hidden w-full items-center justify-center xs:block`}>
                  <LanguageText />
                </h2>
              </div>
              <p>
                Generate video subtitles and translate them into over 70 other languages, making your content instantly
                more accessible and marketable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
