import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, ArrowDown } from 'lucide-react';
import Logo from './Logo';

export default function HeroSection({ scrollToSection }) {
  const fullText = "المنصة الرقمية لاحتياجاتك اليومية.";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);

  const handleTyping = () => {
    const current = fullText;
    if (isDeleting) {
      setTypedText(current.substring(0, typedText.length - 1));
      setTypingSpeed(40);
    } else {
      setTypedText(current.substring(0, typedText.length + 1));
      setTypingSpeed(100);
    }

    if (!isDeleting && typedText === current) {
      setTimeout(() => setIsDeleting(true), 3500);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(100);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-mesh-pattern bg-[#0A192F]">
      {/* Background glowing blurred circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-teal-500/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Lines overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-45 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#112240] border border-teal-400/50 text-teal-200 text-xs sm:text-sm font-semibold mb-8 shadow-[0_0_25px_rgba(45,212,191,0.25)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping"></span>
          <Sparkles className="w-4 h-4 text-teal-300" />
          <span>العرض التقديمي لمشروع تخرج منصة ARFA</span>
          <span className="bg-teal-500/30 text-teal-100 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border border-teal-400/40">
            شمال سيناء 📍
          </span>
        </motion.div>

        {/* Brand Symbol Display */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <Logo className="w-20 h-20 sm:w-24 sm:h-24" showText={false} />
        </motion.div>

        {/* Large Glowing Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight mb-6 leading-tight"
        >
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">ARFA</span>
          <span className="mx-3 text-teal-400">-</span>
          <span className="bg-gradient-to-r from-teal-200 via-teal-400 to-emerald-300 bg-clip-text text-transparent glow-text-teal">
            أرض الفيروز
          </span>
        </motion.h1>

        {/* Subtitle with Typing Animation - Crisp White */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-16 sm:h-20 flex items-center justify-center"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold tracking-wide">
            {typedText}
            <span className="inline-block w-1.5 h-7 sm:h-8 bg-teal-400 ml-1.5 animate-pulse align-middle rounded-full shadow-[0_0_15px_#2dd4bf]"></span>
          </p>
        </motion.div>

        {/* Description Pill Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 mb-12 max-w-3xl"
        >
          {[
            '🍽️ قطاع المطاعم',
            '🛍️ سوق الفيروز الرقمي',
            '🩺 الكشوفات الطبية',
            '🚗 النقل والمشاوير',
            '🛠️ دليل الحرفيين',
            '📦 الخدمات اللوجستية',
            '🤖 مساعد ذكي AI'
          ].map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#112240] text-teal-200 border border-teal-400/40 backdrop-blur-md hover:border-teal-300 hover:bg-teal-900/40 transition-all duration-300 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Interactive Scroll Down Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection('problem')}
        >
          <button 
            className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-500 text-slate-950 font-extrabold text-base sm:text-lg shadow-[0_0_35px_rgba(20,184,166,0.6)] hover:shadow-[0_0_55px_rgba(20,184,166,0.9)] hover:scale-105 transition-all duration-300"
          >
            <span>استكشف قصة ورؤية المشروع</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>

          <div className="flex items-center gap-2 text-xs text-teal-200 font-semibold group-hover:text-white transition-colors">
            <span>انقر أو قم بالتمرير للأسفل لبدء العرض</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-teal-400" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
