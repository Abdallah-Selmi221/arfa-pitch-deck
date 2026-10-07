import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  HelpCircle, 
  GraduationCap, 
  Target, 
  Key, 
  BrainCircuit,
  Building2,
  TrendingUp,
  Briefcase
} from 'lucide-react';

export default function SecretQAModal({ isOpen, setIsOpen }) {
  const [activeTab, setActiveTab] = useState('tab1');

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

  // Tab 1: أسئلة عامة (البيئة الجامعية)
  const tab1Data = [
    {
      q: "س1: هل نادي ريادة الأعمال بالجامعة ساعدكم؟",
      a: "أكيد. النادي كان له دور في تغيير الـ Mindset (طريقة التفكير) بتاعتنا. إحنا كطلاب حاسبات كنا مركزين في الكود والبرمجة بس، لكن من خلال بيئة ريادة الأعمال في الجامعة اتعلمنا إزاي نفكر في 'نموذج العمل التجاري' (Business Model)، وإزاي نحل مشكلة حقيقية للعميل بدل ما نعمل تطبيق ملوش استخدام على الأرض."
    },
    {
      q: "س2: هل هتحتاج مرشد (Mentor) معاك من السوق؟",
      a: "بكل تأكيد. إحنا نمتلك الجانب التقني القوي لبناء البنية التحتية للمشروع، لكن ARFA هو مشروع يعتمد على 'العمليات اللوجستية' (Operations) وإدارة مقدمي الخدمات. محتاجين مرشد من السوق عنده خبرة في إدارة المبيعات، التعامل مع التجّار، وفهم سلوك المستهلك في شمال سيناء عشان يساعدنا في خطة الإطلاق (Go-to-market strategy)."
    },
    {
      q: "س3: هل إنت خايف من المخاطرة؟ (تخاطر بالفكرة بتاعتك)",
      a: "رائد الأعمال مش بيخاف من المخاطرة، لكنه بيعمل 'مخاطرة محسوبة' (Calculated Risk). إحنا قللنا المخاطرة التقنية باستخدام تقنية PWA اللي تكلفتها أقل وسرعتها أعلى. وقللنا المخاطرة التجارية بإننا مش هننزل لكل المحافظة مرة واحدة؛ هنبدأ بنطاق جغرافي ضيق جداً كفترة تشغيل تجريبي، نختبر فيه السوق ونعدل الأخطاء بدون ما نخسر ميزانيات تسويق ضخمة."
    },
    {
      q: "س4: هل إنت على علم بخدمات الابتكار بالجامعة؟",
      a: "نعم، ومتابعين لجهود الحاضنات التكنولوجية ومراكز الإبداع بالجامعة، واللي بنطمح إن مشروع ARFA يكون واحد من المشاريع اللي تتبناها الجامعة وتوفرلها الدعم الاستشاري والربط مع المستثمرين المحليين."
    },
  ];

  // Tab 2: الجلسة الأولى (الابتكار الجامعي)
  const tab2Data = [
    {
      q: "1. ما الذي حدث وما الذي نجح؟",
      a: "نجحنا في تغيير طريقة تفكيرنا (Mindset) كطلاب من مجرد كتابة أكواد برمجية إلى بناء 'نموذج عمل تجاري' حقيقي يحل مشكلة يومية في شمال سيناء. بيئة الابتكار في الجامعة ساعدتنا على الانتقال بالفكرة من مجرد مشروع تخرج إلى مشروع قابل للنمو (Startup)."
    },
    {
      q: "2. ما الفجوات؟",
      a: "الفجوة تكمن في 'المهارات والخبرة' في الجانب الإداري والتسويقي. نحن نملك المهارة التقنية، لكن ينقصنا مرشد (Mentor) من السوق المحلي يوجهنا في كيفية إقناع التجار ومقدمي الخدمات."
    },
    {
      q: "3. لماذا هذه الفجوات؟ (الأسباب)",
      a: "لأننا كطلاب نركز دراستنا ووقتنا الأكبر في البحث والتطوير البرمجي (R&D). الاحتكاك الفعلي بالسوق يتطلب خبرات بيعية وتفاوضية لا تُكتسب إلا بالممارسة الواقعية."
    },
    {
      q: "4. ما الحلول؟",
      a: "توفير حاضنات أعمال داخل الجامعة تربط الطلاب المبتكرين بخبراء من السوق المحلي لتوجيههم. التكلفة والمخاطرة هنا بسيطة جداً، وتعتمد فقط على التشبيك وتنظيم ورش عمل توجيهية."
    },
  ];

  // Tab 3: الجلسة الثانية (السوق والتحديات الوطنية)
  const tab3Data = [
    {
      q: "1. ما الذي حدث وما الذي نجح؟",
      a: "نجحنا في تحويل البحث التقني لـ Prototype (نموذج أولي) شغال ومستقر يحل تحدي وطني ومحلي وهو 'تشتت الخدمات اليومية'. نجحنا في بناء بنية تحتية قوية تدمج 6 أنظمة فرعية، وتشغيل خوارزميات معقدة مثل 'الفلترة الجغرافية' لتقليل التكلفة."
    },
    {
      q: "2. ما الفجوات؟",
      a: "فجوة 'ثقة السوق'. التجار ومقدمي الخدمات في شمال سيناء معتادون على الطرق التقليدية. هناك فجوة في نقل هذه التكنولوجيا للمستثمرين والصناعة المحلية لإقناعهم بتبني النظام."
    },
    {
      q: "3. لماذا هذه الفجوات؟ (الأسباب)",
      a: "بناء الثقة مع السوق يتطلب ميزانية تسويق وتفرغ لإثبات أن هذا النظام التكنولوجي أفضل وأسهل من استخدام الطرق القديمة."
    },
    {
      q: "4. ما الحلول؟",
      a: "الحل هو 'التشغيل التجريبي المصغر' (Pilot Phase) لاختبار الحلول في بيئة حقيقية. سندعو عدد محدود من المحلات لاستخدام النظام مجاناً لتوفير قاعدة بيانات أولية. المخاطرة شبه معدومة، والميزة هي جمع بيانات واقعية (Traction) تثبت للمستثمر أن السوق متقبل للفكرة."
    },
  ];

  // Tab 4: الجلسة الثالثة (تأسيس الشركات الناشئة)
  const tab4Data = [
    {
      q: "1. ما الذي حدث وما الذي نجح؟",
      a: "نجحنا في تصميم مشروع يمتلك 'قابلية التوسع' (Scalability). النموذج التقني والتجاري الذي بنيناه قابل للانتقال من مجرد مشروع صغير لينافس كشركة ناشئة قادرة على تغطية محافظات أخرى."
    },
    {
      q: "2. ما الفجوات؟",
      a: "التحديات التنظيمية والتمويلية. ينقصنا 'غطاء قانوني' (شركة ناشئة مسجلة) لنتمكن من توقيع عقود رسمية مع المطاعم والعيادات."
    },
    {
      q: "3. لماذا هذه الفجوات؟ (الأسباب)",
      a: "لأننا في مرحلة تأسيس النموذج الأولي، والموارد المالية المحدودة للطلاب تعيق اتخاذ خطوات التأسيس القانوني ودفع رسوم التسجيل وتعيين إدارة متفرغة."
    },
    {
      q: "4. ما الحلول؟",
      a: "الحصول على تمويل أولي (Seed Funding) من خلال مسرعات الأعمال أو المستثمرين المحليين لدعم التأسيس القانوني. بدلاً من حرق التمويل في التسويق العشوائي، سيتم توجيه التمويل لبناء 'الشبكة الأولى' من مقدمي الخدمات، لأنهم هم من سيجذبون العملاء للمنصة، مما يقلل المخاطرة المالية ويضمن نمواً مستداماً للمنافسة."
    },
  ];

  const tabsConfig = [
    { id: 'tab1', title: 'أسئلة عامة (البيئة الجامعية)', icon: GraduationCap, color: 'text-teal-300', activeBg: 'bg-[#112240] text-teal-200 border-teal-400', data: tab1Data },
    { id: 'tab2', title: 'الجلسة 1: الابتكار الجامعي', icon: BrainCircuit, color: 'text-cyan-300', activeBg: 'bg-[#112240] text-cyan-200 border-cyan-400', data: tab2Data },
    { id: 'tab3', title: 'الجلسة 2: السوق والتحديات', icon: Building2, color: 'text-amber-300', activeBg: 'bg-[#112240] text-amber-200 border-amber-400', data: tab3Data },
    { id: 'tab4', title: 'الجلسة 3: تأسيس الشركات', icon: TrendingUp, color: 'text-emerald-300', activeBg: 'bg-[#112240] text-emerald-200 border-emerald-400', data: tab4Data },
  ];

  const currentTabData = tabsConfig.find((t) => t.id === activeTab)?.data || tab1Data;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          
          {/* Backdrop Blur Overlay with Deep Navy Tint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#0A192F]/95 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-5xl max-h-[90vh] rounded-3xl border-2 border-teal-400/60 bg-[#112240] shadow-[0_0_60px_rgba(45,212,191,0.4)] flex flex-col overflow-hidden text-right"
            dir="rtl"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-teal-400/30 bg-[#0A192F] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-teal-500/30 text-teal-200 border border-teal-400">
                  <BrainCircuit className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                    <span>دليل إجابات المناقشة والأسئلة السرية</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-400 text-slate-950 font-black">
                      Ctrl + K
                    </span>
                  </h3>
                  <p className="text-xs text-teal-200 font-bold mt-0.5">
                    مقسمة إلى 4 جلسات ومحاور رئيسية لسهولة التصفح أثناء العرض التقديمي
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

            {/* 4 Interactive Tabbed Navigation Header */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-teal-400/30 bg-[#0A192F] p-2 gap-2">
              {tabsConfig.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 p-3 rounded-2xl font-black text-xs sm:text-sm transition-all text-center ${
                      isActive
                        ? `${tab.activeBg} border-2 shadow-lg`
                        : 'bg-[#112240]/60 text-slate-300 hover:text-white hover:bg-[#112240]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${tab.color} shrink-0`} />
                    <span className="truncate">{tab.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Modal Body Scroll Area */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-5 max-h-[60vh] bg-[#112240]">
              {currentTabData.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#0A192F] border border-teal-400/40 space-y-3 shadow-md hover:border-teal-400 transition-all">
                  <h4 className="font-black text-teal-300 text-base flex items-start gap-2 leading-snug">
                    <HelpCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{item.q}</span>
                  </h4>
                  <p className="text-white text-sm sm:text-base leading-relaxed bg-[#0F2B48] p-4 rounded-xl border border-teal-400/30 font-medium">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#0A192F] border-t border-teal-400/30 flex items-center justify-between text-xs text-slate-200 font-bold">
              <span className="flex items-center gap-1.5">
                <Key className="w-4 h-4 text-teal-300" />
                <span>التنقل السريع: استخدم التبويبات الأربعة أعلى اللوحة أو اضغط <strong>Ctrl + K</strong></span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-teal-400 text-slate-950 font-black hover:bg-teal-300 transition-colors shadow-md"
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
