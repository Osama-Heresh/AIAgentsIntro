import { Cloud, Laptop, Languages, ShieldAlert, BarChart3, BookOpen, FileUp, Webhook, Phone, Code2, Mail, Mic, Key, Layers, Maximize2, Bot } from "lucide-react";
import { translations, featuresData } from "../data/translations";
import { Language } from "../types";
import { motion } from "motion/react";

interface FeaturesProps {
  lang: Language;
}

// Icon helper specifically for Features
const FeatureIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "Cloud": return <Cloud className={className} />;
    case "Laptop": return <Laptop className={className} />;
    case "Languages": return <Languages className={className} />;
    case "ShieldAlert": return <ShieldAlert className={className} />;
    case "BarChart3": return <BarChart3 className={className} />;
    case "BookOpen": return <BookOpen className={className} />;
    case "FileUp": return <FileUp className={className} />;
    case "Webhook": return <Webhook className={className} />;
    case "Phone": return <Phone className={className} />;
    case "Code2": return <Code2 className={className} />;
    case "Mail": return <Mail className={className} />;
    case "Mic": return <Mic className={className} />;
    case "Key": return <Key className={className} />;
    case "Layers": return <Layers className={className} />;
    case "Maximize2": return <Maximize2 className={className} />;
    default: return <Bot className={className} />;
  }
};

export default function Features({ lang }: FeaturesProps) {
  const t = translations[lang];

  return (
    <section id="features" className="py-20 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="features-header">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
            {lang === "en" ? "System Capabilities" : "القدرات والمزايا العامة للنظام"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {lang === "en" ? "Enterprise-Grade Capabilities" : "مزايا تقنية بمستوى المؤسسات الكبرى"}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {lang === "en"
              ? "A robust full-stack ecosystem built to satisfy strict corporate guidelines, legacy sync requirements, and global scalability."
              : "منظومة تقنية متكاملة ومصممة لتلبية متطلبات الحماية والربط وسرعة التوسع للمجموعات والشركات الكبرى."}
          </p>
        </div>

        {/* 15 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="features-grid">
          {featuresData.map((feat) => (
            <div
              key={feat.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-start gap-4"
              id={`feature-card-${feat.id}`}
            >
              <div className="p-3 bg-slate-100 text-slate-700 rounded-xl shrink-0">
                <FeatureIcon name={feat.iconName} className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display text-base font-bold text-slate-900">
                  {feat.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {feat.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
