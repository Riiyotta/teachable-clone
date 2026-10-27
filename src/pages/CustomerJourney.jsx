import Faq from '../components/Faq.jsx'
import ProductHero from '../components/sections/ProductHero.jsx'
import FeatureWhy from '../components/sections/FeatureWhy.jsx'
import Steps from '../components/sections/Steps.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import Glyph from '../components/shared/Glyph.jsx'
import { faqItems } from '../components/pages/faqAnswer.jsx'
import * as c from '../content/customer-journey.js'

const ANCHOR = '#tiers-and-perks'

// /customer-journey (specs/customer-journey.md). Product-page sections; no Halloween banner.
// The live `section_product-blog` and `section_product-cta.padding-0` are empty (0px), so they are omitted.
export default function CustomerJourney() {
  return (
    <>
      <ProductHero
        top="hero"
        tag={
          <>
            — <strong>{c.HERO.tagStrong}</strong>
          </>
        }
        heading={
          <>
            {c.HERO.h1.a}
            <Glyph variant="h1-o" />
            {c.HERO.h1.b}
            <Glyph variant="h1-e" />
            {c.HERO.h1.c}
          </>
        }
        text={c.HERO.intro}
        buttons={[{ label: 'Explore the program', href: ANCHOR, variant: 'secondary' }]}
        image={{ src: '/assets/6983a59119d93770e2e10364_2674bac7db10d7d5fa0d9a4f5c672888_London-1.webp', w: 1136, h: 1136 }}
      />
      <FeatureWhy
        tone="gold"
        size="small"
        heading={c.WHY.phrases.map((p, i) => (
          <span key={i}>
            <em>{c.WHY.lead}</em>
            {p}
          </span>
        ))}
        text={c.WHY.text}
      />
      <Steps
        variant="tiers"
        headerId="tiers-and-perks"
        heading={
          <>
            {c.TIERS.heading.pre}
            <Glyph />
            {c.TIERS.heading.post}
          </>
        }
        items={c.TIERS.items.map((t, i) => ({
          ...t,
          bullets: t.bullets.map((b) => (
            <>
              {b.lead && <strong>{b.lead}</strong>}
              {b.text}
            </>
          )),
          button: i === 0 ? { label: 'Explore events', href: 'https://www.teachable.com/events', variant: 'secondary' } : undefined,
          note: t.note && (
            <>
              {t.note.pre}
              <a href="https://teachable.typeform.com/to/fcdyz2cS">{t.note.link}</a>
              {t.note.post}
            </>
          ),
        }))}
      />
      <Faq padTop={false} heading={c.FAQ.heading} items={faqItems(c.FAQ.items)} />
      <ProductCta
        tone="black"
        header="none"
        padTop={false}
        heading={c.CTA.heading}
        text={c.CTA.text}
        button={{ label: 'See tiers + rewards', href: ANCHOR, variant: 'secondary' }}
      />
    </>
  )
}
