"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TopNavigation() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const gradient = "linear-gradient(135deg, #00CCAA 0%, #00B9CC 100%)";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "solutions", label: "Solutions" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled ? "py-0" : "py-8"
      }`}
    >
      <div className={`w-full ${scrolled ? "" : "max-w-7xl mx-auto"}`}>
        <div
          className={`flex items-center justify-between px-6 transition-all duration-500 ${
            scrolled
              ? "w-full py-4 bg-white/80 backdrop-blur-xl border-b border-gray-200"
              : "py-3 rounded-2xl"
          }`}
        >
          {/* Logo */}
          <div className="items-center gap-3 group cursor-pointer">
            {/* Animated Logo*/}
            <AnimatePresence>
              {scrolled && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-sm md:text-base font-black tracking-[0.2em] text-slate-900 group-hover:tracking-[0.3em] transition-all duration-300 overflow-hidden "
                >
                  {/* Glitch Layers */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 translate-x-1 animate-pulse bg-red-500/20 mix-blend-screen" />
                    <div className="absolute inset-0 -translate-x-1 animate-pulse bg-blue-500/20 mix-blend-screen" />
                  </div>
                  <div className="flex items-center">
                    <Image
                    src="/Images/slider/elemenisis--E-logo.png"
                    height={80}
                    width={80}
                    alt="Logo"
                    className="relative z-10 group-hover:animate-skew brightness-150 contrast-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />
                  <span>ELEMENSIS</span>
                  </div>
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Menu */}
          <div
            className={`hidden md:flex items-center p-1 transition-all duration-300 ${
              scrolled
                ? ""
                : "bg-white/40 backdrop-blur-md rounded-xl border border-gray-200/40"
            }`}
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onMouseEnter={() => setHoveredMenu(item.id)}
                onMouseLeave={() => setHoveredMenu(null)}
                onClick={() => setActiveMenu(item.id)}
                className={`relative px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeMenu === item.id
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {activeMenu === item.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-md"
                    style={{
                      background: gradient,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                  />
                )}

                <AnimatePresence>
                  {hoveredMenu === item.id && activeMenu !== item.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: gradient }}
                    />
                  )}
                </AnimatePresence>

                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <AnimatePresence>
            {scrolled && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="hidden md:block text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full text-white transition-all hover:opacity-90"
                style={{ background: gradient }}
              >
                Get in touch
              </motion.button>
            )}
          </AnimatePresence>
          {!scrolled && <div>{""}</div>}

          {/* Mobile button - shows always */}
          <button className="md:hidden p-2 text-slate-900">
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current opacity-50" />
          </button>
        </div>
      </div>
    </nav>
  );
}
