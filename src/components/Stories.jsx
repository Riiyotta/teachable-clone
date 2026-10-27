// CLONE_SPEC §13 Success stories — Swiper 11 carousel (settings verbatim from stories-slider.js)
import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Autoplay, Keyboard } from 'swiper/modules'
import 'swiper/css'
import ArrowIcon from './shared/ArrowIcon.jsx'
import { HOME_STORIES } from '../content/home.js'

const A = '/assets/'

function Slide({ s }) {
  return (
    <div
      data-anim="M10-story-slide-hover"
      className="swiper-slide relative flex !h-auto !w-[calc(20%-12.8px)] flex-none flex-col items-stretch justify-start gap-[1.5rem] overflow-hidden rounded-md border border-grey-light p-section-small transition-colors duration-200 ease-css [backface-visibility:hidden] hover:bg-grey-light md:!w-[40%] sm:!w-full"
    >
      <div className="flex gap-[1rem]">
        <div className="relative h-[5rem] w-[5rem] rounded-full">
          {s.bg && (
            <div className="absolute inset-0 z-0 m-auto h-full w-full rounded-full bg-[radial-gradient(circle_farthest-corner_at_50%_50%,white_20%,transparent_90%)]" />
          )}
          <img
            src={A + s.img}
            loading="lazy"
            width="80"
            height="80"
            alt={s.alt}
            className="relative z-[1] h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="relative flex flex-1 flex-col items-start justify-center pb-[.2rem]">
          <div className="text-[length:var(--fs-regular)] font-semibold">{s.name}</div>
          <div className="text-[length:var(--fs-small)]">{s.company}</div>
        </div>
      </div>
      <div className="relative flex flex-1 flex-col items-start justify-start gap-[.5rem]">
        <div className="font-medium">{s.headline}</div>
        <p className="text-[length:var(--fs-regular)] opacity-70">{s.quote}</p>
      </div>
      <div className="relative flex items-center justify-start gap-[.25rem] text-[length:var(--fs-small)]">
        <a href={s.href} target="_blank" rel="noreferrer" className="no-underline hover:underline">
          Explore school
        </a>
        <ArrowIcon className="relative mt-[.15rem] flex w-[.75rem] items-center justify-center sm:w-[.85rem]" />
      </div>
    </div>
  )
}

// centered: site-builder variant (feature-template M23 / site-builder.md §4): Swiper centeredSlides + autoHeight,
// so the active slide is centred and the wrapper height follows it. Slides, copy and timing are unchanged.
export default function Stories({ centered = false }) {
  const swiperRef = useRef(null)
  const instance = useRef(null)

  // M23 — structural carousel behaviour
  useEffect(() => {
    instance.current = new Swiper(swiperRef.current, {
      modules: [Autoplay, Keyboard],
      slidesPerView: 'auto',
      centeredSlides: centered,
      spaceBetween: 16,
      autoHeight: centered,
      grabCursor: true,
      loop: true,
      autoplay: { enabled: true, delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: false, waitForTransition: true },
      keyboard: { enabled: true, pageUpDown: false },
      watchSlidesProgress: true,
      observer: true,
      observeParents: true,
      resistance: false,
    })
    return () => instance.current?.destroy(true, true)
  }, [centered])

  const btn = 'relative flex h-[3rem] w-[3rem] flex-row items-center justify-center rounded-full bg-black p-0 text-white'

  return (
    <section className="relative overflow-hidden bg-white py-[8rem] md:py-[6rem] sm:px-[2rem] sm:py-[4rem] xs:px-[1.5rem]">
      <div className="relative flex flex-col gap-[3rem] sm:gap-[2rem]">
        <div
          className="relative mx-auto flex w-full max-w-container-large flex-col items-center justify-between gap-[1rem] text-center md:px-[2rem] xs:px-0"
        >
          <h2>Teachable success stories write themselves</h2>
          <div className="max-w-[768px]">
            From language schools to reading specialists and data experts, creators in 180 countries use Teachable to
            share their expertise through courses, coaching, and memberships, and build thriving education businesses.
          </div>
        </div>
        <div className="relative flex w-full min-w-0 max-w-full flex-col gap-[2rem] sm:gap-[1rem]">
          <div
            ref={swiperRef}
            data-anim="M23-stories-swiper"
            className="swiper relative left-[-5%] min-h-[1rem] w-[110%] min-w-0 !overflow-clip md:left-0 md:w-full md:!overflow-visible"
          >
            <div className="swiper-wrapper mx-auto flex flex-row items-stretch pb-px">
              {HOME_STORIES.map((s) => (
                <Slide key={s.name} s={s} />
              ))}
            </div>
          </div>
          <div className="relative z-10 flex flex-row items-center justify-center gap-[1rem] px-global">
            <button type="button" aria-label="previous" className={btn} onClick={() => instance.current?.slidePrev()}>
              <ArrowIcon flipped />
            </button>
            <button type="button" aria-label="next" className={btn} onClick={() => instance.current?.slideNext()}>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
