// /pricing stand-in copy (COMPONENT_PLAN copy policy). Prose slots are original text sized to the
// spec's character / line counts (specs/pricing.md). Plan names, prices, bullets (feature names), fee
// labels/values and the comparison matrix are functional data recorded in the spec and used as recorded.

const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id='
const CONTACT = 'https://www.teachable.com/lps/migrate-to-teachable'

// §1 header
export const PRICING_H1 = 'Pick your pricing' // 17
export const PRICING_INTRO = 'Try any plan free and swap whenever you like.' // 45

// Tooltip stand-ins (66–162 chars in the original)
const TIP = {
  products: 'Each course, coaching program or digital download you publish counts as one product.',
  payments: 'Sales tax and VAT are worked out at checkout and filed for you when you sell through our checkout.',
  branding: 'Hide the platform name from your school footer, emails and checkout pages for a fully custom look.',
  imported: 'Bring an existing student list over in bulk instead of enrolling each person by hand.',
  bulk: 'Sell seats to whole teams at once, with group invoicing and tools built for larger rollouts.',
  seats: 'Set your own limits on products, enrolments and admin seats to match how your team runs.',
  tax: 'Cross-border tax rules are handled for you so you can sell to new regions without extra admin.',
}

const TRIAL = 'Free 14-day trial, cancel any time.' // 35

const CORE = [
  { text: 'Create with AI' },
  { text: 'iOS & Android student apps' },
  { text: 'Global payments & taxes', tip: TIP.payments },
  { text: 'Upsells & cart recovery' },
]

export const PLANS = [
  {
    name: 'Starter',
    desc: 'For first-time creators testing out a new idea.', // 45
    trial: TRIAL,
    monthly: { price: '$39', href: `${SIGN_UP}starter-usd-monthly`, billed: 'Billed monthly' },
    annual: { price: '$29', strike: '$39', save: 'Save $120', href: `${SIGN_UP}starter-usd-yearly`, billed: 'Billed annually' },
    bullets: [{ text: '5 products', strong: true, tip: TIP.products }, ...CORE, { text: '7.5% transaction fee' }],
  },
  {
    name: 'Builder',
    popular: 'Popular',
    desc: 'For growing businesses ready to add offers and tools.', // 55
    trial: TRIAL,
    monthly: { price: '$89', href: `${SIGN_UP}builder-usd-monthly`, billed: 'Billed monthly' },
    annual: { price: '$69', strike: '$89', save: 'Save $240', href: `${SIGN_UP}builder-usd-yearly`, billed: 'Billed annually' },
    bullets: [
      { text: '10 products', strong: true, tip: TIP.products },
      ...CORE,
      { text: '0% transaction fee' },
      { text: 'Affiliate program' },
      { text: 'Real time support' },
    ],
  },
  {
    name: 'Growth',
    desc: 'For established schools scaling up content and teams.', // 52
    trial: TRIAL,
    monthly: { price: '$189', href: `${SIGN_UP}growth-usd-monthly`, billed: 'Billed monthly' },
    annual: { price: '$139', strike: '$189', save: 'Save $600', href: `${SIGN_UP}growth-usd-yearly`, billed: 'Billed annually' },
    bullets: [
      { text: '50 products', strong: true, tip: TIP.products },
      ...CORE,
      { text: '0% transaction fee' },
      { text: 'Affiliate program' },
      { text: 'Real time support' },
      { text: 'Course certificates' },
      { text: 'Remove Teachable branding', tip: TIP.branding },
      { text: 'Imported students', tip: TIP.imported },
      { text: 'Custom admin permissions' },
      { text: 'Free subtitles and translations' },
    ],
  },
]

export const CUSTOM_PLAN = {
  name: 'Custom',
  // 131
  intro:
    'Built for larger education teams that need tailored tooling and a closer working relationship. Talk to us and we will shape a plan.',
  button: { label: 'Contact sales', href: `${CONTACT}?src=custom_card` },
  subheading: 'Everything in Growth, plus:',
  bullets: [
    { text: 'Dedicated success manager' },
    { text: 'Seamless features for bulk sales', tip: TIP.bulk },
    { text: 'Flexible product, students, and admin seats', tip: TIP.seats },
    { text: 'Sandbox school for testing' },
    { text: 'Priority SLA-based support' },
    { text: 'Automated international tax handling', tip: TIP.tax },
    { text: 'White glove onboarding' },
    { text: 'Migration Assistance' },
  ],
  label: {
    title: 'Earning over $12k a year?', // 25
    text: 'Reach out to our team for tailored terms and perks that fit you.', // 63
  },
}

// §2 comparison matrix (functional data, verbatim from the spec). Values: string, '✓', '✕',
// or { link: label } (underlined "Contact Sales" link). `color` = `.is-color` stripe; `tall` = 4.5rem row
// (desktop) / 5.5rem (≤479); `small` = .875rem label; `mob2` = `.is-2-lines` (4rem at ≤479).
const CS = { link: 'Contact Sales', href: CONTACT }
const Y = '✓'
const N = '✕'
const tip = (t) => t // tooltips are stand-ins
export const MATRIX_PLANS = ['Starter', 'Builder', 'Growth', 'Custom']
export const MATRIX = [
  {
    filter: 'Transaction fees & Usage',
    blocks: [
      {
        title: 'Transaction Fees',
        rows: [{ label: 'Sales transaction fees', tip: tip('The platform fee taken from each sale; it drops to zero on the higher plans.'), values: ['7.5%', '0%*', '0%*', '0%*'] }],
      },
      {
        title: 'Usage',
        rows: [
          { label: 'Products', tip: TIP.products, color: true, values: ['5', '10', '50', CS] },
          { label: 'Admin-level users', tip: tip('People on your team who can sign in to manage the school, including owners and authors.'), values: ['1', '1', '5', CS] },
          {
            label: 'Students enrolled through Teachable checkout',
            tip: tip('No cap on learners who join through our own checkout on any plan.'),
            color: true,
            tall: true,
            values: ['Unlimited', 'Unlimited', 'Unlimited', CS],
          },
          { label: 'Video storage', values: ['Up to 1TB', 'Up to 1TB', 'Up to 1TB', CS] },
        ],
      },
    ],
  },
  {
    filter: 'Platform features',
    blocks: [
      {
        title: 'Platform features',
        rows: [
          { label: 'Student management', color: true, values: [Y, Y, Y, Y] },
          { label: 'Memberships', values: [Y, Y, Y, Y] },
          { label: 'Course design templates', tip: tip('Ready-made layouts for course pages that you can restyle to match your brand.'), color: true, values: [Y, Y, Y, Y] },
          { label: 'Lesson comments', values: [Y, Y, Y, Y] },
          { label: 'Drip course content', tip: tip('Release lessons on a schedule or a set number of days after a student enrols.'), color: true, values: [Y, Y, Y, Y] },
          { label: 'Auto-graded quizzes', values: [Y, Y, Y, Y] },
          { label: 'Short answer assessments', color: true, values: [Y, Y, Y, Y] },
          { label: 'Certificates', values: [N, N, Y, Y] },
          { label: 'Course compliance', tip: tip('Require students to finish lessons in order or watch videos fully before moving on.'), color: true, values: [Y, Y, Y, Y] },
          { label: 'Bulk student imports', values: [N, N, Y, Y] },
        ],
      },
    ],
  },
  {
    filter: 'Sales & marketing',
    blocks: [
      {
        title: 'Sales & marketing',
        rows: [
          { label: 'Teachable Payments', tip: tip('Our built-in payment processor, with payouts sent straight to your account.'), values: [Y, Y, Y, Y] },
          { label: 'U.S. sales tax, global VAT, and GST handling', tip: TIP.payments, color: true, small: true, tall: 'mob', values: [Y, Y, Y, Y] },
          { label: 'Student referrals', values: [Y, Y, Y, Y] },
          { label: 'Coupons, upsells, order bumps', color: true, values: [Y, Y, Y, Y] },
          { label: 'Abandoned cart emails', values: [Y, Y, Y, Y] },
          { label: 'Bundles', color: true, values: [Y, Y, Y, Y] },
          { label: 'Built-in email marketing', values: [N, Y, Y, Y] },
          { label: 'Integrated affiliate program', tip: tip('Let partners promote your products and pay them a commission automatically.'), color: true, values: [N, Y, Y, Y] },
          { label: 'Custom reporting', values: [N, N, N, CS] },
        ],
      },
    ],
  },
  {
    filter: 'Customizations',
    blocks: [
      {
        title: 'Customizations',
        rows: [
          { label: 'CSS snippets', values: [N, Y, Y, Y] },
          { label: 'Custom domain', color: true, values: [N, Y, Y, Y] },
          { label: 'Remove Teachable branding', tip: TIP.branding, values: [N, N, Y, Y] },
          { label: 'Custom user roles', color: true, values: [N, N, Y, Y] },
        ],
      },
    ],
  },
  {
    filter: 'Integrations',
    blocks: [
      {
        title: 'Integrations',
        rows: [
          { label: 'Third party integrations', tip: tip('How many outside tools you can connect at once from the integrations page.'), values: ['1', '3', '5', 'Unlimited'] },
          { label: 'Zapier', color: true, values: [N, N, Y, Y] },
          { label: 'Webhooks', values: [N, N, Y, Y] },
        ],
      },
    ],
  },
  {
    filter: 'Developer tools',
    blocks: [
      {
        title: 'Developer tools',
        rows: [
          { label: 'Public API', tip: tip('Read and write school data from your own code using a documented REST interface.'), values: [N, N, Y, Y] },
          { label: 'API request volume limit', color: true, values: [N, N, '10,000/month', CS] },
          { label: 'API request rate limit', values: [N, N, '100/minute', CS] },
          { label: 'OAuth', tip: tip('Let other apps sign in on behalf of your users without sharing passwords.'), color: true, values: [N, N, Y, Y] },
        ],
      },
    ],
  },
  {
    filter: 'Learning & support',
    blocks: [
      {
        title: 'Learning & support',
        rows: [
          { label: 'Email support', values: [Y, Y, Y, Y] },
          { label: 'Teachable University access', color: true, values: [Y, Y, Y, Y] },
          { label: 'Launch Accelerator access', values: [Y, Y, Y, Y] },
          { label: 'Real time support', color: true, values: [N, Y, Y, Y] },
          { label: 'Priority support', values: [N, N, N, Y] },
          { label: 'Dedicated account manager', color: true, values: [N, N, N, CS] },
          { label: 'Implementation & migration services', mob2: true, values: [N, N, N, CS] },
        ],
      },
    ],
  },
]

// §3 fees (labels and values verbatim; heading and footnote are stand-ins)
export const FEES_H2 = 'What each payment will cost' // 27
export const FEES = [
  {
    title: 'Processing fees',
    rows: [
      { label: 'U.S credit & debit card sales', value: '2.9% + 30¢' },
      { label: 'International credit & debit card sales', value: '3.9% + 30¢' },
      { label: 'U.S PayPal sales', value: '3.49% + 49¢' },
      { label: 'International PayPal sales', value: '4.99% + 49¢' },
      { label: 'Chargeback fee', value: '$15' },
      { label: 'BackOffice fee (optional)', value: '2-2.8%', tip: 'An optional add-on that takes care of affiliate payouts, tax forms and other back-office chores.' },
    ],
  },
  {
    title: 'Payouts',
    rows: [
      { label: 'Teachable Payments', value: 'Daily' },
      { label: 'Monthly payment gateway', value: 'Monthly' },
    ],
  },
]
// 281 visible chars, 3 lines @1440 / 8 @390; links are functional
export const FEES_NOTE = [
  'Fees shown are per completed sale and may change with notice. Payment partners can add their own charges for currency conversion, disputes or refunds on some transactions. For the full rules, please read our ',
  { label: 'Terms of Use', href: 'https://teachable.com/terms-of-use' },
  ', the ',
  { label: 'Usage Fees', href: '/legal/usage-fees' },
  ' page and our ',
  { label: 'Fair Use Policy', href: 'https://teachable.com/fair-use-policy' },
  ' before you start selling to your audience.',
]

// §5 FAQ: 8 items (q / a lengths per spec table)
export const PRICING_FAQ_HEADING = 'Questions about our plans?' // 26
export const PRICING_FAQ = [
  {
    q: 'Can I move to another plan later on?', // 36
    a: 'Yes. You can upgrade or downgrade from your account settings whenever you need to, and the new price is applied from the very start of your next billing period.', // 161
  },
  {
    q: 'What happens when my trial finishes?', // 36
    a: 'Your school stays on the plan you picked and billing begins. If you would rather not continue, cancel before the trial ends to pay nothing.', // 132
  },
  {
    q: 'Is yearly billing any cheaper?', // 31
    a: 'Paying once a year lowers the monthly rate on every plan compared with paying month to month. The saving is shown on each plan card above whenever the yearly toggle is selected, so you can compare both.', // 201
  },
  {
    q: 'Which payment types?', // 19
    a: 'We accept the major credit and debit cards for your subscription. Your students can pay with cards, digital wallets and a range of local methods depending on where they live, and the checkout shows the options that fit their country. If you need to pay by invoice instead, just contact our sales team.', // 308
  },
  {
    q: 'Are there extra charges?', // 25
    a: 'Your subscription covers the platform itself. On top of that, each sale carries a payment processing fee, and the Starter plan also has a small transaction fee per sale. Optional add-ons are billed only if you switch them on. There are no setup costs, no fees for hosting video and no charge for adding more students. Everything is listed in the fee tables on this page so you can plan ahead.', // 397
  },
  {
    q: 'Is there a free option?', // 21
    a: 'Every paid plan starts with a free trial so you can build and test your school first. After the trial you choose the plan that suits you best and billing begins.', // 162
  },
  {
    q: 'How do my refunds work?', // 25
    a: 'If you cancel within the guarantee window after your first payment, contact support and we will review a refund for the unused part of your plan.', // 141
  },
  {
    q: 'Can you help me move from elsewhere?', // 38
    a: 'Yes. Our migration team can bring over your courses, students and sales pages, and the Custom plan includes hands-on assistance from start to finish.', // 154
  },
]

// §6 CTA
export const PRICING_CTA_H2 = 'Your next chapter starts now' // 28
export const PRICING_CTA_TEXT = 'Set up your school in minutes.' // 30

// §8 exit modal
export const EXIT_MODAL = {
  tag: 'LIMITED OFFER', // 13
  title: ['Before you go,', 'one last thing!'], // 13 + 16 (<br>)
  // 107
  text: 'Stay a little longer and get twice the usual trial time to build, launch and sell your very first product.',
  image: { src: '/assets/6ac683dd4b3f37acba0805c0_AI%20outline%20(1).webp', alt: '' },
  cta: { label: 'Start 30-day trial', href: `${SIGN_UP}builder-usd-monthly` },
  note: 'No card required. Cancel at any time.', // 37
}

export const CTA_SIGN_UP = `${SIGN_UP}builder-usd-monthly`
