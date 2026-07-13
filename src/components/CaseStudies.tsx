import { useState } from "react";
import { ChevronRight, ChevronLeft, ArrowUpRight, CheckCircle2, TrendingUp, Sparkles, Building } from "lucide-react";
import { translations, caseStudiesData } from "../data/translations";
import { Language, CaseStudy } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface CaseStudiesProps {
  lang: Language;
}

export default function CaseStudies({ lang }: CaseStudiesProps) {
  const t = translations[lang];
  const isRtl = lang === "ar";
  const [activeIdx, setActiveIdx] = useState(0);

  const activeStudy = caseStudiesData[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % caseStudiesData.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + caseStudiesData.length) % caseStudiesData.length);
  };

  return (
    <section id="case-studies" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual background circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="case-studies-header">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
            {lang === "en" ? "Proven Transformations" : "نتائج وقصص نجاح حقيقية"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {lang === "en" ? "Real Enterprise Case Studies" : "دراسات حالة وتطبيقات واقعية ناجحة"}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {lang === "en"
              ? "See how companies across Riyadh, Amman, and Dubai are converting administrative bottlenecks into massive competitive profits."
              : "استعرض كيف تقوم المؤسسات في الرياض، وعمّان، ودبي بتحويل العوائق التشغيلية إلى أرباح وقدرات تنافسية هائلة."}
          </p>
        </div>

        {/* Tab Selection buttons */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12" id="case-studies-tabs">
          {caseStudiesData.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                activeIdx === idx
                  ? "bg-teal-500 text-slate-950 border-teal-500 shadow-md shadow-teal-500/15"
                  : "bg-slate-850 text-slate-400 border-slate-800 hover:border-slate-700"
              }`}
              id={`case-study-tab-${idx}`}
            >
              {study.companyName[lang]}
            </button>
          ))}
        </div>

        {/* Active Case Study Slide panel */}
        <div className="bg-slate-850/50 rounded-3xl border border-slate-800 p-6 sm:p-10 relative shadow-2xl" id="active-study-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStudy.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Side: Before/After split */}
              <div className="lg:col-span-8 space-y-6 flex flex-col justify-between" id="study-left-side">
                
                {/* Meta details Header */}
                <div className="space-y-2 border-b border-slate-800 pb-5">
                  <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold">
                    <Building className="w-4.5 h-4.5" />
                    <span>{activeStudy.industry[lang]}</span>
                    <span>•</span>
                    <span>{activeStudy.location[lang]}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {activeStudy.companyName[lang]}
                  </h3>
                </div>

                {/* Before / After layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Before card */}
                  <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                    <span className="text-[10px] font-bold text-red-400 block uppercase tracking-wider mb-2">
                      {lang === "en" ? "Before Deploying AI" : "قبل تدشين الذكاء الاصطناعي"}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {activeStudy.before[lang]}
                    </p>
                  </div>

                  {/* After card */}
                  <div className="p-5 rounded-2xl bg-teal-950/25 border border-teal-500/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 bg-teal-500/5 rounded-full blur-xl pointer-events-none" />
                    <span className="text-[10px] font-bold text-teal-400 block uppercase tracking-wider mb-2">
                      {lang === "en" ? "After Deploying AI" : "بعد تشغيل عملاء الذكاء"}
                    </span>
                    <p className="text-xs sm:text-sm text-teal-300 leading-relaxed">
                      {activeStudy.after[lang]}
                    </p>
                  </div>
                </div>

                {/* Re-iterate core value */}
                <div className="text-xs text-slate-500 leading-relaxed font-semibold pt-4 border-t border-slate-800/50">
                  {t.coreValueProposition}
                </div>
              </div>

              {/* Right Side: Key Metrics Showcase */}
              <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-center gap-6 text-center" id="study-right-side">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-teal-950 text-teal-400 rounded-2xl border border-teal-800/40">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  {lang === "en" ? "Quantifiable Scale Advantages" : "المكاسب والوفورات القابلة للقياس"}
                </h4>

                {/* Metric 1 */}
                <div className="p-4 bg-slate-850 rounded-xl border border-slate-800">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400 block tracking-tight mb-1">
                    {activeStudy.metrics.metric1.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 leading-tight block">
                    {activeStudy.metrics.metric1.label[lang]}
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="p-4 bg-slate-850 rounded-xl border border-slate-800">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400 block tracking-tight mb-1">
                    {activeStudy.metrics.metric2.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-300 leading-tight block">
                    {activeStudy.metrics.metric2.label[lang]}
                  </span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Slider controls arrow keys underneath */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-800" id="case-studies-controls">
            <span className="text-xs font-mono text-slate-500">
              0{activeIdx + 1} / 0{caseStudiesData.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2 bg-slate-850 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 cursor-pointer transition-all"
                id="case-study-prev-btn"
              >
                {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-slate-850 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 cursor-pointer transition-all"
                id="case-study-next-btn"
              >
                {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
