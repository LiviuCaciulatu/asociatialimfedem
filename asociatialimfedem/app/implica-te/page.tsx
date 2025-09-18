import Hero from "../components/Hero/Hero";
import ImplicaTe from "../components/implica-te/ImplicaTe";
import Footer from "../components/footer/Footer";

export default function Page() {
  return (
    <>
      <Hero 
                title="Implică-te"
        description="Asociația noastră are misiunea de a transforma
                    viața pacienților cu limfedem din întreaga Românie."
        backgroundImage="/assets/jpg/background-1.jpg"
      />
      <ImplicaTe />
      <Footer />
    </>
  );
}
