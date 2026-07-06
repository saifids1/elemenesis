"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TopNavigation() {
  const menuItems = [
    { id: "home", label: "Home", link: "/" },
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
    {
      id: "businessunit",
      label: "Business Unit",
      link: "#",
      dropdown: [
        { label: "Coating/Ink", link: "/divisions/coating_in" },
        { label: "Rubber/Adhesive", link: "/divisions/rubber_adhesive" },
        { label: "Petrochemical", link: "/divisions/petrochemical" },
        { label: "Food", link: "/divisions/food" },
        { label: "Pharma", link: "/divisions/chemicals" },
        { label: "Animal Feed", link: "/divisions/animalfeed" },
        { label: "Construction", link: "/divisions/construction" },
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

  const [hoveredMenu, setHoveredMenu] = useState("");

  const gradient = "#064D50";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-700 py-0">
      <div className="w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 ">
          <div className="flex items-center justify-between w-full py-2 transition-all duration-500">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer flex-shrink-0">
              <div className="flex items-center">
                <Image
                  src="/Images/logo/Logo11.png"
                  height={90}
                  width={250}
                  alt="Logo"
                  className="object-contain w-[140px] h-auto sm:w-[180px] lg:w-[250px]"
                  priority
                />
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2 p-1 transition-all duration-300">
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
                    className={`relative flex items-center px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold uppercase tracking-wide transition-all duration-300 rounded-md ${
                      activeMenu === item.id
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

                    <span className="relative z-10 flex items-center gap-1 whitespace-nowrap">
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
                            className="block px-5 py-3 text-sm font-bold text-slate-700 hover:bg-gray-100 transition"
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

            {/* MOBILE MENU */}
            <div className="relative lg:hidden">
              {/* TOGGLE INPUT */}
              <input type="checkbox" id="mobile-menu" className="peer hidden" />

              {/* BURGER BUTTON */}
              <label htmlFor="mobile-menu" className="burger relative z-[120] cursor-pointer">
                <span className="block w-6 h-0.5 bg-slate-900 mb-1.5 transition"></span>
                <span className="block w-6 h-0.5 bg-slate-900 mb-1.5 transition"></span>
                <span className="block w-6 h-0.5 bg-slate-900 transition"></span>
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
                      height={40}
                      width={40}
                      alt="Logo"
                      className="object-contain"
                    />
                    <span className="text-sm md:text-base font-black tracking-[0.2em] text-slate-900 ml-2">
                      ELEMENSIS
                    </span>
                  </div>
                  <label
                    htmlFor="mobile-menu"
                    className="cursor-pointer rounded-lg bg-gray-100 px-3 py-1 text-xl font-bold text-slate-700 transition hover:bg-gray-200"
                  >
                    ×
                  </label>
                </div>

                {/* MENU ITEMS */}
                <div className="flex flex-col px-6 py-2 overflow-y-auto h-[calc(100vh-80px)]">
                  {menuItems.map((item) => (
                    <div key={item.id} className="border-b border-gray-100 py-2">
                      <Link
                        href={item.link}
                        className="block font-semibold uppercase tracking-wider text-slate-800 transition hover:text-[#096F72]"
                        onClick={() => {
                          const checkbox = document.getElementById("mobile-menu");
                          if (checkbox) checkbox.checked = false;
                        }}
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
                              onClick={() => {
                                const checkbox = document.getElementById("mobile-menu");
                                if (checkbox) checkbox.checked = false;
                              }}
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
                    onClick={() => {
                      const checkbox = document.getElementById("mobile-menu");
                      if (checkbox) checkbox.checked = false;
                    }}
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}