"use client";

import React, { useState } from "react";
import { Check, HelpCircle, ArrowRight } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("annually");

  const plans = [
    {
      name: "Developer",
      desc: "For solo builders or proof-of-concepts.",
      price: {
        monthly: 0,
        annually: 0,
      },
      features: [
        "Up to 3 active AI agent nodes",
        "20 automated tasks / month",
        "Standard CLI client access",
        "Community support channel",
        "14-day logs retention history",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Pro Team",
      desc: "For growing teams seeking hands-off pipelines.",
      price: {
        monthly: 59,
        annually: 49,
      },
      features: [
        "Unlimited collaborative agent nodes",
        "500 automated runs / month",
        "Self-healing compiler integration",
        "Slack & Microsoft Teams live alerts",
        "30-day telemetry logs retention",
        "Dedicated email support (24hr SLA)",
      ],
      cta: "Upgrade to Pro Team",
      popular: true,
    },
    {
      name: "Enterprise",
      desc: "For massive compliance & high capacity rules.",
      price: {
        monthly: "Custom",
        annually: "Custom",
      },
      features: [
        "Dedicated agent container nodes",
        "Unlimited automated runner execution",
        "SOC2 security & compliance logging",
        "Self-hosted runner support (AWS/GCP)",
        "Custom fine-tuned coding LLM context",
        "24/7 Phone SLA & Architect Support",
      ],
      cta: "Contact Enterprise Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background Blobs */}
      <div className="absolute bottom-1/4 right-1/3 w-[45rem] h-[45rem] bg-brand-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider text-brand-secondary uppercase">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient mt-3 mb-4">
            Transparent Pricing Built to Scale
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose the plan that fits your engineering goals. Every plan includes core security patches and standard telemetry reviews.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-semibold transition-colors ${billingCycle === "monthly" ? "text-white" : "text-slate-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
              className="relative w-12 h-6 bg-slate-800 rounded-full p-1 cursor-pointer transition-colors hover:bg-slate-750"
            >
              <div
                className={`w-4 h-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full transition-transform duration-300 ${
                  billingCycle === "annually" ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
            <span className={`text-sm font-semibold transition-colors flex items-center gap-1.5 ${billingCycle === "annually" ? "text-white" : "text-slate-400"}`}>
              Annually
              <span className="text-[10px] font-bold bg-brand-secondary/20 text-brand-secondary px-2 py-0.5 rounded-full border border-brand-secondary/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const isCustom = typeof plan.price[billingCycle] === "string";
            const priceVal = plan.price[billingCycle];

            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-[1px] flex flex-col justify-between transition-all duration-300 hover:scale-101 ${
                  plan.popular
                    ? "bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-primary shadow-[0_15px_40px_rgba(139,92,246,0.25)] border-beam-container"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-primary to-brand-secondary px-3 py-1 rounded-full border border-white/20">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`glassmorphism rounded-[15px] p-8 h-full flex flex-col justify-between bg-black/40 ${plan.popular ? "bg-black/60" : ""}`}>
                  
                  {/* Card Top */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{plan.desc}</p>
                    
                    {/* Pricing value area */}
                    <div className="my-8 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                        {isCustom ? priceVal : `$${priceVal}`}
                      </span>
                      {!isCustom && (
                        <span className="text-xs text-slate-400 font-medium">
                          / seat / month
                        </span>
                      )}
                    </div>
                    
                    <hr className="border-white/10 my-6" />

                    {/* Features list */}
                    <ul className="space-y-4">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-10">
                    <button
                      className={`w-full py-3.5 px-6 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 text-xs active:scale-98 cursor-pointer ${
                        plan.popular
                          ? "bg-white text-black hover:bg-slate-100 shadow-lg"
                          : "bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
