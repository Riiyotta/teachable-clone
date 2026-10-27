// feature-template.md T9d `section.section_quick-links` (sales-and-marketing): grey band, centred header,
// then a looping Swiper of full-width slides (text column + 3/2 image) with a white pill navigation
// (prev · "n / N" · next) that sits over the bottom-left of the text column at ≥992 and below the slides
// at ≤991 (space-between at ≤767). Motion MF3: Swiper (slidesPerView auto, grabCursor, keyboard,
// watchSlidesProgress, observer, observeParents, loop, speed 300); same control pattern as CaseStudy.
//
// heading, text: nodes. slides: [{ title, text, label, href, image: { src, alt, w, h } }] (label is the
// literal uppercase footer label, e.g. "READ MORE").
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard } from 'swiper/modules'
import 'swiper/css'
import ArrowIcon from '../shared/ArrowIcon.jsx'
import ButtonSimple from '../shared/ButtonSimple.jsx'

const NAV_BTN = 'relative flex h-12 w-12 items-center justify-center rounded-full bg-black p-0 text-white'

export default function QuickLinksSlider({ heading, text, slides }) {
  const swiperRef = useRef(null)
  const [current, setCurrent] = useState(1)

  return (
    <section className="relative overflow-hidden bg-grey-light py-32 md:py-24 sm:py-16">
      <div className="padding-global">
        <div className="container-large">
          <div className="flex flex-col items-stretch justify-start gap-16 md:gap-12 sm:gap-8">
            <div className="flex flex-col items-center justify-start gap-4 text-center">
              <h2>{heading}</h2>
              {text && <p>{text}</p>}
            </div>
            <div
              data-anim="MF3-quick-links-swiper"
              className="relative flex max-h-full w-full min-w-0 max-w-full flex-col gap-4"
            >
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
                {slides.map((s, i) => (
                  <SwiperSlide key={i} className="relative !flex !h-auto w-full flex-none items-stretch justify-center [backface-visibility:hidden]">
                    <div className="grid w-full grid-cols-2 gap-16 md:gap-8 xs:grid-cols-1 xs:gap-4">
                      <div className="flex flex-col items-start justify-start gap-4 pl-8 pt-16 md:justify-center md:p-0">
                        <div className="flex flex-col items-start justify-start gap-4 xs:pr-8">
                          <div className="font-heading text-slider-title">{s.title}</div>
                          <p>{s.text}</p>
                        </div>
                        <div className="relative flex items-center justify-start">
                          <ButtonSimple label={s.label} href={s.href} />
                        </div>
                      </div>
                      <div className="relative overflow-hidden rounded-md bg-white [aspect-ratio:3/2] md:[aspect-ratio:1]">
                        <img
                          src={s.image.src}
                          alt={s.image.alt ?? ''}
                          width={s.image.w}
                          height={s.image.h}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute bottom-[3rem] left-8 z-10 flex flex-row items-center justify-start gap-8 rounded-full bg-white p-2 md:relative md:bottom-0 md:left-0 md:justify-center sm:justify-between">
                <button type="button" aria-label="previous" onClick={() => swiperRef.current?.slidePrev()} className={NAV_BTN}>
                  <ArrowIcon flipped />
                </button>
                <div className="relative z-10 flex flex-row items-center justify-center gap-2 font-mono text-regular leading-[1.1]">
                  <div>{current}</div>
                  <div>/</div>
                  <div>{slides.length}</div>
                </div>
                <button type="button" aria-label="next" onClick={() => swiperRef.current?.slideNext()} className={NAV_BTN}>
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
