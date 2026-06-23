"use client";

import React from "react";
import {
  UtensilsCrossed,
  FlaskConical,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import TrendyDivider from "../MagneticDivider";

export default function DivisionsPage() {
  const divisions = [
    {
      id: "food",
      title: "Food Division",
      badge: "Premium Quality",
      description:
        "Premium food products including pink salt, saffron, spices, and export-ready ingredients for global markets.",
      icon: UtensilsCrossed,
      gradient: "from-[#00CCAA] to-[#00B9CC]",
      iconBg: "bg-[#00CCAA]/10",
      iconColor: "text-[#00A388]",
      image: "/Images/home page card/food.jpg",
      features: ["Pink Salt", "Saffron", "Spices", "Global Export"],
      link: "/divisions/food",
    },
    {
      id: "chemicals",
      title: "Chemicals Division",
      badge: "Industrial Excellence",
      description:
        "High-quality chemical solutions for industrial and commercial applications with reliable supply support.",
      icon: FlaskConical,
      gradient: "from-[#00B9CC] to-[#0099FF]",
      iconBg: "bg-[#00B9CC]/10",
      iconColor: "text-[#00B9CC]",
      image: "/Images/chemical/chemical.jpeg",
      features: ["Industrial Chemicals", "Bulk Supply", "Custom Solutions"],
      link: "/divisions/chemicals",
    },
    {
      id: "ecommerce",
      title: "Ecommerce Division",
      badge: "Digital Marketplace",
      description:
        "Wellness and lifestyle products delivered through modern ecommerce and global distribution channels.",
      icon: ShoppingBag,
      gradient: "from-[#00CCAA] via-[#00B9CC] to-[#0099FF]",
      iconBg: "bg-[#0099FF]/10",
      iconColor: "text-[#0099FF]",
      image: "/Images/home page card/Ecommerce.jpg",
      features: ["Online Products", "Wellness Items", "Global Reach"],
      link: "/divisions/ecommerce",
    },
  ];

  return (
    <section className="overflow-hidden bg-white">
      <TrendyDivider />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:pt-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-bold text-[#096F72] md:text-5xl">
            Exploring Our{" "}
            <span>
              
            </span>
            <span className="relative inline-block">
              <span className="bg-[#096F72] bg-clip-text text-transparent">
                Core Divisions
              </span>

              <svg
                className="absolute -bottom-3 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                fill="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5 Q 150 0 200 5"
                  stroke="#064D50"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            Specialized business divisions delivering quality products, reliable
            sourcing, and global trade solutions.
          </p>
        </div>

        <div className="space-y-7">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={division.id}
                className="overflow-hidden rounded-[28px] border border-[#DDF7F2] bg-white shadow-[0_10px_35px_rgba(0,185,204,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div
                    className={`relative h-[260px] md:h-[320px] ${isReverse ? "md:order-2" : "md:order-1"
                      }`}
                  >
                    <img
                      src={division.image}
                      alt={division.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold text-[#096F72]/70 backdrop-blur-md">
                      {division.badge}
                    </span>
                  </div>

                  {/* Details */}
                  <div
                    className={`flex min-h-[260px] bg-[#064D50]  flex-col justify-center p-6 md:h-[320px] md:p-8 ${isReverse ? "md:order-1" : "md:order-2"
                      }`}
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${division.iconBg}`}
                    >
                      <Icon className={`h-6 w-6 ${division.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                      {division.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
                      {division.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {division.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-[#00B9CC]/10 px-3 py-1 text-xs font-semibold text-white/80"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
<button
  onClick={() => (window.location.href = division.link)}
  className="group mt-6 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border border-[#00CCAA]/20 bg-[#064D50] px-6 py-3 text-sm font-semibold text-white shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#096F72] hover:shadow-lg"
>
  <span className="transition-colors duration-300 group-hover:text-[#096F72]">
    Click Here
  </span>

  <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#096F72]" />
</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
