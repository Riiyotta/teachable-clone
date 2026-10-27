import FeatureHero from '../components/sections/FeatureHero.jsx'
import VideoReview from '../components/sections/VideoReview.jsx'
import FeatureExplainer from '../components/sections/FeatureExplainer.jsx'
import StatsMarquee from '../components/sections/StatsMarquee.jsx'
import ResourceCards from '../components/sections/ResourceCards.jsx'
import ProductCta from '../components/sections/ProductCta.jsx'
import Stats from '../components/Stats.jsx'
import Stories from '../components/Stories.jsx'
import { HERO, REVIEW, EXPLAINER, STATS, STATS_STACK, RESOURCES, CTA } from '../content/ai-hub.js'

// /ai-hub (specs/ai-hub.md): hero · video review · explainer · stats marquee (≥480) / stack (≤479) ·
// resource cards · stories · cta.
const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'
const START = { label: 'Start for free', href: SIGN_UP }
const A = '/assets/'
const RESOURCE_LINKS = [
  'https://teachable.com/blog/launch-your-course-in-three-days',
  'https://teachable.com/blog/ai-prompts-to-create-your-online-course',
  'https://teachable.com/resources/ai-resource-bundle',
]
const ROW_IMAGES = [
  { src: `${A}68e326f273e123ac5703d426_2cd789bd3bb0286f938d5a438ee1d577_earn-ai.webp`, w: 795, h: 795 },
  { src: `${A}68e330d63bd0b1ca001259a6_fc222074039d4ab4c0dc48a750151bf1_ai-outline.webp`, w: 800, h: 800 },
  { src: `${A}68e330d689a5744b2cfbb322_39528a1c0202d75a95a71132c1679a8b_ai-quiz.webp`, w: 795, h: 795 },
]

export default function AIHub() {
  return (
    <>
      <FeatureHero
        tag={HERO.tag}
        heading={<>{HERO.h1.pre}<em>{HERO.h1.em}</em>{HERO.h1.post}</>}
        text={HERO.intro}
        button={START}
        image={{ src: `${A}68e330d6d82d27e378693191_4e808200b6f59745ffedff4a04559c12_ai-hero.webp`, w: 540, h: 720 }}
      />
      <VideoReview
        thumb={{ src: `${A}68e481a2e6c643add77ac08b_StacieBittle.webp`, alt: '' }}
        caption={REVIEW.caption}
        duration={REVIEW.duration}
        quote={<>{REVIEW.quote}<strong>{REVIEW.quoteEnd}</strong></>}
        attribution={REVIEW.byline}
        quoteIcon={{ src: `${A}689d06ccf7eea453b43bcb38_teachable-quotemark-dark.svg`, alt: '' }}
        video={{ src: 'https://player.vimeo.com/video/1043511253', w: 940, h: 529, title: REVIEW.videoTitle }}
      />
      <FeatureExplainer
        heading={EXPLAINER.heading}
        text={EXPLAINER.text}
        rows={EXPLAINER.rows.map((r, i) => ({
          image: ROW_IMAGES[i],
          items: [r],
          button: i === 2 ? START : undefined,
        }))}
      />
      <StatsMarquee items={STATS} />
      <Stats variant="stack" items={STATS_STACK} />
      <ResourceCards
        heading={RESOURCES.heading}
        text={RESOURCES.text}
        cards={RESOURCES.cards.map((c, i) => ({ ...c, href: RESOURCE_LINKS[i] }))}
      />
      <Stories />
      <ProductCta tone="red" header="none" heading={<>{CTA.line1}<br />{CTA.line2}</>} padTop={false} button={START} />
    </>
  )
}
