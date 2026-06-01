export default function PaketPage() {
  return (
    <main className="min-h-screen text-white max-w-md mx-auto" style={{ padding: "48px 20px 64px" }}>

      {/* NAV */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "48px" }}>
        <a href="/" style={{ fontSize: "13px", fontWeight: 600, color: "var(--muted-2)", textDecoration: "none" }}>← Kembali</a>
        <span className="pill">MEMBERSHIP</span>
      </div>

      {/* HERO */}
      <div style={{ marginBottom: "40px" }}>
        <span className="section-label">Harga & Paket</span>
        <h1 style={{
          fontSize: "40px", fontWeight: 900, marginTop: "8px", marginBottom: "12px",
          background: "linear-gradient(135deg, #ffffff 0%, var(--cyan) 60%, var(--purple) 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
        }}>Paket VIP</h1>
        <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--muted-2)" }}>
          Unlock seluruh fitur premium Ritel Community
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* FITUR OVERVIEW */}
        <div className="glass">
          <span className="section-label">Semua Paket Termasuk</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "16px" }}>
            {[
              "🏦 Bandarmologi IDX",
              "⭐ Smart Money Score",
              "🚀 Multibagger Scanner",
              "📰 News Scanner",
              "📈 Watchlist Premium",
              "💰 Earnings Analysis",
            ].map((f) => (
              <div key={f} style={{
                fontSize: "12px", padding: "10px 12px", borderRadius: "10px", fontWeight: 500,
                background: "rgba(255,255,255,0.03)", color: "var(--muted-2)",
                border: "1px solid rgba(255,255,255,0.05)", lineHeight: 1.4
              }}>{f}</div>
            ))}
          </div>
        </div>

        {/* 1 BULAN */}
        <div className="glass">
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <span className="section-label">VIP 1 Bulan</span>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "white", marginTop: "8px", marginBottom: "4px" }}>Rp99.000</div>
              <div style={{ fontSize: "12px", textDecoration: "line-through", color: "var(--muted)" }}>Rp150.000</div>
            </div>
            <span style={{
              fontSize: "12px", fontWeight: 700, padding: "6px 12px", borderRadius: "10px",
              background: "rgba(0,212,255,0.1)", color: "var(--cyan)", border: "1px solid rgba(0,212,255,0.2)"
            }}>−34%</span>
          </div>
        </div>

        {/* 3 BULAN */}
        <div style={{
          background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)",
          border: "1px solid rgba(34,197,94,0.3)", borderRadius: "16px", padding: "20px",
          boxShadow: "0 0 30px rgba(34,197,94,0.05)"
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#22c55e" }}>
                VIP 3 Bulan
              </span>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "white", marginTop: "8px", marginBottom: "4px" }}>Rp300.000</div>
              <div style={{ fontSize: "12px", textDecoration: "line-through", color: "var(--muted)" }}>Rp600.000</div>
            </div>
            <span style={{
              fontSize: "11px", fontWeight: 700, padding: "6px 12px", borderRadius: "10px",
              background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.25)"
            }}>PALING HEMAT</span>
          </div>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "16px" }} />
          <p style={{ fontSize: "12px", fontWeight: 600, color: "#22c55e", marginBottom: "8px" }}>Hemat 50% · Rp100.000/bulan</p>
          <div style={{ fontSize: "12px", color: "var(--muted-2)", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div>✓ Prioritas update fitur</div>
            <div>✓ Akses fitur baru lebih awal</div>
          </div>
        </div>

        {/* LIFETIME */}
        <div style={{
          background: "linear-gradient(135deg, rgba(0,212,255,0.07) 0%, rgba(168,85,247,0.09) 100%)",
          border: "1px solid rgba(0,212,255,0.25)", borderRadius: "16px", padding: "20px",
          boxShadow: "0 0 50px rgba(0,212,255,0.07)", position: "relative", overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", top: 0, right: 0,
            background: "linear-gradient(135deg, rgba(0,212,255,0.25), rgba(168,85,247,0.3))",
            padding: "8px 14px", borderBottomLeftRadius: "14px",
            fontSize: "11px", fontWeight: 800, letterSpacing: "0.08em", color: "white"
          }}>LIFETIME ♾️</div>

          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "12px" }}>
            VIP Lifetime
          </span>
          <div style={{
            fontSize: "40px", fontWeight: 900, marginBottom: "4px",
            background: "linear-gradient(135deg, var(--cyan), var(--purple))",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
          }}>Rp860.000</div>
          <div style={{ fontSize: "12px", textDecoration: "line-through", color: "var(--muted)", marginBottom: "20px" }}>Rp2.500.000</div>
          <div style={{ height: "1px", background: "rgba(0,212,255,0.15)", marginBottom: "16px" }} />
          <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--cyan)", marginBottom: "10px" }}>Sekali bayar · Akses selamanya</p>
          <div style={{ fontSize: "12px", color: "var(--muted-2)", display: "flex", flexDirection: "column", gap: "6px" }}>
            <div>✓ Semua fitur premium</div>
            <div>✓ Semua update gratis selamanya</div>
            <div>✓ Prioritas support</div>
            <div>✓ Tanpa biaya perpanjangan</div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-glow">
          <p style={{ fontWeight: 700, fontSize: "16px", color: "white", marginBottom: "8px" }}>Siap Gabung VIP?</p>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--muted-2)", marginBottom: "20px" }}>
            Hubungi admin untuk aktivasi. Proses cepat & langsung aktif.
          </p>
          <a
            href="https://wa.me/6282218723401"
            className="btn-primary"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
              boxShadow: "0 0 30px rgba(34,197,94,0.2)"
            }}
          >
            Hubungi Admin via WhatsApp →
          </a>
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
