"use client";

import Image from "next/image";



const markets = [
  {
    title: "GCC",
    image: "/Images/country/GCC.png",
    description:
      "Exporting premium products across UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain.",
    stats: "6 Countries",
  },
  {
    title: "Europe",
    image: "/Images/country/Europe.png",
    description:
      "Supplying quality products to growing markets across major European countries.",
    stats: "15+ Countries",
  },
  {
    title: "Asia",
    image: "/Images/country/Asia.png",
    description:
      "Serving key Asian markets through reliable sourcing and logistics support.",
    stats: "20+ Countries",
  },
];

export default function ExportMarkets() {
  return (
    <>
  <div className=" bg-white">

  
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-0">
      {/* Heading */}

      <div className="mb-14 text-center">
        {/* <span className="rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] px-4 py-1.5 text-sm font-semibold text-white shadow-md">
          Global Trade
        </span> */}

        <h2 className="mt-5 text-4xl font-bold text-[#096F72] md:text-5xl">
          Our{" "}
          <span className="relative inline-block pb-2">
            <span className="bg-[#096F72] bg-clip-text text-transparent">
              Export Markets
            </span>

            <svg
              className="absolute bottom-0 left-0 w-full"
              height="8"
              viewBox="0 0 200 8"
              fill="none"
            >
              <path
                d="M0 4 Q 50 8 100 4 Q 150 0 200 4"
                stroke="#064D50"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[#096F72]/80 font-bold line-clamp-4">
          Our extensive international network connects trusted suppliers,
          distributors, and business partners across key global markets.
          With a strong presence in the GCC, Asia, Europe, and emerging
          regions, we ensure seamless trade operations and reliable logistics.
        </p>
      </div>

      {/* Markets */}
      <div className="grid md:grid-cols-3 gap-8">
        {markets.map((market) => (
          <div
            key={market.title}
            className="group relative h-[350px] overflow-hidden rounded-3xl shadow-xl cursor-pointer"
          >
            <Image
              src={market.image}
              alt={market.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-4 py-1 text-xs font-semibold text-white mb-3">
                {market.stats}
              </span>

              <h3 className="text-4xl font-bold text-white mb-2">
                {market.title}
              </h3>

              <p className="text-white/80 text-sm max-w-xs">
                {market.description}
              </p>
            </div>

            {/* Hover Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
        {[
          { value: "25+", label: "Countries Served" },
          { value: "100+", label: "Global Clients" },
          { value: "24/7", label: "Support" },
          { value: "100%", label: "Quality Focus" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-md"
          >
            <h3 className="text-3xl font-bold bg-[#064D50] bg-clip-text text-transparent">
              {item.value}
            </h3>

            <p className="text-[#096F72]/70 mt-2 text-sm font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </section> </div> </>
  );
}
