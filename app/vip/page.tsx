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
    <main className="min-h-screen text-white max-w-md mx-auto" style={{ padding: "48px 20px 64px" }}>

      {/* NAV */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "48px" }}>
        <a href="/" style={{ fontSize: "13px", fontWeight: 600, color: "var(--muted-2)", textDecoration: "none" }}>← Kembali</a>
        <span className="pill">MEMBER AREA</span>
      </div>

      {/* HERO */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div style={{
          width: "64px", height: "64px", borderRadius: "18px", fontSize: "28px",
          display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px",
          background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(168,85,247,0.15))",
          border: "1px solid rgba(0,212,255,0.2)"
        }}>🔐</div>
        <span className="section-label" style={{ display: "block", marginBottom: "8px" }}>Login</span>
        <h1 style={{
          fontSize: "40px", fontWeight: 900, marginBottom: "12px",
          background: "linear-gradient(135deg, #ffffff 0%, var(--cyan) 60%, var(--purple) 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
        }}>VIP Dashboard</h1>
        <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--muted-2)" }}>
          Masukkan token membership untuk akses penuh
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* FORM */}
        <div style={{
          background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)",
          border: `1px solid ${error ? "rgba(239,68,68,0.4)" : "rgba(0,212,255,0.2)"}`,
          borderRadius: "16px", padding: "24px",
          boxShadow: error ? "0 0 30px rgba(239,68,68,0.06)" : "0 0 40px rgba(0,212,255,0.05)",
          transition: "all 0.3s"
        }}>
          <span className="section-label">Token VIP</span>
          <div style={{
            display: "flex", alignItems: "center", gap: "12px",
            background: "rgba(0,0,0,0.3)", borderRadius: "12px", padding: "14px 16px",
            border: `1px solid ${error ? "rgba(239,68,68,0.3)" : "rgba(255,255,255,0.06)"}`,
            marginTop: "12px", marginBottom: "12px"
          }}>
            <span style={{ color: "var(--muted)", fontSize: "16px" }}>🔑</span>
            <input
              value={token}
              onChange={(e) => { setToken(e.target.value); setError(false); }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="Masukkan Token VIP"
              style={{
                flex: 1, background: "transparent", border: "none", outline: "none",
                fontSize: "14px", fontWeight: 500, color: "white", letterSpacing: "0.06em"
              }}
            />
          </div>

          {error && (
            <p style={{ fontSize: "12px", color: "#ef4444", marginBottom: "12px", lineHeight: 1.5 }}>
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
        <div className="glass">
          <p style={{ fontWeight: 700, fontSize: "16px", color: "white", marginBottom: "8px" }}>Belum punya token?</p>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--muted-2)", marginBottom: "20px" }}>
            Hubungi admin untuk aktivasi. Token aktif langsung setelah pembayaran.
          </p>
          <a
            href="https://wa.me/6282218723401?text=Halo%20Admin,%20saya%20ingin%20bergabung%20VIP%20Ritel%20Community."
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
              boxShadow: "0 0 30px rgba(34,197,94,0.2)", marginBottom: "10px"
            }}
          >
            WhatsApp Admin →
          </a>
          <a href="/paket" className="btn-outline">Lihat Harga Paket</a>
        </div>

        {/* PREVIEW FITUR */}
        <div className="glass">
          <span className="section-label">Yang Kamu Dapat</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
            {[
              "🏦 Bandarmologi IDX real-time",
              "⭐ Smart Money Score",
              "🚀 Multibagger Scanner",
              "📰 News Scanner",
              "📈 Watchlist Premium",
            ].map((f) => (
              <div key={f} style={{
                fontSize: "13px", padding: "12px 14px", borderRadius: "10px",
                background: "rgba(255,255,255,0.03)", color: "var(--muted-2)",
                border: "1px solid rgba(255,255,255,0.05)", lineHeight: 1.4
              }}>{f}</div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="divider" />
        <div style={{ textAlign: "center" }}>
          <span className="section-label" style={{ display: "block", marginBottom: "8px" }}>Creator & Developer</span>
          <p style={{ fontWeight: 700, fontSize: "15px", color: "white", marginBottom: "6px" }}>THIRAFI THARIQ AL IDRIS</p>
          <p style={{ fontSize: "13px", color: "var(--muted)" }}>@elthoriqqqq_</p>
        </div>

      </div>
    </main>
  );
}
