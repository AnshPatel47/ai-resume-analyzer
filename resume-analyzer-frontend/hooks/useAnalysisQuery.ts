import { useSuspenseQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Analysis } from "@/types";

export function useAnalysisQuery(analysisId: string) {
  return useSuspenseQuery<Analysis>({
    queryKey: ["analysis", analysisId],
    queryFn: async () => {
      const response = await api.get(`/analysis/${analysisId}`);
      return response.data.analysis;
    },
  });
}