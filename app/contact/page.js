"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, X, Loader2 } from "lucide-react";
import { IoSend } from "react-icons/io5";

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
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className={`fixed top-20 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border ${bgColor} shadow-lg max-w-md`}
    >
      <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
      <p className={`${textColor} text-sm font-medium flex-1`}>{message}</p>
      <button
        onClick={onClose}
        className={`${textColor} hover:opacity-70 transition-opacity`}
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default function ContactPage() {
  const [enquiryList, setEnquiryList] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("enquiryList")) || [];
    setEnquiryList(storedList);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.name || !form.email || !form.message) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      showToast("Please enter a valid email address", "error");
      return;
    }

    // Phone validation (optional but if provided, should be valid)
    if (form.phone && !/^[\d\s\-\+KATEX_INLINE_OPENKATEX_INLINE_CLOSE]+$/.test(form.phone)) {
      showToast("Please enter a valid phone number", "error");
      return;
    }

    // Honeypot check
    if (form.company) {
      showToast("Something went wrong. Please try again.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      // Include enquiry list in the submission
      const formDataWithEnquiries = {
        ...form,
        enquiryList: enquiryList.length > 0 ? enquiryList : undefined,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataWithEnquiries),
      });

      const data = await res.json();

      if (res.ok) {
        showToast(
          enquiryList.length > 0 
            ? "Your message and product enquiries have been sent successfully! We'll get back to you soon."
            : "Message sent successfully! We'll get back to you soon.",
          "success"
        );
        
        // Clear form and enquiry list
        setForm({ name: "", email: "", phone: "", message: "", company: "" });
        localStorage.setItem("enquiryList", JSON.stringify([]));
        setEnquiryList([]);
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

  const removeFromEnquiry = (itemToRemove) => {
    const updatedList = enquiryList.filter((item) => item !== itemToRemove);
    setEnquiryList(updatedList);
    localStorage.setItem("enquiryList", JSON.stringify(updatedList));
    showToast("Product removed from enquiry list", "success");
  };

  const clearAllEnquiries = () => {
    setEnquiryList([]);
    localStorage.setItem("enquiryList", JSON.stringify([]));
    showToast("All products cleared from enquiry list", "success");
  };

  return (
    <div className="bg-white pt-20 max-w-7xl mx-auto">
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-center bg-fixed bg-center bg-cover text-white py-16 md:pt-24 px-4"
        style={{ backgroundImage: "url('/serviceBgMain.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65 z-0"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-5 relative"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Contact IG Electromech
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded mb-5"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
          >
            Have a project in mind or just an enquiry? We&apos;d love to hear
            from you. Reach out to us and let&apos;s discuss how we can help you
            build something amazing.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-4 sm:p-6 lg:p-8"
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 py-15">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-md shadow-xl border border-gray-400 py-10 p-4 md:p-6 space-y-6 lg:space-y-8 lg:w-1/3"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 md:mb-6 pb-2 border-b border-gray-300">
              Company Details
            </h2>

            {[
              {
                icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />,
                title: "Call Us",
                color: "bg-red-100 text-red-500",
                lines: ["+971 52 518 3123"],
              },
              {
                icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
                title: "Email Us",
                color: "bg-blue-100 text-blue-500",
                lines: ["info@igelectromech.com"],
              },
              {
                icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />,
                title: "Visit Us",
                color: "bg-red-100 text-red-500",
                lines: ["Dubai Investment Park, Dubai, UAE"],
              },
              {
                icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
                title: "Working Hours",
                color: "bg-blue-100 text-blue-500",
                lines: [
                  "Mon - Sat: 8 AM - 5 PM",
                  " Fri: 8 AM - 12 PM, 2 PM - 5 PM",
                ],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex space-x-3 md:space-x-4 lg:space-x-6"
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 flex mt-1 md:mt-2 items-center justify-center rounded-lg ${item.color} flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  {item.lines.map((line, idx) => (
                    <p
                      key={idx}
                      className="text-gray-700 text-xs md:text-sm break-all"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form & Enquiry */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 bg-white rounded-md shadow-xl border border-gray-400 p-4 md:p-6"
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="lg:flex-1"
              >
                <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 pb-2 border-b border-gray-200 text-gray-700">
                  Send Message/Enquiry
                  {enquiryList.length > 0 && (
                    <span className="text-sm font-normal text-blue-600 ml-2">
                      ({enquiryList.length} products selected)
                    </span>
                  )}
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 md:space-y-8"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-gray-600 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full p-2 text-sm border-gray-400 border-b focus:border-gray-900 focus:outline-none focus:border-b-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-gray-600 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full p-2 text-sm border-gray-400 border-b focus:border-gray-900 focus:outline-none focus:border-b-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-gray-600 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                      className="w-full p-2 text-sm border-gray-400 border-b focus:border-gray-900 focus:outline-none focus:border-b-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-gray-600 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your requirements..."
                      rows="4"
                      className="w-full p-2 text-sm border-gray-400 border-b focus:border-gray-900 focus:outline-none focus:border-b-2 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </motion.div>

                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="company"
                    value={form.company || ""}
                    onChange={handleChange}
                    style={{ display: "none" }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <motion.button
                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    type="submit"
                    disabled={isSubmitting}
                    className="gradient-border text-black py-3 px-6 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed group w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <div className="flex items-center justify-center md:justify-start gap-3 cursor-pointer">
                        Send Enquiry
                        <IoSend
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1 mt-1"
                        />
                      </div>
                    )}
                  </motion.button>

                  {enquiryList.length > 0 && (
                    <p className="text-xs text-gray-500 italic">
                      * Your selected products will be included in this enquiry
                    </p>
                  )}
                </form>
              </motion.div>

              {/* Enquiry List */}
              {enquiryList.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="lg:w-1/3"
                >
                  <div className="border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-center p-3 md:p-4 border-b border-gray-200 bg-gray-50 rounded-t-md">
                      <h3 className="font-semibold text-sm">
                        Selected Products ({enquiryList.length})
                      </h3>
                      <button
                        onClick={clearAllEnquiries}
                        className="text-xs text-red-600 hover:text-red-700 font-medium cursor-pointer transition-colors"
                        disabled={isSubmitting}
                      >
                        Clear All
                      </button>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.1,
                            },
                          },
                        }}
                        viewport={{ once: true }}
                        className="p-2"
                      >
                        {enquiryList.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center justify-between p-2 rounded-lg group hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-gray-700 text-xs font-medium flex-1 truncate">
                              {index + 1}. {item}
                            </span>
                            <button
                              onClick={() => removeFromEnquiry(item)}
                              className="opacity-70 lg:opacity-0 group-hover:opacity-100 p-1 text-red-500 hover:text-red-700 transition-opacity flex-shrink-0"
                              title="Remove item"
                              disabled={isSubmitting}
                            >
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-md">
                      <p className="text-xs text-gray-600 text-center">
                        These products will be sent with your enquiry
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}