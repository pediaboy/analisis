"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VipPage() {
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const TOKENS = ["RCVIP001", "RCVIP002", "RCVIP003"];

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      if (TOKENS.includes(token.trim())) {
        localStorage.setItem("vip", "true");
        router.push("/dashboard");
      } else {
        setError(true);
        setLoading(false);
        setTimeout(() => setError(false), 3000);
      }
    }, 600);
  };

  return (
    <main className="min-h-screen text-white max-w-md mx-auto px-5 pt-12 pb-12">

      {/* NAV */}
      <div className="flex items-center justify-between mb-12">
        <a href="/" className="text-xs font-semibold" style={{ color: "var(--muted-2)" }}>← Kembali</a>
        <span className="pill">MEMBER AREA</span>
      </div>

      {/* HERO */}
      <div className="mb-10 text-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))",
            border: "1px solid rgba(0,212,255,0.2)",
          }}
        >
          🔐
        </div>
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
          Login
        </p>
        <h1
          className="text-4xl font-black"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, var(--cyan) 60%, var(--purple) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          VIP Dashboard
        </h1>
        <p className="text-sm mt-2" style={{ color: "var(--muted-2)" }}>
          Masukkan token membership untuk akses penuh
        </p>
      </div>

      <div className="space-y-4">

        {/* FORM */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${error ? "rgba(239,68,68,0.4)" : "rgba(0,212,255,0.2)"}`,
            backdropFilter: "blur(12px)",
            boxShadow: error
              ? "0 0 30px rgba(239,68,68,0.06)"
              : "0 0 40px rgba(0,212,255,0.05)",
            transition: "all 0.3s",
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
            Token VIP
          </p>

          <div
            className="flex items-center gap-3 rounded-xl px-4 py-3.5 mb-3"
            style={{
              background: "rgba(0,0,0,0.3)",
              border: `1px solid ${error ? "rgba(239,68,68,0.3)" : "rgba(255,255,255,0.06)"}`,
              transition: "border-color 0.2s",
            }}
          >
            <span style={{ color: "var(--muted)" }}>🔑</span>
            <input
              value={token}
              onChange={(e) => { setToken(e.target.value); setError(false); }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="Masukkan Token VIP"
              className="flex-1 bg-transparent outline-none text-sm font-medium placeholder:opacity-30"
              style={{ color: "white", letterSpacing: "0.06em" }}
            />
          </div>

          {error && (
            <p className="text-xs mb-3" style={{ color: "#ef4444" }}>
              ⚠️ Token tidak valid. Hubungi admin untuk token aktif.
            </p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading || !token}
            className="btn-primary"
            style={{ opacity: !token ? 0.5 : 1 }}
          >
            {loading ? "Memverifikasi..." : "Masuk ke Dashboard →"}
          </button>
        </div>

        {/* BELUM TOKEN */}
        <div className="glass p-5">
          <p className="font-bold text-white mb-1">Belum punya token?</p>
          <p className="text-xs mb-4" style={{ color: "var(--muted-2)" }}>
            Hubungi admin untuk aktivasi. Token aktif langsung setelah pembayaran.
          </p>
          <a
            href="https://wa.me/6282218723401?text=Halo%20Admin,%20saya%20ingin%20bergabung%20VIP%20Ritel%20Community."
            target="_blank"
            rel="noreferrer"
            className="btn-primary mb-2"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
              boxShadow: "0 0 30px rgba(34,197,94,0.2)",
            }}
          >
            WhatsApp Admin →
          </a>
          <a href="/paket" className="btn-outline">
            Lihat Harga Paket
          </a>
        </div>

        {/* PREVIEW FITUR */}
        <div className="glass p-5">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>
            Yang Kamu Dapat
          </p>
          <div className="space-y-2">
            {[
              "🏦 Bandarmologi IDX real-time",
              "⭐ Smart Money Score",
              "🚀 Multibagger Scanner",
              "📰 News Scanner",
              "📈 Watchlist Premium",
            ].map((f) => (
              <div
                key={f}
                className="text-xs py-2.5 px-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--muted-2)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="divider" />
        <div className="text-center pt-2">
          <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>
            Creator & Developer
          </p>
          <p className="font-bold text-white">THIRAFI THARIQ AL IDRIS</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>@elthoriqqqq_</p>
        </div>

      </div>
    </main>
  );
}
