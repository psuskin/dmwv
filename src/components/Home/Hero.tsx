"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link';
import Button from "../Buttons/Button";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Ganzheitliche Gesundheit",
    description:
      "Entdecken Sie unsere innovativen Ansätze für Ihr Wohlbefinden.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    title: "Vitalität im Fokus",
    description:
      "Steigern Sie Ihre Lebensenergie mit unseren Wellness-Programmen.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Lebensfreude erleben",
    description:
      "Finden Sie Ihren Weg zu mehr Ausgeglichenheit und Zufriedenheit.",
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

    // Ensure autoplay is started
    const autoplay = emblaApi.plugins().autoplay;
    if (autoplay) {
      autoplay.play();
    }

    return () => {
      emblaApi.off("select", onSelect);
      // Stop autoplay on unmount
      if (autoplay) {
        autoplay.stop();
      }
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-primary-50 flex flex-col lg:flex-row h-[calc(100vh-5rem)]">
      {/* Left side: Content */}
      <div className="lg:w-1/2 flex flex-col justify-center px-8 py-12 lg:px-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
          Deutscher Medical Wellness Verband
        </h1>
        <p className="text-xl text-primary-600 mb-8">
          Ihr Partner für Gesundheit, Vitalität und Lebensfreude
        </p>
        <div className="flex space-x-4 mb-12">
          <Link href="/medical-wellness" passHref>
            <Button text="Mehr erfahren" />
          </Link>
        </div>
      </div>

      {/* Right side: Embla Carousel */}
      <div className="lg:w-1/2 relative h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] h-full relative">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-primary-800 bg-opacity-30" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                <p className="text-sm">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-primary-500" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-primary-500" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                ? "bg-white w-4"
                : "bg-white bg-opacity-50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
