"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  MapPin,
  TrendingUp,
  Users,
  ChevronRight,
  Compass,
  Navigation,
  Radio,
  Target,
  Award,
  Clock,
  Truck,
  Shield,
  Heart,
  Star,
} from "lucide-react";
import TrendyDivider from "../MagneticDivider";

export default function GlobalNetworkPage() {
  const [isVisible, setIsVisible] = useState(false);
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

  // New list of highlighted countries for the map markers
  const mapHighlights = [
    { name: "Egypt", top: "54%", left: "51.5%" },
    { name: "Syria", top: "45.5%", left: "53.5%" },
    { name: "Iraq", top: "47%", left: "55.5%" },
    { name: "Saudi Arabia", top: "56%", left: "55.5%" },
    { name: "Qatar", top: "53.5%", left: "57.5%" },
    { name: "Oman", top: "57%", left: "59%" },
    { name: "India", top: "54%", left: "67.5%" },
  ];

  const countries = [
    {
      name: "India",
      flag: "https://flagcdn.com/w320/in.png",
      code: "IN",
      color: "#FF6B35",
      gradientFront: "from-orange-50/90 to-amber-50/40",
      gradientBack: "from-orange-600 to-amber-500",
      cities: ["Mumbai", "Delhi", "Bangalore"],
      partnerships: 15,
      description:
        "Major market presence with extensive distribution network across the subcontinent.",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    },
    {
      name: "United Arab Emirates",
      flag: "https://flagcdn.com/w320/ae.png",
      code: "AE",
      color: "#6BCB77",
      gradientFront: "from-emerald-50/90 to-teal-50/40",
      gradientBack: "from-emerald-600 to-teal-500",
      cities: ["Dubai", "Abu Dhabi", "Sharjah"],
      partnerships: 20,
      description:
        "Global headquarters and primary logistics hub serving Middle East and beyond.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    },
    {
      name: "United States",
      flag: "https://flagcdn.com/w320/us.png",
      code: "US",
      color: "#FF6B6B",
      gradientFront: "from-rose-50/90 to-red-50/40",
      gradientBack: "from-rose-600 to-red-500",
      cities: ["New York", "Los Angeles", "Houston"],
      partnerships: 18,
      description:
        "Key gateway for North American markets with strong distribution capabilities.",
      image:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop",
    },
  ];

  const globalStats = [
    { value: "29+", label: "Countries Served", icon: Globe, color: "#FF6B35", bgGradient: "from-orange-50/80 to-amber-50/50" },
    { value: "50+", label: "Global Partners", icon: Users, color: "#4ECDC4", bgGradient: "from-teal-50/80 to-cyan-50/50" },
    { value: "100%", label: "Coverage", icon: Target, color: "#6BCB77", bgGradient: "from-emerald-50/80 to-green-50/50" },
    { value: "24/7", label: "Operations", icon: Clock, color: "#FF6B6B", bgGradient: "from-rose-50/80 to-red-50/50" },
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
      className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white"
    >
      <TrendyDivider />
      <div className="container mx-auto px-6 max-w-7xl pt-10 pb-5">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block mb-4 transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          >
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-semibold shadow-md animate-pulse">
              Global Presence
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 transition-all duration-1000 delay-200 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our{" "}
            <span className="bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
              Global Network
            </span>
          </h2>

          <div
            className={`w-20 h-1 bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 mx-auto rounded-full shadow-[0_0_15px_rgba(0,255,209,0.5)] transition-all duration-1000 delay-500 transform ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          <p
            className={`max-w-2xl mx-auto mt-6 text-gray-500 text-lg transition-all duration-1000 delay-300 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Connecting continents, bridging markets - our extensive network
            spans across 29+ countries worldwide
          </p>
        </div>

        {/* World Map Section with Country Highlights */}
     {/* World Map Section */}
<div
  className={`relative mb-14 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 group">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC]" />

    <div className="relative">
      <Image
        src="/Images/GlobalNetwork.webp"
        alt="Elemensis Global Network Map"
        width={1200}
        height={600}
        className="w-full h-[260px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />

      {mapHighlights.map((country, index) => (
        <div
          key={index}
          className="absolute group/pin"
          style={{
            top: country.top,
            left: country.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#00B9CC] opacity-70 animate-ping" />
          <span className="relative block h-2.5 w-2.5 rounded-full bg-[#00CCAA] border border-white shadow-md cursor-pointer" />

          <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-0 group-hover/pin:opacity-100 transition-all duration-300 bg-gray-900 text-white text-[10px] font-semibold px-2 py-1 rounded-md whitespace-nowrap">
            {country.name}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Network Features */}
<div className="grid md:grid-cols-3 gap-5 mb-16">
  {networkFeatures.map((feature, idx) => (
    <div
      key={idx}
      className={`group rounded-2xl bg-white border border-gray-100 p-5 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${idx * 150 + 600}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00CCAA]/10 to-[#00B9CC]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-1">
            {feature.title}
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            {feature.desc}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

{/* CTA Section */}
<div
  className={`text-center pb-6 transition-all duration-1000 delay-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
    Ready to Expand{" "}
    <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
      Globally?
    </span>
  </h3>

  <p className="text-gray-500 max-w-xl mx-auto mb-6">
    Connect with Elemensis to grow your reach across international markets.
  </p>

  <Link
    href="/contact"
    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    Connect With Us
    <ChevronRight className="w-4 h-4" />
  </Link>
</div>

      
        {/* Global Stats Banner */}
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {globalStats.map((stat, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-br ${stat.bgGradient} rounded-2xl p-6 text-center shadow-md hover:shadow-xl border border-gray-100/70 transition-all duration-700 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${idx * 100 + 400}ms` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 bg-white shadow-md border border-gray-50"
              >
                <stat.icon className="w-7 h-7 transition-colors duration-300" style={{ color: stat.color }} />
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1 tracking-tight transform transition-transform duration-300 group-hover:scale-105">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{stat.label}</div>
              <div
                className="w-10 h-0.5 mx-auto mt-4 transition-all duration-500 group-hover:w-24"
                style={{ backgroundColor: stat.color }}
              />
            </div>
          ))}
        </div> */}

        {/* Network Features Grid */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-24">
          {networkFeatures.map((feature, idx) => (
            <div
              key={idx}
              className={`group bg-gradient-to-b ${feature.bgGradient} rounded-2xl p-6 text-center shadow-md hover:shadow-2xl border border-gray-100/70 transition-all duration-700 transform hover:-translate-y-2.5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${idx * 150 + 600}ms` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transform group-hover:scale-115 group-hover:rotate-12 transition-all duration-500 bg-white shadow-md border border-gray-50/80"
              >
                <feature.icon
                  className="w-7 h-7"
                  style={{ color: feature.color }}
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2.5 tracking-tight group-hover:text-black transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed px-2 transition-colors duration-300 group-hover:text-gray-700">
                {feature.desc}
              </p>
            </div>
          ))}
        </div> */}

        {/* CTA Section */}
        {/* <div
          className={`relative text-center py-4 transition-all duration-1000 delay-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
              Ready to Expand{" "}
              <span className="bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                Globally?
              </span>
            </h3>

            <p className="text-gray-500 text-base max-w-md mx-auto mb-8">
              Join hands with Elemensis to access our global network and reach
              new markets
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Connect With Us</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </div>
  );
}