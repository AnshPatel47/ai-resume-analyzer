"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useAuth";
import { Sparkles, LogOut, User as UserIcon } from "lucide-react";

interface NavbarProps {
  user?: { email: string } | null;
}

export function Navbar({ user }: NavbarProps) {
  const { mutate: logout, isPending } = useLogout();

  return (
    <header className="sticky top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-border/60 bg-background/80 px-6 py-3 shadow-lg shadow-black/5 backdrop-blur-xl transition-all dark:shadow-white/5">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="h-4 w-4" />
          </div>
          <span>
            Resume<span className="text-primary">IQ</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {user && (
            <div className="hidden items-center gap-2 rounded-full border border-border/60 bg-accent/40 px-3.5 py-1 text-xs font-medium sm:flex">
              <UserIcon className="h-3.5 w-3.5 text-primary" />
              <span className="text-foreground max-w-[160px] truncate">{user.email}</span>
            </div>
          )}
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => logout()}
            disabled={isPending}
            className="rounded-full text-muted-foreground hover:text-destructive"
          >
            <LogOut className="h-4 w-4 sm:mr-1.5" />
            <span className="hidden sm:inline">Log out</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}