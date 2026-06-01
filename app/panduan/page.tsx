const sections = [
  {
    no: "01",
    title: "Apa Itu Saham?",
    content: "Saham adalah bukti kepemilikan atas suatu perusahaan. Saat membeli saham, kamu ikut memiliki sebagian kecil perusahaan tersebut.",
    bullets: null,
  },
  {
    no: "02",
    title: "Cara Membeli Saham",
    content: "Buka rekening saham di sekuritas, deposit dana, lalu beli saham melalui aplikasi trading yang tersedia.",
    bullets: null,
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
      { term: "BB", desc: "Bollinger Band — mengukur volatilitas harga." },
      { term: "EMA", desc: "Tren jangka pendek maupun panjang." },
    ],
  },
  {
    no: "05",
    title: "Bandarmologi",
    content: "Analisa aktivitas broker untuk melihat akumulasi maupun distribusi yang dilakukan oleh pelaku pasar besar.",
    bullets: null,
  },
  {
    no: "06",
    title: "Manajemen Risiko",
    content: "Jangan gunakan seluruh modal pada satu saham. Gunakan stop loss dan tentukan target profit sebelum membeli.",
    bullets: null,
  },
  {
    no: "07",
    title: "Psikologi Trading",
    content: "Hindari FOMO, jangan panik saat market turun, dan selalu disiplin terhadap strategi yang telah dibuat.",
    bullets: null,
  },
];

export default function PanduanPage() {
  return (
    <main className="min-h-screen text-white max-w-md mx-auto px-5 pt-12 pb-12">

      {/* NAV */}
      <div className="flex items-center justify-between mb-12">
        <a href="/" className="text-xs font-semibold" style={{ color: "var(--muted-2)" }}>← Kembali</a>
        <span className="pill">EDUKASI</span>
      </div>

      {/* HERO */}
      <div className="mb-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
          Belajar Trading
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
          Panduan Trading
        </h1>
        <p className="text-sm mt-2" style={{ color: "var(--muted-2)" }}>
          Dari dasar hingga analisa mahir
        </p>
      </div>

      <div className="space-y-3">
        {sections.map((s) => (
          <div key={s.no} className="glass p-5">
            <div className="flex items-start gap-3">
              <span
                className="text-xs font-black tabular-nums mt-0.5 flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, var(--cyan), var(--purple))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.no}
              </span>
              <div className="flex-1">
                <p className="text-sm font-bold text-white mb-2">{s.title}</p>
                {s.content && (
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-2)" }}>
                    {s.content}
                  </p>
                )}
                {s.bullets && (
                  <div className="space-y-2">
                    {s.bullets.map((b) => (
                      <div key={b.term} className="flex gap-2.5 text-sm items-start">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-lg flex-shrink-0 mt-0.5"
                          style={{
                            background: "rgba(0,212,255,0.08)",
                            color: "var(--cyan)",
                            border: "1px solid rgba(0,212,255,0.15)",
                          }}
                        >
                          {b.term}
                        </span>
                        <span className="leading-relaxed" style={{ color: "var(--muted-2)" }}>
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
            background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(168,85,247,0.08) 100%)",
            border: "1px solid rgba(0,212,255,0.2)",
          }}
        >
          <p className="font-bold text-white mb-1">Mau Lebih Dalam? 🚀</p>
          <p className="text-xs mb-4" style={{ color: "var(--muted-2)" }}>
            Akses Bandarmologi, Smart Money, dan Multibagger di VIP.
          </p>
          <a href="/paket" className="btn-primary">
            Lihat Paket VIP →
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
