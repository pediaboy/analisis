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

  return (
    <main className="min-h-screen text-white max-w-md mx-auto px-5 pt-12 pb-12">

      {/* NAV */}
      <div className="flex items-center justify-between mb-12">
        <a
          href="/"
          className="flex items-center gap-2 text-xs font-semibold"
          style={{ color: "var(--muted-2)" }}
        >
          ← Kembali
        </a>
        <span className="pill">PREVIEW</span>
      </div>

      {/* HERO */}
      <div className="mb-8">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
          Analisa Saham IDX
        </p>
        <h1
          className="text-6xl font-black tracking-tight"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, var(--cyan) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {kode.toUpperCase()}
        </h1>
      </div>

      {/* SCORE CARD */}
      <div className="glass-glow p-6 mb-4">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
              Fundamental Score
            </p>
            <div className="flex items-end gap-2">
              <span className="text-7xl font-black leading-none text-white">{score}</span>
              <span className="text-lg font-medium mb-2" style={{ color: "var(--muted)" }}>/100</span>
            </div>
          </div>
          <div
            className="px-4 py-2 rounded-xl text-sm font-bold tracking-wider"
            style={{ background: ratingBg, color: ratingColor, border: `1px solid ${ratingColor}33` }}
          >
            {rating}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 rounded-full mb-1" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${((score - 60) / 40) * 100}%`,
              background: `linear-gradient(90deg, var(--cyan), ${ratingColor})`,
              boxShadow: `0 0 10px ${ratingColor}66`,
            }}
          />
        </div>
        <div className="flex justify-between text-xs" style={{ color: "var(--muted)" }}>
          <span>Risky</span><span>Strong Buy</span>
        </div>
      </div>

      {/* LOCKED FEATURES */}
      <div className="glass p-5 mb-4">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
          Analisa Lengkap
        </p>
        <div className="space-y-2.5">
          {[
            { icon: "🏦", label: "Bandarmologi IDX" },
            { icon: "⭐", label: "Smart Money Score" },
            { icon: "🚀", label: "Multibagger Scanner" },
            { icon: "📰", label: "News Scanner" },
            { icon: "📈", label: "Watchlist Premium" },
          ].map((f) => (
            <div
              key={f.label}
              className="flex items-center justify-between px-3 py-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <span className="text-sm text-white">
                {f.icon} {f.label}
              </span>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded"
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
        className="rounded-2xl p-5 mb-8"
        style={{
          background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(168,85,247,0.08) 100%)",
          border: "1px solid rgba(0,212,255,0.2)",
        }}
      >
        <p className="font-bold text-white mb-1">Unlock Analisa Penuh 💎</p>
        <p className="text-xs mb-4" style={{ color: "var(--muted-2)" }}>
          Akses Bandarmologi, Smart Money, Multibagger & fitur premium lainnya.
        </p>
        <a href="/vip" className="btn-primary mb-2">
          Login VIP →
        </a>
        <a href="/paket" className="btn-outline">
          Lihat Paket
        </a>
      </div>

      {/* FOOTER */}
      <div className="divider mb-6" />
      <div className="text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>
          Creator & Developer
        </p>
        <p className="font-bold text-white">THIRAFI THARIQ AL IDRIS</p>
        <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>@elthoriqqqq_</p>
      </div>

    </main>
  );
}
