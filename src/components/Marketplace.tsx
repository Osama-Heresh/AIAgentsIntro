import { useState } from "react";
import { Search, SlidersHorizontal, ArrowUpRight, CheckCircle2, DollarSign, Clock, HelpCircle, Bot, Cpu, Headphones, MessageSquareCode, TrendingUp, Megaphone, Users, Calculator, Briefcase, FileText, PhoneCall, FolderGit2, Share2, Kanban, Settings, X } from "lucide-react";
import { translations, agentsData } from "../data/translations";
import { Language, Agent } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface MarketplaceProps {
  lang: Language;
}

// Dynamic Icon Component mapping
const IconHelper = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "Cpu": return <Cpu className={className} />;
    case "Headphones": return <Headphones className={className} />;
    case "MessageSquareCode": return <MessageSquareCode className={className} />;
    case "TrendingUp": return <TrendingUp className={className} />;
    case "Megaphone": return <Megaphone className={className} />;
    case "Users": return <Users className={className} />;
    case "Calculator": return <Calculator className={className} />;
    case "Briefcase": return <Briefcase className={className} />;
    case "FileText": return <FileText className={className} />;
    case "PhoneCall": return <PhoneCall className={className} />;
    case "FolderGit2": return <FolderGit2 className={className} />;
    case "Share2": return <Share2 className={className} />;
    case "Kanban": return <Kanban className={className} />;
    case "Settings": return <Settings className={className} />;
    default: return <Bot className={className} />;
  }
};

export default function Marketplace({ lang }: MarketplaceProps) {
  const t = translations[lang];
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  // Category classification helper
  const getCategory = (id: string) => {
    if (id === "prod-planning" || id === "custom-agent") return "industrial";
    if (id === "customer-support" || id === "website-chatbot" || id === "phone-call") return "support";
    if (id === "sales-ai" || id === "marketing-ai" || id === "social-media") return "marketing";
    if (id === "accounting-ai" || id === "tender-automation" || id === "business-consultant") return "finance";
    return "operations"; // hr-recruitment, knowledge-base, project-manager
  };

  const categories = [
    { id: "all", label: lang === "en" ? "All AI Agents" : "جميع وكلاء الذكاء" },
    { id: "industrial", label: lang === "en" ? "Industrial & Planning" : "التخطيط والصناعة" },
    { id: "support", label: lang === "en" ? "Customer Support" : "دعم العملاء" },
    { id: "marketing", label: lang === "en" ? "Sales & Content" : "المبيعات والتسويق" },
    { id: "finance", label: lang === "en" ? "Finance & Tenders" : "المالية والمناقصات" },
    { id: "operations", label: lang === "en" ? "Operations & HR" : "إدارة العمليات والتوظيف" }
  ];

  const filteredAgents = agentsData.filter((agent) => {
    const nameStr = agent.name[lang].toLowerCase();
    const descStr = agent.description[lang].toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = nameStr.includes(query) || descStr.includes(query);
    
    if (activeCategory === "all") return matchesSearch;
    return getCategory(agent.id) === activeCategory && matchesSearch;
  });

  return (
    <section id="marketplace" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12" id="marketplace-header">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
            {lang === "en" ? "Digital Workforce Store" : "متجر القوى العاملة الرقمية"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {lang === "en" ? "AI Agents Marketplace" : "متجر عملاء الذكاء الاصطناعي"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {lang === "en"
              ? "Browse, learn, and dynamically deploy pre-trained cognitive AI agents tailored to resolve operational costs immediately."
              : "تصفح وتعلم وفعل موظفي الذكاء الاصطناعي الجاهزين لخفض التكاليف التشغيلية وإنجاز العمل بذكاء."}
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center mb-10" id="marketplace-filters">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder={lang === "en" ? "Search specialized agents..." : "ابحث عن عملاء ذكاء مخصصين..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full py-3 ${lang === "ar" ? "pr-10 pl-4" : "pl-10 pr-4"} rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50 bg-slate-50/50 text-sm`}
              id="search-agents-input"
            />
          </div>

          {/* Horizontal Category Pill Filter */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 lg:pb-0" id="category-pills">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
                id={`cat-pill-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Product Grid - 14 Agents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="agents-grid">
          <AnimatePresence mode="popLayout">
            {filteredAgents.map((agent) => (
              <motion.div
                layout
                key={agent.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-teal-500/30 hover:-translate-y-1 transition-all duration-300"
                id={`agent-card-${agent.id}`}
              >
                <div>
                  {/* Top Bar with Icon and Savings badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3.5 bg-slate-900 text-teal-400 rounded-2xl group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors shadow-sm">
                      <IconHelper name={agent.iconName} className="w-6 h-6" />
                    </div>
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200/50">
                      {agent.estimatedSavings[lang]}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {agent.name[lang]}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {agent.description[lang]}
                  </p>
                </div>

                {/* Bottom Stats & Action buttons */}
                <div>
                  <div className="pt-4 border-t border-slate-100 mb-6 flex justify-between items-center">
                    <span className="text-xs text-slate-400 font-semibold uppercase">{t.priceStarting}</span>
                    <span className="text-sm font-bold text-slate-900 font-mono bg-slate-100 px-2.5 py-1 rounded">
                      {agent.pricing[lang]}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedAgent(agent)}
                      className="py-2.5 px-3 text-xs font-bold rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center"
                      id={`btn-learn-more-${agent.id}`}
                    >
                      {t.btnLearnMore}
                    </button>
                    <a
                      href="https://ai-agent-eight-tawny.vercel.app/"
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="py-2.5 px-3 text-xs font-bold rounded-xl text-white bg-slate-950 hover:bg-teal-700 transition-all flex items-center justify-center gap-1 group/btn"
                      id={`btn-activate-${agent.id}`}
                    >
                      <span>{t.btnActivate}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state when query matches nothing */}
        {filteredAgents.length === 0 && (
          <div className="text-center py-16" id="marketplace-empty-state">
            <Bot className="w-12 h-12 text-slate-300 mx-auto mb-4 animate-bounce" />
            <p className="text-slate-500 font-medium text-lg">
              {lang === "en" ? "No specialized agents match your filters." : "لم يتم العثور على عملاء يطابقون خيارات البحث."}
            </p>
          </div>
        )}

      </div>

      {/* Detailed Modal Popup Dialog */}
      <AnimatePresence>
        {selectedAgent && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6" id="agent-modal-overlay">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAgent(null)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden relative z-10 flex flex-col"
              id="agent-modal-body"
            >
              {/* Top Banner Accent */}
              <div className="h-2 bg-slate-900" />

              {/* Header */}
              <div className="p-6 pb-0 flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-900 text-teal-400 rounded-2xl">
                    <IconHelper name={selectedAgent.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                      {selectedAgent.name[lang]}
                    </h3>
                    <span className="text-xs font-semibold text-teal-600 block mt-0.5 uppercase tracking-wide">
                      {selectedAgent.estimatedSavings[lang]}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAgent(null)}
                  className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-950 transition-colors"
                  id="close-modal-btn"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh]">
                
                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {lang === "en" ? "Functional Brief" : "الملخص التشغيلي والوظيفي"}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {selectedAgent.description[lang]}
                  </p>
                </div>

                {/* Key Business Benefits list */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    {lang === "en" ? "Detailed Operational Benefits" : "مزايا وفوائد التشغيل المباشرة"}
                  </h4>
                  <div className="space-y-3">
                    {selectedAgent.detailedBenefits[lang].map((benefit, idx) => (
                      <div key={idx} className="flex gap-3 items-start" id={`benefit-item-${idx}`}>
                        <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical pricing metadata */}
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 text-sm">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase mb-1">
                      {t.modalLearnMoreSavings}
                    </span>
                    <span className="font-bold text-slate-900">{selectedAgent.estimatedSavings[lang]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase mb-1">
                      {t.modalLearnMorePrice}
                    </span>
                    <span className="font-mono font-bold text-teal-600">{selectedAgent.pricing[lang]}</span>
                  </div>
                </div>

              </div>

              {/* Footer CTA */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedAgent(null)}
                  className="px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl text-slate-700 hover:bg-slate-200 transition-colors"
                  id="modal-cancel-btn"
                >
                  {t.modalClose}
                </button>
                <a
                  href="https://ai-agent-eight-tawny.vercel.app/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold bg-slate-950 text-white rounded-xl shadow hover:bg-teal-700 transition-colors flex items-center gap-1.5"
                  id="modal-workspace-btn"
                >
                  <span>{t.modalLaunchApp}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
