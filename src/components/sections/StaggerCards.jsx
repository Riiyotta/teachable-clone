import { Btn, Img } from './parts.jsx'

// product-template.md T6: 2-column header (h2 | p) and 3 staggered cards. Card 1 is pushed down
// 6rem and card 3 down 3rem (static padding, no motion); the stagger shrinks per breakpoint and is
// gone at ≤479 (platform) / ≤767 (spotlight).
//   skin 'platform'  = `section_platform` (OC): grey→grey-mid image wrap, top-aligned image,
//                      optional centred `button` below the grid
//   skin 'spotlight' = `section_spotlight` (coaching): no image bg, per-card `button` (button-secondary),
//                      2 columns at ≤767
// cards: [{ image: { src, w, h, alt }, title, text, button?: { label, href, variant, target } }]  (3)
const SKIN = {
  platform: {
    wrp: 'gap-16 md:gap-12 sm:gap-8',
    grid: 'grid-cols-3 gap-8 sm:gap-4 xs:grid-cols-1 xs:gap-8',
    card: 'gap-4 xs:gap-2',
    pad: ['pt-[6rem] md:pt-[3rem] sm:pt-[2rem] xs:pt-0', '', 'pt-[3rem] md:pt-[1.5rem] sm:pt-[1rem] xs:pt-0'],
    imgWrap: 'bg-grey-light bg-platform-card',
    img: 'h-auto w-full object-cover object-[50%_0%]',
    txt: '',
    title: 'text-[2.25rem] md:text-[1.75rem] sm:text-[1.25rem]',
  },
  spotlight: {
    wrp: 'gap-16 md:gap-12 sm:gap-6',
    grid: 'grid-cols-3 gap-8 md:gap-4 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 xs:grid-cols-1',
    card: 'gap-4',
    pad: ['pt-[6rem] md:pt-[3rem] sm:pt-0', '', 'pt-[3rem] md:pt-[1.5rem] sm:pt-0'],
    imgWrap: '',
    img: 'h-auto w-full object-cover object-center',
    txt: 'pr-4',
    title: 'text-[2.25rem] md:text-[1.75rem] xs:text-[7vw]',
  },
}

export default function StaggerCards({ skin = 'platform', heading, text, cards = [], button }) {
  const s = SKIN[skin]
  return (
    <section className="relative overflow-hidden">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className={`flex flex-col items-stretch justify-start ${s.wrp}`}>
            <div className="grid grid-cols-2 items-center justify-start gap-[6rem] md:gap-16 sm:gap-8 xs:grid-cols-1 xs:gap-4">
              <h2>{heading}</h2>
              <p className="text-body">{text}</p>
            </div>
            <div className={`grid ${s.grid}`}>
              {cards.map((c, i) => (
                <div key={i} className={`flex flex-col justify-start ${s.card} ${s.pad[i % 3]}`}>
                  <div
                    className={`relative flex w-full items-end justify-center overflow-hidden rounded-md md:mb-2 ${s.imgWrap}`}
                  >
                    <Img image={c.image} className={s.img} />
                  </div>
                  <div className={`flex flex-col items-start justify-start gap-4 ${s.txt}`}>
                    <div className={`font-heading leading-[1.1] ${s.title}`}>{c.title}</div>
                    <p className="text-size-medium">{c.text}</p>
                  </div>
                  {c.button && (
                    <div className="relative flex items-center justify-start">
                      <Btn {...c.button} />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {button && (
              <div className="relative flex items-center justify-center">
                <Btn {...button} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
