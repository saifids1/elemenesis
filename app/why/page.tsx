"use client";

import { useRef } from "react";
import {
  Leaf,
  Compass,
  ShieldCheck,
  Users,
  Globe,
  ArrowUpRight,
  Atom,
  Sparkles,
  Cpu,
  Activity,
  HeartHandshake,
  Network,
  Fingerprint,
  Sprout,
  Sun,
  Wind,
  Star,
  TrendingUp,
  Award,
  CheckCircle2,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import Footer from "../layouts/footer";
import Navbar from "../layouts/navbar";

export default function WhyElemensisPage() {
  const fadeIn = {};
  const staggerContainer = {};
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Advanced Global Cinematic Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fluid-sine-1 {
          0% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-25%) scaleY(1.15); }
          100% { transform: translateX(-50%) scaleY(1); }
        }
        @keyframes fluid-sine-2 {
          0% { transform: translateX(-50%) scaleY(1.05); }
          50% { transform: translateX(-25%) scaleY(0.90); }
          100% { transform: translateX(0) scaleY(1.05); }
        }
        @keyframes shimmer-glow {
          0%, 100% { opacity: 0.3; filter: blur(120px) saturate(1); }
          50% { opacity: 0.6; filter: blur(150px) saturate(1.4); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        /* High-amplitude fluid drift matrices for Large Side Elements */
        @keyframes spatial-drift-heavy {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.25; }
          50% { transform: translateY(-35px) translateX(20px) rotate(6deg); opacity: 0.6; }
        }
        @keyframes spatial-drift-medium {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.22; }
          50% { transform: translateY(30px) translateX(-20px) rotate(-8deg); opacity: 0.55; }
        }
        @keyframes spatial-drift-light {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.25; }
          50% { transform: translateY(-20px) translateX(-15px) scale(1.12); opacity: 0.5; }
        }
        
        .animate-sine-1 { animation: fluid-sine-1 25s linear infinite; }
        .animate-sine-2 { animation: fluid-sine-2 30s linear infinite; }
        .animate-shimmer { animation: shimmer-glow 10s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-scale { animation: fade-in-scale 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .animate-spatial-1 { animation: spatial-drift-heavy 16s ease-in-out infinite; }
        .animate-spatial-2 { animation: spatial-drift-medium 20s ease-in-out infinite; }
        .animate-spatial-3 { animation: spatial-drift-light 14s ease-in-out infinite; }
        
        /* Compact Card Styles */
        .uiverse-card-root {
          position: relative;
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: rgba(0, 0, 0, 0.03) 0px 1px 2px, rgba(0, 0, 0, 0.05) 0px 4px 12px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .uiverse-card-root:hover {
          transform: translateY(-6px);
          box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 28px;
        }
        .uiverse-bg-layer {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }
        
        .profile-innovation { background: radial-gradient(circle at 100% 107%, #00CC99 0%, #9cb8ec 100%); }
        .profile-customer { background: radial-gradient(circle at 100% 107%, #D4AF37 0%, #f7d070 100%); }
        .profile-diversity { background: radial-gradient(circle at 100% 107%, #3A4D46 0%, #8ca49c 100%); }
        .profile-sustainability { background: radial-gradient(circle at 100% 107%, #008866 0%, #61cca7 100%); }

        .uiverse-card-root:hover .uiverse-bg-layer {
          transform: scale(1.2);
          opacity: 0.12;
        }
        .uiverse-card-root:hover .icon-box-custom {
          background: #ffffff !important;
          color: #0D231D !important;
          box-shadow: 0px 6px 12px rgba(0,0,0,0.08);
          transform: scale(1.05);
        }

        /* Promise Card Styles */
        .promise-card {
          background: linear-gradient(135deg, #F8F9F8 0%, #F0F3F1 100%);
          border-radius: 28px;
          transition: all 0.3s ease;
        }
        .promise-card:hover {
          transform: translateY(-4px);
          background: linear-gradient(135deg, #FFFFFF 0%, #F5F8F6 100%);
        }
            @keyframes float-slow {
              0%,
              100% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-20px) rotate(180deg);
              }
            }
            @keyframes float-medium {
              0%,
              100% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-15px) rotate(-180deg);
              }
            }
            @keyframes float-fast {
              0%,
              100% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-10px) rotate(360deg);
              }
            }
            @keyframes orb-1 {
              0%,
              100% {
                transform: translate(0, 0);
                opacity: 0.3;
              }
              33% {
                transform: translate(20px, -30px);
                opacity: 0.8;
              }
              66% {
                transform: translate(-15px, 20px);
                opacity: 0.5;
              }
            }
            @keyframes orb-2 {
              0%,
              100% {
                transform: translate(0, 0);
                opacity: 0.4;
              }
              33% {
                transform: translate(-25px, -20px);
                opacity: 0.9;
              }
              66% {
                transform: translate(15px, 25px);
                opacity: 0.6;
              }
            }
            @keyframes orb-3 {
              0%,
              100% {
                transform: translate(0, 0);
                opacity: 0.2;
              }
              33% {
                transform: translate(30px, 15px);
                opacity: 0.7;
              }
              66% {
                transform: translate(-20px, -25px);
                opacity: 0.4;
              }
            }
            @keyframes orb-4 {
              0%,
              100% {
                transform: translate(0, 0);
                opacity: 0.5;
              }
              33% {
                transform: translate(-10px, 35px);
                opacity: 0.9;
              }
              66% {
                transform: translate(25px, -15px);
                opacity: 0.6;
              }
            }
            .animate-float-slow {
              animation: float-slow 12s ease-in-out infinite;
            }
            .animate-float-medium {
              animation: float-medium 8s ease-in-out infinite;
            }
            .animate-float-fast {
              animation: float-fast 6s ease-in-out infinite;
            }
            .animate-orb-1 {
              animation: orb-1 8s ease-in-out infinite;
            }
            .animate-orb-2 {
              animation: orb-2 10s ease-in-out infinite;
            }
            .animate-orb-3 {
              animation: orb-3 7s ease-in-out infinite;
            }
            .animate-orb-4 {
              animation: orb-4 9s ease-in-out infinite;
            }
      `,
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-[#FAFBFA] via-[#FCFDFD] to-[#F5F8F7] text-[#1E2925] font-sans antialiased selection:bg-[#00CC99]/20 selection:text-[#0D231D] overflow-hidden relative">
        <Navbar />

        {/* Background Mesh */}
        <div
          className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60h60V0zM1 59V1h58v78H1z' fill='none' stroke='%2300CC99' stroke-width='0.7' stroke-opacity='0.12'/%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%2300CC99' fill-opacity='0.15'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Sine Wave Ribbons */}
        <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-0 overflow-hidden opacity-20 mix-blend-multiply">
          <div className="absolute top-[10%] left-0 w-[200%] h-[300px] text-[#00CC99]/6 animate-sine-1 transform origin-center">
            <svg className="w-full h-full" viewBox="0 0 2880 300" fill="none">
              <path
                d="M0,150 Q360,240 720,150 T1440,150 T2160,150 T2880,150 L2880,300 L0,300 Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="absolute bottom-[15%] left-0 w-[200%] h-[350px] text-[#D4AF37]/3 animate-sine-2 transform origin-center">
            <svg className="w-full h-full" viewBox="0 0 2880 350" fill="none">
              <path
                d="M0,200 Q360,130 720,200 T1440,200 T2160,200 T2880,200 L2880,350 L0,350 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* 1. CUSTOM BREADCRUMB & HERO SECTION */}
        <section className="relative h-[65vh] flex flex-col justify-center items-center overflow-hidden bg-[#0D231D] text-[#ECE9E2] px-6">
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity transform scale-105 animate-[pulse_8s_ease-in-out_infinite]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')`,
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D231D] via-transparent to-transparent z-10" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-20 text-center max-w-4xl px-4"
          >
            <motion.nav
              variants={fadeIn}
              className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8 text-sm tracking-widest text-[#D4AF37] uppercase"
            >
              <span className="text-[#00CCAA]">Home</span>
              <span className="text-white/30">•</span>
              <Leaf className="w-3.5 h-3.5 animate-spin-slow text-[#00CCAA]" />
              <span className="text-white/30">•</span>
              <span className="text-white">Why Us Elemensis</span>
            </motion.nav>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl  font-light tracking-tight text-[#ECE9E2] leading-tight"
            >
              Why Us{" "}
              <span className=" bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                Elemensis
              </span>
            </motion.h1>
          </motion.div>
        </section>

        <section
          className="relative z-20 pt-9 pb-16 px-6 md:px-12 max-w-6xl mx-auto"
          style={{ left: "3%" }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            <div className="max-w-md space-y-4 group">
              <span className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-bold shadow-lg shadow-teal-200/50">
                System Core Matrix
              </span>
              {/* <div className="flex items-center space-x-2 text-[#008866] text-xs font-mono tracking-widest uppercase bg-[#00CC99]/10 border border-[#00CC99]/20 px-3 py-1 rounded-md w-fit shadow-sm">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#00CC99] animate-ping" />
                 <span>System Core Matrix</span>
               </div> */}

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-7 text-gray-900 transition-all duration-700 delay-200 ">
                The Beating Heart of{" "}
                <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                  Our Operations.
                </span>
              </h2>

              {/* <h2 className="text-3xl md:text-4xl font-serif italic text-[#0D231D]">
                 The Beating Heart of Our Operations.
               </h2> */}
            </div>
            <div className="max-w-xl lg:pt-13">
              <p className="text-lg md:text-xl font-light text-[#4A5D55] leading-relaxed relative pl-6 border-l-2 border-[#00CC99]/30">
                Elemensis’ strengths come from its continuous commitment and
                unrelenting effort to offer our cherished clients unmatched
                assistance.
              </p>
            </div>
          </div>
        </section>

       {/* 2 Section Time line Cards*/ }
        <section className="relative z-20 pb-5 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">

          <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
            <div className="absolute top-20 left-[5%] w-96 h-96 rounded-full bg-gradient-to-r from-[#00CC99]/10 to-[#D4AF37]/5 blur-3xl animate-float-slow" />
            <div className="absolute bottom-20 right-[5%] w-80 h-80 rounded-full bg-gradient-to-r from-[#00B9CC]/10 to-[#00CC99]/5 blur-3xl animate-float-medium" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-3xl animate-float-fast" />

            {/* Lofi Geometric Patterns */}
            <svg
              className="absolute top-0 left-0 w-full h-full opacity-20"
              style={{ pointerEvents: "none" }}
            >
              <defs>
                <pattern
                  id="grid"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1" fill="#00CC99" opacity="0.3">
                    <animate
                      attributeName="opacity"
                      values="0.3;0.1;0.3"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </pattern>
                <pattern
                  id="dots"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="1.5" fill="#D4AF37" opacity="0.2">
                    <animate
                      attributeName="r"
                      values="1.5;0.5;1.5"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>

            {/* Floating Orbs */}
            <div className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-[#00CC99] animate-orb-1" />
            <div className="absolute top-[60%] left-[85%] w-3 h-3 rounded-full bg-[#D4AF37] animate-orb-2" />
            <div className="absolute top-[80%] left-[10%] w-2 h-2 rounded-full bg-[#00B9CC] animate-orb-3" />
            <div className="absolute top-[30%] left-[75%] w-2.5 h-2.5 rounded-full bg-[#00CC99] animate-orb-4" />
          </div>

          {/* Main Container - Expanded to 1400px */}
          <div className="relative mx-auto" style={{ maxWidth: "1400px" }}>
            <div className="relative border-t border-[#00CC99]/50 mb-15" />

            {/* Timeline Line */}
            <div
              ref={containerRef}
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-black/[0.04] transform md:-translate-x-1/2 pointer-events-none overflow-hidden"
            >
              <motion.div
                style={{ scaleY }}
                className="origin-top absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00CC99] via-[#D4AF37] to-[#00B9CC]"
              />
            </div>

            <div className="space-y-8 relative pb-5">
              {/* Pillar 01: INNOVATION with Hover Details */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-start group">
                <div className="absolute left-4 md:left-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#00CC99] shadow-[0_0_10px_rgba(0,204,153,0.4)] transform -translate-x-1.5 md:-translate-x-1/2 top-6 z-30 group-hover:scale-150 transition-transform duration-300" />

                {/* Card Pillar */}
                <div className=" relative left-[15%] w-full md:w-[30%] ml-8 md:ml-0 uiverse-card-root p-6 border border-black/[0.03] z-20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group/pillar">
                  <div className="uiverse-bg-layer profile-innovation" />
                  <div className="uiverse-content-wrap space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-[#00CC99]/5 border border-black/[0.03] flex items-center justify-center text-[#008866] icon-box-custom transition-all duration-400 group-hover/pillar:scale-110 group-hover/pillar:bg-[#00CC99]/10">
                        <Compass className="w-4.5 h-4.5 stroke-[1.25]" />
                      </div>
                      <span className="font-mono text-[9px] tracking-widest text-black/40 uppercase bg-black/[0.03] px-2 py-0.5 rounded">
                        Pillar 01
                      </span>
                    </div>
                    <div className="w-full h-32 rounded-xl overflow-hidden relative border border-black/[0.03]">
                      <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
                        alt="Innovation"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/pillar:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium tracking-wide flex items-center gap-1.5">
                        Innovation{" "}
                        <ArrowUpRight className="w-3.5 h-3.5 text-black/30 group-hover/pillar:translate-x-1 group-hover/pillar:-translate-y-1 transition-transform" />
                      </h3>
                      <p className="text-sm text-black/60 font-light leading-relaxed mt-1">
                        Elemensis is a pioneering company that continually
                        introduces cutting-edge solutions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="hidden md:block absolute right-0 inset-y-0 w-[50%] pointer-events-none">
                  <div className="relative w-full h-full min-h-[320px]">
                    <div className="absolute top-4 right-[15%] animate-spatial-1">
                      <Atom className="w-16 h-16 text-[#00CC99]/20 stroke-[0.75]" />
                    </div>
                    <div className="absolute top-1/2 left-[25%] -translate-y-1/2 animate-spatial-2">
                      <Cpu className="w-14 h-14 text-[#00CC99]/25 stroke-[0.85]" />
                    </div>
                    <div className="absolute bottom-6 right-[20%] animate-spatial-3">
                      <Sparkles className="w-12 h-12 text-[#D4AF37]/25" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 02: CUSTOMER CENTRICITY with Hover Details */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-end group" >
                <div className="absolute left-4 md:left-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.4)] transform -translate-x-1.5 md:-translate-x-1/2 top-6 z-30 group-hover:scale-150 transition-transform duration-300" />

                <div className="hidden md:block absolute left-0 inset-y-0 w-[50%] pointer-events-none" >
                  <div className="relative w-full h-full min-h-[320px]">
                    <div className="absolute top-6 left-[15%] animate-spatial-2">
                      <ShieldCheck className="w-16 h-16 text-[#D4AF37]/20" />
                    </div>
                    <div className="absolute top-1/2 right-[20%] -translate-y-1/2 animate-spatial-1">
                      <HeartHandshake className="w-14 h-14 text-[#D4AF37]/25" />
                    </div>
                    <div className="absolute bottom-8 left-[25%] animate-spatial-3">
                      <Activity className="w-12 h-12 text-[#00CC99]/20" />
                    </div>
                  </div>
                </div>

                <div className=" relative left-[-14%]  w-full md:w-[30%] ml-8 md:ml-0 uiverse-card-root p-6 border border-black/[0.03] z-20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group/pillar">
                  <div className="uiverse-bg-layer profile-customer" />
                  <div className="uiverse-content-wrap space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/5 border border-black/[0.03] flex items-center justify-center text-[#B58926] icon-box-custom group-hover/pillar:scale-110 transition-all duration-400">
                        <ShieldCheck className="w-4.5 h-4.5 stroke-[1.25]" />
                      </div>
                      <span className="font-mono text-[9px] tracking-widest text-black/40 uppercase bg-black/[0.03] px-2 py-0.5 rounded">
                        Pillar 02
                      </span>
                    </div>
                    <div className="w-full h-32 rounded-xl overflow-hidden relative border border-black/[0.03]">
                      <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop"
                        alt="Customer Centricity"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/pillar:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium tracking-wide">
                        Customer Centricity
                      </h3>
                      <p className="text-sm text-black/60 font-light leading-relaxed mt-1">
                        The core of our ideology is centered around our
                        customers' experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 03: DIVERSITY with Hover Details */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-start group">
                <div className="absolute left-4 md:left-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#3A4D46] shadow-[0_0_10px_rgba(58,77,70,0.3)] transform -translate-x-1.5 md:-translate-x-1/2 top-6 z-30 group-hover:scale-150 transition-transform duration-300" />

                <div className=" relative left-[14%] w-full md:w-[31%] ml-8 md:ml-0 uiverse-card-root p-6 border border-black/[0.03] z-20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group/pillar">
                  <div className="uiverse-bg-layer profile-diversity" />
                  <div className="uiverse-content-wrap space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-[#3A4D46]/5 border border-black/[0.03] flex items-center justify-center text-[#3A4D46] icon-box-custom group-hover/pillar:scale-110 transition-all duration-400">
                        <Users className="w-4.5 h-4.5 stroke-[1.25]" />
                      </div>
                      <span className="font-mono text-[9px] tracking-widest text-black/40 uppercase bg-black/[0.03] px-2 py-0.5 rounded">
                        Pillar 03
                      </span>
                    </div>
                    <div className="w-full h-32 rounded-xl overflow-hidden relative border border-black/[0.03]">
                      <img
                        src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1000&auto=format&fit=crop"
                        alt="Diversity"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/pillar:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium tracking-wide">
                        Diversity
                      </h3>
                      <p className="text-sm text-black/60 font-light leading-relaxed mt-1">
                        Diversity improves our global culture and fuels
                        groundbreaking innovation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute right-0 inset-y-0 w-[50%] pointer-events-none">
                  <div className="relative w-full h-full min-h-[320px]">
                    <div className="absolute top-4 right-[20%] animate-spatial-3">
                      <Globe className="w-16 h-16 text-[#3A4D46]/20" />
                    </div>
                    <div className="absolute top-1/2 left-[20%] -translate-y-1/2 animate-spatial-1">
                      <Network className="w-14 h-14 text-[#3A4D46]/25" />
                    </div>
                    <div className="absolute bottom-6 right-[15%] animate-spatial-2">
                      <Fingerprint className="w-12 h-12 text-[#D4AF37]/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Pillar 04: SUSTAINABILITY with Hover Details */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-end group pb-2">
                <div className="absolute left-4 md:left-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#00CC99] shadow-[0_0_10px_rgba(0,204,153,0.4)] transform -translate-x-1.5 md:-translate-x-1/2 top-6 z-30 group-hover:scale-150 transition-transform duration-300" />

                <div className="hidden md:block absolute left-0 inset-y-0 w-[50%] pointer-events-none">
                  <div className="relative w-full h-full min-h-[320px]">
                    <div className="absolute top-6 left-[25%] animate-spatial-1">
                      <Sprout className="w-16 h-16 text-[#00CC99]/25" />
                    </div>
                    <div className="absolute top-1/2 right-[15%] -translate-y-1/2 animate-spatial-3">
                      <Sun className="w-14 h-14 text-[#D4AF37]/25" />
                    </div>
                    <div className="absolute bottom-4 left-[15%] animate-spatial-2">
                      <Wind className="w-12 h-12 text-[#00CC99]/20" />
                    </div>
                  </div>
                </div>

                <div className="  relative left-[-14%] w-full md:w-[30%] ml-8 md:ml-0 uiverse-card-root p-6 border border-black/[0.03] z-20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer group/pillar">
                  <div className="uiverse-bg-layer profile-sustainability" />
                  <div className="uiverse-content-wrap space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-[#00CC99]/5 border border-black/[0.03] flex items-center justify-center text-[#008866] icon-box-custom group-hover/pillar:scale-110 transition-all duration-400">
                        <Globe className="w-4.5 h-4.5 stroke-[1.25]" />
                      </div>
                      <span className="font-mono text-[9px] tracking-widest text-black/40 uppercase bg-black/[0.03] px-2 py-0.5 rounded">
                        Pillar 04
                      </span>
                    </div>
                    <div className="w-full h-32 rounded-xl overflow-hidden relative border border-black/[0.03]">
                      <img
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop"
                        alt="Sustainability"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/pillar:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium tracking-wide">
                        Sustainability
                      </h3>
                      <p className="text-sm text-black/60 font-light leading-relaxed mt-1">
                        We are strictly committed to protecting and managing
                        environments for future generations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  <div className="relative left-1/2 w-[1400px] max-w-[90vw] -translate-x-1/2 border-t border-[#00CC99]/50 mt-10" />
     
          </div>
  
        </section>

        {/* NEW: Stats Section - Compact Impact */}
        <section className="relative z-20 pb-15  px-6 md:px-12 max-w-6xl mx-auto">
  
          <div className="grid grid-cols-2 md:grid-cols-4 pt-10 gap-6 pt-4 ">
            {[
              { value: "15+", label: "Premium Brands", icon: Award },
              { value: "100%", label: "Naturally Derived", icon: Leaf },
              { value: "50k+", label: "Happy Customers", icon: Users },
              { value: "4.9", label: "Client Rating", icon: TrendingUp },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-[#00CC99]/5 flex items-center justify-center group-hover:bg-[#00CC99]/10 transition-all">
                  <stat.icon className="w-4 h-4 text-[#00CC99]" />
                </div>
                <div className="text-2xl font-semibold text-[#0D231D]">
                  {stat.value}
                </div>
                <div className="text-xs text-[#5A6E65] uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
