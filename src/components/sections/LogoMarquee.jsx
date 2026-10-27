// Infinite logo rows (CSS keyframes in index.css).
//
// variant 'strip' (enterprise hero `.enterprise-hero_marquee-wrp`, motion E-M1): one row of two identical
//   inline-flex tracks; 12.5rem logo cells (≤767 8rem); gap 4rem / 3rem (≤991) / 2rem (≤767);
//   each track translateX(0 → -50%) over 30s linear (loop="half", reproduces the live jump at the loop
//   point). No hover pause. Rendered bare (no <section>) so it can sit in SplitHero's `after` slot.
// variant 'tiles' (payments §8 `section_payment-logos`, motion P-M2): 1–2 rows, each with two copies;
//   5.5rem bordered/shadowed tiles (≤767 4.5rem) with 3.5rem round logos (≤767 2.5rem); gap 1.5rem;
//   translateX(0 → calc(-100% - 1.5rem)) over 24s linear (loop="gap", seamless); `reverse` per row;
//   each row pauses on its own hover; 3rem white edge fades (≤767 2rem, ≤479 1.5rem).
//   With heading / text / button it renders the full payments section (5rem / 4 / 3 / 5rem padding,
//   .container-medium, centred h2 max 60rem, charcoal 1.5rem subtitle, centred button).
//
// rows: [{ logos: [{ src, alt }], reverse? }]. duration (s), loop ('half' | 'gap'), pauseOnHover and
// edgeFade override the variant defaults. button: { variant, label, href }.
const DEFAULTS = {
  strip: { duration: 30, loop: 'half', pauseOnHover: false, edgeFade: false },
  tiles: { duration: 24, loop: 'gap', pauseOnHover: true, edgeFade: true },
}

function Logo({ variant, logo }) {
  if (variant === 'tiles') {
    return (
      <div className="flex h-[5.5rem] w-[5.5rem] flex-none items-center justify-center rounded-lg border border-black/[.08] shadow-tile sm:h-[4.5rem] sm:w-[4.5rem]">
        <img
          src={logo.src}
          alt={logo.alt ?? ''}
          width="56"
          height="56"
          loading="lazy"
          className="h-14 w-14 rounded-full object-contain sm:h-10 sm:w-10"
        />
      </div>
    )
  }
  return (
    <div className="flex w-[12.5rem] flex-none items-center justify-center sm:w-[8rem]">
      <img src={logo.src} alt={logo.alt ?? ''} width="200" height="50" loading="lazy" className="w-full" />
    </div>
  )
}

function Row({ variant, row, duration, loop, pauseOnHover }) {
  const strip = variant === 'strip'
  const gap = strip ? 'gap-16 md:gap-12 sm:gap-8' : 'gap-6'
  const track = (hidden) => (
    <div
      aria-hidden={hidden || undefined}
      className={`${strip ? 'inline-flex justify-center' : 'flex'} flex-none items-center ${gap} [will-change:transform] ${
        pauseOnHover ? 'group-hover/row:[animation-play-state:paused]' : ''
      }`}
      style={{
        // longhands, so the hover class can still set animation-play-state
        animationName: `logo-marquee-${loop}`,
        animationDuration: `${duration}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationDirection: row.reverse ? 'reverse' : 'normal',
      }}
    >
      {row.logos.map((l, i) => (
        <Logo key={i} variant={variant} logo={l} />
      ))}
    </div>
  )
  return (
    <div
      className={`group/row flex ${gap} ${strip ? 'items-center justify-start overflow-hidden whitespace-nowrap' : ''}`}
      style={{ '--logo-gap': '1.5rem' }}
    >
      {track(false)}
      {track(true)}
    </div>
  )
}

export default function LogoMarquee({ variant = 'strip', rows, heading, text, button, ...opts }) {
  const o = { ...DEFAULTS[variant], ...opts }
  const anim = variant === 'strip' ? 'E-M1-logo-marquee' : 'P-M2-logo-marquee'

  const marquee =
    variant === 'strip' ? (
      <div data-anim={anim}>
        {rows.map((r, i) => (
          <Row key={i} variant={variant} row={r} {...o} />
        ))}
      </div>
    ) : (
      <div data-anim={anim} className="relative flex flex-col gap-6 overflow-hidden py-2">
        {rows.map((r, i) => (
          <Row key={i} variant={variant} row={r} {...o} />
        ))}
        {o.edgeFade && (
          <>
            <div className="absolute inset-y-0 left-0 w-12 bg-fade-l sm:w-8 xs:w-6" />
            <div className="absolute inset-y-0 right-0 w-12 bg-fade-r sm:w-8 xs:w-6" />
          </>
        )}
      </div>
    )

  if (!heading && !text && !button) return marquee

  return (
    <section>
      <div className="padding-global py-section-medium">
        <div className="container-medium">
          <div className="flex flex-col gap-16 sm:gap-12">
            <div className="flex flex-1 flex-col items-start justify-between gap-8 sm:justify-start sm:gap-6">
              {heading && <h2 className="max-w-[60rem] self-center text-center">{heading}</h2>}
              {text && <p className="self-center text-large text-charcoal xs:text-center">{text}</p>}
            </div>
            {marquee}
            {button && (
              <div className="flex items-center justify-center">
                <a href={button.href} className={`btn-${button.variant ?? 'sso'}`}>
                  <span className="btn-txt">{button.label}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
