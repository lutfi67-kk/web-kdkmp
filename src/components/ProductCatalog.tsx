/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Coffee, CheckCircle, Flame, Sparkles, Scale, Info, Globe, Image, Box, ArrowRight } from "lucide-react";
import { PREMIUM_PRODUCT, VISUAL_CONCEPT } from "../data";

interface ProductCatalogProps {
  onInquiry: (message: string) => void;
}

export default function ProductCatalog({ onInquiry }: ProductCatalogProps) {
  const [selectedWeight, setSelectedWeight] = useState<number>(500); // default 500g
  const [selectedRoast, setSelectedRoast] = useState<string>("Medium");
  const [selectedGrind, setSelectedGrind] = useState<string>("Biji Utuh (Whole Beans)");

  // Price Calculation Logic
  // Base is 45000 IDR per 100g.
  // 200g = 90,000 IDR (5% discount = 85,500 IDR)
  // 500g = 225,000 IDR (10% discount = 202,500 IDR)
  // 1000g = 450,000 IDR (15% discount = 382,500 IDR)
  const calculatePrice = (weight: number) => {
    const rawPrice = (PREMIUM_PRODUCT.pricePer100g / 100) * weight;
    let discount = 0;
    if (weight === 200) discount = 0.05;
    else if (weight === 500) discount = 0.10;
    else if (weight === 1000) discount = 0.15;
    
    return Math.round(rawPrice * (1 - discount));
  };

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(num);
  };

  const currentPrice = calculatePrice(selectedWeight);

  const handleOrderClick = () => {
    const inquiryMessage = `Halo KDKMP! Saya tertarik dengan Kopi Arabika Premium '${PREMIUM_PRODUCT.name} - ${PREMIUM_PRODUCT.tagline}'. Saya ingin menanyakan detail ketersediaan produk berikut:\n\n` +
      `- Ukuran Kemasan: ${selectedWeight} gram\n` +
      `- Roast Level: ${selectedRoast} Roast\n` +
      `- Profil Gilingan: ${selectedGrind}\n` +
      `- Perkiraan Harga: ${formatRupiah(currentPrice)}\n\n` +
      `Bagaimana prosedur pemesanan, pengiriman, atau kemungkinan pengiriman sampel untuk kerja sama b2b? Terima kasih!`;
    
    onInquiry(inquiryMessage);
  };

  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-700 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
            Produk Kopi Premium
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Katalog Specialty Coffee
          </h2>
          <div className="w-16 h-1 bg-coffee-gold mx-auto my-4 rounded"></div>
          <p className="text-sm text-stone-500 font-sans">
            Biji kopi Arabika terbaik dari lereng Gunung Papandayan Garut yang diproses secara presisi untuk pasar nasional & internasional.
          </p>
        </div>

        {/* Product Visual & Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Column 1: Generated Image View & Visual Specs */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[3/4] bg-stone-100 rounded-2xl overflow-hidden shadow-md border border-stone-200 group">
              <img
                src={PREMIUM_PRODUCT.imageSrc}
                alt="Premium KDKMP Coffee Packaging"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-red-700 text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full font-bold shadow-md">
                Export Grade
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-stone-950/80 backdrop-blur-md p-4 rounded-xl border border-stone-800 text-white">
                <span className="text-xs text-coffee-gold font-mono uppercase tracking-widest block mb-1">Terroir Asal</span>
                <p className="text-xs text-stone-300 leading-snug">{PREMIUM_PRODUCT.origin}</p>
              </div>
            </div>

            {/* Quick specifications panel */}
            <div className="grid grid-cols-3 gap-2 bg-stone-50 p-4 rounded-xl border border-stone-200/60 text-center text-xs font-sans">
              <div>
                <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-1">Ketinggian</span>
                <span className="font-semibold text-stone-800 block">1.200 - 1.600m</span>
              </div>
              <div className="border-x border-stone-200/80">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-1">Proses</span>
                <span className="font-semibold text-stone-800 block">Honey & Washed</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-500 uppercase tracking-wider block mb-1">Varietas</span>
                <span className="font-semibold text-stone-800 block">Sigarar Utang</span>
              </div>
            </div>
          </div>

          {/* Column 2: Details & Configurator */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-red-700 mb-2">
                <Sparkles className="w-4 h-4 text-coffee-gold" />
                <span className="text-xs font-mono tracking-widest uppercase font-bold">Specialty Arabica</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-stone-900 leading-none">
                {PREMIUM_PRODUCT.name}
              </h3>
              <p className="font-serif text-lg text-stone-500 italic mt-1">
                {PREMIUM_PRODUCT.tagline}
              </p>
              <p className="text-sm text-stone-600 mt-4 leading-relaxed text-justify">
                {PREMIUM_PRODUCT.description}
              </p>
            </div>

            {/* Interactive Selector */}
            <div className="space-y-6 bg-stone-50/50 p-6 rounded-2xl border border-stone-200/80">
              
              {/* Roast Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2.5">
                  1. Pilih Tingkat Roasting (Roast Level)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Light", "Medium", "Dark"].map((roast) => (
                    <button
                      key={roast}
                      id={`roast-select-${roast.toLowerCase()}`}
                      onClick={() => setSelectedRoast(roast)}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider border cursor-pointer transition-all ${
                        selectedRoast === roast
                          ? "bg-red-700 text-white border-red-700 shadow-md"
                          : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                      }`}
                    >
                      {roast}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-stone-500 mt-2">
                  *Medium roast sangat kami rekomendasikan untuk menjaga cita rasa asli jasmine & lemon khas Garut.
                </p>
              </div>

              {/* Weight Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2.5">
                  2. Pilih Kemasan (Netto)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {PREMIUM_PRODUCT.weights.map((weight) => {
                    let discountText = "";
                    if (weight === 200) discountText = "Diskon 5%";
                    else if (weight === 500) discountText = "Diskon 10%";
                    else if (weight === 1000) discountText = "Diskon 15%";

                    return (
                      <button
                        key={weight}
                        id={`weight-select-${weight}`}
                        onClick={() => setSelectedWeight(weight)}
                        className={`p-2 rounded-lg border text-center cursor-pointer transition-all ${
                          selectedWeight === weight
                            ? "bg-stone-900 text-white border-stone-900 shadow-md"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                        }`}
                      >
                        <div className="text-sm font-bold">{weight} g</div>
                        <div className={`text-[9px] font-mono font-medium ${selectedWeight === weight ? "text-coffee-gold" : "text-red-700"}`}>
                          {discountText}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Grind Size Selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-2.5">
                  3. Pilih Profil Gilingan (Grind Size)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {PREMIUM_PRODUCT.grindSizes.map((grind) => (
                    <button
                      key={grind}
                      id={`grind-select-${grind.replace(/[\(\)\s]/g, "").toLowerCase()}`}
                      onClick={() => setSelectedGrind(grind)}
                      className={`py-2 px-1 rounded-lg border text-[10px] font-bold tracking-tight text-center cursor-pointer transition-all ${
                        selectedGrind === grind
                          ? "bg-coffee-gold text-stone-950 border-coffee-gold font-extrabold shadow-sm"
                          : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                      }`}
                    >
                      {grind.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Price Calculator Display */}
              <div className="pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest block">
                    Perkiraan Investasi B2B / Grosir
                  </span>
                  <div className="text-2xl md:text-3xl font-extrabold text-red-700 font-mono mt-0.5">
                    {formatRupiah(currentPrice)}
                  </div>
                </div>
                
                <button
                  id="inquire-product-btn"
                  onClick={handleOrderClick}
                  className="w-full sm:w-auto bg-gradient-to-r from-stone-950 to-stone-800 hover:from-stone-900 hover:to-stone-750 text-white font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Tanyakan Lewat AI Assistant</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Unique Selling Point Showcase */}
            <div>
              <h4 className="font-serif text-sm font-bold text-stone-900 mb-3">
                Keunggulan Spesifik (USP) Produk
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PREMIUM_PRODUCT.usp.map((uspText, idx) => (
                  <div key={idx} className="flex gap-2 items-start text-xs text-stone-700">
                    <CheckCircle className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                    <span>{uspText}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Target Market Analysis */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Analisis Target Pasar KDKMP
            </h3>
            <p className="text-xs md:text-sm text-stone-500 mt-2">
              KDKMP memasok ceri kopi dan green beans pilihan untuk segmen pasar nasional maupun global
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 text-center">
              <div className="text-stone-950 font-serif text-lg font-bold mb-2">Coffee Enthusiasts</div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Penikmat kopi manual brew rumahan yang mencari cita rasa specialty premium dengan tingkat ketertelusuran (traceability) murni.
              </p>
            </div>
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 text-center">
              <div className="text-stone-950 font-serif text-lg font-bold mb-2">Roastery & Premium Cafe</div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Roastery lokal nasional di Jakarta, Bandung, Surabaya yang menyajikan single origin arabika Garut eksklusif dalam daftar menu mereka.
              </p>
            </div>
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 text-center">
              <div className="text-stone-950 font-serif text-lg font-bold mb-2">Importir Global (Ekspor)</div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Mitra dagang besar di Asia Timur (Jepang, Taiwan) dan Eropa Barat (Jerman) yang membeli green beans berlisensi Specialty Grade.
              </p>
            </div>
          </div>
        </div>

        {/* Photography & Packaging Concepts Section */}
        <div className="bg-stone-900 text-white rounded-2xl overflow-hidden shadow-xl border border-stone-800">
          <div className="p-8 md:p-12 border-b border-stone-800">
            <div className="max-w-2xl">
              <span className="text-coffee-gold font-mono text-xs uppercase tracking-widest block mb-1">
                Visual Art Direction
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">
                Konsep Visual & Estetika Branding
              </h3>
              <p className="text-xs text-stone-400 mt-2">
                Arah estetika visual yang kami terapkan untuk menyampaikan kualitas kopi ekspor KDKMP secara elegan dan bercita rasa tinggi.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-stone-800">
            
            {/* Photo Concept */}
            <div className="p-8 md:p-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-stone-800/80 rounded-lg text-coffee-gold">
                  <Image className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  {VISUAL_CONCEPT.photo.title}
                </h4>
              </div>
              <div className="space-y-3 text-xs md:text-sm text-stone-300">
                <p>
                  <strong className="text-white">Pencahayaan (Lighting):</strong> {VISUAL_CONCEPT.photo.lighting}
                </p>
                <p>
                  <strong className="text-white">Latar Belakang (Background):</strong> {VISUAL_CONCEPT.photo.background}
                </p>
                <p>
                  <strong className="text-white">Nuansa (Vibe):</strong> {VISUAL_CONCEPT.photo.vibe}
                </p>
              </div>
            </div>

            {/* Packaging Concept */}
            <div className="p-8 md:p-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-stone-800/80 rounded-lg text-coffee-gold">
                  <Box className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  {VISUAL_CONCEPT.packaging.title}
                </h4>
              </div>
              <div className="space-y-3 text-xs md:text-sm text-stone-300">
                <p>
                  <strong className="text-white">Material & Struktur:</strong> {VISUAL_CONCEPT.packaging.material}
                </p>
                <p>
                  <strong className="text-white">Interior Pelindung:</strong> {VISUAL_CONCEPT.packaging.interior}
                </p>
                <p>
                  <strong className="text-white">Desain Label (Look):</strong> {VISUAL_CONCEPT.packaging.label}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
