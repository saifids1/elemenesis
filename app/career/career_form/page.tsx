"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Handshake, BriefcaseBusiness } from "lucide-react";

import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";
import { motion } from "framer-motion";
const CarrerForm = () => {
    const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };
  // Animation Variants
  const cubicBezierEase = [0.16, 1, 0.3, 1] as any;

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicBezierEase },
    },
  };
  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        {/* Section 1: Hero - Gradient */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 py-24 text-[#ECE9E2]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#096F72] to-[#096F72]">
            {/* <img
              src="/Images/about_us/about01.png"
              alt="About Us"
              className="w-full h-full object-cover object-center"
            /> */}
          </div>

          {/* Dark Green Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D231D]/70 via-[#0D231D]/55 to-[#0D231D]/65" />

          {/* Additional Dark Layer */}
          <div className="absolute inset-0 z-10 bg-black/30" />

          {/* Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-20 mx-auto max-w-5xl text-center"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={fadeIn}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md text-sm uppercase tracking-[3px] text-[#D4AF37]"
            >
              <Handshake className="w-4 h-4 text-white" />
              <span className="text-white font-semibold tracking-wide">
                  Join Our Team
              </span>
            </motion.nav>

            {/* Heading */}
            <motion.h1
              variants={fadeIn}
              className="mt-8 text-5xl font-light leading-tight tracking-tight md:text-7xl"
            >
              <span className=" text-white">Career</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="mx-auto mt-8 max-w-4xl text-base leading-[2] text-gray-200 md:text-lg"
            >
              Accelerate your professional journey where compliance meets global
              impact. Discover opportunities to manage complex supply chains,
              innovate with transparent trade technologies, and work in an
              environment that rewards accountability and teamwork.
            </motion.p>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-0 md:py-7">
          <div className="overflow-hidden ">
            <div className="grid md:grid-cols-2 items-center gap-10 p-8 md:p-14">
              {/* Image */}
              <div className="relative">
                <img
                  src="/Images/career/career01.png"
                  alt="Career Opportunities"
                  className="rounded-2xl  h-[520px] w-full object-cover"
                />

                <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-[#096F72]/20 via-transparent to-[#064D50]/20"></div>
              </div>

              {/* Content */}
              <div>
              <span className="inline-flex items-center rounded-full bg-[#096F72]/10 px-4 py-2 text-sm font-semibold text-[#064D50]">
                  Why Join Us
                </span>

               <h2 className="mt-5 text-4xl font-bold text-[#064D50] leading-tight">
  Grow Your Future
  <span className="block text-[#096F72]">With Elemensis</span>
</h2>
<p className="mt-6 text-lg leading-8 text-[#096F72]/70">
                  Elemensis’ success is driven by passionate people who are
                  committed to excellence, innovation, and customer
                  satisfaction. Join a team where your ideas are valued, your
                  growth is supported, and your contributions make a meaningful
                  impact.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="rounded-xl bg-[#096F72]/5 px-5 py-4 border border-[#096F72]/10">
                <h4 className="font-semibold text-[#064D50]">
                      Career Growth
                    </h4>
                    <p className="text-sm text-[#096F72]/70 mt-1">
                      Learn, develop, and advance professionally.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#096F72]/5 px-5 py-4 border border-[#096F72]/10">
                <h4 className="font-semibold text-[#064D50]">
                      Global Exposure
                    </h4>
                    <p className="text-sm text-[#096F72]/70 mt-1">
                      Work with international markets and industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            {/* Form Box */}
            <div className="rounded-2xl bg-white p-7 shadow-lg md:p-8 lg:p-10">
              <div className="mb-6 flex items-center gap-2">
                <BriefcaseBusiness className="h-5 w-5 text-[#096F72]" />
                <h5 className="text-sm font-semibold uppercase tracking-wide text-[#096F72]">
                  Career Application
                </h5>
              </div>

             <h2 className="mb-4 text-3xl font-bold leading-tight text-[#096F72] md:text-4xl lg:text-5xl">
  Apply For A <span className="text-[#064D50]">Position</span>
</h2>

           <p className="mb-8 text-base leading-relaxed text-[#096F72]/70">
                Take the next step in your career and join our mission to build
                a smarter, cleaner energy future.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#096F72] focus:outline-none focus:ring-2 focus:ring-[#096F72]/20 transition-all duration-200"
                    required
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#096F72] focus:outline-none focus:ring-2 focus:ring-[#096F72]/20 transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#096F72] focus:outline-none focus:ring-2 focus:ring-[#096F72]/20 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                      Current Location
                    </label>
                    <input
                      type="text"
                      placeholder="City, State/Province"
                      className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#096F72] focus:outline-none focus:ring-2 focus:ring-[#096F72]/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                      Position Applied For{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 focus:border-[#096F72] focus:outline-none focus:ring-2 focus:ring-[#096F72]/20 transition-all duration-200">
                      <option value="">Select a position</option>
                      <option value="software-engineer">
                        Software Engineer
                      </option>
                      <option value="product-manager">Product Manager</option>
                      <option value="data-scientist">Data Scientist</option>
                      <option value="ux-designer">UX Designer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                    Upload Resume <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-all duration-200">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PDF, DOC, DOCX (Max. 5MB)
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                    Cover Letter
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    className="w-full resize-y rounded-lg border border-gray-300 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:border-[#096F72] focus:outline-none focus:ring-2 focus:ring-[#096F72]/20 transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                 className="w-full rounded-lg bg-[#064D50] px-8 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#096F72] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#096F72] focus:ring-offset-2"
                >
                  Submit Application
                </button>

                <p className="text-center text-xs text-gray-500">
                  By submitting this application, you agree to our{" "}
              <a href="#" className="text-[#096F72] hover:text-[#064D50] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>

            {/* Image + Contact Info */}
            <div className="relative overflow-hidden rounded-2xl bg-[#064D50] shadow-xl">
              <img
                src="/Images/career/career02.png"
                alt="Join our team - Career opportunities"
                className="absolute inset-0 h-full w-full object-cover "
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CarrerForm;
