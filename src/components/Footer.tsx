import React, { useState, FormEvent } from "react";
import { Linkedin, Facebook, Youtube, Bot, Send, Check } from "lucide-react";
import { translations } from "../data/translations";
import { Language } from "../types";
import { motion } from "motion/react";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900" id="footer-grid">
          
          {/* Column 1: Brand & Desc */}
          <div className="lg:col-span-4 space-y-4" id="footer-col-brand">
            <div className="flex items-center gap-2 text-white">
              <div className="p-1.5 bg-slate-900 text-teal-400 rounded-lg border border-slate-800">
                <Bot className="w-5 h-5 animate-pulse" />
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight">
                {t.appName}
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.footerDesc}
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-teal-400 rounded-xl transition-colors border border-slate-800"
                title={t.linkedinLink}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-teal-400 rounded-xl transition-colors border border-slate-800"
                title={t.facebookLink}
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-teal-400 rounded-xl transition-colors border border-slate-800"
                title={t.youtubeLink}
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-2 space-y-3" id="footer-col-solutions">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.footerSolutions}</h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm">
              <a href="#marketplace" className="hover:text-white transition-colors">Production AI</a>
              <a href="#marketplace" className="hover:text-white transition-colors">Customer Support AI</a>
              <a href="#marketplace" className="hover:text-white transition-colors">Outbound Sales AI</a>
              <a href="#marketplace" className="hover:text-white transition-colors">Custom AI Builder</a>
            </div>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-2 space-y-3" id="footer-col-resources">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.footerResources}</h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm">
              <a href="#roi" className="hover:text-white transition-colors">{t.navROI}</a>
              <a href="#case-studies" className="hover:text-white transition-colors">{t.navCaseStudies}</a>
              <a href="#faq" className="hover:text-white transition-colors">{t.navFAQ}</a>
              <a href="https://ai-agent-eight-tawny.vercel.app/" target="_blank" className="hover:text-white transition-colors">{t.docLink}</a>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div className="lg:col-span-2 space-y-3" id="footer-col-legal">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.footerLegal}</h4>
            <div className="flex flex-col gap-2 text-xs sm:text-sm">
              <a href="#faq" className="hover:text-white transition-colors">{t.privacyPolicy}</a>
              <a href="#faq" className="hover:text-white transition-colors">{t.termsOfService}</a>
              <a href="#contact" className="hover:text-white transition-colors">{lang === "en" ? "Report Vulnerability" : "الإبلاغ عن ثغرة"}</a>
              <a href="#contact" className="hover:text-white transition-colors">{lang === "en" ? "Support Desk" : "مكتب الدعم"}</a>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div className="lg:col-span-2 space-y-3" id="footer-col-newsletter">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.footerNewsletter}</h4>
            {subscribed ? (
              <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl text-teal-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>{t.footerNewsletterSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 flex flex-col" id="footer-newsletter-form">
                <input
                  type="email"
                  placeholder={t.footerNewsletterPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-teal-500 text-white"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-white text-xs font-bold transition-all cursor-pointer"
                  id="newsletter-subscribe-btn"
                >
                  {t.footerNewsletterBtn}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Metadata & Legal disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10.5px] text-slate-600 gap-4" id="footer-disclaimer">
          <span>
            © {new Date().getFullYear()} {t.appName}. {t.rightsReserved}
          </span>
          <div className="flex gap-4">
            <span className="cursor-default">ISO-27001 Certified</span>
            <span>•</span>
            <span className="cursor-default">ZATCA Phase 2 Compliant</span>
            <span>•</span>
            <span className="cursor-default">SDAIA Data Safe</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
