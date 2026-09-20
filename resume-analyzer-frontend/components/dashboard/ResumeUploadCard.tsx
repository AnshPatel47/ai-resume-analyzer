"use client";

import { useState } from "react";
import { useUploadResume } from "@/hooks/useResumeAnalysis";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Resume } from "@/types";
import { UploadCloud, FileText, CheckCircle2, X, Sparkles, Loader2 } from "lucide-react";

interface ResumeUploadCardProps {
  onUploaded: (resume: Resume) => void;
}

export function ResumeUploadCard({ onUploaded }: ResumeUploadCardProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const { mutate: uploadResume, isPending } = useUploadResume();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setIsUploaded(false);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    uploadResume(file, {
      onSuccess: (resume) => {
        setIsUploaded(true);
        onUploaded(resume);
      },
    });
  };

  const handleRemove = () => {
    setFile(null);
    setIsUploaded(false);
  };

  return (
    <Card className="overflow-hidden border border-border/80 bg-card/60 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-primary/40">
      <CardHeader className="border-b border-border/50 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-bold tracking-tight text-foreground flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileText className="h-4 w-4" />
            </div>
            1. Upload Resume
          </CardTitle>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">PDF format</span>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        {!file ? (
          <label
            htmlFor="resume-file"
            className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-border/80 bg-accent/20 p-8 text-center transition-all duration-200 hover:border-primary/60 hover:bg-accent/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110 shadow-sm">
              <UploadCloud className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Click to upload or drag & drop</p>
              <p className="mt-1 text-xs text-muted-foreground">PDF document up to 10MB</p>
            </div>
            <input
              id="resume-file"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        ) : (
          <div className="relative flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/5 p-4 transition-all">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <FileText className="h-5 w-5" />
              </div>
              <div className="truncate">
                <p className="truncate text-sm font-semibold text-foreground">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB • {isUploaded ? "Ready for match analysis" : "Selected"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {isUploaded && (
                <span className="flex items-center gap-1 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Uploaded
                </span>
              )}
              <button
                onClick={handleRemove}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                aria-label="Remove file"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        <Button
          onClick={handleUpload}
          disabled={!file || isPending || isUploaded}
          className="w-full rounded-xl py-5 shadow-md shadow-primary/15 transition-all hover:shadow-primary/25 font-semibold"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Uploading PDF...
            </>
          ) : isUploaded ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-400" /> Resume Uploaded Successfully
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" /> Upload & Save Resume
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}