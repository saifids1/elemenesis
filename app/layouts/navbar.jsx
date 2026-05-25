"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TopNavigation() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const gradient = "linear-gradient(135deg, #00CCAA 0%, #00B9CC 100%)";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ ADDED ONLY FOR ACTIVE MENU FIX
  useEffect(() => {
    const path = window.location.pathname;

    const current = menuItems.find((item) => item.link === path);

    if (current) {
      setActiveMenu(current.id);
    }
  }, []);

  const menuItems = [
    { id: "home", label: "Home", link: "/" },
    { id: "about", label: "About", link: "/about" },
    { id: "why", label: "Why", link: "/why" },
    {
      id: "devisions",
      label: "Devisions",
      link: "#",
      dropdown: [
        { label: "Food Divisions", link: "/devisions/food" },
        { label: "Chemicals", link: "/devisions/chemicals" },
        { label: "Ecommerce", link: "/devisions/ecommerce" },
      ],
    },
    { id: "contact", label: "Contact", link: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled ? "py-0" : "py-8"
      }`}
    >
      <div className={`w-full ${scrolled ? "" : "max-w-7xl mx-auto"}`}>
        <div
          className={`flex items-center px-6 transition-all duration-500 ${
            scrolled ? "justify-between" : "justify-center"
          } ${
            scrolled
              ? "w-full py-4 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              : "py-3 rounded-2xl"
          }`}
        >

        
          {/* Logo */}
          <div className="items-center gap-3 group cursor-pointer">
            <AnimatePresence>
              {scrolled && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm md:text-base font-black tracking-[0.2em] text-slate-900 overflow-hidden"
                >
                  <div className="flex items-center">
                    <Image
                      src="/Images/slider/elemenisis--E-logo.png"
                      height={80}
                      width={80}
                      alt="Logo"
                    />
                    <span>ELEMENSIS</span>
                  </div>
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* MENU */}
          <div
            className={`hidden md:flex items-center gap-2 p-1 transition-all duration-300 ${
              scrolled
                ? ""
                : "bg-white/40 backdrop-blur-md rounded-xl border border-gray-200/40"
            }`}
          >
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
                  className={`relative flex items-center px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
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

          {/* CTA */}
          <AnimatePresence>
            {scrolled && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="hidden md:block text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full text-white"
                style={{ background: gradient }}
              >
                Get in touch
              </motion.button>
            )}
          </AnimatePresence>

          {/* MOBILE */}
          <button className="md:hidden p-2 text-slate-900">
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current opacity-50" />
          </button>
        </div>
      </div>
    </nav>
  );
}