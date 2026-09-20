import Link from "next/link";
import { Sparkles } from "lucide-react";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-5">
      {/* Brand panel — hidden on mobile, visible from lg breakpoint up */}
      <div className="relative hidden overflow-hidden bg-foreground text-background lg:col-span-2 lg:flex lg:flex-col lg:justify-between lg:p-12">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-background hover:opacity-90">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-4 w-4" />
          </div>
          <span>Resume<span className="text-primary">IQ</span></span>
        </Link>

        <div className="space-y-6">
          <p className="font-display text-3xl font-medium leading-tight">
            See exactly where your resume falls short.
          </p>

          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
  <p className="mb-3 text-xs text-background/50">Example analysis</p>
  <div className="flex items-center justify-between">
    <span className="text-sm text-background/70">Match score</span>
    <span className="font-display text-2xl font-semibold text-emerald">
      82%
    </span>
  </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[82%] rounded-full bg-emerald" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Node.js", "PostgreSQL"].map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-background/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-sm text-background/50">
          Upload once. Match against any job description.
        </p>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center px-6 py-12 lg:col-span-3">
        <div className="w-full max-w-sm">
          {/* Mobile-only compact brand mark */}
          <Link href="/" className="mb-8 inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground lg:hidden hover:opacity-90">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>
            <span>Resume<span className="text-primary">IQ</span></span>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}