"use client";
import Link from "next/link";
import Footer from "@/components/Footer"; // Adjust import path as needed
import { motion } from "framer-motion";

const services = [
  {
    title: "AHU System Upgrades",
    shortDesc: "Smart upgrades for energy-efficient AHUs",
    fullDesc:
      "We upgrade Air Handling Unit (AHU) systems from traditional DOL/contactors to advanced VFD panels, integrated seamlessly with Building Management Systems (BMS) for intelligent monitoring and control. These upgrades improve efficiency, reduce operating costs, and extend equipment life.",
    features: [
      "Conversion from DOL to VFD control",
      "Full BMS integration",
      "Centralized monitoring & automation",
      "Energy savings & reduced wear",
      "Extended AHU lifespan",
    ],
    applications: [
      "Commercial buildings",
      "Hospitals",
      "Educational institutions",
      "Industrial facilities",
    ],
  },
  {
    title: "Valve Installations",
    shortDesc: "Precise control with advanced valve solutions",
    fullDesc:
      "We supply and install two-way and three-way valves for AHU return lines, ensuring stable water flow management and balanced system performance. Our valve installations support efficient HVAC operations and long-term reliability.",
    features: [
      "Two-way & three-way valve installation",
      "Precise flow regulation",
      "Enhanced AHU efficiency",
      "Reduced system imbalances",
      "Long-term reliability",
    ],
    applications: [
      "HVAC chilled water systems",
      "Large office complexes",
      "Shopping malls",
      "Healthcare facilities",
    ],
  },
  {
    title: "AHU Servicing & Maintenance",
    shortDesc: "Reliable upkeep for optimal AHU performance",
    fullDesc:
      "Comprehensive servicing and preventive maintenance of Air Handling Units to ensure clean airflow, healthy indoor environments, and extended equipment lifespan. Our technicians use industry best practices for improved reliability.",
    features: [
      "Filter cleaning & replacement",
      "Airflow inspections",
      "Motor & fan servicing",
      "Preventive maintenance scheduling",
      "Improved air quality",
    ],
    applications: [
      "Hospitals & clinics",
      "Commercial offices",
      "Educational campuses",
      "Industrial facilities",
    ],
  },
  {
    title: "Pump Integration",
    shortDesc: "Energy-efficient pumping solutions",
    fullDesc:
      "We convert chilled water pumps from conventional DOL starters to VFD-based control systems. This reduces energy consumption, improves performance, and significantly extends pump life while minimizing operational costs.",
    features: [
      "Conversion from DOL to VFD control",
      "Reduced wear & tear",
      "Lower energy consumption",
      "Extended pump life",
      "Smart BMS integration",
    ],
    applications: [
      "Chilled water systems",
      "Industrial plants",
      "Large residential complexes",
      "Commercial facilities",
    ],
  },
  {
    title: "Delta T Control & Sensor Installation",
    shortDesc: "Smart sensors for optimized chiller efficiency",
    fullDesc:
      "Installation of DP transmitters, supply and return line sensors, and PICV integration for accurate Delta T control. Our solutions ensure optimal chiller performance, energy efficiency, and reliable operation.",
    features: [
      "DP transmitter installation",
      "Supply & return temperature sensors",
      "Integration with PICVs",
      "Optimized Delta T management",
      "Improved chiller efficiency",
    ],
    applications: [
      "Data centers",
      "Commercial towers",
      "Healthcare facilities",
      "Industrial cooling systems",
    ],
  },
  {
    title: "Energy Monitoring & Billing",
    shortDesc: "Smart energy tracking & fair cost allocation",
    fullDesc:
      "We install and configure BTU meters for accurate cooling energy measurement. Our solutions enable fair billing in multi-tenant buildings, support energy audits, and help track system efficiency for long-term savings.",
    features: [
      "BTU meter installation & calibration",
      "Accurate energy consumption tracking",
      "Fair tenant billing",
      "Support for energy audits",
      "Performance optimization",
    ],
    applications: [
      "Multi-tenant buildings",
      "Commercial complexes",
      "Shopping malls",
      "Industrial facilities",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white pt-16 md:pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative text-center bg-fixed bg-center bg-cover text-white py-16 md:py-24"
        style={{ backgroundImage: "url('/serviceImgs/hvac.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Core HVAC
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 px-4"
          >
            Comprehensive electromechanical solutions tailored to residential,
            commercial, and industrial projects.
          </motion.p>
        </div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute bottom-0 left-0 sm:left-5 px-4 sm:px-12 py-4 z-10 text-left"
        >
          <nav className="text-xs sm:text-sm md:text-base">
            <span className="mr-2 hidden sm:inline">You&apos;re here →</span>
            <Link href="/" className="hover:text-blue-400 transition-colors duration-300">
              Home
            </Link>
            <span className="mx-1">/</span>
            <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
              Services
            </Link>
            <span className="mx-1">/</span>
            <span className="block sm:inline">core-hvac</span>
          </nav>
        </motion.div>
      </motion.section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Expert HVAC Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-4 sm:px-0"
            >
              We specialize in delivering advanced HVAC solutions that enhance
              comfort, energy efficiency, and system reliability. From AHU
              upgrades and precision valve installations to pump integration,
              Delta T control, and energy monitoring, our services are designed
              to optimize performance while reducing operating costs. With
              expert maintenance and intelligent system integration, we ensure
              sustainable HVAC operations for residential, commercial, and
              industrial facilities.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-sm shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 sm:p-6"
                >
                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl font-bold text-gray-900 mb-3"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mb-4 text-sm sm:text-base"
                  >
                    {service.shortDesc}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-700 text-xs sm:text-sm mb-4"
                  >
                    {service.fullDesc}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Key Features:
                    </h4>
                    <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Applications:
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {service.applications.map((app, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                          className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs"
                        >
                          {app}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-16 sm:py-20 px-4 sm:px-10 md:px-20 text-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/handshake.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6"
        >
          <motion.h3
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white"
          >
            Ready to <span className="text-blue-500">Power Your Project</span>?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 mb-6 sm:mb-8 text-base sm:text-lg"
          >
            Partner with IG Electromech for innovative electromechanical
            solutions that deliver exceptional results, on time and within
            budget.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block gradient-border text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg relative overflow-hidden group text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="relative z-10">Start a Conversation</span>
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-6 text-gray-200 text-xs sm:text-sm"
          >
            We respond to all inquiries within 24 hours
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}