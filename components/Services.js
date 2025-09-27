"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: "PLC & VFD Panels",
      image: "/serviceImgs/vfd_panels.jpg",
    },
    {
      title: "Electrical Systems",
      image: "/serviceImgs/electrical.jpg",
    },
    {
      title: "HVAC Systems",
      image: "/serviceImgs/hvac.jpg",
    },
    {
      title: "Plumbing & Drainage",
      image: "/serviceImgs/plumbing.jpg",
    },
    {
      title: "Mechanical Works",
      image: "/serviceImgs/mechanical.jpg",
    },
    {
      title: "Preventive Maintenance",
      image: "/serviceImgs/maintain.jpg",
    },
    {
      title: "Fibre Optic Splicing",
      image: "/serviceImgs/fibre_optic.jpg",
    },
    {
      title: "ELV & Security Systems",
      image: "/serviceImgs/security.jpg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-10 md:py-16 overflow-hidden px-4 sm:px-5"
    >
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/materialBg.png')",
        }}
      ></div>
      <div className="absolute inset-0 bg-[#fffffff0]"></div>

      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-8 md:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
         
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6">
            Our Specialized Services
          </h2>
          <div className="mt-2 md:mt-3 mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded"></div>
          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-800 px-4 sm:px-0 bg-white/50">
            Delivering trusted electromechanical solutions across the UAE —
            combining innovation, quality, and reliability to power your
            projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {services.map((service, idx) => (
            <Link href="/services" key={idx}>
              <div className="p-2">
                <div
                  className={`group relative rounded-md  overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform w-full h-40 sm:h-44 md:h-48 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } cursor-pointer`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center brightness-80 transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>

                  {/* Content */}
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-gray-900 mt-3">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 md:mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block p-[2px] rounded-lg bg-gradient-to-r from-red-500 to-blue-500 hover:from-blue-500 hover:to-red-500 ">
            <Link
              href="/services"
              className="group inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-white text-black font-medium rounded-lg  transition-all duration-300 gap-2 text-sm md:text-base"
            >
              <span>Explore All Services</span>
              <FaArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
