// CLONE_SPEC §9 — "Why" sticky scroll scene (M14, M15, M16)
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// IX2 "smoothing 86": each animation frame the rendered progress moves (1 − 0.86) of the way to the scroll target.
const IX2_SMOOTHING = 0.86

function ArrowList({ items }) {
  return (
    <div className="list-arrows items-start">
      {items.map((t) => (
        <div key={t} className="list-arrows__row items-start">
          <div className="flex items-center">
            <div>→</div>
          </div>
          <div className="flex flex-1 items-center">
            <div>{t}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function WhyScroll() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    const q = gsap.utils.selector(el)
    const mm = gsap.matchMedia()

    // M16a — bg colour panel scale .9 → 1 (IX2 a-13, all breakpoints).
    // Measured @1440x900: .9 when the scene's top meets the viewport bottom, 1 by 240px later.
    mm.add('all', () => {
      gsap.fromTo(
        q('[data-why="bg-color"]'),
        { scale: 0.9 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: () => `+=${(window.innerHeight * 240) / 900}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      )
    })

    mm.add('(min-width: 992px)', () => {
      // M16b — bg photo scale 1.1 → 1 over p' 0–90% of the full pass of .why_scroll (IX2 a-23).
      const imgTl = gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      })
      imgTl.fromTo(q('[data-why="bg-img"]'), { scale: 1.1 }, { scale: 1, ease: 'none', duration: 90 }, 0)
      imgTl.set({}, {}, 100)

      // M14 — keyframe table, timeline time unit = p%.
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
      tl.fromTo(q('[data-why="header"]'), { xPercent: 0 }, { xPercent: 100, duration: 48 }, 2)
        .fromTo(q('[data-why="grid"]'), { xPercent: 0 }, { xPercent: -100, duration: 48 }, 2)
        .fromTo(q('[data-why="card"]'), { color: '#ffffff' }, { color: '#000000', duration: 1 }, 2)
        .fromTo(
          q('[data-why="card"]'),
          { width: '23%', height: '38%' },
          { width: '100%', height: '100%', duration: 53 },
          2,
        )
        .fromTo(q('[data-why="circle"]'), { opacity: 0 }, { opacity: 1, duration: 1 }, 2)
        .fromTo(q('[data-why="circle"]'), { scale: 0.6 }, { scale: 1.7, duration: 50 }, 6)
        .fromTo(q('[data-why="left"]'), { width: '100%' }, { width: '50%', duration: 10 }, 45)
        .fromTo(q('[data-why="right"]'), { width: '0%' }, { width: '50%', duration: 10 }, 45)
        .fromTo(q('[data-why="text"]'), { height: '0rem' }, { height: '14rem', duration: 11 }, 45)
        .fromTo(q('[data-why="frame"]'), { opacity: 0 }, { opacity: 1, duration: 1 }, 55)
        .set({}, {}, 100)

      // p = (scrollY − top) / (0.84 × height), clamped; rendered with IX2-style smoothing.
      let target = 0
      let current = 0
      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: () => `+=${el.offsetHeight * 0.84}`,
        onUpdate: (self) => {
          target = self.progress
        },
        onRefresh: (self) => {
          target = self.progress
        },
      })
      target = current = st.progress
      tl.progress(current)
      const tick = () => {
        if (current === target) return
        current += (target - current) * (1 - IX2_SMOOTHING)
        if (Math.abs(target - current) < 0.0001) current = target
        tl.progress(current)
      }
      gsap.ticker.add(tick)

      // M15 — verbatim from the inline script.
      gsap.to(q('[data-why="title"]'), {
        scrollTrigger: { trigger: el, start: '10% top', end: '46% top', scrub: 0.15 },
        fontSize: '3rem',
        ease: 'power2.out',
      })

      return () => {
        gsap.ticker.remove(tick)
        tl.kill()
      }
    })

    // Scroll positions are layout-dependent: re-measure once webfonts swap in and whenever the page height changes.
    let raf = 0
    let lastH = document.documentElement.scrollHeight
    const refresh = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => ScrollTrigger.refresh())
    }
    document.fonts?.ready.then(refresh)
    const ro = new ResizeObserver(() => {
      const h = document.documentElement.scrollHeight
      if (h !== lastH) {
        lastH = h
        refresh()
      }
    })
    ro.observe(document.body)

    return () => {
      ro.disconnect()
      cancelAnimationFrame(raf)
      mm.revert()
    }
  }, [])

  return (
    <div ref={root} className="why_scroll min-h-[280vh] md:min-h-0" data-anim="M14-why-scene">
      <section className="section_why sticky top-0 flex min-h-[100dvh] items-center justify-center overflow-hidden px-global text-white md:relative md:min-h-0 md:py-24 sm:top-auto sm:py-16">
        <div
          data-why="bg-color"
          data-anim="M16-why-bg-color"
          className="absolute inset-0 w-full scale-[.9] overflow-hidden bg-blue-dark"
        >
          <div
            data-why="bg-img"
            data-anim="M16-why-bg-img"
            className="relative h-full w-full scale-[1.1] overflow-hidden rounded-md md:scale-100"
          >
            <img
              src="/assets/68beb37e8514967a4d013c17_temp-stock-4.webp"
              alt="Young woman in yellow top attentively listening in a discussion with two men at a table indoors."
              width="1200"
              height="1600"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 h-full w-full backdrop-blur-[12px] md:backdrop-blur-[6px]" />
        </div>

        <div className="relative flex w-full flex-col items-start gap-16 md:gap-8">
          <div data-why="header" className="flex w-full flex-col items-center gap-4 sm:items-start sm:text-left">
            <div className="container-large">
              <div className="flex w-full max-w-mw-xlarge flex-col items-start justify-center gap-4">
                <h2 className="heading-style-h1">Why 150,000 industry leaders choose Teachable</h2>
                <p className="max-w-mw-xlarge">
                  Student success drives business success, and you need a platform designed for both.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-global md:hidden">
            <div className="relative mx-auto h-[28rem] w-full max-w-container-large">
              <div
                data-why="card"
                className="absolute bottom-0 left-0 z-[2] flex h-[38%] w-[23%] flex-col items-start justify-center gap-4 rounded-md text-white"
              >
                <div
                  data-why="circle"
                  className="absolute inset-y-0 left-[-50%] right-0 my-auto aspect-square scale-[.6] rounded-full bg-white opacity-0"
                />
                <div className="relative flex h-full w-full justify-between overflow-hidden">
                  <div data-why="left" className="flex h-full w-full flex-col items-start justify-end gap-4 py-10">
                    <h3 data-why="title" className="font-heading text-[2rem] leading-[1.1]">
                      Made for the modern
                      <br />
                      learner
                    </h3>
                    <div
                      data-why="text"
                      className="flex h-0 w-[35rem] flex-col items-start justify-start gap-4 overflow-clip"
                    >
                      <p>
                        You’re serious about education. We’re serious about engaging your students and turning them into
                        loyal customers.
                      </p>
                      <ArrowList
                        items={[
                          'Innovative student dashboard',
                          'Highly-rated mobile app',
                          'Drip content',
                          'Quizzes and completion certificates',
                        ]}
                      />
                    </div>
                  </div>
                  <div
                    data-why="right"
                    className="relative flex h-full w-0 justify-between rounded-md bg-placeholder text-left"
                  >
                    <div
                      data-why="frame"
                      className="relative flex h-full w-full flex-col gap-6 overflow-hidden rounded-md opacity-0"
                    >
                      <img
                        src="/assets/68e2f9bc11c85940d12845ff_ead53d9e008958202ec4680f95334916_teachable-quiz.webp"
                        alt="Mobile quiz app showing question 9 of 18 with 50% progress and an 83% score, and quiz score table."
                        width="1804"
                        height="1197"
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-why="grid" className="relative w-full md:hidden">
            <div className="relative mx-auto grid w-full max-w-container-large grid-cols-4 gap-8">
              <div className="z-[1] flex flex-col items-start gap-4 rounded-md text-left" />
              <div className="z-[1] flex flex-col items-start gap-4 rounded-md text-left">
                <h3 className="text-[2rem]">
                  More time for
                  <br />
                  what matters
                </h3>
              </div>
              <div className="z-[1] flex flex-col items-start gap-4 rounded-md text-left">
                <h3 className="text-[2rem]">
                  Business growth
                  <br />
                  that lasts
                </h3>
              </div>
              <div className="z-[1] flex flex-col items-start gap-4 rounded-md text-left">
                <h3 className="text-[2rem]">
                  Made to adapt
                  <br />
                  <em>and</em> evolve
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
