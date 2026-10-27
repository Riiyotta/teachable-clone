// 14x14 cross (pricing matrix `.price-table_x-icon`, payments `.compare-table-static_x-icon`):
// `<path d="M1 13L13 1M1 1L13 13" stroke="currentColor" stroke-width="2.5"/>`.
// Size, colour, opacity and the pricing rotate(180deg) belong to the call site.
export default function XIcon({ className = '' }) {
  return (
    <span className={`flex items-center justify-center ${className}`} aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none">
        <path d="M1 13L13 1M1 1L13 13" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    </span>
  )
}
