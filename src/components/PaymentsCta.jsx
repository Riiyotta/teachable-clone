// CLONE_SPEC §8 — Payments CTA
const LINES = [
  '→ Sell globally with 35+ local payment methods and checkout experiences.',
  '→ Automate taxes with sales tax, VAT, and GST handled across 45+ countries',
  '→ Capture more revenue with lower fees and built-in subscription recovery.',
]

export default function PaymentsCta() {
  return (
    <section className="section_payments-cta block px-global pb-section-large sm:px-0 sm:pb-0">
      <div className="container-large">
        <div className="grid grid-cols-[1.5fr_1fr] overflow-hidden rounded-lg bg-payments-cta pl-12 pr-8 md:grid-cols-[1.5fr] sm:rounded-none sm:px-global">
          <div className="flex flex-col items-start justify-center gap-4 py-16 md:pb-8 sm:pb-4 xs:pb-8">
            <div className="flex items-center justify-center gap-1 rounded-[.4rem] bg-white px-4 py-[.65rem] text-small font-semibold uppercase">
              <img
                src="/assets/6a479058f9d4bebff3e9174e_material-icon-refresh-black.svg"
                alt=""
                width="12"
                height="12"
                loading="lazy"
                className="flex h-auto w-[.75rem] flex-none"
              />
              <div>Product Update</div>
            </div>
            <h2 className="heading-style-h3">Teachable Payments: the checkout you've been waiting for</h2>
            <ul role="list" className="list-none pl-0">
              {LINES.map((l) => (
                <li key={l}>
                  <div>{l}</div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a href="https://www.teachable.com/payments" className="btn-arrow">
                <div>Discover what’s new</div>
                <div className="btn-arrow__circle">
                  <div className="btn-arrow__icon">
                    <svg width="100%" viewBox="0 0 13 12" fill="none" aria-hidden="true">
                      <path
                        d="M12.7656 6.16705C13.0745 5.87022 13.0759 5.38761 12.7687 5.08911L7.76258 0.224769C7.45537 -0.0737306 6.95588 -0.075093 6.64694 0.221726C6.33802 0.518548 6.3366 1.00115 6.64381 1.29965L11.0937 5.62352L6.61859 9.92304C6.30967 10.2198 6.30825 10.7024 6.61546 11.001C6.92265 11.2995 7.42213 11.3008 7.73108 11.004L12.7656 6.16705ZM0.00222699 5.59326L0 6.35547L12.2071 6.38877L12.2093 5.62656L12.2115 4.86435L0.00445397 4.83105L0.00222699 5.59326Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-end">
            <img
              src="/assets/6a4e8423b9ebadf800b9ce5b_payments_banner_2x.webp"
              alt=""
              width="520"
              height="360"
              loading="lazy"
              className="h-auto w-[32rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
