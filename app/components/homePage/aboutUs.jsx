"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Globe,
  Clock,
  Award,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  Leaf,
  Truck,
  Heart,
  CheckCircle,
  ArrowUpRight,
  Lightbulb,
} from "lucide-react";

export default function AboutSectionHomepage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);


  const fadeClass = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const coreValues = [
    {
      title: "Expertise",
      icon: Award,
      color: "#FF6B35",
      description:
        "With a growing network of facilities and technically trained professionals, Elemensis delivers high-quality products and services across every business vertical.",
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      color: "#00B9CC",
      description:
        "Associated with global leaders, Elemensis follows a market-driven approach focused on staying ahead and delivering innovative solutions for modern industries.",
    },
    {
      title: "Loyalty",
      icon: Heart,
      color: "#6BCB77",
      description:
        "Elemensis is committed to fostering long-term and meaningful partnerships with suppliers, customers, and global business partners.",
    },
    {
      title: "Sustainability",
      icon: Leaf,
      color: "#0099FF",
      description:
        "We strive toward a better and brighter future through sustainable growth, community development, financial stability, and responsible business practices.",
    },
  ];

  const highlights = [
    {
      title: "Global Network",
      icon: Globe,
      color: "#00CCAA",
      text: "Strong international network of clients and partners.",
    },
    {
      title: "Quality First",
      icon: ShieldCheck,
      color: "#00B9CC",
      text: "Unwavering standards of excellence across every product.",
    },
    {
      title: "Timely Delivery",
      icon: Clock,
      color: "#FF6B35",
      text: "Reliable and efficient delivery for B2B & B2C commerce.",
    },
  ];
  

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-10 pb-16 bg-gradient-to-br from-slate-50 via-white to-gray-50"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-gradient-to-tl from-indigo-100/30 to-purple-100/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-48 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-100/20 to-teal-100/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(0,204,170,0.03)_50%,transparent_60%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
       <div className="text-center mb-14">
  <div
    className={`inline-block mb-6 transition-all duration-700 ${fadeClass}`}
  >
    <span className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-bold shadow-lg shadow-teal-200/50">
      About Elemensis
    </span>
  </div>

  <h2
    className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 delay-200 ${fadeClass}`}
  >
    <span className="block text-gray-900">
      Connecting Global Markets
    </span>

    <span className="bg-gradient-to-r from-[#00CCAA] via-[#00B9CC] to-[#0099FF] bg-clip-text text-transparent">
      Through Quality & Innovation
    </span>
  </h2>

  <p
    className={`max-w-5xl mx-auto text-lg md:text-xl leading-9 text-gray-600 transition-all duration-700 delay-400 ${fadeClass}`}
  >
    At <span className="font-bold text-gray-900">Elemensis</span>, our mission
    is to close the gap between the international market and high quality. Our
    commitment to quality, unwavering standards of excellence, and
    customer-first mentality have made us stand out in the trade industry of
    UAE.

    <span className="block mt-5">
      Elemensis has effectively established a name for itself in the global
      marketplace. We have introduced the best products to the doorsteps of
      global organizations and customers through our extensive global network of
      clients and partners.
    </span>

    <span className="block mt-5 font-medium text-gray-800">
      Because of our dedication to timely and effective delivery, we are a
      highly recommended option for
      <span className="font-bold text-[#00CCAA]"> B2B</span> and
      <span className="font-bold text-[#00B9CC]"> B2C</span> transactions.
    </span>
  </p>
</div>

        {/* Highlight Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-all"
                style={{ background: item.color }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}bb)`,
                }}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.text}
              </p>

              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background: `linear-gradient(to right, ${item.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div
          className={`transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <span className="text-[#00CCAA] font-semibold tracking-widest uppercase">
              Our Core Values
            </span>

            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
              What Drives Elemensis
            </h3>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-7">
              Our success is built on expertise, innovation, loyalty, and
              sustainability — values that guide every partnership and business
              decision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {coreValues.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-7 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(145deg, ${item.color}12, transparent)`,
                  }}
                />

                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `${item.color}18`,
                    color: item.color,
                  }}
                >
                  <item.icon className="w-8 h-8" />
                </div>

                <h4 className="relative text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h4>

                <p className="relative text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        {/* <div
          className={`relative bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute inset-0 bg-black/5" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Partner With Elemensis
              </h4>
              <p className="text-white/90 text-sm md:text-base max-w-2xl">
                Delivering premium products, trusted partnerships, and global
                business solutions with excellence at every step.
              </p>
            </div>

            <button className="group px-8 py-3 bg-white rounded-full font-semibold text-[#00B9CC] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap">
              Get in Touch
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}