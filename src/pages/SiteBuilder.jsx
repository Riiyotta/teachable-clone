import FeatureHero from '../components/sections/FeatureHero.jsx'
import FeatureExplainer from '../components/sections/FeatureExplainer.jsx'
import FeatureList from '../components/sections/FeatureList.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import Stories from '../components/Stories.jsx'
import Faq from '../components/Faq.jsx'
import { HERO, EXPLAINER, LIST, CTA, FAQ } from '../content/site-builder.js'

// /site-builder (specs/site-builder.md): hero (no bottom padding) · explainer · list · stories (centred) ·
// cta · faq. No why section on this page.
const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'
const START = { label: 'Start for free', href: SIGN_UP }
const A = '/assets/'
const EXPERTS = 'https://www.teachable.com/experts'

const [row1, row2] = EXPLAINER.rows
const drag = row1[0].text
const faqItems = FAQ.items.map(({ q, a }) =>
  typeof a === 'string' ? { q, a } : { q, a: <p>{a.pre}<a href={EXPERTS}>{a.link}</a>{a.post}</p> },
)

export default function SiteBuilder() {
  return (
    <>
      <FeatureHero
        tag={HERO.tag}
        heading={HERO.h1}
        text={HERO.intro}
        button={START}
        padBottom={false}
        image={{ src: `${A}68e52ddcebb6bce2b06892ac_e8f311733d860acfd0e50ff68f6553d6_site-build-hero.webp`, w: 542, h: 720 }}
      />
      <FeatureExplainer
        heading={EXPLAINER.heading}
        text={EXPLAINER.text}
        rows={[
          {
            image: { src: `${A}68e52ddb42879a46f4588384_06f3f90b3622a2dd7b728b9e0890d7b7_site-build-customize-1.webp`, w: 800, h: 800 },
            items: [{ title: row1[0].title, text: <>{drag.pre}<em>{drag.em}</em>{drag.post}</> }, row1[1]],
          },
          {
            image: { src: `${A}68e52ddbc89b724d6a0c6305_7b9eb46dd19f179eaf7496793e36ff09_site-build-customize-2.webp`, w: 800, h: 800 },
            items: row2,
            button: START,
          },
        ]}
      />
      <FeatureList heading={<>{LIST.heading.pre}<em>{LIST.heading.em}</em></>} text={LIST.text} items={LIST.cards} />
      <Stories centered />
      <ProductCta tone="red" header="feature" heading={CTA.heading} text={CTA.text} padTop={false} padBottom={false} button={START} />
      <Faq heading={FAQ.heading} items={faqItems} />
    </>
  )
}
