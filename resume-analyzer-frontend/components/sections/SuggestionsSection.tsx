"use client";

import { useAnalysisQuery } from "@/hooks/useAnalysisQuery";

export function SuggestionsSection({ analysisId }: { analysisId: string }) {
  const { data: analysis } = useAnalysisQuery(analysisId);

  return (
    <div>
      <p className="mb-2 text-sm font-medium">Suggestions</p>
      <ul className="space-y-2">
        {analysis.suggestions.map((suggestion, i) => (
          <li key={i} className="text-sm text-muted-foreground">
            • {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}