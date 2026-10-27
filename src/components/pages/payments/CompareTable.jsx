// payments.md §4 `section.section_compare_cms`: centred h2 over a 3-column comparison (2fr 1fr 1fr; 1.5fr at
// ≤991; equal at ≤767). The highlighted column is yellow on every row, header included, so it reads as one
// continuous band. Rows are separated by padding only: each cell keeps a 1px bottom border that takes space
// (rows 72.2 @1440 / header 51.7 @390) but isn't visible. Static.
//
// heading: node. columns: [3 header labels]. highlight: index of the yellow column. rows: [{ label,
// values: [string | '✓' | '✕', …] }]. button: { label, href, variant }.
import CheckIcon from '../../shared/CheckIcon.jsx'
import XIcon from '../../shared/XIcon.jsx'
import { Btn } from '../../sections/parts.jsx'

const ROW = 'grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr] sm:grid-cols-3'

function Cell({ first, hi, children }) {
  return (
    <div
      className={`flex items-center gap-2 border-b border-transparent p-4 text-medium leading-[1.2] xs:px-2 ${
        first ? 'justify-start pl-6 text-left sm:pl-0' : 'justify-center text-center'
      } ${hi ? 'bg-yellow' : ''}`}
    >
      {children}
    </div>
  )
}

function Value({ v }) {
  if (v === '✓') return <CheckIcon className="h-auto w-[1.125rem]" />
  if (v === '✕') return <XIcon className="h-auto w-[.875rem] opacity-[.32]" />
  return <div>{v}</div>
}

export default function CompareTable({ heading, columns, highlight = 1, rows, button }) {
  return (
    <section className="overflow-hidden bg-white py-section-medium">
      <div className="padding-global">
        <div className="container-large">
          <div className="flex flex-col items-stretch justify-start gap-16 md:gap-8">
            <div className="mx-auto flex flex-col items-center justify-start gap-4 text-center">
              <h2>{heading}</h2>
              <p />
            </div>
            <div>
              <div className="grid grid-cols-1">
                <div className={ROW}>
                  {columns.map((c, i) => (
                    <Cell key={i} first={i === 0} hi={i === highlight}>
                      <div className="text-[length:var(--fs-regular)] font-bold">{c}</div>
                    </Cell>
                  ))}
                </div>
              </div>
              <div>
                {rows.map((r) => (
                  <div key={r.label} className={ROW}>
                    <Cell first>
                      <div>{r.label}</div>
                    </Cell>
                    {r.values.map((v, i) => (
                      <Cell key={i} hi={i + 1 === highlight}>
                        <Value v={v} />
                      </Cell>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {button && (
              <div className="flex items-center justify-center xs:w-full">
                <Btn {...button} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
