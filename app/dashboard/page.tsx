export default async function BandarPage() {
  const res = await fetch(
    "https://analisis-rho.vercel.app/api/broker",
    {
      cache: "no-store",
    }
  );

  const json = await res.json();

  const brokers = json?.data || [];

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

      <div className="px-5 pb-10">

        <div className="bg-[#0B1324] rounded-3xl p-5">

          <h2 className="font-bold text-cyan-400">
            Broker Summary
          </h2>

          <div className="mt-4 space-y-3">

            {brokers.map((broker: any, index: number) => (
              <div
                key={index}
                className="flex justify-between border-b border-white/5 pb-2"
              >
                <span>
                  {broker.code}
                </span>

                <span>
                  Buy:
                  {" "}
                  {Number(
                    broker.buy_value || 0
                  ).toLocaleString()}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}
