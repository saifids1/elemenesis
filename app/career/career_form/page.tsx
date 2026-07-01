"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Handshake, BriefcaseBusiness, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

import Footer from "../../layouts/footer";
import Navbar from "../../layouts/navbar";

const CarrerForm = () => {
  // Animation Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cubicBezierEase = [0.16, 1, 0.3, 1] as any;

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicBezierEase },
    },
  };

  // ============================================
  // STATE MANAGEMENT
  // ============================================
  
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    position: "",
    cover_letter: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [resumeName, setResumeName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
    errors?: Record<string, string>;
  }>({
    type: null,
    message: "",
  });

  // ============================================
  // HANDLERS
  // ============================================
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (submitStatus.errors?.[name]) {
      setSubmitStatus((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: "" },
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setResume(file);
      setResumeName(file.name);
      // Clear resume error
      if (submitStatus.errors?.resume) {
        setSubmitStatus((prev) => ({
          ...prev,
          errors: { ...prev.errors, resume: "" },
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setSubmitStatus({ type: null, message: "", errors: {} });
    setIsSubmitting(true);

    // Prepare FormData for file upload
    const formDataToSend = new FormData();
    
    // Add all form fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        formDataToSend.append(key, value);
      }
    });
    
    // Add resume file
    if (resume) {
      formDataToSend.append("resume", resume);
    }

    try {
      // Update this URL to match your PHP file location
      const response = await fetch("/api/submit-application.php", {
        method: "POST",
        body: formDataToSend,
        // Don't set Content-Type header - browser will set it with boundary for FormData
      });

      const result = await response.json();

      if (result.success) {
        // Success!
        setSubmitStatus({
          type: "success",
          message: result.message || "Application submitted successfully! We'll contact you soon.",
        });
        
        // Reset form
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          location: "",
          position: "",
          cover_letter: "",
        });
        setResume(null);
        setResumeName("");
        
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Validation or server error
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to submit application.",
          errors: result.errors || {},
        });
        
        // If there are field errors, scroll to the first error field
        if (result.errors) {
          const firstErrorField = Object.keys(result.errors)[0];
          const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
          if (errorElement) {
            errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
            (errorElement as HTMLElement).focus();
          }
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ============================================
  // RENDER
  // ============================================
  
  return (
    <>
      <Navbar />
      <main className="bg-white overflow-x-hidden">
        {/* Section 1: Hero - Same as before */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-6 py-24 text-[#ECE9E2]">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#096F72] to-[#096F72]" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D231D]/70 via-[#0D231D]/55 to-[#0D231D]/65" />
          <div className="absolute inset-0 z-10 bg-black/30" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-20 mx-auto max-w-5xl text-center"
          >
            <motion.nav
              variants={fadeIn}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md text-sm uppercase tracking-[3px] text-[#D4AF37]"
            >
              <Handshake className="w-4 h-4 text-white" />
              <span className="text-white font-semibold tracking-wide">
                Join Our Team
              </span>
            </motion.nav>

            <motion.h1
              variants={fadeIn}
              className="mt-8 text-5xl font-light leading-tight tracking-tight md:text-7xl"
            >
              <span className="text-white">Career</span>
            </motion.h1>

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

        {/* Section 2: Why Join Us - Same as before */}
        <section className="max-w-7xl mx-auto px-6 py-0 md:py-7">
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-2 items-center gap-10 p-8 md:p-14">
              <div className="relative">
                <img
                  src="/Images/career/career01.png"
                  alt="Career Opportunities"
                  className="rounded-2xl h-[520px] w-full object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-[#096F72]/20 via-transparent to-[#064D50]/20" />
              </div>

              <div>
                <span className="inline-flex items-center rounded-full bg-[#096F72]/10 px-4 py-2 text-sm font-semibold text-[#064D50]">
                  Why Join Us
                </span>
                <h2 className="mt-5 text-4xl font-bold text-[#064D50] leading-tight">
                  Grow Your Future
                  <span className="block text-[#096F72]">With Elemensis</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#096F72]/70">
                  Elemensis&apos; success is driven by passionate people who are
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

        {/* Section 3: Application Form - UPDATED */}
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

              {/* ============================================ */}
              {/* STATUS MESSAGES - NEW */}
              {/* ============================================ */}
              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-medium">{submitStatus.message}</p>
                    {submitStatus.errors && (
                      <ul className="mt-2 list-disc list-inside text-sm">
                        {Object.entries(submitStatus.errors).map(([field, error]) => (
                          <li key={field}>{error}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              {/* ============================================ */}
              {/* FORM - UPDATED WITH NAME ATTRIBUTES AND HANDLERS */}
              {/* ============================================ */}
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`w-full rounded-lg border ${
                      submitStatus.errors?.full_name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-[#096F72] focus:ring-[#096F72]"
                    } bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200`}
                    required
                    disabled={isSubmitting}
                  />
                  {submitStatus.errors?.full_name && (
                    <p className="mt-1 text-sm text-red-600">{submitStatus.errors.full_name}</p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className={`w-full rounded-lg border ${
                        submitStatus.errors?.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-[#096F72] focus:ring-[#096F72]"
                      } bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200`}
                      required
                      disabled={isSubmitting}
                    />
                    {submitStatus.errors?.email && (
                      <p className="mt-1 text-sm text-red-600">{submitStatus.errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full rounded-lg border ${
                        submitStatus.errors?.phone
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-[#096F72] focus:ring-[#096F72]"
                      } bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200`}
                      required
                      disabled={isSubmitting}
                    />
                    {submitStatus.errors?.phone && (
                      <p className="mt-1 text-sm text-red-600">{submitStatus.errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Location and Position */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                      Current Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, State/Province"
                      className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#096F72] focus:outline-none focus:ring-2 focus:ring-[#096F72]/20 transition-all duration-200"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                      Position Applied For <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border ${
                        submitStatus.errors?.position
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-[#096F72] focus:ring-[#096F72]"
                      } bg-white px-5 py-3 text-gray-900 focus:outline-none focus:ring-2 transition-all duration-200`}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">Select a position</option>
                      <option value="Software Engineer">Software Engineer</option>
                      <option value="Product Manager">Product Manager</option>
                      <option value="Data Scientist">Data Scientist</option>
                      <option value="UX Designer">UX Designer</option>
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="Business Analyst">Business Analyst</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Quality Assurance">Quality Assurance</option>
                    </select>
                    {submitStatus.errors?.position && (
                      <p className="mt-1 text-sm text-red-600">{submitStatus.errors.position}</p>
                    )}
                  </div>
                </div>

                {/* Resume Upload - UPDATED */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                    Upload Resume <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      className={`flex flex-col items-center justify-center w-full rounded-lg border-2 border-dashed ${
                        submitStatus.errors?.resume
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                      } cursor-pointer transition-all duration-200 ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
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
                          {resumeName ? (
                            <span className="text-green-600 font-medium">{resumeName}</span>
                          ) : (
                            "PDF, DOC, DOCX (Max. 5MB)"
                          )}
                        </p>
                      </div>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        required={!resume}
                        disabled={isSubmitting}
                      />
                    </label>
                  </div>
                  {submitStatus.errors?.resume && (
                    <p className="mt-1 text-sm text-red-600">{submitStatus.errors.resume}</p>
                  )}
                  {resume && (
                    <p className="mt-2 text-sm text-green-600">
                      ✓ File ready: {resume.name} ({(resume.size / 1024).toFixed(1)} KB)
                    </p>
                  )}
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#096F72]">
                    Cover Letter
                  </label>
                  <textarea
                    name="cover_letter"
                    value={formData.cover_letter}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    className="w-full resize-y rounded-lg border border-gray-300 bg-white px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:border-[#096F72] focus:outline-none focus:ring-2 focus:ring-[#096F72]/20 transition-all duration-200"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button - UPDATED */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-[#064D50] px-8 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#096F72] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#096F72] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
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
                className="absolute inset-0 h-full w-full object-cover"
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