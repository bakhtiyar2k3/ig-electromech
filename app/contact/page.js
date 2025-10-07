"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { IoSend } from "react-icons/io5";

export default function ContactPage() {
  const [enquiryList, setEnquiryList] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("enquiryList")) || [];
    setEnquiryList(storedList);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...form,
      enquiryList,
      timestamp: new Date().toISOString(),
    };

    console.log("Form submitted:", payload);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Your enquiry has been submitted successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
      localStorage.setItem("enquiryList", JSON.stringify([]));
      setEnquiryList([]);
    } catch (error) {
      alert("There was an error submitting your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeFromEnquiry = (itemToRemove) => {
    const updatedList = enquiryList.filter((item) => item !== itemToRemove);
    setEnquiryList(updatedList);
    localStorage.setItem("enquiryList", JSON.stringify(updatedList));
  };

  const clearAllEnquiries = () => {
    setEnquiryList([]);
    localStorage.setItem("enquiryList", JSON.stringify([]));
  };

  return (
    <div className="bg-white pt-20 max-w-7xl mx-auto">
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
                lines: ["+971 50 123 4567", "+971 4 567 8901"],
              },
              {
                icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
                title: "Email Us",
                color: "bg-blue-100 text-blue-500",
                lines: ["hello@igelectromech.ae", "info@igelectromech.ae"],
              },
              {
                icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />,
                title: "Visit Us",
                color: "bg-red-100 text-red-500",
                lines: ["Dubai, United Arab Emirates"],
              },
              {
                icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
                title: "Working Hours",
                color: "bg-blue-100 text-blue-500",
                lines: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
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
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
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
                        className="w-full p-2 text-sm border-gray-400 border-b focus:border-gray-900 focus:outline-none focus:border-b-2"
                        required
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
                        className="w-full p-2 text-sm border-gray-400 border-b focus:border-gray-900 focus:outline-none focus:border-b-2"
                        required
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
                      className="w-full p-2 text-sm border-gray-400 border-b focus:border-gray-900 focus:outline-none focus:border-b-2"
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
                      className="w-full p-2 text-sm border-gray-400 border-b focus:border-gray-900 focus:outline-none focus:border-b-2"
                      required
                    ></textarea>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="gradient-border text-black py-3 px-4 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed group w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
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
                        className="text-xs text-red-600 hover:text-red-700 font-medium cursor-pointer"
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
                              {item}
                            </span>
                            <button
                              onClick={() => removeFromEnquiry(item)}
                              className="opacity-70 lg:opacity-0 group-hover:opacity-100 p-1 text-red-500 hover:text-red-700 transition-opacity flex-shrink-0"
                              title="Remove item"
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
