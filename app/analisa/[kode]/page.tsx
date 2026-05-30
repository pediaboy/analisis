export default async function AnalisaPage({
  params,
}: {
  params: Promise<{ kode: string }>;
}) {
  const { kode } = await params;

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-cyan-400">
        {kode}
      </h1>

      <p className="mt-4">
        Halaman Analisa Saham
      </p>
    </main>
  );
}
