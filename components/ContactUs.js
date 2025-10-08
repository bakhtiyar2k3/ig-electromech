"use client";
import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Send, Clock, ChevronRight, X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Toast Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200';
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
  const Icon = type === 'success' ? CheckCircle : AlertCircle;
  const iconColor = type === 'success' ? 'text-green-400' : 'text-red-400';

  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border ${bgColor} shadow-lg animate-slide-in max-w-md`}>
      <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
      <p className={`${textColor} text-sm font-medium flex-1`}>{message}</p>
      <button
        onClick={onClose}
        className={`${textColor} hover:opacity-70 transition-opacity`}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added phone field
    message: "",
    company: "", // honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast("Please enter a valid email address", "error");
      return;
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone && !/^[\d\s\-\+KATEX_INLINE_OPENKATEX_INLINE_CLOSE]+$/.test(formData.phone)) {
      showToast("Please enter a valid phone number", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        showToast("Message sent successfully! We'll get back to you soon.", "success");
        setFormData({ name: "", email: "", phone: "", message: "", company: "" });
      } else {
        showToast(data.message || "Something went wrong. Please try again.", "error");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      showToast("Failed to send message. Please check your connection and try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Add styles for toast animation */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <section
        ref={sectionRef}
        className="relative bg-white py-16 md:py-20 overflow-hidden"
        id="contact"
      >
        <div className="px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div
            className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xl font-bold text-blue-700 tracking-wider uppercase mb-4 block">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Let&apos;s Work Together
            </h2>
            <div className="mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded"></div>
            <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-700 px-4">
              Have a project in mind? We&apos;d love to hear from you. Reach out
              to us and let&apos;s discuss how we can help you build something
              amazing.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Left Side - Info */}
            <div
              className={`transition-all duration-700 delay-150 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="h-full space-y-8 md:space-y-10 rounded-xl border border-gray-200 bg-gray-50 py-8 md:py-10 px-4 md:px-6 shadow-sm">
                {/* Call Us */}
                <div className="flex items-start sm:items-center space-x-4 md:space-x-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Call Us
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base break-all">
                      +971 52 518 3123
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start sm:items-center space-x-4 md:space-x-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email Us
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base break-all">
                      info@igelectromech.com
                    </p>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="flex items-start sm:items-center space-x-4 md:space-x-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Dubai Investment Park, UAE
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start sm:items-center space-x-4 md:space-x-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-600 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Working Hours
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Mon - Sat: 8 AM - 5 PM
                    </p>
                    <p className="text-gray-600 text-sm md:text-base">
                      Fri: 8 AM - 12 PM, 2 PM - 5 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <form
                onSubmit={handleSubmit}
                className="h-full bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6 flex flex-col"
              >
                {/* Name and Email Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 placeholder-gray-500 outline-none transition-colors duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 placeholder-gray-500 outline-none transition-colors duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+971 XX XXX XXXX"
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 placeholder-gray-500 outline-none transition-colors duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message Field */}
                <div className="flex-grow">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 placeholder-gray-500 outline-none transition-colors duration-300 resize-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                {/* Honeypot field (hidden) */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center">
                  {/* Send Message Button */}
                  <div className="w-full sm:w-auto">
                    <div className="p-[1px] bg-gradient-to-r from-red-500 to-blue-500 rounded-lg hover:from-blue-500 hover:to-red-500">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-white text-gray-900 font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group cursor-pointer whitespace-nowrap border border-gray-300 hover:border-gray-400 hover:bg-gray-50 min-w-[160px] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            <span className="text-sm">Sending...</span>
                          </>
                        ) : (
                          <>
                            <span className="text-sm">Send Message</span>
                            <Send className="w-5 h-5 ml-2 rotate-45 mt-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="w-full sm:w-auto">
                    <a
                      href="https://wa.me/971525183123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:w-auto flex items-center justify-center gap-2 border border-green-400 text-green-700 bg-green-50 py-4 px-6 rounded-lg shadow-sm hover:shadow-md hover:bg-green-100 transition-all duration-300 group whitespace-nowrap min-w-[160px] ${
                        isSubmitting ? 'opacity-50 pointer-events-none' : ''
                      }`}
                    >
                      <FaWhatsapp
                        size={24}
                        fill="#12da04"
                        className="flex-shrink-0"
                      />
                      <span className="font-bold text-sm text-green-600">
                        WhatsApp Us
                      </span>
                      <ChevronRight
                        color="#12da04"
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0"
                      />
                    </a>
                  </div>
                </div>

                <p className="text-center text-sm text-gray-500">
                  We&apos;ll get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}