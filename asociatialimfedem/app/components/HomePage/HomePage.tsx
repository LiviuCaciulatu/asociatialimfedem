"use client";

import HeroSection from './HeroSection/HeroSection';
import EchipaMain from './EchipaMain/EchipaMain';
import Mission from './Mission/Mission';
import JoinUs from './JoinUs/JoinUs';
import Gallery from './Gallery/Gallery';
import Events from './Events/Events';
import Newsletter from '../Newsletter/Newsletter';
import Footer from '../footer/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Mission />
      <JoinUs />
      <EchipaMain />
      <Gallery />
      <Newsletter />
      <Events />
      <Footer />
    </main>
  );
}
