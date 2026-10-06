import React from 'react';
import { motion } from 'framer-motion';
import { 
  Utensils, 
  ShoppingBag, 
  Stethoscope, 
  Car, 
  Wrench, 
  Truck, 
  User, 
  Layers
} from 'lucide-react';

export default function EcosystemSection() {
  const ecosystemCards = [
    {
      id: 1,
      title: "1. قطاع المطاعم",
      description: "نظام بيخلي المطعم يعرض المنيو ويستقبل الطلب لحظيًا لحد ما يوصل للعميل.",
      icon: Utensils,
      color: "from-amber-500/25 to-orange-500/25",
      accent: "text-amber-400",
      border: "hover:border-amber-400/60",
    },
    {
      id: 2,
      title: "2. سوق الفيروز",
      description: "منصة تجارة إلكترونية بتخلي أصحاب المحلات يفتحوا سوق رقمي جديد لمنتجاتهم.",
      icon: ShoppingBag,
      color: "from-emerald-500/25 to-teal-500/25",
      accent: "text-emerald-400",
      border: "hover:border-emerald-400/60",
    },
    {
      id: 3,
      title: "3. القطاع الطبي",
      description: "نظام بيعرض تخصصات الدكاترة ومواعيدهم، وبيتيح للمريض حجز كشفه رقميًا.",
      icon: Stethoscope,
      color: "from-rose-500/25 to-pink-500/25",
      accent: "text-rose-400",
      border: "hover:border-rose-400/60",
    },
    {
      id: 4,
      title: "4. النقل والمشاوير",
      description: "فكرة مشابهة لأوبر، بتحدد موقعك وتربطك بأقرب وسيلة نقل.",
      icon: Car,
      color: "from-cyan-500/25 to-blue-500/25",
      accent: "text-cyan-400",
      border: "hover:border-cyan-400/60",
    },
    {
      id: 5,
      title: "5. الخدمات المهنية",
      description: "دليل تفاعلي بيوصلك لأقرب صنايعي أو حرفي بناءً على موقعك.",
      icon: Wrench,
      color: "from-orange-500/25 to-amber-600/25",
      accent: "text-orange-400",
      border: "hover:border-orange-400/60",
    },
    {
      id: 6,
      title: "6. القطاع اللوجستي",
      description: "لوحة تحكم للمندوبين عشان يستقبلوا طلبات المطاعم والمحلات ويوصلوها.",
      icon: Truck,
      color: "from-purple-500/25 to-indigo-500/25",
      accent: "text-purple-400",
      border: "hover:border-purple-400/60",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="ecosystem" className="py-24 px-4 relative overflow-hidden bg-mesh-pattern bg-[#0A192F]">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-teal-500/15 rounded-full blur-[160px] pointer-events-none" />

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
            <span>عرض المتحدث: الطالب الثاني</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
            <span className="text-white font-semibold">النظام البيئي</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            النظام البيئي <span className="text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]">| 6 أنظمة فرعية متكاملة</span>
          </motion.h2>

          {/* Exact Intro Speech Block - Lighter Navy (#112240) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#112240] p-6 rounded-2xl max-w-4xl border border-teal-400/40 text-white text-base sm:text-lg font-bold leading-relaxed shadow-lg mb-8"
          >
            <p className="text-white">
              أهلاً بحضراتكم. إحنا مجمعناش الخدمات دي بشكل عشوائي، إحنا بنينا 6 أنظمة فرعية متكاملة مختصرة وواضحة بتخدم على بعضها جوه منصة واحدة:
            </p>
          </motion.div>
        </div>

        {/* 6 Glassmorphism Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {ecosystemCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -6 }}
                className={`bg-[#112240] p-6 sm:p-7 rounded-3xl relative flex flex-col justify-between cursor-pointer border border-teal-400/40 bg-gradient-to-br ${card.color} ${card.border} shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3.5 rounded-2xl bg-[#0A192F] border border-teal-400/40 ${card.accent} shadow-md`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-black px-3.5 py-1 rounded-full bg-[#0F2B48] text-teal-200 border border-teal-400/40">
                      النظام #{card.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3">
                    {card.title}
                  </h3>

                  <p className="text-white font-medium text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Speech Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-[#112240] p-6 sm:p-8 rounded-3xl border border-teal-400/50 max-w-4xl text-white text-base sm:text-lg font-bold shadow-[0_0_35px_rgba(20,184,166,0.25)]">
            <p className="text-teal-300 flex items-center justify-center gap-2 mb-2 font-extrabold">
              <Layers className="w-5 h-5 text-teal-400" />
              <span>ترابط الأنظمة:</span>
            </p>
            <p className="leading-relaxed text-white">
              كل الأنظمة دي شغالة مع بعضها، وعشان المشروع ده يكون مستدام، كان لازم نبني له نموذج عمل تجاري قوي، وده اللي هيشرحه زميلي.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
