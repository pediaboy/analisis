"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [kode, setKode] = useState("");
  const router = useRouter();

  const handleAnalisa = () => {
    if (!kode.trim()) return;
    router.push(`/analisa/${kode.toUpperCase()}`);
  };

  return (
    <main className="min-h-screen max-w-md mx-auto bg-[#050B14] text-white">

      {/* HEADER */}
      <div className="px-5 pt-6">

        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-2xl font-bold text-cyan-400">
              RITEL COMMUNITY.ID
            </h1>

            <p className="text-xs text-slate-400 mt-1">
              Fundamental • Bandarmologi • Multibagger
            </p>
          </div>

          <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
            💎
          </div>

        </div>

      </div>

      {/* HERO */}
      <div className="px-5 mt-5">

        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-[#0B1324] to-[#08111F] p-6">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="relative">

            <span className="text-[10px] px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
              PREMIUM ANALYTICS
            </span>

            <h2 className="text-3xl font-bold mt-4 leading-tight">
              Cek Fundamental
              <br />
              Saham IDX
            </h2>

            <p className="text-sm text-slate-400 mt-3">
              Analisa fundamental otomatis, valuasi,
              growth, dan potensi multibagger.
            </p>

            <input
              value={kode}
              onChange={(e) => setKode(e.target.value)}
              placeholder="Contoh: ANTM"
              className="w-full mt-5 bg-[#111827] border border-slate-700 rounded-2xl px-4 py-4 outline-none"
            />

            <button
              onClick={handleAnalisa}
              className="w-full mt-3 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600"
            >
              🔍 Cek Saham Sekarang
            </button>

          </div>

        </div>

      </div>

      {/* STATISTIK */}
      <div className="px-5 mt-5">

        <div className="grid grid-cols-3 gap-3">

          <div className="bg-[#0B1324] rounded-2xl p-3 text-center">
            <div className="font-bold text-cyan-400">
              950+
            </div>
            <div className="text-[10px] text-slate-400">
              Saham IDX
            </div>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-3 text-center">
            <div className="font-bold text-cyan-400">
              1200+
            </div>
            <div className="text-[10px] text-slate-400">
              Member
            </div>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-3 text-center">
            <div className="font-bold text-cyan-400">
              85%
            </div>
            <div className="text-[10px] text-slate-400">
              Scanner
            </div>
          </div>

        </div>

      </div>

      {/* FITUR */}
      <div className="px-5 mt-6">

        <h3 className="font-bold mb-3">
          Scanner Premium
        </h3>

        <div className="grid grid-cols-2 gap-3">

          <div className="bg-[#0B1324] p-4 rounded-2xl">
            <div className="text-xl">📊</div>
            <div className="font-semibold mt-2 text-sm">
              Fundamental
            </div>
          </div>

          <div className="bg-[#0B1324] p-4 rounded-2xl">
            <div className="text-xl">📈</div>
            <div className="font-semibold mt-2 text-sm">
              Bandarmologi
            </div>
          </div>

          <div className="bg-[#0B1324] p-4 rounded-2xl">
            <div className="text-xl">🎯</div>
            <div className="font-semibold mt-2 text-sm">
              BSJP
            </div>
          </div>

          <div className="bg-[#0B1324] p-4 rounded-2xl">
            <div className="text-xl">🚀</div>
            <div className="font-semibold mt-2 text-sm">
              Multibagger
            </div>
          </div>

        </div>

      </div>

      {/* WATCHLIST */}
      <div className="px-5 mt-6">

        <h3 className="font-bold mb-3">
          🔥 Watchlist Hari Ini
        </h3>

        <div className="bg-[#0B1324] rounded-3xl p-4 space-y-3">

          {["ANTM", "AMMN", "ARCI", "BBRI", "BBCA"].map((saham) => (
            <button
              key={saham}
              onClick={() => router.push(`/analisa/${saham}`)}
              className="w-full text-left bg-[#111827] rounded-xl px-4 py-3"
            >
              {saham}
            </button>
          ))}

        </div>

      </div>

      {/* FLASH SALE */}
      <div className="px-5 mt-6">

        <div className="rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 p-5">

          <div className="text-cyan-400 text-sm font-semibold">
            VIP FLASH SALE
          </div>

          <div className="mt-4 space-y-3">

            <div className="flex justify-between">
              <span>Technical & Mindset</span>
              <span className="font-bold text-cyan-400">
                Rp100K
              </span>
            </div>

            <div className="flex justify-between">
              <span>Macro & Fundamental</span>
              <span className="font-bold text-cyan-400">
                Rp300K
              </span>
            </div>

          </div>

          <a
            href="/vip"
            className="block mt-5 text-center py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold"
          >
            💎 Lihat Paket VIP
          </a>

        </div>

      </div>

      {/* FOOTER */}
      <div className="py-10 text-center text-xs text-slate-500">
        ©️ 2026 RITEL COMMUNITY.ID
      </div>

    </main>
  );
}
