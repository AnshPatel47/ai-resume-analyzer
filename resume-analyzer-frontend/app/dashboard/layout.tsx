"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading, isError } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isError) {
      router.push("/login");
    }
  }, [isLoading, isError, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (isError) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={user} />
      {children}
    </div>
  );
}