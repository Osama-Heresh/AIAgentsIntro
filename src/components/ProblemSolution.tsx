import { AlertCircle, CheckCircle, ShieldClose, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { translations } from "../data/translations";
import { Language } from "../types";
import { motion } from "motion/react";

interface ProblemSolutionProps {
  lang: Language;
}

export default function ProblemSolution({ lang }: ProblemSolutionProps) {
  const t = translations[lang];
  const isRtl = lang === "ar";

  return (
    <section id="problem-solution" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="problem-solution-header">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
            {lang === "en" ? "Efficiency Contrast" : "مقارنة كفاءة الأداء"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {t.problemSolutionTitle}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            {t.problemSolutionSubtitle}
          </p>
        </div>

        {/* Comparative Columns Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch" id="problem-solution-grid">
          
          {/* Problems Column */}
          <div className="bg-red-950/10 rounded-3xl p-8 border border-red-900/30 flex flex-col justify-between backdrop-blur-md" id="problems-panel">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-red-900/20 mb-6">
                <div className="p-2 bg-red-950/40 text-red-400 rounded-xl border border-red-900/30">
                  <ShieldClose className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-red-200">
                  {t.problemLabel}
                </h3>
              </div>
              <div className="space-y-6">
                {t.problems.map((prob, idx) => (
                  <div key={idx} className="flex gap-4 items-start" id={`problem-item-${idx}`}>
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-base font-bold text-red-100 mb-1">
                        {prob.title}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {prob.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual Red Warning Banner */}
            <div className="mt-8 p-4 bg-red-950/20 rounded-2xl border border-red-900/30 flex items-center justify-between text-xs font-bold text-red-300">
              <span>{lang === "en" ? "LOST MARGINS & HEADCOUNT CHURN" : "هدر مالي وضغوط توظيف مستمرة"}</span>
              <span>- 60%</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="bg-emerald-950/10 rounded-3xl p-8 border border-emerald-900/30 flex flex-col justify-between backdrop-blur-md" id="solutions-panel">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-emerald-900/20 mb-6">
                <div className="p-2 bg-emerald-950/40 text-emerald-400 rounded-xl border border-emerald-900/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-emerald-200">
                  {t.solutionLabel}
                </h3>
              </div>
              <div className="space-y-6">
                {t.solutions.map((sol, idx) => (
                  <div key={idx} className="flex gap-4 items-start" id={`solution-item-${idx}`}>
                    <CheckCircle className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-base font-bold text-emerald-100 mb-1">
                        {sol.title}
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {sol.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual Green Success Banner */}
            <div className="mt-8 p-4 bg-emerald-950/20 rounded-2xl border border-emerald-900/30 flex items-center justify-between text-xs font-bold text-emerald-300">
              <span>{lang === "en" ? "AUTOMATED CONTINUOUS SCALE" : "أتمتة مستمرة ونمو غير محدود"}</span>
              <span className="text-[#22c55e] font-extrabold">+ 340%</span>
            </div>
          </div>

        </div>

        {/* Transition callout */}
        <div className="mt-12 text-center p-6 bg-white/5 backdrop-blur-md text-white rounded-2xl border border-white/10" id="problem-solution-callout">
          <p className="text-sm sm:text-base font-semibold max-w-3xl mx-auto leading-relaxed">
            "{t.coreValueProposition}"
          </p>
        </div>

      </div>
    </section>
  );
}
