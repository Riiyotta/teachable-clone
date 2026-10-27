// Webflow `.global_video-icon` outline play glyph (ai-hub F2). 5rem circle, 1px border, backdrop blur 5px;
// inner 1.5rem square with a left border and two 30deg / -30deg lines forming the triangle (left .25rem).
// tone 'black' = `.is-black` (black strokes); 'white' = the base variant (secondary border colour).
export default function PlayIcon({ tone = 'black', className = '' }) {
  const line = tone === 'black' ? 'border-black' : 'border-white'
  return (
    <div
      className={`relative flex h-[5rem] w-[5rem] cursor-pointer items-center justify-center rounded-full border ${line} [backdrop-filter:blur(5px)] ${className}`}
      aria-hidden="true"
    >
      <div className={`relative left-[.25rem] h-[1.5rem] w-[1.5rem] border-l ${line}`}>
        <div className={`absolute h-px w-full origin-left rotate-[30deg] border-t ${line}`} />
        <div className={`absolute bottom-0 left-0 h-px w-full origin-left rotate-[-30deg] border-t ${line}`} />
      </div>
    </div>
  )
}
