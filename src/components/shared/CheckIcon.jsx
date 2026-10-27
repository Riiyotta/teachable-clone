// 18x14 check (pricing bullets/matrix, payments compare table, customer-journey bullets):
// `<path d="M1 8L6 13L17 1" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>`.
// Size and colour come from the wrapper: <CheckIcon className="w-[.6rem]" />.
export default function CheckIcon({ className = '' }) {
  return (
    <span className={`flex items-center justify-center ${className}`} aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 18 14" fill="none">
        <path d="M1 8L6 13L17 1" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    </span>
  )
}
