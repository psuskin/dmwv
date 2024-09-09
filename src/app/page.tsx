import ContactPage from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import NewsSection from "@/components/Home/NewsSection";
import Team from "@/components/Home/Team";
import WelcomeSection from "@/components/Home/WelcomeSection";
import WellnessHotels from "@/components/Home/WellnessHotels";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ContactPage />
      <Team />
      <WellnessHotels />
      <NewsSection />
    </>
  );
};

export default Home;
