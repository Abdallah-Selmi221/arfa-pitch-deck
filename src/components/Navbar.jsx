import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { MonitorPlay, Key, Maximize, Minimize } from 'lucide-react';

export default function Navbar({ activeSection, scrollToSection, isAutoPlay, setIsAutoPlay, openQAModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to Fullscreen API changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const navItems = [
    { id: 'hero', label: 'الافتتاحية', presenter: 'العرض' },
    { id: 'problem', label: 'المشكلة والفكرة', presenter: 'الطالب 1' },
    { id: 'ecosystem', label: 'النظام البيئي', presenter: 'الطالب 2' },
    { id: 'business', label: 'نموذج العمل', presenter: 'الطالب 3' },
    { id: 'technical', label: 'الجانب التقني', presenter: 'الطالب 4' },
    { id: 'demo', label: 'العرض العملي', presenter: 'Demo' },
    { id: 'outro', label: 'الخاتمة', presenter: 'الأسئلة' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#0A192F]/95 backdrop-blur-xl border-b border-teal-400/30 py-3 shadow-[0_4px_30px_rgba(10,25,47,0.8)]' 
        : 'bg-transparent py-5'
    }`}>
      {/* Glowing scroll progress bar */}
      <div 
        className="absolute bottom-0 right-0 h-[3px] bg-gradient-to-l from-teal-300 via-teal-400 to-emerald-400 transition-all duration-150 shadow-[0_0_12px_#2dd4bf]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div onClick={() => scrollToSection('hero')}>
            <Logo className="w-10 h-10 sm:w-11 sm:h-11" textClassName="text-lg sm:text-xl" />
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 bg-[#112240]/90 backdrop-blur-md rounded-full px-4 py-1.5 border border-teal-400/40 shadow-[0_0_20px_rgba(45,212,191,0.2)]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-teal-200 bg-teal-500/30 border border-teal-400 shadow-[0_0_18px_rgba(45,212,191,0.4)] font-bold'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-sans ${
                    isActive ? 'bg-teal-400 text-slate-950 font-extrabold' : 'bg-[#1B3A4B] text-teal-300'
                  }`}>
                    {item.presenter}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Fullscreen Toggle Button (Presentation Mode) */}
            <button
              onClick={toggleFullscreen}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                isFullscreen
                  ? 'bg-teal-500/30 text-teal-200 border border-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.4)]'
                  : 'bg-[#112240] text-teal-300 border border-teal-400/40 hover:bg-teal-500/20 hover:text-white'
              }`}
              title={isFullscreen ? "إلغاء وضع ملء الشاشة (Esc)" : "وضع التقديم الكامل (Fullscreen)"}
            >
              {isFullscreen ? (
                <>
                  <Minimize className="w-4 h-4 text-teal-300" />
                  <span className="hidden xl:inline">إنهاء ملء الشاشة</span>
                </>
              ) : (
                <>
                  <Maximize className="w-4 h-4 text-teal-400" />
                  <span className="hidden xl:inline">ملء الشاشة</span>
                </>
              )}
            </button>

            {/* Secret Q&A Modal Trigger Button */}
            <button
              onClick={openQAModal}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#112240] text-teal-300 border border-teal-400/40 text-xs font-bold hover:bg-teal-500/20 hover:text-white transition-all shadow-md"
              title="افتتح لوحة الأسئلة والمناقشة السرية (Ctrl + K)"
            >
              <Key className="w-4 h-4 text-amber-400" />
              <span className="hidden xl:inline font-bold">Ctrl + K</span>
            </button>

            {/* Pitch Auto-Play Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                isAutoPlay
                  ? 'bg-amber-500/25 text-amber-200 border border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse'
                  : 'bg-[#112240] text-teal-300 border border-teal-400/40 hover:bg-teal-500/20 hover:text-white'
              }`}
            >
              <MonitorPlay className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isAutoPlay ? 'إيقاف العرض' : 'تشغيل العرض التلقائي'}
              </span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
