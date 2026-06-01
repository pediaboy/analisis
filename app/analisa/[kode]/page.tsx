export default async function AnalisaPage({
  params,
}: {
  params: Promise<{ kode: string }>;
}) {
  const { kode } = await params;

  const score =
    kode.split("").reduce((a, b) => a + b.charCodeAt(0), 0) % 25 + 70;

  let rating = "BUY";
  let ratingColor = "#00d4ff";
  if (score >= 90) { rating = "STRONG BUY"; ratingColor = "#22c55e"; }
  else if (score >= 80) { rating = "BUY"; ratingColor = "#00d4ff"; }
  else if (score >= 70) { rating = "HOLD"; ratingColor = "#f59e0b"; }
  else { rating = "RISKY"; ratingColor = "#ef4444"; }

  const scorePercent = ((score - 60) / 40) * 100;

  return (
    <main
      className="min-h-screen text-white max-w-md mx-auto"
      style={{ background: "var(--bg-base)" }}
    >
      {/* TOP */}
      <div className="px-5 pt-10 pb-5" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
        <a href="/" className="inline-flex items-center gap-1.5 text-xs font-medium mb-6 transition-opacity hover:opacity-70" style={{ color: "var(--text-muted)" }}>
          ← Kembali
        </a>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>
              Analisa Saham
            </p>
            <h1
              className="text-4xl font-black tracking-tight"
              style={{ color: "var(--neon-cyan)", textShadow: "0 0 28px rgba(0,212,255,0.4)" }}
            >
              {kode.toUpperCase()}
            </h1>
          </div>
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-lg tracking-wide"
            style={{
              background: `rgba(${ratingColor === "#22c55e" ? "34,197,94" : ratingColor === "#00d4ff" ? "0,212,255" : ratingColor === "#f59e0b" ? "245,158,11" : "239,68,68"},0.12)`,
              color: ratingColor,
              border: `1px solid ${ratingColor}33`,
            }}
          >
            {rating}
          </span>
        </div>
      </div>

      <div className="px-5 py-5 space-y-4">
        {/* SCORE CARD */}
        <div
          className="rounded-2xl p-6"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-active)",
            boxShadow: "0 0 40px rgba(0,212,255,0.06)",
          }}
        >
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>
                Fundamental Score
              </p>
              <div className="flex items-end gap-2">
                <span
                  className="text-6xl font-black leading-none"
                  style={{ color: "white", textShadow: "0 0 30px rgba(0,212,255,0.2)" }}
                >
                  {score}
                </span>
                <span className="text-lg font-medium mb-1" style={{ color: "var(--text-muted)" }}>/100</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>Preview</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${scorePercent}%`,
                background: `linear-gradient(90deg, var(--neon-cyan), ${ratingColor})`,
                boxShadow: `0 0 8px ${ratingColor}66`,
              }}
            />
          </div>
        </div>

        {/* VIP LOCK */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>
            Analisa Lengkap
          </p>
          <div className="space-y-2.5">
            {[
              "🏦 Bandarmologi IDX",
              "⭐ Smart Money Score",
              "🚀 Multibagger Scanner",
              "📰 News Scanner",
              "📈 Watchlist Premium",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between text-sm py-2.5 px-3 rounded-lg"
                style={{ background: "rgba(0,212,255,0.03)", border: "1px solid var(--border-subtle)" }}
              >
                <span className="text-white font-medium">{item}</span>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded"
                  style={{ background: "rgba(239,68,68,0.1)", color: "#ef4444" }}
                >
                  🔒 VIP
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-active)",
            boxShadow: "0 0 24px rgba(0,212,255,0.05)",
          }}
        >
          <p className="font-bold text-white mb-1">Unlock Analisa Penuh 💎</p>
          <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
            Akses Bandarmologi, Smart Money, Multibagger dan fitur premium lainnya.
          </p>
          <a
            href="/vip"
            className="block text-center py-3.5 rounded-xl font-bold text-sm tracking-wide"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #2563eb 100%)",
              color: "#020810",
              boxShadow: "0 0 20px rgba(0,212,255,0.25)",
            }}
          >
            Login VIP →
          </a>
          <a
            href="/paket"
            className="block text-center py-3 mt-2 rounded-xl font-medium text-sm"
            style={{ color: "var(--neon-cyan)", border: "1px solid var(--border-active)" }}
          >
            Lihat Paket
          </a>
        </div>
      </div>
    </main>
  );
}
