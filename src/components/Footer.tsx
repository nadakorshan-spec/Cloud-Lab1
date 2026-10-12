"use client";

import React, { useState } from "react";
import { Cpu, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-brand-dark/95 border-t border-white/10 pt-20 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-brand-secondary/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Newsletter Form */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary p-[1px] shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <div className="flex items-center justify-center w-full h-full rounded-[11px] bg-brand-dark">
                  <Cpu className="w-5 h-5 text-brand-secondary" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-gradient">
                Aether<span className="text-brand-secondary font-medium">Flow</span>
              </span>
            </a>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering developer teams with collaborative autonomous AI agents that maintain build-health, security compliance, and live telemetry solutions.
            </p>

            {/* Newsletter input box */}
            <div className="max-w-sm pt-2">
              <h4 className="text-xs font-bold text-slate-350 uppercase tracking-wider mb-3">
                Join the Automation Digest
              </h4>
              {subscribed ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3.5 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-200">Subscription Confirmed</h5>
                    <p className="text-[11px] text-slate-500 mt-1 leading-normal">You are now on the preview list for AetherFlow releases.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl px-5 flex items-center justify-center transition-colors active:scale-98 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Spacer for MD screens */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Columns */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Product</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#features" className="text-xs text-slate-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#demo" className="text-xs text-slate-400 hover:text-white transition-colors">Interactive Demo</a>
              </li>
              <li>
                <a href="#pricing" className="text-xs text-slate-400 hover:text-white transition-colors">Pricing Details</a>
              </li>
              <li>
                <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  Changelog
                  <span className="text-[9px] bg-brand-primary/20 text-brand-primary font-bold px-1.5 py-0.2 rounded-full">v2.0</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Developers</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">SDK Ref Guides</a>
              </li>
              <li>
                <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Open-Source CLI</a>
              </li>
              <li>
                <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Discussions Board</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Company</h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">About Story</a>
              </li>
              <li>
                <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Careers Team</a>
              </li>
              <li>
                <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Security Center</a>
              </li>
              <li>
                <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Privacy Terms</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-mono">
          <span>&copy; {new Date().getFullYear()} AetherFlow Technologies, Inc. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Status Feed</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              Developer API
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
