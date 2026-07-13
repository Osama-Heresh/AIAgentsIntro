export type Language = "en" | "ar";

export interface Agent {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  detailedBenefits: { en: string[]; ar: string[] };
  estimatedSavings: { en: string; ar: string };
  pricing: { en: string; ar: string };
  iconName: string;
}

export interface Industry {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  iconName: string;
  solutions: {
    title: { en: string; ar: string };
    details: { en: string; ar: string };
  }[];
}

export interface CaseStudy {
  id: string;
  companyName: { en: string; ar: string };
  location: { en: string; ar: string };
  industry: { en: string; ar: string };
  before: { en: string; ar: string };
  after: { en: string; ar: string };
  metrics: {
    metric1: { label: { en: string; ar: string }; value: string };
    metric2: { label: { en: string; ar: string }; value: string };
  };
}

export interface FaqItem {
  id: string;
  question: { en: string; ar: string };
  answer: { en: string; ar: string };
}

export interface FeatureItem {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  iconName: string;
}
