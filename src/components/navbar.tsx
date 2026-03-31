"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Shield } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Coverage" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030d1a]/95 backdrop-blur-xl border-b border-[rgba(255,140,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff8c00] to-[#ffb347] flex items-center justify-center shadow-lg shadow-[#ff8c00]/30 group-hover:shadow-[#ff8c00]/50 transition-shadow">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-white leading-tight">CONCRETE</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#ff8c00] leading-tight">LIFTING INSURANCE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#94a3b8] hover:text-[#ff8c00] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff8c00] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+18005433843" className="flex items-center gap-2 text-sm font-semibold text-[#94a3b8] hover:text-[#ff8c00] transition-colors">
              <Phone className="w-4 h-4" />
              <span>1-800-543-3843</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-gradient-to-r from-[#ff8c00] to-[#ffb347] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#ff8c00]/30 hover:shadow-[#ff8c00]/50 transition-all hover:scale-105"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-[#ff8c00] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#030d1a]/98 backdrop-blur-xl border-b border-[rgba(255,140,0,0.15)] px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-semibold text-[#94a3b8] hover:text-[#ff8c00] transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[rgba(255,140,0,0.15)]">
              <a href="tel:+18005433843" className="flex items-center gap-2 text-sm font-semibold text-[#94a3b8] mb-4">
                <Phone className="w-4 h-4" />
                1-800-543-3843
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 bg-gradient-to-r from-[#ff8c00] to-[#ffb347] text-white font-bold text-sm rounded-xl"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
