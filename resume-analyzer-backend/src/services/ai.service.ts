import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

interface AnalysisResult {
  matchScore: number;
  missingKeywords: string[];
  suggestions: string[];
}

export const analyzeResumeWithAI = async (
  resumeText: string,
  jobDescription: string
): Promise<AnalysisResult> => {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite" });

  const prompt = `
You are an expert technical recruiter and resume reviewer.

Compare the following resume against the given job description.

Resume:
"""
${resumeText}
"""

Job Description:
"""
${jobDescription}
"""

Return ONLY a valid JSON object with this exact structure, no extra text:
{
  "matchScore": <number between 0 and 100>,
  "missingKeywords": [<array of important keywords/skills from the job description missing in the resume>],
  "suggestions": [<array of 3-5 specific, actionable improvement suggestions>]
}
`;

  const result = await model.generateContent(prompt);
  const responseText = result.response.text();

  const cleanedText = responseText.replace(/```json|```/g, "").trim();

  return JSON.parse(cleanedText) as AnalysisResult;
};