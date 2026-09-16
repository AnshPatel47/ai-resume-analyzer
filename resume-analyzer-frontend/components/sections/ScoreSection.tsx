"use client";

import { useAnalysisQuery } from "@/hooks/useAnalysisQuery";
import { Progress } from "@/components/ui/progress";

export function ScoreSection({ analysisId }: { analysisId: string }) {
  const { data: analysis } = useAnalysisQuery(analysisId);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Match score</span>
        <span className="font-display text-2xl font-semibold text-emerald">
          {analysis.matchScore}%
        </span>
      </div>
      <Progress value={analysis.matchScore} />
    </div>
  );
}