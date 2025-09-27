"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdMailOutline, MdOutlineLocationOn } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { GoGlobe } from "react-icons/go";
import { Phone, Mail, MapPin, Send, Clock, ChevronRight } from "lucide-react";
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

  // Load enquiryList from localStorage
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

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay

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
      <section
        className="relative text-center bg-fixed bg-center bg-cover text-white py-16 md:py-24 px-4"
        style={{ backgroundImage: "url('/serviceBgMain.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65 z-0"></div>
        <div className="text-center mb-5 relative">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contact IG Electromech
          </h1>
          <div className="mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded mb-5"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Have a project in mind or just an enquiry? We'd love to hear from
            you. Reach out to us and let&apos;s discuss how we can help you
            build something amazing.
          </p>
        </div>
      </section>
      
      {/* Main Content Section */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 py-15">
          {/* Company Information */}
          <div className="bg-gray-50 rounded-md shadow-xl border border-gray-400 py-10 p-4 md:p-6 space-y-6 lg:space-y-8 lg:w-1/3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 md:mb-6 pb-2 border-b border-gray-300">
              Company Details
            </h2>

            {/* Call Us */}
            <div className="flex space-x-3 md:space-x-4 lg:space-x-6">
              <div className="w-10 h-10 md:w-12 md:h-12 flex mt-1 md:mt-2 items-center justify-center rounded-lg bg-red-100 text-red-500 flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">Call Us</h3>
                <p className="text-gray-700 text-xs md:text-sm break-all">
                  +971 50 123 4567
                </p>
                <p className="text-gray-700 text-xs md:text-sm break-all">
                  +971 4 567 8901
                </p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex space-x-3 md:space-x-4 lg:space-x-6">
              <div className="w-10 h-10 md:w-12 md:h-12 flex mt-1 md:mt-2 items-center justify-center rounded-lg bg-blue-100 text-blue-500 flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  Email Us
                </h3>
                <p className="text-gray-700 text-xs md:text-sm break-all">
                  hello@igelectromech.ae
                </p>
                <p className="text-gray-700 text-xs md:text-sm break-all">
                  info@igelectromech.ae
                </p>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex space-x-3 md:space-x-4 lg:space-x-6">
              <div className="w-10 h-10 md:w-12 md:h-12 flex mt-1 md:mt-2 items-center justify-center rounded-lg bg-red-100 text-red-500 flex-shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  Visit Us
                </h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex space-x-3 md:space-x-4 lg:space-x-6">
              <div className="w-10 h-10 md:w-12 md:h-12 flex mt-1 md:mt-2 items-center justify-center rounded-lg bg-blue-100 text-blue-500 flex-shrink-0">
                <Clock className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  Working Hours
                </h3>
                <p className="text-gray-700 text-xs md:text-sm">
                  Mon - Fri: 8:00 AM - 6:00 PM
                </p>
                <p className="text-gray-700 text-xs md:text-sm">Sat: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Combined Contact Form & Enquiry List */}
          <div className="flex-1 bg-white rounded-md shadow-xl border border-gray-400 p-4 md:p-6">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Contact Form - Takes full width on mobile, 2/3 on desktop */}
              <div className="lg:flex-1">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 pb-2 border-b border-gray-200 text-gray-700">
                  Send Message/Enquiry
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <button
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
                  </button>
                </form>
              </div>

              {/* Enquiry List - Takes full width on mobile, 1/3 on desktop when not empty */}
              {enquiryList.length > 0 && (
                <div className="lg:w-1/3">
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
                      <div className="p-2">
                        {enquiryList.map((item, index) => (
                          <div
                            key={index}
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
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}