// payments.md §3 `section.section_video_focus`: centred eyebrow over a rounded 16:9 video (external embed),
// then a transparent `.button-primary-new` (label scales 1.02 on hover, M6). Static otherwise.
//
// eyebrow: node. video: { src, title } (iframe) or omit src for a 16:9 placeholder. button: { label, href }.
import { Btn } from '../../sections/parts.jsx'

export default function VideoFeature({ eyebrow, video, button }) {
  return (
    <section className="flex items-center justify-center px-8 md:pb-24 sm:pb-16">
      <div className="container-large">
        <div className="flex flex-col items-center justify-between gap-16 md:gap-8">
          <div className="relative flex w-full max-w-[58rem] flex-col items-center justify-start gap-6 pt-12 text-center sm:gap-4">
            {/* `.eyebrow-wrp`: like SectionTag but a fixed 1rem (no 4vw step at ≤479) */}
            <div className="flex items-center justify-start gap-2 text-[1rem] font-semibold uppercase">
              <div>{eyebrow}</div>
            </div>
            <div className="w-full overflow-hidden rounded-md">
              {video?.src ? (
                <iframe
                  src={video.src}
                  title={video.title ?? ''}
                  allow="autoplay; fullscreen"
                  scrolling="no"
                  className="inline aspect-[1920/1080] h-full w-full border-0 align-baseline"
                />
              ) : (
                <div className="aspect-[1920/1080] w-full bg-placeholder" />
              )}
            </div>
          </div>
          {button && <Btn variant="primary" className="bg-transparent" {...button} />}
        </div>
      </div>
    </section>
  )
}
