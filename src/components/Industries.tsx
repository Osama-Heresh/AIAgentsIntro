import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ChevronRight, ChevronLeft, Factory, Stethoscope, HardHat, GraduationCap, ShoppingBag, Hotel, Coins, Building2, Landmark, Truck, Scale, Flame, Bot } from "lucide-react";
import { translations, industriesData } from "../data/translations";
import { Language, Industry } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface IndustriesProps {
  lang: Language;
}

// Icon mapper helper
const IndustryIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "Factory": return <Factory className={className} />;
    case "Stethoscope": return <Stethoscope className={className} />;
    case "HardHat": return <HardHat className={className} />;
    case "GraduationCap": return <GraduationCap className={className} />;
    case "ShoppingBag": return <ShoppingBag className={className} />;
    case "Hotel": return <Hotel className={className} />;
    case "Coins": return <Coins className={className} />;
    case "Building2": return <Building2 className={className} />;
    case "Landmark": return <Landmark className={className} />;
    case "Truck": return <Truck className={className} />;
    case "Scale": return <Scale className={className} />;
    case "Flame": return <Flame className={className} />;
    default: return <Bot className={className} />;
  }
};

export default function Industries({ lang }: IndustriesProps) {
  const t = translations[lang];
  const isRtl = lang === "ar";
  const [selectedIndustryId, setSelectedIndustryId] = useState(industriesData[0].id);

  const selectedIndustry = industriesData.find((ind) => ind.id === selectedIndustryId) || industriesData[0];

  return (
    <section id="industries" className="py-20 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="industries-header">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
            {lang === "en" ? "Vertical Deployment" : "التطبيق القطاعي المتخصص"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {lang === "en" ? "AI Tailored to Your Industry" : "ذكاء اصطناعي مخصص لقطاع أعمالك"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {lang === "en"
              ? "Every industry runs on different protocols. Select your sector below to see customized agents solving your direct operational leaks."
              : "كل قطاع يتميز بأنظمة تشغيل فريدة. اختر قطاعك أدناه لتستعرض كيف يقوم عملاؤنا بحل مشكلات وهدر النفقات التشغيلية."}
          </p>
        </div>

        {/* 12 Industry Grid Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12" id="industries-select-grid">
          {industriesData.map((ind) => {
            const isSelected = selectedIndustryId === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`p-4 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-3 group cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/10 scale-[1.02]"
                    : "bg-white border-slate-200/60 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                }`}
                id={`industry-pill-${ind.id}`}
              >
                <div className={`p-2.5 rounded-xl transition-colors ${
                  isSelected ? "bg-slate-800 text-teal-400" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200 group-hover:text-slate-900"
                }`}>
                  <IndustryIcon name={ind.iconName} className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold leading-tight block truncate w-full">
                  {ind.name[lang]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Industry Solutions Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustryId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            id="industry-details-showcase"
          >
            {/* Left Column: Sector Info */}
            <div className="lg:col-span-5 space-y-6" id="sector-intro-panel">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-900 text-teal-400 rounded-2xl">
                  <IndustryIcon name={selectedIndustry.iconName} className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  {selectedIndustry.name[lang]}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedIndustry.description[lang]}
              </p>
              
              {/* Highlight Core Message */}
              <div className="p-4 bg-teal-50 border border-teal-100 rounded-2xl text-xs sm:text-sm text-teal-800 leading-relaxed font-medium">
                <strong>{lang === "en" ? "Middle East Compliant: " : "متوافق مع الخليج والمنطقة: "}</strong>
                {lang === "en" 
                  ? "Pre-configured to support local currency processing, regional Arabic dialects, and GCC sovereign security laws."
                  : "معد ومبرمج مسبقاً لدعم تداول العملات المحلية، اللهجات العربية الإقليمية، وقوانين أمن المعلومات الخليجية السيادية."}
              </div>
            </div>

            {/* Right Column: Custom Agent Solutions for this sector */}
            <div className="lg:col-span-7 space-y-4" id="sector-solutions-panel">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {lang === "en" ? "Sector-Specific AI Use Cases" : "أبرز حالات تطبيق واستخدام الذكاء في هذا القطاع"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedIndustry.solutions.map((sol, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-slate-50 rounded-2xl border border-slate-200/60 flex flex-col justify-between hover:border-slate-300 transition-colors"
                    id={`industry-sol-card-${idx}`}
                  >
                    <div>
                      <h5 className="font-display text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                        <span>{sol.title[lang]}</span>
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {sol.details[lang]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action CTA inside Showcase */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4" id="industries-action-strip">
                <span className="text-xs text-slate-400 font-semibold uppercase">
                  {lang === "en" ? "Need a bespoke neural solution?" : "هل تحتاج لحل عصبي مخصص تماماً لعملك؟"}
                </span>
                <a
                  href="https://ai-agent-eight-tawny.vercel.app/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-teal-700 transition-colors"
                  id="industries-cta-link"
                >
                  <span>{lang === "en" ? "Launch Workspace Sandbox" : "تشغيل البيئة التجريبية للعملاء"}</span>
                  {isRtl ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </a>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
