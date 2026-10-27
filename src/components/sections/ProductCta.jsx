// One CTA card for the product (`section_product-cta`, product-template T14), feature
// (`section_feature-cta`, feature-template T7 / ai-hub F4) and payments migrate banner
// (`section_migrate-cta`, payments §6) patterns.
//
// tone:   'blue' (#1c4774) | 'red' (#7f2a23, feature CTA: ≤479 children stretch) | 'black' (customer-journey
//         rewards card: black bg, yellow heading)
// layout: 'stack' (centred card) | 'split' (payments migrate banner: navy + blue gradient, text left /
//         button right, 5rem padding, column ≤767). `tone` is ignored for 'split'.
// header: how heading + text are wrapped (stack only). Defaults to 'cta' when there is a text, else 'none'.
//   'none'    h2 / p / button are direct children of the card (2rem gaps): online-courses, examples,
//             analytics, customer-journey
//   'cta'     `.product-cta_header-wrp` (gap 1rem; ≤479 align-items start, text stays centred): coaching,
//             memberships
//   'product' `.product_header-wrp` (gap 1.5rem, max-width 64rem; ≤479 gap 1rem, left aligned): pricing
//   'feature' `.feature-cta_header-wrp` (gap 1rem, centred): feature pages, app-hub
// narrow:  heading `.is-2` / `.is-narrow` (width 100%, max-width 58rem)
// button:  { variant: 'sso' | 'primary' | 'secondary' | 'primary-white', label, href }
// login:   { text, linkLabel, href } → `.feature-cta_login-wrp` line under the button (white underlined link,
//          no underline on hover)
// padTop / padBottom: section padding 8rem / 6rem (≤991) / 4rem (≤767). `.padding-top-0` etc. = false.
const TONE = { blue: 'bg-blue-dark', red: 'bg-red-dark', black: 'bg-black' }
const HEADER = {
  cta: 'flex flex-col items-center gap-4 xs:items-start xs:text-center',
  product: 'mx-auto flex w-full max-w-mw-xlarge flex-col items-center justify-start gap-6 text-center xs:items-start xs:gap-4 xs:text-left',
  feature: 'flex flex-col items-center justify-between gap-4',
}

function Button({ button, className = '' }) {
  if (!button) return null
  return (
    <a href={button.href} className={`btn-${button.variant ?? 'sso'} ${className}`}>
      <span className="btn-txt">{button.label}</span>
    </a>
  )
}

export default function ProductCta({
  tone = 'blue',
  layout = 'stack',
  header,
  heading,
  text,
  narrow = false,
  button,
  login,
  padTop = true,
  padBottom = true,
}) {
  if (layout === 'split') {
    return (
      <section className="bg-white">
        <div className="px-8">
          <div className="mx-auto flex w-full max-w-container-large flex-col">
            <div className="sm:py-12">
              <div className="flex flex-row items-center justify-between gap-16 rounded-md bg-navy bg-migrate-cta p-[5rem] text-white md:gap-8 sm:flex-col sm:items-center sm:justify-start sm:p-8 sm:text-center xs:px-6">
                <div className="mx-auto flex w-full max-w-mw-xlarge flex-col items-start justify-start gap-3 sm:items-center xs:items-start xs:gap-4 xs:text-center">
                  <h2 className="font-heading text-[3rem] font-normal leading-[1.1]">{heading}</h2>
                  {text && <p>{text}</p>}
                </div>
                <div className="flex-none">
                  <Button button={button} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const wrap = header ?? (text ? 'cta' : 'none')
  const h2 = (
    <h2
      className={`text-cta-heading ${tone === 'black' ? 'text-yellow' : ''} ${narrow ? 'w-full max-w-[58rem]' : ''}`}
    >
      {heading}
    </h2>
  )
  const p = text ? <p>{text}</p> : null

  return (
    <section
      className={`relative overflow-hidden ${padTop ? 'pt-32 md:pt-24 sm:pt-16' : ''} ${
        padBottom ? 'pb-32 md:pb-24 sm:pb-16' : ''
      }`}
    >
      <div className="padding-global">
        <div className="container-large">
          <div
            className={`flex flex-col items-center justify-between gap-8 rounded-md p-16 text-center text-white sm:p-8 xs:gap-4 xs:p-6 ${
              TONE[tone]
            } ${tone === 'red' ? 'xs:items-stretch' : ''}`}
          >
            {wrap === 'none' ? (
              <>
                {h2}
                {p}
              </>
            ) : (
              <div className={HEADER[wrap]}>
                {h2}
                {p}
              </div>
            )}
            <div className="relative mt-4 flex items-center justify-center xs:w-full">
              <Button button={button} className="xs:w-full" />
            </div>
            {login && (
              <div className="text-medium">
                <div>
                  {login.text}
                  <a href={login.href} className="text-white underline hover:no-underline">
                    {login.linkLabel}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
