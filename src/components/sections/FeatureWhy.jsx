// feature-template.md T3 `section_feature-why` and customer-journey.md §2 `section_product-why`
// (same `.feature-why_*` grid; gold background).
//
// size:   'large' = 6rem display heading; 'small' = `.is-smaller` 4rem (mobile-app, customer-journey)
// narrow: `.is-analytics` heading width 65% (100% ≤991, 75% ≤479), analytics only
// tone:   'yellow' (#e6ff32) | 'gold' (#ffd700)
// pill:   text for the black `.feature-why_subheading-wrp` pill (mobile-app). Pass it in the case you
//         want shown; the class has no text-transform
// icon:   true = the black 3rem circle with the yellow Teachable glyph (analytics, sales)
export default function FeatureWhy({ heading, text, size = 'large', narrow = false, tone = 'yellow', pill, icon = false }) {
  return (
    <section className={`relative overflow-hidden ${tone === 'gold' ? 'bg-gold' : 'bg-yellow'}`}>
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="grid grid-cols-2 items-center justify-items-stretch gap-12 md:grid-cols-1 md:gap-8">
            <div className="flex flex-col items-start justify-start gap-8 md:pr-8">
              <h2
                className={`${size === 'small' ? 'text-display-why-sm' : 'text-display-why'} ${
                  narrow ? 'w-[65%] md:w-full xs:w-[75%]' : ''
                }`}
              >
                {heading}
              </h2>
            </div>
            <div className="flex flex-col items-start justify-center gap-6 pl-16 pt-6 md:p-0 sm:gap-4">
              {pill && (
                <div className="flex items-center justify-start rounded-full bg-black px-[1.25rem] pb-[.5rem] pt-[.4rem] text-regular font-bold text-yellow">
                  <div>{pill}</div>
                </div>
              )}
              {icon && (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black p-4 text-yellow">
                  <div className="flex w-full items-center justify-center">
                    <WhyIcon />
                  </div>
                </div>
              )}
              <p className="text-body">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// `.feature-why_icon` (viewBox 0 0 133 205), from _snapshot/pages/analytics-and-reporting/index.html
function WhyIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 133 205" fill="none" aria-hidden="true">
      <path
        d="M89.9202 88.0676C92.9018 78.3594 95.4326 70.9648 97.248 66.1931L70.1943 55.924C69.9586 56.5467 68.1308 61.372 65.2526 70.1853C54.7487 61.7761 48.7069 54.6579 50.5182 48.1747C51.7836 43.6546 53.7479 42.3184 55.6833 41.5554C64.8928 37.9056 82.6708 44.0505 89.887 46.8591C103.43 52.1339 114.422 58.7119 114.534 58.7779L122.007 46.4384L129.508 34.0742C129.111 33.835 121.783 29.4346 111.317 24.6134C113.12 19.8748 115.026 15.1609 116.469 11.7584L103.141 6.12898L89.8126 0.499512C89.3081 1.68314 86.7938 7.64667 84.143 14.6453C68.5154 10.5996 55.4062 10.6161 45.0264 14.7155C33.8443 19.1324 26.1028 28.02 22.6332 40.4213C18.7212 54.4063 22.6539 68.0449 34.3281 80.9576C40.4071 87.6799 48.2065 93.8373 56.3491 99.7348C52.1971 114.586 47.4497 133.074 42.6072 155.011C26.4254 149.34 13.8001 142.779 13.6719 142.713L0.207031 168.27C0.872829 168.616 16.6535 176.844 36.677 183.5C35.6721 188.631 34.6714 193.902 33.6789 199.317L62.1552 204.501C63.0195 199.77 63.9003 195.135 64.7894 190.586C70.7278 191.526 76.3147 192.009 81.5336 192.009C90.5032 192.009 98.4018 190.615 105.18 187.831C117.317 182.841 125.873 173.438 129.922 160.628C135.199 143.921 131.406 127.812 118.649 112.755C110.808 103.504 100.478 95.5818 89.9243 88.0676H89.9202ZM102.31 151.951C100.829 156.644 98.3894 159.391 94.1631 161.131C90.5322 162.624 83.3945 164.171 70.6616 162.306C74.3214 145.707 78.0061 130.744 81.4674 117.712C87.319 122.195 92.6123 126.756 96.5368 131.384C104.415 140.679 103.877 146.993 102.31 151.947V151.951Z"
        fill="currentColor"
      />
    </svg>
  )
}
