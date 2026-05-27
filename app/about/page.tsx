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
        <section className="relative h-[65vh] flex flex-col justify-center items-center overflow-hidden bg-[#0D231D] text-[#ECE9E2] px-6">
          {/* Dynamic Organic Background Overlay */}
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity transform scale-105 animate-[pulse_8s_ease-in-out_infinite]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')`,
              }}
            />
          </div>

          {/* Gradient Overlay for Typography Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D231D] via-transparent to-transparent z-10" />

          {/* Custom Interactive Breadcrumb Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-20 text-center max-w-4xl px-4"
          >
            {/* Custom Stylized Breadcrumb */}
            <motion.nav
              variants={fadeIn}
              className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8 text-sm tracking-widest text-[#D4AF37] uppercase"
            >
              <span className="text-[#00CCAA]">Home</span>
              <span className="text-white/30">•</span>
              <Leaf className="w-3.5 h-3.5 animate-spin-slow text-[#00CCAA]" />
              <span className="text-white/30">•</span>
              <span className="text-white">About Elemensis</span>
            </motion.nav>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-light tracking-tight text-[#ECE9E2] leading-tight"
            >
              About{" "}
              <span className=" bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                Elemensis
              </span>
            </motion.h1>
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
  className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-100 bg-white shadow-sm group
             px-4 py-5
             sm:px-6 sm:py-6
             md:px-8 md:pt-5 md:pb-8
             lg:px-10 lg:py-9
             space-y-4 sm:space-y-5 md:space-y-6"
>
  <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 text-neutral-50 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
    <Compass className="h-32 w-32 sm:h-44 sm:w-44 md:h-56 md:w-56 lg:h-64 lg:w-64" />
  </div>

  <div className="inline-flex rounded-xl bg-[#00cba9]/10 p-2.5 sm:p-3 text-[#00cba9]">
    <Compass className="h-5 w-5 sm:h-6 sm:w-6 text-[#00cba9]" />
  </div>

<h2 className="font-sans text-2xl sm:text-3xl lg:text-[32px] xl:text-[34px] font-bold text-[#111827]">
    Our Vision
  </h2>

  <p className="text-sm sm:text-base lg:text-[15px] xl:text-base leading-7 sm:leading-8 text-neutral-600 font-light">
    ElEMENSIS is dedicated to delivering superior-quality products
    that consistently exceed the expectations of our esteemed
    customers. Our unwavering vision is to be the foremost leader
    in every endeavor we undertake. Guided by this vision, we make
    deliberate and informed choices, ensuring that we remain
    steadfast in achieving our objectives and providing
    unparalleled service to our valued clientele
  </p>
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
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Card 1: Mission */}
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -6 }}
                className="md:col-span-2 bg-[#F9F6F0] p-8 md:p-12 rounded-3xl flex flex-col justify-between border border-transparent hover:border-[#00cba9]/30 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="inline-flex p-3 bg-[#0D231D] text-[#00cba9] rounded-xl">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-[#111827]">
                    Our Mission
                  </h3>
                  <p className="text-neutral-600 font-light leading-relaxed">
                    Our mission is to enable companies all around the world with
                    our superior goods, outstanding services, and steadfast
                    support. Our vision is to establish ourselves as the
                    preferred B2B partner for companies across the globe,
                    promoting expansion and success.
                  </p>
                </div>
                <div className="mt-8 flex items-center space-x-2 text-sm font-semibold text-[#0D231D] group-hover:text-[#00cba9] transition-colors">
                  <span>Global B2B Framework</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>

              {/* Card 2: Core Values */}
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -6 }}
                className="bg-[#0D231D] text-[#ECE9E2] p-8 rounded-3xl flex flex-col justify-between border border-transparent hover:border-[#00cba9]/50 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="inline-flex p-3 bg-white/10 text-[#00cba9] rounded-xl">
                    <Star className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-[#ECE9E2]">
                    Core Values
                  </h3>
                  <p className="text-white/70 text-sm font-light leading-relaxed">
                    At Elemensis, excellence is a way of life rather than just a
                    promise. We guarantee the genuineness, dependability, and
                    excellence of every product and service we offer. Our path
                    and our clients' trust in us serve as examples of this
                    commitment.Elemensis is a community rather than just a
                    company. With years of experience in the field, we have
                    developed solid relationships with partners and suppliers
                    around the world, allowing us to provide the best products
                    right to your door.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 text-xs tracking-wider text-[#00cba9] uppercase font-mono">
                  No Compromise Ecosystem
                </div>
              </motion.div>

              {/* Card 3: Community Card */}
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -6 }}
                className="md:col-span-3 bg-gradient-to-br from-[#0D231D]/5 to-[#00cba9]/10 p-8 md:p-12 rounded-3xl border border-neutral-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="max-w-2xl space-y-4">
                  <div className="inline-flex p-2.5 bg-white shadow-sm text-[#0D231D] rounded-xl">
                    <ShieldCheck className="w-5 h-5 text-[#00cba9]" />
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-[#111827]">
                    Our Team
                  </h3>
                  <p className="text-neutral-600 text-sm font-light leading-relaxed">
                    Multinational and multicultural individuals that are
                    knowledgeable and willing to help make up our team. Each
                    team member is crucial to our business and firmly believes
                    in the system, procedure, and fundamental principles. In
                    order to serve you best, we are always learning, developing,
                    and growing in all facets of our business and market
                    situations.
                  </p>
                </div>
                <div className="bg-[#0D231D] text-white px-6 py-3 rounded-xl font-medium text-sm whitespace-nowrap self-stretch md:self-auto text-center cursor-pointer hover:bg-[#00cba9] hover:text-[#0D231D] transition-colors duration-300">
                  Explore Network
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
