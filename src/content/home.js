// Homepage content (CLONE_SPEC.md). Shared components use these as their default props,
// so the homepage renders unchanged while other pages pass their own copy.

const A = '/assets/'

// §5 Stats (default for <Stats/>)
export const HOME_STATS = [
  { num: '$3.5B+ earned', label: 'by Teachable creators' },
  { num: '100M+ students', label: 'served on Teachable' },
  { num: '180+ countries', label: 'using Teachable' },
]

// §13 Success stories (<Stories/>; identical on every page that uses it). `img` is a file in /assets/.
export const HOME_STORIES = [
  {
    name: 'Dan George',
    company: 'FlightInsight',
    headline: '10,000+ Students',
    quote:
      '"Teachable gave me the structure to scale beyond the classroom. What started as a few dozen students has grown into 10,000+ pilots worldwide. My courses now run 24/7, serving pilots in every time zone, while I focus on teaching and Teachable handles the technology."',
    href: 'https://flightinsight.teachable.com/',
    img: '68e472412b52873214f161ed_af941bac35e86470a5fc50c0e4d11805_DanGeorge.webp',
    alt: 'Smiling man with short brown hair, beard, and gray eyes wearing a black shirt in front of a dark background.',
    bg: false,
  },
  {
    name: 'Huzan R & Nicoleta S',
    company: 'Speak Norsk',
    headline: 'Made Simple',
    quote:
      '“We realized we couldn’t do everything on our own—teaching, managing operations, and course delivery. That’s when Teachable came in. The platform made it simple to create and deliver our programs, and even let us offer a free course so students could get comfortable before enrolling.”',
    href: 'https://speaknorskonline.teachable.com/',
    img: '68e472411eac276ecb2a885d_acd3419cdc23d64a536b9362a0f77c55_Headshot.webp',
    alt: 'Two women with light hair posing in a circular frame, wearing dark professional clothing.',
    bg: true,
  },
  {
    name: 'Anna Geiger',
    company: 'The Science of Reading',
    headline: 'Revenue Engine',
    quote:
      '“I’ve been using Teachable since 2017, and it continues to be a major revenue generator for my business. It’s easy to create and upload content, and I never have to worry about tax compliance or payment processing. I’ve tried other platforms—Teachable is hands down the best for me and my students.”',
    href: 'https://anna-geiger.teachable.com/',
    img: '68e472413569b297952cca46_913afd2f27884db7e271d63afae0dc26_AnnaGeiger.webp',
    alt: 'Smiling woman with glasses and brown hair against a gray background.',
    bg: true,
  },
  {
    name: 'Leila Gharani',
    company: 'XelPlus Academy',
    headline: 'Global Reach',
    quote:
      '“With students from 188 countries, tax compliance could have been a nightmare. Teachable handles it all, so instead of drowning in admin work, we can focus on helping our members upgrade their data skills. The platform makes our global reach possible.”',
    href: 'https://courses.xelplus.com/',
    img: '68e47241731fcd597b0e34c7_5eac61fb053a8becdbd0a29455c59bb5_LeilaGharani_xel.webp',
    alt: 'Portrait of a woman with long dark hair wearing a white top against a light background.',
    bg: true,
  },
  {
    name: 'Razvan Ciobanu',
    company: 'Voxyde',
    headline: 'Peace of Mind',
    quote:
      '"Teachable is consistently monitored and delivers excellent uptime As an instructor, that peace of mind is invaluable. On top of that, Teachable’s built-in tax handling has been a huge advantage, freeing me up to focus more on creating content and supporting my students."',
    href: 'https://voxyde.teachable.com/',
    img: '68e472416ae55881ceb0b6ab_a2de2377ce4b09a8b5f8b765899567ca_RazvanCiobanu.webp',
    alt: 'Young man with short hair and beard smiling against a blurred indoor background.',
    bg: true,
  },
  {
    name: 'Francesco Cositore',
    company: 'Vaporetto Italiano',
    headline: 'Has Been Essential',
    quote:
      '"Teachable has been essential for the growth of my business and for reaching thousands of students all over the world. It automatically takes care of payments, taxes, and enrollments, freeing me from administrative tasks so I can fully focus on the creative side of my job."',
    href: 'https://vaporettoitaliano.teachable.com/',
    img: '68e696151b1e1847cbe8c324_6f744f022c2b792ccc48c4e542526f9f_FrancescoCositore.webp',
    alt: 'Smiling bald man with trimmed beard and green jacket in an outdoor setting.',
    bg: true,
  },
]

// §15 Integrations hub (<Hub/>)
export const HUB_HEADING = 'Your stack, supercharged'
export const HUB_TEXT =
  'Connect Teachable with Stripe, Zapier, Mailchimp, Google Analytics, Zoom, and dozens of other apps you already use, and turn your tools into one system for growth.'
// [src, label]; identical on every page that uses the hub
export const HUB_LOGOS = [
  [A + '689d1d04db567f75f3a62261_app-hub-stripe.svg', 'Stripe'],
  [A + '689d1d0462cca372190a9f08_app-hub-zapier.svg', 'Zapier'],
  [A + '689d1d031ce1b8ec9b345877_app-hub-google.svg', 'Google Analytics'],
  [A + '689d1d034d45fa59de53e0c5_app-hub-mailchimp.svg', 'Mailchimp'],
  [A + '689d1d030be3cefea715a32c_app-hub-google-tag.svg', 'Google Tag Manager'],
  [A + '689d1d04e130432c21452468_app-hub-zoom.svg', 'Zoom'],
  [A + '689d1d03069fb9e107602725_app-hub-aweber.svg', 'AWeber'],
  [A + '689d1d033b1293c193f48a60_app-hub-pinterest.svg', 'Pinterest'],
  [A + '689d1d04993b4276e78c68e5_app-hub-unsplash.svg', 'Unsplash'],
  [A + '689d1d0487f229d324fbf8c5_app-hub-paypal.svg', 'PayPal'],
  [A + '689d1d037fd0b9b96a2d4300_app-hub-hotjar.svg', 'Hotjar'],
  [A + '689d1d03db4b52548cb122f6_app-hub-google-one.svg', 'Microsoft OneDrive'],
  [A + '689d1d04a956c8a33c1e71d3_app-hub-tiktok.svg', 'TikTok'],
  [A + '689d1d0459fae685a34386f0_app-hub-segment.svg', 'Segment'],
  [A + '689d1d03d25b95bae74b0354_app-hub-meta.svg', 'Meta'],
  [A + '689d1d037a573eac3aeeed3c_app-hub-dropbox.svg', 'Dropbox'],
  [A + '689d1d03f8bf1534c5b7f992_app-hub-google-drive.svg', 'Google Drive'],
  [A + '689d1d03a956c8a33c1e71ae_app-hub-calendly.svg', 'Calendly'],
]

// §17 FAQ (<Faq/>). `a` may be a string (rendered as one <p>) or JSX (rich answer).
export const HOME_FAQ_HEADING = 'Frequently asked questions about Teachable'
export const HOME_FAQ = [
  {
    q: 'What is Teachable?',
    a: 'Teachable is an all-in-one platform for experts and businesses to create and sell online courses, coaching, memberships, and digital downloads. It includes a course builder with AI tools, iOS and Android student apps, and Teachable Payments, a built-in checkout that handles sales tax, VAT, and GST. Teachable is part of Hotmart Company.',
  },
  {
    q: 'How does Teachable work?',
    a: "You create your products with Teachable's course builder, customize your school with your own brand and domain, and set your pricing. Students buy through Teachable Payments and access your content on the web or in the iOS and Android apps, while Teachable handles hosting, payments, and taxes behind the scenes. You can get started with a 7-day free trial.",
  },
  {
    q: 'Who uses Teachable?',
    a: 'More than 150,000 creators, experts, and businesses use Teachable, from language teachers and finance professionals to fitness coaches and companies training their teams. What they have in common is a commitment to education: Teachable helps them turn real-world expertise into thriving education businesses.',
  },
  {
    q: 'What can I sell on Teachable?',
    a: 'You can sell online courses, one-on-one or group coaching, digital downloads like templates and guides, and memberships with recurring subscriptions. You can also bundle products, add a community for your students, and offer upsells and order bumps at checkout.',
  },
  {
    q: 'Is Teachable legit?',
    a: 'Yes. Teachable is part of Hotmart Company and is used by more than 150,000 experts and businesses. Together, Teachable and Hotmart creators have earned more than $10 billion, and students in 180 countries learn on Teachable.',
  },
  {
    q: 'Is Teachable free?',
    a: "No, Teachable doesn't have a free plan. Every self-serve plan (Starter, Builder, and Growth) includes a 7-day free trial and a 30-day money-back guarantee, so you can test the platform before committing. See current prices on our pricing page.",
  },
  {
    q: 'Are there any transaction fees?',
    a: 'Only on the Starter plan, which has a 7.5% transaction fee. Builder, Growth, and Custom plans have 0% transaction fees when you use Teachable Payments. Standard payment processing fees may still apply.',
  },
  {
    q: 'Can I change my plan once I sign up?',
    a: "Yes. You can change your plan at any time from your school's admin. You'll be charged the new plan amount at your next billing date.",
  },
  {
    q: 'Can I cancel my account at any time?',
    a: "Yes, you can cancel your Teachable account at any time. If you're within your first 30 days, you can also request a refund under our 30-day money-back guarantee.",
  },
]
