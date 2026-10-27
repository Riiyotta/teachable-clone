import HalloweenBanner from '../components/HalloweenBanner.jsx'
import Stats from '../components/Stats.jsx'
import Hub from '../components/Hub.jsx'
import Stories from '../components/Stories.jsx'
import Faq from '../components/Faq.jsx'
import ProductHero from '../components/sections/ProductHero.jsx'
import StatsMarquee from '../components/sections/StatsMarquee.jsx'
import Steps from '../components/sections/Steps.jsx'
import FeatureSplit from '../components/sections/FeatureSplit.jsx'
import StaggerCards from '../components/sections/StaggerCards.jsx'
import ResourceCards from '../components/sections/ResourceCards.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import Glyph from '../components/shared/Glyph.jsx'
import * as c from '../content/coaching.js'

const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'
const START = { label: 'Start for free', href: SIGN_UP }
const A = '/assets/'
const BLOG = 'https://www.teachable.com/blog'

// /coaching (specs/coaching.md).
export default function Coaching() {
  return (
    <>
      <HalloweenBanner topPad="large" />
      <ProductHero
        tag={c.HERO.tag}
        heading={c.HERO.h1}
        text={c.HERO.intro}
        imageBg="gold"
        buttons={[START, { label: 'Explore our plans', href: '/pricing', variant: 'secondary' }]}
        image={{ src: `${A}68e31566ba04d34559e26a3a_fd601d05a29162ddeb9baddb60e93809_coaching-hero.webp`, w: 1136, h: 1136 }}
      />
      <StatsMarquee items={c.MARQUEE_STATS} />
      <Stats variant="stack" items={c.STACK_STATS} />
      <Steps heading={c.STEPS.heading} text={c.STEPS.text} items={c.STEPS.items} />
      <FeatureSplit
        titleTag="div"
        heading={
          <>
            {c.SPLIT.heading.pre}
            <Glyph variant="h2-a" />
            {c.SPLIT.heading.post}
          </>
        }
        text={c.SPLIT.text}
        rows={[
          {
            image: { src: `${A}68e315653367f98e10ec6ae5_037c101c36cf96f98a221aa50e9fc83c_coaching-reg.webp`, w: 1100, h: 1100 },
            items: c.SPLIT.rows[0],
          },
          {
            image: { src: `${A}68e315658a243929a99efa2a_8a65322ddac2552da79486b2e2d8ec07_coaching-payments.webp`, w: 1100, h: 1100 },
            imageSide: 'right',
            items: c.SPLIT.rows[1],
            button: START,
          },
        ]}
      />
      <StaggerCards
        skin="spotlight"
        heading={
          <>
            {c.SPOTLIGHT.heading.pre}
            <Glyph variant="h2-i" />
            {c.SPOTLIGHT.heading.post}
          </>
        }
        text={c.SPOTLIGHT.text}
        cards={[
          '68e31565462ce99fd25619b6_2f7fe33c2394fed7660b5e02890ef5e1_coaching-kindbody.webp',
          '68e3156585a3ac7e20de905f_0678e1a776ebfa2d88508064c1e7c04a_coaching-tailored-tutors.webp',
          '68e3156551c4edf905e2e46a_c6b6d4e08a1ee9c97b1f5fbd8cd13344_coaching-drone-pilot.webp',
        ].map((file, i) => ({
          image: { src: A + file, w: 740, h: 744 },
          ...c.SPOTLIGHT.cards[i],
          // external creator sites on the live page; neutral placeholder here
          button: { label: 'See it in action', href: '#', variant: 'secondary' },
        }))}
      />
      <ResourceCards
        heading={c.RESOURCES.heading}
        text={c.RESOURCES.text}
        cards={[
          '68e4875b3d30cff2711e69e8_coaching-fitness-bootcamp.webp',
          '68e4875ba24112f3e56905e6_coaching-a-levels-tutoring.webp',
          '68e4875bdb85f4d7bd5c897e_coaching-uav-coach.webp',
        ].map((file, i) => ({ href: BLOG, image: { src: A + file }, ...c.RESOURCES.cards[i] }))}
      />
      <Hub heading={c.HUB.heading} text={c.HUB.text} />
      <Stories />
      <ProductCta padTop={false} padBottom={false} heading={c.CTA.heading} text={c.CTA.text} button={START} />
      <Faq heading={c.FAQ.heading} items={c.FAQ.items} />
    </>
  )
}
