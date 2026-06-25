import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import Process from "./components/Process";
import CaseStudy from "./components/CaseStudy";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <CaseStudy />
        <WhyChoose />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
