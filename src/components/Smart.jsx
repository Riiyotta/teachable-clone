// CLONE_SPEC §12 AI automations
const CARDS = [
  {
    img: '/assets/692301d70b42ca77c9ed64a4_ai-outline-teachable.webp',
    alt: 'Woman in green shirt using a stylus with AI-generated Spanish course outline on screen nearby.',
    title: 'Course starter',
    text: "You're the expert. Get right to teaching and generate a ready-to-use curriculum in seconds with our AI course starter, designed for easy, bite-sized learning.",
  },
  {
    img: '/assets/6923020ec5ae8e0e680dd555_ai-quiz-teachable.webp',
    alt: 'Quiz generator interface selecting Intro to Español and 3 lessons, with a highlighted Generate questions button.',
    title: 'Quiz generator',
    text: 'Flip your insightful course material into engaging quizzes with our built-in generator that naturally complements and elevates your content.',
  },
  {
    img: '/assets/69230240dd5644a79fd72501_ai-subtitles-teachable.webp',
    alt: 'Video player paused showing a smiling man and video settings menu for auto-generating English subtitles.',
    title: 'Automatic subtitles & translations',
    text: 'Your video content deserves a bigger audience. Expand your reach with auto-generated subtitles and translations in 70+ languages.',
  },
]

// M22 — verbatim from the section's embed (2.5s sweep, 2s hold)
const SHIMMER_CSS = `
.smart-ai-shimmer { animation: smartShimmerMove 4.5s ease infinite; }
@keyframes smartShimmerMove {
  0% { transform: translateX(-100%); }
  45.45% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}`

function Sparkle() {
  return (
    <div className="flex w-[3rem] items-center justify-center text-black [transform:rotateX(0)_rotateY(180deg)_rotate(0)] [transform-style:preserve-3d] sm:w-[2rem] xs:w-[1.75rem]">
      <svg viewBox="0 0 39.907 39.813" fill="currentColor" width="100%" aria-hidden="true">
        <path d="M31.734,22.493l-7.852-2.648c-1.844-.622-3.292-2.07-3.914-3.914l-2.648-7.852c-.345-1.023-1.793-1.023-2.138,0l-2.648,7.852c-.622,1.844-2.07,3.292-3.914,3.914l-7.852,2.648c-1.023.345-1.023,1.793,0,2.138l7.852,2.648c1.844.622,3.292,2.07,3.914,3.914l2.648,7.852c.345,1.023,1.793,1.023,2.138,0l2.648-7.852c.622-1.844,2.07-3.292,3.914-3.914l7.852-2.648c1.023-.345,1.023-1.793,0-2.138Z" />
        <path d="M39.503,7.988l-4.132-1.393c-.97-.327-1.732-1.089-2.059-2.059l-1.393-4.132c-.182-.539-.943-.539-1.125,0l-1.393,4.132c-.327.97-1.089,1.732-2.059,2.059l-4.132,1.393c-.539.182-.539.943,0,1.125l4.132,1.393c.97.327,1.732,1.089,2.059,2.059l1.393,4.132c.182.539.943.539,1.125,0l1.393-4.132c.327-.97,1.089-1.732,2.059-2.059l4.132-1.393c.539-.182.539-.943,0-1.125Z" />
      </svg>
    </div>
  )
}

export default function Smart() {
  return (
    <section className="relative overflow-hidden bg-white">
      <style>{SHIMMER_CSS}</style>
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="relative flex flex-col gap-[4rem] overflow-hidden md:gap-[2rem] sm:gap-[1.5rem]">
            <div className="relative flex flex-row items-center justify-between gap-[4rem] md:flex-col md:items-start md:gap-[1.5rem] md:pb-[2rem]">
              <div className="flex flex-col items-start justify-start">
                <div className="relative flex items-center justify-start gap-[.5rem] overflow-hidden">
                  <h2 className="text-[4rem] sm:text-[3rem] xs:text-[10vw]">AI automations</h2>
                  <Sparkle />
                  <div
                    data-anim="M22-ai-shimmer"
                    className="smart-ai-shimmer absolute inset-y-0 left-0 w-full translate-x-[-100%] bg-[linear-gradient(310deg,transparent_30%,white_48%,transparent_70%)]"
                  />
                </div>
                <h2>that work with you</h2>
              </div>
              <p className="w-full max-w-mw-large">
                Our AI tools give you more space to drive the education, connection, and transformation that set
                Teachable businesses apart.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-[4rem] md:gap-[1rem] sm:grid-cols-2 sm:gap-y-[3rem] xs:grid-cols-1">
              {CARDS.map((c) => (
                <a
                  key={c.title}
                  href="https://www.teachable.com/ai-hub"
                  className="group flex flex-col items-start justify-start gap-[2rem] no-underline sm:gap-[.5rem]"
                >
                  <div className="relative flex w-full items-end justify-center overflow-hidden rounded-md md:mb-[.5rem]">
                    <img
                      src={c.img}
                      loading="lazy"
                      width="616"
                      height="452"
                      alt={c.alt}
                      className="h-auto w-full object-cover object-[50%_0%]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[1rem] md:pr-[1rem] sm:gap-[.5rem]">
                    <h3 className="text-[2rem] leading-[1.1] group-hover:underline sm:text-[1.5rem]">{c.title}</h3>
                    <p className="text-size-medium">{c.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
