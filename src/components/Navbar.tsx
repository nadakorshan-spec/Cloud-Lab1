"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-brand-dark/80 backdrop-blur-md border-b border-white/10"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary p-[1px] shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-105">
            <div className="flex items-center justify-center w-full h-full rounded-[11px] bg-brand-dark">
              <Cpu className="w-5 h-5 text-brand-secondary group-hover:text-brand-primary transition-colors" />
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight text-gradient">
            Aether<span className="text-brand-secondary font-medium">Flow</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Interactive Demo
          </a>
          <a
            href="#roi"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            ROI Calculator
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#demo"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Sign In
          </a>
          <a
            href="#demo"
            className="relative inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-semibold tracking-wide text-white overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-300 group-hover:opacity-90"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10 flex items-center gap-1">
              Launch App
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs z-40 bg-brand-dark/95 backdrop-blur-xl border-l border-white/10 p-6 pt-24 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6">
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#demo"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
          >
            Interactive Demo
          </a>
          <a
            href="#roi"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
          >
            ROI Calculator
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
          >
            Pricing
          </a>
          <hr className="border-white/10 my-2" />
          <a
            href="#demo"
            onClick={() => setIsOpen(false)}
            className="text-base font-medium text-slate-300 hover:text-white transition-colors"
          >
            Sign In
          </a>
          <a
            href="#demo"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-1.5 w-full py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-sm font-semibold text-white text-center"
          >
            Launch App
            <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
