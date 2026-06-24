// app/page.tsx
"use client";
import React, { useState } from "react";
import { ArrowRight, Utensils } from "lucide-react";
import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";
import { motion } from "framer-motion";

const tabs = [
  {
    title: "Confectionery",
    subtitle: "Quality and Quantity",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione provident rerum amet molestiae ex.",
  },
  {
    title: "Meat Polutary & Sea Food",
    subtitle: "High Safety Solutions",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Fire retardants improve resistance and safety for industrial materials.",
  },
  {
    title: "Bakery",
    subtitle: "Performance Protection",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Antioxidants help improve product stability and long-term performance.",
  },
  {
    title: "Juice and Beveragres",
    subtitle: "Industrial Grade Materials",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Oxides are used across multiple chemical and industrial applications.",
  },
  {
    title: "Dairy",
    subtitle: "Fast Processing Support",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Accelerators help improve processing speed and efficiency.",
  },
  {
    title: "Finished Exotic Herbs",
    subtitle: "Durable Rubber Solutions",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Synthetic rubber provides strength, flexibility, and durability.",
  },
  {
    title: "Retails Finished Food Goods",
    subtitle: "Durable Rubber Solutions",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Synthetic rubber provides strength, flexibility, and durability.",
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Navbar />
      {/* Hero Section with Gradient Background */}
   
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 py-24 text-[#ECE9E2]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#096F72] to-[#096F72]">
          {/* <img
              src="/Images/about_us/about01.png"
              alt="About Us"
              className="w-full h-full object-cover object-center"
            /> */}
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
            <Utensils   className="w-4 h-4 text-white" />
            <span className="text-white font-semibold tracking-wide">
             Safe & Innovative Food Ingredients
            </span>
          </motion.nav>

          {/* Heading */}
          <motion.h1
            variants={fadeIn}
            className="mt-8 text-5xl font-light leading-tight tracking-tight md:text-7xl"
          >
            <span className=" text-white"> Food</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            className="mx-auto mt-8 max-w-4xl text-base leading-[2] text-gray-200 md:text-lg"
          >
         Providing high-quality food ingredients, additives, and specialty solutions that enhance taste, texture, nutrition, and shelf life.
          </motion.p>
        </motion.div>
      </section>


      <main className="container mx-auto px-6 py-16 md:py-10 ">
        {/* Products Section */}

        <section className=" bg-white md:px-20">
          <div className="container mx-auto px-4">
            {/* Hexagon Tabs */}
            <div className="relative mb-7">
              {/* Decorative Connecting Line */}
             {/* Decorative Line */}
<div className="absolute bottom-[50px] left-0 w-full h-[4px] bg-[#096F72] rounded-full" />

              {/* Tabs */}
              <div className="relative z-10 flex flex-wrap justify-center gap-2 md:gap-3">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`relative h-[50px] min-w-[160px] cursor-pointer px-6 text-sm md:text-balance font-bold uppercase text-white transition-all duration-300 hover:scale-105 ${
                      active === index
                        ? "bg-[#064D50] shadow-xl"
                        : "bg-[#096F72]/80 hover:bg-[#096F72]"
                    }`}
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)",
                    }}
                  >
                    {/* {tab.title} */}
                     <span className="whitespace-pre-line text-center">
  {tab.title.length > 16
    ? `${tab.title.slice(0, 16)}\n${tab.title.slice(16)}`
    : tab.title}
</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Box */}
           <div className="rounded-2xl border border-[#096F72]/20 bg-white p-6 shadow-lg md:p-7 md:px-20">
              <div className="mb-8 border-b-4 border-[#096F72]  pb-4">
                <h3 className="text-3xl font-bold text-[#064D50]">
                  {current.title}
                </h3>
                <p className="mt-2 text-lg font-medium text-[#064D50]">
                  {current.subtitle}
                </p>
              </div>

              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
            <p className="text-lg leading-8 text-[#096F72]/70">
                    {current.desc}
                  </p>
                </div>

                <div className="overflow-hidden rounded-xl">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="h-[280px] w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Banner */}
        <div className="my-10 lg:mb-1 md:px-20">
<div className="bg-[#064D50] rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Elevate Your Formulations?
              </h3>
              <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
                Partner with us for cutting-edge material science solutions
                tailored to your exact specifications.
              </p>
          <a href="/contact">
                <button className="inline-flex cursor-pointer items-center gap-2 px-8 py-3 bg-white text-[#064D50] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Contact Our Experts
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
