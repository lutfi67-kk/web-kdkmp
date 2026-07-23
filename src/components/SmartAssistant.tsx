/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, RotateCcw, Copy, Check, ArrowRight, User, HelpCircle, Loader2 } from "lucide-react";
import { AssistantMessage } from "../types";

interface SmartAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
  clearInitialMessage?: () => void;
}

export default function SmartAssistant({ isOpen, onClose, initialMessage, clearInitialMessage }: SmartAssistantProps) {
  const [messages, setMessages] = useState<AssistantMessage[]>([
    {
      id: "welcome-msg",
      role: "assistant",
      content: "Halo! Saya adalah **KDKMP Smart Assistant**, Co-Pilot pemasaran digital resmi Koperasi Desa Merah Putih Garut.\n\nSaya bisa membantu Anda merancang **caption Instagram**, draf **email penawaran ekspor B2B**, panduan **resep seduh kopi Arabika Garut**, atau menerangkan detail program **keberlanjutan** kami.\n\nSilakan pilih beberapa pintasan di bawah atau ketik pertanyaan khusus Anda!",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested quick prompts
  const suggestedPills = [
    { text: "Buatkan Caption Instagram Promosi", type: "Pemasaran" },
    { text: "Tulis Draf Penawaran Ekspor (Inggris)", type: "Ekspor B2B" },
    { text: "Panduan Resep Seduh V60 Garut", type: "Resep Seduh" },
    { text: "Terangkan Filosofi Logo Koperasi", type: "Filosofi" }
  ];

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Handle external initialization (like click on catalog buy or inquiry)
  useEffect(() => {
    if (initialMessage && isOpen) {
      handleSendMessage(initialMessage);
      if (clearInitialMessage) {
        clearInitialMessage();
      }
    }
  }, [initialMessage, isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: AssistantMessage = {
      id: `user-msg-${Date.now()}`,
      role: "user",
      content: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    // Identify request type for server context
    let contextType = "Umum";
    if (textToSend.toLowerCase().includes("instagram") || textToSend.toLowerCase().includes("caption") || textToSend.toLowerCase().includes("promosi")) {
      contextType = "Pemasaran & Sosial Media";
    } else if (textToSend.toLowerCase().includes("ekspor") || textToSend.toLowerCase().includes("proposal") || textToSend.toLowerCase().includes("b2b")) {
      contextType = "Proposal & Korespondensi Ekspor";
    } else if (textToSend.toLowerCase().includes("seduh") || textToSend.toLowerCase().includes("v60") || textToSend.toLowerCase().includes("resep")) {
      contextType = "Panduan Brew Specialty Coffee";
    } else if (textToSend.toLowerCase().includes("filosofi") || textToSend.toLowerCase().includes("logo")) {
      contextType = "Filosofi Visual Brand";
    }

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend, contextType })
      });

      if (!response.ok) {
        throw new Error("Gagal terhubung dengan server");
      }

      const data = await response.json();
      
      const assistantMsg: AssistantMessage = {
        id: `assistant-msg-${Date.now()}`,
        role: "assistant",
        content: data.text || "Terjadi kendala dalam merumuskan tanggapan. Silakan coba kembali.",
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      const errorMsg: AssistantMessage = {
        id: `assistant-err-${Date.now()}`,
        role: "assistant",
        content: `⚠️ **Maaf, terjadi gangguan koneksi:** ${err.message || "Gagal menghubungi AI Server"}. Pastikan server aktif dan kunci API terkonfigurasi dengan benar di panel Secrets.`,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome-msg",
        role: "assistant",
        content: "Halo! Saya adalah **KDKMP Smart Assistant**, Co-Pilot pemasaran digital resmi Koperasi Desa Merah Putih Garut.\n\nSaya bisa membantu Anda merancang **caption Instagram**, draf **email penawaran ekspor B2B**, panduan **resep seduh kopi Arabika Garut**, atau menerangkan detail program **keberlanjutan** kami.\n\nSilakan pilih beberapa pintasan di bawah atau ketik pertanyaan khusus Anda!",
        timestamp: new Date()
      }
    ]);
  };

  const copyToClipboard = (text: string, idx: number) => {
    // Strip markdown formatting if any for clean copy
    const plainText = text.replace(/\*\*/g, "").replace(/\* /g, "- ");
    navigator.clipboard.writeText(plainText).then(() => {
      setCopiedIndex(idx);
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    });
  };

  // Safe client-side lightweight Markdown formatter (handles headings, bold, bullet points, and newlines)
  const formatMarkdown = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      let content = line;
      let isHeading = false;
      let headingClass = "";

      // Headers check
      if (content.startsWith("### ")) {
        content = content.replace("### ", "");
        isHeading = true;
        headingClass = "text-sm font-bold text-stone-900 mt-4 mb-2 font-sans";
      } else if (content.startsWith("## ")) {
        content = content.replace("## ", "");
        isHeading = true;
        headingClass = "text-base font-bold text-stone-900 mt-5 mb-2 border-b border-stone-150 pb-1 font-serif";
      } else if (content.startsWith("# ")) {
        content = content.replace("# ", "");
        isHeading = true;
        headingClass = "text-lg font-extrabold text-stone-900 mt-6 mb-3 border-b-2 border-coffee-gold pb-1 font-serif";
      }

      // Bold text formatting: **text** -> <strong>text</strong>
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(content)) !== null) {
        if (match.index > lastIndex) {
          parts.push(content.substring(lastIndex, match.index));
        }
        parts.push(
          <strong key={match.index} className="font-extrabold text-stone-950">
            {match[1]}
          </strong>
        );
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < content.length) {
        parts.push(content.substring(lastIndex));
      }

      const formattedLine = parts.length > 0 ? parts : content;

      // Bullet list items check
      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        const itemText = line.trim().substring(2);
        // recursively formatting bold inside bullets
        const nestedParts = [];
        let nestMatch;
        let nestLastIdx = 0;
        const nestRegex = /\*\*(.*?)\*\*/g;
        while ((nestMatch = nestRegex.exec(itemText)) !== null) {
          if (nestMatch.index > nestLastIdx) {
            nestedParts.push(itemText.substring(nestLastIdx, nestMatch.index));
          }
          nestedParts.push(
            <strong key={nestMatch.index} className="font-extrabold text-stone-950">
              {nestMatch[1]}
            </strong>
          );
          nestLastIdx = nestRegex.lastIndex;
        }
        if (nestLastIdx < itemText.length) {
          nestedParts.push(itemText.substring(nestLastIdx));
        }

        return (
          <li key={idx} className="ml-4 list-disc text-xs md:text-sm text-stone-700 leading-relaxed mb-1.5 pl-1">
            {nestedParts.length > 0 ? nestedParts : itemText}
          </li>
        );
      }

      if (isHeading) {
        return <h4 key={idx} className={headingClass}>{formattedLine}</h4>;
      }

      // Render paragraph or empty line spacer
      if (line.trim() === "") {
        return <div key={idx} className="h-2.5"></div>;
      }

      return (
        <p key={idx} className="text-xs md:text-sm text-stone-700 leading-relaxed mb-2 text-justify">
          {formattedLine}
        </p>
      );
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fade-in bg-stone-900/45 backdrop-blur-sm">
      
      {/* Outer Click to Close */}
      <div className="flex-1 cursor-pointer" onClick={onClose}></div>

      {/* Drawer Container */}
      <div className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col border-l border-stone-200 animate-slide-in relative">
        
        {/* Drawer Header */}
        <div className="p-4 bg-stone-950 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-red-700 rounded-lg text-white">
              <Sparkles className="w-4 h-4 text-coffee-gold animate-pulse" />
            </div>
            <div>
              <h3 className="font-serif text-sm font-bold tracking-wide">
                KDKMP Smart Assistant
              </h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                  AI Co-Pilot Aktif
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              id="reset-assistant-chat"
              onClick={resetChat}
              title="Mulai Ulang Percakapan"
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              id="close-assistant"
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat History Panel */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-stone-50 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[85%] ${
                msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              }`}
            >
              {/* Avatar indicator */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm border ${
                msg.role === "user" 
                  ? "bg-stone-900 border-stone-800 text-white" 
                  : "bg-white border-stone-200 text-red-700"
              }`}>
                {msg.role === "user" ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
              </div>

              {/* Message Bubble */}
              <div className="space-y-1">
                <div className={`p-4 rounded-2xl relative ${
                  msg.role === "user"
                    ? "bg-stone-900 text-white rounded-tr-none"
                    : "bg-white text-stone-800 rounded-tl-none border border-stone-200/80 coffee-card-shadow"
                }`}>
                  <div className="markdown-body font-sans text-xs md:text-sm">
                    {msg.role === "user" ? (
                      <p className="whitespace-pre-wrap leading-relaxed text-left text-xs md:text-sm font-medium">{msg.content}</p>
                    ) : (
                      formatMarkdown(msg.content)
                    )}
                  </div>
                  
                  {/* Action row for assistant message */}
                  {msg.role === "assistant" && idx > 0 && (
                    <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-[9px] font-mono text-stone-400 font-medium">
                        KDKMP AI
                      </span>
                      <button
                        id={`copy-assistant-msg-${idx}`}
                        onClick={() => copyToClipboard(msg.content, idx)}
                        className="flex items-center gap-1 text-[10px] font-mono text-coffee-gold hover:text-stone-800 transition-colors"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600 font-bold">Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Salin Konten</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Timestamp */}
                <div className={`text-[9px] font-mono text-stone-400 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3 max-w-[80%] mr-auto">
              <div className="w-8 h-8 rounded-full bg-white border border-stone-200 text-red-700 flex items-center justify-center shrink-0 shadow-sm">
                <Loader2 className="w-4 h-4 animate-spin text-red-700" />
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-stone-200/80 coffee-card-shadow flex items-center gap-2">
                <span className="text-xs text-stone-500 font-medium font-sans">KDKMP AI sedang memformulasikan konten premium...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompt Panel */}
        {messages.length === 1 && !isLoading && (
          <div className="px-4 py-3 bg-white border-t border-stone-200">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block mb-2 font-bold">
              Butuh Ide Pemasaran atau Resep? Ketuk Salah Satu:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {suggestedPills.map((pill, idx) => (
                <button
                  key={idx}
                  id={`suggested-pill-${idx}`}
                  onClick={() => handleSendMessage(pill.text)}
                  className="p-2.5 rounded-lg border border-stone-200 hover:border-red-600 hover:bg-red-50/20 text-left cursor-pointer transition-all flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-stone-800 leading-tight block">
                    {pill.text}
                  </span>
                  <span className="text-[9px] font-mono text-red-700 mt-1 uppercase tracking-wider block font-semibold">
                    {pill.type}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Text Form */}
        <form
          id="assistant-chat-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage(inputValue);
          }}
          className="p-4 bg-white border-t border-stone-200 flex gap-2 items-center"
        >
          <input
            type="text"
            id="assistant-chat-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Tulis draf, resep, caption, atau tanya sejarah..."
            disabled={isLoading}
            className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs md:text-sm text-stone-850 placeholder-stone-400 focus:outline-none focus:border-coffee-gold focus:bg-white disabled:bg-stone-100 disabled:cursor-not-allowed font-sans"
          />
          <button
            type="submit"
            id="send-assistant-chat-btn"
            disabled={!inputValue.trim() || isLoading}
            className="p-3 bg-red-700 hover:bg-red-800 disabled:bg-stone-100 disabled:text-stone-300 text-white rounded-xl shadow transition-all cursor-pointer hover:scale-105 active:scale-95 shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
