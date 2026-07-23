import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialize Gemini Client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API Routes
app.post("/api/assistant", async (req, res) => {
  try {
    const { message, contextType } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getGeminiClient();

    const systemInstruction = `
      Anda adalah "KDKMP Smart Assistant", asisten AI resmi untuk Koperasi Desa Merah Putih (KDKMP), sebuah koperasi produsen biji kopi arabika premium khas Garut, Jawa Barat, Indonesia.
      Gunakan bahasa Indonesia yang sangat profesional, ramah, persuasif, dan mendalam.
      
      Tugas utama Anda:
      - Membantu pengguna menulis caption Instagram, artikel blog, atau salinan iklan promosi (marketing copy) tentang KDKMP Arabika Garut.
      - Membantu merancang draf surat penawaran ekspor, email bisnis internasional, atau proposal kerja sama b2b untuk pembeli nasional/internasional.
      - Memberikan panduan resep seduh manual (seperti V60, Aeropress, French Press) yang dioptimalkan untuk karakter rasa kopi Arabika Garut.
      - Menjawab pertanyaan tentang sejarah, filosofi, komitmen petani, dan program keberlanjutan Koperasi Desa Merah Putih.

      Informasi Detail KDKMP untuk Referensi Anda:
      - Nama: Koperasi Desa Merah Putih (KDKMP)
      - Bidang usaha: Perdagangan biji kopi arabika khas Garut, Jawa Barat, Indonesia (di lereng Gunung Papandayan & Cikuray pada ketinggian 1200-1600 mdpl).
      - Produk Premium: "Sunda Java Preanger - Garut Mount Papandayan Premium Arabica"
      - Karakter Rasa KDKMP Arabika Garut: Keasaman jeruk menyegarkan (citrusy/lemon), manis karamel & gula aren yang kaya (rich brown sugar sweetness), sentuhan aroma melati (floral/jasmine note), body sedang yang seimbang, dan aftertaste yang bersih serta panjang (clean & sweet finish).
      - Nilai-nilai Koperasi: Gotong royong (mutual cooperation), kemandirian ekonomi rakyat, kesejahteraan petani anggota, pelestarian lingkungan gunung, serta perdagangan yang adil (fair trade).
      - Target pasar: Nasional (coffee roastery lokal, coffee shop spesialis) dan Internasional (importir green beans, coffee enthusiast dunia di Asia, Eropa, dan Amerika).

      Harap sesuaikan format tanggapan berdasarkan Konteks Permintaan: ${contextType || "Umum"}.
      Jika konteksnya resep, sertakan detail rasio air, suhu, dan langkah demi langkah.
      Jika surat penawaran ekspor, tulis dengan bahasa bisnis yang formal dan menarik (bisa dalam Bahasa Indonesia atau Bahasa Inggris sesuai permintaan).
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: message,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "Terjadi kesalahan pada server" });
  }
});

// Serve static assets / handle Vite in Dev vs Production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
