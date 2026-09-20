"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function LandingPage() {
  const { data: user, isLoading, isError } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user && !isError) {
      router.replace("/dashboard");
    }
  }, [isLoading, user, isError, router]);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <PublicNavbar />

      <main className="overflow-hidden">
        {/* Main Hero Section */}
        <Hero />

        {/* Live Social Proof Metrics Banner */}
        <section className="border-y border-border/50 bg-card/40 py-12 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal direction="up">
              <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                <div>
                  <div className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">99.8%</div>
                  <div className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">ATS Match Precision</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-extrabold text-emerald-500 sm:text-4xl">89%</div>
                  <div className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">Average Score Boost</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">Under 10s</div>
                  <div className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">Instant Analysis Speed</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-extrabold text-purple-500 sm:text-4xl">4.9 / 5</div>
                  <div className="mt-1 text-xs text-muted-foreground font-medium uppercase tracking-wider">User Satisfaction</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Summary Section */}
        <Features />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Final Conversion Call to Action Section */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal direction="up" scale={true}>
              <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-purple-500/10 to-accent/20 p-10 text-center shadow-2xl backdrop-blur-xl sm:p-16">
                <div className="relative z-10 mx-auto max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>GET STARTED TODAY</span>
                  </div>

                  <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                    Stop guessing. Start getting shortlisted.
                  </h2>

                  <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                    Transform your resume into a tailored, ATS-friendly application and stand out from hundreds of candidates.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="rounded-full px-8 shadow-xl shadow-primary/20" asChild>
                      <Link href="/register">
                        Analyze Your Resume Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Ambient glowing orb */}
                <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
