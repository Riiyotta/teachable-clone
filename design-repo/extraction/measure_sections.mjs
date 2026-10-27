#!/usr/bin/env node
// Optional re-measure tool for extraction/measured-values.json -> sectionHeights (R9).
//
//   PLAYWRIGHT_MODULE=<path or package name of playwright> BASE_URL=http://localhost:<port> node extraction/measure_sections.mjs [viewport]
//
// Needs a running clone (its own dev server) and a Playwright install; the module location comes from the environment so
// no machine path is stored here. Prints, for every route in routes/routes.json, the document height and the height of
// each top-level child of <main> plus the shell parts, in DOM order. Map the printed children to semantic nodes with the
// route's reference example (schema/examples/reference/<route>.pagespec.json) before updating measured-values.json; the
// pricing plan section is split at the billing-tabs top (heading block = hero.pricing).
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const repo = join(here, '..')
const modName = process.env.PLAYWRIGHT_MODULE || 'playwright'
const base = (process.env.BASE_URL || '').replace(/\/$/, '')
const viewport = Number(process.argv[2] || 1440)
if (!base) {
  console.error('set BASE_URL to the running clone, e.g. BASE_URL=http://localhost:5173')
  process.exit(2)
}
const { chromium } = await import(modName)
const routes = JSON.parse(readFileSync(join(repo, 'routes/routes.json'), 'utf8')).routes.map((r) => r.path)
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: viewport, height: viewport >= 1280 ? 900 : 844 } })
const out = { viewport, routes: {} }
for (const route of routes) {
  await page.goto(base + route, { waitUntil: 'domcontentloaded' })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(1500)
  out.routes[route] = await page.evaluate(() => {
    const box = (el) => { const b = el.getBoundingClientRect(); return { yPx: Math.round((b.top + scrollY) * 10) / 10, heightPx: Math.round(b.height * 10) / 10 } }
    const wrap = document.querySelector('.page-wrapper') || document.body
    const main = document.querySelector('main')
    const shell = [...wrap.children].filter((e) => e !== main).map((e) => ({ tag: e.tagName.toLowerCase(), position: getComputedStyle(e).position, ...box(e) }))
    const children = main ? [...main.children].map((e, i) => ({ index: i, tag: e.tagName.toLowerCase(), display: getComputedStyle(e).display, ...box(e) })) : []
    return { docHeightPx: document.documentElement.scrollHeight, shell, children }
  })
}
await browser.close()
console.log(JSON.stringify(out, null, 1))
