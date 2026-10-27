// examples.md §1 `section.section_examples-hero`: a single Ivypresto 3rem / 1.2 headline (2.5rem ≤991, 10vw
// ≤479), centred as a block but left-aligned text. Padding hero-top / 2rem sides / 4rem bottom (0 ≤991).
export default function SimpleHero({ heading }) {
  return (
    <section className="relative flex flex-col items-stretch justify-center overflow-hidden px-8 pb-16 pt-hero-top md:pb-0 sm:px-0">
      <div className="container-large">
        <div className="relative flex flex-1 flex-col items-start justify-start gap-6 md:gap-12 sm:gap-8 sm:px-8 xs:px-6">
          <h1 className="self-center text-[3rem] leading-[1.2] md:text-[2.5rem] xs:text-[10vw]">{heading}</h1>
        </div>
      </div>
    </section>
  )
}
