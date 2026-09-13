import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { toast } from "sonner";
import { Resume, Analysis } from "@/types";

export function useUploadResume() {
  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("resume", file);

      const response = await api.post<{ resume: Resume }>("/resumes/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data.resume;
    },
    onSuccess: () => {
      toast.success("Resume uploaded successfully");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Upload failed");
    },
  });
}

export function useCreateAnalysis() {
  return useMutation({
    mutationFn: async (payload: { resumeId: string; jobDescription: string }) => {
      const response = await api.post<{ analysis: Analysis }>("/analysis/create", payload);
      return response.data.analysis;
    },
    onSuccess: () => {
      toast.success("Analysis completed");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Analysis failed");
    },
  });
}