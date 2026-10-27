// CLONE_SPEC §16 Case studies (`section.section_case-study`). Swiper (M24): buttons/drag/keyboard, loop, 300ms.
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard } from 'swiper/modules'
import 'swiper/css'
import ArrowIcon from './shared/ArrowIcon.jsx'

const A = '/assets/'
const SLIDES = [
  {
    title: 'Abagail Pumphrey',
    tag: 'Boss Project',
    href: 'https://www.teachable.com/blog/abagail-pumphrey-case-study',
    img: '697b7b664e764cabb7c5c1f6_stories-abagail.webp',
    alt: 'Smiling woman with wavy hair wearing striped shirt and colorful earrings against black background.',
  },
  {
    title: 'Brian Kouhi',
    tag: 'Toanimate',
    href: 'https://www.teachable.com/blog/brian-kouhi-story',
    img: '697b7bd3fedd95dc0d2b9607_stories-brian-kouhi.webp',
    alt: 'Smiling man with dark hair, black-framed glasses, and a gold necklace wearing a dark shirt.',
  },
  {
    title: 'Speak Norsk',
    tag: 'Huzan Raad & Nicoleta Stratan',
    href: 'https://www.teachable.com/blog/speak-norsk-case-study',
    img: '697b7c14f3eb4b90d2991ee2_stories-speak-norsk.webp',
    alt: 'Two confident women in black outfits standing side by side against a black background.',
  },
]

function ReadArrow() {
  return (
    <div className="flex h-auto w-[1.25rem] items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 50 45" fill="none" aria-hidden="true">
        <path
          d="M49.1153 24.6928C50.2902 23.5245 50.2955 21.625 49.1273 20.4501L30.0894 1.30444C28.9211 0.129566 27.0216 0.124204 25.8467 1.29246C24.6719 2.46073 24.6665 4.36021 25.8348 5.53509L42.7573 22.5535L25.7389 39.4761C24.5641 40.6443 24.5587 42.5438 25.727 43.7187C26.8952 44.8936 28.7947 44.8989 29.9696 43.7307L49.1153 24.6928ZM0.577498 22.4344L0.569029 25.4344L46.9915 25.5655L47 22.5655L47.0084 19.5655L0.585967 19.4344L0.577498 22.4344Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

function Slide({ s }) {
  return (
    <>
      <a
        href={s.href}
        className="relative flex h-full w-[60%] flex-col items-center justify-center bg-red-dark p-[3rem] text-center text-white no-underline md:p-[2rem] xs:w-full xs:justify-between xs:p-[1.5rem]"
      >
        <div className="flex flex-col items-center justify-center gap-[3rem] text-regular sm:gap-[1.5rem]">
          <h3 className="font-heading text-[4rem] leading-[.9] sm:text-[2.5rem] sm:leading-[1.1] xs:text-[12vw]">{s.title}</h3>
          <div className="rounded-md bg-cream px-4 py-2 font-semibold uppercase text-black sm:text-[.7rem] xs:text-[3vw]">{s.tag}</div>
        </div>
        <div className="hidden h-[10rem] w-[10rem] overflow-hidden rounded-full bg-cream xs:mb-4 xs:mt-6 xs:block">
          <img src={A + s.img} loading="lazy" width="409.5" height="1320" alt={s.alt} className="h-full w-full object-cover object-[50%_32%]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex w-full items-center justify-between px-[2rem] pb-[1.5rem] text-cream sm:px-[1.5rem] sm:pb-4 xs:relative xs:p-0">
          <div>Read case study</div>
          <ReadArrow />
        </div>
      </a>
      <div className="h-full w-[40%] overflow-hidden bg-black xs:hidden">
        <img src={A + s.img} loading="lazy" width="409.5" height="660" alt={s.alt} className="h-full w-full object-cover" />
      </div>
    </>
  )
}

export default function CaseStudy() {
  const swiperRef = useRef(null)
  const [current, setCurrent] = useState(1)

  return (
    <section className="relative overflow-hidden bg-grey-light">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="relative flex flex-row gap-[3rem] rounded-md bg-white p-[2rem] md:flex-col md:gap-0 sm:p-[1.5rem] xs:px-0 xs:pb-4">
            <div className="flex w-[45%] flex-col items-center justify-center gap-4 p-[2rem] text-center md:w-full sm:pt-4">
              <h2>Over 150,000 experts and businesses rely on Teachable</h2>
              <div>See how creators like Boss Project, ToAnimate, and Speak Norsk built and scaled their education businesses with Teachable.</div>
            </div>

            <div className="relative flex w-[55%] flex-col items-center justify-between md:w-full">
              <div data-anim="M24-case-study-swiper" className="relative flex max-h-full w-full min-w-0 max-w-full flex-col gap-4">
                <Swiper
                  modules={[Keyboard]}
                  slidesPerView="auto"
                  grabCursor
                  keyboard={{ enabled: true }}
                  watchSlidesProgress
                  observer
                  observeParents
                  loop
                  speed={300}
                  onSwiper={(sw) => (swiperRef.current = sw)}
                  onSlideChange={(sw) => setCurrent(sw.realIndex + 1)}
                  className="relative w-full flex-1 [overflow:clip] [perspective:1200px]"
                >
                  {SLIDES.map((s) => (
                    <SwiperSlide
                      key={s.title}
                      className="relative !flex !h-auto w-full flex-none items-stretch justify-center overflow-hidden rounded-md bg-grey-slide [aspect-ratio:3/2] [backface-visibility:hidden] xs:rounded-none xs:[aspect-ratio:auto]"
                    >
                      <Slide s={s} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="relative z-10 mx-auto flex flex-row items-center justify-center gap-[2rem] xs:gap-4">
                  <button
                    type="button"
                    aria-label="previous"
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-black p-0 text-white"
                  >
                    <ArrowIcon flipped />
                  </button>
                  <div className="relative z-10 flex h-auto w-full flex-1 flex-row items-center justify-center gap-2 font-mono text-regular">
                    <div>{current}</div>
                    <div>/</div>
                    <div>{SLIDES.length}</div>
                  </div>
                  <button
                    type="button"
                    aria-label="next"
                    onClick={() => swiperRef.current?.slideNext()}
                    className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-black p-0 text-white"
                  >
                    <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
