"use client";

import {
  Search,
  Crown,
  User,
  TrendingUp,
  BarChart3,
  Target,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen max-w-md mx-auto bg-[#050B14] text-white">

      {/* HEADER */}
      <div className="px-4 pt-6 pb-3">

        <h1 className="text-xl font-bold text-blue-400">
          RITEL COMMUNITY.ID
        </h1>

        <p className="text-xs text-slate-400 mt-1">
          Fundamental • Bandarmologi • Multibagger
        </p>

      </div>

      {/* HERO */}
      <div className="px-4">

        <div
          className="
          rounded-3xl
          border
          border-blue-900/30
          bg-[#0B1324]
          p-5
        "
        >

          <span
            className="
            text-[10px]
            px-3
            py-1
            rounded-full
            bg-blue-500/10
            text-blue-400
          "
          >
            PREMIUM ANALYTICS
          </span>

          <h2
            className="
            text-3xl
            font-bold
            leading-tight
            mt-4
          "
          >
            Cek Fundamental
            <br />
            Saham Dalam
            <span className="text-blue-400">
              {" "}10 Detik
            </span>
          </h2>

          <p
            className="
            text-sm
            text-slate-400
            mt-3
            leading-relaxed
          "
          >
            Analisa Fundamental,
            Bandarmologi, Valuasi,
            Trend Market dan Potensi
            Multibagger dalam satu dashboard.
          </p>

        </div>

      </div>

      {/* SEARCH */}
      <div className="px-4 mt-4">

        <div
          className="
          bg-[#0B1324]
          border
          border-blue-900/20
          rounded-2xl
          p-4
        "
        >

          <label className="text-xs text-slate-400">
            Cari Kode Saham
          </label>

          <input
            placeholder="Contoh: ANTM"
            className="
              w-full
              mt-2
              px-4
              py-3
              rounded-xl
              bg-[#111827]
              border
              border-slate-700
              text-sm
              outline-none
            "
          />

          <button
            className="
            w-full
            mt-3
            py-3
            rounded-xl
            text-sm
            font-semibold
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            flex
            items-center
            justify-center
            gap-2
          "
          >
            <Search size={16} />
            Cek Saham Sekarang
          </button>

        </div>

      </div>

      {/* LOGIN BUTTON */}
      <div
        className="
        px-4
        mt-3
        grid
        grid-cols-2
        gap-3
      "
      >

        <button
          className="
          py-3
          rounded-xl
          text-sm
          bg-[#111827]
          border
          border-slate-700
          flex
          justify-center
          items-center
          gap-2
        "
        >
          <User size={16} />
          Login Free
        </button>

        <button
          className="
          py-3
          rounded-xl
          text-sm
          font-semibold
          bg-gradient-to-r
          from-blue-500
          to-cyan-500
          flex
          justify-center
          items-center
          gap-2
        "
        >
          <Crown size={16} />
          Login VIP
        </button>

      </div>

      {/* FITUR */}
      <div className="px-4 mt-6">

        <h3 className="font-semibold text-base mb-3">
          Fitur Premium
        </h3>

        <div className="space-y-3">

          <div
            className="
            bg-[#0B1324]
            rounded-2xl
            p-4
            border
            border-blue-900/20
          "
          >
            <div className="flex items-center gap-2">
              <BarChart3 size={18} className="text-blue-400" />
              <h4 className="text-sm font-semibold text-blue-400">
                Fundamental Scanner
              </h4>
            </div>

            <p className="text-xs text-slate-400 mt-2">
              Analisa PER, PBV, ROE,
              DER, EPS dan valuasi otomatis.
            </p>
          </div>

          <div
            className="
            bg-[#0B1324]
            rounded-2xl
            p-4
            border
            border-blue-900/20
          "
          >
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-blue-400" />
              <h4 className="text-sm font-semibold text-blue-400">
                Bandarmologi
              </h4>
            </div>

            <p className="text-xs text-slate-400 mt-2">
              Deteksi akumulasi dan distribusi bandar
              melalui aktivitas broker.
            </p>
          </div>

          <div
            className="
            bg-[#0B1324]
            rounded-2xl
            p-4
            border
            border-blue-900/20
          "
          >
            <div className="flex items-center gap-2">
              <Target size={18} className="text-blue-400" />
              <h4 className="text-sm font-semibold text-blue-400">
                Multibagger Scanner
              </h4>
            </div>

            <p className="text-xs text-slate-400 mt-2">
              Cari saham yang berpotensi
              naik berkali-kali lipat.
            </p>
          </div>

          <div
            className="
            bg-[#0B1324]
            rounded-2xl
            p-4
            border
            border-blue-900/20
          "
          >
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue-400" />
              <h4 className="text-sm font-semibold text-blue-400">
                Screener VIP
              </h4>
            </div>

            <p className="text-xs text-slate-400 mt-2">
              BSJP, BPJS, Scalping dan
              Swing Trade Scanner otomatis.
            </p>
          </div>

        </div>

      </div>

      {/* MEMBER */}
      <div className="px-4 mt-6">

        <div
          className="
          bg-gradient-to-r
          from-blue-600/20
          to-cyan-600/20
          border
          border-blue-500/20
          rounded-2xl
          p-5
        "
        >

          <h3 className="font-bold text-base">
            Upgrade ke VIP 💎
          </h3>

          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Dapatkan akses Bandarmologi,
            Screener Premium, Analisa Bagger,
            Alert Saham dan Grup Diskusi VIP.
          </p>

          <button
            className="
            w-full
            mt-4
            py-3
            rounded-xl
            font-semibold
            text-sm
            bg-gradient-to-r
            from-blue-500
            to-cyan-500
          "
          >
            Upgrade Sekarang
          </button>

        </div>

      </div>

      {/* FOOTER */}
      <div
        className="
        text-center
        text-slate-500
        text-[11px]
        py-8
      "
      >
        © 2026 RITEL COMMUNITY.ID
      </div>

    </main>
  );
}
