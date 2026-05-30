export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#050B14] text-white max-w-md mx-auto p-5">

      <h1 className="text-3xl font-bold text-cyan-400">
        VIP Dashboard
      </h1>

      <div className="grid gap-4 mt-6">

        <a
  href="/vip/bandar"
  className="bg-[#0B1324] p-5 rounded-2xl"
>
  🏦 Bandarmologi IDX
</a>

        <a
          href="/vip/news"
          className="bg-[#0B1324] p-5 rounded-2xl"
        >
          📰 News Scanner
        </a>

        <a
          href="/vip/watchlist"
          className="bg-[#0B1324] p-5 rounded-2xl"
        >
          🔥 Watchlist Premium
        </a>

      </div>

    </main>
  );
}
