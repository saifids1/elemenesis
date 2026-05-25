"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TopNavigation() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [hoveredMenu, setHoveredMenu] = useState(null);
  
  // 1. CHANGE DEFAULT TO TRUE: So the logo, CTA, and styling match the image on initial load
  const [scrolled, setScrolled] = useState(true);

  const gradient = "linear-gradient(135deg, #00CCAA 0%, #00B9CC 100%)";

  useEffect(() => {
    const handleScroll = () => {
      // Keeps it locked to the look in your image, or comment this line out completely 
      // if you never want the layout expanding on scroll up.
      setScrolled(window.scrollY >= 0); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. FIXED ACTIVE MENU PATHWAY DETECTOR
  useEffect(() => {
    const path = window.location.pathname;
    
    // Checks both main items and nested dropdown paths (e.g., /divisions/food)
    const current = menuItems.find((item) => {
      if (item.link === path) return true;
      if (item.dropdown) {
        return item.dropdown.some((subItem) => subItem.link === path);
      }
      return false;
    });

    if (current) {
      setActiveMenu(current.id);
    }
  }, []);

  // 3. CORRECTED SPELLING PATHS: Set to match your clean Next.js file architecture
  const menuItems = [
    { id: "home", label: "Home", link: "/" },
    { id: "about", label: "About", link: "/about" },
    { id: "why", label: "Why", link: "/why" },
    {
      id: "divisions",
      label: "Divisions",
      link: "#",
      dropdown: [
        { label: "Food Divisions", link: "/divisions/food" },
        { label: "Chemicals", link: "/divisions/chemicals" },
        { label: "Ecommerce", link: "/divisions/ecommerce" },
      ],
    },
    { id: "contact", label: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-700 py-0">
      <div className="w-full">
        <div className="flex items-center px-6 transition-all duration-500 justify-between w-full py-2 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          
          {/* Logo - Always visible now */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="flex items-center">
              <Image
                src="/Images/slider/elemenisis--E-logo.png"
                height={80} // Optimized height alignment
                width={80}
                alt="Logo"
                className="object-contain"
              />
              <span className="text-sm md:text-base font-black tracking-[0.2em] text-slate-900 ml-2">
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
                  className={`relative flex items-center px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-md ${
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
              </div>
            ))}
          </div>

          {/* CTA Button - Always visible now */}
          <button
            className="hidden md:block text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-xl text-white transition-transform hover:scale-105 duration-200"
            style={{ background: gradient }}
          >
            Get in touch
          </button>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden p-2 text-slate-900">
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current opacity-50" />
          </button>
        </div>
      </div>
    </nav>
  );
}