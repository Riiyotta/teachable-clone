// "Talk to our team" section with a static replica of the embedded HubSpot form (no submission).
// enterprise §8 `section_enterprise-form` (variant 'enterprise', align 'center') and payments §9
// `section_migrate-form-2` (variant 'payments', align 'left'). Form styles: enterprise.md §8 + the page's
// HubSpot override CSS (inputs 1px #ccc / radius .6rem / padding 16px 18px, labels 16px/24 mb 8px,
// black pill submit with a 42px yellow arrow circle, step padding 40px → 2rem at ≤767).
// Not in the spec, taken from the live render (checked 2026-10-27; needed to reach the measured
// 695.4 / 751.3 card height): rows are 20px apart; rich text is .95em × .95em of the body size, lh 1.5;
// inputs use line-height normal (57px @1440, 54px @390); an 8px progress bar (#e9e9e9, 20% yellow fill,
// radius 8px) sits 40px under the phone row (an empty 0px row with its own 20px margin in between) and the submit row is 40px below it (collapsed margins);
// the two name fields stack (12px gap) at 390. The stacking breakpoint isn't known; ≤767 is assumed.
//
// heading: node. paragraphs: [node, …] (body). anchorId: id of the absolute scroll anchor 8rem / 6rem / 4rem
// above the section (enterprise and payments both use 'talk-to-team').
// form: {
//   logo: { src, alt },            // header image, 137x40 box
//   intro: [node, …],              // rich-text paragraphs under the logo
//   fields: { firstName, lastName, email, phone } each { label, required? },
//   submitLabel,
// }
import { useId } from 'react'

const VARIANT = {
  enterprise: {
    section: 'pb-section-large md:pb-0',
    grid: 'grid sm:grid-cols-1 sm:px-8 xs:px-6',
    right: '',
  },
  payments: {
    section: 'bg-white pb-[5rem] md:pb-0',
    grid: 'grid sm:flex sm:flex-col sm:px-8 xs:px-2',
    right: 'sm:w-full',
  },
}

function Label({ htmlFor, field }) {
  return (
    <label htmlFor={htmlFor} className="mb-[8px] block text-[16px] font-normal leading-[24px] text-black">
      {field.label}
      {field.required && <span className="text-form-required">*</span>}
    </label>
  )
}

const INPUT =
  'block w-full rounded-md border border-grey-rule bg-white px-[18px] py-[16px] text-[length:var(--fs-body)] leading-[normal] text-black shadow-none outline-none placeholder:text-black/45 hover:border-black focus:border-black'

function HubspotForm({ form }) {
  const id = useId()
  const f = form.fields
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="p-[40px] text-black sm:p-8"
      aria-label="Contact form"
      noValidate
    >
      <div className="mb-[20px]">
        <img src={form.logo.src} alt={form.logo.alt ?? ''} className="h-[40px] w-auto max-w-[137px] object-contain object-left" />
      </div>
      {form.intro?.length > 0 && (
        <div className="mb-[20px] text-[length:calc(var(--fs-body)*.9025)] leading-[1.5] text-black/65">
          {form.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}
      <div className="mb-[20px] flex gap-[12px] sm:flex-col">
        <div className="min-w-0 flex-1">
          <Label htmlFor={`${id}-fn`} field={f.firstName} />
          <input id={`${id}-fn`} type="text" autoComplete="given-name" className={INPUT} />
        </div>
        <div className="min-w-0 flex-1">
          <Label htmlFor={`${id}-ln`} field={f.lastName} />
          <input id={`${id}-ln`} type="text" autoComplete="family-name" className={INPUT} />
        </div>
      </div>
      <div className="mb-[20px]">
        <Label htmlFor={`${id}-em`} field={f.email} />
        <input id={`${id}-em`} type="email" autoComplete="email" className={INPUT} />
      </div>
      <div className="mb-[20px]">
        <Label htmlFor={`${id}-ph`} field={f.phone} />
        <div className="flex items-stretch gap-[10px]">
          <div className="relative w-[100px] min-w-[70px] flex-none">
            <select
              aria-label="Country code"
              defaultValue="US"
              className="block h-full w-full cursor-pointer appearance-none rounded-md border border-grey-rule bg-white py-[16px] pl-[14px] pr-[30px] text-[1.25em] leading-none text-black hover:border-black focus:border-black focus:outline-none"
            >
              <option value="US">🇺🇸</option>
              <option value="CA">🇨🇦</option>
              <option value="GB">🇬🇧</option>
              <option value="AU">🇦🇺</option>
            </select>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-[14px] top-1/2 h-0 w-0 -translate-y-1/2 border-x-[5px] border-t-[6px] border-x-transparent border-t-black"
            />
          </div>
          <input id={`${id}-ph`} type="tel" autoComplete="tel-national" className={`${INPUT} min-w-0 flex-1`} />
        </div>
      </div>
      {/* empty (reCAPTCHA) row: 0 tall, display grid, so its 20px margin does not collapse away */}
      <div className="mb-[20px] grid" aria-hidden="true" />
      <div className="mb-[40px] h-[8px] w-full rounded-[8px] bg-form-track" aria-hidden="true">
        <div className="h-[8px] w-1/5 rounded-[8px] bg-yellow" />
      </div>
      <div className="flex w-full">
        <button
          type="submit"
          className="relative flex flex-1 items-center justify-center whitespace-nowrap rounded-[999px] border-0 bg-black py-[18px] pl-[24px] pr-[58px] text-[16px] font-bold leading-[24px] text-white"
        >
          {form.submitLabel}
          <span
            aria-hidden="true"
            className="absolute right-[6px] top-1/2 flex h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-yellow text-[.75em] leading-none text-black"
          >
            →
          </span>
        </button>
      </div>
    </form>
  )
}

export default function SalesForm({ variant = 'enterprise', align = 'center', heading, paragraphs = [], anchorId, form }) {
  const v = VARIANT[variant]
  return (
    <section className={`relative overflow-hidden xs:px-0 ${v.section}`}>
      <div className="container-large">
        <div
          className={`grid-cols-2 items-center justify-between gap-24 rounded-md bg-navy p-16 text-white md:gap-8 md:rounded-none ${v.grid}`}
        >
          <div
            className={`mx-auto flex w-full max-w-mw-xlarge flex-col justify-start gap-8 xs:items-start xs:gap-4 xs:text-center ${
              align === 'left' ? 'items-start' : 'items-center'
            }`}
          >
            <h2 className="text-[3rem] leading-[1.1] md:text-[2.5rem] xs:text-[10vw]">{heading}</h2>
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className={`relative overflow-hidden rounded-md bg-white ${v.right}`}>
            <HubspotForm form={form} />
          </div>
        </div>
      </div>
      {anchorId && (
        <div
          id={anchorId}
          className="absolute left-0 top-[-8rem] h-[8rem] w-8 md:top-[-6rem] md:h-[6rem] sm:top-[-4rem] sm:h-[4rem]"
        />
      )}
    </section>
  )
}
