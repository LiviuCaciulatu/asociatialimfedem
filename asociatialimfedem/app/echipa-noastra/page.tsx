import React from 'react';
import EchipaLimfedem from '../components/echipa-limfedem/EchipaLimfedem';
import Hero from '../components/Hero/Hero';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/Newsletter/Newsletter';
import JoinUs from '../components/JoinUs/JoinUs';

export default function Page() {
  return (
    <main>
      <Hero
        title="Echipa noastră"
        description="Asociația noastră are misiunea de a transforma viața pacienților cu limfedem din întreaga Românie."
        buttonText="IMPLICA-TE SI TU"
        buttonHref="/implica-te"
        backgroundImage="/assets/jpg/background-1.jpg"
      />
      <EchipaLimfedem />
      <JoinUs />
      <Newsletter />
      <Footer />
    </main>
  );
}
