import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  HelpCircle, 
  GraduationCap, 
  Target, 
  Key, 
  BrainCircuit
} from 'lucide-react';

export default function SecretQAModal({ isOpen, setIsOpen }) {
  const [activeTab, setActiveTab] = useState('section1');

  // Keyboard shortcut listener (Ctrl + K or Alt + Q)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.altKey && e.key.toLowerCase() === 'q')) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  const section1Questions = [
    {
      q: "سؤال 1: هل نادي ريادة الأعمال في الجامعة ساعدكم تحولوا فكرتكم لمشروع؟",
      a: "أكيد. النادي كان له دور في تغيير الـ Mindset (طريقة التفكير) بتاعتنا. إحنا كطلاب حاسبات كنا مركزين في الكود والبرمجة بس، لكن من خلال بيئة ريادة الأعمال في الجامعة اتعلمنا إزاي نفكر في 'نموذج العمل التجاري' (Business Model)، وإزاي نحل مشكلة حقيقية للعميل بدل ما نعمل تطبيق ملوش استخدام على الأرض."
    },
    {
      q: "سؤال 2: هل هتحتاج مرشد (Mentor) معاك من السوق؟",
      a: "بكل تأكيد. إحنا نمتلك الجانب التقني القوي لبناء البنية التحتية للمشروع، لكن ARFA هو مشروع يعتمد على 'العمليات اللوجستية' (Operations) وإدارة مقدمي الخدمات. محتاجين مرشد من السوق عنده خبرة في إدارة المبيعات، التعامل مع التجّار، وفهم سلوك المستهلك في شمال سيناء عشان يساعدنا في خطة الإطلاق (Go-to-market strategy)."
    },
    {
      q: "سؤال 3: هل إنت خايف من المخاطرة؟ (تخاطر بالفكرة بتاعتك)",
      a: "رائد الأعمال مش بيخاف من المخاطرة، لكنه بيعمل 'مخاطرة محسوبة' (Calculated Risk). إحنا قللنا المخاطرة التقنية باستخدام تقنية PWA اللي تكلفتها أقل وسرعتها أعلى. وقللنا المخاطرة التجارية بإننا مش هننزل لكل المحافظة مرة واحدة؛ هنبدأ بنطاق جغرافي ضيق جداً كفترة تشغيل تجريبي، نختبر فيه السوق ونعدل الأخطاء بدون ما نخسر ميزانيات تسويق ضخمة."
    },
    {
      q: "سؤال 4: هل إنت على علم بكل خدمات الابتكار اللي بتقدمها الجامعة؟",
      a: "نعم، ومتابعين لجهود الحاضنات التكنولوجية ومراكز الإبداع بالجامعة، واللي بنطمح إن مشروع ARFA يكون واحد من المشاريع اللي تتبناها الجامعة وتوفرلها الدعم الاستشاري والربط مع المستثمرين المحليين."
    },
  ];

  const section2Questions = [
    {
      q: "1. ما الذي حدث وما الذي نجح؟",
      a: "اللي حدث إننا نجحنا في تحويل فكرة نظرية لـ Prototype (نموذج أولي) شغال ومستقر تقنياً. اللي نجح تحديداً هو 'البنية التحتية التقنية'؛ قدرنا ندمج 6 أنظمة فرعية في منصة واحدة بدون ما النظام يقع، ونجحنا في تشغيل خوارزميات معقدة زي (الفلترة الجغرافية) ونظام (العقوبات التلقائي)، وده أثبت إن المنصة قادرة على تحمل ضغط العمليات."
    },
    {
      q: "2. ما الفجوات (اللي كانت ناقصاك عشان تكمل)؟",
      a: "الفجوة الأساسية هي 'الجانب التشغيلي والقانوني'. تقنياً المشروع جاهز، لكن تجارياً ينقصنا: أولاً: غطاء قانوني أو شركة ناشئة مسجلة لنتمكن من توقيع عقود مع المطاعم والأطباء. ثانياً: بناء الشبكة الأولى من مقدمي الخدمات (التجار/العيادات) اللي هيجذبوا العملاء للمنصة."
    },
    {
      q: "3. لماذا هذه الفجوات؟",
      a: "لأننا فريق من الطلاب نركز دراستنا ووقتنا ومواردنا المالية المحدودة في البحث والتطوير البرمجي (R&D). بناء ثقة مع التجار في السوق المحلي بيتطلب تفرغ، ميزانية تسويق، وكيان قانوني رسمي، ودي موارد لسه بنسعى لتوفيرها من خلال المستثمرين أو حاضنات الأعمال."
    },
    {
      q: "4. ما الحلول؟ (وما المخاطرة والتكلفة؟)",
      a: "الحل هو 'التشغيل التجريبي المصغر' (Pilot Phase). الخطوة: تنظيم ورشة عمل مصغرة بالتعاون مع الجامعة، ندعو فيها عدد محدود من أصحاب المحلات أو الشركات الصغيرة لعرض النظام عليهم وتسجيلهم مجاناً لفترة تجريبية. المميزات: توفير قاعدة بيانات أولية للتطبيق، واختبار النظام في بيئة حقيقية. التكلفة والمخاطرة: التكلفة شبه معدومة (مجهود تنظيمي فقط). المخاطرة الوحيدة هي إقناع التجار بتغيير طريقتهم التقليدية، لكننا هنعالج ده بإن النظام هيكون مجاني تماماً ليهم في البداية لتشجيعهم."
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* Backdrop Blur Overlay with Deep Navy Tint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#0A192F]/95 backdrop-blur-xl"
          />

          {/* Modal Container - Lighter Navy (#112240) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-4xl max-h-[85vh] rounded-3xl border-2 border-teal-400/60 bg-[#112240] shadow-[0_0_60px_rgba(45,212,191,0.4)] flex flex-col overflow-hidden text-right"
            dir="rtl"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-teal-400/30 bg-[#0A192F] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-teal-500/30 text-teal-200 border border-teal-400">
                  <BrainCircuit className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white flex items-center gap-2">
                    <span>دليل إجابات المناقشة والأسئلة السرية</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-400 text-slate-950 font-black">
                      Ctrl + K
                    </span>
                  </h3>
                  <p className="text-xs text-teal-200 font-bold mt-0.5">
                    الردود النموذجية المحضرة لمناقشة لجنة تحكيم مشروع ARFA
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-[#112240] text-slate-200 hover:text-white hover:bg-rose-500/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Navigation Tabs */}
            <div className="flex border-b border-teal-400/30 bg-[#0A192F] px-6 pt-3 gap-3">
              <button
                onClick={() => setActiveTab('section1')}
                className={`flex items-center gap-2 px-5 py-3 rounded-t-2xl font-black text-xs sm:text-sm transition-all ${
                  activeTab === 'section1'
                    ? 'bg-[#112240] text-teal-200 border-t-2 border-x border-teal-400 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-teal-300" />
                <span>القسم الأول: أسئلة البيئة الجامعية وريادة الأعمال</span>
              </button>

              <button
                onClick={() => setActiveTab('section2')}
                className={`flex items-center gap-2 px-5 py-3 rounded-t-2xl font-black text-xs sm:text-sm transition-all ${
                  activeTab === 'section2'
                    ? 'bg-[#112240] text-amber-200 border-t-2 border-x border-amber-400 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Target className="w-4 h-4 text-amber-400" />
                <span>القسم الثاني: الأسئلة الأربعة الثابتة (تحليل ما بعد التنفيذ)</span>
              </button>
            </div>

            {/* Modal Body Scroll Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 max-h-[60vh] bg-[#112240]">
              {activeTab === 'section1' ? (
                <div className="space-y-6">
                  {section1Questions.map((item, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#0A192F] border border-teal-400/40 space-y-3 shadow-md">
                      <h4 className="font-black text-teal-300 text-base flex items-start gap-2">
                        <HelpCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{item.q}</span>
                      </h4>
                      <p className="text-white text-sm sm:text-base leading-relaxed bg-[#0F2B48] p-4 rounded-xl border border-teal-400/30 font-medium">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {section2Questions.map((item, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#0A192F] border border-amber-400/40 space-y-3 shadow-md">
                      <h4 className="font-black text-amber-300 text-base flex items-start gap-2">
                        <Target className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item.q}</span>
                      </h4>
                      <p className="text-white text-sm sm:text-base leading-relaxed bg-[#1D2E44] p-4 rounded-xl border border-amber-400/30 font-medium">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#0A192F] border-t border-teal-400/30 flex items-center justify-between text-xs text-slate-200 font-bold">
              <span className="flex items-center gap-1.5">
                <Key className="w-4 h-4 text-teal-300" />
                <span>اختصار التفعيل: اضغط <strong>Ctrl + K</strong> أو <strong>Alt + Q</strong> لإغلاق أو فتح اللوحة</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 rounded-xl bg-teal-400 text-slate-950 font-black hover:bg-teal-300 transition-colors shadow-md"
              >
                إغلاق اللوحة
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
