export default async function DashboardPage() {
  return (
    <main className="min-h-screen text-white max-w-md mx-auto" style={{ padding: "48px 20px 64px" }}>

      {/* NAV */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "48px" }}>
        <div>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cyan)" }}>
            RITEL COMMUNITY
          </span>
          <div style={{ width: "24px", height: "2px", marginTop: "6px", borderRadius: "2px", background: "linear-gradient(90deg, var(--cyan), var(--purple))" }} />
        </div>
        <span className="pill">MEMBER AKTIF</span>
      </div>

      {/* HERO */}
      <div style={{ marginBottom: "40px" }}>
        <span className="section-label">Premium Dashboard</span>
        <h1 style={{
          fontSize: "40px", fontWeight: 900, marginTop: "8px",
          background: "linear-gradient(135deg, #ffffff 0%, var(--cyan) 60%, var(--purple) 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
        }}>
          VIP Dashboard
        </h1>
      </div>

      {/* CARDS */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* BANDARMOLOGI */}
        <div className="glass">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)" }}>
              🏦 Bandarmologi IDX
            </span>
            <span style={{ fontSize: "11px", color: "var(--muted)" }}>Live</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { broker: "YP", action: "Buy", amount: "Rp 12.5 M" },
              { broker: "CC", action: "Buy", amount: "Rp 8.2 M" },
              { broker: "AK", action: "Buy", amount: "Rp 6.9 M" },
            ].map((b) => (
              <div key={b.broker} style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "12px 14px", borderRadius: "10px",
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <span style={{
                  fontSize: "11px", fontWeight: 800, padding: "3px 8px", borderRadius: "6px",
                  background: "rgba(0,212,255,0.1)", color: "var(--cyan)", minWidth: "28px", textAlign: "center"
                }}>{b.broker}</span>
                <span style={{ fontSize: "13px", color: "white", flex: 1 }}>{b.action}</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#22c55e" }}>{b.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SMART MONEY */}
        <div className="glass-glow">
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "20px" }}>
            ⭐ Smart Money Score
          </span>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "16px", marginBottom: "20px" }}>
            <span style={{ fontSize: "72px", fontWeight: 900, lineHeight: 1, color: "white" }}>87</span>
            <div style={{ paddingBottom: "6px" }}>
              <div style={{
                padding: "8px 14px", borderRadius: "10px", fontSize: "12px", fontWeight: 700,
                letterSpacing: "0.08em", background: "rgba(34,197,94,0.12)", color: "#22c55e",
                border: "1px solid rgba(34,197,94,0.2)"
              }}>STRONG BUY</div>
            </div>
          </div>
          <div style={{ height: "6px", borderRadius: "4px", background: "rgba(255,255,255,0.06)" }}>
            <div style={{
              width: "87%", height: "100%", borderRadius: "4px",
              background: "linear-gradient(90deg, var(--cyan), #22c55e)",
              boxShadow: "0 0 10px rgba(34,197,94,0.4)"
            }} />
          </div>
        </div>

        {/* MULTIBAGGER */}
        <div className="glass">
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "20px" }}>
            🚀 Multibagger Scanner
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { kode: "BBCA", grade: "A+", pct: 96 },
              { kode: "TLKM", grade: "A", pct: 88 },
              { kode: "BBRI", grade: "A", pct: 85 },
            ].map((s) => (
              <div key={s.kode} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontWeight: 700, color: "white", fontSize: "13px", minWidth: "44px" }}>{s.kode}</span>
                <div style={{ flex: 1, height: "4px", borderRadius: "4px", background: "rgba(255,255,255,0.06)" }}>
                  <div style={{
                    width: `${s.pct}%`, height: "100%", borderRadius: "4px",
                    background: "linear-gradient(90deg, var(--cyan), var(--purple))"
                  }} />
                </div>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--cyan)", minWidth: "20px", textAlign: "right" }}>{s.grade}</span>
              </div>
            ))}
          </div>
        </div>

        {/* NEWS */}
        <div className="glass">
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "20px" }}>
            📰 News Scanner
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { title: "TLKM Catat Pertumbuhan Laba Positif", tag: "Bullish", color: "#22c55e" },
              { title: "BBCA Umumkan Kinerja Kuartal Terbaru", tag: "Neutral", color: "var(--muted-2)" },
              { title: "ANTM Fokus Ekspansi Hilirisasi", tag: "Bullish", color: "#22c55e" },
            ].map((n, i) => (
              <div key={n.title} style={{
                display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px",
                padding: "14px 0",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none"
              }}>
                <span style={{ fontSize: "13px", color: "white", lineHeight: 1.5, flex: 1 }}>{n.title}</span>
                <span style={{
                  fontSize: "11px", fontWeight: 600, padding: "3px 8px", borderRadius: "6px",
                  color: n.color, background: `${n.color}18`, flexShrink: 0
                }}>{n.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* EARNINGS */}
        <div className="glass">
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "20px" }}>
            💰 Earnings Analysis
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { kode: "TLKM", pct: "+12%", bar: 72 },
              { kode: "BBCA", pct: "+9%", bar: 58 },
              { kode: "BMRI", pct: "+7%", bar: 45 },
            ].map((e) => (
              <div key={e.kode} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontWeight: 700, color: "white", fontSize: "13px", minWidth: "44px" }}>{e.kode}</span>
                <div style={{ flex: 1, height: "4px", borderRadius: "4px", background: "rgba(255,255,255,0.06)" }}>
                  <div style={{
                    width: `${e.bar}%`, height: "100%", borderRadius: "4px",
                    background: "linear-gradient(90deg, #22c55e, #16a34a)"
                  }} />
                </div>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#22c55e", minWidth: "36px", textAlign: "right" }}>{e.pct}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WATCHLIST */}
        <div className="glass-glow">
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan)", display: "block", marginBottom: "16px" }}>
            📈 Watchlist Premium
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["BBCA", "TLKM", "BBRI", "BMRI", "ANTM", "GOTO"].map((s) => (
              <span key={s} style={{
                padding: "8px 14px", borderRadius: "10px", fontSize: "12px", fontWeight: 700,
                background: "rgba(0,212,255,0.07)", color: "var(--cyan)",
                border: "1px solid rgba(0,212,255,0.15)"
              }}>{s}</span>
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
