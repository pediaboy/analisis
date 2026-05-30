import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const kode = searchParams.get("kode");

  const res = await fetch(
    `ds_live_73YIBWb3U-lFORtGdYhEdMvCWxhweJvf`,
    {
      headers: {
        Authorization: `Bearer ${process.env.DATASECTORS_API_KEY}`,
      },
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
