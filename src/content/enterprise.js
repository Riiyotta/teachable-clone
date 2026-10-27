// /enterprise stand-in copy (COMPONENT_PLAN copy policy): original text sized to specs/enterprise.md slot
// lengths and line counts. Functional labels (buttons, badge names, form labels, eyebrow) are as recorded.
// The quote and its attribution are fictional placeholders.
const A = '/assets/'

// §1 hero
export const HERO = {
  tag: 'Chosen by teams in 180+ countries', // 34
  h1: 'Training that grows with you', // 28
  // 150
  text: 'Run onboarding, compliance and partner programs from one secure platform, with the reporting and support a larger organisation needs to move quickly.',
  video:
    'https://onelineplayer.com/player.html?autoplay=false&autopause=false&muted=false&loop=true&url=https%3A%2F%2Fvimeo.com%2F1199890205&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true',
}

export const HERO_LOGOS = [
  { src: `${A}6a2975edbf200a011673f9b5_enterprise-adobe-logo.svg`, alt: 'Adobe' },
  { src: `${A}6a2975ed48f6033ae0e7333a_enterprise-manychat-logo.svg`, alt: 'ManyChat' },
  { src: `${A}6a2975ed1f0fa18eb5ef74d6_enterprise-pma-logo.svg`, alt: 'Product Marketing Alliance' },
  { src: `${A}6a2975ed47d424fd5813cd0a_enterprise-gns3-logo.svg`, alt: 'GNS3' },
  { src: `${A}6a2975edecaee3304bafd007_enterprise-getresponse-logo.svg`, alt: 'GetResponse' },
  { src: `${A}6a2976ab20f85959a03342c8_enterprise-nytimes-logo.svg`, alt: 'The New York Times' },
  { src: `${A}6a2975ed5ee5f32ac27c589f_enterprise-shopify-logo.svg`, alt: 'Shopify' },
  { src: `${A}6a2975ed8d8e010ee69be3eb_enterprise-cnbc-logo.svg`, alt: 'CNBC' },
  { src: `${A}6a2975eda043a20dc78c4a73_enterprise-penn-logo.svg`, alt: 'Penn' },
]

// §2 use-case cards
export const BUILT_H2 = 'One platform for every audience' // 32
export const BUILT_CARDS = [
  {
    title: 'Employee development', // 21
    text: 'Give staff clear learning paths that build skills and track their progress.', // 75
    href: '/enterprise/employee-training',
    img: `${A}6a2979598143fc927ac1b869_1044157c36c019533c5b1844e2c29053_workplace-dev.jpg`,
    alt: '',
  },
  {
    title: 'Compliance programs', // 19
    text: 'Assign required courses, set deadlines and keep records ready for any audit.', // 80
    href: '/enterprise/compliance-training-lms',
    img: `${A}6a297959979511dfc16b5972_1c5cbe1215ded7cfe733cb6b245f621b_compliance-training.jpg`,
    alt: '',
  },
  {
    title: 'Partner enablement', // 18
    text: 'Help resellers and partners learn your product so they can sell it with ease.', // 80
    href: '/enterprise/partner-training-lms',
    img: `${A}6a29795944cb8bf6cdbe105f_5aa766f3b2777f5a9b5525247354c201_partner-enable.jpg`,
    alt: '',
  },
  {
    title: 'Customer academies', // 18
    text: 'Teach customers to get more from your product and cut down on support tickets.', // 79
    href: '/enterprise/customer-training-lms',
    img: `${A}6a29795983b8703229776359_42e07aa138837bb8e329a5bd2632f6b8_customer-education.jpg`,
    alt: '',
  },
]

// §3 product demo
export const DEMO = {
  tag: '— PRODUCT DEMO',
  h2: 'See the platform at work', // 23
  // 112
  text: 'Click through a guided tour of the admin side, from building a course to checking how each learner is getting on.',
  iframe: 'https://app.storylane.io/demo/jjiurfvxjiys?embed=inline',
  thumbnail: { src: `${A}6a29890f3e3ddf7e511e229a_47fb3151dd4fa88097eb068b33d6ee4c_enterprise-storylane-img.webp`, w: 1440, h: 683, alt: '' },
}

// §4 workplace cards
export const WORK_H2 = 'Made for the modern workplace' // 29
export const WORK_CARDS = [
  {
    icon: `${A}698a3853476554b524bf6397_Engage.svg`,
    title: 'Keep every learner engaged', // 24
    // 122
    text: 'Mix video, quizzes and live sessions into programs people actually finish, on desktop or through the mobile app on the go.',
  },
  {
    icon: `${A}698a389f7737dadc49db4716_Manage.svg`,
    title: 'Manage it all centrally', // 22
    // 112
    text: 'Organise teams, roles and permissions from one dashboard and see completion data for every group at a glance.',
  },
  {
    icon: `${A}698a389f43201300526cc4ad_8a8d54f2fef3bce404fd8dd60fac97db_Secure.svg`,
    title: 'Protect what you publish', // 24
    // 110
    text: 'Single sign-on, access controls and audit-ready logs keep your content and all of your learner data in safe hands.',
  },
]

// §5 foundation
export const FOUNDATION = {
  h2: 'Everything you need, already built', // 34
  text: 'The core tools come ready, so your team can focus on the teaching.', // 66
  image: { src: `${A}6a298f9445d1887067288238_foundation-full.webp`, w: 1376, h: 750, alt: '' },
  items: [
    {
      title: 'Flexible course tools', // 19
      // 128
      text: 'Build lessons from video, text, files and assessments, then reuse modules across programs without starting from scratch again.',
    },
    {
      title: 'Reporting that helps', // 19
      // 110
      text: 'Track enrolments, progress and quiz scores in real time and export the numbers your leadership asks to see.',
    },
    {
      title: 'Branded learning hubs', // 20
      // 111
      text: 'Match your colours, fonts and domain so every academy feels like a natural part of your own company website.',
    },
    {
      title: 'Connected to your stack', // 23
      // 121
      text: 'Link your HR system, CRM and single sign-on provider so learners are enrolled and recognised without any manual effort.',
    },
  ],
  button: { label: 'Talk to our team', href: '#talk-to-team' },
}

// §6 quote (fictional placeholder)
export const QUOTE = {
  logo: { src: `/assets/placeholder-quote-logo.svg`, w: 240, h: 43, alt: 'Placeholder company logo' },
  // 162
  quote:
    '“Placeholder testimonial: our rollout took weeks instead of months, and the people we train now finish their courses at a much higher rate than they did before.”',
  attribution: 'Sample Person, Head of Learning (placeholder quote)', // 56
}

// §7 security badges (badge names are functional labels)
export const BADGES_H2 = 'Security you can trust' // 22
export const BADGES = [
  {
    icon: `${A}69e0e2f8ab376492b66e3173_security-soc2-icon-black.svg`,
    title: 'SOC 2',
    text: 'Independent auditors review how we protect, process and store data, and we renew that report every single year.', // 115
  },
  {
    icon: `${A}69e0e2f8bba97ee0f04598a9_security-pci-dss-icon-black.svg`,
    title: 'PCI DSS',
    text: 'Card payments run through certified systems that meet strict standards for handling cardholder data.', // 102
  },
  {
    icon: `${A}69e0e2f8f3673b5a9d910a2e_security-gdpr-icon-black.svg`,
    title: 'GDPR',
    text: 'Learners in the EU keep control of their personal data, with tools to view, export or erase it on request.', // 109
  },
  {
    icon: `${A}69e0e2f8a1fd8534085a20b3_security-ccpa-icon-black.svg`,
    title: 'CCPA',
    text: 'California residents can see what we hold about them and opt out of its sale at any time they choose.', // 100
  },
]

// §8 sales form (field labels are functional)
export const FORM_H2 = 'Let us help plan your learning program' // 40
// 116
export const FORM_TEXT =
  'Tell us a little about your goals and our team will put together a walkthrough built around the way your people learn.'
export const FORM = {
  logo: { src: `${A}68daba31282892b31e937809_teachable-logo-color.svg`, alt: 'Teachable' },
  // live HubSpot rich text: a 40-char paragraph, an empty line, a ~10-char paragraph (3 lines at every width)
  intro: ['Share your details and we will be in touch.', '\u00a0', 'Talk soon.'],
  fields: {
    firstName: { label: 'First Name', required: true },
    lastName: { label: 'Last Name', required: true },
    email: { label: 'Email', required: true },
    phone: { label: 'Phone Number' },
  },
  submitLabel: 'Send',
}
