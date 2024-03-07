import React from 'react';
import HeroSection from "@/components/pages/home/hero-section";
import AboutSection from "@/components/pages/home/about-section";
import ServicesSection from "@/components/pages/home/services-section";
import FaqsSection from "@/components/pages/home/faq-section";
import ContactSection from "@/components/pages/home/contact-section";

const Home = () => {
  return (
    <div className="py-8">

      <HeroSection />

      <hr className="opacity-25" />

      <AboutSection />

      <hr className="opacity-25" />

      <ServicesSection />

      <hr className="opacity-25" />

      <ContactSection />

      <hr className="opacity-25" />

      <FaqsSection />

    </div>
  );
};

export default Home;