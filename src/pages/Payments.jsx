import SplitHero from '../components/sections/SplitHero.jsx'
import WhyCards from '../components/WhyCards.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import LogoMarquee from '../components/sections/LogoMarquee.jsx'
import SalesForm from '../components/sections/SalesForm.jsx'
import Faq from '../components/Faq.jsx'
import TestimonialSlider from '../components/pages/payments/TestimonialSlider.jsx'
import VideoFeature from '../components/pages/payments/VideoFeature.jsx'
import CompareTable from '../components/pages/payments/CompareTable.jsx'
import * as c from '../content/payments.js'

// Content arrays with a { strong } middle part → nodes
const rich = (parts, Tag = 'strong') =>
  parts.map((p, i) => (i % 2 === 1 ? <Tag key={i}>{p}</Tag> : p))

// /payments (specs/payments.md)
export default function Payments() {
  return (
    <>
      <SplitHero
        tone="light"
        heading={rich(c.HERO.h1, 'em')}
        text={c.HERO.text}
        buttonLayout="row"
        buttons={[
          { label: 'Start for free', href: c.SIGN_UP },
          { label: 'Talk to our team', href: '#talk-to-team', variant: 'primary-white' },
        ]}
        media={{ type: 'image', ...c.HERO.image }}
      />
      <TestimonialSlider
        quoteIcon={{ src: '/assets/689d06ccf7eea453b43bcb38_teachable-quotemark-dark.svg', alt: '' }}
        slides={c.TESTIMONIALS.map((s) => ({ ...s, quote: Array.isArray(s.quote) ? rich(s.quote) : s.quote }))}
      />
      <VideoFeature
        eyebrow={c.VIDEO.eyebrow}
        video={{ src: c.VIDEO.src, title: c.VIDEO.title }}
        button={{ label: 'Talk to our team', href: '#talk-to-team' }}
      />
      <CompareTable
        heading={c.COMPARE.h2}
        columns={c.COMPARE.columns}
        rows={c.COMPARE.rows}
        button={{ label: 'Start for free', href: c.SIGN_UP }}
      />
      <WhyCards overlap={false} titleTag="h2" header={c.FEATURES_1.header} rows={c.FEATURES_1.rows} />
      <ProductCta
        layout="split"
        heading={c.MIGRATE.h2}
        text={rich(c.MIGRATE.text)}
        button={{ variant: 'primary-white', label: 'See migration offer', href: 'https://www.teachable.com/migrate?src=section_banner' }}
      />
      <WhyCards overlap={false} titleTag="h2" rows={c.FEATURES_2} />
      <LogoMarquee
        variant="tiles"
        heading={rich(c.LOGOS.h2, 'em')}
        text={c.LOGOS.text}
        button={{ label: 'Start for free', href: c.SIGN_UP }}
        rows={[{ logos: c.LOGOS.row1 }, { logos: c.LOGOS.row2, reverse: true }]}
      />
      <SalesForm variant="payments" align="left" heading={c.FORM_H2} paragraphs={[c.FORM_TEXT]} anchorId="talk-to-team" form={c.FORM} />
      <Faq heading={c.FAQ_HEADING} items={c.FAQ} />
    </>
  )
}
