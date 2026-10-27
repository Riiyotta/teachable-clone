import FeatureHero from '../components/sections/FeatureHero.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import Glyph from '../components/shared/Glyph.jsx'
import AppDirectory from '../components/pages/app-hub/AppDirectory.jsx'
import { HERO, TABS, FOOTNOTE, CTA } from '../content/app-hub.js'

// /app-hub (specs/app-hub.md): hero (no bottom padding, login line) · app directory tabs · red cta with login line.
const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'
const SIGN_IN = 'https://sso.teachable.com/secure/teachable_accounts/sign_in'
const START = { label: 'Start for free', href: SIGN_UP }
const intro = HERO.intro

export default function AppHub() {
  return (
    <>
      <FeatureHero
        tag={HERO.tag}
        padBottom={false}
        heading={<>{HERO.h1.pre}<Glyph variant="h1-o" />{HERO.h1.post}</>}
        text={<><strong>{intro.strong}</strong>{intro.text}<em>{intro.em}</em>{intro.end}</>}
        button={START}
        image={{ src: '/assets/68e52f30cddfb3ef98be880b_115157c9f8625f15d85454aaceeed7a6_ai-hub-hero.webp', w: 540, h: 720 }}
        login={{ ...HERO.login, href: SIGN_IN }}
      />
      <AppDirectory tabs={TABS} footnote={FOOTNOTE} />
      <ProductCta
        tone="red"
        header="feature"
        heading={CTA.heading}
        text={CTA.text}
        padTop={false}
        button={START}
        login={{ ...CTA.login, href: SIGN_IN }}
      />
    </>
  )
}
