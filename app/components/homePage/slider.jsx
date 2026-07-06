"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Network,
  Globe,
  Leaf,
  Handshake,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Award,
} from "lucide-react";

const slides = [
  {
    title: "Premium Products",
    subtitle: "Serving Global B2B & B2C Markets",
    description:
      "From sourcing and distribution to reliable business solutions, Elemensis delivers carefully selected premium products that support the growth of businesses and enhance everyday living.",
    image: "/Images/slider/slider08.png",
    color: "#00B9CC",
    icon: Award,
    stats: "Quality Assured",
    textColor: "#FFFFFF",
  },
  {
    title: "Global Commerce Excellence",
    subtitle: "Import, Export & Distribution",
    description:
      "Located in the UAE's dynamic commercial hub, Elemensis specializes in the import and distribution of high-quality products for businesses worldwide.",
    image: "/Images/slider/slider03.png",
    color: "#d2c322",
    icon: Globe,
    stats: "Worldwide Reach",
    textColor: "#FFFFFF",
  },
  {
    title: "Driven By Quality",
    subtitle: "Teamwork • Sustainability • Excellence",
    description:
      "Our foundation is built on teamwork, sustainability, and uncompromising quality, ensuring long-term value for customers and partners alike.",
    image: "/Images/slider/slider01.png",
    color: "#9B90B0",
    icon: Leaf,
    stats: "Future Focused",
    textColor: "#FFFFFF",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const SLIDE_DURATION = 7000;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setIsAnimating(true);

      setIndex((prev) => (prev + 1) % slides.length);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection("next");
    setIsAnimating(true);
    setIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    setDirection("prev");
    setIsAnimating(true);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const slide = slides[index];
  const IconComponent = slide.icon;

  const contentAnimation = isAnimating
    ? direction === "next"
      ? "opacity-0 translate-x-10"
      : "opacity-0 -translate-x-10"
    : "opacity-100 translate-x-0";

  const imageAnimation = isAnimating
    ? direction === "next"
      ? "scale-110"
      : "scale-95"
    : "scale-100";

  return (
    <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          className={`object-cover transition-transform duration-1000 ease-out ${imageAnimation}`}
        />

        {/* Clean left readability fade */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />

        {/* Soft bottom depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-30">
        <div
          className={`max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] xl:max-w-[620px] transition-all duration-500 ease-out ${contentAnimation}`}
        >
          {/* Title */}
          <h3 className="mb-3 sm:mb-4 md:mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] font-semibold leading-[1.08] tracking-[-0.03em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.45)]">
            {slide.title}
          </h3>

          {/* Subtitle */}
          <p className="mb-3 sm:mb-4 md:mb-5 text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
            {slide.subtitle}
          </p>

          {/* Description */}
          <p className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[560px] text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-6 sm:leading-7 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {slide.description}
          </p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? "next" : "prev");
              setIsAnimating(true);
              setIndex(i);
              setTimeout(() => setIsAnimating(false), 500);
            }}
            className="group"
          >
            <div
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 sm:w-8 md:w-10"
                  : "w-4 sm:w-5 bg-white/50 group-hover:bg-white/80"
              }`}
              style={{
                backgroundColor: i === index ? slide.color : undefined,
              }}
            />
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          key={index}
          className="h-full"
          style={{
            width: "100%",
            backgroundColor: slide.color,
            animation: `progress ${SLIDE_DURATION}ms linear`,
            boxShadow: `0 0 10px ${slide.color}`,
          }}
        />
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md items-center justify-center text-white hover:bg-black/60 transition-all duration-300 hover:scale-105 border border-white/20"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-md items-center justify-center text-white hover:bg-black/60 transition-all duration-300 hover:scale-105 border border-white/20"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <style>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}