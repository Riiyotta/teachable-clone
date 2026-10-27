import DemoUnlockHero from '../components/pages/watch-demo/DemoUnlockHero.jsx'
import { DEMO } from '../content/watch-demo.js'

// /watch-demo (specs/watch-demo.md): one visible section; the hidden older Storylane variant is not built.
export default function WatchDemo() {
  return <DemoUnlockHero content={DEMO} />
}
