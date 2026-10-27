// enterprise.md §5 `section.section_foundation`: centred h2 + intro, a full-width rounded image, a 2x2 grid
// of Ivypresto-titled items and a centred primary button. Static (no motion).
//
// heading, text: nodes. image: { src, w, h, alt }. items: [{ title, text }] (4). button: { label, href, variant }.
import { Btn } from '../../sections/parts.jsx'

export default function ImageFeatureGrid({ heading, text, image, items, button }) {
  return (
    <section className="px-global py-section-large">
      <div className="container-large">
        <div className="flex flex-col gap-16 md:gap-12 sm:gap-8">
          <div className="flex flex-col gap-4 text-center">
            <h2>{heading}</h2>
            {text && <p>{text}</p>}
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src={image.src} width={image.w} height={image.h} alt={image.alt ?? ''} loading="lazy" className="h-auto w-full" />
          </div>
          <div className="grid grid-cols-2 gap-16 text-medium md:gap-8 xs:grid-cols-1">
            {items.map((it, i) => (
              <div key={i} className="flex flex-col items-start justify-start gap-4 sm:gap-3">
                <h2 className="text-[2rem] leading-[1.1] sm:text-[1.5rem]">{it.title}</h2>
                <p>{it.text}</p>
              </div>
            ))}
          </div>
          {button && (
            <div className="flex items-center justify-center gap-4 xs:w-full">
              <Btn variant="enterprise-primary" {...button} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
