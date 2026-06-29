"use client";
import React, { useEffect, useRef, useState } from 'react';
import {
  FaRocket,
  FaGlobe,
  FaChartLine,
  FaHandshake,
  FaStar,
  FaArrowRight,
  FaGem,
  FaUsers,
  FaTrophy,
  FaCheckCircle,
  FaShieldAlt,
  FaHeart
} from 'react-icons/fa';

const MissionVision = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExcellenceVisible, setIsExcellenceVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  const [isChanging, setIsChanging] = useState(false);
  const sectionRef = useRef(null);
  const excellenceRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExcellenceVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (excellenceRef.current) {
      observer.observe(excellenceRef.current);
    }

    return () => {
      if (excellenceRef.current) {
        observer.unobserve(excellenceRef.current);
      }
    };
  }, []);

 useEffect(() => {
  const interval = setInterval(() => {
    setIsChanging(true); // Start fade out

    setTimeout(() => {
      setActiveTab((prev) =>
        prev === "mission" ? "vision" : "mission"
      );
      setIsChanging(false); // Fade in new content
    }, 500); // Fade-out duration
  }, 7000);

  return () => clearInterval(interval);
}, []);

  const content = {
    mission: {
      title: "Our Mission",
      subtitle: "What Drives Us Every Day",
      description: "Our mission is to provide companies & individuals all around the world with our superior goods, outstanding services, and steadfast support.",
      icon: <FaRocket className="w-12 h-12" />,
      points: [
        "Superior quality products",
        "Outstanding customer service",
        "Steadfast support globally",
        "Continuous innovation"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      alt: "Global mission team collaboration"
    },
    vision: {
      title: "Our Vision",
      subtitle: "Where We're Heading",
      description: "Our vision is to establish ourselves as the preferred B2B & B2C partner for companies & individuals across the globe, promoting expansion and success.",
      icon: <FaGlobe className="w-12 h-12" />,
      points: [
        "Preferred B2B & B2C partner",
        "Global expansion",
        "Mutual success",
        "Industry leadership"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      alt: "Visionary business growth"
    }
  };

  const excellenceFeatures = [
    {
      icon: <FaGem className="w-6 h-6" />,
      title: "Genuineness",
      description: "Every product and service is authentic and verified"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Dependability",
      description: "Consistent reliability you can count on"
    },
    {
      icon: <FaTrophy className="w-6 h-6" />,
      title: "Excellence",
      description: "Superior quality in everything we do"
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Partnership",
      description: "Strong global relationships with partners"
    }
  ];

  return (
    <>
      {/* Mission & Vision Section */}
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8 lg:pt-8"
      >
        <div className="absolute inset-0 overflow-hidden">
          {[
            "left-10 top-20 h-72 w-72 bg-[#096F72]/10 animate-pulse",
            "bottom-20 right-10 h-96 w-96 bg-[#07595C]/10 animate-pulse delay-1000",
            "left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 bg-[#0099FF]/5",
          ].map((cls) => (
            <div
              key={cls}
              className={`absolute rounded-full mix-blend-multiply blur-3xl ${cls}`}
            />
          ))}

          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float rounded-full bg-[#00B9CC]/20"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl ">
          <div className="mb-16 text-center ">
            <h2 className="relative mb-4 text-4xl font-bold  text-[#096F72] sm:text-5xl lg:text-6xl">
              Mission & Vision
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
              >
                <path
                  d="M0 4 Q 50 8 100 4 Q 150 0 200 4"
                  stroke="#064D50"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Driving global success through excellence and innovation
            </p>
          </div>

          <div className="mb-12 flex justify-center ">
            <div className="flex gap-2 rounded-full border border-[#096F72]/20 bg-[#096F72]/10 p-1 backdrop-blur-sm">
              {[
                ["mission", "Mission", FaRocket],
                ["vision", "Vision", FaGlobe],
              ].map(([key, label, Icon]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${activeTab === key
                    ? "scale-100 bg-gradient-to-r from-[#096F72] to-[#07595C] text-white shadow-lg"
                    : "text-[#07595C] hover:bg-[#096F72]/10"
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

        <div
  className={`transform transition-all duration-500 ease-in-out ${
    isVisible
      ? "translate-y-0"
      : "translate-y-10"
  } ${
    isChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"
  }`}
>
            <div className="animate-fade flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
              <div className="w-full space-y-6 lg:w-1/2">
                <div className="rounded-3xl border border-gray-100 bg-[#064D50] p-8 shadow-xl lg:p-10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="animate-bounce rounded-2xl  bg-white p-3 text-[#07595C] shadow-lg">
                      {React.cloneElement(content[activeTab].icon, {
                        className: "w-8 h-8",
                      })}
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-white lg:text-4xl">
                        {content[activeTab].title}
                      </h3>
                      <p className="mt-1 text-sm text-white/70">
                        {content[activeTab].subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mb-6 text-lg leading-relaxed text-white/80">
                    {content[activeTab].description}
                  </p>

                  <div className="mb-8 space-y-3">
                    {content[activeTab].points.map((point, idx) => (
                      <div
                        key={idx}
                        className="group flex cursor-pointer items-center gap-3"
                        style={{
                          animation: `slideInRight 0.5s ease-out ${idx * 0.1}s both`,
                        }}
                      >
                        <div className="h-2 w-2 rounded-full bg-[#00CCAA] transition-transform duration-300 group-hover:scale-150" />
                        <span className="text-white/70 transition-colors duration-300 group-hover:text-[#00CCAA]">
                          {point}
                        </span>
                        <FaArrowRight className="h-4 w-4 text-[#00CCAA]/60 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between">
                      {[
                        ["2024", "Established"],
                        ["50+", "Countries"],
                        ["1000+", "Partners"],
                      ].map(([number, label]) => (
                        <div key={label} className="text-center">
                          <div className="text-2xl font-bold text-white">
                            {number}
                          </div>
                          <div className="text-sm text-white/50">{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full lg:w-1/2">
                <div className="group relative">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#00CCAA]/30 to-[#0099FF]/20 blur-xl transition-all duration-500 group-hover:blur-2xl" />

                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 to-transparent" />

                    <img
                      src={content[activeTab].image}
                      alt={content[activeTab].alt}
                      className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-110 lg:h-[500px]"
                    />

                    <div className="absolute left-6 top-6 z-20 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <FaStar className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-semibold text-gray-800">
                          {activeTab === "mission"
                            ? "Driving Excellence"
                            : "Shaping Future"}
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-6 z-20 animate-pulse rounded-full bg-white/95 p-3 text-[#07595C] shadow-lg backdrop-blur-sm">
                      {React.cloneElement(content[activeTab].icon, {
                        className: "w-6 h-6",
                      })}
                    </div>
                  </div>

                  <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#096F72]/40" />
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-[#096F72]/40" />
                </div>

                {[
                  ["-left-8 top-1/2 -translate-y-1/2", FaHandshake, "animate-float-slow"],
                  ["-right-8 bottom-20", FaChartLine, "animate-float-delayed"],
                ].map(([pos, Icon, anim]) => (
                  <div key={pos} className={`absolute hidden lg:block ${pos}`}>
                    <div
                      className={`${anim} rounded-xl border border-gray-100 bg-white p-3 text-[#07595C] shadow-xl backdrop-blur-sm`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 rounded-full border border-[#096F72]/20 bg-gradient-to-r from-[#00CCAA]/10 to-[#00B9CC]/10 px-6 py-3 backdrop-blur-xl">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#00B9CC]/20"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#00B9CC]" />
                  </div>
                ))}
              </div>

              <span className="text-sm text-gray-700">Join us in our journey</span>
              <FaArrowRight className="h-4 w-4 text-[#07595C]" />
            </div>
          </div> */}
        </div>
      </section>

      {/* Commitment to Excellence Section */}
      <section
        ref={excellenceRef}
        className="relative overflow-hidden bg-[#064D50] px-4 py-20 sm:px-6 lg:px-8 lg:pt-10"
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute right-20 top-40 h-96 w-96 animate-pulse rounded-full bg-white/10 mix-blend-overlay blur-3xl" />
            <div className="absolute bottom-20 left-10 h-80 w-80 animate-pulse rounded-full bg-white/10 mix-blend-overlay blur-3xl delay-700" />
          </div>

          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float rounded-full bg-white/20"
              style={{
                width: `${Math.random() * 5 + 1}px`,
                height: `${Math.random() * 5 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 8 + 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <div
            className={`mb-12 text-center transition-all duration-700 ${isExcellenceVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
              }`}
          >
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Commitment to{" "}
              <span className="relative inline-block">
                Excellence
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                >
                  <path
                    d="M0 3 Q 50 6 100 3 Q 150 0 200 3"
                    stroke="#E0FDFC"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-lg text-white/90">
              Excellence is a way of life rather than just a promise
            </p>
          </div>

          {/* Main Content */}
          <div
            className={`grid items-center gap-10 transition-all delay-300 duration-700 lg:grid-cols-2 ${isExcellenceVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
              }`}
          >
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/20 bg-white p-6 shadow-xl lg:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="animate-pulse rounded-xl bg-white p-2.5 text-[#096F72] shadow-lg">
                    <FaGem className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#096F72]">
                    Excellence in Everything
                  </h3>
                </div>

                <p className="mb-4 text-base leading-relaxed text-[#096F72]/90">
                  At Elemensis, excellence is a way of life rather than just a
                  promise. We guarantee the genuineness, dependability, and excellence
                  of every product and service we offer. Our path and our clients'
                  trust in us serve as examples of this commitment.
                </p>

                <p className="my-4 border-l-4 border-[#096F72]/30 pl-4 text-base italic leading-relaxed text-[#096F72]/85">
                  "Elemensis is a community rather than just a company. With years of
                  experience in the field, we have developed solid relationships with
                  partners and suppliers around the world, allowing us to provide the
                  best products right to your door."
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {excellenceFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group flex cursor-pointer items-start gap-2"
                      style={{
                        animation: `slideInRight 0.4s ease-out ${idx * 0.1 + 0.3
                          }s both`,
                      }}
                    >
                      <div className="mt-0.5 text-[#096F72] transition-colors duration-300 group-hover:text-[#07595C]">
                        {feature.icon}
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-[#096F72] transition-colors group-hover:text-[#07595C]">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-[#096F72]/70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-around gap-4 rounded-xl border border-white bg-white p-4 shadow-lg backdrop-blur-md">
                {[
                  ["10+", "Years Experience"],
                  ["500+", "Global Partners"],
                  ["100%", "Trust Guarantee"],
                  ["24/7", "Support"],
                ].map(([number, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-bold text-[#096F72]">{number}</div>
                    <div className="text-xs text-[#096F72]/70">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image with decorative elements */}
            <div className="group relative">
              {/* Animated border */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-cyan-200/40 to-blue-200/20 blur-xl transition-all duration-500 group-hover:blur-2xl" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 to-transparent" />

                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Commitment to Excellence"
                  className="h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay badges */}
                {/* <div className="absolute left-6 top-6 z-20 animate-bounce rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <FaHeart className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-semibold text-gray-800">
                      With ❤️ from Elemensis
                    </span>
                  </div>
                </div> */}

                <div className="absolute bottom-6 right-6 z-20 rounded-full bg-white/95 p-3 shadow-lg backdrop-blur-sm">
                  <FaUsers className="h-6 w-6 text-[#00CCAA]" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -left-4 -top-4 h-20 w-20 rounded-tl-xl border-l-3 border-t-3 border-cyan-100/40" />
              <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-br-xl border-b-3 border-r-3 border-cyan-100/40" />

              {/* Floating card */}
              <div className="absolute -right-6 top-20 hidden animate-float-slow lg:block">
                <div className="rounded-lg bg-white/95 p-3 shadow-xl backdrop-blur-sm">
                  <FaTrophy className="h-6 w-6 text-yellow-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className={`mt-12 text-center transition-all delay-500 duration-700 ${isExcellenceVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
              }`}
          >
            <div className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-white/20 bg-white px-6 py-3 backdrop-blur-md transition-all duration-300 hover:bg-[#096F72]/30 transition-colors group-hover:text-white/50">
              <FaHandshake className="h-4 w-4 text-[#096F72] transition-colors duration-300 group-hover:text-white" />
              <span className="text-sm font-bold text-[#096F72] transition-colors duration-300 group-hover:text-white">
                Experience excellence with Elemensis
              </span>
              <FaArrowRight className="h-3 w-3 text-[#096F72]/80 transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </section>

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 3.5s ease-in-out infinite 1s;
        }
       
}
      `}</style>
    </>
  );
};

export default MissionVision;