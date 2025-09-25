// app/services/page.js
import Footer from "@/components/Footer";
import { Send } from "lucide-react";
import Link from "next/link";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";

export const metadata = {
  title: "Our Services | IG Electromech Technical Services LLC",
  description:
    "Explore IG Electromech’s comprehensive electromechanical services in UAE including PLC & VFD Panels, HVAC, Electrical, Plumbing, Maintenance, and more.",
  keywords: [
    "electromechanical services UAE",
    "PLC panels",
    "HVAC installation",
    "electrical maintenance",
    "plumbing solutions",
    "industrial automation UAE",
  ],
  openGraph: {
    title: "Our Services | IG Electromech",
    description:
      "Comprehensive electromechanical services for residential, commercial, and industrial projects across UAE.",
    url: "https://igelectromech.ae/services",
    siteName: "IG Electromech",
    locale: "en_US",
    type: "website",
  },
};
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
    <main className="bg-white pt-20 max-w-7xl mx-auto">
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
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            <span className="mx-1">/</span>
            <span>Services</span>
          </nav>
        </div>
      </section>
      <section className="bg-white py-16 px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center py-5">
          {/* Left Section */}
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

      {/* Services Categories */}
      <section className="container mx-auto">
        {services.map((group, idx) => (
          <div key={idx} className="relative overflow-hidden py-10 border-t-3">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-center bg-cover bg-fixed"
              style={{
                backgroundImage: `url('/serviceImgs/${group.img}')`,
              }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-8 inline-block pb-2">
                {group.category}
                <div className=" mx-auto h-1 mt-5 w-32 md:w-40 bg-gradient-to-r from-blue-500 to-red-500 rounded"></div>
              </h2>

              {/* Grid */}
              <div className="flex flex-wrap justify-center gap-8">
                {group.items.map((service, i) => (
                  <div
                    key={i}
                    className="flex-1 basis-[280px] max-w-[400px] h-[230px] p-6
                 bg-white/10 backdrop-blur-xs border border-white/30 
                 rounded-2xl shadow-lg flex flex-col justify-between
                 hover:scale-105 transition-transform"
                  >
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-3 drop-shadow">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-md leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 md:mt-16 text-center transition-all duration-700 delay-500 opacity-100 rounded-lg">
                <Link
                  href="/services"
                  className="gradient-border group inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 text-white font-medium rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 gap-2 text-sm md:text-base"
                >
                  <span className="font-bold">Learn More</span>
                  <FaArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
