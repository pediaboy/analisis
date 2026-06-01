export default async function AnalisaPage({
  params,
}: {
  params: Promise<{ kode: string }>;
}) {
  const { kode } = await params;

  const score =
    kode.split("").reduce((a, b) => a + b.charCodeAt(0), 0) % 25 + 70;

  let rating = "BUY";
  let ratingBg = "rgba(0,212,255,0.12)";
  let ratingColor = "#00d4ff";

  if (score >= 90) {
    rating = "STRONG BUY"; ratingBg = "rgba(34,197,94,0.12)"; ratingColor = "#22c55e";
  } else if (score >= 80) {
    rating = "BUY"; ratingBg = "rgba(0,212,255,0.12)"; ratingColor = "#00d4ff";
  } else if (score >= 70) {
    rating = "HOLD"; ratingBg = "rgba(245,158,11,0.12)"; ratingColor = "#f59e0b";
  } else {
    rating = "RISKY"; ratingBg = "rgba(239,68,68,0.12)"; ratingColor = "#ef4444";
  }

  const scorePercent = ((score - 60) / 40) * 100;

  return (
    <main className="min-h-screen text-white max-w-md mx-auto" style={{ padding: "48px 20px 64px" }}>

      {/* NAV */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "48px" }}>
        <a href="/" style={{ fontSize: "13px", fontWeight: 600, color: "var(--muted-2)", textDecoration: "none" }}>
          ← Kembali
        </a>
        <span className="pill">PREVIEW</span>
      </div>

      {/* HERO */}
      <div style={{ marginBottom: "32px" }}>
        <span className="section-label">Analisa Saham IDX</span>
        <h1 style={{
          fontSize: "64px", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1,
          background: "linear-gradient(135deg, #ffffff 0%, var(--cyan) 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          marginTop: "8px"
        }}>
          {kode.toUpperCase()}
        </h1>
      </div>

      {/* SCORE CARD */}
      <div className="glass-glow" style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px" }}>
          <div>
            <span className="section-label">Fundamental Score</span>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", marginTop: "8px" }}>
              <span style={{ fontSize: "72px", fontWeight: 900, lineHeight: 1, color: "white" }}>{score}</span>
              <span style={{ fontSize: "18px", fontWeight: 500, marginBottom: "8px", color: "var(--muted)" }}>/100</span>
            </div>
          </div>
          <div style={{
            padding: "10px 16px", borderRadius: "10px", fontSize: "13px", fontWeight: 700,
            letterSpacing: "0.06em", background: ratingBg, color: ratingColor,
            border: `1px solid ${ratingColor}44`, marginTop: "4px"
          }}>
            {rating}
          </div>
        </div>

        <div style={{ height: "6px", borderRadius: "4px", background: "rgba(255,255,255,0.06)", marginBottom: "8px" }}>
          <div style={{
            width: `${scorePercent}%`, height: "100%", borderRadius: "4px",
            background: `linear-gradient(90deg, var(--cyan), ${ratingColor})`,
            boxShadow: `0 0 10px ${ratingColor}66`
          }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "var(--muted)" }}>
          <span>Risky</span><span>Strong Buy</span>
        </div>
      </div>

      {/* LOCKED FEATURES */}
      <div className="glass" style={{ marginBottom: "16px" }}>
        <span className="section-label">Analisa Lengkap (VIP)</span>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
          {[
            { icon: "🏦", label: "Bandarmologi IDX" },
            { icon: "⭐", label: "Smart Money Score" },
            { icon: "🚀", label: "Multibagger Scanner" },
            { icon: "📰", label: "News Scanner" },
            { icon: "📈", label: "Watchlist Premium" },
          ].map((f) => (
            <div key={f.label} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 14px", borderRadius: "10px",
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <span style={{ fontSize: "14px", color: "white" }}>{f.icon} {f.label}</span>
              <span style={{
                fontSize: "11px", fontWeight: 700, padding: "3px 8px", borderRadius: "6px",
                background: "rgba(239,68,68,0.1)", color: "#ef4444"
              }}>🔒 VIP</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        borderRadius: "16px", padding: "24px",
        background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(168,85,247,0.08) 100%)",
        border: "1px solid rgba(0,212,255,0.2)", marginBottom: "40px"
      }}>
        <p style={{ fontWeight: 700, fontSize: "16px", color: "white", marginBottom: "8px" }}>
          Unlock Analisa Penuh 💎
        </p>
        <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--muted-2)", marginBottom: "20px" }}>
          Akses Bandarmologi, Smart Money, Multibagger & fitur premium lainnya.
        </p>
        <a href="/vip" className="btn-primary" style={{ marginBottom: "10px" }}>Login VIP →</a>
        <a href="/paket" className="btn-outline">Lihat Paket</a>
      </div>

      {/* FOOTER */}
      <div className="divider" />
      <div style={{ textAlign: "center" }}>
        <span className="section-label" style={{ display: "block", marginBottom: "8px" }}>Creator & Developer</span>
        <p style={{ fontWeight: 700, fontSize: "15px", color: "white", marginBottom: "6px" }}>THIRAFI THARIQ AL IDRIS</p>
        <p style={{ fontSize: "13px", color: "var(--muted)" }}>@elthoriqqqq_</p>
      </div>

    </main>
  );
}
