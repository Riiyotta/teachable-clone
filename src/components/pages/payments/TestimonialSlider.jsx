// payments.md §2 `section.section_testimonial` (Webflow slider, motion P-M1): warm off-white band; each slide
// is a .3fr / 1fr grid (round avatar + name/school | white quote card). Slides move by one slide width over
// 500ms `ease`; no autoplay, no loop. Arrows (3rem black circles, hidden ≤991) follow `data-hide-arrows`: the
// left one is hidden on the first slide and the right one on the last. Round dots jump to a slide; swipe
// (pointer drag) is enabled. The mask is as tall as the tallest slide; each slide keeps its natural height.
//
// slides: [{ avatar: { src, alt }, name, school, headline, quote (node) }]. quoteIcon: { src, alt }.
import { useRef, useState } from 'react'
import ArrowIcon from '../../shared/ArrowIcon.jsx'

function Arrow({ side, hidden, onClick }) {
  return (
    <button
      type="button"
      aria-label={side === 'left' ? 'previous slide' : 'next slide'}
      onClick={onClick}
      className={`absolute inset-y-0 z-[4] my-auto flex w-12 cursor-pointer items-center justify-center rounded-full bg-black text-white [aspect-ratio:1] md:!hidden ${
        side === 'left' ? 'left-0' : 'right-0'
      } ${hidden ? 'hidden' : ''}`}
    >
      <ArrowIcon className="arrow-icon flex" flipped={side === 'left'} />
    </button>
  )
}

export default function TestimonialSlider({ slides, quoteIcon }) {
  const [index, setIndex] = useState(0)
  const drag = useRef(null)
  const last = slides.length - 1
  const go = (i) => setIndex(Math.max(0, Math.min(last, i)))

  const onPointerDown = (e) => {
    drag.current = { x: e.clientX, y: e.clientY }
  }
  const onPointerUp = (e) => {
    if (!drag.current) return
    const dx = e.clientX - drag.current.x
    const dy = e.clientY - drag.current.y
    drag.current = null
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(index + (dx < 0 ? 1 : -1))
  }

  return (
    <section className="bg-warm-light py-section-small">
      <div className="padding-global">
        <div className="container-large">
          <div>
            <div>
              <div
                role="region"
                aria-roledescription="carousel"
                aria-label="Testimonials"
                data-anim="P-M1-testimonial-slider"
                className="relative h-auto bg-transparent px-24 text-center md:px-0"
              >
                <div
                  className="relative z-[1] overflow-hidden text-left"
                  onPointerDown={onPointerDown}
                  onPointerUp={onPointerUp}
                  onPointerCancel={() => (drag.current = null)}
                >
                  <div
                    className="flex items-start [transition:transform_500ms_ease] [touch-action:pan-y]"
                    style={{ transform: `translateX(${-index * 100}%)` }}
                  >
                    {slides.map((s, i) => (
                      <div
                        key={i}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${i + 1} of ${slides.length}`}
                        aria-hidden={i !== index}
                        className="relative w-full flex-none"
                      >
                        <div className="grid h-full grid-cols-[.3fr_1fr] gap-0 md:grid-cols-1 md:gap-4">
                          <div className="flex flex-col items-center justify-center gap-4 text-regular md:flex-row">
                            <div className="relative w-[10rem] overflow-hidden rounded-full [aspect-ratio:1] md:w-16">
                              <img src={s.avatar.src} alt={s.avatar.alt ?? ''} width="500" height="500" loading="lazy" draggable="false" className="h-full w-full object-cover" />
                            </div>
                            <div className="flex flex-col items-center justify-start gap-1 text-center md:items-start md:justify-center md:text-left">
                              <div className="font-semibold">{s.name}</div>
                              <div className="uppercase">{s.school}</div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-center gap-6 rounded-lg bg-white p-16 md:p-12 sm:px-global xs:py-10">
                            <div className="flex items-center justify-start gap-4 font-heading text-[2rem] leading-[1.2] sm:flex-col sm:items-start sm:gap-2">
                              <img src={quoteIcon.src} alt={quoteIcon.alt ?? ''} width="61" height="50" loading="lazy" draggable="false" className="h-auto w-8" />
                              <div>{s.headline}</div>
                            </div>
                            <p>{s.quote}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Arrow side="left" hidden={index === 0} onClick={() => go(index - 1)} />
                <Arrow side="right" hidden={index === last} onClick={() => go(index + 1)} />
                <div className="relative z-[2] mx-auto mt-8 h-[40px] pt-[10px] text-center md:max-w-[100vw] sm:mt-4">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show slide ${i + 1} of ${slides.length}`}
                      aria-current={i === index}
                      onClick={() => go(i)}
                      className={`relative mx-[6px] inline-block h-[.75rem] w-[.75rem] cursor-pointer rounded-full border border-black [transition:background-color_.1s,color_.1s] ${
                        i === index ? 'bg-black' : 'bg-transparent'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
