/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CompanyProfile from "./components/CompanyProfile";
import ProductCatalog from "./components/ProductCatalog";
import SuccessStory from "./components/SuccessStory";
import LogoDesign from "./components/LogoDesign";
import SmartAssistant from "./components/SmartAssistant";
import { MessageSquare, Heart, Sparkles, MapPin, Globe, Coffee, ArrowUp } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);
  const [assistantInitialMessage, setAssistantInitialMessage] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Scroll to section helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Nav header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  // Monitor scroll for nav highlighting & Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Highlight active section based on scroll position
      const sections = ["hero", "profile", "produk", "artikel", "logo"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle product configurator inquiry
  const handleProductInquiry = (inquiryMsg: string) => {
    setAssistantInitialMessage(inquiryMsg);
    setIsAssistantOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-coffee-gold selection:text-stone-950 font-sans antialiased text-stone-900">
      
      {/* Top Navigation Bar */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        openAssistant={() => {
          setAssistantInitialMessage("");
          setIsAssistantOpen(true);
        }}
      />

      {/* Main Sections */}
      <main className="relative">
        
        {/* 1. Hero Landing Section */}
        <Hero
          onLearnMore={() => scrollToSection("profile")}
          onOpenAssistant={() => {
            setAssistantInitialMessage("");
            setIsAssistantOpen(true);
          }}
        />

        {/* 2. Company Profile Section */}
        <CompanyProfile />

        {/* 3. Product Catalog Section */}
        <ProductCatalog onInquiry={handleProductInquiry} />

        {/* 4. Success Story Section */}
        <SuccessStory />

        {/* 5. Logo Philosophy & Design Section */}
        <LogoDesign />

      </main>

      {/* Shared Portal Footer */}
      <footer className="bg-stone-950 text-white pt-16 pb-8 border-t border-stone-900 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-serif text-xl font-bold tracking-wider text-white">
                KDKMP Garut
              </span>
              <span className="h-4 w-[1px] bg-stone-800"></span>
              <span className="text-[10px] font-mono tracking-widest text-red-600 font-bold uppercase">
                Merah Putih
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm text-justify">
              Koperasi Desa Merah Putih (KDKMP) berkomitmen memajukan tata niaga kopi Arabika khas Garut secara adil dan berakar gotong royong demi kelestarian alam dan kesejahteraan petani lokal di lereng Gunung Papandayan.
            </p>
          </div>

          {/* Nav Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-mono tracking-widest text-coffee-gold uppercase">
              Navigasi Cepat
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-stone-400">
              {["profile", "produk", "artikel", "logo"].map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="text-left hover:text-white transition-colors cursor-pointer capitalize"
                >
                  {sec === "produk" ? "Produk Kopi Premium" : sec === "artikel" ? "Kisah Sukses Koperasi" : sec === "logo" ? "Konsep Desain Logo" : "Company Profile"}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold font-mono tracking-widest text-red-700 uppercase">
              Hubungi Koperasi
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-coffee-gold shrink-0 mt-0.5" />
                <span>
                  Jl. Raya Kawah Papandayan, Desa Cisurupan, Kecamatan Cisurupan, Kabupaten Garut, Jawa Barat, Indonesia.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-coffee-gold shrink-0" />
                <span>kdkmp-garut.co.id (Rencana)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Coffee className="w-4 h-4 text-red-600 shrink-0" />
                <span>Specialty Arabica Sunda Java Preanger</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-footer copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-stone-900 text-center text-[10px] text-stone-500 font-mono">
          <p>© 2026 Koperasi Desa Merah Putih (KDKMP). All Rights Reserved.</p>
          <p className="mt-1">
            Dibuat dengan bangga sebagai persembahan kemandirian ekonomi rakyat & pelestarian kopi lokal Garut.
          </p>
        </div>
      </footer>

      {/* Floating Action Elements */}
      
      {/* 1. Back to Top Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-30 p-3 bg-stone-900 hover:bg-stone-800 text-white rounded-full shadow-lg border border-stone-800 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
          title="Kembali ke Atas"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* 2. Floating AI Assistant Bubble */}
      {!isAssistantOpen && (
        <button
          id="floating-assistant-bubble"
          onClick={() => {
            setAssistantInitialMessage("");
            setIsAssistantOpen(true);
          }}
          className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white p-4 rounded-full shadow-xl shadow-red-950/20 transition-all hover:scale-105 active:scale-95 cursor-pointer group"
          title="Tanya AI Co-Pilot KDKMP"
        >
          <MessageSquare className="w-5 h-5 text-coffee-gold animate-bounce" />
          <span className="text-xs font-bold font-mono tracking-wider uppercase pr-1">
            AI Co-Pilot
          </span>
        </button>
      )}

      {/* 3. AI Co-Pilot Smart Assistant sliding drawer */}
      <SmartAssistant
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        initialMessage={assistantInitialMessage}
        clearInitialMessage={() => setAssistantInitialMessage("")}
      />

    </div>
  );
}
