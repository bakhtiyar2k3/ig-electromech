"use client";

import React from "react";

const productsData = [
  {
    category: "Electrical Products",
    items: [
      { name: "Distribution Boards (DB)", brands: ["Al Fanar"] },
      { name: "MCBs (Miniature Circuit Breakers)", brands: ["ABB", "Schneider Electric"] },
      { name: "VFDs (Variable Frequency Drives)", brands: ["Schneider Electric ATV212"] },
      { name: "PLCs (Programmable Logic Controllers)", brands: ["Siemens", "Schneider Electric", "Rockwell"] },
      { name: "Terminal Blocks", brands: ["Weidmuller", "ABB", "Klemens"] },
    ],
  },
  {
    category: "Instrumentation",
    items: [
      { name: "Pressure Gauges (PG)", brands: ["WIKA", "Winner"] },
      { name: "Temperature Gauges (TG)", brands: ["WIKA", "Winner"] },
      { name: "Differential Pressure Gauges (DPG)", brands: ["WIKA", "Winner"] },
      { name: "Stainless Steel Tubing", brands: ["Global", "Kleev"] },
      { name: "Direct Rotary Valves (DRV)", brands: ["MMA", "L&G"] },
    ],
  },
  {
    category: "Mechanical Products",
    items: [
      { name: "Fan Coil Units (FCU)", brands: ["General", "Euro"] },
      { name: "Air Conditioners (AC)", brands: ["General", "Euro"] },
      { name: "Gate Valves", brands: ["J+J", "Herz"] },
      { name: "Flow Control Valves (FCV)", brands: ["J+J", "Herz"] },
      { name: "Pressure Independent Control Valves (PIVC)", brands: ["Herz", "Danfoss"] },
      { name: "Transmitters (PT/TT/DPT)", brands: ["Belimo"] },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          IG Electromech Product Catalog
        </h1>

        {productsData.map((category) => (
          <div key={category.category} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div key={item.name} className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition-shadow duration-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-700">
                    <span className="font-semibold">Brands / Models:</span> {item.brands.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us for Enquiry
          </a>
        </div>
      </div>
    </div>
  );
}
