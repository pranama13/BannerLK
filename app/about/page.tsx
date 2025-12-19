import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSecondSection from "../components/AboutSecondSection";
import AboutValuesSection from "../components/AboutValuesSection";
import AboutClientsSection from "../components/AboutClientsSection";
import AboutStatsSection from "../components/AboutStatsSection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero title={<>About <span className="text-cyan-400">Us</span></>} />
      <AboutSecondSection />
      <AboutValuesSection />
      <AboutClientsSection />
      <AboutStatsSection />
      <Footer />
    </main>
  );
}


