"use client";

import React, { useState } from "react";
import { DollarSign, Clock, Landmark, Sparkles, TrendingUp } from "lucide-react";

export default function ROICalculator() {
  const [engineers, setEngineers] = useState(15);
  const [rate, setRate] = useState(75);
  const [hoursSaved, setHoursSaved] = useState(8);

  // Computations
  const monthlyHoursSaved = Math.round(engineers * hoursSaved * 4.33);
  const monthlySavings = monthlyHoursSaved * rate;
  const yearlySavings = monthlySavings * 12;
  
  // Calculate relative ROI ratio based on AetherFlow pricing (SaaS averages)
  const aetherFlowCost = engineers * 49; // $49/seat/month
  const netSavings = monthlySavings - aetherFlowCost;
  const roiMultiplier = aetherFlowCost > 0 ? (monthlySavings / aetherFlowCost).toFixed(1) : "0.0";

  return (
    <section id="roi" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Glow Blob */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-brand-secondary/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-brand-secondary uppercase">
            Productivity Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient mt-3 mb-4">
            Calculate Your Return on Automation
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See exactly how much development velocity you unlock and capital you conserve by automating pipeline boilerplate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Sliders */}
          <div className="lg:col-span-6 space-y-8 glassmorphism rounded-2xl p-8 bg-black/40">
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-secondary" />
              Adjust Organization Parameters
            </h3>

            {/* Parameter 1 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-300 font-medium flex items-center gap-2">
                  Team Size
                </label>
                <span className="font-mono font-semibold text-brand-secondary bg-brand-secondary/15 px-2.5 py-0.5 rounded border border-brand-secondary/30">
                  {engineers} Engineers
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="250"
                value={engineers}
                onChange={(e) => setEngineers(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 Eng</span>
                <span>250 Engs</span>
              </div>
            </div>

            {/* Parameter 2 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-300 font-medium">
                  Average Fully Loaded Rate
                </label>
                <span className="font-mono font-semibold text-brand-secondary bg-brand-secondary/15 px-2.5 py-0.5 rounded border border-brand-secondary/30">
                  ${rate}/hr
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="200"
                value={rate}
                onChange={(e) => setRate(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>$30/hr</span>
                <span>$200/hr</span>
              </div>
            </div>

            {/* Parameter 3 */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="text-slate-300 font-medium">
                  Hours Saved / Week / Engineer
                </label>
                <span className="font-mono font-semibold text-brand-secondary bg-brand-secondary/15 px-2.5 py-0.5 rounded border border-brand-secondary/30">
                  {hoursSaved} hrs
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                value={hoursSaved}
                onChange={(e) => setHoursSaved(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>2 hrs</span>
                <span>30 hrs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Results */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Metric 1 */}
            <div className="glassmorphism rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-brand-primary/10 to-transparent">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Time Reclaimed
                </span>
                <Clock className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                  {monthlyHoursSaved.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 block mt-1">Hours / Month Saved</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="glassmorphism rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-brand-secondary/10 to-transparent">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Automation Multiplier
                </span>
                <Sparkles className="w-5 h-5 text-brand-secondary" />
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight text-gradient-purple-cyan">
                  {roiMultiplier}x
                </span>
                <span className="text-xs text-slate-400 block mt-1">ROI on License Cost</span>
              </div>
            </div>

            {/* Big Wide Saving Summary Box */}
            <div className="sm:col-span-2 glassmorphism rounded-2xl p-8 bg-black/60 relative overflow-hidden border border-brand-primary/30 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                <Landmark className="w-28 h-28 text-white" />
              </div>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">Estimated Capital Savings</h4>
                  <p className="text-[11px] text-slate-500 leading-none mt-0.5">Based on your parameters</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-baseline">
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono tracking-tight">
                    ${monthlySavings.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 block mt-1.5">Saved / Month</span>
                </div>
                <div className="border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-200 font-mono tracking-tight">
                    ${yearlySavings.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 block mt-1">Annual Savings Rate</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
