/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Coffee, Menu, X, ArrowRight, MessageSquare } from "lucide-react";
import { COMPANY_PROFILE, IMAGES } from "../data";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  openAssistant: () => void;
}

export default function Header({ activeSection, setActiveSection, openAssistant }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Beranda" },
    { id: "profile", label: "Company Profile" },
    { id: "produk", label: "Produk Premium" },
    { id: "artikel", label: "Kisah Sukses" },
    { id: "logo", label: "Desain Logo" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-nav-bar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-stone-950/95 backdrop-blur-md shadow-lg border-b border-stone-800/50 py-3"
          : "bg-gradient-to-b from-stone-950/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick("hero")}
          >
            <div className="relative w-10 h-10 rounded-full border border-coffee-gold/40 overflow-hidden flex items-center justify-center bg-stone-900 group-hover:border-coffee-gold transition-colors">
              <img
                src={IMAGES.logo}
                alt="KDKMP Logo Thumbnail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-white tracking-wide block leading-none group-hover:text-coffee-gold transition-colors">
                KDKMP
              </span>
              <span className="text-[10px] text-stone-400 font-mono uppercase tracking-widest block mt-0.5">
                Garut, Indonesia
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wide uppercase transition-all duration-200 rounded-md cursor-pointer ${
                  activeSection === item.id
                    ? "text-coffee-gold bg-stone-900/60 border border-coffee-gold/20"
                    : "text-stone-300 hover:text-white hover:bg-stone-900/30"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              id="cta-assistant-btn"
              onClick={openAssistant}
              className="flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">AI Co-Pilot</span>
            </button>

            {/* Mobile menu button */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-900 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-950 border-b border-stone-800/80 animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left block px-4 py-3 rounded-md text-sm font-medium tracking-wide uppercase ${
                  activeSection === item.id
                    ? "text-coffee-gold bg-stone-900 border-l-4 border-coffee-gold"
                    : "text-stone-300 hover:text-white hover:bg-stone-900"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              id="mobile-nav-assistant-btn"
              onClick={() => {
                setIsOpen(false);
                openAssistant();
              }}
              className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium text-red-400 hover:bg-stone-900"
            >
              <MessageSquare className="w-4 h-4 text-red-500" />
              Buka AI Co-Pilot KDKMP
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
