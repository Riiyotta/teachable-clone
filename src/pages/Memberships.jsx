import HalloweenBanner from '../components/HalloweenBanner.jsx'
import Pricing from '../components/Pricing.jsx'
import Hub from '../components/Hub.jsx'
import Stories from '../components/Stories.jsx'
import ProductHero from '../components/sections/ProductHero.jsx'
import ResourceCards from '../components/sections/ResourceCards.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import WhyStatement from '../components/pages/memberships/WhyStatement.jsx'
import DynaSlider from '../components/pages/memberships/DynaSlider.jsx'
import * as c from '../content/memberships.js'

const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'
const A = '/assets/'
const BLOG = 'https://www.teachable.com/blog'
const PLANS = { label: 'Explore our plans', href: '/pricing' }

// /memberships (specs/memberships.md). No stats and no FAQ on this page.
export default function Memberships() {
  return (
    <>
      <HalloweenBanner topPad="large" />
      <ProductHero
        tag={c.HERO.tag}
        heading={c.HERO.h1}
        text={
          <>
            <strong>{c.HERO.introStrong}</strong>
            {c.HERO.intro}
          </>
        }
        buttons={[{ label: 'Start for free', href: SIGN_UP }, { ...PLANS, variant: 'secondary' }]}
        image={{ src: `${A}68e31876ef07c53d2e736220_99e4d641d0282b025350e92028eadb89_memberships-hero.webp`, w: 1464, h: 1476 }}
      />
      <WhyStatement
        heading={c.WHY.heading}
        text={
          <>
            {c.WHY.pre}
            <strong>{c.WHY.strong}</strong>
            {c.WHY.post}
          </>
        }
      />
      <DynaSlider
        heading={c.DYNA.heading}
        text={c.DYNA.text}
        button={PLANS}
        tabs={[
          { ...c.DYNA.tabs[0], image: { src: `${A}68e31875b534a5ce617838d9_c4398c92b94d56a8ec34565305533cc3_memberships-compare-tiers.webp`, w: 1468, h: 1420 } },
          { ...c.DYNA.tabs[1], image: { src: `${A}68e31876583104a037c5fc6e_c298f6deb596dad2eff2ef8b22571c01_memberships-manage.webp`, w: 1468, h: 1420 } },
        ]}
      />
      <Pricing />
      <ResourceCards heading={c.RESOURCES.heading} text={c.RESOURCES.text} cards={c.RESOURCES.cards.map((card) => ({ href: BLOG, ...card }))} />
      <Hub heading={c.HUB.heading} text={c.HUB.text} />
      <Stories />
      <ProductCta padTop={false} heading={c.CTA.heading} text={c.CTA.text} button={{ ...PLANS, variant: 'primary' }} />
    </>
  )
}
