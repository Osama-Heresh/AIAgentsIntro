import { useState, useEffect } from "react";
import { Language } from "./types";

// Import custom sections
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProblemSolution from "./components/ProblemSolution";
import RoiCalculator from "./components/RoiCalculator";
import Marketplace from "./components/Marketplace";
import Industries from "./components/Industries";
import SmartFactory from "./components/SmartFactory";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import WhyChooseUs from "./components/WhyChooseUs";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LiveChatWidget from "./components/LiveChatWidget";

export default function App() {
  const [lang, setLang] = useState<Language>("en");
  const [activeSection, setActiveSection] = useState("hero");

  // Dynamically configure native browser text directions and document language tags
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  // Dynamic scroll observer to highlight navigation links based on position
  useEffect(() => {
    const sectionIds = [
      "hero",
      "marketplace",
      "industries",
      "factory",
      "roi",
      "case-studies",
      "pricing",
      "faq",
      "contact"
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when element is centered in viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Smooth-scrolling navigator
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen bg-[#0f172a] font-sans text-slate-200 transition-colors duration-300 selection:bg-teal-500/30 selection:text-white relative overflow-hidden ${
      lang === "ar" ? "font-cairo" : "font-sans"
    }`} id="app-root">
      
      {/* Immersive UI Background Decorative Glowing Spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0f766e] opacity-25 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-[#3b82f6] opacity-15 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-[#22c55e] opacity-15 rounded-full blur-[150px]"></div>
        {/* Additional high-contrast visual depth highlight */}
        <div className="absolute top-2/3 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Navigation Bar */}
      <Navbar lang={lang} setLang={setLang} activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Page Layout Flow */}
      <main id="app-main-content" className="relative z-10">
        
        {/* Hero Segment */}
        <Hero lang={lang} scrollToSection={scrollToSection} />

        {/* Stats & Trust pillars */}
        <Stats lang={lang} />

        {/* Bottleneck vs Solution comparative deck */}
        <ProblemSolution lang={lang} />

        {/* Interactive ROI Calculator */}
        <RoiCalculator lang={lang} />

        {/* Specialized Agents Marketplace */}
        <Marketplace lang={lang} />

        {/* Sector Specific Solutions Navigator */}
        <Industries lang={lang} />

        {/* Smart Industry 4.0 Factory Showcase */}
        <SmartFactory lang={lang} />

        {/* Implementation roadmap steps */}
        <HowItWorks lang={lang} />

        {/* Enterprise-grade Feature matrix */}
        <Features lang={lang} />

        {/* Strategic competitive advantages */}
        <WhyChooseUs lang={lang} />

        {/* Real-world regional Case Studies slider */}
        <CaseStudies lang={lang} />

        {/* Commercial Subscription tiers with toggle billing */}
        <Pricing lang={lang} scrollToSection={scrollToSection} />

        {/* 25 Searchable FAQ accordions */}
        <Faq lang={lang} />

        {/* Strategic request form + HQ regional Office indices */}
        <Contact lang={lang} />

      </main>

      {/* Detailed footer */}
      <Footer lang={lang} />

      {/* Floating Interactive Chat Simulation Simulator */}
      <LiveChatWidget lang={lang} />

    </div>
  );
}
