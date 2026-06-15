"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Globe,
  ShieldCheck,
  Star,
  Users,
  Leaf,
  ArrowRight,
} from "lucide-react";
import Footer from "../layouts/footer";
import Navbar from "../layouts/navbar";

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F9F6F0] text-[#1E1E1E] font-sans antialiased selection:bg-[#00BCD4] selection:text-white">
        {/* 1. CUSTOM BREADCRUMB & HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 py-24 text-[#ECE9E2]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/Images/about_us/about01.png"
              alt="About Us"
              className="w-full h-full object-cover object-center"
            />
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
              <span className="text-[#00CCAA]">Home</span>
              <span className="text-white/40">•</span>
              <Leaf className="h-4 w-4 text-[#00CCAA]" />
              <span className="text-white/40">•</span>
              <span className="text-white">About Elemensis</span>
            </motion.nav>

            {/* Heading */}
            <motion.h1
              variants={fadeIn}
              className="mt-8 text-5xl font-light leading-tight tracking-tight md:text-7xl"
            >
              About{" "}
              <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                Elemensis
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="mx-auto mt-8 max-w-4xl text-base leading-[2] text-gray-200 md:text-lg"
            >
              ELEMENSIS distributes premium, naturally derived products that are
              carefully cultivated, sourced, and processed to meet the highest
              standards of health, quality, and reliability. Through our trusted
              brands, we bring the benefits of healthy, high-quality, and
              premium products to homes and businesses worldwide.
            </motion.p>
          </motion.div>
        </section>
        {/* 2. ASYMMETRICAL EDITORIAL NARRATIVE (The Core Concept) */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:pt-9 md:pb-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Sticky Left Video Component - Fixed Video Playback Engine */}
            <div className="lg:col-span-5 lg:sticky lg:top-16 group">
              <div className="relative p-3 bg-white border border-slate-200/60 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-500 hover:border-slate-300">
                <div className="relative overflow-hidden rounded-xl bg-[#0D231D] aspect-[4/5] isolate">
                  <div className="absolute inset-0 bg-slate-900/10 z-10 transition-colors duration-500 group-hover:bg-transparent pointer-events-none" />

                  <video
                    className="w-full h-full object-cover filter contrast-[1.02] transform scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                    src="/videos/elemensis-matrix.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-xs tracking-wider uppercase text-[#0D231D] font-extrabold mb-1">
                    Food • Chemicals • E-Commerce
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    An integrated global marketplace delivering verified
                    high-end raw goods and multi-sector fulfillment solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Narrative Stream */}
            <div className="lg:col-span-7 space-y-16 md:space-y-10 lg:pt-1">
              {/* About Block with exact required layout titles */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2 text-[#00cba9]">
                  {/* <span className="h-[1px] w-8 bg-[#00cba9]"></span> */}
                  <span className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-bold shadow-lg shadow-teal-200/50">
                    The Core Concept
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 transition-all duration-700 delay-200">
                  Premium Brands For{" "}
                  <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                    Homes
                  </span>{" "}
                  &{" "}
                  <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                    Businesses
                  </span>
                </h2>

                <p className="text-neutral-600 leading-relaxed text-lg font-light">
                  ELEMENSIS distributes high-end, naturally derived goods that
                  have been painstakingly cultivated and harvested to adhere to
                  rigid health and quality criteria. Along with our premium
                  brands, we deliver the unmatched advantages of healthy,
                  high-quality, and premium products to your homes & businesses
                </p>
              </motion.div>

              {/* Vision Block */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-3xl border border-[#00cba9]/20 bg-gradient-to-br from-white via-[#F9F6F0] to-[#00cba9]/10 p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-500 hover:border-[#00cba9]/40 hover:shadow-2xl hover:shadow-[#00cba9]/10 group"
              >
                {/* Decorative icon */}
                <div className="absolute -right-10 -top-10 text-[#00cba9]/5 transition-all duration-500 group-hover:text-[#00cba9]/10">
                  <Compass className="h-40 w-40 sm:h-56 sm:w-56 lg:h-64 lg:w-64" />
                </div>

                {/* Glow effects */}
                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#00B9CC]/10 blur-3xl" />
                <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-[#00cba9]/10 blur-3xl" />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-[#00cba9]/10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] shadow-lg shadow-teal-200/60">
                      <Compass className="h-5 w-5 text-white" />
                    </div>

                    <span className="text-s font-bold uppercase tracking-[0.25em] text-[#00B9CC]">
                      People & Culture
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl">
                    Our Team
                  </h2>

                  <p className="max-w-3xl text-base font-light leading-8 text-neutral-600">
                    Our team consists of experienced multinational and
                    multicultural professionals who are passionate about
                    delivering excellence. Every member plays a vital role in
                    our success, sharing a strong belief in our values,
                    processes, and commitment to continuous improvement. We
                    constantly learn, adapt, and grow to better serve our
                    customers and respond to changing market demands.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {[
                      "Multicultural Team",
                      "Continuous Growth",
                      "Customer Focus",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#0D231D] shadow-sm ring-1 ring-neutral-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE BENTO MATRIX (Mission & Values) */}
        <section className="bg-white border-y border-neutral-100 pt-7 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-bold shadow-lg shadow-teal-200/50">
                Strategic Roadmap
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-5 text-gray-900 transition-all duration-700 delay-200">
                Our Operational{" "}
                <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                  Matrix
                </span>
              </h2>

              {/* <h2 className="text-4xl font-sans font-bold text-[#111827] mt-3">Our Operational Matrix</h2> */}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {/* Card 1: Mission */}

              <motion.div
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-3xl border border-[#00cba9]/20 bg-gradient-to-br from-white via-[#F9F6F0] to-[#00cba9]/10 p-8 md:p-12 shadow-sm transition-all duration-500 hover:border-[#00cba9]/40 hover:shadow-2xl hover:shadow-[#00cba9]/10 group"
              >
                {/* Decorative background */}
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#00cba9]/15 blur-3xl transition-all duration-500 group-hover:bg-[#00cba9]/25" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#00B9CC]/10 blur-3xl" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-[#00cba9]/10">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] shadow-lg shadow-teal-200/60">
                        <Globe className="h-5 w-5 text-white" />
                      </div>

                      <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#00B9CC]">
                        Worldwide Network
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-[#111827] md:text-4xl">
                      Global Expertise
                    </h3>

                    <p className="max-w-3xl text-base font-light leading-8 text-neutral-600">
                      With years of industry experience and a strong
                      international network, ELEMENSIS has built trusted
                      relationships with suppliers and partners across the
                      globe. This allows us to source and deliver premium
                      products efficiently while maintaining the highest
                      standards of quality, reliability, and service.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {[
                        "Trusted Partners",
                        "Premium Sourcing",
                        "Reliable Delivery",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl bg-white/80 px-4 py-3 text-sm font-semibold text-[#0D231D] shadow-sm ring-1 ring-neutral-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0D231D] transition-colors group-hover:text-[#00B9CC]">
                    <span>Global B2B Framework</span>
                    {/* <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0D231D] via-[#112D26] to-[#0D231D] p-8 md:p-10 text-white border border-[#00cba9]/20 hover:border-[#00cba9]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00cba9]/10"
              >
                {/* Decorative Glow */}
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#00cba9]/15 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#00B9CC]/10 blur-3xl" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm border border-white/10">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] shadow-lg shadow-[#00cba9]/20">
                        <Star className="h-5 w-5 text-white" />
                      </div>

                      <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#00cba9]">
                        Our Foundation
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-bold text-white">
                      Core Values
                    </h3>

                    <p className="mt-5 text-[15px] leading-8 text-white/75 font-light">
                      At ELEMENSIS, excellence is more than a promise—it is a
                      way of life. We are committed to authenticity,
                      reliability, integrity, and quality in every product and
                      service we provide. Through strong partnerships, global
                      sourcing expertise, and customer-focused solutions, we
                      continue to build trust and deliver exceptional value
                      worldwide.
                    </p>

                    {/* Value Tags */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {[
                        "Integrity",
                        "Quality",
                        "Reliability",
                        "Trust",
                        "Excellence",
                      ].map((value) => (
                        <span
                          key={value}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#00cba9]">
                      No Compromise Ecosystem
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Community Card */}
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -6 }}
                className="relative md:col-span-3 overflow-hidden rounded-3xl border border-[#00cba9]/20 bg-gradient-to-br from-white via-[#F9F6F0] to-[#00cba9]/10 p-8 md:p-12 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-[#00cba9]/10"
              >
                {/* Decorative blur */}
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00cba9]/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#00B9CC]/10 blur-3xl" />

                <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                  <div className="max-w-3xl space-y-5">
                    <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-[#00cba9]/10">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white shadow-lg shadow-teal-200/60">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#00B9CC]">
                        People Behind Elemensis
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-[#111827] md:text-4xl">
                      Our Team
                    </h3>

                    <p className="max-w-3xl text-base font-semibold leading-8 text-neutral-600">
                      Our team is made up of knowledgeable, multinational, and
                      multicultural professionals who are committed to
                      delivering excellence. Every team member plays an
                      important role in our growth and strongly believes in our
                      values, processes, and principles. We continuously learn,
                      adapt, and improve to serve our customers better in every
                      market situation.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {[
                        "Global Mindset",
                        "Trusted Process",
                        "Continuous Growth",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#0D231D] shadow-sm ring-1 ring-neutral-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex md:justify-end">
                    <a
                      href="/contact"
                      className="group inline-flex items-center justify-center rounded-2xl bg-[#0D231D] px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00CCAA] hover:to-[#00B9CC] hover:text-white hover:shadow-xl hover:shadow-[#00cba9]/20"
                    >
                      Explore Network
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
