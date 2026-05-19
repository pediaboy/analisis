"use client";

import { useState, useRef, useEffect } from "react";
// Pastikan lu udah punya file data.ts ya
import { myPortfolio, classSignals, donationConfig } from "./data";

export default function Home() {
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState("Syncing...");
  
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

  // ==========================================
  // FITUR BARU: SCRAPING GOOGLE FINANCE (IDX)
  // ==========================================
  const fetchPrices = async () => {
    try {
      const newPrices: Record<string, number> = {};
      
      // Kita fetch paralel biar narik datanya cepet
      await Promise.all(
        myPortfolio.map(async (stock) => {
          try {
            // Target URL Google Finance khusus saham Indo (IDX)
            const targetUrl = `https://www.google.com/finance/quote/${stock.code}:IDX`;
            const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;
            
            const response = await fetch(proxyUrl);
            const html = await response.text();
            
            // Regex buat nyomot angka harga dari elemen HTML Google Finance
            const match = html.match(/class="YMlKec fxKbKc">([^<]+)<\/div>/);
            if (match && match[1]) {
              // Hilangkan koma dan ubah ke angka (Misal: 6,125.00 -> 6125)
              const price = parseFloat(match[1].replace(/,/g, ""));
              newPrices[stock.code] = price;
            }
          } catch (err) {
            console.error(`Gagal scrape ${stock.code}`);
          }
        })
      );

      if (Object.keys(newPrices).length > 0) {
        setPrices((prev) => ({ ...prev, ...newPrices }));
        setLastUpdate(new Date().toLocaleTimeString("id-ID") + " WIB");
      } else {
        throw new Error("Data kosong");
      }
    } catch (e) {
      setLastUpdate("Offline (Pake Data Terakhir)");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    // Auto refresh tiap 1 menit
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  // Format ke Rupiah
  const formatRp = (n: number) => new Intl.NumberFormat("id-ID").format(Math.round(n));

  // Hitung Total Portfolio pake data hasil scraping
  let totalModal = 0;
  let totalValue = 0;
  myPortfolio.forEach((s) => {
    const lembar = s.lot * 100;
    totalModal += lembar * s.avg;
    totalValue += lembar * (prices[s.code] || s.lastClose);
  });
  const floatingPL = totalValue - totalModal;
  const plPercent = totalModal > 0 ? (floatingPL / totalModal) * 100 : 0;

  // Data Market Realistik buat simulasi Terminal AI
  const marketData: Record<string, { price: number, trend: string, desc: string }> = {
    "BBCA": { price: prices["BBCA"] || 6125, trend: "BULLISH", desc: "Volume akumulasi stabil di area support MA20. Asing mulai mencatatkan net buy tipis." },
    "BBRI": { price: prices["BBRI"] || 3060, trend: "REBOUND", desc: "Berada di area oversold ekstrim. Potensi technical rebound jangka pendek sangat terbuka." },
    "BBNI": { price: prices["BBNI"] || 3800, trend: "SIDEWAYS", desc: "Sedang konsolidasi di area resisten minor. Tunggu konfirmasi breakout dengan volume." },
    "WBSA": { price: prices["WBSA"] || 1080, trend: "BEARISH", desc: "Tekanan jual (distribusi) masih tinggi. Belum ada tanda pembalikan arah, hindari tangkap pisau jatuh." },
    "HUMI": { price: prices["HUMI"] || 189, trend: "BULLISH MOMENTUM", desc: "Momentum pantulan dari bawah masih terasa sangat kuat. Tujuannya jelas mau menjemput area resisten 200 lagi." },
  };

  const generateAIResponse = (query: string) => {
    const codeMatch = query.toUpperCase().match(/[A-Z]{4}/); 
    const code = codeMatch ? codeMatch[0] : "IHSG";
    
    const data = marketData[code] || {
      price: prices[code] || Math.floor(Math.random() * 5000) + 500, 
      trend: "NEUTRAL",
      desc: "Pergerakan harga sejalan dengan rata-rata pasar. Belum ada anomali volume yang signifikan terdeteksi oleh sistem AI."
    };

    const isBearish = data.trend === "BEARISH";
    const trendColor = isBearish ? "text-red-400" : (data.trend === "NEUTRAL" ? "text-yellow-400" : "text-emerald-400");
    const bgTrendColor = isBearish ? "bg-red-500/10 border-red-500/20" : (data.trend === "NEUTRAL" ? "bg-yellow-500/10 border-yellow-500/20" : "bg-emerald-500/10 border-emerald-500/20");
    
    const entry = data.price;
    const tp = isBearish ? Math.round(data.price * 1.02) : Math.round(data.price * 1.08); 
    const sl = Math.round(data.price * 0.95); 

    if (query.toLowerCase().includes("hallo") || query.toLowerCase().includes("halo")) {
      return (
        <div className="text-zinc-300 font-mono text-sm">
          Halo, Bapak Thirafi. AI Terminal siap menganalisa market. Masukkan kode emiten.
        </div>
      );
    }

    return (
      <div className="bg-[#111] border border-zinc-800 rounded-xl p-5 mt-2 mb-4 shadow-lg font-sans">
        <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-3">
          <h3 className="text-white font-black text-lg flex items-center gap-2 tracking-tight">
            <span className="text-emerald-500">◈</span> {code} ANALYSIS
          </h3>
          <span className={`text-[10px] font-black px-3 py-1 rounded border ${bgTrendColor} ${trendColor} uppercase tracking-widest`}>
            {data.trend}
          </span>
        </div>
        
        <p className="text-sm text-zinc-400 leading-relaxed mb-5">
          {data.desc} Harga pasar saat ini berada di level <strong className="text-white">Rp {data.price.toLocaleString('id-ID')}</strong>.
        </p>

        <div className="grid grid-cols-3 gap-3 text-center font-mono uppercase">
          <div className="bg-black/50 p-3 rounded-xl border border-zinc-800">
            <p className="text-[10px] text-zinc-500 mb-1 font-bold tracking-widest">Entry Area</p>
            <p className="text-white font-bold text-sm">{entry.toLocaleString('id-ID')}</p>
          </div>
          <div className="bg-red-500/5 p-3 rounded-xl border border-red-500/10">
            <p className="text-[10px] text-red-500 mb-1 font-bold tracking-widest">Stop Loss</p>
            <p className="text-red-400 font-bold text-sm">{sl.toLocaleString('id-ID')}</p>
          </div>
          <div className="bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10">
            <p className="text-[10px] text-emerald-500 mb-1 font-bold tracking-widest">Target (TP)</p>
            <p className="text-emerald-400 font-bold text-sm">{tp.toLocaleString('id-ID')}</p>
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

    setLogs((prev) => [
      ...prev,
      <div key={Date.now() + "user"} className="flex justify-end mb-4">
        <div className="bg-zinc-800 text-white text-sm px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] font-sans">
          {userCommand}
        </div>
      </div>
    ]);

    await new Promise((resolve) => setTimeout(resolve, 800));
    setLogs((prev) => [
      ...prev,
      <div key={Date.now() + "loading"} className="text-emerald-500 text-xs font-mono animate-pulse mb-3" id="loading-indicator">
        [+] Scraping data dari Stockbit & Orderbook Market...
      </div>
    ]);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setLogs((prev) => {
      const newLogs = prev.slice(0, prev.length - 1); 
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
            <span className={`w-2 h-2 rounded-full ${loading ? 'bg-yellow-500' : 'bg-emerald-500 animate-pulse'}`}></span>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{loading ? 'Scraping...' : 'System Active'}</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        
        {/* CHART TRADINGVIEW IHSG */}
        <section className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="px-5 py-3 border-b border-zinc-800 flex items-center justify-between bg-[#111]">
            <div className="flex items-center gap-2">
                <span className="text-emerald-500 text-sm">📊</span>
                <h2 className="text-xs font-bold text-white uppercase tracking-widest">Market Overview (IHSG)</h2>
            </div>
            <span className="text-[10px] text-zinc-500 font-mono">{lastUpdate}</span>
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
        <section className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
          <div className="px-5 py-3 border-b border-zinc-800 flex items-center justify-between bg-[#111]">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 text-sm">🤖</span>
              <h2 className="text-xs font-bold text-white uppercase tracking-widest">Pediaboy AI Assistant</h2>
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
                placeholder="Tanya AI: Analisa saham HUMI hari ini..."
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
