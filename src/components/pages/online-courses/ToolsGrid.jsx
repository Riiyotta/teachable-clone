import { useLayoutEffect, useRef } from 'react'
import { gsap, CSS_EASE } from '../../../lib/ease.js'
import { ICON_CHECK, ICON_CREATE, ICON_HOST, ICON_MANAGE, ICON_SELL } from './icons.jsx'

// online-courses.md §9 `section.section_tools`: 4 bottom-aligned cards (Create / Host / Manage / Sell),
// centred header absolutely placed over the grid top (≥992), dashed connector lines.
//
// Motion (IX2 "Tools Card 1–4", SCROLL_INTO_VIEW / SCROLL_OUT_OF_VIEW, replays every time):
//   in  when 20% of the card is in view: card y 1rem → 0 (.5s) + opacity 0 → 1 (.4s); line grows
//       (.5s, line-3 .8s, delay .2s); connector opacity → 1 (.1s, delay .6s / line-3 .9s). All CSS ease.
//   out when the card has fully left the viewport: everything back to the initial state in .2s.
// Final line lengths ≥992 are the IX2 values (line-2 grows to 7rem even though its CSS width is 2rem).
// Below 992 the lines grow to their CSS size for that breakpoint (≤479 they are vertical 1.5rem links,
// and line-3 stays at 0 there, as measured).

const BLACK_HALF = {
  r: 'bg-[linear-gradient(270deg,theme(colors.black)_50%,transparent_50%)]',
  down: 'bg-[linear-gradient(180deg,theme(colors.black)_50%,transparent_50%)]',
}
const DOT = 'absolute h-[15px] w-[15px] rounded-full'

// `.tools_line-*` + its connector, per line id. Base = ≥992, then the page CSS breakpoints.
const LINES = {
  1: {
    line: 'right-[-7rem] top-[9rem] my-auto h-px w-[7rem] border-t border-dashed border-black xs:inset-x-0 xs:bottom-[-1.5rem] xs:top-auto xs:mx-auto xs:h-[1.5rem] xs:w-px xs:border-r xs:border-t-0',
    dot: `${DOT} -left-2 -top-2 ${BLACK_HALF.r} xs:bottom-[-8px] xs:left-[-7px] xs:top-auto xs:bg-[linear-gradient(180deg,theme(colors.black)_50%,transparent_50%)]`,
  },
  2: {
    line: 'left-[-2rem] top-[9rem] my-auto h-px w-[2rem] border-t border-dashed border-gold xs:inset-x-0 xs:bottom-auto xs:top-[-1.5rem] xs:mx-auto xs:h-[1.5rem] xs:w-px xs:border-r xs:border-t-0',
    dot: `${DOT} -right-2 -top-2 bg-[linear-gradient(90deg,theme(colors.gold)_50%,transparent_50%)] xs:bottom-[-8px] xs:left-[-7px] xs:right-auto xs:top-auto xs:bg-[linear-gradient(180deg,theme(colors.gold)_50%,transparent_50%)]`,
  },
  3: {
    line: 'left-8 right-0 top-[-14rem] mx-auto h-[14rem] w-px border-r border-dashed border-black md:left-0 md:top-full md:h-[33.5rem] sm:h-[34.5rem]',
    dot: `${DOT} bottom-[-8px] left-[-7px] ${BLACK_HALF.down}`,
  },
  4: {
    line: 'left-[-2rem] right-0 top-[-5rem] mx-auto h-[5rem] w-px border-r border-dashed border-black md:left-0 md:top-[-2rem] md:h-[2rem] xs:top-[-1.5rem] xs:h-[1.5rem]',
    dot: `${DOT} bottom-[-8px] left-[-7px] ${BLACK_HALF.down}`,
  },
}
const DESKTOP_LENGTH = { 1: '7rem', 2: '7rem', 3: '14rem', 4: '5rem' }

// Card layout per position: 0 Create (white), 1 Host + 2 Manage (`.is-middle` > `.tools_sticky`), 3 Sell (gold).
const CARDS = [
  { icon: ICON_CREATE, line: 1, middle: false },
  { icon: ICON_HOST, line: 3, middle: true },
  { icon: ICON_MANAGE, line: 4, middle: true },
  { icon: ICON_SELL, line: 2, middle: false, gold: true },
]

function Line({ id }) {
  return (
    <div data-line={id} aria-hidden="true" className={`absolute ${LINES[id].line}`}>
      <div data-dot className={LINES[id].dot} />
    </div>
  )
}

function CardBody({ title, items, icon, gold }) {
  return (
    <>
      <div className="flex items-center justify-start gap-3 border-b border-black pb-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full p-[.85rem] md:h-10 md:w-10 md:p-3 ${
            gold ? 'bg-black text-gold' : 'bg-grey-light text-black'
          }`}
        >
          <div className="relative flex h-auto w-full items-center justify-center">{icon}</div>
        </div>
        <h3 className="text-card-title">{title}</h3>
      </div>
      <ul role="list" className="m-0 flex w-full list-none flex-col items-stretch justify-start gap-3 p-0 leading-[1.1]">
        {items.map((label, i) => (
          <li
            key={i}
            className="m-0 flex items-center justify-start gap-[.725rem] border-b border-black pb-4 pl-4 text-[1.15rem] sm:pl-0 sm:text-[.875rem] xs:text-[4vw]"
          >
            <div className="relative flex items-center justify-center rounded-full border border-black p-[.35rem]">
              <div className="flex h-auto w-[.65rem] items-center justify-center">{ICON_CHECK}</div>
            </div>
            <div>{label}</div>
          </li>
        ))}
      </ul>
    </>
  )
}

// Size a line would have without the inline animation value (its CSS size at this breakpoint).
function cssSize(el, prop) {
  const prev = el.style[prop]
  el.style[prop] = ''
  const v = getComputedStyle(el)[prop]
  el.style[prop] = prev
  return v
}

// heading: node (pass the stylised "o" via <Glyph/>). text: node. cards: [{ title, items: [string] }] x4.
export default function ToolsGrid({ heading, text, cards }) {
  const gridRef = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add(
      { desk: '(min-width: 992px)', mob: '(max-width: 479px)', any: '(min-width: 0px)' },
      (ctx) => {
        const { desk, mob } = ctx.conditions
        const ease = CSS_EASE
        const map = new Map()
        gridRef.current.querySelectorAll('[data-tools-card]').forEach((card) => {
          const line = card.querySelector('[data-line]')
          const dot = card.querySelector('[data-dot]')
          const id = Number(line.dataset.line)
          const prop = parseFloat(getComputedStyle(line).borderTopWidth) > 0 ? 'width' : 'height'
          const full = desk ? DESKTOP_LENGTH[id] : cssSize(line, prop)
          const grow = !(mob && id === 3)
          const reset = () => {
            gsap.set(card, { y: '1rem', opacity: 0 })
            gsap.set(line, { [prop]: 0 })
            gsap.set(dot, { opacity: 0 })
          }
          reset()
          const st = { inView: false, tl: null }
          st.play = (into) => {
            st.tl?.kill()
            const tl = gsap.timeline()
            if (into) {
              reset()
              tl.to(card, { y: 0, duration: 0.5, ease }, 0).to(card, { opacity: 1, duration: 0.4, ease }, 0)
              if (grow) {
                tl.to(line, { [prop]: full, duration: id === 3 ? 0.8 : 0.5, ease }, 0.2).to(
                  dot,
                  { opacity: 1, duration: 0.1, ease },
                  id === 3 ? 0.9 : 0.6,
                )
              }
            } else {
              tl.to(card, { y: '1rem', opacity: 0, duration: 0.2, ease }, 0)
                .to(line, { [prop]: 0, duration: 0.2, ease }, 0)
                .to(dot, { opacity: 0, duration: 0.2, ease }, 0)
            }
            st.tl = tl
          }
          map.set(card, st)
        })

        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              const st = map.get(e.target)
              if (e.isIntersecting && e.intersectionRatio >= 0.2 && !st.inView) {
                st.inView = true
                st.play(true)
              } else if (!e.isIntersecting && st.inView) {
                st.inView = false
                st.play(false)
              }
            })
          },
          { threshold: [0, 0.2] },
        )
        map.forEach((_, card) => io.observe(card))
        return () => {
          io.disconnect()
          map.forEach((st) => st.tl?.kill())
        }
      },
    )
    return () => mm.revert()
  }, [])

  return (
    <section className="relative overflow-hidden bg-grey-light">
      <div className="absolute inset-x-0 bottom-0 h-[16rem] bg-white" />
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="relative flex flex-col gap-12 sm:gap-8">
            <div
              ref={gridRef}
              className="relative grid grid-cols-4 items-end justify-items-stretch gap-4 md:grid-cols-2 md:items-start md:gap-8 xs:grid-cols-1 xs:gap-6"
            >
              <div className="absolute inset-x-0 top-0 mx-auto flex w-full max-w-[44rem] flex-col items-center justify-between gap-4 px-8 pt-8 text-center md:relative md:order-[-9999] md:col-span-2 md:mb-8 md:justify-start md:p-0 sm:mb-0 xs:col-span-1">
                <h2 className="text-tools-heading">{heading}</h2>
                <p>{text}</p>
              </div>
              {CARDS.map((c, i) => {
                const body = <CardBody title={cards[i].title} items={cards[i].items} icon={c.icon} gold={c.gold} />
                return c.middle ? (
                  <div
                    key={i}
                    data-tools-card
                    data-anim={`OC-tools-card-${i + 1}`}
                    className="relative z-[1] flex flex-col items-stretch justify-end rounded-md"
                  >
                    <div className="relative flex flex-col gap-8 rounded-md bg-white p-8 md:p-6 sm:p-4">
                      <Line id={c.line} />
                      {body}
                    </div>
                  </div>
                ) : (
                  <div
                    key={i}
                    data-tools-card
                    data-anim={`OC-tools-card-${i + 1}`}
                    className={`relative z-[1] flex flex-col items-stretch justify-start gap-8 rounded-md p-8 md:p-6 sm:p-4 xs:p-6 ${
                      c.gold ? 'bg-gold' : 'bg-white'
                    }`}
                  >
                    <Line id={c.line} />
                    {body}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
