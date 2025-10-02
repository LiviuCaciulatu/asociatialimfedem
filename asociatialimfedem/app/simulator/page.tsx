import Simulator from '../components/Simulator/Simulator';
import Hero from '../components/Hero/Hero';
import Footer from '../components/footer/Footer';

export const metadata = {
  title: 'Simulator - Calculator volum braț',
};

export default function Page() {
  return (
    <main>
        <Hero
          title="CALCULATOR VOLUM BRAT"
          backgroundImage="/assets/jpg/background-1.jpg"
        />
      <Simulator />
      <Footer />
    </main>
  );
}
