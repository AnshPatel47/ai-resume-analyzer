"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Sparkles, CheckCircle2, Shield, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FadeImage } from "@/components/ui/FadeImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36 sm:pt-44 lg:pt-48">
      {/* Background radial gradient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-full max-w-6xl -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/15 via-purple-500/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI-POWERED RESUME ANALYZER</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl sm:leading-tight">
            See exactly where your resume falls short &{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              land more interviews.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Upload your resume, paste any job description, and get an instant, context-aware match score with specific, actionable skill gap recommendations.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" asChild>
              <Link href="/register">
                Get started free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 backdrop-blur-sm" asChild>
              <Link href="/features">Explore Features</Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> No credit card required
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-amber-500" /> Analysis in under 10 seconds
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-blue-500" /> 100% Private & Encrypted
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Hero Showcase Image & Interactive HUD Card */}
      <div className="mx-auto mt-16 max-w-5xl">
        <ScrollReveal direction="up" delay={0.6} scale={true}>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Visual Hero Dashboard Image with Fade Effect */}
            <div className="lg:col-span-7">
              <FadeImage
                src="/images/hero-ai-analyzer.png"
                alt="AI Resume Match Analyzer Dashboard Mockup"
                priority={true}
                glow={true}
              />
            </div>

            {/* Interactive Live Preview Mockup Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border/80 bg-card/80 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-primary/50">
                <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Match Score</span>
                    <h4 className="text-sm font-semibold text-foreground">Senior Full Stack Engineer</h4>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-lg font-bold text-emerald-500 ring-1 ring-emerald-500/30">
                    88%
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="text-muted-foreground">ATS Compatibility</span>
                      <span className="font-semibold text-emerald-500 font-mono">Strong Fit</span>
                    </div>
                    <Progress value={88} className="h-2.5 bg-secondary" />
                  </div>

                  <div className="rounded-xl bg-secondary/50 p-3 text-xs">
                    <p className="font-medium text-foreground mb-1.5">Missing Keywords Detected:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Docker", "GraphQL", "AWS Architecture", "CI/CD"].map((kw) => (
                        <span
                          key={kw}
                          className="rounded-md border border-primary/20 bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary"
                        >
                          + {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs text-muted-foreground">
                    <p className="font-semibold text-emerald-600 dark:text-emerald-400">💡 Top Recommendation:</p>
                    <p className="mt-1 leading-relaxed">
                      Highlight experience containerizing Node.js applications to boost match score to 95%+.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}