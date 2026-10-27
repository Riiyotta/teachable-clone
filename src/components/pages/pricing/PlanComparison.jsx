// pricing.md §2 `section.section_price-filter-b` (#Features-Matrix).
// ≥992 (`.pricing-tiers_desktop`): 8 filter pills ("All" + one per group; motion P3: the matching group shows
//   instantly, no fade), a plan-name header row and the .35fr / 1fr matrix (4 plan columns).
// ≤991 (`.pricing-tiers_mobile`): PillTabs (size 'compact', motion P1) with one pane per plan listing every
//   group for that plan in a 1fr / .5fr grid.
//
// plans: [4 names]. groups: [{ filter, blocks: [{ title, rows: [{ label, tip?, color?, tall?, small?, mob2?,
//   values: [4 × (string | '✓' | '✕' | { link, href })] }] }] }]. defaultFilter: index into
//   ['All', ...groups] (1 = the first group, "Transaction fees & Usage").
import { useState } from 'react'
import PillTabs from '../../sections/PillTabs.jsx'
import CheckIcon from '../../shared/CheckIcon.jsx'
import XIcon from '../../shared/XIcon.jsx'
import { TooltipIcon } from '../../shared/Tooltip.jsx'

function Value({ v }) {
  if (v === '✓') return <CheckIcon className="h-auto w-[1.125rem] text-check-green" />
  if (v === '✕') return <XIcon className="h-auto w-[.875rem] rotate-180 text-grey-mid" />
  if (typeof v === 'object') return (
    <a href={v.href} className="text-[1rem] text-black underline">
      {v.link}
    </a>
  )
  return <div>{v}</div>
}

// `.price-tabs_name-content`. Desktop: 3.5rem rows, `tall` (is-tooltip-bottom) 4.5rem. Mobile: `tall`
// (is-3-lines) 5.5rem and `mob2` (is-2-lines) 4rem at ≤479; .875rem label on coloured small/3-line rows.
function NameCell({ row, mobile }) {
  const small = row.color && (row.small || (mobile && row.tall))
  const h = mobile
    ? `h-[3.5rem] xs:h-[3rem] ${row.color && row.tall ? 'xs:h-[5.5rem]' : ''} ${row.mob2 ? 'xs:h-[4rem]' : ''}`
    : row.color && row.tall === true
      ? 'h-[4.5rem]'
      : 'h-[3.5rem]'
  return (
    <div
      className={`relative flex flex-wrap items-center justify-start gap-1 px-4 py-2 sm:py-3 xs:text-[3.25vw] ${h} ${
        small ? 'text-[.875rem]' : 'text-[1rem]'
      } ${row.color ? 'rounded-l-md bg-grey-light' : ''}`}
    >
      <div>{row.label}</div>
      {row.tip && <TooltipIcon message={row.tip} />}
    </div>
  )
}

// `.price-tabs_item-wrp`
function ValueCell({ row, v, last, mobile }) {
  const h = mobile
    ? `h-[3.5rem] xs:h-[3rem] ${row.color && row.tall ? 'xs:h-[5.5rem]' : ''} ${row.mob2 ? 'xs:h-[4rem]' : ''}`
    : row.color && row.tall === true
      ? 'h-[4.5rem]'
      : 'h-[3.5rem]'
  return (
    <div
      className={`relative flex flex-wrap items-center justify-center py-2 text-center text-[1rem] sm:py-3 xs:text-[3.25vw] ${h} ${
        row.color ? `bg-grey-light ${last ? 'rounded-r-md' : ''}` : ''
      }`}
    >
      <Value v={v} />
    </div>
  )
}

function Heading({ children }) {
  return (
    <div className="flex items-center justify-start gap-4">
      <div className="text-[1.5rem] font-semibold xs:text-[6vw]">{children}</div>
    </div>
  )
}

function DesktopGroup({ group, plans }) {
  return (
    <div className="flex flex-col gap-8 sm:gap-4">
      {group.blocks.map((b) => [
        <Heading key={`h-${b.title}`}>{b.title}</Heading>,
        <div key={`g-${b.title}`} className="grid grid-cols-[.35fr_1fr] border-y border-grey-light">
          <div className="flex flex-col">
            {b.rows.map((r) => (
              <NameCell key={r.label} row={r} />
            ))}
          </div>
          <div className="grid grid-cols-4">
            {plans.map((p, pi) => (
              <div key={p} className="flex flex-col">
                {b.rows.map((r) => (
                  <ValueCell key={r.label} row={r} v={r.values[pi]} last={pi === plans.length - 1} />
                ))}
              </div>
            ))}
          </div>
        </div>,
      ])}
    </div>
  )
}

function MobilePane({ groups, planIndex }) {
  return (
    <div className="flex flex-col gap-8 pt-6">
      <div className="flex flex-col gap-8 sm:gap-4">
        {groups.flatMap((g) =>
          g.blocks.map((b) => (
            <div key={b.title} className="flex flex-col gap-8 sm:gap-4">
              <Heading>{b.title}</Heading>
              <div className="grid grid-cols-[1fr_.5fr] border-y border-grey-light">
                <div className="flex flex-col">
                  {b.rows.map((r) => (
                    <NameCell key={r.label} row={r} mobile />
                  ))}
                </div>
                <div className="flex flex-col">
                  {b.rows.map((r) => (
                    <ValueCell key={r.label} row={r} v={r.values[planIndex]} last mobile />
                  ))}
                </div>
              </div>
            </div>
          )),
        )}
      </div>
    </div>
  )
}

export default function PlanComparison({ id = 'Features-Matrix', plans, groups, defaultFilter = 1, allLabel = 'All' }) {
  const [filter, setFilter] = useState(defaultFilter)
  const filters = [allLabel, ...groups.map((g) => g.filter)]
  const visible = filter === 0 ? groups : [groups[filter - 1]]

  return (
    <section id={id} className="relative block py-32 md:py-24 sm:py-16">
      <div className="padding-global">
        <div className="container-large">
          {/* desktop */}
          <div className="md:hidden">
            <div className="mb-12">
              <div role="radiogroup" aria-label="Filter features" className="flex items-center justify-start gap-2" data-anim="P3-matrix-filter">
                {filters.map((f, i) => (
                  <button
                    key={f}
                    type="button"
                    role="radio"
                    aria-checked={filter === i}
                    onClick={() => setFilter(i)}
                    className={`relative flex cursor-default items-center justify-center rounded-full border border-black px-4 py-[.6rem] text-[1rem] leading-[1.5] ${
                      filter === i ? 'bg-black text-white' : 'bg-white text-black'
                    }`}
                  >
                    <span className="font-semibold">{f}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* `.price-filter_title-grid`: its 1px border-bottom takes space (75.8 tall @1440) but isn't drawn */}
            <div className="grid grid-cols-[.35fr_1fr] border-b border-transparent">
              <div className="flex flex-col" />
              <div className="grid grid-cols-4">
                {plans.map((p) => (
                  <div key={p} className="relative flex flex-wrap items-center justify-center gap-1 p-4 text-[1rem]">
                    <div className="font-heading text-[2rem] leading-[1.5]">{p}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8 pt-6">
              <div>
                <div className="flex flex-col gap-8 pt-6">
                  {visible.map((g) => (
                    <DesktopGroup key={g.filter} group={g} plans={plans} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* tablet / mobile */}
          <div className="hidden md:block">
            <PillTabs
              size="compact"
              tabs={plans.map((p, i) => ({ label: p, content: <MobilePane groups={groups} planIndex={i} /> }))}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
