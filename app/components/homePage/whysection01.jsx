"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Whysection01() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#F3F7F7] to-white">
      <section
        ref={sectionRef}
        className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-0"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-[#00CCAA]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#0099FF]/5 blur-3xl" />

        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#00CCAA]/30" />
        <div className="absolute bottom-1/3 right-20 w-3 h-3 rounded-full bg-[#0099FF]/30" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full bg-[#00B9CC]/30" />

        <div
          className={`mx-auto max-w-7xl transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Second Row - Image + Content */}
          <div className="mt-8 grid overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-2">
            {/* Image Side with Hover Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative min-h-[100px] md:min-h-[240px] lg:min-h-[280px] overflow-hidden"
            >
              <img
                src="/Images/homepage-chemical.webp"
                alt="Elemensis Global Trade"
                className="h-87.5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5 md:px-4 md:py-2">
                <span className="text-white text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Global Reach
                </span>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative flex items-center overflow-hidden bg-[#064D50] p-6 sm:p-8 md:p-10 lg:p-8 xl:p-10"
            >
              {/* Abstract Background Pattern */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 bg-black/10 rounded-full blur-3xl" />
                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-1.5"
                >
                  <span className="text-white text-[10px] md:text-xs font-semibold">✦ GLOBAL PRESENCE</span>
                </motion.div>

                <p className="relative text-sm sm:text-base md:text-lg leading-relaxed text-white md:leading-9">
                  Elemensis has effectively established a name for itself in the
                  global marketplace. Through our extensive network of clients and
                  partners, we introduce premium products to global organizations
                  and customers with timely, reliable delivery for both B2B and B2C
                  transactions.
                </p>

                {/* Trust Indicators */}
                <div className="mt-6 md:mt-8 flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/20">
                  <span className="text-white/90 text-xs sm:text-sm font-medium">
                    Trusted by 200+ clients worldwide
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}