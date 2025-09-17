import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import CeFacem from "../components/ce-facem/CeFacem";
import JoinUs from '../components/JoinUs/JoinUs';

export default function Page() {
  return (
    <>
      <Hero
        title="Ce facem?"
        description="Asociatia Pacientilor cu Limfedem este o organizație non-profit dedicată îmbunătățirii vieții pacienților care suferă de limfedem, o boală cronică debilitantă care poate afecta drastic calitatea vieții și duce la complicații serioase și, în unele cazuri, la invaliditate permanentă."
        buttonText="IMPLICA-TE SI TU"
        buttonHref="/implica-te"
        backgroundImage="/assets/jpg/background-1.jpg"
      />
  <CeFacem />
  <JoinUs />
  <Footer />
    </>
  );
}
