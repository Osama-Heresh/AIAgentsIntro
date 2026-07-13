import { useState } from "react";
import { Search, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { translations, faqData } from "../data/translations";
import { Language } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface FaqProps {
  lang: Language;
}

export default function Faq({ lang }: FaqProps) {
  const t = translations[lang];
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("faq-1"); // keep first one open by default

  const filteredFaqs = faqData.filter((faq) => {
    const qStr = faq.question[lang].toLowerCase();
    const aStr = faq.answer[lang].toLowerCase();
    const query = searchQuery.toLowerCase();
    return qStr.includes(query) || aStr.includes(query);
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-transparent border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12" id="faq-header">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
            {lang === "en" ? "Knowledge Base FAQs" : "قاعدة الأسئلة الشائعة"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {lang === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة والتفصيلية"}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {lang === "en"
              ? "Comprehensive answers regarding security protocols, integration boundaries, conversational Arabic handling, and regional SLA commitments."
              : "إجابات شاملة وتفصيلية حول بروتوكولات الحماية والربط ومعالجة اللغة العربية واتفاقيات مستوى الخدمة."}
          </p>
        </div>

        {/* Live Search inside FAQ */}
        <div className="relative mb-10" id="faq-search-box">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder={lang === "en" ? "Search the 25 enterprise FAQs (e.g., SAP, ZATCA, secure, Arabic)..." : "ابحث في 25 سؤالاً شائاً (مثل: ساب، زكاة، أمان، واتساب)..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full py-3.5 ${lang === "ar" ? "pr-12 pl-4" : "pl-12 pr-4"} rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-teal-500/50 bg-[#0f172a]/60 text-white shadow-inner text-sm`}
            id="faq-search-input"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-list">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-sm hover:shadow-lg hover:border-teal-500/30 transition-all duration-200"
                id={`faq-item-container-${faq.id}`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full p-5 flex items-center justify-between gap-4 text-left ${
                    lang === "ar" ? "text-right" : "text-left"
                  } cursor-pointer`}
                  id={`faq-toggle-btn-${faq.id}`}
                >
                  <span className="font-display text-sm sm:text-base font-bold text-white leading-tight">
                    {faq.question[lang]}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-white/10"
                      id={`faq-answer-container-${faq.id}`}
                    >
                      <p className="p-5 text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0f172a]/40">
                        {faq.answer[lang]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12" id="faq-empty-state">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 text-sm font-medium">
              {lang === "en" ? "No matches found in our FAQ database." : "لم يتم العثور على نتائج تطابق معيار بحثك."}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
