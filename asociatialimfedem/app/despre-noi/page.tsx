import Newsletter from "../components/Newsletter/Newsletter";
import JoinUs from "../components/HomePage/JoinUs/JoinUs";
import Footer from "../components/footer/Footer";
import Hero from "../components/Hero/Hero";
import Welcome from "../components/welcome/Welcome";

export default function Page() {
  return (
    <div>
  <Hero
    title="Despre noi"
    description="Asociația noastră are misiunea de a transforma
      viața pacienților cu imfedem din întreaga Românie."
    buttonText="Implică-te si tu"
    buttonHref="/implica-te"
    backgroundImage="/assets/jpg/background-1.jpg"
  />
  <Welcome />
  <JoinUs />
      <Newsletter />
      <Footer />
    </div>
  );
}
