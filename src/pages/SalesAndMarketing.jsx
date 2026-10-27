import FeatureHero from '../components/sections/FeatureHero.jsx'
import FeatureWhy from '../components/sections/FeatureWhy.jsx'
import FeatureExplainer from '../components/sections/FeatureExplainer.jsx'
import FeatureList from '../components/sections/FeatureList.jsx'
import FeatureTwoCol from '../components/sections/FeatureTwoCol.jsx'
import QuickLinksSlider from '../components/sections/QuickLinksSlider.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import Stories from '../components/Stories.jsx'
import Glyph from '../components/shared/Glyph.jsx'
import { HERO, WHY, EXPLAINER, LIST, INT, QUICK_LINKS, CTA } from '../content/sales-and-marketing.js'

// /sales-and-marketing (specs/sales-and-marketing.md): hero · why · explainer · list · stories · int ·
// quick-links · cta.
const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'
const START = { label: 'Start for free', href: SIGN_UP }
const A = '/assets/'
const img = (file, w = 800, h = 800) => ({ src: `${A}${file}`, w, h })

// functional slide data (spec "Quick-links slide data"): image, footer label, link
const SLIDES = [
  { image: img('6909f376f617b202473f6891_sales_page_template_image.webp', 1140, 920), label: 'DOWNLOAD NOW', href: 'https://teachable.com/resources/sales-page-template' },
  { image: img('6909f3b3d144f20f54dcd99e_marketing_your_course_image.webp', 1140, 920), label: 'DOWNLOAD NOW', href: 'https://teachable.com/resources/marketing-your-course' },
  { image: img('6909f3d3e90347e451381aea_sales_email_template.webp', 1140, 920), label: 'DOWNLOAD NOW', href: 'https://teachable.com/resources/sales-email-template' },
  { image: img('6909f3f217e741c797c97f70_how-to-market-online-courses.webp', 1440, 961), label: 'READ MORE', href: 'https://teachable.com/blog/how-to-market-online-courses' },
  { image: img('6909f401c34e333d68a1ac7e_tips-to-create-a-landing-page-design.webp', 1000, 667), label: 'READ MORE', href: 'https://teachable.com/blog/best-practices-for-great-landing-page-design' },
]

const [row1, row2, row3] = EXPLAINER.rows
const coupons = row2[1].text

export default function SalesAndMarketing() {
  return (
    <>
      <FeatureHero
        tag={HERO.tag}
        heading={<>{HERO.h1.pre}<Glyph variant="h1-e" />{HERO.h1.post}</>}
        text={HERO.intro}
        button={START}
        image={img('68e52e9d14557697d9ae0484_ff57db87a6ae14cdb21384071e977997_marketing-hero.webp', 540, 720)}
      />
      <FeatureWhy icon heading={WHY.heading} text={WHY.text} />
      <FeatureExplainer
        heading={EXPLAINER.heading}
        text={EXPLAINER.text}
        rows={[
          { image: img('68e52e9dd386474569db797f_7d329d470926e58f793b4e6445b99609_marketing-bundle.webp'), items: row1 },
          {
            image: img('68e52e9d3a176e729514b895_2e6daba931d56fdcb734dd5082c2e7a9_marketing-magnet.webp'),
            items: [row2[0], { title: row2[1].title, text: <>{coupons.pre}<em>{coupons.em}</em>{coupons.post}</> }],
          },
          {
            image: img('68e52e9da44532cd636a5d27_07a232c89cfedcd7725986f9c6fbbfc5_marketing-integrations.webp'),
            items: row3,
            button: START,
          },
        ]}
      />
      <FeatureList heading={<>{LIST.heading.pre}<em>{LIST.heading.em}</em></>} text={LIST.text} items={LIST.cards} padTop={false} />
      <Stories />
      <FeatureTwoCol
        variant="int"
        heading={INT.heading}
        text={INT.text}
        image={img('68e53e81d90343a0a6ac8eb7_2b8009ba8a1414043a5fd3b0d88bf5e2_marketing-meta-pixel.webp')}
        button={{ label: 'Explore the App Hub', href: 'https://www.teachable.com/app-hub', variant: 'secondary' }}
      />
      <QuickLinksSlider
        heading={QUICK_LINKS.heading}
        text={QUICK_LINKS.text}
        slides={QUICK_LINKS.slides.map((s, i) => ({ ...s, ...SLIDES[i] }))}
      />
      <ProductCta tone="red" header="feature" heading={CTA.heading} text={CTA.text} button={START} />
    </>
  )
}
