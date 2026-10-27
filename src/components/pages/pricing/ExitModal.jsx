// pricing.md §8 `.modal-wrapper.modal-exit` (exit-intent offer, motion P6). Shown once per session
// (sessionStorage[sessionKey]) and only after `minDelay` ms on the page:
//   - fine pointer: document `mouseleave` with clientY ≤ 20
//   - touch: a fast scroll-up gesture (≥100px accumulated, ≥0.3px/ms, samples < 200ms apart)
// Opening is instant (display flex) and locks body scroll; × / backdrop / Esc close it instantly. Focus is
// trapped inside the card while open and returned afterwards.
//
// tag, title ([line1, line2] or node), text, note: nodes. image: { src, alt }. cta: { label, href }.
import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ExitModal({ tag, title, text, image, cta, note, minDelay = 5000, sessionKey = 'ta_exitModalShown' }) {
  const [open, setOpen] = useState(false)
  const cardRef = useRef(null)
  const lastFocus = useRef(null)

  const show = useCallback(() => {
    try {
      if (sessionStorage.getItem(sessionKey)) return
      sessionStorage.setItem(sessionKey, '1')
    } catch {
      /* storage unavailable: still show once per mount */
    }
    lastFocus.current = document.activeElement
    setOpen(true)
  }, [sessionKey])

  const close = useCallback(() => {
    setOpen(false)
    lastFocus.current?.focus?.()
  }, [])

  // triggers
  useEffect(() => {
    const start = performance.now()
    const ready = () => performance.now() - start >= minDelay
    const fine = window.matchMedia('(pointer: fine)').matches

    const onLeave = (e) => {
      if (ready() && e.clientY <= 20) show()
    }
    let acc = 0
    let lastY = window.scrollY
    let lastT = performance.now()
    const onScroll = () => {
      const y = window.scrollY
      const t = performance.now()
      const dy = lastY - y
      const dt = t - lastT
      if (dy > 0 && dt < 200 && dy / Math.max(dt, 1) >= 0.3) acc += dy
      else acc = 0
      lastY = y
      lastT = t
      if (ready() && acc >= 100) show()
    }
    if (fine) document.documentElement.addEventListener('mouseleave', onLeave)
    else window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.documentElement.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('scroll', onScroll)
    }
  }, [minDelay, show])

  // open state: body lock, Esc, focus trap
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusables = () =>
      [...cardRef.current.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])')]
    focusables()[0]?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'Tab') {
        const f = focusables()
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  if (!open) return null
  return createPortal(
    <div
      data-anim="P6-exit-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-title"
      className="fixed inset-0 z-nav flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-white/20 xs:h-[100svh]"
    >
      <div className="absolute inset-0 backdrop-blur-[6px]" onClick={close} />
      <div
        ref={cardRef}
        className="relative flex h-[620px] max-h-[90vh] w-[540px] max-w-[50vw] flex-col gap-[24px] overflow-auto rounded-[20px] bg-white px-[32px] py-[40px] shadow-modal md:max-w-[80vw] sm:p-[20px] xs:max-w-[90vw]"
      >
        <a
          href="#"
          role="button"
          aria-label="Close"
          onClick={(e) => {
            e.preventDefault()
            close()
          }}
          className="absolute right-[32px] top-[32px] flex h-[44px] w-[44px] flex-col items-center justify-center rounded-[999px] bg-black/10 py-[8px] font-[Arial,'Helvetica_Neue',Helvetica,sans-serif] text-[1rem] font-black leading-none text-black no-underline"
        >
          <strong>X</strong>
        </a>
        <div className="flex flex-col gap-[14px]">
          <div className="inline-flex self-start rounded-[999px] bg-yellow px-[10px] py-[5px] text-[1rem] font-black tracking-[1px]">
            <strong>{tag}</strong>
          </div>
          <h2 id="exit-modal-title" className="block text-[3.5rem] leading-[1.1] xs:text-[2.5rem]">
            {Array.isArray(title) ? (
              <>
                {title[0]}
                <br />
                {title[1]}
              </>
            ) : (
              title
            )}
          </h2>
          <div className="text-[1rem] xs:text-[.935rem]">{text}</div>
        </div>
        <div className="relative block h-[180px] min-h-[100px] overflow-clip rounded-[8px] sm:hidden xs:block xs:h-[170px] xs:min-h-0">
          <img src={image.src} alt={image.alt ?? ''} className="absolute inset-0 box-border h-full w-full object-cover [aspect-ratio:2.39] xs:[aspect-ratio:3/2]" />
        </div>
        <div className="flex flex-col gap-[8px]">
          <a
            href={cta.href}
            className="flex h-[60px] w-full items-center justify-center rounded-[999px] border border-black bg-yellow px-[32px] py-[18px] text-center text-[1.3rem] font-bold text-black no-underline"
          >
            {cta.label}
          </a>
          <div className="text-center text-[.875rem] text-grey-note">{note}</div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
