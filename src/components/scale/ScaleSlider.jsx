import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap, CSS_EASE } from '../../lib/ease.js'
import { FLAG, SCALE_HEADING, GlyphO, LanguageText } from './shared.jsx'

gsap.registerPlugin(ScrollTrigger)

// §11 badges: flag, burst offset (% of the 5rem tile, ≥992), fixed tablet position (≤991)
const BADGES = [
  { flag: FLAG.us, x: -350, y: -320, pos: 'md:top-[-36%] md:left-[-50%]' },
  { flag: FLAG.it, x: 0, y: -350, pos: 'md:top-[-40%] md:left-[5%]' },
  { flag: FLAG.ae, x: 400, y: -250, pos: 'md:top-[-30%] md:left-[60%]' },
  { flag: FLAG.fr, x: 680, y: -100, pos: 'md:top-[-10%] md:left-[80%]' },
  { flag: FLAG.es, x: 430, y: 250, pos: 'md:top-[30%] md:left-[60%]' },
  { flag: FLAG.de, x: 150, y: 340, pos: 'md:top-[36%] md:left-[30%]' },
  { flag: FLAG.ja, x: -180, y: 260, pos: 'md:top-[30%] md:left-[-20%]' },
  { flag: FLAG.gb, x: -400, y: 300, pos: 'md:top-[34%] md:left-[-60%]' },
  { flag: FLAG.au, x: -680, y: 0, pos: 'md:left-[-80%]' },
]

const STEP = 'absolute inset-0 mx-auto flex w-full max-w-[58rem] flex-col items-center justify-center gap-[1.5rem] text-center opacity-0'

export default function ScaleSlider() {
  const rootRef = useRef(null)
  const stepRefs = useRef([])
  const badgeRefs = useRef([])
  const floatRefs = useRef([])
  const progressWrpRef = useRef(null)
  const progressBarRef = useRef(null)

  // M20 — floating drift (inline rAF script): ±16px sin/cos, 0.005–0.008 rad/frame
  useLayoutEffect(() => {
    const icons = floatRefs.current
    const floats = icons.map(() => ({
      x: Math.random() * Math.PI * 2,
      y: Math.random() * Math.PI * 2,
      xSpeed: 0.005 + Math.random() * 0.003,
      ySpeed: 0.005 + Math.random() * 0.003,
    }))
    let raf
    const animate = () => {
      floats.forEach((f, i) => {
        f.x += f.xSpeed
        f.y += f.ySpeed
        icons[i].style.transform = `translate(${Math.sin(f.x) * 16}px, ${Math.cos(f.y) * 16}px)`
      })
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(raf)
  }, [])

  useLayoutEffect(() => {
    const root = rootRef.current
    const mm = gsap.matchMedia()

    // M17 + M18 — desktop/tablet only (section is display:none ≤767)
    mm.add('(min-width: 768px)', () => {
      const steps = stepRefs.current
      const n = steps.length
      const isHidden = (el) => el.classList.contains('hidden')
      steps.forEach((el, i) => {
        if (i === 0) {
          el.classList.remove('hidden')
          gsap.set(el, { opacity: 1, y: 0 })
        } else {
          el.classList.add('hidden')
          gsap.set(el, { opacity: 0, y: 50 })
        }
      })

      // Ported from gsap.js: note it hides every non-target step immediately,
      // so the outgoing fade-out tween runs on an already display:none element.
      let timeout = null
      const showIn = (t, fromY) => {
        const el = steps[t]
        gsap.set(el, { opacity: 0, y: fromY })
        el.classList.remove('hidden')
        gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.1 })
      }
      const show = (t, forward) => {
        if (t >= n) return
        const current = steps.findIndex((el) => !isHidden(el))
        if (current === t) return
        const outY = forward ? -50 : 50
        const inY = forward ? 50 : -50
        steps.forEach((el, i) => i !== t && el.classList.add('hidden'))
        if (current >= 0) {
          const out = steps[current]
          gsap.to(out, { opacity: 0, y: outY, duration: 0.4, ease: 'power2.in', onComplete: () => out.classList.add('hidden') })
          showIn(t, inY)
        } else {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            showIn(t, inY)
            timeout = null
          }, 500)
        }
      }

      const vh = window.innerHeight
      for (let i = 0; i < n; i++) {
        const cfg = {
          trigger: root,
          start: `top+=${i * vh}px top`,
          onEnter: () => show(i, true),
          onEnterBack: () => show(i, false),
          onLeaveBack: () => show(Math.max(i - 1, 0), false),
        }
        if (i < n - 1) cfg.onLeave = () => show(Math.min(i + 1, n - 1), true)
        ScrollTrigger.create(cfg)
      }

      // M18 — progress p = offset / height: width 0→100% over p 4%→65%, opacity 1→0 over 69%→70%
      const setProgress = (p) => {
        const w = Math.min(Math.max((p - 0.04) / 0.61, 0), 1) * 100
        const o = 1 - Math.min(Math.max((p - 0.69) / 0.01, 0), 1)
        progressBarRef.current.style.width = `${w}%`
        progressWrpRef.current.style.opacity = String(o)
      }
      ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => setProgress(self.progress),
        onRefresh: (self) => setProgress(self.progress),
      })

      return () => clearTimeout(timeout)
    })

    // M19 — flag burst (IX2 a-11 / a-12), ≥992 only; ≤991 the badges sit at fixed positions.
    mm.add('(min-width: 992px)', () => {
      const badges = badgeRefs.current
      const burst = () => {
        badges.forEach((el, i) => {
          gsap.killTweensOf(el)
          gsap.to(el, { xPercent: BADGES[i].x, yPercent: BADGES[i].y, duration: 0.5, ease: 'power1.out' })
          gsap.to(el, { opacity: 1, duration: 0.5, ease: CSS_EASE, delay: 0.1 })
        })
      }
      const out = () => {
        badges.forEach((el) => {
          gsap.killTweensOf(el)
          gsap.to(el, { opacity: 0, duration: 0.3, ease: CSS_EASE, onComplete: () => gsap.set(el, { xPercent: 0, yPercent: 0 }) })
        })
      }
      ScrollTrigger.create({
        trigger: root,
        start: 'top center',
        end: 'bottom center',
        onEnter: burst,
        onEnterBack: burst,
        onLeave: out,
        onLeaveBack: out,
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <div ref={rootRef} className="relative flex min-h-[400vh] flex-col md:h-[calc(100vh+3000px)] sm:hidden">
      <section className="sticky top-0 z-[1] flex min-h-[100dvh] flex-col items-stretch justify-between overflow-hidden px-global py-section-small">
        <div className="absolute inset-0">
          {BADGES.map((b, i) => (
            <div
              key={i}
              ref={(el) => (badgeRefs.current[i] = el)}
              data-anim="M19-scale-flag-burst"
              className={`absolute inset-0 m-auto flex h-[5rem] w-[5rem] items-center justify-center opacity-0 md:h-[4rem] md:w-[4rem] md:opacity-100 ${b.pos}`}
            >
              <div
                ref={(el) => (floatRefs.current[i] = el)}
                data-anim="M20-flag-float"
                className="relative flex h-full w-full items-center justify-center rounded-md border border-grey-light p-[.7rem] will-change-transform md:p-[.5rem]"
              >
                <img src={b.flag} loading="lazy" width="256" height="512" alt="" className="h-full w-full object-fill" />
              </div>
            </div>
          ))}
          <div
            ref={progressWrpRef}
            data-anim="M18-scale-progress"
            className="absolute inset-x-0 bottom-[4rem] mx-auto h-[.25rem] w-full max-w-container-large bg-grey-light will-change-[opacity] md:bottom-[2rem] md:w-[90%]"
          >
            <div ref={progressBarRef} className="relative h-full w-0 bg-black" />
          </div>
        </div>

        <div className="relative mx-auto flex h-full w-full max-w-container-large flex-1 flex-col items-stretch justify-between gap-[3rem] md:w-[80%] md:max-w-none">
          <div ref={(el) => (stepRefs.current[0] = el)} data-anim="M17-scale-step" className={STEP}>
            <h2 className={`${SCALE_HEADING} w-[80%] md:w-[97%]`}>
              Think bigger and gr<GlyphO />w at a <em>global</em> scale
            </h2>
            <p>
              Teachable is part of Hotmart Company, a global leader in the creator economy. Together, Teachable and
              Hotmart support more than 200,000 creators, so we know how to grow at a global scale and help you do it,
              too.
            </p>
          </div>
          <div ref={(el) => (stepRefs.current[1] = el)} data-anim="M17-scale-step" className={`${STEP} hidden`}>
            <h2 className={`${SCALE_HEADING} w-[65%] md:w-[85%]`}>
              Internati<GlyphO variant="international" />nal tax handling
            </h2>
            <p className="w-full max-w-mw-medium">
              Teachable automatically collects and remits sales tax, VAT, and GST across 45+ countries for your
              transactions.
            </p>
          </div>
          <div ref={(el) => (stepRefs.current[2] = el)} data-anim="M17-scale-step" className={`${STEP} hidden`}>
            <h3 className={SCALE_HEADING}>
              Automatic vide<GlyphO variant="video" /> subtitles {' '}
              <LanguageText />
            </h3>
            <p>
              Generate video subtitles and translate them into over 70 other languages, making your content instantly
              more accessible and marketable.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
