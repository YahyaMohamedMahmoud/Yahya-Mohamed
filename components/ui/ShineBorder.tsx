"use client";

import { cn } from "@/lib/utils";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

export function ShineBorder({
  borderRadius = 15,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={{
        "--border-radius": `${borderRadius}px`,
        overflow: "hidden",
        position: "relative",
      } as React.CSSProperties}
      className={cn("w-fit", className)}
    >
      {/* Shine Effect Layer */}
      <div
        style={{
          content: '""',
          position: "absolute",
          inset: `0px`,
          padding: `1px`,
          borderRadius: `${borderRadius}px`,
          background: `radial-gradient(circle at center, ${
            Array.isArray(color) ? color.join(", ") : color
          }, transparent 80%)`,
          backgroundSize: "300% 300%",
          animationDuration: `${duration}s`,
          opacity: 0.7,
          zIndex: 0,
          animationName: "shine",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          WebkitAnimationName: "shine",
          willChange: "background-position",
        }}
      ></div>

      {/* Content Layer */}
      <div
        style={{ zIndex: 1, position: "relative" }}
        className="bg-white dark:bg-black rounded-[--border-radius]"
      >
        <div
          style={{ borderRadius: `${borderRadius}px` }}
          className="rounded-[--border-radius] p-3"
        >
          {children}
        </div>
      </div>
    </div>
  );
}