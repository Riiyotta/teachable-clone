// Decorative letter swaps in headings (Webflow `.span_h*-*`): the letter stays in the DOM for
// accessibility/flow but is transparent, and the stylised SVG letter is the background.
// Values: CLONE_SPEC §11 (h2-o*), feature-template.md T2 (h1-e, h1-o) and the page CSS for
// `.span_h2-all` (coaching.md; h2-a). Usage: Think bigger and gr<Glyph />w
//
// Tailwind needs literal class strings, so each variant is spelled out in full.
const VARIANTS = {
  // §11 `.span_h2-o` (homepage scale headings, OC tools heading, customer-journey steps heading)
  'h2-o': {
    letter: 'o',
    cls: 'bg-[url(/assets/68d333eb7daf150f3f4d68c8_teachable-char-o-long.svg)] bg-[length:100%] bg-[position:50%_69%] px-[.2rem] ml-[-.2rem] mr-[-.7rem] md:ml-[-.1rem] md:mr-[-.5rem] sm:mr-[-.4rem] sm:bg-[length:96%] xs:bg-[length:92%]',
  },
  // §11 `.span_h2-o` inside "International" (margin-left 0)
  'h2-o-international': {
    letter: 'o',
    cls: 'bg-[url(/assets/68d333eb7daf150f3f4d68c8_teachable-char-o-long.svg)] bg-[length:100%] bg-[position:50%_69%] px-[.2rem] ml-0 mr-[-.7rem] md:mr-[-.5rem] sm:mr-[-.4rem] sm:bg-[length:96%] xs:bg-[length:92%]',
  },
  // §11 `.span_h2-o.is-video` (short "o")
  'h2-o-video': {
    letter: 'o',
    cls: 'bg-[url(/assets/68b425e628e284c40abc6878_c598fb5409c83115d892ba631c5b226e_teachable-char-o.svg)] bg-[length:92%] bg-[position:50%_69%] px-[.2rem] ml-0 mr-[-.7rem] md:bg-[position:50%_68%] md:bg-[length:87%] md:ml-[-.1rem] md:mr-[-.5rem] sm:mr-[-.4rem] sm:bg-[length:81%] xs:bg-[length:79%] xs:ml-[-.2rem]',
  },
  // feature-template T2 `.span_h1-o` (analytics, app-hub, customer-journey hero h1)
  'h1-o': {
    letter: 'o',
    cls: 'bg-[url(/assets/68d333eb7daf150f3f4d68c8_teachable-char-o-long.svg)] bg-[length:100%] bg-[position:50%_69%] pl-[.3rem] pr-[.2rem] ml-0 mr-[-.7rem] md:ml-[-.1rem] md:mr-[-.5rem] sm:mr-[-.4rem] sm:bg-[length:92%]',
  },
  // feature-template T2 `.span_h1-e` (mobile-app, sales, student, customer-journey hero h1). No margins/padding.
  'h1-e': {
    letter: 'e',
    cls: 'bg-[url(/assets/68b754d6a559281c2a42e12b_teachable-text-e.svg)] bg-[length:96%] bg-[position:50%_64%] md:bg-[length:100%]',
  },
  // coaching `.span_h2-all` (stylised "a" in an h2)
  'h2-a': {
    letter: 'a',
    cls: 'bg-[url(/assets/68b7568dc595a93d5c9a9b0d_teachable-text-a.svg)] bg-[length:100%] bg-[position:50%_64%] ml-[-.2rem] mr-[-.5rem] pr-[.6rem] md:ml-0 md:mr-[-.3rem] md:pr-[.4rem] sm:bg-[length:86%] xs:bg-[length:84%]',
  },
  // coaching `.span_h2-spotlight` (stylised "i" in the spotlight h2). Page CSS values (coaching.md's
  // breakpoint list disagrees): size 100% → 79% ≤991 → 82% + ml -.1rem ≤767 → 79% ≤479.
  'h2-i': {
    letter: 'i',
    cls: 'bg-[url(/assets/68d33c6a7b106decaa3bbebc_ce6b5a44e0f4a5be0f42bd462d47b44d_teachable-char-i-long.svg)] bg-[length:100%] bg-[position:50%_59%] px-[.4rem] mr-[-.5rem] md:bg-[length:79%] sm:bg-[length:82%] sm:ml-[-.1rem] xs:bg-[length:79%]',
  },
}

export default function Glyph({ variant = 'h2-o', children }) {
  const v = VARIANTS[variant]
  return <span className={`bg-no-repeat text-transparent ${v.cls}`}>{children ?? v.letter}</span>
}
