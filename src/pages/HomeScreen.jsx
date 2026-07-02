import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/Process";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Services />
      <Products />
      <WhyChooseUs />
      <Process />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomeScreen;
