import { Btn, Img } from './parts.jsx'

// feature-template.md T4 / ai-hub.md F3 `section_feature-explainer`.
// Rows alternate: even rows are [image, text], odd rows [text, image] (override with `imageSide`).
// At ≤479 every row stacks with the image first (`order:-9999` on the right-hand image cell in the
// page CSS of every feature page).
//
// heading / text: optional centred header (`.feature-explainer_header-wrp`)
// rows: [{ image: { src, w, h, alt }, imageSide?: 'left' | 'right',
//          items: [{ title, text }]   (1 or 2 pairs: h2.feature-explainer_subheading + p)
//          button?: { label, href, variant } }]
// Links inside `text` / `title` render underlined (title links lose it on hover, `.feature_txt-link`).
export default function FeatureExplainer({ heading, text, rows = [] }) {
  return (
    <section className="relative items-center justify-center overflow-hidden">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="flex flex-col gap-8">
            {(heading || text) && (
              <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-4 text-center md:max-w-[32rem] xs:items-start xs:justify-between xs:text-left">
                {heading && <h2>{heading}</h2>}
                {text && <p className="text-body">{text}</p>}
              </div>
            )}
            {rows.map((row, i) => {
              const imageLeft = (row.imageSide ?? (i % 2 === 0 ? 'left' : 'right')) === 'left'
              const img = (
                <div
                  key="img"
                  className={`flex-col items-start justify-center p-16 md:py-8 md:pl-0 md:pr-8 sm:py-4 sm:pr-0 xs:py-0 ${
                    imageLeft ? '' : 'xs:order-first'
                  }`}
                >
                  <div className="h-full w-full overflow-hidden rounded-md">
                    <Img
                      image={row.image}
                      className="h-full w-full object-cover md:object-contain md:object-[50%_100%]"
                    />
                  </div>
                </div>
              )
              const txt = (
                <div
                  key="txt"
                  className="flex flex-col items-start justify-center gap-6 py-16 pr-16 md:py-12 md:pr-8 sm:gap-4 sm:py-8 sm:pr-0 xs:py-0 [&_h2_a:hover]:no-underline [&_a]:underline"
                >
                  {row.items.map((it, j) => (
                    <Pair key={j} {...it} />
                  ))}
                  {row.button && (
                    <div className="flex items-center justify-start xs:w-full">
                      <Btn {...row.button} />
                    </div>
                  )}
                </div>
              )
              return (
                <div key={i} className="grid grid-cols-2 gap-16 md:gap-8 xs:grid-cols-1 xs:gap-4">
                  {imageLeft ? [img, txt] : [txt, img]}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Pair({ title, text }) {
  return (
    <>
      <h2 className="text-explainer-title">{title}</h2>
      <p className="text-body">{text}</p>
    </>
  )
}
