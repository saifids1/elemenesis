"use client";
import React, { useEffect, useRef, useState } from 'react';
// Note: For the icons, you would need to install react-icons: npm install react-icons
import {
  FaGem,
  FaGlobeAmericas,
  FaUserFriends,
  FaLeaf,
  FaClock,
  FaCheckCircle
} from 'react-icons/fa';

const WhyChooseElemensis = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const features = [
    {
      id: 1,
      icon: <FaGem className="w-8 h-8 text-white" />,
      title: "Authenticity and quality",
      description: "Elemensis is a representation of sincerity and unflinching greatness. We meticulously source and develop our products, so you will only get the best. Elemensis is the epitome of sincerity and unflinching greatness. You select the best when you go with Elemensis.",
      image: "/Images/whycomponent/why01.png",
      alt: "Premium quality products"
    },
    {
      id: 2,
      icon: <FaGlobeAmericas className="w-8 h-8 text-white" />,
      title: "Worldwide Reach",
      description: "Our global network allows us to facilitate smooth trade & distribution. We have systems for distribution and logistics that are tailored to your requirements. Elemensis has perfected the art of seamless trading, which is crucial for global businesses.",
      image: "/Images/whycomponent/why02.png",
      alt: "Global distribution network"
    },
    {
      id: 3,
      icon: <FaUserFriends className="w-8 h-8 text-white" />,
      title: "Customer-Centric Approach",
      description: "Our consumers are our top priority at Elemensis. We are aware of your particular needs and take great care in delivering solutions that are suited to them. Elemensis is aware of the individual requirements and preferences of every client.",
      image: "/Images/whycomponent/why03.png",
      alt: "Customer support and service"
    },
    {
      id: 4,
      icon: <FaLeaf className="w-8 h-8 text-white" />,
      title: "Sustainability",
      description: "Our goal for the future is sustainability. We guarantee that we have a positive environmental impact by using eco-friendly products and procedures. Elemensis is dedicated to sustainability in a time when environmental awareness is crucial.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
      alt: "Eco-friendly sustainable practices"
    },
    {
      id: 5,
      icon: <FaClock className="w-8 h-8 text-white" />,
      title: "On-time Delivery",
      description: "We recognize the value of punctuality in business. Our efficient delivery system ensures that your orders will always arrive on time. Elemensis understands how important timeliness is in the corporate world.",
      image: "/Images/home page card/Ecommerce.jpg",
      alt: "Fast and reliable delivery"
    }
  ];

  return (
    <>
      <div className='bg-[#10b2b5]'>
        <section
          ref={sectionRef}
          className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-0"
        >
          <div className=" inset-0 overflow-hidden">
            {["-top-40 -right-40", "-bottom-40 -left-40 delay-1000"].map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos} h-80 w-80 animate-pulse rounded-full bg-white opacity-20 mix-blend-overlay blur-3xl`}
              />
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-16 text-center">


              <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Why Choose{" "}
                <span className="relative inline-block text-white">
                  Elemensis?
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                  >
                    <path
                      d="M0 4 Q 50 8 100 4 Q 150 0 200 4"
                      stroke="white"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="mx-auto max-w-2xl text-lg text-white/90">
                Discover what makes us the preferred choice for businesses worldwide
              </p>
            </div>

            <div className="space-y-20">
              {features.map((feature, index) => {
                const Icon = React.cloneElement(feature.icon, {
                  className: "w-8 h-8 text-[#00CCAA]",
                });

                return (
                  <div
                    key={feature.id}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    className={`group transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                  >
                    <div
                      className={`flex flex-col items-center gap-8 lg:gap-12 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        }`}
                    >
                      <div className="relative w-full lg:w-1/2">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105">
                          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent" />
                          <img
                            src={feature.image}
                            alt={feature.alt}
                            className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-80 lg:h-96"
                          />
                          <div className="absolute bottom-4 right-4 z-20 rounded-full bg-white/95 p-3 shadow-lg backdrop-blur-sm">
                            {Icon}
                          </div>
                        </div>
                        <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-white/20 transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4" />
                      </div>

                      <div className="w-full space-y-4 rounded-2xl bg-white/10 p-6 backdrop-blur-sm lg:w-1/2 lg:p-8">
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl bg-white p-3 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                            {Icon}
                          </div>
                          <h3 className="text-2xl font-bold text-white sm:text-3xl">
                            {feature.title}
                          </h3>
                        </div>

                        <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                          {feature.description}
                        </p>

                        <div className="flex items-center gap-2 pt-2">
                          <FaCheckCircle className="h-5 w-5 text-white" />
                          <span className="font-medium text-white/90">
                            Trusted by industry leaders
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-20 text-center">
              <div className="rounded-3xl border border-white/30 bg-white/15 p-8 shadow-xl backdrop-blur-sm sm:p-12">
                <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                  Ready to experience the <span className="font-bold">Elemensis</span>{" "}
                  difference?
                </h3>
                <p className="mx-auto mb-6 max-w-2xl text-white/90">
                  Join thousands of satisfied customers who trust us for their business
                  needs
                </p>
            <a href="/contact">
                <button className="rounded-lg bg-white px-8 py-3 cursor-pointer font-semibold text-[#00CCAA] transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-xl">
                  Get Started Today
                </button>
            </a>
              </div>
            </div>
          </div>
        </section></div> </>
  );
};

export default WhyChooseElemensis;