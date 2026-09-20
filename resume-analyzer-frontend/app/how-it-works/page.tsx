"use client";

import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FadeImage } from "@/components/ui/FadeImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  UploadCloud,
  Cpu,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lightbulb,
} from "lucide-react";

const detailedSteps = [
  {
    step: "01",
    icon: UploadCloud,
    title: "Upload Your PDF Resume",
    description:
      "Simply upload your current resume in standard PDF format. Our system securely extracts text sections, work experience entries, skills lists, and education history while discarding layout noise.",
    details: [
      "Supports standard PDF documents",
      "Fast text extraction with zero document layout loss",
      "Confidential storage tied to your private account",
    ],
  },
  {
    step: "02",
    icon: Cpu,
    title: "Paste the Job Description",
    description:
      "Copy and paste the full job posting from LinkedIn, Indeed, or any company careers page. The AI reads both your resume and the job description simultaneously to assess true qualifications.",
    details: [
      "Works with any role across all industries",
      "Detects required vs preferred skills automatically",
      "Evaluates required years of experience and seniority expectations",
    ],
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Review Score & Missing Keywords",
    description:
      "Within seconds, receive a clear match percentage score, a categorized list of missing keywords (hard skills, tools, certifications), and high-impact sentence recommendations.",
    details: [
      "Clear percentage score breakdown",
      "One-click list of missing keywords to add to your resume",
      "Tailored bullet point suggestions to boost score",
    ],
  },
];

const proTips = [
  {
    title: "Use standard headings",
    desc: "Keep section titles simple like 'Work Experience', 'Education', and 'Skills' so ATS parsers recognize them instantly.",
  },
  {
    title: "Incorporate missing keywords naturally",
    desc: "Avoid keyword stuffing. Add missing skills directly into your work accomplishment bullets where relevant.",
  },
  {
    title: "Quantify your achievements",
    desc: "Use metrics and numbers (e.g. 'Increased speed by 35%') to demonstrate tangible impact.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      <main className="px-6 pb-24 pt-36 sm:pt-44">
        {/* Page Hero */}
        <section className="mx-auto max-w-5xl text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>STEP-BY-STEP WORKFLOW</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              How ResumeIQ transforms your{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Job Search Process
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              A simple, data-driven 3-step workflow designed to take the guesswork out of tailoring your resume for every application.
            </p>
          </ScrollReveal>

          {/* Workflow Graphic with Fade Effect */}
          <div className="mx-auto mt-14 max-w-4xl">
            <ScrollReveal direction="up" delay={0.4} scale={true}>
              <FadeImage
                src="/images/how-it-works-workflow.png"
                alt="AI Resume Matching Workflow Visual"
                priority={true}
                glow={true}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Detailed 3-Step Walkthrough */}
        <section className="mx-auto mt-28 max-w-5xl space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                The 3-Step Matching Process
              </h2>
              <p className="mt-2 text-muted-foreground">
                Follow these simple steps to optimize your resume for any position.
              </p>
            </div>
          </ScrollReveal>

          {detailedSteps.map((s, idx) => (
            <ScrollReveal key={s.step} direction="up" delay={0.1 * idx}>
              <div className="grid gap-8 items-center rounded-3xl border border-border/70 bg-card p-8 shadow-sm md:grid-cols-12 hover:border-primary/40 transition-all">
                <div className="md:col-span-3 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-border/60 pb-6 md:pb-0 md:pr-6">
                  <span className="font-display text-5xl font-black text-primary/25">
                    {s.step}
                  </span>
                  <div className="mt-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <s.icon className="h-7 w-7" />
                  </div>
                </div>

                <div className="md:col-span-9">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-border/40 pt-4">
                    {s.details.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>

        {/* Pro Tips Section */}
        <section className="mx-auto mt-28 max-w-5xl">
          <ScrollReveal direction="up">
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">Pro Tips for Maximum ATS Success</h3>
                  <p className="text-xs text-muted-foreground">Quick guidelines to keep in mind when updating your resume</p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {proTips.map((tip) => (
                  <div key={tip.title} className="rounded-2xl border border-border/60 bg-card p-5">
                    <h4 className="font-display text-sm font-bold text-foreground mb-1.5">{tip.title}</h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto mt-24 max-w-4xl text-center">
          <ScrollReveal direction="up">
            <h3 className="font-display text-3xl font-bold">Ready to analyze your resume?</h3>
            <p className="mt-3 text-muted-foreground">Get your instant match score in less than 10 seconds.</p>
            <div className="mt-6 flex justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 shadow-lg" asChild>
                <Link href="/register">
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
