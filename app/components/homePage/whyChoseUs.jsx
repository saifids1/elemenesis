"use client";
import React, { useEffect, useRef, useState } from "react";
import { Shield, Globe, Heart, Leaf, Truck, ChevronRight } from "lucide-react";

export default function WhyChooseElemensis() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Authenticity and Quality",
      color: "#FF6B35",
      bgGradient: "from-orange-500 to-red-500",
      description:
        "Elemensis is a representation of sincerity and unflinching greatness. We meticulously source and develop our products, so you will only get the best. Elemensis is the epitome of sincerity and unflinching greatness. You select the best when you go with Elemensis. How come? Considering that Elemensis carefully selects its products. Every product demonstrates their dedication to excellence.",
    },
    {
      icon: Globe,
      title: "Worldwide Reach",
      color: "#4ECDC4",
      bgGradient: "from-teal-400 to-cyan-400",
      description:
        "Our global network allows us to facilitate smooth trade & distribution. We have systems for distribution and logistics that are tailored to your requirements. Elemensis has perfected the art of seamless trading, which is crucial for global businesses. Elemensis makes doing business easy with customized systems for logistics and distribution that are suited to your unique requirements.",
    },
    {
      icon: Heart,
      title: "Customer-Centric Approach",
      color: "#FF6B6B",
      bgGradient: "from-rose-400 to-pink-500",
      description:
        "Our consumers are our top priority at Elemensis. We are aware of your particular needs and take great care in delivering solutions that are suited to them. Elemensis is aware of the individual requirements and preferences of every client. As a result, we take great care to provide solutions that are precisely suited to those requirements.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      color: "#6BCB77",
      bgGradient: "from-green-400 to-emerald-500",
      description:
        "Our goal for the future is sustainability. We guarantee that we have a positive environmental impact by using eco-friendly products and procedures. Elemensis is dedicated to sustainability in a time when environmental awareness is crucial. By utilizing environmentally friendly materials and sustainable practices, we ensure a beneficial environmental impact. Selecting Elemensis indicates that you are choosing environmentally friendly products for a more sustainable and greener world.",
    },
    {
      icon: Truck,
      title: "On-time Delivery",
      color: "#FFD93D",
      bgGradient: "from-yellow-400 to-orange-500",
      description:
        "We recognize the value of punctuality in business. Our efficient delivery system ensures that your orders will always arrive on time. Elemensis understands how important timeliness is in the corporate world. You can always count on your orders to arrive on time because to their incredibly efficient shipping system. Elemensis is a company you can rely on to fulfill their commitments, guaranteeing prompt and seamless commercial operations.",
    },
  ];

  const activeFeature = features[activeIndex];

  return (
    <>
      <TrendyDivider />
      <section ref={sectionRef} className="pt-10 pb-5 bg-white/20 ">
        <TopNavigation currentSlideGradient="linear-gradient(90deg, #FF6B35, #F59E0B)" />

        {/* Animated Background Blobs */}
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className={`inline-block mb-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-semibold">
                Why Choose Elemensis?
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              What Makes Us
              <br />
              <span className="bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                Different?
              </span>
            </h2>

            <div
              className={`w-20 h-1 bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 mx-auto rounded-full shadow-[0_0_15px_rgba(0,255,209,0.5)] transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center Line - Desktop only */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300 hidden lg:block" />

            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`relative mb-16 lg:mb-24 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Use Flex instead of complex Grid to keep rows forced */}
                <div
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Side 1 */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                      {/* Number Badge */}
                      <div
                        className="inline-flex items-center justify-center w-10 h-10 rounded-2xl mb-6 shadow-inner"
                        style={{
                          background: `linear-gradient(135deg, ${feature.color}10, ${feature.color}30)`,
                          color: feature.color,
                        }}
                      >
                        <span className="text-sm font-black uppercase tracking-tighter">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="p-3 rounded-2xl group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundColor: `${feature.color}15` }}
                        >
                          <feature.icon
                            className="w-7 h-7"
                            style={{ color: feature.color }}
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                          {feature.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-500 leading-relaxed mb-6 text-base font-medium opacity-80">
                        {feature.description}
                      </p>

                      {/* Learn More Button */}
                      <button
                        className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase transition-all hover:gap-4"
                        style={{ color: feature.color }}
                      >
                        Details
                        <div
                          className="h-[2px] w-8 transition-all group-hover:w-12"
                          style={{ backgroundColor: feature.color }}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Side 2 */}
                  <div className="hidden lg:flex w-1/2 justify-center items-center">
                    <div className="relative">
                      {/* Ambient Glow behind the icon */}
                      <div
                        className="absolute inset-0 rounded-full blur-[60px] opacity-20 animate-pulse"
                        style={{ backgroundColor: feature.color }}
                      />

                      {/* Main Visual Circle */}
                      <div
                        className="relative w-64 h-64 rounded-full flex items-center justify-center border border-dashed border-gray-200"
                        style={{
                          background: `radial-gradient(circle, ${feature.color}05, transparent)`,
                        }}
                      >
                        <div
                          className="w-32 h-32 rounded-3xl rotate-12 flex items-center justify-center bg-white shadow-2xl border border-gray-50 group-hover:rotate-0 transition-transform duration-700"
                          style={{ borderBottom: `4px solid ${feature.color}` }}
                        >
                          <feature.icon
                            className="w-14 h-14 -rotate-12 group-hover:rotate-0 transition-transform duration-700"
                            style={{ color: feature.color }}
                          />
                        </div>

                        {/* Orbital Elements */}
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full animate-orbit"
                            style={{
                              backgroundColor: feature.color,
                              animationDelay: `${i * 1.5}s`,
                              top: "50%",
                              left: "50%",
                              transform: `rotate(${i * 120}deg) translateX(110px)`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center mt-12 transition-all duration-700 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="group px-7 py-3 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white rounded-full font-semibold shadow-[0_4px_15px_rgba(0,204,170,0.4)] hover:scale-105 transition-all duration-300 text-sm items-center">
              Start Your Journey With Us
              <ChevronRight className="inline-block w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes orbit {
            0% {
              transform: rotate(0deg) translateX(90px) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: rotate(360deg) translateX(90px) rotate(-360deg);
              opacity: 0.5;
            }
          }
          .animate-orbit {
            animation: orbit 6s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
}

//

// Below This is a simple version , if sir approved this one then this will be applied on home page

import { ArrowRight } from "lucide-react";
import TopNavigation from "@/app/layouts/navbar";
import TrendyDivider from "../MagneticDivider";

export function WhyChooseElemensiss() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Authenticity & Quality",
      description:
        "Elemensis represents sincerity and unwavering excellence. We meticulously source and develop our products, ensuring you receive nothing but the best. Every product demonstrates our dedication to quality.",
    },
    {
      icon: Globe,
      title: "Worldwide Reach",
      description:
        "Our global network facilitates smooth trade and distribution worldwide. With customized logistics systems tailored to your requirements, we've perfected the art of seamless global trading.",
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description:
        "Your needs are our priority. We understand individual client requirements and deliver precisely tailored solutions. Every client receives dedicated attention and customized service.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Committed to eco-friendly practices and sustainable procedures. By utilizing environmentally responsible materials, we ensure a positive impact on our planet for future generations.",
    },
    {
      icon: Truck,
      title: "On-Time Delivery",
      description:
        "Time is business. Our efficient delivery system ensures orders arrive precisely when promised. You can rely on Elemensis for prompt, seamless commercial operations.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-block mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Why Choose Us
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Why Choose <span className="font-bold">Elemensis?</span>
          </h2>

          <div
            className={`w-16 h-0.5 bg-gray-900 mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          <p
            className={`max-w-2xl mx-auto mt-6 text-gray-500 text-lg transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Building trust through excellence, reliability, and global expertise
          </p>
        </div>

        {/* Feature Grid - Clean 5 Column Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`group transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="text-center">
                  {/* Icon Circle */}
                  <div className="relative mb-6 flex justify-center">
                    <div
                      className={`absolute inset-0 rounded-full bg-gray-900 transition-all duration-300 ${
                        isHovered
                          ? "scale-110 opacity-10"
                          : "scale-100 opacity-0"
                      }`}
                    />
                    <div className="relative w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Divider Line on Hover */}
                  <div
                    className={`w-8 h-px bg-gray-300 mx-auto mt-4 transition-all duration-300 ${
                      isHovered ? "w-12 bg-gray-900" : "w-8"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Separator */}
        <div className="my-20 border-t border-gray-100" />

        {/* Bottom Stats / Trust Indicators */}
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Countries Served
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Global Partners
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Commitment to Quality
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-20 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 group">
            <span className="font-medium">Work With Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
