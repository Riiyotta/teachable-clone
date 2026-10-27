import HalloweenBanner from '../components/HalloweenBanner.jsx'
import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import DemoCta from '../components/DemoCta.jsx'
import Teach from '../components/Teach.jsx'
import PaymentsCta from '../components/PaymentsCta.jsx'
import WhyScroll from '../components/WhyScroll.jsx'
import WhyCards from '../components/WhyCards.jsx'
import Scale from '../components/Scale.jsx'
import Smart from '../components/Smart.jsx'
import Stories from '../components/Stories.jsx'
import Pricing from '../components/Pricing.jsx'
import Hub from '../components/Hub.jsx'
import CaseStudy from '../components/CaseStudy.jsx'
import Faq from '../components/Faq.jsx'
import Impact from '../components/Impact.jsx'

// Homepage section order per CLONE_SPEC §0.9.
export default function Home() {
  return (
      <>
        <HalloweenBanner />
        <Hero />
        <Stats />
        <DemoCta />
        <Teach />
        <PaymentsCta />
        <WhyScroll />
        <WhyCards />
        <Scale />
        <Smart />
        <Stories />
        <Pricing />
        <Hub />
        <CaseStudy />
        <Faq />
        <Impact />
      </>
  )
}
