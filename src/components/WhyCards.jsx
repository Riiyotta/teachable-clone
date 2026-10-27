// CLONE_SPEC §10 — Why cards (white section that slides over the sticky why scene)

const QUIZ_IMG = '/assets/68e2f9bc11c85940d12845ff_ead53d9e008958202ec4680f95334916_teachable-quiz.webp'

const ROWS = [
  {
    img: '/assets/68e2f9bd78675ff9624f0337_312443428e5accebfa7ef0601f27ed2f_teachable-ease-of-use.webp',
    w: 1819,
    h: 1213,
    alt: 'Interface showing adding fitness content: workout images, audio message, and an upsell offer for $50/month.',
    imageFirst: true,
    title: (
      <>
        More time for <br />
        what matters
      </>
    ),
    text: 'We automate the operational headaches so you can keep growing your business without adding busywork.',
    list: [
      'Drag-and-drop course builder',
      'Built-in AI creation and translation tools',
      'Tax calculated and remitted automatically in 45+ countries',
      'Daily payouts, no reserve held back',
      'Assisted migration and dedicated support',
    ],
  },
  {
    img: '/assets/68e2fa6d2f5c74270c78f226_610e5346b48fabfc73b14d5f4e4d4930_teachable-business-growth.webp',
    w: 1814,
    h: 1210,
    alt: 'Online checkout screen showing Cash Flow Command purchase options and discounted 90-Day Cash Flow Tracker.',
    imageFirst: false,
    title: 'Business growth that lasts',
    text: 'Growth isn’t a one-time transaction. We help you build systems to acquire, convert, and retain at scale.',
    list: [
      'Automated upsells and order bumps',
      'Cross-promotional tools built into dashboard',
      'Coupons and flexible payment options',
      '35+ local payment methods',
    ],
  },
  {
    img: '/assets/68e2fd016e340a7e2edcd447_4450238b7ede5d143aefb69007202a91_teachable-zap.webp',
    w: 1818,
    h: 1212,
    alt: 'Photo of a woman labeled New student linked to apps including Shopify, Slack, Mailchimp, and Gmail.',
    imageFirst: true,
    title: (
      <>
        Made to adapt <br />
        {'‍'}
        <em>and</em> evolve
      </>
    ),
    text: 'No two businesses are the same. Teachable flexes to fit your ideal workflow, future goals, and unique student needs.',
    list: [
      'Intuitive 3rd-party app integrations',
      'Embeddable product cards and buy buttons',
      'Developer-friendly tools like APIs and webhooks',
    ],
  },
]

function ArrowList({ items }) {
  return (
    <div className="list-arrows items-start">
      {items.map((t, i) => (
        <div key={i} className="list-arrows__row items-start">
          <div className="flex items-center">
            <div>→</div>
          </div>
          <div className="flex flex-1 items-center">
            <div>{t}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

// .why_grid-content-left
const TEXT_CELL = 'relative flex flex-col items-start justify-center gap-4 px-16 text-left md:px-8 sm:pl-0'
// .why_grid-content-right
const IMG_CELL =
  'relative overflow-hidden rounded-md bg-grey-light md:flex md:items-center md:justify-center md:bg-transparent'
const IMG = 'h-full w-full object-cover md:h-auto md:object-contain'
// .why-card_title
const TITLE = 'font-heading text-[3rem] leading-[1.1] md:text-[2.25rem] xs:text-[9vw]'
// .why_card-grid
const ROW = 'grid grid-cols-2 gap-0 md:items-center sm:grid-cols-1 sm:gap-8 xs:gap-6'

// Homepage `.why_card-grid-mobile` card: only shown ≤991, where it replaces the desktop scroll-scene card.
const HOME_MOBILE_CARD = {
  title: (
    <>
      Made for the modern
      <br />
      learner
    </>
  ),
  text: 'You’re serious about education. We’re serious about engaging your students and turning them into loyal customers.',
  list: ['Innovative student dashboard', 'iOS and Android mobile apps', 'Drip content', 'Quizzes and completion certificates'],
  img: QUIZ_IMG,
  w: 1804,
  h: 1197,
  alt: 'Mobile quiz app showing question 9 of 18 with 50% progress and an 83% score, and quiz score table.',
}

// Props (defaults = homepage §10, so <WhyCards/> renders it unchanged):
// - rows: [{ img, w, h, alt, imageFirst, title (node), text, list: [string], cta?: { label, href } }]
//   `cta` adds a `btn-sso` at the end of the text column (payments row 2).
// - header: { title, text } | null. Centred `.product_header-wrp` above the rows (max-width 64rem, gap 1.5rem;
//   ≤479 left-aligned, gap 1rem). Only used with overlap={false}.
// - overlap: true = homepage `.section_why-card` (mt -17vh over the sticky why scene, pb only, plus the ≤991
//   "modern learner" card). false = payments `section_features.is-white` (white, padding-section-large top
//   and bottom, no negative margin, no mobile card).
// - titleTag: element for the row titles ('h3' homepage, 'h2' payments).
// At ≤767 every row stacks with the text first (homepage and payments both reorder via `order:-9999`).
export default function WhyCards({ rows = ROWS, header = null, overlap = true, titleTag: Title = 'h3', mobileCard }) {
  const card = mobileCard === undefined ? (overlap ? HOME_MOBILE_CARD : null) : mobileCard

  const rowList = (
    <div className="flex flex-col gap-[11vh] md:gap-16 sm:gap-8 xs:gap-12">
      {card && (
        <div className="hidden md:grid md:grid-cols-2 md:items-center md:gap-0 sm:grid-cols-1 sm:gap-8 xs:gap-6">
          <div className={`${TEXT_CELL} md:pl-0`}>
            <div className="flex w-8 items-center justify-center md:w-6" />
            <h2 className={TITLE}>{card.title}</h2>
            <p className="text-size-medium">{card.text}</p>
            <ArrowList items={card.list} />
          </div>
          <div className={IMG_CELL}>
            <img src={card.img} alt={card.alt} width={card.w} height={card.h} loading="lazy" className={IMG} />
          </div>
        </div>
      )}

      {rows.map((r, i) => {
        const text = (
          <div key="t" className={`${TEXT_CELL} ${r.imageFirst ? 'sm:order-first' : ''}`}>
            <Title className={TITLE}>{r.title}</Title>
            <p>{r.text}</p>
            <ArrowList items={r.list} />
            {r.cta && (
              <div>
                <a href={r.cta.href} className="btn-sso">
                  <span className="btn-txt">{r.cta.label}</span>
                </a>
              </div>
            )}
          </div>
        )
        const image = (
          <div key="i" className={IMG_CELL}>
            <img src={r.img} alt={r.alt} width={r.w} height={r.h} loading="lazy" className={IMG} />
          </div>
        )
        return (
          <div key={i} className={ROW}>
            {r.imageFirst ? [image, text] : [text, image]}
          </div>
        )
      })}
    </div>
  )

  if (!overlap) {
    return (
      <section className="overflow-hidden bg-white">
        <div className="padding-global padding-section-large">
          <div className="container-large">
            <div className="flex flex-col items-stretch justify-start gap-16 sm:gap-8">
              {header && (
                <div className="mx-auto flex w-full max-w-mw-xlarge flex-col items-center justify-start gap-6 text-center xs:items-start xs:gap-4 xs:text-left">
                  <h2>{header.title}</h2>
                  {header.text && <p>{header.text}</p>}
                </div>
              )}
              {rowList}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section_why-card relative mt-[-17vh] bg-white pb-section-large md:mt-0 md:pt-24 sm:pt-12">
      <div className="padding-global">
        <div className="container-large">{rowList}</div>
      </div>
    </section>
  )
}
