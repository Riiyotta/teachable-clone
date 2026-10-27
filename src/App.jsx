import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import { PAGE_SLUGS } from './routes.js'
import Pricing from './pages/Pricing.jsx'
import OnlineCourses from './pages/OnlineCourses.jsx'
import Coaching from './pages/Coaching.jsx'
import DigitalDownloads from './pages/DigitalDownloads.jsx'
import Memberships from './pages/Memberships.jsx'
import Payments from './pages/Payments.jsx'
import Enterprise from './pages/Enterprise.jsx'
import AIHub from './pages/AIHub.jsx'
import AppHub from './pages/AppHub.jsx'
import AnalyticsAndReporting from './pages/AnalyticsAndReporting.jsx'
import CustomerJourney from './pages/CustomerJourney.jsx'
import MobileApp from './pages/MobileApp.jsx'
import SalesAndMarketing from './pages/SalesAndMarketing.jsx'
import SiteBuilder from './pages/SiteBuilder.jsx'
import StudentExperience from './pages/StudentExperience.jsx'
import WatchDemo from './pages/WatchDemo.jsx'
import Examples from './pages/Examples.jsx'

// Built pages register here; unbuilt slugs fall back to ComingSoon.
const PAGES = {
  'pricing': Pricing,
  'online-courses': OnlineCourses,
  'coaching': Coaching,
  'digital-downloads': DigitalDownloads,
  'memberships': Memberships,
  'payments': Payments,
  'enterprise': Enterprise,
  'ai-hub': AIHub,
  'app-hub': AppHub,
  'analytics-and-reporting': AnalyticsAndReporting,
  'customer-journey': CustomerJourney,
  'mobile-app': MobileApp,
  'sales-and-marketing': SalesAndMarketing,
  'site-builder': SiteBuilder,
  'student-experience': StudentExperience,
  'watch-demo': WatchDemo,
  'examples': Examples,
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {PAGE_SLUGS.map((slug) => {
            const Page = PAGES[slug] ?? ComingSoon
            return <Route key={slug} path={slug} element={<Page />} />
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
