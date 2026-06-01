"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VipPage() {
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const TOKENS = ["RCVIP001", "RCVIP002", "RCVIP003"];

  const handleLogin = () => {
    if (TOKENS.includes(token.trim())) {
      localStorage.setItem("vip", "true");
      router.push("/dashboard");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <main
      className="min-h-screen text-white max-w-md mx-auto"
      style={{ background: "var(--bg-base)" }}
    >
      {/* HEADER */}
      <div className="px-5 pt-10 pb-5" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
        <a href="/" className="inline-flex items-center gap-1.5 text-xs font-medium mb-6 transition-opacity hover:opacity-70" style={{ color: "var(--text-muted)" }}>
          ← Kembali
        </a>
        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>
          Member Area
        </p>
        <h1
          className="text-2xl font-bold"
          style={{ color: "var(--neon-cyan)", textShadow: "0 0 24px rgba(0,212,255,0.35)" }}
        >
          VIP Login
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Masukkan token membership untuk akses penuh
        </p>
      </div>

      <div className="px-5 py-6 space-y-4 pb-10">

        {/* LOGIN FORM */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "var(--bg-card)",
            border: `1px solid ${error ? "rgba(239,68,68,0.4)" : "var(--border-active)"}`,
            boxShadow: error
              ? "0 0 24px rgba(239,68,68,0.08)"
              : "0 0 40px rgba(0,212,255,0.06)",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)" }}>
            🔐 Token VIP
          </p>

          <input
            value={token}
            onChange={(e) => { setToken(e.target.value); setError(false); }}
            onKeyDown={handleKey}
            placeholder="Masukkan Token VIP"
            className="w-full rounded-xl px-4 py-4 text-sm font-medium outline-none placeholder:opacity-40 transition-all"
            style={{
              background: "#03080f",
              border: `1px solid ${error ? "rgba(239,68,68,0.4)" : "var(--border-subtle)"}`,
              color: "white",
              letterSpacing: "0.08em",
            }}
            onFocus={(e) => !error && (e.currentTarget.style.borderColor = "var(--neon-cyan)")}
            onBlur={(e) => !error && (e.currentTarget.style.borderColor = "var(--border-subtle)")}
          />

          {error && (
            <p className="text-xs mt-2" style={{ color: "#ef4444" }}>
              Token tidak valid. Hubungi admin untuk token aktif.
            </p>
          )}

          <button
            onClick={handleLogin}
            className="w-full mt-4 py-4 rounded-xl font-bold text-sm tracking-wide transition-all"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #2563eb 100%)",
              color: "#020810",
              boxShadow: "0 0 20px rgba(0,212,255,0.25)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px rgba(0,212,255,0.45)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,255,0.25)")}
          >
            Masuk ke Dashboard →
          </button>
        </div>

        {/* BELUM PUNYA TOKEN */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
        >
          <p className="font-bold text-white mb-1">Belum punya token?</p>
          <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
            Hubungi admin untuk aktivasi membership. Token aktif langsung setelah pembayaran.
          </p>
          <a
            href="https://wa.me/6282218723401?text=Halo%20Admin,%20saya%20ingin%20bergabung%20VIP%20Ritel%20Community."
            target="_blank"
            rel="noreferrer"
            className="block text-center py-3.5 rounded-xl font-bold text-sm tracking-wide"
            style={{
              background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
              color: "white",
              boxShadow: "0 0 20px rgba(34,197,94,0.2)",
            }}
          >
            WhatsApp Admin →
          </a>
          <a
            href="/paket"
            className="block text-center py-3 mt-2 rounded-xl font-medium text-sm"
            style={{ color: "var(--neon-cyan)", border: "1px solid var(--border-active)" }}
          >
            Lihat Harga Paket
          </a>
        </div>

        {/* FITUR PREVIEW */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>
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
                className="text-xs py-2 px-3 rounded-lg"
                style={{
                  background: "rgba(0,212,255,0.04)",
                  color: "#94a3b8",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="rounded-xl px-5 py-4"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
        >
          <div className="text-xs font-semibold tracking-wide" style={{ color: "var(--neon-cyan)" }}>
            Creator & Developer
          </div>
          <div className="text-sm font-medium text-white mt-1">THIRAFI THARIQ AL IDRIS</div>
          <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>@elthoriqqqq_</div>
        </div>
      </div>
    </main>
  );
}
