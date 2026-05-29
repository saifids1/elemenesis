"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Shield,
  Globe,
  Heart,
  Leaf,
  Truck,
  ChevronRight,
  CheckCircle,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";
import TrendyDivider from "../MagneticDivider";

export default function WhyChooseElemensis() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
      id: 0,
      icon: Shield,
      title: "Authenticity & Quality",
      subtitle: "Uncompromising Excellence",
      color: "#FF6B35",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      description:
        "Elemensis represents authenticity, trust, and excellence. We carefully source and develop every product to ensure the highest quality standards. Every product reflects our commitment to delivering exceptional value and reliability.",
      image: "/images/quality-assurance.jpg",
      stats: "100% Quality Guarantee",
    },
    {
      id: 1,
      icon: Globe,
      title: "Worldwide Reach",
      subtitle: "Global Network",
      color: "#4ECDC4",
      gradient: "from-teal-400 to-cyan-400",
      bgGradient: "from-teal-50 to-cyan-50",
      description:
        "Our extensive global network enables seamless trade and distribution across international markets. With customized logistics and distribution solutions, we make global business operations simple, efficient, and reliable.",
      image: "/images/global-network.jpg",
      stats: "50+ Countries Served",
    },
    {
      id: 2,
      icon: Heart,
      title: "Customer-Centric",
      subtitle: "Your Success is Our Priority",
      color: "#FF6B6B",
      gradient: "from-rose-400 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      description:
        "Customers are at the heart of everything we do. We understand that every client has unique requirements and deliver tailored solutions designed to meet their specific business needs and expectations.",
      image: "/images/customer-centric.jpg",
      stats: "24/7 Support",
    },
    {
      id: 3,
      icon: Leaf,
      title: "Sustainability",
      subtitle: "Eco-Friendly Practices",
      color: "#6BCB77",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      description:
        "We are committed to building a sustainable future through environmentally responsible products and practices. Our focus on sustainability helps create a positive impact for businesses, communities, and future generations.",
      image: "/images/sustainability.jpg",
      stats: "Carbon Neutral",
    },
    {
      id: 4,
      icon: Truck,
      title: "On-Time Delivery",
      subtitle: "Reliable Logistics",
      color: "#FFD93D",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      description:
        "We understand the importance of punctuality in business. Our efficient delivery system ensures orders arrive on time, allowing customers to rely on Elemensis for smooth, dependable, and uninterrupted operations.",
      image: "/images/delivery.jpg",
      stats: "99.9% On-Time",
    },
  ];

  const activeFeature = features[activeIndex];

  return (
    <>
      {/* <TrendyDivider /> */}
      <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 from-[#00CCAA] to-[#00B9CC] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div
              className={`inline-block mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-semibold shadow-lg">
                Why Choose Us
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#00CCAA] via-[#00B9CC] to-[#00A3CC] bg-clip-text text-transparent">
                Elemensis?
              </span>
            </h2>

            <div
              className={`w-24 h-1 bg-gradient-to-r from-[#00CCAA] via-[#00B9CC] to-[#00A3CC] mx-auto rounded-full mb-6 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />

            <p
              className={`max-w-2xl mx-auto text-gray-600 text-lg transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Building trust through excellence, reliability, and global expertise
            </p>
          </div>

          {/* Main Content - Split Layout with Images */}
          <div className="mb-20">
            {/* Desktop View - Carousel Style */}
            <div className="hidden lg:block">
              {/* Feature Navigation Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {features.map((feature, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`group px-6 py-3 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? `bg-gradient-to-r ${feature.gradient} text-white shadow-lg scale-105`
                        : "bg-white text-gray-600 hover:shadow-md border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <feature.icon className={`w-4 h-4 ${
                        activeIndex === idx ? "text-white" : "text-gray-400"
                      }`} />
                      <span className="text-sm font-medium whitespace-nowrap">
                        {feature.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Feature Display */}
              <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-full min-h-[400px] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${activeFeature.gradient} opacity-90 z-10`} />
                    <div className="relative h-full w-full z-20 flex items-center justify-center p-12">
                      <div className="text-center text-white">
                        <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                          <activeFeature.icon className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">{activeFeature.title}</h3>
                        <p className="text-white/90 text-lg">{activeFeature.subtitle}</p>
                        <div className="mt-6 inline-block px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                          <span className="text-sm font-semibold">{activeFeature.stats}</span>
                        </div>
                      </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 bg-black/20 z-15" />
                  </div>

                  {/* Content Section */}
                  <div className="p-12">
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${activeFeature.gradient} flex items-center justify-center`}>
                          <activeFeature.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                          Why Choose Us
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {activeFeature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {activeFeature.description}
                      </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00CCAA]" />
                        <span className="text-gray-700">Industry-leading quality standards</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00CCAA]" />
                        <span className="text-gray-700">Global expertise and local support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00CCAA]" />
                        <span className="text-gray-700">Sustainable and ethical practices</span>
                      </div>
                    </div>

                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet View - Stacked Cards */}
            <div className="lg:hidden space-y-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${feature.gradient}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-500">{feature.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm font-semibold text-[#00CCAA]">{feature.stats}</span>
                      <button className="text-gray-400 hover:text-[#00CCAA] transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

   
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}