import Hero from '../components/Hero/Hero';
import Footer from '../components/footer/Footer';
import Voluntar from '../components/voluntar/Voluntar';

export default function VoluntarPage() {
  return (
    <main>
      <Hero title="FII VOLUNTAR" backgroundImage="/assets/jpg/background-1.jpg" />
      <Voluntar />
      <Footer />
    </main>
  );
}
