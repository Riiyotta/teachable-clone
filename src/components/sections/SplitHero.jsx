import { Btn, Img } from './parts.jsx'

// enterprise.md §1 `section_enterprise-hero` and payments.md §1 `section_tpay_hero`: same .75fr / 1fr
// grid, 4rem / 1.1 heading, 12rem top / 5rem bottom padding.
//
// tone:    'dark'  = enterprise (olive gradient, white text, black tag pill)
//          'light' = payments (white, black text)
// media:   { type: 'iframe', src, title }  16:9 (3840/2160) embed, bottom-aligned in its cell
//          { type: 'placeholder' }         same box, bg-placeholder (no external embed)
//          Both stay inline like the original iframe: the line-box descent under it is part of the
//          measured cell height (401.6 @1440 = 394.5 video + 7.2).
//          { type: 'image', src, w, h, alt }  full-width image, natural height
// buttons: [{ label, href, variant }]  enterprise uses 'enterprise-primary' / 'enterprise-secondary'
//          (no hover; the secondary is hidden ≤991)
// buttonLayout: 'stack' = enterprise ≤479 (wrapper and buttons full width)
//               'row'   = payments ≤479 (wrapper full width, buttons stay side by side and their labels wrap)
// marquee: node rendered full-bleed under the grid after the 3rem `.enterprise-hero_spacer` (LogoMarquee)
export default function SplitHero({
  tone = 'dark',
  tag,
  heading,
  text,
  buttons = [],
  buttonLayout = 'stack',
  media,
  marquee,
}) {
  const dark = tone === 'dark'
  return (
    <section
      className={`relative overflow-hidden pb-[5rem] pt-hero-top sm:pb-[3rem] ${
        dark ? 'bg-enterprise-hero text-white' : ''
      }`}
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="grid grid-cols-[.75fr_1fr] gap-16 md:grid-cols-1 md:gap-8">
            <div
              className={`flex flex-col items-start justify-center gap-6 sm:pr-16 xs:pr-0 ${dark ? '' : 'text-black'}`}
            >
              {tag && (
                <div className="rounded-sm border border-white/15 bg-black px-4 py-2 text-small text-white/70">
                  <div className="text-white/[.86]">{tag}</div>
                </div>
              )}
              <h1 className="text-[4rem] leading-[1.1] sm:text-[2.5rem]">{heading}</h1>
              {text && <p className="text-body">{text}</p>}
              {buttons.length > 0 && (
                <div className="flex items-center justify-start gap-4 xs:w-full">
                  {buttons.map((b) =>
                    // Webflow wraps `.button-sso` in an unpadded `.button_wrapper` (100% wide at ≤479). In the
                    // payments row that changes how the two 100%-wide items shrink (148.9 / 177.1 @390).
                    buttonLayout === 'row' && (b.variant ?? 'sso') === 'sso' ? (
                      <div key={b.label} className="flex justify-start xs:w-full">
                        <Btn {...b} />
                      </div>
                    ) : (
                      <Btn key={b.label} {...b} />
                    ),
                  )}
                </div>
              )}
            </div>
            <div className="justify-center">
              {media?.type === 'image' ? (
                <Img image={media} eager className="h-auto w-full" />
              ) : (
                <div className="flex h-full items-end justify-center xs:max-w-full">
                  <div className="w-full">
                    {media?.type === 'iframe' ? (
                      <iframe
                        src={media.src}
                        title={media.title ?? ''}
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        scrolling="no"
                        className="inline aspect-[3840/2160] h-full w-full border-0 align-baseline"
                      />
                    ) : (
                      <div className="inline-block aspect-[3840/2160] w-full bg-placeholder align-baseline" />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {marquee && (
        <>
          <div className="h-[3rem]" />
          {marquee}
        </>
      )}
    </section>
  )
}
