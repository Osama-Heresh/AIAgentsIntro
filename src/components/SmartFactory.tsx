import { useState } from "react";
import { ArrowDown, Check, Activity, ShieldAlert, Cpu, Layers, HelpCircle, Bot, Workflow, BarChart3, Settings } from "lucide-react";
import { translations } from "../data/translations";
import { Language } from "../types";
import { motion } from "motion/react";

interface SmartFactoryProps {
  lang: Language;
}

export default function SmartFactory({ lang }: SmartFactoryProps) {
  const t = translations[lang];
  const [activeStep, setActiveStep] = useState(1);

  const workflows = [
    { step: 1, title: t.factoryW1, desc: t.factoryW1Desc, icon: Layers },
    { step: 2, title: t.factoryW2, desc: t.factoryW2Desc, icon: Settings },
    { step: 3, title: t.factoryW3, desc: t.factoryW3Desc, icon: BarChart3 },
    { step: 4, title: t.factoryW4, desc: t.factoryW4Desc, icon: Cpu },
    { step: 5, title: t.factoryW5, desc: t.factoryW5Desc, icon: Activity }
  ];

  const factoryCapabilities = [
    { title: lang === "en" ? "Production Planning" : "تخطيط وعمليات الإنتاج", desc: lang === "en" ? "Generates real-time math-optimized machine schedules." : "توليد جداول وجدول أعمال الآلات الأمثل رياضياً بالوقت الفعلي." },
    { title: lang === "en" ? "Machine Capacity" : "القدرة الاستيعابية للآلات", desc: lang === "en" ? "Constantly tracks mechanical fatigue and active down-times." : "تتبع اهتزاز الآلات ومعدلات الإجهاد الميكانيكي وأوقات التعطل." },
    { title: lang === "en" ? "Quality Control AI" : "رقابة الجودة بالذكاء", desc: lang === "en" ? "Vision sensors scan goods, catching minor micro-faults instantly." : "حساسات كاميرات رؤية حاسوبية تكشف الخلل والعيوب الدقيقة فوراً." },
    { title: lang === "en" ? "Predictive Maintenance" : "الصيانة التنبؤية للماكينات", desc: lang === "en" ? "Avoid costly factory stoppages with temperature anomaly alarms." : "تفادي التوقفات والمخاطر الباهظة بإنذار حرارة الآلات المرتفعة." },
    { title: lang === "en" ? "Smart Inventory" : "إدارة المخزون الذكي", desc: lang === "en" ? "Re-orders raw buffers to protect against global supply hikes." : "إعادة طلب توريد الخامات تلقائياً لمواجهة تقلبات الأسعار." },
    { title: lang === "en" ? "Labor Optimization" : "تحسين كفاءة طاقم العمل", desc: lang === "en" ? "Aligns task orders dynamically with engineer certification levels." : "توزيع المهام الفنية بدقة حسب مستويات ترخيص ومهارة المهندس." }
  ];

  return (
    <section id="factory" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual glowing accent background */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="factory-header">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
            {lang === "en" ? "Industry 4.0 Workspace" : "حلول التصنيع الرقمي والثورة الرابعة"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {t.factoryTitle}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.factorySubtitle}
          </p>
        </div>

        {/* Interactive Production Planning Diagram Flow */}
        <div className="bg-slate-800/40 rounded-3xl border border-slate-800 p-6 sm:p-8 mb-16" id="factory-interactive-diagram">
          <div className="mb-8">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
              <Workflow className="w-5 h-5 text-teal-400" />
              <span>{t.factoryD1Title}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.factoryD1Desc}
            </p>
          </div>

          {/* Interactive Flow Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch relative" id="factory-flow-steps">
            {workflows.map((flow) => {
              const StepIcon = flow.icon;
              const isActive = activeStep === flow.step;
              return (
                <button
                  key={flow.step}
                  onClick={() => setActiveStep(flow.step)}
                  className={`p-5 rounded-2xl border text-center transition-all duration-300 flex flex-col justify-between items-center cursor-pointer relative group ${
                    isActive
                      ? "bg-slate-900 border-teal-500 text-white shadow-lg shadow-teal-500/10 scale-[1.02]"
                      : "bg-slate-850 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                  id={`flow-step-btn-${flow.step}`}
                >
                  {/* Step ID badge */}
                  <span className={`absolute top-3 left-3 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isActive ? "bg-teal-950 text-teal-400" : "bg-slate-800 text-slate-500"
                  }`}>
                    STEP 0{flow.step}
                  </span>

                  {/* Icon */}
                  <div className={`p-3 rounded-xl mb-4 mt-2 transition-transform group-hover:scale-110 ${
                    isActive ? "bg-teal-950 text-teal-400" : "bg-slate-800 text-slate-500"
                  }`}>
                    <StepIcon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1 w-full">
                    <h4 className="text-xs sm:text-sm font-bold leading-snug truncate">
                      {flow.title}
                    </h4>
                    <p className="text-[10.5px] leading-relaxed text-slate-400 line-clamp-2">
                      {flow.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Active Step Description panel */}
          <div className="mt-8 p-5 bg-slate-950/60 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4" id="flow-active-details">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest font-semibold">Active Dispatch Node {activeStep}/5</span>
              <p className="text-xs sm:text-sm text-slate-300">
                {workflows[activeStep - 1].desc}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-green-400 px-3 py-1 bg-green-950/60 rounded-lg border border-green-800/40 shrink-0">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>ACTIVE TELEMETRY SYNCING</span>
            </div>
          </div>
        </div>

        {/* 6 Grid Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="factory-capabilities-grid">
          {factoryCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-slate-850/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 hover:bg-slate-850 transition-all duration-300"
              id={`factory-cap-card-${idx}`}
            >
              <h3 className="font-display text-base font-bold text-slate-100 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                <span>{cap.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
