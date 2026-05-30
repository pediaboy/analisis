"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VIPPage() {
  const [token, setToken] = useState("");
  const router = useRouter();

  const loginVIP = () => {
    if (token === "RITEL-2026-VIP") {
      localStorage.setItem("vip", "true");
      router.push("/dashboard");
    } else {
      alert("Token VIP tidak valid");
    }
  };

  return (
    <main className="min-h-screen max-w-md mx-auto bg-[#050B14] text-white">

      <div className="px-4 pt-6">

        <a
          href="/"
          className="text-blue-400 text-sm"
        >
          ← Kembali
        </a>

        <h1 className="text-2xl font-bold mt-4">
          VIP RITEL COMMUNITY.ID
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Pilih paket VIP atau login menggunakan token.
        </p>

      </div>

      {/* LOGIN TOKEN */}

      <div className="px-4 mt-6">

        <div className="bg-[#0B1324] rounded-3xl p-5 border border-blue-900/20">

          <h2 className="font-semibold">
            Login VIP
          </h2>

          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Masukkan Token VIP"
            className="w-full mt-4 px-4 py-3 rounded-xl bg-[#111827] border border-slate-700"
          />

          <button
            onClick={loginVIP}
            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold"
          >
            Masuk Dashboard
          </button>

        </div>

      </div>

      {/* PRICING */}

      <div className="px-4 mt-6">

        <h2 className="text-lg font-bold mb-4">
          Paket VIP
        </h2>

        {/* BULANAN */}

        <div className="bg-[#0B1324] rounded-3xl p-5 border border-blue-900/20 mb-4">

          <h3 className="font-bold text-lg">
            VIP Bulanan
          </h3>

          <div className="text-slate-500 line-through text-sm mt-2">
            Rp250.000
          </div>

          <div className="text-3xl font-bold text-blue-400">
            Rp150.000
          </div>

          <div className="mt-4 space-y-2 text-sm">

            <p>✅ Fundamental Scanner</p>
            <p>✅ Bandarmologi</p>
            <p>✅ BSJP</p>
            <p>✅ BPJS</p>
            <p>✅ Grup VIP</p>

          </div>

          <a
            href="https://wa.me/6282218723401?text=Saya%20ingin%20join%20VIP%20Bulanan"
            target="_blank"
            className="block text-center mt-5 py-3 rounded-xl bg-blue-600"
          >
            Order Sekarang
          </a>

        </div>

        {/* 3 BULAN */}

        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-5 border border-cyan-500/20 mb-4">

          <div className="inline-block text-[10px] px-2 py-1 rounded-full bg-cyan-500 text-black font-bold">
            BEST SELLER
          </div>

          <h3 className="font-bold text-lg mt-3">
            VIP 3 Bulan
          </h3>

          <div className="text-slate-500 line-through text-sm mt-2">
            Rp750.000
          </div>

          <div className="text-3xl font-bold text-cyan-400">
            Rp400.000
          </div>

          <div className="mt-4 space-y-2 text-sm">

            <p>✅ Semua Fitur Bulanan</p>
            <p>✅ Multibagger Scanner</p>
            <p>✅ Watchlist Premium</p>
            <p>✅ Alert Saham</p>

          </div>

          <a
            href="https://wa.me/6282218723401?text=Saya%20ingin%20join%20VIP%203%20Bulan"
            target="_blank"
            className="block text-center mt-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Order Sekarang
          </a>

        </div>

        {/* TAHUNAN */}

        <div className="bg-[#0B1324] rounded-3xl p-5 border border-blue-900/20">

          <h3 className="font-bold text-lg">
            VIP Tahunan
          </h3>

          <div className="text-slate-500 line-through text-sm mt-2">
            Rp3.000.000
          </div>

          <div className="text-3xl font-bold text-blue-400">
            Rp1.200.000
          </div>

          <div className="mt-4 space-y-2 text-sm">

            <p>✅ Semua Fitur VIP</p>
            <p>✅ Full Dashboard</p>
            <p>✅ Priority Alert</p>
            <p>✅ Watchlist Premium</p>

          </div>

          <a
            href="https://wa.me/6282218723401?text=Saya%20ingin%20join%20VIP%20Tahunan"
            target="_blank"
            className="block text-center mt-5 py-3 rounded-xl bg-blue-600"
          >
            Order Sekarang
          </a>

        </div>

      </div>

    </main>
  );
}
