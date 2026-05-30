"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VipPage() {
  const [token, setToken] = useState("");
  const router = useRouter();

  const TOKENS = [
    "RCVIP001",
    "RCVIP002",
    "RCVIP003",
  ];

  const handleLogin = () => {
    if (TOKENS.includes(token.trim())) {
      localStorage.setItem("vip", "true");
      router.push("/dashboard");
    } else {
      alert("Token VIP tidak valid");
    }
  };

  return (
    <main className="min-h-screen bg-[#050B14] text-white max-w-md mx-auto">

      <div className="p-5">

        <a
          href="/"
          className="text-cyan-400 text-sm"
        >
          ← Kembali
        </a>

        <h1 className="text-4xl font-bold text-cyan-400 mt-4">
          VIP Login
        </h1>

        <p className="text-slate-400 mt-2">
          Masukkan token membership VIP Anda.
        </p>

      </div>

      <div className="px-5">

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <input
            value={token}
            onChange={(e) =>
              setToken(e.target.value)
            }
            placeholder="Masukkan Token VIP"
            className="
              w-full
              bg-[#111827]
              rounded-xl
              px-4
              py-4
              outline-none
            "
          />

          <button
            onClick={handleLogin}
            className="
              w-full
              mt-4
              py-4
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              font-semibold
            "
          >
            Login VIP
          </button>

        </div>

      </div>

      <div className="px-5 mt-5">

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            Belum Punya Token?
          </h2>

          <p className="text-sm text-slate-400 mt-3">
            Hubungi admin untuk aktivasi
            membership VIP.
          </p>

          <a
            href="https://wa.me/6282218723401?text=Halo%20Admin,%20saya%20ingin%20bergabung%20VIP%20Ritel%20Community."
            target="_blank"
            className="
              block
              text-center
              mt-4
              py-4
              rounded-xl
              bg-gradient-to-r
              from-green-500
              to-green-600
              font-semibold
            "
          >
            Gabung VIP Sekarang
          </a>

        </div>

      </div>

      <div className="px-5 mt-5 pb-10">

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
