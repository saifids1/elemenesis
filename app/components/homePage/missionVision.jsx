"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MagneticDivider from "../MagneticDivider";

import {
  Target,
  Eye,
  Award,
  Sparkles,
  Shield,
  TrendingUp,
  Users,
  Globe,
  CheckCircle,
  ChevronRight,
  Star,
  Heart,
  Truck,
} from "lucide-react";
import TrendyDivider from "../MagneticDivider";

export default function MissionVisionPage() {
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

  const values = [
    {
      title: "Authenticity",
      desc: "Genuine products you can trust",
      icon: Shield,
      color: "#FF6B35",
    },
    {
      title: "Reliability",
      desc: "Consistent and dependable service",
      icon: CheckCircle,
      color: "#4ECDC4",
    },
    {
      title: "Excellence",
      desc: "Unwavering quality standards",
      icon: Award,
      color: "#6BCB77",
    },
    {
      title: "Global Reach",
      desc: "Worldwide network & distribution",
      icon: Globe,
      color: "#FF6B6B",
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-white overflow-hidden ">

      <TrendyDivider/>

      <div className="container mx-auto px-6 max-w-7xl pt-10 pb-5">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-semibold">
              Our Foundation
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Our{" "}
            <span className="bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
              Mission & Vision
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-600 mt-2 block">
              Guiding Our Journey Forward
            </span>
          </h2>

          <div
            className={`w-20 h-1 bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 mx-auto rounded-full shadow-[0_0_15px_rgba(0,255,209,0.5)] transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission Card - Left Side */}
          <div
            className={`group transition-all duration-700 delay-200 shadow-xl ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            onMouseEnter={() => setHoveredCard("mission")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Glass Body: Reduced opacity to bg-white/40 to let background show through */}
            <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_0_rgba(0,204,170,0.1)] overflow-hidden border border-white/60 h-full transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(0,204,170,0.25)]">
              <div className="relative p-8">
                {/* Image Container */}
                <div className="relative mb-6 rounded-2xl overflow-hidden shadow-md">
                  {/* UPDATED: Teal/Cyan Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00CCAA]/30 to-[#00B9CC]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image
                    src="/Images/slider/Mission-Vision.png"
                    alt="Mission and Vision"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* UPDATED: Floating Icon Background */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg z-20 transform group-hover:rotate-[360deg] transition-transform duration-700">
                    <Target className="w-5 h-5 text-[#00CCAA]" />
                  </div>
                </div>

                {/* Content Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00CCAA]/10 flex items-center justify-center group-hover:bg-[#00CCAA] transition-colors duration-300">
                    <Target className="w-5 h-5 text-[#00A388] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Our Mission
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  Our mission is to provide companies & individuals all around
                  the world with our superior goods, outstanding services, and
                  steadfast support.
                </p>

                {/* Vision Sub-section: Matches the new global theme */}
                <div className="mt-6 p-5 bg-gradient-to-br from-[#00CCAA]/5 to-[#00B9CC]/10 border border-[#00CCAA]/20 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-4 h-4 text-[#00CCAA]" />
                    <h4 className="font-bold text-gray-900 uppercase tracking-tighter text-sm">
                      Our Vision
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700 italic font-medium">
                    Our vision is to establish ourselves as the preferred B2B &
                    B2C partner, promoting expansion and success.
                  </p>
                </div>

                {/* UPDATED: Teal Stars */}
                <div className="mt-6 flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-[#00CCAA] fill-[#00CCAA] opacity-60"
                    />
                  ))}
                </div>

                {/* UPDATED: Bottom Border Gradient (Teal to Cyan) */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          </div>

          {/* Commitment Card - Right Side */}
          <div
            className={`group transition-all duration-700 delay-400 shadow-xl ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            onMouseEnter={() => setHoveredCard("commitment")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_0_rgba(0,204,170,0.1)] overflow-hidden border border-white/60 h-full transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(0,204,170,0.25)]">
              <div className="relative p-8">
                <div className="relative mb-6 rounded-2xl overflow-hidden shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00CCAA]/30 to-[#00B9CC]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image
                    src="/Images/slider/excellence.avif"
                    alt="Commitment to Excellence"
                    width={500}
                    height={100}
                    className="w-full h-75 object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg z-20 transform group-hover:rotate-[-360deg] transition-transform duration-700">
                    <Award className="w-5 h-5 text-[#00CCAA]" />
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00CCAA]/10 flex items-center justify-center group-hover:bg-[#00CCAA] transition-colors duration-300">
                    <Award className="w-5 h-5 text-[#00A388] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                    Excellence
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed text-base mb-4">
                  At Elemensis, excellence is a way of life. We guarantee the
                  genuineness and dependability of every product and service we
                  offer.
                </p>

                <div className="mt-6 p-5 bg-[#07090E]/5 backdrop-blur-md border border-gray-200/50 rounded-2xl">
                  <p className="text-sm text-gray-800 font-bold italic">
                    "Providing the best products right to your door"
                  </p>
                  <div className="flex items-center gap-1.5 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-[#00CCAA] fill-[#00CCAA]"
                      />
                    ))}
                  </div>
                </div>

                
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] text-white text-sm font-bold shadow-sm">
              Who We Are
            </span>
            <h3 className="text-3xl mt-3 font-bold text-gray-900">
              Our Core Values
            </h3>
            <div className="w-16 h-0.75 bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Animated Icon Background */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${value.color}10, transparent)`,
                  }}
                />

                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <value.icon
                      className="w-8 h-8"
                      style={{ color: value.color }}
                    />
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.desc}
                  </p>

                  <div
                    className="w-10 h-0.5 mx-auto mt-4 transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: value.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 items-center">
            <span>Partner With Us</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-gray-400 mt-4">
            Join our growing family of satisfied clients worldwide
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
      `}</style>
    </div>
  );
}
