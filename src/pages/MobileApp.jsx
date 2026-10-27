import FeatureHero from '../components/sections/FeatureHero.jsx'
import FeatureWhy from '../components/sections/FeatureWhy.jsx'
import FeatureExplainer from '../components/sections/FeatureExplainer.jsx'
import FeatureList from '../components/sections/FeatureList.jsx'
import FeatureTwoCol from '../components/sections/FeatureTwoCol.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import Stories from '../components/Stories.jsx'
import Faq from '../components/Faq.jsx'
import Glyph from '../components/shared/Glyph.jsx'
import Rating from '../components/pages/mobile-app/Rating.jsx'
import { HERO, WHY, EXPLAINER, LIST, TWO_COL, RATING, CTA, FAQ } from '../content/mobile-app.js'

// /mobile-app (specs/mobile-app.md): hero · why · explainer · list · 2col · stories · rating · cta · faq.
const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'
const START = { label: 'Start for free', href: SIGN_UP }
const A = '/assets/'
const APP_GUIDE = 'https://support.teachable.com/hc/en-us/articles/115000766167-Use-the-iOS-App-as-a-Student#h_01HR8KR5'

const intro = HERO.intro
const faqItems = FAQ.items.map(({ q, a }) =>
  typeof a === 'string' ? { q, a } : { q, a: <p>{a.pre}<a href={APP_GUIDE}>{a.link}</a>{a.post}</p> },
)

export default function MobileApp() {
  return (
    <>
      <FeatureHero
        tag={HERO.tag}
        heading={<>{HERO.h1.pre}<Glyph variant="h1-e" />{HERO.h1.post}</>}
        text={<>{intro.text}<strong>{intro.strong}<em>{intro.em}</em></strong>{intro.end}</>}
        button={START}
        image={{ src: `${A}68e32d8cfee16c7f8ffd6f4d_0f6c569c458119895376f18daca277f1_mobile-hero.webp`, w: 540, h: 720 }}
      />
      <FeatureWhy size="small" heading={WHY.heading} pill={WHY.pill} text={WHY.text} />
      <FeatureExplainer
        rows={[
          {
            image: { src: `${A}68e32d8c5b4fb72c7d99bab0_629f32065c13978b1396aef348a17a67_mobile-phone.webp`, w: 800, h: 800 },
            items: [EXPLAINER],
            button: START,
          },
        ]}
      />
      <FeatureList icons heading={LIST.heading} text={LIST.text} items={LIST.cards} padTop={false} />
      <FeatureTwoCol
        padded={false}
        heading={TWO_COL.heading}
        text={TWO_COL.text}
        button={START}
        image={{ src: `${A}68e32d8cd2184c530694454c_e59143675b533f49c845c81e525c398b_mobile-video.webp`, w: 800, h: 800 }}
      />
      <Stories />
      <Rating heading={RATING.heading} text={RATING.text} cards={RATING.cards} />
      <ProductCta tone="red" header="feature" heading={CTA.heading} text={CTA.text} padTop={false} padBottom={false} button={START} />
      <Faq heading={FAQ.heading} items={faqItems} />
    </>
  )
}
