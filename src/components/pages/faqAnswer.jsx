// Turns a content-file FAQ answer into what <Faq items> expects.
//   string                → one <p class="text-medium"> (Faq's own string path)
//   array of blocks       → JSX for `.faq-rich`: a block is a string (<p>), an array of segments
//                           (<p> with inline links; a segment is a string or { label, href }),
//                           or { ul: [string] } (bulleted list)
function Segments({ parts }) {
  return parts.map((s, i) =>
    typeof s === 'string' ? (
      s
    ) : (
      <a key={i} href={s.href}>
        {s.label}
      </a>
    ),
  )
}

export function faqAnswer(a) {
  if (typeof a === 'string') return a
  return (
    <>
      {a.map((b, i) =>
        typeof b === 'string' ? (
          <p key={i}>{b}</p>
        ) : Array.isArray(b) ? (
          <p key={i}>
            <Segments parts={b} />
          </p>
        ) : (
          <ul key={i}>
            {b.ul.map((li, j) => (
              <li key={j}>{li}</li>
            ))}
          </ul>
        ),
      )}
    </>
  )
}

export const faqItems = (items) => items.map(({ q, a }) => ({ q, a: faqAnswer(a) }))
