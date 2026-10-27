// /payments stand-in copy (COMPONENT_PLAN copy policy): original text sized to specs/payments.md slot lengths
// and line counts. Functional labels (buttons, table feature names and recorded values, payment-method
// names, form labels) are as recorded. Testimonials are fictional placeholders.
const A = '/assets/'
export const SIGN_UP = 'https://sso.teachable.com/secure/teachable_accounts/sign_up?trial_plan_id=builder-usd-monthly'

// §1 hero
export const HERO = {
  h1: ['Payments that ', 'just', ' work for you'], // 31 incl. the 3-char italic word (rendered <em>)
  // 119
  text: 'Take card, wallet and local payments in one checkout, with taxes handled and earnings paid out to you on a fast schedule.',
  image: { src: `${A}6a4e7ed52971b84972fdf6c3_payments_hero_image_2x.webp`, w: 1158, h: 910, alt: '' },
}

// §2 testimonials (fictional)
export const TESTIMONIALS = [
  {
    avatar: { src: `${A}6a4fbfc1facbb36352e0c3b1_Leila_Quality_Gemini%20(3).webp`, alt: '' },
    name: 'Sample Name A', // 13
    school: 'Example Academy', // 15
    headline: 'Placeholder quote: payouts sped up', // 31
    // 204
    quote:
      'This is placeholder testimonial text. It stands in for a creator describing how moving their checkout over made it simpler to sell abroad and gave them a clearer view of what they earn each month.',
  },
  {
    avatar: { src: `${A}6a4fd566ea8b1c280fd0bdce_Anna_mid.webp`, alt: '' },
    name: 'Sample Name', // 11
    school: 'Demo Studio of Learning', // 22
    headline: 'Sample review', // 14
    quote: [
      'Placeholder text for a second testimonial. It describes, in general terms, a creator who found that ',
      'a single checkout for every customer', // strong, 40
      ' cut down on admin work, reduced failed payments and left more time each week for writing new course material.',
    ], // 253
  },
]

// §3 video
export const VIDEO = {
  eyebrow: 'Watch a two-minute overview', // 30
  src: 'https://onelineplayer.com/player.html?autoplay=false&autopause=false&muted=false&loop=true&url=https%3A%2F%2Fvimeo.com%2F1207879910%3Fshare%3Dcopy%26fl%3Dsv%26fe%3Dci&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true',
  title: 'Payments walkthrough',
}

// §4 compare table (labels and recorded values verbatim; long cells are stand-ins of the recorded length)
export const COMPARE = {
  h2: 'How our checkout stacks up', // 29
  columns: ['', 'Teachable', 'Others'],
  rows: [
    { label: 'Processing rate', values: ['2.9%', 'Provider-dependent, plus transaction extras'] }, // 42
    { label: 'Tax Handling (Calculation, collection AND remittance)', values: ['Calculated, collected and filed for you', 'Limited or manual'] }, // 40
    { label: 'Support', values: ['Dedicated account manager', 'Self-serve ticket queue'] },
    { label: 'Instant payouts', values: ['✓', 'Typically weekly, sometimes even monthly'] }, // 41
    { label: 'Buy Now, Pay Later', values: ['✓', 'Paid add-on'] },
    { label: 'Local currency display & checkout translation', values: ['✓', '✕'] },
    { label: 'Learning Experience + Checkout', values: ['✓', '✕'] },
  ],
}

// §5 feature rows #1
export const FEATURES_1 = {
  header: {
    title: 'Everything you need to get paid online', // 38
    text: 'Dependable payment infrastructure that integrates seamlessly with how your school already sells.', // 92
  },
  rows: [
    {
      img: `${A}6a4e7c79738b531761234b2d_payments_3x%20copy.webp`,
      w: 1931,
      h: 1228,
      alt: '',
      imageFirst: true,
      title: 'Sell to anyone, anywhere', // 24
      text: 'Give international customers the payment options they recognise and trust.', // 71
      list: [
        'Cards, wallets and local methods', // 34
        'Prices shown in the buyer’s own currency', // 39
        'Checkout pages translated for each region', // 39
        'Fewer declined payments at the till', // 41
      ],
    },
    {
      img: `${A}6a4eb4968867005543c44b6b_payments_affiliate_colleagues_2x.webp`,
      w: 1288,
      h: 819,
      alt: '',
      imageFirst: false,
      title: 'Grow revenue through integrated upselling', // 39
      text: 'Raise order values and reward the people who send customers your way, all from one place.', // 88
      list: [
        'Order bumps and upsells added at the checkout', // 45
        'Coupons and limited-time offers', // 33
        'Affiliate tracking with automatic payouts', // 41
        'Payment plans and subscription billing', // 41
      ],
      cta: { label: 'Start for free', href: SIGN_UP },
    },
  ],
}

// §6 migrate banner
export const MIGRATE = {
  h2: 'Moving over from another tool?', // 29
  text: [
    'Our team handles the move for you, with ',
    'no setup costs', // strong 12
    ', your student records ',
    'transferred in full', // strong 20
    ' and a ',
    'dedicated move expert', // strong 19
    ' on hand from day one to launch.',
  ], // 141
}

// §7 feature rows #2
export const FEATURES_2 = [
  {
    img: `${A}6a4e7c784a812dbd7ab7af64_payments_3x.webp`,
    w: 1931,
    h: 1228,
    alt: '',
    imageFirst: true,
    title: 'Worldwide tax, sorted', // 20
    text: 'Sales tax, VAT and GST are worked out, collected and filed so you can stay focused on teaching.', // 84
    list: [
      'Tax worked out at checkout in every region', // 43
      'Filing handled for you in dozens of countries', // 45
      'Clear records ready for whenever you need them', // 46
      'Invoices issued to buyers automatically too', // 45
    ],
  },
  {
    img: `${A}6a4e7c78769e81f32a20a775_migrate_2x.webp`,
    w: 1288,
    h: 819,
    alt: '',
    imageFirst: false,
    title: 'Paid fast, every day', // 19
    text: 'Earnings land in your bank account on a quick, predictable schedule with no reserve held back.', // 90
    list: [
      'Daily payouts straight to your bank account', // 43
      'No reserves or rolling holds on your earnings', // 44
      'A single dashboard that shows every sale, refund and payout as it happens, in real time', // 84
    ],
    cta: { label: 'Start for free', href: SIGN_UP },
  },
]

// §8 payment logos (payment-method names are functional)
const logo = (f, alt) => ({ src: `${A}${f}`, alt })
export const LOGOS = {
  h2: ['Accept payments from ', 'all over'], // 25 incl. the 9-char italic phrase
  text: 'Dozens of popular payment methods, ready at checkout.', // 55
  row1: [
    logo('6a4569ead5f160b7b58f0a00_blik.svg', 'BLIK'),
    logo('6a4569e7b5099af9908584ba_sepa.svg', 'SEPA'),
    logo('6a4569e5b2828a1a3bb3313c_affirm.svg', 'Affirm'),
    logo('6a4569e237b0be9a4f1507cf_alipay.svg', 'Alipay'),
    logo('6a4569e09032b8cc2f706a8f_apple-pay.svg', 'Apple Pay'),
    logo('6a4569de082db8336b0b92b3_google-pay.svg', 'Google Pay'),
    logo('6a4569dd267b40a32a057a15_klarna.svg', 'Klarna'),
    logo('6a4569db84cda9f84297d16f_mastercard.svg', 'Mastercard'),
    logo('6a4569d83ab56a1352592e8a_visa.svg', 'Visa'),
    logo('6a4569c7bbf7ba0f63370ace_wechat-pay.svg', 'WeChat Pay'),
  ],
  row2: [
    logo('6a456a3d819c3fed3c24c5a5_afterpay.svg', 'Afterpay'),
    logo('6a456a3fbbf7ba0f63376187_bancontact.svg', 'Bancontact'),
    logo('6a456a41b5099af99085afb7_grabpay.svg', 'GrabPay'),
    logo('6a456a43700a97857a35fe7c_mobilepay.svg', 'MobilePay'),
    logo('6a46ba61e1389f203c93c9c0_multibanco%20(1).svg', 'Multibanco'),
    logo('6a456a33318f96e57792f76b_pix.svg', 'Pix'),
    logo('6a456a353f10cc03265c354e_przelewy24.svg', 'Przelewy24'),
    logo('6a456a3737b0be9a4f153028_revolut-pay.svg', 'Revolut Pay'),
    logo('6a456a39ac2a88af8e8a7784_twint.svg', 'TWINT'),
    logo('6a456a3b8dd01aae28f0e28b_amex.svg', 'American Express'),
  ],
}

// §9 sales form
export const FORM_H2 = 'Want a closer look at payments for your own school?' // 51
// 93
export const FORM_TEXT = 'Book a consultation and specialists will demonstrate checkout, payouts and taxation for you.'
export const FORM = {
  logo: { src: `${A}68daba31282892b31e937809_teachable-logo-color.svg`, alt: 'Teachable' },
  intro: ['Share your details and we will be in touch.', ' ', 'Talk soon.'],
  fields: {
    firstName: { label: 'First Name', required: true },
    lastName: { label: 'Last Name', required: true },
    email: { label: 'Email', required: true },
    phone: { label: 'Phone Number' },
  },
  submitLabel: 'Send',
}

// §10 FAQ (8 items; q / a lengths per spec)
export const FAQ_HEADING = 'Questions about payments?' // 26
export const FAQ = [
  {
    q: 'Which payment methods can my buyers use?', // 41
    a: 'Buyers can pay with major cards, popular digital wallets and a growing list of local methods. The checkout shows the options that suit each buyer based on where they are, so they always see something familiar.', // 199
  },
  {
    q: 'How long does it take for my earnings to reach my bank?', // 52
    a: 'Once a sale clears, your earnings are sent out on a daily schedule. The exact time it takes for the money to show in your account depends on your bank, but most creators see funds within a few working days. You can follow every payout from your dashboard as it moves.', // 268
  },
  {
    q: 'Do you calculate and file sales tax and VAT on my behalf?', // 58
    a: 'Yes. Tax is worked out at checkout based on the buyer’s location, added to the order and collected with the payment. We then file and remit it in the regions we cover, so you do not need to register or report in each one yourself. Records are kept for you.', // 263
  },
  {
    q: 'Can I offer payment plans or subscriptions to students?', // 55
    a: 'You can. Split a higher price into a set number of instalments, or charge a recurring fee for ongoing access to a membership. Buy now, pay later options are also available at checkout in supported regions, letting buyers spread the cost while you are paid upfront in full.', // 289
  },
  {
    q: 'What does it cost to use payments?', // 37
    a: 'Each sale carries a standard processing fee, and some plans also include a small platform fee. There are no setup charges or monthly minimums. The full breakdown is on our pricing page.', // 200
  },
  {
    q: 'What happens if a buyer disputes a charge with the bank?', // 52
    a: 'We let you know as soon as a dispute is opened and guide you through sending evidence such as receipts and access logs. A small fee applies to each dispute, and we handle the back and forth with the bank.', // 210
  },
  {
    q: 'Can I keep my current payment provider running alongside your checkout?', // 75
    a: 'Yes. You can connect an outside gateway if you prefer, although some features such as automatic tax filing, daily payouts and local payment methods only work with our own checkout. Many creators start by running both side by side, then switch over fully once they are comfortable.', // 276
  },
  {
    q: 'Is my buyers’ payment data kept safe?', // 36
    a: 'Payment details are handled by certified providers that meet strict industry standards, and card numbers never touch your school. Every checkout page uses encryption, and suspicious orders are flagged for review before they go through.', // 259
  },
]
