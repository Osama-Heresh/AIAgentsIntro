import { Bot, FileText, Webhook, Rocket, BarChart3, ChevronRight, ChevronLeft } from "lucide-react";
import { translations } from "../data/translations";
import { Language } from "../types";
import { motion } from "motion/react";

interface HowItWorksProps {
  lang: Language;
}

export default function HowItWorks({ lang }: HowItWorksProps) {
  const t = translations[lang];
  const isRtl = lang === "ar";

  const steps = [
    { number: "01", title: t.step1, desc: t.step1Desc, icon: Bot },
    { number: "02", title: t.step2, desc: t.step2Desc, icon: FileText },
    { number: "03", title: t.step3, desc: t.step3Desc, icon: Webhook },
    { number: "04", title: t.step4, desc: t.step4Desc, icon: Rocket },
    { number: "05", title: t.step5, desc: t.step5Desc, icon: BarChart3 }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="how-it-works-header">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
            {lang === "en" ? "Implementation Roadmap" : "خطة وإجراءات التدشين"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {t.howTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.howSubtitle}
          </p>
        </div>

        {/* Horizontal Timeline Steps */}
        <div className="relative" id="timeline-container">
          {/* Connector Line behind steps (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-slate-200 -translate-y-12 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10" id="timeline-grid">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/60 hover:border-teal-500/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
                  id={`timeline-step-${idx}`}
                >
                  {/* Step Badge with Icon inside */}
                  <div className="relative mb-6">
                    {/* Floating Step Number */}
                    <span className="absolute -top-3 -right-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-900 text-teal-400 select-none shadow">
                      {step.number}
                    </span>
                    
                    {/* Icon container */}
                    <div className="p-4 bg-white text-slate-700 rounded-2xl border border-slate-200 group-hover:bg-slate-900 group-hover:text-teal-400 group-hover:border-slate-900 transition-all duration-300 shadow-sm">
                      <StepIcon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display text-base font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Footer Warning Callout */}
        <div className="mt-12 text-center p-6 bg-teal-50 border border-teal-100 rounded-3xl" id="how-it-works-foot">
          <p className="text-xs sm:text-sm font-semibold text-teal-900 max-w-2xl mx-auto leading-relaxed">
            {lang === "en"
              ? "All deployments are backed by our secure enterprise onboarding. No software development expertise required on your part."
              : "تدعم كافة عمليات الإطلاق طواقم التأهيل ومهندسو الشبكات لدينا. لا حاجة لأي إلمام فني أو كتابة أكواد برمجية."}
          </p>
        </div>

      </div>
    </section>
  );
}
