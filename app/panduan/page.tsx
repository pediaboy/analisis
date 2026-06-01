const sections = [
  {
    no: "01",
    title: "Apa Itu Saham?",
    content:
      "Saham adalah bukti kepemilikan atas suatu perusahaan. Saat membeli saham, kamu ikut memiliki sebagian kecil perusahaan tersebut.",
  },
  {
    no: "02",
    title: "Cara Membeli Saham",
    content:
      "Buka rekening saham di sekuritas, deposit dana, lalu beli saham melalui aplikasi trading yang tersedia.",
  },
  {
    no: "03",
    title: "Fundamental Analysis",
    content: null,
    bullets: [
      { term: "ROE", desc: "Return on Equity — efisiensi perusahaan menggunakan modal." },
      { term: "EPS", desc: "Earnings per Share — laba per lembar saham." },
      { term: "PER", desc: "Price to Earnings — valuasi saham terhadap laba." },
      { term: "DER", desc: "Debt to Equity — tingkat utang perusahaan." },
    ],
  },
  {
    no: "04",
    title: "Technical Analysis",
    content: null,
    bullets: [
      { term: "RSI", desc: "Di bawah 30 oversold, di atas 70 overbought." },
      { term: "MACD", desc: "Untuk melihat momentum dan arah tren." },
      { term: "Bollinger Band", desc: "Untuk mengukur volatilitas harga." },
      { term: "EMA", desc: "Untuk melihat tren jangka pendek maupun panjang." },
    ],
  },
  {
    no: "05",
    title: "Bandarmologi",
    content:
      "Analisa aktivitas broker untuk melihat akumulasi maupun distribusi yang dilakukan oleh pelaku pasar besar.",
  },
  {
    no: "06",
    title: "Manajemen Risiko",
    content:
      "Jangan gunakan seluruh modal pada satu saham. Gunakan stop loss dan tentukan target profit sebelum membeli.",
  },
  {
    no: "07",
    title: "Psikologi Trading",
    content:
      "Hindari FOMO, jangan panik saat market turun, dan selalu disiplin terhadap strategi yang telah dibuat.",
  },
];

export default function PanduanPage() {
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
          Edukasi
        </p>
        <h1
          className="text-2xl font-bold"
          style={{ color: "var(--neon-cyan)", textShadow: "0 0 24px rgba(0,212,255,0.35)" }}
        >
          Panduan Trading
        </h1>
        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
          Dari dasar hingga analisa mahir
        </p>
      </div>

      <div className="px-5 py-5 space-y-3 pb-10">
        {sections.map((s) => (
          <div
            key={s.no}
            className="rounded-2xl p-5"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
          >
            <div className="flex items-start gap-3">
              <span
                className="text-xs font-bold tabular-nums mt-0.5"
                style={{ color: "rgba(0,212,255,0.35)", minWidth: "20px" }}
              >
                {s.no}
              </span>
              <div className="flex-1">
                <p className="text-sm font-bold text-white mb-2">{s.title}</p>
                {s.content && (
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                    {s.content}
                  </p>
                )}
                {s.bullets && (
                  <div className="space-y-2">
                    {s.bullets.map((b) => (
                      <div key={b.term} className="flex gap-2 text-sm">
                        <span
                          className="font-bold flex-shrink-0 text-xs px-2 py-0.5 rounded h-fit mt-0.5"
                          style={{
                            background: "rgba(0,212,255,0.08)",
                            color: "var(--neon-cyan)",
                            border: "1px solid rgba(0,212,255,0.15)",
                          }}
                        >
                          {b.term}
                        </span>
                        <span style={{ color: "#94a3b8" }} className="leading-relaxed">
                          {b.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-active)",
            boxShadow: "0 0 24px rgba(0,212,255,0.05)",
          }}
        >
          <p className="font-bold text-white mb-1">Mau Lebih Dalam? 🚀</p>
          <p className="text-xs mb-4" style={{ color: "var(--text-muted)" }}>
            Akses analisa Bandarmologi, Smart Money, dan Multibagger eksklusif di VIP.
          </p>
          <a
            href="/paket"
            className="block text-center py-3.5 rounded-xl font-bold text-sm tracking-wide"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #2563eb 100%)",
              color: "#020810",
              boxShadow: "0 0 20px rgba(0,212,255,0.25)",
            }}
          >
            Lihat Paket VIP →
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
