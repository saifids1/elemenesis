"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Globe,
  Clock,
  Award,
  ChevronRight,
  Sparkles,
  Package,
  ShieldCheck,
  TrendingUp,
  Users,
  Leaf,
  Truck,
  Heart,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import TrendyDivider from "../MagneticDivider";

export default function AboutSectionHomepage() {
  const [activeTab, setActiveTab] = useState(0);
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

  const tabs = [
    {
      title: "Our Mission",
      icon: Sparkles,
      color: "#FF6B35",
      content:
        "Our mission is to close the gap between the international market and high quality. Our commitment to quality, unwavering standards of excellence, and customer-first mentality have made us stand out in the trade industry of UAE.",
    },
    {
      title: "Global Reach",
      icon: Globe,
      color: "#4ECDC4",
      content:
        "Elemensis has effectively established a name for itself in the global marketplace. We have introduced the best products to the doorsteps of global organizations & customers thanks to our extensive global network of clients and partners.",
    },
    {
      title: "Our Promise",
      icon: ShieldCheck,
      color: "#6BCB77",
      content:
        "Because of our dedication to timely and effective delivery, we are a highly recommended option for B2B & B2C transactions. We believe in teamwork, sustainability & quality.",
    },
  ];

  const quickStats = [
    { value: "29+", label: "Countries", icon: Globe, color: "#FF6B35" },
    { value: "50+", label: "Partners", icon: Users, color: "#4ECDC4" },
    { value: "100%", label: "Quality", icon: Award, color: "#6BCB77" },
    { value: "24/7", label: "Support", icon: Clock, color: "#FF6B6B" },
  ];

  const values = [
    { title: "Teamwork", icon: Heart, color: "#FF6B6B" },
    { title: "Sustainability", icon: Leaf, color: "#6BCB77" },
    { title: "Quality", icon: Award, color: "#FF6B35" },
    { title: "Reliability", icon: Truck, color: "#4ECDC4" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-15 bg-gradient-to-br from-slate-50 via-white to-gray-50"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Grid Pattern */}

        {/* Gradient  */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-gradient-to-tl from-indigo-100/30 to-purple-100/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-48 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-100/20 to-teal-100/20 rounded-full blur-[100px]" />

        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(0,204,170,0.02)_50%,transparent_60%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header  */}
        <div className="text-center mb-12">
          <div
            className={`inline-block mb-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-bold shadow-lg shadow-teal-200/50">
              Who We Are
            </span>
          </div>

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Unveiling{" "}
            <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
              Elemensis
            </span>
            <br />
            <span className="text-gray-800">
              A World Of Fine Products Awaits
            </span>
          </h2>

          <div
            className={`w-20 h-1 bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 mx-auto rounded-full shadow-[0_0_20px_rgba(0,204,170,0.4)] transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          <p
            className={`max-w-3xl mx-auto mt-6 text-gray-700 text-base leading-relaxed transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Elemensis has become a trustworthy company in UAE dealing globally
            B2B & B2C commerce. We are providing solutions to all of the
            businesses with our quality products.
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              We believe in teamwork, sustainability & quality.
            </span>
          </p>
        </div>

        {/* Quick Stats  */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-5 mb-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {quickStats.map((stat, idx) => (
            <div className="group relative cursor-pointer" key={idx}>
              {/* Background Gradient */}
              <div
                className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
                style={{
                  background: `radial-gradient(circle at top right, ${stat.color}55, transparent 70%)`,
                }}
              />

              {/* Main Card */}
              <div
                className="relative overflow-hidden rounded-[28px] p-7 bg-white border border-gray-100 shadow-md transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl"
                style={{
                  background: `linear-gradient(145deg, #ffffff, ${stat.color}08)`,
                }}
              >
                {/* Decorative Gradient Blob */}
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-20"
                  style={{
                    background: stat.color,
                  }}
                />

                {/* Icon Box */}
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}bb)`,
                    boxShadow: `0 10px 30px ${stat.color}40`,
                  }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-4xl font-black text-gray-900 leading-none mb-2">
                    {stat.value}
                  </h2>

                  <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
                    {stat.label}
                  </p>
                </div>

                {/* Hover Line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{
                    background: `linear-gradient(to right, ${stat.color}, transparent)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div
          className={`transition-all duration-700 delay-200 mb-5 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Three Column Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                number: "01",
                title: "Global Network",
                desc: "Extensive network of clients and partners worldwide, bringing the best products to global organizations",
                icon: Globe,
                color: "#FF6B35",
                stat: "29+ Countries",
              },
              {
                number: "02",
                title: "Quality First",
                desc: "Commitment to unwavering standards of excellence and customer-first mentality in UAE's trade industry",
                icon: Award,
                color: "#4ECDC4",
                stat: "100% Guaranteed",
              },
              {
                number: "03",
                title: "Timely Delivery",
                desc: "Dedication to timely and effective delivery, making us a highly recommended option for B2B & B2C",
                icon: Clock,
                color: "#6BCB77",
                stat: "24/7 Support",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
              >
                {/* Number Badge */}
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5 font-black text-lg"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)`,
                    color: item.color,
                  }}
                >
                  {item.number}
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <item.icon
                    className="w-8 h-8"
                    style={{ color: item.color }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* Stat Badge */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-px bg-gray-300 group-hover:w-8 transition-all"
                    style={{ backgroundColor: item.color }}
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: item.color }}
                  >
                    {item.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mission & Vision Double Card */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Mission Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 p-8 border border-orange-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 mb-5">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-bold text-orange-700 uppercase tracking-wide">
                    Our Mission
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Bridging Global Markets
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  Our mission is to close the gap between the international
                  market and high quality. Our commitment to quality, unwavering
                  standards of excellence, and customer-first mentality have
                  made us stand out in the trade industry of UAE.
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-orange-600 font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Trusted by businesses globally</span>
                </div>
              </div>
            </div>

            {/* Vision/Success Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-cyan-50 p-8 border border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-teal-200/20 to-transparent rounded-full blur-2xl" />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-200/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 mb-5">
                  <TrendingUp className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wide">
                    Global Impact
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  World-Class Excellence
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  Elemensis has effectively established a name for itself in the
                  global marketplace. We have introduced the best products to
                  the doorsteps of global organizations & customers thanks to
                  our extensive global network.
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-teal-600 font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Highly recommended for B2B & B2C</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="relative bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] rounded-3xl p-10 overflow-hidden mt-5">
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to Partner With Us?
                </h4>
                <p className="text-white/80 text-sm">
                  Join hundreds of satisfied businesses that trust Elemensis for
                  quality products
                </p>
              </div>
              <button className="group px-8 py-3 bg-white rounded-full font-semibold text-[#00CCAA] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Get in Touch
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
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
          animation: blob 10s infinite cubic-bezier(0.45, 0, 0.55, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
