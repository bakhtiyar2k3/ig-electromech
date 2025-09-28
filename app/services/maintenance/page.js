"use client";
import Link from "next/link";
import Footer from "@/components/Footer"; // Adjust import path as needed
import { motion } from "framer-motion";

const services = [
  {
    title: "Preventive & Corrective Maintenance",
    shortDesc: "Scheduled inspections and emergency repair services",
    fullDesc:
      "We provide comprehensive preventive and corrective maintenance services for electrical, mechanical, and HVAC systems. Our goal is to ensure smooth, uninterrupted operations, reduce downtime, and extend the lifespan of your equipment.",
    features: [
      "Routine inspections and diagnostics",
      "Emergency repairs & troubleshooting",
      "Equipment performance optimization",
      "Replacement of worn or faulty components",
      "Maintenance planning & reporting",
    ],
    applications: [
      "Commercial offices",
      "Industrial plants",
      "Residential complexes",
      "Healthcare facilities",
    ],
  },
  {
    title: "Fibre Optic Splicing & Testing",
    shortDesc: "High-precision network installation and verification",
    fullDesc:
      "We deliver professional fibre optic splicing, termination, and testing services to ensure reliable communication networks. Our team uses industry-standard techniques for precise connections, minimal signal loss, and long-term network stability.",
    features: [
      "Fusion & mechanical splicing",
      "OTDR testing and signal verification",
      "Connector termination & inspection",
      "Network troubleshooting",
      "Compliance with international standards",
    ],
    applications: [
      "Data centers",
      "Telecommunication networks",
      "Commercial buildings",
      "Industrial facilities",
    ],
  },
  {
    title: "Industrial Instrument Installation",
    shortDesc:
      "Professional calibration and installation of control instruments",
    fullDesc:
      "We supply, install, and calibrate industrial instruments for accurate process monitoring and control. Our services ensure precision, compliance, and seamless integration with existing systems, including SCADA and automation platforms.",
    features: [
      "Pressure, temperature, and flow instrument installation",
      "Control valve setup",
      "SCADA system integration",
      "Calibration traceability",
      "Routine testing & verification",
    ],
    applications: [
      "Oil & gas facilities",
      "Process industries",
      "Power plants",
      "Water treatment plants",
    ],
  },
  {
    title: "Fit-out Electromechanical Support",
    shortDesc: "Complete MEP integration for interior fit-out projects",
    fullDesc:
      "We provide full electromechanical support for interior fit-out projects, including electrical, plumbing, HVAC, and instrumentation systems. Our services ensure seamless integration, compliance with standards, and on-time project delivery.",
    features: [
      "MEP coordination & execution",
      "System integration with interior design",
      "On-site installation & testing",
      "Compliance with safety & quality standards",
      "Project management from start to finish",
    ],
    applications: [
      "Commercial offices",
      "Retail spaces",
      "Hotels & resorts",
      "Luxury residential projects",
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
        style={{ backgroundImage: "url('/serviceImgs/maintain.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/65 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Maintenance & Specialized Services
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
            <span className="block sm:inline">maintenance</span>
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
              Expert Maintenance & Specialized Services and Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-4 sm:px-0"
            >
              We offer expert maintenance and specialized electromechanical
              services to ensure reliability, precision, and optimal
              performance. From preventive and corrective maintenance to fibre
              optic splicing, industrial instrument installation, and complete
              MEP support for fit-outs, our solutions keep your systems running
              efficiently while reducing downtime and extending equipment life
              across residential, commercial, and industrial facilities.
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
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
                  className="p-4 sm:p-6 lg:p-8"
                >
                  <motion.h3
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3"
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
                          className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
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