// /student-experience stand-in copy (specs/student-experience.md slot tables), written fresh to each
// slot's purpose and sized to the recorded character / line counts. Parts are assembled by the page.

export const HERO = {
  tag: '— LEARNER EXPERIENCE',
  // `.span_h1-e` replaces the "e" between pre and post
  h1: { pre: 'Lessons th', post: 'y look forward to' },
  intro: 'Give each student a clean, focused place to learn, with progress tracking, interactive quizzes, certificates and community features that keep them engaged until the very end.',
}

export const WHY = {
  heading: 'Lessons that feel easy and natural',
  text: 'When the experience is simple and pleasant, students spend their energy on the material instead of the interface, and they finish what they start.',
}

export const EXPLAINER = {
  heading: 'Everything students need to stay motivated and reach their goals',
  text: 'From the first lesson to the final certificate, each tool is designed to keep learners moving forward and coming back for more of what you teach.',
  rows: [
    [
      { title: 'A distraction-free player for each lesson', text: 'Video, audio, text and downloadable files sit in one tidy layout, with a sidebar that shows exactly what comes next in the course.' },
      { title: 'Progress at a glance', text: 'Completion bars and checkmarks let learners see how far they have come and how much is left.' },
    ],
    [
      { title: 'Live coaching', text: 'Book one-on-one or group sessions right alongside your course, so students can get personal guidance whenever they hit a sticking point.' },
      {
        title: 'Quizzes that teach',
        // inline link (17 chars) between pre and post
        text: {
          pre: 'Check understanding after every module and give learners instant feedback. Build a complete set in seconds with our ',
          link: 'AI quiz generator',
          post: '.',
        },
      },
    ],
    [
      { title: 'Compliance ready', text: 'Require lessons in order, set minimum watch times and issue certificates on completion, ideal for training that has to meet formal standards.' },
      {
        // the title's inline `.feature_txt-link` (10 chars) follows pre
        title: { pre: 'Our ', link: 'mobile app' },
        // one italic word between pre and post
        text: { pre: 'Students can continue learning on the go, download lessons for offline use and get reminders that make ', em: 'daily', post: ' study an easy habit to keep.' },
      },
    ],
  ],
}

export const CTA = { heading: 'Create a learning experience students will love' }
