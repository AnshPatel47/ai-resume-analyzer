"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FadeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  glow?: boolean;
  aspectRatio?: string;
}

export function FadeImage({
  src,
  alt,
  width = 1200,
  height = 800,
  fill = false,
  className = "",
  priority = false,
  glow = true,
}: FadeImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 shadow-2xl backdrop-blur-md group", className)}>
      {/* Ambient background glow */}
      {glow && (
        <div className="absolute -inset-1 z-0 bg-gradient-to-r from-primary/30 via-accent/20 to-purple-500/30 opacity-40 blur-2xl transition-opacity duration-700 group-hover:opacity-75" />
      )}

      {/* Image element with smooth opacity transition */}
      <div className="relative z-10 w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-auto object-cover transition-all duration-700 ease-out transform group-hover:scale-[1.02]",
            isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
          )}
        />
      </div>

      {/* Decorative inner subtle gradient border */}
      <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-white/10 dark:ring-white/5" />
    </div>
  );
}
