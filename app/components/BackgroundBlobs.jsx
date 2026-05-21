"use client";

export default function BackgroundSpotlight() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-r from-cyan-50 via-indigo-50/40 to-blue-50">
      
      {/* Abstract Organic Shapes */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          {/* Cyan/Blue Ice Gradient */}
          <linearGradient id="iceGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
          </linearGradient>
          
          {/* Indigo/Violet Soft Gradient */}
          <linearGradient id="iceGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        
        {/* Soft Moving Waves (Replacing Dunes) */}
        <path d="M 0 600 Q 200 500 400 550 T 800 600 T 1200 550 T 1600 600 L 1600 1000 L 0 1000 Z" fill="url(#iceGrad1)" className="animate-wave" />
        <path d="M 0 700 Q 250 600 500 650 T 1000 700 T 1500 650 L 1500 1000 L 0 1000 Z" fill="url(#iceGrad2)" className="animate-wave-reverse" style={{ animationDelay: "2s" }} />
        
        {/* Glass Pillars (Replacing Cacti) */}
        <rect x="15%" y="60%" width="2" height="120" rx="1" fill="#06b6d4" opacity="0.1" className="animate-float" />
        <rect x="17%" y="68%" width="1.5" height="80" rx="1" fill="#6366f1" opacity="0.08" className="animate-float-delayed" />
        
        {/* Floating "Ice Crystals" (Replacing Diamonds) */}
        <polygon points="85%,25% 86.5%,20% 88%,25% 86.5%,30%" fill="#0ea5e9" opacity="0.15" className="animate-twinkle" />
        <polygon points="20%,75% 21.5%,70% 23%,75% 21.5%,80%" fill="#6366f1" opacity="0.1" className="animate-twinkle-delayed" />
        
        {/* Soft Background Orb */}
        <circle cx="80%" cy="20%" r="150" fill="url(#iceGrad1)" filter="blur(80px)" opacity="0.4" />
      </svg>
      
      <style jsx>{`
        @keyframes wave {
          0% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-5%) scaleY(1.05); }
          100% { transform: translateX(0) scaleY(1); }
        }
        @keyframes wave-reverse {
          0% { transform: translateX(0) scaleY(1.05); }
          50% { transform: translateX(5%) scaleY(1); }
          100% { transform: translateX(0) scaleY(1.05); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: translateY(0) scale(1); }
          50% { opacity: 0.3; transform: translateY(-10px) scale(1.1); }
        }
        @keyframes twinkle-delayed {
          0%, 100% { opacity: 0.08; transform: translateY(0) scale(1); }
          50% { opacity: 0.2; transform: translateY(10px) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-2deg); }
        }
        .animate-wave { animation: wave 12s ease-in-out infinite; }
        .animate-wave-reverse { animation: wave-reverse 15s ease-in-out infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 5s ease-in-out infinite; }
        .animate-twinkle-delayed { animation: twinkle-delayed 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}