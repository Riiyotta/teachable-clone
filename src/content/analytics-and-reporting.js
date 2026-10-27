// /analytics-and-reporting stand-in copy (specs/analytics-and-reporting.md slot tables).
// Written fresh to each slot's purpose and sized to the recorded character / line counts.
// Headings that carry a glyph or link are split into parts; the page assembles the JSX.

export const HERO = {
  tag: '— INSIGHTS & DASHBOARDS',
  // `.span_h1-o` replaces the "o" between pre and post
  h1: { pre: 'Read the signals hidden in your numbers and turn them int', post: ' your next move' },
  intro: 'Clear reports that show what learners do and what sells.',
}

export const WHY = {
  heading: 'Data that drives you',
  text:
    'Guesswork slows a growing business down. Every report here is built to answer a real question: which lessons hold attention, where buyers drop off, and which offers earn the most. Spot the trend early, adjust the plan, and measure the result that same week without exporting spreadsheets by hand.',
}

export const EXPLAINER = {
  heading: 'Every metric you need, in one view',
  text: 'Follow progress, revenue and engagement side by side so each decision rests on real data.',
  rows: [
    [
      {
        title: 'Course reports',
        text: 'See completion rates, lesson views and quiz scores for every course, then pinpoint the exact moment where students tend to stall or drift away.',
      },
      {
        title: 'Sales tracker',
        text: 'Watch orders, refunds and recurring revenue update in real time, with filters for product, coupon and date range whenever you need them.',
      },
    ],
    [
      {
        title: 'Connected analytics apps',
        text: 'Send page and purchase events to the measurement tools you already rely on, with no custom code at all.',
      },
      {
        title: 'Smart alerts',
        // inline link (14 chars) sits between pre and post
        text: {
          pre: 'Get a heads-up when a metric shifts, then browse the ',
          link: 'App Hub portal',
          post: ' to plug in extra dashboards, heatmaps and tag managers for even more detail.',
        },
      },
    ],
  ],
}

export const BLOG = {
  heading: 'Get smarter',
  text: 'Guides that help you read your data and act on it fast.',
  cards: [
    {
      title: 'A starter guide to site traffic',
      text: 'Learn which visitor numbers matter most, how to set up tracking in minutes, and the simple checks that keep your data trustworthy.',
    },
    {
      title: 'How to pick the right social media analytics tool for your brand',
      text: 'Compare the features that count, from audience insights to post timing, and choose a tool that truly fits the size, budget and pace of your business today.',
    },
    {
      title: 'Tagging students to personalize their path',
      text: 'Group learners by behavior and send each group the right lesson at the right time.',
    },
  ],
}

export const CTA = { heading: 'Make your next decision with proof' }
