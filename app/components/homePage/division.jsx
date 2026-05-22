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
} from "lucide-react";
import TrendyDivider from "../MagneticDivider";

export default function DivisionsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
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
      subtitle: "Culinary Excellence",
      description:
        "Discover culinary perfection with our Food Division. From rare saffron to exquisite pink salt, elevate your dishes with our exceptional ingredients.",
      longDesc:
        "We bring the finest culinary ingredients from around the world to your kitchen. Our carefully curated selection includes premium spices, rare seasonings, and gourmet products that transform ordinary meals into extraordinary experiences.",
      icon: UtensilsCrossed,
      color: "#FF6B35",
      bgGradient: "from-orange-500 to-red-500",
      image: "/food-division.jpg",
      features: [
        "Premium Spices",
        "Rare Saffron",
        "Exotic Salts",
        "Gourmet Ingredients",
      ],
      link: "/food-division",
      stats: { products: "200+", origin: "15+ Countries" },
    },
    {
      id: "chemicals",
      title: "Chemicals Division",
      subtitle: "Industrial Excellence",
      description:
        "Elemensis, a pioneering company, is at the forefront of producing a diverse range of high-quality chemical products.",
      longDesc:
        "Leading the industry with innovative chemical solutions. Our state-of-the-art facilities and rigorous quality control ensure that every product meets the highest international standards for purity and performance.",
      icon: FlaskConical,
      color: "#4ECDC4",
      bgGradient: "from-teal-400 to-cyan-400",
      image: "/chemicals-division.jpg",
      features: [
        "Industrial Chemicals",
        "Research Grade",
        "Bulk Supply",
        "Custom Formulations",
      ],
      link: "/chemical-products",
      stats: { products: "500+", clients: "100+ Industries" },
    },
    {
      id: "ecommerce",
      title: "Ecommerce Division",
      subtitle: "Digital Marketplace",
      description:
        "Your one-stop digital marketplace for quality products delivered to your doorstep with convenience and reliability.",
      longDesc:
        "Revolutionizing the way you shop with our seamless ecommerce platform. From everyday essentials to specialty items, we bring quality products directly to consumers with fast shipping and exceptional customer service.",
      icon: ShoppingBag,
      color: "#6BCB77",
      bgGradient: "from-green-400 to-emerald-500",
      image: "/ecommerce-division.jpg",
      features: [
        "Fast Delivery",
        "Secure Payments",
        "Quality Assurance",
        "24/7 Support",
      ],
      link: "/zayb-syrup",
      stats: { customers: "10K+", delivery: "24/7 Service" },
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen overflow-hidden bg-white/10">
       <TrendyDivider/>
      <div className="container mx-auto px-6 max-w-7xl pt-10 pb-5">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-semibold">
              Our Divisions
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
            <span className="bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
              Core Divisions
            </span>
          </h2>

          <div
            className={`w-20 h-1 bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 mx-auto rounded-full shadow-[0_0_15px_rgba(0,255,209,0.5)] transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          <p
            className={`max-w-2xl mx-auto mt-6 text-white text-lg transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Specialized expertise across multiple industries, delivering
            excellence in every domain
          </p>
        </div>

        {/* Alternative: Using inline styles for better compatibility */}
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
            >
              <div
                className="relative w-full h-[400px]"
                style={{ perspective: "1000px" }}
                onMouseEnter={() => setFlippedCard(division.id)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className="relative w-full h-full transition-all duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform:
                      flippedCard === division.id
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                  }}
                >
                  {/* Front Card */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl shadow-xl"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          background: `linear-gradient(135deg, ${division.color}80, ${division.color}20)`,
                        }}
                      />

                      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
                        <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 transition-transform duration-500 hover:scale-110">
                          <division.icon
                            className="w-12 h-12"
                            style={{ color: division.color }}
                          />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">
                          {division.title}
                        </h3>
                        <p className="text-white/70 text-sm mb-4">
                          {division.subtitle}
                        </p>

                        <p className="text-white/80 text-sm leading-relaxed">
                          {division.description.substring(0, 100)}...
                        </p>

                        <div className="absolute bottom-8 left-0 right-0 text-center">
                          <p className="text-white/50 text-xs animate-pulse">
                            Hover to flip →
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Card */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl shadow-xl"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
                      <div
                        className="absolute inset-0 opacity-10 rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${division.color}, transparent)`,
                        }}
                      />

                      <div className="h-full flex flex-col p-6 overflow-y-auto">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: `${division.color}15` }}
                          >
                            <division.icon
                              className="w-5 h-5"
                              style={{ color: division.color }}
                            />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {division.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {division.longDesc}
                        </p>

                        {/* <div className="mb-4">
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Key Features
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {division.features.map((feature, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div> */}

                        <div className="grid grid-cols-2 gap-3 mb-4 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
                          {Object.entries(division.stats).map(
                            ([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-sm font-bold text-gray-900">
                                  {value}
                                </div>
                                <div className="text-xs text-gray-500 capitalize">
                                  {key}
                                </div>
                              </div>
                            ),
                          )}
                        </div>

                        <button
                          onClick={() => (window.location.href = division.link)}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all duration-300 group mt-auto"
                          style={{ backgroundColor: division.color }}
                        >
                          <span>Explore More</span>
                          <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Banner  */}
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-100/40 to-cyan-100/40 border border-teal-100/40 p-10 mb-20 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Animated gradient border on hover */}
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF6B35] to-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              padding: "2px",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            }}
          />

          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF6B35]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#F59E0B]/5 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left group">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#00CCAA]/10 to-[#00B9CC]/10 group-hover:from-[#00CCAA]/20 group-hover:to-[#00B9CC]/20 transition-all duration-300">
                  <Shield className="w-5 h-5 text-[#00A388]" />
                </div>
                <span className="text-gray-700 text-sm font-bold uppercase tracking-wider">
                  Quality First
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                All products meet international quality standards
              </p>
            </div>

            <div className="text-center md:text-left group">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#00CCAA]/10 to-[#00B9CC]/10 group-hover:from-[#00CCAA]/20 group-hover:to-[#00B9CC]/20 transition-all duration-300">
                  <Truck className="w-5 h-5 text-[#00A388]" />
                </div>
                <span className="text-gray-700 text-sm font-bold uppercase tracking-wider">
                  Global Delivery
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                Fast and reliable shipping worldwide
              </p>
            </div>

            <div className="text-center md:text-left group">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#00CCAA]/10 to-[#00B9CC]/10 group-hover:from-[#00CCAA]/20 group-hover:to-[#00B9CC]/20 transition-all duration-300">
                  <Leaf className="w-5 h-5 text-[#00A388]" />
                </div>
                <span className="text-gray-700 text-sm font-bold uppercase tracking-wider">
                  Sustainability
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                Committed to eco-friendly practices
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="w-1 h-1 rounded-full bg-[#FF6B35]/30" />
            <div className="w-1 h-1 rounded-full bg-[#F59E0B]/30" />
            <div className="w-1 h-1 rounded-full bg-[#FF6B35]/30" />
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Explore All Divisions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-xs text-white mt-4">
            Partner with us for excellence across all divisions
          </p>
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
