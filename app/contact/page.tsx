"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import Footer from "../layouts/footer";
import Navbar from "../layouts/navbar";

// Framer Motion Variant Engine for Fluid Floating Ecosystem
const floatAnimation = (
  duration: number,
  delay: number,
  xDelta: number,
  yDelta: number,
) => ({
  animate: {
    x: [0, xDelta, -xDelta, xDelta / 2, 0],
    y: [0, yDelta, -yDelta, yDelta / 2, 0],
    scale: [1, 1.15, 0.9, 1.05, 1],
    transition: {
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut" as any,
    },
  },
});

const cubicBezierEase = [0.16, 1, 0.3, 1] as any;

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      // ✅ Send to PHP endpoint
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || "Failed to send message");
      }

      setStatus("success");
      setStatusMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  return (
    <>
      <Navbar />
      {/* LUMINOUS LIGHT MESH BACKGROUND */}
      <div className="min-h-screen bg-[#FAF8F5] text-[#1E1E1E] font-sans antialiased selection:bg-[#00cba9] selection:text-white relative overflow-hidden">
        {/* HYPER-PREMIUM CINEMATIC SVG NODE CONSTELLATION LAYER */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.45] select-none">
          <svg
            className="w-full h-full min-w-[1440px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                id="link-grad-1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#00cba9" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient
                id="link-grad-2"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0D231D" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#00cba9" stopOpacity="0.02" />
              </linearGradient>
              <radialGradient id="node-glow-teal" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00cba9" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00cba9" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="node-glow-gold" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Dynamic Kinetic Background Waves */}
            <motion.path
              d="M -100,200 Q 300,50 800,350 T 1600,100 L 1600,900 L -100,900 Z"
              fill="url(#link-grad-1)"
              animate={{
                d: [
                  "M -100,200 Q 300,50 800,350 T 1600,100 L 1600,900 L -100,900 Z",
                  "M -100,250 Q 400,150 700,250 T 1600,200 L 1600,900 L -100,900 Z",
                  "M -100,200 Q 300,50 800,350 T 1600,100 L 1600,900 L -100,900 Z",
                ],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M -100,600 Q 400,800 900,500 T 1600,700 L 1600,900 L -100,900 Z"
              fill="url(#link-grad-2)"
              animate={{
                d: [
                  "M -100,600 Q 400,800 900,500 T 1600,700 L 1600,900 L -100,900 Z",
                  "M -100,520 Q 300,650 1000,580 T 1600,620 L 1600,900 L -100,900 Z",
                  "M -100,600 Q 400,800 900,500 T 1600,700 L 1600,900 L -100,900 Z",
                ],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Micro Structural Linking Lines */}
            <line
              x1="150"
              y1="200"
              x2="350"
              y2="450"
              stroke="#00cba9"
              strokeOpacity="0.08"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <line
              x1="350"
              y1="450"
              x2="750"
              y2="250"
              stroke="#0D231D"
              strokeOpacity="0.06"
              strokeWidth="1"
            />
            <line
              x1="750"
              y1="250"
              x2="1100"
              y2="600"
              stroke="#D4AF37"
              strokeOpacity="0.08"
              strokeWidth="1.5"
              strokeDasharray="6 3"
            />
            <line
              x1="1100"
              y1="600"
              x2="1300"
              y2="300"
              stroke="#00cba9"
              strokeOpacity="0.05"
              strokeWidth="1"
            />
            <line
              x1="350"
              y1="450"
              x2="200"
              y2="750"
              stroke="#D4AF37"
              strokeOpacity="0.05"
              strokeWidth="1"
            />

            {/* Kinetic Floating Node Cluster 1 */}
            <g>
              <motion.circle
                cx="150"
                cy="200"
                r="40"
                fill="url(#node-glow-teal)"
                {...floatAnimation(16, 0, 30, -40)}
              />
              <motion.circle
                cx="150"
                cy="200"
                r="3"
                fill="#00cba9"
                {...floatAnimation(16, 0, 30, -40)}
              />
            </g>

            {/* Kinetic Floating Node Cluster 2 */}
            <g>
              <motion.circle
                cx="350"
                cy="450"
                r="60"
                fill="url(#node-glow-gold)"
                {...floatAnimation(22, 2, -45, 35)}
              />
              <motion.circle
                cx="350"
                cy="450"
                r="4.5"
                fill="#D4AF37"
                {...floatAnimation(22, 2, -45, 35)}
              />
            </g>

            {/* Kinetic Floating Node Cluster 3 */}
            <g>
              <motion.circle
                cx="750"
                cy="250"
                r="50"
                fill="url(#node-glow-teal)"
                {...floatAnimation(19, 4, 50, 25)}
              />
              <motion.circle
                cx="750"
                cy="250"
                r="3.5"
                fill="#00cba9"
                {...floatAnimation(19, 4, 50, 25)}
              />
            </g>

            {/* Kinetic Floating Node Cluster 4 */}
            <g>
              <motion.circle
                cx="1100"
                cy="600"
                r="70"
                fill="url(#node-glow-teal)"
                {...floatAnimation(25, 1, -25, -60)}
              />
              <motion.circle
                cx="1100"
                cy="600"
                r="4"
                fill="#0D231D"
                stroke="#00cba9"
                strokeWidth="1"
                {...floatAnimation(25, 1, -25, -60)}
              />
            </g>

            {/* Kinetic Floating Node Cluster 5 */}
            <g>
              <motion.circle
                cx="1300"
                cy="300"
                r="45"
                fill="url(#node-glow-gold)"
                {...floatAnimation(17, 3, 40, -20)}
              />
              <motion.circle
                cx="1300"
                cy="300"
                r="3"
                fill="#D4AF37"
                {...floatAnimation(17, 3, 40, -20)}
              />
            </g>

            {/* Kinetic Floating Node Cluster 6 */}
            <g>
              <motion.circle
                cx="200"
                cy="750"
                r="55"
                fill="url(#node-glow-teal)"
                {...floatAnimation(21, 5, -30, -35)}
              />
              <motion.circle
                cx="200"
                cy="750"
                r="3"
                fill="#00cba9"
                {...floatAnimation(21, 5, -30, -35)}
              />
            </g>
          </svg>
        </div>

        {/* Luminous Organic Accent Orbs (Light Mode Gradient Engine) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70">
          <div className="absolute top-[-10%] left-[-10%] w-[65vw] h-[65vw] rounded-full bg-gradient-to-tr from-[#00cba9]/12 to-[#00BCD4]/5 blur-[120px] animate-[pulse_9s_ease-in-out_infinite]" />
          <div className="absolute bottom-[5%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-[#00cba9]/5 blur-[140px] animate-[pulse_12s_ease-in-out_infinite_1s]" />
          <div className="absolute top-[30%] right-[15%] w-[40vw] h-[40vw] rounded-full bg-[#00cba9]/6 blur-[100px] animate-[pulse_15s_ease-in-out_infinite_2s]" />
        </div>

        {/* 1. CUSTOM BREADCRUMB & HERO SECTION */}
        <section className="relative h-[65vh] flex flex-col justify-center items-center overflow-hidden bg-[#0D231D] text-[#ECE9E2] px-6">
          {/* Subtle Background Texture Layer */}
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity transform scale-105 animate-[pulse_8s_ease-in-out_infinite]">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('/Images/contact.jpeg')`,
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D231D] via-transparent to-transparent z-10" />

          {/* Interactive Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-20 text-center max-w-4xl px-4"
          >
            {/* Custom Floating Breadcrumb */}
            <motion.nav
              variants={fadeIn}
              className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8 text-sm tracking-widest text-[#D4AF37] uppercase shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            >
              <span className="text-[#00CCAA]">Home</span>
              <span className="text-white/30">•</span>
              <Leaf className="w-3.5 h-3.5 text-[#00cba9] " />
              <span className="text-white/30">•</span>
              <span className="text-white">Contact Us</span>
            </motion.nav>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl  font-light tracking-tight text-[#ECE9E2] leading-tight"
            >
              Contact{" "}
              <span className=" bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                Elemensis
              </span>
            </motion.h1>
          </motion.div>
        </section>

        {/* 2. CORE WORKSPACE & FORM CONTAINER */}
        <div className="max-w-6xl mx-auto py-24 px-6 relative z-10">
          {/* Multi-Layered Premium Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-gradient-to-br from-white/95 via-[#FDFDFD]/90 to-[#FAF8F2]/80 backdrop-blur-xl p-8 md:p-14 rounded-[36px] border border-white/80 shadow-[0_35px_70px_-15px_rgba(13,35,29,0.07),0_15px_30px_-10px_rgba(0,203,169,0.03),inset_0_1px_2px_rgba(255,255,255,0.9)] mb-16"
          >
            {/* Column 1: Contact Metrics (Editorial Style) */}
            <motion.div
              variants={fadeIn}
              className="lg:col-span-5 flex flex-col justify-between space-y-12"
            >
              <div className="space-y-10">
                <div>
                  <div className="flex items-center space-x-2 text-[#00cba9] mb-4">
                    {/* <span className="h-[1px] w-8 bg-[#00cba9]"></span> */}
                    <span className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-bold shadow-lg shadow-teal-200/50">
                      Connect
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-5 text-gray-900 transition-all duration-700 delay-200 ">
                    Let's start a <br />
                    <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
                      conversation
                    </span>
                  </h2>

                  {/* <h2 className="text-4xl font-serif font-medium text-[#0D231D] tracking-tight leading-tight">
                    Let's start a <br /><span className="italic text-[#00cba9]">conversation</span>
                  </h2> */}
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="mt-1 p-3.5 bg-[#0D231D]/5 text-[#0D231D] group-hover:bg-[#0D231D] group-hover:text-[#00cba9] group-hover:shadow-[0_12px_24px_rgba(13,35,29,0.12)] rounded-2xl transition-all duration-500 ease-out border border-neutral-200/10">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                        Our Office
                      </h3>
                      <p className="mt-1.5 text-neutral-700 font-medium leading-relaxed group-hover:text-neutral-900 transition-colors duration-300">
                        Office No-215, Frij All Murar
                        <br />
                        Deira, DUBAI (UAE)
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="mt-1 p-3.5 bg-[#0D231D]/5 text-[#0D231D] group-hover:bg-[#0D231D] group-hover:text-[#00cba9] group-hover:shadow-[0_12px_24px_rgba(13,35,29,0.12)] rounded-2xl transition-all duration-500 ease-out border border-neutral-200/10">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                        Call Us
                      </h3>
                      <a
                        href="tel:+971543471546"
                        className="mt-1.5 text-neutral-800 font-bold block hover:text-[#00cba9] transition-colors duration-300 text-lg tracking-tight"
                      >
                        +971 54 347 1546
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="mt-1 p-3.5 bg-[#0D231D]/5 text-[#0D231D] group-hover:bg-[#0D231D] group-hover:text-[#00cba9] group-hover:shadow-[0_12px_24px_rgba(13,35,29,0.12)] rounded-2xl transition-all duration-500 ease-out border border-neutral-200/10">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                        Email Us
                      </h3>
                      <a
                        href="mailto:info@elemensisllc.com"
                        className="mt-1.5 text-neutral-800 font-bold block hover:text-[#00cba9] transition-colors duration-300 text-lg tracking-tight"
                      >
                        info@elemensisllc.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Inner-Shadow Styled Note Banner */}
              <div className="p-6 bg-gradient-to-tr from-[#FAF8F5] to-[#F3F0E6] rounded-2xl border border-neutral-200/50 text-xs text-neutral-500 leading-relaxed font-medium shadow-[inset_0_2px_4px_rgba(0,0,0,0.015)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#00cba9]/10 rounded-bl-full transform translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[#0D231D] font-bold block mb-1">
                  Corporate Operations:
                </span>
                Inquiries are parsed directly to our multi-sector fulfillment
                teams. Expect a strategic response within 24 business hours.
              </div>
            </motion.div>

            {/* Column 2: Minimalist Input Hub Container */}
         <motion.div
            variants={fadeIn}
            className="lg:col-span-7 bg-gradient-to-br from-[#FAF8F5]/90 to-[#F4F1E8]/70 p-6 md:p-10 rounded-2xl border border-neutral-200/50 shadow-[inset_0_1px_3px_rgba(0,0,0,0.02),0_10px_30px_-5px_rgba(0,0,0,0.01)]"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-neutral-400 uppercase tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-xl bg-white border border-neutral-200 text-neutral-800 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all duration-300 shadow-[0_2px_8px_rgba(13,35,29,0.01)] focus:shadow-[0_4px_16px_rgba(0,203,169,0.06)]"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-neutral-400 uppercase tracking-wider"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-xl bg-white border border-neutral-200 text-neutral-800 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all duration-300 shadow-[0_2px_8px_rgba(13,35,29,0.01)] focus:shadow-[0_4px_16px_rgba(0,203,169,0.06)]"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold text-neutral-400 uppercase tracking-wider"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-xl bg-white border border-neutral-200 text-neutral-800 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all duration-300 shadow-[0_2px_8px_rgba(13,35,29,0.01)] focus:shadow-[0_4px_16px_rgba(0,203,169,0.06)]"
                  placeholder="Enter the subject of your message"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-neutral-400 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-xl bg-white border border-neutral-200 text-neutral-800 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00cba9] focus:border-transparent transition-all duration-300 resize-none shadow-[0_2px_8px_rgba(13,35,29,0.01)] focus:shadow-[0_4px_16px_rgba(0,203,169,0.06)]"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
                  ✓ {statusMessage}
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                  ✗ {statusMessage}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="w-full bg-[#0D231D] hover:bg-[#00cba9] text-white hover:text-[#0D231D] font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_12px_24px_rgba(13,35,29,0.12)] hover:shadow-[0_12px_24px_rgba(0,203,169,0.15)] uppercase tracking-widest text-xs flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
          </motion.div>

          {/* 3. GEOLOCATION IFRAME COMPONENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: cubicBezierEase }}
            className="w-full rounded-[32px] overflow-hidden border border-neutral-200/60 bg-gradient-to-br from-white to-[#FAF8F5] p-2.5 shadow-[0_30px_60px_-15px_rgba(13,35,29,0.05),0_10px_20px_-10px_rgba(13,35,29,0.02)] h-[480px] relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3264.880955689064!2d55.30932!3d25.276946!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434d790d6db7%3A0x30d01ec17f895612!2sFrij%20Murar%2C%20Deira!5e1!3m2!1sen!2sus!4v1779456335771!5m2!1sen!2sus"
              className="w-full h-full rounded-[22px] border-0 opacity-95 contrast-[1.01] grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elemensis Location Matrix Hub"
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
