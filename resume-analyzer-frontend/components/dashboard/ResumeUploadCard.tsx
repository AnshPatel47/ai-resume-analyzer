"use client";

import { useState } from "react";
import { useUploadResume } from "@/hooks/useResumeAnalysis";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Resume } from "@/types";
import { Upload } from "lucide-react";

interface ResumeUploadCardProps {
  onUploaded: (resume: Resume) => void;
}

export function ResumeUploadCard({ onUploaded }: ResumeUploadCardProps) {
  const [file, setFile] = useState<File | null>(null);
  const { mutate: uploadResume, isPending } = useUploadResume();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const handleUpload = () => {
    if (!file) return;
    uploadResume(file, {
      onSuccess: (resume) => onUploaded(resume),
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Upload your resume</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <label
          htmlFor="resume-file"
          className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed border-border px-6 py-10 text-center hover:bg-accent"
        >
          <Upload className="h-6 w-6 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {file ? file.name : "Click to select a PDF resume"}
          </span>
          <input
            id="resume-file"
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        <Button onClick={handleUpload} disabled={!file || isPending} className="w-full">
          {isPending ? "Uploading..." : "Upload resume"}
        </Button>
      </CardContent>
    </Card>
  );
}