import { Btn, Img } from './parts.jsx'

// feature-template.md T9a: text column + square image, 1fr 1fr with a 6rem gap.
//   variant '2col' = `section_feature-2col` (mobile-app): padding 8rem 0, sides 6rem ≤991 / 2rem ≤767 /
//                    0 ≤479; the image moves above the text at ≤479 (page CSS order:-9999)
//                    padded={false} = `.padding-0` (mobile-app uses this)
//   variant 'int'  = `section_feature-int` (sales): bottom padding only (8 / 6 / 4rem), grid gap 2rem ≤991,
//                    text stays first at ≤479
// button: { label, href, variant } ('sso' on mobile-app, 'secondary' on sales)
export default function FeatureTwoCol({ variant = '2col', padded = true, heading, text, button, image }) {
  const int = variant === 'int'
  const section = int
    ? 'pb-[8rem] md:pb-[6rem] sm:pb-[4rem]'
    : padded
      ? 'py-[8rem] md:px-[6rem] sm:px-8 xs:px-0'
      : 'p-0'
  return (
    <section className={`relative overflow-hidden ${section}`}>
      <div className="padding-global">
        <div className="container-large">
          <div
            className={`grid grid-cols-2 items-stretch justify-between gap-[6rem] xs:grid-cols-1 ${
              int ? 'md:gap-8' : 'sm:gap-8'
            }`}
          >
            <div className="flex flex-col items-start justify-center gap-6">
              <h2>{heading}</h2>
              {text && <p className="text-body">{text}</p>}
              {button && (
                <div className="relative mt-4 flex items-center justify-start sm:mt-0 xs:w-full">
                  <Btn {...button} />
                </div>
              )}
            </div>
            <div
              className={`flex items-center justify-center overflow-hidden rounded-md ${int ? '' : 'xs:order-first'}`}
            >
              <Img image={image} className="h-auto w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
