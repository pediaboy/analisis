"use client";

import { useState, useRef, useEffect } from "react";

export default function AIAnalyzer() {
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll ke bawah tiap ada output baru di terminal
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalOutput]);

  const addLine = (text: string, delay: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setTerminalOutput((prev) => [...prev, text]);
        resolve(true);
      }, delay);
    });
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;

    const stockCode = input.toUpperCase();
    setInput("");
    setIsAnalyzing(true);
    setTerminalOutput([`> Menginisialisasi Pediaboy AI untuk [${stockCode}]...`]);

    // Simulasi proses narik data & AI berfikir (Persis kayak di video lu)
    await addLine(`[+] Mengambil data historis ${stockCode} dari Yahoo Finance...`, 800);
    await addLine(`[+] Sukses menarik 10 berita sentimen terbaru via Google News.`, 1000);
    await addLine(`[~] Mengirim prompt ke AI Engine (Llama-3)...`, 1200);
    await addLine(`[~] Menganalisa struktur Market & Momentum...`, 1500);
    await addLine(`[OK] Analisis Selesai. Menghasilkan laporan...`, 1000);
    await addLine("--------------------------------------------------", 500);

    // Output Hasil Analisa AI
    await addLine(`**Kesimpulan Arah Trend dan Momentum**`, 500);
    await addLine(`Indeks Harga Saham Gabungan (${stockCode}) berada dalam fase momentum negatif. RSI (30.2) berada di zona oversold, dan MACD memberikan sinyal bearish dominan. Tidak disarankan untuk entry agresif.`, 1000);
    
    await addLine(` `, 200);
    await addLine(`**Perspektif Katalis**`, 500);
    await addLine(`Berita lokal menunjukkan tekanan negatif yang konsisten. Aliran dana asing mencatatkan net-sell sebesar Rp 3,2 triliun minggu ini.`, 1000);

    await addLine(` `, 200);
    await addLine(`**Evaluasi Support/Resistance dan Risk Level**`, 500);
    await addLine(`[!] Level support utama terletak di 6.650, jika tembus berpotensi turun ke 6.500. Resistance kuat di 7.100. Grade: AVOID.`, 1000);
    await addLine("--------------------------------------------------", 500);
    await addLine("> Pediaboy AI Standby. Masukkan kode saham selanjutnya.", 500);

    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#00ff00] font-mono p-4 md:p-10 selection:bg-[#00ff00] selection:text-black">
      
      {/* HEADER TERMINAL */}
      <div className="max-w-4xl mx-auto mb-6 border-b border-[#00ff00]/30 pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-widest text-white">ChartPilot AI Web <span className="text-[#00ff00] text-sm animate-pulse">v1.0</span></h1>
          <p className="text-xs text-gray-400 mt-1 uppercase">Professional Stock Chart & Trade Setup Analyzer</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-[10px] text-gray-500">ENGINE: OPENROUTER (LLAMA 3)</p>
          <p className="text-[10px] text-gray-500">STATUS: <span className="text-[#00ff00]">ONLINE</span></p>
        </div>
      </div>

      {/* KOTAK TERMINAL */}
      <div className="max-w-4xl mx-auto bg-black border border-[#00ff00]/20 rounded-lg p-5 h-[60vh] overflow-y-auto shadow-[0_0_20px_rgba(0,255,0,0.05)] relative">
        <div className="text-xs text-gray-500 mb-4 pb-4 border-b border-gray-800">
          <p>Welcome to Pediaboy AI Analyzer Terminal.</p>
          <p>Ketik kode saham (misal: BBCA, IHSG, TLKM) lalu tekan Enter.</p>
        </div>

        {/* Output Text Berjalan */}
        <div className="space-y-2 text-sm leading-relaxed">
          {terminalOutput.map((line, idx) => (
            <p key={idx} className={line.startsWith('**') ? "text-white font-bold mt-4" : "text-[#00ff00]/90"}>
              {line}
            </p>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* INPUT COMMAND */}
      <div className="max-w-4xl mx-auto mt-4">
        <form onSubmit={handleAnalyze} className="flex gap-3">
          <div className="flex-1 flex items-center bg-black border border-[#00ff00]/40 rounded px-4 py-3 focus-within:border-[#00ff00] focus-within:shadow-[0_0_15px_rgba(0,255,0,0.2)] transition-all">
            <span className="text-[#00ff00] mr-3 font-bold">{">"}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isAnalyzing}
              placeholder="Masukkan kode saham (ex: BBRI)..."
              className="bg-transparent border-none outline-none text-white w-full uppercase placeholder-gray-700 disabled:opacity-50"
              autoFocus
            />
          </div>
          <button 
            type="submit" 
            disabled={isAnalyzing || !input}
            className="bg-[#00ff00]/10 border border-[#00ff00]/50 text-[#00ff00] px-6 py-3 rounded font-bold hover:bg-[#00ff00] hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? "ANALYZING..." : "ANALYZE"}
          </button>
        </form>
      </div>

    </div>
  );
}
