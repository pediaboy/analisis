export default async function AnalisaPage({
  params,
}: {
  params: Promise<{ kode: string }>;
}) {
  const { kode } = await params;

  return (
    <div>
      Analisa {kode}
    </div>
  );
}
