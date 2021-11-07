import React from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection";
import InputUrl from "../components/UrlSection/InputUrl";
import FAQs from "../components/FaqSection/FAQs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <InputUrl />
      <FAQs />
      <Footer />
    </>
  );
}
