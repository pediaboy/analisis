const saham = [
  "BBCA",
  "TLKM",
  "BBRI",
  "BMRI",
  "ANTM",
  "ASII",
  "ICBP",
];

async function getData(kode: string) {
  const res = await fetch(
    `https://analisis-rho.vercel.app/api/ratios?kode=${kode}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function MultibaggerPage() {
  const results = await Promise.all(
    saham.map(async (kode) => {
      try {
        const data = await getData(kode);

        const latest =
          data?.data?.companyMetrics?.[0];

        if (!latest) return null;

        const roe = latest.roe || 0;
        const growth =
          latest.revenueGrowthRate || 0;
        const debt =
          latest.debtToEquityRatio || 999;

        let score = 0;

        if (roe > 15) score += 35;
        if (growth > 10) score += 35;
        if (debt < 100) score += 30;

        let rating = "C";

        if (score >= 85) rating = "A+";
        else if (score >= 70) rating = "A";
        else if (score >= 55) rating = "B";

        return {
          kode,
          score,
          rating,
          roe,
          growth,
          debt,
        };
      } catch {
        return null;
      }
    })
  );

  const filtered = results
    .filter(Boolean)
    .sort((a: any, b: any) => b.score - a.score);

  return (
    <main className="min-h-screen bg-[#050B14] text-white max-w-md mx-auto">

      <div className="p-5">

        <a
          href="/dashboard"
          className="text-cyan-400 text-sm"
        >
          ← Dashboard
        </a>

        <h1 className="text-3xl font-bold text-cyan-400 mt-4">
          Multibagger Scanner
        </h1>

        <p className="text-slate-400 mt-2">
          Kandidat saham berdasarkan ROE,
          Growth dan Debt Ratio
        </p>

      </div>

      <div className="px-5 pb-10">

        {filtered.map((s: any) => (
          <div
            key={s.kode}
            className="bg-[#0B1324] rounded-3xl p-5 mb-4"
          >
            <div className="flex justify-between">

              <div>

                <div className="text-2xl font-bold">
                  {s.kode}
                </div>

                <div className="text-slate-400 text-sm">
                  Score {s.score}/100
                </div>

              </div>

              <div className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 font-bold">
                {s.rating}
              </div>

            </div>

            <div className="grid grid-cols-3 gap-3 mt-5">

              <div>
                <div className="text-xs text-slate-400">
                  ROE
                </div>

                <div className="font-bold">
                  {Number(s.roe).toFixed(1)}%
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400">
                  Growth
                </div>

                <div className="font-bold">
                  {Number(s.growth).toFixed(1)}%
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400">
                  DER
                </div>

                <div className="font-bold">
                  {Number(s.debt).toFixed(1)}
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>

    </main>
  );
}
