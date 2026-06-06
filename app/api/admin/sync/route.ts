import { NextResponse } from "next/server";
import { sb } from "@/lib/supabase";

export const dynamic = "force-dynamic";

// Reads from the shared Supabase settings table (same as ritel-community-id)
const SETTINGS_KEYS = [
  "pricing",
  "motivasi",
  "ticker",
  "ticker_speed",
  "maintenance_mode",
  "bsjp_min_pkg",
  "bpjs_min_pkg",
];

async function getSettings(): Promise<Record<string, any>> {
  const rows = await sb("GET", "/settings");
  const map: Record<string, any> = {};
  for (const row of rows) {
    map[row.key] = row.value;
  }
  return map;
}

export async function GET() {
  try {
    const settings = await getSettings();
    return NextResponse.json({
      pricing: settings.pricing || [],
      motivasi: settings.motivasi || [],
      ticker: settings.ticker || [],
      ticker_speed: settings.ticker_speed || 32,
      maintenance_mode: settings.maintenance_mode || false,
      bsjp_min_pkg: settings.bsjp_min_pkg || "silver",
      bpjs_min_pkg: settings.bpjs_min_pkg || "silver",
    });
  } catch (e) {
    return NextResponse.json({ pricing: [], motivasi: [], ticker: [], ticker_speed: 32 });
  }
}
