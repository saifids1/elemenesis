"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Users,
  ChevronRight,
  Navigation,
  Target,
  Clock,
  Truck,
} from "lucide-react";
import TrendyDivider from "../MagneticDivider";

export default function GlobalNetworkPage() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);

  useEffect(() => {
    const observe = (ref, setter) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref.current);
      return observer;
    };

    const sectionObserver = observe(sectionRef, setIsVisible);
    const headingObserver = observe(headingRef, setIsHeadingVisible);

    return () => {
      sectionObserver?.disconnect();
      headingObserver?.disconnect();
    };
  }, []);

  const mapHighlights = [
    { name: "Egypt", top: "54%", left: "51.5%" },
    { name: "Syria", top: "45.5%", left: "53.5%" },
    { name: "Iraq", top: "47%", left: "55.5%" },
    { name: "Saudi Arabia", top: "56%", left: "55.5%" },
    { name: "Qatar", top: "53.5%", left: "57.5%" },
    { name: "Oman", top: "57%", left: "59%" },
    { name: "India", top: "54%", left: "67.5%" },
  ];

  const networkFeatures = [
    {
      title: "Strategic Locations",
      desc: "Key operational hubs strategically positioned across major markets",
      icon: Navigation,
      color: "#FF6B35",
      bgGradient: "from-orange-50/90 via-amber-50/40 to-white",
    },
    {
      title: "Logistics Excellence",
      desc: "Efficient supply chain management with real-time tracking",
      icon: Truck,
      color: "#4ECDC4",
      bgGradient: "from-teal-50/90 via-cyan-50/40 to-white",
    },
    {
      title: "Local Expertise",
      desc: "Deep market knowledge with local partnerships in each region",
      icon: Users,
      color: "#6BCB77",
      bgGradient: "from-emerald-50/90 via-green-50/40 to-white",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="overflow-hidden bg-[#064D50]"
    >
      <TrendyDivider />

      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <div
          ref={headingRef}
          className={`mb-12 text-center transition-all duration-700 ${
            isHeadingVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Exploring Our{" "}
            <span className="relative inline-block pb-2">
              Core Divisions
              <svg
                className="absolute bottom-0 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M0 4 Q 50 8 100 4 Q 150 0 200 4"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/90 md:text-base">
            Specialized business divisions delivering quality products, reliable
            sourcing, and global trade solutions.
          </p>
        </div>

        {/* World Map Section */}
        <div
          className={`relative mb-12 transition-all delay-500 duration-1000 ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-12 scale-95 opacity-0"
          }`}
        >
          <div className="group relative overflow-hidden rounded-3xl border border-gray-100/80 bg-white/80 shadow-2xl backdrop-blur-sm">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/Images/GlobalNetwork.webp"
                alt="Elemensis Global Network Map"
                width={1000}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-1000 group-hover:scale-[1.01]"
              />

              {mapHighlights.map((country, index) => (
                <div
                  key={index}
                  className="group/pin pointer-events-auto absolute transition-all duration-500"
                  style={{
                    top: country.top,
                    left: country.left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative block h-2.5 w-2.5 cursor-pointer rounded-full border border-white bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] shadow-md" />

                  <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 scale-90 whitespace-nowrap rounded-lg border border-white/10 bg-gray-900/90 px-2.5 py-1 text-[10px] font-bold text-white opacity-90 shadow-xl transition-all duration-300 group-hover/pin:scale-100 group-hover/pin:opacity-100 md:text-xs">
                    {country.name}
                    <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-[4px] border-t-[4px] border-x-transparent border-t-gray-900/90" />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 transition-all duration-500 group-hover:via-black/60">
              <div className="mx-auto flex max-w-2xl items-center justify-around">
                {[
                  ["29+", "Countries"],
                  ["50+", "Partners"],
                  ["4", "Continents"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className="text-center transition-transform duration-500 group-hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 75}ms` }}
                  >
                    <div className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                      {value}
                    </div>
                    <div className="text-xs font-medium text-white/80 md:text-sm">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

     {/* Network Features Grid */}
<div className="mb-10 grid gap-4 md:grid-cols-3">
  {networkFeatures.map((feature, idx) => {
    const Icon = feature.icon;

    return (
      <div
        key={idx}
        className="group rounded-2xl border border-gray-100/70 bg-white p-5 text-center shadow-md transform transition-all duration-300 hover:-translate-y-2.5 hover:bg-[#096F72] hover:shadow-2xl" 
       
       
      >
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-50/80 bg-white shadow-md transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
          <Icon className="h-7 w-7 text-[#096F72] transition-colors duration-300 group-hover:text-[#096F72]" />
        </div>

        <h4 className="mb-2.5 text-xl font-bold tracking-tight text-[#096F72] transition-colors duration-300 group-hover:text-white">
          {feature.title}
        </h4>

        <p className="px-2 text-sm leading-relaxed text-[#096F72]/80 transition-colors duration-300 group-hover:text-white">
          {feature.desc}
        </p>
      </div>
    );
  })}
</div>

        {/* CTA Section */}
        <div
          className={`relative py-2 text-center transition-all delay-700 duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-3xl px-6">
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Ready to Expand{" "}
              <span className="text-white">Globally?</span>
            </h3>

            <p className="mx-auto mb-8 max-w-md text-base text-white/90">
              Join hands with Elemensis to access our global network and reach
              new markets
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-2xl font-bold border border-[#00CCAA]/20 bg-white px-6 py-3 text-sm font-semibold text-[#096F72] shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#064D50] hover:text-white hover:shadow-lg"
              >
                <span className="text-lg">Connect With Us</span>
                <ChevronRight className="h-6 w-6  transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}