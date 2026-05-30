export default async function AnalisaPage({
  params,
}: {
  params: Promise<{ kode: string }>;
}) {
  const { kode } = await params;

  const score =
    kode
      .split("")
      .reduce(
        (a, b) => a + b.charCodeAt(0),
        0
      ) % 25 + 70;

  let rating = "BUY";

  if (score >= 90) rating = "STRONG BUY";
  else if (score >= 80) rating = "BUY";
  else if (score >= 70) rating = "HOLD";
  else rating = "RISKY";

  return (
    <main className="min-h-screen max-w-md mx-auto bg-[#050B14] text-white">

      <div className="p-5">

        <a
          href="/"
          className="text-cyan-400 text-sm"
        >
          ← Kembali
        </a>

        <h1 className="text-4xl font-bold text-cyan-400 mt-4">
          {kode.toUpperCase()}
        </h1>

        <p className="text-slate-400 mt-2">
          Fundamental Preview
        </p>

      </div>

      <div className="px-5">

        <div className="rounded-3xl p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">

          <div className="text-xs text-cyan-400">
            FUNDAMENTAL SCORE
          </div>

          <div className="text-6xl font-bold mt-3">
            {score}
          </div>

          <div className="text-slate-400">
            Preview Analysis
          </div>

        </div>

      </div>

      <div className="px-5 mt-5">

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            Rating
          </h2>

          <div className="mt-4">

            <span className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 font-semibold">
              {rating}
            </span>

          </div>

          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            Analisa lengkap Bandarmologi,
            Smart Money, Watchlist Premium,
            News Scanner dan Multibagger
            tersedia untuk member VIP.
          </p>

        </div>

      </div>

      <div className="px-5 mt-5 mb-10">

        <div className="rounded-3xl p-5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">

          <h2 className="font-bold">
            Unlock VIP Analysis 💎
          </h2>

          <p className="text-sm text-slate-400 mt-3">
            ✔ Bandarmologi
            <br />
            ✔ Smart Money
            <br />
            ✔ Watchlist Premium
            <br />
            ✔ News Scanner
            <br />
            ✔ Multibagger Scanner
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
