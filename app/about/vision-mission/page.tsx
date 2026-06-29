"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Globe,
  Target,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Eye,
  Star,
  Heart,
  Briefcase,
  Zap,
  Shield,
  BarChart3,
  Lightbulb,
} from "lucide-react";

import Footer from "../../layouts/footer";
import { motion } from "framer-motion";
import Navbar from "../../layouts/navbar";

const MissionVision = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const coreValues = [
    {
      title: "Innovation",
      description:
        "Continuously evolving to meet the changing needs of our global partners",
      icon: Lightbulb,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "Excellence",
      description:
        "Delivering superior quality in every product and service we offer",
      icon: Award,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Integrity",
      description:
        "Building trust through transparent and honest business practices",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Partnership",
      description:
        "Creating lasting relationships that drive mutual growth and success",
      icon: HandshakeIcon,
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description: "Elemesis established with a vision for global excellence",
    },
    {
      year: "2021",
      title: "First Global Partner",
      description: "Expanded operations to 10+ countries",
    },
    {
      year: "2022",
      title: "B2B Expansion",
      description: "Launched comprehensive B2B solutions",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Awarded for service excellence",
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Serving 50+ countries worldwide",
    },
  ];
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };
  // Animation Variants
  const cubicBezierEase = [0.16, 1, 0.3, 1] as any;

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicBezierEase },
    },
  };

  return (
    <>
      <Navbar />
      <main ref={sectionRef} className="bg-white overflow-x-hidden">
        {/* Section 1: Hero - Gradient */}

        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 py-24 text-[#ECE9E2]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#096F72] to-[#096F72]">
            {/* <img
              src="/Images/about_us/about01.png"
              alt="About Us"
              className="w-full h-full object-cover object-center"
            /> */}
          </div>

          {/* Dark Green Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D231D]/70 via-[#0D231D]/55 to-[#0D231D]/65" />

          {/* Additional Dark Layer */}
          <div className="absolute inset-0 z-10 bg-black/30" />

          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-20 mx-auto max-w-5xl text-center"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={fadeIn}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md text-sm uppercase tracking-[3px] text-[#D4AF37]"
            >
              <Target className="w-4 h-4 text-white" />
              <span className="text-white font-semibold tracking-wide">
                Our Shared Purpose
              </span>
            </motion.nav>

            {/* Heading */}
            <motion.h1
              variants={fadeIn}
              className="mt-8 text-5xl font-light leading-tight tracking-tight md:text-7xl"
            >
              <span className=" text-white"> Vision & Mission </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="mx-auto mt-8 max-w-4xl text-base leading-[2] text-gray-200 md:text-lg"
            >
              To shape the future of global trade through uncompromised
              integrity. We connect worldwide markets by guiding every supply
              chain choice with a steadfast commitment to transparency,
              accountability, and the global communities we serve.
            </motion.p>
          </motion.div>
        </section>

        {/* Section 2: Mission Statement - White */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto max-w-7xl px-4">
            <div
              className={`max-w-5xl mx-auto transition-all delay-400 duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {/* Decorative corner accents */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#096F72] rounded-tl-2xl opacity-30" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-[#096F72] rounded-br-2xl opacity-30" />

                <div className="bg-[#064D50] rounded-3xl p-10 md:p-14 shadow-xl border border-[#00CCAA]/20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-white rounded-2xl">
                      <Rocket className="w-10 h-10 text-[#096F72]" />
                    </div>
                    <div>
                      <span className="text-white/70 font-semibold text-sm uppercase tracking-wider">
                        Our Mission
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
                        What Drives Us Every Day
                      </h2>
                    </div>
                  </div>

                  <p className="text-white/70 text-xl md:text-2xl leading-relaxed mb-8">
                    Our mission is to provide companies & individuals all around
                    the world with our
                    <span className="font-semibold text-white">
                      {" "}
                      superior goods, outstanding services,{" "}
                    </span>
                    and steadfast support.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text--[#096F72]/30" />
                      <span className="text-white">
                        Superior Quality Products
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text--[#096F72]/30" />
                      <span className="text-white">Outstanding Service</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text--[#096F72]/30" />
                      <span className="text-white">Steadfast Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Vision Statement - Gradient */}
        <section className="relative py-12 bg-[#064D50] overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/10 rounded-full animate-float-particle"
                style={{
                  width: `${Math.random() * 6 + 1}px`,
                  height: `${Math.random() * 6 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${Math.random() * 8 + 4}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div
              className={`max-w-5xl mx-auto transition-all delay-600 duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-white/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-[#064D50] rounded-2xl">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <span className="text-[#096F72] font-semibold text-sm uppercase tracking-wider">
                      Our Vision
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#096F72] mt-1">
                      Where We're Heading
                    </h2>
                  </div>
                </div>

                <p className="text-[#096F72] text-xl md:text-2xl leading-relaxed mb-8">
                  Our vision is to establish ourselves as the
                  <span className="font-bold">
                    {" "}
                    preferred B2B & B2C partner
                  </span>{" "}
                  for companies & individuals across the globe, promoting
                  expansion and success.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t text-[#096F72]">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#096F72]">B2B</div>
                    <div className="text-[#096F72]/80 text-sm">
                      Business Solutions
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#096F72]">B2C</div>
                    <div className="text-[#096F72]/80 text-sm">
                      Consumer Excellence
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#096F72]">
                      Global
                    </div>
                    <div className="text-[#096F72]/80 text-sm">
                      Worldwide Reach
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Core Values - White */}
        <section className="py-24 lg:pt-8 bg-white relative">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#064D50] rounded-full mb-4">
                <Star className="w-4 h-4 text-white" />
                <span className="text-white font-semibold text-sm">
                  Core Values
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#096F72] mb-4">
                The Values That Guide Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#096F72] to-[#096F72] mx-auto rounded-full" />
              <p className="text-[#096F72]/70 mt-6 max-w-2xl mx-auto text-lg">
                These principles shape every decision we make and every
                relationship we build
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 150 + 700}ms` }}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>

                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-[#096F72] to-transparent rounded-full group-hover:w-24 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Journey Timeline - Gradient */}
        {/* <section className="relative py-24 bg-gradient-to-br from-[#00CCAA] via-[#096F72] to-[#0099FF] overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/10 rounded-full animate-float-particle"
                style={{
                  width: `${Math.random() * 6 + 1}px`,
                  height: `${Math.random() * 6 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-4">
                <TrendingUp className="w-4 h-4 text-white" />
                <span className="text-white font-semibold text-sm">
                  Our Journey
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Milestones Along the Way
              </h2>
              <div className="w-24 h-1 bg-white/50 mx-auto rounded-full" />
            </div>

            <div className="relative">
      
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/30 hidden md:block" />

              <div className="space-y-12">
                {milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-center gap-8 transition-all delay-${800 + idx * 100} duration-700 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                  >
                    <div
                      className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:order-2"}`}
                    >
                      <div
                        className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 ${idx % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                      >
                        <div className="text-3xl font-bold text-white mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-white/80">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00CCAA] to-[#0099FF]" />
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>

      
        </section> */}

        {/* Section 6: Global Impact Stats - White */}
        <section className="py-20 lg:pt-1 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div
              className={`grid md:grid-cols-4 gap-6 transition-all delay-1000 duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {[
                {
                  value: "29+",
                  label: "Countries Served",
                  icon: Globe,
                  gradient: "from-cyan-500 to-blue-500",
                },
                {
                  value: "50+",
                  label: "Global Partners",
                  icon: Users,
                  gradient: "from-emerald-500 to-teal-500",
                },
                {
                  value: "100%",
                  label: "Client Satisfaction",
                  icon: Heart,
                  gradient: "from-rose-500 to-pink-500",
                },
                {
                  value: "24/7",
                  label: "Customer Support",
                  icon: Briefcase,
                  gradient: "from-purple-500 to-indigo-500",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: CTA - Gradient */}
        <section className="relative py-20 bg-[#064D50] overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/10 rounded-full animate-float-particle"
                style={{
                  width: `${Math.random() * 8 + 2}px`,
                  height: `${Math.random() * 8 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div
              className={`text-center transition-all delay-1100 duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="max-w-3xl mx-auto">
                <Zap className="w-16 h-16 text-white mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join Us on Our Journey
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Become part of a global community committed to excellence,
                  innovation, and mutual success
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#096F72] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-50px) translateX(-15px);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-25px) translateX(20px);
            opacity: 0.5;
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.15);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0px);
            opacity: 1;
          }
          100% {
            transform: translateY(15px);
            opacity: 0;
          }
        }

        .animate-float-particle {
          animation: float-particle 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 8s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

// Custom Handshake Icon Component
const HandshakeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6l-3 4" />
    <path d="M7 8h10a2 2 0 0 1 2 2v4c0 1.1-.9 2-2 2H7a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2z" />
    <path d="M10 11v-3a2 2 0 1 1 4 0v3" />
    <path d="M6 19.5L7.5 18" />
    <path d="M18 19.5L16.5 18" />
  </svg>
);

export default MissionVision;
