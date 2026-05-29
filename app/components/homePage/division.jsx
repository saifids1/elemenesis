"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  UtensilsCrossed,
  FlaskConical,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import TrendyDivider from "../MagneticDivider";

export default function DivisionsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const divisions = [
    {
      id: "food",
      title: "Food Division",
      badge: "Premium Quality",
      description:
        "Discover culinary perfection with our Food Division. From rare saffron to exquisite pink salt, we deliver premium ingredients trusted by customers across global markets.",
      icon: UtensilsCrossed,
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-amber-50 to-orange-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      image: "/Images/home page card/food.jpg",
      
      features: [
        "Mehrab Pink Salt",
        "Zayb Saffron",
        "Premium Spices",
        "Global Distribution",
      ],
      stats: { products: "200+", markets: "GCC & Asia" },
      link: "/divisions/food",
      cta: "Click Here",
    },
    {
      id: "chemicals",
      title: "Chemicals Division",
      badge: "Industrial Excellence",
      description:
        "Elemensis delivers high-quality chemical solutions for industrial and commercial applications, serving businesses across Asia, the Middle East, and international markets.",
      icon: FlaskConical,
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "bg-gradient-to-br from-cyan-50 to-blue-50",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      image: "/Images/home page card/chemicals.webp",
      features: [
        "Industrial Chemicals",
        "Research Grade",
        "Bulk Supply",
        "Custom Solutions",
      ],
      stats: { products: "500+", industries: "100+" },
      link: "/divisions/chemicals",
      cta: "Click Here",
    },
    {
      id: "ecommerce",
      title: "Ecommerce Division",
      badge: "Digital Marketplace",
      description:
        "Discover our premium collection of wellness and lifestyle products. We bring nature's finest ingredients directly to consumers.",
      icon: ShoppingBag,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "bg-gradient-to-br from-emerald-50 to-green-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
            image: "/Images/home page card/Ecommerce.jpg",

      features: [
        "Mehrab Pink Salt",
        "Zayb Saffron",
        "Saffron Syrup",
        "Global Exports",
      ],
      stats: { markets: "7+ Regions", reach: "Worldwide" },
      link: "/divisions/ecommerce",
      cta: "Click Here",
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen overflow-hidden bg-white">
      <TrendyDivider />

   <div className="container mx-auto px-6 max-w-[1600px] py-16">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-semibold shadow-lg">
            Our Expertise
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-5 mb-6 text-gray-900">
            Exploring Our{" "}
            <span className="bg-gradient-to-r from-[#00CCAA] via-[#00B9CC] to-[#0099FF] bg-clip-text text-transparent">
              Core Divisions
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#00CCAA] via-[#00B9CC] to-[#0099FF] mx-auto rounded-full mb-6" />

          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Specialized expertise across multiple industries, delivering
            excellence in every domain.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {divisions.map((division, idx) => (
            <div
              key={division.id}
              onMouseEnter={() => setHoveredCard(division.id)}
              onMouseLeave={() => setHoveredCard(null)}
             className={`relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg transition-all duration-700 ${
  idx === 2
    ? "lg:col-span-2 lg:max-w-[900px] lg:mx-auto w-full"
    : ""

              } ${
                hoveredCard === division.id
                  ? "shadow-2xl -translate-y-1"
                  : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${division.gradient}`}
              />

              <div className="grid md:grid-cols-[1.1fr_0.9fr] h-full">
                {/* Details */}
                <div className="p-6 md:p-7 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl ${division.iconBg} flex items-center justify-center transition-all duration-500 ${
                        hoveredCard === division.id ? "scale-110 rotate-6" : ""
                      }`}
                    >
                      <division.icon
                        className={`w-7 h-7 ${division.iconColor}`}
                      />
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-r ${division.gradient} text-white shadow-md`}
                    >
                      {division.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {division.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-6 mb-5">
                    {division.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {division.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${division.gradient}`}
                        />
                        <span className="text-xs text-gray-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`grid grid-cols-2 gap-3 mb-5 p-3 rounded-2xl ${division.bgGradient}`}
                  >
                    {Object.entries(division.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-lg font-bold text-gray-800">
                          {value}
                        </p>
                        <p className="text-[11px] text-gray-500 capitalize">
                          {key}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => (window.location.href = division.link)}
                   className={`mt-auto group w-80 px-5 py-3 rounded-xl bg-gradient-to-r ${division.gradient} text-white text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md`}
                  >
                   <span className="flex items-center justify-between w-full">
  <span>{division.cta}</span>

  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
</span>
                  </button>
                </div>

                {/* Image */}
                <div className="relative min-h-[260px] md:min-h-full overflow-hidden">
                  <img
                    src={division.image}
                    alt={division.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}