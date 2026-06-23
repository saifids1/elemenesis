"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Whysection() {
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
    <>
    <div className="">
      
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-0"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-[#00CCAA]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#0099FF]/5 blur-3xl" />

      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#00CCAA]/30" />
      <div className="absolute bottom-1/3 right-20 w-3 h-3 rounded-full bg-[#0099FF]/30" />
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-[#00B9CC]/30" />

      <div
        className={`mx-auto max-w-7xl px-0 transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Main Grid Layout */}
        <div className="grid overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-2 ">
          {/* Left Side - Gradient Background with Content */}
          <div className="relative overflow-hidden bg-[#064D50] p-10 md:p-14 lg:p-16">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-5 py-2 text-sm font-semibold text-white shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                  </span>
                  About Elemensis
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-2xl font-bold leading-tight text-white md:text-5xl lg:text-4xl"
              >
                What Elemensis Is
                <br />
                <span className="relative inline-block mt-2">
                  All About?
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </span>
              </motion.h2>

              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-6 pt-6 border-t border-white/20"
              >
                {[
                  { value: "50+", label: "Global Partners" },
                  { value: "25+", label: "Countries" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-white md:text-3xl">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/80 md:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Side - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center bg-white p-10 md:p-14 lg:p-16"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 mb-5 text-[#064D50] opacity-70">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="relative text-lg leading-relaxed text-slate-600 md:text-lg mt-7 md:leading-9">
                Our mission is to close the gap between the international market
                and high quality. Our commitment to quality, unwavering
                standards of excellence, and customer-first mentality have made
                us stand out in the trade industry of UAE.
              </p>
              <motion.div
                className="mt-6 flex items-center gap-2 text-[#00CCAA]"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section> </div></>
  );
}
