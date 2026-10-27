// /customer-journey stand-in copy (specs/customer-journey.md slot tables).
// Written fresh to each slot's purpose and sized to the recorded character / line counts.
// Functional labels kept as recorded: "Explore the program", "Explore events", "See tiers + rewards".

export const HERO = {
  // "— " (600) followed by a <strong> run (700), uppercase
  tagStrong: 'THE TEACHABLE REWARDS CLUB',
  // h1 = a + stylised "o" (h1-o) + b + stylised "e" (h1-e) + c
  h1: { a: 'Gr', b: 'w further with ev', c: 'ry milestone you hit' },
  intro:
    'Every sale you make moves you closer to the next level, unlocking hands-on support, early access to new features and invitations to exclusive events made for creators who are serious about growth.',
}

export const WHY = {
  // three parallel phrases, each led by the same italic word
  lead: 'More',
  phrases: [' reach. ', ' skills. ', ' perks.'],
  text:
    'Running a creator business can feel like a solo climb, especially once the early wins turn into real revenue and bigger decisions. This program is our way of matching your progress with the right help at the right moment. As your sales grow, you gain access to experts who have scaled businesses like yours, learning sessions shaped around your goals, and a community of peers working through the same challenges, so you never have to figure out the next step alone.',
}

// Steps heading = pre + stylised "o" + post
export const TIERS = {
  heading: { pre: 'Tiers designed to help you gr', post: 'w' },
  items: [
    {
      badge: 'GOLD LEVEL',
      tone: 'gold',
      title: 'Rising Creator',
      summary: 'For creators building momentum and making their very first sales.',
      bullets: [
        { lead: 'Live workshops', text: ' on pricing, launches and growth' },
        { lead: 'Community access', text: ' to swap ideas with other new creators' },
        { text: 'A monthly digest of tips, templates and product news' },
      ],
    },
    {
      badge: 'NAVY LEVEL · $10K+ IN SALES',
      tone: 'navy',
      title: 'Growing Business',
      summary: 'For creators with steady income ready to scale up.',
      bullets: [
        { lead: 'Strategy calls', text: ' with a growth specialist every quarter' },
        { text: 'Early access to features before they launch' },
        { lead: 'Featured placement', text: ' in our creator spotlights and newsletters' },
        { lead: 'Priority support', text: ' from a dedicated team that knows your business and goals well' },
      ],
      // note = pre + link + post (link 13c)
      note: { pre: 'Hit the sales mark already? Our team reviews each application, so ', link: 'request entry', post: '.' },
    },
    {
      badge: 'ELITE LEVEL · $100K+ SALES',
      tone: 'maroon',
      title: 'Leading Creator',
      summary: 'For established creators running a business at full scale.',
      bullets: [
        { lead: 'A named partner', text: ' who helps you plan each big move' },
        { lead: 'Invitations', text: ' to private retreats and in-person creator events' },
        { lead: 'Custom growth reviews', text: ' that cover your funnel, pricing and audience in depth' },
        { text: 'Input on our product roadmap through small advisory sessions' },
        { lead: 'Co-marketing', text: ' opportunities with the Teachable team' },
      ],
    },
  ],
}

// Answers: string = one paragraph; array = several paragraphs; segment arrays carry inline links.
export const FAQ = {
  heading: 'Questions about the program',
  items: [
    {
      q: 'Who can take part?',
      a: 'Every creator with an active school is welcome. You join the first level automatically and move up as your sales grow.',
    },
    {
      q: 'Is there a fee?',
      a: 'No. The program is included with your plan and costs nothing extra. Perks unlock based on your sales, so the more your business grows, the more support you receive along the way.',
    },
    {
      q: 'How are sales counted toward each tier?',
      a: 'We look at the total revenue processed through your school over the past twelve months, including courses, coaching, downloads and memberships combined.',
    },
    {
      q: 'What happens if my sales drop below the tier threshold?',
      a: 'Your tier is reviewed every quarter. If sales dip for a while, you keep your current perks until the next review, giving you time to recover before anything changes.',
    },
    {
      q: 'How do I claim my rewards?',
      a: [
        'Most perks appear in your dashboard as soon as you qualify, with a short note explaining how to use each one.',
        'Some rewards, such as strategy calls and retreat invitations, are arranged directly with our team. We will reach out by email to schedule them and share any details you need ahead of time, so please keep your contact information up to date.',
        'If you think a perk is missing from your account, check the program page first, then get in touch and we will look into it quickly and confirm your current level for you.',
      ],
    },
    {
      q: 'Who should I contact if I have a question about my tier?',
      a: [['Reach out to ', { label: 'our support staff', href: 'mailto:support@teachable.com' }, ' at any time for help.']],
    },
  ],
}

export const CTA = {
  heading: 'Your next level is close',
  text:
    'See exactly what each tier offers and how close you are to unlocking the next one. The further your business goes, the more support, recognition and opportunity come along with it.',
}
