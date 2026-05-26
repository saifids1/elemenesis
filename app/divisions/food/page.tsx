"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";
import Sidebar from "../../components/Sidebar";
import SidebarContent from "../../components/SidebarContent";
import { productItems } from "../../data/productData";

const cubicBezierEase = [0.16, 1, 0.3, 1];

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

export default function Foodpage() {
  const [activeItem, setActiveItem] = useState(productItems[0]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F9F6F0] text-[#1E1E1E] font-sans antialiased selection:bg-[#00BCD4] selection:text-white">
        <section className="relative h-[65vh] flex flex-col justify-center items-center overflow-hidden bg-[#0D231D] text-[#ECE9E2] px-6">
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity transform scale-105 animate-[pulse_8s_ease-in-out_infinite]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')",
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
           
              className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8 text-sm tracking-widest text-[#D4AF37] uppercase"
            >
              <span className="text-[#00CCAA]">Home</span>
              <span className="text-white/30">•</span>
              <Leaf className="w-3.5 h-3.5 animate-spin-slow text-[#00CCAA]" />
              <span className="text-white/30">•</span>
              <span className="text-white">About Food</span>
            </motion.nav>

            <motion.h1
     
              className="text-5xl md:text-7xl font-light tracking-tight text-[#ECE9E2] leading-tight"
            >
              Division{" "}
              <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                Food
              </span>
            </motion.h1>
          </motion.div>
        </section>

        <section className="relative overflow-hidden bg-[#F9F6F0] px-6 py-14">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-[#00CCAA]/20 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-[#00B9CC]/20 blur-3xl" />

          <div className="relative z-10 mx-auto grid max-w-8xl grid-cols-1 gap-8 lg:grid-cols-[290px_1fr]">
            <div className="h-full">
              <Sidebar
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
            </div>

            <SidebarContent activeItem={activeItem} />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}