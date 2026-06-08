"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AboutSectionHomepage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-14 md:py-16 bg-white"
    >
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00CCAA]/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-28 -right-24 w-96 h-96 bg-[#0099FF]/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-5 md:px-8 max-w-7xl relative z-10">
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className=" px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-semibold shadow-lgpx-4 py-1.5 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-semibold shadow-lg">
            About Elemensis
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#00CCAA] via-[#00B9CC] to-[#0099FF] bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>

          <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-[#00CCAA] via-[#00B9CC] to-[#0099FF]" />
        </div>

        <div
          className={`grid lg:grid-cols-[1.55fr_0.9fr] gap-10 lg:gap-14 items-start transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-gray-600 text-[15px] md:text-[16px] leading-8">
            <p>
              Elemensis is a leading distributor of specialty chemicals,
              uniquely positioned to serve the specific industrial needs of
              customers across international markets.
            </p>

            <p className="mt-5">
              With deeply rooted operations and a strong global network, we
              manage a diverse range of products across multiple industries,
              including chemicals, food, life sciences, plastics and rubber, oil
              and gas, coatings, construction, and much more.
            </p>

            <p className="mt-5">
              As trusted chemical distributors, we represent renowned global
              manufacturers, extending their reach and ensuring local markets
              have access to high-quality materials they deserve.
            </p>

            <p className="mt-5 text-[16px] md:text-[17px] font-semibold leading-8 text-gray-900">
              We are the bridge between global producers and local industries,
              facilitating innovation and development by supplying essential
              chemicals to the markets that need them most.
            </p>

            <p className="mt-5">
              Proudly extending our sales to global customers, we are committed
              to being a reliable partner, offering global reach with local
              insights. Elemensis stands as your partner in advancing industrial
              capabilities efficiently and effectively.
            </p>
          </div>

          <div className="relative w-full lg:pt-2">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#00CCAA]/20 via-[#00B9CC]/20 to-[#0099FF]/20 rounded-[2rem] blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border-2 border-[#00CCAA]/20 shadow-2xl group">
              <img
                src="/Images/homepage-chemical.webp"
                alt="Chemical Laboratory"
                className="w-full h-[280px] md:h-[360px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}