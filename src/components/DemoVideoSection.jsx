import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  X, 
  Sparkles, 
  Film, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';

export default function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const googleDriveEmbedUrl = "https://drive.google.com/file/d/1gY5LWe8z8NdNU3T64WoMkIXrzpwXmvCP/preview";

  return (
    <section id="demo" className="py-24 px-4 relative overflow-hidden bg-[#0A192F]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#112240] border border-teal-400/50 text-teal-200 text-xs sm:text-sm font-bold mb-4 shadow-[0_0_20px_rgba(45,212,191,0.25)]"
        >
          <Film className="w-4 h-4 text-teal-300 animate-pulse" />
          <span>العرض التطبيقي المباشر</span>
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
          <span className="text-white font-semibold">Live App Demo</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          العرض العملي لتطبيق <span className="text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">ARFA - أرض الفيروز</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white font-medium text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          شاهد تجربة المستخدم الحقيقية وكيف تتكامل أنظمة المطاعم، الطب، المشاوير، والخدمات في منصة رقمية واحدة.
        </motion.p>

        {/* Main Video Showcase Container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden bg-[#112240] border-2 border-teal-400/50 shadow-[0_0_50px_rgba(20,184,166,0.35)] group"
        >
          {/* Video Container */}
          <div className="relative aspect-video bg-[#06101E] flex items-center justify-center overflow-hidden">
            
            {!isPlaying ? (
              /* Thumbnail View with Animated Play Button */
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-t from-[#0A192F] via-[#112240]/90 to-transparent">
                
                <div className="absolute inset-0 bg-mesh-pattern opacity-60" />
                <div className="absolute w-72 h-72 border border-teal-400/20 rounded-full animate-ping pointer-events-none" />

                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 flex items-center gap-3 px-8 py-5 rounded-3xl bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-500 text-slate-950 font-black text-lg sm:text-xl shadow-[0_0_40px_rgba(45,212,191,0.65)] hover:shadow-[0_0_65px_rgba(45,212,191,0.95)] hover:scale-105 active:scale-95 transition-all duration-300 group-hover:rotate-1"
                >
                  <div className="w-10 h-10 rounded-2xl bg-slate-950 text-teal-300 flex items-center justify-center shadow-md">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                  <span>تشغيل العرض العملي (Live Demo)</span>
                </button>

                <p className="relative z-10 text-xs text-teal-200 mt-4 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>اضغط لمشاهدة فيديو تشغيل التطبيق المباشر والمعاملات اللحظية</span>
                </p>
              </div>
            ) : (
              /* Embedded Responsive Google Drive iFrame Player */
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                <iframe
                  src={googleDriveEmbedUrl}
                  title="ARFA App Live Demo Video"
                  className="w-full h-full border-0 rounded-2xl"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                ></iframe>

                {/* Close Button overlay */}
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0A192F]/90 text-teal-300 border border-teal-400/50 hover:bg-rose-500 hover:text-white transition-all shadow-lg flex items-center gap-1 text-xs font-bold"
                  title="إغلاق الفيديو"
                >
                  <X className="w-4 h-4" />
                  <span>إغلاق المشغل</span>
                </button>
              </div>
            )}

          </div>

          {/* Footer bar below video frame */}
          <div className="p-4 bg-[#0A192F] border-t border-teal-400/30 flex flex-wrap items-center justify-between text-xs text-slate-200 gap-2 font-medium">
            <span className="flex items-center gap-1.5 font-bold text-teal-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>فيديو العرض العملي التفاعلي لمنصة ARFA</span>
            </span>
            <a
              href="https://drive.google.com/file/d/1gY5LWe8z8NdNU3T64WoMkIXrzpwXmvCP/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 hover:text-white flex items-center gap-1 font-bold underline"
            >
              <span>فتح الفيديو في Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
