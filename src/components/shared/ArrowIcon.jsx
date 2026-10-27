// §0.8 `.global_arrow-icon` (16x9 viewBox, currentColor). Wrap with className="arrow-icon".
export default function ArrowIcon({ className = 'arrow-icon', flipped = false }) {
  return (
    <span className={`${className}${flipped ? ' is-flipped' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 16 9" fill="none" width="100%">
        <path d="M0.546875 3.79455H10.5469V5.29455H0.546875V3.79455Z" fill="currentColor" />
        <path d="M15.4766 4.54474L10.4719 8.87756V0.211914L15.4766 4.54474Z" fill="currentColor" />
      </svg>
    </span>
  )
}
