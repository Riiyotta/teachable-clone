// Webflow `w-lightbox` replacement for a single video item (ai-hub F2): full-screen dark backdrop,
// the embed centred at its aspect ratio, a close control top-right. Fades in/out over 300ms (ease).
// Esc, the close button and a backdrop click close it; focus moves to the close button on open and back
// to the trigger on close. Render it only while open: <Lightbox open onClose src w h title />.
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ open, onClose, src, w = 940, h = 529, title = 'Video' }) {
  const [mounted, setMounted] = useState(open)
  const [visible, setVisible] = useState(false)
  const closeRef = useRef(null)
  const lastFocus = useRef(null)

  useEffect(() => {
    if (open) {
      lastFocus.current = document.activeElement
      setMounted(true)
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
      return () => cancelAnimationFrame(id)
    }
    setVisible(false)
    const t = setTimeout(() => {
      setMounted(false)
      lastFocus.current?.focus?.()
    }, 300)
    return () => clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!mounted) return
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        e.preventDefault()
        closeRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [mounted, onClose])

  if (!mounted) return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className={`fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 [transition:opacity_300ms_ease] ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-0 top-0 flex h-[2.6em] w-[4em] items-center justify-center text-white opacity-60 hover:opacity-100"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[min(90vw,calc(86vh*var(--lb-ratio)))]"
        style={{ '--lb-ratio': w / h, aspectRatio: `${w} / ${h}` }}
      >
        <iframe
          src={src}
          title={title}
          width={w}
          height={h}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>,
    document.body
  )
}
