import React from 'react';
import HeroBanner from './components/sections/hero-banner';
import OneOnOneAd from './components/sections/one-on-one-ad';
import PopularLanguages from './components/sections/popular-languages';
import ProductSection from './components/sections/product-section';
import TopTutors from './components/sections/top-tutors';
import BecomeTutorCTA from './components/sections/become-tutor-cta';
import FloatingElements from './components/sections/floating-elements';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <OneOnOneAd />
      <PopularLanguages />
      <ProductSection />
      <TopTutors />
      <BecomeTutorCTA />
      <FloatingElements />
    </>
  );
}