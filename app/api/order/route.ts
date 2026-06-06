import { NextResponse } from "next/server";
import { sb } from "@/lib/supabase";

export const dynamic = "force-dynamic";

function genInvoice() {
  return "INV-" + Math.floor(Math.random() * 90000000 + 10000000);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nama, hp, paket, metode, harga, note } = body;

    if (!nama || !hp || !paket || !metode || !harga) {
      return NextResponse.json({ success: false, error: "Data tidak lengkap" }, { status: 400 });
    }

    const id = genInvoice();
    const created_at = new Date().toISOString();

    const order = { id, nama, hp, paket, metode, harga, note: note || "", status: "pending", created_at };

    // Load existing orders_data from settings
    const rows = await sb("GET", "/settings?key=eq.orders_data&limit=1");
    let orders: any[] = rows[0]?.value || [];
    orders = [order, ...orders];

    // Upsert back
    await sb("POST", "/settings",
      { key: "orders_data", value: orders, updated_at: created_at },
      { "Prefer": "resolution=merge-duplicates,return=representation" }
    );

    return NextResponse.json({ success: true, id });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message }, { status: 500 });
  }
}
