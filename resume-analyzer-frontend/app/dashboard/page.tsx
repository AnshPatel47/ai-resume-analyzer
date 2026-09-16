"use client";

import { useState, lazy } from "react";
import { ResumeUploadCard } from "@/components/dashboard/ResumeUploadCard";
import { JobDescriptionCard } from "@/components/dashboard/JobDescriptionCard";
import { SectionBoundary } from "@/components/SectionBoundary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Resume, Analysis } from "@/types";

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
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-semibold tracking-tight">
          Analyze your resume
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Upload a resume, paste a job description, and see exactly where it stands.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex gap-4">
            <span className="font-display text-sm font-semibold text-muted-foreground">01</span>
            <div className="flex-1">
              <ResumeUploadCard onUploaded={setResume} />
            </div>
          </div>

          <div className="flex gap-4">
            <span className="font-display text-sm font-semibold text-muted-foreground">02</span>
            <div className="flex-1">
              <JobDescriptionCard resumeId={resume?.id ?? null} onAnalysisComplete={setAnalysis} />
            </div>
          </div>
        </div>

        <div>
          {analysis ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <SectionBoundary>
                  <ScoreSection analysisId={analysis.id} />
                </SectionBoundary>
                <SectionBoundary>
                  <KeywordGapSection analysisId={analysis.id} />
                </SectionBoundary>
                <SectionBoundary>
                  <SuggestionsSection analysisId={analysis.id} />
                </SectionBoundary>
              </CardContent>
            </Card>
          ) : (
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-lg border border-dashed border-border p-8 text-center">
              <p className="text-sm text-muted-foreground">
                Your results will appear here once you analyze a resume.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}