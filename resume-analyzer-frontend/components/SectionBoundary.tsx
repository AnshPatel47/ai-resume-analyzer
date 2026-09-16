"use client";

import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

export function SectionBoundary({ children }: { children: React.ReactNode }) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => {
            setTimeout(resetErrorBoundary, 1500);
            return <Skeleton className="h-32 w-full rounded-lg" />;
          }}
        >
          <Suspense fallback={<Skeleton className="h-32 w-full rounded-lg" />}>
            {children}
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}