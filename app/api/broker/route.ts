import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.indexalpha.id/stocks/broker-summary?ticker=BBCA&from=2026-01-01&to=2026-01-31&investor=all",
    {
      headers: {
        Authorization: `Bearer ${process.env.INDEXALPHA_API_KEY}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
