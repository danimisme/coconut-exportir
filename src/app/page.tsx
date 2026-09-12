import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HorizontalGallery from "@/components/HorizontalGallery";
import About from "@/components/About";
import Products from "@/components/Products";
import SpiralSection from "@/components/SpiralSection";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Destinations from "@/components/Destinations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-forest min-h-screen">
      <Header />
      <Hero />
      <div className="relative z-10 bg-forest">
        <HorizontalGallery />
        <About />
        <Products />
        <SpiralSection />
        <WhyUs />
        <Process />
        <Stats />
        <Destinations />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
