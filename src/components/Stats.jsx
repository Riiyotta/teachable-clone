// CLONE_SPEC §5 — stats strip (grey band under the hero), plus the product-page stack variant.
import { HOME_STATS } from '../content/home.js'

function Stat({ num, label }) {
  return (
    <div className="relative flex flex-none flex-col items-center justify-start text-center sm:flex-1 sm:flex-row">
      <div className="relative flex items-center justify-center rounded-panel font-bold sm:justify-start">
        <div className="bg-white px-4 pb-2 pt-1 font-heading text-[2.75rem] font-normal leading-none md:text-[1.5rem] sm:text-left xs:relative xs:z-[3] xs:flex-none xs:px-2 xs:text-center xs:text-[5vw]">
          {num}
        </div>
      </div>
      <div className="relative flex h-6 w-16 flex-col items-center justify-between overflow-hidden md:h-5 md:w-12 sm:h-[1.1rem] sm:w-8 sm:justify-center xs:w-4">
        <div className="h-full w-px border-r border-black sm:h-0 sm:w-full sm:border-b sm:border-r-0" />
        <div className="absolute inset-x-0 bottom-[-5px] mx-auto h-[9px] w-[9px] rounded-full bg-black sm:inset-y-0 sm:left-auto sm:right-0 sm:my-auto sm:h-[6px] sm:w-[6px]" />
      </div>
      <div className="flex w-full items-center justify-center border-t border-black px-4 pt-2 text-[1.3rem] font-normal leading-[1.3] md:text-[1rem] sm:w-auto sm:border-t-0 sm:pl-3 sm:pt-0 sm:text-left xs:max-w-[10rem] xs:px-2 xs:text-[length:var(--fs-small)]">
        {label}
      </div>
    </div>
  )
}

// product-template.md T4 `section_stats-mob` base variant: shown at ≤479 only (display:none above),
// so every class below is the ≤479 value.
function StackStat({ num, label }) {
  return (
    <div className="relative flex flex-none flex-col items-center justify-start text-center text-[1.1rem]">
      <div className="flex items-center justify-center rounded-panel bg-white bg-stats-chip px-4 pb-[.3rem] pt-2 font-bold">
        <div className="text-center font-heading text-[8vw] font-normal leading-[1.5]">{num}</div>
      </div>
      <div className="relative flex h-8 w-12 flex-col items-center justify-between overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px w-full bg-stats-rule" />
        <div className="h-full w-px border-r border-black" />
        <div className="absolute inset-x-0 bottom-[-5px] mx-auto h-[9px] w-[9px] rounded-full bg-black" />
      </div>
      <div className="flex w-auto items-center justify-center border-t border-black px-2 pt-2 text-[4vw] font-medium leading-[1.3]">
        {label}
      </div>
    </div>
  )
}

// variant: 'home' (homepage §5 strip) | 'stack' (product pages T4, ≤479 only). items: [{ num, label }].
export default function Stats({ variant = 'home', items = HOME_STATS }) {
  if (variant === 'stack') {
    return (
      <section className="hidden bg-grey-light py-12 xs:block">
        <div className="padding-global">
          <div className="container-large">
            <div className="mx-auto flex flex-col justify-between gap-8">
              {items.map(({ num, label }) => (
                <StackStat key={num} num={num} label={label} />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-grey-light pb-0 pt-10 sm:pb-16 sm:pt-8 xs:py-12">
      <div className="padding-global">
        <div className="container-large">
          <div className="relative flex flex-none flex-col items-center justify-start text-center sm:flex-1 sm:flex-row">
            <div className="grid grid-cols-3 gap-8 sm:-mb-8 sm:flex sm:w-full sm:flex-col sm:items-start sm:justify-start sm:gap-4 xs:mx-auto xs:mb-0">
              {items.map(({ num, label }) => (
                <Stat key={num} num={num} label={label} />
              ))}
            </div>
          </div>
        </div>
        <div className="pt-10 sm:hidden" />
      </div>
    </section>
  )
}
