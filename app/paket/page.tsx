export default function PaketPage() {
  return (
    <main
      className="min-h-screen text-white max-w-md mx-auto"
      style={{ background: "var(--bg-base)" }}
    >
      {/* HEADER */}
      <div className="px-5 pt-10 pb-5" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
        <a href="/" className="inline-flex items-center gap-1.5 text-xs font-medium mb-6 transition-opacity hover:opacity-70" style={{ color: "var(--text-muted)" }}>
          ← Kembali
        </a>
        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>
          Membership
        </p>
        <h1
          className="text-2xl font-bold"
          style={{ color: "var(--neon-cyan)", textShadow: "0 0 24px rgba(0,212,255,0.35)" }}
        >
          Paket VIP
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Unlock seluruh fitur premium Ritel Community
        </p>
      </div>

      <div className="px-5 py-5 space-y-4 pb-10">

        {/* FITUR */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--text-muted)" }}>
            Semua Paket Termasuk
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              "🏦 Bandarmologi IDX",
              "⭐ Smart Money Score",
              "🚀 Multibagger Scanner",
              "📰 News Scanner",
              "📈 Watchlist Premium",
              "💰 Earnings Analysis",
            ].map((f) => (
              <div
                key={f}
                className="text-xs px-3 py-2 rounded-lg font-medium"
                style={{
                  background: "rgba(0,212,255,0.05)",
                  color: "#94a3b8",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* 1 BULAN */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                VIP 1 Bulan
              </p>
              <div className="flex items-end gap-2 mt-2">
                <span className="text-3xl font-black text-white">Rp99.000</span>
              </div>
              <span className="text-xs line-through" style={{ color: "var(--text-muted)" }}>Rp150.000</span>
            </div>
            <div
              className="px-2.5 py-1 rounded-lg text-xs font-bold"
              style={{
                background: "rgba(0,212,255,0.1)",
                color: "var(--neon-cyan)",
                border: "1px solid rgba(0,212,255,0.2)",
              }}
            >
              −34%
            </div>
          </div>
        </div>

        {/* 3 BULAN — POPULAR */}
        <div
          className="rounded-2xl p-5 relative overflow-hidden"
          style={{
            background: "var(--bg-card)",
            border: "1px solid rgba(34,197,94,0.3)",
            boxShadow: "0 0 30px rgba(34,197,94,0.06)",
          }}
        >
          <div
            className="absolute top-4 right-4 px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide"
            style={{
              background: "rgba(34,197,94,0.15)",
              color: "#22c55e",
              border: "1px solid rgba(34,197,94,0.25)",
            }}
          >
            PALING HEMAT
          </div>
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#22c55e" }}>
            VIP 3 Bulan
          </p>
          <div className="flex items-end gap-2 mt-2">
            <span className="text-3xl font-black text-white">Rp300.000</span>
          </div>
          <span className="text-xs line-through" style={{ color: "var(--text-muted)" }}>Rp600.000</span>
          <div className="mt-3 pt-3" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-xs font-semibold" style={{ color: "#22c55e" }}>Hemat 50% · Rp100.000/bulan</p>
            <div className="mt-2 space-y-1.5 text-xs" style={{ color: "#94a3b8" }}>
              <div>✓ Prioritas update fitur</div>
              <div>✓ Akses fitur baru lebih awal</div>
            </div>
          </div>
        </div>

        {/* LIFETIME */}
        <div
          className="rounded-2xl p-5 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(37,99,235,0.08) 100%)",
            border: "1px solid var(--border-active)",
            boxShadow: "0 0 40px rgba(0,212,255,0.07)",
          }}
        >
          <div
            className="absolute top-0 right-0 px-3 py-2 text-xs font-bold tracking-widest"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(37,99,235,0.3))",
              color: "var(--neon-cyan)",
              borderBottomLeftRadius: "12px",
            }}
          >
            LIFETIME
          </div>
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--neon-cyan)" }}>
            VIP Lifetime
          </p>
          <div className="flex items-end gap-2 mt-2">
            <span
              className="text-4xl font-black"
              style={{ color: "var(--neon-cyan)", textShadow: "0 0 20px rgba(0,212,255,0.4)" }}
            >
              Rp860.000
            </span>
          </div>
          <span className="text-xs line-through" style={{ color: "var(--text-muted)" }}>Rp2.500.000</span>
          <div className="mt-3 pt-3" style={{ borderTop: "1px solid var(--border-active)" }}>
            <p className="text-xs font-semibold mb-2" style={{ color: "var(--neon-cyan)" }}>
              Sekali bayar · Akses selamanya
            </p>
            <div className="space-y-1.5 text-xs" style={{ color: "#94a3b8" }}>
              <div>✓ Semua fitur premium</div>
              <div>✓ Semua update gratis selamanya</div>
              <div>✓ Prioritas support</div>
              <div>✓ Tanpa biaya perpanjangan</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-active)",
          }}
        >
          <p className="font-bold text-white mb-1">Siap Gabung VIP?</p>
          <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
            Hubungi admin untuk aktivasi membership. Proses cepat & langsung aktif.
          </p>
          <a
            href="https://wa.me/6282218723401"
            className="block text-center py-3.5 rounded-xl font-bold text-sm tracking-wide"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #2563eb 100%)",
              color: "#020810",
              boxShadow: "0 0 20px rgba(0,212,255,0.25)",
            }}
          >
            Hubungi Admin →
          </a>
        </div>

        {/* FOOTER */}
        <div
          className="rounded-xl px-5 py-4"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
        >
          <div className="text-xs font-semibold tracking-wide" style={{ color: "var(--neon-cyan)" }}>
            Creator & Developer
          </div>
          <div className="text-sm font-medium text-white mt-1">THIRAFI THARIQ AL IDRIS</div>
          <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>@elthoriqqqq_</div>
        </div>
      </div>
    </main>
  );
}
