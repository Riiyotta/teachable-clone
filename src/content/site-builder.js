// /site-builder stand-in copy (specs/site-builder.md slot tables), written fresh to each slot's purpose
// and sized to the recorded character / line counts. Parts are assembled by the page.

export const HERO = {
  tag: '— YOUR WEBSITE',
  h1: 'Design a website that reflects your style',
  intro: 'Pick a theme, drag in the sections you want and publish a polished site for your courses without touching any code.',
}

export const EXPLAINER = {
  heading: 'Customize every page in a few clicks',
  text: 'Start from a professional layout, then change colors, fonts, images and sections until the whole site matches your brand and the way you teach.',
  rows: [
    [
      {
        title: 'Drag-and-drop page editor',
        // one italic word between pre and post
        text: { pre: 'Add, move and remove blocks on any page and see each change ', em: 'instantly', post: ' before it goes live to visitors.' },
      },
      { title: 'Themes designed for creators', text: 'Choose from clean, modern themes that already look professional on phones, tablets and large desktop screens.' },
    ],
    [
      { title: 'Your own custom domain', text: 'Connect a web address you already own so students always find your school under your own name.' },
      {
        title: 'Built-in SEO tools',
        text: 'Set page titles, descriptions and social previews so search engines and shared links show your school the way you want it to appear.',
      },
    ],
  ],
}

export const LIST = {
  heading: { pre: 'Build ', em: 'faster' },
  text: 'Handy extras that make your site easier to manage as your school grows.',
  cards: [
    { title: 'Page layouts', text: 'Start from ready-made layouts for home, sales, about and thank-you pages, then adjust them.' },
    { title: 'Brand kit', text: 'Save your logo, colors and fonts once and apply them across every page of the site in one step.' },
    { title: 'Custom navigation', text: 'Arrange menus and footer links so visitors always find the courses and pages that matter.' },
    { title: 'Mobile preview', text: 'Check exactly how each page looks on a phone before you publish any changes.' },
    { title: 'Code snippets', text: 'Add your own HTML, CSS or tracking scripts to any page when you need a little extra control.' },
    { title: 'Multi-language', text: 'Translate key buttons and labels so students around the world feel at home on your site.' },
    { title: 'Image library', text: 'Upload, crop and reuse images across pages without leaving the editor or resizing files.' },
    { title: 'Blog', text: 'Publish articles to share your expertise, attract organic search traffic and point readers toward courses.' },
  ],
}

export const CTA = {
  heading: 'Launch your new site',
  text: 'Pick a theme and go live in an afternoon.',
}

export const FAQ = {
  heading: 'Questions about the builder',
  items: [
    { q: 'Do I need to know code?', a: 'Not at all. You can change everything visually in the editor and theme settings.' },
    {
      q: 'Can I use my own domain name instead of the default address?',
      a: 'Yes. Connect any domain you own from your settings, and your school will load at that address with a secure connection.',
    },
    {
      q: 'Can someone build the site for me?',
      // inline link (26 chars) between pre and post
      a: {
        pre: 'Yes. If you would rather hand off the design work, browse our ',
        link: 'directory of vetted experts',
        post: ' and hire a designer who knows the platform well. They can set up your theme, write custom code, build sales pages and connect tools, so you stay focused on teaching.',
      },
    },
    {
      q: 'Will my site look good on phones?',
      // inline link (17 chars) between pre and post
      a: {
        pre: 'Every theme is responsive, so pages adjust automatically to any screen size. You can preview the mobile layout at any time before publishing. If you need a specific mobile tweak, our ',
        link: 'expert designers',
        post: ' can help you fine-tune the details for you.',
      },
    },
  ],
}
