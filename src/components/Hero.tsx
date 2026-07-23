/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Coffee, ArrowRight, MessageSquare, Compass, ShieldCheck } from "lucide-react";
import { IMAGES, COMPANY_PROFILE } from "../data";

interface HeroProps {
  onLearnMore: () => void;
  onOpenAssistant: () => void;
}

export default function Hero({ onLearnMore, onOpenAssistant }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-stone-950 overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={IMAGES.plantation}
          alt="Gunung Papandayan Garut Coffee Plantation"
          className="w-full h-full object-cover opacity-35 scale-105 animate-fade-in"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/30"></div>
      </div>

      {/* Decorative Light Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-700/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coffee-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Content Card/Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12">
        
        {/* Cooperative Batch Emblem */}
        <div className="inline-flex items-center gap-2 bg-stone-900/80 backdrop-blur border border-coffee-gold/30 px-4 py-1.5 rounded-full mb-6 text-xs font-mono uppercase tracking-widest text-coffee-gold animate-fade-in shadow-md">
          <Coffee className="w-3.5 h-3.5 text-red-600 animate-pulse" />
          <span>Koperasi Produsen Kopi Specialty</span>
        </div>

        {/* Brand Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-none">
          <span className="block text-white">Koperasi Desa</span>
          <span className="bg-gradient-to-r from-red-600 via-white to-red-600 bg-clip-text text-transparent block mt-1 drop-shadow-sm">
            Merah Putih
          </span>
        </h1>

        {/* Brand Tagline */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-stone-300 font-sans leading-relaxed mb-10">
          Membawa cita rasa unggul biji kopi Arabika lereng Gunung Papandayan Garut ke pasar nasional hingga panggung ekspor internasional melalui kekuatan kemitraan gotong royong.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            id="hero-explore-profile-btn"
            onClick={onLearnMore}
            className="w-full sm:w-auto bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Jelajahi Company Profile</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            id="hero-consult-assistant-btn"
            onClick={onOpenAssistant}
            className="w-full sm:w-auto bg-stone-900/90 hover:bg-stone-800 text-coffee-gold border border-coffee-gold/40 hover:border-coffee-gold font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>AI Marketing Co-Pilot</span>
          </button>
        </div>

        {/* Bottom trust factors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-stone-800/60 max-w-3xl mx-auto text-left text-xs text-stone-400 font-sans">
          <div className="flex gap-3 items-start">
            <Compass className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-0.5">Garut Terroir Origin</span>
              Lahan perkebunan tumpang sari lereng vulkanis Gunung Papandayan (1200-1600 mdpl).
            </div>
          </div>
          <div className="flex gap-3 items-start border-t sm:border-t-0 sm:border-x border-stone-850 pt-4 sm:pt-0 sm:px-6">
            <ShieldCheck className="w-5 h-5 text-coffee-gold shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-0.5">Premium Export Quality</span>
              Sertifikasi Specialty Grade dengan skor cupping tinggi dan standar kebersihan higienis.
            </div>
          </div>
          <div className="flex gap-3 items-start border-t sm:border-t-0 pt-4 sm:pt-0">
            <Coffee className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-0.5">Gotong Royong Lestari</span>
              Menjamin margin perdagangan yang adil demi kesejahteraan langsung 150+ keluarga petani.
            </div>
          </div>
        </div>

      </div>

      {/* Elegant curve divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-stone-50" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}></div>
    </section>
  );
}
