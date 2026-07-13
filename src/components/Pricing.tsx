import { useState } from "react";
import { Check, ArrowUpRight, HelpCircle } from "lucide-react";
import { translations } from "../data/translations";
import { Language } from "../types";
import { motion } from "motion/react";

interface PricingProps {
  lang: Language;
  scrollToSection: (id: string) => void;
}

export default function Pricing({ lang, scrollToSection }: PricingProps) {
  const t = translations[lang];
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10" id="pricing-header">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
            {lang === "en" ? "Flexible Plans" : "باقات مرنة وممتازة"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {t.pricingTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.pricingSubtitle}
          </p>
        </div>

        {/* Monthly / Annual Billing Toggle Switch */}
        <div className="flex justify-center mb-16" id="pricing-toggle-container">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center gap-1 border border-slate-200">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                !isAnnual
                  ? "bg-slate-900 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              id="btn-billing-monthly"
            >
              {t.billingMonthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                isAnnual
                  ? "bg-slate-900 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              id="btn-billing-annually"
            >
              {t.billingAnnually}
            </button>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch" id="pricing-grid">
          {t.pricingTiers.map((tier) => {
            const isPro = tier.id === "pro";
            const isCustom = tier.id === "custom";

            // Price calculation pro-rata if annual billing selected
            let finalPrice = tier.price;
            if (!isCustom && isAnnual) {
              const numericPrice = parseInt(tier.price);
              finalPrice = Math.round(numericPrice * 0.8).toString(); // 20% discount
            }

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border relative transition-all duration-300 ${
                  isPro
                    ? "bg-slate-900 text-white border-slate-950 shadow-xl shadow-slate-950/10 lg:scale-[1.03] lg:-translate-y-1"
                    : "bg-slate-50 text-slate-800 border-slate-200/80 hover:border-slate-300"
                }`}
                id={`pricing-card-${tier.id}`}
              >
                {/* Popular badge */}
                {isPro && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 text-[10px] font-bold px-3.5 py-1 bg-teal-400 text-slate-950 rounded-full uppercase tracking-wider shadow">
                    {t.popularBadge}
                  </span>
                )}

                <div>
                  {/* Tier Info Header */}
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-bold mb-2">{tier.name}</h3>
                    <p className={`text-xs ${isPro ? "text-slate-300" : "text-slate-500"} leading-relaxed min-h-12`}>
                      {tier.desc}
                    </p>
                  </div>

                  {/* Pricing block */}
                  <div className="pb-6 border-b border-slate-200/50 mb-6">
                    {isCustom ? (
                      <span className="font-display text-2xl sm:text-3xl font-extrabold block mb-2">{tier.price}</span>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-semibold">$</span>
                        <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">{finalPrice}</span>
                        <span className={`text-xs ${isPro ? "text-slate-400" : "text-slate-500"}`}>{t.priceMonth}</span>
                      </div>
                    )}
                  </div>

                  {/* Features list */}
                  <div className="space-y-4 mb-8">
                    <span className="text-[10px] font-bold uppercase tracking-wider block opacity-60">
                      {t.featuresTitle}
                    </span>
                    <div className="space-y-3">
                      {tier.features.map((feat, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm" id={`pricing-feature-${tier.id}-${idx}`}>
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPro ? "text-teal-400" : "text-teal-600"}`} />
                          <span className={isPro ? "text-slate-200" : "text-slate-700"}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary CTA */}
                <div>
                  {isCustom ? (
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="block w-full py-3 px-4 text-center text-sm font-bold rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 cursor-pointer transition-colors"
                      id={`pricing-cta-${tier.id}`}
                    >
                      {lang === "en" ? "Schedule Strategic Call" : "جدولة مكالمة تخطيطية"}
                    </button>
                  ) : (
                    <a
                      href="https://ai-agent-eight-tawny.vercel.app/"
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className={`block w-full py-3 px-4 text-center text-sm font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-1 ${
                        isPro
                          ? "bg-teal-500 text-slate-950 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/10"
                          : "bg-slate-950 text-white hover:bg-teal-700"
                      }`}
                      id={`pricing-cta-${tier.id}`}
                    >
                      <span>{lang === "en" ? "Activate Package" : "تفعيل هذه الباقة"}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
