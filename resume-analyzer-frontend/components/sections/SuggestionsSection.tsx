"use client";

import { useAnalysisQuery } from "@/hooks/useAnalysisQuery";
import { Lightbulb, CheckCircle } from "lucide-react";

export function SuggestionsSection({ analysisId }: { analysisId: string }) {
  const { data: analysis } = useAnalysisQuery(analysisId);

  if (!analysis?.suggestions || analysis.suggestions.length === 0) return null;

  return (
    <div className="space-y-3 rounded-2xl border border-border/80 bg-accent/20 p-5 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-500/10 text-amber-500">
          <Lightbulb className="h-3.5 w-3.5" />
        </div>
        <h4 className="text-sm font-bold text-foreground">Actionable AI Improvement Recommendations</h4>
      </div>

      <div className="space-y-2.5 pt-1">
        {analysis.suggestions.map((suggestion, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/70 p-3 text-xs leading-relaxed text-muted-foreground shadow-sm transition-all hover:border-primary/30 hover:text-foreground"
          >
            <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
            <span>{suggestion}</span>
          </div>
        ))}
      </div>
    </div>
  );
}