"use strict";

import React from "react";
import {
  ShieldCheck,
  Globe,
  ArrowUpRight,
  Atom,
  Sparkles,
  Cpu,
  Activity,
  HeartHandshake,
  Network,
  Fingerprint,
  Sprout,
    Leaf,
  Wind,
} from "lucide-react";
import Link from "next/link";
import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";

const motion = {
  div: ({ children, className, ...props }: any) => (
    <div
      className={`animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0 ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  ),
  nav: ({ children, className, ...props }: any) => (
    <nav
      className={`animate-[fade-in-up_1s_cubic-bezier(0.16,1,0.3,1)_200ms_forwards] opacity-0 ${className || ""}`}
      {...props}
    >
      {children}
    </nav>
  ),
  h1: ({ children, className, ...props }: any) => (
    <h1
      className={`animate-[fade-in-scale_1.4s_cubic-bezier(0.16,1,0.3,1)_400ms_forwards] opacity-0 ${className || ""}`}
      {...props}
    >
      {children}
    </h1>
  ),
};

const styleCSS = `
@keyframes fluid-sine-1{0%{transform:translateX(0) scaleY(1)}50%{transform:translateX(-25%) scaleY(1.15)}100%{transform:translateX(-50%) scaleY(1)}}
@keyframes fluid-sine-2{0%{transform:translateX(-50%) scaleY(1.05)}50%{transform:translateX(-25%) scaleY(.90)}100%{transform:translateX(0) scaleY(1.05)}}
@keyframes shimmer-glow{0%,100%{opacity:.3;filter:blur(120px) saturate(1)}50%{opacity:.6;filter:blur(150px) saturate(1.4)}}
@keyframes fade-in-up{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
@keyframes fade-in-scale{from{opacity:0;transform:scale(.96) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}
.animate-sine-1{animation:fluid-sine-1 25s linear infinite}
.animate-sine-2{animation:fluid-sine-2 30s linear infinite}
.animate-shimmer{animation:shimmer-glow 10s ease-in-out infinite}
`;

const featureCards = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    text: "Strict quality control for consistent and safe chemical performance.",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    text: "Modern formulations built for industrial efficiency.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    text: "Solutions aligned with international quality requirements.",
  },
  {
    icon: Sprout,
    title: "Sustainable Focus",
    text: "Responsible sourcing and eco-conscious chemical solutions.",
  },
];

const industries = [
  { title: "Plastic And Cables", icon: Cpu, image: "/Images/chemical/Plastic-and-Cables.webp",link: "/PlasticCables", },
  { title: "Oil And Gas", icon: Activity, image: "/Images/chemical/Oil-and-Gas.webp",link: "/plastic-cables", },
  { title: "Textile & Carpet", icon: Wind, image: "/Images/chemical/Textile-Carpet.webp",link: "/plastic-cables", },
  { title: "Rubber & Tyre", icon: ShieldCheck, image: "/Images/chemical/Rubber-Tyre.webp",link: "/plastic-cables", },
  { title: "Coatings and Ink", icon: Sparkles, image: "/Images/chemical/Coatings-and-Ink.webp",link: "/plastic-cables", },
  { title: "Polymer Emulsion", icon: Atom, image: "/Images/chemical/Polymer-Emulsion.webp",link: "/plastic-cables", },
  { title: "Composites", icon: Network, image: "/Images/chemical/Composites.webp",link: "/plastic-cables", },
  { title: "Adhesive", icon: Fingerprint, image: "/Images/chemical/Adhesive.webp",link: "/plastic-cables", },
  { title: "Construction", icon: Globe, image: "/Images/chemical/Construction.webp",link: "/plastic-cables", },
  {
    title: "Detergents / Cosmetics",
    icon: HeartHandshake,
    image: "/Images/chemical/Detergents_-Cosmetics.webp",link: "/plastic-cables",
  },
  { title: "Polyurethane", icon: Sprout, image: "/Images/chemical/polyurethane-rolls-small.jpg",link: "/plastic-cables", },
];

export default function WhyElemensisPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleCSS }} />

        <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#FAFBFA] via-[#FCFDFD] to-[#F5F8F7] text-[#1E2925] font-sans antialiased selection:bg-[#00CC99]/20 selection:text-[#0D231D] overflow-hidden relative">

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

          <div className="relative z-20 text-center max-w-4xl px-4">
             <nav className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8 text-sm tracking-widest text-[#D4AF37] uppercase shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
              <span className="text-[#00CCAA]">Home</span>
              <span className="text-white/30">•</span>
              <Leaf className="w-3.5 h-3.5 text-[#00cba9] " />
              <span className="text-white/30">•</span>
              <span className="text-white">Chemical</span>
            </nav>

            <motion.h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#ECE9E2] leading-tight">
              {" "}
              <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                Chemical
              </span>{" "}
              
              Division
            </motion.h1>
           <p className="text-[18px] leading-[1.9] text-[#82929d] font-normal tracking-[0.5px] max-w-[850px] mx-auto mt-5 text-center">
  Pioneering high-quality chemical solutions for healthcare, agriculture, manufacturing, and technology industries worldwide.
</p>
          </div>
        </section>

        <section className="relative z-10 px-6 pb-20 pt-9 bg-[#F9F6F0] overflow-hidden">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#00CCAA]/20 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-[#00B9CC]/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="text-center mb-14">
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
                Elemensis, a pioneering company, is at the forefront of
                producing a diverse range of high-quality chemical products.
                Elemensis is revolutionizing various sectors through the
                provision of cutting-edge solutions based on its commitment to
                excellence. Elemensis is offering a complete range of chemical
                products that meet the needs of businesses around the world,
                from health care and agriculture to manufacturing and
                technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="relative group overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                <img
                  src="/Images/chemical.webp"
                  alt="Chemical Solutions"
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D231D]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">
                    <Sparkles className="text-[#00CCAA]" size={18} />
                    <span className="text-sm font-medium text-white">
                      Innovation Driven
                    </span>
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold text-white">
                    Reliable Chemical Ingredients
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {featureCards.map(({ icon: Icon, title, text }, index) => (
                  <div
                    key={index}
                    className="group rounded-3xl border border-[#00CCAA]/15 bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-[#00CCAA] hover:to-[#00B9CC]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00CCAA]/10 text-[#00B9CC] transition group-hover:bg-white/20 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <h4 className="text-lg font-semibold text-[#0D231D] group-hover:text-white">
                      {title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-gray-600 group-hover:text-white/80">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-semibold text-[#0D231D]">
                  Industries{" "}
                  <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                    We Serve
                  </span>
                </h2>

                <div className="mx-auto mt-4 h-[3px] w-32 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC]" />

                <p className="mx-auto mt-5 max-w-3xl text-gray-600 leading-7">
                  Elemensis delivers advanced chemical solutions across multiple
                  industries with innovation, reliability, and sustainable
                  performance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {industries.map(({ title, icon: Icon, image, link }, index) => (
                  <div
                    key={index}
                    className="group relative h-[320px] overflow-hidden rounded-[24px] bg-white p-2 shadow-[0px_1px_13px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-[#f1f1f1]">
                      <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D231D]/90 via-[#0D231D]/20 to-transparent" />

                      {/* Icon */}
                      <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                        <Icon
                          size={24}
                          className="text-[#00CCAA] transition duration-500 group-hover:rotate-12 group-hover:scale-110"
                        />
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-16 left-5 right-5">
                        <h3 className="text-xl font-semibold text-white">
                          {title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/80">
                          Advanced chemical solutions for industrial
                          applications.
                        </p>
                      </div>

                      {/* Button */}
                      <div className="absolute left-0 bottom-[-60px] flex h-[55px] w-full items-center bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] px-5 text-white transition-all duration-300 group-hover:bottom-0">
                        <Link
  href={link}
  className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide"
>
  Know More
  <ArrowUpRight size={18} />
</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-center">
                <div className="overflow-hidden rounded-2xl">
                  <video
                    src="/videos/chemical-process.mp4"
                    controls
                    muted
                    loop
                    className="h-[350px] w-full object-cover"
                  />
                </div>

                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00CCAA]/10 to-[#00B9CC]/10 px-4 py-2">
                    <Activity className="text-[#00B9CC]" size={18} />
                    <span className="text-sm font-semibold text-[#00B9CC]">
                      Process Video
                    </span>
                  </div>

                  <h3 className="text-3xl font-semibold text-[#0D231D]">
                    Smarter Chemical Manufacturing
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    Explore how advanced chemical processes support performance,
                    reliability, and innovation across industries.
                  </p>
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
