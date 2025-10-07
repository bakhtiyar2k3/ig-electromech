"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  FaUserGraduate,
  FaCogs,
  FaHandshake,
  FaLeaf,
  FaAward,
  FaBuilding,
  FaUsers,
  FaProjectDiagram,
  FaArrowRight,
} from "react-icons/fa";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      icon: FaUserGraduate,
      title: "Certified Excellence",
      description:
        "Industry-certified professionals delivering world-class standards",
      color: "[#f7d562]",
    },

    {
      icon: FaCogs,
      title: "Complete Solutions",
      description: "End-to-end electromechanical services under one roof",
      color: "[#fd5252]",
    },
    {
      icon: FaHandshake,
      title: "Client First",
      description: "Your success drives our commitment to excellence",
      color: "[#3a7cec]",
    },
    {
      icon: FaLeaf,
      title: "Eco-Conscious",
      description: "Sustainable practices for a greener tomorrow",
      color: "[#1cd43e]",
    },
  ];

  const services = [
    "Electrical & Automation",
    "HVAC Solutions",
    "Plumbing Services",
    "Mechanical Works",
    "Specialized & Installation Works",
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#f7d562] relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden px-6 lg:px-15"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6">
            About IG Electromech
          </h2>
          <div className="mt-2 md:mt-3 mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded"></div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Leading the UAE&apos;s electromechanical industry with innovative
            solutions and unmatched expertise
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in{" "}
                <span className="text-blue-600">Technical Excellence</span>
              </h3>
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              IG Electromech Technical Services LLC stands as a cornerstone in
              the UAE&apos;s electromechanical industry. We blend cutting-edge
              technology with decades of expertise to deliver solutions that
              exceed expectations.
            </p>

            <p className="text-gray-600 leading-relaxed">
              From complex industrial installations to sophisticated building
              management systems, our comprehensive approach ensures every
              project achieves optimal performance, efficiency, and longevity.
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:shadow-md transition-all duration-300"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div
              className={`mt-12 md:mt-16 text-center transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-block p-[2px] rounded-lg bg-gradient-to-r from-red-500 to-blue-500 hover:from-blue-500 hover:to-red-500 ">
                <Link
                  href="/services"
                  className="group inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-white text-black font-medium rounded-lg  transition-all duration-300 gap-2 text-sm md:text-base"
                >
                  <span>Learn More About Us</span>
                  <FaArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className={`relative transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-us.jpg"
                  alt="IG Electromech Team"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-[200px] md:max-w-[250px]">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <FaBuilding className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">UAE</p>
                    <p className="text-sm text-gray-600">Based & Operating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            What Sets Us Apart
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Decoration */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-${value.color} rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 bg-${value.color} text-${value.color}-600 rounded-lg mb-4`}
                  >
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
