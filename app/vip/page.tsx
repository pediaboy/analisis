"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VIP() {

  const [token, setToken] = useState("");
  const router = useRouter();

  const login = () => {

    if (token === "RITEL2026") {

      localStorage.setItem("vip", "true");

      router.push("/dashboard");

    } else {

      alert("Token Salah");

    }
  };

  return (
    <main className="max-w-md mx-auto min-h-screen p-4">

      <h1 className="text-2xl font-bold text-blue-400 mt-10">
        Login VIP
      </h1>

      <p className="text-slate-400 mt-2">
        Masukkan token VIP
      </p>

      <input
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Token VIP"
        className="w-full mt-5 p-3 rounded-xl bg-[#111827]"
      />

      <button
        onClick={login}
        className="w-full mt-4 p-3 rounded-xl bg-blue-600"
      >
        Masuk Dashboard
      </button>

      <a
        href="https://wa.me/6282218723401?text=Saya%20ingin%20join%20VIP"
        target="_blank"
        className="block text-center mt-4 text-blue-400"
      >
        Belum punya token?
      </a>

    </main>
  );
}
