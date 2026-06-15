"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Handshake , BriefcaseBusiness } from "lucide-react";

import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";

const CarrerForm = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        {/* Section 1: Hero - Gradient */}
        <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-br from-[#00CCAA] via-[#00B9CC] to-[#0099FF]">
          {/* Background / Overlay should stay behind */}
          <div className="absolute inset-0 bg-black/30 z-0" />

          {/* Content */}
          <div className="relative z-10 container mx-auto max-w-7xl px-4 top-16">
            <div className="max-w-4xl mx-auto pt-30 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 transition-all duration-700">
                <Handshake  className="w-4 h-4 text-white" />
                <span className="text-white font-semibold tracking-wide">
                  Join Our Team
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all delay-200 duration-700">
                Career
              </h1>

              <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed transition-all delay-300 duration-700">
                Accelerate your professional journey where compliance meets
                global impact. Discover opportunities to manage complex supply
                chains, innovate with transparent trade technologies, and work
                in an environment that rewards accountability and teamwork.
              </p>
            </div>
          </div>
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

                <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-[#00CCAA]/20 via-transparent to-[#0099FF]/20"></div>
              </div>

              {/* Content */}
              <div>
                <span className="inline-flex items-center rounded-full bg-[#00B9CC]/10 px-4 py-2 text-sm font-semibold text-[#00B9CC]">
                  Why Join Us
                </span>

                <h2 className="mt-5 text-4xl font-bold text-slate-900 leading-tight">
                  Grow Your Future
                  <span className="block text-[#00B9CC]">With Elemensis</span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Elemensis’ success is driven by passionate people who are
                  committed to excellence, innovation, and customer
                  satisfaction. Join a team where your ideas are valued, your
                  growth is supported, and your contributions make a meaningful
                  impact.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="rounded-xl bg-slate-50 px-5 py-4 border border-slate-100">
                    <h4 className="font-semibold text-slate-900">
                      Career Growth
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Learn, develop, and advance professionally.
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 px-5 py-4 border border-slate-100">
                    <h4 className="font-semibold text-slate-900">
                      Global Exposure
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
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
                <BriefcaseBusiness className="h-5 w-5 text-[#00CCAA]" />
                <h5 className="text-sm font-semibold uppercase tracking-wide text-[#00CCAA]">
                  Career Application
                </h5>
              </div>

              <h2 className="mb-4 text-3xl font-bold leading-tight text-[#00CCAA]/70 md:text-4xl lg:text-5xl">
                Apply For A <span className="text-[#10b2b5]">Position</span>
              </h2>

              <p className="mb-8 text-base leading-relaxed text-gray-600">
                Take the next step in your career and join our mission to build
                a smarter, cleaner energy future.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#00CCAA]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                    required
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#00CCAA]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#00CCAA]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#00CCAA]">
                      Current Location
                    </label>
                    <input
                      type="text"
                      placeholder="City, State/Province"
                      className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#00CCAA]">
                      Position Applied For{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-200">
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
                  <label className="mb-2 block text-sm font-semibold text-[#00CCAA]">
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
                  <label className="mb-2 block text-sm font-semibold text-[#00CCAA]">
                    Cover Letter
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    className="w-full resize-y rounded-lg border border-gray-300 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all duration-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#10b2b5] px-8 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:from-teal-700 hover:to-teal-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Submit Application
                </button>

                <p className="text-center text-xs text-gray-500">
                  By submitting this application, you agree to our{" "}
                  <a href="#" className="text-teal-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>

            {/* Image + Contact Info */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 shadow-xl">
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
