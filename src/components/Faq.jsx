// CLONE_SPEC §17 FAQ (`section.section_faq`). Accordion (M26) mirrors the original inline script:
// item 0 open on load; one open at a time; height 0 <-> scrollHeight, icon 0 <-> 135deg, text y -1rem <-> 0, all .3s ease.
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { HOME_FAQ, HOME_FAQ_HEADING } from '../content/home.js'


function Item({ q, a, open, touched, onToggle }) {
  const contentRef = useRef(null)
  const timer = useRef(0)
  const mounted = useRef(false)

  useLayoutEffect(() => {
    const el = contentRef.current
    clearTimeout(timer.current)
    if (!mounted.current) {
      // initial state (script "Set initial styles")
      mounted.current = true
      el.style.display = 'block'
      el.style.height = open ? el.scrollHeight + 'px' : '0px'
      return
    }
    if (open) {
      el.style.display = 'block'
      const h = el.scrollHeight + 'px'
      requestAnimationFrame(() => {
        el.style.height = h
      })
    } else {
      el.style.height = '0px'
      timer.current = setTimeout(() => {
        el.style.display = 'none'
      }, 300)
    }
  }, [open])

  useEffect(() => () => clearTimeout(timer.current), [])

  const textTransform = open ? 'translateY(0)' : touched ? 'translateY(-1rem)' : undefined

  return (
    <div className={`mb-2 items-start justify-start text-left${open ? ' active' : ''}`}>
      <div
        tabIndex={0}
        role="button"
        aria-expanded={open}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onToggle()
          }
        }}
        className="flex flex-row items-center justify-between gap-4 rounded-full bg-grey-light py-4 pl-[1.5rem] pr-4 xs:rounded-none"
      >
        <h3 className="flex-1 font-body text-medium font-normal">{q}</h3>
        <div className="relative flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center">
          <div
            data-anim="M26-faq-icon"
            className="relative flex h-4 w-4 items-center justify-center [transition:transform_.3s_ease]"
            style={{ transform: open ? 'rotateZ(135deg)' : touched ? 'rotateZ(0deg)' : undefined }}
          >
            <div className="absolute inset-0 mx-auto h-full w-px border-r-[2.5px] border-black" />
            <div className="absolute inset-0 my-auto h-px w-full border-t-[2.5px] border-black" />
          </div>
        </div>
      </div>
      <div ref={contentRef} data-anim="M26-faq-content" className="block overflow-hidden [transition:height_.3s_ease]">
        <div className="mb-[1.5rem] h-px w-full xs:mb-4" />
        <div className="flex gap-[.45rem] pb-[2rem] pl-[1.5rem] pr-[3rem] xs:pb-4 xs:pr-[1.5rem]">
          <div className="[transition:transform_.3s_ease]" style={{ transform: textTransform }}>
            {typeof a === 'string' ? <p className="text-medium">{a}</p> : <div className="faq-rich">{a}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

// heading: node. items: [{ q, a }] where `a` is a string (one <p>) or JSX (paragraphs, <ul>, links).
// padTop: false = Webflow `.padding-top-0` (section padding-top 0, bottom unchanged).
// footnote: optional node for the `.footnote-wrp` card under the list (online-courses): grey, max 32rem,
//   1rem text, padding 2rem (1.5rem ≤479), margin-bottom 10px. Renders as a <p>; pass inline content.
export default function Faq({ heading = HOME_FAQ_HEADING, items = HOME_FAQ, padTop = true, footnote }) {
  const [openIdx, setOpenIdx] = useState(0)
  const [touched, setTouched] = useState(false)

  const toggle = (i) => {
    setTouched(true)
    setOpenIdx((cur) => (cur === i ? -1 : i))
  }

  return (
    <section
      className={`relative overflow-hidden px-[4rem] ${padTop ? 'py-section-large' : 'pb-section-large pt-0'} md:px-[6rem] sm:px-[2rem] xs:px-0`}
    >
      <div className="container-small">
        <div className="relative mx-auto flex w-full max-w-mw-xlarge flex-col items-center justify-between gap-[3rem] text-center sm:gap-[1.5rem]">
          <div className="relative w-full xs:w-[80%]">
            <h2 className="heading-style-h3">{heading}</h2>
          </div>
          <div className="w-full">
            <div role="list" className="flex flex-col gap-y-2 text-left text-medium">
              {items.map(({ q, a }, i) => (
                <div role="listitem" key={i}>
                  <Item q={q} a={a} open={openIdx === i} touched={touched} onToggle={() => toggle(i)} />
                </div>
              ))}
            </div>
          </div>
          {footnote && (
            <div className="mx-auto mb-[10px] flex w-full max-w-[32rem] items-center justify-center rounded-md bg-grey-light p-8 text-regular xs:p-6">
              <p>{footnote}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
