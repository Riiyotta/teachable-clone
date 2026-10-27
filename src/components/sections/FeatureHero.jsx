import { Btn, Eyebrow, Img } from './parts.jsx'

// feature-template.md T2 / ai-hub.md F1 / app-hub.md §1 `section_feature-hero`.
// The section carries the side padding itself (no .padding-global). The image sets the row height
// (natural aspect); the text column is centred against it and moves above the image at ≤479
// (`order:-9999` on col2 on every feature page).
//
// padBottom: false = `.padding-bottom-0` (site-builder, app-hub)
// login: { prefix, label, href } = app-hub `.feature-hero_login-wrp` ("prefix" + underlined link)
export default function FeatureHero({ tag, heading, text, button, image, padBottom = true, login }) {
  return (
    <section
      className={`flex items-center justify-center px-global pt-hero-top ${
        padBottom ? 'pb-[8rem] md:pb-[6rem] sm:pb-[4rem]' : 'pb-0'
      }`}
    >
      <div className="container-large">
        <div className="grid grid-cols-[.5fr_1fr] gap-16 md:grid-cols-[.65fr_1fr] md:gap-8 xs:grid-cols-1">
          <div className="flex-col items-start justify-center">
            <div className="h-full w-full overflow-hidden rounded-md xs:h-auto">
              <Img image={image} eager className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-center gap-6 sm:gap-4 xs:order-first">
            {tag && <Eyebrow>{tag}</Eyebrow>}
            <h1>{heading}</h1>
            {text && <p className="text-body">{text}</p>}
            {button && (
              <div className="flex items-center justify-start xs:w-full">
                <Btn {...button} />
              </div>
            )}
            {login && (
              <div className="relative text-medium">
                {login.prefix}
                <a href={login.href} className="text-black underline hover:no-underline">
                  {login.label}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
