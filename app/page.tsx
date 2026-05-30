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
    <main className="min-h-screen bg-[#050B14] text-white max-w-md mx-auto">

      <div className="p-5">

        <h1 className="text-2xl font-bold text-cyan-400">
          RITEL COMMUNITY.ID
        </h1>

        <p className="text-sm text-slate-400 mt-2">
          Fundamental • Bandarmologi • Multibagger
        </p>

      </div>

      <div className="px-5">

        <div className="bg-[#0B1324] rounded-3xl p-5 border border-cyan-500/10">

          <h2 className="text-3xl font-bold leading-tight">
            Cek Fundamental
            <br />
            Saham IDX
          </h2>

          <p className="text-sm text-slate-400 mt-3">
            Analisa saham otomatis untuk member
            RITEL COMMUNITY.ID
          </p>

          <input
            value={kode}
            onChange={(e) => setKode(e.target.value)}
            placeholder="Contoh: ANTM"
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

      <div className="px-5 mt-5">

        <a
          href="/vip"
          className="
            block
            text-center
            py-4
            rounded-xl
            bg-[#0B1324]
          "
        >
          💎 Login VIP
        </a>

      </div>

    </main>
  );
}
