import Header from "../components/Header";
import ServicesHero from "../components/ServicesHero";
import ServicesIntro from "../components/ServicesIntro";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesIntro />
      <Services />
      <Footer />
    </main>
  );
}


