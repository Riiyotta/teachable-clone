// /examples stand-in copy (COMPONENT_PLAN copy policy): original text sized to specs/examples.md slot lengths
// and line counts. Tab names and buttons are functional labels used as recorded. Card titles, summaries and
// author names are fictional stand-ins of the recorded lengths; images and links are the real ones.
const A = '/assets/'
const S = '?src=teachable-examples'

export const HERO_H1 = 'Browse real schools built by creators just like you' // 50

const card = (cover, avatar, href, title, text, author) => ({
  image: `${A}${cover}.avif`,
  avatar: `${A}${avatar}.avif`,
  href,
  title,
  text,
  author,
})

export const TABS = [
  {
    label: 'Niche',
    title: 'Niche',
    // 209
    intro:
      'Some of the most loyal audiences gather around very specific passions. These creators turned a focused hobby or craft into a school that people seek out, proving that a narrow topic can still support a business.',
    newTab: true,
    cards: [
      card('689a0566c5af7a6407f42f5b_6596ef8bfc941a2e93d4d508_home-cooking', '689a0566c5af7a6407f42f57_6596ef87fc941a2e93d4d31d_mike-greenfield', `https://www.sourdoughu.com/join-now${S}`,
        'Bread Studio', 'A step-by-step baking school that walks home cooks from their very first starter to bakery-quality loaves, with videos, printable schedules and a friendly community.', 'Sample Baker'),
      card('689a05668ac0c083c53f8d9f_6596ef5aaeabd76693839c00_alec-steele-blacksmith', '689a05668ac0c083c53f8d9b_6596ef5dbf147c8467e0369d_alec-steele', `https://beginblacksmithing.com/${S}`,
        'Forge Fundamentals Lab', 'Hands-on metalwork lessons for beginners, covering safety, tools and simple first projects you can make in a home shop.', 'Example Smith'),
      card('689a0566d000b7bd733937c9_6596efb0072f90c0beea0fcf_uav-coach', '689a0566d000b7bd733937d1_6596efada34db62434fc6833_alan-perlman', `https://learn.uavcoach.com/${S}`,
        'Sky Pilot', 'Practical drone training that prepares hobby and commercial pilots for certification exams and real flying in the field.', 'Placeholder Pilot'),
      card('689a05664dd435d768457945_6596efff30beb6878c72b241_shoemaking', '689a05664dd435d768457948_6596effcbf147c8467e0909e_amanda-overs', `https://icanmakeshoes.teachable.com/${S}`,
        'Shoe Craft', 'A complete course in making footwear by hand, from patterns and lasts to stitching soles, taught through detailed close-up video so students can follow every step at their own pace from home.', 'Demo Maker Name'),
      card('689a05665b5018222d5b69ec_6596efd7ad41b4bafccb89ea_houseplant-care', '689a05665b5018222d5b69f0_6596efd4b6cd5bb6d3c785f5_summer-rayne-oakes', `https://www.houseplantmasterclass.com/${S}`,
        'Plant Care Club', 'Everything a new plant owner needs to keep greenery thriving indoors, from light and watering to repotting and pests.', 'Sample Green Thumb'),
    ],
  },
  {
    label: 'Health',
    title: 'Health',
    // 177
    intro:
      'Wellness educators use online schools to reach people far beyond their local studio. Here are coaches helping students move, eat and feel better on their own time.',
    cards: [
      card('689a056760ab6de42c6a5b5e_6596ed0fe5a1e91fa62114b8_yoga', '689a056760ab6de42c6a5b67_6596ed0b89c89cde31bcdc28_rachel-jesien', `https://racheljesienyoga.teachable.com/${S}`,
        'Flow', 'Gentle yoga classes for every level, with short daily sessions, longer weekend practices and a library of guided breathing work.', 'Sample Instructor'),
      card('689a0567a98d95fb21bbc1db_6596ecead25eaf40a5debef3_fitness-bootcamp', '689a0567a98d95fb21bbc1d3_6596ece7b27739948a0f53c3_greg-o-gallagher', `https://my.kinobody.com/${S}`,
        'Strength Program', 'Structured workout plans that build muscle and fitness at home or in the gym, with clear progressions, nutrition guidance and progress tracking for each phase.', 'Example Trainer'),
      card('689a0567f3fdaa7502d1fb47_6596ee877c21212f7a141fbc_breastfeeding', '689a0567f3fdaa7502d1fb43_6596ee85299a388ddada0945_stacey-stewart', `https://milkology.teachable.com/${S}`,
        'New Parent Hub', 'Supportive courses for expecting and new parents, covering feeding, sleep, recovery and the first few weeks at home with a newborn baby, taught by a nurse.', 'Placeholder Nurse'),
      card('689a05670035af5ade3f08d3_6596ee5eab45a707ae20e95a_nutrition', '689a05670035af5ade3f08d0_6596ee5bacbc4da003f0e700_susan-watson-rd', `https://courses.nutritionacademy.co/courses${S}`,
        'Eat Smart', 'Evidence-based nutrition lessons from a registered dietitian that help students build sustainable habits, read food labels with confidence and plan balanced meals each day.', 'Sample Dietitian'),
      card('689a0566884de518dfd486d4_6596eeb08bc665e6138e33e7_healthy-cooking', '689a0566884de518dfd486d0_6596eeac113efb16ddb1a211_happy-bellyfish', `https://school.happybellyfish.com/${S}`,
        'Good Food Club', 'Simple, wholesome recipes and practical kitchen skills for busy people who want to cook healthier meals every week.', 'Demo Kitchen'),
    ],
  },
  {
    label: 'Business',
    title: 'Business',
    // 130
    intro:
      'Companies and consultants build schools to train customers, certify professionals and share their expertise with a much wider audience.',
    cards: [
      card('689a056409b9a7867fcef83a_6596f5fe45a286d397820897_product-marketing-alliance', '689a056409b9a7867fcef83d_6596f6031dccad79cecaa9b2_product-marketing-alliancel-ogo', `https://certified.productmarketingalliance.com/p/product-marketing-certified-core${S}`,
        'Marketing Certificate Hub', 'Professional certification programs for product marketers, with expert-led modules, graded assessments and a recognised credential awarded at the end of each course.', 'Example Association'),
      card('689a0564c10a2b6c76eaf6dc_6596f5a9403bd0bbd663fb89_gsn3-academy', '689a0564c10a2b6c76eaf6e0_6596f5a79821a3382a2b1089_gsn3', `https://gns3.teachable.com/${S}`,
        'Net Academy', 'Free and paid networking courses that help engineers practise with real configurations before going live.', 'Sample Network'),
      card('689a05648058b17def8509ab_6596f62a31d488dcab30f7b2_cover-insurance', '689a05648058b17def8509a8_6596f62d15e5d97421287db5_cover-insurance-logo', `https://drivingschoolacademy.teachable.com/${S}`,
        'Driver Insights', 'Training for driving instructors on running a successful school, covering marketing, pricing and client care.', 'Placeholder Cover'),
      card('689a0564215a15b845819e09_6596f52c7e279d5bdb3de7c4_the-new-york-times', '689a0564215a15b845819e0d_6596f5224f4f03820202c789_the-new-york-times-logo', `https://online.nytedu.com/p/how-to-tell-brand-stories-with-video${S}`,
        'Video Story Course', 'A newsroom-style course on telling brand stories with video, from finding the angle to shooting and editing short pieces that hold attention on every platform.', 'Example Publisher'),
      card('689a0564d38020c93d36e955_6596f4e7eddfbce0d268e1c1_stackskills', '689a0564d38020c93d36e951_6596f4e4b8068a3300aa0882_stackskillslogo', `https://stackskills.com/${S}`,
        'Skill Stack', 'A large library of tech and business courses for learners who want to upskill at their own speed.', 'Demo Library'),
      card('689a05640587fc371d7a9f69_6596f5da5977dcf1ebf89c76_getresponse', '689a05640587fc371d7a9f6d_6596f5d1afc36ed962038f7d_getresponse-logo', `https://www.certification.getresponse.com/${S}`,
        'Email Certs', 'Certification courses for email marketers that teach list growth, automation and campaign reporting.', 'Sample Software'),
    ],
  },
  {
    label: 'Academics',
    title: 'Academics',
    // 122
    intro:
      'Tutors and educators reach students worldwide with exam prep, languages and specialist subjects taught by real experts.',
    cards: [
      card('689a05660e20918a4185ea65_6596f0c9aeabd76693848f1e_a-levels-tutoring', '689a05660e20918a4185ea61_6596f0cc6d61aa5f06351d86_tailored-tutors', `https://tailoredtutors.co.uk/${S}`,
        'Exam Prep Online', 'Revision courses for secondary students preparing for final exams, with recorded lessons, past-paper walkthroughs and practice questions written by experienced tutors who know what examiners want.', 'Example Tutors'),
      card('689a05663972616cfc9d417c_6596f0f7976302ad69ef1429_languages', '689a05663972616cfc9d4177_6596f0f37648e97a7872c62d_coffee-break-languages', `https://coffeebreaklanguages.com/${S}`,
        'Talk Easy', 'Bite-sized language lessons designed to fit into a short daily break, covering several languages with audio, video and printable notes that help learners build real confidence over time.', 'Sample Language Studio'),
      card('689a0566ccbdc3f3226fa72c_6596f149070874eade6ac271_self-published-authors', '689a0566ccbdc3f3226fa730_6596f146abe54f58ebd9fb91_mark-dawson', `https://learn.selfpublishingformula.com/${S}`,
        'Indie Author Workshop', 'Courses that guide writers through self-publishing, from preparing a manuscript to marketing their finished book.', 'Placeholder Author'),
      card('689a0566248df625a23e2067_6596f129ac0d55644f947a96_3d-design', '689a0566248df625a23e2063_6596f1278bc665e6138fd38e_zacharias-reinhardt', `https://cgboost.com/academy/${S}`,
        'Render Lab', 'Project-based 3D design training where students model, light and render scenes, building a portfolio of finished pieces as they progress through each level.', 'Demo Designer'),
      card('689a0566608dd89ca8fe42d1_6596f16cd7997cd15e3acc49_e-learning-courses', '689a0566608dd89ca8fe42d5_6596f16ad0980aaf95325162_henry-reich', `https://academy-hacker.teachable.com/${S}`,
        'Science Explained', 'Approachable science lessons built from short animated videos that make tricky ideas easy to grasp.', 'Sample Physicist'),
      card('689a056582a5b28675036e0a_6596f1987648e97a78731c88_music-production', '689a056582a5b28675036e01_6596f191a7ae2814f8be7051_io-music-academy', `https://online.iomusic.academy/${S}`,
        'Beat Making 101', 'Music production courses for aspiring producers, covering software, sound design, arrangement, mixing and finishing tracks, taught by working professionals who share their own sessions and full project files.', 'Example Music School'),
    ],
  },
  {
    label: 'Membership',
    title: 'Membership',
    // 162
    intro:
      'A membership turns one-off buyers into a lasting community. These creators offer ongoing lessons, fresh content and group access for a regular monthly fee.',
    cards: [
      card('689a05650a98667ef4195d8e_6596f2cfde14c2d27c3aa436_harmonica-school', '689a05650a98667ef4195d8a_6596f2cc813c0bd8a6e3e4f4_tomlin-leckie', `https://www.tomlinharmonicaschool.com/${S}`,
        'Harmonica Hall', 'A members-only music school with a growing library of lessons, monthly live sessions and a supportive forum where players share recordings and get friendly feedback.', 'Sample Musician'),
      card('689a0565bc32c4ddac7b87e9_6596f31eb41e333d9feb365b_jewelry', '689a0565bc32c4ddac7b87e5_6596f31b93f068aa38873291_jessica-rose', `https://jewelleryschoolonline.teachable.com/${S}`,
        'Jewelry', 'Monthly jewelry-making projects for members, with materials lists and close-up demonstrations.', 'Example Jeweler'),
      card('689a05655466f2999ad9543f_6596f355aba0759b4faee740_coding-classes', '689a05655466f2999ad95443_6596f35097f2933bb79fa94f_tyler-mcginnis', `https://ui.dev/courses/${S}`,
        'Code Club Plus', 'A subscription for developers that bundles in-depth programming courses with regular updates as tools change.', 'Placeholder Dev'),
      card('689a056526d64eab83fb0617_6596f2eb7e7f1549f45439aa_trading-skills', '689a056526d64eab83fb061b_6596f2e8e34ebc99e895f63f_sean-jantz', 'https://tvc.teachable.com/p/btgtradingmembership',
        'Market Mentors', 'A membership for new traders with weekly lessons, market reviews and a members’ chat for questions.', 'Sample Trader'),
      card('689a0565c033fc596be2e75c_6596f3b75e8ac74a643d8c3e_marketing', '689a0565c033fc596be2e760_6596f3b29e7eaa16daf18a30_edward-zia', `https://edwardzia.teachable.com/p/theawesomemarketingvault${S}`,
        'The Vault', 'A members’ library of marketing templates, swipe files and short lessons, refreshed with new material every month.', 'Demo Marketer'),
    ],
  },
  {
    label: 'Arts',
    title: 'Arts',
    // 156
    intro:
      'Artists and makers share their techniques with students everywhere, turning studio know-how into courses that inspire people to create something new.',
    cards: [
      card('689a05675b5018222d5b6a74_6596eb3371c0f452f63204f8_watercolor', '689a05675b5018222d5b6a78_6596eb2f30a4ae80fc261d9a_angela-fehr', `https://learn.angelafehr.com/p/creativewatercolour${S}`,
        'Painting With Water', 'Loose, expressive watercolour lessons for beginners and improvers, with demonstrations that show every brushstroke and simple exercises to build skill.', 'Sample Painter'),
      card('689a0567b56d5bf38a2c57cc_6596eb677c21212f7a11dc24_hand-lettering-course', '689a0567b56d5bf38a2c57cf_6596eb64de14c2d27c35cdad_lauren-hom', `https://homsweethom.teachable.com/${S}`,
        'Lettering Lab', 'A playful introduction to hand lettering, from basic strokes to finished pieces, with printable practice sheets and projects to share with friends and family.', 'Example Letterer'),
      card('689a05677ed36eb33a44922e_6596eba8a7ae2814f8badbad_arcylic-pouring-course', '689a05677ed36eb33a449232_6596eba6e2c6f5c0bae1400d_deby-coles', `https://acrylicpouring.teachable.com/${S}`,
        'Pour Art Studio', 'Colourful fluid-art techniques explained step by step, including mixing paints, choosing surfaces and creating cells, so students can make striking pieces at home.', 'Placeholder Artist'),
      card('689a0567e42e27e034d8bc52_6596ec0830beb6878c6fc53b_paper-flower-course', '689a0567e42e27e034d8bc5d_6596ebfe0a805a81fbe82edf_catherine-oxley', `https://bouqpaperflowers.teachable.com/${S}`,
        'Paper Blooms', 'Detailed tutorials for crafting realistic paper flowers, from simple stems to full bouquets, with templates and supply guides for every design in the course.', 'Sample Crafter'),
      card('689a0567248df625a23e20f3_6596ebcd1767ebfae5134d8e_make-fabulous-cakes-course', '689a0567248df625a23e20ef_6596ebca02f47727d23e785e_darlene-abarquez', `https://learn.make-fabulous-cakes.com/${S}`,
        'Cake Design School', 'Cake decorating classes covering buttercream, fondant, piping and sugar flowers, so home bakers can create showpiece cakes.', 'Demo Cake Artist'),
    ],
  },
]

export const LEADERS_TEXT = 'Trusted by creators, educators and well-known brands around the world' // 66
export const LEADERS = [
  { src: `${A}68d51329c3e11f4a3f681a6c_the-new-york-times-logo.svg`, alt: 'The New York Times', size: 'lg' },
  { src: `${A}68de6926991aef872e27c9ea_intuit-logo.svg`, alt: 'Intuit', size: 'sm' },
  { src: `${A}68de6926069edd6be4caa969_shopify-logo.svg`, alt: 'Shopify', size: 'md' },
  { src: `${A}68d513297751735c9b29d6f9_pearson-logo.svg`, alt: 'Pearson', size: 'md' },
  { src: `${A}68de69269f37095cb963ff00_penn-law-logo.svg`, alt: 'Penn Law', size: 'md' },
]

export const CTA_LINES = ['Ready to see how your own school', 'could look and feel?'] // 51 with <br>
