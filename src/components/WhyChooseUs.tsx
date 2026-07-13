import { Globe2, ShieldCheck, Zap, Share2, Sparkles, Check } from "lucide-react";
import { translations } from "../data/translations";
import { Language } from "../types";
import { motion } from "motion/react";

interface WhyChooseUsProps {
  lang: Language;
}

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const t = translations[lang];

  const advantages = [
    { title: t.why1Title, desc: t.why1Desc, icon: Globe2 },
    { title: t.why2Title, desc: t.why2Desc, icon: Sparkles },
    { title: t.why3Title, desc: t.why3Desc, icon: ShieldCheck },
    { title: t.why4Title, desc: t.why4Desc, icon: Share2 }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Badges */}
          <div className="lg:col-span-5 space-y-6" id="why-left-column">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
              {lang === "en" ? "Strategic Advantage" : "الأفضلية الاستراتيجية"}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              {t.whyTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.whySubtitle}
            </p>

            {/* Checklist of highlights */}
            <div className="space-y-3 pt-4 border-t border-slate-100" id="why-checklist">
              <div className="flex gap-2.5 items-center text-xs sm:text-sm font-semibold text-slate-700">
                <div className="p-1 bg-teal-100 text-teal-700 rounded-md">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{lang === "en" ? "Deploy in under 5 business days" : "نشر كامل للعمل في أقل من 5 أيام عمل"}</span>
              </div>
              <div className="flex gap-2.5 items-center text-xs sm:text-sm font-semibold text-slate-700">
                <div className="p-1 bg-teal-100 text-teal-700 rounded-md">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{lang === "en" ? "Flexible Monthly Subscription" : "باقات اشتراك شهرية مرنة بلا قيود"}</span>
              </div>
              <div className="flex gap-2.5 items-center text-xs sm:text-sm font-semibold text-slate-700">
                <div className="p-1 bg-teal-100 text-teal-700 rounded-md">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{lang === "en" ? "Continuous AI engine upgrades included" : "تحديثات وصيانة تلقائية لمحركات الذكاء مجاناً"}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Advantage Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" id="why-advantages-grid">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200/60 hover:border-slate-950 transition-all duration-300 group"
                  id={`adv-card-${idx}`}
                >
                  <div className="p-3 bg-teal-50 text-teal-700 rounded-xl mb-4 w-fit group-hover:bg-teal-950 group-hover:text-teal-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-white mb-2 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 group-hover:text-slate-300 leading-relaxed transition-colors">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
