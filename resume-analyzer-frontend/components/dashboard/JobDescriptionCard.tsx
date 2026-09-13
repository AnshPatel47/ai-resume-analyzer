"use client";

import { useState } from "react";
import { useCreateAnalysis } from "@/hooks/useResumeAnalysis";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Analysis } from "@/types";

interface JobDescriptionCardProps {
  resumeId: string | null;
  onAnalysisComplete: (analysis: Analysis) => void;
}

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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Paste the job description</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Paste the full job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows={8}
          disabled={!resumeId}
        />
        <Button
          onClick={handleAnalyze}
          disabled={!resumeId || !jobDescription.trim() || isPending}
          className="w-full"
        >
          {isPending ? "Analyzing..." : "Analyze resume"}
        </Button>
        {!resumeId && (
          <p className="text-xs text-muted-foreground">Upload a resume first to enable analysis.</p>
        )}
      </CardContent>
    </Card>
  );
}