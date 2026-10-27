// pricing.md §3 `section.section_pricing-all`: left-aligned h2, two click-to-open Webflow dropdowns
// (`data-hover=false`) and a fine-print paragraph. Motion P4: the list switches display none ↔ block
// instantly, in flow (it pushes the content below); the icon does not rotate.
//
// heading: node. columns: [{ title, rows: [{ label, value, tip? }] }]. note: node (links underlined).
import { useState } from 'react'
import { TooltipIcon } from '../../shared/Tooltip.jsx'

// `.pricing-all_dropdown-icon` (filled circle with a down arrow; copied from the snapshot)
function DownIcon() {
  return (
    <div className="flex w-[1.375rem] items-center justify-center" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 22 22" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 7C11.75 6.58579 11.4142 6.25 11 6.25C10.5858 6.25 10.25 6.58579 10.25 7V13.1893L8.53033 11.4697C8.23744 11.1768 7.76256 11.1768 7.46967 11.4697C7.17678 11.7626 7.17678 12.2374 7.46967 12.5303L10.4697 15.5303C10.7626 15.8232 11.2374 15.8232 11.5303 15.5303L14.5303 12.5303C14.8232 12.2374 14.8232 11.7626 14.5303 11.4697C14.2374 11.1768 13.7626 11.1768 13.4697 11.4697L11.75 13.1893V7Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

function Dropdown({ column }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        data-anim="P4-fees-dropdown"
        className="flex w-full cursor-pointer items-center justify-start gap-4 p-0 text-left text-[1.5rem] font-semibold leading-[1.5] text-grey-tab sm:gap-2 xs:justify-between xs:text-[6vw]"
      >
        <div className="whitespace-nowrap xs:flex-1 xs:whitespace-pre-wrap xs:leading-[1.2]">{column.title}</div>
        <DownIcon />
      </button>
      <nav className={`relative bg-transparent pt-4 ${open ? 'block' : 'hidden'}`}>
        <div className="flex flex-col">
          {column.rows.map((r, i) => (
            <div
              key={r.label}
              className={`relative grid grid-cols-[2.5fr_1fr] gap-4 border-t border-black p-4 sm:py-2 xs:px-0 ${
                i === column.rows.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="flex items-center justify-start gap-1 text-[1rem] xs:text-[4vw]">
                <div>{r.label}</div>
                {r.tip && <TooltipIcon message={r.tip} />}
              </div>
              <div className="flex items-center justify-start gap-1 text-[1rem] xs:text-[4vw]">
                <div>{r.value}</div>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default function FeeDropdowns({ heading, columns, note }) {
  return (
    <section className="bg-grey-light py-32 md:py-24 sm:py-16">
      <div className="padding-global">
        <div className="container-large">
          <div className="flex flex-col gap-12 sm:gap-8">
            <div>
              <h2>{heading}</h2>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:flex sm:flex-col sm:gap-6">
              {columns.map((c) => (
                <Dropdown key={c.title} column={c} />
              ))}
            </div>
            <p>{note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
