import HalloweenBanner from '../components/HalloweenBanner.jsx'
import Stats from '../components/Stats.jsx'
import Hub from '../components/Hub.jsx'
import Stories from '../components/Stories.jsx'
import Faq from '../components/Faq.jsx'
import ProductHero from '../components/sections/ProductHero.jsx'
import StatsMarquee from '../components/sections/StatsMarquee.jsx'
import FeatureSplit from '../components/sections/FeatureSplit.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import SellList from '../components/pages/digital-downloads/SellList.jsx'
import { faqItems } from '../components/pages/faqAnswer.jsx'
import * as c from '../content/digital-downloads.js'

const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'
const START = { label: 'Start for free', href: SIGN_UP }
const A = '/assets/'

// /digital-downloads (specs/digital-downloads.md).
export default function DigitalDownloads() {
  return (
    <>
      <HalloweenBanner topPad="large" />
      <ProductHero
        tag={c.HERO.tag}
        heading={c.HERO.h1}
        text={c.HERO.intro}
        buttons={[START, { label: 'Explore our plans', href: '/pricing', variant: 'secondary' }]}
        image={{ src: `${A}68e312b82e25e8adbdfdcf7f_be4c6433f3fbbb2b9ac7f13f005a98d5_downloads-hero.webp`, w: 1136, h: 1136 }}
      />
      <StatsMarquee items={c.MARQUEE_STATS} />
      <Stats variant="stack" items={c.STACK_STATS} />
      <FeatureSplit
        titleTag="div"
        heading={c.SPLIT_1.heading}
        rows={[
          {
            image: { src: `${A}68e312b8b22ffc35efd64f80_c95bed4688c4ad117b1872828f979f5d_downloads-professor.webp`, w: 1100, h: 1100 },
            items: c.SPLIT_1.items,
            button: START,
          },
        ]}
      />
      <FeatureSplit
        skin="white"
        titleTag="div"
        heading={c.SPLIT_2.heading}
        rows={[
          {
            image: { src: `${A}68e312b8e1011afe97803293_4ab9cc3e69ab46ee450c7fc313656224_downloads-presentation.webp`, w: 1176, h: 1176 },
            items: c.SPLIT_2.items,
            button: START,
          },
        ]}
      />
      <FeatureSplit
        titleTag="div"
        heading={c.SPLIT_3.heading}
        rows={[
          {
            image: { src: `${A}68e312b8f5dee38f94c3758e_9b6b25c689db93f16558b264b1223e6e_downloads-courses.webp`, w: 1100, h: 1100 },
            items: c.SPLIT_3.items,
            button: START,
          },
        ]}
      />
      <Hub heading={c.HUB.heading} text={c.HUB.text} />
      <Stories />
      <SellList heading={c.SELL.heading} text={c.SELL.text} items={c.SELL.items} />
      <ProductCta header="none" narrow padBottom={false} heading={c.CTA.heading} button={START} />
      <Faq heading={c.FAQ.heading} items={faqItems(c.FAQ.items)} />
    </>
  )
}
