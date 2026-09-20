import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-display text-sm font-semibold tracking-tight">
          ResumeIQ
        </span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ResumeIQ. Built by Ansh Patel.
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <Link href="/login" className="hover:text-foreground">Log in</Link>
          <Link href="/register" className="hover:text-foreground">Sign up</Link>
        </div>
      </div>
    </footer>
  );
}