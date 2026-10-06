import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Utensils, 
  Car, 
  Stethoscope, 
  Wrench, 
  ShoppingBag, 
  Bot, 
  MapPin, 
  User, 
  Send,
  Sparkles
} from 'lucide-react';
import Logo from './Logo';

export default function ProblemIdeaSection() {
  const [activeTab, setActiveTab] = useState('merged'); // 'fragmented' | 'merged'
  const [aiPrompt, setAiPrompt] = useState('محتاج دكتور مواعيد عيادته مريحة في العريش');
  const [aiResult, setAiResult] = useState('تم توجيهك للقطاع الطبي: د. محمد - تخصص أطفال (العريش) | متاح اليوم 6-9 مساءً');

  const iconsList = [
    { icon: Utensils, label: 'أكل ومطاعم', color: 'text-amber-400', border: 'border-amber-400/40' },
    { icon: Car, label: 'مواصلة ونقل', color: 'text-cyan-400', border: 'border-cyan-400/40' },
    { icon: Stethoscope, label: 'دكتور وكشف', color: 'text-rose-400', border: 'border-rose-400/40' },
    { icon: Wrench, label: 'صنايعي وحرفي', color: 'text-orange-400', border: 'border-orange-400/40' },
    { icon: ShoppingBag, label: 'منتج وتسوق', color: 'text-emerald-400', border: 'border-emerald-400/40' },
  ];

  const handleAiSearch = (text) => {
    setAiPrompt(text);
    if (text.includes('دكتور')) {
      setAiResult('تم التوجيه فوراً: [القطاع الطبي] 🏥 حجز دكتور في العريش بسهولة.');
    } else if (text.includes('صنايعي')) {
      setAiResult('تم التوجيه فوراً: [الخدمات المهنية] 🛠️ أسبق لك أقرب كهربائي أو سباك في موقعك.');
    } else if (text.includes('أكل') || text.includes('مطعم')) {
      setAiResult('تم التوجيه فوراً: [قطاع المطاعم] 🍔 منيو أفضل مطاعم شمال سيناء مع التوصيل.');
    } else {
      setAiResult(`تم فهم طلبك: "${text}" 🤖 وجاري ربطك بالخدمة المناسبة عبر ARFA.`);
    }
  };

  return (
    <section id="problem" className="py-24 px-4 relative overflow-hidden bg-[#0A192F]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Presenter Badge */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#112240] border border-teal-400/50 text-teal-200 text-xs sm:text-sm font-bold mb-3 shadow-[0_0_20px_rgba(45,212,191,0.2)]"
          >
            <User className="w-4 h-4 text-teal-400" />
            <span>عرض المتحدث: الطالب الأول</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
            <span className="text-white font-semibold">المشكلة والفكرة</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            المشكلة والفكرة <span className="text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">| أرض الفيروز ARFA</span>
          </motion.h2>
        </div>

        {/* Split Layout: Text Presentation vs Visual Icon Merging Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* RIGHT COLUMN: Exact Presentation Text (Arabic) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Main Narrative Card - Lighter Navy (#112240) for high contrast */}
            <div className="bg-[#112240] p-6 sm:p-8 rounded-3xl border border-teal-400/40 relative shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="space-y-6 text-slate-100 text-base sm:text-lg leading-relaxed">
                
                <p className="font-bold text-teal-300 text-lg border-r-4 border-teal-400 pr-4 py-1 leading-relaxed">
                  بدأت فكرة أرض الفيروز (ARFA) من حاجة بسيطة إحنا كطلاب بنشوفها في حياتنا اليومية. لما بنحتاج خدمة، سواء أكل، مواصلة، دكتور، توصيل، صنايعي أو حتى منتج معين، غالبًا بنضطر ندور ونسأل ونتواصل مع أكتر من شخص أو مكان، وكل خدمة ليها طريقة مختلفة للوصول ليها. وقتها بدأنا نسأل نفسنا: ليه ما يكونش فيه مكان واحد نبدأ منه، بدل ما كل مرة نبدأ من الصفر؟
                </p>

                <p className="text-white font-medium">
                  من هنا بدأت فكرة ARFA. إحنا مش هدفنا إننا نحط أكبر عدد ممكن من الخدمات في تطبيق واحد لمجرد إنه يبقى كبير، لكن هدفنا إننا نبني طريقة أبسط للوصول للخدمات الموجودة حوالينا بالفعل، ونخلي التعامل بين العميل ومقدم الخدمة أكثر تنظيمًا. عشان كده بدأنا بأكثر من نوع خدمة، لأن احتياجات الشخص مش بتقف عند احتياج واحد.
                </p>

                {/* AI Assistant Callout Box */}
                <div className="p-5 rounded-2xl bg-[#0F2B48] border border-teal-400/50 shadow-inner space-y-3">
                  <div className="flex items-center gap-2 text-teal-300 font-extrabold text-base">
                    <Bot className="w-5 h-5 text-teal-400 animate-pulse" />
                    <span>المساعد الذكي (Smart AI Assistant):</span>
                  </div>
                  <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
                    وضفنا كمان مساعدًا ذكيًا داخل التطبيق، مش لمجرد إضافة كلمة AI للمشروع، لكن عشان يساعد المستخدم لما يكون عارف هو محتاج إيه ومش عارف يبدأ منين. يقدر يكتب أو يتكلم عن احتياجه بطريقة طبيعية، والمساعد يساعده يوصل للخدمة المناسبة داخل ARFA.
                  </p>
                </div>

                {/* North Sinai Starting Point Box */}
                <div className="p-5 rounded-2xl bg-[#0E353B] border border-teal-400/50 text-teal-100 text-sm sm:text-base">
                  <div className="flex items-center gap-2 font-black text-white text-base mb-2">
                    <MapPin className="w-5 h-5 text-teal-400" />
                    <span>شمال سيناء 📍</span>
                  </div>
                  <p className="text-white font-medium leading-relaxed">
                    إحنا بدأنا من المكان اللي عايشين فيه وفاهمين احتياجاته، شمال سيناء، وده بالنسبة لنا نقطة البدايه مش النهاية. هدفنا إننا نجرب الفكرة بشكل حقيقي، نسمع من المستخدمين ومقدمي الخدمات، نطورها بناءً على الاستخدام الفعلي، ولو أثبتت نجاحها نقدر نوسعها لمناطق وأسواق أكبر. وعشان نشرح لكم التطبيق والخدمات اللي جواه بشكل عملي، هسيب الكلمة لزميلي.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* LEFT COLUMN: Animated Merging Icons Visual & AI Demo Widget */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Interactive Toggle for Visualization */}
            <div className="bg-[#112240] p-6 rounded-3xl border border-teal-400/40 text-center flex flex-col items-center shadow-lg">
              <div className="flex items-center gap-2 mb-4 bg-[#0A192F] p-1.5 rounded-full border border-teal-400/30">
                <button
                  onClick={() => setActiveTab('fragmented')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeTab === 'fragmented' 
                      ? 'bg-rose-500/30 text-rose-200 border border-rose-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  قبل ARFA (خدمات متشتتة)
                </button>
                <button
                  onClick={() => setActiveTab('merged')}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeTab === 'merged' 
                      ? 'bg-teal-500 text-slate-950 font-black shadow-[0_0_18px_rgba(45,212,191,0.6)]' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  مع ARFA (تطبيق واحد متكامل)
                </button>
              </div>

              {/* Dynamic Merging Canvas */}
              <div className="relative w-full h-80 rounded-2xl bg-gradient-to-b from-[#0F263B] to-[#0A192F] border border-teal-400/40 flex items-center justify-center overflow-hidden p-4">
                
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                <div className="absolute w-64 h-64 border border-teal-400/20 rounded-full animate-ping pointer-events-none" />

                {activeTab === 'fragmented' ? (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <p className="text-xs text-rose-300 font-extrabold mb-6 bg-rose-950/80 px-3.5 py-1.5 rounded-full border border-rose-500/50">
                      ⚠️ خدمات متشتتة - طرق وصول مختلفة لكل خدمة!
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {iconsList.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={idx}
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 2 + idx * 0.4, repeat: Infinity }}
                            className={`flex flex-col items-center p-3 rounded-xl bg-[#112240] border ${item.border}`}
                          >
                            <Icon className={`w-7 h-7 mb-1 ${item.color}`} />
                            <span className="text-[11px] text-white font-bold">{item.label}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {iconsList.map((item, idx) => {
                      const Icon = item.icon;
                      const angles = [0, 72, 144, 216, 288];
                      const angle = (angles[idx] * Math.PI) / 180;
                      const radius = 100;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;

                      return (
                        <motion.div
                          key={idx}
                          initial={{ x: 0, y: 0, scale: 0.2 }}
                          animate={{ x, y, scale: 1 }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                          className={`absolute p-3 rounded-full bg-[#112240] border ${item.border} shadow-[0_0_20px_rgba(20,184,166,0.4)] flex items-center justify-center`}
                        >
                          <Icon className={`w-5 h-5 ${item.color}`} />
                        </motion.div>
                      );
                    })}

                    <motion.div
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-br from-teal-400 via-teal-500 to-[#112240] p-0.5 shadow-[0_0_40px_rgba(45,212,191,0.6)] cursor-pointer"
                    >
                      <div className="w-full h-full bg-[#0A192F] rounded-[22px] flex flex-col items-center justify-center p-2 text-center">
                        <Logo className="w-10 h-10 mb-1" showText={false} />
                        <span className="text-xs font-black text-white">ARFA App</span>
                        <span className="text-[9px] text-teal-300 font-bold">مكان واحد نبدأ منه</span>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>

            {/* AI Assistant Interactive Simulation Widget */}
            <div className="bg-[#112240] p-6 rounded-3xl border border-teal-400/40 shadow-lg">
              <div className="flex items-center gap-2 mb-3 text-teal-300 font-extrabold text-sm">
                <Bot className="w-5 h-5 text-teal-400" />
                <span>المساعد الذكي داخل التطبيق</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="اكتب أو اتكلم عن احتياجك بطبيعية..."
                    className="flex-1 bg-[#0A192F] border border-teal-400/40 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-teal-300"
                  />
                  <button
                    onClick={() => handleAiSearch(aiPrompt)}
                    className="bg-teal-400 hover:bg-teal-300 text-slate-950 p-3 rounded-xl font-extrabold transition-all shadow-[0_0_15px_rgba(45,212,191,0.4)]"
                  >
                    <Send className="w-4 h-4 rotate-180" />
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0F2B48] border border-teal-400/40 text-xs text-teal-200 font-bold flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{aiResult}</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
