import FeatureHero from '../components/sections/FeatureHero.jsx'
import FeatureWhy from '../components/sections/FeatureWhy.jsx'
import FeatureExplainer from '../components/sections/FeatureExplainer.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import Stories from '../components/Stories.jsx'
import Glyph from '../components/shared/Glyph.jsx'
import { HERO, WHY, EXPLAINER, CTA } from '../content/student-experience.js'

// /student-experience (specs/student-experience.md): hero · why (text only) · explainer · stories · cta.
const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'
const START = { label: 'Start for free', href: SIGN_UP }
const A = '/assets/'
const img = (file) => ({ src: `${A}${file}`, w: 800, h: 800 })

const [row1, row2, row3] = EXPLAINER.rows
const quiz = row2[1].text
const app = row3[1]

export default function StudentExperience() {
  return (
    <>
      <FeatureHero
        tag={HERO.tag}
        heading={<>{HERO.h1.pre}<Glyph variant="h1-e" />{HERO.h1.post}</>}
        text={HERO.intro}
        button={START}
        image={{ src: `${A}68e32bbbd697cbcde513a02e_44457b5af9a67abe60efcd791968cf2d_student-hero.webp`, w: 540, h: 720 }}
      />
      <FeatureWhy heading={WHY.heading} text={WHY.text} />
      <FeatureExplainer
        heading={EXPLAINER.heading}
        text={EXPLAINER.text}
        rows={[
          { image: img('68e32bbb89a5744b2cfb2b44_4163b1b648dd6f629cb4cd18005119c2_student-ui.webp'), items: row1 },
          {
            image: img('68e32bbb1c1656ec77669a05_8abc362844c85c6fb4a6390c2a2a890f_student-coaching.webp'),
            items: [
              row2[0],
              { title: row2[1].title, text: <>{quiz.pre}<a href="https://teachable.com/ai-quiz-generator">{quiz.link}</a>{quiz.post}</> },
            ],
          },
          {
            image: img('68e32bbb8f41907707e17334_2135b0167e18a8b69c966fbd071e6df5_student-compliance-mobile.webp'),
            items: [
              row3[0],
              {
                title: <>{app.title.pre}<a href="https://www.teachable.com/mobile-app">{app.title.link}</a></>,
                text: <>{app.text.pre}<em>{app.text.em}</em>{app.text.post}</>,
              },
            ],
            button: START,
          },
        ]}
      />
      <Stories />
      <ProductCta tone="red" header="none" heading={CTA.heading} padTop={false} button={START} />
    </>
  )
}
