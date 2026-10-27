// /ai-hub stand-in copy (specs/ai-hub.md), written fresh to each slot's purpose and sized to the
// recorded character / line counts. Parts are assembled into JSX by the page.

export const HERO = {
  tag: '— AI TOOLS',
  // one word is italic (`em`) between pre and post
  h1: { pre: 'Plan, build and sell courses ', em: 'quicker', post: ' with AI' },
  intro:
    'A set of built-in assistants that turn your expertise into finished course material. Draft outlines, lesson text, quizzes and sales copy in minutes, then edit everything in your own voice before you publish it.',
}

export const REVIEW = {
  caption: 'See how one creator uses it',
  duration: '(2 minutes)',
  quote: 'The AI tools took the blank page out of my process. By lunch I had an outline and quizzes ready, so the afternoon went to what only I can teach. ',
  quoteEnd: 'It changed my workflow.',
  // neutral role line: the quote is stand-in copy, so it is not attributed to a named person
  byline: 'Course creator and founder of a wellness program',
  videoTitle: 'Creator video review',
}

export const EXPLAINER = {
  heading: 'Smart assistants for every stage of creation',
  text: 'Move from rough idea to polished product faster, with help at each step along the way.',
  rows: [
    {
      title: 'Earn more with fresh content',
      text: 'Spin new products out of what you already know. Turn a single course into a mini-course, a workbook or a lead magnet, and give each audience segment an offer that fits exactly where they are on their journey.',
    },
    {
      title: 'Outlines in a few seconds',
      text: 'Describe your topic and audience, and get a structured course outline with modules and lessons in a logical order. Reorder sections, rename lessons and expand any part you like, so the final plan reflects your expertise while the heavy lifting of structure is already done.',
    },
    {
      title: 'Quizzes generated from lessons',
      text: 'Create multiple-choice and true-or-false questions straight from your lesson content. Review each one, tweak the wording and choose the right answers, then add the finished quiz to any module to check understanding and keep students engaged as they go.',
    },
  ],
}

// marquee (≥480): figure + label + icon; stack (≤479) has one extra item
export const STATS = [
  { num: '3 min', label: 'average time to draft a complete course outline', icon: 'dollar' },
  { num: '5x', label: 'faster quiz creation compared with writing by hand', icon: 'check' },
  { num: '24h', label: 'from first idea to a published, ready-to-sell course', icon: 'chat' },
]
export const STATS_STACK = [
  { num: '3 min', label: 'average time to draft a complete course outline' },
  { num: '5x', label: 'faster quiz creation compared with writing by hand' },
  { num: '10,000', label: 'lessons drafted with help from the built-in writing assistant' },
  { num: '24h', label: 'from first idea to a published, ready-to-sell course' },
]

export const RESOURCES = {
  heading: 'Resources to get the most from your AI tools',
  text: 'Step-by-step guides and ready-made prompts that help you build, launch and sell with less effort.',
  cards: [
    {
      title: 'How to go from idea to a launched course in three days',
      text: 'A practical schedule that shows what to build on each day, which tasks AI can speed up and what to keep personal.',
    },
    {
      title: 'Prompts that help you write great lessons fast',
      text: 'Copy these prompts to draft lessons, examples and exercises in a clear voice.',
    },
    {
      title: 'Free AI resources',
      text: 'Download templates, checklists and prompt libraries that walk you through planning, creating and promoting a course with the help of AI tools.',
    },
  ],
}

// the heading breaks after line1 (`<br>`), as on the live page
export const CTA = { line1: 'Start building your next course with AI', line2: 'guiding each step' }
