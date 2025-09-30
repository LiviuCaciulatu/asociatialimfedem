import Hero from "../components/Hero/Hero";
import Events from "../components/Events/Events";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/footer/Footer";

export default function Page() {
  return (
    <>
      <Hero 
        title="EVENIMENTE"
        backgroundImage="/assets/jpg/background-1.jpg"/>
      <Events />
      <Newsletter />
      <Footer />
    </>
  );
}
