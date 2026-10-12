import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AetherFlow AI | Next-Gen AI Workflow Automation",
  description: "Orchestrate, code, test, and deploy with an autonomous network of AI agents. Maximize productivity and eliminate operational friction.",
  keywords: ["AI automation", "nextjs", "typescript", "workflow orchestrator", "AI agents", "devops", "SaaS landing page"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#030014] text-slate-100 font-sans selection:bg-brand-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
