"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  return (
    <>
      {/* ---------- NAVBAR ---------- */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="#" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white font-bold">
                S
              </span>
              <span className="font-semibold text-slate-900">
                School
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-violet-600 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                href="/admissionform"
                className="text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg transition"
              >
                Admission
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[4px]"
            >
              <span className="w-5 h-[2px] bg-slate-800"></span>
              <span className="w-5 h-[2px] bg-slate-800"></span>
              <span className="w-5 h-[2px] bg-slate-800"></span>
            </button>
          </div>
        </nav>
      </header>

      {/* ---------- MOBILE MENU ---------- */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-white z-50 shadow-lg transform transition-transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 space-y-4">

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-slate-700 font-medium hover:text-violet-600"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/admissionform"
            onClick={() => setMobileOpen(false)}
            className="block text-center bg-violet-600 text-white py-2 rounded-lg font-semibold"
          >
            Admission
          </Link>

        </div>
      </div>
    </>
  );
}