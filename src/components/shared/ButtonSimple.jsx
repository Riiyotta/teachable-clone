import ArrowIcon from './ArrowIcon.jsx'

// Webflow `.button-simple` (product-template.md T8, feature-template.md T9c / T9d):
// label (`.button_txt`, 1.1rem / 1.5 / 400; 1.05rem at ≤479) + `.button-simple-icon`
// (.75rem arrow, ≤767 .85rem, margin-top .15rem, rotated -45deg, transform .2s ease).
//
// href: renders an <a> (quick-links slider); without it a <div> (inside a card that is itself the link).
// hover: the MF2 / B6 card hover, where the icon un-rotates to 0deg. The hovered card must carry
//   Tailwind's `group` class; the title underline on hover belongs to the card, not this button.
export default function ButtonSimple({ label, href, hover = false, className = '' }) {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag href={href} className={`flex items-center justify-start gap-[.25rem] text-[1rem] no-underline ${className}`}>
      <div className="text-[1.1rem] font-normal leading-[1.5] xs:text-[1.05rem]">{label}</div>
      <ArrowIcon
        className={`relative mt-[.15rem] flex w-[.75rem] -rotate-45 items-center justify-center [transition:transform_.2s_ease] sm:w-[.85rem] ${
          hover ? 'group-hover:rotate-0' : ''
        }`}
      />
    </Tag>
  )
}
