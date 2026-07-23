/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { BookOpen, Quote, Clock, Share2, Heart, Award, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { SUCCESS_STORY, IMAGES } from "../data";

export default function SuccessStory() {
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [likes, setLikes] = useState<number>(142);
  const [liked, setLiked] = useState<boolean>(false);
  const [readingProgress, setReadingProgress] = useState<number>(0);

  // Simple reading progress simulation for chapter changes
  useEffect(() => {
    const totalChapters = SUCCESS_STORY.length;
    const progress = ((activeChapter + 1) / totalChapters) * 100;
    setReadingProgress(progress);
  }, [activeChapter]);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const handleNext = () => {
    if (activeChapter < SUCCESS_STORY.length - 1) {
      setActiveChapter(activeChapter + 1);
    }
  };

  const handlePrev = () => {
    if (activeChapter > 0) {
      setActiveChapter(activeChapter - 1);
    }
  };

  const currentChapterData = SUCCESS_STORY[activeChapter];

  return (
    <section id="artikel" className="py-20 bg-stone-100 border-t border-stone-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-red-700 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
            Artikel Storytelling
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Keberhasilan Koperasi Desa Merah Putih dalam Membawa Kopi Lokal Garut ke Pasar Internasional
          </h2>
          <div className="w-16 h-1 bg-coffee-gold mx-auto my-4 rounded"></div>
          
          {/* Metadata */}
          <div className="flex items-center justify-center gap-6 text-xs text-stone-500 font-mono mt-3">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              4 Menit Membaca
            </span>
            <span className="w-1.5 h-1.5 bg-stone-300 rounded-full"></span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-stone-400" />
              Narasi Inspiratif Koperasi
            </span>
          </div>
        </div>

        {/* Editorial Layout */}
        <div className="bg-[#FAF9F6] rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
          
          {/* Progress Bar */}
          <div className="w-full bg-stone-200 h-1">
            <div 
              className="bg-red-700 h-full transition-all duration-500" 
              style={{ width: `${readingProgress}%` }}
            ></div>
          </div>

          {/* Chapter Navigation Tabs */}
          <div className="flex border-b border-stone-200 bg-stone-50 divide-x divide-stone-200 overflow-x-auto">
            {SUCCESS_STORY.map((sec, idx) => (
              <button
                key={sec.id}
                id={`story-chapter-${idx}`}
                onClick={() => setActiveChapter(idx)}
                className={`flex-1 min-w-[120px] text-center py-4 px-2 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  activeChapter === idx
                    ? "bg-[#FAF9F6] text-red-700 font-bold border-t-2 border-red-700"
                    : "text-stone-500 hover:text-stone-800 hover:bg-stone-100"
                }`}
              >
                {sec.chapter}: {sec.title.split(" ").slice(0, 2).join(" ")}...
              </button>
            ))}
          </div>

          {/* Article Body */}
          <div className="p-8 md:p-12 space-y-8">
            
            {/* Chapter Header */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-red-700 font-bold block mb-1">
                {currentChapterData.chapter}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 leading-tight">
                {currentChapterData.title}
              </h3>
            </div>

            {/* Main Content with Dropcaps */}
            <div className="font-serif text-stone-850 leading-relaxed text-sm md:text-base space-y-6 text-justify">
              {currentChapterData.content.map((p, pIdx) => {
                // Apply dropcap to the very first paragraph of each chapter
                if (pIdx === 0) {
                  const firstChar = p.charAt(0);
                  const remainingText = p.slice(1);
                  return (
                    <p key={pIdx} className="first-letter:float-left first-letter:text-5xl first-letter:font-serif first-letter:font-extrabold first-letter:text-red-700 first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                      {remainingText}
                    </p>
                  );
                }
                return <p key={pIdx}>{p}</p>;
              })}
            </div>

            {/* Dynamic Quote Callout */}
            {currentChapterData.quote && (
              <div className="relative p-6 md:p-8 bg-stone-50 border-l-4 border-coffee-gold rounded-r-xl my-8">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-stone-200/70 shrink-0 pointer-events-none" />
                <p className="font-serif text-base md:text-lg text-stone-800 italic relative z-10 leading-relaxed mb-3">
                  "{currentChapterData.quote}"
                </p>
                <div className="font-sans text-xs uppercase tracking-wider font-bold text-stone-500 font-mono">
                  — {currentChapterData.quoteAuthor}
                </div>
              </div>
            )}

            {/* Pagination Controls inside Card */}
            <div className="pt-8 border-t border-stone-200 flex items-center justify-between">
              <button
                id="story-prev-btn"
                onClick={handlePrev}
                disabled={activeChapter === 0}
                className={`flex items-center gap-2 text-xs font-mono tracking-wider uppercase py-2 px-3 rounded-lg border transition-all ${
                  activeChapter === 0
                    ? "text-stone-300 border-stone-100 cursor-not-allowed"
                    : "text-stone-700 border-stone-200 hover:bg-stone-50 cursor-pointer"
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Sebelumnya</span>
              </button>

              <span className="text-xs font-mono text-stone-400 font-medium">
                Bab {activeChapter + 1} dari {SUCCESS_STORY.length}
              </span>

              <button
                id="story-next-btn"
                onClick={handleNext}
                disabled={activeChapter === SUCCESS_STORY.length - 1}
                className={`flex items-center gap-2 text-xs font-mono tracking-wider uppercase py-2 px-3 rounded-lg border transition-all ${
                  activeChapter === SUCCESS_STORY.length - 1
                    ? "text-stone-300 border-stone-100 cursor-not-allowed"
                    : "text-red-700 border-red-200 hover:bg-red-50/50 cursor-pointer"
                }`}
              >
                <span>Selanjutnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Card Footer: Article Interactions */}
          <div className="px-8 py-5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs font-mono text-stone-500">
            <div className="flex items-center gap-4">
              <button
                id="article-like-btn"
                onClick={handleLike}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  liked 
                    ? "text-red-600 bg-red-50 font-bold border border-red-100 scale-105" 
                    : "hover:text-stone-800 hover:bg-stone-200/50 border border-transparent"
                }`}
              >
                <Heart className={`w-4 h-4 ${liked ? "fill-red-600 text-red-600" : ""}`} />
                <span>{likes} Menyukai</span>
              </button>
            </div>
            
            <div className="text-[10px] text-stone-400">
              Koperasi Desa Merah Putih © 2026
            </div>
          </div>

        </div>

        {/* Impact Summary Section */}
        <div className="mt-12 bg-stone-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between border border-stone-800">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-lg font-bold">Inspirasi Dari Koperasi Rakyat</h4>
            <p className="text-xs text-stone-400 leading-relaxed max-w-lg">
              KDKMP membuktikan bahwa kebersamaan gotong royong petani lokal yang dikelola secara profesional mampu mendobrak dominasi tengkulak dan menembus ekspor dunia.
            </p>
          </div>
          <a
            id="article-footer-impact-btn"
            href="#profile"
            className="shrink-0 flex items-center gap-1 bg-coffee-gold hover:bg-coffee-gold/90 text-stone-950 font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded-lg shadow transition-all hover:scale-105 active:scale-95"
          >
            <span>Pelajari Struktur Usaha</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
