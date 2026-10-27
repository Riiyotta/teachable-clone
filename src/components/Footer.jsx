// CLONE_SPEC §19 Footer (`footer.footer_component[text-selection=reverse]`).
import { useEffect, useRef } from 'react'

const T = 'https://www.teachable.com'
const LOGO = '/assets/689f12f21a516225c689ca1d_teachable-logo-light.svg'

const COLUMNS = [
  ['Explore', [['Pricing', `${T}/pricing`], ['Example Schools', `${T}/examples`], ['Product Demo', `${T}/watch-demo`]]],
  ['Company', [['About us', `${T}/about`], ['Careers', `${T}/careers`], ['Press', `${T}/press`], ['Partners', `${T}/partners`]]],
  [
    'Support',
    [
      ['Help Center', 'https://support.teachable.com/en/', true],
      ['Blog', `${T}/blog`],
      ['Pricing', `${T}/pricing`],
      ['House Rules', `${T}/legal/house-rules`],
      ['Content Guidelines', `${T}/legal/content-guidelines`],
    ],
  ],
]

const BASE_LINKS = [
  ['Privacy Policy', `${T}/legal/privacy-policy`],
  ['Terms of Use', `${T}/legal/terms-of-use`],
  ['Cookies Policy', `${T}/legal/cookies-policy`],
  ['Cookie Preferences', '#', false, 'cookie-preference'],
  ['Ethics Line', 'https://contatoseguro.com.br/en/ethicsline.hotmart.co', true],
  ['Accessibility', `${T}/legal/accessibility`],
  ['Content Takedown', `${T}/legal/content-takedown`],
]

// Inline 16x16 icons copied from _snapshot/index.html (.footer_social-icon)
const SOCIAL = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/teachablehq',
    vb: '0 0 16 16',
    d: 'M3.92295 0.723675C4.98253 0.547429 6.32399 0.5 8 0.5C9.67598 0.5 11.0175 0.547429 12.077 0.723675C13.1374 0.900054 13.9815 1.21522 14.608 1.80388C15.2415 2.39913 15.5818 3.20697 15.769 4.21318C15.9545 5.20985 16 6.46064 16 8C16 9.53938 15.9545 10.7902 15.769 11.7868C15.5818 12.7931 15.2415 13.6009 14.608 14.1962C13.9815 14.7848 13.1374 15.1 12.077 15.2764C11.0175 15.4526 9.67598 15.5 8 15.5C6.32399 15.5 4.98253 15.4526 3.92295 15.2764C2.86257 15.1 2.01844 14.7848 1.392 14.1962C0.758541 13.6009 0.418174 12.7931 0.230973 11.7868C0.0455464 10.7902 0 9.53938 0 8C0 6.46064 0.0455464 5.20985 0.230973 4.21318C0.418174 3.20697 0.758541 2.39913 1.39199 1.80388C2.01844 1.21522 2.86257 0.900054 3.92295 0.723675ZM6.23664 5.19027C6.41162 5.08786 6.62636 5.09066 6.79879 5.1976L10.5197 7.50529C10.6879 7.60955 10.7907 7.79735 10.7907 8C10.7907 8.20262 10.6879 8.39046 10.5197 8.49469L6.79879 10.8024C6.62636 10.9093 6.41162 10.9122 6.23664 10.8097C6.06165 10.7073 5.95349 10.5155 5.95349 10.3077V5.69231C5.95349 5.48446 6.06165 5.29268 6.23664 5.19027Z',
    evenodd: true,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/teachableHQ/',
    vb: '0 0 16 16',
    d: 'M2.23483 0.446113C3.11038 0 4.25653 0 6.54884 0H9.45116C11.7435 0 12.8896 0 13.7651 0.446113C14.5353 0.838527 15.1615 1.46468 15.5539 2.23483C16 3.11038 16 4.25653 16 6.54884V9.45116C16 11.7435 16 12.8896 15.5539 13.7651C15.1615 14.5353 14.5353 15.1615 13.7651 15.5539C12.8896 16 11.7435 16 9.45116 16H9.30233V10.0465H11.7209C12.0292 10.0465 12.2791 9.79661 12.2791 9.48837C12.2791 9.18013 12.0292 8.93023 11.7209 8.93023H9.30233V7.40465C9.30233 6.97866 9.30277 6.69273 9.32078 6.47254C9.3382 6.25887 9.36938 6.1567 9.40368 6.08931C9.49291 5.91428 9.6352 5.77197 9.81023 5.68278C9.87766 5.64845 9.97983 5.61728 10.1935 5.59982C10.4137 5.58183 10.6996 5.5814 11.1256 5.5814H11.7209C12.0292 5.5814 12.2791 5.33151 12.2791 5.02326C12.2791 4.71501 12.0292 4.46512 11.7209 4.46512H11.1256H11.103C10.7055 4.46511 10.3737 4.4651 10.1025 4.48725C9.81983 4.51035 9.55446 4.56029 9.30344 4.68817C8.9184 4.88438 8.60532 5.19746 8.40908 5.58253C8.28123 5.83352 8.23129 6.09894 8.20815 6.38164C8.18605 6.6527 8.18605 6.98449 8.18605 7.38203V7.40465V8.93023H6.51163C6.20338 8.93023 5.95349 9.18013 5.95349 9.48837C5.95349 9.79661 6.20338 10.0465 6.51163 10.0465H8.18605V16H6.54884C4.25653 16 3.11038 16 2.23483 15.5539C1.46468 15.1615 0.838527 14.5353 0.446113 13.7651C0 12.8896 0 11.7435 0 9.45116V6.54884C0 4.25653 0 3.11038 0.446113 2.23483C0.838527 1.46468 1.46468 0.838527 2.23483 0.446113Z',
    evenodd: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/teachable/',
    vb: '0 0 16 16',
    d: 'M6.54884 0C4.25653 0 3.11038 0 2.23483 0.446113C1.46468 0.838527 0.838527 1.46468 0.446113 2.23483C0 3.11038 0 4.25653 0 6.54884V9.45116C0 11.7435 0 12.8896 0.446113 13.7651C0.838527 14.5353 1.46468 15.1615 2.23483 15.5539C3.11038 16 4.25653 16 6.54884 16H9.45116C11.7435 16 12.8896 16 13.7651 15.5539C14.5353 15.1615 15.1615 14.5353 15.5539 13.7651C16 12.8896 16 11.7435 16 9.45116V6.54884C16 4.25653 16 3.11038 15.5539 2.23483C15.1615 1.46468 14.5353 0.838527 13.7651 0.446113C12.8896 0 11.7435 0 9.45116 0H6.54884ZM4.46512 8C4.46512 6.04774 6.04774 4.46512 8 4.46512C9.9523 4.46512 11.5349 6.04774 11.5349 8C11.5349 9.9523 9.9523 11.5349 8 11.5349C6.04774 11.5349 4.46512 9.9523 4.46512 8ZM12.8372 4.27907C13.4537 4.27907 13.9535 3.7793 13.9535 3.16279C13.9535 2.54628 13.4537 2.04651 12.8372 2.04651C12.2207 2.04651 11.7209 2.54628 11.7209 3.16279C11.7209 3.7793 12.2207 4.27907 12.8372 4.27907Z',
    evenodd: true,
  },
  {
    label: 'X',
    href: 'https://twitter.com/teachable/',
    vb: '0 0 16 16',
    d: 'M12.6 0.75H15.054L9.694 6.892L16 15.25H11.063L7.196 10.18L2.771 15.25H0.316L6.049 8.68L0 0.75H5.063L8.558 5.383L12.6 0.75ZM11.74 13.778H13.1L4.323 2.145H2.865L11.74 13.778Z',
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/company/teachable/',
    vb: '0 0 16 16',
    d: 'M2.23483 0.446113C3.11038 0 4.25653 0 6.54884 0H9.45116C11.7435 0 12.8896 0 13.7651 0.446113C14.5353 0.838527 15.1615 1.46468 15.5539 2.23483C16 3.11038 16 4.25653 16 6.54884V9.45116C16 11.7435 16 12.8896 15.5539 13.7651C15.1615 14.5353 14.5353 15.1615 13.7651 15.5539C12.8896 16 11.7435 16 9.45116 16H6.54884C4.25653 16 3.11038 16 2.23483 15.5539C1.46468 15.1615 0.838527 14.5353 0.446113 13.7651C0 12.8896 0 11.7435 0 9.45116V6.54884C0 4.25653 0 3.11038 0.446113 2.23483C0.838527 1.46468 1.46468 0.838527 2.23483 0.446113ZM4.65116 3.72093C4.13741 3.72093 3.72093 4.13741 3.72093 4.65116C3.72093 5.16492 4.13741 5.5814 4.65116 5.5814C5.16492 5.5814 5.5814 5.16492 5.5814 4.65116C5.5814 4.13741 5.16492 3.72093 4.65116 3.72093ZM5.2093 7.25581C5.2093 6.94756 4.95941 6.69767 4.65116 6.69767C4.34291 6.69767 4.09302 6.94756 4.09302 7.25581V12.4651C4.09302 12.7734 4.34291 13.0233 4.65116 13.0233C4.95941 13.0233 5.2093 12.7734 5.2093 12.4651V7.25581ZM8.18605 9.48837C8.18605 8.56365 8.93574 7.81395 9.86047 7.81395C10.7852 7.81395 11.5349 8.56365 11.5349 9.48837V12.4651C11.5349 12.7734 11.7848 13.0233 12.093 13.0233C12.4013 13.0233 12.6512 12.7734 12.6512 12.4651V9.48837C12.6512 7.94709 11.4017 6.69767 9.86047 6.69767C8.31918 6.69767 7.06977 7.94709 7.06977 9.48837V12.4651C7.06977 12.7734 7.31966 13.0233 7.62791 13.0233C7.93615 13.0233 8.18605 12.7734 8.18605 12.4651V9.48837Z',
    evenodd: true,
  },
  {
    label: 'Tiktok',
    href: 'https://www.tiktok.com/@teachable.com',
    vb: '0 0 14 16',
    d: 'M8 0H9.98C10.124 0.715 10.52 1.617 11.215 2.512C11.895 3.389 12.797 4 14 4V6C12.247 6 10.93 5.186 10 4.171V11C10 11.9889 9.70676 12.9556 9.15735 13.7779C8.60794 14.6001 7.82705 15.241 6.91342 15.6194C5.99979 15.9978 4.99446 16.0969 4.02455 15.9039C3.05465 15.711 2.16373 15.2348 1.46447 14.5355C0.765206 13.8363 0.289002 12.9454 0.0960759 11.9755C-0.0968503 11.0055 0.00216642 10.0002 0.380605 9.08658C0.759043 8.17295 1.39991 7.39206 2.22215 6.84265C3.0444 6.29324 4.0111 6 5 6V8C4.40666 8 3.82664 8.17595 3.33329 8.50559C2.83994 8.83524 2.45543 9.30377 2.22836 9.85195C2.0013 10.4001 1.94189 11.0033 2.05765 11.5853C2.1734 12.1672 2.45912 12.7018 2.87868 13.1213C3.29824 13.5409 3.83279 13.8266 4.41473 13.9424C4.99667 14.0581 5.59987 13.9987 6.14805 13.7716C6.69623 13.5446 7.16477 13.1601 7.49441 12.6667C7.82406 12.1734 8 11.5933 8 11V0Z',
  },
]

const HEADER = 'font-body text-[1.5rem] font-bold leading-[1.5] text-white'
const COLUMN = 'relative flex flex-col items-start justify-start gap-[1.5rem] xs:gap-[.75rem]'

// Echo layers (.is-3/.is-2/.is-1 in DOM order): opacity .08, offset by the M-footer mouse-move parallax
// (IX2 "Footer Logo [Mouse Move]", a-10; product-template.md G3). Max offset per layer in rem:
const ECHO_AMP = [1.5, 1, 0.5]
// X: 0% → -amp, 40% → 0, 80–100% → +amp.  Y: 0% → -amp, 80–100% → 0.  p = pointer position 0–1 across the footer.
const echoX = (p, a) => (p <= 0.4 ? -a + (p / 0.4) * a : p <= 0.8 ? ((p - 0.4) / 0.4) * a : a)
const echoY = (p, a) => (p <= 0.8 ? -a + (p / 0.8) * a : 0)
const REST = 0.5 // IX2 resting state 50% → (0.125, -0.1875) … (0.375, -0.5625) rem, the §19 static offsets
const SMOOTHING = 0.86 // IX2 smoothing 86: each frame keeps 86% of the remaining distance
// No offset at ≤479 (§19, 390): `xs:transform-none` overrides the translate.
const ECHO_CLS = 'translate-x-[var(--echo-x)] translate-y-[var(--echo-y)]'
const rem = (v) => `${Math.round(v * 1e4) / 1e4}rem`

function setEcho(imgs, px, py) {
  imgs.forEach((img, i) => {
    if (!img) return
    img.style.setProperty('--echo-x', rem(echoX(px, ECHO_AMP[i])))
    img.style.setProperty('--echo-y', rem(echoY(py, ECHO_AMP[i])))
  })
}

function useEchoParallax() {
  const footerRef = useRef(null)
  const echoRefs = useRef([])

  useEffect(() => {
    const footer = footerRef.current
    const imgs = echoRefs.current
    const cur = { x: REST, y: REST }
    const target = { x: REST, y: REST }
    let raf = 0

    const tick = () => {
      cur.x = target.x + (cur.x - target.x) * SMOOTHING
      cur.y = target.y + (cur.y - target.y) * SMOOTHING
      if (Math.abs(cur.x - target.x) < 1e-4 && Math.abs(cur.y - target.y) < 1e-4) {
        cur.x = target.x
        cur.y = target.y
        raf = 0
      } else {
        raf = requestAnimationFrame(tick)
      }
      setEcho(imgs, cur.x, cur.y)
    }
    const run = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const onMove = (e) => {
      if (e.pointerType === 'touch') return
      const r = footer.getBoundingClientRect()
      target.x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width))
      target.y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))
      run()
    }
    const onLeave = () => {
      target.x = REST
      target.y = REST
      run()
    }

    setEcho(imgs, REST, REST)
    footer.addEventListener('pointermove', onMove)
    footer.addEventListener('pointerleave', onLeave)
    return () => {
      footer.removeEventListener('pointermove', onMove)
      footer.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return { footerRef, echoRefs }
}

export default function Footer() {
  const { footerRef, echoRefs } = useEchoParallax()
  return (
    <footer
      ref={footerRef}
      text-selection="reverse"
      className="z-0 overflow-hidden border-t border-black bg-black py-[6rem] md:py-[4rem] sm:py-[2rem] xs:pt-[3rem]"
    >
      {/* §19 quirk: 4 leftover Webflow placeholder divs (black on black). Kept for identical spacing. */}
      <div aria-hidden="true">
        <div>This is some text inside of a div block.</div>
        <div>This is some text inside of a div block.</div>
        <div>This is some text inside of a div block.</div>
        <div>This is some text inside of a div block.</div>
      </div>

      <div className="padding-global">
        <div className="relative mx-auto flex w-full max-w-container-large flex-col gap-[8rem]">
          <div className="relative grid grid-cols-[1fr_1fr_1fr_2fr] items-start justify-items-stretch gap-4 md:grid-cols-3 md:gap-[3rem] sm:gap-x-4 sm:gap-y-[2rem] xs:grid-cols-1">
            {COLUMNS.map(([title, links]) => (
              <div key={title} className={COLUMN}>
                <div className={HEADER}>{title}</div>
                <div className="flex w-full flex-col items-start">
                  {links.map(([label, href, ext]) => (
                    <a
                      key={label}
                      href={href}
                      target={ext ? '_blank' : undefined}
                      className="flex items-center justify-start py-[.25rem] text-medium text-grey-muted no-underline [transition:padding_.2s] hover:pl-[.2rem] hover:underline"
                    >
                      <div>{label}</div>
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <div className={`${COLUMN} md:col-span-3 xs:col-span-1`}>
              <div className={HEADER}>Teachable</div>
              <p className="w-full max-w-[32rem] text-small text-grey-muted">
                Teachable is the platform for experts and businesses who take education seriously. In a world where anyone can ask AI for information, we're the home for those who educate with purpose, modernity, and humanity. Teachable powers human-led learning that drives student trust, connection, and results—all at a global scale. With a sleek, intuitive interface and AI as a time-saving partner, the platform enables transformative education rooted in real-world experience.
              </p>

              <div className="grid grid-cols-6 xs:my-4 xs:grid-cols-4 xs:grid-rows-2">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    aria-label={`Follow us on ${s.label}`}
                    data-anim="M9-footer-social"
                    className="relative flex h-[3.25rem] w-[3.25rem] items-center justify-center text-white [transition:margin_.2s] hover:mt-[-.25rem]"
                  >
                    <div className="absolute inset-0 m-auto h-[80%] w-[80%] rounded-full border border-white md:border-[#ffffff4d]" />
                    <div className="relative flex h-4 w-4 items-center justify-center">
                      <svg width="100%" height="100%" viewBox={s.vb} fill="none" aria-hidden="true">
                        <path
                          d={s.d}
                          fill="currentColor"
                          fillRule={s.evenodd ? 'evenodd' : undefined}
                          clipRule={s.evenodd ? 'evenodd' : undefined}
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex flex-col items-start justify-center">
                {BASE_LINKS.map(([label, href, ext, id]) => (
                  <a
                    key={label}
                    id={id}
                    href={href}
                    target={ext ? '_blank' : undefined}
                    className="py-[.3rem] text-small text-grey-muted no-underline hover:underline"
                  >
                    {label}
                  </a>
                ))}
                <div className="mt-[.3rem] text-small text-grey-muted">
                  Copyright <span>{new Date().getFullYear()}</span> © Teachable, Inc. All rights reserved.
                </div>
              </div>

              <a
                href={`${T}/security`}
                aria-label="AICPA SOC label"
                className="absolute bottom-0 right-0 flex h-auto w-[6.25rem] items-center justify-center sm:w-[5rem] xs:relative xs:mt-4"
              >
                <img
                  src="/assets/6953d5310fcdb2da81b8b4d5_soc2-badge-teachable.svg"
                  loading="lazy"
                  width="104"
                  height="104"
                  alt=""
                  className="h-full w-full"
                />
              </a>
            </div>

            <a
              href="/"
              aria-label="Teachable - Go to Homepage"
              aria-current="page"
              className="absolute bottom-0 left-0 w-[54%] md:relative md:col-span-3 md:w-full xs:col-span-1"
            >
              {ECHO_AMP.map((a, i) => (
                <img
                  key={i}
                  ref={(el) => (echoRefs.current[i] = el)}
                  data-anim="B7-footer-echo"
                  style={{ '--echo-x': rem(echoX(REST, a)), '--echo-y': rem(echoY(REST, a)) }}
                  src={LOGO}
                  loading="lazy"
                  width="300"
                  height="45"
                  alt=""
                  className={`absolute inset-x-0 top-0 h-auto w-full opacity-[.08] ${ECHO_CLS} xs:transform-none`}
                />
              ))}
              <img src={LOGO} loading="lazy" width="300" height="45" alt="" className="h-auto w-full" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
