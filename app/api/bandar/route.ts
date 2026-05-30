import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const kode =
    searchParams.get("kode") || "TLKM";

  const tradeType =
    searchParams.get("type") || "buy";

  const res = await fetch(
    `https://api.datasectors.com/api/stocks/investors/trade-activity?slug=${kode}&limit=20&skip=0&trade_type=${tradeType}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.DATASECTORS_API_KEY}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
