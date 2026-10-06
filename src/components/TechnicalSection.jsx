import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, 
  ShieldCheck, 
  MapPin, 
  AlertTriangle, 
  Code, 
  User, 
  Globe
} from 'lucide-react';

export default function TechnicalSection() {
  const [selectedCity, setSelectedCity] = useState('العريش');
  const [ignoredOrders, setIgnoredOrders] = useState(0);
  const [strikeStatus, setStrikeStatus] = useState('Online متصل ومتاح');

  const handleIgnoreOrder = () => {
    if (ignoredOrders < 2) {
      setIgnoredOrders(ignoredOrders + 1);
    } else {
      setIgnoredOrders(3);
      setStrikeStatus('⛔ تم التحويل تلقائيًا لـ Offline بقرار النظام!');
    }
  };

  const resetStrikeSystem = () => {
    setIgnoredOrders(0);
    setStrikeStatus('Online متصل ومتاح');
  };

  return (
    <section id="technical" className="py-24 px-4 relative overflow-hidden bg-[#0A192F]">
      
      {/* Cyber ambient glow lights */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Presenter Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#112240] border border-cyan-400/50 text-cyan-200 text-xs sm:text-sm font-bold mb-3 shadow-[0_0_20px_rgba(45,212,191,0.2)]"
          >
            <User className="w-4 h-4 text-cyan-400" />
            <span>عرض المتحدث: الطالب الرابع</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span className="text-white font-semibold">الجانب التقني</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            الجانب التقني <span className="text-cyan-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">| Architecture & Security</span>
          </motion.h2>

          {/* Intro Speech Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#112240] p-6 rounded-2xl max-w-4xl border border-cyan-400/40 text-white text-base sm:text-lg font-bold leading-relaxed shadow-lg mb-10 text-right"
          >
            <p className="text-white">
              بالنسبة للجانب التقني، إحنا واجهنا تحدي إننا عايزين تطبيق سريع، مساحته خفيفة، وبيشتغل على كل الأجهزة.
            </p>
          </motion.div>
        </div>

        {/* Technical Architecture Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: PWA + Flutter Web View */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#112240] p-6 sm:p-8 rounded-3xl border border-cyan-400/40 relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3.5 rounded-2xl bg-[#0A192F] text-cyan-300 border border-cyan-400/50">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white">
                1. البنية التحتية (PWA + Flutter Web View)
              </h3>
            </div>

            <p className="text-white font-medium text-sm sm:text-base leading-relaxed mb-6">
              عشان كده استخدمنا تقنية (PWA) عشان التطبيق يشتغل بكفاءة حتى لو الإنترنت ضعيف. وعشان نرفعه على متاجر التطبيقات وندي العميل تجربة Native سريعة، غلفنا المشروع ده باستخدام Flutter Web View، وده خلانا نقدر نبعت تحديثات لحظية لكل المستخدمين من غير ما نستنى موافقات المتاجر.
            </p>

            {/* Visual Node Diagram */}
            <div className="p-4 rounded-2xl bg-[#0A192F] border border-cyan-400/40 flex items-center justify-around text-center text-xs">
              <div className="flex flex-col items-center">
                <span className="w-10 h-10 rounded-xl bg-[#0F2B48] border border-cyan-400 text-cyan-200 flex items-center justify-center font-extrabold mb-1">PWA</span>
                <span className="text-slate-100 font-bold">تطبيق خفيف ومباشر</span>
              </div>
              <span className="text-cyan-300 text-lg font-bold">➔</span>
              <div className="flex flex-col items-center">
                <span className="w-10 h-10 rounded-xl bg-[#0E353B] border border-teal-400 text-teal-200 flex items-center justify-center font-extrabold mb-1">Flutter</span>
                <span className="text-slate-100 font-bold">الغلاف (Native Wrapper)</span>
              </div>
              <span className="text-cyan-300 text-lg font-bold">➔</span>
              <div className="flex flex-col items-center">
                <span className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-400 text-emerald-200 flex items-center justify-center font-extrabold mb-1">Live</span>
                <span className="text-slate-100 font-bold">تحديثات لحظية سريعة</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Geo-Locking Algorithm */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#112240] p-6 sm:p-8 rounded-3xl border border-teal-400/40 relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-[#0A192F] text-teal-300 border border-teal-400/50 relative">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  2. الفلترة الجغرافية (Geo-Locking)
                </h3>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-teal-500/30 text-teal-200 border border-teal-400 font-bold animate-pulse">
                خوارزمية ذكية ⚡
              </span>
            </div>

            <p className="text-white font-medium text-sm sm:text-base leading-relaxed mb-6">
              التطبيق بتاعنا مش بس بيعرض بيانات، ده بيفكر. إحنا برمجنا خوارزمية ذكية اسمها 'الفلترة الجغرافية' (Geo-Locking). العميل اللي في بئر العبد بيشوف خدمات بئر العبد بس، واللي في العريش بيشوف العريش بس. ده بيوفر آلاف العمليات على السيرفر وبيقلل التكلفة جدًا.
            </p>

            {/* Interactive Geo-Locking City Switcher Demo */}
            <div className="p-4 rounded-2xl bg-[#0A192F] border border-teal-400/40">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-teal-300 font-extrabold">اختبر الفلترة الجغرافية الآن:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedCity('العريش')}
                    className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                      selectedCity === 'العريش' ? 'bg-teal-400 text-slate-950 shadow-md' : 'bg-[#112240] text-slate-200'
                    }`}
                  >
                    📍 العريش
                  </button>
                  <button
                    onClick={() => setSelectedCity('بئر العبد')}
                    className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                      selectedCity === 'بئر العبد' ? 'bg-teal-400 text-slate-950 shadow-md' : 'bg-[#112240] text-slate-200'
                    }`}
                  >
                    📍 بئر العبد
                  </button>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0F2B48] border border-teal-400/40 text-xs text-white font-bold flex items-center justify-between">
                <span>البيانات المحملة للسيرفر: <strong>خدمات نطاق {selectedCity} فقط</strong></span>
                <span className="text-emerald-300 font-extrabold">توفير 92% من الاستعلامات ✨</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Strike System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#112240] p-6 sm:p-8 rounded-3xl border border-amber-400/40 relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3.5 rounded-2xl bg-[#0A192F] text-amber-300 border border-amber-400/50">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-xl font-extrabold text-white">
                3. نظام العقوبات الإلكتروني (Strike System)
              </h3>
            </div>

            <p className="text-white font-medium text-sm sm:text-base leading-relaxed mb-6">
              وعشان نضمن جودة الخدمة، عملنا نظام عقوبات إلكتروني (Strike System). لو مطعم أو مندوب تجاهل 3 طلبات ورا بعض، النظام بيحوله أوتوماتيك لـ Offline عشان منضيعش وقت العميل.
            </p>

            {/* Interactive Strike Counter Widget */}
            <div className="p-4 rounded-2xl bg-[#0A192F] border border-amber-400/40 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-amber-300">محاكي الإنذارات المتتالية:</span>
                <span className="text-white font-bold">عدد الطلبات المتجاهلة: <strong className="text-amber-300">{ignoredOrders} / 3</strong></span>
              </div>

              <div className="flex gap-2">
                {[1, 2, 3].map((num) => (
                  <div 
                    key={num} 
                    className={`flex-1 h-3 rounded-full transition-all duration-300 ${
                      ignoredOrders >= num ? 'bg-rose-500 shadow-[0_0_12px_#f43f5e]' : 'bg-[#112240]'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleIgnoreOrder}
                  disabled={ignoredOrders >= 3}
                  className="px-3.5 py-1.5 rounded-xl bg-rose-500/30 hover:bg-rose-500/50 text-rose-200 border border-rose-400 text-xs font-black transition-all disabled:opacity-50"
                >
                  تجاهل طلب جديد (+1)
                </button>

                <button
                  onClick={resetStrikeSystem}
                  className="px-3 py-1.5 rounded-xl bg-[#112240] text-slate-200 hover:text-white text-xs font-bold"
                >
                  إعادة ضبط المحاكاة 🔄
                </button>
              </div>

              <div className="p-3 rounded-xl bg-[#0F2B48] border border-amber-400/40 text-xs text-white font-extrabold">
                {strikeStatus}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Firestore Security Rules */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#112240] p-6 sm:p-8 rounded-3xl border border-cyan-400/40 relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-[#0A192F] text-cyan-300 border border-cyan-400/50 relative">
                  <ShieldCheck className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  4. قواعد الأمان الحازمة (Firestore Security Rules)
                </h3>
              </div>
              <Lock className="w-5 h-5 text-cyan-300 animate-pulse" />
            </div>

            <p className="text-white font-medium text-sm sm:text-base leading-relaxed mb-6">
              وكل ده محمي بقواعد أمان صارمة في قاعدة البيانات (Firestore Security Rules) بتضمن إن مستحيل أي مستخدم يطلع على بيانات مستخدم تاني.
            </p>

            {/* High-Tech Code Snippet Window */}
            <div className="rounded-2xl bg-[#06101E] border border-cyan-400/40 overflow-hidden font-mono text-xs shadow-inner">
              <div className="bg-[#0A192F] px-4 py-2 border-b border-cyan-400/30 flex items-center justify-between text-[11px] text-slate-200">
                <span className="flex items-center gap-2 font-bold">
                  <Code className="w-3.5 h-3.5 text-cyan-300" />
                  firestore.rules
                </span>
                <span className="text-emerald-300 font-extrabold">Secured 🔒</span>
              </div>
              <div className="p-4 text-slate-100 space-y-1 overflow-x-auto text-left font-bold" dir="ltr">
                <p><span className="text-purple-300">rules_version</span> = <span className="text-amber-300">'2'</span>;</p>
                <p><span className="text-blue-300">match</span> /databases/{'{database}'}/documents &#123;</p>
                <p className="pl-4"><span className="text-blue-300">match</span> /users/&#123;userId&#125; &#123;</p>
                <p className="pl-8"><span className="text-purple-300">allow</span> read, write: <span className="text-purple-300">if</span> request.auth != <span className="text-rose-300">null</span> &amp;&amp; request.auth.uid == userId;</p>
                <p className="pl-4">&#125;</p>
                <p>&#125;</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
