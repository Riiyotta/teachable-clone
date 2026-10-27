import SimpleHero from '../components/pages/examples/SimpleHero.jsx'
import ExamplesTabs from '../components/pages/examples/ExamplesTabs.jsx'
import LogoRow from '../components/pages/examples/LogoRow.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import * as c from '../content/examples.js'

// /examples (specs/examples.md)
export default function Examples() {
  return (
    <>
      <SimpleHero heading={c.HERO_H1} />
      <ExamplesTabs tabs={c.TABS} />
      <LogoRow text={c.LEADERS_TEXT} logos={c.LEADERS} />
      <ProductCta
        heading={
          <>
            {c.CTA_LINES[0]}
            <br />
            {c.CTA_LINES[1]}
          </>
        }
        padTop={false}
        button={{ variant: 'primary', label: 'Explore Demo', href: 'https://www.teachable.com/watch-demo' }}
      />
    </>
  )
}
