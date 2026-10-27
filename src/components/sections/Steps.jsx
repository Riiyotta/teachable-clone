import { Btn } from './parts.jsx'

// `section_steps`: centred header and three cards whose background pulses on a CSS loop
// (keyframes `bgSteps` / `bgStepsTiers` in src/index.css; runs from load at every width).
//
// variant 'steps' = coaching.md §4: card = "Step n" label over a #f0f0f0 rule, bold step title, text.
//                   items: [{ label, title, text }]. Pulse 4s, delays 0 / .2 / .4s, #f0f0f0.
// variant 'tiers' = customer-journey.md §3: card = tier badge pill + title over a #bfbfbf rule, summary,
//                   check bullets, then an optional button and/or italic small note.
//                   items: [{ badge, tone: 'gold' | 'navy' | 'maroon', title, summary, bullets: [node],
//                             button?: { label, href, variant }, note?: node }]
//                   Pulse 6s, delays 0 / 1.5 / 3s, tints step-tint-1/2/3.
// headerId: id on the header wrapper (customer-journey anchors `#tiers-and-perks` to it).
const PULSE = {
  steps: { name: 'bgSteps', duration: 4, delays: [0, 0.2, 0.4], bg: ['[--step-bg:theme(colors.grey.light)]'] },
  tiers: {
    name: 'bgStepsTiers',
    duration: 6,
    delays: [0, 1.5, 3],
    bg: [
      '[--step-bg:theme(colors.step-tint.1)]',
      '[--step-bg:theme(colors.step-tint.2)]',
      '[--step-bg:theme(colors.step-tint.3)]',
    ],
  },
}

const BADGE = {
  gold: 'bg-gold text-black',
  navy: 'bg-blue-dark text-white',
  maroon: 'bg-red-dark text-white',
}

export default function Steps({ variant = 'steps', heading, text, headerId, items = [] }) {
  const p = PULSE[variant]
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="flex flex-col gap-16 md:gap-8">
            <div
              id={headerId}
              className="mx-auto flex w-full max-w-[65rem] flex-col items-center justify-start gap-4 text-center"
            >
              <h2>{heading}</h2>
              {text && <p className="text-body">{text}</p>}
            </div>
            <div className="relative grid grid-cols-3 gap-8 md:gap-2 xs:grid-cols-1">
              {items.map((it, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col gap-4 rounded-md bg-transparent p-8 md:px-4 md:py-6 sm:p-4 xs:p-6 ${
                    p.bg[i % p.bg.length]
                  } ${variant === 'tiers' ? '[transition:background-color_.3s_ease]' : ''}`}
                  style={{ animation: `${p.name} ${p.duration}s ease ${p.delays[i % 3]}s infinite` }}
                >
                  {variant === 'tiers' ? <Tier {...it} /> : <Step {...it} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// `.steps_subheading` (also the tier title): 2.25rem / 1.1, 1.75rem ≤991, 7vw ≤479
const TITLE = 'font-heading text-[2.25rem] leading-[1.1] md:text-[1.75rem] xs:text-[7vw]'

function Step({ label, title, text }) {
  return (
    <>
      <div className="flex items-center justify-start border-b border-grey-light pb-4">
        <div className={TITLE}>{label}</div>
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="font-bold">{title}</div>
        <p>{text}</p>
      </div>
    </>
  )
}

function Tier({ badge, tone = 'gold', title, summary, bullets = [], button, note }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[1.25rem] border-b border-grey-mid pb-4">
        <div
          className={`relative top-[.25rem] flex items-center justify-center rounded-[5rem] px-4 py-2 text-center text-[.875rem] leading-[1.5] ${BADGE[tone]}`}
        >
          <div className="text-tier-badge uppercase">{badge}</div>
        </div>
        <div className={TITLE}>{title}</div>
      </div>
      <div className="flex flex-col items-center justify-start gap-8">
        <p className="text-size-medium">{summary}</p>
        <div className="flex flex-col gap-4">
          {bullets.map((b, j) => (
            <div key={j} className="flex items-start justify-start gap-2">
              <div className="relative top-[.2rem] flex h-[1.2rem] w-[1.2rem] items-center justify-center rounded-full border border-black px-[.2rem] pb-[.2rem] pt-[.25rem] xs:top-[.05rem]">
                <div className="flex h-auto w-[.6rem] items-center justify-center">
                  <svg width="100%" height="100%" viewBox="0 0 18 14" fill="none" aria-hidden="true">
                    <path d="M1 8L6 13L17 1" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="text-size-medium">{b}</div>
            </div>
          ))}
        </div>
      </div>
      {button && (
        <div className="relative mt-4 flex items-center justify-center xs:w-full">
          <Btn {...button} />
        </div>
      )}
      {note && (
        <p className="text-size-small [&_a]:underline">
          <em>{note}</em>
        </p>
      )}
    </>
  )
}
