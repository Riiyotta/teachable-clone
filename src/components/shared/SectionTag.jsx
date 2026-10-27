// Webflow `.section-tag_wrp` eyebrow (catalog-a "Shared primitives", product-template T2, enterprise §3):
// flex, gap .5rem, Peridot `--fs-regular` (1rem; 4vw at ≤479) / 1.5 / 600 / uppercase.
// Pass the label exactly as rendered, dash included: <SectionTag>— PRODUCT DEMO</SectionTag>.
// payments `.eyebrow-wrp` is the same style without the dash: just pass the text.
export default function SectionTag({ children, className = '' }) {
  return (
    <div className={`flex items-center justify-start gap-2 text-regular font-semibold uppercase ${className}`}>
      <div>{children}</div>
    </div>
  )
}
