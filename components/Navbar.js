"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 import this

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef(null);
  const pathname = usePathname(); // 👈 current route

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
            ? "bg-white py-2"
            : "bg-gradient-tor from-[#c0e4ffb8] via-transparent to-transparent py-4"
          : "bg-white py-2 border-b border-black"
      }`}
      ref={menuRef}
    >
      <div className="px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logoCut.png"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#01347a] tracking-tight">
                IG Electromech
              </span>
              <span
                className={`text-sm font-bold -mt-1 text-black ${
                  pathname === "/" && !scrolled ? "textwhite" : "text-black"
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
            const isActive = pathname === item.href; // 👈 check active link
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
                size={28}
                className="transform rotate-180 transition-transform duration-300"
              />
            ) : (
              <Menu
                size={28}
                className="transform rotate-0 transition-transform duration-300"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 p-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`py-3 px-4 font-medium rounded-md transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-blue-900 text-white"
                    : "text-white hover:bg-gray-800 hover:text-blue-900"
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
