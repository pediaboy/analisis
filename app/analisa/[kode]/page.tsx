export default async function AnalisaPage({
  params,
}: {
  params: Promise<{ kode: string }>;
}) {
  const { kode } = await params;

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://analisis-rho.vercel.app";

  const res = await fetch(
    `${baseUrl}/api/ratios?kode=${kode}`,
    {
      cache: "no-store",
    }
  );

  const json = await res.json();

  const latest =
    json?.data?.companyMetrics?.[
      json.data.companyMetrics.length - 1
    ] || {};

  const per =
    latest.priceToEarningsRatio || 0;

  const pbv =
    latest.priceToBookRatio || 0;

  const roe =
    latest.roe || 0;

  const der =
    latest.debtToEquityRatio || 0;

  const growth =
    latest.revenueGrowthRate || 0;

  let score = 0;

  if (roe > 15) score += 20;
  if (der < 100) score += 20;
  if (pbv < 3) score += 20;
  if (per < 20) score += 20;
  if (growth > 5) score += 20;

  let rating = "AVOID";

  if (score >= 80) rating = "STRONG BUY";
  else if (score >= 60) rating = "BUY";
  else if (score >= 40) rating = "HOLD";

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
          Analisa Fundamental Otomatis
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
            dari 100
          </div>

        </div>

      </div>

      <div className="px-5 mt-5">

        <div className="grid grid-cols-2 gap-3">

          <div className="bg-[#0B1324] rounded-2xl p-4">
            <div className="text-xs text-slate-400">
              PER
            </div>

            <div className="text-2xl font-bold mt-2">
              {Number(per).toFixed(2)}
            </div>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4">
            <div className="text-xs text-slate-400">
              PBV
            </div>

            <div className="text-2xl font-bold mt-2">
              {Number(pbv).toFixed(2)}
            </div>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4">
            <div className="text-xs text-slate-400">
              ROE
            </div>

            <div className="text-2xl font-bold mt-2">
              {Number(roe).toFixed(2)}%
            </div>
          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4">
            <div className="text-xs text-slate-400">
              DER
            </div>

            <div className="text-2xl font-bold mt-2">
              {Number(der).toFixed(2)}
            </div>
          </div>

        </div>

      </div>

      <div className="px-5 mt-5">

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            Kesimpulan
          </h2>

          <div className="mt-4">

            <span className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 font-semibold">
              {rating}
            </span>

          </div>

          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            Revenue Growth:
            {" "}
            {Number(growth).toFixed(2)}%
            <br />
            ROE:
            {" "}
            {Number(roe).toFixed(2)}%
            <br />
            PBV:
            {" "}
            {Number(pbv).toFixed(2)}
            <br />
            PER:
            {" "}
            {Number(per).toFixed(2)}
          </p>

        </div>

      </div>

      <div className="px-5 mt-5 mb-10">

        <div className="rounded-3xl p-5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">

          <h2 className="font-bold">
            Unlock VIP Analysis 💎
          </h2>

          <p className="text-sm text-slate-400 mt-3">
            Bandarmologi,
            Smart Money,
            BSJP,
            BPJS,
            Watchlist Premium,
            dan Scanner Multibagger.
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
