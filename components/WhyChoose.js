"use client";

import { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaUserTie,
  FaGlobe,
  FaBolt,
  FaHeadset,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const values = [
    {
      title: "Quality",
      desc: "We never compromise on excellence, delivering services that meet international standards.",
      icon: <FaCheckCircle className="w-8 h-8" />,
    },
    {
      title: "Integrity",
      desc: "Honesty and transparency are the foundations of every project we undertake.",
      icon: <FaShieldAlt className="w-8 h-8" />,
    },
    {
      title: "Innovation",
      desc: "We embrace modern technologies and practices to deliver future-ready solutions.",
      icon: <FaLightbulb className="w-8 h-8" />,
    },
    {
      title: "Commitment",
      desc: "We honor our promises and deadlines, ensuring projects are delivered on time.",
      icon: <FaHandshake className="w-8 h-8" />,
    },
    {
      title: "Customer Focus",
      desc: "Our clients' success is our success — we build lasting partnerships across the UAE.",
      icon: <FaUsers className="w-8 h-8" />,
    },
  ];

  const badges = [
    { text: "Experienced & Certified Team", icon: <FaUserTie /> },
    { text: "UAE-wide Presence", icon: <FaGlobe /> },
    { text: "Energy-Efficient Solutions", icon: <FaBolt /> },
    { text: "Reliable After-Sales Support", icon: <FaHeadset /> },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 bg-gray-50 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/whyChooseBg2.png')" }}
      />
      <div className="absolute inset-0 bg-[#ffffffce]" />

      <div className="px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xl font-bold text-blue-700 tracking-wider uppercase mb-4 block">
            Our Values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose IG Electromech?
          </h2>
          <div className=" mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded"></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700">
            We combine technical expertise with a client-first approach —
            building trust through quality, transparency, and innovation across
            the UAE.
          </p>
        </div>

        {/* Values Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {values.map((value, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-blue-100 relative overflow-hidden
        w-full sm:w-80 lg:w-80
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-5">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-5 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all"
            >
              <div className="text-blue-600 text-xl">{badge.icon}</div>
              <span className="text-gray-700 font-medium text-sm">
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {isVisible && <CountUp end={10} duration={1.5} />}+
            </div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {isVisible && <CountUp end={500} duration={1.5} />}+
            </div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {isVisible && <CountUp end={98} duration={1.5} />}%
            </div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              24/7
            </div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
