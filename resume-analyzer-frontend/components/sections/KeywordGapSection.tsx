"use client";

import { useAnalysisQuery } from "@/hooks/useAnalysisQuery";

export function KeywordGapSection({ analysisId }: { analysisId: string }) {
  const { data: analysis } = useAnalysisQuery(analysisId);

  if (analysis.missingKeywords.length === 0) return null;

  return (
    <div>
      <p className="mb-2 text-sm font-medium">Missing keywords</p>
      <div className="flex flex-wrap gap-2">
        {analysis.missingKeywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded border border-border bg-secondary px-2 py-1 text-xs"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}