"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PKG_COLORS: any = {
  basic: "#38BDF8", silver: "#22D3EE", gold: "#F59E0B",
  pro: "#A855F7", platinum: "#94A3B8", elite: "#FBBF24",
};

function Countdown({ seconds }: { seconds: number }) {
  const [s, setS] = useState(seconds);
  useEffect(() => {
    if (s <= 0) return;
    const t = setTimeout(() => setS(s - 1), 1000);
    return () => clearTimeout(t);
  }, [s]);
  return <>{s}</>;
}

function SuccessContent() {
  const params = useSearchParams();
  const invoiceId = params.get("invoice") || "";
  const paket = params.get("paket") || "";
  const nama = params.get("nama") || "";
  const hp = params.get("hp") || "";
  const token = params.get("token") || "";
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Kalau sudah ada token (paid), auto redirect ke ritelcommunity.web.id/vip
  useEffect(() => {
    if (!token) return;
    setCountdown(8);
    const iv = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(iv);
          window.location.href = `https://ritelcommunity.web.id/vip?token=${encodeURIComponent(token)}`;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(iv);
  }, [token]);

  const copyToken = () => {
    if (!token) return;
    navigator.clipboard.writeText(token).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const accentColor = PKG_COLORS[paket.toLowerCase()] || "#00d4ff";

  return (
    <div className="min-h-screen bg-[#04060f] flex items-center justify-center px-4 py-12">
      <div className="galaxy-stars" />
      <div className="relative z-10 w-full max-w-md">

        {token ? (
          /* ── SUDAH PAID — tampilkan token + redirect ── */
          <div className="card-glass rounded-3xl p-8 border text-center" style={{ borderColor: `${accentColor}33` }}>
            <div className="text-5xl mb-4">🎉</div>
            <h1 className="text-white font-black text-2xl mb-1">Pembayaran Terkonfirmasi!</h1>
            <p className="text-slate-400 text-sm mb-6">Akses VIP kamu sudah aktif, {nama}.</p>

            {/* Token Box */}
            <div className="rounded-2xl p-5 mb-5" style={{ background: `${accentColor}10`, border: `1px solid ${accentColor}30` }}>
              <p className="text-xs font-bold mb-2" style={{ color: accentColor, letterSpacing: "0.1em" }}>TOKEN VIP KAMU</p>
              <div className="flex items-center gap-2 justify-center">
                <span className="font-mono text-xl font-black text-white tracking-widest">{token}</span>
                <button onClick={copyToken} className="p-2 rounded-lg transition-all" style={{ background: copied ? `${accentColor}30` : "rgba(255,255,255,0.05)" }}>
                  {copied ? "✓" : "📋"}
                </button>
              </div>
              <p className="text-xs mt-2" style={{ color: `${accentColor}80` }}>Simpan token ini dengan aman</p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-5 text-sm text-blue-300">
              Otomatis redirect ke VIP dalam <strong className="text-white">{countdown}</strong> detik...
            </div>

            <a href={`https://ritelcommunity.web.id/vip?token=${encodeURIComponent(token)}`}
              className="block w-full py-4 rounded-xl font-black text-sm text-center mb-3"
              style={{ background: `linear-gradient(135deg, ${accentColor}, #7c3aed)`, color: "#fff" }}>
              Masuk VIP Sekarang →
            </a>
            <p className="text-slate-600 text-xs">Token ini juga sudah dikirim via admin. Simpan baik-baik!</p>
          </div>
        ) : (
          /* ── PENDING — menunggu konfirmasi ── */
          <div className="card-glass rounded-3xl p-8 border border-white/10 text-center">
            <div className="text-5xl mb-4">⏳</div>
            <h1 className="text-white font-black text-2xl mb-1">Order Diterima!</h1>
            <p className="text-slate-400 text-sm mb-6">Menunggu konfirmasi pembayaran dari admin.</p>

            {/* Invoice Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-5 text-left">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Invoice</span>
                <span className="font-mono text-sm font-black text-cyan-400">{invoiceId}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Nama</span>
                  <span className="text-white font-semibold">{nama}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Paket</span>
                  <span className="font-bold" style={{ color: accentColor }}>{paket}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">WhatsApp</span>
                  <span className="text-white">{hp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status</span>
                  <span className="text-yellow-400 font-bold">⏳ Menunggu Konfirmasi</span>
                </div>
              </div>
            </div>

            {/* Langkah berikut */}
            <div className="bg-green-500/8 border border-green-500/20 rounded-xl p-4 mb-5 text-left">
              <p className="text-green-400 font-bold text-sm mb-2">📋 Langkah Berikutnya:</p>
              <ol className="text-slate-400 text-xs space-y-1 list-decimal list-inside leading-relaxed">
                <li>Transfer pembayaran ke rekening admin</li>
                <li>Konfirmasi via WhatsApp dengan screenshot bukti transfer</li>
                <li>Admin akan konfirmasi dan kirim token VIP kamu</li>
                <li>Gunakan token untuk masuk ke ritelcommunity.web.id/vip</li>
              </ol>
            </div>

            <a href={`https://wa.me/6282218723401?text=Halo+Admin!+Saya+sudah+transfer+untuk+Paket+${encodeURIComponent(paket)}.+Invoice:+${invoiceId}.+Nama:+${encodeURIComponent(nama)}.+No+WA:+${hp}`}
              target="_blank"
              className="block w-full py-4 rounded-xl font-bold text-sm text-center mb-3"
              style={{ background: "linear-gradient(135deg, #22c55e, #15803d)", color: "#fff" }}>
              Konfirmasi via WhatsApp →
            </a>

            <Link href="/paket" className="text-slate-500 text-sm hover:text-slate-400 transition-colors">
              ← Kembali ke Paket
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#04060f] flex items-center justify-center">
        <div className="text-slate-400 text-sm">Memuat...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
