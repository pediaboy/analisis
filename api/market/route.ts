// app/api/market/route.ts
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Wajib biar Vercel ga nyimpen cache basi

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol');

  if (!symbol) {
    return NextResponse.json({ error: 'Kode emiten wajib diisi' }, { status: 400 });
  }

  try {
    // Tembak server langsung pake API v8 (Jalur ini update per menit/detik)
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}.JK?region=ID&lang=id-ID&interval=1m&ts=${Date.now()}`;
    
    const res = await fetch(url, { 
      // Wajib no-store biar datanya murni ditarik fresh detik itu juga
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json'
      }
    });

    const data = await res.json();
    
    if (data.chart?.result?.[0]?.meta?.regularMarketPrice) {
      const price = data.chart.result[0].meta.regularMarketPrice;
      return NextResponse.json({ price });
    } else {
      return NextResponse.json({ error: 'Saham tidak ditemukan' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Gagal koneksi ke server bursa' }, { status: 500 });
  }
}
