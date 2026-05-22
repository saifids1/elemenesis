"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Globe, ShieldCheck, Star, Users, Leaf, ArrowRight } from "lucide-react";
import Footer from "../layouts/footer";
import Navbar from "../layouts/navbar";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
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
        <div className="min-h-screen bg-[#F9F6F0] text-[#1E1E1E] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0D231D]">
          
          {/* 1. CUSTOM BREADCRUMB & HERO SECTION */}
          <section className="relative h-[65vh] flex flex-col justify-center items-center overflow-hidden bg-[#0D231D] text-[#ECE9E2] px-6">
            {/* Dynamic Organic Background Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity transform scale-105 animate-[pulse_8s_ease-in-out_infinite]">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')` 
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
              <motion.nav variants={fadeIn} className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8 text-sm tracking-widest text-[#D4AF37] uppercase">
                <span>Home</span>
                <span className="text-white/30">•</span>
                <Leaf className="w-3.5 h-3.5 animate-spin-slow" />
                <span className="text-white/30">•</span>
                <span className="text-white">About Elemensis</span>
              </motion.nav>
        
              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-7xl font-serif font-light tracking-tight text-[#ECE9E2] leading-tight"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Cultivating <span className="italic font-normal text-[#D4AF37]">Unmatched</span> Excellence
              </motion.h1>
              
              <motion.p variants={fadeIn} className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
                ELEMENSIS distributes high-end, naturally derived goods that have been painstakingly cultivated and harvested to adhere to rigid health and quality criteria.
              </motion.p>
            </motion.div>
          </section>
        
          {/* 2. ASYMMETRICAL EDITORIAL NARRATIVE (About & Vision) */}
          <section className="max-w-7xl mx-auto px-6 py-24 md:py-36">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Sticky Left Image Component */}
              <div className="lg:col-span-5 lg:sticky lg:top-12 group">
                <div className="relative overflow-hidden rounded-2xl bg-[#0D231D] aspect-[4/5] shadow-2xl">
                  <div className="absolute inset-0 bg-[#0D231D]/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img 
                    src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=1000&auto=format&fit=crop" 
                    alt="Painstakingly cultivated botanical crops representing Elemensis standards"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20 p-6 bg-[#F9F6F0]/90 backdrop-blur-md rounded-xl border border-white/20">
                    <p className="text-xs tracking-widest uppercase text-[#0D231D] font-bold mb-1">Premium Origin</p>
                    <p className="text-sm text-neutral-600 italic">Delivering the advantages of pure, high-quality goods right to your doorstep.</p>
                  </div>
                </div>
              </div>
        
              {/* Right Narrative Stream */}
              <div className="lg:col-span-7 space-y-16 md:space-y-24 lg:pt-12">
                
                {/* About Block */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-2 text-[#D4AF37]">
                    <span className="h-[1px] w-8 bg-[#D4AF37]"></span>
                    <span className="text-xs uppercase tracking-widest font-semibold">The Core Concept</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-[#0D231D]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                    Premium Brands For Homes & Businesses
                  </h2>
                  <p className="text-neutral-600 leading-relaxed text-lg font-light">
                    ELEMENSIS distributes high-end, naturally derived goods that have been painstakingly cultivated and harvested to adhere to rigid health and quality criteria. Along with our premium brands, we deliver the unmatched advantages of healthy, high-quality, and premium products to your homes & businesses.
                  </p>
                </motion.div>
        
                {/* Vision Block */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  className="space-y-6 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-100 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-neutral-50 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <Compass className="w-64 h-64" />
                  </div>
                  <div className="inline-flex p-3 bg-[#0D231D]/5 text-[#0D231D] rounded-xl">
                    <Compass className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h2 className="text-3xl font-serif text-[#0D231D]" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                    Our Vision
                  </h2>
                  <p className="text-neutral-600 leading-relaxed font-light">
                    ELEMENSIS is dedicated to delivering superior-quality products that consistently exceed the expectations of our esteemed customers. Our unwavering vision is to be the foremost leader in every endeavor we undertake. Guided by this vision, we make deliberate and informed choices, ensuring that we remain steadfast in achieving our objectives.
                  </p>
                </motion.div>
        
              </div>
            </div>
          </section>
        
          {/* 3. INTERACTIVE BENTO MATRIX (Mission & Values) */}
          <section className="bg-white border-y border-neutral-100 py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">Strategic Roadmap</span>
                <h2 className="text-4xl font-serif text-[#0D231D]" style={{ fontFamily: "Cormorant Garamond, serif" }}>Our Operational Matrix</h2>
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
                  className="md:col-span-2 bg-[#F9F6F0] p-8 md:p-12 rounded-3xl flex flex-col justify-between border border-transparent hover:border-[#D4AF37]/30 transition-all duration-300 group"
                >
                  <div className="space-y-6">
                    <div className="inline-flex p-3 bg-[#0D231D] text-[#D4AF37] rounded-xl">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif text-[#0D231D]" style={{ fontFamily: "Cormorant Garamond, serif" }}>Our Mission</h3>
                    <p className="text-neutral-600 font-light leading-relaxed">
                      Our mission is to enable companies all around the world with our superior goods, outstanding services, and steadfast support. Our objective is to establish ourselves as the preferred B2B partner for companies across the globe, promoting sustainable expansion and shared success.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center space-x-2 text-sm font-semibold text-[#0D231D] group-hover:text-[#D4AF37] transition-colors">
                    <span>Global B2B Framework</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
        
                {/* Card 2: Core Values */}
                <motion.div 
                  variants={fadeIn}
                  whileHover={{ y: -6 }}
                  className="bg-[#0D231D] text-[#ECE9E2] p-8 rounded-3xl flex flex-col justify-between border border-transparent hover:border-[#D4AF37]/50 transition-all duration-300"
                >
                  <div className="space-y-6">
                    <div className="inline-flex p-3 bg-white/10 text-[#D4AF37] rounded-xl">
                      <Star className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif text-[#ECE9E2]" style={{ fontFamily: "Cormorant Garamond, serif" }}>Core Values</h3>
                    <p className="text-white/70 text-sm font-light leading-relaxed">
                      At Elemensis, excellence is a way of life rather than just a promise. We guarantee the genuineness, dependability, and absolute excellence of every product and service we offer.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/10 text-xs tracking-wider text-[#D4AF37] uppercase font-mono">
                    No Compromise Ecosystem
                  </div>
                </motion.div>
        
                {/* Card 3: Community Card */}
                <motion.div 
                  variants={fadeIn}
                  whileHover={{ y: -6 }}
                  className="md:col-span-3 bg-gradient-to-br from-[#0D231D]/5 to-[#D4AF37]/10 p-8 md:p-12 rounded-3xl border border-neutral-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >
                  <div className="max-w-2xl space-y-4">
                    <div className="inline-flex p-2.5 bg-white shadow-sm text-[#0D231D] rounded-xl">
                      <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-2xl font-serif text-[#0D231D]" style={{ fontFamily: "Cormorant Garamond, serif" }}>Elemensis is a Community</h3>
                    <p className="text-neutral-600 text-sm font-light leading-relaxed">
                      With years of experience in the field, we have developed solid, deeply rooted relationships with trusted partners and suppliers around the world. This allows us to deliver optimized logistics and the best organic products right to your commercial doorstep.
                    </p>
                  </div>
                  <div className="bg-[#0D231D] text-white px-6 py-3 rounded-xl font-medium text-sm whitespace-nowrap self-stretch md:self-auto text-center cursor-pointer hover:bg-[#D4AF37] hover:text-[#0D231D] transition-colors duration-300">
                    Explore Network
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        
          {/* 4. THE GLOBAL TEAM CANVAS */}
          <section className="bg-[#0D231D] text-[#ECE9E2] py-24 md:py-32 px-6 relative overflow-hidden">
            {/* Subtle decorative mesh background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-5 rounded-full blur-[120px] pointer-events-none" />
        
            <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex p-4 bg-white/5 rounded-full border border-white/10 text-[#D4AF37] mb-4"
              >
                <Users className="w-8 h-8" />
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                Our <span className="italic text-[#D4AF37]">Multinational</span> Ecosystem
              </h2>
              
              <p className="text-white/70 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
                Multinational and multicultural individuals that are knowledgeable and willing to help make up our specialized team. Each team member is crucial to our business and firmly believes in the system, procedure, and fundamental principles.
              </p>
        
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-2xl font-serif text-[#D4AF37]">Always</p>
                  <p className="text-xs uppercase tracking-widest text-white/50 mt-1">Learning</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-2xl font-serif text-[#D4AF37]">Constantly</p>
                  <p className="text-xs uppercase tracking-widest text-white/50 mt-1">Developing</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-2xl font-serif text-[#D4AF37]">Globally</p>
                  <p className="text-xs uppercase tracking-widest text-white/50 mt-1">Growing</p>
                </div>
              </div>
            </div>
          </section>
        
        </div>
        <Footer />
    </>
  );
}