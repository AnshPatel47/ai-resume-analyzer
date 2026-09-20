"use client";

import { useAnalysisQuery } from "@/hooks/useAnalysisQuery";
import { Tag, Copy, Check } from "lucide-react";
import { useState } from "react";

export function KeywordGapSection({ analysisId }: { analysisId: string }) {
  const { data: analysis } = useAnalysisQuery(analysisId);
  const [copied, setCopied] = useState(false);

  if (!analysis?.missingKeywords || analysis.missingKeywords.length === 0) return null;

  const handleCopyKeywords = () => {
    navigator.clipboard.writeText(analysis.missingKeywords.join(", "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3 rounded-2xl border border-primary/20 bg-primary/5 p-5 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Tag className="h-3.5 w-3.5" />
          </div>
          <h4 className="text-sm font-bold text-foreground">Missing Keywords Detected</h4>
        </div>
        <button
          onClick={handleCopyKeywords}
          className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline transition-all"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied!" : "Copy all"}
        </button>
      </div>

      <p className="text-xs text-muted-foreground">
        Adding these target job terms to your bullet points will help clear ATS automated filters:
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        {analysis.missingKeywords.map((keyword) => (
          <span
            key={keyword}
            className="inline-flex items-center rounded-lg border border-primary/20 bg-card/80 px-2.5 py-1 text-xs font-semibold text-primary shadow-sm transition-all hover:scale-105"
          >
            + {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}