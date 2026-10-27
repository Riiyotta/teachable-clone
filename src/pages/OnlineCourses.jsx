import HalloweenBanner from '../components/HalloweenBanner.jsx'
import Stats from '../components/Stats.jsx'
import Hub from '../components/Hub.jsx'
import Stories from '../components/Stories.jsx'
import Faq from '../components/Faq.jsx'
import ProductHero from '../components/sections/ProductHero.jsx'
import StatsMarquee from '../components/sections/StatsMarquee.jsx'
import FeatureSplit from '../components/sections/FeatureSplit.jsx'
import StaggerCards from '../components/sections/StaggerCards.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import Glyph from '../components/shared/Glyph.jsx'
import ToolsGrid from '../components/pages/online-courses/ToolsGrid.jsx'
import { faqItems } from '../components/pages/faqAnswer.jsx'
import * as c from '../content/online-courses.js'

const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'
const START = { label: 'Start for free', href: SIGN_UP }
const A = '/assets/'

// /online-courses (specs/online-courses.md). The `section_embed-watch-demo` block is display:none
// on the live page at every width, so it is not built.
export default function OnlineCourses() {
  return (
    <>
      <HalloweenBanner topPad="large" />
      <ProductHero
        tag={c.HERO.tag}
        heading={c.HERO.h1}
        text={c.HERO.intro}
        buttons={[START, { label: 'Explore our plans', href: '/pricing', variant: 'secondary' }]}
        image={{ src: `${A}68e311765f5241a3d356f305_314b597993ae3f81ca355bfa6eb4b708_courses-hero.webp`, w: 1276, h: 1220 }}
      />
      <StatsMarquee items={c.MARQUEE_STATS} />
      <Stats variant="stack" items={c.STACK_STATS} />
      <FeatureSplit
        heading={c.SPLIT_GREY.heading}
        text={c.SPLIT_GREY.text}
        rows={[
          {
            image: { src: `${A}68e3117618576ae8098abc7b_b98cb8e56c799a3342711e81f7fb0fce_courses-quiz-1.webp`, w: 1100, h: 1100 },
            items: c.SPLIT_GREY.items,
            button: START,
          },
        ]}
      />
      <FeatureSplit
        skin="white"
        heading={c.SPLIT_WHITE.heading}
        text={c.SPLIT_WHITE.text}
        rows={[
          {
            image: { src: `${A}68e31176489d43d06d91c2a4_de40b7dd8f24f29c9f0a8704b2f53a34_courses-quiz-2.webp`, w: 1100, h: 1100 },
            items: c.SPLIT_WHITE.items,
            button: START,
          },
        ]}
      />
      <StaggerCards
        skin="platform"
        heading={c.PLATFORM.heading}
        text={c.PLATFORM.text}
        button={START}
        cards={[
          `68e311765fa29efc8085f497_943111b162257a8d92b15efa8ad802c4_courses-payments-2.webp`,
          `68e31176548905717e562e8a_4ce85045ea6d6abfccfc6ba00aed2594_courses-payments-1.webp`,
          `68e31176a0248cabd8f02012_763b4baf45e90e34561637b98bbac9d5_courses-pay-their-way.webp`,
        ].map((file, i) => ({ image: { src: A + file, w: 736, h: 612 }, ...c.PLATFORM.cards[i] }))}
      />
      <Hub heading={c.HUB.heading} text={c.HUB.text} />
      <Stories />
      <ToolsGrid
        heading={
          <>
            {c.TOOLS.heading.pre}
            <Glyph />
            {c.TOOLS.heading.post}
          </>
        }
        text={c.TOOLS.text}
        cards={c.TOOLS.cards}
      />
      <ProductCta
        header="none"
        padTop={false}
        padBottom={false}
        heading={c.CTA.heading}
        // `.product-cta_paragraph` max-width 46rem
        text={<span className="mx-auto block max-w-[46rem]">{c.CTA.text}</span>}
        button={START}
      />
      <Faq
        heading={c.FAQ.heading}
        items={faqItems(c.FAQ.items)}
        footnote={
          <>
            <sup>1</sup> <em>{c.FAQ.footnote}</em>
          </>
        }
      />
    </>
  )
}
