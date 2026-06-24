"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1200px] h-[72px] z-[100] transition-all duration-300 ease-in-out border border-gray-100 bg-white rounded-full ${
          scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.06)]" : "shadow-sm"
        }`}
      >
        <div className="px-6 md:px-8 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/assets/codepeak-logo.png" 
              alt="Logo" 
              className="h-[36px] md:h-[48px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans font-medium text-[15px] text-gray-500 hover:text-navy transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link 
              href="/contact" 
              className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-navy rounded-full font-medium transition-colors"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-navy p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[1000] bg-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 h-[88px] flex items-center justify-between border-b border-gray-100 shrink-0">
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
            <img 
              src="/assets/codepeak-logo.png" 
              alt="Logo" 
              className="h-[36px] md:h-[48px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 mix-blend-multiply" 
            />
          </Link>
          <button
            className="text-navy p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-2xl font-medium text-gray-600 hover:text-navy flex items-center justify-between border-b border-gray-100 pb-4"
            >
              {link.name}
              <ChevronRight className="text-primary" />
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-8 shrink-0">
          <Link 
            href="/contact" 
            className="block w-full text-center px-6 py-4 bg-primary text-white rounded-full font-bold transition-colors shadow-md shadow-primary/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get started
          </Link>
        </div>
      </div>
    </>
  );
}
