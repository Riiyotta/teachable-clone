// pricing.md §1 motion P2 (`.fb-tip`): one body-level fixed tooltip shared by every trigger.
// Max-width 260px, padding 8px 12px, radius 6px, bg #1a1a1a, white 13px / 1.4, z 99999, pointer-events none.
// Hidden: opacity 0 + translateY(4px); visible: opacity 1 + translateY(0); opacity/transform .15s ease.
// Shows 50ms after mouseover / focusin / touchstart; prefers above (8px gap), flips below if top < 4,
// centred and clamped to [4, innerWidth - width - 4]. Hides on mouseout, focusout, scroll, resize; a tap on
// the same trigger toggles it.
import { useEffect, useRef } from 'react'

let tip = null
let users = 0
let current = null
let timer = null

function hide() {
  clearTimeout(timer)
  current = null
  tip?.classList.remove('opacity-100', 'translate-y-0')
  tip?.classList.add('opacity-0', 'translate-y-[4px]')
}

function show(el, message, delay) {
  clearTimeout(timer)
  timer = setTimeout(() => {
    current = el
    tip.textContent = message
    tip.style.left = '0px'
    tip.style.top = '0px'
    const r = el.getBoundingClientRect()
    const t = tip.getBoundingClientRect()
    const gap = 8
    let top = r.top - t.height - gap
    if (top < 4) top = r.bottom + gap
    let left = r.left + r.width / 2 - t.width / 2
    left = Math.max(4, Math.min(left, window.innerWidth - t.width - 4))
    tip.style.top = top + 'px'
    tip.style.left = left + 'px'
    tip.classList.remove('opacity-0', 'translate-y-[4px]')
    tip.classList.add('opacity-100', 'translate-y-0')
  }, delay)
}

function mount() {
  if (users++ > 0) return
  tip = document.createElement('div')
  tip.setAttribute('role', 'tooltip')
  tip.className =
    'pointer-events-none fixed z-[99999] max-w-[260px] rounded-[6px] bg-tooltip px-[12px] py-[8px] text-[13px] leading-[1.4] text-white opacity-0 translate-y-[4px] [transition:opacity_.15s_ease,transform_.15s_ease]'
  document.body.appendChild(tip)
  window.addEventListener('scroll', hide, { passive: true })
  window.addEventListener('resize', hide)
}

function unmount() {
  if (--users > 0) return
  clearTimeout(timer)
  window.removeEventListener('scroll', hide)
  window.removeEventListener('resize', hide)
  tip?.remove()
  tip = null
  current = null
}

// Wraps any trigger. `as` sets the wrapper tag; className styles it (the wrapper is the hover target).
export default function Tooltip({ message, delay = 50, as: Tag = 'span', className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    mount()
    const el = ref.current
    const onTouch = () => (current === el ? hide() : show(el, message, delay))
    el.addEventListener('touchstart', onTouch, { passive: true })
    return () => {
      el.removeEventListener('touchstart', onTouch)
      if (current === el) hide()
      unmount()
    }
  }, [message, delay])

  return (
    <Tag
      ref={ref}
      tabIndex={0}
      aria-label={message}
      onMouseOver={() => show(ref.current, message, delay)}
      onMouseOut={(e) => {
        if (!ref.current.contains(e.relatedTarget)) hide()
      }}
      onFocus={() => show(ref.current, message, delay)}
      onBlur={hide}
      className={className}
    >
      {children}
    </Tag>
  )
}

// `.global_tooltip-wrp` > `.tooltip-icon`: 1rem question circle, opacity .5, top .05rem, flex none.
export function TooltipIcon({ message, className = '' }) {
  return (
    <Tooltip message={message} className={`relative top-[.05rem] flex h-4 w-4 flex-none opacity-50 ${className}`}>
      <span className="flex h-full w-full items-center justify-center" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 22 22" fill="none">
          <path
            d="M9 9.5V9C9 7.89543 9.89543 7 11 7C12.1046 7 13 7.89543 13 9V9.12132C13 9.68393 12.7765 10.2235 12.3787 10.6213L11 12M11.5 15C11.5 15.2761 11.2761 15.5 11 15.5C10.7239 15.5 10.5 15.2761 10.5 15M11.5 15C11.5 14.7239 11.2761 14.5 11 14.5C10.7239 14.5 10.5 14.7239 10.5 15M11.5 15H10.5M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Tooltip>
  )
}
