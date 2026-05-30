import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const kode = searchParams.get("kode");

  const res = await fetch(
    `https://api.datasectors.com/api/chart-saham/${kode}/daily?from=2024-11-11&to=2026-01-05&limit=30`,
    {
      headers: {
        Authorization: `Bearer ${process.env.DATASECTORS_API_KEY}`,
      },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
