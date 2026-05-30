export default function PanduanPage() {
  return (
    <main className="min-h-screen bg-[#050B14] text-white max-w-md mx-auto">

      <div className="p-5">

        <a
          href="/"
          className="text-cyan-400 text-sm"
        >
          ← Kembali
        </a>

        <h1 className="text-4xl font-bold text-cyan-400 mt-4">
          Panduan Trading
        </h1>

        <p className="text-slate-400 mt-2">
          Belajar saham dari dasar hingga mahir.
        </p>

      </div>

      <div className="px-5 pb-10 space-y-4">

        <div className="bg-[#0B1324] rounded-3xl p-5">
          <h2 className="font-bold text-cyan-400">
            1. Apa Itu Saham?
          </h2>

          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Saham adalah bukti kepemilikan atas suatu
            perusahaan. Saat membeli saham, kamu ikut
            memiliki sebagian kecil perusahaan tersebut.
          </p>
        </div>

        <div className="bg-[#0B1324] rounded-3xl p-5">
          <h2 className="font-bold text-cyan-400">
            2. Cara Membeli Saham
          </h2>

          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Buka rekening saham di sekuritas,
            deposit dana, lalu beli saham melalui
            aplikasi trading yang tersedia.
          </p>
        </div>

        <div className="bg-[#0B1324] rounded-3xl p-5">
          <h2 className="font-bold text-cyan-400">
            3. Fundamental Analysis
          </h2>

          <div className="space-y-3 mt-3 text-sm text-slate-400">

            <p>
              <b>PER</b> digunakan untuk melihat
              apakah harga saham mahal atau murah.
            </p>

            <p>
              <b>PBV</b> digunakan untuk membandingkan
              harga saham dengan nilai bukunya.
            </p>

            <p>
              <b>ROE</b> menunjukkan kemampuan
              perusahaan menghasilkan laba.
            </p>

            <p>
              <b>DER</b> menunjukkan tingkat utang
              perusahaan.
            </p>

          </div>
        </div>

        <div className="bg-[#0B1324] rounded-3xl p-5">
          <h2 className="font-bold text-cyan-400">
            4. Technical Analysis
          </h2>

          <div className="space-y-3 mt-3 text-sm text-slate-400">

            <p>
              <b>RSI</b> di bawah 30 biasanya
              oversold, di atas 70 overbought.
            </p>

            <p>
              <b>MACD</b> digunakan untuk melihat
              momentum dan arah tren.
            </p>

            <p>
              <b>Bollinger Band</b> digunakan
              untuk mengukur volatilitas harga.
            </p>

            <p>
              <b>EMA</b> digunakan untuk melihat
              tren jangka pendek maupun panjang.
            </p>

          </div>
        </div>

        <div className="bg-[#0B1324] rounded-3xl p-5">
          <h2 className="font-bold text-cyan-400">
            5. Bandarmologi
          </h2>

          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Bandarmologi adalah analisa aktivitas
            broker untuk melihat akumulasi maupun
            distribusi yang dilakukan oleh pelaku
            pasar besar.
          </p>
        </div>

        <div className="bg-[#0B1324] rounded-3xl p-5">
          <h2 className="font-bold text-cyan-400">
            6. Manajemen Risiko
          </h2>

          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Jangan gunakan seluruh modal pada satu
            saham. Gunakan stop loss dan tentukan
            target profit sebelum membeli.
          </p>
        </div>

        <div className="bg-[#0B1324] rounded-3xl p-5">
          <h2 className="font-bold text-cyan-400">
            7. Psikologi Trading
          </h2>

          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Hindari FOMO, jangan panik saat market
            turun, dan selalu disiplin terhadap
            strategi yang telah dibuat.
          </p>
        </div>

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            Creator & Developer
          </h2>

          <p className="mt-3">
            THIRAFI THARIQ AL IDRIS
          </p>

          <p className="text-slate-400 text-sm mt-1">
            Instagram: @elthoriqqqq_
          </p>

        </div>

      </div>

    </main>
  );
}
