"use client";

import HeroSection from './HeroSection/HeroSection';
import EchipaMain from './EchipaMain/EchipaMain';
import Mission from './Mission/Mission';
import JoinUs from './JoinUs/JoinUs';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Mission />
      <JoinUs />
      <EchipaMain />
    </main>
  );
}
