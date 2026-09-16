import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import { analyzeResumeWithAI } from "../services/ai.service";
import prisma from "../config/db";

export const createAnalysis = async (req: AuthRequest, res: Response) => {
  try {
    const { resumeId, jobDescription } = req.body;

    if (!resumeId || !jobDescription) {
      return res.status(400).json({ message: "resumeId and jobDescription are required" });
    }

    const resume = await prisma.resume.findUnique({ where: { id: resumeId } });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    const aiResult = await analyzeResumeWithAI(resume.extractedText, jobDescription);

    const analysis = await prisma.analysis.create({
      data: {
        resumeId,
        jobDescription,
        matchScore: aiResult.matchScore,
        missingKeywords: aiResult.missingKeywords,
        suggestions: aiResult.suggestions,
      },
    });

    return res.status(201).json({ message: "Analysis completed successfully", analysis });
  } catch (error) {
    console.error("Analysis error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAnalysisById = async (req: AuthRequest, res: Response) => {
  try {
    const id = req.params.id as string;
    const analysis = await prisma.analysis.findUnique({ where: { id } });

    if (!analysis) {
      return res.status(404).json({ message: "Analysis not found" });
    }

    return res.status(200).json({ analysis });
  } catch (error) {
    console.error("Get analysis error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};