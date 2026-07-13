import { Bot, Clock, HelpCircle, Shield, TrendingDown, Users2, Zap, Hourglass } from "lucide-react";
import { translations } from "../data/translations";
import { Language } from "../types";
import { motion } from "motion/react";

interface StatsProps {
  lang: Language;
}

export default function Stats({ lang }: StatsProps) {
  const t = translations[lang];

  const stats = [
    { value: t.statActiveAgents, label: t.statActiveAgentsLabel, icon: Bot, color: "text-blue-500" },
    { value: t.statOperatingSaved, label: t.statOperatingSavedLabel, icon: TrendingDown, color: "text-green-500" },
    { value: t.statResponseTime, label: t.statResponseTimeLabel, icon: Zap, color: "text-yellow-500" },
    { value: t.statSatisfaction, label: t.statSatisfactionLabel, icon: Users2, color: "text-teal-500" },
    { value: t.statHoursAutomated, label: t.statHoursAutomatedLabel, icon: Hourglass, color: "text-indigo-500" }
  ];

  const trustPoints = [
    {
      title: lang === "en" ? "24/7 Autonomy" : "استقلالية على مدار الساعة",
      desc: lang === "en" ? "Operate seamlessly during off-hours, national holidays, and weekends without interruptions." : "تشغيل سلس خارج أوقات العمل الرسمية، العطلات الوطنية وعطل نهاية الأسبوع بلا انقطاع.",
      icon: Clock
    },
    {
      title: lang === "en" ? "Instant Resolution" : "استجابة وحلول فورية",
      desc: lang === "en" ? "No hold times or queues. Immediate sub-second execution for all client tasks." : "لا مزيد من الانتظار أو قوائم الاتصال. تنفيذ فوري في أقل من ثانية لكافة المعاملات.",
      icon: Zap
    },
    {
      title: lang === "en" ? "Drastic Expense Reduction" : "تخفيض هائل في النفقات",
      desc: lang === "en" ? "Shrink raw support and planning overhead by up to 80%, boosting margins." : "تخفيض التكاليف الإدارية والتشغيلية المباشرة بنسبة تصل إلى 80% لزيادة الربحية.",
      icon: TrendingDown
    },
    {
      title: lang === "en" ? "Enterprise Ironclad Safety" : "أمان وحماية صارمة",
      desc: lang === "en" ? "Fully compartmentalized server sandboxes ensuring absolute data confidentiality." : "خوادم معزولة ومحكمة بالكامل تضمن السرية التامة المطلقة لبيانات ومعلومات شركتك.",
      icon: Shield
    }
  ];

  return (
    <section id="stats" className="py-20 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="stats-header">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {t.trustTitle}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.trustSubtitle}
          </p>
        </div>

        {/* Dynamic Metric Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-20" id="stats-counters-grid">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
                id={`stat-card-${idx}`}
              >
                <div className={`p-3 bg-slate-50 rounded-xl mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block mb-2 select-none">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-500 leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Why Companies Are Adopting AI Agents - Core trust pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="stats-trust-points">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm flex flex-col items-start"
                id={`trust-point-${idx}`}
              >
                <div className="p-3 bg-teal-50 text-teal-700 rounded-xl mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
