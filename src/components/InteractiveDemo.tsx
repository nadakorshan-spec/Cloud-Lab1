"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, RotateCcw, GitCommit, ShieldAlert, GitPullRequest, Code, TestTube, CheckCircle2, ChevronRight, Server, PlayCircle, Loader2 } from "lucide-react";

type TriggerType = "commit" | "api_error" | "security_patch" | "pr";

interface Step {
  id: number;
  label: string;
  agent: string;
  description: string;
  status: "idle" | "running" | "completed" | "error";
  duration: number;
}

export default function InteractiveDemo() {
  const [activeTrigger, setActiveTrigger] = useState<TriggerType>("commit");
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(-1);
  const [logs, setLogs] = useState<string[]>([]);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  const initialSteps: Step[] = [
    {
      id: 1,
      label: "Intake & Code Diagnostics",
      agent: "AetherOrchestrator",
      description: "Analyzing commits, dependencies, and syntax structures.",
      status: "idle",
      duration: 2000,
    },
    {
      id: 2,
      label: "Code Synthesizer & Fixer",
      agent: "AetherCoder",
      description: "Resolving conflicts, fixing syntax bugs, or updating modules.",
      status: "idle",
      duration: 2500,
    },
    {
      id: 3,
      label: "Automated Verification & Heal",
      agent: "AetherTester",
      description: "Running integration pipelines and self-repairing broken test specs.",
      status: "idle",
      duration: 2500,
    },
    {
      id: 4,
      label: "Continuous Canary Deploy",
      agent: "AetherDeployer",
      description: "Pushing production build and checking runtime health telemetry.",
      status: "idle",
      duration: 2000,
    },
  ];

  const [steps, setSteps] = useState<Step[]>(initialSteps);

  const triggerConfig = {
    commit: {
      name: "GitHub Commit",
      desc: "Simulate a standard code push triggering code validation and tests.",
      icon: GitCommit,
      logs: [
        "📥 Event received: GitHub push event on branch 'main'.",
        "🔍 Codebase modified: 12 lines inserted, 4 lines deleted in 'src/app/page.tsx'.",
        "🤖 AetherOrchestrator: Evaluating modified files against AST schema...",
        "🤖 AetherCoder: Running style checks. Found spacing variance on line 12. Corrected.",
        "🧪 AetherTester: Setting up test environment with coverage metrics...",
        "🧪 AetherTester: 8/8 unit test specs passed. Code coverage at 98.4%.",
        "🚀 AetherDeployer: Building optimized production bundle...",
        "🚀 AetherDeployer: Hosting preview URL at https://preview-aether.vercel.app",
        "🎉 Workflow succeeded in 8.5s! Build is live."
      ]
    },
    api_error: {
      name: "API Alert Response",
      desc: "Simulate an automated trigger response to a high latency or API warning.",
      icon: ShieldAlert,
      logs: [
        "📥 Event received: Datadog Webhook trigger: API Error Rate > 5%.",
        "🤖 AetherOrchestrator: Initiating auto-diagnosis on file '/api/checkout/route.ts'...",
        "🔍 Root cause: Null-pointer error under high request volumes inside currency converter helper.",
        "🤖 AetherCoder: Synthesizing fix. Injecting safe fallback values and try-catch bounds.",
        "🧪 AetherTester: Initiating performance & load test suite with mock client load...",
        "🧪 AetherTester: Simulated load of 1,000 req/sec completed. Success Rate: 100.0%.",
        "🚀 AetherDeployer: Preparing rolling hotfix deploy...",
        "🚀 AetherDeployer: Production traffic redirected to hotfix cluster v2.10.4-hot.",
        "🎉 Workflow succeeded! API Error Rate returned to 0.01%."
      ]
    },
    security_patch: {
      name: "Vulnerability Advisory",
      desc: "Simulate automatic dependency patch on discovery of CVE alerts.",
      icon: GitPullRequest,
      logs: [
        "📥 Event received: Dependabot Alert: CVE-2026-9042 critical advisory inside 'next-auth'.",
        "🤖 AetherOrchestrator: Fetching dependency graph tree structure...",
        "🔍 Vulnerable path: my-app -> next-auth@5.0.0-beta.19 (Vulnerable to session fixation).",
        "🤖 AetherCoder: Running upgrade analyzer. Rewriting Auth config options matching next-auth@5.0.0-beta.25.",
        "🧪 AetherTester: Running full end-to-end integration and login authentication tests...",
        "🧪 AetherTester: Authentication flow verification passed successfully.",
        "🚀 AetherDeployer: Deploying patched security build...",
        "🎉 Workflow succeeded! CVE-2026-9042 resolved. Pull request created and auto-merged."
      ]
    },
    pr: {
      name: "Pull Request Review",
      desc: "Simulate AI reviewing a new PR, adding comments, and requesting edits.",
      icon: Code,
      logs: [
        "📥 Event received: Pull Request #412 opened: 'Feature/user-profile-cards'.",
        "🤖 AetherOrchestrator: Fetching code changes for review...",
        "🤖 AetherCoder: Reviewing styling components. Found unused import on line 4, and lack of alt text on profile image.",
        "🤖 AetherCoder: Appending feedback suggestions directly onto PR file review interface.",
        "🤖 AetherCoder: Committing auto-corrections: Cleaned imports & generated appropriate descriptive image alt tag.",
        "🧪 AetherTester: Triggering build preview and rendering layout snapshots...",
        "🎉 Workflow completed! PR is approved, fully tested, and ready for lead reviewer review."
      ]
    }
  };

  const handleStart = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setProgress(0);
    setLogs([]);
    
    // Reset steps
    setSteps(initialSteps.map(s => ({ ...s, status: "idle" })));

    const activeLogs = triggerConfig[activeTrigger].logs;
    let logIdx = 0;
    
    // Animate steps one by one
    for (let i = 0; i < initialSteps.length; i++) {
      setCurrentStepIdx(i);
      setSteps((prev) =>
        prev.map((s, idx) => (idx === i ? { ...s, status: "running" } : s))
      );

      // Add a couple logs matching the step
      const logsPerStep = Math.ceil(activeLogs.length / initialSteps.length);
      for (let j = 0; j < logsPerStep; j++) {
        if (logIdx < activeLogs.length) {
          setLogs((prev) => [...prev, activeLogs[logIdx]]);
          logIdx++;
          await new Promise((r) => setTimeout(r, 600));
        }
      }

      await new Promise((r) => setTimeout(r, initialSteps[i].duration - 600));

      setSteps((prev) =>
        prev.map((s, idx) => (idx === i ? { ...s, status: "completed" } : s))
      );
      setProgress((prev) => prev + 25);
    }

    // Wrap up logs
    while (logIdx < activeLogs.length) {
      setLogs((prev) => [...prev, activeLogs[logIdx]]);
      logIdx++;
      await new Promise((r) => setTimeout(r, 500));
    }

    setIsRunning(false);
    setCurrentStepIdx(-1);
  };

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  // Clean reset when switching triggers
  useEffect(() => {
    setSteps(initialSteps);
    setLogs([]);
    setIsRunning(false);
    setProgress(0);
    setCurrentStepIdx(-1);
  }, [activeTrigger]);

  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient mb-4">
            Watch the Agent Network Execute in Real-Time
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose a trigger event below and witness our specialized AI agents collaborate, resolve, verify, and deploy changes autonomously.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Trigger Selection & Description */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-wider text-brand-secondary uppercase">
                1. Choose a Simulator Trigger
              </span>
              
              {/* Trigger Cards */}
              <div className="grid grid-cols-1 gap-3">
                {(Object.keys(triggerConfig) as TriggerType[]).map((key) => {
                  const item = triggerConfig[key];
                  const Icon = item.icon;
                  const isActive = activeTrigger === key;
                  return (
                    <button
                      key={key}
                      disabled={isRunning}
                      onClick={() => setActiveTrigger(key)}
                      className={`text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 ${
                        isActive
                          ? "bg-brand-primary/10 border-brand-primary/50 shadow-[0_0_20px_rgba(139,92,246,0.15)] text-white"
                          : "bg-white/5 border-white/5 text-slate-400 hover:bg-white/8 hover:text-slate-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${
                        isActive ? "bg-brand-primary text-white" : "bg-white/5 text-slate-300"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-100">{item.name}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-normal">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Run Button */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={handleStart}
                disabled={isRunning}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold transition-all text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-95 shadow-[0_4px_25px_rgba(139,92,246,0.25)] active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {isRunning ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Simulating Agent Network...
                  </>
                ) : (
                  <>
                    <PlayCircle className="w-5 h-5" />
                    Trigger Network Pipeline
                  </>
                )}
              </button>
              {logs.length > 0 && !isRunning && (
                <button
                  onClick={() => {
                    setSteps(initialSteps);
                    setLogs([]);
                    setProgress(0);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-white/15 text-slate-400 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset Simulator
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Visualizer Pipeline & Terminal Console */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Visualizer Pipeline Nodes */}
            <div className="glassmorphism rounded-2xl p-6 flex flex-col justify-between min-h-[220px]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  2. Visual Agent Orchestration Pipeline
                </span>
                <span className="text-xs font-mono text-brand-secondary font-semibold">
                  Progress: {progress}%
                </span>
              </div>

              {/* Steps Node Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                {steps.map((step, idx) => {
                  const isPending = step.status === "idle";
                  const isCurrent = step.status === "running";
                  const isDone = step.status === "completed";

                  let nodeBorder = "border-white/10";
                  let nodeBg = "bg-white/5";
                  let titleColor = "text-slate-500";
                  let iconBg = "bg-slate-800 text-slate-600";

                  if (isCurrent) {
                    nodeBorder = "border-brand-primary border-beam-container shadow-[0_0_15px_rgba(139,92,246,0.2)]";
                    nodeBg = "bg-brand-primary/10";
                    titleColor = "text-slate-100";
                    iconBg = "bg-brand-primary text-white";
                  } else if (isDone) {
                    nodeBorder = "border-emerald-500/40";
                    nodeBg = "bg-emerald-500/5";
                    titleColor = "text-slate-300";
                    iconBg = "bg-emerald-500 text-white";
                  }

                  const StepIcon = idx === 0 ? GitCommit : idx === 1 ? Code : idx === 2 ? TestTube : Server;

                  return (
                    <div
                      key={step.id}
                      className={`relative p-4 rounded-xl border ${nodeBorder} ${nodeBg} transition-all duration-300 flex flex-col gap-3 min-h-[140px]`}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`p-2 rounded-lg shrink-0 ${iconBg} transition-all duration-300`}>
                          {isCurrent ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : isDone ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <StepIcon className="w-4 h-4" />
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">Node 0{step.id}</span>
                      </div>
                      
                      <div>
                        <h5 className={`text-xs font-bold leading-snug ${titleColor}`}>
                          {step.label}
                        </h5>
                        <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Small line to next node (desktop only) */}
                      {idx < 3 && (
                        <div className="hidden md:flex items-center justify-center absolute top-1/2 -right-3.5 z-20 text-slate-700 pointer-events-none">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Global Progress Bar */}
              <div className="w-full bg-slate-950 rounded-full h-2 mt-6 overflow-hidden border border-white/5">
                <div
                  className="bg-gradient-to-r from-brand-primary via-purple-500 to-brand-secondary h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Live Terminal Log */}
            <div className="glassmorphism rounded-2xl overflow-hidden flex flex-col h-[260px] bg-black/45">
              <div className="h-10 border-b border-white/10 px-4 flex items-center justify-between bg-black/30 shrink-0">
                <span className="text-xs font-mono text-slate-400">Agent Connection Logs</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              
              <div className="flex-1 p-4.5 font-mono text-xs overflow-y-auto text-left space-y-2 select-none">
                {logs.length === 0 ? (
                  <div className="h-full flex items-center justify-center flex-col gap-2 text-slate-500">
                    <Play className="w-5 h-5 text-slate-600" />
                    <span>Awaiting trigger pipeline execution...</span>
                  </div>
                ) : (
                  logs.map((log, idx) => {
                    const isSuccess = log.includes("succeeded") || log.includes("✔") || log.includes("🎉");
                    const isWarning = log.includes("Vulnerable") || log.includes("Error") || log.includes("Alert");
                    
                    let textColor = "text-slate-400";
                    if (isSuccess) textColor = "text-emerald-400 font-medium";
                    else if (isWarning) textColor = "text-amber-400 font-medium";

                    return (
                      <div key={idx} className="animate-fadeIn">
                        <span className="text-slate-600 select-none mr-2">›</span>
                        <span className={textColor}>{log}</span>
                      </div>
                    );
                  })
                )}
                <div ref={consoleEndRef} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
