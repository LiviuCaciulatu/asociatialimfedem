import React from 'react';
import EchipaLimfedem from '../components/echipa-noastra-page/echipa-limfedem/EchipaLimfedem';
import EchipaNoastraHero from '../components/echipa-noastra-page/echipa-hero/echipa-noastra-Hero';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';
import JoinUs from '../components/echipa-noastra-page/join-us/JoinUs';

export default function Page() {
  return (
    <main>
      <EchipaNoastraHero />
      <EchipaLimfedem />
      <JoinUs />
      <Newsletter />
      <Footer />
    </main>
  );
}
