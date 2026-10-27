// /online-courses stand-in copy (specs/online-courses.md + product-template.md slot notes).
// Written fresh to each slot's purpose and sized to the recorded character / line counts.
// Functional labels kept as recorded: "— TEACHABLE", "Start for free", "Explore our plans", the
// tools category names (Create / Host / Manage / Sell).

export const HERO = {
  tag: '— TEACHABLE',
  h1: 'Turn what you know into a course people will love',
  intro:
    'Plan lessons, upload video, add quizzes and issue certificates, then sell it all your way. Every tool you need to teach lives in one place, so you spend less time on setup and more time on learners.',
}

// Marquee (≥480) and stack (≤479) share the same three figures.
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

export const SPLIT_GREY = {
  heading: 'Build lessons that keep every student moving ahead',
  text:
    'Mix video, text, downloads and checks for understanding in any order you like, and shape a path that guides each learner from the first lesson to the very last one.',
  items: [
    {
      title: 'Drag-and-drop editor',
      text: 'Arrange lessons and sections in seconds, then preview the student view before anything goes live to the class.',
    },
    {
      title: 'Quizzes and assessments',
      text: 'Check what has landed with graded questions, set a passing score and give learners instant feedback as they go.',
    },
    {
      title: 'Completion awards',
      text: 'Hand out branded certificates automatically once a student finishes, so every success feels worth sharing.',
    },
  ],
}

export const SPLIT_WHITE = {
  heading: 'Give students a reason to come back and finish what they started',
  text:
    'Small touches add up. Keep learners motivated with structure, reminders and community features that make progress feel visible from the very first day.',
  items: [
    {
      title: 'Drip schedules that pace',
      text: 'Release lessons on a timetable or after a set number of days so students move at a steady rhythm instead of rushing ahead and burning out before the most important material.',
    },
    {
      title: 'Comments inside lessons',
      text: 'Let learners ask questions right where they get stuck, answer once for everyone, and turn every lecture into a conversation that keeps the whole group engaged and moving forward.',
    },
    {
      title: 'Progress view',
      text: 'Students always know how far they have come and what is next, while you can see who is on track and who might need a quick nudge this week.',
    },
  ],
}

export const PLATFORM = {
  heading: 'Payment options that fit the way your buyers like to pay',
  text:
    'Offer one-time prices, payment plans or subscriptions, accept major cards and wallets, and get paid out on a schedule that works for you. Checkout stays on your brand from start to finish for every buyer.',
  cards: [
    {
      title: 'Global checkout',
      text: 'Sell in many currencies with local payment methods, automatic tax handling and a clean checkout that works just as well on a phone as on a laptop.',
    },
    {
      title: 'Flexible pricing',
      text: 'Split a larger price into monthly payments, run limited-time offers or bundle several courses together into one package.',
    },
    {
      title: 'Payouts on your terms',
      text: 'Choose how often your earnings arrive and keep a clear record of every sale, refund and fee in one dashboard.',
    },
  ],
}

export const HUB = {
  heading: 'Plug in the tools you prefer',
  text:
    'Connect email, analytics, webinars, calendars and more in a few clicks. Your course keeps working with the services you already pay for, so data flows where you need it and nothing has to be rebuilt from scratch.',
}

// Tools heading: `pre` + stylised "o" + `post`.
export const TOOLS = {
  heading: { pre: 'One place for every to', post: 'lkit' },
  text:
    'From the first draft to the hundredth sale, each stage of running a course is covered here, so you never have to stitch separate services together.',
  cards: [
    {
      title: 'Create',
      items: [
        'Video lessons', 'Downloadable files', 'Audio clips', 'Text pages', 'Graded quizzes',
        'Course builder', 'Lesson previews', 'Surveys', 'Completion rewards', 'Live calls',
        'Bundles', 'Content drips', 'AI outlines', 'Custom certificates', 'Student uploads',
        'Embed blocks', 'Lesson comments', 'Templates',
      ],
    },
    {
      title: 'Host',
      items: ['Unlimited video hosting', 'Secure file storage', 'Fast page loads', 'Encrypted streaming', 'Backups', 'Uptime', 'SSL'],
    },
    {
      title: 'Manage',
      items: [
        'Student roster', 'Progress tracking', 'Bulk enrollment', 'Team accounts', 'Author roles',
        'Email broadcasts', 'Detailed course reports', 'Data export', 'Segments', 'Notes',
      ],
    },
    {
      title: 'Sell',
      items: [
        'Coupon codes', 'Upsells', 'Payment plans', 'Subscriptions', 'Affiliate program',
        'Order bumps', 'Bundles', 'Sales pages', 'Taxes', 'Multiple currencies', 'Checkout pages',
        'Gift purchases', 'Abandoned cart emails', 'Mobile checkout', 'Digital wallets', 'Flexible pricing',
      ],
    },
  ],
}

export const CTA = {
  heading: 'Creators everywhere are teaching with us',
  text:
    'Join a community of educators who have turned their skills into steady income, and launch your first course in days rather than months.',
}

// FAQ answers: a string = one paragraph; an array = rich blocks (string = <p>, { ul: [...] } = list).
export const FAQ = {
  // `.footnote-wrp` under the list: <sup>1</sup> + italic note (~45c)
  footnote: 'Figures based on internal platform data, 2025.',
  heading: 'Questions people ask before building their first course',
  items: [
    {
      q: 'What exactly is an online course?',
      a: 'An online course is a structured set of lessons that people work through on their own schedule from any device. It usually combines video, written material, downloads and short checks for understanding, organised into sections that build on each other. Because it lives online, one course can reach learners in many countries at once, and you can update it any time your material changes or grows a lot.',
    },
    {
      q: 'Which kinds of course work best on this platform?',
      a: [
        'Almost any subject that can be taught step by step works well. A few formats that tend to do especially well with learners:',
        {
          ul: [
            'Professional skills training for a specific job, industry or popular software tool',
            'Creative classes such as drawing, music, writing or photography for every level',
            'Health, fitness and wellness programs built around simple weekly plans',
            'Language lessons with audio practice, vocabulary drills and quizzes',
            'Business and marketing courses for founders and small teams',
          ],
        },
        'If you are unsure, start with one focused topic and expand once you see what learners respond to.',
      ],
    },
    {
      q: 'How long does it take to launch a new course?',
      a: 'Most creators publish a first version within a couple of weeks, though it depends on how much material you already have. If your videos and notes are ready, the course builder lets you upload, arrange and preview everything in an afternoon. Templates and AI outlines can speed up planning when you are starting from a blank page.',
    },
    {
      q: 'Do I need any technical skills to get started?',
      a: 'No coding or design experience is needed. Pages, checkout and lessons are built with simple editors, and sensible defaults handle hosting, security and video playback for you. If you can write an email and upload a file, you have the skills required to launch a polished course.',
    },
    {
      q: 'Can I sell more than one course?',
      a: 'Yes. You can publish as many courses as your plan allows, group them into bundles, and offer them alongside coaching or downloads so learners can pick the format that suits them best.',
    },
    {
      q: 'How do students take part?',
      a: [
        'Learners sign in to a clean, branded school where their courses, progress and certificates are all in one place. They can follow along on a laptop, tablet or phone and pick up exactly where they left off.',
        'Along the way they can:',
        {
          ul: [
            'Leave comments and questions on lessons',
            'Download worksheets and resources',
            'Take quizzes and see their results',
            'Earn a certificate when they finish',
          ],
        },
      ],
    },
    {
      q: 'What does it cost to sell courses?',
      a: 'There is a free plan to get started, and paid plans add lower transaction fees, more products and advanced features. Payment processing fees apply to each sale, and you can see the full breakdown on the pricing page before you commit. Many creators begin on the free plan, validate their idea with a few early buyers, and upgrade once sales pick up. You can change or cancel your plan at any time, and your content and student data stay with you whichever plan you choose.',
    },
    {
      q: 'Can I use my own web domain and branding?',
      a: 'Absolutely. Add your logo, colours and fonts, and connect a custom domain so your school feels like part of your own website. You can also adjust sales pages, emails and the student area so everything matches your brand. Buyers see your name throughout the experience, from the first landing page through checkout and into every lesson they take, which helps build trust and recognition over time.',
    },
    {
      q: 'How do I get paid for the courses I sell?',
      a: 'Earnings from each sale are collected through the built-in checkout and paid out to your bank account on a regular schedule. You can track every transaction, refund and fee in your dashboard, and export reports when it is time to do your accounts. Several payout options are available depending on your country, and sales tax and VAT can be handled automatically for many regions so you have one less thing to worry about at the end of each quarter or year.',
    },
    {
      q: 'Is there support available if I get stuck while building?',
      a: 'Yes. A help centre full of guides and videos covers every feature, and our support team is available to answer questions by email or chat. Paid plans include extra help such as onboarding sessions and priority responses. There is also an active community of creators who share tips, review each other\'s course outlines and celebrate launches together, so you are never figuring things out on your own.',
    },
    {
      q: 'Can I move an existing course here from elsewhere?',
      a: 'Yes. You can import videos, files and student lists from other platforms, and our team offers guidance to make the switch smooth. Many creators move over in a single weekend without losing any learners.',
    },
  ],
}
