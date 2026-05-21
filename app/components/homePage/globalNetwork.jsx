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
  const [activeCountry, setActiveCountry] = useState(null);
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

  const countries = [
    {
      name: "Pakistan",
      flag: "https://flagcdn.com/w320/pk.png",
      code: "PK",
      color: "#4ECDC4",
      cities: ["Karachi", "Lahore", "Islamabad"],
      partnerships: 12,
      description:
        "Strategic hub for South Asian operations with strong manufacturing and logistics network.",
      image:
        "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?w=800&h=600&fit=crop", 
    },
    {
      name: "India",
      flag: "https://flagcdn.com/w320/in.png",
      code: "IN",
      color: "#FF6B35",
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
      cities: ["New York", "Los Angeles", "Houston"],
      partnerships: 18,
      description:
        "Key gateway for North American markets with strong distribution capabilities.",
      image:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop",
    },
  ];

  const globalStats = [
    { value: "29+", label: "Countries Served", icon: Globe, color: "#FF6B35" },
    { value: "50+", label: "Global Partners", icon: Users, color: "#4ECDC4" },
    { value: "100%", label: "Coverage", icon: Target, color: "#6BCB77" },
    { value: "24/7", label: "Operations", icon: Clock, color: "#FF6B6B" },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen overflow-hidden bg-white"
    >
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
              Global Presence
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
              Global Network
            </span>
          </h2>

          <div
            className={`w-20 h-1 bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 mx-auto rounded-full shadow-[0_0_15px_rgba(0,255,209,0.5)] transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          <p
            className={`max-w-2xl mx-auto mt-6 text-gray-500 text-lg transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Connecting continents, bridging markets - our extensive network
            spans across 29+ countries worldwide
          </p>
        </div>

        {/* World Map Section */}
        <div
          className={`relative mb-20 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Map Image */}
            <div className="relative w-full">
              <Image
                src="/Images/slider/GlobalNetwork.jfif"
                alt="Elemensis Global Network Map"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Overlay Stats */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <div className="text-white text-2xl font-bold">29+</div>
                  <div className="text-white/70 text-xs">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-2xl font-bold">50+</div>
                  <div className="text-white/70 text-xs">Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-white text-2xl font-bold">4</div>
                  <div className="text-white/70 text-xs">Continents</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Key Markets
            </h3>
            <div className="w-16 h-0.75 bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, idx) => (
              <div
                key={country.name}
                className={`group relative h-[380px] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Card Container */}
                <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={country.image}
                        alt={country.name}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-white font-bold text-xl">
                          {country.name}
                        </h4>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="text-xs font-bold px-2 py-1 rounded-lg"
                          style={{
                            backgroundColor: `${country.color}15`,
                            color: country.color,
                          }}
                        >
                          {country.code}
                        </span>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">
                            {country.partnerships}+ Partners
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {country.cities.slice(0, 2).map((city, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-lg bg-gray-100 text-gray-600"
                          >
                            {city}
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                        {country.description}
                      </p>

                      <div className="mt-4 text-center text-xs text-gray-400">
                        Hover to learn more →
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-5 flex flex-col">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${country.color}20` }}
                    >
                      <Globe
                        className="w-6 h-6"
                        style={{ color: country.color }}
                      />
                    </div>

                    <h4 className="text-white font-bold text-xl mb-2">
                      {country.name}
                    </h4>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-white/70 text-xs">
                        <MapPin
                          className="w-3 h-3"
                          style={{ color: country.color }}
                        />
                        <span>{country.cities.length} Major Cities</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/70 text-xs">
                        <Users
                          className="w-3 h-3"
                          style={{ color: country.color }}
                        />
                        <span>{country.partnerships} Strategic Partners</span>
                      </div>
                    </div>

                    <p className="text-white/60 text-xs leading-relaxed mb-4">
                      {country.description}
                    </p>

                    <button
                      className="mt-auto text-sm font-semibold flex items-center justify-center gap-2 py-2 rounded-xl transition-all duration-300"
                      style={{ backgroundColor: country.color }}
                    >
                      <span>Explore Market</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Stats Banner */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {globalStats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
              <div
                className="w-10 h-0.5 mx-auto mt-3 transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: stat.color }}
              />
            </div>
          ))}
        </div>

        {/* Network Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "Strategic Locations",
              desc: "Key operational hubs strategically positioned across major markets",
              icon: Navigation,
              color: "#FF6B35",
            },
            {
              title: "Logistics Excellence",
              desc: "Efficient supply chain management with real-time tracking",
              icon: Truck,
              color: "#4ECDC4",
            },
            {
              title: "Local Expertise",
              desc: "Deep market knowledge with local partnerships in each region",
              icon: Users,
              color: "#6BCB77",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`group bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150 + 700}ms` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon
                  className="w-7 h-7"
                  style={{ color: feature.color }}
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section - Minimal Version */}
        <div
          className={`relative text-center py-2 transition-all duration-700 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-3xl mx-auto px-6">
            {/* Main Heading */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ready to Expand{" "}
              <span className="bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                Globally?
              </span>
            </h3>

            <p className="text-gray-500 text-base max-w-md mx-auto mb-8">
              Join hands with Elemensis to access our global network and reach
              new markets
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Connect With Us</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
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
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
