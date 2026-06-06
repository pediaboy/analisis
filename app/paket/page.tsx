"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ── Tilt Card ──────────────────────────────────────────────────
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div ref={ref} className={`tilt-card ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

// ── Flash Timer ────────────────────────────────────────────────
function useFlashTimer(endTime: string | null) {
  const [timeLeft, setTimeLeft] = useState<{ h: number; m: number; s: number } | null>(null);
  const [expired, setExpired] = useState(false);
  useEffect(() => {
    if (!endTime) { setTimeLeft(null); setExpired(false); return; }
    const calc = () => {
      const diff = new Date(endTime).getTime() - Date.now();
      if (diff <= 0) { setExpired(true); setTimeLeft(null); return; }
      setTimeLeft({ h: Math.floor(diff / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) });
    };
    calc();
    const iv = setInterval(calc, 1000);
    return () => clearInterval(iv);
  }, [endTime]);
  return { timeLeft, expired };
}

// ── Default Packages ───────────────────────────────────────────
const defaultPackages = [
  {
    id: "basic", name: "Basic", price: 100000, priceLabel: "Rp 100.000", period: "/bulan",
    color: "blue", popular: false, isElite: false, hasAI: false, flashSale: null,
    description: "Cocok untuk pemula yang ingin mulai berinvestasi saham dengan panduan dasar dan sinyal harian.",
    features: ["Sinyal saham harian", "Berita pasar realtime", "Chart IHSG live", "Modul dasar investasi saham", "Grup WA Basic"],
  },
  {
    id: "silver", name: "Silver", price: 250000, priceLabel: "Rp 250.000", period: "/bulan",
    color: "cyan", popular: false, isElite: false, hasAI: false, flashSale: null,
    description: "Untuk investor yang ingin memahami fundamental dan mulai screening saham potensial secara mandiri.",
    features: ["Semua fitur Basic", "Analisis fundamental mendalam", "Screening saham bagger potensial", "Risk & money management", "Grup WA Silver"],
  },
  {
    id: "gold", name: "Gold", price: 500000, priceLabel: "Rp 500.000", period: "/bulan",
    color: "gold", popular: true, isElite: false, hasAI: false, flashSale: null,
    description: "Paket terlaris! Lengkap dengan sinyal premium, analisis teknikal mendalam, dan panduan psikologi trading.",
    features: ["Semua fitur Silver", "Sinyal entry, antri, TP, SL premium", "Analisis teknikal & bandarmologi", "Modul psikologi & emosi trading", "Potensi saham multi-bagger pilihan", "Grup WA Gold Eksklusif"],
  },
  {
    id: "pro", name: "Pro", price: 750000, priceLabel: "Rp 750.000", period: "/bulan",
    color: "purple", popular: false, isElite: false, hasAI: true, flashSale: null,
    description: "Dilengkapi AI Agent personal untuk bantu analisis, watchlist, dan keputusan trading kapan saja.",
    features: ["Semua fitur Gold", "AI Agent trading assistant 24/7", "Watchlist saham personal", "Laporan mingguan eksklusif Pro", "Priority support", "Grup WA Pro VIP"],
  },
  {
    id: "platinum", name: "Platinum", price: 900000, priceLabel: "Rp 900.000", period: "/bulan",
    color: "platinum", popular: false, isElite: false, hasAI: true, flashSale: null,
    description: "Pengalaman investasi terdepan dengan AI Agent canggih, konsultasi personal, dan sinyal 24/7.",
    features: ["Semua fitur Pro", "AI Agent + analisis portofolio", "Konsultasi 1-on-1 dengan analis senior", "Akses penuh semua modul VIP", "Sinyal real-time 24/7 tanpa delay", "Grup WA Platinum Elite"],
  },
  {
    id: "elite", name: "Elite", price: 1000000, priceLabel: "Rp 1.000.000", period: "/bulan",
    color: "elite", popular: false, isElite: true, hasAI: true, flashSale: null,
    description: "Paket paling eksklusif. Mentoring langsung, AI Agent Elite, portofolio management, dan akses penuh semua fitur.",
    features: ["Semua fitur Platinum", "AI Agent Elite terdepan", "Portofolio management personal", "Akses mentor langsung intensif", "Event & webinar eksklusif Elite", "Laporan harian personal", "Grup WA Elite Master"],
  },
];

const colorMap: any = {
  blue:     { border: "border-blue-500/40",     glow: "shadow-blue-500/20",     badge: "bg-blue-500",     accent: "text-blue-400",     bg: "from-blue-600 to-blue-800" },
  cyan:     { border: "border-cyan-500/40",      glow: "shadow-cyan-500/20",     badge: "bg-cyan-500",     accent: "text-cyan-400",     bg: "from-cyan-600 to-blue-700" },
  gold:     { border: "border-yellow-500/40",    glow: "shadow-yellow-500/20",   badge: "bg-yellow-500",   accent: "text-yellow-400",   bg: "from-yellow-500 to-orange-600" },
  purple:   { border: "border-purple-500/40",    glow: "shadow-purple-500/20",   badge: "bg-purple-500",   accent: "text-purple-400",   bg: "from-purple-600 to-indigo-700" },
  platinum: { border: "border-slate-400/40",     glow: "shadow-slate-400/20",    badge: "bg-slate-400",    accent: "text-slate-300",    bg: "from-slate-400 to-slate-600" },
  elite:    { border: "border-yellow-400/60",    glow: "shadow-yellow-400/30",   badge: "bg-yellow-400",   accent: "text-yellow-400",   bg: "from-yellow-400 via-yellow-500 to-orange-500" },
};

// ── Motivasi Quotes ────────────────────────────────────────────
const DEFAULT_QUOTES = [
  { text: "Jangan takut untuk belajar — satu langkah kecil hari ini adalah investasi terbesar untuk masa depanmu.", icon: "🌟" },
  { text: "Pasar modal adalah tempat paling adil — siapa yang paling siap, dia yang paling untung.", icon: "📈" },
  { text: "Cari mentor yang bisa membantu dirimu memahami bidang ini. Pengalaman mereka bisa memangkas kurva belajarmu bertahun-tahun.", icon: "🎯" },
  { text: "Bukan soal seberapa besar modal yang kamu punya — tapi seberapa besar pengetahuan yang kamu miliki.", icon: "💡" },
  { text: "Konsistensi dalam belajar lebih berharga dari satu keberuntungan besar yang tidak bisa diulang.", icon: "🔥" },
  { text: "Investor sukses bukan mereka yang tidak pernah rugi, tapi mereka yang belajar dari setiap kesalahan.", icon: "💎" },
];

const ICONS = ["🌟", "📈", "🎯", "💡", "🔥", "💎", "⚡", "🚀"];

function MotivQuotes({ list }: { list: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {list.map((q, i) => (
        <div key={i} className="card-glass rounded-xl p-5 border border-white/8 hover:border-yellow-500/20 transition-all">
          <div className="text-2xl mb-3">{q.icon}</div>
          <p className="text-slate-300 text-sm leading-relaxed italic">"{q.text}"</p>
        </div>
      ))}
    </div>
  );
}

// ── Order Modal ────────────────────────────────────────────────
const PAYMENT_METHODS = [
  { id: "dana", label: "DANA", icon: "💙" },
  { id: "ovo", label: "OVO", icon: "💜" },
  { id: "bca", label: "BCA", icon: "🏦" },
  { id: "mandiri", label: "Mandiri", icon: "🏦" },
  { id: "bni", label: "BNI", icon: "🏦" },
  { id: "bri", label: "BRI", icon: "🏦" },
  { id: "gopay", label: "GoPay", icon: "🟢" },
  { id: "shopee", label: "ShopeePay", icon: "🟠" },
  { id: "seabank", label: "SeaBank", icon: "🌊" },
];

function OrderModal({ pkg, onClose }: { pkg: any; onClose: () => void }) {
  const [step, setStep] = useState<"form" | "confirm" | "done">("form");
  const [nama, setNama] = useState("");
  const [hp, setHp] = useState("");
  const [metode, setMetode] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [invoiceId, setInvoiceId] = useState("");
  const [err, setErr] = useState("");

  const fs = pkg.flashSale;
  const { expired } = useFlashTimer(fs?.endTime || null);
  const activeFlash = fs && !expired;
  const finalPrice = activeFlash && fs?.rawPrice ? fs.rawPrice : pkg.price;
  const finalPriceLabel = activeFlash && fs?.price ? fs.price : pkg.priceLabel;

  const submit = async () => {
    if (!nama.trim() || !hp.trim() || !metode) { setErr("Lengkapi semua data."); return; }
    setLoading(true); setErr("");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, hp, paket: pkg.name, metode, harga: finalPrice, note }),
      });
      const d = await res.json();
      if (d.success) { setInvoiceId(d.id); setStep("done"); }
      else setErr(d.error || "Gagal submit order.");
    } catch { setErr("Koneksi error."); }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="w-full sm:max-w-md card-glass rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        style={{ border: "1px solid rgba(0,212,255,0.2)", boxShadow: "0 0 60px rgba(0,212,255,0.1)" }}>

        {step === "done" ? (
          <div className="text-center py-4">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-white font-black text-xl mb-2">Order Diterima!</h3>
            <div className="bg-cyan-500/10 border border-cyan-500/25 rounded-xl p-4 mb-4">
              <p className="text-slate-400 text-xs mb-1">Invoice ID</p>
              <p className="text-cyan-400 font-black text-lg">{invoiceId}</p>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Admin akan konfirmasi via WhatsApp ke <strong className="text-white">{hp}</strong> dalam 5–15 menit.
            </p>
            <a href={`https://wa.me/6282218723401?text=Halo+Admin!+Saya+baru+order+paket+${encodeURIComponent(pkg.name)}+dengan+ID+${invoiceId}.+Nama:+${encodeURIComponent(nama)}.+Metode:+${metode}.`}
              target="_blank"
              className="block w-full py-3 rounded-xl font-bold text-sm text-center mb-3"
              style={{ background: "linear-gradient(135deg,#22c55e,#15803d)", color: "#fff" }}>
              Konfirmasi via WhatsApp →
            </a>
            <button onClick={onClose} className="text-slate-500 text-sm">Tutup</button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-slate-400 text-xs mb-1">Order Paket</p>
                <h3 className="text-white font-black text-xl">{pkg.name}</h3>
                <p className="text-cyan-400 font-black text-2xl">{finalPriceLabel}<span className="text-slate-400 text-sm font-normal">{pkg.period}</span></p>
              </div>
              <button onClick={onClose} className="text-slate-500 hover:text-white text-2xl leading-none">×</button>
            </div>

            {err && <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-3 mb-4 text-sm">{err}</div>}

            <div className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block font-semibold">Nama Lengkap</label>
                <input value={nama} onChange={e => setNama(e.target.value)} placeholder="Nama kamu"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-cyan-500/40 transition-colors" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block font-semibold">Nomor WhatsApp</label>
                <input value={hp} onChange={e => setHp(e.target.value)} placeholder="08xxxxxxxxxx" type="tel"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-cyan-500/40 transition-colors" />
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block font-semibold">Metode Pembayaran</label>
                <div className="grid grid-cols-3 gap-2">
                  {PAYMENT_METHODS.map(m => (
                    <button key={m.id} onClick={() => setMetode(m.label)}
                      className={`py-2.5 rounded-xl text-xs font-bold border transition-all flex flex-col items-center gap-1 ${metode === m.label ? "border-cyan-500/60 bg-cyan-500/15 text-cyan-300" : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20"}`}>
                      <span className="text-base">{m.icon}</span>
                      <span>{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-400 mb-1.5 block font-semibold">Catatan (opsional)</label>
                <textarea value={note} onChange={e => setNote(e.target.value)} rows={2} placeholder="Ada yang perlu disampaikan?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none resize-none focus:border-cyan-500/40 transition-colors" />
              </div>
            </div>

            <button onClick={submit} disabled={loading}
              className="w-full mt-5 py-4 rounded-xl font-black text-sm transition-all"
              style={{ background: loading ? "rgba(0,212,255,0.1)" : "linear-gradient(135deg,#00d4ff,#7c3aed)", color: "#fff", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Memproses..." : `Pesan Paket ${pkg.name} — ${finalPriceLabel}`}
            </button>
            <p className="text-center text-slate-600 text-xs mt-3">Admin akan konfirmasi via WhatsApp setelah pembayaran</p>
          </>
        )}
      </div>
    </div>
  );
}

// ── Paket Card ─────────────────────────────────────────────────
function PaketCard({ pkg, onOrder }: { pkg: any; onOrder: (pkg: any) => void }) {
  const c = colorMap[pkg.color] || colorMap.blue;
  const fs = pkg.flashSale;
  const { timeLeft, expired } = useFlashTimer(fs?.endTime || null);
  const activeFlash = fs && !expired;

  return (
    <TiltCard>
      <div className={`relative card-glass rounded-2xl p-6 border-2 ${c.border} hover:shadow-xl ${c.glow} transition-all duration-300 ${pkg.popular ? "ring-2 ring-yellow-500/50" : ""} ${pkg.isElite ? "ring-2 ring-yellow-400/70" : ""} h-full flex flex-col`}>
        {pkg.popular && !pkg.isElite && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-yellow-500 text-[#04060f] text-xs font-black px-4 py-1 rounded-full">TERLARIS</span>
          </div>
        )}
        {pkg.isElite && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-yellow-400 text-[#04060f] text-xs font-black px-4 py-1 rounded-full">ELITE</span>
          </div>
        )}
        {pkg.hasAI && (
          <div className="absolute top-4 right-4">
            <span className="text-xs bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 px-2 py-1 rounded-full">AI</span>
          </div>
        )}

        <div className="flex-1">
          <div className={`text-2xl font-black ${c.accent} mb-2`}>{pkg.name}</div>

          {activeFlash ? (
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="flash-badge">FLASH SALE {fs.discount}</span>
                {timeLeft && (
                  <div className="flex items-center gap-0.5 text-xs">
                    {[{ v: timeLeft.h, l: "J" }, { v: timeLeft.m, l: "M" }, { v: timeLeft.s, l: "D" }].map(({ v, l }) => (
                      <div key={l} className="bg-red-500/20 border border-red-500/30 rounded px-1 py-0.5 text-center min-w-[22px]">
                        <div className="text-red-300 font-black font-mono text-xs leading-none">{String(v).padStart(2, "0")}</div>
                        <div className="text-red-400/60 text-[8px] leading-none">{l}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="text-slate-500 line-through text-sm">{pkg.priceLabel}</div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-white">{(fs.price || "").toString().replace(/^Rp\s*/, "").trim()}</span>
                <span className="text-slate-400 text-sm">{pkg.period}</span>
              </div>
              <div className="text-xs text-green-400 font-bold">Hemat {fs.discount}!</div>
            </div>
          ) : (
            <div className="flex items-baseline gap-1 mb-3">
              <span className="text-3xl font-black text-white">{(pkg.priceLabel || "").replace(/^Rp\s*/, "")}</span>
              <span className="text-slate-400 text-sm">{pkg.period}</span>
            </div>
          )}

          <p className="text-slate-400 text-sm mb-4 leading-relaxed">{pkg.description}</p>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2 mb-4 text-xs text-green-300">
            Grup WA <strong>{pkg.name}</strong> — komunitas eksklusif
          </div>

          <ul className="space-y-2 mb-6">
            {pkg.features.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className={`${c.accent} mt-0.5 flex-shrink-0`}>✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={() => onOrder(pkg)}
          className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 active:scale-95 bg-gradient-to-r ${c.bg} text-white shadow-lg`}>
          Order Paket {pkg.name} →
        </button>
      </div>
    </TiltCard>
  );
}

// ── Main Page ──────────────────────────────────────────────────
export default function PaketPage() {
  const [packages, setPackages] = useState(defaultPackages);
  const [motivList, setMotivList] = useState(DEFAULT_QUOTES);
  const [orderPkg, setOrderPkg] = useState<any>(null);

  useEffect(() => {
    fetch("/api/admin/sync")
      .then(r => r.json())
      .then(d => {
        if (d.pricing && d.pricing.length > 0) {
          const merged = defaultPackages.map(def => {
            const admin = d.pricing.find((p: any) => p.id === def.id);
            if (admin) return {
              ...def,
              priceLabel: admin.priceLabel || def.priceLabel,
              period: admin.period || def.period,
              description: admin.description || def.description,
              features: admin.features?.length ? admin.features : def.features,
              flashSale: admin.flashSale || null,
            };
            return def;
          });
          setPackages(merged);
        }
        if (d.motivasi && d.motivasi.length > 0) {
          setMotivList(d.motivasi.map((m: any, i: number) => ({ text: m.text, icon: ICONS[i % ICONS.length] })));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#04060f] pt-6 pb-20 px-4">
      <div className="galaxy-stars" />
      {orderPkg && <OrderModal pkg={orderPkg} onClose={() => setOrderPkg(null)} />}

      <div className="relative z-10">
        {/* Nav */}
        <div className="max-w-7xl mx-auto mb-8">
          <Link href="/" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
            ← Kembali ke Beranda
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6 text-sm text-cyan-300">
              Semua Paket VIP
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
              Pilih Paket <span className="gradient-text">Terbaik</span> Anda
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              6 pilihan paket dari Rp 100.000 hingga Rp 1.000.000 — sesuai kebutuhan dan level investasi Anda
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => <PaketCard key={pkg.id} pkg={pkg} onOrder={setOrderPkg} />)}
          </div>

          {/* Motivasi Section */}
          <div className="mt-16 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-white mb-2">
                Kenapa Harus Mulai <span className="gradient-text">Sekarang?</span>
              </h2>
              <p className="text-slate-500 text-sm">Dari komunitas yang sudah merasakan hasilnya</p>
            </div>
            <MotivQuotes list={motivList} />
          </div>

          {/* Comparison Table */}
          <div className="mt-4 card-glass rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-cyan-500/20">
              <h2 className="text-xl font-black text-white">Perbandingan Fitur</h2>
              <p className="text-slate-500 text-sm mt-1">Lihat detail apa saja yang termasuk di setiap paket</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cyan-500/10">
                    <th className="text-left px-6 py-3 text-slate-400 font-medium">Fitur</th>
                    {packages.map(p => (
                      <th key={p.id} className="px-4 py-3 text-center text-slate-300 font-bold whitespace-nowrap">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Sinyal Harian",         "✓","✓","✓","✓","✓","✓"],
                    ["Berita Realtime",        "✓","✓","✓","✓","✓","✓"],
                    ["Chart IHSG Live",        "✓","✓","✓","✓","✓","✓"],
                    ["Modul Fundamental",      "–","✓","✓","✓","✓","✓"],
                    ["Saham Bagger",           "–","✓","✓","✓","✓","✓"],
                    ["Sinyal Premium TP/SL",   "–","–","✓","✓","✓","✓"],
                    ["Bandarmologi",           "–","–","✓","✓","✓","✓"],
                    ["Psikologi Trading",      "–","–","✓","✓","✓","✓"],
                    ["AI Agent",               "–","–","–","✓","✓","✓"],
                    ["Konsultasi 1-on-1",      "–","–","–","–","✓","✓"],
                    ["Sinyal 24/7 No Delay",   "–","–","–","–","✓","✓"],
                    ["Mentor Langsung",        "–","–","–","–","–","✓"],
                    ["Portfolio Management",   "–","–","–","–","–","✓"],
                    ["Grup WA",                "✓","✓","✓","✓","✓","✓"],
                  ].map(([feature, ...vals]) => (
                    <tr key={feature as string} className="border-b border-cyan-500/5 hover:bg-cyan-500/3 transition-colors">
                      <td className="px-6 py-3 text-slate-300">{feature}</td>
                      {vals.map((v, i) => (
                        <td key={i} className={`px-4 py-3 text-center font-bold text-base ${v === "✓" ? "text-green-400" : "text-slate-700"}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-400 text-sm mb-4">Ada pertanyaan? Hubungi kami langsung!</p>
            <a href="https://wa.me/6282218723401" target="_blank" className="btn-gold inline-block px-10 py-4 rounded-xl font-black text-base">
              Chat dengan Admin
            </a>
          </div>

          {/* Footer Brand */}
          <div className="text-center mt-12 pt-8 border-t border-white/5">
            <p className="text-slate-600 text-xs">
              © 2026 Ritel Community · ritelcommunity.web.id
            </p>
            <p className="text-slate-700 text-xs mt-1">THIRAFI THARIQ AL IDRIS · @elthoriqqqq_</p>
          </div>
        </div>
      </div>
    </div>
  );
}
