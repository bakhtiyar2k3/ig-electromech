"use client";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const PLAYLIST = [
  { name: "serverroom", title: "Trusted ElectroMechanical Solutions" },
  { name: "circuitBoard", title: "Commitment to Quality" },
  { name: "manTypes", title: "Reliable Technical Partnerships" },
  { name: "cables", title: "Where Technology meets Trust" },
  { name: "serverLights", title: "Innovation You Can Depend On" },
  { name: "windmill", title: "Solutions Built to Last" },
  { name: "volumeUp", title: "Driven By Integrity" },
  { name: "soldering", title: "Precision in Every Connection" },
  { name: "solarPanels", title: "Sustainable Engineering for Tomorrow" },
];

const FADE_MS = 1000; // duration of crossfade in ms
const LEAD_SEC = 0.5; // seconds before end to preload next

export default function BackgroundVideo() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [idx, setIdx] = useState(0);

  const refs = [useRef(null), useRef(null)];
  const switchingRef = useRef(false);

  const getVideoSrc = (name) => `/videos/${name}.mp4`;

  useEffect(() => {
    // initialize first video
    refs[0].current.src = getVideoSrc(PLAYLIST[0].name);
    refs[0].current.load();
    refs[0].current.play().catch(() => {});
  }, []);

  useEffect(() => {
    const current = refs[activeLayer].current;
    if (!current) return;

    const nextLayer = (activeLayer + 1) % 2;

    const startCrossfade = () => {
      if (switchingRef.current) return;
      switchingRef.current = true;

      const nextIdx = (idx + 1) % PLAYLIST.length;
      const nextEl = refs[nextLayer].current;
      if (!nextEl) return;

      // set next video
      nextEl.src = getVideoSrc(PLAYLIST[nextIdx].name);
      nextEl.load();
      nextEl.play().catch(() => {});

      // fade effect using opacity
      setTimeout(() => {
        setActiveLayer(nextLayer);
        setIdx(nextIdx);
        switchingRef.current = false;
      }, FADE_MS);
    };

    const onTimeUpdate = () => {
      const d = current.duration;
      const t = current.currentTime || 0;
      if (Number.isFinite(d) && d - t <= LEAD_SEC) {
        startCrossfade();
      }
    };

    current.addEventListener("timeupdate", onTimeUpdate);
    current.addEventListener("ended", startCrossfade);
    current.addEventListener("error", startCrossfade);

    return () => {
      current.removeEventListener("timeupdate", onTimeUpdate);
      current.removeEventListener("ended", startCrossfade);
      current.removeEventListener("error", startCrossfade);
    };
  }, [activeLayer, idx]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {[0, 1].map((i) => (
        <video
          key={i}
          ref={refs[i]}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[${FADE_MS}ms] ${
            activeLayer === i ? "opacity-100" : "opacity-0"
          }`}
          muted
          playsInline
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center max-w-6xl w-full">
          <h1 className="px-4 text-4xl md:text-6xl font-bold uppercase tracking-wide text-white drop-shadow-2xl transition-opacity duration-1000">
            {PLAYLIST[idx].title}
            <div className="mt-3 mx-auto h-1 w-32 bg-gradient-to-r from-blue-500 to-red-700 rounded"></div>
          </h1>
          <p className="mt-10 text-lg text-gray-200 opacity-90 font-bold tracking-wide">
            Advanced ElectroMechanical Systems & Solutions
          </p>
        </div>
      </div>

      <MdKeyboardDoubleArrowDown
        size={45}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"
      />
    </div>
  );
}
