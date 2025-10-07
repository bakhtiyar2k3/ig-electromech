"use client";
import { useEffect, useState } from "react";
import { SplittingText } from "@/components/ui/shadcn-io/splitting-text";
import Image from "next/image";

export default function LoadingScreen({ onFinish }) {
  const [stage, setStage] = useState("show"); // "show" | "fade" | "hidden"

  useEffect(() => {
    const fallTimer = setTimeout(() => setStage("fade"), 2000);
    const fadeTimer = setTimeout(() => {
      setStage("hidden");
      onFinish?.();
    }, 3000);

    return () => {
      clearTimeout(fallTimer);
      clearTimeout(fadeTimer);
    };
  }, [onFinish]);

  if (stage === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden transition-opacity ease-out duration-800 ${
        stage === "fade" ? "opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Background + overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/materialBg.png"
          alt="Background pattern"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Keep the pattern subtle */}
        <div className="absolute inset-0 bg-white/90" />
      </div>

      {/* Centered content */}
      <div className=" h-full w-full flex flex-col justify-center items-center -mt-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={1200}
          height={800}
          priority
          className="h-auto w-full max-w-[820px] sm:max-w-[620px] md:max-w-[720px] lg:max-w-[800px] select-none animate-fall"
        />

        <div className="text-center mt-10">
          <SplittingText
            className="font-semibold text-gray-700 tracking-tight whitespace-nowrap leading-none text-[7vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] text-center"
            text="Innovation for Generations"
            type="words"
          />
        </div>
      </div>
    </div>
  );
}
