export default function PaketPage() {
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
          Paket VIP
        </h1>

        <p className="text-slate-400 mt-2">
          Unlock seluruh fitur premium Ritel Community.
        </p>

      </div>

      <div className="px-5 pb-10 space-y-4">

        {/* 1 BULAN */}

        <div className="bg-[#0B1324] rounded-3xl p-5 border border-cyan-500/20">

          <div className="text-cyan-400 font-bold">
            VIP 1 Bulan
          </div>

          <div className="mt-3 text-slate-500 line-through">
            Rp150.000
          </div>

          <div className="text-4xl font-bold mt-1">
            Rp99.000
          </div>

          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>✅ Bandarmologi IDX</li>
            <li>✅ Smart Money Score</li>
            <li>✅ News Scanner</li>
            <li>✅ Earnings Analysis</li>
            <li>✅ Watchlist Premium</li>
            <li>✅ Multibagger Scanner</li>
          </ul>

        </div>

        {/* 3 BULAN */}

        <div className="bg-[#0B1324] rounded-3xl p-5 border border-green-500/20">

          <div className="text-green-400 font-bold">
            VIP 3 Bulan
          </div>

          <div className="mt-3 text-slate-500 line-through">
            Rp600.000
          </div>

          <div className="text-4xl font-bold mt-1">
            Rp300.000
          </div>

          <div className="mt-2 text-green-400 text-sm">
            Hemat 50%
          </div>

          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>✅ Semua fitur VIP</li>
            <li>✅ Prioritas update fitur</li>
            <li>✅ Akses fitur baru lebih awal</li>
          </ul>

        </div>

        {/* LIFETIME */}

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-5 border border-cyan-500/20">

          <div className="text-cyan-400 font-bold">
            VIP Lifetime
          </div>

          <div className="mt-3 text-slate-500 line-through">
            Rp2.500.000
          </div>

          <div className="text-5xl font-bold mt-1 text-cyan-400">
            Rp860.000
          </div>

          <div className="mt-2 text-cyan-400 text-sm">
            Sekali bayar, akses selamanya
          </div>

          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>✅ Semua fitur premium</li>
            <li>✅ Semua update gratis</li>
            <li>✅ Prioritas support</li>
            <li>✅ Tanpa biaya perpanjangan</li>
            <li>✅ Lifetime Access</li>
          </ul>

        </div>

        {/* CTA */}

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            Gabung VIP Sekarang
          </h2>

          <p className="text-sm text-slate-400 mt-3">
            Hubungi admin untuk aktivasi membership VIP.
          </p>

          <a
            href="https://wa.me/6282218723401"
            className="
              block
              text-center
              mt-4
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              font-semibold
            "
          >
            Hubungi Admin
          </a>

        </div>

        {/* FOOTER */}

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
