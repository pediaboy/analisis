export default async function DashboardPage() {
  return (
    <main
      className="min-h-screen text-white max-w-md mx-auto"
      style={{ background: "var(--bg-base)" }}
    >
      {/* HEADER */}
      <div className="px-5 pt-10 pb-5" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>
              Premium
            </p>
            <h1
              className="text-2xl font-bold"
              style={{ color: "var(--neon-cyan)", textShadow: "0 0 24px rgba(0,212,255,0.35)" }}
            >
              VIP Dashboard
            </h1>
          </div>
          <div
            className="px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide"
            style={{
              background: "rgba(0,212,255,0.1)",
              color: "var(--neon-cyan)",
              border: "1px solid rgba(0,212,255,0.2)",
            }}
          >
            MEMBER AKTIF
          </div>
        </div>
      </div>

      <div className="px-5 py-5 space-y-4 pb-10">

        {/* BANDARMOLOGI */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--neon-cyan)" }}>
              🏦 Bandarmologi IDX
            </p>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>Hari ini</span>
          </div>
          <div className="space-y-2.5">
            {[
              { broker: "YP", action: "Buy", amount: "Rp 12.5 M", color: "#22c55e" },
              { broker: "CC", action: "Buy", amount: "Rp 8.2 M", color: "#22c55e" },
              { broker: "AK", action: "Buy", amount: "Rp 6.9 M", color: "#22c55e" },
            ].map((b) => (
              <div
                key={b.broker}
                className="flex items-center justify-between text-sm px-3 py-2.5 rounded-lg"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-subtle)" }}
              >
                <span
                  className="font-bold text-xs px-2 py-0.5 rounded"
                  style={{ background: "rgba(0,212,255,0.1)", color: "var(--neon-cyan)" }}
                >
                  {b.broker}
                </span>
                <span className="font-medium text-white">{b.action}</span>
                <span className="font-semibold text-xs" style={{ color: b.color }}>
                  {b.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SMART MONEY */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-active)",
            boxShadow: "0 0 30px rgba(0,212,255,0.05)",
          }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--neon-cyan)" }}>
            ⭐ Smart Money Score
          </p>
          <div className="flex items-end gap-4">
            <div>
              <span
                className="text-6xl font-black leading-none"
                style={{ color: "white", textShadow: "0 0 30px rgba(0,212,255,0.2)" }}
              >
                87
              </span>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>/100</p>
            </div>
            <div className="pb-1">
              <div
                className="px-3 py-1.5 rounded-lg text-xs font-bold tracking-widest"
                style={{
                  background: "rgba(34,197,94,0.1)",
                  color: "#22c55e",
                  border: "1px solid rgba(34,197,94,0.2)",
                }}
              >
                STRONG BUY
              </div>
            </div>
          </div>
          <div className="mt-4 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
            <div
              className="h-full rounded-full"
              style={{
                width: "87%",
                background: "linear-gradient(90deg, var(--neon-cyan), #22c55e)",
                boxShadow: "0 0 8px rgba(34,197,94,0.5)",
              }}
            />
          </div>
        </div>

        {/* MULTIBAGGER */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--neon-cyan)" }}>
            🚀 Multibagger Scanner
          </p>
          <div className="space-y-2.5">
            {[
              { kode: "BBCA", grade: "A+", score: 96 },
              { kode: "TLKM", grade: "A", score: 88 },
              { kode: "BBRI", grade: "A", score: 85 },
            ].map((s) => (
              <div
                key={s.kode}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border-subtle)" }}
              >
                <span className="font-bold text-white text-sm w-12">{s.kode}</span>
                <div className="flex-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.score}%`,
                      background: "linear-gradient(90deg, var(--neon-cyan), #2563eb)",
                    }}
                  />
                </div>
                <span
                  className="text-xs font-bold w-6 text-right"
                  style={{ color: "var(--neon-cyan)" }}
                >
                  {s.grade}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* NEWS SCANNER */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--neon-cyan)" }}>
            📰 News Scanner
          </p>
          <div className="space-y-3">
            {[
              { title: "TLKM Catat Pertumbuhan Laba Positif", tag: "Bullish" },
              { title: "BBCA Umumkan Kinerja Kuartal Terbaru", tag: "Neutral" },
              { title: "ANTM Fokus Ekspansi Hilirisasi", tag: "Bullish" },
            ].map((n) => (
              <div
                key={n.title}
                className="flex items-start justify-between gap-3 pb-3"
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                <span className="text-sm text-white leading-snug">{n.title}</span>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 mt-0.5"
                  style={{
                    background: n.tag === "Bullish" ? "rgba(34,197,94,0.1)" : "rgba(100,116,139,0.1)",
                    color: n.tag === "Bullish" ? "#22c55e" : "#64748b",
                  }}
                >
                  {n.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* EARNINGS */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--neon-cyan)" }}>
            💰 Earnings Analysis
          </p>
          <div className="space-y-2.5">
            {[
              { kode: "TLKM", pct: "+12%", bar: 72 },
              { kode: "BBCA", pct: "+9%", bar: 58 },
              { kode: "BMRI", pct: "+7%", bar: 45 },
            ].map((e) => (
              <div key={e.kode} className="flex items-center gap-3 text-sm">
                <span className="w-12 font-bold text-white">{e.kode}</span>
                <div className="flex-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${e.bar}%`,
                      background: "linear-gradient(90deg, #22c55e, #16a34a)",
                    }}
                  />
                </div>
                <span className="font-semibold text-xs w-10 text-right" style={{ color: "#22c55e" }}>
                  {e.pct}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* WATCHLIST */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-active)",
            boxShadow: "0 0 24px rgba(0,212,255,0.04)",
          }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--neon-cyan)" }}>
            📈 Watchlist Premium
          </p>
          <div className="flex flex-wrap gap-2">
            {["BBCA", "TLKM", "BBRI", "BMRI", "ANTM", "GOTO"].map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide"
                style={{
                  background: "rgba(0,212,255,0.07)",
                  color: "var(--neon-cyan)",
                  border: "1px solid rgba(0,212,255,0.15)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER */}
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
        </div>
      </div>
    </main>
  );
}
