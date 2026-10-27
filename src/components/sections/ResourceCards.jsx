// product-template.md T8 / feature-template.md T9c `section.section_product-blog` (= ProductBlog).
// Centred header in `.container-medium` (68rem), 3 equal-height cards; each whole card is the link.
// Optional image (coaching: with images; memberships / ai-hub / analytics: text-only).
// Hover (B6 / MF2): title underline; the READ MORE arrow rotates -45deg → 0 over .2s ease.
import ButtonSimple from '../shared/ButtonSimple.jsx'

// heading, text: nodes. cards: [{ href, title, text, image?: { src, alt } }]. linkLabel: literal footer label.
export default function ResourceCards({ heading, text, cards, linkLabel = 'READ MORE' }) {
  return (
    <section className="relative overflow-hidden">
      <div className="padding-global padding-section-large">
        <div className="container-medium">
          <div className="flex flex-col items-stretch justify-start gap-16 md:gap-12 xs:gap-8">
            <div className="flex flex-col items-center justify-start gap-4 text-center xs:items-start xs:text-left">
              <h2>{heading}</h2>
              {text && <p>{text}</p>}
            </div>
            <div className="grid grid-cols-3 gap-8 md:gap-4 xs:grid-cols-1 xs:gap-x-4 xs:gap-y-12">
              {cards.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  data-anim="B6-blog-card-hover"
                  className="group flex cursor-pointer flex-col justify-start gap-4 no-underline xs:gap-2"
                >
                  {c.image && (
                    <div className="relative flex w-full items-end justify-center overflow-hidden rounded-md bg-grey-light md:mb-2">
                      <img
                        src={c.image.src}
                        alt={c.image.alt ?? ''}
                        width="360"
                        height="279"
                        loading="lazy"
                        className="h-auto w-full object-cover object-[50%_0%]"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col items-start justify-start gap-4 pr-4">
                    <div className="font-heading text-card-title group-hover:underline">{c.title}</div>
                    <p className="text-size-medium">{c.text}</p>
                  </div>
                  <div className="relative flex items-center justify-start">
                    <ButtonSimple label={linkLabel} hover />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
