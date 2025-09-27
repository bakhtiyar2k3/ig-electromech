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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      gColor: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-500",
    },
    {
      title: "Integrity",
      desc: "Honesty and transparency are the foundations of every project we undertake.",
      icon: <FaShieldAlt className="w-8 h-8" />,
      gColor: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-500",
    },
    {
      title: "Innovation",
      desc: "We embrace modern technologies and practices to deliver future-ready solutions.",
      icon: <FaLightbulb className="w-8 h-8" />,
      gColor: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-500",
    },
    {
      title: "Commitment",
      desc: "We honor our promises and deadlines, ensuring projects are delivered on time.",
      icon: <FaHandshake className="w-8 h-8" />,
      gColor: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-500",
    },
    {
      title: "Customer Focus",
      desc: "Our clients' success is our success — we build lasting partnerships across the UAE.",
      icon: <FaUsers className="w-8 h-8" />,
      gColor: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-500",
    },
  ];
  const stats = [
    {
      number: 10,
      suffix: "+",
      label: "Years Experience",
      icon: <FaUserTie className="w-5 h-5" />,
    },
    {
      number: 500,
      suffix: "+",
      label: "Projects Completed",
      icon: <FaCheckCircle className="w-5 h-5" />,
    },
    {
      number: 98,
      suffix: "%",
      label: "Client Satisfaction",
      icon: <FaHandshake className="w-5 h-5" />,
    },
    {
      number: 24,
      suffix: "/7",
      label: "Support Available",
      icon: <FaHeadset className="w-5 h-5" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-dot-pattern"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-xl font-bold text-blue-700 tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            Building Trust Through{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p
            className={`text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            We combine technical expertise with a client-first approach —
            delivering innovative solutions that drive success across the UAE
            and beyond.
          </p>
        </div>

        {/* Values Grid - Masonry Layout */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {values.map((value, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 hover:border-transparent overflow-hidden
                ${idx % 3 === 0 ? "md:col-span-1" : ""} 
                ${idx % 3 === 1 ? "md:col-span-1" : ""}
                ${idx % 3 === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{ transitionDelay: `${idx * 100 + 500}ms` }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative z-100 bgblack">
                <div
                  className={`inline-flex p-3 rounded-xl mb-1 ${value.textColor} group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{value.desc}</p>

                {/* Animated underline */}
                <div
                  className={`w-0 group-hover:w-12 h-0.5 bg-gradient-to-r ${value.color} mt-4 transition-all duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group text-center bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-blue-100"
              style={{ transitionDelay: `${idx * 100 + 700}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {isVisible && stat.suffix === "/7" ? (
                  "24/7"
                ) : (
                  <CountUp
                    end={stat.number}
                    duration={2}
                    delay={0.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>

              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
