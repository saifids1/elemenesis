"use client";
import { useState, useEffect, useRef } from "react";

export default function TrendyDivider() {
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const dividerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Triggers when 10% of the divider is visible
    );

    if (dividerRef.current) observer.observe(dividerRef.current);
    return () => observer.disconnect();
  }, []);

  // The sliding animation logic
  useEffect(() => {
    if (!isVisible) return; // Only start moving once visible

    const interval = setInterval(() => {
      setProgress((prev) => {
        let next = prev + direction * 0.8;
        if (next >= 100) {
          setDirection(-1);
          return 100;
        }
        if (next <= 0) {
          setDirection(1);
          return 0;
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [direction, isVisible]);

  return (
    <div 
      ref={dividerRef}
      className={`relative w-full py-4 transition-all duration-1000 ease-out bg-white ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      {/* Background Track */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      
      {/* The Moving Glow Container */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-150 ease-out"
        style={{ left: `${progress}%` }}
      >
        {/* The Dot & Core Aura */}
        <div className="relative flex items-center justify-center">
          {/* Main Glowing Dot */}
          <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_15px_#22d3ee] z-20" />
          
          {/* Pulse Ripple */}
          <div className="absolute h-6 w-6 rounded-full bg-cyan-400/30 animate-ping" />
          
          {/* Horizontal Beam (Trailing light) */}
          <div className={`absolute h-[2px] w-24 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transition-transform duration-500 ${
            direction === 1 ? "-translate-x-10" : "translate-x-10"
          }`} />
        </div>
      </div>
    </div>
  );
}