import React from "react";
import Image from "next/image";

export const Flag = () => {
  const flags = [
    { name: "India", image: "/Images/country/India.webp" },
    // { name: "Pakistan", image: "/Images/country/Pakistan.webp" },
    { name: "UAE", image: "/Images/country/United_Arab_Emirates.png" },
    { name: "Egypt", image: "/Images/country/Egypt.png" },
  ];

  return (
    <section className="bg-[#064D50] px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center ">
          {/* <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white shadow-md backdrop-blur-sm">
            Global Connections
          </span> */}

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Our{" "}
            <span className="relative inline-block pb-2">
              Network
              <svg
                className="absolute bottom-0 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M0 4 Q 50 8 100 4 Q 150 0 200 4"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/90">
            With a strong presence in India, Pakistan, UAE, and Egypt, our
            network supports efficient international trade, reliable supply
            chains, and seamless delivery solutions, connecting businesses
            across strategic global markets.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3 ">
          {flags.map((flag) => (
            <div
              key={flag.name}
              className="group overflow-hidden rounded-2xl border border-white/20 bg-white/95 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-40 overflow-hidden ">
                <Image
                  src={flag.image}
                  alt={flag.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="py-4 text-center">
                <h3 className="font-semibold text-slate-800">{flag.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};