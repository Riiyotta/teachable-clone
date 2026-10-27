import { SELL_ICONS } from './icons.jsx'

// digital-downloads.md §9 `section.section_sell`: centred text left, white card right listing file types
// (each row reuses the `.tools_list-content` rules: border-bottom, padding 0 0 1rem 1rem, 1.15rem / 1.1;
// ≤767 padding-left 0 and .875rem; ≤479 4vw). Icons are blue-dark. No motion.
// heading, text: nodes. items: [string] x7 (file-type labels, in icon order).
export default function SellList({ heading, text, items }) {
  return (
    <section className="relative overflow-hidden bg-grey-light">
      <div className="padding-global padding-section-large">
        <div className="container-medium">
          <div className="relative grid grid-cols-2 gap-16 md:gap-8 xs:grid-cols-1">
            <div className="relative flex flex-col items-center justify-center gap-4 text-center">
              <h2>{heading}</h2>
              <p>{text}</p>
            </div>
            <div className="relative z-[1] flex flex-col items-stretch justify-start gap-8 rounded-md bg-white p-8 md:p-6 sm:p-4 xs:p-6">
              <div className="flex w-full flex-col items-stretch justify-start gap-3 leading-[1.1]">
                {items.map((label, i) => (
                  <div
                    key={label}
                    className="flex items-center justify-start gap-[.725rem] border-b border-black pb-4 pl-4 text-[1.15rem] sm:pl-0 sm:text-[.875rem] xs:text-[4vw]"
                  >
                    <div className="flex h-auto items-center justify-center text-blue-dark">{SELL_ICONS[i]}</div>
                    <div>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
