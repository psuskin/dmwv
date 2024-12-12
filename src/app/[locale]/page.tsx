import ContactPage from "@/components/Home/Contact";
import FAQSection from "@/components/Home/FAQSection";
import Hero from "@/components/Home/Hero";
import NewsSection from "@/components/Home/NewsSection";
// import Team from "@/components/Home/Team";
import WelcomeSection from "@/components/Home/WelcomeSection";
import WellnessHotels from "@/components/Home/WellnessHotels";
import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ContactPage />
      {/* <Team /> */}
      <WellnessHotels />
      <FAQSection />
      <NewsSection />
    </>
  );
};

export default Home;
