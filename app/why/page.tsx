"use strict";

import React from "react";
import { 
  Leaf, Compass, ShieldCheck, Users, Globe, ArrowUpRight, 
  Atom, Sparkles, Cpu, Activity, HeartHandshake, Network, 
  Fingerprint, Sprout, Sun, Wind 
} from "lucide-react";

import Footer from "../layouts/footer";
import Navbar from "../layouts/navbar";
import Image from "next/image";

// mock Framer Motion fallback primitives configured with high-performance CSS sequence matrices
const motion = {
  div: ({ children, className, variants, ...props }: any) => (
    <div className={`animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0 ${className || ""}`} {...props}>
      {children}
    </div>
  ),
  nav: ({ children, className, variants, ...props }: any) => (
    <nav className={`animate-[fade-in-up_1s_cubic-bezier(0.16,1,0.3,1)_200ms_forwards] opacity-0 ${className || ""}`} {...props}>
      {children}
    </nav>
  ),
  h1: ({ children, className, variants, ...props }: any) => (
    <h1 className={`animate-[fade-in-scale_1.4s_cubic-bezier(0.16,1,0.3,1)_400ms_forwards] opacity-0 ${className || ""}`} {...props}>
      {children}
    </h1>
  ),
};

const fadeIn = {};
const staggerContainer = {};

export default function WhyElemensisPage() {
  return (
    <>
      {/* Advanced Global Cinematic Animations */}
      <style dangerouslySetInnerHTML={{__html: `
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
        
        /* =========================================================================
            UIVERSE SPICY-RAT-83 FRAMEWORK ADAPTATION
           ========================================================================= */
        .uiverse-card-root {
          position: relative;
          background: #ffffff;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: rgba(100, 100, 111, 0.15) 0px 7px 29px 0px;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .uiverse-card-root:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: rgba(100, 100, 111, 0.25) 0px 20px 40px 0px;
        }
        .uiverse-bg-layer {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }
        
        /* Individual mesh profiles maps based on your core branding signatures */
        .profile-innovation { background: radial-gradient(circle at 100% 107%, #00CC99 0%, #9cb8ec 100%); }
        .profile-customer { background: radial-gradient(circle at 100% 107%, #D4AF37 0%, #f7d070 100%); }
        .profile-diversity { background: radial-gradient(circle at 100% 107%, #3A4D46 0%, #8ca49c 100%); }
        .profile-sustainability { background: radial-gradient(circle at 100% 107%, #008866 0%, #61cca7 100%); }

        .uiverse-card-root:hover .uiverse-bg-layer {
          transform: scale(1.3);
          opacity: 1;
        }
        .uiverse-content-wrap {
          position: relative;
          z-index: 10;
          transition: all 0.5s ease;
        }
        .uiverse-card-root:hover .uiverse-content-wrap {
          color: #ffffff !important;
        }
        .uiverse-card-root:hover .text-muted-custom {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        .uiverse-card-root:hover .pill-tag-custom {
          background: rgba(255, 255, 255, 0.2) !important;
          color: #ffffff !important;
        }
        .uiverse-card-root:hover .icon-box-custom {
          background: #ffffff !important;
          color: #0D231D !important;
          box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
        }
      `}} />

      <div className="min-h-screen bg-gradient-to-br from-[#FAFBFA] via-[#FCFDFD] to-[#F5F8F7] text-[#1E2925] font-sans antialiased selection:bg-[#00CC99]/20 selection:text-[#0D231D] overflow-hidden relative">
        <Navbar />
        
        {/* TECH SPEC COMPLEX BACKGROUND INLINE SVG MESH */}
        <div className="absolute inset-0 z-0 opacity-[0.22] pointer-events-none mix-blend-overlay" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60h60V0zM1 59V1h58v78H1z' fill='none' stroke='%2300CC99' stroke-width='0.7' stroke-opacity='0.12'/%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%2300CC99' fill-opacity='0.15'/%3E%3C/svg%3E")` 
             }} 
        />

        {/* SINE-WAVE STREAM RIBBONS */}
        <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-0 overflow-hidden opacity-30 mix-blend-multiply">
          <div className="absolute top-[10%] left-0 w-[200%] h-[400px] text-[#00CC99]/8 animate-sine-1 transform origin-center">
            <svg className="w-full h-full" viewBox="0 0 2880 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,200 Q360,320 720,200 T1440,200 T2160,200 T2880,200 L2880,400 L0,400 Z" fill="currentColor"/>
              <path d="M0,180 Q360,300 720,180 T1440,180 T2160,180 T2880,180" stroke="rgba(0, 204, 153, 0.25)" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="absolute bottom-[15%] left-0 w-[200%] h-[450px] text-[#D4AF37]/4 animate-sine-2 transform origin-center">
            <svg className="w-full h-full" viewBox="0 0 2880 450" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,250 Q360,130 720,250 T1440,250 T2160,250 T2880,250 L2880,450 L0,450 Z" fill="currentColor"/>
              <path d="M0,270 Q360,150 720,270 T1440,270 T2160,270 T2880,270" stroke="rgba(181, 137, 38, 0.15)" strokeWidth="2" strokeDasharray="6 6"/>
            </svg>
          </div>
        </div>

        {/* PULSATING SHIMMERING GLOW FIELD */}
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-[#00CC99]/10 to-transparent rounded-full pointer-events-none mix-blend-multiply animate-shimmer" />
        
        <div className="absolute top-10 left-28 z-50 group">
          <div className="flex items-center">
            <Image
              src="/Images/slider/elemenisis--E-logo.png"
              height={80}
              width={80}
              alt="Logo"
            />
            <span className="text-white font-bold tracking-widest">ELEMENSIS</span>
          </div>
        </div>

        {/* 1. CUSTOM BREADCRUMB & HERO SECTION */}
        <section className="relative h-[65vh] flex flex-col justify-center items-center overflow-hidden bg-[#0D231D] text-[#ECE9E2] px-6">
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity transform scale-105 animate-[pulse_8s_ease-in-out_infinite]">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')` }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D231D] via-transparent to-transparent z-10" />
      
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-20 text-center max-w-4xl px-4">
            <motion.nav variants={fadeIn} className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8 text-sm tracking-widest text-[#D4AF37] uppercase">
              <span>Home</span>
              <span className="text-white/30">•</span>
              <Leaf className="w-3.5 h-3.5 animate-spin-slow" />
              <span className="text-white/30">•</span>
              <span className="text-white">Why Us Elemensis</span>
            </motion.nav>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-serif font-light tracking-tight text-[#ECE9E2] leading-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Why Us  <span className="italic font-normal text-[#D4AF37]">Elemensis</span>
            </motion.h1>
          </motion.div>
        </section>
    
        {/* 2. THE CORE MANIFESTO SECTION */}
        <section className="relative z-20 py-16 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            <div className="max-w-md space-y-4 group">
              <div className="flex items-center space-x-2 text-[#008866] text-xs font-mono tracking-widest uppercase bg-[#00CC99]/10 border border-[#00CC99]/20 px-3 py-1 rounded-md w-fit shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00CC99] animate-ping" />
                <span>System Core Matrix</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif italic text-[#0D231D]">
                The Beating Heart of Our Operations.
              </h2>
            </div>
            <div className="max-w-xl lg:pt-6">
              <p className="text-lg md:text-xl font-light text-[#4A5D55] leading-relaxed relative pl-6 border-l-2 border-[#00CC99]/30">
                Elemensis’ strengths come from its continuous commitment and unrelenting effort to offer our cherished clients unmatched assistance.
              </p>
            </div>
          </div>
        </section>
    
        {/* 3. ASYMMETRIC FLOATING CANVAS LAYOUT */}
        <section className="relative z-20 pb-32 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#00CC99]/60 via-black/[0.08] to-transparent transform md:-translate-x-1/2 pointer-events-none" />

          <div className="space-y-28 relative">
            
            {/* =========================================================================
                PILLAR 01: INNOVATION
               ========================================================================= */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-start group">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#00CC99] shadow-[0_0_15px_rgba(0,204,153,0.5)] transform -translate-x-1.5 md:-translate-x-1/2 top-8 z-30" />
              
              {/* UIVERSE MESH SPICY-RAT INTERACTIVE CARD */}
              <div className="w-full md:w-[45%] ml-8 md:ml-0 uiverse-card-root p-8 border border-black/[0.03] z-20">
                <div className="uiverse-bg-layer profile-innovation" />
                <div className="uiverse-content-wrap space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#00CC99]/5 border border-black/[0.04] flex items-center justify-center text-[#008866] icon-box-custom transition-all duration-500">
                      <Compass className="w-5 h-5 stroke-[1.25]" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-black/40 uppercase bg-black/[0.04] px-2.5 py-0.5 rounded pill-tag-custom transition-all duration-500">Pillar // 01</span>
                  </div>
                  <div className="w-full h-44 rounded-2xl overflow-hidden relative border border-black/[0.03]">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" alt="Innovation" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium tracking-wide flex items-center gap-1.5 transition-all duration-500">Innovation <ArrowUpRight className="w-4 h-4 text-black/30 transition-all" /></h3>
                    <p className="text-sm text-black/60 font-light leading-relaxed text-muted-custom transition-all duration-500">Elemensis is a pioneering company that continually introduces cutting-edge solutions.</p>
                  </div>
                </div>
              </div>

              {/* Spaced Matrix Void - Innovation */}
              <div className="hidden md:block absolute right-0 inset-y-0 w-[50%] pointer-events-none select-none z-10">
                <div className="relative w-full h-full min-h-[380px]">
                  <div className="absolute top-4 right-[15%] animate-spatial-1 pointer-events-auto cursor-help group/item">
                    <Atom className="w-20 h-20 text-[#00CC99]/25 stroke-[0.75] transition-all duration-700 group-hover/item:text-[#00CC99]/80 group-hover/item:scale-115 filter drop-shadow-[0_10px_20px_rgba(0,204,153,0.15)]" />
                  </div>
                  <div className="absolute top-1/2 left-[25%] -translate-y-1/2 animate-spatial-2 pointer-events-auto cursor-help group/item">
                    <div className="relative p-6 rounded-full border border-[#00CC99]/15 bg-white/40 backdrop-blur-[4px] transition-all duration-700 group-hover/item:bg-white">
                      <Cpu className="w-16 h-16 text-[#00CC99]/35 stroke-[0.85] transition-all duration-700 group-hover/item:text-[#00CC99]/90" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-[20%] animate-spatial-3 pointer-events-auto cursor-help group/item">
                    <Sparkles className="w-14 h-14 text-[#D4AF37]/30 stroke-[0.75] transition-all duration-700 group-hover/item:text-[#D4AF37]/80" />
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                PILLAR 02: CUSTOMER CENTRICITY
               ========================================================================= */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-end group">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)] transform -translate-x-1.5 md:-translate-x-1/2 top-8 z-30" />
              
              {/* Spaced Matrix Void - Customer Centricity */}
              <div className="hidden md:block absolute left-0 inset-y-0 w-[50%] pointer-events-none select-none z-10">
                <div className="relative w-full h-full min-h-[380px]">
                  <div className="absolute top-6 left-[15%] animate-spatial-2 pointer-events-auto cursor-help group/item">
                    <ShieldCheck className="w-20 h-20 text-[#D4AF37]/25 stroke-[0.75] transition-all duration-700 group-hover/item:text-[#D4AF37]/80 group-hover/item:scale-115 filter drop-shadow-[0_10px_20px_rgba(212,175,55,0.1)]" />
                  </div>
                  <div className="absolute top-1/2 right-[20%] -translate-y-1/2 animate-spatial-1 pointer-events-auto cursor-help group/item">
                    <div className="relative p-6 rounded-full border border-[#D4AF37]/15 bg-white/40 backdrop-blur-[4px] transition-all duration-700 group-hover/item:bg-white">
                      <HeartHandshake className="w-16 h-16 text-[#D4AF37]/35 stroke-[0.85] transition-all duration-700 group-hover/item:text-[#D4AF37]/90" />
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-[25%] animate-spatial-3 pointer-events-auto cursor-help group/item">
                    <Activity className="w-14 h-14 text-[#00CC99]/30 stroke-[0.75] transition-all duration-700 group-hover/item:text-[#00CC99]/80" />
                  </div>
                </div>
              </div>

              {/* UIVERSE MESH SPICY-RAT INTERACTIVE CARD */}
              <div className="w-full md:w-[45%] ml-8 md:ml-0 uiverse-card-root p-8 border border-black/[0.03] z-20">
                <div className="uiverse-bg-layer profile-customer" />
                <div className="uiverse-content-wrap space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/5 border border-black/[0.04] flex items-center justify-center text-[#B58926] icon-box-custom transition-all duration-500">
                      <ShieldCheck className="w-5 h-5 stroke-[1.25]" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-black/40 uppercase bg-black/[0.04] px-2.5 py-0.5 rounded pill-tag-custom transition-all duration-500">Pillar // 02</span>
                  </div>
                  <div className="w-full h-44 rounded-2xl overflow-hidden relative border border-black/[0.03]">
                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop" alt="Customer Centricity" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium tracking-wide transition-all duration-500">Customers Centricity</h3>
                    <p className="text-sm text-black/60 font-light leading-relaxed text-muted-custom transition-all duration-500">The core of our ideology is centered around our customers' experience.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                PILLAR 03: DIVERSITY
               ========================================================================= */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-start group">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#3A4D46] shadow-[0_0_15px_rgba(58,77,70,0.4)] transform -translate-x-1.5 md:-translate-x-1/2 top-8 z-30" />
              
              {/* UIVERSE MESH SPICY-RAT INTERACTIVE CARD */}
              <div className="w-full md:w-[45%] ml-8 md:ml-0 uiverse-card-root p-8 border border-black/[0.03] z-20">
                <div className="uiverse-bg-layer profile-diversity" />
                <div className="uiverse-content-wrap space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#3A4D46]/5 border border-black/[0.04] flex items-center justify-center text-[#3A4D46] icon-box-custom transition-all duration-500">
                      <Users className="w-5 h-5 stroke-[1.25]" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-black/40 uppercase bg-black/[0.04] px-2.5 py-0.5 rounded pill-tag-custom transition-all duration-500">Pillar // 03</span>
                  </div>
                  <div className="w-full h-44 rounded-2xl overflow-hidden relative border border-black/[0.03]">
                    <img src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1000&auto=format&fit=crop" alt="Diversity" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium tracking-wide transition-all duration-500">Diversity</h3>
                    <p className="text-sm text-black/60 font-light leading-relaxed text-muted-custom transition-all duration-500">Diversity improves our global culture and fuels groundbreaking innovation.</p>
                  </div>
                </div>
              </div>

              {/* Spaced Matrix Void - Diversity */}
              <div className="hidden md:block absolute right-0 inset-y-0 w-[50%] pointer-events-none select-none z-10">
                <div className="relative w-full h-full min-h-[380px]">
                  <div className="absolute top-4 right-[20%] animate-spatial-3 pointer-events-auto cursor-help group/item">
                    <Globe className="w-20 h-20 text-[#3A4D46]/25 stroke-[0.75] transition-all duration-700 group-hover/item:text-[#3A4D46]/80 group-hover/item:scale-115 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]" />
                  </div>
                  <div className="absolute top-1/2 left-[20%] -translate-y-1/2 animate-spatial-1 pointer-events-auto cursor-help group/item">
                    <div className="relative p-6 rounded-full border border-black/10 bg-white/40 backdrop-blur-[4px] transition-all duration-700 group-hover/item:bg-white">
                      <Network className="w-16 h-16 text-[#3A4D46]/35 stroke-[0.85] transition-all duration-700 group-hover/item:text-[#3A4D46]/90" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-[15%] animate-spatial-2 pointer-events-auto cursor-help group/item">
                    <Fingerprint className="w-14 h-14 text-[#D4AF37]/30 stroke-[0.75] transition-all duration-700 group-hover/item:text-[#D4AF37]/80" />
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                PILLAR 04: SUSTAINABILITY
               ========================================================================= */}
            <div className="relative flex flex-col md:flex-row items-center md:justify-end group">
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#00CC99] shadow-[0_0_15px_rgba(0,204,153,0.5)] transform -translate-x-1.5 md:-translate-x-1/2 top-8 z-30" />
              
              {/* Spaced Matrix Void - Sustainability */}
              <div className="hidden md:block absolute left-0 inset-y-0 w-[50%] pointer-events-none select-none z-10">
                <div className="relative w-full h-full min-h-[380px]">
                  <div className="absolute top-6 left-[25%] animate-spatial-1 pointer-events-auto cursor-help group/item">
                    <Sprout className="w-20 h-20 text-[#00CC99]/30 stroke-[0.75] transition-all duration-700 group-hover/item:text-[#00CC99]/80 group-hover/item:scale-115 filter drop-shadow-[0_10px_20px_rgba(0,204,153,0.1)]" />
                  </div>
                  <div className="absolute top-1/2 right-[15%] -translate-y-1/2 animate-spatial-3 pointer-events-auto cursor-help group/item">
                    <div className="relative p-6 rounded-full border border-[#00CC99]/15 bg-white/40 backdrop-blur-[4px] transition-all duration-700 group-hover/item:bg-white">
                      <Sun className="w-16 h-16 text-[#D4AF37]/35 stroke-[0.85] transition-all duration-700 group-hover/item:text-[#D4AF37]/90" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-[15%] animate-spatial-2 pointer-events-auto cursor-help group/item">
                    <Wind className="w-14 h-14 text-[#00CC99]/25 stroke-[0.75] transition-all duration-700 group-hover/item:text-[#00CC99]/70" />
                  </div>
                </div>
              </div>

              {/* UIVERSE MESH SPICY-RAT INTERACTIVE CARD */}
              <div className="w-full md:w-[45%] ml-8 md:ml-0 uiverse-card-root p-8 border border border-black/[0.03] z-20">
                <div className="uiverse-bg-layer profile-sustainability" />
                <div className="uiverse-content-wrap space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#00CC99]/5 border border-black/[0.04] flex items-center justify-center text-[#008866] icon-box-custom transition-all duration-500">
                      <Globe className="w-5 h-5 stroke-[1.25]" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-black/40 uppercase bg-black/[0.04] px-2.5 py-0.5 rounded pill-tag-custom transition-all duration-500">Pillar // 04</span>
                  </div>
                  <div className="w-full h-44 rounded-2xl overflow-hidden relative border border-black/[0.03]">
                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop" alt="Sustainability" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium tracking-wide uppercase transition-all duration-500">SUSTAINABILITY</h3>
                    <p className="text-sm text-black/60 font-light leading-relaxed text-muted-custom transition-all duration-500">We are strictly committed to protecting and managing environments for future generations.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
    
      </div>
      <Footer />
    </>
  );
}