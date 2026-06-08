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
        <div
          className={`relative mb-24 transition-all duration-1000 delay-500 transform ${
            isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12"
          }`}
        >
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100/80 group">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/Images/GlobalNetwork.webp"
                alt="Elemensis Global Network Map"
                width={1200}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.01]"
              />

              {/* Dynamic Country Pin Hotspots overlay */}
              {mapHighlights.map((country, index) => (
                <div
                  key={index}
                  className="absolute pointer-events-auto group/pin transition-all duration-500"
                  style={{
                    top: country.top,
                    left: country.left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Ping Animation Effect */}
                  <span className="absolute inline-flex h-4 w-4 rounded-full bg-cyan-400 opacity-75 animate-ping" />
                  
                  {/* Core Pin Point */}
                  <span className="relative block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] border border-white shadow-md cursor-pointer" />
                  
                  {/* Country Name Badge */}
                  <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 opacity-90 group-hover/pin:opacity-100 scale-90 group-hover/pin:scale-100 pointer-events-none transition-all duration-300 bg-gray-900/90 text-white text-[10px] md:text-xs font-bold py-1 px-2.5 rounded-lg whitespace-nowrap shadow-xl border border-white/10">
                    {country.name}
                    {/* Tiny arrow pointing to the pin */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-[4px] border-x-transparent border-t-[4px] border-t-gray-900/90" />
                  </div>
                </div>
              ))}
            </div>

            {/* Overlay Stats */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 transition-all duration-500 group-hover:via-black/60">
              <div className="flex items-center justify-around max-w-2xl mx-auto">
                <div className="text-center transform transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">29+</div>
                  <div className="text-white/80 text-xs md:text-sm font-medium">Countries</div>
                </div>
                <div className="text-center transform transition-transform duration-500 group-hover:-translate-y-1 delay-75">
                  <div className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">50+</div>
                  <div className="text-white/80 text-xs md:text-sm font-medium">Partners</div>
                </div>
                <div className="text-center transform transition-transform duration-500 group-hover:-translate-y-1 delay-150">
                  <div className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">4</div>
                  <div className="text-white/80 text-xs md:text-sm font-medium">Continents</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Markets Section */}
        <div className="mb-24">
          {/* <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Key Markets
            </h3>
            <div className="w-16 h-1 bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] mx-auto rounded-full" />
          </div> */}

          {/* <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {countries.map((country, idx) => (
              <div
                key={country.name}
                className={`group relative h-[410px] perspective-1000 transition-all duration-1000 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
  
                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md hover:shadow-2xl rounded-2xl">
                
                  <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] bg-gradient-to-b ${country.gradientFront} rounded-2xl overflow-hidden border border-gray-100/80 flex flex-col`}>
                    <div className="relative h-44 overflow-hidden shadow-inner">
                      <Image
                        src={country.image}
                        alt={country.name}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-white font-bold text-xl drop-shadow-md transform transition-transform duration-500 group-hover:translate-x-1">
                          {country.name}
                        </h4>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <span
                            className="text-xs font-extrabold px-2.5 py-1 rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105"
                            style={{
                              backgroundColor: `${country.color}20`,
                              color: country.color,
                            }}
                          >
                            {country.code}
                          </span>
                          <div className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-gray-100 shadow-xs">
                            <Users className="w-3 h-3" style={{ color: country.color }} />
                            <span className="text-xs font-semibold text-gray-600">
                              {country.partnerships}+ Partners
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {country.cities.slice(0, 3).map((city, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-1 rounded-lg bg-white text-gray-600 font-medium shadow-2xs border border-gray-100/60 transition-colors duration-300 group-hover:bg-gray-50"
                            >
                              {city}
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                          {country.description}
                        </p>
                      </div>

                      <div className="text-center text-xs font-semibold text-gray-400 mt-2 tracking-wide animate-pulse">
                        Hover to explore →
                      </div>
                    </div>
                  </div>

                  
                  <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br ${country.gradientBack} rounded-2xl p-6 flex flex-col text-white`}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white/20 backdrop-blur-md shadow-inner transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <Globe className="w-6 h-6 text-white" />
                    </div>

                    <h4 className="text-white font-extrabold text-2xl mb-2 drop-shadow-md">
                      {country.name}
                    </h4>

                    <div className="space-y-2.5 mb-4 bg-black/15 backdrop-blur-xs p-3 rounded-xl border border-white/10 shadow-sm">
                      <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-white/80" />
                        <span>{country.cities.length} Major Operational Cities</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90 text-xs font-semibold">
                        <Users className="w-3.5 h-3.5 text-white/80" />
                        <span>{country.partnerships} Enterprise Partnerships</span>
                      </div>
                    </div>

                    <p className="text-white/90 text-xs leading-relaxed mb-4 flex-1">
                      {country.description}
                    </p>

                    <button className="mt-auto text-sm font-extrabold flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-gray-900 shadow-lg hover:bg-gray-50 active:scale-95 transition-all duration-300 group/btn">
                      <span>Explore Market</span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" style={{ color: country.color }} />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Global Stats Banner */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
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
        </div>

        {/* Network Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
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
        </div>

        {/* CTA Section */}
        <div
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
        </div>
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