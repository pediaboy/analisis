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

  }, []);

  return (
    <main className="max-w-md mx-auto min-h-screen p-4">

      <h1 className="text-2xl font-bold text-blue-400 mt-5">
        Dashboard VIP
      </h1>

      <div className="space-y-3 mt-5">

        <div className="bg-[#0B1324] rounded-2xl p-4">
          <h2 className="text-blue-400 font-semibold">
            BSJP Hari Ini
          </h2>

          <p className="mt-2">
            ANTM
            <br />
            ARCI
            <br />
            AMMN
          </p>
        </div>

        <div className="bg-[#0B1324] rounded-2xl p-4">
          <h2 className="text-blue-400 font-semibold">
            BPJS Hari Ini
          </h2>

          <p className="mt-2">
            ESIP
            <br />
            BULL
            <br />
            GOTO
          </p>
        </div>

        <div className="bg-[#0B1324] rounded-2xl p-4">
          <h2 className="text-blue-400 font-semibold">
            Multibagger Scanner
          </h2>

          <p className="mt-2">
            ANTM
            <br />
            AMMN
          </p>
        </div>

      </div>

      <button
        onClick={() => {
          localStorage.removeItem("vip");
          location.href = "/";
        }}
        className="w-full mt-6 p-3 rounded-xl bg-red-600"
      >
        Logout
      </button>

    </main>
  );
}
