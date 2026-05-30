export default async function AnalisaPage({
  params,
}: {
  params: Promise<{ kode: string }>;
}) {
  const { kode } = await params;

  return (
    <main className="min-h-screen max-w-md mx-auto bg-[#050B14] text-white">

      {/* HEADER */}
      <div className="p-5">

        <a
          href="/"
          className="text-cyan-400 text-sm"
        >
          ← Kembali
        </a>

        <h1 className="text-4xl font-bold text-cyan-400 mt-4">
          {kode}
        </h1>

        <p className="text-slate-400 mt-2">
          Analisa Fundamental Premium
        </p>

      </div>

      {/* SCORE */}
      <div className="px-5">

        <div className="rounded-3xl p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">

          <div className="text-xs text-cyan-400">
            FUNDAMENTAL SCORE
          </div>

          <div className="text-6xl font-bold mt-3">
            87
          </div>

          <div className="text-slate-400">
            dari 100
          </div>

        </div>

      </div>

      {/* METRIK */}
      <div className="px-5 mt-5">

        <div className="grid grid-cols-2 gap-3">

          <div className="bg-[#0B1324] rounded-2xl p-4">
            <div className="text-xs text-slate-400">
              PER
            </div>

            <div className="text-2xl font-bold mt-2">
              8.2
            </div>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4">
            <div className="text-xs text-slate-400">
              PBV
            </div>

            <div className="text-2xl font-bold mt-2">
              1.1
            </div>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4">
            <div className="text-xs text-slate-400">
              ROE
            </div>

            <div className="text-2xl font-bold mt-2">
              18%
            </div>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4">
            <div className="text-xs text-slate-400">
              DER
            </div>

            <div className="text-2xl font-bold mt-2">
              0.3
            </div>
          </div>

        </div>

      </div>

      {/* SCORING */}
      <div className="px-5 mt-5">

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            Penilaian
          </h2>

          <div className="space-y-4 mt-4">

            <div className="flex justify-between">
              <span>Valuation</span>
              <span className="font-bold">
                9.1 / 10
              </span>
            </div>

            <div className="flex justify-between">
              <span>Growth</span>
              <span className="font-bold">
                8.4 / 10
              </span>
            </div>

            <div className="flex justify-between">
              <span>Financial Health</span>
              <span className="font-bold">
                8.8 / 10
              </span>
            </div>

            <div className="flex justify-between">
              <span>Bagger Score</span>
              <span className="font-bold text-cyan-400">
                8.5 / 10
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* KESIMPULAN */}
      <div className="px-5 mt-5">

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            Kesimpulan
          </h2>

          <div className="mt-4">

            <span className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 font-semibold">
              UNDERVALUED
            </span>

          </div>

          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            Berdasarkan valuasi, profitabilitas,
            pertumbuhan laba, dan kesehatan
            keuangan perusahaan, saham ini
            memiliki prospek yang menarik untuk
            dipantau lebih lanjut.
          </p>

        </div>

      </div>

      {/* CTA VIP */}
      <div className="px-5 mt-5 mb-10">

        <div className="rounded-3xl p-5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">

          <h2 className="font-bold">
            Unlock VIP Analysis 💎
          </h2>

          <p className="text-sm text-slate-400 mt-3">
            Bandarmologi, BSJP, BPJS,
            Watchlist Premium dan Scanner
            Multibagger.
          </p>

          <a
            href="/vip"
            className="block text-center mt-4 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold"
          >
            Login VIP
          </a>

        </div>

      </div>

    </main>
  );
}
