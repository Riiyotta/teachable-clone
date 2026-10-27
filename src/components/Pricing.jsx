// CLONE_SPEC §14 Pricing teaser
const BULLETS = [
  'All features, no limits',
  'Single sign-on (SSO)',
  'Advanced reporting',
  'Seamless features for bulk sales and customer management',
  'Native integrations and API to connect your full stack',
  'Dedicated success manager, priority support, and white glove onboarding',
]

function Check() {
  return (
    <div className="relative top-[.2rem] flex h-[1.2rem] items-center justify-center xs:top-[.05rem]">
      <div className="flex w-[.6rem] items-center justify-center">
        <svg viewBox="0 0 18 14" fill="none" width="100%" aria-hidden="true">
          <path d="M1 8L6 13L17 1" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

// `.pricing_content-top` (15rem tall, auto ≤1320) with title, copy and button
function CardTop({ title, text, href, btn, label }) {
  return (
    <div className="relative flex h-[15rem] flex-col items-start justify-between gap-[1rem] pricing:h-auto">
      <div className="flex flex-col gap-[1rem]">
        <h3 className="text-[2.3rem] leading-[1.1] md:text-[2.5rem] sm:text-[2rem] xs:text-[10vw]">{title}</h3>
        <p className="text-size-medium">{text}</p>
      </div>
      <div className="flex w-full flex-wrap items-center justify-start gap-[.5rem] md:mt-[.5rem]">
        <a href={href} className={`${btn} xs:w-full`}>
          <span className="btn-txt">{label}</span>
        </a>
      </div>
    </div>
  )
}

// Card padding (embed): 3rem → 2rem ≤1320 → 1.5rem ≤992 (applied here at md ≤991)
const CARD = 'flex flex-col justify-start gap-[1.5rem] rounded-md'

export default function Pricing() {
  return (
    <section className="relative overflow-hidden px-[2rem] xs:px-0">
      <div className="container-large">
        <div className="relative flex flex-col gap-[2rem] sm:gap-[1.5rem]">
          <div className="grid grid-cols-3 gap-[2rem] rounded-md bg-grey-light p-[2rem] md:grid-cols-2 md:gap-[1rem] sm:grid-cols-1 xs:px-[1.5rem] xs:py-[3rem]">
            <div
              className={`${CARD} items-start bg-transparent py-[3rem] pl-[2rem] pr-[3rem] pricing:py-[2rem] pricing:pr-[2rem] md:p-[1.5rem] md:pl-0 sm:items-center sm:justify-center sm:pb-0 xs:items-start xs:pt-0`}
            >
              <div className="relative flex flex-col items-start justify-center gap-[1.5rem]">
                <h2 className="text-[3.5rem] md:text-[2.5rem] xs:text-[12vw]">
                  We have plans to help you hit your biggest goals
                </h2>
                <p className="text-size-medium">The business you want tomorrow starts with the plan you pick today.</p>
              </div>
            </div>

            <div className={`${CARD} bg-pricing-card px-[3rem] pt-[3rem] text-white pricing:px-[2rem] pricing:pt-[2rem] md:px-[1.5rem] md:pt-[1.5rem]`}>
              <CardTop
                title="Flexible pricing tiers"
                text="Choose from Starter, Builder, and Growth plans, each with a 7-day free trial and a 30-day money-back guarantee."
                href="https://www.teachable.com/pricing"
                btn="btn-primary-white"
                label="Explore plans"
              />
              <div className="h-px w-full border-t border-white/[.32]" />
              <div className="relative flex-1 overflow-hidden rounded-t-md aspect-[16/9] md:aspect-[3/2]">
                <img
                  src="/assets/691ee172ca23ef48bdff028d_cta-image-phone-2.webp"
                  loading="lazy"
                  width="361"
                  height="276"
                  alt="Person holding phone showing Teachables welcome screen with course progress for Podcast Launch Lab."
                  className="block h-full w-full object-cover md:object-[50%_20%]"
                />
              </div>
            </div>

            <div className={`${CARD} border border-black bg-white p-[3rem] text-black pricing:p-[2rem] md:p-[1.5rem]`}>
              <CardTop
                title="Scale smarter with Teachable Enterprise"
                text="Premium solutions for employee training and professional learning at scale. Book a call to build the best plan for your organization."
                href="https://www.teachable.com/lps/migrate-to-teachable"
                btn="btn-primary-black"
                label="Contact sales"
              />
              <div className="h-px w-full border-t border-black" />
              <div className="relative flex w-full flex-col items-start justify-start gap-[.5rem] text-[length:var(--fs-regular)]">
                {BULLETS.map((b) => (
                  <div key={b} className="flex items-center justify-start gap-[.5rem] sm:items-start">
                    <Check />
                    <div className="flex flex-1 items-center justify-start gap-[.25rem]">
                      <div>{b}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
