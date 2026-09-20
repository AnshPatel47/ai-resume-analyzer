import { Analysis } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Award, Tag, Lightbulb, CheckCircle2 } from "lucide-react";

export function AnalysisResult({ analysis }: { analysis: Analysis }) {
  const score = analysis.matchScore;

  return (
    <Card className="overflow-hidden border border-border/80 bg-card/60 shadow-2xl backdrop-blur-xl transition-all duration-300">
      <CardHeader className="border-b border-border/50 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-bold tracking-tight text-foreground flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
            </div>
            AI Match Analysis Report
          </CardTitle>
          <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-500 ring-1 ring-emerald-500/30">
            Analysis Ready
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Score gauge section */}
        <div className="space-y-3 rounded-2xl border border-border/80 bg-accent/20 p-4 sm:p-5 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Overall ATS Score</span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display text-4xl font-extrabold tracking-tight text-foreground font-mono">
                  {score}%
                </span>
                <span className="text-xs text-muted-foreground">/ 100</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-500">
              <Award className="h-4 w-4" />
              <span>{score >= 80 ? "Strong Compatibility" : score >= 60 ? "Moderate Fit" : "Needs Alignment"}</span>
            </div>
          </div>

          <Progress value={score} className="h-3 rounded-full bg-secondary" />
        </div>

        {/* Missing Keywords section */}
        {analysis.missingKeywords.length > 0 && (
          <div className="space-y-3 rounded-2xl border border-primary/20 bg-primary/5 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-bold text-foreground">Missing Target Keywords</h4>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {analysis.missingKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center rounded-lg border border-primary/20 bg-card/80 px-2.5 py-1 text-xs font-semibold text-primary shadow-sm"
                >
                  + {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Suggestions */}
        {analysis.suggestions.length > 0 && (
          <div className="space-y-3 rounded-2xl border border-border/80 bg-accent/20 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              <h4 className="text-sm font-bold text-foreground">AI Optimization Advice</h4>
            </div>

            <div className="space-y-2 pt-1">
              {analysis.suggestions.map((suggestion, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/70 p-3 text-xs leading-relaxed text-muted-foreground shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                  <span>{suggestion}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}