"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Target,
  Eye,
  Award,
  Shield,
  Globe,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Layers,
} from "lucide-react";
import TrendyDivider from "../MagneticDivider";

export default function MissionVisionPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
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

  const values = [
    {
      num: "01",
      title: "Authenticity",
      tagline: "Absolute Verifiability",
      desc: "Genuine components, validated items, and highly transparent corporate partnerships you can unconditionally count on inside any active commercial sector.",
      icon: Shield,
      glow: "from-orange-500/20 to-amber-500/5",
      solidColor: "text-orange-500",
      bgLight: "bg-orange-500/5",
      borderGlow: "group-hover:border-orange-500/30",
    },
    {
      num: "02",
      title: "Reliability",
      tagline: "Fortified Operations",
      desc: "Consistent, safe, and heavily backed logistical execution standards maintained across all territory networks and active distribution routes.",
      icon: CheckCircle,
      glow: "from-teal-500/20 to-emerald-500/5",
      solidColor: "text-teal-500",
      bgLight: "bg-teal-500/5",
      borderGlow: "group-hover:border-teal-500/30",
    },
    {
      num: "03",
      title: "Excellence",
      tagline: "Tier 1 Frameworks",
      desc: "An architectural obsession with high-tier manufacturing precision, premium build rules, and strict regulatory compliance oversight metrics.",
      icon: Award,
      glow: "from-cyan-500/20 to-blue-500/5",
      solidColor: "text-cyan-500",
      bgLight: "bg-cyan-500/5",
      borderGlow: "group-hover:border-cyan-500/30",
    },
    {
      num: "04",
      title: "Global Reach",
      tagline: "Sovereign Logistics",
      desc: "Rapid deployment supply lines stretching directly across high-demand strategic distribution hubs and international trade gateways around the world.",
      icon: Globe,
      glow: "from-indigo-500/20 to-purple-500/5",
      solidColor: "text-indigo-500",
      bgLight: "bg-indigo-500/5",
      borderGlow: "group-hover:border-indigo-500/30",
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#FDFEFE] text-slate-900 overflow-hidden relative font-sans antialiased selection:bg-[#00CCAA]/20 selection:text-slate-900">

      {/* Premium Multi-Layered Light Depth Orbs */}
      <div className="absolute top-[5%] left-[-5%] w-[800px] h-[800px] rounded-full bg-radial-gradient from-[#00CCAA]/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute top-[35%] right-[-10%] w-[900px] h-[900px] rounded-full bg-radial-gradient from-[#00B9CC]/15 via-blue-500/5 to-transparent blur-3xl pointer-events-none mix-blend-multiply" />

      <TrendyDivider />

      <div className="container mx-auto px-6 max-w-7xl pt-20 pb-32 relative z-10">

        {/* --- BLOCK 1: BRAND MATCHED HEADER SECTION (MISSION & VISION) --- */}
        <div className="text-center mb-24 flex flex-col items-center">
          {/* Custom Brand Badge with Glow */}
          <div className="mb-6">
            <span className="px-7 py-2.5 rounded-full bg-[#00CCAA] text-white text-sm font-bold shadow-[0_8px_20px_rgba(0,204,170,0.4)] tracking-wide">
              Who We Are
            </span>
          </div>

          {/* Core Corporate Heading Styles */}
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#111827] tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Unveiling <span className="text-[#00CCAA]">Elemensis</span> <br />
            <span className="font-bold">Our Mission, Vision & Operations</span>
          </h2>

          {/* Custom Brand Gradient Underline */}
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] mx-auto mt-6 rounded-full" />

          <p className="text-slate-500 font-medium text-base md:text-lg max-w-3xl mx-auto mt-8 leading-relaxed">
            Elemensis is a trustworthy brand operating high-capacity networks worldwide. We provide custom solutions across comprehensive industrial fields, firmly rooted in our commitment to{" "}
            <span className="text-[#00B9CC] font-bold">teamwork, sustainability & quality.</span>
          </p>
        </div>

        {/* --- BLOCK 2: RUNWAY CASCADE --- */}
        <div className="space-y-36 mb-56">

          {/* Mission Group */}
          <div className="grid lg:grid-cols-12 gap-12 items-center relative">
            <div className="absolute -top-16 left-0 text-[14rem] font-mono font-black text-slate-100/70 select-none pointer-events-none tracking-tighter z-0 leading-none">
              MISSION
            </div>

            <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
              <div className="w-12 h-12 rounded-2xl bg-[#00CCAA]/10 border border-[#00CCAA]/20 flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-5 h-5 text-[#00A388]" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6">
                Arming enterprise hubs with high-tier commodities.
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed text-base mb-8">
                We remove cross-border transaction speed drags. By integrating real-time testing matrices and absolute source monitoring, your logistical networks scale safely and predictably.
              </p>

              <div className="inline-flex items-center gap-6 p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.05)]">
                <div className="text-center border-r border-slate-100 pr-6">
                  <span className="block text-xl font-black text-[#111827] tracking-tight">100%</span>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Verifiable</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-800">Operational Security Pillar</span>
                  <span className="text-[11px] text-slate-400 font-medium">Fully certified global routes</span>
                </div>
              </div>
            </div>

            {/* Media Frame Right */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex justify-end">
              <div className="relative w-full max-w-xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00CCAA]/20 to-[#00B9CC]/20 rounded-[40px] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="absolute -bottom-4 -left-4 w-full h-full bg-slate-100 border border-slate-200/60 rounded-[36px] -z-10 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-700" />

                <div className="relative p-4 bg-white/70 backdrop-blur-md border border-white rounded-[36px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]">
                  <div className="overflow-hidden rounded-[24px] relative h-[380px] w-full shadow-inner bg-slate-50">
                    <Image
                      src="/Images/slider/Mission-Vision.png"
                      alt="Corporate execution operational strategy"
                      fill
                      className="object-cover transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Group */}
          <div className="grid lg:grid-cols-12 gap-12 items-center relative">
            <div className="absolute -top-16 right-0 text-[14rem] font-mono font-black text-slate-100/70 select-none pointer-events-none tracking-tighter z-0 leading-none text-right">
              VISION
            </div>

            {/* Media Frame Left */}
            <div className="lg:col-span-7 flex justify-start">
              <div className="relative w-full max-w-xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00B9CC]/20 to-purple-500/10 rounded-[40px] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-slate-100 border border-slate-200/60 rounded-[36px] -z-10 transform group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-700" />

                <div className="relative p-4 bg-white/70 backdrop-blur-md border border-white rounded-[36px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]">
                  <div className="overflow-hidden rounded-[24px] relative h-[380px] w-full shadow-inner bg-slate-50">
                    <Image
                      src="/Images/slider/excellence.avif"
                      fill
                      alt="Global supply logistics network design"
                      className="object-cover transform group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#00B9CC]/10 border border-[#00B9CC]/20 flex items-center justify-center mb-6 shadow-sm">
                <Eye className="w-5 h-5 text-[#00B9CC]" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6">
                To engineer the single most critical trade link.
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed text-base mb-8">
                Our trajectory aims to constantly anchor dynamic digital and structural market spaces. We link cross-border trade elements into an integrated, asset-heavy system matrix.
              </p>

              <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#00B9CC]/20 rounded-full blur-2xl" />
                <p className="text-sm font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200 italic">
                  "Delivering undisputed marketplace thresholds directly to your operational enterprise grids."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* --- BLOCK 3: BRAND MATCHED VALUE ECOSYSTEM SECTION --- */}
        <div className="mb-15 mt-48 px-4 max-w-7xl mx-auto">

          {/* Custom Matches Brand Headline Pattern For Values */}
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="mb-6">
              <span className="px-7 py-2.5 rounded-full bg-[#00CCAA] text-white text-sm font-bold shadow-[0_8px_20px_rgba(0,204,170,0.4)] tracking-wide">
                Structural Anchor Systems
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
              Our Values <span className="text-[#00CCAA]">Ecosystem</span>
            </h2>

            {/* Custom Matching Underline */}
            <div className="w-24 h-[3px] bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Selection Stack */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveValue(idx)}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-5 ${activeValue === idx
                      ? `${val.cardBgActive} scale-[1.01]`
                      : "bg-gradient-to-br from-white/60 to-slate-50/40 border-slate-100 hover:from-white hover:to-slate-50 hover:border-slate-200/80 hover:shadow-md"
                    }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105 ${activeValue === idx ? val.bgLight : "bg-slate-100/70 text-slate-400"
                    }`}>
                    <val.icon className={`w-5 h-5 ${activeValue === idx ? val.solidColor : "text-slate-400 group-hover:text-slate-600 transition-colors"}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#111827] tracking-tight">{val.title}</h4>
                      <span className={`text-xs font-mono font-bold transition-colors ${activeValue === idx ? val.solidColor : "text-slate-300 group-hover:text-slate-400"}`}>{val.num}</span>
                    </div>
                    <span className="text-xs font-medium text-slate-400">{val.tagline}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Projected Rich Display Panel */}
            <div className="lg:col-span-7">
              <div className="relative h-full min-h-[400px] bg-white border border-slate-200/80 rounded-[32px] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.06)] p-8 md:p-12 flex flex-col justify-between overflow-hidden">

                {/* Dynamic Mesh Glow */}
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${values[activeValue].glow} rounded-full blur-3xl pointer-events-none transition-all duration-700`} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
                    <Layers className="w-4 h-4 text-slate-300" />
                    <span>Active Matrix // {values[activeValue].num}</span>
                  </div>

                  <span className={`text-xs font-mono font-black uppercase tracking-wider ${values[activeValue].solidColor} mb-2 block`}>
                    {values[activeValue].tagline}
                  </span>

                  <h4 className="text-3xl font-extrabold text-[#111827] tracking-tight mb-6">
                    {values[activeValue].title}
                  </h4>

                  <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                    {values[activeValue].desc}
                  </p>
                </div>

                <div className="relative z-10 pt-8 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Elemensis Code Protocol v2.6</span>
                  <span className={`font-bold uppercase ${values[activeValue].solidColor} transition-colors duration-500`}>System Active</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* --- BLOCK 4: FLOATING CONCENTRIC GEOMETRY FRAME --- */}
        {/* Increased vertical padding (py-44) to ensure the 650px circles are completely uncut and visible */}
        <div className="mt-20 relative flex flex-col items-center justify-center py-44 px-6 overflow-visible">

          {/* ================= BACKGROUND ANIMATED RINGS & COLOR WAVES ================= */}

          {/* 1. Outer Continuously Spinning Teal Dotted Ring (Full Circle) */}
          <div className="absolute w-[660px] h-[660px] rounded-full border border-dotted border-[#00CCAA]/40 pointer-events-none animate-[spin_60s_linear_infinite]" />

          {/* 2. Mid-Outer Teal Dotted Ring */}
          <div className="absolute w-[560px] h-[560px] rounded-full border border-dotted border-[#00CCAA]/30 pointer-events-none animate-[spin_45s_linear_infinite_reverse]" />

          {/* 3. Mid-Inner Teal Dotted Ring */}
          <div className="absolute w-[460px] h-[460px] rounded-full border border-dotted border-[#00CCAA]/50 pointer-events-none animate-[spin_30s_linear_infinite]" />

          {/* 4. Inner Fine Dotted Ring */}
          <div className="absolute w-[360px] h-[360px] rounded-full border border-dotted border-[#00CCAA]/40 pointer-events-none animate-[spin_20s_linear_infinite_reverse]" />

          {/* 5. Core Solid White Background Circle to hold shadow depth */}
          <div className="absolute w-[280px] h-[280px] rounded-full bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] pointer-events-none" />

          {/* 6. Glowing Vibrant Color Waves (Pulse & Aura Expansion) */}
          <div className="absolute w-[380px] h-[380px] bg-gradient-to-tr from-[#00CCAA]/20 via-[#00BCD2]/15 to-transparent rounded-full filter blur-2xl opacity-80 animate-pulse pointer-events-none" />
          <div className="absolute w-[500px] h-[500px] bg-[#00CCAA]/5 rounded-full filter blur-3xl opacity-40 animate-[ping_5s_ease-in-out_infinite] pointer-events-none" />

          {/* =========================================================================== */}

          {/* Floating Minimalist Metric Tags on Left and Right */}
          <div className="hidden lg:flex absolute left-12 xl:left-32 top-1/2 -translate-y-1/2 items-center gap-4 bg-white/90 backdrop-blur-md border border-slate-100 p-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00CCAA] relative">
              <div className="absolute inset-0 rounded-full bg-[#00CCAA] animate-ping opacity-75" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-black text-slate-900 tracking-tight">Active Bridges</span>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">500+ Nodes Globally</span>
            </div>
          </div>

          <div className="hidden lg:flex absolute right-12 xl:right-32 top-1/2 -translate-y-1/2 items-center gap-4 bg-white/90 backdrop-blur-md border border-slate-100 p-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] z-10">
            <div className="text-right">
              <span className="block text-xs font-black text-slate-900 tracking-tight">Compliance Grade</span>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">Tier 1 Sovereign</span>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#00BCD2] relative">
              <div className="absolute inset-0 rounded-full bg-[#00BCD2] animate-ping opacity-75" />
            </div>
          </div>

          {/* Core Sign-off Content Elements Layered Smoothly in Center */}
          <div className="relative z-10 text-center max-w-lg mx-auto flex flex-col items-center">

            <span className="text-[10px] font-mono font-black uppercase tracking-[0.25em] text-[#00A388] mb-5 bg-[#00CCAA]/10 px-4 py-1.5 rounded-full border border-[#00CCAA]/20 backdrop-blur-sm">
              Ecosystem Launchpad
            </span>

            <h3 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-8 leading-[1.15]">
              Ready to Secure <br />
              Your Global Footprint?
            </h3>

            {/* The Image-Matched Core Action Pill */}
            <div className="relative group">
              {/* Vibrant Expanding Focus Ring behind the button on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] rounded-full blur-xl opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500" />

              <button className="relative inline-flex items-center gap-3 px-12 py-4.5 bg-gradient-to-r from-[#00CCAA] via-[#00BCD2] to-[#00B9CC] text-white rounded-full text-lg font-bold shadow-[0_12px_35px_rgba(0,204,170,0.3)] transform group-hover:-translate-y-0.5 transition-all duration-300">
                <span>Partner With Us</span>
                <ChevronRight className="w-[18px] h-[18px] stroke-[3px] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Image Text Content Match */}
            <p className="text-[#9CA3AF] text-sm font-medium tracking-wide mt-10">
              Join our growing family of satisfied clients worldwide
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}