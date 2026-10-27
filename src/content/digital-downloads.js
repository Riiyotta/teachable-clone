// /digital-downloads stand-in copy (specs/digital-downloads.md + product-template.md slot notes).
// Written fresh to each slot's purpose and sized to the recorded character / line counts.
// Functional labels kept as recorded: "— DIGITAL DOWNLOADS", button labels, the 7 sell-list file types.

export const HERO = {
  tag: '— DIGITAL DOWNLOADS',
  h1: 'Package your best expertise into downloadable products',
  intro: 'Sell templates, guides and toolkits as instant downloads, with checkout and delivery handled for you.',
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

export const SPLIT_1 = {
  heading: 'Launch a download in minutes',
  items: [
    {
      title: 'Upload almost any kind of file',
      text: 'PDFs, audio, video, slides or zipped folders all work, and buyers get them the moment they pay.',
    },
    {
      title: 'Sales pages included',
      text: 'Ready-made page layouts show off your product clearly without hiring a designer.',
    },
    {
      title: 'Set the price you want',
      text: 'Charge once, offer a discount or bundle several files together into one great value package.',
    },
  ],
}

export const SPLIT_2 = {
  heading: 'Turn one idea into income',
  items: [
    {
      title: 'Reuse what you have made',
      text: 'Slides, worksheets and checklists from past projects can become products in an afternoon.',
    },
    {
      title: 'Reach buyers on any device',
      text: 'Pages and checkout look sharp on phones, tablets and laptops, so no sale slips by.',
    },
    {
      title: 'Grow with every sale',
      text: 'Collect buyer emails, follow up with offers and invite past customers back when you release something new.',
    },
  ],
}

export const SPLIT_3 = {
  heading: 'Pair downloads with your courses and coaching',
  items: [
    {
      title: 'Add files to any course',
      text: 'Attach templates and workbooks to lessons so students have practical tools to use alongside every single module.',
    },
    {
      title: 'Sell bundles',
      text: 'Group downloads with a course or a coaching package to raise the value of each order and give buyers a complete solution.',
    },
    {
      title: 'Offer free lead magnets',
      text: 'Give away a sample guide in exchange for an email address and turn new readers into paying customers later on.',
    },
  ],
}

export const HUB = {
  heading: 'Plug in the tools you prefer',
  text:
    'Connect email, analytics, payments and marketing apps in a few clicks, so the services you already rely on keep working together alongside your digital products.',
}

export const SELL = {
  heading: 'Sell just about any digital product',
  text: 'If it lives in a file, you can probably sell it here. A few popular ideas to start:',
  items: ['Design files', 'Spreadsheets', 'Ebooks', 'Stock imagery', 'Email templates', 'Lesson plans', 'Asset libraries'],
}

export const CTA = {
  heading: 'Start selling your first digital download today, no code required',
}

// Answers: string = one paragraph; array of segments = one paragraph with inline links
// (segment = string | { label, href }), wrapped in an outer array (one block).
const HELP = 'https://support.teachable.com'
export const FAQ = {
  heading: 'Questions about downloads',
  items: [
    {
      q: 'What kinds of file can I sell as a download?',
      a: [['Most common formats are supported, including PDF, MP3, MP4, ZIP, slide decks and image files of many kinds. See the ', { label: 'full list', href: HELP }, ' for the current size limits on each upload.']],
    },
    {
      q: 'How do buyers receive the files after they pay for it?',
      a: [['As soon as payment goes through, buyers get instant access from a confirmation page and an email with a secure link. They can also sign in later to download the files again from their library at any time. Read more in our ', { label: 'delivery guide', href: HELP }, '.']],
    },
    {
      q: 'Can I sell downloads alongside courses or coaching?',
      a: [['Yes. Downloads can be sold on their own, added to a course as a bonus, or grouped with coaching sessions in a bundle. Mixing formats is a good way to reach buyers at different price points and to give existing students more value. You can set separate prices for each item or create one combined offer, and update the files whenever you have a new version. Learn how in our ', { label: 'bundles article', href: HELP }, '.']],
    },
    {
      q: 'Is there a limit on how many I can sell?',
      a: 'There is no cap on the number of copies you sell. The number of products you can publish depends on your plan, and you can upgrade whenever you are ready to add more. Every plan includes secure delivery and checkout.',
    },
    {
      q: 'Can I offer discounts or free versions of my files?',
      a: [['Yes. Create coupon codes for limited-time sales, or set a price of zero to offer a free download that grows your email list. Free products are a great way to introduce people to your work before they buy something bigger. Find the steps in ', { label: 'coupon setup', href: HELP }, '.']],
    },
    {
      q: 'How do I deliver updates to people who bought before?',
      a: [['When you replace a file, everyone who bought it gets access to the newest version automatically. You can also ', { label: 'email buyers', href: HELP }, ' to let them know, check ', { label: 'version history', href: HELP }, ' for past files, or read our ', { label: 'update tips', href: HELP }, ' for best practice.']],
    },
    {
      q: 'Are my files protected from sharing?',
      a: [['Download links are unique to each buyer and expire after a set time, which helps keep your files secure. See ', { label: 'security', href: HELP }, ' for details.']],
    },
    {
      q: 'Do I need a website to get started?',
      a: [['No. ', { label: 'Sales pages', href: HELP }, ', ', { label: 'checkout', href: HELP }, ', ', { label: 'delivery', href: HELP }, ' and ', { label: 'hosting', href: HELP }, ' are all included out of the box.']],
    },
  ],
}
