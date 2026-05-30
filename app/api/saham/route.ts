import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const kode = searchParams.get("kode");

  const res = await fetch(
    `URL_DATASECTORS_NANTI`,
    {
      headers: {
        Authorization: `Bearer ${process.env.DATASECTORS_API_KEY}`,
      },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
