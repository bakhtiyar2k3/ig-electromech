"use client";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Image from "next/image";

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

const LEAD_TIME_SEC = 0.8;
const FADE_MS = 800;
const POSTER_INTERVAL = 5000;

export default function BackgroundVideo() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [idx, setIdx] = useState(0);
  const [titleVisible, setTitleVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [useWebm, setUseWebm] = useState(true);
  const [preloadedPosters, setPreloadedPosters] = useState([]);

  const refs = [useRef(null), useRef(null)];
  const switchingRef = useRef(false);

  const getVariant = (name, size) => {
    const ext = useWebm ? "webm" : "mp4";
    return `/videos/${name}-${size}.${ext}`;
  };
  const getPoster = (name) => `/videos/posters/${name}.jpg`;

  // Detect mobile + webm support
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);

    const v = document.createElement("video");
    const supports = !!(
      v.canPlayType &&
      (v.canPlayType('video/webm; codecs="vp9"') ||
        v.canPlayType('video/webm; codecs="vp8"') ||
        v.canPlayType("video/webm"))
    );
    setUseWebm(supports);

    return () => window.removeEventListener("resize", check);
  }, []);

  // Desktop video init
  useEffect(() => {
    if (isMobile) return;
    const v0 = refs[0].current;
    if (!v0) return;
    v0.muted = true;
    v0.playsInline = true;
    v0.preload = "auto";
    v0.poster = getPoster(PLAYLIST[0].name);
    v0.src = getVariant(PLAYLIST[0].name, "720");
    v0.load();
    v0.play?.().catch(() => {});
  }, [isMobile, useWebm]);

  // Desktop crossfade
  useEffect(() => {
    if (isMobile) return;
    const current = refs[activeLayer].current;
    if (!current) return;

    const startCrossfade = () => {
      if (switchingRef.current) return;
      switchingRef.current = true;

      const nextLayer = (activeLayer + 1) % 2;
      const nextIdx = (idx + 1) % PLAYLIST.length;
      const nextEl = refs[nextLayer].current;
      if (!nextEl) return;

      nextEl.muted = true;
      nextEl.playsInline = true;
      nextEl.preload = "auto";
      nextEl.poster = getPoster(PLAYLIST[nextIdx].name);
      nextEl.src = getVariant(PLAYLIST[nextIdx].name, "720");
      nextEl.load();
      nextEl.play?.().catch(() => {});

      setTitleVisible(false);
      setTimeout(() => {
        setIdx(nextIdx);
        setTitleVisible(true);
        setActiveLayer(nextLayer);
        switchingRef.current = false;
      }, FADE_MS);
    };

    const onTimeUpdate = () => {
      const d = current.duration;
      const t = current.currentTime || 0;
      if (Number.isFinite(d) && d > 0 && d - t <= LEAD_TIME_SEC) {
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
  }, [activeLayer, idx, isMobile, useWebm]);

  // Preload mobile posters
  useEffect(() => {
    const imgs = [];
    PLAYLIST.forEach((item, i) => {
      const pre = new window.Image(); // ⚠️ window.Image, not just Image
      pre.src = getPoster(item.name);
      imgs[i] = pre;
    });
    setPreloadedPosters(imgs);
  }, []);

  // Mobile poster rotation with crossfade
  useEffect(() => {
    if (!isMobile || preloadedPosters.length === 0) return;

    const timer = setInterval(() => {
      setTitleVisible(false);
      setTimeout(() => {
        setIdx((prev) => (prev + 1) % PLAYLIST.length);
        setActiveLayer((prev) => (prev + 1) % 2);
        setTitleVisible(true);
      }, FADE_MS);
    }, POSTER_INTERVAL);

    return () => clearInterval(timer);
  }, [isMobile, preloadedPosters]);

  // --- Mobile UI ---
  if (isMobile) {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        {/* Image layers */}
        {[0, 1].map((i) => {
          const isActive = i === activeLayer;
          const imageIdx = idx; // always show the current index on the active layer
          return (
            <img
              key={i}
              src={
                preloadedPosters[imageIdx]?.src ||
                getPoster(PLAYLIST[imageIdx].name)
              }
              alt={PLAYLIST[imageIdx].title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}

        {/* Overlay: dark layer */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered content: title + subtitle */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center max-w-6xl w-full">
            <h1
              className={`px-4 text-3xl md:text-5xl font-bold uppercase tracking-wide text-white drop-shadow-2xl transition-opacity duration-800 ${
                titleVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {PLAYLIST[idx].title}
              <div className="mt-2 mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-700 rounded"></div>
            </h1>
            <p className="mt-10 text-sm sm:text-base md:text-lg text-gray-200 opacity-90 font-bold tracking-wide">
              Advanced ElectroMechanical Systems & Solutions
            </p>
          </div>
        </div>

        {/* Down arrow */}
        <MdKeyboardDoubleArrowDown
          size={45}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"
        />
      </div>
    );
  }

  // --- Desktop UI ---
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {[0, 1].map((i) => (
        <video
          key={i}
          ref={refs[i]}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            activeLayer === i ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: "translate3d(0,0,0)",
            filter: "brightness(0.7) contrast(1)",
          }}
          preload={activeLayer === i ? "auto" : "metadata"}
          playsInline
          muted
        />
      ))}

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center max-w-6xl w-full">
          <h1
            className={`px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase 
              tracking-wide md:tracking-wider text-white drop-shadow-2xl
              transition-opacity duration-800
              ${titleVisible ? "opacity-100" : "opacity-0"}`}
          >
            {PLAYLIST[idx].title}
            <div className="mt-2 md:mt-3 mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-700 rounded"></div>
          </h1>
          <p className="mt-10 text-sm sm:text-base md:text-lg text-gray-200 opacity-90 font-bold tracking-wide">
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
