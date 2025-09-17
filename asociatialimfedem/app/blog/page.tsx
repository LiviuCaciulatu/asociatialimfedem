import Hero from "../components/Hero/Hero";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/Footer";

export default function Page() {
  return (
    <>
      <Hero 
        title="BLOG"
        description="Asociația noastră are misiunea de a transforma
                    viața pacienților cu limfedem din întreaga Românie."
        buttonText="IMPLICA-TE SI TU"
        buttonHref="/implica-te"
        backgroundImage="/assets/jpg/background-1.jpg"/>
      <Newsletter />
      <Footer />
    </>
  );
}
