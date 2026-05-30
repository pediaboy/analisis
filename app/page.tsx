import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-md mx-auto min-h-screen bg-[#050B14] p-4">

      <div className="pt-6">
        <h1 className="text-xl font-bold text-blue-400">
          RITEL COMMUNITY.ID
        </h1>

        <p className="text-xs text-slate-400 mt-1">
          Fundamental • Bandarmologi • Multibagger
        </p>
      </div>

      <div className="mt-5 bg-[#0B1324] rounded-3xl p-5 border border-blue-900/30">

        <h2 className="text-3xl font-bold leading-tight">
          Cek Fundamental
          <br />
          Saham Dalam
          <span className="text-blue-400">
            {" "}10 Detik
          </span>
        </h2>

        <p className="text-sm text-slate-400 mt-3">
          Analisa Fundamental,
          Bandarmologi dan Potensi Bagger.
        </p>

      </div>

      <div className="mt-4">

        <input
          placeholder="Contoh: ANTM"
          className="w-full p-3 rounded-xl bg-[#111827] border border-slate-700"
        />

        <button className="w-full mt-3 p-3 rounded-xl bg-blue-600">
          Cek Saham Sekarang
        </button>

      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">

        <a
          href="https://wa.me/6282218723401?text=Saya%20ingin%20join%20VIP%20RITEL%20COMMUNITY.ID"
          target="_blank"
          className="bg-[#111827] text-center p-3 rounded-xl"
        >
          Order VIP
        </a>

        <Link
          href="/vip"
          className="bg-blue-600 text-center p-3 rounded-xl"
        >
          Login VIP
        </Link>

      </div>

    </main>
  );
}
