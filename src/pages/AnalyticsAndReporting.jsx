import FeatureHero from '../components/sections/FeatureHero.jsx'
import FeatureWhy from '../components/sections/FeatureWhy.jsx'
import FeatureExplainer from '../components/sections/FeatureExplainer.jsx'
import ResourceCards from '../components/sections/ResourceCards.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import Stories from '../components/Stories.jsx'
import Glyph from '../components/shared/Glyph.jsx'
import { HERO, WHY, EXPLAINER, BLOG, CTA } from '../content/analytics-and-reporting.js'

// /analytics-and-reporting (specs/analytics-and-reporting.md): hero · why · explainer · stories · blog · cta.
const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'
const START = { label: 'Start for free', href: SIGN_UP }
const A = '/assets/'
const BLOG_LINKS = [
  'https://teachable.com/blog/google-analytics-for-beginners',
  'https://teachable.com/blog/choosing-platform-social-media-analytics',
  'https://teachable.com/blog/user-tagging-teachable',
]

const [row1, row2] = EXPLAINER.rows
const alert = row2[1].text

export default function AnalyticsAndReporting() {
  return (
    <>
      <FeatureHero
        tag={HERO.tag}
        heading={<>{HERO.h1.pre}<Glyph variant="h1-o" />{HERO.h1.post}</>}
        text={HERO.intro}
        button={START}
        image={{ src: `${A}68e3249c0f41e4018e2e3ff6_d857aaab4288158f407ca1b3e06e0c45_analytics-hero.webp`, w: 589, h: 720 }}
      />
      <FeatureWhy narrow icon heading={WHY.heading} text={WHY.text} />
      <FeatureExplainer
        heading={EXPLAINER.heading}
        text={EXPLAINER.text}
        rows={[
          {
            image: { src: `${A}68e3249c5ae0ff5ee986c46f_44296f1d8adc00860772f3972549ef21_analytics-course-Rrport.webp`, w: 800, h: 800 },
            items: row1,
          },
          {
            image: { src: `${A}68e3249c2154bcc026606403_679cee997f4f68c76fa4674e3ba92828_analytics-integrations.webp`, w: 800, h: 800 },
            items: [
              row2[0],
              { title: row2[1].title, text: <>{alert.pre}<a href="https://teachable.com/app-hub">{alert.link}</a>{alert.post}</> },
            ],
            button: START,
          },
        ]}
      />
      <Stories />
      <ResourceCards
        heading={<>{BLOG.heading}<br /></>}
        text={BLOG.text}
        cards={BLOG.cards.map((c, i) => ({ ...c, href: BLOG_LINKS[i] }))}
      />
      <ProductCta tone="red" header="none" heading={CTA.heading} padTop={false} button={START} />
    </>
  )
}
