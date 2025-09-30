import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import JoinUs from "../components/JoinUs/JoinUs";
import Newsletter from "../components/Newsletter/Newsletter";
import DespreLimfedem from "../components/despre-limfedem/DespreLimfedem";


export default function Page() {
  return (
    <>
      <Hero title="Despre Limfedem" />
      <DespreLimfedem />
      <JoinUs />
      <Newsletter />
      <Footer />
    </>
  );
}
