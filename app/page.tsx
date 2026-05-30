"use client";

import { Search, Crown, User } from "lucide-react";

export default function Home() {
  return (
    // Wrapper luar: Berfungsi sebagai background (layar belakang) kalau dibuka di PC
    <div className="min-h-screen bg-black sm:bg-[#02050A] flex justify-center">
      
      {/* Layar Mobile Container: Dibatasi max-w-md (layar HP) dan dibikin seolah-olah frame */}
      <main className="w-full max-w-md min-h-screen bg-[#050B14] text-white relative shadow-2xl sm:border-x sm:border-blue-900/20">

        {/* HEADER */}
        <div className="px-5 pt-8 pb-4">
          <h1 className="text-2xl font-bold text-blue-400">
            RITEL COMMUNITY.ID
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Fundamental • Bandarmologi • Multibagger
          </p>
        </div>

        {/* HERO */}
        <div className="px-5 mt-6">
          <div className="rounded-3xl border border-blue-900/30 bg-gradient-to-b from-[#0B1324] to-[#050B14] p-6">
            <h2 className="text-3xl font-bold leading-tight">
              CEK FUNDAMENTAL
              <br />
              SAHAM DALAM
              <span className="text-blue-400"> 10 DETIK</span>
            </h2>
            <p className="text-slate-400 mt-4 text-sm">
              Analisa Fundamental, Bandarmologi, Trend Market dan Potensi Bagger dalam satu dashboard premium.
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="px-5 mt-6">
          <div className="bg-[#0B1324] border border-blue-900/30 rounded-3xl p-4">
            <label className="text-sm text-slate-400">
              Cari Kode Saham
            </label>
            <input
              type="text"
              placeholder="Contoh: ANTM"
              className="w-full mt-3 bg-[#111827] border border-slate-700 rounded-xl px-4 py-4 outline-none"
            />
            <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:opacity-90 transition-opacity">
              <Search size={18} />
              CEK SAHAM SEKARANG
            </button>
          </div>
        </div>

        {/* BUTTON LOGIN */}
        <div className="px-5 mt-5 grid grid-cols-2 gap-3">
          <button className="bg-[#111827] border border-slate-700 py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-[#1f2937] transition-colors">
            <User size={18} />
            LOGIN FREE
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 py-4 rounded-xl font-bold flex justify-center items-center gap-2 shadow-lg shadow-blue-500/30 hover:opacity-90 transition-opacity">
            <Crown size={18} />
            LOGIN VIP
          </button>
        </div>

        {/* FITUR */}
        <div className="px-5 mt-8">
          <h3 className="font-bold text-lg mb-4">
            Fitur Premium
          </h3>
          <div className="space-y-3">
            <div className="bg-[#0B1324] rounded-2xl p-4 border border-blue-900/20">
              <h4 className="text-blue-400 font-semibold">
                Fundamental Scanner
              </h4>
              <p className="text-sm text-slate-400 mt-1">
                Analisa PER, PBV, ROE, DER dan valuasi otomatis.
              </p>
            </div>
            <div className="bg-[#0B1324] rounded-2xl p-4 border border-blue-900/20">
              <h4 className="text-blue-400 font-semibold">
                Bandarmologi
              </h4>
              <p className="text-sm text-slate-400 mt-1">
                Deteksi akumulasi dan distribusi bandar.
              </p>
            </div>
            <div className="bg-[#0B1324] rounded-2xl p-4 border border-blue-900/20">
              <h4 className="text-blue-400 font-semibold">
                Bagger Scanner
              </h4>
              <p className="text-sm text-slate-400 mt-1">
                Cari saham potensial multibagger lebih cepat.
              </p>
            </div>
            <div className="bg-[#0B1324] rounded-2xl p-4 border border-blue-900/20">
              <h4 className="text-blue-400 font-semibold">
                BSJP & BPJS Screener
              </h4>
              <p className="text-sm text-slate-400 mt-1">
                Beli Sore Jual Pagi dan Beli Pagi Jual Sore.
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center text-slate-500 text-xs py-10 pb-16">
          © 2026 RITEL COMMUNITY.ID
        </div>

      </main>
    </div>
  );
}
