// /app-hub stand-in copy (specs/app-hub.md). Tab labels, app names and logo files are functional labels
// recorded in the spec; every description, intro and the footnote are written fresh and sized to the
// recorded character / line counts. Parts are assembled into JSX by the page.

export const HERO = {
  tag: '— APP HUB',
  // `.span_h1-o` replaces the "o" between pre and post
  h1: { pre: 'Connect the t', post: 'ols that power your business' },
  // intro = strong + text + em + end
  intro: {
    strong: 'Bring your favorite apps together in a single place.',
    text: ' Sync email lists, track visitors, take payments and automate busy work with integrations that plug into your school, so the tools you ',
    em: 'already use',
    end: ' keep working.',
  },
  login: { prefix: 'Already a customer? ', label: 'Log in to access apps' },
}

const L = (file) => `/assets/${file}`

export const TABS = [
  {
    label: 'Email marketing',
    intro: 'Grow your list and stay in touch with students automatically. Connect a mail platform to welcome new buyers, share updates and send reminders that bring people back.',
    apps: [
      { name: 'Mailchimp', logo: L('689d1d034d45fa59de53e0c5_app-hub-mailchimp.svg'), text: 'Add new students and leads to your audience the moment they sign up, then send targeted campaigns based on the courses and products they purchased.' },
      { name: 'Kit', logo: L('68c20cdd6bb8435136af9d87_app-hub-kit.svg'), text: 'Tag subscribers by what they buy and trigger automated sequences that guide each person toward the next course that suits them.' },
      {
        name: 'AWeber',
        logo: L('689d1d03069fb9e107602725_app-hub-aweber.svg'),
        text: 'Send each new buyer to the right list and keep them engaged with regular newsletters, launch announcements and personal follow-ups.',
        more: { label: 'LEARN MORE', href: 'https://teachable.com/aweber' },
      },
      { name: 'ActiveCampaign', logo: L('68ca43b89a4062cd6367c53f_app-hub-activecamp.svg'), text: 'Build detailed automations that react to enrollments, completions and purchases, and score every lead so you always know who is ready to buy next.' },
      { name: 'MailerLite', logo: L('68ca4445d69b50a6599be639_app-hub-mailerlite.svg'), text: 'Sync contacts automatically and design simple, good-looking emails that announce launches, offers and new lessons.' },
    ],
  },
  {
    label: 'Analytics',
    intro: 'Understand where visitors come from and what they do on your pages, so you can improve every step between first click and purchase.',
    apps: [
      { name: 'Google Analytics 4', logo: L('689d1d031ce1b8ec9b345877_app-hub-google.svg'), text: 'Measure traffic, sources and conversions across your school and see which pages turn the most visitors into buyers.' },
      { name: 'Google Tag Manager', logo: L('689d1d030be3cefea715a32c_app-hub-google-tag.svg'), text: 'Manage all your tracking tags from a single dashboard and add new ones without editing code.' },
      { name: 'Hotjar', logo: L('689d1d037fd0b9b96a2d4300_app-hub-hotjar.svg'), text: 'Watch heatmaps and session recordings to see where visitors click, scroll and hesitate on your sales and lesson pages.' },
    ],
  },
  {
    label: 'Sales & Conversions',
    intro: 'Reach more buyers and close more sales. Share your school from social profiles, take payments with trusted providers, add social proof and urgency, and measure every ad you run so your budget goes to the campaigns that bring in real students.',
    apps: [
      { name: 'Linktree', logo: L('68f3a1e2456c17720f2f5a10_app-hub-linktree.svg'), text: 'Point followers from one bio link straight to your courses, products and free lessons.' },
      { name: 'WordPress Plugin', logo: L('68f3a27e1a7ad765f1e4b284_app-hub-wordpress.svg'), text: 'Display your courses and checkout buttons on an existing WordPress site, so visitors can browse and buy without leaving the blog they already read.' },
      { name: 'Stripe', logo: L('689d1d04db567f75f3a62261_app-hub-stripe.svg'), text: 'Accept cards and popular payment methods from buyers around the world, with payouts sent straight to your account.' },
      { name: 'PayPal', logo: L('689d1d0487f229d324fbf8c5_app-hub-paypal.svg'), text: 'Let students pay with the wallet they already trust, which can reduce drop-off at checkout and make it easier to buy across borders.' },
      { name: 'Witness', logo: L('68f3a3f8c516a2bfdafa1bb8_app-hub-witness.svg'), text: 'Collect reviews and testimonials from happy students automatically, then show them on your sales pages to build trust with every new visitor who arrives.' },
      { name: 'Deadline Funnel', logo: L('68f3a5983f65034b708d9086_app-hub-deadline.svg'), text: 'Add genuine, personal countdown timers to your offers and emails so limited-time promotions feel clear and real.' },
      { name: 'Sumo', logo: L('68f3a6ed9a35d3f4f923098a_app-hub-sumo.svg'), text: 'Capture more email addresses with pop-ups, welcome mats and share buttons.' },
      { name: 'Pinterest Ads', logo: L('689d1d033b1293c193f48a60_app-hub-pinterest.svg'), text: 'Track which pins and promoted posts lead to sign-ups and sales, and build audiences from people who visit your pages.' },
      { name: 'TikTok Pixel', logo: L('689d1d04a956c8a33c1e71d3_app-hub-tiktok.svg'), text: 'Measure the results of short-video campaigns and retarget viewers who showed interest.' },
      { name: 'Meta Pixel', logo: L('689d1d03d25b95bae74b0354_app-hub-meta.svg'), text: 'Connect ads on Facebook and Instagram to your sales so you can see what actually converts.' },
      { name: 'Linkedin Insight Tag', logo: L('68f3a7639039ffc9b855871b_app-hub-linkedin.svg'), text: 'Learn which professional audiences engage with your school and measure the impact of every sponsored campaign.' },
    ],
  },
  {
    label: 'Business',
    intro: 'Run the day-to-day side of your school with less effort by linking calendars, file storage and automation.',
    apps: [
      { name: 'Calendly', logo: L('689d1d03a956c8a33c1e71ae_app-hub-calendly.svg'), text: 'Let students book coaching calls at times that suit both of you, with reminders sent automatically.' },
      { name: 'Segment', logo: L('689d1d0459fae685a34386f0_app-hub-segment.svg'), text: 'Collect customer events from your school in one stream and send them to the analytics and marketing tools your team relies on.' },
      { name: 'Zapier', logo: L('689d1d0462cca372190a9f08_app-hub-zapier.svg'), text: 'Connect thousands of apps without code and automate routine tasks whenever a student enrolls, completes or buys.' },
      { name: 'Google Drive', logo: L('689d1d03f8bf1534c5b7f992_app-hub-google-drive.svg'), text: 'Pull files from your Drive straight into lessons without downloading and uploading them.' },
      { name: 'Dropbox', logo: L('689d1d037a573eac3aeeed3c_app-hub-dropbox.svg'), text: 'Import videos and documents directly from your Dropbox folders.' },
      { name: 'OneDrive & OneDrive Business', logo: L('689d1d03db4b52548cb122f6_app-hub-google-one.svg'), text: 'Bring course files over from personal or work storage in a few clicks and keep your materials organized in one place.' },
    ],
  },
  {
    label: 'Learning experience',
    intro: 'Make lessons more interactive and personal. Add live sessions and community spaces that help students learn together and stay on track.',
    apps: [
      { name: 'Wobo', logo: L('68f3a81d1897843038b3bebf_app-hub-wobo.svg'), text: 'Create a branded community where students can ask questions, share wins and keep each other motivated between lessons and live events.' },
      { name: 'Zoom', logo: L('689d1d04e130432c21452468_app-hub-zoom.svg'), text: 'Schedule and host live classes, office hours and coaching sessions, then share the recordings with your students afterward.' },
    ],
  },
  {
    label: 'Site design',
    intro: 'Give your school a richer look with extra content and imagery that keeps visitors reading and exploring.',
    apps: [
      { name: 'DropInBlog', logo: L('68f3a8ec4abb4cd2054f172f_app-hub-dropinblog.svg'), text: 'Add a search-friendly blog to your school in minutes and publish articles that draw new readers toward your courses.' },
      { name: 'Unsplash', logo: L('689d1d04993b4276e78c68e5_app-hub-unsplash.svg'), text: 'Search a huge free photo library and drop high-quality images right into your pages.' },
    ],
  },
]

export const FOOTNOTE =
  'All product names, logos and brands shown on this page are the property of their respective owners and are used for identification only. Their appearance here does not imply endorsement, sponsorship or partnership unless that relationship is stated explicitly. Features, availability and pricing of third-party apps are set by each provider and may change without notice. Some integrations may require a paid plan or a separate account with the provider before they can be connected.'

export const CTA = {
  heading: 'Your tools, working together',
  text: 'Connect your first app and see how much time you save.',
  login: { text: 'Already a customer? ', linkLabel: 'Log in to access apps' },
}
