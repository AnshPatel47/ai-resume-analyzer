"use client";

import Link from "next/link";
import { UploadCloud, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: UploadCloud,
    title: "Upload Your Resume",
    description: "Upload your PDF resume document. Our secure parser extracts formatted text instantly.",
    highlight: "PDF Support",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Paste Target Job Post",
    description: "Paste the job description for the position you want. The AI analyzes requirements side by side.",
    highlight: "Deep AI Matching",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Get Actionable Insights",
    description: "Receive your ATS match percentage, missing key terms, and bulleted recommendations.",
    highlight: "Instant Scoring",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-t border-border/60 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal direction="up">
          <div className="mb-16 text-center">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              SIMPLE 3-STEP PROCESS
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              From upload to interview prep in 3 simple steps
            </h2>
            <p className="mt-2 text-muted-foreground">
              No complicated setups. Get detailed analysis in seconds.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.number} direction="up" delay={0.15 * idx}>
              <div className="relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-display text-3xl font-black text-primary/30">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/40 pt-3">
                  <span className="inline-block rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    ✓ {step.highlight}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.5} className="mt-12 text-center">
          <Button size="lg" className="rounded-full px-8 shadow-md" asChild>
            <Link href="/how-it-works">
              Read Detailed Workflow Guide <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}