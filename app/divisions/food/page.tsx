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
        <section className="relative h-[80vh] flex flex-col justify-center items-center overflow-hidden bg-[#0D231D] text-[#ECE9E2] px-6">
          <div className="absolute inset-0 z-0  ">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/Images/food/main-food-header-image.jpg')",
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
              <span className="text-white">Food</span>
            </motion.nav>

            <motion.h1
     
              className="text-5xl md:text-7xl font-light tracking-tight text-[#ECE9E2] leading-tight"
            >
                 <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                Food
              </span> {" "}
              Division{" "}
           
            </motion.h1>
            <p  className="text-[18px] leading-[1.9] text-gray-200 font-normal tracking-[0.5px] max-w-[850px] mx-auto mt-5 text-center">
              Discover culinary perfection with our Food Division. From rare saffron to exquisite pink salt, elevate your dishes with our exceptional ingredients
            </p>
          </motion.div>
        </section>
         <div className="text-center mb-1 mt-9">
              {/* <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] shadow-lg shadow-[#00CCAA]/30 animate-bounce">
                <Atom className="text-white" size={32} />
              </div> */}

              <h2 className="text-4xl md:text-5xl font-semibold text-[#0D231D]">
                Our{" "}
                <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                  Products
                </span>
              </h2>

              <div className="mx-auto mt-4 h-[3px] w-36 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC]" />

              <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-gray-600">
                Elemensis is dedicated to delivering premium-quality food ingredients and
  innovative culinary solutions for businesses worldwide. From dairy,
  confectionery, meat, poultry & seafood to baking, savoury products,
  margarines, fats & oils, and health & functional ingredients, we provide
  trusted solutions that enhance taste, quality, and performance across the
  food industry.
              </p>
            </div>

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