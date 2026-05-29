"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UtensilsCrossed,
  FlaskConical,
  ShoppingBag,
  ChevronRight,
  Star,
  Truck,
  Shield,
  Leaf,
  ArrowRight,
  Sparkles,
  Globe,
  Clock,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";
import TrendyDivider from "../MagneticDivider";

export default function DivisionsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
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
      bgGradient: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      features: [
        "Mehrab Pink Salt",
        "Zayb Saffron",
        "Premium Spices",
        "Global Distribution",
      ],
      stats: {
        products: "200+",
        markets: "GCC & Asia",
      },
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
      bgGradient: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-200",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      features: [
        "Industrial Chemicals",
        "Research Grade",
        "Bulk Supply",
        "Custom Solutions",
      ],
      stats: {
        products: "500+",
        industries: "100+",
      },
      link: "/divisions/chemicals",
      cta: "Click Here",
    },

    {
      id: "ecommerce",
      title: "Ecommerce Division",
      badge: "Digital Marketplace",
      description:
        "Discover our premium collection of wellness and lifestyle products. We bring nature's finest ingredients directly to consumers",
      icon: ShoppingBag,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      features: [
        "Mehrab Pink Salt",
        "Zayb Saffron",
        "Saffron Syrup",
        "Global Exports",
      ],
      stats: {
        markets: "7+ Regions",
        reach: "Worldwide",
      },
      link: "/divisions/ecommerce",
      cta: "Click Here",
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen overflow-hidden  bg-white/10">
      <TrendyDivider />

      <div className="container mx-auto px-6 max-w-7xl py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            className={`inline-block mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-semibold shadow-lg">
              Our Expertise
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Exploring Our{" "}
            <span className="bg-gradient-to-r from-[#00CCAA] via-[#00B9CC] to-[#00A3CC] bg-clip-text text-transparent">
              Core Divisions
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#00CCAA] via-[#00B9CC] to-[#00A3CC] mx-auto rounded-full mb-6" />

          <p
            className={`max-w-2xl mx-auto text-gray-600 text-lg transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Specialized expertise across multiple industries, delivering
            excellence in every domain
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {divisions.map((division, idx) => (
            <div
              key={division.id}
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
              onMouseEnter={() => setHoveredCard(division.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 h-full flex flex-col ${
                  hoveredCard === division.id
                    ? "shadow-2xl -translate-y-2"
                    : "shadow-lg"
                }`}
              >
                {/* Gradient Top Border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${division.gradient} transform origin-left transition-transform duration-500 ${
                    hoveredCard === division.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />

                {/* Content */}
                <div className=" p-8 flex flex-col h-full">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl ${division.iconBg} flex items-center justify-center transition-all duration-500 ${
                        hoveredCard === division.id ? "scale-110 rotate-6" : ""
                      }`}
                    >
                      <division.icon
                        className={`w-8 h-8 ${division.iconColor}`}
                      />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${division.gradient} text-white shadow-md`}
                    >
                      {division.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-bold text-gray-900 mb-1 min-h-[50px] flex items-center transition-all duration-300 ${
                      hoveredCard === division.id
                        ? "text-transparent bg-clip-text bg-gradient-to-r " +
                          division.gradient
                        : ""
                    }`}
                  >
                    {division.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-1 min-h-[100px]">
                    {division.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-6 min-h-[60px]">
                    {division.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${division.gradient}`}
                        />
                        <span className="text-xs text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div
                    className={`grid grid-cols-2 gap-4 mb-6 p-3 rounded-xl min-h-[70px] ${division.bgGradient} border ${division.borderColor}`}
                  >
                    {Object.entries(division.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-lg font-bold text-gray-800">
                          {value}
                        </p>
                        <p className="text-xs text-gray-500 capitalize">
                          {key}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => (window.location.href = division.link)}
                    className={`mt-auto group w-full py-3 rounded-xl font-semibold cursor-pointer transition-all duration-300 relative overflow-hidden ${
                      hoveredCard === division.id
                        ? `bg-gradient-to-r ${division.gradient} text-white shadow-lg scale-[1.02]`
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {division.cta}
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          hoveredCard === division.id ? "translate-x-1" : ""
                        }`}
                      />
                    </span>
                    {hoveredCard === division.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer" />
                    )}
                  </button>
                </div>

                {/* Decorative Elements */}
                <div
                  className={`absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-r ${division.gradient} opacity-5 transition-all duration-500 ${
                    hoveredCard === division.id ? "scale-150 opacity-10" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Banner 
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-10 mb-20 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
      
           <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div> *

          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Shield className="w-6 h-6 text-[#00CCAA]" />
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">Quality First</h3>
              <p className="text-gray-300 text-sm">
                All products meet international quality standards
              </p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Truck className="w-6 h-6 text-[#00CCAA]" />
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">Global Delivery</h3>
              <p className="text-gray-300 text-sm">
                Fast and reliable shipping worldwide
              </p>
            </div>

            <div className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Leaf className="w-6 h-6 text-[#00CCAA]" />
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">Sustainability</h3>
              <p className="text-gray-300 text-sm">
                Committed to eco-friendly practices
              </p>
            </div>
          </div>
        </div>*/}

        {/*  CTC section */}
        <div className="text-center mt-10">
          {/* <div className="w-20 h-1 mx-auto mb-5 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC]" /> */}

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Delivering Excellence Worldwide
          </h3>

          <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Providing premium food products, chemical solutions, and consumer
            brands to customers across global markets.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-200">
              🌍 Global Reach
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-200">
              🏆 Quality
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-200">
              🤝 Trust
            </span>
          </div>

          {/* <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white font-semibold hover:scale-105 transition"
            >
              Contact Us
            </Link>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
