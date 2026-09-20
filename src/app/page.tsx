import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HorizontalGallery from "@/components/HorizontalGallery";
import VideoShowcase from "@/components/VideoShowcase";
import SpiralSection from "@/components/SpiralSection";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
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
        <About />
        <Products />
        <HorizontalGallery />
        <VideoShowcase />
        <SpiralSection />
        <WhyUs />
        <Stats />
        <Destinations />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
