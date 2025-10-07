"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaLongArrowAltRight, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const services = [
  {
    category: "Electrical & Automation",
    slug: "electrical-automation",
    img: "electrical.jpg",
    items: [
      {
        title: "PLC & VFD Panels",
        desc: "Design, manufacturing, and troubleshooting of automation panels for industrial operations.",
      },
      {
        title: "Electrical Systems Installation & Maintenance",
        desc: "Complete electrical works with focus on safety, compliance, and efficiency.",
      },
      {
        title: "LV Panel Manufacturing & Troubleshooting",
        desc: "Custom fabrication, installation, and repair of low-voltage panels.",
      },
      {
        title: "Cable Pulling & Structured Cabling",
        desc: "Professional execution of cable routing and structured wiring solutions.",
      },
      {
        title: "ELV Systems (CCTV, Intercom, Access Control)",
        desc: "Smart security and communication systems integration for modern facilities.",
      },
      {
        title: "CCTV Installation Work",
        desc: "Professional setup and integration of surveillance systems for enhanced security.",
      },
      {
        title: "Home Automation",
        desc: "Smart home solutions with integrated control over lighting, HVAC, and security.",
      },
    ],
  },
  {
    category: "Mechanical & Installation",
    slug: "mechanical-installation",
    img: "mechanical.jpg",
    items: [
      {
        title: "HVAC Design, Installation & Maintenance",
        desc: "Energy-efficient climate control systems for residential, commercial, and industrial projects.",
      },
      {
        title: "FCU (Fan Coil Unit) Installation & Services",
        desc: "Reliable installation and maintenance of FCUs for effective air distribution.",
      },
      {
        title: "Mechanical Works & Fabrication",
        desc: "Custom mechanical solutions, fabrication, and equipment installation.",
      },
      {
        title: "Repair of Pumps",
        desc: "Specialized repair and servicing of water, chilled water, and industrial pumps.",
      },
      {
        title: "Installation of Industrial Equipment",
        desc: "Installation of DPTs, PTs, Flow Meters, Temperature Transmitters, RTDs, PGs, TGs, and SS tubing works.",
      },
    ],
  },
  {
    category: "Core HVAC Services",
    slug: "core-hvac",
    img: "hvac.jpg",
    items: [
      {
        title: "AHU System Upgrades",
        desc: "Upgrade from DOL/contactors to VFD panels with full BMS integration for intelligent control.",
      },
      {
        title: "Valve Installations",
        desc: "Two-way and three-way valves for precise AHU return line water flow management.",
      },
      {
        title: "AHU Servicing & Maintenance",
        desc: "Filter cleaning and servicing to improve airflow, air quality, and equipment lifespan.",
      },
      {
        title: "Pump Integration",
        desc: "Convert chilled water pumps to VFD control for energy savings, reduced wear, and longer life.",
      },
      {
        title: "Delta T Control & Sensor Installation",
        desc: "DP transmitters, supply/return line sensors, and PICV integration for optimized chiller performance.",
      },
      {
        title: "Energy Monitoring & Billing",
        desc: "BTU meter installation for energy audits, fair billing, and tracking efficiency in multi-tenant buildings.",
      },
    ],
  },
  {
    category: "Plumbing & Civil Support",
    slug: "plumbing-support",
    img: "plumbing.jpg",
    items: [
      {
        title: "Plumbing & Drainage Solutions",
        desc: "Complete plumbing systems, installations, and drainage management.",
      },
      {
        title: "GI & PVC Trunking & Cabling Works",
        desc: "Durable and industry-standard trunking and cabling solutions.",
      },
      {
        title: "Gypsum Board Installation & Repair",
        desc: "High-quality partitioning, ceiling works, and repairs.",
      },
      {
        title: "Interior Decoration & Design",
        desc: "Creative and functional interiors integrating technical systems.",
      },
    ],
  },
  {
    category: "Maintenance & Specialized Services",
    slug: "maintenance",
    img: "maintain.jpg",
    items: [
      {
        title: "Preventive & Corrective Maintenance",
        desc: "Regular inspections and emergency repairs ensuring smooth operations.",
      },
      {
        title: "Fibre Optic Splicing & Testing",
        desc: "Precision splicing, termination, and testing for reliable networks.",
      },
      {
        title: "Industrial Instrument Installation",
        desc: "Professional calibration and installation of industrial monitoring instruments.",
      },
      {
        title: "Fit-out Electromechanical Support",
        desc: "Complete MEP support for interior fit-out projects.",
      },
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

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto pt-20 relative">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative text-center bg-fixed bg-center bg-cover text-white py-16 md:py-24"
          style={{ backgroundImage: "url('/serviceBgMain.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/65 z-0"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              What we can do for you
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300 px-4"
            >
              Comprehensive electromechanical solutions tailored to residential,
              commercial, and industrial projects.
            </motion.p>
          </div>

          {/* Breadcrumb */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute bottom-0 left-0 sm:left-5 px-4 sm:px-12 py-4 z-10 text-left"
          >
            <nav className="text-xs sm:text-sm md:text-base">
              <span className="mr-2 hidden sm:inline">You&apos;re here →</span>
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <span className="mx-1">/</span>
              <span>Services</span>
            </nav>
          </motion.div>
        </motion.section>

        {/* Overview Section */}
        <section className="bg-white border-b-2 border-black">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center py-10 sm:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-20 border-3"
          >
            {/* Decorative Blurs */}
            <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-red-500/20 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-blue-500/20 blur-2xl"></div>

            {/* Left Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                Our Range of Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 ml-0 sm:ml-1">
                From electrical automation to HVAC, plumbing, and specialized
                maintenance, we deliver complete electromechanical solutions
                tailored to residential, commercial, and industrial projects
                across the UAE.
              </p>
            </motion.div>

            {/* Right Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ul className="space-y-3 sm:space-y-4">
                {services.map((service, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-center gap-2 group cursor-pointer"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaLongArrowAltRight
                      size={20}
                      className="mr-2 sm:mr-3 text-gray-600 group-hover:text-blue-500 transition-colors flex-shrink-0"
                    />
                    <Link href={`services/${service.slug}`}>
                      <span className="text-gray-600 text-base sm:text-lg md:text-xl group-hover:text-gray-800 transition-colors">
                        {service.category}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* Multiple Carousels Section */}
        <section className="relative py-10 sm:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-[url('/materialBg.png')] bg-fixed bg-center bg-cover">
          <div className="absolute inset-0 bg-white/93 pointer-events-none"></div>

          <div className="relative z-10">
            {services.map((service, serviceIndex) => (
              <motion.div
                key={serviceIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col max-w-7xl mx-auto border-b-2 pb-8 sm:pb-10 mb-8 sm:mb-10 border-black/20 last:border-b-0"
              >
                {/* Service Category Header */}
                <motion.div
                  className="mb-6 sm:mb-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {service.category}
                  </h2>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative mx-auto w-full">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative h-[280px] sm:h-[320px] md:h-[380px] w-full max-w-[90vw] sm:max-w-[600px] md:max-w-[700px] overflow-hidden rounded-xl mx-auto"
                  >
                    <Image
                      src={`/serviceImgs/${service.img}`}
                      alt={service.category}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/10"></div>

                    {/* Swiper for Text Content */}
                    <div className="absolute inset-0 flex items-end">
                      <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                          nextEl: `.custom-next-${serviceIndex}`,
                          prevEl: `.custom-prev-${serviceIndex}`,
                        }}
                        pagination={false}
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        loop={service.items.length > 1}
                        className="w-full h-full"
                      >
                        {service.items.map((item, itemIndex) => (
                          <SwiperSlide key={itemIndex}>
                            <div className="h-full flex items-end">
                              <motion.div
                                className="p-6 sm:p-8 md:p-10 lg:px-20 text-white w-full"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                              >
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                                  {item.title}
                                </h3>
                                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                                  {item.desc}
                                </p>

                                <div className="mt-3 sm:mt-4 flex items-center gap-2 justify-center">
                                  <span className="text-xs sm:text-sm text-white/70">
                                    {itemIndex + 1} of {service.items.length}
                                  </span>
                                </div>
                              </motion.div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    {/* Navigation Arrows */}
                    {service.items.length > 1 && (
                      <>
                        <button
                          className={`custom-prev-${serviceIndex} absolute left-2 sm:left-4 md:left-6 bottom-1/9 transform translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 sm:p-3 rounded-full text-white shadow-lg z-10 transition-all cursor-pointer`}
                        >
                          <FaArrowLeft className="text-sm sm:text-base" />
                        </button>
                        <button
                          className={`custom-next-${serviceIndex} absolute right-2 sm:right-4 md:right-6 bottom-1/9 transform translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 sm:p-3 rounded-full text-white shadow-lg z-10 transition-all cursor-pointer`}
                        >
                          <FaArrowRight className="text-sm sm:text-base" />
                        </button>
                      </>
                    )}
                  </motion.div>
                </div>

                {/* Learn More Button */}
                <motion.a
                  href={`services/${service.slug}`}
                  className="flex mx-auto gradient-border items-center text-black px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg relative overflow-hidden group mt-6 sm:mt-8 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="relative z-10">Learn More</span>
                  <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 mt-0.5 sm:mt-1 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
