"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { 
  MapPin, Phone, Mail, Clock, Globe, 
  Users, X, UserPlus, Instagram, 
  ChevronRight, Shield, Truck, Heart, 
  Award, Leaf, ArrowUp, Camera
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TrendyDivider from "../components/MagneticDivider";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const currentYear = new Date().getFullYear();

  // Unified Elemensis Brand Gradient Setup
  const brandGradient = "linear-gradient(135deg, rgb(0, 204, 170) 0%, rgb(0, 185, 204) 100%)";

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Divisions", href: "/divisions" },
    { name: "Export Market", href: "/export-market" },
    { name: "Global Network", href: "/global-network" },
    { name: "Contact", href: "/contact" },
  ];

  const ourDivisions = [
    { name: "Food Division", href: "/food-division" },
    { name: "Chemicals Division", href: "/chemical-products" },
    { name: "Ecommerce Division", href: "/zayb-syrup" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Dubai, United Arab Emirates" },
    { icon: Phone, text: "+971 4 123 4567", href: "tel:+97141234567" },
    { icon: Mail, text: "info@elemensisllc.com", href: "mailto:info@elemensisllc.com" },
    { icon: Clock, text: "24/7 Customer Support" },
  ];

  const socialLinks = [
    { icon: Users, href: "#", label: "Facebook" },
    { icon: X, href: "#", label: "Twitter" },
    { icon: UserPlus, href: "#", label: "LinkedIn" },
    { icon: Camera, href: "#", label: "Instagram" },
  ];

  const certifications = [
    { icon: Shield, text: "ISO Certified" },
    { icon: Award, text: "Quality Assured" },
    { icon: Leaf, text: "Eco-Friendly" },
  ];

  return (
    <footer 
      className="relative text-white overflow-hidden"
      style={{ background: brandGradient }}
    >
      <TrendyDivider />
      
      {/* Premium Constellation Grid SVG Background Animation Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <defs>
            {/* Soft grid system backdrop */}
            <pattern id="constellation-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              <circle cx="80" cy="0" r="1" fill="rgba(255, 255, 255, 0.4)" />
              <circle cx="0" cy="80" r="1" fill="rgba(255, 255, 255, 0.4)" />
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#constellation-grid)" />

          {/* Subtly pulse individual nodal clusters rhythmically */}
          <g fill="white" opacity="0.8">
            <circle cx="160" cy="80" r="2.5" className="animate-node-pulse-fast" />
            <circle cx="480" cy="240" r="3" className="animate-node-pulse-slow" />
            <circle cx="800" cy="160" r="2" className="animate-node-pulse-normal" />
            <circle cx="240" cy="400" r="3.5" className="animate-node-pulse-slow" />
            <circle cx="1120" cy="320" r="2.5" className="animate-node-pulse-fast" />
            <circle cx="640" cy="480" r="2" className="animate-node-pulse-normal" />
          </g>

          {/* Isometric diagonal scanning paths mapping across coordinates */}
          <g stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="15 140" fill="none" opacity="0.5">
            <line x1="-100" y1="-100" x2="1800" y2="1800" className="animate-diagonal-flow-slow" />
            <line x1="400" y1="-100" x2="2300" y2="1800" className="animate-diagonal-flow-fast" />
            <line x1="-500" y1="-100" x2="1400" y2="1800" className="animate-diagonal-flow-normal" />
          </g>
        </svg>
      </div>

      {/* Decorative Blur Contrast Accent Orbs */}
      <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />

      <div className="relative container mx-auto px-6 max-w-7xl pt-16 pb-8 z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-white shadow-md transform transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 w-4 h-4 rounded-full blur-sm bg-white/60 animate-ping pointer-events-none" />
              </div>
              <span className="text-2xl font-black tracking-[0.25em] text-white drop-shadow-sm">
                ELEMENSIS
              </span>
            </div>
            
            <p className="text-white/80 text-sm leading-relaxed mb-6 font-medium">
              Your trusted global partner for premium products and exceptional service across B2B & B2C markets worldwide.
            </p>

            <div className="flex flex-col gap-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2.5 group w-fit">
                  <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all">
                    <cert.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/90 transition-colors">
                    {cert.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-6 relative inline-block">
              Navigation
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/60 rounded-full" />
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 text-sm font-semibold"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <ChevronRight 
                      className={`w-4 h-4 transition-all duration-300 transform text-white ${
                        hoveredLink === link.name ? "translate-x-1 opacity-100 scale-110" : "opacity-50"
                      }`} 
                    />
                    <span className="relative">
                      {link.name}
                      <span className={`absolute bottom-0 left-0 w-full h-px bg-white transition-transform duration-300 origin-left ${hoveredLink === link.name ? "scale-x-100" : "scale-x-0"}`} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions Column */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-6 relative inline-block">
              Divisions
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/60 rounded-full" />
            </h3>
            <ul className="space-y-3.5">
              {ourDivisions.map((division, idx) => (
                <li key={idx}>
                  <Link
                    href={division.href}
                    className="group flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 text-sm font-semibold"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white group-hover:scale-150 transition-all duration-300" />
                    <span>{division.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-black text-sm uppercase tracking-widest mb-6 relative inline-block">
              Connect
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/60 rounded-full" />
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, idx) => (
                <li key={idx}>
                  <a
                    href={info.href || "#"}
                    className="group flex items-start gap-3 text-white/80 hover:text-white transition-colors duration-300"
                  >
                    <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-white/20 group-hover:border-white/30 transition-all shadow-sm">
                      <info.icon className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-sm pt-1.5 font-semibold leading-none">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links Icons Grid */}
            <div className="mt-8 flex gap-3.5">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} className="group relative" aria-label={social.label}>
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1.5 border border-white/10 group-hover:bg-white group-hover:border-white shadow-sm">
                    <social.icon className="w-4 h-4 text-white group-hover:text-cyan-600 transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md bg-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar Segment */}
        <div className="pt-8 border-t border-white/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-white animate-pulse" fill="white" />
              <p className="text-white/70 text-xs font-bold uppercase tracking-wider">
                © {currentYear} Elemensis. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-[11px] font-extrabold uppercase tracking-widest text-white/80">
              <Link href="/privacy" className="hover:text-white transition-colors relative group">
                Privacy
                <span className="absolute bottom-0 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors relative group">
                Terms
                <span className="absolute bottom-0 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-xs">
                <Globe className="w-3 h-3 text-white" />
                <span className="text-white text-[10px] font-bold tracking-widest uppercase">Global Network</span>
              </div>
            </div>

            <div className="flex items-center gap-2 opacity-90 bg-white/5 px-3 py-1.5 rounded-xl border border-white/5">
              <Truck className="w-4 h-4 text-white" />
              <span className="text-white text-[10px] font-black uppercase tracking-wider">Worldwide Shipping</span>
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
            className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-white text-cyan-600 shadow-xl border border-white/40 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group active:scale-95"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300 text-gray-900" />
          </motion.button>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes diagonalMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -620; }
        }
        @keyframes subtleNodePulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.4); opacity: 0.9; }
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
      `}</style>
    </footer>
  );
}