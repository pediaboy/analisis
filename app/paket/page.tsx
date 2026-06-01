export default function PaketPage() {
  return (
    <main className="min-h-screen text-white max-w-md mx-auto px-5 pt-12 pb-12">

      {/* NAV */}
      <div className="flex items-center justify-between mb-12">
        <a href="/" className="text-xs font-semibold" style={{ color: "var(--muted-2)" }}>← Kembali</a>
        <span className="pill">MEMBERSHIP</span>
      </div>

      {/* HERO */}
      <div className="mb-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
          Harga & Paket
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
          Paket VIP
        </h1>
        <p className="text-sm mt-2" style={{ color: "var(--muted-2)" }}>
          Unlock seluruh fitur premium Ritel Community
        </p>
      </div>

      <div className="space-y-4">

        {/* FITUR OVERVIEW */}
        <div className="glass p-5">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>
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
                className="text-xs px-3 py-2 rounded-xl font-medium"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  color: "var(--muted-2)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* 1 BULAN */}
        <div className="glass p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
                VIP 1 Bulan
              </p>
              <div className="text-3xl font-black text-white">Rp99.000</div>
              <div className="text-xs line-through mt-0.5" style={{ color: "var(--muted)" }}>Rp150.000</div>
            </div>
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-xl"
              style={{ background: "rgba(0,212,255,0.1)", color: "var(--cyan)", border: "1px solid rgba(0,212,255,0.2)" }}
            >
              −34%
            </span>
          </div>
        </div>

        {/* 3 BULAN */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(34,197,94,0.3)",
            boxShadow: "0 0 30px rgba(34,197,94,0.05)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#22c55e" }}>
                VIP 3 Bulan
              </p>
              <div className="text-3xl font-black text-white">Rp300.000</div>
              <div className="text-xs line-through mt-0.5" style={{ color: "var(--muted)" }}>Rp600.000</div>
            </div>
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-xl"
              style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.25)" }}
            >
              PALING HEMAT
            </span>
          </div>
          <div className="divider mb-3" />
          <p className="text-xs font-semibold mb-1" style={{ color: "#22c55e" }}>Hemat 50% · Rp100.000/bulan</p>
          <div className="text-xs space-y-1" style={{ color: "var(--muted-2)" }}>
            <div>✓ Prioritas update fitur</div>
            <div>✓ Akses fitur baru lebih awal</div>
          </div>
        </div>

        {/* LIFETIME */}
        <div
          className="rounded-2xl p-5 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0,212,255,0.07) 0%, rgba(168,85,247,0.09) 100%)",
            border: "1px solid rgba(0,212,255,0.25)",
            boxShadow: "0 0 50px rgba(0,212,255,0.07)",
          }}
        >
          <div
            className="absolute top-0 right-0 text-xs font-black tracking-widest px-3 py-2"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.25), rgba(168,85,247,0.3))",
              borderBottomLeftRadius: "14px",
              color: "white",
            }}
          >
            LIFETIME ♾️
          </div>
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--cyan)" }}>
            VIP Lifetime
          </p>
          <div
            className="text-4xl font-black mb-0.5"
            style={{
              background: "linear-gradient(135deg, var(--cyan), var(--purple))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Rp860.000
          </div>
          <div className="text-xs line-through mb-4" style={{ color: "var(--muted)" }}>Rp2.500.000</div>
          <div className="divider mb-3" />
          <p className="text-xs font-semibold mb-2" style={{ color: "var(--cyan)" }}>Sekali bayar · Akses selamanya</p>
          <div className="text-xs space-y-1" style={{ color: "var(--muted-2)" }}>
            <div>✓ Semua fitur premium</div>
            <div>✓ Semua update gratis selamanya</div>
            <div>✓ Prioritas support</div>
            <div>✓ Tanpa biaya perpanjangan</div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-glow p-5">
          <p className="font-bold text-white mb-1">Siap Gabung VIP?</p>
          <p className="text-xs mb-4" style={{ color: "var(--muted-2)" }}>
            Hubungi admin untuk aktivasi. Proses cepat & langsung aktif.
          </p>
          <a
            href="https://wa.me/6282218723401"
            className="btn-primary"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
              boxShadow: "0 0 30px rgba(34,197,94,0.2)",
            }}
          >
            Hubungi Admin via WhatsApp →
          </a>
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
