"use client";

import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Award,
  Clock,
  Shield,
  Heart,
  Lightbulb,
  Handshake,
  Eye,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  // Simplified animation
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-white pt-16 md:pt-20">
      {/* Hero Section */}
      <AboutUs />

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted electromechanical services provider in the UAE, 
                setting industry standards for quality, innovation, and reliability.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-lg mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <div className="space-y-3">
                {[
                  "Deliver efficient and reliable electromechanical solutions",
                  "Build lasting partnerships through trust and transparency",
                  "Provide sustainable solutions that create long-term value",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-left">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and define our culture
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: "Excellence",
                desc: "Uncompromising quality in every project we deliver",
                bgColor: "bg-blue-50",
                iconColor: "text-blue-600",
              },
              {
                icon: Shield,
                title: "Integrity",
                desc: "Honest and transparent in all our business dealings",
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Embracing modern solutions for complex challenges",
                bgColor: "bg-yellow-50",
                iconColor: "text-yellow-600",
              },
              {
                icon: Handshake,
                title: "Partnership",
                desc: "Building collaborative relationships with our clients",
                bgColor: "bg-green-50",
                iconColor: "text-green-600",
              },
              {
                icon: Clock,
                title: "Reliability",
                desc: "Delivering on our promises, on time, every time",
                bgColor: "bg-red-50",
                iconColor: "text-red-600",
              },
              {
                icon: Heart,
                title: "Dedication",
                desc: "Passionate commitment to client success",
                bgColor: "bg-pink-50",
                iconColor: "text-pink-600",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                  <div className={`inline-flex p-3 ${value.bgColor} rounded-lg mb-4`}>
                    <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years of Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Expert Engineers" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-blue-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Partner with IG Electromech for reliable electromechanical solutions 
              that exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Services
              </motion.a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              We respond to all inquiries within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}