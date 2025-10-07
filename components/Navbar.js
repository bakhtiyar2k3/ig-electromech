"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        pathname === "/"
          ? scrolled
            ? "bg-white py-2 shadow-md"
            : "py-4"
          : "bg-white py-2 border-b border-gray-200 shadow-sm"
      }`}
      ref={menuRef}
    >
      <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logoCut.png"
              alt="Logo"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#01347a] tracking-tight whitespace-nowrap">
                IG Electromech
              </span>
              <span
                className={`hidden sm:block text-xs md:text-sm font-bold -mt-1 whitespace-nowrap ${
                  pathname === "/" && !scrolled ? "text-white" : "text-black"
                }`}
              >
                Technical Services L.L.C
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 font-bold tracking-wide group cursor-pointer ${
                  pathname === "/" && !scrolled ? "text-white" : "text-black"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {/* underline if active or hover */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActive ? "w-[90%]" : "w-0 group-hover:w-[90%]"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors cursor-pointer ${
              pathname === "/" && !scrolled ? "text-white" : "text-black"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X
                size={24}
                className="transform rotate-180 transition-transform duration-300"
              />
            ) : (
              <Menu
                size={24}
                className="transform rotate-0 transition-transform duration-300"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`py-3 px-6 font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}