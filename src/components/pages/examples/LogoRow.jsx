// examples.md §3 `section.section_leaders`: centred "trusted by" line over a static row of 5 black wordmarks
// (grid of 5 at ≥992; wrapping flex ≤991, centred ≤767). Logo widths by size: sm 8 / 6.5 / 5rem,
// md 10 / 8 / 6.5rem, lg 12 / 10 / 8rem (≥768 / ≤767 / ≤479). Static.
//
// text: node. logos: [{ src, alt, size: 'sm' | 'md' | 'lg' }]
const SIZE = {
  sm: 'w-[8rem] sm:w-[6.5rem] xs:w-[5rem]',
  md: 'w-[10rem] sm:w-[8rem] xs:w-[6.5rem]',
  lg: 'w-[12rem] sm:w-[10rem] xs:w-[8rem]',
}

export default function LogoRow({ text, logos }) {
  return (
    <section className="relative overflow-hidden pb-32 md:py-12 sm:pb-0 xs:px-0">
      <div className="padding-global">
        <div className="container-large">
          <div className="flex flex-col gap-12 md:items-start md:justify-between sm:items-center sm:gap-6 sm:text-center">
            <div className="flex flex-col text-center md:text-left sm:text-center">
              <div>{text}</div>
            </div>
            <div className="grid grid-cols-5 gap-4 md:flex md:flex-wrap md:items-center md:justify-start md:gap-x-8 md:gap-y-6 sm:justify-center">
              {logos.map((l) => (
                <div key={l.src} className="flex items-center justify-center">
                  <img src={l.src} alt={l.alt} width="200" height="50" loading="lazy" className={`h-auto ${SIZE[l.size ?? 'md']}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
