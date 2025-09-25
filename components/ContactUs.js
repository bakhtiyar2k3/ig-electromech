"use client";
import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Send, Clock, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-16 md:py-20 overflow-hidden"
      id="contact"
    >
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xl font-bold text-red-400 tracking-wider uppercase mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <div className=" mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded"></div>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-300 px-4">
            Have a project in mind? We'd love to hear from you. Reach out to us
            and let's discuss how we can help you build something amazing.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left Side - Info */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Parent Container with rounded border */}
            <div className="space-y-8 md:space-y-10 rounded-xl border border-white bg-black py-8 md:py-10 px-4 md:px-6 shadow-md">
              {/* Call Us */}
              <div className="flex items-start sm:items-center space-x-4 md:space-x-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-900/30 text-blue-400 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">
                    Call Us
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base break-all">
                    +971 50 123 4567
                  </p>
                  <p className="text-gray-300 text-sm md:text-base break-all">
                    +971 4 567 8901
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start sm:items-center space-x-4 md:space-x-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-900/30 text-purple-400 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base break-all">
                    hello@igelectromech.ae
                  </p>
                  <p className="text-gray-300 text-sm md:text-base break-all">
                    info@igelectromech.ae
                  </p>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-start sm:items-center space-x-4 md:space-x-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-900/30 text-blue-400 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">
                    Visit Us
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start sm:items-center space-x-4 md:space-x-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-900/30 text-green-400 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-gray-100 mb-1">
                    Working Hours
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Mon - Fri: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-300 text-sm md:text-base">
                    Sat: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-black p-6 md:p-8 rounded-2xl shadow-lg border border-white space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border-b bg-black text-white placeholder-gray-400 outline-none transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border-b border-white bg-black text-white placeholder-gray-400 outline-none transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-4 py-3 border-b border-white bg-black text-white placeholder-gray-400 outline-none transition-colors duration-300 resize-none"
                  required
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center whitespace-nowrap">
                <div className="p-[1px] bg-gradient-to-r from-red-500 to-blue-500 rounded-lg inline-block hover:from-blue-500 hover:to-red-500">
                  <button
                    type="submit"
                    className="w-full bg-black text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group cursor-pointer whitespace-nowrap"
                  >
                    <span className="text-sm">Send Message</span>
                    <Send className="w-5 h-5 ml-2 rotate-45 mt-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex wfull items-center gap-2 justify-center border border-green-400 text-white py-4 px-6  rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group whitespace-nowrap"
                >
                  <div className="flex items-center min-w-0">
                    <div className="flex items-center justify-center mr-3 md:mr-2 flex-shrink-0">
                      <FaWhatsapp
                        size={32}
                        fill="#12da04"
                        className="md:w-6 md:h-6"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-sm text-green-500 [9px]">
                        WhatsApp Us
                      </p>
                    
                    </div>
                  </div>
                  <ChevronRight
                    color="#12da04"
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0"
                  />
                </a>
              </div>

              <p className="text-center text-sm text-gray-400">
                We'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
