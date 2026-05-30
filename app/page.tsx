export default function Home() {
  return (
    <main className="min-h-screen max-w-md mx-auto bg-[#050B14] text-white">

      {/* HEADER */}
      <div className="px-4 pt-6 pb-4">

        <h1 className="text-xl font-bold text-blue-400">
          RITEL COMMUNITY.ID
        </h1>

        <p className="text-xs text-slate-400 mt-1">
          Fundamental • Bandarmologi • Multibagger
        </p>

      </div>

      {/* HERO */}
      <div className="px-4">

        <div className="bg-[#0B1324] border border-blue-900/30 rounded-3xl p-5">

          <div className="inline-block text-[10px] px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
            PREMIUM ANALYTICS
          </div>

          <h2 className="text-3xl font-bold leading-tight mt-4">
            Cek Fundamental
            <br />
            Saham Dalam
            <span className="text-blue-400">
              {" "}10 Detik
            </span>
          </h2>

          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Analisa Fundamental, Bandarmologi,
            Valuasi, Trend Market dan Potensi
            Multibagger dalam satu dashboard premium.
          </p>

        </div>

      </div>

      {/* SEARCH */}
      <div className="px-4 mt-4">

        <div className="bg-[#0B1324] border border-blue-900/20 rounded-2xl p-4">

          <label className="text-xs text-slate-400">
            Cari Kode Saham
          </label>

          <input
            type="text"
            placeholder="Contoh: ANTM"
            className="w-full mt-2 px-4 py-3 rounded-xl bg-[#111827] border border-slate-700 text-sm"
          />

          <button className="w-full mt-3 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600">
            🔍 Cek Saham Sekarang
          </button>

        </div>

      </div>

      {/* LOGIN */}
      <div className="px-4 mt-3 grid grid-cols-2 gap-3">

        <a
          href="/vip"
          className="py-3 rounded-xl text-sm bg-[#111827] border border-slate-700 text-center font-medium"
        >
          💎 Lihat Paket VIP
        </a>

        <a
          href="/vip"
          className="py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-center"
        >
          🔐 Login VIP
        </a>

      </div>

      {/* FITUR */}
      <div className="px-4 mt-6">

        <h3 className="font-semibold text-base mb-3">
          Fitur Premium
        </h3>

        <div className="space-y-3">

          <div className="bg-[#0B1324] rounded-2xl p-4 border border-blue-900/20">
            <h4 className="text-sm font-semibold text-blue-400">
              📊 Fundamental Scanner
            </h4>

            <p className="text-xs text-slate-400 mt-2">
              Analisa PER, PBV, ROE, DER, EPS dan valuasi otomatis.
            </p>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4 border border-blue-900/20">
            <h4 className="text-sm font-semibold text-blue-400">
              📈 Bandarmologi
            </h4>

            <p className="text-xs text-slate-400 mt-2">
              Deteksi akumulasi dan distribusi bandar.
            </p>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4 border border-blue-900/20">
            <h4 className="text-sm font-semibold text-blue-400">
              🎯 Multibagger Scanner
            </h4>

            <p className="text-xs text-slate-400 mt-2">
              Cari saham yang berpotensi naik berkali-kali lipat.
            </p>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4 border border-blue-900/20">
            <h4 className="text-sm font-semibold text-blue-400">
              🛡️ BSJP & BPJS Screener
            </h4>

            <p className="text-xs text-slate-400 mt-2">
              Beli Sore Jual Pagi dan Beli Pagi Jual Sore.
            </p>
          </div>

        </div>

      </div>

      {/* STATISTIK */}
      <div className="px-4 mt-8">

        <div className="grid grid-cols-3 gap-3">

          <div className="bg-[#0B1324] rounded-2xl p-4 text-center border border-blue-900/20">
            <div className="text-xl font-bold text-blue-400">
              1.250+
            </div>

            <div className="text-[11px] text-slate-400">
              Member VIP
            </div>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4 text-center border border-blue-900/20">
            <div className="text-xl font-bold text-blue-400">
              87%
            </div>

            <div className="text-[11px] text-slate-400">
              Win Rate
            </div>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4 text-center border border-blue-900/20">
            <div className="text-xl font-bold text-blue-400">
              24/7
            </div>

            <div className="text-[11px] text-slate-400">
              Support
            </div>
          </div>

        </div>

      </div>

      {/* CTA VIP */}
      <div className="px-4 mt-8">

        <div className="rounded-3xl p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-500/20">

          <div className="text-center">

            <div className="text-xs text-cyan-400 font-semibold">
              MEMBER VIP
            </div>

            <h3 className="text-xl font-bold mt-2">
              Unlock Semua Fitur Premium
            </h3>

            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              Akses Bandarmologi, Fundamental Scanner,
              BSJP, BPJS, Multibagger Scanner,
              Watchlist Premium dan Dashboard VIP.
            </p>

            <a
              href="/vip"
              className="block mt-5 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold"
            >
              Lihat Paket VIP 💎
            </a>

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="text-center text-slate-500 text-[11px] py-8">
        © 2026 RITEL COMMUNITY.ID
      </div>

    </main>
  );
}
