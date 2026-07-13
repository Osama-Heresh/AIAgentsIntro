import { useState, useEffect } from "react";
import { Menu, X, Globe, Bot, ArrowUpRight } from "lucide-react";
import { translations } from "../data/translations";
import { Language } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ lang, setLang, activeSection, scrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: t.navHome },
    { id: "marketplace", label: t.navMarketplace },
    { id: "industries", label: t.navIndustries },
    { id: "factory", label: t.navFactory },
    { id: "roi", label: t.navROI },
    { id: "case-studies", label: t.navCaseStudies },
    { id: "pricing", label: t.navPricing },
    { id: "faq", label: t.navFAQ },
    { id: "contact", label: t.navContact }
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel py-3 shadow-lg border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick("hero")}
            id="nav-logo"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#0f766e] to-[#22c55e] rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <Bot className="w-5 h-5 text-white animate-pulse" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-white uppercase select-none">
              AI AGENTS <span className="text-[#22c55e] group-hover:text-teal-400 transition-colors">PLATFORM</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 border ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-[#0f766e]/30 to-[#22c55e]/30 text-teal-300 border-teal-500/40 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/5 border-transparent"
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4" id="nav-actions">
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors border border-white/15"
              id="lang-switch-desktop"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === "en" ? "العربية" : "English"}</span>
            </button>

            {/* CTA */}
            <a
              href="https://ai-agent-eight-tawny.vercel.app/"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full font-bold text-sm bg-[#22c55e] hover:bg-[#16a34a] text-[#0f172a] shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.03]"
              id="nav-cta-desktop"
            >
              <span>{t.btnLaunch}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 text-slate-300 hover:bg-white/10 rounded-lg border border-white/15"
              id="lang-switch-mobile-icon"
              title="Switch Language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:bg-white/10 rounded-lg"
              id="mobile-menu-trigger"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-white/10 bg-[#0f172a]/95 backdrop-blur-xl"
            id="mobile-nav-panel"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-2.5 text-base font-medium rounded-lg border ${
                    lang === "ar" ? "text-right" : "text-left"
                  } ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#0f766e]/30 to-[#22c55e]/30 text-teal-300 border-teal-500/40"
                      : "text-slate-300 hover:bg-white/5 hover:text-white border-transparent"
                  }`}
                  id={`mobile-nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://ai-agent-eight-tawny.vercel.app/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 font-bold text-center bg-[#22c55e] text-[#0f172a] rounded-full shadow-md hover:bg-[#16a34a] transition-all duration-300"
                  id="mobile-nav-cta"
                >
                  <span>{t.btnLaunch}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
