/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Users, Zap, ShieldCheck, Heart, Award, Leaf, Sprout, TrendingUp, CheckCircle, MapPin, ChevronRight } from "lucide-react";
import { COMPANY_PROFILE } from "../data";

export default function CompanyProfile() {
  const [activeMisiTab, setActiveMisiTab] = useState<number>(0);

  // Match icon strings to actual Lucide Icons
  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-8 h-8 text-red-600" />;
      case "Zap":
        return <Zap className="w-8 h-8 text-coffee-gold" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-emerald-600" />;
    }
  };

  const stats = [
    { value: "2018", label: "Tahun Berdiri" },
    { value: "150+", label: "Mitra Petani Lokal" },
    { value: "1.200+", label: "Mdpl Ketinggian Lahan" },
    { value: "3+", label: "Negara Ekspor Utama" },
  ];

  return (
    <section id="profile" className="py-20 bg-stone-50 border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-700 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
            Company Profile
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Koperasi Desa Merah Putih
          </h2>
          <div className="w-16 h-1 bg-coffee-gold mx-auto my-4 rounded"></div>
          <p className="text-sm md:text-base text-stone-600 font-sans italic">
            "{COMPANY_PROFILE.tagline}"
          </p>
        </div>

        {/* Latar Belakang & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4 flex items-center gap-3">
              <Award className="w-6 h-6 text-coffee-gold" />
              Latar Belakang Berdirinya KDKMP
            </h3>
            <p className="text-stone-700 leading-relaxed text-sm md:text-base text-justify whitespace-pre-line mb-6">
              {COMPANY_PROFILE.history}
            </p>
            <div className="p-4 bg-red-50/60 border-l-4 border-red-700 rounded-r-lg">
              <p className="text-xs text-red-950 font-serif italic">
                "KDKMP mengintegrasikan kedaulatan ekonomi petani, kualitas mutu specialty coffee, dan kelestarian ekosistem lereng gunung Garut."
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-stone-200/60 text-center coffee-card-shadow hover:border-coffee-gold/50 transition-all duration-300"
              >
                <div className="font-serif text-3xl md:text-4xl font-extrabold text-red-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visi & Misi Interactive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-stone-900 text-white p-8 md:p-10 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-xl border border-stone-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-700/10 rounded-full blur-3xl"></div>
            <div>
              <span className="text-coffee-gold font-mono text-xs uppercase tracking-widest block mb-2">
                Arah Strategis Koperasi
              </span>
              <h3 className="font-serif text-2xl font-bold mb-4">Visi KDKMP</h3>
              <p className="text-stone-300 leading-relaxed font-sans text-justify text-sm md:text-base">
                "{COMPANY_PROFILE.visi}"
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-stone-800 flex items-center gap-3 text-xs text-stone-400 font-mono">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Berasaskan Gotong Royong & Kemandirian Bangsa
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-red-700 font-mono text-xs uppercase tracking-widest block mb-2">
                Rencana Aksi Nyata
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">Misi KDKMP</h3>
              
              <div className="space-y-3">
                {COMPANY_PROFILE.misi.map((misiText, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveMisiTab(idx)}
                    className={`p-3 rounded-lg border transition-all cursor-pointer flex gap-3 items-start ${
                      activeMisiTab === idx 
                        ? "bg-red-50/50 border-red-200 shadow-sm" 
                        : "border-transparent hover:bg-stone-50"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                      activeMisiTab === idx ? "bg-red-700 text-white" : "bg-stone-100 text-stone-500"
                    }`}>
                      {idx + 1}
                    </span>
                    <p className={`text-xs md:text-sm text-justify leading-snug ${
                      activeMisiTab === idx ? "text-stone-900 font-medium" : "text-stone-600"
                    }`}>
                      {misiText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Nilai-Nilai Koperasi */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Nilai-Nilai Luhur KDKMP
            </h3>
            <p className="text-xs md:text-sm text-stone-500 mt-2">
              Fondasi moral dan penggerak seluruh aktivitas ekonomi koperasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY_PROFILE.values.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 md:p-8 rounded-xl border border-stone-200/80 coffee-card-shadow coffee-card-shadow-hover transition-all duration-300"
              >
                <div className="p-3 bg-stone-50 w-14 h-14 rounded-lg flex items-center justify-center mb-5 border border-stone-100">
                  {getValueIcon(val.icon)}
                </div>
                <h4 className="font-serif text-lg font-bold text-stone-900 mb-3">
                  {val.title}
                </h4>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed text-justify">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Struktur Usaha & Alur Kegiatan */}
        <div className="mb-20 bg-stone-900 text-white p-8 md:p-12 rounded-2xl shadow-lg border border-stone-800">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-coffee-gold font-mono text-xs uppercase tracking-widest block mb-2">
              Sistem Tata Niaga Mandiri
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              {COMPANY_PROFILE.structure.title}
            </h3>
            <p className="text-xs md:text-sm text-stone-400 mt-2">
              Bagaimana KDKMP memotong rantai tengkulak dan mendampingi kopi dari kebun hingga ekspor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {COMPANY_PROFILE.structure.items.map((item, idx) => (
              <div key={idx} className="relative group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-4xl font-extrabold text-stone-800 group-hover:text-red-700/80 transition-colors">
                      {item.phase}
                    </span>
                    {idx < 3 && (
                      <ChevronRight className="hidden md:block w-5 h-5 text-stone-700 group-hover:text-coffee-gold transition-colors" />
                    )}
                  </div>
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-coffee-gold transition-colors mb-2">
                    {item.name}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keunggulan & Tasting Terroir */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-red-700 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
              Keunggulan Rasa (Terroir)
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-4">
              {COMPANY_PROFILE.coffeeSuperiority.title}
            </h3>
            <p className="text-stone-700 leading-relaxed text-justify text-sm md:text-base mb-6">
              {COMPANY_PROFILE.coffeeSuperiority.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {["1200-1600 mdpl", "Tanah Vulkanis", "Lereng Papandayan", "Floral & Citrusy", "Specialty Grade"].map((tag, i) => (
                <span key={i} className="bg-stone-200 text-stone-800 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Flavor Chart Display */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200/80 coffee-card-shadow">
            <h4 className="font-serif text-base font-bold text-stone-900 mb-6 text-center">
              Profil Organoleptik Kopi Arabika Garut KDKMP
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  <span>Kemanisan (Sweetness)</span>
                  <span className="text-red-700 font-mono">9 / 10</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-700 h-full rounded-full transition-all duration-1000" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  <span>Keasaman (Acidity - Bright Citrusy)</span>
                  <span className="text-red-700 font-mono">7 / 10</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-coffee-gold h-full rounded-full transition-all duration-1000" style={{ width: "70%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  <span>Ketebalan Rasa (Body - Medium Balance)</span>
                  <span className="text-red-700 font-mono">6 / 10</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-stone-700 h-full rounded-full transition-all duration-1000" style={{ width: "60%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  <span>Keharuman Aroma (Fragrance - Floral Jasmine)</span>
                  <span className="text-red-700 font-mono">8 / 10</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full transition-all duration-1000" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  <span>Kebersihan Rasa Akhir (Clean Finish)</span>
                  <span className="text-red-700 font-mono">8 / 10</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-800 h-full rounded-full transition-all duration-1000" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-stone-100 text-[11px] text-stone-500 font-sans text-center">
              *Diuji oleh Q-Grader bersertifikasi berdasarkan standard SCA (Specialty Coffee Association).
            </div>
          </div>
        </div>

        {/* Komitmen Keberlanjutan */}
        <div className="bg-emerald-50/50 border border-emerald-200/60 p-8 md:p-10 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="p-4 bg-emerald-100/80 rounded-full text-emerald-800">
              <Sprout className="w-12 h-12" />
            </div>
          </div>
          <div className="md:col-span-10 text-center md:text-left">
            <h4 className="font-serif text-xl font-bold text-stone-900 mb-2 flex items-center justify-center md:justify-start gap-2">
              <Leaf className="w-5 h-5 text-emerald-700" />
              {COMPANY_PROFILE.sustainability.title}
            </h4>
            <p className="text-stone-700 leading-relaxed text-justify text-xs md:text-sm">
              {COMPANY_PROFILE.sustainability.desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
