// ai-hub F2 `section.section_video-review`: grey band; left = 12rem round thumbnail + play icon and caption,
// right = quote mark, 2rem quote, attribution. The play icon opens a Vimeo <Lightbox/> (Webflow w-lightbox).
//
// thumb: { src, alt }. caption: node (the duration goes in `duration`, rendered bold, top -.175rem, after a
// line break). quote: node (may contain <strong>). attribution: node. quoteIcon: { src, alt }.
// video: { src, w, h, title } (iframe src, e.g. https://player.vimeo.com/video/<id>).
import { useCallback, useState } from 'react'
import PlayIcon from '../shared/PlayIcon.jsx'
import Lightbox from '../shared/Lightbox.jsx'

export default function VideoReview({ thumb, caption, duration, quote, attribution, quoteIcon, video }) {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  return (
    <section className="bg-grey-light">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="grid grid-cols-[.5fr_1fr] gap-16 md:grid-cols-1 md:gap-8">
            <div className="relative grid grid-cols-2 items-center justify-start gap-0 text-regular md:flex md:items-center md:justify-center md:gap-8 xs:flex-col xs:gap-0">
              <div className="h-auto w-[12rem] overflow-hidden rounded-full sm:w-[10rem]">
                <img src={thumb.src} alt={thumb.alt ?? ''} width="230" height="230" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col items-start justify-center gap-2 xs:mt-[-1rem] xs:items-center xs:justify-start xs:text-center">
                <a
                  href={video.src}
                  data-anim="F2-lightbox-open"
                  aria-label={video.title ?? 'Play video'}
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(true)
                  }}
                  className="flex items-center justify-center"
                >
                  <PlayIcon tone="black" />
                </a>
                <div>
                  {caption}
                  {duration && (
                    <>
                      <br />
                      <span className="relative top-[-.175rem] inline-block font-bold">{duration}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-start justify-center gap-4 md:items-center md:justify-start md:text-center">
              <img src={quoteIcon.src} alt={quoteIcon.alt ?? ''} width="61" height="50" loading="lazy" className="h-auto w-12" />
              <div className="text-[2rem] sm:text-[1.5rem] xs:text-[7vw]">{quote}</div>
              <div>{attribution}</div>
            </div>
          </div>
        </div>
      </div>
      <Lightbox open={open} onClose={close} src={video.src} w={video.w} h={video.h} title={video.title} />
    </section>
  )
}
