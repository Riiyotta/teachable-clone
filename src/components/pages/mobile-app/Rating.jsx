// feature-template.md T9b `section.section_rating` (mobile-app only): grey band (75% tall, 85% ≤767)
// behind a centred header and 3 white review cards that overhang onto white. No hover, no motion.
//
// heading, text: nodes. cards: [{ by, title, text }] where `by` is the italic reviewer line
// (handle • date); every card shows 5 gold stars.

// `.rating-card_star-icon` (viewBox 0 0 24 23), from _snapshot/pages/mobile-app/index.html
function Star() {
  return (
    <div className="flex h-auto w-[1.25rem] items-center justify-center" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 24 23" fill="none">
        <path
          d="M15.5621 4.44717C14.4311 2.18515 13.8656 1.05414 13.126 0.681032C12.4179 0.323799 11.5822 0.323799 10.874 0.68103C10.1344 1.05413 9.56892 2.18515 8.43791 4.44718C8.13099 5.061 7.97754 5.36791 7.76834 5.60789C7.49876 5.91713 7.15723 6.15528 6.77386 6.30133C6.47635 6.41467 6.14153 6.45187 5.47188 6.52628C3.13977 6.7854 1.97372 6.91496 1.39896 7.38946C0.657283 8.00176 0.332614 8.98524 0.563974 9.91876C0.743268 10.6422 1.61602 11.4526 3.36154 13.0734C3.90529 13.5784 4.17717 13.8308 4.35485 14.1182C4.62987 14.563 4.75847 15.0829 4.72253 15.6047C4.69931 15.9418 4.57828 16.2867 4.33623 16.9765C3.54952 19.2187 3.15617 20.3397 3.30443 21.0286C3.53549 22.1021 4.4401 22.8992 5.53423 22.9933C6.23626 23.0537 7.29889 22.5224 9.42416 21.4598L10.2112 21.0663C10.8671 20.7383 11.195 20.5743 11.539 20.5098C11.8437 20.4526 12.1564 20.4526 12.461 20.5098C12.805 20.5743 13.133 20.7383 13.7889 21.0663L14.5759 21.4598C16.7012 22.5224 17.7638 23.0537 18.4658 22.9933C19.5599 22.8992 20.4646 22.1021 20.6956 21.0286C20.8439 20.3397 20.4505 19.2187 19.6638 16.9765C19.4218 16.2867 19.3007 15.9418 19.2775 15.6047C19.2416 15.0829 19.3702 14.563 19.6452 14.1182C19.8229 13.8308 20.0948 13.5784 20.6385 13.0734C22.384 11.4526 23.2568 10.6422 23.4361 9.91876C23.6674 8.98524 23.3428 8.00176 22.6011 7.38946C22.0263 6.91496 20.8603 6.7854 18.5282 6.52628C17.8585 6.45187 17.5237 6.41467 17.2262 6.30133C16.8428 6.15528 16.5013 5.91713 16.2317 5.60789C16.0225 5.36791 15.8691 5.061 15.5621 4.44717Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default function Rating({ heading, text, cards }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[75%] bg-grey-light sm:h-[85%]" />
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="relative flex flex-col gap-16 md:gap-12 sm:gap-6">
            <div className="flex flex-col items-center justify-start gap-4 text-center">
              <h2>{heading}</h2>
              {text && <p>{text}</p>}
            </div>
            <div className="grid grid-cols-3 gap-8 md:gap-2 sm:grid-cols-2 xs:grid-cols-1">
              {cards.map((c, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-stretch justify-start gap-8 overflow-hidden rounded-md border border-grey-light bg-white p-8 md:gap-6 xs:p-6"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-start gap-2 text-gold">
                      {[0, 1, 2, 3, 4].map((n) => (
                        <Star key={n} />
                      ))}
                    </div>
                    <div className="flex items-center justify-start gap-2 text-[.875rem] md:pr-8">
                      <div>
                        <em>{c.by}</em>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <div className="text-rating-title">{c.title}</div>
                    <div className="text-size-medium">{c.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
