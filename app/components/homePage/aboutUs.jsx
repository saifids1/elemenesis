"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AboutSectionHomepage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[520px] overflow-hidden"
    >
      {/* Fixed Background */}
      <div className="absolute inset-0 bg-[url('/Images/about_us/about01.png')] bg-cover bg-center bg-fixed" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div
        className={`relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col items-center justify-center px-4 text-center transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-white md:text-6xl">About Us </h2>

        <p className="mt-6 max-w-4xl text-base font-medium leading-8 text-white md:text-xl">
          Welcome to Elemensis, one of the most recognizable companies in UAE,
          the place where innovation and quality collide. Discover the heart and
          spirit of a business revolutionizing the dynamics of global
          business-to-business trade.
        </p>

        <a
          href="/about"
          className="mt-8 inline-flex rounded-xl bg-[#064D50]  text-center px-14 py-4 text-base font-semibold uppercase tracking-wide  text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#096F72] hover:shadow-xl"
        >
          Click Here
        </a>
      </div>

      <div className="absolute bottom-0 left-0 h-16 w-full bg-white [clip-path:polygon(0_55%,100%_100%,100%_100%,0_100%)]" />
    </section>
  );
}
