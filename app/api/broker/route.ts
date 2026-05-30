import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      {
        code: "YP",
        buy_value: 12500000000,
      },
      {
        code: "CC",
        buy_value: 8200000000,
      },
      {
        code: "AK",
        buy_value: 6900000000,
      },
    ],
  });
}
