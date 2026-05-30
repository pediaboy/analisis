export default async function BandarPage() {
  const res = await fetch(
    "https://analisis-rho.vercel.app/api/broker",
    {
      cache: "no-store",
    }
  );

  const json = await res.json();

  const brokers = json?.data || [];

  const totalBuy = brokers.reduce(
    (sum: number, b: any) =>
      sum + (b.buy_value || 0),
    0
  );

  const totalSell = brokers.reduce(
    (sum: number, b: any) =>
      sum + (b.sell_value || 0),
    0
  );

  const netBuy = totalBuy - totalSell;

  const score = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        (totalBuy / (totalBuy + totalSell)) * 100
      )
    )
  );

  const status =
    netBuy > 0
      ? "AKUMULASI"
      : "DISTRIBUSI";

  const topBuy = [...brokers]
    .sort((a: any, b: any) =>
      b.buy_value - a.buy_value
    )
    .slice(0, 5);

  const topSell = [...brokers]
    .sort((a: any, b: any) =>
      b.sell_value - a.sell_value
    )
    .slice(0, 5);

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
          Bandarmologi IDX
        </h1>

      </div>

      {/* SCORE */}

      <div className="px-5">

        <div className="rounded-3xl p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">

          <div className="text-cyan-400 text-xs">
            SMART MONEY SCORE
          </div>

          <div className="text-6xl font-bold mt-2">
            {score}
          </div>

          <div className="text-slate-400">
            dari 100
          </div>

          <div
            className={`mt-4 inline-block px-4 py-2 rounded-xl font-semibold ${
              status === "AKUMULASI"
                ? "bg-green-500/10 text-green-400"
                : "bg-red-500/10 text-red-400"
            }`}
          >
            {status}
          </div>

        </div>

      </div>

      {/* NET BUY */}

      <div className="px-5 mt-5">

        <div className="grid grid-cols-2 gap-3">

          <div className="bg-[#0B1324] rounded-2xl p-4">

            <div className="text-xs text-slate-400">
              TOTAL BUY
            </div>

            <div className="text-xl font-bold mt-2 text-green-400">
              Rp {(totalBuy / 1000000000000).toFixed(1)} T
            </div>

          </div>

          <div className="bg-[#0B1324] rounded-2xl p-4">

            <div className="text-xs text-slate-400">
              TOTAL SELL
            </div>

            <div className="text-xl font-bold mt-2 text-red-400">
              Rp {(totalSell / 1000000000000).toFixed(1)} T
            </div>

          </div>

        </div>

      </div>

      {/* TOP BUY */}

      <div className="px-5 mt-5">

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-green-400">
            🟢 Top Buy Broker
          </h2>

          <div className="mt-4 space-y-3">

            {topBuy.map((broker: any, index: number) => (
              <div
                key={index}
                className="flex justify-between"
              >
                <span>
                  {index + 1}. {broker.code}
                </span>

                <span>
                  {(broker.buy_value / 1000000000000).toFixed(1)} T
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* TOP SELL */}

      <div className="px-5 mt-5 mb-10">

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-red-400">
            🔴 Top Sell Broker
          </h2>

          <div className="mt-4 space-y-3">

            {topSell.map((broker: any, index: number) => (
              <div
                key={index}
                className="flex justify-between"
              >
                <span>
                  {index + 1}. {broker.code}
                </span>

                <span>
                  {(broker.sell_value / 1000000000000).toFixed(1)} T
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}
