"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [logs, setLogs] = useState<React.ReactNode[]>([
    <div key="init" className="text-zinc-500 font-mono text-xs mb-4 border-b border-zinc-800 pb-2">
      Pediaboy AI Engine v2.0 Initialize...<br/>
      Status: <span className="text-emerald-500">ONLINE</span><br/>
      Ketik kode saham (contoh: BBCA, HUMI, TLKM) atau tanyakan analisa pasar.
    </div>
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs, isAnalyzing]);

  // Simulasi jawaban cerdas AI berdasarkan input
  const generateAIResponse = (query: string) => {
    const code = query.toUpperCase();
    const isCrypto = code.includes("BTC") || code.includes("CRYPTO");
    
    // Bikin variasi jawaban biar ga monoton
    const seed = code.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const trend = seed % 2 === 0 ? "Bullish Momentum" : "Bearish Reversal";
    const trendColor = seed % 2 === 0 ? "text-emerald-400" : "text-red-400";
    
    // Simulasi harga
    const basePrice = (100 + (seed % 50) * 125);
    const entry = basePrice;
    const tp = Math.round(basePrice * 1.15); // +15%
    const sl = Math.round(basePrice * 0.92); // -8%

    if (query.toLowerCase().includes("hallo") || query.toLowerCase().includes("halo")) {
      return (
        <div className="text-zinc-300">
          Halo, Bapak Thirafi. AI Terminal siap menganalisa market. Silakan masukkan kode emiten.
        </div>
      );
    }

    return (
      <div className="bg-[#111] border border-zinc-800 rounded-xl p-4 mt-2 mb-4 shadow-lg">
        <div className="flex justify-between items-center mb-3 border-b border-zinc-800 pb-2">
          <h3 className="text-white font-bold text-lg flex items-center gap-2">
            <span className="text-emerald-500">◈</span> {code} ANALYSIS
          </h3>
          <span className={`text-[10px] font-bold px-2 py-1 rounded bg-zinc-800 ${trendColor} uppercase tracking-wider`}>
            {trend}
          </span>
        </div>
        
        <p className="text-xs text-zinc-400 leading-relaxed mb-4">
          Berdasarkan pembacaan algoritma pada timeframe H1 dan D1, pergerakan <span className="text-white font-semibold">{code}</span> saat ini menunjukkan indikasi <strong className={trendColor}>{trend}</strong>. 
          Volume transaksi {seed % 2 === 0 ? "meningkat signifikan mengkonfirmasi akumulasi institusi" : "menurun drastis menandakan distribusi oleh market maker"}. 
          RSI berada di level {(30 + (seed % 40)).toFixed(1)}.
        </p>

        <div className="grid grid-cols-3 gap-2 text-center font-mono text-[11px] uppercase">
          <div className="bg-[#0a0a0a] p-2 rounded-lg border border-zinc-800">
            <p className="text-zinc-500 mb-1 font-semibold">Entry Area</p>
            <p className="text-white font-bold">{entry.toLocaleString('id-ID')}</p>
          </div>
          <div className="bg-red-500/5 p-2 rounded-lg border border-red-500/10">
            <p className="text-red-500 mb-1 font-semibold">Stop Loss</p>
            <p className="text-red-400 font-bold">{sl.toLocaleString('id-ID')}</p>
          </div>
          <div className="bg-emerald-500/5 p-2 rounded-lg border border-emerald-500/10">
            <p className="text-emerald-500 mb-1 font-semibold">Target (TP)</p>
            <p className="text-emerald-400 font-bold">{tp.toLocaleString('id-ID')}</p>
          </div>
        </div>
      </div>
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isAnalyzing) return;

    const userCommand = input.trim();
    setInput("");
    setIsAnalyzing(true);

    // 1. Tampilkan input user
    setLogs((prev) => [
      ...prev,
      <div key={Date.now() + "user"} className="flex justify-end mb-4">
        <div className="bg-zinc-800 text-white text-sm px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
          {userCommand}
        </div>
      </div>
    ]);

    // Simulasi delay AI mikir biar realistis
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLogs((prev) => [
      ...prev,
      <div key={Date.now() + "loading"} className="text-emerald-500 text-xs font-mono animate-pulse mb-2" id="loading-indicator">
        [+] Memproses data market & sentimen berita...
      </div>
    ]);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    // 2. Hapus teks loading dan tampilkan hasil AI
    setLogs((prev) => {
      const newLogs = prev.filter(log => {
        // Ngefilter elemen loading (trik gampang pake id kalo react node susah, tapi kita slice aja)
        return true; 
      });
      // Pop loading terakhir
      newLogs.pop();
      return [
        ...newLogs,
        <div key={Date.now() + "ai"} className="mb-2">
          {generateAIResponse(userCommand)}
        </div>
      ];
    });

    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans pb-6">
      
      {/* HEADER */}
      <header className="px-6 py-4 border-b border-zinc-800 bg-[#050505]/90 backdrop-blur-xl sticky top-0 z-50 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-white font-bold text-lg tracking-tight italic">
              Thirafi Thariq Al Idris
            </h1>
            <p className="text-[10px] text-zinc-500 font-bold tracking-[0.2em] uppercase mt-0.5">
              AI Executive Terminal
            </p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">System Active</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        
        {/* CHART TRADINGVIEW IHSG (SESUAI REQUEST DI ATAS) */}
        <section className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="px-5 py-3 border-b border-zinc-800 flex items-center gap-2 bg-[#111]">
            <span className="text-emerald-500 text-sm">📊</span>
            <h2 className="text-xs font-bold text-white uppercase tracking-widest">Market Overview (IHSG)</h2>
          </div>
          <div className="h-[280px] w-full">
            <iframe 
              src="https://s.tradingview.com/widgetembed/?symbol=IDX:COMPOSITE&interval=D&theme=dark&hidesidetoolbar=1" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              style={{ pointerEvents: 'auto' }}
            ></iframe>
          </div>
        </section>

        {/* TERMINAL AI AREA */}
        <section className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[450px]">
          <div className="px-5 py-3 border-b border-zinc-800 flex items-center justify-between bg-[#111]">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 text-sm">🤖</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-widest">ChartPilot AI Assistant</h2>
            </div>
          </div>

          {/* Chat / Terminal Viewport */}
          <div className="flex-1 overflow-y-auto p-5 scroll-smooth">
            {logs}
            <div ref={bottomRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#111] border-t border-zinc-800">
            <form onSubmit={handleSubmit} className="flex gap-2 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <span className="text-emerald-500 font-bold">$</span>
              </div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isAnalyzing}
                placeholder="Tanya AI: Analisa BBRI hari ini..."
                className="w-full bg-[#050505] border border-zinc-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-600 transition-all disabled:opacity-50 outline-none"
                autoComplete="off"
              />
              <button
                type="submit"
                disabled={isAnalyzing || !input.trim()}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl transition-all disabled:opacity-40 disabled:bg-zinc-800 disabled:text-zinc-500 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              >
                Kirim
              </button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}
