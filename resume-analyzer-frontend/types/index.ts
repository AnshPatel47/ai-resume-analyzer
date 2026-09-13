export interface Resume {
  id: string;
  fileName: string;
  fileUrl: string | null;
  extractedText: string;
  createdAt: string;
}

export interface Analysis {
  id: string;
  resumeId: string;
  jobDescription: string;
  matchScore: number;
  missingKeywords: string[];
  suggestions: string[];
  createdAt: string;
}