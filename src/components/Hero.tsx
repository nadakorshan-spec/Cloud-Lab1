"use client";

import React, { useState, useEffect } from "react";
import { Play, Sparkles, Terminal, Activity, ArrowRight } from "lucide-react";

export default function Hero() {
  const [activeCodeLine, setActiveCodeLine] = useState(0);
  const codeSnippets = [
    "const aether = new AetherFlow({ env: 'prod' });",
    "aether.registerAgent('code-reviewer', reviewerAgent);",
    "aether.registerAgent('auto-tester', integrationTestAgent);",
    "aether.registerAgent('deployer', productionDeployAgent);",
    "// Starting orchestrator network...",
    "await aether.orchestrate('deploy-pipeline', { autoHeal: true });",
    "✔ Pipeline configured successfully.",
    "🚀 Deploying nextjs-prod app...",
    "ℹ Review agent: 'No syntax issues found. Styling score: 98%.'",
    "ℹ Auto-heal agent: '1 build warning resolved via type updates.'",
    "✔ All tests passed. Coverage: 96.4%.",
    "🎉 Production release deployed to Vercel."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCodeLine((prev) => (prev + 1) % codeSnippets.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [codeSnippets.length]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-grid-cyber">
      {/* Background Radial Glow Overlay */}
      <div className="absolute inset-0 bg-radial-gradient-overlay pointer-events-none"></div>

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-140 h-140 rounded-full bg-glowing-blob-1 animate-pulse-glow pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full bg-glowing-blob-2 animate-pulse-glow pointer-events-none"></div>

      {/* Grid Lines Moving Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none animate-grid-move bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Top Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glassmorphism text-xs font-semibold text-brand-secondary border-brand-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.1)] mb-8 animate-float">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AetherFlow v2.0 - Multi-Agent Orchestrator is Live</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-ping"></span>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-gradient mb-6">
          Orchestrate Dev Workflows with <span className="text-gradient-purple-cyan">Autonomous AI Agents</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-slate-400 text-lg sm:text-xl leading-relaxed mb-10">
          Supercharge your development pipeline. AetherFlow automates writing, testing, auto-healing, and deploying code using a collaborative network of specialized AI agents.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
          <a
            href="#demo"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-transform active:scale-98"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10 flex items-center gap-2">
              Start Automating Free
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-300 hover:text-white glassmorphism glassmorphism-hover active:scale-98"
          >
            <Play className="w-4 h-4 fill-slate-300 group-hover:fill-white" />
            Watch Pipeline in Action
          </a>
        </div>

        {/* Live Dashboard Mockup Container */}
        <div className="w-full max-w-5xl rounded-2xl p-[1px] bg-gradient-to-tr from-brand-primary/20 via-white/5 to-brand-secondary/20 shadow-[0_20px_50px_rgba(3,0,20,0.8),0_0_80px_rgba(139,92,246,0.15)] overflow-hidden">
          <div className="glassmorphism rounded-[15px] overflow-hidden flex flex-col md:flex-row h-[480px]">
            
            {/* Sidebar Controls */}
            <div className="w-full md:w-60 border-b md:border-b-0 md:border-r border-white/10 bg-black/40 p-4.5 flex flex-col justify-between shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Agent Network</span>
                </div>
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-brand-primary/10 border border-brand-primary/30">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                      <span className="text-xs font-medium text-slate-200">Orchestrator Node</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/8 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                      <span className="text-xs font-medium text-slate-300">Code Review Agent</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-300">Standby</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/8 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
                      <span className="text-xs font-medium text-slate-300">Auto-Healer Agent</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300">Standby</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/8 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                      <span className="text-xs font-medium text-slate-300">Deployment Agent</span>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300">Standby</span>
                  </div>
                </div>
              </div>

              {/* Status footer inside dashboard */}
              <div className="pt-4 border-t border-white/10 hidden md:block">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-brand-secondary" />
                    Network Load
                  </span>
                  <span className="text-xs text-slate-200 font-mono">14.2%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary h-full rounded-full w-[14%]"></div>
                </div>
              </div>
            </div>

            {/* Simulated Live Console and Output Workspace */}
            <div className="flex-1 flex flex-col min-w-0 bg-black/20">
              {/* Window Header */}
              <div className="h-11 border-b border-white/10 px-4 flex items-center justify-between bg-black/30 shrink-0">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-brand-secondary" />
                  <span className="text-xs font-semibold text-slate-300 font-mono">aetherflow-cli@terminal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
              </div>

              {/* Code Screen Terminal Lines */}
              <div className="flex-1 p-5 font-mono text-xs overflow-y-auto text-left space-y-2.5 select-none bg-brand-dark/20">
                {codeSnippets.slice(0, activeCodeLine + 1).map((snippet, idx) => {
                  const isSuccess = snippet.startsWith("✔") || snippet.startsWith("🎉") || snippet.startsWith("🚀");
                  const isInfo = snippet.startsWith("ℹ");
                  const isComment = snippet.startsWith("//");
                  
                  let textColor = "text-slate-300";
                  if (isSuccess) textColor = "text-emerald-400 font-semibold";
                  else if (isInfo) textColor = "text-cyan-400";
                  else if (isComment) textColor = "text-slate-500 italic";

                  return (
                    <div key={idx} className={`flex items-start gap-2.5 animate-fadeIn transition-all duration-300`}>
                      <span className="text-slate-600 text-right select-none w-5 leading-relaxed">{idx + 1}</span>
                      <span className={`${textColor} leading-relaxed flex-1`}>{snippet}</span>
                    </div>
                  );
                })}
                {/* Typing blinking indicator */}
                <div className="flex items-center gap-1 pl-7.5">
                  <span className="w-1.5 h-3.5 bg-brand-secondary animate-pulse"></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
