"use client";
import { useState, useEffect, useRef } from "react";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaClock,
  FaThumbsUp,
  FaChartLine,
  FaAward,
  FaProjectDiagram,
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

  const reasons = [
    {
      icon: FaCheckCircle,
      title: "Proven Excellence",
      description:
        "10+ years delivering quality electromechanical solutions across UAE",
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Certified professionals with extensive industry experience",
    },
    {
      icon: FaClock,
      title: "On-Time Delivery",
      description: "We honor deadlines and keep projects on schedule",
    },
    {
      icon: FaShieldAlt,
      title: "Quality Assured",
      description: "International standards compliance in every project",
    },
    {
      icon: FaLightbulb,
      title: "Innovative Solutions",
      description: "Modern technologies for efficient, future-ready systems",
    },
    {
      icon: FaThumbsUp,
      title: "Client Satisfaction",
      description: "100% commitment to exceeding client expectations",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience", icon: FaAward },
    { number: "500+", label: "Projects Completed", icon: FaProjectDiagram },
    { number: "50+", label: "Expert Team", icon: FaUsers },
    { number: "100%", label: "Client Satisfaction", icon: FaHandshake },
  ];
  const differentiators = [
    {
      icon: FaHandshake,
      title: "Partnership Approach",
      points: [
        "Transparent communication at every stage",
        "Flexible solutions tailored to your needs",
        "Long-term support and maintenance",
      ],
    },
    {
      icon: FaChartLine,
      title: "Proven Track Record",
      points: [
        "Successfully completed major UAE projects",
        "Consistent quality across all services",
        "Strong client retention and referrals",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Why Choose <span className="text-blue-600">IG Electromech</span>
          </h2>
          <div className="mt-2 md:mt-3 mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded mb-4"></div>

          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Your trusted partner for comprehensive electromechanical solutions
            in the UAE
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-lg p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                    <reason.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.number}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* What Sets Us Apart */}
        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {differentiators.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 md:p-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
