import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const kode = searchParams.get("kode");

  const res = await fetch(
    `https://api.datasectors.com/api/stocks/v2/equities?symbol=${kode}&market=id-id`,
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
