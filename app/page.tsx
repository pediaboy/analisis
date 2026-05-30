export default function Home() {
  return (
    <main className="min-h-screen bg-[#050B14] text-white">

      {/* HEADER */}
      <header className="border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold text-blue-400">
              RITEL COMMUNITY.ID
            </h1>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-xl bg-[#111827] border border-slate-700 hover:border-blue-500">
              Login Free
            </button>

            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg shadow-blue-500/40">
              Login VIP 💎
            </button>
          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-6xl font-extrabold mb-6">
            CEK FUNDAMENTAL SAHAM
            <span className="text-blue-400 block">
              DALAM 10 DETIK
            </span>
          </h2>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-12">
            Analisa Fundamental, Bandarmologi,
            Valuasi, Trend Market dan Potensi Bagger
            dalam satu dashboard premium.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <button className="px-8 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-600 shadow-xl shadow-blue-500/50 hover:scale-105 transition">
              🔍 CEK SAHAM SEKARANG
            </button>

            <button className="px-8 py-4 rounded-2xl bg-[#111827] border border-slate-700 hover:border-blue-500">
              Login Free
            </button>

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg shadow-blue-500/50">
              Login VIP 💎
            </button>

          </div>

        </div>

      </section>

      {/* SEARCH */}
      <section className="max-w-4xl mx-auto px-6">

        <div className="bg-[#0B1324] border border-blue-900/30 rounded-3xl p-8">

          <h3 className="text-2xl font-bold mb-6">
            Cari Saham
          </h3>

          <div className="flex gap-3">

            <input
              type="text"
              placeholder="Contoh: ANTM"
              className="flex-1 bg-[#111827] border border-slate-700 rounded-xl px-5 py-4"
            />

            <button className="px-8 bg-blue-600 rounded-xl font-semibold">
              ANALISA
            </button>

          </div>

        </div>

      </section>

      {/* FITUR */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#0B1324] rounded-2xl p-6 border border-blue-900/30">
            <h4 className="text-blue-400 font-bold text-xl mb-3">
              Fundamental
            </h4>

            <p className="text-slate-400">
              Analisa PER, PBV, ROE, DER,
              Laba Bersih dan Cashflow.
            </p>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-6 border border-blue-900/30">
            <h4 className="text-blue-400 font-bold text-xl mb-3">
              Bandarmologi
            </h4>

            <p className="text-slate-400">
              Deteksi broker akumulasi,
              distribusi dan arus dana bandar.
            </p>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-6 border border-blue-900/30">
            <h4 className="text-blue-400 font-bold text-xl mb-3">
              Potensi Bagger
            </h4>

            <p className="text-slate-400">
              Skoring otomatis saham yang
              berpotensi multibagger.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-900/30 py-8">

        <div className="text-center text-slate-500">
          © 2026 RITEL COMMUNITY.ID
        </div>

      </footer>

    </main>
  )
}
