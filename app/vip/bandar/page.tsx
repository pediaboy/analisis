export default async function BandarPage() {
  const res = await fetch(
    "https://analisis-rho.vercel.app/api/broker",
    {
      cache: "no-store",
    }
  );

  const json = await res.json();

  const brokers = json?.data || [];

  const topBuy = [...brokers]
    .sort((a, b) => b.buy_value - a.buy_value)
    .slice(0, 10);

  const topSell = [...brokers]
    .sort((a, b) => b.sell_value - a.sell_value)
    .slice(0, 10);

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

        <p className="text-slate-400 mt-2">
          Broker Summary Premium
        </p>

      </div>

      {/* TOP BUY */}

      <div className="px-5">

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            🟢 Top Buy Broker
          </h2>

          <div className="mt-4 space-y-3">

            {topBuy.map((b: any, i: number) => (
              <div
                key={i}
                className="flex justify-between"
              >
                <span>{b.code}</span>

                <span>
                  Rp {(b.buy_value / 1000000000).toFixed(1)} B
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* TOP SELL */}

      <div className="px-5 mt-5">

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-red-400">
            🔴 Top Sell Broker
          </h2>

          <div className="mt-4 space-y-3">

            {topSell.map((b: any, i: number) => (
              <div
                key={i}
                className="flex justify-between"
              >
                <span>{b.code}</span>

                <span>
                  Rp {(b.sell_value / 1000000000).toFixed(1)} B
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* SMART MONEY */}

      <div className="px-5 mt-5 mb-10">

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            💰 Smart Money
          </h2>

          <p className="mt-4 text-slate-300">
            Broker dengan nilai beli terbesar
            menunjukkan area akumulasi institusi.
          </p>

        </div>

      </div>

    </main>
  );
}
