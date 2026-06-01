const sections = [
  { no: "01", title: "Apa Itu Saham?", content: "Saham adalah bukti kepemilikan atas suatu perusahaan. Saat membeli saham, kamu ikut memiliki sebagian kecil perusahaan tersebut.", bullets: null },
  { no: "02", title: "Cara Membeli Saham", content: "Buka rekening saham di sekuritas, deposit dana, lalu beli saham melalui aplikasi trading yang tersedia.", bullets: null },
  {
    no: "03", title: "Fundamental Analysis", content: null,
    bullets: [
      { term: "ROE", desc: "Return on Equity — efisiensi perusahaan menggunakan modal." },
      { term: "EPS", desc: "Earnings per Share — laba per lembar saham." },
      { term: "PER", desc: "Price to Earnings — valuasi saham terhadap laba." },
      { term: "DER", desc: "Debt to Equity — tingkat utang perusahaan." },
    ],
  },
  {
    no: "04", title: "Technical Analysis", content: null,
    bullets: [
      { term: "RSI", desc: "Di bawah 30 oversold, di atas 70 overbought." },
      { term: "MACD", desc: "Untuk melihat momentum dan arah tren." },
      { term: "BB", desc: "Bollinger Band — mengukur volatilitas harga." },
      { term: "EMA", desc: "Tren jangka pendek maupun panjang." },
    ],
  },
  { no: "05", title: "Bandarmologi", content: "Analisa aktivitas broker untuk melihat akumulasi maupun distribusi yang dilakukan oleh pelaku pasar besar.", bullets: null },
  { no: "06", title: "Manajemen Risiko", content: "Jangan gunakan seluruh modal pada satu saham. Gunakan stop loss dan tentukan target profit sebelum membeli.", bullets: null },
  { no: "07", title: "Psikologi Trading", content: "Hindari FOMO, jangan panik saat market turun, dan selalu disiplin terhadap strategi yang telah dibuat.", bullets: null },
];

export default function PanduanPage() {
  return (
    <main className="min-h-screen text-white max-w-md mx-auto" style={{ padding: "48px 20px 64px" }}>

      {/* NAV */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "48px" }}>
        <a href="/" style={{ fontSize: "13px", fontWeight: 600, color: "var(--muted-2)", textDecoration: "none" }}>← Kembali</a>
        <span className="pill">EDUKASI</span>
      </div>

      {/* HERO */}
      <div style={{ marginBottom: "40px" }}>
        <span className="section-label">Belajar Trading</span>
        <h1 style={{
          fontSize: "40px", fontWeight: 900, marginTop: "8px", marginBottom: "12px",
          background: "linear-gradient(135deg, #ffffff 0%, var(--cyan) 60%, var(--purple) 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
        }}>Panduan Trading</h1>
        <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--muted-2)" }}>Dari dasar hingga analisa mahir</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {sections.map((s) => (
          <div key={s.no} className="glass">
            <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
              <span style={{
                fontSize: "12px", fontWeight: 800, flexShrink: 0, marginTop: "2px",
                background: "linear-gradient(135deg, var(--cyan), var(--purple))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>{s.no}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 700, fontSize: "14px", color: "white", marginBottom: "10px" }}>{s.title}</p>
                {s.content && (
                  <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--muted-2)" }}>{s.content}</p>
                )}
                {s.bullets && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {s.bullets.map((b) => (
                      <div key={b.term} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{
                          fontSize: "11px", fontWeight: 700, padding: "3px 8px", borderRadius: "6px", flexShrink: 0,
                          background: "rgba(0,212,255,0.08)", color: "var(--cyan)", border: "1px solid rgba(0,212,255,0.15)"
                        }}>{b.term}</span>
                        <span style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--muted-2)" }}>{b.desc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div style={{
          borderRadius: "16px", padding: "24px",
          background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(168,85,247,0.08) 100%)",
          border: "1px solid rgba(0,212,255,0.2)"
        }}>
          <p style={{ fontWeight: 700, fontSize: "16px", color: "white", marginBottom: "8px" }}>Mau Lebih Dalam? 🚀</p>
          <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--muted-2)", marginBottom: "20px" }}>
            Akses Bandarmologi, Smart Money, dan Multibagger di VIP.
          </p>
          <a href="/paket" className="btn-primary">Lihat Paket VIP →</a>
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
