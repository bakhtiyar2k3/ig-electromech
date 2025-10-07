"use client";

import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LuMailQuestion } from "react-icons/lu";
import Link from "next/link";
import { IoSendOutline } from "react-icons/io5";
import { CiFilter, CiSearch } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

import { PiSmileySadLight } from "react-icons/pi";

const productsData = [
  {
    category: "Electrical Products",
    items: [
      {
        name: "Distribution Boards (DB)",
        brands: ["Al Fanar"],
        image: "/productImgs/db.jpg",
      },
      {
        name: "MCBs (Miniature Circuit Breakers)",
        brands: ["ABB", "Schneider Electric"],
        image: "/productImgs/mcb.jpg",
      },
      {
        name: "VFDs (Variable Frequency Drives)",
        brands: ["Schneider Electric ATV212"],
        image: "/productImgs/vfd.jpg",
      },
      {
        name: "PLCs (Programmable Logic Controllers)",
        brands: ["Siemens", "Schneider Electric", "Rockwell"],
        image: "/productImgs/plc.jpg",
      },
      {
        name: "Terminal Blocks",
        brands: ["Weidmuller", "ABB", "Klemens"],
        image: "/productImgs/terminal-blocks.jpg",
      },
    ],
  },
  {
    category: "Instrumentation",
    items: [
      {
        name: "Pressure Gauges (PG)",
        brands: ["WIKA", "Winner"],
        image: "/productImgs/pg.jpg",
      },
      {
        name: "Temperature Gauges (TG)",
        brands: ["WIKA", "Winner"],
        image: "/productImgs/tg.jpg",
      },
      {
        name: "Differential Pressure Gauges (DPG)",
        brands: ["WIKA", "Winner"],
        image: "/productImgs/dpg.jpg",
      },
      {
        name: "Differential Pressure Transmitters (DPT)",
        brands: ["Belimo", "Siemens"],
        image: "/productImgs/dpt.jpg",
      },
      {
        name: "Temperature Transmitters (TT)",
        brands: ["Belimo", "WIKA"],
        image: "/productImgs/tt.jpg",
      },
      {
        name: "BTU Meters",
        brands: ["Kamstrup", "Sontex", "Danfoss"],
        image: "/productImgs/btu-meter.jpg",
      },
    ],
  },
  {
    category: "Mechanical Products",
    items: [
      {
        name: "Fan Coil Units (FCU)",
        brands: ["General", "Euro"],
        image: "/productImgs/fcu.jpg",
      },
      {
        name: "Air Conditioners (AC)",
        brands: ["General", "Euro"],
        image: "/productImgs/ac.jpg",
      },
      {
        name: "Gate Valves",
        brands: ["J+J", "Herz"],
        image: "/productImgs/gate-valve.jpg",
      },
      {
        name: "Flow Control Valves (FCV)",
        brands: ["J+J", "Herz"],
        image: "/productImgs/flow-control-valve.jpg",
      },
      {
        name: "Pressure Independent Control Valves (PICV)",
        brands: ["Herz", "Danfoss"],
        image: "/productImgs/picv.jpg",
      },
      {
        name: "Stainless Steel Tubing",
        brands: ["Global", "Kleev"],
        image: "/productImgs/ss-tubing.jpg",
      },
      {
        name: "Direct Rotary Valves (DRV)",
        brands: ["MMA", "L&G"],
        image: "/productImgs/drv.jpg",
      },
      {
        name: "Transmitters (PT/TT/DPT)",
        brands: ["Belimo"],
        image: "/productImgs/transmitters.jpg",
      },
      {
        name: "Pumps (CHW Pumps)",
        brands: ["Grundfos", "Wilo", "KSB"],
        image: "/productImgs/pump.jpg",
      },
      {
        name: "Air Handling Units (AHU)",
        brands: ["Trosten", "Climaveneta", "York"],
        image: "/productImgs/ahu.jpg",
      },
    ],
  },
  {
    category: "HVAC Controls",
    items: [
      {
        name: "Building Management System (BMS)",
        brands: ["Honeywell", "Siemens", "Schneider Electric"],
        image: "/productImgs/bms.jpg",
      },
      {
        name: "Control Panels (DOL / VFD)",
        brands: ["Custom Fabricated"],
        image: "/productImgs/control-panel.jpg",
      },
      {
        name: "Delta T Sensors",
        brands: ["Siemens", "WIKA"],
        image: "/productImgs/delta-t-sensor.jpg",
      },
      {
        name: "AHU Controllers",
        brands: ["Belimo", "Johnson Controls"],
        image: "/productImgs/ahu-controller.jpg",
      },
      {
        name: "Energy Monitoring Systems",
        brands: ["Socomec", "Schneider Electric"],
        image: "/productImgs/energy-monitor.jpg",
      },
    ],
  },
];

export default function ProductsPage() {
  const [enquiryList, setEnquiryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilters, setBrandFilters] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("enquiryList")) || [];
    setEnquiryList(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("enquiryList", JSON.stringify(enquiryList));
  }, [enquiryList]);

  const toggleEnquiry = (productName) => {
    if (enquiryList.includes(productName)) {
      setEnquiryList(enquiryList.filter((item) => item !== productName));
    } else {
      setEnquiryList([...enquiryList, productName]);
    }
  };

  // Collect all brands for filter menu
  const allBrands = Array.from(
    new Set(
      productsData.flatMap((cat) => cat.items.flatMap((item) => item.brands))
    )
  ).sort();

  const toggleBrandFilter = (brand) => {
    if (brandFilters.includes(brand)) {
      setBrandFilters(brandFilters.filter((b) => b !== brand));
    } else {
      setBrandFilters([...brandFilters, brand]);
    }
  };

  // Filter products based on search term and brand filters
  const filteredProducts = productsData.map((category) => ({
    ...category,
    items: category.items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brands.some((b) =>
          b.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesBrand =
        brandFilters.length === 0 ||
        item.brands.some((b) => brandFilters.includes(b));

      return matchesSearch && matchesBrand;
    }),
  }));

  const clearAllFilters = () => {
    setBrandFilters([]);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto pt-20 relative">
        <section
          className="relative text-center bg-fixed bg-center bg-cover text-white py-16 md:py-20 px-4"
          style={{ backgroundImage: "url('/serviceBgMain.jpg')" }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/65 z-0"></div>
          <motion.div
            className="text-center mb-5 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              IG Electromech Product Catalog
            </motion.h1>
            <motion.div
              className="mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded mb-5"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Professional electrical, mechanical, and HVAC products for
              industrial and commercial applications
            </motion.p>
          </motion.div>
        </section>

        {/* Search & Filter Section */}
        <motion.div
          className="bg-white -xl shadow-sm border p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <motion.div
              className="flex-1 w-full lg:max-w-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products or brands..."
                  className="w-full p-3 pl-10 -lg border-b border-gray-900 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <CiSearch className="absolute left-3 top-4 h-5 w-5 text-gray-600" />
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row-reverse gap-3 w-full lg:w-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {/* Brand Filter */}
              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="cursor-pointer flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 -lg hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center"
                >
                  <CiFilter size={20} className="mt-1" />
                  Brands ({brandFilters.length})
                </button>

                <AnimatePresence>
                  {isFilterOpen && (
                    <>
                      <motion.div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsFilterOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      ></motion.div>
                      <motion.div
                        className="absolute right-0 mt-2 w-72 bg-white border border-gray-200  shadow-xl z-50 max-h-96 overflow-y-auto"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-4 border-b border-gray-200">
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-900">
                              Filter by Brand
                            </h3>
                            {brandFilters.length > 0 && (
                              <button
                                onClick={clearAllFilters}
                                className="text-sm text-red-600 hover:text-red-700"
                              >
                                Clear all
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="p-4">
                          {allBrands.map((brand, index) => (
                            <motion.label
                              key={brand}
                              className="flex items-center mb-3 cursor-pointer group"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.2,
                                delay: index * 0.03,
                              }}
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300  focus:ring-blue-500"
                                checked={brandFilters.includes(brand)}
                                onChange={() => toggleBrandFilter(brand)}
                              />
                              <span className="ml-3 text-gray-700 group-hover:text-gray-900">
                                {brand}
                              </span>
                            </motion.label>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {brandFilters.length > 0 && (
                <motion.button
                  onClick={clearAllFilters}
                  className="px-4 py-3 text-red-600 border border-red-200 -lg hover:bg-red-50 transition-colors w-full sm:w-auto"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Clear Filters
                </motion.button>
              )}
            </motion.div>
          </div>

          {/* Active filters display */}
          <AnimatePresence>
            {brandFilters.length > 0 && (
              <motion.div
                className="mt-4 flex flex-wrap gap-2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {brandFilters.map((brand) => (
                  <motion.span
                    key={brand}
                    className="inline-flex items-center gap-1 px-3 py-1 -full bg-blue-50 text-blue-700 text-sm rounded-md border border-blue-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    layout
                  >
                    {brand}
                    <button
                      onClick={() => toggleBrandFilter(brand)}
                      className="hover:text-blue-900"
                    >
                      ×
                    </button>
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Products Grid */}
        <div className="space-y-12 pb-15 ">
          {filteredProducts.map((category, categoryIndex) =>
            category.items.length > 0 ? (
              <motion.div
                key={category.category}
                className="bg-white shadow-sm border-t border-gray-900 overflow-hidden px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <motion.div
                  className="p-6 pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.1 + 0.2,
                  }}
                >
                  <h2 className="text-2xl font-semibold text-black">
                    {category.category}
                  </h2>
                </motion.div>
                <div className="p-6">
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    {category.items.map((item) => {
                      const isAdded = enquiryList.includes(item.name);
                      return (
                        <motion.div
                          key={item.name}
                          className="bg-gray-50 rounded-md border border-gray-400 p-4 hover:shadow-md transition-shadow group flex flex-col"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Image */}
                          <motion.div
                            className="relative w-full mb-4"
                            style={{ paddingTop: "75%" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              style={{ objectFit: "contain" }}
                              className="transition-transform duration-300"
                            />
                          </motion.div>

                          {/* Content (title + brands) */}
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                              {item.name}
                            </h3>

                            <div className="mb-4">
                              <p className="text-sm text-gray-600 mb-1">
                                Brands:
                              </p>
                              <p className="text-sm text-gray-800 font-medium ">
                                {item.brands.join(", ")}
                              </p>
                            </div>
                          </div>

                          {/* Button */}
                          <motion.button
                            onClick={() => toggleEnquiry(item.name)}
                            className={`py-2 w-fit px-6 rounded-md font-medium transition-colors cursor-pointer text-sm ${
                              isAdded
                                ? "bg-red-100 text-red-700 hover:bg-red-200 border border-red-200"
                                : "bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200"
                            }`}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.1 }}
                          >
                            {isAdded ? "Remove from Enquiry" : "Add to Enquiry"}
                          </motion.button>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            ) : null
          )}
        </div>

        {/* No Results Message */}
        <AnimatePresence>
          {filteredProducts.every(
            (category) => category.items.length === 0
          ) && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <PiSmileySadLight className="mx-auto h-12 w-12 text-gray-800" />
              </motion.div>

              <motion.h3
                className="mt-4 text-lg font-medium text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                No products found
              </motion.h3>
              <motion.p
                className="mt-2 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Try adjusting your search or filter criteria
              </motion.p>
              <motion.button
                onClick={clearAllFilters}
                className="mt-4 px-6 py-2 text-black border border-black rounded-sm hover:bg-blue-700 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear all filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Enquire Button */}
        <AnimatePresence>
          {enquiryList.length > 0 && (
            <motion.div
              className="fixed bottom-6 right-6 z-50"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <motion.div
                className="p-[2px] bg-gradient-to-r from-red-500 to-blue-500 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="text-black bg-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl flex items-center gap-3"
                >
                  Enquire ({enquiryList.length})
                  <IoSendOutline className="mt-1" />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}
