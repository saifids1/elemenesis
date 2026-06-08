"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";
import { productItems } from "../../data/productData";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Foodpage() {
  const [activeItem, setActiveItem] = useState(productItems[0]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F9F6F0] text-[#1E1E1E] font-sans antialiased selection:bg-[#4A8F3C] selection:text-white">
        <section className="relative h-[80vh] flex flex-col justify-center items-center overflow-hidden bg-[#0D231D] text-[#ECE9E2] px-6">
          <div className="absolute inset-0 z-0">
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
            <motion.nav className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8 text-sm tracking-widest text-[#D4AF37] uppercase">
              <span className="text-[#00CCAA]">Home</span>
              <span className="text-white/30">•</span>
              <Leaf className="w-3.5 h-3.5 text-[#00cba9] " />
              <span className="text-white/30">•</span>
              <span className="text-white">Food</span>
            </motion.nav>

            <motion.h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#ECE9E2] leading-tight">
              <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                Food
              </span>{" "}
              Division
            </motion.h1>

            <p className="text-[18px] leading-[1.9] text-gray-200 font-normal tracking-[0.5px] max-w-[850px] mx-auto mt-5 text-center">
              Discover culinary perfection with our Food Division. From rare
              saffron to exquisite pink salt, elevate your dishes with our
              exceptional ingredients.
            </p>
          </motion.div>
        </section>

        <div className="text-center mb-10 mt-9 px-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0D231D]">
            Our{" "}
            <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-36 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC]" />
          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-gray-600">
            Elemensis is dedicated to delivering premium-quality food
            ingredients and innovative culinary solutions for businesses
            worldwide. From dairy, confectionery, meat, poultry & seafood to
            baking, savoury products, margarines, fats & oils, and health &
            functional ingredients, we provide trusted solutions that enhance
            taste, quality, and performance across the food industry.
          </p>
        </div>

    <section className="grid grid-cols-1 md:grid-cols-[300px_1fr] xl:grid-cols-[375px_1fr] gap-6 items-start px-4 md:px-6 xl:px-10">
  <aside className="md:min-h-[230px] py-4 md:py-7 xl:py-12">
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-1 gap-3 xl:gap-0">
      {productItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeItem.id === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveItem(item)}
            className={`w-full flex items-center gap-3 px-4 py-4 xl:py-6 text-left text-sm sm:text-base xl:text-lg border border-gray-200 xl:border-x-0 xl:border-t-0 rounded-xl xl:rounded-none transition-all duration-300 ${
              isActive
                ? "text-[#00B9CC] bg-white"
                : "text-[#263238] hover:text-[#00B9CC] bg-transparent"
            }`}
          >
            <Icon
              size={28}
              strokeWidth={1.6}
              className={isActive ? "text-[#00B9CC]" : "text-black"}
            />
            <span className="leading-snug">{item.name}</span>
          </button>
        );
      })}
    </div>
  </aside>

  <div className="py-6 xl:py-10">
    <div className="h-[5px] w-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] mb-8" />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">
      <div className="min-w-0">
        <h2 className="text-3xl sm:text-4xl font-normal uppercase mb-6">
          {activeItem.name}
        </h2>

        <div className="h-[5px] w-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] mb-5" />

        {activeItem.content.length > 0 && (
          <div className="pb-6 mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#0D231D] mb-4">
              {activeItem.content[0].title}
            </h3>

            <ul className="space-y-2 pl-5 list-disc">
              {activeItem.content[0].items.map((item, idx) => (
                <li key={idx} className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,300px)_minmax(0,300px)] gap-y-8 gap-x-10">
          {activeItem.content.slice(1).map((section) => (
            <div key={section.title} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#0D231D] mb-4">
                {section.title}
              </h3>

              <ul className="space-y-2 pl-5 list-disc">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full h-[220px] sm:h-[280px] 2xl:h-[270px]">
        <Image
          src={activeItem.image}
          alt={activeItem.name}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  </div>
</section>
      </div>

      <Footer />
    </>
  );
}
