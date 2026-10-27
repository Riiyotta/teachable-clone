import { useEffect, useState } from 'react'

// CLONE_SPEC §3 — Halloween campaign banner with live countdown.
// Countdown target: Oct 31 2026 23:59 (visitor's local time), same as the original script.
const END = new Date(2026, 9, 31, 23, 59, 0).getTime()
const CTA =
  'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly&web_campaign=halloween-1on1-offer&web_placement=hero_banner&web_asset=halloween_countdown_banner'

const pad = (n) => (n < 10 ? '0' : '') + n

function remaining() {
  let ms = Math.max(0, END - Date.now())
  const d = Math.floor(ms / 864e5)
  ms -= d * 864e5
  const h = Math.floor(ms / 36e5)
  ms -= h * 36e5
  const m = Math.floor(ms / 6e4)
  ms -= m * 6e4
  const s = Math.floor(ms / 1000)
  return { d: pad(d), h: pad(h), m: pad(m), s: pad(s) }
}

function Unit({ value, label, hw }) {
  return (
    <div className="flex min-w-[44px] flex-col items-center sm:min-w-0 sm:flex-row sm:items-baseline sm:justify-center sm:gap-x-[3px] sm:rounded-[8px] sm:bg-halloween-unit sm:px-[7px] sm:py-[5px]">
      <span data-hw={hw} className="font-heading text-[2.5rem] leading-none text-yellow sm:text-[15px]">
        {value}
      </span>
      <span className="mt-[4px] text-[13px] leading-[1.2] text-halloween-note sm:mt-0 sm:text-[10px] sm:text-halloween-label">
        {label}
      </span>
    </div>
  )
}

const Colon = () => <span className="pb-[18px] text-[1.5rem] leading-none text-halloween-colon sm:hidden">:</span>

function Item({ desktop, mobile }) {
  return (
    <div className="flex items-center gap-x-[8px] sm:items-start">
      <span className="font-extrabold text-yellow">✓</span>
      {mobile ? (
        <>
          <span className="hide-mobile-landscape">{desktop}</span>
          <span className="hidden sm:inline">{mobile}</span>
        </>
      ) : (
        <span>{desktop}</span>
      )}
    </div>
  )
}

// topPad: 'home' = homepage (.5rem). 'large' = inner product pages, Webflow `.padding-top-xlarge`
// (8rem / 5rem ≤991 / 3rem ≤767, product-template.md G2). Card markup is identical in both.
const TOP_PAD = { home: 'pt-2', large: 'pt-section-large' }

export default function HalloweenBanner({ topPad = 'home' }) {
  const [time, setTime] = useState(remaining)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    if (closed) return
    setTime(remaining())
    const timer = setInterval(() => setTime(remaining()), 1000)
    return () => clearInterval(timer)
  }, [closed])

  return (
    <section className={`relative overflow-hidden bg-white pb-0 ${TOP_PAD[topPad]}`}>
      <div className="container-large">
        <div className="block px-8 sm:px-4">
          <div
            data-hero-perk="banner"
            className={`relative mx-auto w-full max-w-container-large flex-wrap items-center gap-x-10 gap-y-5 overflow-hidden rounded-lg bg-halloween-ink bg-halloween py-6 pl-8 pr-[4.5rem] text-left text-white sm:mt-4 sm:gap-y-[14px] sm:pb-[18px] sm:pl-[18px] sm:pr-[18px] sm:pt-[20px] ${
              closed ? 'hidden' : 'flex'
            }`}
          >
            <a
              href="#"
              data-hero-perk="close"
              aria-label="Close banner"
              onClick={(e) => {
                e.preventDefault()
                setClosed(true)
              }}
              className="absolute right-[12px] top-[12px] z-[2] flex h-[44px] w-[44px] items-center justify-center rounded-[50%] bg-halloween-close text-[16px] leading-none text-white no-underline sm:right-[8px] sm:top-[8px] sm:h-[40px] sm:w-[40px] sm:text-[14px]"
            >
              ✕
            </a>

            {/* content */}
            <div className="flex min-w-0 flex-[999_1_460px] flex-col items-start gap-y-[12px]">
              <div className="flex items-center gap-x-[6px] whitespace-nowrap rounded-full border border-yellow py-[4px] pl-[9px] pr-[12px] text-[12px] font-extrabold uppercase leading-[1.2] tracking-[.5px] text-yellow">
                <span className="text-[12px] leading-none">✦</span>
                <span>No tricks, just a treat</span>
              </div>
              <div className="font-heading text-[2.2rem] font-normal leading-[1.1] text-white sm:text-[2rem] sm:leading-[1.08]">
                All free trials get a 1:1 with a <em className="italic text-yellow">Teachable Expert</em>.
              </div>
              <div className="flex flex-wrap gap-x-[22px] gap-y-[6px] text-[15px] leading-[1.4] text-halloween-text sm:flex-col">
                <Item desktop="7-day free trial" />
                <Item
                  desktop="Expert 1:1 to talk through your goals, key setup steps and questions"
                  mobile="Expert 1:1 focused on your business"
                />
                <Item
                  desktop="Access to webinar with the map to get to your first $10K"
                  mobile="“Your first $10K” webinar"
                />
              </div>
            </div>

            {/* countdown */}
            <div className="flex flex-none flex-col gap-y-[10px] border-x border-halloween-rule px-8 md:order-3 md:border-x-0 md:px-0 sm:flex-[100%] sm:flex-row sm:items-center sm:justify-between sm:gap-x-[10px] sm:rounded-[12px] sm:border sm:border-halloween-rule-mob sm:py-[6px] sm:pl-[12px] sm:pr-[6px] sm:text-left xxs:hidden">
              <div className="flex items-center gap-x-[8px] text-[12px] font-extrabold uppercase leading-[1.2] tracking-[.5px] text-white sm:min-w-0 sm:flex-grow sm:gap-x-[6px] sm:text-[11px] sm:font-normal sm:normal-case sm:tracking-normal sm:text-halloween-note">
                <span className="text-[16px] leading-none text-yellow sm:text-[12px]">☾</span>
                <span className="hide-mobile-landscape">The treat ends on Halloween</span>
                <span className="hidden sm:inline">Ends on Halloween</span>
              </div>
              <div data-anim="M2-countdown" className="flex items-end gap-x-[8px] sm:flex-none sm:items-stretch sm:gap-x-[4px]">
                <Unit hw="d" value={time.d} label="days" />
                <Colon />
                <Unit hw="h" value={time.h} label="hrs" />
                <Colon />
                <Unit hw="m" value={time.m} label="min" />
                <Colon />
                <Unit hw="s" value={time.s} label="sec" />
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-none flex-col items-center gap-y-[10px] text-center md:order-4 md:flex-row md:gap-x-[16px] md:text-left sm:flex-[100%] sm:flex-col sm:gap-y-[12px] sm:text-center">
              <a href={CTA} className="btn-primary xs:w-full">
                <span className="btn-txt">Start free trial</span>
              </a>
              <div className="text-[13px] leading-[1.35] text-halloween-note">
                Scared to start?
                <br />
                30-day money-back guarantee.
              </div>
            </div>
            {/* The original's script embed (div.w-embed.w-script) is an empty flex item; it adds one
                extra gap (a row-gap on mobile, a column-gap on desktop). Kept so the geometry matches. */}
            <div aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
