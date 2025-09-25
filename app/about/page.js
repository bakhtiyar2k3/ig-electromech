"use client";

import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Eye,
  Users,
  Award,
  Clock,
  Shield,
  Heart,
  Zap,
  Lightbulb,
  Handshake,
  Star,
  Briefcase,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { FaCheck, FaLongArrowAltRight } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiBinocularsBold, PiBinocularsLight } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";

export default function AboutPage() {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="relative bg-white pt-20 max-w-7xl mx-auto overflow-hidden">
      {/* Hero Section */}
      <AboutUs />
      <section className="flex items-center py-30 bg-gradient-to-r from-gray-950 to-gray-900 text-white">
        <div className="grid md:grid-cols-2 gap-12 px-20 relative">
          {/* Divider Line */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-red-500 via-blue-500 to-transparent"></div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex flex-col items-center mb-6 gap-5">
              <div className="p-4 bg-red-700 rounded-full flex items-center justify-center">
                <PiBinocularsBold size={40} className="" />
              </div>
              <h3 className="text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-300 text-lg leading-8 ">
              To be a trusted leader in electromechanical technical services
              across the UAE, recognized for quality, innovation, and integrity.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="pl-8"
          >
            <div className="flex flex-col items-center mb-6 gap-5">
              <div className="p-4 bg-indigo-800 rounded-full flex items-center justify-center">
                <TbTargetArrow size={40} />
              </div>
              <h3 className="text-3xl font-bold">Our Mission</h3>
            </div>
            <ul className="space-y-4 text-gray-300">
              {[
                "Deliver efficient and reliable electromechanical services.",
                "Building long-term partnerships based on trust and transparency.",
                "Providing sustainable solutions that add value to our clients’ projects.",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* <FaCheck className="text-green-500 mr-3 mt-2" /> */}
                  <FaLongArrowAltRight size={20} className="mr-3" />

                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 px-20 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-200 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-200 opacity-20 rounded-full animate-pulse"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The principles that guide our work and define our company culture
          </p>
            <div className="mt-2 md:mt-3 mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-600 rounded"></div>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Award,
              title: "Excellence",
              desc: "We never compromise on quality, striving for perfection in every project we deliver.",
              color: "from-blue-100 to-blue-200",
              iconColor: "text-blue-500",
            },
            {
              icon: Shield,
              title: "Integrity",
              desc: "We operate with honesty, transparency, and ethical practices in all our dealings.",
              color: "from-red-100 to-red-200",
              iconColor: "text-red-500",
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              desc: "We embrace new technologies and creative solutions to overcome complex challenges.",
              color: "from-blue-100 to-blue-200",
              iconColor: "text-blue-500",
            },
            {
              icon: Handshake,
              title: "Partnership",
              desc: "We view our clients as partners and work collaboratively to achieve their goals.",
              color: "from-red-100 to-red-200",
              iconColor: "text-red-500",
            },
            {
              icon: Clock,
              title: "Reliability",
              desc: "We honor our commitments and deliver on time, every time, without exceptions.",
              color: "from-blue-100 to-blue-200",
              iconColor: "text-blue-500",
            },
            {
              icon: Heart,
              title: "Dedication",
              desc: "We are passionately committed to the success of our clients and their projects.",
              color: "from-red-100 to-red-200",
              iconColor: "text-red-500",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 group hover:shadow-lg hover:scale-[1.02] z-10"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <value.icon className={`w-7 h-7 ${value.iconColor}`} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">
                {value.title}
              </h4>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      {/* CTA */}
      <section
        className="relative py-20 px-20 text-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/handshake.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to <span className="text-blue-500">Power Your Project</span>?
          </h3>
          <p className="text-gray-200 mb-8 text-lg">
            Partner with IG Electromech for innovative electromechanical
            solutions that deliver exceptional results, on time and within
            budget.
          </p>
          <motion.a
            href="/contact"
            className="inline-block gradient-border text-white px-8 py-4 rounded-xl font-semibold  transition-all duration-300 shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start a Conversation</span>
          </motion.a>

          <p className="mt-6 text-gray-200 text-sm">
            We respond to all inquiries within 24 hours
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
