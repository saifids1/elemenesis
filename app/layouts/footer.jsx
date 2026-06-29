"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Imported for standard Next.js image handling
import {
  MapPin, Phone, Mail, Clock, Globe,
  Users, X, UserPlus,
  ChevronRight, Shield, Truck, Heart,
  Award, Leaf, ArrowUp, Camera
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF,} from "react-icons/fa";
import { FaLinkedinIn  } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";


export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const currentYear = new Date().getFullYear();

  // Premium Brand Gradient
  const brandGradient = "linear-gradient(135deg, rgb(0, 204, 170) 0%, rgb(0, 185, 204) 100%)";
  const gradientTextStyle = {
    backgroundImage: brandGradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  };

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Elemensis", href: "/about" },
    { name: "Ethics", href: "/about/ethics" },
    { name: "Vision / Mission", href: "/about/vision-mission" },
    { name: "Career", href: "/career/career_form" },
    { name: "Global Map", href: "/our_network/globalmap" },
    { name: "Contact", href: "/contact" },
  ];

  const ourDivisions = [
    { name: "Coating / Ink", href: "/divisions/coating_in" },
    { name: "Rubber / Adhesive", href: "/divisions/rubber_adhesive" },
    { name: "Petrochemical", href: "/divisions/petrochemical" },
    { name: "Food", href: "/divisions/food" },
    { name: "Pharma", href: "/divisions/animalfeed" },
    { name: "Animal Feed", href: "/divisions/animalfeed" },
    { name: "Construction", href: "/divisions/construction" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Dubai, United Arab Emirates" },
    { icon: Phone, text: "+971 4 123 4567", href: "tel:+97141234567" },
    { icon: Mail, text: "info@elemensisllc.com", href: "mailto:info@elemensisllc.com" },
    { icon: Clock, text: "24/7 Customer Support" },
  ];

  const socialLinks = [
    { icon: FaFacebookF , href: "#", label: "Facebook" },
    { icon: BsTwitterX , href: "#", label: "Twitter" },
    { icon: FaLinkedinIn , href: "#", label: "LinkedIn" },
    // { icon: Camera, href: "#", label: "Instagram" },
  ];

  const certifications = [
    { icon: Shield, text: "ISO Certified" },
    { icon: Award, text: "Quality Assured" },
    { icon: Leaf, text: "Eco-Friendly" },
  ];

  return (
    <footer className="relative text-gray-300 overflow-hidden bg-[#0a0a0a] border-t border-white/5">
      {/* <TrendyDivider /> */}

      {/* Premium Constellation Grid SVG Background Animation Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] overflow-hidden mix-blend-screen">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="constellation-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <circle cx="80" cy="0" r="1" fill="rgba(255, 255, 255, 0.3)" />
              <circle cx="0" cy="80" r="1" fill="rgba(255, 255, 255, 0.3)" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#constellation-grid)" />

          <g fill="white" opacity="0.6">
            <circle cx="160" cy="80" r="2.5" className="animate-node-pulse-fast" />
            <circle cx="480" cy="240" r="3" className="animate-node-pulse-slow" />
            <circle cx="800" cy="160" r="2" className="animate-node-pulse-normal" />
            <circle cx="240" cy="400" r="3.5" className="animate-node-pulse-slow" />
            <circle cx="1120" cy="320" r="2.5" className="animate-node-pulse-fast" />
            <circle cx="640" cy="480" r="2" className="animate-node-pulse-normal" />
          </g>

          <g stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="15 140" fill="none" opacity="0.3">
            <line x1="-100" y1="-100" x2="1800" y2="1800" className="animate-diagonal-flow-slow" />
            <line x1="400" y1="-100" x2="2300" y2="1800" className="animate-diagonal-flow-fast" />
            <line x1="-500" y1="-100" x2="1400" y2="1800" className="animate-diagonal-flow-normal" />
          </g>
        </svg>
      </div>

      {/* Decorative Blur Contrast Accent Orbs */}
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-3xl pointer-events-none -mr-40 -mt-40 opacity-10"
        style={{ background: brandGradient }}
      />

      <div className="relative container mx-auto px-6 max-w-7xl pt-16 pb-8 z-10">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="flex flex-col items-start">
         <div className="flex items-center gap-2 mb-6 group cursor-pointer">
  <Image
    src="/Images/logo/elem.png"
    alt="Elemensis Logo"
    width={50}
    height={47}
    priority
    className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] object-contain transition-transform duration-300 group-hover:scale-110"
  />

  <span
    className="text-[22px] md:text-[30px] font-black tracking-[4px] leading-none whitespace-nowrap"
    style={gradientTextStyle}
  >
    ELEMENSIS
  </span>
</div>

            <p
              className="text-sm leading-relaxed mb-6 font-medium bg-clip-text text-transparent opacity-85"
              style={gradientTextStyle}
            >
              Your trusted global partner for premium products and exceptional service across B2B & B2C markets worldwide.
            </p>

            <div className="flex flex-col gap-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2.5 group w-fit">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/15 group-hover:bg-white/10 transition-all">
                    <cert.icon className="w-4 h-4 text-teal-400 group-hover:text-white transition-colors" />
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity"
                    style={gradientTextStyle}
                  >
                    {cert.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="ml-[0px] md:ml-[90px]">
            <h3
              className="font-black text-sm uppercase tracking-widest mb-6 relative inline-block"
              style={gradientTextStyle}
            >
              Navigation
              <div
                className="absolute -bottom-2 left-0 w-12 h-0.5 rounded-full"
                style={{ background: brandGradient }}
              />
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 transition-all duration-300 text-sm font-semibold w-fit"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <ChevronRight
                      className={`w-4 h-4 transition-all duration-300 transform ${hoveredLink === link.name ? "translate-x-1 scale-110 opacity-100" : "opacity-40"}`}
                      style={{ color: 'rgb(0, 204, 170)' }}
                    />
                    <span
                      className="relative bg-clip-text text-transparent opacity-85 group-hover:opacity-100 transition-opacity"
                      style={gradientTextStyle}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-px transition-transform duration-300 origin-left ${hoveredLink === link.name ? "scale-x-100" : "scale-x-0"}`}
                        style={{ background: brandGradient }}
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions Column */}
          <div className="md:ml-8 ml-[0px] md:ml-[50px]">
            <h3
              className="font-black text-sm uppercase tracking-widest mb-6 relative inline-block"
              style={gradientTextStyle}
            >
              Divisions
              <div
                className="absolute -bottom-2 left-0 w-12 h-0.5 rounded-full"
                style={{ background: brandGradient }}
              />
            </h3>
            <ul className="space-y-3.5">
              {ourDivisions.map((division, idx) => (
                <li key={idx}>
                  <Link
                    href={division.href}
                    className="group flex items-center gap-2 transition-all duration-300 text-sm font-semibold w-fit"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-150 transition-all duration-300 field-dot" />
                    <span
                      className="group-hover:translate-x-1 transition-transform duration-300 bg-clip-text text-transparent opacity-85 group-hover:opacity-100"
                      style={gradientTextStyle}
                    >
                      {division.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3
              className="font-black text-sm uppercase tracking-widest mb-6 relative inline-block"
              style={gradientTextStyle}
            >
              Connect
              <div
                className="absolute -bottom-2 left-0 w-12 h-0.5 rounded-full"
                style={{ background: brandGradient }}
              />
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, idx) => (
                <li key={idx}>
                  <a
                    href={info.href || "#"}
                    className="group flex items-center gap-3 transition-colors duration-300 w-fit"
                  >
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all shadow-sm flex-shrink-0">
                      <info.icon className="w-4 h-4 text-teal-400 transition-transform group-hover:scale-110" />
                    </div>
                    <span
                      className="text-sm font-semibold bg-clip-text text-transparent opacity-85 group-hover:opacity-100"
                      style={gradientTextStyle}
                    >
                      {info.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links Icons Grid */}
            <div className="mt-8 flex gap-3.5">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} className="group relative" aria-label={social.label}>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1.5 border border-white/10 group-hover:border-white/20 shadow-sm overflow-hidden relative">
                    <social.icon className="w-4 h-4 text-teal-400 group-hover:text-gray-900 z-10 transition-colors duration-300" />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: brandGradient }}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

    {/* Bottom Bar Segment */}
<div className="mt-8 pt-6 border-t border-white/10">
  <div className="flex flex-nowrap items-center justify-between gap-8">

    {/* Copyright */}
    <div className="flex items-center gap-2 whitespace-nowrap">
      {/* <Heart
        className="w-4 h-4 animate-pulse text-teal-400"
        fill="currentColor"
      /> */}
      <p
        className="text-xs font-bold uppercase tracking-wider bg-clip-text text-transparent"
        style={gradientTextStyle}
      >
        © {currentYear} Elemensis. All rights reserved.
      </p>
    </div>

    {/* Developer Info */}
    <div className="flex items-center gap-2 whitespace-nowrap text-sm text-teal-400">
      <span>Design & Developed by</span>

      <a
        href="https://i-diligence.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold uppercase tracking-wider hover:text-white transition-colors"
      >
        iDiligence Solution Pvt. Ltd.
      </a>

      <span className="text-gray-500">|</span>

      <span>Version 1.0.0</span>

      <span className="text-gray-500">|</span>

      <span>Updated June 2026</span>
    </div>

    {/* Footer Links */}
    <div className="flex items-center gap-6 whitespace-nowrap text-[11px] font-extrabold uppercase tracking-widest">
      <Link href="/privacy" className="relative group">
        <span style={gradientTextStyle}>Privacy</span>
        <span
          className="absolute bottom-0 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          style={{ background: brandGradient }}
        />
      </Link>

      <Link href="/terms" className="relative group">
        <span style={gradientTextStyle}>Terms</span>
        <span
          className="absolute bottom-0 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          style={{ background: brandGradient }}
        />
      </Link>
    </div>

  </div>
</div>
      </div>

      {/* Floating Back to Top Trigger Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#141414] shadow-2xl border border-white/10 transition-all duration-300 flex items-center justify-center group active:scale-95 overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: brandGradient }}
            />
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform duration-300 text-white group-hover:text-gray-900 z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes diagonalMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -620; }
        }
        @keyframes subtleNodePulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.4); opacity: 0.7; }
        }
        .animate-diagonal-flow-fast {
          animation: diagonalMove 16s linear infinite;
        }
        .animate-diagonal-flow-normal {
          animation: diagonalMove 26s linear infinite;
        }
        .animate-diagonal-flow-slow {
          animation: diagonalMove 42s linear infinite;
        }
        .animate-node-pulse-fast {
          animation: subtleNodePulse 4s ease-in-out infinite;
          transform-origin: center;
        }
        .animate-node-pulse-normal {
          animation: subtleNodePulse 6s ease-in-out infinite;
          transform-origin: center;
        }
        .animate-node-pulse-slow {
          animation: subtleNodePulse 9s ease-in-out infinite;
          transform-origin: center;
        }
        .group:hover .field-dot {
          background: ${brandGradient};
        }
      `}</style>
    </footer>
  );
}