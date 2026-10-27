// CLONE_SPEC §1 — promo marquee (CSS keyframe `track`, defined in index.css)
const HREF = 'https://www.teachable.com/lps/migrate-to-teachable?src=marquee'

const linkCls = 'text-[.95rem] font-semibold leading-[1.8] text-black no-underline hover:underline'
const Icon = () => <div className="text-[.88rem] leading-none text-yellow-olive">✦</div>

function Item({ hidden }) {
  return (
    <div data-anim="M1-marquee" className="marquee-item flex flex-none items-center justify-start gap-4 py-3" aria-hidden={hidden || undefined}>
      <a href={HREF} className={linkCls} tabIndex={hidden ? -1 : undefined}>
        Selling more than US$12k/yr outside Teachable?
      </a>
      <Icon />
      <a href={HREF} className={linkCls} tabIndex={hidden ? -1 : undefined}>
        Migrate this month and earn up to $6,500 in credits
      </a>
      <Icon />
      <a href={HREF} className={`${linkCls} font-extrabold`} tabIndex={hidden ? -1 : undefined}>
        <strong className="font-bold">See migration offer →</strong>
      </a>
      <Icon />
    </div>
  )
}

export default function PromoMarquee() {
  return (
    <div className="marquee flex w-full max-w-full gap-5 overflow-hidden bg-marquee">
      <Item />
      <Item hidden />
      <Item hidden />
    </div>
  )
}
