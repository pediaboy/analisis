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
    if (TOKENS.includes(token)) {
      localStorage.setItem("vip", "true");
      router.push("/dashboard");
    } else {
      alert("Token VIP tidak valid");
    }
  };

  return (
    <main className="min-h-screen bg-[#050B14] text-white max-w-md mx-auto p-5">

      <h1 className="text-3xl font-bold text-cyan-400">
        VIP LOGIN
      </h1>

      <input
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Masukkan Token VIP"
        className="w-full mt-5 bg-[#0B1324] rounded-xl px-4 py-4"
      />

      <button
        onClick={handleLogin}
        className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600"
      >
        Login VIP
      </button>

    </main>
  );
}
