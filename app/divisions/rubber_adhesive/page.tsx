// app/page.tsx
"use client";
import React, {  useState } from "react";
import {ArrowRight,Paintbrush, } from "lucide-react";
import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";

const tabs = [
  {
    title: "Masterbatch",
    subtitle: "Quality and Quantity",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione provident rerum amet molestiae ex.",
  },
  {
    title: "Fire Retardants",
    subtitle: "High Safety Solutions",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Fire retardants improve resistance and safety for industrial materials.",
  },
  {
    title: "Antioxidants",
    subtitle: "Performance Protection",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Antioxidants help improve product stability and long-term performance.",
  },
  {
    title: "Oxides",
    subtitle: "Industrial Grade Materials",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Oxides are used across multiple chemical and industrial applications.",
  },
  {
    title: "Accelerators",
    subtitle: "Fast Processing Support",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Accelerators help improve processing speed and efficiency.",
  },
  {
    title: "Synthetic Rubber",
    subtitle: "Durable Rubber Solutions",
    image: "/Images/Coatings-and-Ink/Coatings-and-Ink-1-scaled-1.webp",
    desc: "Synthetic rubber provides strength, flexibility, and durability.",
  },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Navbar />
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-br from-[#00CCAA] via-[#00B9CC] to-[#0099FF]">
        {/* Background / Overlay should stay behind */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Content */}
        <div className="relative z-10 container mx-auto max-w-7xl px-4 top-16">
          <div className="max-w-4xl mx-auto pt-30 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 transition-all duration-700">
              <Paintbrush className="w-4 h-4 text-white" />
              <span className="text-white font-semibold tracking-wide">
                Industry Solutions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all delay-200 duration-700">
             Rubber / Adhesive
            </h1>

            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed transition-all delay-300 duration-700">
              Comprehensive range of high-performance coatings, inks, adhesives,
              and specialty chemicals for diverse industrial applications
              worldwide
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16 md:py-10 ">
        {/* Products Section */}

        <section className=" bg-white md:px-20">
          <div className="container mx-auto px-4">
            {/* Hexagon Tabs */}
            <div className="relative mb-7">
              {/* Decorative Connecting Line */}
              <div className="absolute bottom-[50px] left-0 w-full h-[4px] bg-gradient-to-r from-[#00CCAA] via-[#00B9CC] to-[#0099FF] rounded-full" />

              {/* Tabs */}
              <div className="relative z-10 flex flex-wrap justify-center gap-2 md:gap-4">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`relative h-[50px] min-w-[160px] cursor-pointer px-6 text-sm md:text-base font-bold uppercase text-white transition-all duration-300 hover:scale-105 ${
                      active === index
                        ? "bg-gradient-to-br from-[#02296b] via-[#03368e] to-[#0a56d8] shadow-xl"
                        : "bg-gradient-to-br from-[#00CCAA]/70 via-[#00B9CC]/70 to-[#0099FF]/70 hover:from-[#00CCAA] hover:via-[#00B9CC] hover:to-[#0099FF]"
                    }`}
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)",
                    }}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Box */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-7 md:px-20">
              <div className="mb-8 border-b-4 border-[#00B9CC] pb-4">
                <h3 className="text-3xl font-bold text-[#00B9CC]">
                  {current.title}
                </h3>
                <p className="mt-2 text-lg font-medium text-[#00B9CC]">
                  {current.subtitle}
                </p>
              </div>

              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <p className="text-lg leading-8 text-gray-700">
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
          <div className="bg-gradient-to-br from-[#00CCAA] via-[#00B9CC] to-[#0099FF] rounded-3xl p-12 text-center text-white relative overflow-hidden">
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
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#0099FF] rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Contact Our Experts
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
