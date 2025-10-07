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
import { FaWhatsapp } from "react-icons/fa";

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

  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com" },
    { Icon: Instagram, href: "https://instagram.com" },
    { Icon: Linkedin, href: "https://linkedin.com" },
    { Icon: FaWhatsapp, href: "https://wa.me/971525183123" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    {
      name: "Electrical & Automation",
      href: "/services/electrical-automation",
    },
    {
      name: "Mechanical & Installation",
      href: "/services/mechanical-installation",
    },
    { name: "Core HVAC Services", href: "/services/core-hvac" },
    { name: "Plumbing & Civil Support", href: "/services/plumbing-support" },
    { name: "Maintenance Services", href: "/services/maintenance" },
  ];

  return (
    <footer className="bg-gray-50 text-gray-700 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative line + blobs */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-700"></div>
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
                className="object-contain filter drop-shadow-md"
              />
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                  IG Electromech
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-700">
                  Technical Services L.L.C
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed text-sm md:text-base">
              Delivering high-quality electromechanical solutions tailored for
              businesses in the UAE and beyond. We build reliable systems that
              help industries operate efficiently and sustainably.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center bg-white px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-500 transition-all duration-300 group shadow-sm">
                <Shield className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-xs text-gray-700 group-hover:text-blue-600">
                  Certified & Licensed
                </span>
              </div>
              <div className="flex items-center bg-white px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-500 transition-all duration-300 group shadow-sm">
                <Clock className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-xs text-gray-700 group-hover:text-blue-600">
                  24/7 Support
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-200 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group shadow-sm cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-gray-600 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5 pb-2 border-b border-gray-300 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition cursor-pointer"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <ChevronRight className="w-3 h-3 mr-2" />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5 pb-2 border-b border-gray-300 inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service, index) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition cursor-pointer"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <ChevronRight className="w-3 h-3 mr-2" />
                    <span className="text-xs md:text-sm">{service.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition cursor-pointer font-semibold"
                  style={{ transitionDelay: `${serviceLinks.length * 50}ms` }}
                >
                  <ChevronRight className="w-3 h-3 mr-2" />
                  <span className="text-xs md:text-sm">View All Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5 pb-2 border-b border-gray-300 inline-block">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100 flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <Link
                    href="tel:+971 52 518 3123"
                    className="text-gray-900 text-sm md:text-base hover:text-blue-600 transition cursor-pointer"
                  >
                    +971 52 518 3123
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">
                    Mon-Sat: 8 AM - 5 PM
                    <br/> Fri: 8 AM - 12 PM, 2 PM - 5 PM
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100 flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <Link
                    href="mailto:info@igelectromech.com"
                    className="text-gray-900 text-sm md:text-base hover:text-blue-600 transition cursor-pointer"
                  >
                    info@igelectromech.com
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-900 text-sm md:text-base">
                    Dubai Investment Park
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Dubai, UAE</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-xs md:text-sm flex items-center order-2 md:order-1">
            © {currentYear} IG Electromech Technical Services LLC. All rights
            reserved.
          </div>

          <div className="flex items-center text-gray-600 text-xs md:text-sm order-3 md:order-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" fill="red" />
            <span>in UAE</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-700 transition order-1 md:order-3 mb-4 md:mb-0 group cursor-pointer"
            aria-label="Scroll to top"
          >
            <span className="text-xs mr-2 group-hover:text-blue-600 cursor-pointer">
              Back to top
            </span>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white duration-300 shadow-sm">
              <ArrowUpRight className="w-4 h-4 transform -rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
