// CLONE_SPEC §7 — Teach / products
import ArrowIcon from './shared/ArrowIcon.jsx'

const CARDS = [
  {
    title: 'Online Courses',
    href: 'https://www.teachable.com/online-courses',
    img: '/assets/68e2fc0c548905717e540783_3ce1870c653da1545e1d5a5c6e2f0992_teachable-product-courses.webp',
    alt: 'Laptop screen showing online courses with categories Organization and Business, including Automation for Business.',
    text: 'Maximize student engagement with videos, quizzes, drip content, and mobile access.',
  },
  {
    title: 'Coaching',
    href: 'https://www.teachable.com/coaching',
    img: '/assets/68e2fc0c780c5ef76265386b_2d591819928fd2df51b40360964a5c1c_teachable-product-coaching.webp',
    alt: 'Video call screen showing a smiling woman with earbuds and chat messages about a milestone and meeting time.',
    text: 'Offer one-on-one or group online coaching sessions, with easy scheduling and payment management.',
  },
  {
    title: 'Digital Downloads',
    href: 'https://www.teachable.com/digital-downloads',
    img: '/assets/68e2fc0c8ae5b217815396ad_272dd01b1fa967d3f7374c715975249e_teachable-product-downloads.webp',
    alt: 'Download panel listing ASL Handbook, Deaf Culture FAQs, and Signs for Travel files with sizes and download icons.',
    text: 'Sell digital products like templates, guides, and resources your audience can instantly access and use.',
  },
  {
    title: 'Memberships',
    href: 'https://www.teachable.com/memberships',
    img: '/assets/68e2fc0c583104a037c344a8_676e42d496d15ad0dc8039bf6d1db4e5_teachable-product-membership.webp',
    alt: '$15/month subscribed, all-access current tier, new lesson Thursday Abs added to Weekly Workouts.',
    text: 'Build recurring revenue and stronger community with flexible subscription models.',
  },
]

const HOME_HEADING = 'Teach in every way your students want to learn'
const HOME_TEXT =
  'Our products give students more choice in how they engage—live or on-demand, video or text, at home or on-the-go—while giving your business more sustainable ways to grow.'
const HOME_BUTTON = {
  label: 'Start for free',
  href: 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly',
}

// Props (all default to the homepage §7 section, so <Teach/> renders it unchanged):
// - heading, text: nodes (text null = no paragraph)
// - cards: [{ title, href, img, alt, text, w?, h? }]
// - button: { label, href } | null (centred `btn-sso` under the grid)
// - skin: 'home' (§7: h1-size heading, placeholder image box, 2rem title + arrow, 2-col at ≤991)
//         'enterprise' (enterprise §2 `section_enterprise-built`: h2, padding 8rem top only (≤767 also bottom),
//         4 cols until ≤479, 1rem image radius, Ivypresto 1.75rem/1.2 title without arrow; the card is the link
//         and its title underlines on hover, instantly)
export default function Teach({
  heading = HOME_HEADING,
  text = HOME_TEXT,
  cards = CARDS,
  button = HOME_BUTTON,
  skin = 'home',
}) {
  if (skin === 'enterprise') {
    return (
      <section className="pt-section-large sm:pb-section-large">
        <div className="padding-global">
          <div className="container-large">
            <div className="flex flex-col gap-16 md:gap-12 sm:gap-8">
              <div className="flex flex-col items-center justify-center text-center">
                <h2>{heading}</h2>
                {text && <p>{text}</p>}
              </div>
              <div className="mr-auto grid w-full grid-cols-4 gap-8 md:gap-4 xs:grid-cols-1 xs:gap-8">
                {cards.map((c, i) => (
                  <a key={i} href={c.href} className="group flex flex-col gap-4 text-medium no-underline">
                    <div className="overflow-hidden rounded-lg">
                      <img src={c.img} alt={c.alt} width={c.w ?? 599} height={c.h ?? 493} loading="lazy" className="h-auto w-full" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="font-heading text-[1.75rem] leading-[1.2] group-hover:underline">{c.title}</div>
                      <p>{c.text}</p>
                    </div>
                  </a>
                ))}
              </div>
              {button && (
                <div className="flex items-center justify-center">
                  <a href={button.href} className="btn-sso xs:w-full">
                    <span className="btn-txt">{button.label}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section_teach overflow-hidden bg-white py-section-large">
      <div className="padding-global">
        <div className="container-large">
          <div className="flex flex-col gap-16 sm:gap-8">
            <div className="mx-auto flex w-full max-w-container-medium flex-col items-center gap-6 text-center">
              <h2 className="heading-style-h1">{heading}</h2>
              {text && <p>{text}</p>}
            </div>

            <div className="grid grid-cols-4 gap-8 md:grid-cols-2 md:gap-y-12 sm:gap-x-4 sm:gap-y-8 xs:grid-cols-1 xs:gap-y-12">
              {cards.map((c) => (
                <a key={c.title} href={c.href} className="group relative flex flex-col no-underline">
                  <div className="relative w-full overflow-hidden rounded-md bg-placeholder">
                    <img src={c.img} alt={c.alt} width={c.w ?? 475} height={c.h ?? 391} loading="lazy" className="h-auto w-full" />
                  </div>
                  <div className="relative flex flex-col items-start gap-4 pr-4 pt-6 sm:gap-2 sm:pt-4">
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-[2rem] leading-none group-hover:underline sm:text-[1.5rem] xs:text-[8vw]">
                        {c.title}
                      </h3>
                      <ArrowIcon />
                    </div>
                    <p className="text-size-medium">{c.text}</p>
                  </div>
                </a>
              ))}
            </div>

            {button && (
              <div className="relative z-[1] flex items-center justify-center">
                <div className="flex xs:w-full">
                  <a href={button.href} className="btn-sso xs:w-full">
                    <span className="btn-txt">{button.label}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
