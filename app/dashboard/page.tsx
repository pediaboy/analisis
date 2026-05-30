export default async function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050B14] text-white max-w-md mx-auto">

      <div className="p-5">

        <h1 className="text-4xl font-bold text-cyan-400">
          VIP Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Ritel Community Premium
        </p>

      </div>

      <div className="px-5 pb-10 space-y-4">

        {/* BANDARMOLOGI */}

        <div className="bg-[#0B1324] rounded-3xl p-5">
          <h2 className="font-bold text-cyan-400">
            🏦 Bandarmologi IDX
          </h2>

          <div className="mt-4 space-y-2 text-sm">

            <div className="flex justify-between">
              <span>YP</span>
              <span>Buy Rp 12.5 M</span>
            </div>

            <div className="flex justify-between">
              <span>CC</span>
              <span>Buy Rp 8.2 M</span>
            </div>

            <div className="flex justify-between">
              <span>AK</span>
              <span>Buy Rp 6.9 M</span>
            </div>

          </div>
        </div>

        {/* SMART MONEY */}

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            ⭐ Smart Money Score
          </h2>

          <div className="text-6xl font-bold mt-4">
            87
          </div>

          <div className="text-cyan-400">
            STRONG BUY
          </div>

        </div>

        {/* MULTIBAGGER */}

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            🚀 Multibagger Scanner
          </h2>

          <div className="mt-4 space-y-2">

            <div className="flex justify-between">
              <span>BBCA</span>
              <span>A+</span>
            </div>

            <div className="flex justify-between">
              <span>TLKM</span>
              <span>A</span>
            </div>

            <div className="flex justify-between">
              <span>BBRI</span>
              <span>A</span>
            </div>

          </div>

        </div>

        {/* NEWS */}

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            📰 News Scanner
          </h2>

          <div className="mt-4 space-y-3 text-sm">

            <div>
              TLKM Catat Pertumbuhan Laba Positif
            </div>

            <div>
              BBCA Umumkan Kinerja Kuartal Terbaru
            </div>

            <div>
              ANTM Fokus Ekspansi Hilirisasi
            </div>

          </div>

        </div>

        {/* EARNINGS */}

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            💰 Earnings Analysis
          </h2>

          <div className="mt-4 text-sm">

            <div className="flex justify-between">
              <span>TLKM</span>
              <span className="text-green-400">
                +12%
              </span>
            </div>

            <div className="flex justify-between mt-2">
              <span>BBCA</span>
              <span className="text-green-400">
                +9%
              </span>
            </div>

          </div>

        </div>

        {/* WATCHLIST */}

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            📈 Watchlist Premium
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">

            <span className="px-3 py-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              BBCA
            </span>

            <span className="px-3 py-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              TLKM
            </span>

            <span className="px-3 py-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              BBRI
            </span>

            <span className="px-3 py-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              BMRI
            </span>

          </div>

        </div>

        {/* FOOTER */}

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <div className="text-cyan-400 font-bold">
            Creator & Developer
          </div>

          <div className="mt-3">
            THIRAFI THARIQ AL IDRIS
          </div>

          <div className="text-slate-400 text-sm mt-1">
            Instagram: @elthoriqqqq_
          </div>

        </div>

      </div>

    </main>
  );
}
