import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Modern Initial Loading Screen matching Image 2 */}
      <Preloader />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Tech Stack Infinite Marquee */}
        <Marquee />

        {/* Core Services Grid */}
        <Services />

        {/* About Qyltavex */}
        <About />

        {/* 4-Step Working Methodology */}
        <Process />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* High-Converting WhatsApp & Email Contact Banner */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
