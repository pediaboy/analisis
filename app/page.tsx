"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [kode, setKode] = useState("");
  const router = useRouter();

  const handleAnalisa = () => {
    if (!kode.trim()) return;

    router.push(
      `/analisa/${kode.toUpperCase()}`
    );
  };

  return (
    <main className="min-h-screen bg-[#050B14] text-white max-w-md mx-auto">

      {/* HEADER */}

      <div className="p-5">

        <h1 className="text-3xl font-bold text-cyan-400">
          RITEL COMMUNITY.ID
        </h1>

        <p className="text-slate-400 mt-2">
          Fundamental • Bandarmologi • Multibagger
        </p>

      </div>

      {/* HERO */}

      <div className="px-5">

        <div className="bg-[#0B1324] rounded-3xl p-5 border border-cyan-500/10">

          <h2 className="text-3xl font-bold leading-tight">
            Analisa
            <br />
            Saham Indonesia
          </h2>

          <p className="text-sm text-slate-400 mt-3">
            Cek fundamental saham IDX secara
            otomatis dalam hitungan detik.
          </p>

          <input
            value={kode}
            onChange={(e) =>
              setKode(e.target.value)
            }
            placeholder="Contoh: BBCA"
            className="
              w-full
              mt-5
              bg-[#111827]
              rounded-xl
              px-4
              py-4
              outline-none
            "
          />

          <button
            onClick={handleAnalisa}
            className="
              w-full
              mt-3
              py-4
              rounded-xl
              font-semibold
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
            "
          >
            🔍 Cek Saham Sekarang
          </button>

        </div>

      </div>

      {/* MENU */}

      <div className="px-5 mt-5 space-y-3">

        <a
          href="/panduan"
          className="
            block
            bg-[#0B1324]
            rounded-2xl
            p-5
          "
        >
          <div className="font-bold">
            📚 Panduan Trading
          </div>

          <div className="text-sm text-slate-400 mt-2">
            Belajar saham dari dasar hingga
            analisa fundamental & teknikal.
          </div>
        </a>

        <a
          href="/paket"
          className="
            block
            bg-[#0B1324]
            rounded-2xl
            p-5
          "
        >
          <div className="font-bold">
            💎 Lihat Paket VIP
          </div>

          <div className="text-sm text-slate-400 mt-2">
            Bandarmologi, Multibagger,
            News Scanner dan fitur premium.
          </div>
        </a>

        <a
          href="/vip"
          className="
            block
            bg-[#0B1324]
            rounded-2xl
            p-5
          "
        >
          <div className="font-bold">
            🔐 Login VIP
          </div>

          <div className="text-sm text-slate-400 mt-2">
            Masuk ke dashboard member VIP.
          </div>
        </a>

      </div>

      {/* FOOTER */}

      <div className="px-5 mt-8 pb-10">

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <div className="text-cyan-400 font-bold">
            Creator & Developer
          </div>

          <div className="mt-3">
            THIRAFI THARIQ AL IDRIS
          </div>

          <div className="text-slate-400 text-sm mt-1">
            Instagram: @elthoriqqqq_
          </div>

        </div>

      </div>

    </main>
  );
}
