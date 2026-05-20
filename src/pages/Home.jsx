import React from 'react';
import Hero from '../sections/Hero';
import TrustedCompanies from '../sections/TrustedCompanies';
import CloudServices from '../sections/CloudServices';
import PlatformAnalytics from '../sections/PlatformAnalytics';
import AISolutions from '../sections/AISolutions';
import FeaturesGrid from '../sections/FeaturesGrid';
import Infrastructure from '../sections/Infrastructure';
import Security from '../sections/Security';
import PricingPreview from '../sections/PricingPreview';
import Testimonials from '../sections/Testimonials';
import CTABanner from '../sections/CTABanner';
import SalesSection from '../sections/SalesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <SalesSection />
      {/* <CloudServices />
      <PlatformAnalytics />
      <AISolutions />
      <FeaturesGrid />
      <Infrastructure />
      <Security />
      <PricingPreview />
      <Testimonials />
      <CTABanner /> */}
    </>
  );
}
