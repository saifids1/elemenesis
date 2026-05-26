"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ShoppingBag, Sparkles } from "lucide-react";
import Navbar from "../../layouts/navbar";
import Footer from "../../layouts/footer";
type Product = {
  title: string;
  image: string;
  desc: string;
};

const products: Product[] = [
  {
    title: "Mehrab Pink Salt",
    image: "/Images/mehrab-pink-salt.jpg",
    desc: "Introducing Mehrab Pink Salt: Nature’s Gift to Your Health. Learn the secrets of Mehrab Pink Salt.",
  },
  {
    title: "Zayb Saffron",
    image: "/Images/zayb-saffron.jpg",
    desc: "Introducing Zayb’s Pure Saffron – A Golden Elixir for Health and Wellness. Zayb is your gateway to the finest.",
  },
  {
    title: "Zayb Saffron Syrup",
    image: "/Images/zayb-saffron-syrup.jpg",
    desc: "A premium saffron syrup crafted for rich taste, wellness, and a luxurious everyday experience.",
  },
];

const EcommercePage = () => {
  return ( <>
     <div className="min-h-screen bg-gradient-to-br from-[#FAFBFA] via-[#FCFDFD] to-[#F5F8F7] text-[#1E2925] font-sans antialiased selection:bg-[#00CC99]/20 selection:text-[#0D231D] overflow-hidden relative">
          <Navbar />
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
            {/* <nav className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8 text-sm tracking-widest text-[#D4AF37] uppercase" /> */}

            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#ECE9E2] leading-tight">
              Division{" "}
              <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                Chemical
              </span>
            </h1>
          </div>
        </section>
    <section className="relative overflow-hidden bg-[#F9F6F0] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#00CCAA]/20 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#00B9CC]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] shadow-lg shadow-[#00CCAA]/30">
            <ShoppingBag className="text-white" size={32} />
          </div>

          <h2 className="text-4xl font-semibold text-[#0D231D] md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
              Products
            </span>
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-32 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC]" />

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600">
            Explore premium natural products crafted for wellness, purity, and
            everyday health.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,204,170,0.18)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D231D]/85 via-[#0D231D]/30 to-transparent" />

                <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md">
                  <Sparkles
                    size={26}
                    className="text-[#00CCAA] transition duration-500 group-hover:rotate-12 group-hover:scale-110"
                  />
                </div>

                <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="min-h-[78px] text-sm leading-6 text-gray-600">
                  {item.desc}
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#00CCAA]/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Read More
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#00CCAA]/10 blur-3xl transition-all duration-500 group-hover:bg-[#00CCAA]/20" />
            </article>
          ))}
        </div>
      </div>
    </section>
     <Footer />
    </div>
    </>
  );
};

export default EcommercePage;