"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChoose";
import Contact from "@/components/ContactUs";
import Footer from "@/components/Footer";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Show video after a short delay to ensure proper rendering
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen text-white">
      {/* Loading Screen */}
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}

      {/* Background Video - now part of the normal document flow */}
      {showVideo && <BackgroundVideo />}

      {/* Main Content - no longer needs z-index */}
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-black">
          <AboutUs />
        </div>
        <div className="border-b border-black">
          <Services />
        </div>
        <div className="border-b border-black">
          <WhyChooseUs />
        </div>
        <div className="border-b border-black">
          <Contact />
        </div>
        <div className="border-b border-black">
          <Footer />
        </div>
      </div>
    </main>
  );
}
