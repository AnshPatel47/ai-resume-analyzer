"use client";

import { useAnalysisQuery } from "@/hooks/useAnalysisQuery";
import { Progress } from "@/components/ui/progress";
import { Award, Zap, ShieldAlert, Sparkles } from "lucide-react";

export function ScoreSection({ analysisId }: { analysisId: string }) {
  const { data: analysis } = useAnalysisQuery(analysisId);
  const score = analysis?.matchScore ?? 0;

  const getTier = (val: number) => {
    if (val >= 80) return { label: "Excellent Match", color: "text-emerald-500", bg: "bg-emerald-500/10 border-emerald-500/30", icon: Award };
    if (val >= 60) return { label: "Moderate Match", color: "text-amber-500", bg: "bg-amber-500/10 border-amber-500/30", icon: Zap };
    return { label: "Needs Alignment", color: "text-rose-500", bg: "bg-rose-500/10 border-rose-500/30", icon: ShieldAlert };
  };

  const tier = getTier(score);
  const IconComponent = tier.icon;

  return (
    <div className="space-y-4 rounded-2xl border border-border/80 bg-accent/20 p-4 sm:p-5 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Overall Match Score
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-display text-4xl font-extrabold tracking-tight text-foreground font-mono">
              {score}%
            </span>
            <span className="text-xs text-muted-foreground">ATS Target Score: 85%+</span>
          </div>
        </div>

        <div className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold ${tier.bg} ${tier.color}`}>
          <IconComponent className="h-4 w-4" />
          <span>{tier.label}</span>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-medium text-muted-foreground">
          <span>Match Progress</span>
          <span className="font-semibold text-foreground">{score} / 100</span>
        </div>
        <Progress value={score} className="h-3 rounded-full bg-secondary" />
      </div>
    </div>
  );
}