"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  FaUserGraduate,
  FaCogs,
  FaHandshake,
  FaLeaf,
  FaRegClock,
} from "react-icons/fa";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  return (
    <section
      ref={sectionRef}
      className="relative py-20 pb-24 bg-gray-50 overflow-hidden px-6 lg:px-15"
    >
      {/* Background decorative elements */}
      <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-blue-200 opacity-40"></div>
      <div className="absolute -bottom-50 w-96 h-96 rounded-full bg-red-300 opacity-40"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xl font-bold text-blue-700 tracking-wider uppercase mb-4 block">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Our Company
          </h2>
          <div className=" mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <div
            className={`relative transition-all duration-700 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-us.jpg"
                alt="IG Electromech Team at Work"
                width={1000}
                height={1000}
              />
            </div>

            {/* Experience badge */}

            <div className="absolute -bottom-6 -right-6 bg-gradient-to-l from-red-500 to-blue-500 p-1 rounded-xl shadow text-white">
              <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-4">
                <FaRegClock className="text-black" size={50} />

                <div>
                  <p className="text-2xl font-bold text-black">10+ Years of</p>
                  <p className="text-sm text-gray-900">Technical Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 leading-tight">
              Delivering Reliable{" "}
              <span className="text-blue-600">
                Electromechanical Solutions
              </span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              IG Electromech Technical Services LLC is a UAE-based company
              specializing in high-quality electromechanical solutions. With a
              commitment to technical excellence, innovation, and customer
              satisfaction, we provide comprehensive services across electrical,
              mechanical, plumbing, and HVAC systems. Our expertise ensures
              reliable, efficient, and sustainable solutions tailored to the
              unique needs of our clients.
            </p>

            {/* Quick Highlights */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Certified Experts */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 flex items-center justify-center rounded-full bg-blue-200">
                  <FaUserGraduate className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">
                    Certified Experts
                  </h4>
                  <p className="text-sm text-gray-600">
                    Our team consists of highly trained and certified
                    professionals
                  </p>
                </div>
              </div>

              {/* Turnkey Solutions */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 flex items-center justify-center rounded-full bg-blue-200">
                  <FaCogs className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">
                    Turnkey Solutions
                  </h4>
                  <p className="text-sm text-gray-600">
                    End-to-end project management from conception to completion
                  </p>
                </div>
              </div>

              {/* Client-Centric Approach */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 flex items-center justify-center rounded-full bg-blue-200">
                  <FaHandshake className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">
                    Client-Centric Approach
                  </h4>
                  <p className="text-sm text-gray-600">
                    Your satisfaction is our priority in every project we
                    undertake
                  </p>
                </div>
              </div>

              {/* Sustainable Practices */}
              <div className="flex items-start gap-4 group">
                <div className="p-2 flex items-center justify-center rounded-full bg-blue-200">
                  <FaLeaf className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">
                    Sustainable Practices
                  </h4>
                  <p className="text-sm text-gray-600">
                    Environmentally conscious solutions for a better future
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
