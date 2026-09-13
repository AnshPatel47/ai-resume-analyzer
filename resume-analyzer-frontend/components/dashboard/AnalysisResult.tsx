import { Analysis } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function AnalysisResult({ analysis }: { analysis: Analysis }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Analysis result</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Match score</span>
            <span className="font-display text-xl font-semibold text-emerald">
              {analysis.matchScore}%
            </span>
          </div>
          <Progress value={analysis.matchScore} />
        </div>

        {analysis.missingKeywords.length > 0 && (
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
        )}

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
      </CardContent>
    </Card>
  );
}