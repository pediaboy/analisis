import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      {
        title:
          "TLKM Catat Pertumbuhan Laba Positif",
      },
      {
        title:
          "BBCA Umumkan Kinerja Kuartal Terbaru",
      },
      {
        title:
          "ANTM Fokus Ekspansi Hilirisasi",
      },
    ],
  });
}
