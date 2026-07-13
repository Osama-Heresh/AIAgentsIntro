import { useState, useEffect } from "react";
import { Calculator, Check, ArrowRight, ArrowLeft, TrendingUp } from "lucide-react";
import { translations } from "../data/translations";
import { Language } from "../types";
import { motion } from "motion/react";

interface RoiCalculatorProps {
  lang: Language;
}

export default function RoiCalculator({ lang }: RoiCalculatorProps) {
  const t = translations[lang];
  const isRtl = lang === "ar";

  // Slider States
  const [employees, setEmployees] = useState(25);
  const [salary, setSalary] = useState(3000);
  const [inquiries, setInquiries] = useState(250);
  const [hours, setHours] = useState(40); // monthly manual hours per employee
  const [manualPercent, setManualPercent] = useState(60); // % of manual task that can be automated

  // Computed Outputs
  const [annualSavings, setAnnualSavings] = useState(0);
  const [annualHoursSaved, setAnnualHoursSaved] = useState(0);
  const [paybackPeriod, setPaybackPeriod] = useState("");
  const [revenueIncrease, setRevenueIncrease] = useState(0);

  useEffect(() => {
    // 1. Total monthly employee cost spent on repetitive work
    const totalSalaryExpense = employees * salary;
    // Ratio of time spent on repetitive tasks
    const manualRatio = manualPercent / 100;
    
    // Average hours a full-time employee works per month is roughly 160
    const timeSpentOnManualRatio = hours / 160;
    const directManualSalaryExpense = totalSalaryExpense * timeSpentOnManualRatio;
    
    // AI Agents capture 90% of that manual effort safely
    const captureRate = 0.90;
    const monthlyAutomatedSavings = directManualSalaryExpense * manualRatio * captureRate;
    
    // Annualized
    const computedAnnualSavings = Math.round(monthlyAutomatedSavings * 12);
    setAnnualSavings(computedAnnualSavings);

    // 2. Annual hours saved
    const monthlyHoursSaved = employees * hours * manualRatio * captureRate;
    const computedHoursSaved = Math.round(monthlyHoursSaved * 12);
    setAnnualHoursSaved(computedHoursSaved);

    // 3. Reclaimed opportunity revenue (valuing reclaimed employee focus at $40/hour)
    const computedRevenue = Math.round(computedHoursSaved * 40);
    setRevenueIncrease(computedRevenue);

    // 4. Payback Period
    // Platform license is estimated at a pro-rata scaling: $250 base + $45 per employee per month
    const estimatedMonthlyPlatformCost = 250 + (employees * 35);
    if (monthlyAutomatedSavings > estimatedMonthlyPlatformCost) {
      const months = estimatedMonthlyPlatformCost / monthlyAutomatedSavings;
      if (months < 0.5) {
        setPaybackPeriod(lang === "en" ? "Immediate (< 1 mo)" : "فوري (أقل من شهر)");
      } else {
        const roundedMonths = (Math.round(months * 10) / 10).toFixed(1);
        setPaybackPeriod(lang === "en" ? `${roundedMonths} months` : `${roundedMonths} شهور`);
      }
    } else {
      setPaybackPeriod(lang === "en" ? "N/A" : "غير متاح");
    }
  }, [employees, salary, inquiries, hours, manualPercent, lang]);

  // SVG Chart Calculation (Scaling heights based on annual savings)
  const maxSavingsRef = 1500000; // Reference maximum for chart scaling
  const chartS1 = Math.min(Math.round((annualSavings * 0.9) / maxSavingsRef * 100), 90);
  const chartS2 = Math.min(Math.round((annualSavings * 2.1) / maxSavingsRef * 100), 90);
  const chartS3 = Math.min(Math.round((annualSavings * 3.4) / maxSavingsRef * 100), 90);

  // Traditional cost projection (stays high)
  const tradS1 = 30;
  const tradS2 = 60;
  const tradS3 = 90;

  return (
    <section id="roi" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="roi-header">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
            {lang === "en" ? "Financial Predictor" : "التنبؤ المالي للعائد"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {t.roiTitle}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {t.roiSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="roi-calculator-grid">
          
          {/* Sliders Input Column */}
          <div className="lg:col-span-7 bg-slate-800/50 rounded-3xl p-6 sm:p-8 border border-slate-700/50 flex flex-col justify-between" id="roi-inputs">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-teal-400" />
                <h3 className="font-display text-lg font-bold text-slate-100">
                  {lang === "en" ? "Interactive Sliders" : "المؤشرات التفاعلية"}
                </h3>
              </div>

              {/* Slider 1: Employees */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label className="text-slate-300 font-medium">{t.labelEmployees}</label>
                  <span className="font-mono font-bold text-teal-400">{employees}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="350"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-400"
                  id="slider-employees"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>5</span>
                  <span>350+</span>
                </div>
              </div>

              {/* Slider 2: Salary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label className="text-slate-300 font-medium">{t.labelSalary}</label>
                  <span className="font-mono font-bold text-teal-400">
                    ${salary.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="15000"
                  step="100"
                  value={salary}
                  onChange={(e) => setSalary(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-400"
                  id="slider-salary"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>$800</span>
                  <span>$15,000</span>
                </div>
              </div>

              {/* Slider 3: Working Hours spent on manual tasks */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label className="text-slate-300 font-medium">{t.labelWorkingHours}</label>
                  <span className="font-mono font-bold text-teal-400">
                    {hours} {lang === "en" ? "hours/mo" : "ساعة/شهرياً"}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="120"
                  value={hours}
                  onChange={(e) => setHours(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-400"
                  id="slider-hours"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>10h</span>
                  <span>120h</span>
                </div>
              </div>

              {/* Slider 4: Automation target percentage */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label className="text-slate-300 font-medium">{t.labelManualTasks}</label>
                  <span className="font-mono font-bold text-teal-400">{manualPercent}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="95"
                  value={manualPercent}
                  onChange={(e) => setManualPercent(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-400"
                  id="slider-manual-percent"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>20%</span>
                  <span>95%</span>
                </div>
              </div>

              {/* Slider 5: Daily Inquiries */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <label className="text-slate-300 font-medium">{t.labelInquiries}</label>
                  <span className="font-mono font-bold text-teal-400">{inquiries}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="2000"
                  step="10"
                  value={inquiries}
                  onChange={(e) => setInquiries(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-400"
                  id="slider-inquiries"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>20</span>
                  <span>2,000+</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/60 text-xs text-slate-400">
              {t.roiNotice}
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-5 flex flex-col gap-6" id="roi-outputs-display">
            
            {/* Primary Calculations Block */}
            <div className="bg-slate-850 rounded-3xl p-6 border border-teal-500/30 shadow-lg shadow-teal-500/5 relative overflow-hidden" id="roi-metrics-panel">
              <div className="absolute top-0 right-0 p-8 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-6">
                
                {/* 1. Annual Savings */}
                <div>
                  <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider mb-1">
                    {t.roiAnnualSavings}
                  </span>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400 block tracking-tight">
                    ${annualSavings.toLocaleString()}
                  </span>
                </div>

                {/* 2. Reclaimed Hours */}
                <div>
                  <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider mb-1">
                    {t.roiHoursSaved}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-white block tracking-tight">
                    {annualHoursSaved.toLocaleString()} {lang === "en" ? "hours" : "ساعة"}
                  </span>
                </div>

                {/* 3. Opportunity Capacity */}
                <div>
                  <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider mb-1">
                    {t.roiRevenuePotential}
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-bold text-blue-400 block tracking-tight">
                    + ${revenueIncrease.toLocaleString()}
                  </span>
                </div>

                {/* 4. Payback Horizon */}
                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-sm">
                  <span className="text-slate-400 font-medium">{t.roiPaybackPeriod}</span>
                  <span className="font-mono font-bold text-green-400 px-2.5 py-1 rounded bg-green-950/60 border border-green-800/40">
                    {paybackPeriod}
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Dynamic SVG Cost Growth Chart */}
            <div className="bg-slate-850 rounded-3xl p-6 border border-slate-800 flex-1 flex flex-col justify-between" id="roi-visual-chart">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
                  <span>{lang === "en" ? "Cumulative Savings Projection" : "توقع التوفير التراكمي المحقق"}</span>
                </h4>
                <span className="text-[10px] font-mono text-slate-500">3-Year Horizon</span>
              </div>

              {/* Dynamic Bars Grid using native HTML elements scaled by state values */}
              <div className="flex items-end justify-between h-36 px-4 gap-6 relative" id="roi-dynamic-chart-bars">
                {/* Horizontal Baseline */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-700" />

                {/* Year 1 */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full flex justify-center gap-1 items-end h-28">
                    {/* Traditional Cost */}
                    <div className="w-4 bg-slate-700/40 rounded-t h-[30%]" title="Traditional Cost: Low Efficiency" />
                    {/* Saved Cost */}
                    <div
                      className="w-6 bg-teal-500 rounded-t transition-all duration-500"
                      style={{ height: `${Math.max(chartS1, 10)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono mt-2">{lang === "en" ? "Yr 1" : "العام 1"}</span>
                </div>

                {/* Year 2 */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full flex justify-center gap-1 items-end h-28">
                    {/* Traditional Cost */}
                    <div className="w-4 bg-slate-700/40 rounded-t h-[55%]" />
                    {/* Saved Cost */}
                    <div
                      className="w-6 bg-teal-500 rounded-t transition-all duration-500"
                      style={{ height: `${Math.max(chartS2, 18)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono mt-2">{lang === "en" ? "Yr 2" : "العام 2"}</span>
                </div>

                {/* Year 3 */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full flex justify-center gap-1 items-end h-28">
                    {/* Traditional Cost */}
                    <div className="w-4 bg-slate-700/40 rounded-t h-[80%]" />
                    {/* Saved Cost */}
                    <div
                      className="w-6 bg-teal-500 rounded-t transition-all duration-500"
                      style={{ height: `${Math.max(chartS3, 26)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono mt-2">{lang === "en" ? "Yr 3" : "العام 3"}</span>
                </div>
              </div>

              {/* Chart Legend */}
              <div className="flex justify-center gap-6 mt-4 pt-3 border-t border-slate-800 text-[10px] font-semibold text-slate-400" id="chart-legend">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-slate-700 rounded-sm" />
                  <span>{lang === "en" ? "Traditional Process Costs" : "تكلفة العمليات التقليدية"}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-teal-500 rounded-sm" />
                  <span>{lang === "en" ? "Cumulative AI Profit" : "الربح التراكمي للذكاء"}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
