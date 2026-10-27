// /mobile-app stand-in copy (specs/mobile-app.md slot tables), written fresh to each slot's purpose
// and sized to the recorded character / line counts. Parts are assembled into JSX by the page.

export const HERO = {
  tag: '— ANY DEVICE',
  // `.span_h1-e` replaces the "e" between pre and post
  h1: { pre: 'Your courses, r', post: 'ady wherever learners are' },
  // the intro ends in one bold run whose last word is also italic
  intro: {
    text: 'Learners can stream lessons, finish quizzes and pick up right where they left off on iOS and Android, synced with your own school and branded with your name, ',
    strong: 'for no added ',
    em: 'cost',
    end: '.',
  },
}

export const WHY = {
  heading: 'Lessons that fit neatly into a commute, a lunch break or the quiet minutes before bedtime',
  pill: 'LEARNING THAT TRAVELS FAR',
  text:
    'People rarely sit at a desk for an uninterrupted hour of study anymore. They learn in small bursts between work, family and other responsibilities. Giving them a fast, familiar app means more of those spare minutes become completed lessons, and completed lessons create happier students who return for your next course and recommend you.',
}

export const EXPLAINER = {
  title: 'Offline access when the signal fades',
  text:
    'Students can save videos and lesson files to their phone ahead of time, then keep studying on a flight, a train or anywhere the connection drops. Progress syncs back to your school as soon as they reconnect, so nothing they finish is ever lost.',
}

export const LIST = {
  heading: 'Everything learners need in their hand',
  text: 'Each feature is designed to keep students moving through your material, on whatever screen is nearest.',
  cards: [
    { title: 'Quizzes and progress tracking', text: 'Answer questions, see results instantly and check exactly how far along each course is.' },
    { title: 'Audio playback', text: 'Lock the screen and keep listening to lessons, much like a podcast, while out walking or driving.' },
    { title: 'Reminders that nudge back', text: 'Gentle push notifications bring learners back to unfinished lessons so they keep going and finish strong.' },
    { title: 'Comments on the move', text: 'Ask questions and reply to classmates directly from any lesson.' },
  ],
}

export const TWO_COL = {
  heading: 'Video that adapts to every screen and network',
  text: 'Playback adjusts its quality to the connection, supports captions and variable speed, and resumes from the exact second the learner last paused it.',
}

export const RATING = {
  heading: 'What learners love about it',
  text: 'Students rate the app highly for its speed, simple layout and the way it makes daily study feel easy to keep up.',
  cards: [
    { by: 'paperplane_learns • 02/11/2025', title: 'Smooth and simple', text: 'Downloads work perfectly and I can study anywhere without trouble.' },
    {
      by: 'quietcoder_88 • 09/03/2024',
      title: 'My daily habit',
      text: 'I fit a lesson in every morning on the bus. The audio mode is a lifesaver and my progress is always right where I left it on my laptop too.',
    },
    { by: 'mira.sketches • 05/2025', title: 'Fab', text: 'Clean design, quick to load, never crashes.' },
  ],
}

export const CTA = {
  heading: 'Put your school in a pocket',
  text: 'Turn on the app for your learners in a few clicks and give them a smooth way to study anywhere, on any phone they own.',
}

export const FAQ = {
  heading: 'Common app questions, answered',
  items: [
    {
      q: 'Is the app available for both iPhone and Android?',
      a: 'Yes. Learners can download it from the App Store or Google Play at no charge, then sign in with the same email and password they use for your school.',
    },
    {
      q: 'Can students see every course in the app?',
      // inline link (5 chars) between pre and post
      a: {
        pre: 'Most course content shows up automatically, including video, audio, text, quizzes and downloadable files. A few lesson types still open in a browser instead, such as some custom code blocks and embedded third-party tools. For the full list of what is supported, read this ',
        link: 'guide',
        post: ' before you plan your next lesson.',
      },
    },
    {
      q: 'Do I need to set anything up before my students can use it?',
      a: 'Nothing extra is required. Once your school is live, any enrolled learner can find it in the app and start learning from their phone right away.',
    },
    { q: 'Does the app cost anything?', a: 'No, it is included with your plan and free for every one of your learners.' },
    {
      q: 'Can learners download lessons too?',
      a: 'Yes, video and audio lessons can be saved to the device and played later with no connection at all.',
    },
    {
      q: 'Will purchases made in the app show in my sales?',
      a: 'Learners enroll and pay through your school website, and anything they buy there appears in the app as soon as checkout is done. Your sales reports, payouts and student records stay in one place, so you can manage every order from your admin dashboard. Refunds and coupon codes also work exactly the way they already do on the web today.',
    },
  ],
}
