// memberships.md §3 `section.why_section_component`: gold band, big display question left
// (`.why_heading_text` 6rem / 1.1 → token display-why), rationale paragraph right (padding-left 4rem,
// 0 ≤991). 1 column ≤991, gap 3rem → 1.5rem ≤767. No motion.
// heading, text: nodes (text may contain <strong>).
export default function WhyStatement({ heading, text }) {
  return (
    <section className="relative overflow-hidden bg-gold">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-1 sm:gap-6">
            <div>
              <h2 className="text-display-why">{heading}</h2>
            </div>
            <div className="flex flex-col items-start justify-center pl-16 md:pl-0">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
