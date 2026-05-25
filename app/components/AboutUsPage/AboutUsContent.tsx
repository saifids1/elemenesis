"use client";
import React, { useEffect, useRef, useState } from "react";
import { Heart, Earth, Users, CheckCheck } from "lucide-react";
export default function AboutUsContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
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

  const features = [
    {
      icon: Earth,
      title: "Our Vision",
      color: "#FF6B35",
      bgGradient: "from-orange-500 to-red-500",
      description:
        "ElEMENSIS is dedicated to delivering superior-quality products that consistently exceed the expectations of our esteemed customers. Our unwavering vision is to be the foremost leader in every endeavor we undertake. Guided by this vision, we make deliberate and informed choices, ensuring that we remain steadfast in achieving our objectives and providing unparalleled service to our valued clientele",
    },
    {
      icon: Users,
      title: "Our Team",
      color: "#4ECDC4",
      bgGradient: "from-teal-400 to-cyan-400",
      description:
        "Multinational and multicultural individuals that are knowledgeable and willing to help make up our team. Each team member is crucial to our business and firmly believes in the system, procedure, and fundamental principles. In order to serve you best, we are always learning, developing, and growing in all facets of our business and market situations",
    },
    {
      icon: CheckCheck,
      title: "Our Mission",
      color: "#6BCB77",
      bgGradient: "from-green-400 to-emerald-500",
      description:
        "Our mission is to enable companies all around the world with our superior goods, outstanding services, and steadfast support. Our vision is to establish ourselves as the preferred B2B partner for companies across the globe, promoting expansion and success.",
    },
    {
      icon: Heart,
      title: "Our Core Values",
      color: "#FF6B6B",
      bgGradient: "from-rose-400 to-pink-500",
      description:
        "At Elemensis, excellence is a way of life rather than just a promise. We guarantee the genuineness, dependability, and excellence of every product and service we offer. Our path and our clients' trust in us serve as examples of this commitment.Elemensis is a community rather than just a company. With years of experience in the field, we have developed solid relationships with partners and suppliers around the world, allowing us to provide the best products right to your door.",
    },
  ];

  const activeFeature = features[activeIndex];

  return (
    <>
      <section ref={sectionRef} className="pt-30 pb-5 bg-white/20 ">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <span className="px-5 py-2 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] text-white text-sm font-bold">
              About eleminsis
            </span>
          </div>
          <div
            className={`w-20 h-1 bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 mx-auto rounded-full shadow-[0_0_20px_rgba(0,204,170,0.4)] transition-all duration-1000 delay-300opacity-100 scale-x-100"
            }`}
          />

          <p
            className={`max-w-3xl mx-auto mt-6 text-white text-base leading-relaxed transition-all duration-700 delay-400 opacity-100 translate-y-0"
            }`}
          >
            ELEMENSIS distributes high-end, naturally derived goods that have
            been painstakingly cultivated and harvested to adhere to rigid
            health and quality criteria. Along with our premium brands, we
            deliver the unmatched advantages of healthy, high-quality, and
            premium products to your homes & businesses
          </p>
        </div>
        {/* Animated Background Blobs */}
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Center Line - Desktop only */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300 hidden lg:block" />

            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`relative mb-16 lg:mb-24 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Use Flex instead of complex Grid to keep rows forced */}
                <div
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Side 1 */}
                  <div className="w-full lg:w-1/2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                      {/* Icon & Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="p-3 rounded-2xl group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundColor: `${feature.color}15` }}
                        >
                          <feature.icon
                            className="w-7 h-7"
                            style={{ color: feature.color }}
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                          {feature.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-500 leading-relaxed mb-6 text-base font-medium opacity-80">
                        {feature.description}
                      </p>

                      {/* Learn More Button */}
                      <button
                        className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase transition-all hover:gap-4"
                        style={{ color: feature.color }}
                      >
                        Details
                        <div
                          className="h-[2px] w-8 transition-all group-hover:w-12"
                          style={{ backgroundColor: feature.color }}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Side 2 */}
                  <div className="hidden lg:flex w-1/2 justify-center items-center">
                    <div className="relative">
                      {/* Ambient Glow behind the icon */}
                      <div
                        className="absolute inset-0 rounded-full blur-[60px] opacity-20 animate-pulse"
                        style={{ backgroundColor: feature.color }}
                      />

                      {/* Main Visual Circle */}
                      <div
                        className="relative w-64 h-64 rounded-full flex items-center justify-center border border-dashed border-gray-200"
                        style={{
                          background: `radial-gradient(circle, ${feature.color}05, transparent)`,
                        }}
                      >
                        <div
                          className="w-32 h-32 rounded-3xl rotate-12 flex items-center justify-center bg-white shadow-2xl border border-gray-50 group-hover:rotate-0 transition-transform duration-700"
                          style={{ borderBottom: `4px solid ${feature.color}` }}
                        >
                          <feature.icon
                            className="w-14 h-14 -rotate-12 group-hover:rotate-0 transition-transform duration-700"
                            style={{ color: feature.color }}
                          />
                        </div>

                        {/* Orbital Elements */}
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full animate-orbit"
                            style={{
                              backgroundColor: feature.color,
                              animationDelay: `${i * 1.5}s`,
                              top: "50%",
                              left: "50%",
                              transform: `rotate(${i * 120}deg) translateX(110px)`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes orbit {
            0% {
              transform: rotate(0deg) translateX(90px) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: rotate(360deg) translateX(90px) rotate(-360deg);
              opacity: 0.5;
            }
          }
          .animate-orbit {
            animation: orbit 6s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
}
