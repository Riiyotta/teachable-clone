import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PromoMarquee from '../components/PromoMarquee.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { PAGE_SLUGS } from '../routes.js'
import useShell from './useShell.js'

const LOCAL = new Set(['', ...PAGE_SLUGS])

// Map an absolute teachable.com link to a local route when that page is cloned.
function localPath(href) {
  let url
  try { url = new URL(href, window.location.href) } catch { return null }
  const host = url.hostname.replace(/^www\./, '')
  if (host !== 'teachable.com' && url.origin !== window.location.origin) return null
  const slug = url.pathname.replace(/^\/|\/$/g, '')
  return LOCAL.has(slug) ? `/${slug}${url.hash}` : null
}

export default function Layout() {
  const navigate = useNavigate()
  const { pathname, hash } = useLocation()
  const shell = useShell()

  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return
      const a = e.target.closest('a[href]')
      if (!a || a.target === '_blank') return
      const to = localPath(a.getAttribute('href'))
      if (!to) return
      e.preventDefault()
      // Same URL with a #hash (e.g. clicking an anchor link a second time): the location doesn't change,
      // so the effect below won't re-run. Jump again, as a native link would.
      const { pathname: p, hash: h } = window.location
      const hashAt = to.indexOf('#')
      if (hashAt > -1 && to === p + h) {
        document.getElementById(decodeURIComponent(to.slice(hashAt + 1)))?.scrollIntoView()
        return
      }
      navigate(to)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  // New page → top; a #hash link (same page or another) → jump to that anchor, as a native link would.
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [pathname, hash])

  return (
    <div className="page-wrapper">
      {shell.marquee && <PromoMarquee />}
      <Navbar />
      <main className="main-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
