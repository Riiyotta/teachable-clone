import { Btn, Eyebrow, Img } from './parts.jsx'

// product-template.md T2 `section_product-hero` (+ customer-journey.md §1 variant without the banner).
// Row height follows the image's natural aspect; the text column is vertically centred against it.
//
// top: 'banner' = `.has-top-banner` (sits under the Halloween banner; --section-medium 5/4/3/5rem)
//      'hero'   = default `.section_product-hero` (first section under the fixed nav; --hero-top)
// imageBg: 'gold' = `.product-hero_content-r.is-coaching` (#ffd700 behind the image)
export default function ProductHero({
  tag,
  heading,
  text,
  buttons = [],
  image,
  imageBg = 'none',
  top = 'banner',
}) {
  return (
    <section
      className={`relative overflow-hidden pb-section-large ${top === 'hero' ? 'pt-hero-top' : 'pt-section-medium'}`}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="relative flex flex-col gap-16 sm:gap-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-16 sm:gap-8 xs:grid-cols-1">
              <div className="flex flex-col items-start justify-center gap-6">
                {tag && <Eyebrow>{tag}</Eyebrow>}
                <h1>{heading}</h1>
                {text && <p className="text-body">{text}</p>}
                {buttons.length > 0 && (
                  <div className="relative flex items-center justify-start gap-4 sm:flex-wrap sm:gap-2 xs:w-full">
                    {buttons.map((b) => (
                      <Btn key={b.label} {...b} />
                    ))}
                  </div>
                )}
              </div>
              <div
                className={`relative flex flex-col items-stretch justify-between overflow-hidden rounded-md ${
                  imageBg === 'gold' ? 'bg-gold' : ''
                }`}
              >
                <Img image={image} eager className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
