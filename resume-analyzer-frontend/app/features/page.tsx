"use client";

import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FadeImage } from "@/components/ui/FadeImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sparkles,
  Target,
  BarChart3,
  BrainCircuit,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const detailedFeatures = [
  {
    icon: BrainCircuit,
    title: "Multimodal Gemini AI Engine",
    description:
      "Unlike basic keyword scrapers, our engine uses advanced LLM semantics to evaluate your career accomplishments against the exact context and nuance required by hiring managers.",
    points: [
      "Semantic understanding of role titles and experience levels",
      "Action-verb strength and impact scoring",
      "Contextual synonym recognition (e.g. React.js = Frontend Web)",
    ],
  },
  {
    icon: Target,
    title: "ATS Keyword & Skill Gap Matrix",
    description:
      "Applicant Tracking Systems filter out up to 75% of resumes. Our gap matrix identifies critical hard skills, software tools, and certifications missing from your uploaded resume.",
    points: [
      "Categorized into Critical, Recommended, and Bonus keywords",
      "Exact placement advice for work history and skills sections",
      "Real-time keyword frequency comparison",
    ],
  },
  {
    icon: BarChart3,
    title: "Granular Match Score & Recommendations",
    description:
      "Receive an objective 0-100% score accompanied by step-by-step instructions on how to raise your score before submitting your application.",
    points: [
      "Visual ATS readiness score gauge",
      "Prioritized list of top high-impact edits",
      "Formatting & readability checks for standard resume parsers",
    ],
  },
  {
    icon: Lock,
    title: "Bank-Grade Encryption & Data Privacy",
    description:
      "Your uploaded documents and personal information are treated with maximum security. We never sell your data or use your resumes to train public models.",
    points: [
      "JWT user authentication and authorization",
      "Encrypted cloud document storage",
      "One-click complete document deletion",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      <main className="px-6 pb-24 pt-36 sm:pt-44">
        {/* Features Page Hero */}
        <section className="mx-auto max-w-5xl text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>POWERFUL FEATURES</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need to build an{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                ATS-Optimized
              </span>{" "}
              resume
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Discover how our intelligent matching system analyzes your experience, pinpoints keyword gaps, and crafts winning job applications.
            </p>
          </ScrollReveal>

          {/* Hero Feature Content Image with Fade Effect */}
          <div className="mx-auto mt-14 max-w-4xl">
            <ScrollReveal direction="up" delay={0.4} scale={true}>
              <FadeImage
                src="/images/features-deep-dive.png"
                alt="AI Resume Analysis Features Dashboard"
                priority={true}
                glow={true}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Detailed Feature Modules Grid */}
        <section className="mx-auto mt-28 max-w-6xl">
          <ScrollReveal direction="up">
            <div className="mb-16 text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Deep Dive into Core Capabilities
              </h2>
              <p className="mt-2 text-muted-foreground">
                Built specifically for job seekers in tech, business, and modern industries.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {detailedFeatures.map((feat, idx) => (
              <ScrollReveal key={feat.title} direction="up" delay={0.15 * idx}>
                <div className="group h-full rounded-2xl border border-border/70 bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feat.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                    {feat.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {feat.description}
                  </p>
                  <ul className="space-y-2.5 border-t border-border/50 pt-5">
                    {feat.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs font-medium text-foreground/90">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="mx-auto mt-28 max-w-5xl">
          <ScrollReveal direction="up" scale={true}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-purple-600 to-indigo-600 p-10 text-center text-white shadow-2xl">
              <div className="relative z-10 mx-auto max-w-2xl">
                <h3 className="font-display text-3xl font-extrabold sm:text-4xl">
                  Ready to test your resume?
                </h3>
                <p className="mt-3 text-white/80">
                  Join thousands of applicants who improved their ATS match score and landed interviews faster.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <Button size="lg" variant="secondary" className="rounded-full px-8 shadow-md" asChild>
                    <Link href="/register">
                      Create Free Account <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
