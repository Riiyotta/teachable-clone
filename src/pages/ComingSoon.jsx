import { useLocation } from 'react-router-dom'

export default function ComingSoon() {
  const { pathname } = useLocation()
  return (
    <section className="padding-global padding-section-large pt-hero-top">
      <div className="container-medium">
        <h1 className="heading-style-h2">{pathname} is being built</h1>
      </div>
    </section>
  )
}
