"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TopNavigation() {
  const menuItems = [
    { id: "home", label: "Home", link: "/" },
    // { id: "about", label: "About", link: "/about" },
    {
      id: "about-us",
      label: "About Us",
      link: "#",
      dropdown: [
        { label: "About Elemensis", link: "/about" },
        { label: "Ethics", link: "/about/ethics" },
        { label: "Vision / Mission", link: "/about/vision-mission" },
      ],
    },
    // { id: "why", label: "Why", link: "/why" },
    {
      id: "businessunit",
      label: "Business Unit",
      link: "#",
      dropdown: [
        { label: "Coating/Ink", link: "/divisions/coating_in" },
        { label: "Rubber/Adhesive", link: "/divisions/rubber_adhesive" },
        { label: "Petrochemical", link: "/divisions/petrochemical" },
        { label: "Food", link: "/divisions/food" },
        { label: "Pharma", link: "/divisions/animalfeed" },
        { label: "Animal Feed", link: "/divisions/animalfeed" },
        { label: "Construction", link: "/divisions/construction" },
        // { label: "Ecommerce", link: "/divisions/ecommerce" },
      ],
    },
    {
      id: "career",
      label: "Career",
      link: "#",
      dropdown: [
        { label: "Career Form", link: "/career/career_form" },
     
      ],
    },
    {
      id: "ournetwork",
      label: "Our Network",
      link: "#",
      dropdown: [
        { label: "Global Map", link: "/our_network/globalmap" },
     
      ],
    },

    { id: "contact", label: "Contact", link: "/contact" },
  ];

  const [activeMenu, setActiveMenu] = useState(() => {
    if (typeof window === "undefined") return "home";
    const currentPath = window.location.pathname;
    const current = menuItems.find((item) => {
      if (item.link === currentPath) return true;
      if (item.dropdown) {
        return item.dropdown.some((subItem) => subItem.link === currentPath);
      }
      return false;
    });

    return current ? current.id : "home";
  });

  const [hoveredMenu, setHoveredMenu] = useState(null);

  const gradient = "#064D50";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-700 py-0 ">
      <div className="w-full">
        <div className="flex items-center px-18 lg:pe-24 transition-all duration-500 justify-between w-full py-2 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          {/* Logo - Always visible now */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="flex items-center ml-10">
              <Image
                src="/Images/logo/elem.png"
                height={35} // Optimized height alignment
                width={40}
                alt="Logo"
                className="object-contain"
              />
              <span className="text-xl md:text-xl font-black tracking-[0.2em] text-[#064D50] ml-2">
                ELEMENSIS
              </span>
            </div>
          </div>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-2 p-1 transition-all duration-300">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.id)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  href={item.link}
                  onClick={() => setActiveMenu(item.id)}
                  className={`relative flex items-center px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-md ${activeMenu === item.id
                      ? "text-white"
                      : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  {activeMenu === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md"
                      style={{ background: gradient }}
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        duration: 0.6,
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1">
                    {item.label}
                    {item.dropdown && (
                      <span className="text-[10px] ml-1 opacity-70">▼</span>
                    )}
                  </span>
                </Link>

                {/* DROPDOWN */}
                <AnimatePresence>
                  {item.dropdown && hoveredMenu === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.link}
                          className="block px-5 py-3 text-sm text-slate-700 hover:bg-gray-100 transition"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* DROPDOWN */}
                <AnimatePresence>
                  {item.dropdown && hoveredMenu === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.link}
                          className="block px-5 py-3 text-sm text-slate-700 hover:bg-gray-100 transition"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* <a
            href="/contact"
            className="hidden md:inline-flex text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-xl text-white transition-transform hover:scale-105 duration-200"
            style={{ background: gradient }}
          >
            Get in touch
          </a> */}

          {/* MOBILE TOGGLE */}
          {/* <button className="md:hidden p-2 text-slate-900">
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current opacity-50" />
          </button> */}

          {/* MOBILE MENU */}

          {/* ====================== MOBILE MENU ====================== */}
          <div className="relative md:hidden">
            {/* TOGGLE INPUT */}
            <input type="checkbox" id="mobile-menu" className="peer hidden" />

            {/* BURGER BUTTON */}
            <label htmlFor="mobile-menu" className="burger relative z-[120]">
              <span></span>
              <span></span>
              <span></span>
            </label>

            {/* OVERLAY */}
            <label
              htmlFor="mobile-menu"
              className="fixed inset-0 z-[105] hidden bg-black/40 backdrop-blur-sm peer-checked:block"
            />

            {/* SIDE MENU */}
            <div className="fixed right-0 top-0 z-[110] h-screen w-[80%] max-w-[340px] translate-x-full bg-white shadow-2xl transition-transform duration-500 peer-checked:translate-x-0">
              {/* HEADER */}
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                <div className="flex items-center">
                  <Image
                    src="/Images/slider/elemenisis--E-logo.png"
                    height={40} // Optimized height alignment
                    width={40}
                    alt="Logo"
                    className="object-contain"
                  />
                  <span className="text-sm md:text-base font-black tracking-[0.2em] text-slate-900 ml-2">
                    ELEMENSIS
                  </span>
                </div>
              </div>

              {/*<div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
      <h4 className="text-lg font-bold tracking-widest text-[#0D231D]">
        MENU
      </h4>

       <label
        htmlFor="mobile-menu"
        className="cursor-pointer rounded-lg bg-gray-100 px-3 py-1 text-xl font-bold text-slate-700 transition hover:bg-gray-200"
      >
        ×
      </label> 
    </div>*/}

              {/* MENU ITEMS */}
              <div className="flex flex-col px-6 py-2">
                {menuItems.map((item) => (
                  <div key={item.id} className="border-b border-gray-100 py-2">
                    <Link
                      href={item.link}
                      className="block  font-semibold uppercase tracking-wider text-slate-800 transition hover:text-[#096F72]"
                    >
                      {item.label}
                    </Link>

                    {item.dropdown && (
                      <div className="mt-3 ml-3 flex flex-col gap-3 text-base">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.link}
                            className="text-sm text-slate-600 transition hover:text-[#096F72]"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* BUTTON */}
                <Link
                  href="/contact"
                  className="mt-6 rounded-xl bg-[#064D50] px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-white transition hover:scale-[1.02]"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
