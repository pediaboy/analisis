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
    <main className="min-h-screen text-white max-w-md mx-auto px-5 pt-12 pb-12">

      {/* HEADER NAV */}
      <div className="flex items-center justify-between mb-14">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--cyan)" }}>
            RITEL COMMUNITY
          </span>
          <div className="w-6 h-0.5 mt-1 rounded-full" style={{ background: "linear-gradient(90deg, var(--cyan), var(--purple))" }} />
        </div>
        <a
          href="/vip"
          className="text-xs font-semibold px-3 py-1.5 rounded-full"
          style={{ border: "1px solid rgba(255,255,255,0.1)", color: "var(--muted-2)" }}
        >
          Login VIP →
        </a>
      </div>

      {/* HERO */}
      <div className="text-center mb-10">
        <div className="pill mx-auto w-fit mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          IDX FUNDAMENTAL SCANNER
        </div>

        <h1 className="text-5xl font-black leading-tight tracking-tight mb-4">
          Analisa
          <br />
          <span className="gradient-text">Saham Indonesia</span>
        </h1>

        <p className="text-sm leading-relaxed" style={{ color: "var(--muted-2)" }}>
          Cek fundamental saham IDX — Bandarmologi,
          <br />
          Smart Money & Multibagger dalam hitungan detik.
        </p>
      </div>

      {/* SEARCH */}
      <div className="glass-glow p-5 mb-4">
        <div
          className="flex items-center gap-3 rounded-xl px-4 py-3.5 mb-3"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span style={{ color: "var(--muted)" }}>🔍</span>
          <input
            value={kode}
            onChange={(e) => setKode(e.target.value.toUpperCase())}
            onKeyDown={(e) => e.key === "Enter" && handleAnalisa()}
            placeholder="Ketik kode saham, mis. BBCA"
            maxLength={6}
            className="flex-1 bg-transparent outline-none text-sm font-medium placeholder:opacity-30"
            style={{ color: "white" }}
          />
          {kode && (
            <span className="text-xs font-bold" style={{ color: "var(--cyan)" }}>
              {kode}
            </span>
          )}
        </div>

        <button
          onClick={handleAnalisa}
          className="btn-primary"
        >
          Cek Saham Sekarang →
        </button>
      </div>

      {/* STATS ROW */}
      <div className="grid grid-cols-3 gap-2 mb-8">
        {[
          { val: "500+", label: "Emiten IDX" },
          { val: "Real‑time", label: "Data Update" },
          { val: "Gratis", label: "Preview" },
        ].map((s) => (
          <div
            key={s.label}
            className="text-center py-3 px-2 rounded-xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="text-sm font-bold" style={{ color: "var(--cyan)" }}>{s.val}</div>
            <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="divider mb-6" />

      {/* MENU */}
      <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>
        Fitur & Layanan
      </p>
      <div className="space-y-2.5 mb-8">
        {[
          {
            href: "/panduan",
            icon: "📚",
            label: "Panduan Trading",
            sub: "Dari dasar hingga analisa fundamental & teknikal",
            badge: null,
          },
          {
            href: "/paket",
            icon: "💎",
            label: "Paket VIP",
            sub: "Bandarmologi, Multibagger, dan fitur premium",
            badge: "HOT",
          },
          {
            href: "/vip",
            icon: "🔐",
            label: "Login VIP",
            sub: "Masuk ke dashboard member eksklusif",
            badge: null,
          },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="glass flex items-center gap-4 px-4 py-4 group"
            style={{ transition: "border-color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-white">{item.label}</span>
                {item.badge && (
                  <span
                    className="text-xs font-bold px-1.5 py-0.5 rounded"
                    style={{ background: "rgba(168,85,247,0.2)", color: "var(--purple)", fontSize: "9px" }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="text-xs mt-0.5 truncate" style={{ color: "var(--muted)" }}>
                {item.sub}
              </div>
            </div>
            <span className="text-sm" style={{ color: "var(--muted)" }}>›</span>
          </a>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="divider mb-6" />

      {/* FOOTER */}
      <div className="text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>
          Creator & Developer
        </p>
        <p className="font-bold text-white">THIRAFI THARIQ AL IDRIS</p>
        <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>Instagram: @elthoriqqqq_</p>
      </div>

    </main>
  );
}
