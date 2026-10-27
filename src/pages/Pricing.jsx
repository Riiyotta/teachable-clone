import PlanCards from '../components/pages/pricing/PlanCards.jsx'
import PlanComparison from '../components/pages/pricing/PlanComparison.jsx'
import FeeDropdowns from '../components/pages/pricing/FeeDropdowns.jsx'
import ExitModal from '../components/pages/pricing/ExitModal.jsx'
import Stories from '../components/Stories.jsx'
import Faq from '../components/Faq.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import * as c from '../content/pricing.js'

// /pricing (specs/pricing.md): hero + plan cards, comparison matrix, fees, stories, FAQ, CTA, exit modal.
export default function Pricing() {
  return (
    <>
      <PlanCards heading={c.PRICING_H1} intro={c.PRICING_INTRO} plans={c.PLANS} custom={c.CUSTOM_PLAN} />
      <PlanComparison plans={c.MATRIX_PLANS} groups={c.MATRIX} />
      <FeeDropdowns
        heading={c.FEES_H2}
        columns={c.FEES}
        note={c.FEES_NOTE.map((part, i) =>
          typeof part === 'string' ? (
            part
          ) : (
            <a key={i} href={part.href} className="underline">
              {part.label}
            </a>
          ),
        )}
      />
      <Stories />
      <Faq heading={c.PRICING_FAQ_HEADING} items={c.PRICING_FAQ} />
      <ProductCta
        header="product"
        heading={c.PRICING_CTA_H2}
        text={c.PRICING_CTA_TEXT}
        padTop={false}
        button={{ label: 'Start for free', href: c.CTA_SIGN_UP }}
      />
      <ExitModal {...c.EXIT_MODAL} />
    </>
  )
}
