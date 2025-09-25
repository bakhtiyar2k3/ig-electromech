"use client";
import { useEffect, useState } from "react";
import { SplittingText } from "@/components/ui/shadcn-io/splitting-text";

export default function LoadingScreen({ onFinish }) {
  const [stage, setStage] = useState("show"); // "show" | "fade" | "hidden"

  useEffect(() => {
    // Logo fall duration (1.2s), then wait a moment, then fade out
    const fallTimer = setTimeout(() => {
      setStage("fade");
    }, 2000);

    const fadeTimer = setTimeout(() => {
      setStage("hidden");
      if (onFinish) onFinish();
    }, 3000);

    return () => {
      clearTimeout(fallTimer);
      clearTimeout(fadeTimer);
    };
  }, [onFinish]);

  if (stage === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-2500 ${
        stage === "fade" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="fixed inset-0 bg-gray-100/90 h-full w-full"></div>
      <img src="/logoBG1.png" className="w-full h-full" alt="Background" />
      <div
        className={`px-20 fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-2500 ${
          stage === "fade" ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="w-full animate-fall"
        />

        {/* Reveal text with SplittingText */}
        <div className="ml-40 -mt-15">
          <SplittingText
            className="text-3xl tracking-tight text-gray-700"
            text="Innovation for Generations"
            type="chars" // reveals smoothly left-to-right
          />
        </div>
      </div>
    </div>
  );
}
