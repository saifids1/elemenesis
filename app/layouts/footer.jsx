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

  // UPDATED: The New Elemensis Brand Gradient
  const gradient = "linear-gradient(90deg, #00CCAA, #00B9CC)";

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

  // UPDATED: Unified Brand Colors
  const contactInfo = [
    { icon: MapPin, text: "Dubai, United Arab Emirates", color: "#00CCAA" },
    { icon: Phone, text: "+971 4 123 4567", color: "#00B9CC", href: "tel:+97141234567" },
    { icon: Mail, text: "info@elemensisllc.com", color: "#00CCAA", href: "mailto:info@elemensisllc.com" },
    { icon: Clock, text: "24/7 Customer Support", color: "#00B9CC" },
  ];

  const socialLinks = [
    { icon: Users, href: "#", label: "Facebook" },
    { icon: X, href: "#", label: "Twitter" },
    { icon: UserPlus, href: "#", label: "LinkedIn" },
    { icon: Camera, href: "#", label: "Instagram" },
  ];

  const certifications = [
    { icon: Shield, text: "ISO Certified", color: "#00CCAA" },
    { icon: Award, text: "Quality Assured", color: "#00B9CC" },
    { icon: Leaf, text: "Eco-Friendly", color: "#00CCAA" },
  ];

  return (
   
    <footer className="relative bg-white">
       <TrendyDivider/>
      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#00CCAA]/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00B9CC]/5 blur-[120px] rounded-full" />

      <div className="relative container mx-auto px-6 max-w-7xl p-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="relative">
                <div className="w-3.5 h-3.5 rounded-full" style={{ background: gradient }} />
                <div className="absolute inset-0 w-3.5 h-3.5 rounded-full blur-md opacity-80 animate-pulse" style={{ background: gradient }} />
              </div>
              <span className="text-xl font-black tracking-[0.2em] text-gray-900">
                ELEMENSIS
              </span>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
              Your trusted global partner for premium products and exceptional service across B2B & B2C markets worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-1.5 group">
                  <cert.icon className="w-4 h-4 transition-transform group-hover:scale-110" style={{ color: cert.color }} />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-600 transition-colors">
                    {cert.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-gray-900 font-black text-sm uppercase tracking-widest mb-6 relative inline-block">
              Navigation
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-500 hover:text-[#00CCAA] transition-all duration-300 text-sm font-medium"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <ChevronRight className={`w-4 h-4 transition-all duration-300 ${hoveredLink === link.name ? "translate-x-1 opacity-100" : "opacity-40"}`} style={{ color: "#00CCAA" }} />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions Column */}
          <div>
            <h3 className="text-gray-900 font-black text-sm uppercase tracking-widest mb-6 relative inline-block">
              Divisions
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] rounded-full" />
            </h3>
            <ul className="space-y-3">
              {ourDivisions.map((division, idx) => (
                <li key={idx}>
                  <Link
                    href={division.href}
                    className="group flex items-center gap-2 text-gray-500 hover:text-[#00CCAA] transition-all duration-300 text-sm font-medium"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-[#00CCAA] group-hover:scale-150 transition-all duration-300" />
                    <span>{division.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-gray-900 font-black text-sm uppercase tracking-widest mb-6 relative inline-block">
              Connect
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] rounded-full" />
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, idx) => (
                <li key={idx}>
                  <a
                    href={info.href || "#"}
                    className="group flex items-start gap-3 text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  >
                    <div className="p-2 rounded-lg bg-white shadow-sm border border-gray-100 group-hover:border-[#00CCAA]/30 transition-all">
                      <info.icon className="w-4 h-4 transition-transform group-hover:scale-110" style={{ color: info.color }} />
                    </div>
                    <span className="text-sm pt-1 font-medium">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} className="group relative">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 shadow-sm border border-gray-100 group-hover:border-[#00CCAA]">
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-[#00CCAA] transition-colors" />
                  </div>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-md bg-[#00CCAA]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#00CCAA] animate-pulse" fill="#00CCAA" />
              <p className="text-gray-400 text-xs font-bold uppercase tracking-tighter">
                © {currentYear} Elemensis. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <Link href="/privacy" className="hover:text-[#00CCAA] transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-[#00CCAA] transition-colors">Terms</Link>
              <div className="flex items-center gap-1.5 bg-[#00CCAA]/5 px-3 py-1 rounded-full border border-[#00CCAA]/10">
                <Globe className="w-3 h-3 text-[#00CCAA]" />
                <span className="text-[#00A388]">Global Network</span>
              </div>
            </div>

            <div className="flex items-center gap-2 opacity-60">
              <Truck className="w-4 h-4 text-[#00CCAA]" />
              <span className="text-gray-500 text-[10px] font-bold uppercase">Worldwide Shipping</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white shadow-[0_8px_30px_rgb(0,204,170,0.3)] hover:shadow-[0_8px_30px_rgb(0,204,170,0.5)] transition-all duration-300 flex items-center justify-center group"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}