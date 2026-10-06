import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemIdeaSection from './components/ProblemIdeaSection';
import EcosystemSection from './components/EcosystemSection';
import BusinessModelSection from './components/BusinessModelSection';
import TechnicalSection from './components/TechnicalSection';
import DemoVideoSection from './components/DemoVideoSection';
import OutroSection from './components/OutroSection';
import SecretQAModal from './components/SecretQAModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isQAModalOpen, setIsQAModalOpen] = useState(false);

  const sectionsOrder = ['hero', 'problem', 'ecosystem', 'business', 'technical', 'demo', 'outro'];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll Spy for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sectionsOrder) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play pitch presentation logic
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveSection((prev) => {
          const currentIndex = sectionsOrder.indexOf(prev);
          const nextIndex = (currentIndex + 1) % sectionsOrder.length;
          const nextSection = sectionsOrder[nextIndex];
          const element = document.getElementById(nextSection);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          return nextSection;
        });
      }, 14000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <div className="min-h-screen bg-[#0A192F] text-slate-100 font-['Alexandria',sans-serif] selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden" dir="rtl">
      
      {/* Floating Header Navbar */}
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        isAutoPlay={isAutoPlay}
        setIsAutoPlay={setIsAutoPlay}
        openQAModal={() => setIsQAModalOpen(true)}
      />

      {/* Main Pitch Deck Sections */}
      <main className="bg-[#0A192F]">
        <HeroSection scrollToSection={scrollToSection} />
        <ProblemIdeaSection />
        <EcosystemSection />
        <BusinessModelSection />
        <TechnicalSection />
        <DemoVideoSection />
        <OutroSection scrollToSection={scrollToSection} />
      </main>

      {/* Hidden Q&A Dashboard Modal (Ctrl + K or Alt + Q) */}
      <SecretQAModal 
        isOpen={isQAModalOpen} 
        setIsOpen={setIsQAModalOpen} 
      />
    </div>
  );
}
