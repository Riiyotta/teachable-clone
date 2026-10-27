// Feature card grid in three skins.
//
// skin 'grey'   feature-template T5 `section_feature-list` (mobile-app, sales, site-builder): 2-col header
//               (h2 | p), 4-col grid of #f0f0f0 cards. Cards alternate `.is-2` (margin-top 16rem, padding
//               4rem 2rem 2rem) / `.is-3` (margin-top 2rem, padding 4rem 2rem); both flatten at ≤991.
//               `icons` adds the black 3rem check circle. Motion MF1 (`scrub`): GSAP ScrollTrigger scrubs
//               every card's margin-top to 0 from "top 90%" to "top 0%" of the section (≥992 only).
// skin 'white'  enterprise §4 `section_enterprise-work` (#f5f2ee band, centred h2, 3-col white cards with a
//               3.5rem yellow icon tile and an Ivypresto 1.75rem/1.2 title).
// skin 'badges' enterprise §7 `section_security_badges` (white, left h2, 4-col plain cards, 3.5rem yellow
//               icon tile with .5rem padding, Peridot 2rem/1.1/600 title, 1rem text).
//
// heading, text: nodes (text is used by 'grey' only). items: [{ title, text, icon? }]; `icon` is an image
// src for 'white'/'badges' (alt via iconAlt). padTop: false = `.padding-top-0` (grey only). id: anchor id.
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CheckCircle() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black p-4 text-white xs:h-10 xs:w-10 xs:p-[.85rem]">
      <div className="relative flex h-auto w-5 items-center justify-center" aria-hidden="true">
        <svg width="100%" viewBox="0 0 229 201" fill="none">
          <path
            d="M116.523 84.8345C99.3237 106.024 84.7713 128.654 72.4892 153.374L30.2959 76.5697L0 93.124L59.012 200.538L90.2507 198.525C103.778 163.981 121.154 133.883 143.374 106.511C165.531 79.2174 193.305 53.6477 228.282 28.346L207.998 0.458496C170.539 27.5583 140.62 55.1571 116.527 84.8304L116.523 84.8345Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}

function GreyList({ heading, text, items, icons, scrub, padTop, id }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!scrub) return
    const section = sectionRef.current
    const mm = gsap.matchMedia()
    mm.add('(min-width: 992px)', () => {
      gsap.to(section.querySelectorAll('[data-feature-card]'), {
        marginTop: '0rem',
        scrollTrigger: { trigger: section, start: 'top 90%', end: 'top 0%', scrub: true },
      })
    })
    return () => mm.revert()
  }, [scrub, items.length])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative overflow-hidden ${padTop ? 'pt-section-large' : ''} pb-section-large`}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="flex flex-col gap-16 md:gap-12 sm:gap-8">
            <div className="grid grid-cols-2 gap-0 xs:grid-cols-1 xs:gap-4">
              <div>
                <h2>{heading}</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                {text && <p>{text}</p>}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-8 md:grid-cols-2 xs:grid-cols-1">
              {items.map((it, i) => (
                <div
                  key={i}
                  data-feature-card
                  data-anim={scrub ? 'MF1-feature-list-flatten' : undefined}
                  className={`relative flex flex-col items-start justify-start gap-4 rounded-md bg-grey-light px-8 pt-16 md:mt-0 md:pt-8 sm:p-6 ${
                    i % 2 === 0 ? 'mt-[16rem] pb-8' : 'mt-8 pb-16 md:pb-8'
                  }`}
                >
                  {icons && <CheckCircle />}
                  <div className="font-heading text-list-title">{it.title}</div>
                  <p className="text-size-medium">{it.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhiteList({ heading, items, id }) {
  return (
    <section id={id} className="relative overflow-hidden bg-warm py-32 md:py-24 sm:py-16">
      <div className="padding-global">
        <div className="container-large">
          <div className="relative flex flex-col gap-16 md:gap-12 sm:gap-8">
            <div className="flex flex-col items-center justify-center text-center">
              <h2>{heading}</h2>
            </div>
            <div className="grid grid-cols-3 gap-8 md:gap-4 sm:grid-cols-1">
              {items.map((it, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start justify-start gap-6 rounded-md bg-white p-12 text-medium md:p-8"
                >
                  {it.icon && (
                    <div className="flex h-auto w-14 items-center justify-center rounded-sm bg-yellow [aspect-ratio:1]">
                      <img src={it.icon} alt={it.iconAlt ?? ''} width="52" height="52" loading="lazy" className="h-full w-full" />
                    </div>
                  )}
                  <div className="flex flex-col items-start justify-start gap-6 md:gap-4">
                    <div className="font-heading text-[1.75rem] leading-[1.2]">{it.title}</div>
                    <p>{it.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BadgeList({ heading, items, id }) {
  return (
    <section id={id} className="relative overflow-hidden py-section-large">
      <div className="padding-global">
        <div className="container-large">
          <div className="flex flex-col gap-16 md:gap-12 sm:gap-8">
            <h2>{heading}</h2>
            <div className="grid grid-cols-4 gap-8 md:grid-cols-2 xs:grid-cols-1">
              {items.map((it, i) => (
                <div key={i} className="relative flex flex-col items-start justify-start gap-4 rounded-md">
                  <div className="flex flex-col items-start justify-start gap-4">
                    {it.icon && (
                      <img
                        src={it.icon}
                        alt={it.iconAlt ?? ''}
                        width="49"
                        height="58"
                        loading="lazy"
                        className="h-14 w-14 min-w-[1rem] rounded-sm bg-yellow object-fill p-2"
                      />
                    )}
                    <div className="text-[2rem] font-semibold leading-[1.1] md:text-[1.75rem] sm:text-[1.5rem] xs:text-[8vw]">
                      {it.title}
                    </div>
                  </div>
                  <p className="text-regular">{it.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function FeatureList({ skin = 'grey', heading, text, items, icons = false, scrub = true, padTop = true, id }) {
  if (skin === 'white') return <WhiteList heading={heading} items={items} id={id} />
  if (skin === 'badges') return <BadgeList heading={heading} items={items} id={id} />
  return <GreyList heading={heading} text={text} items={items} icons={icons} scrub={scrub} padTop={padTop} id={id} />
}
