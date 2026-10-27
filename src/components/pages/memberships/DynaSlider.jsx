import { useEffect, useRef } from 'react'
import { ICON_NEXT, ICON_PAUSE, ICON_PLAY, ICON_PREV, ICON_T } from './icons.jsx'

// memberships.md §4 `section.section_product-tabs`: image carousel left, autoplaying accordion list right.
// Behaviour is a port of the live inline script (verbatim logic):
//  - 4000ms per tab, requestAnimationFrame progress bar on the active tab, runs from load.
//  - image grid translateX(-index*20%), .5s ease-in-out; the active tab's "+" loses its vertical line
//    (.2s) and its detail opens to scrollHeight (opacity/height .2s, after 20ms).
//  - next past the last tab slides to the EMPTY third grid column for 500ms, then snaps back to tab 0
//    without a transition (the live quirk, reproduced on purpose). prev before the first tab leaves the
//    image in place (invalid transform), collapses every tab, then snaps to the last tab after 500ms.
//  - prev/next don't reset the timer; clicking a tab resets all bars and restarts the timer.
//  - pause freezes the bar; play resumes from the elapsed time.
// Controls are plain divs with click handlers, as on the live page (no keyboard support there either).
// heading, text: nodes. tabs: [{ title, text, image: { src, w, h, alt } }] (2).
const DURATION = 4000

export default function DynaSlider({ heading, text, tabs, button }) {
  const root = useRef(null)

  useEffect(() => {
    const el = root.current
    const imageGrid = el.querySelector('[data-dyna="grid"]')
    const navLinks = el.querySelectorAll('[data-dyna="link"]')
    const prevButton = el.querySelector('[data-dyna="prev"]')
    const nextButton = el.querySelector('[data-dyna="next"]')
    const pauseButton = el.querySelector('[data-dyna="pause"]')
    const playButton = el.querySelector('[data-dyna="play"]')
    const progressBars = el.querySelectorAll('[data-dyna="bar"]')
    const iconLines = el.querySelectorAll('[data-dyna="line-1"]')

    const tabCount = navLinks.length
    let currentTab = 0
    let isPaused = false
    let startTime = null
    let elapsedTime = 0
    let frame = 0
    const timers = new Set()
    const later = (fn, ms) => {
      const id = setTimeout(() => {
        timers.delete(id)
        fn()
      }, ms)
      timers.add(id)
    }

    function updateUI(skipTransition = false) {
      imageGrid.style.transition = skipTransition ? 'none' : 'transform 0.5s ease-in-out'
      imageGrid.style.transform = `translateX(-${currentTab * 20}%)`

      iconLines.forEach((line, i) => {
        line.style.transition = 'height 0.2s ease-in-out'
        line.style.height = i === currentTab % tabCount ? '0%' : '44%'
      })

      navLinks.forEach((link, i) => {
        const detail = link.querySelector('[data-dyna="detail"]')
        if (i === currentTab % tabCount) {
          link.classList.add('active')
          detail.style.display = 'flex'
          const fullHeight = detail.scrollHeight + 'px'
          detail.style.height = '0px'
          detail.style.opacity = '0'
          later(() => {
            detail.style.transition = 'opacity 0.2s ease, height 0.2s ease'
            detail.style.height = fullHeight
            detail.style.opacity = '1'
          }, 20)
        } else {
          link.classList.remove('active')
          detail.style.transition = 'opacity 0.2s ease, height 0.2s ease'
          detail.style.height = '0px'
          detail.style.opacity = '0'
          later(() => {
            detail.style.display = 'flex'
          }, 200)
        }
      })

      progressBars.forEach((bar, i) => {
        bar.style.transition = 'none'
        bar.style.width = i === currentTab % tabCount ? `${(elapsedTime / DURATION) * 100}%` : '0%'
      })
    }

    function animateProgressBar() {
      if (!isPaused) {
        const now = Date.now()
        elapsedTime = now - startTime
        if (elapsedTime >= DURATION) {
          nextTab()
          startTime = now
          elapsedTime = 0
        } else {
          const bar = progressBars[currentTab % tabCount]
          if (bar) {
            bar.style.transition = 'none'
            bar.style.width = `${(elapsedTime / DURATION) * 100}%`
          }
        }
      }
      frame = requestAnimationFrame(animateProgressBar)
    }

    function nextTab() {
      currentTab++
      updateUI()
      if (currentTab === tabCount) {
        later(() => {
          currentTab = 0
          updateUI(true)
        }, 500)
      }
    }

    function prevTab() {
      currentTab--
      updateUI()
      if (currentTab < 0) {
        later(() => {
          currentTab = tabCount - 1
          updateUI(true)
        }, 500)
      }
    }

    const onLink = (index) => () => {
      progressBars.forEach((bar) => {
        bar.style.transition = 'none'
        bar.style.width = '0%'
      })
      currentTab = index
      elapsedTime = 0
      startTime = Date.now()
      updateUI()
    }
    const onPause = () => {
      isPaused = true
      pauseButton.style.display = 'none'
      playButton.style.display = 'inline-block'
    }
    const onPlay = () => {
      isPaused = false
      startTime = Date.now() - elapsedTime
      playButton.style.display = 'none'
      pauseButton.style.display = 'inline-block'
    }

    const linkHandlers = [...navLinks].map((link, i) => {
      const h = onLink(i)
      link.addEventListener('click', h)
      return h
    })
    prevButton.addEventListener('click', prevTab)
    nextButton.addEventListener('click', nextTab)
    pauseButton.addEventListener('click', onPause)
    playButton.addEventListener('click', onPlay)

    updateUI(true)
    startTime = Date.now()
    animateProgressBar()

    return () => {
      cancelAnimationFrame(frame)
      timers.forEach(clearTimeout)
      navLinks.forEach((link, i) => link.removeEventListener('click', linkHandlers[i]))
      prevButton.removeEventListener('click', prevTab)
      nextButton.removeEventListener('click', nextTab)
      pauseButton.removeEventListener('click', onPause)
      playButton.removeEventListener('click', onPlay)
    }
  }, [])

  const navBtn = 'relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-[100vh] border border-black bg-black text-white [transition:color_.1s,background-color_.1s]'

  return (
    <section ref={root} data-anim="MEM-dyna-slider" className="relative overflow-hidden bg-white">
      <div className="padding-global padding-section-large">
        <div className="container-large">
          <div className="grid h-[46rem] grid-cols-2 gap-16 md:gap-8 sm:h-[40rem] xs:h-auto xs:grid-cols-1">
            <div className="relative overflow-hidden rounded-md xs:aspect-square">
              <div data-dyna="grid" className="relative grid h-full w-[500%] grid-cols-5">
                {tabs.map((t, i) => (
                  <div key={i} className={`overflow-hidden ${i === 1 ? 'bg-grey-light' : ''}`}>
                    <img
                      src={t.image.src}
                      width={t.image.w}
                      height={t.image.h}
                      alt={t.image.alt ?? ''}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
                {/* columns 3–5 are empty on the live page */}
              </div>
              <div className="absolute bottom-8 right-8 z-[1] flex items-center justify-center gap-4 sm:bottom-6 sm:right-6 xs:inset-x-0 xs:bottom-4 xs:mx-auto">
                <div data-dyna="prev" className={`${navBtn} pr-[.1rem]`}>
                  <div className="flex h-auto w-2 items-center justify-center">{ICON_PREV}</div>
                </div>
                <div data-dyna="next" className={`${navBtn} pl-[.1rem]`}>
                  <div className="flex h-auto w-2 items-center justify-center">{ICON_NEXT}</div>
                </div>
              </div>
              <div className="absolute left-10 top-10 flex h-auto w-6 items-center justify-center sm:left-6 sm:top-6 xs:hidden">
                {ICON_T}
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-start gap-8 overflow-hidden pb-6 pt-8 sm:pb-4 xs:py-0">
              <div className="relative flex flex-col items-start justify-start gap-4 pr-8">
                <h2>{heading}</h2>
                <p>{text}</p>
                <div className="absolute right-0 top-0 h-8 w-8 cursor-pointer">
                  <div
                    data-dyna="play"
                    className="absolute hidden h-full w-full items-center justify-center text-black"
                  >
                    {ICON_PLAY}
                  </div>
                  <div data-dyna="pause" className="block h-full w-full text-black">
                    {ICON_PAUSE}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-stretch justify-start">
                {tabs.map((t, i) => (
                  <div
                    key={i}
                    data-dyna="link"
                    className="relative flex cursor-pointer flex-col items-start justify-start gap-1 py-4"
                  >
                    <div className="absolute left-0 top-0 h-px w-full border-t border-grey-light">
                      <div data-dyna="bar" className="relative -top-px h-px w-0 border-t border-black" />
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex-1 font-heading text-[2.25rem] leading-[1.2] md:text-[1.25rem] xs:text-[5.5vw]">
                        {t.title}
                      </div>
                      <div className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-[100vh] border border-black bg-black text-white [transition:color_.1s,background-color_.1s]">
                        <div data-dyna="line-1" className="absolute inset-0 m-auto h-[44%] w-px border-r border-white" />
                        <div className="absolute inset-0 m-auto h-px w-[44%] border-t border-white" />
                      </div>
                    </div>
                    <div
                      data-dyna="detail"
                      className="flex h-0 w-full flex-col items-start justify-start gap-4 overflow-hidden pr-8 opacity-0"
                    >
                      <p className="text-[1rem] xs:text-[4vw]">{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              {button && (
                <div className="relative flex items-center justify-start">
                  <a href={button.href} className="btn-primary xs:w-full">
                    <span className="btn-txt">{button.label}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
