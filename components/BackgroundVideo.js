"use client";
import { useState, useEffect, useRef } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const PLAYLIST = [
  { name: "circuitBoard", title: "Trusted Electromechanical Solutions" },
  { name: "menPlan", title: "Planning Innovation" },
  { name: "electrician", title: "Reliable Partnerships" },
  { name: "cables", title: "Where Technology meets Trust" },
  { name: "pipes", title: "Innovation You Can Depend On" },
  { name: "windmill", title: "Solutions Built to Last" },
  { name: "volumeUp", title: "Driven By Integrity" },
  { name: "soldering", title: "Precision in Every Connection" },
];

const BackgroundVideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [activeVideoRef, setActiveVideoRef] = useState(videoRef1);

  const timeoutRef = useRef(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (videoRef1.current) {
        videoRef1.current.pause();
        videoRef1.current.src = "";
      }
      if (videoRef2.current) {
        videoRef2.current.pause();
        videoRef2.current.src = "";
      }
    };
  }, []);

  const handleVideoEnd = () => {
    if (!isTransitioning) handleNextVideo();
  };

  // Initialize first video
  useEffect(() => {
    if (videoRef1.current && PLAYLIST.length > 0) {
      videoRef1.current.src = `/videos/${PLAYLIST[0].name}.mp4`;
      videoRef1.current.load();
    }
  }, []);

  const handleNextVideo = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const nextIndex = (currentVideoIndex + 1) % PLAYLIST.length;
    const inactiveRef = activeVideoRef === videoRef1 ? videoRef2 : videoRef1;

    if (inactiveRef.current) {
      inactiveRef.current.src = `/videos/${PLAYLIST[nextIndex].name}.mp4`;
      inactiveRef.current.load();

      const handleCanPlay = () => {
        inactiveRef.current.play().catch(console.error);

        timeoutRef.current = setTimeout(() => {
          setCurrentVideoIndex(nextIndex);
          setActiveVideoRef(inactiveRef);
          setIsTransitioning(false);
        }, 600);

        inactiveRef.current.removeEventListener("canplay", handleCanPlay);
      };

      // Always clean up listener, even if video never plays
      inactiveRef.current.addEventListener("canplay", handleCanPlay);
      setTimeout(() => {
        inactiveRef.current?.removeEventListener("canplay", handleCanPlay);
      }, 5000);
    }
  };

  const handleVideoLoad = () => {
    if (!isLoaded && videoRef1.current) {
      setIsLoaded(true);
      videoRef1.current.play().catch(console.error);
    }
  };

  const handleVideoError = (e) => {
    console.error("Video load error:", e);
    if (isLoaded) {
      setTimeout(() => handleNextVideo(), 1000);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Elements */}
      <video
        ref={videoRef1}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          activeVideoRef === videoRef1 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        muted
        playsInline
        preload="metadata"
        onCanPlay={handleVideoLoad}
        onError={handleVideoError}
        onEnded={handleVideoEnd}
      />

      <video
        ref={videoRef2}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          activeVideoRef === videoRef2 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
        muted
        playsInline
        preload="none"
        onError={handleVideoError}
        onEnded={handleVideoEnd}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/50 z-20"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <div
          className={`text-center text-white max-w-4xl px-6 transition-all duration-500 ease-in-out ${
            isTransitioning
              ? "opacity-70 -translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
            {PLAYLIST[currentVideoIndex]?.title}
          </h1>

          <div className="text-xl md:text-xl font-light opacity-90 max-w-2xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mb-4"></div>
            <p style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)" }}>
              Advanced ElectroMechanical Systems & Solutions
            </p>
          </div>
        </div>
        <MdKeyboardDoubleArrowDown
          className="absolute bottom-10 animate-bounce"
          size={30}
        />
      </div>
    </div>
  );
};

export default BackgroundVideo;
