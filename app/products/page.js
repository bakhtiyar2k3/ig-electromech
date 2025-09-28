"use client";

import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LuMailQuestion } from "react-icons/lu";
import Link from "next/link";
import { IoSendOutline } from "react-icons/io5";
import { CiFilter, CiSearch } from "react-icons/ci";
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
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            IG Electromech Product Catalog
          </h1>
          <div className="w-30 h-1 rounded-2xl bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional electrical, mechanical, and HVAC solutions for
            industrial and commercial applications
          </p>
        </div> */}
        <section
          className="relative text-center bg-fixed bg-center bg-cover text-white py-16 md:py-20 px-4"
          style={{ backgroundImage: "url('/serviceBgMain.jpg')" }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/65 z-0"></div>
          <div className="text-center mb-5 relative">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              IG Electromech Product Catalog
            </h1>
            <div className="mx-auto h-1 w-24 md:w-32 bg-gradient-to-r from-blue-500 to-red-500 rounded mb-5"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
              Professional electrical, mechanical, and HVAC solutions for
              industrial and commercial applications
            </p>
          </div>
        </section>

        {/* Search & Filter Section */}
        <div className="bg-white -xl shadow-sm border p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full lg:max-w-md">
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
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              {/* Brand Filter */}
              <div className="relative">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-300 -lg hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center"
                >
                  <CiFilter size={20} className="mt-1" />
                  Brands ({brandFilters.length})
                </button>

                {isFilterOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsFilterOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 -lg shadow-xl z-50 max-h-96 overflow-y-auto">
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
                        {allBrands.map((brand) => (
                          <label
                            key={brand}
                            className="flex items-center mb-3 cursor-pointer group"
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
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {brandFilters.length > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="px-4 py-3 text-red-600 border border-red-200 -lg hover:bg-red-50 transition-colors w-full sm:w-auto"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Active filters display */}
          {brandFilters.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {brandFilters.map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center gap-1 px-3 py-1 -full bg-blue-50 text-blue-700 text-sm"
                >
                  {brand}
                  <button
                    onClick={() => toggleBrandFilter(brand)}
                    className="hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="space-y-12 pb-15 ">
          {filteredProducts.map((category) =>
            category.items.length > 0 ? (
              <div
                key={category.category}
                className="bg-white -xl shadow-sm border border-gray-200 overflow-hidden pt-5 px-4"
              >
                <div className="bg-gradient=-to-r from-blue-900 via-transparent to-red-500 px-6 py-4">
                  <h2 className="text-2xl font-semibold text-black">
                    {category.category}
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.items.map((item) => {
                      const isAdded = enquiryList.includes(item.name);
                      return (
                        <div
                          key={item.name}
                          className="bg-gray-50 rounded-md border border-gray-400 p-4 hover:shadow-md transition-shadow group flex flex-col"
                        >
                          {/* Image */}
                          <div
                            className="relative w-full mb-4"
                            style={{ paddingTop: "75%" }}
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              style={{ objectFit: "contain" }}
                              className="transition-transform duration-300"
                            />
                          </div>

                          {/* Content (title + brands) */}
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                              {item.name}
                            </h3>

                            <div className="mb-4">
                              <p className="text-sm text-gray-600 mb-1">
                                Brands:
                              </p>
                              <p className="text-sm text-gray-800 font-medium">
                                {item.brands.join(", ")}
                              </p>
                            </div>
                          </div>

                          {/* Button */}
                          <button
                            onClick={() => toggleEnquiry(item.name)}
                            className={`py-2 w-fit px-6 rounded-md font-medium transition-colors text-sm ${
                              isAdded
                                ? "bg-red-100 text-red-700 hover:bg-red-200 border border-red-200"
                                : "bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200"
                            }`}
                          >
                            {isAdded ? "Remove from Enquiry" : "Add Enquiry"}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>

        {/* No Results Message */}
        {filteredProducts.every((category) => category.items.length === 0) && (
          <div className="text-center py-12">
            <PiSmileySadLight className="mx-auto h-12 w-12 text-gray-800" />

            <h3 className="mt-4 text-lg font-medium text-gray-900">
              No products found
            </h3>
            <p className="mt-2 text-gray-600">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 px-6 py-2 text-black border border-black rounded-sm hover:bg-blue-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Floating Enquire Button */}
        {enquiryList.length > 0 && (
          <div className="fixed bottom-6 right-6 z-50">
            <div className="p-[2px] bg-gradient-to-r from-red-500 to-blue-500 rounded-lg">
              <Link
                href="/contact"
                className="text-black bg-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center gap-3"
              >
                Enquire ({enquiryList.length})
                <IoSendOutline className="mt-1" />
              </Link>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
