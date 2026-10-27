import { useEffect, useRef } from 'react'
import Glyph from '../shared/Glyph.jsx'

// §11 flag assets (order = .is-1 … .is-9)
export const FLAG = {
  us: '/assets/68d2c6d5b0fc8c729f84c732_2fe4c7e35a3ebbafd940ad130fb84c11_teachable-flag-us.svg',
  it: '/assets/68d2c6d5edeb18f3aa7e6648_teachable-flag-it.svg',
  ae: '/assets/68d2c6d5aa321b1ddf67748f_teachable-flag-ae.svg',
  fr: '/assets/68d2c6d5f2f2058a2589834f_teachable-flag-fr.svg',
  es: '/assets/68d2c6d5e5a86118515ff805_teachable-flag-es.svg',
  de: '/assets/68d2c6d5fe2e5883e6d7fc92_teachable-flag-de.svg',
  ja: '/assets/68d2c6d5f08fdd7fd0a7772e_teachable-flag-ja.svg',
  gb: '/assets/68d2c6d5347ef46d02bff6ba_teachable-flag-gb.svg',
  au: '/assets/68d2c6d50cd7ef0deab5f723_teachable-flag-au.svg',
}

// §11 `.scale_heading` (5rem → 3.5rem ≤991 → 2.5rem ≤767 → 10vw ≤479), h1 line-height
export const SCALE_HEADING =
  'font-heading font-normal text-[5rem] leading-[var(--lh-h1)] md:text-[3.5rem] sm:text-[2.5rem] xs:text-[10vw]'

// §11 `.span_h2-o`: now the shared <Glyph/> (src/components/shared/Glyph.jsx). Kept as an alias for the scale headings.
const O_VARIANT = { default: 'h2-o', international: 'h2-o-international', video: 'h2-o-video' }
export function GlyphO({ variant = 'default' }) {
  return <Glyph variant={O_VARIANT[variant]} />
}

// §11 motion 5 (M21): one shared cycle — English first, then the rest shuffled (inline script).
const TRANSLATIONS = ['and translation', 'and traducción', 'and ترجمة', 'and traduction', 'and traduzione', 'and Übersetzung']
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
const CYCLE = [TRANSLATIONS[0]].concat(shuffle(TRANSLATIONS.slice(1)))
const FADE = 600
const WORD_DELAY = 800

export function LanguageText() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    let index = 1
    let timer
    const update = () => {
      el.style.opacity = '0'
      timer = setTimeout(() => {
        el.textContent = CYCLE[index]
        el.style.opacity = '1'
        index = (index + 1) % CYCLE.length
        timer = setTimeout(update, WORD_DELAY)
      }, FADE)
    }
    timer = setTimeout(update, WORD_DELAY)
    return () => clearTimeout(timer)
  }, [])
  return (
    <span
      ref={ref}
      data-anim="M21-language-word"
      className="inline-block whitespace-nowrap text-center transition-opacity duration-[600ms] ease-[ease-in-out]"
    >
      {CYCLE[0]}
    </span>
  )
}
