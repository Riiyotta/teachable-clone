// watch-demo.md §1 `section.section_demo-hero.is-gradient`: copy column with an email pill (submit button
// inside it), consent checkbox and legal line; a blurred 16:9 video frame with an "unlock" chip.
// Behaviour (W-M1…W-M6, from the section's inline CSS/JS):
//   - submit (no network): native validation (email + required consent), then
//     localStorage[storageKey] = 'true', form → success message, frame .is-locked → .is-unlocked
//     (overlay + thumb hidden, player iframe with autoplay=true), offer banner shown with dvOfferIn
//     (.5s ease), trial link hidden.
//   - returning visitor (key already set): same unlock on mount with autoplay=false.
//   - chip click focuses the email input. Hovers: submit bg #000 → yellow (.3s), chip / offer button -2px (.2s).
//   prefers-reduced-motion drops the chip / thumb / offer-button transitions and the offer animation.
//
// content: see src/content/watch-demo.js (DEMO). storageKey defaults to the live key.
import { useEffect, useId, useRef, useState } from 'react'
import SectionTag from '../../shared/SectionTag.jsx'
import CheckIcon from '../../shared/CheckIcon.jsx'

function Lock({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}

export default function DemoUnlockHero({ content: c, storageKey = 'teachable_demo_video_unlocked' }) {
  const id = useId()
  const inputRef = useRef(null)
  const offerRef = useRef(null)
  const [unlocked, setUnlocked] = useState(null) // null | { autoplay }
  const [consent, setConsent] = useState(false)

  // W-M4 returning visitor
  useEffect(() => {
    try {
      if (localStorage.getItem(storageKey) === 'true') setUnlocked({ autoplay: false })
    } catch {
      /* storage unavailable */
    }
  }, [storageKey])

  // W-M5 offer entrance (interaction-triggered, not a load/scroll animation)
  useEffect(() => {
    if (!unlocked || !offerRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    offerRef.current.animate(
      [
        { opacity: 0, transform: 'translateY(12px)' },
        { opacity: 1, transform: 'none' },
      ],
      { duration: 500, easing: 'ease', fill: 'both' },
    )
  }, [unlocked])

  const onSubmit = (e) => {
    e.preventDefault()
    if (!e.currentTarget.reportValidity()) return
    try {
      localStorage.setItem(storageKey, 'true')
    } catch {
      /* ignore */
    }
    setUnlocked({ autoplay: true })
  }

  return (
    <section className="relative overflow-hidden bg-demo-hero pb-section-large pt-hero-top">
      <div className="padding-global">
        <div className="container-large">
          <div className="grid grid-cols-[minmax(0,27.5rem)_minmax(0,1fr)] items-center gap-x-16 gap-y-12 md:grid-cols-[minmax(0,1fr)] md:gap-y-10">
            <div className="flex flex-col gap-[1.25rem] md:max-w-[40rem]">
              <SectionTag>{c.tag}</SectionTag>
              <h1 className="m-0 text-[clamp(2.5rem,3.6vw,3.25rem)] leading-[1.04] tracking-[-.5px]">{c.h1}</h1>
              <p className="m-0">{c.text}</p>
              {/* `.form-block.w-form` (Webflow margin 0 0 15px) */}
              <div className="mb-[15px]">
                {!unlocked ? (
                  <form onSubmit={onSubmit} className="relative flex flex-col gap-1 xs:w-full" aria-label="Unlock the demo video">
                    <input
                      ref={inputRef}
                      id={`${id}-email`}
                      type="email"
                      name="email"
                      required
                      aria-label="Email"
                      placeholder={c.form.placeholder}
                      className="mb-0 h-16 w-full rounded-full border-[1.5px] border-black bg-white py-2 pl-6 pr-[11.5rem] text-[1rem] font-normal text-black [transition:all_.2s] placeholder:text-black focus:bg-white focus:outline focus:outline-4 focus:outline-offset-0 focus:outline-grey-light xs:pr-6"
                    />
                    <button
                      type="submit"
                      data-anim="W-M1-submit-hover"
                      className="absolute right-[.375rem] top-[.375rem] m-0 h-[3.25rem] w-auto rounded-full border-0 bg-black pl-[2.875rem] pr-[1.625rem] text-[1rem] font-semibold leading-none text-white shadow-submit [transition:all_.3s_ease] hover:bg-yellow hover:text-black xs:static xs:mt-2 xs:h-14 xs:w-full xs:pl-[1.625rem]"
                    >
                      <Lock className="absolute left-[1.375rem] top-1/2 -translate-y-1/2 xs:left-[calc(50%-8px-4.25rem)]" />
                      {c.form.submit}
                    </button>
                    <div className="mt-3 flex flex-col items-start justify-center gap-[.625rem] pt-1 text-left">
                      <div className="text-[.875rem] text-grey-footnote">
                        <label className="mb-0 flex cursor-pointer items-center justify-start pl-0">
                          <input
                            type="checkbox"
                            required
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="peer absolute h-px w-px opacity-0"
                          />
                          <span
                            aria-hidden="true"
                            className={`mr-2 flex h-4 w-4 flex-none items-center justify-center rounded-[2px] border border-black peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-focus ${
                              consent ? 'bg-black text-white' : ''
                            }`}
                          >
                            {consent && <CheckIcon className="w-[.55rem]" />}
                          </span>
                          <span className="text-regular leading-[1.4]">{c.form.consent}</span>
                        </label>
                      </div>
                      <div className="flex items-center justify-start text-[.75rem] text-slate">
                        <div className="text-[10px] leading-[15px]">
                          {c.form.legal.map((part, i) =>
                            typeof part === 'string' ? (
                              part
                            ) : (
                              <a key={i} href={part.href} className="text-black underline">
                                {part.label}
                              </a>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div role="status" className="rounded-lg bg-yellow-light p-[20px] text-left font-semibold">
                    <span className="mr-[12px] inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-yellow align-middle">
                      <CheckIcon className="w-[16px]" />
                    </span>
                    <div className="inline">{c.form.success}</div>
                  </div>
                )}
              </div>
              {!unlocked && (
                <a href={c.trial.href} className="self-start text-[.9375rem] font-semibold text-black underline underline-offset-[3px]">
                  {c.trial.label}
                </a>
              )}
            </div>
            <div className="h-auto">
              <div>
                <div
                  data-anim="W-M3-unlock"
                  className={`relative aspect-video w-full overflow-hidden rounded-frame border border-black/[.08] bg-black shadow-frame xs:rounded-lg ${
                    unlocked ? 'is-unlocked' : 'is-locked'
                  }`}
                >
                  {!unlocked && (
                    <>
                      <img
                        src={c.thumb}
                        alt=""
                        aria-hidden="true"
                        width="800"
                        height="450"
                        className="absolute inset-0 h-full w-full scale-[1.06] object-cover blur-[6px] [transition:filter_.4s_ease,opacity_.4s_ease] motion-reduce:transition-none"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-[rgba(246,242,238,.35)]">
                        <button
                          type="button"
                          aria-controls={`${id}-email`}
                          onClick={() => inputRef.current?.focus()}
                          data-anim="W-M2-chip-hover"
                          className="inline-flex min-h-[48px] cursor-pointer items-center gap-[.625rem] rounded-full border-0 bg-white px-[1.375rem] py-[.875rem] text-[1rem] font-semibold leading-none text-black shadow-chip [transition:transform_.2s_ease] hover:-translate-y-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-black motion-reduce:transition-none xs:min-h-[44px] xs:px-4 xs:py-[.625rem] xs:text-[.875rem]"
                        >
                          <Lock size={18} />
                          {c.chip}
                        </button>
                      </div>
                    </>
                  )}
                  <div className={`absolute inset-0 ${unlocked ? 'block' : 'hidden'}`}>
                    {unlocked && (
                      <iframe
                        src={c.video(unlocked.autoplay)}
                        title="Teachable demo video"
                        allow="autoplay; fullscreen"
                        className="absolute inset-0 h-full w-full border-0"
                      />
                    )}
                  </div>
                </div>
                {unlocked && (
                  <div
                    ref={offerRef}
                    data-anim="W-M5-offer-in"
                    className="mt-5 flex items-center justify-between gap-6 rounded-[1.25rem] bg-black py-[1.375rem] pl-7 pr-6 text-white sm:flex-col sm:items-start sm:p-5"
                  >
                    <div className="flex flex-col gap-[.375rem]">
                      <div className="text-[.75rem] font-extrabold uppercase leading-none tracking-[.5px] text-yellow">{c.offer.eyebrow}</div>
                      <div className="font-heading text-[1.875rem] font-normal leading-[1.1] text-white sm:text-[1.5rem]">{c.offer.title}</div>
                    </div>
                    <a
                      href={c.offer.cta.href}
                      data-anim="W-M6-offer-btn-hover"
                      className="inline-flex h-14 flex-shrink-0 items-center gap-[.625rem] whitespace-nowrap rounded-full bg-yellow px-7 text-[1rem] font-semibold leading-none text-black no-underline [transition:transform_.2s_ease] hover:-translate-y-[2px] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-yellow motion-reduce:transition-none sm:w-full sm:justify-center"
                    >
                      {c.offer.cta.label}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
