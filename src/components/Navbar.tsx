"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <header
      className={`fixed top-4 left-4 right-4 md:left-8 md:right-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-[calc(100%-4rem)] lg:max-w-7xl z-50 transition-all duration-300 rounded-full border ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-gray-200 py-0" : "bg-white/80 backdrop-blur-sm shadow-md shadow-gray-200/50 border-gray-200/60 py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            {/* CodePeak Nepal Logo */}
            <img src="/assets/codepeak-logo.png" alt="CodePeak Nepal Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="text-navy hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-navy hover:text-primary transition-colors">About</Link>
            <Link href="/services" className="text-navy hover:text-primary transition-colors">Services</Link>
            <Link href="/pricing" className="text-navy hover:text-primary transition-colors">Pricing</Link>
            <Link href="/portfolio" className="text-navy hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/contact" className="text-navy hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex">
            <Link href="/contact" className="bg-primary text-white px-6 py-2.5 rounded-md hover:bg-primary/90 transition-all duration-300 font-semibold shadow-md shadow-primary/25">
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <Link href="/" className="font-medium">Home</Link>
              <Link href="/about" className="font-medium">About</Link>
              <Link href="/services" className="font-medium">Services</Link>
              <Link href="/pricing" className="font-medium">Pricing</Link>
              <Link href="/portfolio" className="font-medium">Portfolio</Link>
              <Link href="/contact" className="font-medium">Contact</Link>
              <Link href="/contact" className="bg-primary text-white text-center px-6 py-3 rounded-md mt-4 font-semibold shadow-md shadow-primary/25">
                Get Started Free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
