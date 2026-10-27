// pricing.md §1 `section.section_pricing-b`: page title, intro line, Monthly / Yearly toggle (PillTabs,
// motion P1; Yearly is the default) and the 4 plan cards (`.pricing-green_grid.is-alt`).
//
// heading, intro: nodes. plans: [{ name, desc, popular?, trial, monthly: { price, href, billed },
//   annual: { price, strike, save, href, billed }, bullets: [{ text, strong?, tip? }] }] (3 cards).
// custom: { name, intro, button: { label, href }, subheading, bullets, label: { title, text } } (4th card).
// compareLabel / compareHref: the "Compare all features" link under each plan card.
// defaultBilling: 'annual' | 'monthly'.
import PillTabs from '../../sections/PillTabs.jsx'
import CheckIcon from '../../shared/CheckIcon.jsx'
import { TooltipIcon } from '../../shared/Tooltip.jsx'

// `.pricing_bullet-wrp` list (.95rem, gap .75rem). The check sits in a 1.2rem-tall wrap, nudged .05rem down.
export function PlanBullets({ bullets }) {
  return (
    <div className="relative flex w-full flex-col items-start justify-start gap-3 text-[.95rem]">
      {bullets.map((b, i) => (
        <div key={i} className="flex items-center justify-start gap-2 sm:items-start">
          <div className="relative top-[.05rem] flex h-[1.2rem] flex-none items-center justify-center">
            <CheckIcon className="h-auto w-[.6rem]" />
          </div>
          <div className="flex flex-1 items-center justify-start gap-1">
            <div>{b.strong ? <strong>{b.text}</strong> : b.text}</div>
            {b.tip && <TooltipIcon message={b.tip} />}
          </div>
        </div>
      ))}
    </div>
  )
}

// `.pricing_btn-outline` / `.pricing_btn-full`: the label scales 1.02 on hover (M6, 200ms ease via .btn-txt).
function PlanButton({ full, label, href }) {
  return (
    <a
      href={href}
      className={`group flex w-full items-center justify-center rounded-full border border-blue-dark px-6 py-4 text-center text-[1rem] font-semibold leading-none no-underline ${
        full ? 'bg-blue-dark text-white' : 'bg-white text-blue-dark'
      }`}
    >
      <span className="btn-txt group-hover:scale-[1.02]">{label}</span>
    </a>
  )
}

function PlanCard({ plan, billing, compareLabel, compareHref }) {
  const annual = billing === 'annual'
  const p = annual ? plan.annual : plan.monthly
  const popular = !!plan.popular
  return (
    <div
      className={`relative flex flex-col justify-between md:pt-0 ${
        popular ? 'overflow-hidden rounded-md border-2 border-blue-dark pt-0' : 'pt-[1.75rem]'
      }`}
    >
      {popular && (
        <div className="flex h-[1.75rem] flex-col items-center justify-center bg-blue-dark px-8 py-[.15rem] text-center text-[length:var(--fs-small)] font-semibold uppercase text-white">
          <div>{plan.popular}</div>
        </div>
      )}
      <div className={`relative flex flex-1 flex-col gap-8 rounded-md bg-white pt-12 xs:pt-8 ${popular ? 'm-[-2px]' : ''}`}>
        <div className="flex flex-1 flex-col gap-4 px-8 sm:px-6">
          <div
            className={`flex w-full flex-col items-start justify-between gap-4 xs:flex-row xs:flex-wrap xs:gap-2 ${
              annual ? '' : 'mb-[.7rem] md:mb-0'
            }`}
          >
            <div className="flex w-full items-start justify-between gap-2 xs:gap-1">
              <div className="text-[2rem] font-semibold leading-[1.1] sm:text-[1.75rem]">{plan.name}</div>
            </div>
            <div className="text-[length:var(--fs-regular)] leading-[1.2]">{plan.desc}</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            {annual && <div className="text-[1.75rem] leading-[1.2] text-grey-strike line-through">{p.strike}</div>}
            <div className="text-[3.5rem] font-bold leading-none sm:text-[2.5rem] xs:text-[16vw]">
              {p.price}
              <span className="text-[1.5rem] font-normal xs:text-[1.25rem]">/mo</span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <div className="text-[1.0625rem] leading-[1.1]">{p.billed}</div>
            {annual && p.save && (
              <div className="relative flex items-center justify-center rounded-[.2rem] bg-ice px-2 py-[.2rem] text-center text-[.875rem] font-semibold uppercase">
                <div>{p.save}</div>
              </div>
            )}
          </div>
          <div className="relative mt-2 flex w-full flex-col gap-4 sm:mt-0">
            <PlanButton full={popular} label="Try for free" href={p.href} />
          </div>
          <div className="mb-4 w-full text-center text-[length:var(--fs-tiny)] font-normal leading-[1.1]">{plan.trial}</div>
          <PlanBullets bullets={plan.bullets} />
        </div>
        <div className="flex items-center justify-center pb-8 text-center sm:pb-0">
          <a href={compareHref} className="text-[1rem] font-medium text-blue-dark underline hover:no-underline sm:hidden">
            {compareLabel}
          </a>
        </div>
      </div>
    </div>
  )
}

// White "T" glyph in the black square (`.pricing-unlimited_icon`, copied from the snapshot).
function CustomIcon() {
  return (
    <div className="flex h-[2.1875rem] w-[2.1875rem] items-center justify-center rounded-sm bg-black">
      <div className="flex w-full items-center justify-center" aria-hidden="true">
        <svg width="14" height="19" viewBox="0 0 14 19" fill="none">
          <path d="M7.00024 0.0117188V2.91062C9.25948 2.91062 11.107 4.74598 11.107 7.01014V12.9429H7.00024V15.8347H11.107V18.7259H13.9996V7.01014C13.9996 3.14541 10.8573 0.0117188 7.00024 0.0117188Z" fill="white" />
          <path d="M2.89334 11.7268V5.79405H7.00008V2.90218H2.89334V0.0117188H0.000732422V11.7268C0.000732422 15.5922 3.14305 18.7253 7.00008 18.7253V15.8263C4.74085 15.8263 2.89334 13.9909 2.89334 11.7268Z" fill="white" />
        </svg>
      </div>
    </div>
  )
}

function DollarIcon() {
  return (
    <div className="flex" aria-hidden="true">
      <svg width="11" height="16" viewBox="0 0 11 16" fill="none">
        <path
          d="M9.76391 7.69C9.20459 7.22116 8.49353 6.97229 7.76391 6.99H3.07391C2.86007 6.9954 2.64734 6.9576 2.44846 6.87885C2.24958 6.80011 2.06862 6.68204 1.91644 6.53172C1.76425 6.38141 1.64397 6.20193 1.56277 6.00403C1.48158 5.80613 1.44115 5.59389 1.44391 5.38C1.4387 5.29675 1.4387 5.21325 1.44391 5.13C1.50697 4.74781 1.70737 4.40177 2.0075 4.15688C2.30763 3.91199 2.68684 3.78509 3.07391 3.8H7.69391C8.07077 3.79967 8.4355 3.93321 8.72305 4.1768C9.0106 4.4204 9.20228 4.75821 9.26391 5.13H10.7639C10.7011 4.35893 10.3505 3.63974 9.78164 3.11539C9.21283 2.59105 8.46753 2.29996 7.69391 2.3H6.11391V0H4.86391V2.3H3.07391C2.30029 2.29996 1.55499 2.59105 0.986177 3.11539C0.417365 3.63974 0.0667037 4.35893 0.00391007 5.13C-0.00130336 5.21325 -0.00130336 5.29675 0.00391007 5.38C0.00391007 5.78316 0.0833179 6.18237 0.2376 6.55484C0.391882 6.92731 0.618017 7.26574 0.903092 7.55082C1.47883 8.12655 2.2597 8.45 3.07391 8.45H7.81391C8.02605 8.44466 8.23712 8.48184 8.43467 8.55935C8.63222 8.63687 8.81225 8.75314 8.96416 8.90132C9.11607 9.0495 9.23677 9.22659 9.31917 9.42215C9.40156 9.61771 9.44398 9.82779 9.44391 10.04C9.45356 10.1531 9.45356 10.2669 9.44391 10.38C9.36451 10.7319 9.16784 11.0463 8.88618 11.2716C8.60452 11.4969 8.25461 11.6198 7.89391 11.62H3.19391C2.83321 11.6198 2.4833 11.4969 2.20164 11.2716C1.91998 11.0463 1.72331 10.7319 1.64391 10.38H0.13391C0.219848 11.1314 0.579212 11.8248 1.14353 12.3283C1.70784 12.8317 2.43766 13.11 3.19391 13.11H4.86391V15.38H6.11391V13.11H7.81391C8.57016 13.11 9.29998 12.8317 9.86429 12.3283C10.4286 11.8248 10.788 11.1314 10.8739 10.38V10.04C10.8727 9.59083 10.7726 9.14744 10.5808 8.7413C10.389 8.33516 10.1101 7.97623 9.76391 7.69Z"
          fill="#F0FF82"
        />
      </svg>
    </div>
  )
}

function CustomCard({ custom }) {
  return (
    <div className="relative flex flex-col justify-between pt-[1.75rem] md:pt-0">
      <div className="relative flex flex-1 flex-col gap-8 rounded-md border border-grey-card-border bg-grey-card py-8">
        <div className="flex flex-1 flex-col gap-4 px-8 sm:px-6">
          <div className="flex min-h-[14rem] w-full flex-col items-start justify-start gap-4 md:min-h-0 xs:flex-row xs:flex-wrap xs:gap-2">
            <div className="flex w-full items-start justify-between gap-2 xs:gap-1">
              <div className="mb-2 flex items-center justify-start gap-2">
                <CustomIcon />
                <div className="text-[2rem] font-semibold leading-[1.1] sm:text-[1.75rem]">{custom.name}</div>
              </div>
            </div>
            <div className="text-[length:var(--fs-regular)]">{custom.intro}</div>
          </div>
          <div className="pt-[1.375rem] md:hidden" />
          <div className="relative mt-2 flex w-full flex-col gap-4 sm:mt-0">
            <a href={custom.button.href} className="btn-black w-full">
              <span className="btn-txt">{custom.button.label}</span>
            </a>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 pt-6">
            <div className="text-[.875rem] font-semibold uppercase text-slate xs:text-[4vw]">{custom.subheading}</div>
            <PlanBullets bullets={custom.bullets} />
          </div>
          <div className="relative mt-2 flex flex-col items-start justify-start gap-3 rounded-label bg-plan-label p-6 text-[length:var(--fs-small)] text-white">
            <div className="flex items-center justify-start gap-2 text-[1rem] font-semibold leading-[1.2]">
              <DollarIcon />
              <div className="text-[.9rem]">{custom.label.title}</div>
            </div>
            <p>{custom.label.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Plans({ billing, plans, custom, compareLabel, compareHref }) {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-10 md:flex md:flex-col md:gap-6">
      {plans.map((p) => (
        <PlanCard key={p.name} plan={p} billing={billing} compareLabel={compareLabel} compareHref={compareHref} />
      ))}
      <CustomCard custom={custom} />
    </div>
  )
}

export default function PlanCards({
  heading,
  intro,
  plans,
  custom,
  defaultBilling = 'annual',
  compareLabel = 'Compare all features',
  compareHref = '#Features-Matrix',
}) {
  const props = { plans, custom, compareLabel, compareHref }
  const icon = <CheckIcon className="h-auto w-[.6rem]" />
  return (
    <section className="relative overflow-hidden bg-grey-light pb-32 pt-[10rem] md:pb-24 md:pt-32 sm:pb-16 sm:pt-24">
      <div className="padding-global">
        <div className="container-large">
          <div className="relative mb-4 flex flex-col items-center justify-between gap-4 text-center md:mb-0 sm:mb-4">
            <h1 className="heading-style-h2">{heading}</h1>
          </div>
          <div className="relative flex flex-col gap-8 sm:gap-6">
            <div>
              <p className="my-8 text-center sm:my-4">{intro}</p>
              <PillTabs
                size="pricing"
                defaultIndex={defaultBilling === 'annual' ? 1 : 0}
                tabs={[
                  { label: 'Monthly', icon, content: <Plans billing="monthly" {...props} /> },
                  {
                    label: (
                      <>
                        Yearly
                        <span className="ml-1 text-[length:var(--fs-small)] font-semibold xs:ml-0">22% OFF</span>
                      </>
                    ),
                    icon,
                    content: <Plans billing="annual" {...props} />,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
