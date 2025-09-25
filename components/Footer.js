"use client";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  ChevronRight,
  Clock,
  Shield,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative line + blobs */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-red-500/30 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logoCut.png"
                alt="Logo"
                width={70}
                height={70}
                className="object-contain filter drop-shadow-lg"
              />
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  IG Electromech
                </span>
                <span className="text-xs md:text-sm font-medium text-white">
                  Technical Services L.L.C
                </span>
                
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-sm md:text-base">
              Delivering high-quality electromechanical solutions tailored for
              businesses in the UAE and beyond. We build reliable systems that
              help industries operate efficiently and sustainably.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                <Shield className="w-4 h-4 text-white mr-2" />
                <span className="text-xs text-gray-300 group-hover:text-white">
                  Certified & Licensed
                </span>
              </div>
              <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                <Clock className="w-4 h-4 text-white mr-2" />
                <span className="text-xs text-gray-300 group-hover:text-white">
                  24/7 Support
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 border border-gray-700 hover:bg-indigo-600 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 pb-2 border-b border-white inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item, index) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="flex items-center text-gray-400 hover:text-blue-500 transition"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <ChevronRight className="w-3 h-3 mr-2" />
                      <span className="text-sm">{item}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 pb-2 border-b border-white inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "PLC & VFD Panels",
                "Electrical Systems",
                "HVAC Solutions",
                "Plumbing & Drainage",
                "Mechanical Works",
                "View All Services",
              ].map((service, index) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="flex items-center text-gray-400 hover:text-blue-500 transition"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <ChevronRight className="w-3 h-3 mr-2" />
                    <span className="text-xs md:text-sm">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 pb-2 border-b border-white inline-block">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm md:text-base">
                    +971 50 123 4567
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Mon-Fri, 8:00 AM-6:00 PM
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm md:text-base">
                    info@igelectromech.ae
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white text-sm md:text-base">Dubai, UAE</p>
                  <p className="text-xs text-gray-400 mt-1">
                    United Arab Emirates
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-xs md:text-sm flex items-center order-2 md:order-1">
            © {currentYear} IG Electromech Technical Services LLC. All rights
            reserved.
          </div>

          <div className="flex items-center text-gray-500 text-xs md:text-sm order-3 md:order-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" fill="red" />
            <span>in UAE</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center text-white transition order-1 md:order-3 mb-4 md:mb-0"
            aria-label="Scroll to top"
          >
            <span className="text-xs mr-2 group-hover:underline">
              Back to top
            </span>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 cursor-pointer hover:bg-white/80 hover:text-gray-800 duration-300">
              <ArrowUpRight className="w-4 h-4 transform -rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
