"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useAuth";
import { LogOut } from "lucide-react";

interface NavbarProps {
  user?: { email: string } | null;
}

export function Navbar({ user }: NavbarProps) {
  const { mutate: logout, isPending } = useLogout();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-display text-lg font-semibold tracking-tight">
          ResumeIQ
        </span>

        <div className="flex items-center gap-3">
          {user && (
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {user.email}
            </span>
          )}
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => logout()} disabled={isPending}>
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </div>
    </header>
  );
}