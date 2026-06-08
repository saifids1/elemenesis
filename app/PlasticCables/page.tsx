"use client";

import React from "react";
import Link from "next/link";
import {
  Cpu,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  "High-performance cable compounds",
  "Durable polymer additives",
  "Enhanced insulation materials",
  "Reliable industrial plastic solutions",
  "Eco-friendly manufacturing support",
  "Custom chemical formulations",
];
const productSections = [
  {
    title: "Performance Additives",
    items: [
      "Anti Oxidant (Primary/Secondary)",
      "Light stabilizers and UV Absorbers",
      "Compatilizer",
      "Slip Agent - Eurocamide & Oleamide",
      "Dispersing Agent - Ethylene Bis Steramide (EBS)",
      "Moisture scavengers",
      "Nitrile butadiene rubber",
      "Glycerol Mono Sterate",
      "Stearic Acid",
      "PE Wax - Micronized",
      "Oxidized PE Wax",
    ],
  },
  {
    title: "Fire Retardents",
    items: [
      "Antimony Trioxide",
      "Alumina Trihydrate (ATH)",
      "Magnesium Hydroxite",
      "Brominated FR Master Batch",
      "Brominated Polystyrene",
      "Deca Bromo Diphenyl Ethane",
      "ACP Compound",
      "Melamine Cyanurate",
      "Phosphates",
      "Zinc Borate",
      "Zinc Hydroxy Stannate",
    ],
  },
  {
    title: "Pigments",
    items: [
      "Carbon Black - N Series, P Series",
      "Titanium Dioxide",
      "Organic & Inorganic Pigments",
      "Pearl Pigments",
    ],
  },
  {
    title: "Plastisizer",
    items: [
      "Pthalate based - DOP, DBP, TOTM",
      "Non Pthalate Based - Adipate, Benzoate, DINCH, DIDP",
      "Pthalate Free - Mesamol",
      "Bisphenol Based - ESBO",
      "Eco Friendly - Tri-butyl citrate & ATBC",
    ],
  },
  {
    title: "Stablizers",
    items: [
      "Ca-Zn One Pack",
      "Calcium Stearate",
      "Calcium Zinc, Barium Zinc",
      "Organic",
      "Di/Tri Basic Lead",
      "Tin Stabilizer - Methyl & Octyl",
      "Zinc Stearate",
    ],
  },
  {
    title: "Polymers & Resins",
    items: [
      "ABS",
      "EVA",
      "PBT",
      "PVC & CPVC",
      "Nylon 6 for Wire & Cable",
      "Nylon PA6, 6.6, 12",
      "Nylon Compound",
    ],
  },
  {
    title: "Master Batches",
    items: [
      "Anti Block",
      "Antimicrobial",
      "Antislip",
      "Antistatic",
      "White, Black and Color",
      "Talc",
    ],
  },
  {
    title: "Impact Modifiers & Processing Aids",
    items: [
      "Chlorinated PE (CPE)",
      "Impact Modifier Acrylic",
      "Impact Modifier Grafted",
      "Impact Modifier MBS",
      "Processing Aid Acrylic",
    ],
  },
  {
    title: "Coupling Agents",
    items: ["Silanes", "Organic Peroxides", "Titanates"],
  },
  {
    title: "Filling Gels",
    items: ["Flooding & Filling"],
  },
];

export default function PlasticCablesPage() {
  return (
    <section className="min-h-screen bg-[#F9F6F0] text-[#0D231D] overflow-hidden">
      
      {/* HERO */}
   {/* HERO */}
<div className="relative h-[70vh] flex items-center justify-center overflow-hidden">

  <img
    src="/Images/chemical/Plastic-and-Cables.webp"
    alt="Plastic And Cables"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-[#0D231D]/75" />

  {/* BACK BUTTON */}
  <Link
    href="/divisions/chemicals"
    className="absolute top-6 left-6 md:top-10 md:left-10 z-30 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] group"
  >
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] shadow-lg transition-transform duration-300 group-hover:-translate-x-1">
      <ArrowLeft size={18} className="text-white" />
    </span>

    <span className="tracking-wide uppercase text-[13px]">
      Back To Chemicals
    </span>
  </Link>

  {/* CENTER CONTENT */}
  <div className="relative z-10 text-center px-6 max-w-4xl">

    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] shadow-2xl shadow-[#00CCAA]/30">
      <Cpu className="text-white" size={38} />
    </div>

    <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
      Plastic &{" "}
      <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
        Cables
      </span>
    </h1>

  </div>
</div>
      {/* CONTENT */}
 
<div className="relative mx-auto max-w-7xl px-6 py-20">
  <div className="text-center">
    <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-[#00CCAA]/10 px-5 py-2 text-sm font-semibold text-[#00B9CC]">
      <Sparkles size={18} />
      Products
    </div>

    <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#0D231D]">
      Plastic & Cable Product Solutions
    </h2>

    <p className="mx-auto mt-6 max-w-4xl text-[17px] leading-8 text-black/65">
      Enhance your plastic and cable products with Elemensis. Our top-notch
      additives ensure exceptional quality and performance, setting your
      creations apart. Experience excellence with Elemensis, where innovation
      meets reliability.
    </p>
  </div>

  <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {productSections.map((section, index) => (
      <div
        key={index}
        className="group rounded-3xl border border-[#00CCAA]/10 bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white shadow-lg shadow-[#00CCAA]/20">
          <ShieldCheck size={22} />
        </div>

        <h3 className="text-xl font-semibold text-[#0D231D]">
          {section.title}
        </h3>

        <div className="mt-5 space-y-3">
          {section.items.map((item, itemIndex) => (
            <div key={itemIndex} className="flex items-start gap-3">
              <CheckCircle2
                size={17}
                className="mt-1 shrink-0 text-[#00CCAA]"
              />
              <span className="text-sm leading-6 text-black/65">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}