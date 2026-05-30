"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const vip = localStorage.getItem("vip");

    if (!vip) {
      router.push("/vip");
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("vip");
    router.push("/");
  };

  return (
    <main className="min-h-screen max-w-md mx-auto bg-[#050B14] text-white">

      {/* HEADER */}

      <div className="px-4 pt-6">

        <h1 className="text-2xl font-bold text-blue-400">
          Dashboard VIP
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Selamat datang Member VIP
        </p>

      </div>

      {/* MEMBER STATUS */}

      <div className="px-4 mt-5">

        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-500/20 rounded-3xl p-5">

          <div className="text-xs text-cyan-400 font-semibold">
            STATUS MEMBER
          </div>

          <h2 className="text-xl font-bold mt-2">
            VIP ACTIVE 💎
          </h2>

          <p className="text-sm text-slate-300 mt-2">
            Akses semua fitur premium RITEL COMMUNITY.ID
          </p>

        </div>

      </div>

      {/* MENU */}

      <div className="px-4 mt-6">

        <h2 className="font-semibold mb-3">
          Fitur Premium
        </h2>

        <div className="grid grid-cols-2 gap-3">

          <div className="bg-[#0B1324] rounded-2xl p-4 border border-blue-900/20">
            <div className="text-2xl">📊</div>

            <h3 className="text-sm font-semibold mt-2">
              Fundamental
            </h3>

            <p className="text-[11px] text-slate-400 mt-1">
              Scanner Fundamental
            </p>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4 border border-blue-900/20">
            <div className="text-2xl">📈</div>

            <h3 className="text-sm font-semibold mt-2">
              Bandarmologi
            </h3>

            <p className="text-[11px] text-slate-400 mt-1">
              Deteksi Akumulasi
            </p>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4 border border-blue-900/20">
            <div className="text-2xl">🎯</div>

            <h3 className="text-sm font-semibold mt-2">
              BSJP
            </h3>

            <p className="text-[11px] text-slate-400 mt-1">
              Beli Sore Jual Pagi
            </p>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4 border border-blue-900/20">
            <div className="text-2xl">🚀</div>

            <h3 className="text-sm font-semibold mt-2">
              BPJS
            </h3>

            <p className="text-[11px] text-slate-400 mt-1">
              Beli Pagi Jual Sore
            </p>
          </div>

        </div>

      </div>

      {/* BSJP */}

      <div className="px-4 mt-6">

        <div className="bg-[#0B1324] rounded-3xl p-5 border border-blue-900/20">

          <h2 className="font-bold text-blue-400">
            BSJP Hari Ini
          </h2>

          <div className="mt-4 space-y-3">

            <div className="bg-[#111827] rounded-xl p-3">
              ANTM
            </div>

            <div className="bg-[#111827] rounded-xl p-3">
              ARCI
            </div>

            <div className="bg-[#111827] rounded-xl p-3">
              AMMN
            </div>

          </div>

        </div>

      </div>

      {/* BPJS */}

      <div className="px-4 mt-4">

        <div className="bg-[#0B1324] rounded-3xl p-5 border border-blue-900/20">

          <h2 className="font-bold text-blue-400">
            BPJS Hari Ini
          </h2>

          <div className="mt-4 space-y-3">

            <div className="bg-[#111827] rounded-xl p-3">
              ESIP
            </div>

            <div className="bg-[#111827] rounded-xl p-3">
              BULL
            </div>

            <div className="bg-[#111827] rounded-xl p-3">
              GOTO
            </div>

          </div>

        </div>

      </div>

      {/* MULTIBAGGER */}

      <div className="px-4 mt-4">

        <div className="bg-[#0B1324] rounded-3xl p-5 border border-blue-900/20">

          <h2 className="font-bold text-blue-400">
            Multibagger Scanner
          </h2>

          <div className="mt-4 space-y-3">

            <div className="bg-[#111827] rounded-xl p-3">
              ANTM
            </div>

            <div className="bg-[#111827] rounded-xl p-3">
              AMMN
            </div>

          </div>

        </div>

      </div>

      {/* WATCHLIST */}

      <div className="px-4 mt-4">

        <div className="bg-[#0B1324] rounded-3xl p-5 border border-blue-900/20">

          <h2 className="font-bold text-blue-400">
            Watchlist Premium
          </h2>

          <div className="mt-4 space-y-3">

            <div className="bg-[#111827] rounded-xl p-3">
              ⭐ ANTM
            </div>

            <div className="bg-[#111827] rounded-xl p-3">
              ⭐ BBRI
            </div>

            <div className="bg-[#111827] rounded-xl p-3">
              ⭐ BBCA
            </div>

          </div>

        </div>

      </div>

      {/* LOGOUT */}

      <div className="px-4 mt-6 mb-10">

        <button
          onClick={logout}
          className="w-full py-4 rounded-2xl bg-red-600 font-semibold"
        >
          Logout
        </button>

      </div>

    </main>
  );
}
