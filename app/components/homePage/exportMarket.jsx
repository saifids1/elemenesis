"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  TrendingUp,
  BarChart3,
  Package,
  Ship,
  Plane,
  Truck,
  ChevronRight,
  DollarSign,
  Shield,
  Clock,
  Target,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import TrendyDivider from "../MagneticDivider";

export default function ExportMarketPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const regions = [
    {
      name: "GCC",
      fullName: "Gulf Cooperation Council",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      icon: Globe,
      color: "#FF6B35",
      bgGradient: "from-orange-500 to-red-500",
      description:
        "Strategic hub for Middle East trade with strong logistics infrastructure and growing demand for quality products.",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"],
      stats: {
        markets: "6 Countries",
        growth: "+15% YoY",
        volume: "50K+ Units",
      },
      opportunities: [
        "Food & Beverage Import",
        "Industrial Chemicals",
        "Consumer Goods",
        "Pharmaceutical Raw Materials",
      ],
    },
    {
      name: "Europe",
      fullName: "European Markets",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
      icon: Plane,
      color: "#4ECDC4",
      bgGradient: "from-teal-400 to-cyan-400",
      description:
        "Access to premium markets with strict quality standards and high purchasing power across the European Union.",
      countries: ["Germany", "UK", "France", "Netherlands", "Italy", "Spain"],
      stats: {
        markets: "15+ Countries",
        growth: "+12% YoY",
        volume: "100K+ Units",
      },
      opportunities: [
        "Organic Products",
        "Specialty Chemicals",
        "Luxury Goods",
        "Sustainable Solutions",
      ],
    },
    {
      name: "Asia",
      fullName: "Asian Markets",
      image:
        "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?w=800&h=600&fit=crop",
      icon: Ship,
      color: "#6BCB77",
      bgGradient: "from-green-400 to-emerald-500",
      description:
        "Fastest growing economic region with diverse market opportunities and massive consumer base.",
      countries: [
        "China",
        "India",
        "Japan",
        "Singapore",
        "Malaysia",
        "Vietnam",
      ],
      stats: {
        markets: "20+ Countries",
        growth: "+20% YoY",
        volume: "200K+ Units",
      },
      opportunities: [
        "Industrial Raw Materials",
        "Agricultural Products",
        "Technology Components",
        "Packaging Solutions",
      ],
    },
  ];

  const exportStats = [
    {
      value: "29+",
      label: "Export Destinations",
      icon: MapPin,
      color: "#FF6B35",
    },
    {
      value: "50+",
      label: "Global Partners",
      icon: TrendingUp,
      color: "#4ECDC4",
    },
    {
      value: "100%",
      label: "Quality Compliance",
      icon: Shield,
      color: "#6BCB77",
    },
    {
      value: "24/7",
      label: "Logistics Support",
      icon: Clock,
      color: "#FF6B6B",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen overflow-hidden bg-white/10" 
    >
       <TrendyDivider/>
      <div className="container mx-auto px-6 max-w-7xl py-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-semibold">
              Global Trade
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Our{" "}
            <span className="bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
              Export Markets
            </span>
          </h2>

         <div
            className={`w-20 h-1 bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 mx-auto rounded-full shadow-[0_0_15px_rgba(0,255,209,0.5)] transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          <p
            className={`max-w-2xl mx-auto mt-6 text-white text-lg transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Connecting businesses worldwide with premium products and reliable
            export solutions
          </p>
        </div>

        {/* Export Stats Banner */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {exportStats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-5 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
              <div
                className="w-8 h-0.5 mx-auto mt-2 transition-all duration-300 group-hover:w-12"
                style={{ backgroundColor: stat.color }}
              />
            </div>
          ))}
        </div>

        {/* Regions Grid - Main Content with Images */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {regions.map((region, idx) => (
            <div
              key={region.name}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150 + 600}ms` }}
              onMouseEnter={() => setSelectedRegion(region.name)}
              onMouseLeave={() => setSelectedRegion(null)}
            >
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 h-full">
                {/* Header Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${region.color}10, ${region.color}10)`,
                    }}
                  />

                  {/* Region Tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <div
                      className="px-3 py-1 rounded-full text-white text-xs font-semibold backdrop-blur-sm"
                      style={{ backgroundColor: `${region.color}CC` }}
                    >
                      Export Hub
                    </div>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/20">
                      <region.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {region.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {region.fullName}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {region.description}
                  </p>

                  {/* Countries */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Key Markets
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {region.countries.slice(0, 4).map((country, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
                        >
                          {country}
                        </span>
                      ))}
                      {region.countries.length > 4 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                          +{region.countries.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
                    {Object.entries(region.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-xs font-semibold text-gray-900">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Opportunities */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${selectedRegion === region.name ? "max-h-40" : "max-h-0"}`}
                  >
                    <div className="pt-3 border-t border-gray-100">
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Opportunities
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {region.opportunities.map((opp, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${region.color}10`,
                              color: region.color,
                            }}
                          >
                            {opp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Line */}
                  <div className="mt-4 pt-2">
                    <div
                      className="w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: region.color }}
                    />
                    <button
                      className="mt-3 text-xs font-semibold flex items-center gap-1 transition-all group/btn"
                      style={{ color: region.color }}
                    >
                      Explore Export Opportunities
                      <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Export Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Export Process
            </h3>
            <div className="w-16 h-0.75 bg-gradient-to-br from-[#00CCAA] to-[#00B9CC] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Market Analysis",
                desc: "Identifying opportunities and demand in target markets",
                icon: BarChart3,
                color: "#FF6B35",
              },
              {
                step: "02",
                title: "Quality Assurance",
                desc: "Ensuring products meet international standards",
                icon: Shield,
                color: "#4ECDC4",
              },
              {
                step: "03",
                title: "Logistics Setup",
                desc: "Coordinating efficient shipping and delivery",
                icon: Ship,
                color: "#6BCB77",
              },
              {
                step: "04",
                title: "Market Entry",
                desc: "Successful product launch and distribution",
                icon: Target,
                color: "#FF6B6B",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 100 + 800}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <step.icon
                    className="w-6 h-6"
                    style={{ color: step.color }}
                  />
                </div>
                <div
                  className="text-sm font-bold mb-1"
                  style={{ color: step.color }}
                >
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {step.desc}
                </p>
                <div
                  className="w-8 h-px bg-gray-200 mx-auto mt-3 group-hover:w-12 transition-all"
                  style={{ backgroundColor: step.color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Advantages Banner */}
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-100/40 to-cyan-100/40 border border-teal-100/40 p-10 mb-20 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
         {/* Animated gradient border on hover */}
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FF6B35] to-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              padding: "2px",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            }}
          />

          <div className="relative grid md:grid-cols-3 gap-8">
  {/* Quality Products */}
  <div className="text-center md:text-left group">
    <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
      <div className="p-1 rounded-md bg-[#00CCAA]/10 group-hover:bg-[#00CCAA]/20 transition-colors">
        <Package className="w-5 h-5 text-[#00A388]" />
      </div>
      <span className="text-[#008E76] text-xs font-bold uppercase tracking-wider">
        Quality Products
      </span>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">
      Certified and tested to meet global standards
    </p>
  </div>

  {/* Global Logistics */}
  <div className="text-center md:text-left group">
    <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
      <div className="p-1 rounded-md bg-[#00CCAA]/10 group-hover:bg-[#00CCAA]/20 transition-colors">
        <Truck className="w-5 h-5 text-[#00A388]" />
      </div>
      <span className="text-[#008E76] text-xs font-bold uppercase tracking-wider">
        Global Logistics
      </span>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">
      Efficient shipping to any destination worldwide
    </p>
  </div>

  {/* Competitive Pricing */}
  <div className="text-center md:text-left group">
    <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
      <div className="p-1 rounded-md bg-[#00CCAA]/10 group-hover:bg-[#00CCAA]/20 transition-colors">
        <DollarSign className="w-5 h-5 text-[#00A388]" />
      </div>
      <span className="text-[#008E76] text-xs font-bold uppercase tracking-wider">
        Competitive Pricing
      </span>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed">
      Best value with transparent pricing structure
    </p>
  </div>
</div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-700 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Ready to Export?
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Expand Your Reach With Elemensis
          </h3>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            Partner with us to access global markets and grow your business
            internationally
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Start Exporting Today</span>
            <TrendingUp className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
