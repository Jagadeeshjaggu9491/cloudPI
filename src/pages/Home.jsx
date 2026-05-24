import React from 'react';
import Hero from '../sections/Hero';
import TrustedCompanies from '../sections/TrustedCompanies';
import CloudServices from '../sections/CloudServices';
import PlatformAnalytics from '../sections/PlatformAnalytics';
import AISolutions from '../sections/AISolutions';
import FeaturesGridSection from '../sections/FeaturesGridSection';
import Infrastructure from '../sections/Infrastructure';
import Security from '../sections/Security';
import Testimonials from '../sections/TestimonialSection';
import CTABanner from '../sections/CTABanner';
import SalesSection from '../sections/SalesSection';
import Footer from '../sections/Footer';
import VisibilitySection from '../sections/VisibilitySection';
import GrowthStackSection from '../sections/GrowthStackSection';
import PricingSection from '../sections/PricingSection';
import BlogsSection from '../sections/BlogsSection';
import FAQSection from '../sections/FAQSection';
import ChallengesSection from '../sections/ChallengesSection';
import HowItWorks from '../sections/HowItWorks';
import IntegrationsSection from '../sections/IntegrationsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <SalesSection />
      <VisibilitySection />
      <GrowthStackSection />
      <FeaturesGridSection />
      <ChallengesSection />
      <HowItWorks />
      {/* <CloudServices />
      <PlatformAnalytics />
      <AISolutions />
      <FeaturesGrid />
      <Infrastructure />
      <Security />
      <PricingPreview />
      
      <CTABanner /> */}
      <PricingSection />
      <Testimonials />
      <IntegrationsSection />
      <BlogsSection />
      <FAQSection />

      <Footer />
    </>
  );
}
