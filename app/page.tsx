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

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleAnalisa();
  };

  return (
    <main
      className="min-h-screen text-white max-w-md mx-auto flex flex-col"
      style={{ background: "var(--bg-base)" }}
    >
      {/* TOP BAR */}
      <div
        className="px-5 pt-10 pb-6"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
      >
        <div className="flex items-center gap-2 mb-1">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "var(--neon-cyan)", boxShadow: "0 0 6px var(--neon-cyan)" }}
          />
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
            Live
          </span>
        </div>
        <h1
          className="text-2xl font-bold tracking-tight"
          style={{ color: "var(--neon-cyan)", textShadow: "0 0 24px rgba(0,212,255,0.35)" }}
        >
          RITEL COMMUNITY.ID
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Fundamental · Bandarmologi · Multibagger
        </p>
      </div>

      {/* HERO SEARCH */}
      <div className="px-5 pt-8">
        <div
          className="rounded-2xl p-6"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-active)",
            boxShadow: "0 0 40px rgba(0,212,255,0.06)",
          }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--neon-cyan)" }}>
            Scanner
          </p>
          <h2 className="text-2xl font-bold leading-snug text-white mb-1">
            Analisa Saham
          </h2>
          <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>
            IDX · Real-time fundamental analysis
          </p>

          <div className="relative">
            <input
              value={kode}
              onChange={(e) => setKode(e.target.value.toUpperCase())}
              onKeyDown={handleKey}
              placeholder="Ketik kode saham, mis. BBCA"
              maxLength={6}
              className="w-full rounded-xl px-4 py-4 text-sm font-medium outline-none placeholder:opacity-40 transition-all"
              style={{
                background: "#03080f",
                border: "1px solid var(--border-subtle)",
                color: "white",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--neon-cyan)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
            />
          </div>

          <button
            onClick={handleAnalisa}
            className="w-full mt-3 py-4 rounded-xl font-bold text-sm tracking-wide transition-all"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #2563eb 100%)",
              color: "#020810",
              boxShadow: "0 0 24px rgba(0,212,255,0.25)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px rgba(0,212,255,0.45)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 24px rgba(0,212,255,0.25)")}
          >
            Cek Saham →
          </button>
        </div>
      </div>

      {/* MENU */}
      <div className="px-5 mt-5 space-y-3">
        {[
          {
            href: "/panduan",
            icon: "📚",
            label: "Panduan Trading",
            sub: "Dari dasar hingga analisa fundamental & teknikal",
          },
          {
            href: "/paket",
            icon: "💎",
            label: "Paket VIP",
            sub: "Bandarmologi, Multibagger, dan fitur premium",
          },
          {
            href: "/vip",
            icon: "🔐",
            label: "Login VIP",
            sub: "Masuk ke dashboard member eksklusif",
          },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center gap-4 rounded-xl px-5 py-4 group transition-all"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-active)";
              e.currentTarget.style.background = "var(--bg-card-2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.background = "var(--bg-card)";
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: "rgba(0,212,255,0.08)" }}
            >
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm text-white">{item.label}</div>
              <div className="text-xs mt-0.5 truncate" style={{ color: "var(--text-muted)" }}>
                {item.sub}
              </div>
            </div>
            <span style={{ color: "var(--text-muted)" }} className="text-sm">→</span>
          </a>
        ))}
      </div>

      {/* FOOTER */}
      <div className="px-5 mt-6 pb-10">
        <div
          className="rounded-xl px-5 py-4 flex items-center justify-between"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
        >
          <div>
            <div className="text-xs font-semibold tracking-wide" style={{ color: "var(--neon-cyan)" }}>
              Creator & Developer
            </div>
            <div className="text-sm font-medium text-white mt-1">THIRAFI THARIQ AL IDRIS</div>
            <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>@elthoriqqqq_</div>
          </div>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
            style={{ background: "rgba(0,212,255,0.08)" }}
          >
            📊
          </div>
        </div>
      </div>
    </main>
  );
}
