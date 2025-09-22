import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import PersoaneFizice from "../components/persoane-fizice/PersoaneFizice";

export default function Page() {
  return (
    <>
      <Hero
        title="Persoane fizice"
      />
      <PersoaneFizice />
      <Footer />
    </>
  );
}
