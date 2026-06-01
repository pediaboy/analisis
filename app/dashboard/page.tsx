export default async function DashboardPage() {
  return (
    <main className="min-h-screen text-white max-w-md mx-auto px-5 pt-12 pb-12">

      {/* NAV */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--cyan)" }}>
            RITEL COMMUNITY
          </span>
          <div className="w-6 h-0.5 mt-1 rounded-full" style={{ background: "linear-gradient(90deg, var(--cyan), var(--purple))" }} />
        </div>
        <span className="pill">MEMBER AKTIF</span>
      </div>

      {/* HERO */}
      <div className="mb-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
          Premium Dashboard
        </p>
        <h1
          className="text-4xl font-black"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, var(--cyan) 60%, var(--purple) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          VIP Dashboard
        </h1>
      </div>

      <div className="space-y-4">

        {/* BANDARMOLOGI */}
        <div className="glass p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--cyan)" }}>
              🏦 Bandarmologi IDX
            </p>
            <span className="text-xs" style={{ color: "var(--muted)" }}>Live</span>
          </div>
          <div className="space-y-2">
            {[
              { broker: "YP", action: "Buy", amount: "Rp 12.5 M", up: true },
              { broker: "CC", action: "Buy", amount: "Rp 8.2 M", up: true },
              { broker: "AK", action: "Buy", amount: "Rp 6.9 M", up: true },
            ].map((b) => (
              <div
                key={b.broker}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span
                  className="text-xs font-black px-2 py-0.5 rounded-lg w-8 text-center"
                  style={{ background: "rgba(0,212,255,0.1)", color: "var(--cyan)" }}
                >
                  {b.broker}
                </span>
                <span className="text-sm text-white flex-1">{b.action}</span>
                <span className="text-xs font-bold" style={{ color: "#22c55e" }}>{b.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SMART MONEY */}
        <div className="glass-glow p-5">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--cyan)" }}>
            ⭐ Smart Money Score
          </p>
          <div className="flex items-end gap-4 mb-4">
            <span className="text-7xl font-black text-white leading-none">87</span>
            <div className="pb-1">
              <div
                className="px-3 py-1.5 rounded-xl text-xs font-bold tracking-widest"
                style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}
              >
                STRONG BUY
              </div>
            </div>
          </div>
          <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div
              className="h-full rounded-full"
              style={{
                width: "87%",
                background: "linear-gradient(90deg, var(--cyan), #22c55e)",
                boxShadow: "0 0 10px rgba(34,197,94,0.4)",
              }}
            />
          </div>
        </div>

        {/* MULTIBAGGER */}
        <div className="glass p-5">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--cyan)" }}>
            🚀 Multibagger Scanner
          </p>
          <div className="space-y-3">
            {[
              { kode: "BBCA", grade: "A+", pct: 96 },
              { kode: "TLKM", grade: "A", pct: 88 },
              { kode: "BBRI", grade: "A", pct: 85 },
            ].map((s) => (
              <div key={s.kode} className="flex items-center gap-3">
                <span className="font-bold text-white text-sm w-12">{s.kode}</span>
                <div className="flex-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.pct}%`,
                      background: "linear-gradient(90deg, var(--cyan), var(--purple))",
                    }}
                  />
                </div>
                <span className="text-xs font-bold w-6 text-right" style={{ color: "var(--cyan)" }}>
                  {s.grade}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* NEWS */}
        <div className="glass p-5">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--cyan)" }}>
            📰 News Scanner
          </p>
          <div className="space-y-3">
            {[
              { title: "TLKM Catat Pertumbuhan Laba Positif", tag: "Bullish", color: "#22c55e" },
              { title: "BBCA Umumkan Kinerja Kuartal Terbaru", tag: "Neutral", color: "var(--muted-2)" },
              { title: "ANTM Fokus Ekspansi Hilirisasi", tag: "Bullish", color: "#22c55e" },
            ].map((n, i) => (
              <div
                key={n.title}
                className="flex items-start justify-between gap-3 pb-3"
                style={{ borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
              >
                <span className="text-sm text-white leading-snug">{n.title}</span>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 mt-0.5"
                  style={{ color: n.color, background: `${n.color}15` }}
                >
                  {n.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* EARNINGS */}
        <div className="glass p-5">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--cyan)" }}>
            💰 Earnings Analysis
          </p>
          <div className="space-y-3">
            {[
              { kode: "TLKM", pct: "+12%", bar: 72 },
              { kode: "BBCA", pct: "+9%", bar: 58 },
              { kode: "BMRI", pct: "+7%", bar: 45 },
            ].map((e) => (
              <div key={e.kode} className="flex items-center gap-3 text-sm">
                <span className="w-12 font-bold text-white">{e.kode}</span>
                <div className="flex-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${e.bar}%`, background: "linear-gradient(90deg, #22c55e, #16a34a)" }}
                  />
                </div>
                <span className="text-xs font-bold w-10 text-right" style={{ color: "#22c55e" }}>
                  {e.pct}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* WATCHLIST */}
        <div className="glass-glow p-5">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--cyan)" }}>
            📈 Watchlist Premium
          </p>
          <div className="flex flex-wrap gap-2">
            {["BBCA", "TLKM", "BBRI", "BMRI", "ANTM", "GOTO"].map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-xl text-xs font-bold"
                style={{
                  background: "rgba(0,212,255,0.07)",
                  color: "var(--cyan)",
                  border: "1px solid rgba(0,212,255,0.15)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="divider" />
        <div className="text-center pt-2">
          <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>
            Creator & Developer
          </p>
          <p className="font-bold text-white">THIRAFI THARIQ AL IDRIS</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>@elthoriqqqq_</p>
        </div>

      </div>
    </main>
  );
}
