import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import PersoaneJuridice from "../components/persoane-juridice/PersoaneJuridice";
import Questions from "../components/questions/Questions";

export default function Page() {
  return (
    <>
      <Hero
        title="Persoane juridice"
        description="Alege să conteze unde ajung banii companiei tale"
        backgroundImage="/assets/jpg/background-1.jpg"
      />
      <PersoaneJuridice />
      <Questions />
      <Footer />
    </>
  );
}
