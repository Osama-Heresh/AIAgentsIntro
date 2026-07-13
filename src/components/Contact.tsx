import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle, Send, Globe, ChevronRight } from "lucide-react";
import { translations } from "../data/translations";
import { Language } from "../types";
import { motion } from "motion/react";

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    agentsInterest: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = lang === "en" ? "Name is required" : "الاسم مطلوب";
    if (!formData.email.trim()) {
      newErrors.email = lang === "en" ? "Email is required" : "البريد الإلكتروني مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = lang === "en" ? "Invalid email address" : "البريد الإلكتروني غير صالح";
    }
    if (!formData.phone.trim()) newErrors.phone = lang === "en" ? "Phone is required" : "رقم الهاتف مطلوب";
    if (!formData.company.trim()) newErrors.company = lang === "en" ? "Company name is required" : "اسم الشركة مطلوب";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API storage delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        agentsInterest: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-2">
            {lang === "en" ? "Inquiry Portal" : "بوابة التواصل المباشر"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-grid">
          
          {/* Left Column: Form Panel */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-8" id="contact-form-panel">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
                id="contact-success-state"
              >
                <div className="inline-flex p-4 bg-emerald-100 text-emerald-700 rounded-full mb-2">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  {lang === "en" ? "Consultation Submitted!" : "تم تقديم الطلب بنجاح!"}
                </h3>
                <p className="text-slate-600 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
                  {t.contactSuccess}
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 font-bold text-xs bg-slate-900 hover:bg-slate-800 text-white rounded-xl transition-colors mt-4 cursor-pointer"
                  id="reset-form-btn"
                >
                  {lang === "en" ? "Submit Another Response" : "إرسال طلب جديد"}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="contact-consultation-form">
                
                {/* Dual Field: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <input
                      type="text"
                      name="name"
                      placeholder={t.placeholderName}
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-xl border ${errors.name ? "border-red-500 bg-red-50/50" : "border-slate-200 bg-white"} focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm`}
                      id="input-contact-name"
                    />
                    {errors.name && <p className="text-[10px] font-semibold text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div className="space-y-1">
                    <input
                      type="text"
                      name="company"
                      placeholder={t.placeholderCompany}
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-xl border ${errors.company ? "border-red-500 bg-red-50/50" : "border-slate-200 bg-white"} focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm`}
                      id="input-contact-company"
                    />
                    {errors.company && <p className="text-[10px] font-semibold text-red-500">{errors.company}</p>}
                  </div>
                </div>

                {/* Dual Field: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <input
                      type="email"
                      name="email"
                      placeholder={t.placeholderEmail}
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-xl border ${errors.email ? "border-red-500 bg-red-50/50" : "border-slate-200 bg-white"} focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm`}
                      id="input-contact-email"
                    />
                    {errors.email && <p className="text-[10px] font-semibold text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-1">
                    <input
                      type="text"
                      name="phone"
                      placeholder={t.placeholderPhone}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-xl border ${errors.phone ? "border-red-500 bg-red-50/50" : "border-slate-200 bg-white"} focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm`}
                      id="input-contact-phone"
                    />
                    {errors.phone && <p className="text-[10px] font-semibold text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                {/* Dropdowns: Industry & Agents Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-slate-500 text-sm"
                    id="input-contact-industry"
                  >
                    <option value="">{t.placeholderIndustry}</option>
                    <option value="manufacturing">{lang === "en" ? "Manufacturing" : "التصنيع"}</option>
                    <option value="healthcare">{lang === "en" ? "Healthcare" : "الرعاية الصحية"}</option>
                    <option value="construction">{lang === "en" ? "Construction" : "المقاولات والإنشاءات"}</option>
                    <option value="finance">{lang === "en" ? "Finance & Banking" : "المالية والمصارف"}</option>
                    <option value="retail">{lang === "en" ? "E-Commerce & Retail" : "التجارة والتجزئة"}</option>
                    <option value="other">{lang === "en" ? "Other Industry" : "قطاع آخر"}</option>
                  </select>

                  <input
                    type="text"
                    name="agentsInterest"
                    placeholder={t.placeholderAgentsInterest}
                    value={formData.agentsInterest}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm"
                    id="input-contact-interest"
                  />
                </div>

                {/* Textarea Message */}
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t.placeholderMessage}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 text-sm"
                  id="input-contact-message"
                />

                {/* Submission CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold bg-slate-950 text-white hover:bg-teal-700 transition-colors shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  id="submit-contact-form"
                >
                  {isSubmitting ? (
                    <span>{t.btnSending}</span>
                  ) : (
                    <>
                      <span>{t.btnSendInquiry}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* Right Column: Office info & Interactive Vector Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8" id="contact-info-panel">
            
            {/* Vector headquarters placeholder maps */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 flex-1 flex flex-col justify-between" id="office-hq-visual">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono text-teal-400 font-bold uppercase tracking-widest">
                  {lang === "en" ? "HQ Connectivity Map" : "مخطط الاتصال بالمقرات"}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
              </div>

              {/* Styled clean Middle East map vector overlay */}
              <div className="flex-1 flex items-center justify-center py-6" id="hq-middle-east-map">
                <svg viewBox="0 0 400 220" className="w-full max-w-[340px] opacity-80" fill="none">
                  {/* Simplistic stylized boundary paths representing Gulf/Middle East grids */}
                  <path d="M 60,30 Q 150,5 200,45 T 320,10 T 380,80 T 320,170 T 210,190 T 120,130 Z" fill="#1e293b" />
                  <path d="M 80,45 Q 160,25 210,60 T 310,35 T 360,95 T 290,165" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                  
                  {/* Connections */}
                  <line x1="120" y1="80" x2="230" y2="120" stroke="#0f766e" strokeWidth="1.2" strokeDasharray="2 2" />
                  <line x1="120" y1="80" x2="280" y2="90" stroke="#0f766e" strokeWidth="1.2" strokeDasharray="2 2" />
                  <line x1="230" y1="120" x2="280" y2="90" stroke="#0f766e" strokeWidth="1.2" strokeDasharray="2 2" />

                  {/* Amman beacon pin */}
                  <circle cx="120" cy="80" r="12" fill="rgba(20, 184, 166, 0.15)" />
                  <circle cx="120" cy="80" r="4" fill="#22c55e" />
                  <text x="110" y="62" fill="#94a3b8" fontSize="8" fontWeight="bold" fontFamily="monospace">AMMAN</text>

                  {/* Riyadh beacon pin */}
                  <circle cx="230" cy="120" r="16" fill="rgba(20, 184, 166, 0.2)" />
                  <circle cx="230" cy="120" r="5" fill="#22c55e" />
                  <text x="220" y="142" fill="#94a3b8" fontSize="8" fontWeight="bold" fontFamily="monospace">RIYADH</text>

                  {/* Dubai beacon pin */}
                  <circle cx="280" cy="90" r="12" fill="rgba(20, 184, 166, 0.15)" />
                  <circle cx="280" cy="90" r="4" fill="#22c55e" />
                  <text x="285" y="80" fill="#94a3b8" fontSize="8" fontWeight="bold" fontFamily="monospace">DUBAI</text>
                </svg>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex justify-between">
                <span>{lang === "en" ? "Primary GCC Node" : "العقدة الإقليمية للخليج"}</span>
                <span className="font-mono text-teal-400">Riyadh Hub</span>
              </div>
            </div>

            {/* Address cards list */}
            <div className="space-y-4" id="address-location-cards">
              
              {/* Office 1: Riyadh */}
              <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-2xl flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">{lang === "en" ? "Riyadh Regional Office (KSA)" : "المكتب الإقليمي بالرياض (السعودية)"}</span>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.contactKsaAddress}</p>
                </div>
              </div>

              {/* Office 2: Amman */}
              <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-2xl flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">{lang === "en" ? "Amman Headquarters (Jordan)" : "المقر الرئيسي في عمّان (الأردن)"}</span>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.contactJorAddress}</p>
                </div>
              </div>

              {/* General details */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200/50 rounded-2xl flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span className="font-mono font-bold text-slate-700">{t.contactGeneralPhone}</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200/50 rounded-2xl flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-600 truncate">{t.contactGeneralEmail}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
