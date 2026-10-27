// enterprise §3 `section_enterprise-demo#watch-demo` (`.watch-demo_wrp.is-enterprise`). Desktop only:
// display none at ≤991. Navy card (padding 3rem, gap 1rem): eyebrow row, then a 50% text column
// (absolute, 22rem tall) beside a 50% Storylane embed covered by a thumbnail.
//
// Motion E-M3 / E-M4 (from the inline script): on the first pointerdown on the embed, or a window blur
// while the iframe has focus, the text fades out (.2s), the embed widens 50% → 100% (.5s ease) and the
// "Collapse" control appears; the thumbnail fades out (.3s ease) once the width has settled (700ms).
// "Collapse" resets everything (same transitions in reverse).
//
// tag, heading, text, collapseLabel: nodes. iframe: Storylane src (omit to keep just the thumbnail as a
// placeholder). thumbnail: { src, alt, w, h }. id: section id (enterprise uses 'watch-demo').
import { useCallback, useEffect, useRef, useState } from 'react'
import SectionTag from '../shared/SectionTag.jsx'

export default function DemoEmbed({ id, tag, heading, text, collapseLabel, iframe, thumbnail }) {
  const [expanded, setExpanded] = useState(false)
  const [thumbHidden, setThumbHidden] = useState(false)
  const iframeRef = useRef(null)
  const timer = useRef(null)

  const expand = useCallback(() => {
    setExpanded((was) => {
      if (!was) {
        clearTimeout(timer.current)
        timer.current = setTimeout(() => setThumbHidden(true), 700)
      }
      return true
    })
  }, [])

  const collapse = () => {
    clearTimeout(timer.current)
    setExpanded(false)
    setThumbHidden(false)
  }

  useEffect(() => {
    const onBlur = () =>
      setTimeout(() => {
        if (iframeRef.current && document.activeElement === iframeRef.current) expand()
      }, 0)
    window.addEventListener('blur', onBlur)
    return () => {
      window.removeEventListener('blur', onBlur)
      clearTimeout(timer.current)
    }
  }, [expand])

  return (
    <section id={id} className="relative overflow-hidden py-section-large text-white md:hidden">
      <div className="padding-global">
        <div className="container-large">
          <div className="relative flex flex-col items-end justify-start gap-4 overflow-hidden rounded-md bg-navy p-12">
            <div className="flex w-full items-center justify-between">
              <SectionTag>{tag}</SectionTag>
              <div className={`${expanded ? 'flex' : 'hidden'} items-center justify-end`}>
                <button
                  type="button"
                  onClick={collapse}
                  data-anim="E-M4-demo-collapse"
                  className="flex cursor-pointer items-center justify-end gap-2 text-[1rem]"
                >
                  <div>{collapseLabel}</div>
                  <div aria-hidden="true" className="flex">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M0 8a.5.5 0 0 1 .5-.5h3.793L3.146 6.354a.5.5 0 1 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8.5H.5A.5.5 0 0 1 0 8m11.707.5 1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L11.707 7.5H15.5a.5.5 0 0 1 0 1z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="relative flex w-full flex-row items-stretch justify-end">
              <div
                className={`absolute left-0 top-0 flex h-[22rem] w-1/2 flex-col items-start justify-center gap-4 overflow-hidden pr-16 [transition:opacity_.2s] ${
                  expanded ? 'opacity-0' : ''
                }`}
              >
                <h2 className="text-white">{heading}</h2>
                <p>{text}</p>
              </div>
              <div
                data-anim="E-M3-demo-expand"
                onPointerDown={expand}
                className={`relative z-[1] flex h-auto flex-col items-end justify-start [transition:width_.5s_ease] ${
                  expanded ? 'w-full' : 'w-1/2'
                }`}
              >
                <div className="relative flex h-auto w-full items-start justify-end [transition:all_.3s]">
                  <div className="relative h-0 w-full pb-[calc(46.72%+25px)]">
                    {iframe && (
                      <iframe
                        ref={iframeRef}
                        src={iframe}
                        title={typeof heading === 'string' ? heading : 'Product demo'}
                        loading="lazy"
                        allow="fullscreen"
                        allowFullScreen
                        className="absolute inset-0 box-border h-full w-full rounded-[10px] border border-embed-border shadow-embed"
                      />
                    )}
                  </div>
                </div>
                <img
                  src={thumbnail.src}
                  alt={thumbnail.alt ?? ''}
                  width={thumbnail.w}
                  height={thumbnail.h}
                  loading="lazy"
                  className={`pointer-events-none absolute inset-0 h-full w-full rounded-[.625rem] object-cover ${
                    thumbHidden ? 'opacity-0 [transition:opacity_.3s_ease]' : '[transition:all_.2s]'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
