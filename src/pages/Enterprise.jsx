import SplitHero from '../components/sections/SplitHero.jsx'
import LogoMarquee from '../components/sections/LogoMarquee.jsx'
import Teach from '../components/Teach.jsx'
import DemoEmbed from '../components/sections/DemoEmbed.jsx'
import FeatureList from '../components/sections/FeatureList.jsx'
import SalesForm from '../components/sections/SalesForm.jsx'
import ImageFeatureGrid from '../components/pages/enterprise/ImageFeatureGrid.jsx'
import QuoteBanner from '../components/pages/enterprise/QuoteBanner.jsx'
import * as c from '../content/enterprise.js'

// /enterprise (specs/enterprise.md)
export default function Enterprise() {
  return (
    <>
      <SplitHero
        tag={c.HERO.tag}
        heading={c.HERO.h1}
        text={c.HERO.text}
        media={{ type: 'iframe', src: c.HERO.video, title: 'Product video' }}
        buttons={[
          { label: 'Talk to our team', href: '#talk-to-team', variant: 'enterprise-primary' },
          { label: 'See it in action', href: '#watch-demo', variant: 'enterprise-secondary' },
        ]}
        marquee={<LogoMarquee rows={[{ logos: c.HERO_LOGOS }]} />}
      />
      <Teach skin="enterprise" heading={c.BUILT_H2} text={null} button={null} cards={c.BUILT_CARDS} />
      <DemoEmbed id="watch-demo" {...c.DEMO} heading={c.DEMO.h2} collapseLabel="Collapse" />
      <FeatureList skin="white" id="form-submit" heading={c.WORK_H2} items={c.WORK_CARDS} />
      <ImageFeatureGrid
        heading={c.FOUNDATION.h2}
        text={c.FOUNDATION.text}
        image={c.FOUNDATION.image}
        items={c.FOUNDATION.items}
        button={c.FOUNDATION.button}
      />
      <QuoteBanner
        logo={<img src={c.QUOTE.logo.src} alt={c.QUOTE.logo.alt} width={c.QUOTE.logo.w} height={c.QUOTE.logo.h} loading="lazy" className="h-auto w-full" />}
        quote={c.QUOTE.quote}
        attribution={c.QUOTE.attribution}
      />
      <FeatureList skin="badges" heading={c.BADGES_H2} items={c.BADGES} />
      <SalesForm heading={c.FORM_H2} paragraphs={[c.FORM_TEXT]} anchorId="talk-to-team" form={c.FORM} />
    </>
  )
}
