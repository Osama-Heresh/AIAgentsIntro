import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot, Trash2, ArrowRightLeft, Sparkles, Check } from "lucide-react";
import { translations } from "../data/translations";
import { Language } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface LiveChatWidgetProps {
  lang: Language;
}

interface ChatMessage {
  sender: "user" | "agent";
  text: string;
  time: string;
}

export default function LiveChatWidget({ lang }: LiveChatWidgetProps) {
  const t = translations[lang];
  const isRtl = lang === "ar";
  
  const [isOpen, setIsOpen] = useState(false);
  const [activePersona, setActivePersona] = useState<"onboarding" | "factory" | "support">("onboarding");
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Load initial welcome message when language or persona switches
  useEffect(() => {
    const getWelcomeText = () => {
      if (activePersona === "onboarding") {
        return lang === "en"
          ? "Welcome to AI Agents Platform! I am your Onboarding Specialist. Let me know what industry you operate in (e.g. Healthcare, Manufacturing, Retail) so I can match you with the perfect autonomous workforce."
          : "أهلاً بك في منصة عملاء الذكاء الاصطناعي! أنا أخصائي التهيئة الرقمية المساعد. أخبرني بقطاع عملك (مثل: التصنيع، المستشفيات، المقاولات) لأرشح لك وكيلاً مناسباً.";
      }
      if (activePersona === "factory") {
        return lang === "en"
          ? "Industrial Automation Node active. I am your Factory Optimization Planner. Ask me how I calculate machine capacity, schedule dispatch logs, or predict machinery failures."
          : "تم تفعيل عقدة الأتمتة الصناعية. أنا عميل تخطيط وجدولة الإنتاج. اسألني كيف أقوم بجدولة الآلات بالدقائق، أو صيانة المعدات تنبؤياً.";
      }
      return lang === "en"
        ? "Hello! I am your Support Agent. I can answer inquiries regarding security, ISO certification, CRM/ERP integration boundaries, or subscription payments."
        : "مرحباً! أنا عميل الدعم الفني. يمكنني الإجابة على استفساراتك حول أمن البيانات، التوافق الضريبي ZATCA، الباقات السنوية، والربط مع SAP و Odoo.";
    };

    setMessages([
      {
        sender: "agent",
        text: getWelcomeText(),
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  }, [activePersona, lang]);

  // Clickable suggested prompts for rapid demo testing
  const getSuggestedPrompts = () => {
    if (activePersona === "onboarding") {
      return lang === "en"
        ? [
            "Which agent is best for a metal factory?",
            "Do you have agents for medical clinics?",
            "What is an AI Agent?"
          ]
        : [
            "ما هو أفضل عميل لمصنع معادن؟",
            "هل لديكم عملاء للعيادات الطبية؟",
            "ما هو عميل الذكاء الاصطناعي؟"
          ];
    }
    if (activePersona === "factory") {
      return lang === "en"
        ? [
            "How do you schedule machine workflows?",
            "How accurate is production forecasting?",
            "Explain machinery maintenance warning signs"
          ]
        : [
            "كيف تقوم بجدولة خطة عمل الآلات؟",
            "ما هي دقة التنبؤ بالإنتاج؟",
            "اشرح طريقة الصيانة التنبؤية للأعطال"
          ];
    }
    return lang === "en"
      ? [
          "Can you integrate with SAP and Odoo?",
          "How secure is my proprietary data?",
          "Is there a free trial sandbox?"
        ]
      : [
          "هل يمكن الربط مع Odoo و SAP؟",
          "كيف تضمنون أمن وسرية بياناتنا؟",
          "هل توجد فترة تجريبية مجانية؟"
        ];
  };

  // Mock reply intelligence database (zero-latency, highly relevant replies)
  const getMockReply = (input: string) => {
    const query = input.toLowerCase();

    if (activePersona === "onboarding") {
      if (query.includes("factory") || query.includes("manufacturing") || query.includes("مصنع") || query.includes("تصنيع")) {
        return lang === "en"
          ? "For manufacturing, I highly recommend our Production Planning AI. It integrates with your ERP (SAP/Odoo) and telemetry to schedule jobs and reduce machinery idle times by 28%, saving roughly 38% in operating costs."
          : "لقطاع الصناعة، أنصحك بشدة بنشر عميل 'تخطيط الإنتاج الاصطناعي'. يتصل بنظام الـ ERP وقراءات المعدات لجدولة العمل وتقليص أوقات الأعطال بنسبة 28%، محققاً وفراً مالياً يبلغ 38%.";
      }
      if (query.includes("clinic") || query.includes("medical") || query.includes("hospital") || query.includes("طبي") || query.includes("عياد") || query.includes("مستشف")) {
        return lang === "en"
          ? "For healthcare facilities, our Customer Support AI connects directly with WhatsApp Business APIs to handle pacient bookings, reschedule appointments, pre-audit medical insurance classifications, and reduce administrative loads by 78%."
          : "للمرافق والعيادات الطبية، يتصل عميل 'دعم العملاء الذكي' بالواتساب لحجز مواعيد المرضى، وتدقيق تصنيفات التأمين لتخفيض الرفض بنسبة 40%، وتوفير 78% من عبء الإدارة.";
      }
      return lang === "en"
        ? "AI Agents are autonomous cognitive workers. Unlike basic chatbots, they understand complete rules, access your documents, match values in databases, and complete complex multi-system transactions independently."
        : "عملاء الذكاء الاصطناعي هم موظفون رقميون مستقلون. وبخلاف الروبوتات العادية، فإنهم يستوعبون قواعد العمل الكاملة، ويقرؤون مستنداتك، ويجرون مطابقة البيانات والمعاملات بين أنظمتك بشكل ذاتي.";
    }

    if (activePersona === "factory") {
      if (query.includes("schedule") || query.includes("workflows") || query.includes("جدول") || query.includes("خط") || query.includes("عمل")) {
        return lang === "en"
          ? "I ingest dynamic order pipelines and machine logs to balance material allocations, scheduled downs, and tool setups, shifting operations in milliseconds to bypass breakdowns with 95% planning precision."
          : "أقوم بدمج سجلات مبيعات ERP وحالة الماكينات لتوليد خطط توزيع العمل المثلى، وتعديل الجداول في أجزاء من الثانية لتفادي الأعطال المفاجئة بدقة تصل إلى 95%.";
      }
      if (query.includes("forecast") || query.includes("predict") || query.includes("تنب") || query.includes("توق")) {
        return lang === "en" ? "By computing historical floor telemetry and supply chain times, I forecast exact shipping timelines with over 95% accuracy, adjusting warehousing buffers dynamically." : "من خلال حساب قياسات الآلات وتواريخ التوريد التاريخية، نتنبأ بمواعيد شحن طلبياتك بدقة تتجاوز 95% مع ضبط المخزون الاحتياطي تلقائياً.";
      }
      return lang === "en"
        ? "I track mechanical heat, spikes in electric consumption, and vibration telemetry to catch anomalies, alerting engineers weeks before physical failures halt production lines."
        : "أقوم بمراقبة اهتزازات ومستويات استهلاك طاقة الآلات لكشف الاختلالات، وتنبيه الفنيين قبل أسابيع من حدوث الأعطال الميكانيكية المكلفة وتوقف الإنتاج.";
    }

    // Support Persona
    if (query.includes("sap") || query.includes("odoo") || query.includes("integrate") || query.includes("ربط") || query.includes("تكامل")) {
      return lang === "en"
        ? "Yes, seamless system integration is our core strength. We connect securely via REST APIs, webhooks, or database bridges to read and write records straight inside SAP, Odoo, Dynamics, and Salesforce."
        : "نعم، التكامل والربط مع الأنظمة هو أساس كفاءة عملائنا. نربط بأمان تام عبر واجهات REST APIs والويب هوكس لقراءة وتسجيل البيانات في أنظمة SAP و Odoo و Dynamics و Salesforce.";
    }
    if (query.includes("secure") || query.includes("data") || query.includes("أمان") || query.includes("سرية") || query.includes("بيان")) {
      return lang === "en"
        ? "Your data privacy is fully guaranteed. All uploads and conversation history are isolated in secure sandbox containers (ISO-27001 compliant) and are NEVER used to train public LLM models."
        : "خصوصية بياناتك وسريتها مضمونة بنسبة 100%. كافة البيانات مشفرة ومعزولة داخل حاوية آمنة متوافقة مع ISO-27001، ولا يتم استخدامها مطلقاً لتدريب النماذج العامة.";
    }
    return lang === "en"
      ? "Yes! We set up secure proof-of-concept sandboxes for 14 days, pre-loaded with your actual manuals, so you can test conversational accuracy and ROI before signing packages."
      : "نعم! نؤسس لشركتكم بيئة اختبار تجريبية معزولة مجاناً لمدة 14 يوماً، محملة ببياناتكم الفعلية، ليتسنى لكم قياس دقة وجودة العميل ونسب التوفير المحققة قبل الاشتراك.";
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      sender: "user",
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI cognitive analysis delay
    setTimeout(() => {
      const replyText = getMockReply(textToSend);
      const agentMsg: ChatMessage = {
        sender: "agent",
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, agentMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleReset = () => {
    setMessages([]);
    setActivePersona("onboarding");
  };

  return (
    <div id="floating-live-chat" className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Circular Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-slate-950 text-teal-400 rounded-full flex items-center justify-center shadow-2xl border border-slate-800 hover:bg-slate-900 hover:scale-105 transition-all cursor-pointer relative"
        id="chat-floating-trigger"
        title="Interact with AI Agent"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>

      {/* Expanded Chatbox Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className={`absolute bottom-16 ${
              isRtl ? "left-0 sm:left-6" : "right-0 sm:right-6"
            } w-[92vw] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col justify-between`}
            id="chat-window-panel"
          >
            {/* Window Header */}
            <div className="p-4 bg-slate-950 text-white flex items-center justify-between border-b border-slate-900" id="chat-window-header">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-slate-900 text-teal-400 rounded-xl border border-slate-800">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-display font-bold text-sm block tracking-tight">
                    {lang === "en" ? "Active Agent Simulator" : "محاكي عملاء الذكاء"}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span>Cognitive Node Active</span>
                  </span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="p-1 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
                title={t.demoReset}
                id="reset-chat-btn"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Persona Switch Tab buttons */}
            <div className="grid grid-cols-3 bg-slate-100 p-1 border-b border-slate-200" id="chat-persona-tabs">
              <button
                onClick={() => setActivePersona("onboarding")}
                className={`py-1.5 text-[10px] sm:text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activePersona === "onboarding" ? "bg-white text-slate-950 shadow-sm" : "text-slate-500 hover:text-slate-950"
                }`}
                id="btn-persona-onboarding"
              >
                {lang === "en" ? "Onboarding" : "التهيئة"}
              </button>
              <button
                onClick={() => setActivePersona("factory")}
                className={`py-1.5 text-[10px] sm:text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activePersona === "factory" ? "bg-white text-slate-950 shadow-sm" : "text-slate-500 hover:text-slate-950"
                }`}
                id="btn-persona-factory"
              >
                {lang === "en" ? "Factory" : "المصنع"}
              </button>
              <button
                onClick={() => setActivePersona("support")}
                className={`py-1.5 text-[10px] sm:text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activePersona === "support" ? "bg-white text-slate-950 shadow-sm" : "text-slate-500 hover:text-slate-950"
                }`}
                id="btn-persona-support"
              >
                {lang === "en" ? "Support" : "الدعم الفني"}
              </button>
            </div>

            {/* Conversation Messages viewport */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50" id="chat-messages-viewport">
              {messages.map((msg, idx) => {
                const isAgent = msg.sender === "agent";
                return (
                  <div
                    key={idx}
                    className={`flex gap-2.5 ${isAgent ? "" : "flex-row-reverse"}`}
                    id={`chat-msg-row-${idx}`}
                  >
                    {isAgent && (
                      <div className="p-1.5 bg-slate-900 text-teal-400 rounded-lg h-fit border border-slate-800 shrink-0">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 text-xs leading-relaxed ${
                        isAgent
                          ? "bg-white text-slate-800 border border-slate-200 shadow-sm"
                          : "bg-slate-950 text-white"
                      }`}
                      id={`chat-msg-bubble-${idx}`}
                    >
                      <p>{msg.text}</p>
                      <span className="text-[8.5px] text-slate-400 font-mono block mt-1.5 text-right">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2.5" id="chat-typing-indicator">
                  <div className="p-1.5 bg-slate-900 text-teal-400 rounded-lg h-fit border border-slate-800 shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl p-3 flex items-center gap-1.5 shadow-sm text-[10px] text-slate-400 font-semibold italic">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    <span className="ml-1">{t.demoTyping}</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts Grid */}
            <div className="px-4 py-2 border-t border-slate-100 bg-white" id="suggested-prompts-panel">
              <span className="text-[9px] font-bold text-slate-400 block uppercase mb-1.5">
                {lang === "en" ? "Test Scenarios" : "سيناريوهات تجريبية مقترحة"}
              </span>
              <div className="flex flex-col gap-1.5" id="suggested-pills-list">
                {getSuggestedPrompts().map((promptText, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(promptText)}
                    className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-950 text-[10px] sm:text-xs font-semibold rounded-xl text-left border border-slate-200/60 cursor-pointer truncate"
                    id={`suggested-prompt-btn-${idx}`}
                  >
                    {promptText}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form Footer */}
            <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2" id="chat-input-footer">
              <input
                type="text"
                placeholder={t.demoPlaceholder}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage(inputText);
                }}
                className="flex-1 py-2 px-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-teal-500 bg-slate-50"
                id="chat-text-input"
              />
              <button
                onClick={() => handleSendMessage(inputText)}
                className="p-2.5 bg-slate-950 hover:bg-teal-500 text-teal-400 hover:text-slate-950 rounded-xl transition-colors cursor-pointer shrink-0"
                id="send-chat-msg-btn"
                title={t.demoSend}
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
