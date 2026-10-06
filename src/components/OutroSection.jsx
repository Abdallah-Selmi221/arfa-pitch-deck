import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Award, 
  Upload
} from 'lucide-react';
import Logo from './Logo';

export default function OutroSection({ scrollToSection }) {
  const [customLogoUrl, setCustomLogoUrl] = useState(null);
  const [imgError, setImgError] = useState(false);

  const handleTriggerConfetti = () => {
    confetti({
      particleCount: 140,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#2dd4bf', '#14b8a6', '#0d9488', '#fef08a', '#ffffff']
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomLogoUrl(url);
    }
  };

  return (
    <section id="outro" className="py-24 px-4 relative overflow-hidden bg-mesh-pattern bg-[#0A192F] min-h-[90vh] flex flex-col justify-center items-center">
      
      {/* Intense glow circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        
        {/* Dedicated ARFA Logo Frame Showcase */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col items-center"
        >
          <div className="relative group cursor-pointer" onClick={handleTriggerConfetti}>
            {/* Outer Glowing Aura */}
            <div className="absolute -inset-6 bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-400 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Glass Logo Frame - Lighter Navy (#112240) */}
            <div className="relative p-8 sm:p-12 rounded-3xl border-2 border-teal-400/60 bg-[#112240] flex flex-col items-center justify-center shadow-[0_0_60px_rgba(45,212,191,0.45)]">
              {customLogoUrl ? (
                <img 
                  src={customLogoUrl} 
                  alt="ARFA Custom Logo" 
                  className="w-32 h-32 sm:w-44 sm:h-44 object-contain drop-shadow-[0_0_25px_rgba(45,212,191,0.9)]"
                />
              ) : !imgError ? (
                <img 
                  src="/logo.png" 
                  alt="ARFA Logo"
                  onError={() => setImgError(true)}
                  className="w-32 h-32 sm:w-44 sm:h-44 object-contain drop-shadow-[0_0_25px_rgba(45,212,191,0.9)] group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <Logo className="w-28 h-28 sm:w-36 sm:h-36" showText={false} />
              )}

              <div className="mt-4 flex flex-col items-center">
                <span className="text-2xl sm:text-4xl font-black text-white tracking-wider">
                  ARFA <span className="text-teal-400 drop-shadow-[0_0_12px_rgba(45,212,191,0.6)]">| أرض الفيروز</span>
                </span>
                <span className="text-xs sm:text-sm text-teal-200 font-bold mt-1">
                  شعار المنصة الرقمية 📍 شمال سيناء
                </span>
              </div>
            </div>
          </div>

          {/* Optional Upload button */}
          <div className="mt-4">
            <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#112240] border border-teal-400/50 text-teal-200 text-xs font-bold hover:bg-teal-500/20 transition-all shadow-md">
              <Upload className="w-3.5 h-3.5" />
              <span>تحميل/تعديل صورة الشعار الحية (/logo.png)</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>
        </motion.div>

        {/* EXACT Outro Text - Crisp Pure White */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 leading-tight drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            "شكراً جداً لوقت حضراتكم، ويسعدنا نرد على أي أسئلة."
          </h2>
          <p className="text-white font-medium text-base sm:text-lg max-w-2xl mx-auto">
            فريق عمل مشروع ARFA يتمنى أن يكون العرض قد حاز على إعجابكم واستحسانكم.
          </p>
        </motion.div>

        {/* Interactive Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={handleTriggerConfetti}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-500 text-slate-950 font-black text-base sm:text-lg shadow-[0_0_40px_rgba(45,212,191,0.65)] hover:shadow-[0_0_65px_rgba(45,212,191,0.95)] hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5 text-slate-950 fill-current" />
            <span>احتفال ختام العرض (Confetti) 🎉</span>
          </button>

          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-[#112240] text-teal-200 border border-teal-400/50 font-bold text-base hover:bg-teal-500/20 hover:text-white transition-all duration-300"
          >
            <span>إعادة العرض من الافتتاحية ↺</span>
          </button>
        </motion.div>

        {/* Student Presenters Credits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-[#112240] p-6 sm:p-8 rounded-3xl border border-teal-400/40 shadow-xl"
        >
          <div className="flex items-center justify-center gap-2 text-teal-300 font-extrabold mb-6">
            <Award className="w-5 h-5 text-teal-400" />
            <span>فريق تقديم مشروع تخرج ARFA (أرض الفيروز):</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-3.5 rounded-2xl bg-[#0A192F] border border-teal-400/30">
              <span className="text-teal-300 font-extrabold block mb-1">الطالب الأول 👤</span>
              <span className="text-white font-bold">المشكلة والفكرة</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0A192F] border border-teal-400/30">
              <span className="text-teal-300 font-extrabold block mb-1">الطالب الثاني 👤</span>
              <span className="text-white font-bold">النظام البيئي (6 قطاعات)</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0A192F] border border-teal-400/30">
              <span className="text-teal-300 font-extrabold block mb-1">الطالب الثالث 👤</span>
              <span className="text-white font-bold">نموذج العمل التجاري</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0A192F] border border-teal-400/30">
              <span className="text-teal-300 font-extrabold block mb-1">الطالب الرابع 👤</span>
              <span className="text-white font-bold">البنية التقنية والأمان</span>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="mt-12 text-xs text-teal-200 font-bold">
          تم تصميم وبناء هذه المنصة الرقمية خصيصاً لمشروع تخرج "أرض الفيروز ARFA" © 2026 - شمال سيناء.
        </div>

      </div>
    </section>
  );
}
