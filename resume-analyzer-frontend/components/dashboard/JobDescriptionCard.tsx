"use client";

import { useState } from "react";
import { useCreateAnalysis } from "@/hooks/useResumeAnalysis";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Analysis } from "@/types";
import { Briefcase, Sparkles, Loader2, Wand2, Info } from "lucide-react";

interface JobDescriptionCardProps {
  resumeId: string | null;
  onAnalysisComplete: (analysis: Analysis) => void;
}

const SAMPLE_JOB = `We are looking for a Senior Full Stack Software Engineer to join our fast-growing engineering team.

Key Responsibilities:
- Design, build, and maintain scalable web applications using React, Next.js, and Node.js.
- Architect RESTful APIs and integrate PostgreSQL / MongoDB databases.
- Deploy services to AWS / Cloud infrastructure with Docker and CI/CD pipelines.
- Collaborate with cross-functional teams to deliver high quality code and feature releases.

Requirements:
- 4+ years of professional experience with JavaScript, TypeScript, React, and Node.js.
- Experience with Docker containerization, AWS, and Git version control.
- Strong understanding of REST APIs, database queries, and system design.`;

export function JobDescriptionCard({ resumeId, onAnalysisComplete }: JobDescriptionCardProps) {
  const [jobDescription, setJobDescription] = useState("");
  const { mutate: createAnalysis, isPending } = useCreateAnalysis();

  const handleAnalyze = () => {
    if (!resumeId || !jobDescription.trim()) return;
    createAnalysis(
      { resumeId, jobDescription },
      { onSuccess: (analysis) => onAnalysisComplete(analysis) }
    );
  };

  const handleFillSample = () => {
    setJobDescription(SAMPLE_JOB);
  };

  return (
    <Card className="overflow-hidden border border-border/80 bg-card/60 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-primary/40">
      <CardHeader className="border-b border-border/50 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-bold tracking-tight text-foreground flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Briefcase className="h-4 w-4" />
            </div>
            2. Job Description
          </CardTitle>
          <button
            type="button"
            onClick={handleFillSample}
            disabled={!resumeId}
            className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline disabled:opacity-50 transition-opacity"
          >
            <Wand2 className="h-3 w-3" /> Auto-fill Sample
          </button>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <div className="relative">
          <Textarea
            placeholder="Paste the full target job posting description here (roles, requirements, tech stack)..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={7}
            disabled={!resumeId}
            className="resize-none rounded-xl border-border/60 bg-background/50 p-4 text-sm focus-visible:ring-primary/40 leading-relaxed"
          />
          {jobDescription.length > 0 && (
            <span className="absolute bottom-3 right-3 text-[11px] font-medium text-muted-foreground bg-background/80 px-2 py-0.5 rounded-md border border-border/50">
              {jobDescription.length} chars
            </span>
          )}
        </div>

        {!resumeId ? (
          <div className="flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-600 dark:text-amber-400">
            <Info className="h-4 w-4 shrink-0" />
            <span>Upload a resume PDF in Step 1 to unlock instant AI analysis.</span>
          </div>
        ) : null}

        <Button
          onClick={handleAnalyze}
          disabled={!resumeId || !jobDescription.trim() || isPending}
          className="w-full rounded-xl py-5 shadow-lg shadow-primary/20 transition-all hover:shadow-primary/35 font-semibold text-sm"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing Skill Gaps & Match...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4 text-amber-300" /> Run AI Match Analysis
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}