import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { config } from "@/config";

// Components
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ReportForm } from "@/components/ReportForm";
import { GlobalReach } from "@/components/GlobalReach";
import { About } from "@/components/About";
import { History } from "@/components/History";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

// Initialize EmailJS with config
if (config.emailjs.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY") {
  emailjs.init(config.emailjs.publicKey);
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-900 overflow-x-hidden bg-white">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Services />
      <ReportForm />
      <GlobalReach />
      <About />
      <History />
      <WhyChooseUs />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
