import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";

export default function Page() {
  return (
    <>
      <Hero 
        title="CONTACT"
        description="Asociația noastră are misiunea de a transforma
                    viața pacienților cu limfedem din întreaga Românie."
        // buttonText="CONTACTEAZĂ-NE"
        // buttonHref="/contact"
        backgroundImage="/assets/jpg/background-1.jpg"/>
      <Footer />
    </>
  );
}
