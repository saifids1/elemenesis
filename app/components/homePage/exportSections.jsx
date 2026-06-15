"use client";
import TrendyDivider from "../MagneticDivider";
import { Send } from "lucide-react";

export default function ExportSections() {
  return (
    <>
       <TrendyDivider/>
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#10b2b5] p-10 text-center text-white shadow-2xl md:p-16">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
          <Send size={28} />
        </div>

        <h2 className="text-3xl font-bold md:text-5xl">
          Looking for a Reliable Export Partner?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-cyan-50">
          Get premium quality goods delivered globally with trusted export
          support, safe packaging, and complete documentation assistance.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:info@elemensisllc.com"
            className="rounded-full bg-white px-8 py-4 font-semibold text-[#00B9CC] transition-colors duration-300  hover:bg-[#00CCAA] hover:text-white"
          >
            info@elemensisllc.com
          </a>

          <a
            href="tel:+971543471546"
            className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-[#00CCAA]"
          >
            +971 54 347 1546
          </a>
        </div>
      </div>
    </section>
    </>
  );
}