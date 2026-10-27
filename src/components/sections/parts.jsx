// Small markup helpers shared by the Phase 2a section components (not a public primitive).

// Webflow button classes → BUILD_NOTES §Buttons. At ≤479 Webflow makes `.button-sso`,
// `.button-secondary` and `.button-primary-new` width 100% globally, so those get `xs:w-full`;
// the wrapper decides how wide that ends up.
// The enterprise hero buttons (`.enterprise-btn_primary/_secondary`) have no IX2 hover, so they
// don't use the hover-scaling classes (enterprise.md §1).
const VARIANT = {
  sso: 'btn-sso xs:w-full',
  secondary: 'btn-secondary xs:w-full',
  primary: 'btn-primary xs:w-full',
  'primary-white': 'btn-primary-white xs:w-full',
  'primary-black': 'btn-primary-black xs:w-full',
  'enterprise-primary': 'btn bg-yellow px-6 py-4 text-black md:text-[.875rem] xs:w-full',
  'enterprise-secondary': 'btn-nav-secondary md:hidden xs:w-full',
}

// button: { label, href, variant = 'sso', target }
export function Btn({ label, href, variant = 'sso', target, className = '' }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`${VARIANT[variant]} ${className}`}
    >
      <span className="btn-txt">{label}</span>
    </a>
  )
}

// `.section-tag_wrp > div`: 1rem / 1.5 / 600 uppercase, flex gap .5rem.
export function Eyebrow({ children }) {
  return (
    <div className="flex items-center justify-start gap-2 text-regular font-semibold uppercase">
      <div>{children}</div>
    </div>
  )
}

// image: { src, w, h, alt }
export function Img({ image, className = '', eager = false }) {
  return (
    <img
      src={image.src}
      width={image.w}
      height={image.h}
      alt={image.alt ?? ''}
      loading={eager ? 'eager' : 'lazy'}
      className={className}
    />
  )
}
