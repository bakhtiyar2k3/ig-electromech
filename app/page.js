"use client";
import { useState, useEffect } from "react";
import BackgroundVideo from "@/components/BackgroundVideo";
import LoadingScreen from "@/components/LoadingScreen";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChoose";
import Contact from "@/components/ContactUs";
import Footer from "@/components/Footer";
export default function Home() {
  useEffect(() => {
    // document.documentElement.classList.add("dark");
  }, []);
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative items-start justify-center min-h-screen text-white">
      {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}
      <BackgroundVideo />
      <div className="max-w-7xl mx-auto">
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
