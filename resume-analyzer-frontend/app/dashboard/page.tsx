"use client";

import { useState, lazy, Suspense } from "react";
import { ResumeUploadCard } from "@/components/dashboard/ResumeUploadCard";
import { JobDescriptionCard } from "@/components/dashboard/JobDescriptionCard";
import { SectionBoundary } from "@/components/SectionBoundary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Resume, Analysis } from "@/types";
import { Sparkles, FileSearch, ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";

const ScoreSection = lazy(() =>
  import("@/components/sections/ScoreSection").then((m) => ({ default: m.ScoreSection }))
);
const KeywordGapSection = lazy(() =>
  import("@/components/sections/KeywordGapSection").then((m) => ({ default: m.KeywordGapSection }))
);
const SuggestionsSection = lazy(() =>
  import("@/components/sections/SuggestionsSection").then((m) => ({ default: m.SuggestionsSection }))
);

export default function DashboardPage() {
  const [resume, setResume] = useState<Resume | null>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  return (
    <div className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      {/* Background radial gradient glow matching Home page */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-full max-w-6xl -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/15 via-purple-500/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl">
        {/* Workspace Header Banner */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-md mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI RESUME MATCH WORKSPACE</span>
            </div>

            <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Optimize Your Resume &{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Beat ATS Filters.
              </span>
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Upload your resume PDF, paste your target job description, and get instant skill gap analysis with actionable suggestions.
            </p>

            {/* Workflow step indicators */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 border transition-all ${resume ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-500 font-bold" : "border-border bg-accent/30"}`}>
                <CheckCircle2 className="h-3.5 w-3.5" /> Step 1: Upload Resume
              </span>
              <ArrowRight className="h-3 w-3 text-muted-foreground/60 hidden sm:inline" />
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 border transition-all ${analysis ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-500 font-bold" : "border-border bg-accent/30"}`}>
                <CheckCircle2 className="h-3.5 w-3.5" /> Step 2: Target Job Description
              </span>
              <ArrowRight className="h-3 w-3 text-muted-foreground/60 hidden sm:inline" />
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 border border-border bg-accent/30">
                <BarChart3 className="h-3.5 w-3.5" /> Step 3: Match Insights
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Dashboard Grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Inputs Column */}
          <div className="space-y-6 lg:col-span-6">
            <ScrollReveal direction="up" delay={0.2}>
              <ResumeUploadCard onUploaded={setResume} />
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <JobDescriptionCard resumeId={resume?.id ?? null} onAnalysisComplete={setAnalysis} />
            </ScrollReveal>
          </div>

          {/* Output Results Column */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="up" delay={0.4} scale={true}>
              {analysis ? (
                <Card className="overflow-hidden border border-border/80 bg-card/60 shadow-2xl backdrop-blur-xl transition-all duration-300">
                  <CardHeader className="border-b border-border/50 pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-bold tracking-tight text-foreground flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Sparkles className="h-4 w-4" />
                        </div>
                        Match Analysis Report
                      </CardTitle>
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        Live Results
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <Suspense fallback={<div className="h-24 animate-pulse rounded-2xl bg-accent/40" />}>
                      <SectionBoundary>
                        <ScoreSection analysisId={analysis.id} />
                      </SectionBoundary>
                    </Suspense>

                    <Suspense fallback={<div className="h-24 animate-pulse rounded-2xl bg-accent/40" />}>
                      <SectionBoundary>
                        <KeywordGapSection analysisId={analysis.id} />
                      </SectionBoundary>
                    </Suspense>

                    <Suspense fallback={<div className="h-24 animate-pulse rounded-2xl bg-accent/40" />}>
                      <SectionBoundary>
                        <SuggestionsSection analysisId={analysis.id} />
                      </SectionBoundary>
                    </Suspense>
                  </CardContent>
                </Card>
              ) : (
                <div className="group relative overflow-hidden rounded-3xl border border-dashed border-border/80 bg-card/40 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-card/60">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner mb-4 transition-transform group-hover:scale-110">
                    <FileSearch className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Ready for AI Match Analysis
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground">
                    Your detailed ATS compatibility score, missing keyword gaps, and tailored suggestions will render right here.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    <span className="rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] text-muted-foreground font-mono">
                      ✓ Score Gauge (0-100%)
                    </span>
                    <span className="rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] text-muted-foreground font-mono">
                      ✓ Keyword Gap Highlights
                    </span>
                    <span className="rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] text-muted-foreground font-mono">
                      ✓ Bullet Optimization
                    </span>
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}