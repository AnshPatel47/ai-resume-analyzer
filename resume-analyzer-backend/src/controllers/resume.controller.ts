import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import { extractTextFromPDF } from "../services/resumeParser.service";
import prisma from "../config/db";
import fs from "fs";

export const uploadResume = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required" });
    }

    const extractedText = await extractTextFromPDF(req.file.path);

    const resume = await prisma.resume.create({
      data: {
        userId: req.user!.id,
        fileName: req.file.originalname,
        extractedText,
      },
    });

    fs.unlinkSync(req.file.path);

    return res.status(201).json({ message: "Resume uploaded successfully", resume });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};