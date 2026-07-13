import { Agent, Industry, CaseStudy, FaqItem, FeatureItem } from "../types";

export const translations = {
  en: {
    metaTitle: "AI Agents Platform - Intelligent Enterprise Workforce",
    appName: "AI Agents Platform",
    tagline: "The Future of Autonomous Enterprise Operations",
    navHome: "Home",
    navMarketplace: "Agents",
    navIndustries: "Industries",
    navFactory: "Smart Factory",
    navROI: "ROI Calculator",
    navCaseStudies: "Case Studies",
    navPricing: "Pricing",
    navFAQ: "FAQ",
    navContact: "Contact",
    btnLaunch: "Start Your AI Journey",
    btnConsultation: "Book Free Consultation",
    btnLearnMore: "Learn More",
    btnActivate: "Activate Agent",
    btnSendInquiry: "Submit Inquiry",
    btnSending: "Sending...",
    
    // Core Message Highlighted Everywhere
    coreValueProposition: "AI Agents are not an expense—they are a long-term investment that reduces costs, increases productivity, improves customer satisfaction, and helps businesses grow faster.",
    
    // Hero
    heroTitle: "Your AI Workforce Starts Here",
    heroSubtitle: "Deploy intelligent, autonomous AI Agents that work 24/7, reduce operational costs, increase productivity, improve customer satisfaction, and help your business scale without increasing headcount.",
    trustedByAcross: "Trusted by enterprise leaders in Saudi Arabia, Jordan, UAE, Gulf & Worldwide",
    
    // Trust / Stats Section
    trustTitle: "The New Standard of Enterprise Efficiency",
    trustSubtitle: "Why leading organizations across GCC & worldwide are scaling their workforces with autonomous agents.",
    statActiveAgents: "2,400+",
    statActiveAgentsLabel: "Deployed AI Agents",
    statOperatingSaved: "62%",
    statOperatingSavedLabel: "Average Cost Reduction",
    statResponseTime: "1.2s",
    statResponseTimeLabel: "Average Response Time",
    statSatisfaction: "98.4%",
    statSatisfactionLabel: "Client Satisfaction Rate",
    statHoursAutomated: "4.8M+",
    statHoursAutomatedLabel: "Work Hours Automated",

    // Trust Cards
    trustCards: [
      { title: "24/7 Autonomous Availability", desc: "Agents operate continuously without pauses, sleep, or public holidays, safeguarding your SLAs." },
      { title: "Sub-Second Inquiries response", desc: "No queues or holding times. Immediate professional resolution for multiple concurrent clients." },
      { title: "Optimized Operational Spending", desc: "Reduce cost per operational ticket by up to 80% compared to traditional service models." },
      { title: "Scalability Without Congestion", desc: "Spike from 10 to 10,000 tasks instantly. Never experience delayed backlogs during peak cycles." }
    ],

    // Problem / Solution Section
    problemSolutionTitle: "Stop Struggling with Operational Bottlenecks",
    problemSolutionSubtitle: "Contrast traditional manual challenges with autonomous AI agent-driven workflows.",
    problemLabel: "Traditional Operations",
    solutionLabel: "AI Agents Operations",
    
    problems: [
      { title: "Saturating Support Queues", desc: "Customers waiting hours for email replies or stranded in long phone queues." },
      { title: "Skyrocketing Headcount Costs", desc: "Hiring, onboarding, and training human resources continuously to handle spikes." },
      { title: "Human Errors in Repetitive Work", desc: "Manual data entries, mismatched invoices, and planning errors causing financial leakage." },
      { title: "Inability to Scale Constantly", desc: "Operations seize or drop in quality during off-hours, weekends, and holidays." }
    ],
    solutions: [
      { title: "Instant Sub-Second Response", desc: "Every customer gets immediate, accurate, multi-lingual answers 24/7." },
      { title: "Predictable, Fixed Pricing", desc: "Deploy a digital specialist for a fraction of the cost, saving over 65% in overheads." },
      { title: "100% Deterministic Precision", desc: "Zero input errors, fully compliant checks, and error-free multi-system integration." },
      { title: "Infinite Instant Scalability", desc: "Instantly spin up dozens of micro-workers to handle seasonal campaigns or production peaks." }
    ],

    // ROI Calculator
    roiTitle: "Calculate Your Enterprise ROI",
    roiSubtitle: "Input your actual business parameters below to receive a custom data-driven estimation of savings and scale advantages.",
    labelEmployees: "Number of Operational Employees",
    labelSalary: "Average Monthly Salary per Employee ($)",
    labelInquiries: "Daily Customer / Operational Inquiries",
    labelWorkingHours: "Monthly Work Hours on Manual Tasks (per employee)",
    labelManualTasks: "Percentage of Repetitive / Automated Tasks",
    
    roiAnnualSavings: "Estimated Annual Cost Savings",
    roiHoursSaved: "Annual Hours Saved for High-Value Work",
    roiPaybackPeriod: "Estimated Payback Period",
    roiRevenuePotential: "Value-Added Capacity Reclaimed",
    roiNotice: "Disclaimer: Calculated estimates are based on industry averages and represent typical savings of companies utilizing our platform.",

    // Smart Factory Section
    factoryTitle: "Industry 4.0: Factory AI Solutions",
    factorySubtitle: "Unifying operations, logistics, capacity estimation, and machinery health with cognitive agents.",
    factoryD1Title: "Automated Production Scheduling Workflow",
    factoryD1Desc: "See how the Production Planning AI orchestrates machine telemetry, inventory levels, and workforce scheduling dynamically.",
    factoryW1: "1. Order Intake & ERP Ingest",
    factoryW1Desc: "Tender/Sales data is immediately fed into the AI system without human delay.",
    factoryW2: "2. Machine Capacity Balancing",
    factoryW2Desc: "AI computes live machinery wear, scheduled down-times, and active capacity constraints.",
    factoryW3: "3. Materials & Logistics Check",
    factoryW3Desc: "Real-time checking of current inventory, transit logistics, and delivery timelines.",
    factoryW4: "4. Dynamic Schedule Optimization",
    factoryW4Desc: "Generates optimal dispatch lists, shifting targets in milliseconds if a machine breaks down.",
    factoryW5: "5. Dispatch to Shop Floor",
    factoryW5Desc: "Sends direct automated tasks to operators, ERP, and tracking displays.",
    
    factoryCards: [
      { title: "Dynamic Capacity Forecasting", desc: "Predict exact shipping dates based on historical telemetry, staffing logs, and supply chains with over 95% accuracy." },
      { title: "Predictive Machinery Maintenance", desc: "Identify minor anomalies in mechanical vibrations or energy spikes before failures halt production lines." },
      { title: "Intelligent Inventory Buffer", desc: "Automatically adjusts procurement orders to hedge against raw material spikes or custom freight delays." },
      { title: "Dynamic Workforce Scheduling", desc: "Aligns engineer availability and specific certification levels with highly complex custom manufacturing runs." }
    ],

    // How It Works
    howTitle: "Seamless Deployed in Days, Not Months",
    howSubtitle: "A standardized roadmap to integrate smart autonomous agents into your existing ecosystem.",
    step1: "1. Choose an Agent",
    step1Desc: "Select pre-trained specialists from our AI marketplace tailored to your vertical.",
    step2: "2. Configure Your Business",
    step2Desc: "Upload PDFs, guidelines, catalogs, or policy books. The agent learns your rules instantly.",
    step3: "3. Connect Your Systems",
    step3Desc: "Integrate with SAP, Microsoft Dynamics, Salesforce, Odoo, WhatsApp, or proprietary APIs.",
    step4: "4. Launch Your Workforce",
    step4Desc: "Deploy into production with human-in-the-loop triggers to assure high-stakes compliance.",
    step5: "5. Monitor Results",
    step5Desc: "Analyze performance logs, conversational accuracy, and automated cost saving in real-time.",

    // Why Choose Us
    whyTitle: "Engineered for Regional & Global Leadership",
    whySubtitle: "We bridge localized compliance and language nuances with bleeding-edge global LLM models.",
    why1Title: "Deep Arabic & Bilingual Natural Language",
    why1Desc: "Handles complex Gulf dialects, technical terminology, and formal Arabic scripts with professional native accuracy.",
    why2Title: "Middle East Local Cloud Compliance",
    why2Desc: "Supports secure localized data hosting in Jordan, KSA, UAE, and GCC complying with local regulatory guidelines.",
    why3Title: "Enterprise-Grade Access Controls",
    why3Desc: "Strict role-based permissions (RBAC), multi-tenant isolation, and encrypted transit (TLS 1.3/AES-256).",
    why4Title: "Omnichannel Connectors",
    why4Desc: "Directly binds to SMS, Email, Web widgets, Discord, Telegram, custom ERP pipelines, and official WhatsApp Business.",

    // Pricing
    pricingTitle: "Transparent, ROI-Positive Pricing",
    pricingSubtitle: "Choose the capacity tier that fits your operational growth. Transition from cost centers to capital growth.",
    billingMonthly: "Billed Monthly",
    billingAnnually: "Billed Annually (Save 20%)",
    popularBadge: "Most Popular",
    priceStarting: "starting from",
    priceCustom: "Custom Pricing",
    priceMonth: "/mo",
    featuresTitle: "Included Capabilities:",
    
    pricingTiers: [
      {
        id: "starter",
        name: "Starter",
        price: "299",
        desc: "Ideal for growing SMBs automating their first touchpoint.",
        features: [
          "1 Active Autonomous AI Agent",
          "5,000 Chat/Task Interactions /mo",
          "Knowledge base (Up to 50 Pages/PDFs)",
          "Bilingual English/Arabic Core",
          "Web Widget & Email Integration",
          "Standard Email Support"
        ]
      },
      {
        id: "pro",
        name: "Professional",
        price: "899",
        desc: "Optimized for mid-market firms with high-volume pipelines.",
        features: [
          "4 Active Connected AI Agents",
          "25,000 Chat/Task Interactions /mo",
          "Knowledge base (Unlimited Uploads)",
          "WhatsApp Business API Integration",
          "Custom ERP Integration (Odoo/Salesforce)",
          "Priority 24/7 SLA Support",
          "Weekly Performance Reports"
        ]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "2499",
        desc: "Built for massive multi-tier manufacturing, hospital, and logistics groups.",
        features: [
          "12 Deployed AI Agents",
          "150,000 Chat/Task Interactions /mo",
          "Cross-agent coordination workflows",
          "Advanced ERP & Custom Database syncing",
          "Dedicated Sandbox for local testing",
          "ISO-27001 compliant architecture",
          "Dedicated Account Strategist",
          "Custom training workshops"
        ]
      },
      {
        id: "custom",
        name: "Custom / Sovereign",
        price: "Talk to Us",
        desc: "Fully isolated dedicated instances, custom models, and sovereign hosting.",
        features: [
          "Unlimited Specialized AI Agents",
          "Unlimited high-frequency interactions",
          "Sovereign local cloud hosting option",
          "Custom LLM fine-tuning on proprietary data",
          "Full on-premise deployment available",
          "Under-NDA proprietary safety filters",
          "Direct engineer Slack & Phone hotline",
          "Custom SLA guarantees"
        ]
      }
    ],

    // Contact
    contactTitle: "Initiate Your Operational Transformation",
    contactSubtitle: "Get in touch with an expert strategist to plan your AI Agent workforce roadmap.",
    placeholderName: "Full Name",
    placeholderEmail: "Corporate Email Address",
    placeholderPhone: "Phone Number (e.g. +966 / +962)",
    placeholderCompany: "Company Name",
    placeholderIndustry: "Select Your Industry",
    placeholderAgentsInterest: "Which Agent(s) do you need?",
    placeholderMessage: "Describe your operational bottleneck or project goals...",
    contactSuccess: "Thank you! Your strategic consultation request has been received. Our regional director will reach out within 2 business hours.",
    contactInfoTitle: "Global & Regional Headquarters",
    contactKsaAddress: "King Fahd Road, Al Olaya District, Riyadh, Kingdom of Saudi Arabia",
    contactJorAddress: "King Abdullah II Street, Al Shamisani, Amman, Jordan",
    contactUaeAddress: "Downtown Boulevard, Dubai, United Arab Emirates",
    contactGeneralPhone: "+966 11 405 8291",
    contactGeneralEmail: "partners@aiagents-platform.com",

    // Interactive Demo / Chatbot widget
    demoTitle: "Talk with a Deployed Agent",
    demoWelcome: "Hello! I am an active AI Onboarding Agent. Select any agent persona below to experience my cognitive reasoning capabilities first-hand!",
    demoSelectPersona: "Choose Agent Persona:",
    demoPlaceholder: "Type your query to test the agent...",
    demoSend: "Send",
    demoReset: "Reset Conversation",
    demoTyping: "Agent is formulating response...",

    // Footer
    footerDesc: "AI Agents Platform is the market-leading enterprise workforce provider in the Middle East & globally, turning overhead costs into modular, high-performing digital capital.",
    footerSolutions: "AI Solutions",
    footerResources: "Resources",
    footerLegal: "Legal Policies",
    footerNewsletter: "Join the Future",
    footerNewsletterPlaceholder: "Enter your corporate email",
    footerNewsletterBtn: "Subscribe",
    footerNewsletterSuccess: "Subscribed! Welcome to the autonomous frontier.",
    rightsReserved: "All rights reserved. Powered by Server-Side Gemini AI Engine.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    docLink: "API Documentation",
    linkedinLink: "LinkedIn Workspace",
    facebookLink: "Facebook Page",
    youtubeLink: "YouTube Channel",

    // Dialogs / Modals
    modalLearnMoreTitle: "Agent Operational Capabilities",
    modalLearnMoreSavings: "Average Saved Overhead:",
    modalLearnMorePrice: "Investment Starting:",
    modalClose: "Close Window",
    modalLaunchApp: "Launch Agent Workspace"
  },
  ar: {
    metaTitle: "منصة عملاء الذكاء الاصطناعي - القوى العاملة الذكية للمؤسسات",
    appName: "منصة عملاء الذكاء الاصطناعي",
    tagline: "مستقبل العمليات المؤسسية المستقلة",
    navHome: "الرئيسية",
    navMarketplace: "العملاء الذكيين",
    navIndustries: "القطاعات",
    navFactory: "المصنع الذكي",
    navROI: "حاسبة العائد",
    navCaseStudies: "دراسات الحالة",
    navPricing: "الأسعار",
    navFAQ: "الأسئلة الشائعة",
    navContact: "اتصل بنا",
    btnLaunch: "ابدأ رحلتك مع الذكاء الاصطناعي",
    btnConsultation: "احجز استشارة مجانية",
    btnLearnMore: "تفاصيل العميل",
    btnActivate: "تفعيل العميل",
    btnSendInquiry: "إرسال الطلب",
    btnSending: "جاري الإرسال...",
    
    // Core Message Highlighted Everywhere
    coreValueProposition: "عملاء الذكاء الاصطناعي ليسوا مجرد تكلفة، بل هم استثمار طويل الأجل يقلل النفقات، ويرفع الإنتاجية، ويحسن رضا العملاء، ويساعد الشركات على النمو المتسارع.",
    
    // Hero
    heroTitle: "قوتك العاملة المدعومة بالذكاء الاصطناعي تبدأ هنا",
    heroSubtitle: "قم بنشر عملاء ذكاء اصطناعي مستقلين وأذكياء يعملون على مدار الساعة طوال أيام الأسبوع، لخفض التكاليف التشغيلية، وزيادة الإنتاجية، ورفع معدلات رضا العملاء، والتوسع دون زيادة عبء التوظيف.",
    trustedByAcross: "موثوق من قبل رواد الأعمال في المملكة العربية السعودية، الأردن، الإمارات العربية المتحدة، الخليج والعالم",
    
    // Trust / Stats Section
    trustTitle: "المعيار الجديد لكفاءة المؤسسات",
    trustSubtitle: "لماذا تتوجه كبرى المؤسسات في منطقة الخليج والعالم إلى مضاعفة طاقتها التشغيلية باستخدام العملاء المستقلين.",
    statActiveAgents: "2,400+",
    statActiveAgentsLabel: "عميل نشط تم نشره",
    statOperatingSaved: "62%",
    statOperatingSavedLabel: "متوسط خفض التكاليف",
    statResponseTime: "1.2 ثانية",
    statResponseTimeLabel: "سرعة الاستجابة الفورية",
    statSatisfaction: "98.4%",
    statSatisfactionLabel: "معدل رضا العملاء",
    statHoursAutomated: "4.8 مليون+",
    statHoursAutomatedLabel: "ساعة عمل تم أتمتتها",

    // Trust Cards
    trustCards: [
      { title: "تواجد مستقل على مدار الساعة", desc: "يعمل العملاء بلا توقف، بلا إجازات أو فترات راحة، لضمان تلبية اتفاقيات مستوى الخدمة باستمرار." },
      { title: "استجابة فورية في أجزاء من الثانية", desc: "لا مزيد من الانتظار أو الطوابير. حل فوري واحترافي لآلاف العملاء المتزامنين في نفس الوقت." },
      { title: "تحسين الإنفاق التشغيلي للشركات", desc: "تخفيض تكلفة المعاملة أو التذكرة التشغيلية بنسبة تصل إلى 80% مقارنة بالوسائل التقليدية." },
      { title: "قابلية غير محدودة للتوسع الفوري", desc: "ارفع طاقتك من 10 مهام إلى 10,000 مهمة فوراً. لا تراجع في الجودة خلال فترات ضغط العمل." }
    ],

    // Problem / Solution Section
    problemSolutionTitle: "أنهِ الاختناقات التشغيلية في عملك",
    problemSolutionSubtitle: "قارن بين التحديات الإدارية التقليدية والحلول الرقمية التي يقدمها عملاء الذكاء الاصطناعي.",
    problemLabel: "العمليات التقليدية",
    solutionLabel: "عمليات عملاء الذكاء الاصطناعي",
    
    problems: [
      { title: "تكدس طوابير الدعم والخدمة", desc: "انتظار العملاء لساعات أو أيام للحصول على رد على رسائل البريد أو البقاء على الهواتف." },
      { title: "تكاليف التوظيف والتدريب الباهظة", desc: "استنزاف الموارد في التوظيف، والتأهيل، وتدريب الموظفين لمواجهة تقلبات ضغط العمل." },
      { title: "الأخطاء البشرية المتكررة", desc: "الأخطاء في إدخال البيانات، وتنسيق الفواتير، وحسابات الإنتاج تؤدي لخسائر مالية مباشرة." },
      { title: "صعوبة العمل في العطلات وخارج الدوام", desc: "توقف العمليات أو تراجع جودتها في فترات المساء، وعطلات نهاية الأسبوع، والأعياد الرسمية." }
    ],
    solutions: [
      { title: "استجابة فورية فائقة السرعة", desc: "يحصل كل عميل على رد دقيق، احترافي، ومتعدد اللغات على مدار الساعة طوال أيام الأسبوع." },
      { title: "تكلفة ثابتة واقتصادية متوقعة", desc: "قم بتعيين أخصائي رقمي بجزء بسيط من التكلفة المعتادة، ووفر ما يزيد عن 65% من النفقات العامة." },
      { title: "دقة متكاملة بنسبة 100%", desc: "انعدام الأخطاء في إدخال البيانات، والامتثال التام للأنظمة، والربط الدقيق بين الأنظمة المتعددة." },
      { title: "توسع فوري غير محدود", desc: "قم بإنشاء عشرات الموظفين الرقميين في ثوانٍ لمواجهة حملات المواسم أو ذروة الإنتاج." }
    ],

    // ROI Calculator
    roiTitle: "احسب العائد على الاستثمار لمؤسستك",
    roiSubtitle: "أدخل البيانات التشغيلية الحقيقية لشركتك أدناه للحصول على تقدير فوري ودقيق للمدخرات والفوائد المالية.",
    labelEmployees: "عدد الموظفين التشغيليين الحاليين",
    labelSalary: "متوسط الراتب الشهري للموظف الواحد ($)",
    labelInquiries: "عدد الاستفسارات / المعاملات اليومية",
    labelWorkingHours: "ساعات العمل الشهرية المخصصة للمهام اليدوية (لكل موظف)",
    labelManualTasks: "نسبة المهام القابلة للأتمتة / المتكررة",
    
    roiAnnualSavings: "الوفر المالي السنوي المتوقع",
    roiHoursSaved: "عدد ساعات العمل الموفرة سنوياً للمهام الكبرى",
    roiPaybackPeriod: "فترة استرداد الاستثمار التقريبية",
    roiRevenuePotential: "القيمة الإنتاجية المستردة المستعادة",
    roiNotice: "تنبيه: الحسابات التقديرية مبنية على المعدلات العامة لقطاع الأعمال وتمثل مستويات التوفير الاعتيادية لعملائنا.",

    // Smart Factory Section
    factoryTitle: "الثورة الصناعية الرابعة: حلول الذكاء الاصطناعي للمصانع",
    factorySubtitle: "توحيد خطط العمليات، والخدمات اللوجستية، وتقدير الطاقة الاستيعابية، وصيانة الآلات عبر عملاء إدراكية ذكية.",
    factoryD1Title: "مخطط التدفق التلقائي لجدولة الإنتاج",
    factoryD1Desc: "تعرف على كيفية قيام عميل تخطيط الإنتاج الذكي بالتنسيق الفوري بين قراءات الآلات، ومخزون المواد، وجدول طاقم العمل.",
    factoryW1: "1. تلقي الطلبات وربط نظام ERP",
    factoryW1Desc: "يتم إدخال بيانات المبيعات أو المناقصات مباشرة لنظام الذكاء الاصطناعي دون تدخل بشري بطيء.",
    factoryW2: "2. موازنة طاقة الآلات التشغيلية",
    factoryW2Desc: "يحسب الذكاء الاصطناعي تآكل المعدات الحية، فترات الصيانة المجدولة، والقدرة الاستيعابية الفعلية.",
    factoryW3: "3. مطابقة المخزون والخدمات اللوجستية",
    factoryW3Desc: "مراقبة حية لمستويات التوريد، والخدمات اللوجستية في العبور، وجداول التوريد من الموردين.",
    factoryW4: "4. التحسين الديناميكي الفوري للجدولة",
    factoryW4Desc: "توليد قوائم توزيع العمل المثلى، وتعديل خطة الإنتاج في أجزاء من الثانية في حال حدوث عطل طارئ للآلة.",
    factoryW5: "5. التوجيه الفوري لخط الإنتاج",
    factoryW5Desc: "إرسال التوجيهات التشغيلية المؤتمتة إلى الفنيين، وتحديث لوحات العرض وربط نظام المتابعة.",
    
    factoryCards: [
      { title: "التنبؤ الديناميكي بالطاقة الاستيعابية", desc: "تحديد تاريخ الشحن بدقة بناءً على البيانات التاريخية للآلات، وجداول المهندسين، وسلسلة الإمداد بدقة تتجاوز 95%." },
      { title: "الصيانة التنبؤية للآلات والمعدات", desc: "التقاط الانحرافات الطفيفة في اهتزاز الآلات أو طفرات استهلاك الطاقة قبل توقف خطوط الإنتاج المكلف." },
      { title: "المخزون الاحتياطي الذكي", desc: "تعديل أوامر الشراء تلقائياً للتحوط ضد تقلبات أسعار المواد الخام العالمية أو تأخيرات النقل والشحن." },
      { title: "جدولة القوى العاملة الذكية", desc: "مطابقة جداول المهندسين ومستويات شهاداتهم الفنية الخاصة مع متطلبات خطط التصنيع المعقدة تلقائياً." }
    ],

    // How It Works
    howTitle: "نشر متكامل خلال أيام قليلة وليس أشهر",
    howSubtitle: "خريطة طريق مبسطة وواضحة لتطبيق العملاء المستقلين في هيكل شركتك الحالي.",
    step1: "1. اختيار العميل المناسب",
    step1Desc: "اختر المتخصص الرقمي المناسب لعملك من متجر العملاء الذكيين المخصص لقطاعك.",
    step2: "2. تهيئة وتدريب العميل",
    step2Desc: "قم برفع ملفات الكتالوجات، والأدلة، أو السياسات والأسعار ليقوم العميل باستيعابها فوراً.",
    step3: "3. ربط وتكامل الأنظمة",
    step3Desc: "نربط العميل مباشرة مع أنظمة SAP أو Dynamics أو Odoo أو قنوات الواتساب والمواقع.",
    step4: "4. إطلاق القوة العاملة",
    step4Desc: "يبدأ العميل بالعمل الفعلي مع ميزة التحقق البشري للمهام عالية الأهمية لضمان الدقة المطلقة.",
    step5: "5. المتابعة وقياس النتائج",
    step5Desc: "راقب لوحة التحكم الحية، دقة المحادثات والقرارات، ومستويات التوفير المالي المحققة لحظة بلحظة.",

    // Why Choose Us
    whyTitle: "مصمم ومطور لقيادة الأسواق الإقليمية والعالمية",
    whySubtitle: "نجمع بين فهم المتطلبات المحلية ومرونة اللغة مع أحدث نماذج الذكاء الاصطناعي العالمية.",
    why1Title: "لغة عربية طبيعية بطلاقة تامة",
    why1Desc: "فهم عميق وفائق للهجات الخليجية والمحلية، والمصطلحات التقنية والمهنية، واللغة العربية الفصحى.",
    why2Title: "الامتثال السحابي المحلي في الخليج",
    why2Desc: "دعم استضافة البيانات محلياً في الأردن، السعودية، الإمارات، والخليج بما يتوافق مع تشريعات الهيئات الوطنية للبيانات.",
    why3Title: "حماية وأمن معلومات بمستوى عسكري",
    why3Desc: "صلاحيات مشددة تعتمد على الأدوار (RBAC)، وعزل كامل للمستأجرين، وتشفير متقدم لحركة البيانات (TLS 1.3/AES-256).",
    why4Title: "قنوات اتصال متعددة متكاملة",
    why4Desc: "ربط مباشر مع الرسائل النصية، البريد الإلكتروني، نوافذ المواقع، تليجرام، وأنظمة ERP الرسمية، وقنوات واتساب الأعمال.",

    // Pricing
    pricingTitle: "أسعار مرنة وعائد استثماري مضمون",
    pricingSubtitle: "اختر الباقة المناسبة لحجم أعمالك التشغيلي. حول نفقاتك لإنتاجية مستمرة تنمو معك.",
    billingMonthly: "دفع شهري",
    billingAnnually: "دفع سنوي (وفر 20%)",
    popularBadge: "الأكثر طلباً",
    priceStarting: "يبدأ من",
    priceCustom: "أسعار مخصصة",
    priceMonth: "/شهرياً",
    featuresTitle: "المزايا المضمنة:",
    
    pricingTiers: [
      {
        id: "starter",
        name: "الباقة الأساسية",
        price: "299",
        desc: "مثالية للشركات الناشئة والمتوسطة لأتمتة نقطة اتصالها الأولى.",
        features: [
          "1 عميل ذكاء اصطناعي مستقل نشط",
          "5,000 محادثة أو مهمة تشغيلية شهرياً",
          "قاعدة معرفة (حتى 50 صفحة / ملفات PDF)",
          "دعم ثنائي اللغة (عربي / إنجليزي)",
          "ربط بالموقع والبريد الإلكتروني",
          "دعم فني قياسي عبر البريد"
        ]
      },
      {
        id: "pro",
        name: "الباقة الاحترافية",
        price: "899",
        desc: "الخيار الأمثل للشركات المتوسعة ذات العمليات اليومية الكثيفة.",
        features: [
          "4 عملاء ذكاء اصطناعي متصلين ونشطين",
          "25,000 محادثة أو مهمة تشغيلية شهرياً",
          "قاعدة معرفة (رفع ملفات غير محدود)",
          "ربط رسمي مع واجهة WhatsApp Business",
          "ربط مخصص مع أنظمة ERP (مثل Odoo وSalesforce)",
          "دعم فني ذو أولوية على مدار الساعة",
          "تقارير أداء ومعدل توفير أسبوعية"
        ]
      },
      {
        id: "enterprise",
        name: "باقة المؤسسات",
        price: "2499",
        desc: "مصممة للمجموعات الصناعية، والطبية، واللوجستية الضخمة متعددة المستويات.",
        features: [
          "12 عميل ذكاء اصطناعي مستقل نشط",
          "150,000 محادثة أو مهمة تشغيلية شهرياً",
          "تدفقات عمل مشتركة وتنسيق بين العملاء",
          "مزامنة مخصصة مع قواعد البيانات وأنظمة ERP الكبرى",
          "بيئة تجريبية معزولة (Sandbox) للاختبار المحلي",
          "بنية تحتية متوافقة بالكامل مع ISO-27001",
          "مدير حساب استراتيجي مخصص لشركتكم",
          "ورش عمل وتدريب مخصصة للطاقم"
        ]
      },
      {
        id: "custom",
        name: "باقة مخصصة / سيادية",
        price: "تواصل معنا",
        desc: "خوادم منعزلة، ونماذج مخصصة مدربة خصيصاً، واستضافة سيادية محلية.",
        features: [
          "عملاء ذكاء اصطناعي متخصصين بعدد غير محدود",
          "محادثات وعمليات غير محدودة وعالية التردد",
          "خيار الاستضافة السحابية السيادية المحلية",
          "تدريب دقيق (Fine-Tuning) للنماذج على بياناتكم الخاصة",
          "إمكانية النشر الكامل والتشغيل الداخلي On-Premise",
          "فلاتر أمان وحجب سرية ومخصصة بالكامل بموجب اتفاقية NDA",
          "خط تواصل ساخن مباشر مع المهندسين عبر Slack والهاتف",
          "اتفاقيات مستوى خدمة مخصصة ومضمونة قانونياً"
        ]
      }
    ],

    // Contact
    contactTitle: "ابدأ عملية التحول الرقمي الآن",
    contactSubtitle: "تواصل مع خبراء التخطيط الإستراتيجي لوضع خريطة طريق للقوى العاملة الرقمية لشركتك.",
    placeholderName: "الاسم الكامل",
    placeholderEmail: "البريد الإلكتروني للشركة",
    placeholderPhone: "رقم الهاتف (مثال: +966 / +962)",
    placeholderCompany: "اسم الشركة",
    placeholderIndustry: "اختر قطاع العمل",
    placeholderAgentsInterest: "ما هي فئة العملاء التي تحتاجها؟",
    placeholderMessage: "اصف التحديات التشغيلية أو أهداف المشروع المطلوب...",
    contactSuccess: "شكرًا لك! تم استلام طلب الاستشارة الإستراتيجية بنجاح. سيتواصل معك مديرنا الإقليمي خلال ساعتي عمل كحد أقصى.",
    contactInfoTitle: "المقرات الإقليمية والعالمية",
    contactKsaAddress: "طريق الملك فهد، حي العليا، الرياض، المملكة العربية السعودية",
    contactJorAddress: "شارع الملك عبدالله الثاني، الشميساني، عمان، الأردن",
    contactUaeAddress: "داون تاون بوليفارد، دبي، الإمارات العربية المتحدة",
    contactGeneralPhone: "+966 11 405 8291",
    contactGeneralEmail: "partners@aiagents-platform.com",

    // Interactive Demo / Chatbot widget
    demoTitle: "تحدث مع عميل نشط الآن",
    demoWelcome: "مرحباً بك! أنا عميل ذكاء اصطناعي نشط ومخصص لخدمتك وتوجيهك. اختر أي شخصية للعميل أدناه لتجربة قدراتي الإدراكية على التحليل واتخاذ القرار فوراً!",
    demoSelectPersona: "اختر شخصية العميل المساعد:",
    demoPlaceholder: "اكتب استفسارك لتجربة رد العميل التفاعلي الحقيقي...",
    demoSend: "إرسال",
    demoReset: "إعادة تعيين المحادثة",
    demoTyping: "يقوم العميل بصياغة وتحليل الرد الفوري...",

    // Footer
    footerDesc: "تعتبر منصة عملاء الذكاء الاصطناعي الرائدة في تقديم القوى العاملة الرقمية المستقلة في الشرق الأوسط والعالم، حيث نحول أعباء التكاليف التشغيلية إلى أصول رقمية عالية الكفاءة والإنتاجية.",
    footerSolutions: "الحلول الرقمية",
    footerResources: "المصادر والمعرفة",
    footerLegal: "السياسات القانونية",
    footerNewsletter: "انضم إلى المستقبل",
    footerNewsletterPlaceholder: "أدخل البريد الإلكتروني للشركة",
    footerNewsletterBtn: "اشترك",
    footerNewsletterSuccess: "تم الاشتراك بنجاح! مرحباً بك في آفاق العمل المستقل.",
    rightsReserved: "جميع الحقوق محفوظة. مدعوم بنظام محرك Gemini للذكاء الاصطناعي من جانب الخادم.",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    docLink: "توثيق واجهة المبرمجين API",
    linkedinLink: "مساحة LinkedIn",
    facebookLink: "صفحة الفيسبوك",
    youtubeLink: "قناة اليوتيوب",

    // Dialogs / Modals
    modalLearnMoreTitle: "القدرات والمهام التشغيلية للعميل",
    modalLearnMoreSavings: "متوسط التوفير التشغيلي المحقق:",
    modalLearnMorePrice: "يبدأ الاستثمار الشهري من:",
    modalClose: "إغلاق النافذة",
    modalLaunchApp: "تشغيل منصة العمل والربط"
  }
};

export const agentsData: Agent[] = [
  {
    id: "prod-planning",
    name: { en: "Production Planning AI", ar: "ذكاء تخطيط الإنتاج الاصطناعي" },
    description: {
      en: "Analyzes shop-floor telemetry, machinery logs, and material inventory levels in real-time to generate mathematically optimized production schedules.",
      ar: "يقوم بتحليل قياسات أرضية المصنع، وسجلات الآلات، ومستويات مخزون المواد الخام في الوقت الفعلي لتوليد جداول إنتاج مثالية ومجدولة رياضياً."
    },
    detailedBenefits: {
      en: [
        "Slashes scheduling planning overhead from days to milliseconds",
        "Reduces machinery idle time and energy spikes by up to 28%",
        "Aligns order dispatch priorities instantly with current supply-chain delays",
        "Reduces inventory warehousing bottlenecks by predicting raw material flow"
      ],
      ar: [
        "يقلل أوقات التخطيط والجدولة المعقدة من أيام إلى أجزاء من الثانية",
        "يخفض أوقات تعطل الآلات واستهلاك الطاقة الهادر بنسبة تصل إلى 28%",
        "يطابق أولويات تسليم الطلبيات فورياً مع تحديات وتأخيرات سلسلة التوريد",
        "يقلل تراكم المخزون غير المستخدم بالتنبؤ الدقيق لتدفق المواد الخام"
      ]
    },
    estimatedSavings: { en: "38% operational cost savings", ar: "38% وفر تشغيلي للمصانع" },
    pricing: { en: "$799 /mo per active facility", ar: "$799 /شهرياً لكل منشأة نشطة" },
    iconName: "Cpu"
  },
  {
    id: "customer-support",
    name: { en: "Customer Support AI", ar: "ذكاء دعم العملاء الاصطناعي" },
    description: {
      en: "Handles multi-channel enterprise support tickets, resolves complex client disputes, and processes returns according to custom policies, fully integrated into CRMs.",
      ar: "يتولى معالجة تذاكر الدعم والخدمة للعملاء عبر قنوات متعددة، ويحل الشكاوى والخلافات الصعبة، وينفذ سياسات الاسترجاع تلقائياً بربط كامل مع أنظمة CRM."
    },
    detailedBenefits: {
      en: [
        "Resolves up to 85% of incoming support tickets without human hand-off",
        "Integrates directly with Zendesk, HubSpot, Salesforce, and Odoo",
        "Learns from corporate knowledge bases, PDFs, and legal policy handbooks",
        "Detects customer sentiment and handles high-priority escalations smoothly"
      ],
      ar: [
        "يحل ما يصل إلى 85% من تذاكر الدعم الواردة بالكامل دون تدخل بشري",
        "يتكامل مباشرة مع أنظمة Zendesk وHubSpot وSalesforce وOdoo",
        "يتعلم ذاتياً من قواعد المعرفة المؤسسية، الكتالوجات، والسياسات الداخلية للشركة",
        "يكتشف نبرة ورضا العميل ويقوم بإحالة التذاكر الحرجة للموظفين بذكاء"
      ]
    },
    estimatedSavings: { en: "70% savings compared to call centers", ar: "70% وفر مقارنة بمراكز الاتصال التقليدية" },
    pricing: { en: "$399 /mo per agent instance", ar: "$399 /شهرياً لكل نسخة عميل" },
    iconName: "Headphones"
  },
  {
    id: "website-chatbot",
    name: { en: "Website Chatbot AI", ar: "روبوت الدردشة للمواقع الإلكترونية" },
    description: {
      en: "Greets online visitors, captures corporate leads, answers product catalog queries, and books demo slots instantly with flawless English and Arabic conversational fluency.",
      ar: "يرحب بزوار المواقع الإلكترونية، ويلتقط بيانات المهتمين الجدد، ويجيب على أسئلة الكتالوجات، ويحجز مواعيد العروض التجريبية بطلاقة باللغتين العربية والإنجليزية."
    },
    detailedBenefits: {
      en: [
        "Engages 100% of landing page traffic to maximize conversion rate",
        "Plugs directly onto React, WordPress, Webflow, or custom raw HTML layouts",
        "Translates technical concepts and jargon on the fly based on visitor dialect",
        "Pushes verified qualified leads straight to your active sales teams"
      ],
      ar: [
        "يتفاعل مع زوار الموقع بنسبة 100% لمضاعفة معدلات التحويل للمبيعات",
        "سهولة التركيب على منصات React أو WordPress أو Webflow أو كود HTML عادي",
        "يترجم ويشرح المفاهيم الفنية المعقدة فورياً بناءً على لهجة وتفضيل الزائر",
        "يرسل بيانات المهتمين المصنفة مباشرة لقنوات البيع النشطة بشركتكم"
      ]
    },
    estimatedSavings: { en: "Boosts online leads by 45%", ar: "يزيد مبيعات وفرص الموقع بنسبة 45%" },
    pricing: { en: "$199 /mo", ar: "$199 /شهرياً" },
    iconName: "MessageSquareCode"
  },
  {
    id: "sales-ai",
    name: { en: "Sales AI Agent", ar: "ذكاء المبيعات الاصطناعي" },
    description: {
      en: "Proactively conducts outbound B2B email sequences, validates corporate prospects, and answers custom pricing RFP inquiries to keep your sales pipelines overflowing.",
      ar: "يقوم بحملات تواصل ومتابعة مبيعات ذكية للمؤسسات، ويؤهل الفرص الشرائية المحتملة، ويجيب على طلبات الأسعار والـ RFP لضمان تدفق فرص البيع باستمرار."
    },
    detailedBenefits: {
      en: [
        "Sends highly personalized outbound sequences scaling to thousands per day",
        "Extracts buying signals and registers calendar meetings directly on Google/Outlook",
        "Builds smart localized corporate profiles using LinkedIn and open directories",
        "Drafts custom enterprise proposals and follows up diligently until closed"
      ],
      ar: [
        "يرسل رسائل مبيعات مخصصة للغاية لآلاف الشركات المستهدفة يومياً",
        "يحلل إشارات الرغبة في الشراء ويحجز مواعيد الاجتماعات في تقويم Outlook أو Google",
        "يبني ملفات معلومات دقيقة عن الشركات المستهدفة من LinkedIn والأدلة المفتوحة",
        "يصيغ عروض الأسعار والمقترحات المخصصة ويتابع العميل باحترافية حتى الإغلاق"
      ]
    },
    estimatedSavings: { en: "Over 50% decrease in cost-per-lead", ar: "تخفيض تكلفة الحصول على فرصة بيع بأكثر من 50%" },
    pricing: { en: "$499 /mo per sales seat", ar: "$499 /شهرياً لكل مقعد مبيعات رقمي" },
    iconName: "TrendingUp"
  },
  {
    id: "marketing-ai",
    name: { en: "Marketing AI Planner", ar: "ذكاء التسويق الاصطناعي" },
    description: {
      en: "Develops integrated cross-channel content calendars, designs localized digital campaigns, and writes high-converting copy in English and Arabic backed by live search trends.",
      ar: "يعد جداول وخطط محتوى تسويقي متكاملة، ويصمم الحملات الرقمية المحلية، ويكتب نصوص إعلانات عالية التحويل بالعربية والإنجليزية مدعومة باتجاهات البحث الحية."
    },
    detailedBenefits: {
      en: [
        "Monitors local SEO search trends across Jordan, Saudi Arabia, UAE, and GCC countries",
        "Creates copy optimized for Google Ads, LinkedIn, Meta, and regional networks",
        "Automates dynamic variations of landing page headlines to boost conversion",
        "Generates marketing strategy reports with concrete actionable growth advice"
      ],
      ar: [
        "يراقب اتجاهات محركات البحث المحلية (SEO) في السعودية، الأردن، الإمارات، والخليج",
        "يكتب نصوصاً تسويقية مخصصة لحملات Google Ads وLinkedIn وMeta والشبكات الإقليمية",
        "يؤتمت صياغة العناوين التفاعلية لصفحات الهبوط لمضاعفة نسبة الاستجابة والتحويل",
        "يولد تقارير استراتيجية تسويقية دقيقة مع توصيات نمو ملموسة وقابلة للتطبيق"
      ]
    },
    estimatedSavings: { en: "65% savings on agency retainer fees", ar: "65% وفر في تكلفة الوكالات التسويقية والاستشارات" },
    pricing: { en: "$349 /mo", ar: "$349 /شهرياً" },
    iconName: "Megaphone"
  },
  {
    id: "hr-recruitment",
    name: { en: "HR Recruitment AI", ar: "ذكاء التوظيف والموارد البشرية" },
    description: {
      en: "Screens thousands of resumes, filters candidates matching highly technical qualifications, scores profiles, and carries out initial conversational screenings.",
      ar: "يقوم بفحص وغربلة آلاف السير الذاتية، ويفرز المرشحين المطابقين للتأهيلات الفنية المعقدة، ويقيم جدارة المتقدمين، وينفذ مقابلات دردشة أولية تفاعلية."
    },
    detailedBenefits: {
      en: [
        "Trims down resume evaluation cycles from several weeks to minutes",
        "Conducts interactive, structured text screeners to assess skills and background",
        "Reduces human bias by ranking applications objectively against technical KPIs",
        "Drafts custom employment offers and easily manages standard onboarding checklists"
      ],
      ar: [
        "يقلص دورة تقييم وفرز السير الذاتية من عدة أسابيع إلى دقائق معدودة",
        "يقود مقابلات تقييم نصية تفاعلية ومنهجية للتأكد من مهارات وخبرات المتقدم",
        "يحد من الانحياز البشري عبر تقييم وفرز المرشحين موضوعياً بناءً على مؤشرات الأداء الكبرى",
        "يصيغ عروض العمل وعقود التوظيف ويدير قوائم تأهيل الموظف الجديد بمرونة"
      ]
    },
    estimatedSavings: { en: "75% faster time-to-hire", ar: "75% تسريع لعمليات التوظيف والحصول على الكفاءات" },
    pricing: { en: "$449 /mo", ar: "$449 /شهرياً" },
    iconName: "Users"
  },
  {
    id: "accounting-ai",
    name: { en: "Accounting & Invoice AI", ar: "ذكاء المحاسبة والمالية الاصطناعي" },
    description: {
      en: "Automates multi-currency invoice matching, cross-checks supplier bills, audits tax classifications (ZATCA compliance, Jordan tax, VAT), and registers entries to ERPs.",
      ar: "يؤتمت مطابقة الفواتير متعددة العملات، ويدقق مطالبات الموردين، ويراجع تصنيفات الضرائب (متوافق مع فوترة هيئة الزكاة والضريبة والجمارك ZATCA، وضريبة الأردن والضريبة المضافة) ويسجل القيود في نظام المحاسبة."
    },
    detailedBenefits: {
      en: [
        "Flags ledger anomalies, suspicious billing items, and double-payment attempts",
        "Ensures absolute local regulatory compliance (VAT, corporate income tax across GCC)",
        "Reads receipts in any structure or format utilizing smart computer vision OCR",
        "Directly interfaces with Odoo, Quickbooks, SAP, Xero, and local tax systems"
      ],
      ar: [
        "يكتشف الفروقات، القيود الشاذة، الفواتير المشبوهة، ومحاولات الدفع المزدوج",
        "يضمن الامتثال التام للأنظمة الضريبية المحلية (الضريبة المضافة وضريبة الدخل في المنطقة)",
        "يقرأ الفواتير والإيصالات بأي لغة وتنسيق باستخدام قارئ النصوص الذكي OCR",
        "يتصل مباشرة بأنظمة Odoo وQuickbooks وSAP وXero والأنظمة الضريبية الرسمية"
      ]
    },
    estimatedSavings: { en: "90% error reduction in financial entries", ar: "90% خفض للأخطاء التشغيلية في القيود والتقارير المالية" },
    pricing: { en: "$599 /mo", ar: "$599 /شهرياً" },
    iconName: "Calculator"
  },
  {
    id: "business-consultant",
    name: { en: "Business Consultant AI", ar: "ذكاء الاستشارات الإدارية والمالية" },
    description: {
      en: "Ingests extensive internal operational data, P&L reports, and industry benchmarks to generate precise board-ready corporate growth strategies.",
      ar: "يستوعب كميات ضخمة من البيانات التشغيلية الداخلية، تقارير الأرباح والخسائر، ومقارنات السوق لتوليد استراتيجيات نمو وحلول إدارية جاهزة للعرض على مجلس الإدارة."
    },
    detailedBenefits: {
      en: [
        "Identifies hidden inefficiencies in procurement, delivery lines, and staffing",
        "Synthesizes regional market analysis and predicts macro-economic trends",
        "Performs deep competitive analysis of rivals instantly",
        "Builds dynamic financial models forecasting margins over 1 to 5 years"
      ],
      ar: [
        "يكتشف الهدر غير المرئي في سلاسل الإمداد والمشتريات وتوزيع الكوادر البشرية",
        "يلخص تحليلات السوق الإقليمية ويتوقع اتجاهات الاقتصاد الكلي للقطاع",
        "يجري تحليلاً تنافسياً عميقاً للمنافسين ومكامن تفوقهم في السوق فورياً",
        "يبني نماذج مالية تفاعلية تتوقع هوامش الأرباح على مدى سنة إلى 5 سنوات قادمة"
      ]
    },
    estimatedSavings: { en: "Saves tens of thousands on consultant fees", ar: "يوفر عشرات الآلاف من تكاليف الاستشاريين الإداريين التقليديين" },
    pricing: { en: "$699 /mo", ar: "$699 /شهرياً" },
    iconName: "Briefcase"
  },
  {
    id: "tender-automation",
    name: { en: "Tender Automation AI", ar: "أتمتة المناقصات بالذكاء الاصطناعي" },
    description: {
      en: "Scans extensive public government tender portals, extracts project eligibility criteria, evaluates compliance, and drafts fully qualified, award-winning B2B proposals.",
      ar: "يمسح منصات العطاءات والمناقصات الحكومية والخاصة الكبرى، ويستخلص معايير التأهيل، ويقيم الامتثال الفني، ويصيغ مقترحات فنية وتجارية منافسة ومتكاملة."
    },
    detailedBenefits: {
      en: [
        "Monitors regional systems (e.g. Saudi Etimad, Jordan E-Procurement) automatically",
        "Generates highly comprehensive technical compliance matrix reports in seconds",
        "Drafts premium, highly detailed proposal materials conforming to exact RFP formats",
        "Assembles cost breakdown sheets aligned with standard historic project catalogs"
      ],
      ar: [
        "يراقب الأنظمة الإقليمية (مثل منصة اعتماد السعودية، الشراء الإلكتروني في الأردن) تلقائياً",
        "يولد تقارير مصفوفة المطابقة والامتثال الفني التفصيلية في ثوانٍ",
        "يصيغ مواد العروض باحترافية وتفصيل فائق متطابق مع تنسيقات كراسة الشروط RFP",
        "يجمع جداول الأسعار وجداول الكميات المتوافقة مع تكاليف المشاريع التاريخية للشركة"
      ]
    },
    estimatedSavings: { en: "Increases tender volume by 300%", ar: "يزيد عدد المناقصات المقدمة بنسبة 300% مع خفض الجهد" },
    pricing: { en: "$899 /mo", ar: "$899 /شهرياً" },
    iconName: "FileText"
  },
  {
    id: "phone-call",
    name: { en: "Phone Call Voice AI", ar: "ذكاء المكالمات الهاتفية الصوتية" },
    description: {
      en: "Autonomously answers or places high-fidelity, ultra-low latency telephone calls with human-like vocal quality and accents in both English and regional Arabic dialects.",
      ar: "يتلقى ويجري المكالمات الهاتفية الصوتية بجودة ممتازة واستجابة فورية فائقة السرعة، وبنبرة صوتية ولهجات طبيعية ومقنعة تشبه البشر باللغة العربية والإنجليزية."
    },
    detailedBenefits: {
      en: [
        "Operates directly over standard landlines, IP PBX, Twilio, or cloud telecom setups",
        "Answers hundreds of customer calls simultaneously without static delays or echo",
        "Performs interactive bookings, delivery confirmations, and basic bill collections",
        "Dynamically switches dialect or tone to fit the caller's localized accent"
      ],
      ar: [
        "يعمل مباشرة على الخطوط الأرضية، مقاسم IP PBX، أنظمة Twilio، أو الاتصال السحابي",
        "يجيب على مئات المكالمات الصوتية المتزامنة دون تأخير أو صدى صوت",
        "ينفذ الحجوزات التفاعلية، تأكيد مواعيد التوصيل، وتحصيل الفواتير والمدفوعات",
        "يغير نبرة الصوت أو اللهجة تلقائياً للتوافق مع لهجة المتصل الإقليمية"
      ]
    },
    estimatedSavings: { en: "Saves 80% on call center overhead", ar: "وفر بنسبة 80% في تكلفة مراكز الاتصال والدعم الهاتفي" },
    pricing: { en: "$699 /mo per concurrent line", ar: "$699 /شهرياً لكل خط اتصال متزامن" },
    iconName: "PhoneCall"
  },
  {
    id: "knowledge-base",
    name: { en: "Knowledge Base AI Specialist", ar: "ذكاء قواعد المعرفة الاصطناعي" },
    description: {
      en: "Aggregates dispersed corporate wikis, internal Google Docs, PDFs, Slack history, and manuals, allowing team members to retrieve verified technical answers instantly.",
      ar: "يجمع ويكي الشركة المشتتة، مستندات Google Docs، ملفات PDF، سجل محادثات Slack، وأدلة التشغيل، ليتيح للموظفين الحصول على إجابات فنية دقيقة فوراً."
    },
    detailedBenefits: {
      en: [
        "Stops time wasted chasing internal files and searching through long emails",
        "Ensures every department accesses the single, latest source of organizational truth",
        "Generates customized onboarding answers and manuals for new team hires",
        "Guarantees data stays strictly private, never used to train public LLM models"
      ],
      ar: [
        "يوقف هدر أوقات الموظفين في البحث عن الملفات والرسائل القديمة المشتتة",
        "يضمن وصول كافة الأقسام للمرجع والنسخة المعتمدة الأحدث للقرارات التنظيمية",
        "يولد دليلاً تفاعلياً مخصصاً لتدريب وتأهيل الموظفين والمهندسين الجدد",
        "يضمن بقاء البيانات آمنة وخاصة بالكامل، ولا يتم استخدامها لتدريب النماذج العامة"
      ]
    },
    estimatedSavings: { en: "Saves 5 hours per week per employee", ar: "يوفر 5 ساعات عمل أسبوعياً لكل موظف بمؤسستك" },
    pricing: { en: "$299 /mo", ar: "$299 /شهرياً" },
    iconName: "FolderGit2"
  },
  {
    id: "social-media",
    name: { en: "Social Media Campaigner AI", ar: "ذكاء شبكات التواصل الاجتماعي" },
    description: {
      en: "Monitors brand tags, responds instantly to user comments and direct messages 24/7, and publishes high-impact posts on X, LinkedIn, Instagram, and TikTok.",
      ar: "يراقب الإشارات لعلامتكم التجارية، ويجيب فوراً على تعليقات الزوار والرسائل الخاصة على مدار الساعة، وينشر محتوى إبداعياً على إكس، لينكد إن، إنستغرام، وتيك توك."
    },
    detailedBenefits: {
      en: [
        "Maintains a hyper-active online presence, boosting organic impressions by up to 200%",
        "Responds to customer inquiries in comments in less than 30 seconds",
        "Flags and alerts PR teams during active online brand reputation crises",
        "Generates multi-lingual creative posts matching local trends and cultural contexts"
      ],
      ar: [
        "يحافظ على حضور رقمي متفاعل ومستمر، مما يزيد الظهور العضوي بنسبة 200%",
        "يجيب على استفسارات وأسئلة العملاء في التعليقات خلال أقل من 30 ثانية",
        "ينبه وينذر فرق العلاقات العامة فوراً في حال رصد ردود فعل سلبية أو أزمات سمعة",
        "يصيغ منشورات إبداعية متعددة اللغات تتوافق مع التوجهات والتريندات المحلية وثقافة الجمهور"
      ]
    },
    estimatedSavings: { en: "Over 80% reduction in social response time", ar: "تخفيض وقت الاستجابة لجمهور التواصل بأكثر من 80%" },
    pricing: { en: "$249 /mo", ar: "$249 /شهرياً" },
    iconName: "Share2"
  },
  {
    id: "project-manager",
    name: { en: "Project Manager AI", ar: "ذكاء إدارة المشاريع الاصطناعي" },
    description: {
      en: "Supervises project deadlines, tracks team progress on Jira, Asana, or ClickUp, and drafts concise status summaries to keep stakeholders aligned.",
      ar: "يشرف على مواعيد المشاريع النهائية، ويراقب تقدم عمل الفريق على Jira أو Asana أو ClickUp، ويصيغ ملخصات حالة واضحة للحفاظ على توافق وتنسيق كافة الأطراف."
    },
    detailedBenefits: {
      en: [
        "Flags scheduling bottlenecks and predicted project delays weeks in advance",
        "Automates standup collections and updates project tracking dashboards",
        "Writes clear, structured project scopes of work and delivery definitions",
        "Reduces time spent in unproductive administrative coordination meetings"
      ],
      ar: [
        "يكتشف العقبات وجوانب التأخير المتوقعة في المشروع قبل حدوثها بأسابيع",
        "يؤتمت جمع التحديثات اليومية (Standups) ويحدث لوحة قياس وتتبع المهام",
        "يكتب نطاقات العمل الفنية بوضوح وشروط ومعايير التسليم باحترافية",
        "يقلل الأوقات المهدرة في الاجتماعات التنسيقية والإدارية غير المنتجة"
      ]
    },
    estimatedSavings: { en: "Trims administrative overhead by 40%", ar: "يخفض الأعباء الإدارية والتنسيقية بنسبة 40%" },
    pricing: { en: "$399 /mo", ar: "$399 /شهرياً" },
    iconName: "Kanban"
  },
  {
    id: "custom-agent",
    name: { en: "Custom AI Agent Developer", ar: "عميل ذكاء اصطناعي مخصص" },
    description: {
      en: "A blank-canvas agent engineered specifically for your proprietary workflows, legacy mainframe systems, and specific industry compliance boundaries.",
      ar: "لوحة بيضاء لعميل مصمم خصيصاً للتوافق مع تدفقات العمل الخاصة بشركتكم، الأنظمة القديمة والمحلية، وحدود الامتثال القانوني لقطاعكم الخاص."
    },
    detailedBenefits: {
      en: [
        "Fully tailored logic matching your specific proprietary business playbook",
        "Integrates with specialized legacy databases and proprietary on-premises software",
        "Trained on secure isolated servers ensuring no data leaks",
        "Designed and supported by our senior machine learning engineers"
      ],
      ar: [
        "منطق تشغيلي مصمم بالكامل ليتطابق مع أدلة عمل شركتكم السرية والخاصة",
        "يتكامل مع قواعد البيانات القديمة والأنظمة والبرمجيات المغلقة والمحلية للشركة",
        "يتم تدريبه على خوادم معزولة آمنة لضمان السرية المطلقة لبياناتكم",
        "مطور ومدعوم بالكامل من كبار مهندسي تعلم الآلة والذكاء الاصطناعي لدينا"
      ]
    },
    estimatedSavings: { en: "Fully custom scale potential", ar: "إمكانات نمو وتوفير مخصصة وغير محدودة" },
    pricing: { en: "Contact Sales", ar: "تواصل مع المبيعات" },
    iconName: "Settings"
  }
];

export const industriesData: Industry[] = [
  {
    id: "manufacturing",
    name: { en: "Manufacturing & Heavy Industry", ar: "التصنيع والصناعات الثقيلة" },
    description: {
      en: "Optimize machine capacity, material handling logistics, supply chains, and floor worker scheduling dynamically.",
      ar: "تحسين طاقة الآلات، والخدمات اللوجستية للمواد الخام، وسلاسل الإمداد، وجدولة العمال الفنية بشكل ديناميكي."
    },
    iconName: "Factory",
    solutions: [
      {
        title: { en: "Shop Floor Scheduling", ar: "جدولة أرضية المصنع" },
        details: {
          en: "Our Production Planning AI schedules orders dynamically, resolving machine failures in milliseconds.",
          ar: "يقوم ذكاء تخطيط الإنتاج الاصطناعي بجدولة أوامر العمل لحظياً لمعالجة وتفادي أعطال الآلات المفاجئة."
        }
      },
      {
        title: { en: "Logistics Tracking", ar: "تتبع الخدمات اللوجستية" },
        details: {
          en: "Predict transit delays and adjust buffer stock levels automatically.",
          ar: "التنبؤ بتأخيرات الشحن وتعديل مستويات المخزون الاحتياطي تلقائياً."
        }
      }
    ]
  },
  {
    id: "healthcare",
    name: { en: "Hospitals & Medical Clinics", ar: "المستشفيات والعيادات الطبية" },
    description: {
      en: "Automate patient bookings, answer billing and insurance queries, coordinate doctor shifts, and digest medical research papers securely.",
      ar: "أتمتة حجوزات المرضى، الإجابة على استفسارات الفواتير والتأمين، تنسيق مناوبات الأطباء، وتلخيص الأبحاث والتقارير الطبية بسرية."
    },
    iconName: "Stethoscope",
    solutions: [
      {
        title: { en: "Patient Intake Coordinator", ar: "منسق استقبال المرضى" },
        details: {
          en: "Answers medical queries, handles direct booking confirmations via WhatsApp, and registers patients into EHR systems.",
          ar: "يجيب على أسئلة الحجوزات الطبية، وينفذ تأكيدات المواعيد عبر الواتساب، ويسجل بيانات المريض في أنظمة السجلات الإلكترونية EHR."
        }
      },
      {
        title: { en: "Insurance Claim Pre-Auditing", ar: "التدقيق المسبق لمطالبات التأمين" },
        details: {
          en: "Screens medical codes and files prior to submission to reduce insurance rejection rates by 40%.",
          ar: "يفحص الرموز الطبية والملفات قبل إرسالها لشركات التأمين لتخفيض نسبة رفض المطالبات بنسبة 40%."
        }
      }
    ]
  },
  {
    id: "construction",
    name: { en: "Construction & Engineering", ar: "المقاولات والخدمات الهندسية" },
    description: {
      en: "Streamline raw material procurements, analyze lengthy RFP specifications, match engineering schedules, and automate subcontractor tracking.",
      ar: "تسهيل توريد مواد البناء والتشييد، تحليل كراسات الشروط الفنية الطويلة، تنسيق الجداول الهندسية، وأتمتة متابعة مقاولي الباطن."
    },
    iconName: "HardHat",
    solutions: [
      {
        title: { en: "RFP Compliance Ingestion", ar: "استيعاب وتحليل كراسات الشروط RFPs" },
        details: {
          en: "AI scans massive tender packages to highlight technical risk areas and compliance gaps.",
          ar: "يقوم الذكاء الاصطناعي بمسح ملفات المناقصات الضخمة لتحديد جوانب المخاطرة الفنية وثغرات عدم المطابقة."
        }
      }
    ]
  },
  {
    id: "education",
    name: { en: "Educational Institutions", ar: "المؤسسات التعليمية والجامعات" },
    description: {
      en: "Coordinate student admissions, tutor students with personalized conversational agents, grade homework, and coordinate teacher resources.",
      ar: "تنسيق قبول وتسجيل الطلاب، تقديم إرشاد وتعليم تفاعلي مخصص، تصحيح التقييمات، وتنسيق وتوزيع الموارد التعليمية للشركاء."
    },
    iconName: "GraduationCap",
    solutions: [
      {
        title: { en: "Admissions & Registrar AI", ar: "عميل القبول والتسجيل الذكي" },
        details: {
          en: "Provides instant multilingual support during high-stress registration campaigns for thousands of students.",
          ar: "يقدم دعماً فورياً ومتعدد اللغات خلال فترات القبول والتسجيل الكثيفة لآلاف الطلاب والطلبات المتزامنة."
        }
      }
    ]
  },
  {
    id: "retail",
    name: { en: "E-Commerce & Retail", ar: "التجزئة والتجارة الإلكترونية" },
    description: {
      en: "Deliver highly personalized shopping recommendations, automate support for delivery questions, and track stock counts.",
      ar: "تقديم توصيات تسوق مخصصة للعملاء، أتمتة الدعم والردود لأسئلة الشحن والتوصيل، وتتبع مستويات وأرقام مخزون السلع."
    },
    iconName: "ShoppingBag",
    solutions: [
      {
        title: { en: "Conversational Shopping Guide", ar: "مرشد التسوق التفاعلي" },
        details: {
          en: "Acts as an in-store personal assistant guiding customers to products based on context, budget, and preference.",
          ar: "يعمل كمساعد شخصي متفاعل في المتجر يوجه المشترين للمنتجات والبدائل الملائمة لاهتمامهم وميزانيتهم."
        }
      }
    ]
  },
  {
    id: "hospitality",
    name: { en: "Hotels & Restaurants", ar: "الفنادق وقطاع الضيافة والمطاعم" },
    description: {
      en: "Automate room reservation bookings, coordinate concierge requests, answer local dining suggestions, and optimize staff shift schedules.",
      ar: "أتمتة حجوزات الغرف والمطاعم، تنسيق طلبات خدمة النزلاء، تقديم اقتراحات المطاعم السياحية المحلية، وتنظيم جداول مناوبات العاملين."
    },
    iconName: "Hotel",
    solutions: [
      {
        title: { en: "Bilingual Concierge Bot", ar: "روبوت الاستقبال والخدمة ثنائي اللغة" },
        details: {
          en: "Coordinates laundry orders, checks late check-out availability, and books spa sessions in seconds.",
          ar: "ينسق طلبات الغسيل، ويتحقق من إمكانية تأخير المغادرة، ويحجز جلسات العناية في ثوانٍ معدودة للنزيل."
        }
      }
    ]
  },
  {
    id: "finance",
    name: { en: "Banking & Financial Services", ar: "الخدمات المصرفية والقطاع المالي" },
    description: {
      en: "Automate loan eligibility checks, assist portfolio management, run compliance audits, and analyze market risk ratios in seconds.",
      ar: "أتمتة الفحص الأولي لأهلية القروض والتمويل، مساعدة إدارة المحافظ الاستثمارية، إجراء تدقيق المطابقة، وتحليل مخاطر السوق."
    },
    iconName: "Coins",
    solutions: [
      {
        title: { en: "Financial Risk Screener", ar: "عميل فحص وتقييم المخاطر المالية" },
        details: {
          en: "Pre-screens client credit capabilities, checking transaction records against local banking compliance metrics.",
          ar: "يفحص الجدارة الائتمانية للعميل بشكل مسبق، ويطابق سجلات المعاملات مع معايير ولوائح الامتثال البنكي."
        }
      }
    ]
  },
  {
    id: "realestate",
    name: { en: "Real Estate & Property Management", ar: "العقارات وإدارة الأملاك" },
    description: {
      en: "Answer tenant queries, capture buyers, manage property listings, schedule showing slots, and draft standard lease documentation.",
      ar: "الإجابة على استفسارات المستأجرين، جذب المشترين وتصنيفهم، إدارة العقارات المعروضة، حجز مواعيد المعاينة، وصياغة عقود الإيجار."
    },
    iconName: "Building2",
    solutions: [
      {
        title: { en: "24/7 Virtual Leasing Agent", ar: "عميل الإيجار والبيع الافتراضي 24/7" },
        details: {
          en: "Interacts with potential buyers at midnight, answering amenity questions, showing pricing details, and scheduling onsite tours.",
          ar: "يتفاعل مع المشترين المحتملين في أوقات المساء المتأخرة، ويجيب على أسئلة المرافق، ويوضح تفاصيل الأسعار، ويحجز مواعيد جولات المعاينة."
        }
      }
    ]
  },
  {
    id: "government",
    name: { en: "Government Organizations", ar: "المؤسسات والقطاعات الحكومية" },
    description: {
      en: "Assist public service portals, answer regulatory compliance inquiries, automate document approvals, and manage inter-agency workflows.",
      ar: "مساعدة بوابات الخدمة العامة للمواطنين والمستثمرين، الإجابة على استفسارات الأنظمة واللوائح، أتمتة موافقات المعاملات، وتنسيق العمليات المشتركة."
    },
    iconName: "Landmark",
    solutions: [
      {
        title: { en: "Citizen FAQ Portal Guide", ar: "مرشد المواطنين والخدمات الحكومية" },
        details: {
          en: "Resolves procedural and regulatory questions in full compliance with local civil service guidelines.",
          ar: "يجيب على أسئلة الإجراءات والمتطلبات التنظيمية بامتثال وتوافق كامل لسياسات الخدمة المدنية والقوانين المحلية."
        }
      }
    ]
  },
  {
    id: "transportation",
    name: { en: "Logistics & Transportation", ar: "الخدمات اللوجستية والنقل والشحن" },
    description: {
      en: "Coordinate routing optimizations, monitor driver capacities, automatically match loads, and notify clients of dynamic ETA delivery shifts.",
      ar: "تنسيق وتحسين مسارات الشحن، مراقبة طاقة السائقين وجداول الرحلات، مطابقة الحمولات تلقائياً، وتنبيه العملاء بتغيرات مواعيد الوصول الحية."
    },
    iconName: "Truck",
    solutions: [
      {
        title: { en: "Dynamic Fleet Routing Optimizer", ar: "منظم مسارات أسطول الشحن الديناميكي" },
        details: {
          en: "Re-routes trucks in real-time based on local border delays, weather patterns, and fuel pricing optimizations.",
          ar: "يعيد توجيه الشاحنات لحظياً بناءً على فترات تأخير الجمارك على الحدود، أحوال الطقس، وتحسين تكاليف الوقود."
        }
      }
    ]
  },
  {
    id: "legal",
    name: { en: "Law Firms & Legal Services", ar: "مكاتب المحاماة والخدمات القانونية" },
    description: {
      en: "Perform extensive case research, cross-reference contract terminology, summarize files, and draft high-accuracy initial legal documentation.",
      ar: "إجراء بحث مكثف في سوابق القضايا، مقارنة ومطابقة بنود العقود والشروط، تلخيص ملفات القضايا، وصياغة العقود والمذكرات القانونية الأولية."
    },
    iconName: "Scale",
    solutions: [
      {
        title: { en: "Bilingual Contract Compliance Auditor", ar: "مدقق امتثال وصياغة العقود" },
        details: {
          en: "Reviews commercial NDAs and service agreements, highlighting missing clauses and regional statutory liabilities.",
          ar: "يراجع اتفاقيات السرية والعقود التجارية، ويبرز الثغرات والبنود الناقصة والمسؤوليات القانونية الإقليمية المترتبة."
        }
      }
    ]
  },
  {
    id: "energy",
    name: { en: "Energy & Utilities", ar: "الطاقة والمرافق الخدمية" },
    description: {
      en: "Optimize grid electricity allocations, predict mechanical wear on solar and wind assets, and manage utility consumer support pipelines.",
      ar: "تحسين توزيع أحمال الكهرباء والشبكات، توقع تعطل وصيانة ألواح الطاقة الشمسية والتوربينات، وإدارة قنوات دعم واستهلاك العملاء."
    },
    iconName: "Flame",
    solutions: [
      {
        title: { en: "Grid Demand Predictor", ar: "محلل وتنبؤ الطلب على الطاقة" },
        details: {
          en: "Anticipates peak surges based on real-time climate tracking, historic regional load cycles, and local holiday trends.",
          ar: "يتوقع طفرات استهلاك الطاقة بناءً على التتبع الحي للطقس، دورات الأحمال التاريخية، ومواسم العطلات الرسمية المحلية."
        }
      }
    ]
  }
];

export const featuresData: FeatureItem[] = [
  { id: "cloud-based", title: { en: "Cloud Based Infrastructure", ar: "بنية تحتية سحابية متكاملة" }, description: { en: "Hosted on ultra-secure modern cloud setups ensuring global speed.", ar: "مستضافة على سحابة حديثة وفائقة الأمان لضمان سرعات استجابة ممتازة عالمياً." }, iconName: "Cloud" },
  { id: "no-install", title: { en: "No Local Installation", ar: "لا يتطلب أي تثبيت محلي" }, description: { en: "Accessed securely via browser workspace. No complex setup on staff devices.", ar: "وصول آمن وسهل عبر المتصفح. لا يتطلب تثبيت برمجيات معقدة على أجهزة الموظفين." }, iconName: "Laptop" },
  { id: "multilingual", title: { en: "Bilingual Native Support", ar: "دعم لغوي ثنائي فائق" }, description: { en: "Flawless Arabic and English handling across regional dialects.", ar: "معالجة ممتازة وطلاقة تامة للغتين العربية والإنجليزية بلهجات المنطقة المختلفة." }, iconName: "Languages" },
  { id: "security", title: { en: "Enterprise Grade Security", ar: "حماية وأمن بمستوى المؤسسات" }, description: { en: "Fully compliant with ISO-27001, TLS 1.3 encryption, and GDPR standards.", ar: "متوافق تماماً مع معايير أمن المعلومات ISO-27001 وتشفير البيانات وقوانين حماية البيانات." }, iconName: "ShieldAlert" },
  { id: "analytics", title: { en: "Real-Time ROI Analytics", ar: "لوحة تحليلات العائد الحية" }, description: { en: "Track interactions, resolved tickets, and financial savings in real time.", ar: "تتبع المعاملات، التذاكر المحلولة، والوفورات المالية المحققة لحظة بلحظة." }, iconName: "BarChart3" },
  { id: "knowledge-base-feature", title: { en: "Dynamic Knowledge base", ar: "قواعد معرفة متفاعلة وديناميكية" }, description: { en: "Upload PDFs, policy documents, and link websites to train your agents.", ar: "ارفع ملفات PDF، كتالوجات، وأدلة العمل لتدريب وتحديث معلومات عملائك فوراً." }, iconName: "BookOpen" },
  { id: "document-upload", title: { en: "Intelligent Document Ingest", ar: "تحليل واستيعاب المستندات الذكي" }, description: { en: "Reads complex scanned invoices and structured technical drawings easily.", ar: "يقرأ ويفهم الفواتير الورقية الممسوحة والرسومات والمواصفات الفنية المعقدة بدقة." }, iconName: "FileUp" },
  { id: "api-integration", title: { en: "Robust API Ecosystem", ar: "ربط برمي مدمج وسلس APIs" }, description: { en: "Connects securely with any rest API, database, or legacy mainframe.", ar: "يتصل بشكل آمن مع أي واجهة برمجية REST API، قواعد بيانات، أو أنظمة قديمة." }, iconName: "Webhook" },
  { id: "whatsapp", title: { en: "Official WhatsApp Integration", ar: "ربط رسمي مع الواتساب" }, description: { en: "Direct connection with official Meta Cloud WhatsApp Business API.", ar: "اتصال مباشر ورسمي مع واجهة برمجة تطبيقات WhatsApp Business من Meta السحابية." }, iconName: "Phone" },
  { id: "widget", title: { en: "Embeddable Website Widget", ar: "نافذة محادثة قابلة للتضمين" }, description: { en: "Copy-paste a single line of script to launch custom chat on any page.", ar: "انسخ كوداً برمجياً من سطر واحد لتضمين نافذة المحادثة التفاعلية في أي موقع." }, iconName: "Code2" },
  { id: "email-auto", title: { en: "Smart Email Automation", ar: "أتمتة البريد الإلكتروني الذكية" }, description: { en: "Drafts, categorizes, and responds to business emails professionally.", ar: "يصنف، ويصيغ، ويجيب على رسائل البريد الإلكتروني للعمل باحترافية وتوافق." }, iconName: "Mail" },
  { id: "voice-ai", title: { en: "Cognitive Voice Engine", ar: "محرك صوتي إدراكي طبيعي" }, description: { en: "Handles telephonic pipelines with low latency and human cadence.", ar: "يتعامل مع خطوط الاتصال الهاتفي باستجابة سريعة ونبرات هادئة وطبيعية تشبه البشر." }, iconName: "Mic" },
  { id: "role-permissions", title: { en: "Fine Role Permissions", ar: "صلاحيات دقيقة للمستخدمين" }, description: { en: "Granular RBAC controls to guard sensitive financial and client logs.", ar: "صلاحيات وتحكم دقيق تعتمد على الأدوار لحماية سجلات وبيانات العملاء الحساسة." }, iconName: "Key" },
  { id: "multi-tenant", title: { en: "Secure Multi-Tenant Partitioning", ar: "عزل وتأمين كامل للبيانات" }, description: { en: "Total computational and database isolation across sister divisions.", ar: "عزل تام ومحكم للبيانات والعمليات الحسابية بين الأقسام والفروع والشركات الشقيقة." }, iconName: "Layers" },
  { id: "scalable", title: { en: "Hyperscale Orchestration", ar: "توسع تشغيلي فوري مرن" }, description: { en: "Automatically balances processing nodes to match sudden request spikes.", ar: "يوازن خوادم المعالجة تلقائياً للتعامل المرن مع طفرات وضغوط الطلبات المفاجئة." }, iconName: "Maximize2" }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "metal-factory",
    companyName: { en: "Al-Haddad Metal Industries", ar: "الحداد للصناعات المعدنية" },
    location: { en: "Sahab Industrial City, Jordan", ar: "مدينة سحاب الصناعية، الأردن" },
    industry: { en: "Heavy Manufacturing", ar: "الصناعات الثقيلة والتصنيع" },
    before: {
      en: "The production manager planned schedules manually on physical whiteboards and spreadsheets. Sudden raw material delays or machine maintenance halted assembly lines for hours, leading to missed client shipping timelines.",
      ar: "كان مدير الإنتاج ينظم جداول المصنع يدوياً على السبورات التقليدية وجداول البيانات. أي تأخير مفاجئ للمواد أو صيانة طارئة للآلات كان يؤدي لوقف خطوط التجميع لساعات، مما يسبب تأخير مواعيد تسليم المنتجات للعملاء."
    },
    after: {
      en: "We deployed the Production Planning AI. The agent now digests supply chain logs and machine metrics in real-time. If a machine experiences vibration spikes, the AI automatically shifts scheduled workflows and updates active jobs.",
      ar: "قمنا بنشر عميل ذكاء تخطيط الإنتاج الاصطناعي. يستوعب العميل الآن سجلات التوريد وحالة الآلات لحظياً. في حال رصد اهتزاز غير طبيعي بالماكينة، يعيد العميل تنظيم خطة وجداول العمل تلقائياً ويحدث المهام النشطة للفنيين."
    },
    metrics: {
      metric1: { label: { en: "Productivity Increase", ar: "زيادة الإنتاجية التشغيلية" }, value: "35%" },
      metric2: { label: { en: "Planning Accuracy", ar: "دقة جدولة وتخطيط العمل" }, value: "95%" }
    }
  },
  {
    id: "riyadh-hospital",
    companyName: { en: "Al-Hayat Medical Center", ar: "مجمع عيادات الحياة الطبي" },
    location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    industry: { en: "Healthcare & Clinics", ar: "الرعاية الصحية والعيادات" },
    before: {
      en: "Administrative staff spent 40% of their day answering basic WhatsApp booking requests, coordinating shift cancellations, and manually cross-checking doctor availability, leading to call backlogs and frustrated patients.",
      ar: "كان الطاقم الإداري يهدر 40% من وقت الدوام اليومي في الرد على طلبات الحجز التقليدية عبر الواتساب، وتعديل المواعيد الملغاة، ومطابقة جداول العيادات يدوياً، مما تسبب في تراكم الطوابير وضيق المرضى."
    },
    after: {
      en: "Integrated the Customer Support AI with local WhatsApp API and their clinic database. The agent registers appointments, reschedules appointments instantly, handles insurance FAQ queries, and alerts doctors of sudden schedule gaps.",
      ar: "ربطنا عميل دعم العملاء الاصطناعي بواجهة واتساب الرسمية وقاعدة بيانات المركز. يقوم العميل الآن بحجز المواعيد، وتعديلها فورياً، والإجابة على أسئلة التغطية التأمينية، وتنبيه الأطباء بالفجوات الطارئة بالجداول."
    },
    metrics: {
      metric1: { label: { en: "Reduction in Administrative Work", ar: "توفير الجهد والعمل الإداري" }, value: "78%" },
      metric2: { label: { en: "No-Show Booking Rates", ar: "تخفيض التخلف عن المواعيد" }, value: "-40%" }
    }
  },
  {
    id: "dubai-logistics",
    companyName: { en: "Vertex Gulf Logistics", ar: "فيرتكس للخدمات اللوجستية" },
    location: { en: "Jebel Ali Free Zone (JAFZA), UAE", ar: "منطقة جبل علي الحرة، دبي" },
    industry: { en: "Logistics & Supply Chain", ar: "الخدمات اللوجستية والشحن" },
    before: {
      en: "Manually answering customs document inquiries, dispatch schedules, and shipment tracking requests from international partners required a huge team of overseas agents working around the clock under high stress.",
      ar: "الإجابة اليدوية على استفسارات مستندات الجمارك، جداول توزيع الشحنات، وطلبات تتبع الحاويات من الشركاء الدوليين كان يستلزم فريقاً هائلاً من الموظفين يعملون في نوبات مستمرة وتحت ضغط عمل شديد."
    },
    after: {
      en: "Deployed a suite of Connected AI Agents (Knowledge Base, Custom Agent, and WhatsApp bot). Clients now receive accurate answers on custom clearances, logistics routes, and tracking logs instantly in Arabic or English.",
      ar: "نشرنا مجموعة متكاملة من عملاء الذكاء الاصطناعي (عميل المعرفة، عميل مخصص، وروبوت واتساب). يحصل الشركاء الآن على ردود دقيقة حول مستندات الجمارك، مسارات الشحن، وحالة الطرود فوراً بالعربية أو الإنجليزية."
    },
    metrics: {
      metric1: { label: { en: "Cost saved /mo", ar: "وفر مالي شهري محقق" }, value: "$18,500" },
      metric2: { label: { en: "Immediate Resolution Rate", ar: "معدل حل الاستفسارات الفوري" }, value: "92%" }
    }
  }
];

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: { en: "What is an AI Agent and how does it differ from a simple chatbot?", ar: "ما هو عميل الذكاء الاصطناعي وبماذا يختلف عن روبوت الدردشة العادي؟" },
    answer: {
      en: "Unlike simple rule-based chatbots that only reply with rigid, pre-defined templates, an AI Agent possesses cognitive reasoning. It understands business guidelines, queries proprietary databases, matches variables, integrates with legacy ERP systems, and takes autonomous actions to resolve complex workflows without requiring human intervention.",
      ar: "على عكس روبوتات الدردشة التقليدية القائمة على قواعد ثابتة وترد بنماذج جامدة، يمتلك عميل الذكاء الاصطناعي قدرة على التفكير الإدراكي والاستدلال. فهو يستوعب سياسات العمل، ويبحث في قواعد البيانات المغلقة، ويطابق المتغيرات، ويتكامل مع أنظمة الـ ERP، ويتخذ إجراءات مستقلة لحل وإتمام تدفقات العمل المعقدة دون طلب تدخل بشري."
    }
  },
  {
    id: "faq-2",
    question: { en: "Do I need software programming knowledge to set up and manage these agents?", ar: "هل أحتاج لمعرفة وخلفية برمجية لتهيئة وإدارة هؤلاء العملاء؟" },
    answer: {
      en: "Not at all. Our platform is completely 'no-code'. You can configure your agents simply by typing natural language instructions, uploading your company documents (such as PDFs, catalogs, policies), or using our visual integration builders.",
      ar: "بالتأكيد لا. منصتنا مصممة بالكامل دون الحاجة لأكواد برمجية (No-Code). يمكنك تهيئة وتدريب عملائك ببساطة عبر كتابة التعليمات بلغة طبيعية عادية، ورفع ملفات ومستندات شركتك (مثل ملفات PDF، الكتالوجات، والسياسات)، أو استخدام واجهة الربط المرئية السهلة."
    }
  },
  {
    id: "faq-3",
    question: { en: "Can these AI agents integrate with our existing ERP systems like SAP, Odoo, or Oracle?", ar: "هل يمكن لهؤلاء العملاء الربط مع أنظمة الـ ERP الحالية لدينا مثل SAP أو Odoo أو Oracle؟" },
    answer: {
      en: "Yes, seamless system integration is one of our core strengths. Our agents connect securely via standard REST APIs, webhooks, or database connectors to read and write records directly within SAP, Odoo, Microsoft Dynamics, Salesforce, HubSpot, and custom built-in solutions.",
      ar: "نعم، التكامل والربط السلس هو أحد أهم نقاط قوتنا. يتصل عملاؤنا بأمان عبر واجهات برمجة التطبيقات REST APIs، أو الويب هوكس (Webhooks)، أو روابط قواعد البيانات لقراءة وكتابة القيود والسجلات مباشرة في أنظمة SAP، Odoo، Microsoft Dynamics، Salesforce، HubSpot، أو أي برمجيات خاصة لديك."
    }
  },
  {
    id: "faq-4",
    question: { en: "How secure is our company's private data? Is it ever used to train public models?", ar: "ما هي درجة أمان بيانات شركتنا السرية؟ وهل يتم استخدامها لتدريب نماذج عامة؟" },
    answer: {
      en: "We guarantee absolute data privacy. All uploaded materials, conversation histories, and database queries are completely isolated within your secure corporate sandbox container. We enforce strict SOC-2 and ISO-27001 architectures, and your proprietary data is NEVER shared, leaked, or used to train any public LLM models.",
      ar: "نضمن لك السرية والخصوصية المطلقة لبياناتك. كافة المستندات المرفوعة، سجلات المحادثات، واستعلامات قواعد البيانات معزولة بالكامل داخل حاوية آمنة خاصة بمؤسستك فقط. نطبق معايير صارمة تتوافق مع SOC-2 و ISO-27001، ولا يتم مطلقاً مشاركة بياناتك الخاصة، أو تسريبها، أو استخدامها لتدريب أي نماذج ذكاء اصطناعي عامة."
    }
  },
  {
    id: "faq-5",
    question: { en: "Can the AI Agent make and receive actual phone calls?", ar: "هل يستطيع عميل الذكاء الاصطناعي إجراء وتلقي مكالمات هاتفية حقيقية؟" },
    answer: {
      en: "Yes! Our Phone Call AI agent integrates directly with cloud telephony networks, Twilio, or IP PBX switches. It carries out real-time voice conversations with extremely low latency, answering queries, booking visits, or making outbound reminder calls in natural English and Arabic with localized accents.",
      ar: "نعم! يتكامل عميل الاتصال الهاتفي الصوتي لدينا مباشرة مع شبكات الاتصال السحابي، Twilio، أو مقاسم الـ IP PBX. وهو يجري محادثات صوتية حقيقية وتفاعلية في الوقت الفعلي بزمن استجابة فائق السرعة، ليجيب على الاستفسارات، أو يحجز المواعيد، أو يجري مكالمات تذكير ومتابعة بنبرة صوتية ولهجات عربية طبيعية."
    }
  },
  {
    id: "faq-6",
    question: { en: "Does the platform support official Meta WhatsApp Business integration?", ar: "هل تدعم المنصة الربط الرسمي مع تطبيق WhatsApp Business من شركة Meta؟" },
    answer: {
      en: "Absolutely. We provide direct API onboarding with the official Meta Cloud WhatsApp Business API. Your AI Agents can handle thousands of concurrent conversations, send transactional messages, media, buttons, and documents, fully adhering to WhatsApp business policies.",
      ar: "بالتأكيد. نوفر ربطاً رسمياً ومباشراً مع واجهة برمجة التطبيقات السحابية WhatsApp Business API من Meta. يمكن لعملائك الرقميين إدارة آلاف المحادثات المتزامنة في نفس الوقت، وإرسال الرسائل التفاعلية، الوسائط، الأزرار، والملفات، مع الالتزام الكامل بسياسات واتساب للأعمال."
    }
  },
  {
    id: "faq-7",
    question: { en: "How does the AI Agent handle complex Arabic dialects (GCC, Levantine, Egyptian)?", ar: "كيف يتعامل عميل الذكاء الاصطناعي مع اللهجات العربية المعقدة (الخليجية، الشامية، المصرية)؟" },
    answer: {
      en: "Our custom Arabic NLP models are trained on rich regional datasets spanning Saudi (Najdi, Hijazi), Jordanian, Emirati, Egyptian, and corporate Modern Standard Arabic (Fusha). The agent automatically detects the visitor's dialect and matches their tone and terms for highly localized engagement.",
      ar: "نماذجنا المخصصة لمعالجة اللغة العربية مدربة بعناية على مجموعات بيانات إقليمية ضخمة تشمل اللهجات السعودية (النجدية، الحجازية)، الأردنية، الإماراتية، المصرية، واللغة العربية الفصحى الحديثة لقطاع الأعمال. يكتشف العميل تلقائياً لهجة العميل ويتفاعل مع نبرة كلامه ومصطلحاته لتقديم تجربة تواصل محلية بامتياز."
    }
  },
  {
    id: "faq-8",
    question: { en: "What is the typical timeframe required to deploy our first AI Agent?", ar: "ما هي المدة الزمنية المعتادة المطلوبة لنشر أول عميل ذكاء اصطناعي لنا؟" },
    answer: {
      en: "Standard agents from our Marketplace (like Website Chatbot, HR screening, or Customer Support) can be trained on your documents and deployed within 2 to 5 business days. Advanced integrations involving legacy local ERP systems or custom factory planning logic typically require 2 to 4 weeks.",
      ar: "العملاء القياسيون المتاحون في متجرنا (مثل مساعد الموقع، أو فرز التوظيف، أو دعم العملاء) يمكن تدريبهم على ملفاتك ونشرهم للعمل خلال 2 إلى 5 أيام عمل فقط. أما عمليات الربط والتكامل المتقدمة مع أنظمة الـ ERP المحلية القديمة أو خطط العمليات الصناعية المخصصة فتستغرق عادةً من 2 إلى 4 أسابيع."
    }
  },
  {
    id: "faq-9",
    question: { en: "Can we review and override the actions taken by our AI Agents?", ar: "هل يمكننا مراجعة وتعديل الإجراءات التي يتخذها عملاء الذكاء الاصطناعي؟" },
    answer: {
      en: "Yes. Our platform enforces a highly secure 'Human-in-the-Loop' workflow. You can set rules requiring the agent to seek manager approval before performing high-stakes actions, such as finalizing large supply orders, sending formal legal proposals, or processing refunds.",
      ar: "نعم. تدعم منصتنا ميزة 'التحقق والموافقة البشرية' (Human-in-the-Loop) عالية الأمان. يمكنك وضع شروط وقواعد تتطلب من العميل طلب موافقة المدير التشغيلي قبل تنفيذ القرارات الهامة، مثل اعتماد طلبيات التوريد الضخمة، إرسال العروض القانونية الرسمية، أو تفعيل عمليات الاسترجاع المالي."
    }
  },
  {
    id: "faq-10",
    question: { en: "Is there a limit to the volume of documents or pages we can upload to teach an agent?", ar: "هل هناك حد أقصى لحجم المستندات أو الصفحات التي يمكننا رفعها لتدريب العميل؟" },
    answer: {
      en: "Our Starter tier supports up to 50 pages or documents, while our Professional, Enterprise, and Custom tiers support unlimited document uploads. The system easily digests massive manuals containing thousands of technical catalog pages in seconds.",
      ar: "تدعم الباقة الأساسية رفع ما يصل إلى 50 صفحة أو مستنداً، بينما تتيح الباقات الاحترافية والمؤسسية والمخصصة رفع مستندات وملفات بلا حدود. يستوعب النظام بسهولة الأدلة والكتالوجات التقنية الضخمة التي تحتوي على آلاف الصفحات خلال ثوانٍ معدودة."
    }
  },
  {
    id: "faq-11",
    question: { en: "Can we host our AI Agents on local country servers to meet state sovereign data laws?", ar: "هل يمكننا استضافة عملاء الذكاء الاصطناعي على خوادم محلية داخل الدولة لتلبية قوانين سيادة البيانات؟" },
    answer: {
      en: "Yes, our Custom and Sovereign enterprise tiers support hosting within certified local cloud datacenters in Saudi Arabia (Oracle Cloud, Google Cloud Riyadh), UAE (Azure Dubai), and Jordan, fully aligning with local cyber-security mandates.",
      ar: "نعم، تدعم باقة المؤسسات المخصصة والسيادية لدينا الاستضافة داخل مراكز بيانات سحابية محلية مرخصة ومعتمدة في المملكة العربية السعودية (خوادم Oracle و Google Cloud بالرياض)، الإمارات العربية المتحدة (خوادم Azure بدبي)، والأردن، بما يتماشى بالكامل مع لوائح ومتطلبات الهيئات الوطنية للأمن السيبراني والبيانات."
    }
  },
  {
    id: "faq-12",
    question: { en: "What happens if the AI Agent encounters an inquiry it does not know how to resolve?", ar: "ماذا يحدث إذا واجه عميل الذكاء الاصطناعي استفساراً أو معاملة لا يعرف طريقة حلها؟" },
    answer: {
      en: "The agent gracefully handles limitations by using a seamless fallback. It informs the user professionally and immediately routes the context, conversation history, and customer details to an active human operator via your existing support channel or CRM.",
      ar: "يتعامل العميل مع الحدود المعرفية بذكاء ولباقة عبر ميزة الإحالة السلسة. فهو يخبر العميل بلطف ويقوم فوراً بتحويل سياق المحادثة الكامل وتفاصيل المشكلة إلى الموظف البشري المختص عبر قنوات الدعم الحالية لديك أو نظام CRM."
    }
  },
  {
    id: "faq-13",
    question: { en: "Can I try out or test the agents before subscribing to a monthly pricing plan?", ar: "هل يمكنني تجربة واختبار هؤلاء العملاء الرقميين قبل الاشتراك في الباقات المدفوعة؟" },
    answer: {
      en: "Yes, you can test basic conversational capabilities directly using our live interactive demo on this website. For full enterprise sandboxes, contact our regional sales team to set up a free 14-day proof of concept using your actual company files.",
      ar: "نعم، يمكنك اختبار القدرات التفاعلية الأساسية للعملاء مباشرة من خلال العرض التفاعلي الحي على هذا الموقع. ولتجربة بيئة العمل المؤسسية الكاملة، يرجى التواصل مع فريق المبيعات لدينا لتأسيس بيئة تجريبية مجانية لمدة 14 يوماً باستخدام عينات من ملفات شركتك الفعلية."
    }
  },
  {
    id: "faq-14",
    question: { en: "Is there an annual commitment, or can we subscribe and pay monthly?", ar: "هل هناك التزام سنوي بالاشتراك أم يمكننا الدفع شهرياً؟" },
    answer: {
      en: "We offer complete flexibility. You can subscribe to our plans on a monthly basis and cancel at any time. Selecting our annual subscription option provides a 20% discount on the total package pricing.",
      ar: "نوفر لك مرونة تامة. يمكنك الاشتراك في باقاتنا على أساس شهري وإلغاء الاشتراك في أي وقت تريده. وعند اختيار خيار الدفع والاشتراك السنوي، ستحصل على خصم فوري بقيمة 20% من التكلفة الكلية للأنظمة."
    }
  },
  {
    id: "faq-15",
    question: { en: "How do AI Agents save money for a manufacturing company specifically?", ar: "كيف يوفر عملاء الذكاء الاصطناعي المال لشركات التصنيع والمصانع تحديداً؟" },
    answer: {
      en: "In manufacturing, our Production Planning AI acts as a digital supply chain coordinator. It schedules floor machines dynamically, matches raw material stocks, minimizes tool transitions, and forecasts machine fatigue. This reduces planning time by 90% and cuts factory down-times by over 30%.",
      ar: "في قطاع التصنيع، يعمل عميل تخطيط الإنتاج الذكي كمنسق لوجستي رقمي. فهو يجدول الآلات ديناميكياً، ويطابق توفر المواد الخام، ويقلل أوقات تبديل القوالب والعدد، ويتوقع إجهاد المعدات. هذا يقلص أوقات التخطيط بنسبة 90% ويخفض فترات توقف المصنع بأكثر من 30%."
    }
  },
  {
    id: "faq-16",
    question: { en: "Are these AI Agents compliant with local Arab tax frameworks, such as ZATCA billing?", ar: "هل يتوافق هؤلاء العملاء مع الأنظمة الضريبية العربية المحلية، مثل الفوترة الإلكترونية لهيئة الزكاة (ZATCA)؟" },
    answer: {
      en: "Yes, our Accounting and Invoice AI is pre-configured to comply with national financial laws in the Middle East, including Jordan's sales tax frameworks and the Kingdom of Saudi Arabia's Phase 2 ZATCA electronic invoicing requirements.",
      ar: "نعم، عميل المحاسبة والمالية لدينا مهيأ ومبرمج مسبقاً للامتثال للقوانين والتشريعات المالية الوطنية في الشرق الأوسط، بما في ذلك قوانين ضريبة المبيعات في الأردن، ومتطلبات المرحلة الثانية للفوترة الإلكترونية لهيئة الزكاة والضريبة والجمارك (ZATCA) في السعودية."
    }
  },
  {
    id: "faq-17",
    question: { en: "Can we request custom-built agents tailored for proprietary proprietary software?", ar: "هل يمكننا طلب عملاء ذكاء اصطناعي مصممين خصيصاً لبرمجيات وأنظمة داخلية خاصة بنا؟" },
    answer: {
      en: "Yes, our Custom AI Agent option is designed specifically for organizations that run unique operational structures or specialized proprietary software. Our expert engineers construct, test, and deploy bespoke neural agents aligned with your technical layouts.",
      ar: "نعم، خيار 'عميل الذكاء الاصطناعي المخصص' مصمم ومتاح خصيصاً للمؤسسات التي تدير هياكل تشغيلية فريدة أو برمجيات وأنظمة مغلقة خاصة بها. يقوم مهندسو الخبراء لدينا ببناء واختبار ونشر عملاء رقميين مخصصين متكاملين مع هيكلك التقني."
    }
  },
  {
    id: "faq-18",
    question: { en: "What level of support do you provide during and after the onboarding phase?", ar: "ما هو مستوى الدعم الفني والمساعدة التي تقدمونها خلال وبعد مرحلة التأسيس؟" },
    answer: {
      en: "Our Professional and Enterprise tiers include dedicated technical account managers and prioritized 24/7 SLA hotline support. We conduct onboarding workshops, monitor agent logs during early weeks, and release monthly safety patches continuously.",
      ar: "تتضمن باقاتنا الاحترافية ومؤسسات دعم عملاء مخصص ومديري حسابات فنيين، مع خط ساخن ذو أولوية للاستجابة على مدار الساعة 24/7. نقود ورش عمل لتأهيل طاقمكم، ونراقب أداء العميل بدقة في الأسابيع الأولى، ونطلق تحديثات ورقع أمان دورية مستمرة."
    }
  },
  {
    id: "faq-19",
    question: { en: "How does the AI Agent read scanned invoices or bad handwriting documents?", ar: "كيف يستطيع العميل قراءة وفهم الفواتير الورقية الممسوحة ضوئياً أو المستندات ذات الخط اليدوي الضعيف؟" },
    answer: {
      en: "We utilize advanced cognitive vision OCR engines that look beyond characters to understand semantic patterns. The system cross-references fields, dates, and currency symbols to guarantee accurate classification and entry even from blurred or tilted phone photos of bills.",
      ar: "نعتمد على محركات قراءة ذكائية متطورة (OCR) تتجاوز قراءة الحروف إلى فهم المعنى السياقي والأنماط الهيكلية. يقارن النظام الحقول، والتواريخ، والرموز والعملات المالية لضمان الفرز والتسجيل الدقيق حتى لو كانت فواتير مصورة بالهاتف بشكل مائل أو مهزوز."
    }
  },
  {
    id: "faq-20",
    question: { en: "Can the agents handle multiple languages at once or just English and Arabic?", ar: "هل يستطيع هؤلاء العملاء التحدث وإدارة لغات متعددة معاً أم العربية والإنجليزية فقط؟" },
    answer: {
      en: "While we specialize in top-tier Arabic and English fluency for the Middle Eastern market, our underlying models support over 80 languages, including French, Urdu, Tagalog, Turkish, Hindi, Spanish, and German, enabling you to support global client bases effortlessly.",
      ar: "على الرغم من تخصصنا وتميزنا البالغ في طلاقة اللغتين العربية والإنجليزية لأسواق الشرق الأوسط، تدعم نماذجنا الأساسية أكثر من 80 لغة عالمية مختلفة، منها الفرنسية، الأوردو، التغالوغ، التركية، الهندية، الإسبانية، والألمانية، مما يتيح لك خدمة جمهورك العالمي بسهولة."
    }
  },
  {
    id: "faq-21",
    question: { en: "What is the cost per interaction if we exceed our plan's monthly transaction quota?", ar: "ما هي تكلفة المعاملة أو المحادثة الإضافية في حال تجاوزنا الحصة الشهرية المحددة في الباقة؟" },
    answer: {
      en: "If you exceed your quota, agents continue running uninterruptedly to protect your active channels. Overages are billed at a very low flat rate of $0.02 per conversation, or you can instantly upgrade your tier within your billing panel with a single click.",
      ar: "في حال تجاوز الحصة المحددة، يستمر عملائك بالعمل دون أي توقف لضمان استمرارية عمل قنواتك. ويتم احتساب المعاملات الزائدة بتكلفة ضئيلة وثابتة تبلغ 0.02 دولار فقط لكل محادثة، أو يمكنك ترقية باقتك فوراً وبضغطة زر من لوحة التحكم والدفع."
    }
  },
  {
    id: "faq-22",
    question: { en: "Can the AI Agent manage subcontractor progress and track construction deliveries?", ar: "هل يمكن لعملاء الذكاء الاصطناعي متابعة تقدم عمل مقاولي الباطن وتتبع توريدات البناء؟" },
    answer: {
      en: "Yes, our Construction and Project Manager AI agents monitor material deliveries, match logistics tracking sheets, send automated daily confirmation follow-ups to subcontractors via SMS or WhatsApp, and flag potential delay zones in dashboard timetables.",
      ar: "نعم، يستطيع عميل أتمتة المشاريع والإنشاءات لدينا تتبع وصول المواد اللوجستية، ومطابقة مستندات الشحن، وإرسال رسائل متابعة يومية مؤتمتة لمقاولي الباطن عبر الرسائل أو الواتساب، وتحديد مناطق التأخير المتوقعة على لوحة إدارة المشروع لتفاديها."
    }
  },
  {
    id: "faq-23",
    question: { en: "Is our intellectual property and corporate training data safe from competitors?", ar: "هل الملكية الفكرية وبيانات تدريب شركتنا محمية وآمنة من المنافسين والشركات الأخرى؟" },
    answer: {
      en: "100% yes. We implement strict multi-tenant container architecture. Your training materials, customized rules, proprietary catalogs, and conversation logs are fully encrypted and completely inaccessible to other clients, competitors, or third parties.",
      ar: "نعم بنسبة 100%. نطبق بنية برمجية صارمة لعزل خوادم ومستودعات البيانات (Multi-Tenant). إن كافة مواد تدريب عملائك، القواعد المخصصة، كتالوجات المنتجات، وسجلات التواصل مشفرة ومحمية بالكامل، ولا يمكن لأي عميل آخر، أو منافس، أو أي طرف ثالث الوصول إليها."
    }
  },
  {
    id: "faq-24",
    question: { en: "Can we deploy the AI Agent to act as an internal IT support desk for our staff?", ar: "هل يمكننا نشر عميل الذكاء الاصطناعي ليعمل كمكتب دعم فني وتقني داخلي (IT Support) لموظفينا؟" },
    answer: {
      en: "Yes, this is a very common scenario. By uploading your internal IT manual, hardware policies, and networking guidelines, the Knowledge Base agent can assist staff in setting up VPNs, resetting passwords, and troubleshooting software errors 24/7.",
      ar: "نعم، هذا تطبيق شائع ومثمر للغاية. عبر رفع أدلة الدعم الفني، وسياسات أمن الأجهزة والشبكات الخاصة بشركتك، يمكن لعميل المعرفة مساعدة موظفيكم في تفعيل شبكات الـ VPN، وإعادة تعيين كلمات المرور، وحل مشاكل البرمجيات الشائعة على مدار الساعة."
    }
  },
  {
    id: "faq-25",
    question: { en: "Are these AI Agents a permanent cost center or an active business asset?", ar: "هل يمثل عملاء الذكاء الاصطناعي تكلفة مستمرة ومستنزفة أم هم أصول أعمال حقيقية ونشطة؟" },
    answer: {
      en: "Every metric demonstrates that AI Agents are high-yield, long-term business assets. By reducing operating expenses by up to 80%, recovering thousands of administrative work hours, resolving client inquiries in seconds, and scaling operations without massive salaries, they consistently yield a positive, predictable ROI.",
      ar: "تثبت كافة الأرقام والمؤشرات أن عملاء الذكاء الاصطناعي هم أصول أعمال استثمارية عالية العائد على المدى الطويل. فمن خلال خفض النفقات التشغيلية بنسبة تصل إلى 80%، واسترداد آلاف ساعات العمل المهدرة، وحل مشكلات العملاء فورياً، والتوسع دون تحمل أعباء رواتب ضخمة، فإنهم يحققون عائداً مالياً إيجابياً ومتوقعاً ومضموناً."
    }
  }
];
