import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import PersoaneJuridice from "../components/persoane-juridice/PersoaneJuridice";
import Questions from "../components/questions/Questions";

export default function Page() {
  return (
    <>
      <Hero
        title="Redirecționare impozit"
        description="Informații despre redirecționarea a 3.5% din impozitul pe venit către Asociație"
        backgroundImage="/assets/jpg/background-1.jpg"
      />
      <PersoaneJuridice />
      <Questions />
      <Footer />
    </>
  );
}
