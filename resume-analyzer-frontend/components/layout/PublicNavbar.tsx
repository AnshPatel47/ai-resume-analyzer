"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sparkles, Menu, X, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
];

export function PublicNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: user } = useCurrentUser();

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-border/60 bg-background/80 px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-xl transition-all dark:shadow-white/5">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-4 w-4" />
          </div>
          <span>Resume<span className="text-primary">IQ</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-foreground font-semibold bg-accent/80 shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/40"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {user ? (
            <Button size="sm" asChild className="rounded-full shadow-sm">
              <Link href="/dashboard" className="flex items-center gap-1.5">
                <LayoutDashboard className="h-4 w-4" /> Dashboard
              </Link>
            </Button>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex rounded-full">
                <Link href="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild className="rounded-full shadow-sm">
                <Link href="/register">Sign up</Link>
              </Button>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border sm:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-16 inset-x-4 z-40 flex flex-col gap-3 rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur-2xl sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                pathname === link.href ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 border-t border-border pt-3 flex flex-col gap-2">
            {user ? (
              <Button asChild className="w-full justify-center rounded-xl">
                <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  <LayoutDashboard className="mr-2 h-4 w-4" /> Go to Dashboard
                </Link>
              </Button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" asChild className="w-full justify-center rounded-xl">
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
                </Button>
                <Button asChild className="w-full justify-center rounded-xl shadow-sm">
                  <Link href="/register" onClick={() => setMobileMenuOpen(false)}>Sign up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}