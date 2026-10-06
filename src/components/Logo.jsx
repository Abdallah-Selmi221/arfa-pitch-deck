import React, { useState } from 'react';

export default function Logo({ className = "w-12 h-12", showText = true, textClassName = "text-xl" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="inline-flex items-center gap-3 group cursor-pointer select-none">
      <div className={`relative flex items-center justify-center ${className}`}>
        {/* Glow behind logo */}
        <div className="absolute inset-0 bg-teal-400/40 rounded-2xl filter blur-lg group-hover:bg-teal-400/65 transition-all duration-500 shadow-[0_0_25px_rgba(45,212,191,0.6)]"></div>
        
        {!imgError ? (
          <img
            src="/logo.png"
            alt="ARFA Logo"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_0_12px_rgba(45,212,191,0.8)] group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          /* SVG Fallback logo if /logo.png is not found */
          <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 filter drop-shadow-[0_0_12px_rgba(45,212,191,0.8)]">
            <defs>
              <linearGradient id="arfaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5eead4" />
                <stop offset="50%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#0f766e" />
              </linearGradient>
              <linearGradient id="arfaGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <polygon 
              points="50,5 90,27 90,73 50,95 10,73 10,27" 
              fill="none" 
              stroke="url(#arfaGrad)" 
              strokeWidth="4"
              className="group-hover:rotate-6 transition-transform duration-700 origin-center"
            />
            <path 
              d="M50,22 L75,40 L65,72 L35,72 L25,40 Z" 
              fill="url(#arfaGrad)" 
              opacity="0.85"
            />
            <path 
              d="M50,30 L55,45 L70,50 L55,55 L50,70 L45,55 L30,50 L45,45 Z" 
              fill="#ffffff" 
            />
            <path 
              d="M20,60 Q50,78 80,60" 
              fill="none" 
              stroke="url(#arfaGold)" 
              strokeWidth="3.5" 
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-black tracking-tight text-white font-['Alexandria'] ${textClassName}`}>
            ARFA <span className="text-teal-400 font-bold drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]">| أرض الفيروز</span>
          </span>
          <span className="text-[10px] text-teal-300/80 font-semibold tracking-widest uppercase">
            المنصة الرقمية لاحتياجاتك اليومية
          </span>
        </div>
      )}
    </div>
  );
}
