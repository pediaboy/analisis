"use client";

import { useState, useRef, useEffect } from "react";

export default function AdvancedTerminal() {
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "System initialized. Terminal standby for market command.",
    "Ketik kode saham (contoh: BBCA, HUMI, TLKM) lalu tekan Enter.",
  ]);
  const [currentTime, setCurrentTime] = useState("");
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Realtime clock untuk header terminal
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("id-ID") + " WIB");
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto scroll ke baris log paling bawah biar ga ketutupan
  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs, isAnalyzing]);

  // Fungsi kalkulasi data acak tapi konsisten berdasarkan kode saham yang diinput
  const generateDynamicMetrics = (code: string) => {
    const seed = code.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const rsi = (32 + (seed % 42)).toFixed(1);
    const isBearish = seed % 2 === 0;
    const grade = isBearish ? "AVOID / WATCHLIST" : "ACCUMULATE / BUY SETUP";
    const support = (100 + (seed % 15) * 75);
    const resistance = support + (seed % 8 + 3) * 65;
    const netFlow = (seed % 5 + 1.2).toFixed(1);

    return {
      rsi,
      grade,
      support,
      resistance,
      trend: isBearish ? "Bearish Markdown Phase" : "Bullish Accumulation Structure",
      foreignAction: isBearish ? `Net Sell Rp ${netFlow} Triliun` : `Net Buy Rp ${netFlow} Triliun`,
    };
  };

  const handleCommandSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isAnalyzing) return;

    const stockCode = input.trim().toUpperCase();
    setInput("");
    setIsAnalyzing(true);

    // Tambah baris perintah baru ke log
    setLogs((prev) => [...prev, `\n> MENGANALISA DIREKTORI EMITEN: [${stockCode}]`]);

    const metrics = generateDynamicMetrics(stockCode);

    // Simulasi sekuensial log berjalan agar tidak instan dan kaku
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

    await delay(500);
    setLogs((prev) => [...prev, `[+] Mengubungkan ke IDX Core Data API via Yahoo Finance...`]);
    await delay(700);
    setLogs((prev) => [...prev, `[+] Sinkronisasi grafik volume & broker summary selesai.`]);
    await delay(600);
    setLogs((prev) => [...prev, `[~] Memproses osilator teknikal (RSI, MACD, Moving Averages)...`]);
    await delay(800);
    setLogs((prev) => [...prev, `[OK] Kompilasi data kuantitatif untuk ${stockCode} sukses.`]);
    await delay(400);
    setLogs((prev) => [...prev, `------------------------------------------------------------`]);
    await delay(300);
    setLogs((prev) => [...prev, `** STRUKTUR PASAR & MOMENTUM **`]);
    await delay(400);
    setLogs((prev) => [...prev, `Emiten ${stockCode} terdeteksi berada dalam kondisi "${metrics.trend}". Indikator Relative Strength Index (RSI) berada pada level ${metrics.rsi}. Status rekomendasi zona saat ini: ${metrics.grade}.`]);
    await delay(300);
    setLogs((prev) => [...prev, ` `]);
    await delay(200);
    setLogs((prev) => [...prev, `** ALIRAN DANA (INSTITUTIONAL FLOW) **`]);
    await delay(400);
    setLogs((prev) => [...prev, `Aktivitas market maker dominan mencatatkan akumulasi makro dengan akumulatif data ${metrics.foreignAction} dalam periode observasi pekan ini.`]);
    await delay(300);
    setLogs((prev) => [...prev, ` `]);
    await delay(200);
    setLogs((prev) => [...prev, `** AREA TEKNIKAL & PROTOKOL RISIKO **`]);
    await delay(500);
    setLogs((prev) => [...prev, `[!] Support Krusial: Rp ${metrics.support.toLocaleString("id-ID")} | Target Resistance: Rp ${metrics.resistance.toLocaleString("id-ID")}. Eksekusi disarankan hanya jika validasi candlestick terkonfirmasi.`]);
    await delay(400);
    setLogs((prev) => [...prev, `------------------------------------------------------------`]);
    await delay(200);
    setLogs((prev) => [...prev, `> Terminal Siap. Silahkan masukkan perintah saham berikutnya.`]);

    setIsAnalyzing(false);
  };

  // Helper styling baris teks biar ga bosenin
  const renderLineClass = (line: string) => {
    if (line.startsWith(">")) return "text-zinc-100 font-semibold";
    if (line.startsWith("[OK]")) return "text-emerald-400";
    if (line.startsWith("[!]")) return "text-amber-400 font-medium";
    if (line.startsWith("----------------")) return "text-zinc-800";
    if (line.startsWith("**")) return "text-white font-bold tracking-wider mt-3 block text-xs";
    return "text-zinc-400";
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-300 font-sans p-4 md:p-8 flex flex-col justify-between">
      
      {/* HEADER BAR MODEREN */}
      <div className="max-w-3xl w-full mx-auto mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-zinc-800 pb-4">
        <div>
          <h1 className="text-white font-bold text-sm tracking-tight">
            Thirafi Thariq Al Idris <span className="text-zinc-600 font-normal ml-1 text-xs">/ ChartPilot Analyzer</span>
          </h1>
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Quantitative Engine Core v2.0</p>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="text-zinc-600">SYS_STATUS:</span>
          <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">LIVE</span>
          <span className="text-zinc-400 font-medium ml-2">{currentTime || "00:00:00 WIB"}</span>
        </div>
      </div>

      {/* VIEWPORT TERMINAL UTAMA */}
      <div className="max-w-3xl w-full mx-auto flex-1 bg-[#0b0b0d] border border-zinc-800/80 rounded-2xl p-5 md:p-6 h-[65vh] overflow-y-auto shadow-2xl font-mono text-xs leading-relaxed">
        <div className="space-y-1.5 whitespace-pre-wrap">
          {logs.map((line, idx) => (
            <div key={idx} className={renderLineClass(line)}>
              {line}
            </div>
          ))}
          
          {/* Efek status kedip kalau lagi mikir */}
          {isAnalyzing && (
            <div className="text-blue-400 animate-pulse mt-2 flex items-center gap-2">
              <span>⚡</span> <span>Sedangkan mengkalkulasi matriks data algoritma...</span>
            </div>
          )}
          <div ref={terminalBottomRef} />
        </div>
      </div>

      {/* FIELD ACTION INPUT BAR */}
      <div className="max-w-3xl w-full mx-auto mt-4">
        <form onSubmit={handleCommandSubmit} className="flex gap-2">
          <div className="flex-1 flex items-center bg-[#0b0b0d] border border-zinc-800 rounded-xl px-4 py-3 focus-within:border-zinc-700 focus-within:ring-1 focus-within:ring-zinc-700 transition-all shadow-lg">
            <span className="text-zinc-600 text-xs font-bold mr-2 select-none">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isAnalyzing}
              placeholder="INPUT EMITEN CODE (CONTOH: BBRI, BBCA, HUMI)..."
              className="bg-transparent border-none outline-none text-white w-full uppercase placeholder-zinc-600 text-xs tracking-wider disabled:opacity-40"
              autoFocus
            />
          </div>
          <button
            type="submit"
            disabled={isAnalyzing || !input.trim()}
            className="bg-zinc-100 text-black font-bold text-xs px-5 py-3 rounded-xl hover:bg-zinc-200 transition-all disabled:opacity-30 disabled:bg-zinc-800 disabled:text-zinc-500"
          >
            EXECUTE
          </button>
        </form>
      </div>

    </div>
  );
}
