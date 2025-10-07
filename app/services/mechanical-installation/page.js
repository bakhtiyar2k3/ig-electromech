"use client";
import Link from "next/link";
import Footer from "@/components/Footer"; // Adjust import path as needed
import { motion } from "framer-motion";

const services = [
  {
    title: "HVAC Design, Installation & Maintenance",
    shortDesc: "Energy-efficient climate control systems",
    fullDesc:
      "End-to-end HVAC solutions covering design, installation, commissioning, and preventive maintenance. We ensure energy-efficient operation, regulatory compliance, and long-term performance for residential, commercial, and industrial facilities.",
    features: [
      "Load calculations & HVAC design",
      "Chiller, AHU & FCU installation",
      "Ducting & insulation works",
      "Preventive & corrective maintenance",
      "Energy optimization & retrofits",
    ],
    applications: [
      "Residential buildings",
      "Commercial offices",
      "Industrial facilities",
      "Hospitals & educational institutions",
    ],
  },
  {
    title: "FCU (Fan Coil Unit) Installation & Services",
    shortDesc: "Reliable cooling and air distribution solutions",
    fullDesc:
      "Supply, installation, and servicing of fan coil units (FCUs) to provide efficient air distribution and climate control. Our services ensure smooth operation, minimal downtime, and improved indoor comfort.",
    features: [
      "New FCU supply & installation",
      "Hydronic piping & connections",
      "Filter cleaning & replacement",
      "Motor & fan servicing",
      "Annual maintenance contracts (AMC)",
    ],
    applications: [
      "Residential apartments",
      "Commercial offices",
      "Hotels & resorts",
      "Healthcare facilities",
    ],
  },
  {
    title: "Mechanical Works & Fabrication",
    shortDesc: "Custom fabrication and installation solutions",
    fullDesc:
      "Comprehensive mechanical works including fabrication, assembly, and installation of custom equipment. We deliver durable, precise, and reliable mechanical solutions tailored to project needs.",
    features: [
      "Sheet metal & duct fabrication",
      "Welding & assembly works",
      "Steel structure fabrication",
      "Equipment mounting & alignment",
      "On-site modifications & repairs",
    ],
    applications: [
      "Industrial facilities",
      "Commercial projects",
      "Oil & gas plants",
      "Utility services",
    ],
  },
  {
    title: "Pump Repair & Maintenance",
    shortDesc: "Specialized pump servicing & upgrades",
    fullDesc:
      "Repair, servicing, and maintenance of industrial, chilled water, and booster pumps. Our expert team ensures extended pump life, improved efficiency, and reduced breakdowns.",
    features: [
      "Pump dismantling & inspection",
      "Bearing & seal replacements",
      "Motor rewinding & balancing",
      "Performance testing",
      "Conversion from DOL to VFD control",
    ],
    applications: [
      "Water treatment plants",
      "Chilled water systems",
      "Industrial process plants",
      "Building services",
    ],
  },
  {
    title: "Industrial Equipment Installation",
    shortDesc: "Precision installation of process instruments",
    fullDesc:
      "Professional installation and integration of industrial equipment and instruments, ensuring accuracy, reliability, and compliance with international standards.",
    features: [
      "Installation of PTs, DPTs & RTDs",
      "Flow meter & level transmitter setup",
      "Pressure & temperature gauge installation",
      "SS tubing & piping works",
      "Calibration & commissioning",
    ],
    applications: [
      "Oil & gas facilities",
      "Process industries",
      "Power generation plants",
      "Utilities & water treatment",
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
        style={{ backgroundImage: "url('/serviceImgs/mechanical.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Mechanical Installation
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
            <Link
              href="/"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </Link>
            <span className="mx-1">/</span>
            <Link
              href="/services"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Services
            </Link>
            <span className="mx-1">/</span>
            <span className="block sm:inline">Mechanical Installation</span>
          </nav>
        </motion.div>
      </motion.section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 border-y-2 border-black">
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
              Expert Mechanical Installation Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-4 sm:px-0"
            >
              We provide end-to-end mechanical installation solutions covering
              HVAC, pumping systems, fabrication, and industrial equipment
              integration. From precise design and installation to preventive
              maintenance and performance optimization, our services ensure
              durability, efficiency, and compliance with international
              standards. Whether for residential, commercial, or industrial
              facilities, we deliver tailored mechanical solutions that
              guarantee comfort, reliability, and long-term value.
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
                          <span className="text-blue-500 mr-2 flex-shrink-0">
                            •
                          </span>
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
        className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-10 text-center bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: "url('/handshake.jpg')",
        }}
      >
        {/* Dark overlay with gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-6"
        >
          {/* Title */}
          <motion.h3
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-snug sm:leading-tight"
          >
            Ready to <span className="text-blue-500">Power Your Project</span>?
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-200 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed px-2"
          >
            Partner with IG Electromech for innovative electromechanical
            solutions that deliver exceptional results — on time and within
            budget.
          </motion.p>

          {/* Button */}
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
            {" "}
            <span className="relative z-10">Start a Conversation</span>{" "}
          </motion.a>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-6 text-gray-300 text-xs sm:text-sm"
          >
            We respond to all inquiries within 24 hours
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
