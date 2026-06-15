"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Scale,
  Users,
  Gavel,
  Globe,
  Heart,
  Leaf,
  CheckCircle,
  Building2,
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  ChevronRight,
  Briefcase,
  Star,
  AlertCircle,
  Sparkles,
  Award,
  TrendingUp,
  Fingerprint,
} from "lucide-react";

import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";
import { motion } from "framer-motion";

const EthicalBusinessPractices = () => {
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

  const principles = [
    {
      title: "Transparency & Honesty",
      description:
        "Unambiguous communication that builds lasting trust and enduring partnerships with all stakeholders.",
      icon: Eye,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Integrity First",
      description:
        "Ethical conduct is recognized, valued, and exemplified at every level of our organization.",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Fair Competition",
      description:
        "Zero tolerance for collusive bidding, price discrimination, or any unfair business practices.",
      icon: Scale,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Diversity & Inclusion",
      description:
        "Fostering an atmosphere that respects and treats all members, suppliers, and customers fairly.",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const complianceAreas = [
    { name: "Employment Laws", status: "Fully Compliant", icon: Briefcase },
    { name: "Anti-Discrimination", status: "Zero Tolerance", icon: Users },
    {
      name: "Health & Safety",
      status: "ISO 45001 Certified",
      icon: ShieldCheck,
    },
    { name: "Anti-Fraud", status: "Annual Audit", icon: Lock },
    { name: "Anti-Corruption", status: "Strict Enforcement", icon: Gavel },
    { name: "Export Control", status: "Fully Compliant", icon: Globe },
    {
      name: "Environmental Protection",
      status: "ISO 14001 Certified",
      icon: Leaf,
    },
  ];

  const policies = [
    "All business conducted in accordance with applicable laws",
    "Strict adherence to anti-discrimination and equal opportunity guidelines",
    "Comprehensive health and safety standards across all operations",
    "Zero-tolerance approach to fraud and corruption",
    "Full compliance with international export control regulations",
    "Commitment to environmental protection and sustainability",
  ];
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };
  return (
    <>
      <Navbar />
      <main ref={sectionRef} className="bg-white overflow-x-hidden">
        {/* Hero Section with Decorative Elements */}
        <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-br from-[#00CCAA] via-[#00B9CC] to-[#0099FF]">
          {/* Background / Overlay should stay behind */}
          <div className="absolute inset-0 bg-black/30 z-0" />

          {/* Content */}
          <div className="relative z-10 container mx-auto max-w-7xl px-4 top-16">
            <div className="max-w-4xl mx-auto pt-30 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 transition-all duration-700">
             <Scale  className="w-4 h-4 text-white" />
              <span className="text-white font-semibold tracking-wide">
                Sourcing
              </span>
            </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all delay-200 duration-700">
                Ethics{" "}
              </h1>

              <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed transition-all delay-300 duration-700">
                Where transparent practices meet exceptional results. We guide
                every commercial decision with a steadfast commitment to
                honesty, accountability, and the people we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction with Decorative Border */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div
              className={`relative max-w-4xl mx-auto transition-all delay-500 duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Decorative corner accents */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#00CCAA] rounded-tl-2xl opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#00B9CC] rounded-br-2xl opacity-50" />

              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-10 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-[#00CCAA]/10 to-[#00B9CC]/10 rounded-xl">
                    <Fingerprint className="w-6 h-6 text-[#00B9CC]" />
                  </div>
                  <p className="text-gray-600 text-lg">Our Promise</p>
                </div>
                <p className="text-gray-700 text-xl leading-relaxed">
                  As part of our commitment to the industries and regions we
                  serve, we strictly adhere to ethical principles.
                  <span className="font-semibold text-[#00B9CC]">
                    {" "}
                    Employees, suppliers, and customers
                  </span>{" "}
                  are all bound by the same code of conduct. We believe that
                  unambiguous communication is essential to ethical behavior,
                  leading to trust and enduring relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles with Cards */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-[#00CCAA]/5 to-[#00B9CC]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-[#0099FF]/5 to-[#00B9CC]/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00CCAA]/10 to-[#00B9CC]/10 rounded-full mb-4">
                <Award className="w-4 h-4 text-[#00B9CC]" />
                <span className="text-[#00B9CC] font-semibold text-sm">
                  Core Values
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Guiding Principles
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00CCAA] to-[#0099FF] mx-auto rounded-full" />
              <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
                Shaping every decision and action across our global operations
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {principles.map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 150 + 600}ms` }}
                >
                  {/* Gradient border on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-[#00CCAA] to-transparent rounded-full group-hover:w-24 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zero Tolerance Banner with Animation */}
        <section className="py-16 bg-gradient-to-r from-[#00CCAA] to-[#0099FF] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
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
              className={`text-center transition-all delay-700 duration-700 ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                <AlertCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Zero-Tolerance Policy
              </h3>
              <p className="text-white/90 text-lg max-w-3xl mx-auto">
                We maintain a strict zero-tolerance policy towards any
                violations of our code of conduct and ethical practices. Every
                concern is investigated thoroughly and addressed with immediate
                action.
              </p>
            </div>
          </div>
        </section>

        {/* Code of Conduct with Image */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all delay-800 duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-12 opacity-0"
                }`}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00CCAA]/10 rounded-full mb-4">
                    <FileText className="w-4 h-4 text-[#00B9CC]" />
                    <span className="text-[#00B9CC] font-semibold text-sm">
                      Legal Framework
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Code of Conduct
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#00CCAA] to-[#0099FF] rounded-full mb-6" />
                </div>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Elemensis members and all parties involved must conduct their
                  businesses in accordance with all applicable laws, including
                  those related to:
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Employment laws",
                    "Anti-discrimination",
                    "Health & safety",
                    "Anti-fraud",
                    "Anti-corruption",
                    "Export control",
                    "Environmental protection",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#00CCAA]/20 to-[#00B9CC]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-4 h-4 text-[#00B9CC]" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all delay-900 duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                    alt="Ethical business conduct"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Leading with integrity across all operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Framework Grid */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00CCAA]/10 to-[#00B9CC]/10 rounded-full mb-4">
                <ShieldCheck className="w-4 h-4 text-[#00B9CC]" />
                <span className="text-[#00B9CC] font-semibold text-sm">
                  Regulatory Standards
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Compliance Framework
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00CCAA] to-[#0099FF] mx-auto rounded-full" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {complianceAreas.map((area, idx) => (
                <div
                  key={idx}
                  className={`group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 80 + 1000}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-[#00CCAA]/10 to-[#00B9CC]/10 rounded-xl group-hover:scale-110 transition-transform">
                        <area.icon className="w-6 h-6 text-[#00B9CC]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {area.name}
                        </p>
                        <p className="text-sm text-green-600 font-medium">
                          {area.status}
                        </p>
                      </div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diversity & Inclusion Card */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div
              className={`relative bg-gradient-to-r from-[#00CCAA]/5 via-[#00B9CC]/5 to-[#0099FF]/5 rounded-3xl p-10 overflow-hidden transition-all delay-1100 duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00CCAA]/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#0099FF]/10 to-transparent rounded-full blur-2xl" />

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00CCAA] to-[#0099FF] flex items-center justify-center shadow-xl animate-pulse-glow">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      Diversity & Inclusion
                    </h3>
                    <p className="text-gray-600 text-lg max-w-xl">
                      Fostering an atmosphere that respects and treats all
                      members, suppliers, and customers fairly.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold text-gray-700">
                    Equal Opportunity Employer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Commitments */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00CCAA]/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0099FF]/10 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
                className={`transition-all delay-1200 duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-12 opacity-0"
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop"
                    alt="Business compliance"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </div>

              <div
                className={`transition-all delay-1300 duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }`}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                    <TrendingUp className="w-4 h-4 text-[#00CCAA]" />
                    <span className="text-[#00CCAA] font-semibold text-sm">
                      Our Promise
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our Business Commitments
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] rounded-full" />
                </div>

                <div className="space-y-4">
                  {policies.map((policy, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors text-lg">
                        {policy}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Navigation Links */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="container mx-auto max-w-7xl px-4">
            <div
              className={`flex flex-wrap justify-center gap-4 transition-all delay-1400 duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {[
                {
                  name: "Our Organization",
                  href: "/organization",
                  icon: Building2,
                  color: "from-[#00CCAA] to-[#00B9CC]",
                },
                {
                  name: "Markets We Serve",
                  href: "/markets",
                  icon: Globe,
                  color: "from-[#00B9CC] to-[#0099FF]",
                },
                {
                  name: "QHSE Policy",
                  href: "/qhse",
                  icon: ShieldCheck,
                  color: "from-[#00CCAA] to-[#0099FF]",
                },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-gray-50 to-white rounded-full shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="relative flex items-center gap-2">
                    <link.icon className="w-4 h-4 text-[#00B9CC] group-hover:text-white transition-colors" />
                    <span className="font-medium text-gray-700 group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
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

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(0, 204, 170, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 185, 204, 0.5);
            transform: scale(1.05);
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

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default EthicalBusinessPractices;
