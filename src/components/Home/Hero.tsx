"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Button from "../Buttons/Button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    titleKey: "slide1.title",
    descriptionKey: "slide1.description",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    titleKey: "slide2.title",
    descriptionKey: "slide2.description",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    titleKey: "slide3.title",
    descriptionKey: "slide3.description",
  },
];
const autoplayOptions = {
  delay: 4000,
  rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
};

const Hero: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const t = useTranslations("Hero");

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    const autoplay = emblaApi.plugins().autoplay;
    if (autoplay) {
      autoplay.play();
    }

    return () => {
      emblaApi.off("select", onSelect);
      if (autoplay) {
        autoplay.stop();
      }
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white flex flex-col lg:flex-row min-h-[calc(100vh-96px)]">
      {/* Left side: Content */}
      <div className="lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 py-8 lg:py-12 lg:px-16 bg-primary-50 order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto lg:mx-0"
        >
          <h2 className="text-primary-600 text-lg font-semibold mb-3 tracking-wide uppercase">
            {t("welcome")}
          </h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-800 mb-6 leading-tight">
            {t("title")}
          </h1>
          <p className="text-lg sm:text-xl text-primary-600 mb-8 leading-relaxed">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link href="/medical-wellness" passHref>
              <Button text={t("learnMore")} variant="primary" size="large" />
            </Link>
            <Link href="/verband/mitgliedschaft" passHref>
              <Button text={t("becomeMember")} variant="outline" size="large" />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md"
                >
                  <Image
                    src={`/images/member-${i}.jpg`}
                    alt={t("memberImageAlt", { number: i })}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-primary-600 font-medium">{t("memberCount")}</p>
          </div>
        </motion.div>
      </div>

      {/* Right side: Embla Carousel */}
      <div
        className="lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden order-1 lg:order-2"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] h-full relative">
              <Image
                src={slide.image}
                alt={t(slide.titleKey)}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-primary-800 bg-opacity-10" />
              <div className="absolute bottom-8 left-4 right-4 text-white">
                <h2 className="text-xl sm:text-3xl font-bold mb-2">
                  {t(slide.titleKey)}
                </h2>
                <p className="text-lg sm:text-xl line-clamp-2 sm:line-clamp-none">
                  {t(slide.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
          aria-label={t("previousSlide")}
        >
          <ChevronLeft className="w-6 h-6 text-primary-500" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
          aria-label={t("nextSlide")}
        >
          <ChevronRight className="w-6 h-6 text-primary-500" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-white w-4"
                  : "bg-white bg-opacity-50"
              }`}
              aria-label={t("goToSlide", { number: index + 1 })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
