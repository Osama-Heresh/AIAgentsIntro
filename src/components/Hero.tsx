import { ArrowRight, ArrowLeft, Bot, Sparkles, CheckCircle2 } from "lucide-react";
import { translations } from "../data/translations";
import { Language } from "../types";
import { motion } from "motion/react";

interface HeroProps {
  lang: Language;
  scrollToSection: (id: string) => void;
}

export default function Hero({ lang, scrollToSection }: HeroProps) {
  const t = translations[lang];
  const isRtl = lang === "ar";

  // Simulated live event feed for visual depth
  const mockSystemFeeds = [
    { id: 1, agent: lang === "en" ? "Production Planning AI" : "ذكاء تخطيط الإنتاج", event: lang === "en" ? "Re-scheduled batch #1092" : "أعاد جدولة دفعة الإنتاج #1092", time: "just now" },
    { id: 2, agent: lang === "en" ? "Customer Support AI" : "دعم العملاء الذكي", event: lang === "en" ? "Resolved invoice mismatch ticket" : "حل تذكرة مطابقة فاتورة المورد", time: "1s ago" },
    { id: 3, agent: lang === "en" ? "Tender Automation AI" : "أتمتة المناقصات بالذكاء", event: lang === "en" ? "Drafted compliance matrix for Etimad RFP" : "صاغ مصفوفة الامتثال لمناقصة اعتماد", time: "4s ago" }
  ];

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-900 text-white"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left" id="hero-text-container">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#22c55e] font-bold mb-6"
              id="hero-badge"
            >
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
              <span>{t.tagline}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 mb-6 leading-[1.1] select-none"
              id="hero-headline"
            >
              {t.heroTitle}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl select-none"
              id="hero-subtitle"
            >
              {t.heroSubtitle}
            </motion.p>

            {/* Core investment message anchor */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-8 p-3.5 rounded-xl bg-teal-950/40 border border-teal-500/20 text-teal-300 text-xs sm:text-sm leading-relaxed"
              id="hero-core-message"
            >
              <strong>{lang === "en" ? "Strategic Investment: " : "الاستثمار الاستراتيجي: "}</strong>
              {t.coreValueProposition}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
              id="hero-cta-group"
            >
              {/* Primary CTA */}
              <a
                href="https://ai-agent-eight-tawny.vercel.app/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold rounded-xl bg-white text-[#0f172a] hover:bg-slate-200 transition-all duration-300 text-sm group shadow-lg shadow-white/5"
                id="hero-primary-cta"
              >
                <span>{t.btnLaunch}</span>
                {isRtl ? (
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </a>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all duration-300 text-sm"
                id="hero-secondary-cta"
              >
                <span>{t.btnConsultation}</span>
              </button>
            </motion.div>

            {/* GCC Trust Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-slate-800/80 w-full"
              id="hero-trust-banner"
            >
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                {t.trustedByAcross}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
                <span className="text-sm font-bold tracking-tight text-white border border-slate-700 px-3 py-1 rounded bg-slate-800/40">RIYADH STEEL</span>
                <span className="text-sm font-bold tracking-tight text-white border border-slate-700 px-3 py-1 rounded bg-slate-800/40">AMMAN LOGISTICS</span>
                <span className="text-sm font-bold tracking-tight text-white border border-slate-700 px-3 py-1 rounded bg-slate-800/40">GULF METALS</span>
                <span className="text-sm font-bold tracking-tight text-white border border-slate-700 px-3 py-1 rounded bg-slate-800/40">DUBAI SMART TECH</span>
                <span className="text-sm font-bold tracking-tight text-white border border-slate-700 px-3 py-1 rounded bg-slate-800/40">BAHRAIN LOGISTIC</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Simulated Dashboard Graphic */}
          <div className="lg:col-span-5" id="hero-graphic-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl border border-slate-800 dark-glass-panel p-6 shadow-2xl overflow-hidden animate-float"
              id="hero-simulated-dashboard"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-green-500" />
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2 select-none">
                    agent-cluster-gcc-node-01
                  </span>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-green-950 text-green-400 border border-green-800/60">
                  ONLINE
                </span>
              </div>

              {/* Stats Counters Grid inside dashboard */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">{lang === "en" ? "Platform Health" : "سلامة المنصة"}</span>
                  <span className="font-mono text-lg font-bold text-teal-400">99.98%</span>
                </div>
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider">{lang === "en" ? "Cognitive Load" : "الحمل الإدراكي"}</span>
                  <span className="font-mono text-lg font-bold text-blue-400">12.4%</span>
                </div>
              </div>

              {/* Dynamic Action Streams */}
              <div className="space-y-3.5 mb-6">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">{lang === "en" ? "Autonomous Operation Logs" : "سجل العمليات الذاتية النشط"}</h4>
                <div className="space-y-2.5">
                  {mockSystemFeeds.map((feed) => (
                    <div key={feed.id} className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-3">
                      <div className="p-1.5 bg-slate-800 rounded-lg text-teal-400">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs font-bold text-teal-300 truncate">{feed.agent}</span>
                          <span className="text-[9px] font-mono text-slate-500">{feed.time}</span>
                        </div>
                        <p className="text-xs text-slate-300 line-clamp-1">{feed.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core value banner inside dashboard */}
              <div className="p-3 bg-slate-950/90 rounded-xl border border-teal-900/40 flex items-center gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-teal-400 shrink-0" />
                <span className="text-[11px] text-teal-300 font-semibold">
                  {lang === "en" ? "Average ROI realized: +340% within year one." : "معدل العائد المحقق: +340% خلال العام الأول."}
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
