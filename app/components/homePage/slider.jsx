"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

import {
  Network,
  Globe,
  Leaf,
  Handshake,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const slides = [
  {
    title: "Sustainable Growth",
    subtitle: "Future-focused approach",
    description: "Committed to eco-friendly and long-term business practices.",
    image: "/Images/slider/Growth-1.webp",
    color: "#9B90B0",
    tag: "SUSTAINABILITY",
    icon: Leaf,
    stats: "Eco-Friendly",
    textColor: "#FFFFFF",
  },
  {
    title: "Who We Are",
    subtitle: "Global sourcing & distribution experts",
    description:
      "Elemensis is a trusted global partner delivering high-quality products through strong supplier networks.",
    image: "/Images/slider/AboutUs.png",
    color: "#67e077",
    tag: "ABOUT",
    icon: Globe,
    stats: "50+ Countries",
    textColor: "#FFFFFF",
  },
  {
    title: "Reliable Global Network",
    subtitle: "Strong supply chain",
    description:
      "Efficient sourcing, seamless logistics, and global distribution.",
    image: "/Images/slider/Globe-1.jpg",
    color: "#d2c322",
    tag: "NETWORK",
    icon: Network,
    stats: "24/7 Support",
    textColor: "#FFFFFF",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

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
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute top-8 left-28 z-50 group">
        {/* Glitch Layers */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 translate-x-1 animate-pulse bg-red-500/20 mix-blend-screen" />
          <div className="absolute inset-0 -translate-x-1 animate-pulse bg-blue-500/20 mix-blend-screen" />
        </div>

        <Image
          src="/Images/slider/elemenisis-logo-1.png"
          height={100}
          width={100}
          alt="Logo"
          className="relative z-10 group-hover:animate-skew brightness-150 contrast-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        />
      </div>

      {/* Background Image - Brighter by removing dark overlays */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          className={`object-cover transition-transform duration-1000 ease-out ${imageAnimation}`}
        />
        {/* Very light gradient - just enough for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/20 to-black/15" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex items-center justify-between px-8 md:px-16 lg:px-24">
        {/* LEFT CONTENT - Enhanced for better visibility */}
        <div
          className={`max-w-2xl transition-all duration-500 ease-out ${contentAnimation}`}
        >
          {/* Tag/Badge  */}
          <div className="mb-6">
            <span
              className="text-xs font-bold tracking-wider px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border-2 shadow-lg"
              style={{
                borderColor: slide.color,
                color: slide.color,
                textShadow: "0 0 5px rgba(0,0,0,0.3)",
              }}
            >
              {slide.tag}
            </span>
          </div>

          {/* Main Title - White with shadow for contrast */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
            {slide.title}
          </h1>

          {/* Subtitle - Brighter with shadow */}
          <p className="text-xl md:text-2xl mb-4 text-white font-light drop-shadow-md">
            {slide.subtitle}
          </p>

          {/* Description - Better contrast */}
          <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed max-w-lg drop-shadow-md">
            {slide.description}
          </p>
        </div>

        {/* RIGHT SIDE - Brand Icon - Enhanced visibility */}
        <div
          className={`hidden lg:block transition-all duration-500 ease-out delay-100 ${
            isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
          }`}
        >
          <div className="relative">
            {/* Brand Icon Circle  */}
            <div
              className="w-36 h-36 rounded-full flex items-center justify-center backdrop-blur-md border-2 transition-all duration-300 hover:scale-105 shadow-2xl"
              style={{
                borderColor: slide.color,
                background: `${slide.color}30`,
                backdropFilter: "blur(8px)",
                boxShadow: `0 0 30px ${slide.color}40`,
              }}
            >
              <IconComponent
                size={56}
                strokeWidth={1.5}
                style={{ color: slide.color }}
                className="drop-shadow-lg"
              />
            </div>

            {/* Decorative Ring - More visible */}
            <div
              className="absolute inset-0 rounded-full -z-10"
              style={{
                border: `2px solid ${slide.color}`,
                opacity: 0.6,
                animation: "pulse 2s ease-in-out infinite",
                boxShadow: `0 0 20px ${slide.color}`,
              }}
            />

            {/* Second decorative ring for depth */}
            <div
              className="absolute inset-[-15px] rounded-full -z-20"
              style={{
                border: `1px solid ${slide.color}`,
                opacity: 0.3,
                animation: "pulse 2s ease-in-out infinite 0.5s",
              }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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
                i === index ? "w-10" : "w-5 bg-white/50 group-hover:bg-white/80"
              }`}
              style={{ backgroundColor: i === index ? slide.color : undefined }}
            />
          </button>
        ))}
      </div>

      {/* Progress Bar  */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          key={index}
          className="h-full transition-all duration-6000 linear"
          style={{
            width: isAnimating ? "0%" : "100%",
            backgroundColor: slide.color,
            transition: isAnimating ? "none" : "width 6s linear",
            boxShadow: `0 0 10px ${slide.color}`,
          }}
        />
      </div>

      {/* Navigation Arrows - More visible */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300 hover:scale-105 border border-white/20"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300 hover:scale-105 border border-white/20"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-[-30] left-1/2 -translate-x-1/2 z-50">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] flex items-center justify-center shadow-lg relative z-10">
          <ChevronDown className="w-1 h-1 text-white" />
        </div>
        <motion.div
          className="absolute inset-0 rounded-full bg-[#00B9CC]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: 0.3 }}
        />
      </div>

      <style jsx>{`
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
        // Add to global CSS:
        // @keyframes skew { 0% { transform: skew(0deg); } 20% { transform: skew(10deg); } 40% { transform: skew(-10deg); } 100% { transform: skew(0deg); } }
        // .animate-skew { animation: skew 0.2s infinite; }
      `}</style>
    </div>
  );
}
