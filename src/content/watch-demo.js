// /watch-demo stand-in copy (COMPONENT_PLAN copy policy): original text sized to specs/watch-demo.md slot
// lengths and line counts. Functional labels (eyebrow, placeholder, button / chip labels, legal link labels)
// are as recorded.
export const DEMO = {
  tag: '— Teachable DEMO',
  h1: 'Walkthrough: building, selling, reporting', // 41
  // 128
  text: 'In a few minutes you will see how a course is built, how the checkout works and how sales and students show up in your reports.',
  form: {
    placeholder: 'hello@example.com',
    submit: 'Unlock demo',
    wait: 'Unlocking…',
    consent: 'Yes, send me occasional product news and tips by email please.', // 63
    legal: [
      'By unlocking the demo you agree to our ', // 92 visible incl. links
      { label: 'Terms of use', href: '/legal/terms-of-use' },
      ' and confirm you have read the ',
      { label: 'Privacy Policy', href: '/legal/privacy-policy' },
      '.',
    ],
    success: 'All set! Your demo is ready to watch.',
  },
  trial: { label: 'Rather explore on your own? Start for free', href: 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly' }, // 41
  chip: 'Enter your email to unlock',
  thumb: '/assets/watch-demo-thumb.webp',
  video: (autoplay) =>
    `https://onelineplayer.com/player.html?autoplay=${autoplay}&autopause=false&muted=false&loop=true&url=https%3A%2F%2Fvimeo.com%2F1232149464&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true`,
  offer: {
    eyebrow: 'Bonus for viewers | Extra time', // 30
    title: 'Get thirty days to try it free', // 30
    cta: {
      label: 'Claim 30-day trial',
      href: 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly&tds=M2nylo&web_campaign=demo_offer&web_placement=video_demo_banner&web_asset=30-day-trial-banner',
    },
  },
}
