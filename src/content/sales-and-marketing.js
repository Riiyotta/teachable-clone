// /sales-and-marketing stand-in copy (specs/sales-and-marketing.md slot tables), written fresh to each
// slot's purpose and sized to the recorded character / line counts. Parts are assembled by the page.

export const HERO = {
  tag: '— GROWTH AND PROMOTION KIT',
  // `.span_h1-e` replaces the "e" between pre and post
  h1: { pre: 'Sell mor', post: ', faster' },
  intro: 'Launch offers, grow an audience and turn interested visitors into paying students with tools that work together from the start.',
}

export const WHY = {
  heading: 'Marketing that carries on as you keep creating',
  text: 'Marketing should never swallow the hours you set aside for teaching. Set up checkout pages, discounts and automated follow-ups once, then let them handle the steady, repetitive work of bringing in new students while you focus on new content.',
}

export const EXPLAINER = {
  heading: 'Built-in tools to attract, convert and retain',
  text: 'Every step from first visit to repeat purchase, handled in a single place.',
  rows: [
    [
      { title: 'Smart bundles', text: 'Package related courses, downloads and coaching into one offer at a single price, so buyers get more value and each sale brings in a larger order for you.' },
      { title: 'Upsells', text: 'Suggest a relevant add-on at checkout and raise the value of every order in one click.' },
    ],
    [
      { title: 'Lead magnets', text: 'Offer a free mini-course, checklist or sample lesson in exchange for an email address, then nurture those new subscribers until they are ready to buy the full program.' },
      {
        title: 'Coupons and promotions',
        // one italic word between pre and em / post
        text: {
          pre: 'Create percentage or fixed discounts, limit them by date or quantity, and share a unique link for each campaign so you always know which promotion ',
          em: 'actually',
          post: ' drove the sale you are seeing.',
        },
      },
    ],
    [
      { title: 'Affiliate sales', text: 'Recruit partners to promote your courses and pay them a commission automatically whenever a referral turns into a buyer.' },
      { title: 'Email integrations', text: 'Sync new students and leads to your mailing list right away, then trigger the right sequence based on what each person bought or downloaded.' },
    ],
  ],
}

export const LIST = {
  // one italic word (`em`) after pre
  heading: { pre: 'Grow ', em: 'smarter' },
  text: 'More ways to reach buyers and keep them coming back for every new release.',
  cards: [
    { title: 'Pricing', text: 'Choose one-time payments, payment plans or subscriptions to match how your audience buys.' },
    { title: 'Order bumps', text: 'Show a small complementary offer on the checkout page that buyers can add with one click before paying.' },
    { title: 'Bundles', text: 'Group several products together and sell the full package for one attractive, simple price.' },
    { title: 'Landing pages', text: 'Publish focused sales pages with templates designed to turn more visitors into buyers.' },
    { title: 'Abandoned carts', text: 'Send automatic reminders to interested buyers who left checkout before finishing.' },
    { title: 'Referral codes', text: 'Give each partner a tracked link and see exactly which ones bring in the most new sales.' },
    { title: 'SEO', text: 'Customize titles, descriptions and web addresses so search engines surface your school.' },
    { title: 'Tracking pixels', text: 'Connect ad platforms to measure which campaigns lead to sales and spend your budget wisely.' },
  ],
}

export const INT = {
  heading: 'Connect your ad stack',
  text: 'Plug in the advertising and tracking tools you already use, from social media pixels to tag managers, and measure every single campaign from the very first click through to checkout without writing code or hiring a developer.',
}

export const QUICK_LINKS = {
  heading: 'Free guides',
  text: 'Practical resources to plan and promote your launch.',
  slides: [
    { title: 'A ready-made template for sales pages', text: 'Fill in the blanks to write a page that clearly explains your offer.' },
    {
      title: 'A step-by-step plan for marketing your online course',
      text: 'Map out the weeks before, during and after launch with a simple checklist you can follow along.',
    },
    { title: 'Email templates for your next promotion', text: 'Copy, adjust and send proven messages that announce an offer and drive sign-ups.' },
    { title: 'Proven ways to market online courses to the right audience', text: 'Ideas to reach the people who need your course.' },
    { title: 'Tips for designing landing pages that convert', text: 'Layout, copy and design habits that help more visitors buy.' },
  ],
}

export const CTA = {
  heading: 'Ready to bring in more students with less effort on your part?',
  text: 'Set up your first offer today and watch the results start to arrive.',
}
