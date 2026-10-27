import { Btn, Img } from './parts.jsx'

// product-template.md T5: one pattern, two skins.
//   skin 'grey'  = `section_product` (bg #f0f0f0, header max 64rem, `.product_*` gaps)
//   skin 'white' = `section_build`   (white,     header max 58rem, `.build_*` gaps; stays 2 columns to 480)
// rows: [{ image: { src, w, h, alt }, imageSide?: 'left' | 'right',
//          items: [{ title, text }], button?: { label, href, variant } }]
// Default image side: grey rows alternate starting left; white rows alternate starting right
// (OC / DD build sections are text-left). At ≤479 the image always comes first.
// titleTag: 'h3' (OC) or 'div' (coaching, DD); the styling is identical.
export default function FeatureSplit({ skin = 'grey', heading, text, rows = [], titleTag = 'h3' }) {
  const grey = skin === 'grey'
  const Title = titleTag
  return (
    <section className={`overflow-hidden ${grey ? 'bg-grey-light' : 'bg-white'}`}>
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="flex flex-col items-stretch justify-start gap-16 sm:gap-8">
            <div
              className={`mx-auto flex w-full flex-col items-center justify-start gap-6 text-center xs:items-start xs:text-left ${
                grey ? 'max-w-[64rem] xs:gap-4' : 'max-w-[58rem]'
              }`}
            >
              <h2>{heading}</h2>
              {text && <p className="text-body">{text}</p>}
            </div>
            {rows.map((row, i) => {
              const side = row.imageSide ?? ((i + (grey ? 0 : 1)) % 2 === 0 ? 'left' : 'right')
              const img = (
                <div
                  key="img"
                  className={`relative flex flex-col justify-between overflow-hidden rounded-md ${
                    side === 'right' ? 'xs:order-first' : ''
                  }`}
                >
                  <Img image={row.image} className="h-full w-full object-cover" />
                </div>
              )
              const txt = (
                <div
                  key="txt"
                  className={`flex flex-col items-start justify-center gap-8 ${grey ? 'xs:gap-4' : 'md:gap-4'}`}
                >
                  {row.items.map((it, j) => (
                    <div key={j} className="flex flex-col items-start justify-center gap-4">
                      <Title className="font-heading text-subheading font-normal">{it.title}</Title>
                      <p className="text-size-medium">{it.text}</p>
                    </div>
                  ))}
                  {row.button && (
                    <div className="relative flex items-center justify-start xs:w-full">
                      <Btn {...row.button} />
                    </div>
                  )}
                </div>
              )
              return (
                <div
                  key={i}
                  className={`grid grid-cols-2 gap-16 ${
                    grey ? 'md:gap-8 sm:grid-cols-1 xs:gap-4' : 'sm:gap-8 xs:grid-cols-1'
                  }`}
                >
                  {side === 'left' ? [img, txt] : [txt, img]}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
