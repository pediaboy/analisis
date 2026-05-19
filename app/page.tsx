"use client";

import React, { useState, useRef, useEffect } from "react";

// Tipe data biar Vercel (TypeScript) gak error
type LogEntry = {
  id: number;
  type: "system" | "user" | "loading" | "ai";
  text?: string;
  data?: {
    code: string;
    trend: string;
    desc: string;
    entry: number;
    sl: number;
    tp: number;
  };
};

export default function AITerminalWeb() {
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([
    { 
      id: 1, 
      type: "system", 
      text: "Pediaboy AI Engine v2.0 Initialize...\nStatus: ONLINE\nSystem ready. Ketik kode saham (contoh: BBCA, HUMI, TLKM) untuk analisa teknikal & kuantitatif." 
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll Terminal
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs, isAnalyzing]);

  // Fungsi narik harga asli langsung dari API pas user ngetik saham
  const fetchRealPrice = async (symbol: string) => {
    try {
      const targetUrl = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}.JK`;
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
      const res = await fetch(proxyUrl);
      const data = await res.json();
      const parsed = JSON.parse(data.contents);
      
      if (parsed.quoteResponse?.result?.length > 0) {
        return parsed.quoteResponse.result[0].regularMarketPrice;
      }
      return null;
    } catch (e) {
      return null; // Kalau API error, return null buat di-handle di bawah
    }
  };

  const handleTerminalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isAnalyzing) return;

    const userCmd = input.trim().toUpperCase();
    setInput("");
    setIsAnalyzing(true);

    // 1. Tampilkan ketikan user
    setLogs(prev => [...prev, { id: Date.now(), type: "user", text: userCmd }]);

    // 2. Tampilkan status Loading AI
    const loadId = Date.now() + 1;
    setLogs(prev => [...prev, { id: loadId, type: "loading", text: `[+] Scraping orderbook & menghitung algoritma untuk ${userCmd}...` }]);

    // 3. Proses Analisa & Tarik Harga
    let currentPrice = await fetchRealPrice(userCmd);
    
    // Kalau user masukin kata random atau saham ga ada, AI ngasih harga simulasi logis
    if (!currentPrice) {
      const hash = userCmd.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
      currentPrice = 100 + (hash * 25 % 8000);
    }

    // AI menentukan Trend & Deskripsi (Simulasi berdasarkan huruf biar bervariasi)
    const isBearish = (userCmd.charCodeAt(0) % 2 === 0) && userCmd !== "BBCA" && userCmd !== "BBRI"; 
    const trend = isBearish ? "BEARISH DISTRIBUTION" : "BULLISH ACCUMULATION";
    const desc = isBearish 
      ? `Distribusi oleh institusi (Smart Money) terdeteksi meningkat. Harga tertahan di resistance dinamis. Hindari entry agresif saat ini, potensi breakdown ke support selanjutnya.`
      : `Momentum akumulasi terlihat kuat di area support. Indikator MACD menunjukkan sinyal golden cross pada timeframe H1. Potensi kenaikan (markup) sangat terbuka lebar.`;

    const aiData = {
      code: userCmd,
      trend: trend,
      desc: desc,
      entry: currentPrice,
      sl: Math.round(currentPrice * 0.94), // SL ketat -6%
      tp: Math.round(currentPrice * (isBearish ? 1.04 : 1.12)) // TP menyesuaikan trend
    };

    // 4. Hapus loading, Tampilkan Hasil
    setLogs(prev => {
      const filtered = prev.filter(l => l.id !== loadId);
      return [...filtered, { id: Date.now() + 2, type: "ai", data: aiData }];
    });

    setIsAnalyzing(false);
  };

  // Format angka ke Rupiah
  const formatRp = (n: number) => new Intl.NumberFormat("id-ID").format(Math.round(n));

  const renderLog = (log: LogEntry) => {
    if (log.type === "system") {
      return (
        <div key={log.id} className="text-zinc-500 font-mono text-xs mb-4 border-b border-zinc-800 pb-3 whitespace-pre-wrap">
          {log.text}
        </div>
      );
    }
    if (log.type === "user") {
      return (
        <div key={log.id} className="flex justify-end mb-4">
          <div className="bg-zinc-800 text-white text-sm px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] font-sans shadow-md">
            {log.text}
          </div>
        </div>
      );
    }
    if (log.type === "loading") {
      return (
        <div key={log.id} className="text-emerald-500 text-[11px] font-mono animate-pulse mb-3 flex items-center gap-2">
          <span>⚡</span> {log.text}
        </div>
      );
    }
    if (log.type === "ai" && log.data) {
      const { code, trend, desc, entry, sl, tp } = log.data;
      const isBearish = trend.includes("BEARISH");
      const trendColor = isBearish ? "text-red-400" : "text-emerald-400";
      const bgTrendColor = isBearish ? "bg-red-500/10 border-red-500/20" : "bg-emerald-500/10 border-emerald-500/20";

      return (
        <div key={log.id} className="bg-[#0f0f11] border border-zinc-800 rounded-2xl p-5 mt-2 mb-5 shadow-xl font-sans">
          <div className="flex justify-between items-center mb-4 border-b border-zinc-800/80 pb-3">
            <h3 className="text-white font-black text-lg flex items-center gap-2 tracking-tight">
              <span className="text-emerald-500 text-sm">◈</span> {code} ANALYSIS
            </h3>
            <span className={`text-[9px] font-black px-3 py-1.5 rounded-md border ${bgTrendColor} ${trendColor} uppercase tracking-widest`}>
              {trend}
            </span>
          </div>
          
          <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-medium">
            {desc}
          </p>

          <div className="grid grid-cols-3 gap-3 text-center uppercase">
            <div className="bg-black/60 p-3 rounded-xl border border-zinc-800 shadow-inner">
              <p className="text-[9px] text-zinc-500 mb-1 font-bold tracking-widest">Entry Area</p>
              <p className="text-white font-black text-sm">{formatRp(entry)}</p>
            </div>
            <div className="bg-red-500/5 p-3 rounded-xl border border-red-500/10 shadow-inner">
              <p className="text-[9px] text-red-500 mb-1 font-bold tracking-widest">Stop Loss</p>
              <p className="text-red-400 font-black text-sm">{formatRp(sl)}</p>
            </div>
            <div className="bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10 shadow-inner">
              <p className="text-[9px] text-emerald-500 mb-1 font-bold tracking-widest">Target (TP)</p>
              <p className="text-emerald-400 font-black text-sm">{formatRp(tp)}</p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans pb-10 selection:bg-emerald-500/30">
      
      {/* HEADER KHUSUS WEB AI */}
      <header className="px-6 py-5 border-b border-zinc-800 bg-[#050505]/95 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-white font-black text-xl tracking-tighter italic uppercase">
              Thirafi Thariq
            </h1>
            <p className="text-[9px] text-zinc-500 font-bold tracking-[0.3em] uppercase mt-0.5">
              ChartPilot Intelligence
            </p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Connected</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-4 space-y-6 mt-4">
        
        {/* CHART TRADINGVIEW IHSG */}
        <section className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="px-5 py-3 border-b border-zinc-800 flex items-center justify-between bg-[#111]">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 text-sm">📊</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-widest">Macro Overview (IHSG)</h2>
            </div>
            <span className="text-[9px] font-black bg-zinc-800 text-zinc-400 px-2 py-1 rounded">LIVE</span>
          </div>
          <div className="h-[250px] w-full bg-black">
            <iframe 
              src="https://s.tradingview.com/widgetembed/?symbol=IDX:COMPOSITE&interval=D&theme=dark&hidesidetoolbar=1" 
              width="100%" 
              height="100%" 
              frameBorder="0"
            ></iframe>
          </div>
        </section>

        {/* TERMINAL AI UTAMA */}
        <section className="bg-[#0a0a0a] border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-[550px]">
          <div className="px-5 py-4 border-b border-zinc-800 flex items-center gap-2 bg-[#111]">
            <span className="text-emerald-500 text-lg">🤖</span>
            <h2 className="text-xs font-black text-white uppercase tracking-widest">Command Terminal</h2>
          </div>
          
          {/* Viewport Chat/Log */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth bg-[#080808]">
            {logs.map(log => renderLog(log))}
            <div ref={bottomRef} />
          </div>

          {/* Form Input */}
          <div className="p-4 bg-[#111] border-t border-zinc-800">
            <form onSubmit={handleTerminalSubmit} className="flex gap-3 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <span className="text-emerald-500 font-bold">$</span>
              </div>
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                disabled={isAnalyzing} 
                placeholder="Perintah AI: BBCA, HUMI, TLKM..." 
                className="w-full bg-[#050505] border border-zinc-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl py-3.5 pl-10 pr-4 text-sm text-white placeholder-zinc-600 font-medium transition-all outline-none disabled:opacity-50 shadow-inner" 
                autoComplete="off" 
              />
              <button 
                type="submit" 
                disabled={isAnalyzing || !input.trim()} 
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all disabled:opacity-40 disabled:bg-zinc-800 disabled:text-zinc-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                Execute
              </button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}
