import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  LayoutDashboard, 
  User, 
  Users, 
  Percent, 
  Sparkles, 
  Clock,
  DollarSign
} from 'lucide-react';
import Logo from './Logo';

export default function BusinessModelSection() {
  const [providerStatus, setProviderStatus] = useState(true); // Online / Offline toggle
  const [promotionalActive, setPromotionalActive] = useState(true);
  const [daysOpen, setDaysOpen] = useState(5);

  return (
    <section id="business" className="py-24 px-4 relative overflow-hidden bg-[#0A192F]">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Presenter Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#112240] border border-teal-400/50 text-teal-200 text-xs sm:text-sm font-bold mb-3 shadow-[0_0_20px_rgba(45,212,191,0.2)]"
          >
            <User className="w-4 h-4 text-teal-400" />
            <span>عرض المتحدث: الطالب الثالث</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
            <span className="text-white font-semibold">نموذج العمل التجاري</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            نموذج العمل التجاري <span className="text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">| Multi-sided Platform</span>
          </motion.h2>

          {/* Intro Speech Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#112240] p-6 rounded-2xl max-w-4xl border border-teal-400/40 text-white text-base sm:text-lg font-bold leading-relaxed shadow-lg mb-10 text-right"
          >
            <p className="text-white">
              أهلاً بحضراتكم. نموذج العمل عندنا بيقوم على Multi-sided Platform (منصة ذات وجهين)؛ إحنا مش بنقدم الخدمة بنفسنا، إحنا بنبني سوق رقمي منظم بيربط بين العميل ومقدم الخدمة. والنموذج ده بيعتمد على 3 ركائز أساسية:
            </p>
          </motion.div>
        </div>

        {/* Animated Multi-Sided Platform Connection Flow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#112240] p-6 sm:p-8 rounded-3xl border border-teal-400/40 mb-16 relative overflow-hidden shadow-xl"
        >
          <div className="text-center mb-6">
            <span className="text-xs font-black px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-200 border border-teal-400/40">
              مخطط التفاعل بين أطراف المنصة (Platform Interaction Diagram)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center">
            
            {/* Customer Node */}
            <div className="p-5 rounded-2xl bg-[#0A192F] border border-teal-400/40 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-teal-500/30 text-teal-200 border border-teal-400 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(45,212,191,0.4)]">
                <Users className="w-7 h-7" />
              </div>
              <h4 className="font-extrabold text-white text-base">العميل / المستخدم</h4>
              <p className="text-xs text-slate-200 font-medium mt-1">تجميع كافة الاحتياجات اليومية في تطبيق واحد</p>
            </div>

            {/* Central ARFA Platform Node */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F2B48] to-[#0A192F] border border-teal-400 flex flex-col items-center relative shadow-[0_0_35px_rgba(20,184,166,0.4)]">
              <Logo className="w-12 h-12 mb-2" showText={false} />
              <h4 className="font-black text-teal-300 text-lg">منصة ARFA الرقمية</h4>
              <span className="text-xs text-white font-bold mt-1">وسيط ذكي منظم للمناقلات</span>
              
              <div className="hidden md:flex justify-between w-full mt-4 text-teal-300 text-xs font-bold px-2">
                <span>◀ طلب الخدمة</span>
                <span>توجيه وإدارة ▶</span>
              </div>
            </div>

            {/* Service Provider Node */}
            <div className="p-5 rounded-2xl bg-[#0A192F] border border-teal-400/40 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-amber-500/30 text-amber-300 border border-amber-400 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                <LayoutDashboard className="w-7 h-7" />
              </div>
              <h4 className="font-extrabold text-white text-base">مقدم الخدمة (System & لوحة تحكم)</h4>
              <p className="text-xs text-slate-200 font-medium mt-1">دكتور • مطعم • صنايعي • محلات تجارية</p>
            </div>

          </div>
        </motion.div>

        {/* 3 Interactive Pillar Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#112240] p-6 sm:p-8 rounded-3xl border border-teal-400/40 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-teal-500/25 text-teal-300 border border-teal-400">
                  <Sparkles className="w-7 h-7" />
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-[#0F2B48] text-teal-200 border border-teal-400/40">
                  الركيزة الأولى
                </span>
              </div>

              <h3 className="text-xl font-black text-white mb-4">
                1. القيمة المقدمة (Value Proposition)
              </h3>

              <div className="text-white text-sm sm:text-base leading-relaxed space-y-4 font-medium">
                <p>
                  للعميل، إحنا بنجمع له كل احتياجاته اليومية (مطاعم، توصيل، دكاترة، حرفيين) في مكان واحد بدل التشتت. ولمقدم الخدمة، إحنا بنوفر له قناة تسويقية جديدة تجيبله عملاء جدد ونظام لإدارة الطلبات.
                </p>

                <div className="p-4 rounded-2xl bg-[#0F2B48] border border-teal-400/50 text-white">
                  <p className="font-bold mb-1.5 flex items-center gap-1.5 text-teal-300">
                    <LayoutDashboard className="w-4 h-4 text-teal-400" />
                    <span>النقطة الأهم: لوحة التحكم المتقدمة</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                    وهنا النقطة الأهم: كل مقدم خدمة على المنصة (سواء دكتور، مطعم، أو صنايعي) بياخد System كامل ولوحة تحكم متقدمة خاصة بيه. بيقدر من خلالها يتحكم في وجوده على المنصة (أونلاين أو أوفلاين)، ويدير تفاصيل شغله بالكامل، زي الدكتور اللي بيقدر يتحكم في عدد الأيام اللي فاتح فيها عيادته وساعات العمل بتاعته، وهكذا لكل مجال.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Revenue Streams */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#112240] p-6 sm:p-8 rounded-3xl border border-teal-400/40 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-amber-500/25 text-amber-300 border border-amber-400">
                  <DollarSign className="w-7 h-7" />
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-400/40">
                  الركيزة الثانية
                </span>
              </div>

              <h3 className="text-xl font-black text-white mb-4">
                2. مصادر الإيرادات (Revenue Streams)
              </h3>

              <div className="text-white text-sm sm:text-base leading-relaxed space-y-4 font-medium">
                <p>
                  النموذج عندنا مرن ومبني على محورين أساسيين:
                </p>

                <div className="p-4 rounded-xl bg-[#0A192F] border border-teal-400/40 text-xs sm:text-sm space-y-1">
                  <span className="font-extrabold text-teal-300 block">المحور الأول: 'العمولة التشغيلية' 📊</span>
                  <p className="text-slate-100 leading-relaxed">
                    ودي نسبة مئوية بسيطة بنستقطعها من أي معاملة بتتم على المنصة، وده بيطبق على كل الخدمات بلا استثناء (مطاعم، مشاوير، دكاترة، وصنايعية).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0A192F] border border-amber-400/40 text-xs sm:text-sm space-y-1">
                  <span className="font-extrabold text-amber-300 block">المحور التاني: 'الاشتراكات الترويجية' ⭐</span>
                  <p className="text-slate-100 leading-relaxed">
                    وده اشتراك شهري اختياري لأي مقدم خدمة حابب يعزز ظهوره للعملاء، بحيث يظهر في صدارة نتائج البحث أو في قسم التوصيات، وده بيخلق مصدر دخل إضافي لينا وبيفيد مقدم الخدمة في زيادة مبيعاته.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pillar 3: Scalability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#112240] p-6 sm:p-8 rounded-3xl border border-teal-400/40 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-cyan-500/25 text-cyan-300 border border-cyan-400">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <span className="text-xs font-black px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-400/40">
                  الركيزة الثالثة
                </span>
              </div>

              <h3 className="text-xl font-black text-white mb-4">
                3. قابلية التوسع (Scalability)
              </h3>

              <div className="text-white text-sm sm:text-base leading-relaxed space-y-4 font-medium">
                <p>
                  الإيراد عندنا مش بيعتمد على بيع التطبيق لمرة واحدة، بل بيزيد طردياً مع زيادة حجم المعاملات والحركة على المنصة.
                </p>

                <div className="p-4 rounded-2xl bg-[#0F2B48] border border-cyan-400/50 text-white">
                  <p className="font-extrabold mb-1 text-cyan-300">التوسع الجغرافي والسوقي 🗺️</p>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                    ونفس النموذج ده قابل للتوسع والانتقال لأي منطقة تانية بنفس البنية الأساسية.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Interactive Provider Control Panel Simulation Widget */}
        <div className="bg-[#112240] p-6 sm:p-8 rounded-3xl border border-teal-400/50 mb-16 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 border-b border-teal-400/30 pb-4">
            <div>
              <span className="text-xs font-black text-teal-300 uppercase tracking-widest block mb-1">
                محاكاة حية تفاعلية
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <LayoutDashboard className="w-6 h-6 text-teal-400" />
                <span>نموذج لوحة تحكم مقدم الخدمة (Doctor / Restaurant System)</span>
              </h4>
            </div>

            <div className="flex items-center gap-3 bg-[#0A192F] px-4 py-2 rounded-2xl border border-teal-400/40">
              <span className="text-xs text-white font-extrabold">حالة التواجد الآن:</span>
              <button
                onClick={() => setProviderStatus(!providerStatus)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
                  providerStatus 
                    ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400' 
                    : 'bg-rose-500/30 text-rose-200 border border-rose-400'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${providerStatus ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'}`} />
                <span>{providerStatus ? 'متصل Online' : 'غير متصل Offline'}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-xs sm:text-sm font-medium">
            
            <div className="p-4 rounded-2xl bg-[#0A192F] border border-teal-400/40">
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-white flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span>أيام وساعات العمل بالعيادة:</span>
                </span>
                <span className="text-teal-300 font-black">{daysOpen} أيام/أسبوع</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="7" 
                value={daysOpen}
                onChange={(e) => setDaysOpen(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer"
              />
              <p className="text-[11px] text-slate-200 mt-2 font-medium">يتحكم الطبيب بالكامل بأيام الاستقبال والساعات المتاحة.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A192F] border border-amber-400/40">
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>الاشتراك الترويجي:</span>
                </span>
                <button 
                  onClick={() => setPromotionalActive(!promotionalActive)}
                  className={`text-xs px-2.5 py-1 rounded-md font-black ${
                    promotionalActive ? 'bg-amber-400 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {promotionalActive ? 'مفعل (صدارة البحث)' : 'غير مفعل'}
                </button>
              </div>
              <p className="text-[11px] text-slate-200 font-medium">يزيد من ظهور المقدم في اقتراحات التطبيق الأولى.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0A192F] border border-teal-400/40">
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-white flex items-center gap-1.5">
                  <Percent className="w-4 h-4 text-emerald-400" />
                  <span>العمولة التشغيلية تلقائية:</span>
                </span>
                <span className="text-emerald-300 font-black">مطبقة تلقائياً ⚡</span>
              </div>
              <p className="text-[11px] text-slate-200 font-medium">تقتطع نسبة بسيطة عادلة مع كل حجز أو معاملة ناجحة.</p>
            </div>

          </div>
        </div>

        {/* Footer Speech Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block bg-[#112240] p-6 sm:p-8 rounded-3xl border border-teal-400/50 max-w-4xl text-white text-base sm:text-lg font-bold shadow-xl">
            <p className="leading-relaxed text-white">
              عشان نقدر ندير المعاملات دي كلها بدون مشاكل، كان لازم البنية التحتية التقنية تكون قوية جدًا، وده اللي هيوضحه زميلي.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
