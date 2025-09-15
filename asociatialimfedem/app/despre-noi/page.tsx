import Newsletter from "../components/Newsletter/Newsletter";
import JoinUs from "../components/HomePage/JoinUs/JoinUs";
import Footer from "../components/footer/Footer";
import DespreNoiHero from "../components/despre-noi-hero/DespreNoiHero";
import Welcome from "../components/welcome/Welcome";

export default function Page() {
  return (
    <div>
  <DespreNoiHero />
  <Welcome />
  <JoinUs />
      <Newsletter />
      <Footer />
    </div>
  );
}
