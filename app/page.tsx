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
    <main className="min-h-screen text-white max-w-md mx-auto" style={{ padding: "48px 20px 64px" }}>

      {/* HEADER NAV */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "56px" }}>
        <div>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cyan)" }}>
            RITEL COMMUNITY
          </span>
          <div style={{ width: "24px", height: "2px", marginTop: "6px", borderRadius: "2px", background: "linear-gradient(90deg, var(--cyan), var(--purple))" }} />
        </div>
        <a
          href="/vip"
          style={{ fontSize: "12px", fontWeight: 600, padding: "8px 14px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)", color: "var(--muted-2)", textDecoration: "none" }}
        >
          Login VIP →
        </a>
      </div>

      {/* HERO */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div className="pill" style={{ display: "inline-flex", marginBottom: "24px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "currentColor", animation: "pulse 2s infinite" }} />
          IDX FUNDAMENTAL SCANNER
        </div>

        <h1 style={{ fontSize: "48px", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}>
          Analisa
          <br />
          <span className="gradient-text">Saham Indonesia</span>
        </h1>

        <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--muted-2)" }}>
          Cek fundamental saham IDX — Bandarmologi,<br />
          Smart Money & Multibagger dalam hitungan detik.
        </p>
      </div>

      {/* SEARCH CARD */}
      <div className="glass-glow" style={{ marginBottom: "16px" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
          background: "rgba(255,255,255,0.04)", borderRadius: "12px",
          padding: "14px 16px", marginBottom: "12px",
          border: "1px solid rgba(255,255,255,0.06)"
        }}>
          <span style={{ color: "var(--muted)", fontSize: "16px" }}>🔍</span>
          <input
            value={kode}
            onChange={(e) => setKode(e.target.value.toUpperCase())}
            onKeyDown={(e) => e.key === "Enter" && handleAnalisa()}
            placeholder="Ketik kode saham, mis. BBCA"
            maxLength={6}
            style={{
              flex: 1, background: "transparent", border: "none", outline: "none",
              fontSize: "14px", fontWeight: 500, color: "white",
            }}
          />
          {kode && (
            <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--cyan)" }}>{kode}</span>
          )}
        </div>
        <button onClick={handleAnalisa} className="btn-primary">
          Cek Saham Sekarang →
        </button>
      </div>

      {/* STATS ROW */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "40px" }}>
        {[
          { val: "500+", label: "Emiten IDX" },
          { val: "Real‑time", label: "Data Update" },
          { val: "Gratis", label: "Preview" },
        ].map((s) => (
          <div key={s.label} style={{
            textAlign: "center", padding: "14px 8px", borderRadius: "12px",
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)"
          }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--cyan)", marginBottom: "4px" }}>{s.val}</div>
            <div style={{ fontSize: "11px", color: "var(--muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="divider" />

      {/* MENU */}
      <span className="section-label">Fitur & Layanan</span>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
        {[
          { href: "/panduan", icon: "📚", label: "Panduan Trading", sub: "Dari dasar hingga analisa fundamental & teknikal", badge: null },
          { href: "/paket", icon: "💎", label: "Paket VIP", sub: "Bandarmologi, Multibagger, dan fitur premium", badge: "HOT" },
          { href: "/vip", icon: "🔐", label: "Login VIP", sub: "Masuk ke dashboard member eksklusif", badge: null },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="glass"
            style={{
              display: "flex", alignItems: "center", gap: "16px",
              textDecoration: "none", transition: "border-color 0.2s",
              padding: "16px 20px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
          >
            <div style={{
              width: "44px", height: "44px", borderRadius: "12px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "20px", flexShrink: 0, background: "rgba(255,255,255,0.05)"
            }}>
              {item.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontWeight: 600, fontSize: "14px", color: "white" }}>{item.label}</span>
                {item.badge && (
                  <span style={{
                    fontSize: "9px", fontWeight: 700, padding: "2px 6px", borderRadius: "4px",
                    background: "rgba(168,85,247,0.2)", color: "var(--purple)"
                  }}>{item.badge}</span>
                )}
              </div>
              <div style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.4 }}>{item.sub}</div>
            </div>
            <span style={{ fontSize: "18px", color: "var(--muted)" }}>›</span>
          </a>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="divider" />

      {/* FOOTER */}
      <div style={{ textAlign: "center" }}>
        <span className="section-label" style={{ display: "block", marginBottom: "8px" }}>Creator & Developer</span>
        <p style={{ fontWeight: 700, fontSize: "15px", color: "white", marginBottom: "6px" }}>THIRAFI THARIQ AL IDRIS</p>
        <p style={{ fontSize: "13px", color: "var(--muted)" }}>Instagram: @elthoriqqqq_</p>
      </div>

    </main>
  );
}
