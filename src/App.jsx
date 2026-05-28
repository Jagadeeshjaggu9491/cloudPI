import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Home from './pages/Home';
import Footer from './sections/Footer';
import PlatformCapabilities from './pages/Platform/PlatformCapabilities/PlatformCapabilities';
import Integrations from './pages/Platform/Integrations/Integrations';
import WorkflowAutomation from './pages/Platform/WorkflowAutomation/WorkflowAutomation';
import CloudCostAnalytics from './pages/Platform/CloudCostAnalytics/CloudCostAnalytics';
import Governance from './pages/Platform/Governance/Governance';
import CostAllocation from './pages/Platform/CostAllocation/CostAllocation';
import BillingAnalysis from './pages/Platform/BillingAnalysis/BillingAnalysis';
import Rightsizing from './pages/Platform/Rightsizing/Rightsizing';
import DashboardReports from './pages/Platform/Dashboard&Reports/Dashboard&Reports';
import Pricings from './pages/Pricings/Pricings';
import AboutUs from './pages/Company/AboutUs/AboutUs';
import Careers from './pages/Company/Careers/Careers';
import ContactUs from './pages/Company/ContactUs/ContactUs';
import Features from './pages/Company/Features/Features';
import CompanySecurity from './pages/Company/Security/Security';
import UserGuide from './pages/Resources/UserGuide/UserGuide';
import PressReleases from './pages/Resources/PressReleases/PressReleases';
import FAQs from './pages/Resources/FAQs/FAQs';
import CaseStudies from './pages/Resources/CaseStudies/CaseStudies';
import Blogs from './pages/Resources/Blogs/Blogs';
import SolutionsByRole from './pages/Solutions/SolutionsByRole/SolutionsByRole';
import SolutionsByPerson from './pages/Solutions/SolutionsByPerson/SolutionsByPerson';
import WhyColouPi from './pages/Solutions/WhyColouPi/WhyColouPi';

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform/platform-capabilities" element={<PlatformCapabilities />} />
          <Route path="/platform/integrations" element={<Integrations />} />
          <Route path="/platform/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/platform/cloud-cost-analytics" element={<CloudCostAnalytics />} />
          <Route path="/platform/governance" element={<Governance />} />
          <Route path="/platform/cost-allocation" element={<CostAllocation />} />
          <Route path="/platform/billing-analysis" element={<BillingAnalysis />} />
          <Route path="/platform/rightsizing" element={<Rightsizing />} />
          <Route path="/platform/dashboards-reports" element={<DashboardReports />} />
          <Route path="/pricing" element={<Pricings />} />
          <Route path="/company/about-us" element={<AboutUs />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/contact-us" element={<ContactUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/get-started" element={<ContactUs />} />
          <Route path="/company/features" element={<Features />} />
          <Route path="/company/security" element={<CompanySecurity />} />
          <Route path="/resources/user-guide" element={<UserGuide />} />
          <Route path="/resources/press-releases" element={<PressReleases />} />
          <Route path="/resources/faqs" element={<FAQs />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/blogs" element={<Blogs />} />
          <Route path="/solutions/by-role" element={<SolutionsByRole />} />
          <Route path="/solutions/by-persona" element={<SolutionsByPerson />} />
          <Route path="/solutions/why-cloudpi" element={<WhyColouPi />} />
          {/* Fallback routing */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
