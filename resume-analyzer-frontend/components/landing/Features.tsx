"use client";

import Link from "next/link";
import { Sparkles, Target, ShieldCheck, ArrowUpRight, BarChart3 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";

const mainFeatures = [
  {
    icon: Sparkles,
    title: "Context-Aware AI Analysis",
    description:
      "Gemini AI reads your resume and job description side-by-side, understanding deep semantics beyond simple word matching.",
    badge: "Gemini Powered",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: Target,
    title: "Keyword & Skill Gap Detection",
    description:
      "Instantly spot essential skills, tools, and certifications listed in the job post that are missing from your resume.",
    badge: "Instant Scan",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Data Privacy",
    description:
      "Your documents remain strictly confidential, encrypted at rest, and protected by JWT authentication standard.",
    badge: "100% Secure",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: BarChart3,
    title: "Actionable Match Scoring",
    description:
      "Get a clear percentage breakdown showing ATS compatibility, experience alignment, and tailored improvement steps.",
    badge: "ATS Ready",
    color: "from-indigo-500/20 to-pink-500/20",
  },
];

export function Features() {
  return (
    <section id="features" className="relative border-t border-border/60 px-6 py-24 bg-accent/10">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal direction="up">
          <div className="mb-16 text-center">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              POWERFUL CAPABILITIES
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Engineered to get your resume past ATS screening
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Everything you need to optimize your application and double your callback rates.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mainFeatures.map((feature, idx) => (
            <ScrollReveal key={feature.title} direction="up" delay={0.1 * idx}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} border border-border/50`}>
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-[11px] font-semibold text-muted-foreground/80 uppercase tracking-wider">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="mb-2 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.4} className="mt-12 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-6 gap-2 border-primary/30 hover:bg-primary/5" asChild>
            <Link href="/features">
              Explore All Features & Deep Dives <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}