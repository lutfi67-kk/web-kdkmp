/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Copy, Check, Mountain, Coffee, Heart, Palette, Sparkles, Wand2, Info } from "lucide-react";
import { LOGO_PHILOSOPHY, AI_LOGO_PROMPT, IMAGES } from "../data";

export default function LogoDesign() {
  const [copiedPromptType, setCopiedPromptType] = useState<"id" | "en" | null>(null);

  const getPhilosophyIcon = (iconName: string) => {
    switch (iconName) {
      case "Mountain":
        return <Mountain className="w-5 h-5 text-red-700" />;
      case "Coffee":
        return <Coffee className="w-5 h-5 text-coffee-gold" />;
      default:
        return <Heart className="w-5 h-5 text-red-600" />;
    }
  };

  const handleCopy = (text: string, type: "id" | "en") => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedPromptType(type);
      setTimeout(() => {
        setCopiedPromptType(null);
      }, 2000);
    });
  };

  return (
    <section id="logo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-700 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
            Identitas Visual
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Konsep Desain Logo KDKMP
          </h2>
          <div className="w-16 h-1 bg-coffee-gold mx-auto my-4 rounded"></div>
          <p className="text-sm text-stone-500 font-sans">
            Refleksi filosofis dari persatuan gotong royong, keagungan pegunungan Garut, dan kedaulatan bangsa Indonesia.
          </p>
        </div>

        {/* Logo Presentation & Core Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Column 1: Rendered Logo Display */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-stone-200 bg-white p-4 flex items-center justify-center coffee-card-shadow-hover transition-all">
              <img
                src={IMAGES.logo}
                alt="Logo KDKMP Official Render"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 right-3 bg-stone-900 text-coffee-gold text-[9px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full font-bold shadow">
                KDKMP Official
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-xs font-bold text-stone-950 font-sans tracking-wide uppercase">
                Gaya Desain: Modern Minimalis Profesional
              </p>
              <p className="text-[11px] text-stone-500 font-sans mt-1">
                Cocok untuk cap stempel ekspor, label kemasan, maupun kop surat resmi.
              </p>
            </div>
          </div>

          {/* Column 2: Structural elements philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <Palette className="w-6 h-6 text-red-700" />
              Filosofi Elemen Logo
            </h3>
            
            <div className="space-y-4">
              {LOGO_PHILOSOPHY.map((element, idx) => (
                <div 
                  key={idx}
                  className="bg-stone-50 p-5 rounded-xl border border-stone-200/60 hover:border-coffee-gold/40 transition-colors flex gap-4"
                >
                  <div className="p-3 bg-white border border-stone-200/50 rounded-lg shrink-0 flex items-center justify-center self-start shadow-sm">
                    {getPhilosophyIcon(element.icon)}
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-stone-900 flex items-center gap-2">
                      {element.title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed text-justify mt-1">
                      {element.philosophy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Color Palette Specification */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Palet Warna Utama & Makna Filosofis
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Setiap goresan warna merepresentasikan karakter dan tekad perjuangan koperasi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOGO_PHILOSOPHY.map((color, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:scale-[1.02] transition-transform"
              >
                {/* Color swatches */}
                <div 
                  className="h-20 w-full"
                  style={{ backgroundColor: color.colorHex }}
                ></div>
                <div className="p-4">
                  <div className="font-mono text-[10px] text-stone-400 font-bold">
                    {color.colorHex}
                  </div>
                  <div className="font-serif text-sm font-bold text-stone-900 mt-0.5">
                    {color.colorName}
                  </div>
                  <p className="text-[11px] text-stone-600 leading-snug text-justify mt-2">
                    {color.colorMeaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Image Generator Prompt Area */}
        <div className="bg-stone-900 text-white rounded-2xl p-6 md:p-10 border border-stone-800 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-coffee-gold/5 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-800 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-stone-800 rounded-xl text-coffee-gold">
                <Wand2 className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-coffee-gold" />
                  <span className="text-[10px] text-stone-400 font-mono tracking-widest uppercase">AI Asset Toolkit</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white mt-0.5">
                  AI Image Generator Prompt
                </h3>
              </div>
            </div>
            <div className="text-xs text-stone-400 max-w-sm">
              Salin prompt berikut untuk digunakan pada mesin kecerdasan buatan seperti Midjourney, DALL-E, atau Imagen guna meregenerasi logo ini.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Indonesian Prompt */}
            <div className="bg-stone-950 p-5 rounded-xl border border-stone-800/80 relative group flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block mb-2">
                  Bahasa Indonesia (Prompt)
                </span>
                <p className="text-xs text-stone-300 leading-relaxed text-justify italic font-serif">
                  "{AI_LOGO_PROMPT.indonesian}"
                </p>
              </div>
              
              <div className="pt-4 mt-4 border-t border-stone-900 flex items-center justify-between">
                <span className="text-[10px] font-mono text-stone-500">
                  Style: {AI_LOGO_PROMPT.style}
                </span>
                <button
                  id="copy-prompt-id"
                  onClick={() => handleCopy(AI_LOGO_PROMPT.indonesian, "id")}
                  className="flex items-center gap-1.5 text-[10px] font-mono text-coffee-gold hover:text-white bg-stone-900 border border-stone-800 px-3 py-1.5 rounded-md cursor-pointer transition-colors"
                >
                  {copiedPromptType === "id" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Prompt</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* English Prompt */}
            <div className="bg-stone-950 p-5 rounded-xl border border-stone-800/80 relative group flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest block mb-2">
                  English (Recommended for AI)
                </span>
                <p className="text-xs text-stone-300 leading-relaxed text-justify italic font-serif">
                  "{AI_LOGO_PROMPT.english}"
                </p>
              </div>
              
              <div className="pt-4 mt-4 border-t border-stone-900 flex items-center justify-between">
                <span className="text-[10px] font-mono text-stone-500">
                  Engine: Midjourney / Imagen 3
                </span>
                <button
                  id="copy-prompt-en"
                  onClick={() => handleCopy(AI_LOGO_PROMPT.english, "en")}
                  className="flex items-center gap-1.5 text-[10px] font-mono text-coffee-gold hover:text-white bg-stone-900 border border-stone-800 px-3 py-1.5 rounded-md cursor-pointer transition-colors"
                >
                  {copiedPromptType === "en" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Prompt</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
