import Hero from "../components/Hero/Hero";
import Events from "../components/Events/Events";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/Footer";

export default function Page() {
  return (
    <>
      <Hero 
        title="EVENIMENTE"
        // description="Participă la evenimentele noastre și alătură-te luptei împotriva limfedemului."
        // buttonText="ÎNREGISTREAZĂ-TE"
        // buttonHref="/inregistrare"
        backgroundImage="/assets/jpg/background-1.jpg"/>
      <Events />
      <Newsletter />
      <Footer />
    </>
  );
}
