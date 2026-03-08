"use client";
import { cn } from "@/lib/utils";

export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 h-full w-full",
          "[background-size:20px_20px]",
          // Use subtle, light gray grid lines on black background
          "[background-image:linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)]",
          "bg-black"
        )}
      />
      {/* Radial gradient overlay removed for a flat, modern look */}
    </div>
  );
}
