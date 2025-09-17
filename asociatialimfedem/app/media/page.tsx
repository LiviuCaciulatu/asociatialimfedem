import JoinUs from '../components/JoinUs/JoinUs';
import Footer from '../components/footer/Footer';
import Hero from '../components/Hero/Hero';
import MediaComponent from '../components/media-component/MediaComponent';

export default function Page() {
  return (
    <main>
      <Hero 
        title="Media"
        description="Asociația noastră are misiunea de a transforma
                    viața pacienților cu limfedem din întreaga Românie."
        buttonText="IMPLICA-TE SI TU"
        buttonHref="/implica-te"
        backgroundImage="/assets/jpg/background-1.jpg"
      />
  <MediaComponent />
  <JoinUs />
      <Footer />
    </main>
  );
}

