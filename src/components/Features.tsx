import React from "react";
import { Network, Database, Zap, HeartPulse, ShieldCheck, Terminal } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Network,
      title: "Multi-Agent Orchestration",
      description: "A network of specialized AI agents that collaborate, review, and double-check each other's code to minimize syntax or architectural regressions.",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: Database,
      title: "Context Synthesis Engine",
      description: "Agents automatically fetch relevant code signatures, TypeScript types, and dependency definitions to guarantee all generated code matches your project specs.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: HeartPulse,
      title: "Self-Healing Build Pipelines",
      description: "If a build or type check fails, AetherFlow interceptors catch the build trace, isolate the offending syntax, compile a solution, and re-run standard suites.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Real-Time Telemetry Diagnosis",
      description: "Identifies anomalies, latency spikes, and server errors in production logs, mapping exceptions back to the exact code files and auto-assigning fix runs.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: ShieldCheck,
      title: "Automated Security Patching",
      description: "Monitors security feeds and automatically updates package dependencies. Resolves CVEs by applying breaking changes fixes, ensuring all test specs pass.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Terminal,
      title: "Cross-Platform Orchestration",
      description: "Interact with the orchestrator from where you already work. Integrated Slack alerts, GitHub Action steps, pull-request reviews, and a premium CLI client.",
      gradient: "from-cyan-500 to-indigo-500",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[40rem] h-[40rem] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-wider text-brand-secondary uppercase">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient mt-3 mb-4">
            Autonomous Systems Built for Developers
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Say goodbye to boilerplate, flaky integrations, and late-night hotfix releases. AetherFlow introduces a complete system of agent intelligence.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-[1px] bg-white/5 transition-all duration-300 hover:bg-gradient-to-tr hover:from-brand-primary/30 hover:to-brand-secondary/30"
              >
                <div className="glassmorphism rounded-[15px] p-8 h-full flex flex-col justify-between hover:bg-black/50 transition-colors">
                  <div className="space-y-6">
                    {/* Glowing Icon Container */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${feature.gradient} shadow-[0_0_15px_rgba(255,255,255,0.05)] text-white group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="space-y-2.5">
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-brand-secondary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle link indicator */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs font-semibold text-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn technology stack</span>
                    <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">→</span>
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
