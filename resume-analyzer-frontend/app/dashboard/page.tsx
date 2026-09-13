"use client";

import { useState } from "react";
import { ResumeUploadCard } from "@/components/dashboard/ResumeUploadCard";
import { JobDescriptionCard } from "@/components/dashboard/JobDescriptionCard";
import { AnalysisResult } from "@/components/dashboard/AnalysisResult";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Resume, Analysis } from "@/types";

export default function DashboardPage() {
  const [resume, setResume] = useState<Resume | null>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold">Dashboard</h1>
        <ThemeToggle />
      </div>

      <div className="space-y-6">
        <ResumeUploadCard onUploaded={setResume} />
        <JobDescriptionCard resumeId={resume?.id ?? null} onAnalysisComplete={setAnalysis} />
        {analysis && <AnalysisResult analysis={analysis} />}
      </div>
    </div>
  );
}