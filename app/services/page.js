"use client";
import Footer from "@/components/Footer";
import { Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaLongArrowAltRight, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    slug: "mechanical",
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
    slug: "core-hvac-services",
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
    slug: "plumbing-civil-support",
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
    slug: "maintenance-specialized",
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

export default function ServicesPage() {
  return (
    <main className="bg-white pt-20">
      {/* Hero Section */}
      <section
        className="relative text-center bg-fixed bg-center bg-cover text-white py-24"
        style={{ backgroundImage: "url('/serviceBgMain.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65 z-0"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What we can do for you
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Comprehensive electromechanical solutions tailored to residential,
            commercial, and industrial projects.
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="absolute bottom-0 left-5 px-12 py-4 z-10 text-left">
          <nav className="text-sm md:text-base">
            <span className="mr-2">You&apos;re here →</span>
            <Link href="" className="hover:text-blue-400">
              Home
            </Link>
            <span className="mx-1">/</span>
            <span>Services</span>
          </nav>
        </div>
      </section>

      <section className="bg-white py-10 px-4 md:px-20 border-b-2 border-black">
        <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center py-5">
          {/* Left Section */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-red-500/20 blur-2xl"></div>
          <div className="absolute -bottom-20 -left-30 w-40 h-40 rounded-full bg-blue-500/20 blur-2xl"></div>
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-3">
              Our Range of Services
            </h2>
            <p className="text-xl text-gray-600 ml-1">
              From electrical automation to HVAC, plumbing, and specialized
              maintenance, we deliver complete electromechanical solutions
              tailored to residential, commercial, and industrial projects
              across the UAE.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <ul className="space-y-4">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaLongArrowAltRight size={20} className="mr-3" />
                  <span className="text-gray-600 text-xl">
                    {service.category}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Multiple Carousels Section */}
      <section
        className="relative py-10 px-4 md:px-20
             bg-[url('/materialBg.png')] bg-fixed bg-center bg-cover"
      >
        {/* Soft white overlay so the pattern stays subtle */}
        <div className="absolute inset-0 bg-white/90 pointer-events-none"></div>

        {/* Content needs to be above the overlay */}
        <div className="relative z-10">
          {services.map((service, serviceIndex) => (
            <div
              key={serviceIndex}
              className="max-w-7xl mx-auto border-b-3 pb-10 mb-10 border-black/70"
            >
              {/* Service Category Header */}
              <motion.div
                className="mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {service.category}
                </h2>
                <div className="w-24 h-1 bg-red-600 mx-auto"></div>
              </motion.div>

              {/* Carousel Container with Fixed Background per category (text-only slides) */}
              <div className="relative mx-auto">
                <div className="relative h-[300px] md:h-[380px] w-[700px] overflow-hidden rounded-xl mx-auto">
                  <Image
                    src={`/serviceImgs/${service.img}`}
                    alt={service.category}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/10"></div>

                  {/* Swiper for Text Content Only */}
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
                              className="p-10 md:px-20 text-white w-full"
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              <h3 className="text-1xl sm:text-2xl md:text-3xl font-bold mb-3">
                                {item.title}
                              </h3>
                              <p className="text-white/90 text-base md:text-md leading-relaxed">
                                {item.desc}
                              </p>

                              <div className="mt-4 flex items-center gap-2">
                                <span className="text-sm text-white/70">
                                  {itemIndex + 1} of {service.items.length}
                                </span>
                              </div>
                            </motion.div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  {/* Arrows inside the carousel (fixed + layered) */}
                  {service.items.length > 1 && (
                    <>
                      <button
                        className={`custom-prev-${serviceIndex} absolute left-4 md:left-6 bottom-1/2 transform translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 sm:p-3 rounded-full text-white shadow-lg z-10 transition-all cursor-pointer`}
                      >
                        <FaArrowLeft />
                      </button>
                      <button
                        className={`custom-next-${serviceIndex} absolute right-4 md:right-6 bottom-1/2 transform translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 sm:p-3 rounded-full text-white shadow-lg z-10 transition-all cursor-pointer`}
                      >
                        <FaArrowRight />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
