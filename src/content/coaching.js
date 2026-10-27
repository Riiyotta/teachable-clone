// /coaching stand-in copy (specs/coaching.md + product-template.md slot notes).
// Written fresh to each slot's purpose and sized to the recorded character / line counts.
// Functional labels kept as recorded: "— COACHING", "Step 1–3", "Start for free", "Explore our plans",
// "See it in action", "READ MORE".

export const HERO = {
  tag: '— COACHING',
  h1: 'Run your coaching practice from a single, tidy and calm home base',
  intro: 'Book sessions, take payment and share resources with every client, all without juggling apps.',
}

// Same three figures as online-courses.
export const MARQUEE_STATS = [
  { num: '$500M', label: 'earned by creators selling what they know', icon: 'dollar' },
  { num: '120K+', label: 'courses built and published', icon: 'check' },
  { num: '28M', label: 'learners reached worldwide', icon: 'chat' },
]
export const STACK_STATS = [
  { num: '$500M earned', label: 'by creators selling what they know' },
  { num: '120K+ products', label: 'built and published' },
  { num: '28M+ learners', label: 'reached globally' },
]

export const STEPS = {
  heading: 'Start coaching online in three steps',
  text:
    'Going from first idea to first paying client does not need to be complicated. Here is the simple path most coaches follow when they set up here.',
  items: [
    {
      label: 'Step 1',
      title: 'Shape your coaching offer',
      text: 'Decide what a client gets from working with you, how long each session lasts and how many sessions are included, then give the package a clear name and a fair, honest price.',
    },
    {
      label: 'Step 2',
      title: 'Open your calendar',
      text: 'Connect a scheduling tool so clients can pick a time that suits them, get friendly reminders by email and join the call from a single link without any back and forth.',
    },
    {
      label: 'Step 3',
      title: 'Welcome new clients',
      text: 'Share your booking page, take payment up front and keep notes, files and follow-ups organised in one spot.',
    },
  ],
}

// Heading: `pre` + stylised "a" + `post`.
export const SPLIT = {
  heading: { pre: 'Everything a coach needs, in one pl', post: 'ce' },
  text: 'Keep sessions, clients and payments together so you can focus on the people you help.',
  rows: [
    [
      {
        title: 'Sessions without the admin',
        text: 'Set up one-to-one or group sessions with the length, price and format that suit your practice. Clients book a time from your live availability, receive automatic confirmations and reminders, and join with one click. Notes and action points sit beside each booking, so you can pick up where the last conversation ended.',
      },
      {
        title: 'Client workspace',
        text: 'Give every client a private space with worksheets, recordings and progress check-ins that they can open whenever they need. You can see what each person has completed, send a quick message between sessions and add new resources as the work evolves over the following months.',
      },
    ],
    [
      {
        title: 'Simple payments',
        text: 'Charge per session, sell packages or set up monthly retainers with a checkout that matches your brand. Payment plans and discount codes help more clients say yes, and earnings arrive in your account on a steady schedule without chasing invoices.',
      },
      {
        title: 'Pair with courses',
        text: 'Combine coaching with a self-paced course or a downloadable workbook, so clients learn the basics on their own time and save your live sessions for the deeper, more personal work that really moves them forward.',
      },
    ],
  ],
}

// Heading: `pre` + stylised "i" + `post`.
export const SPOTLIGHT = {
  heading: { pre: 'Coaches who sh', post: 'ne' },
  text:
    'A look at a few independent coaches who have built steady, growing practices with these tools behind them.',
  cards: [
    {
      title: 'Northwind Health',
      text: 'A wellness practice that pairs private consultations with short video guides, helping clients build better daily habits between each session.',
    },
    {
      title: 'Brightpath Tutors',
      text: 'A small team of exam tutors offering weekly sessions and practice packs for secondary students.',
    },
    {
      title: 'SkyCraft',
      text: 'A flight instructor who mixes live coaching calls with handy checklists and short recorded video briefings for brand new drone pilots.',
    },
  ],
}

export const RESOURCES = {
  heading: 'Ideas and guides for growing coaches',
  text: 'Practical reading to help you find clients and run a smoother practice.',
  cards: [
    {
      title: 'Building a fitness coaching brand',
      text: 'How one trainer turned local park classes into an online program with clients in five cities.',
    },
    {
      title: 'Tutoring that fits school life',
      text: 'What a tutor learned about pricing, scheduling and keeping students motivated through exam season.',
    },
    {
      title: 'From hobby to certified drone coach',
      text: 'The steps a pilot took to package hands-on expertise into paid coaching sessions and simple training kits.',
    },
  ],
}

export const HUB = {
  heading: 'Plug in the tools you prefer',
  text:
    'Connect calendars, email, video calls and analytics in a few clicks, so the services you already rely on keep working together alongside your coaching business.',
}

export const CTA = {
  heading: 'Your next client could be booking today',
  text: 'Set up your first coaching offer in an afternoon and start selling.',
}

export const FAQ = {
  heading: 'Questions about coaching',
  items: [
    {
      q: 'What kinds of coaching can I offer on here?',
      a: 'Any format where you guide people one to one or in small groups works well, from business and career coaching to fitness, tutoring, music lessons and wellbeing. You decide the length, price and number of sessions, and you can combine them with courses or downloads whenever that helps your clients.',
    },
    {
      q: 'How do clients book a session?',
      a: 'Clients choose a time from your connected calendar, pay at checkout and receive a confirmation with the meeting link. Reminders go out automatically, so fewer sessions are missed or rescheduled late.',
    },
    {
      q: 'Can I charge for packages or monthly retainers?',
      a: 'Yes. Sell single sessions, bundles of several sessions or a recurring monthly plan. Payment plans and coupon codes are available too, so you can offer the option that suits each client.',
    },
  ],
}
