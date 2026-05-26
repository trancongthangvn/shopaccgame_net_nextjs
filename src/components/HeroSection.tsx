"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ArrowUpRight } from "lucide-react";
import { listings, imgFor } from "@/data/listings";

const hotTerms = ["LMHT Kim Cương", "Free Fire Thách Đấu", "PUBG Conqueror", "Genshin AR55", "Valorant Radiant"];

// Pretend live activity feed — refreshes every few seconds to make the
// page feel inhabited instead of static. Items rotate so the ticker is
// never empty.
const activitySeed = [
  { name: "Anh Minh",   action: "vừa mua",   target: "Acc LMHT Kim Cương 1", price: "850K", t: "1 phút trước" },
  { name: "Thanh Vũ",   action: "đăng tin",  target: "Acc PUBG Conqueror",   price: "1.2tr", t: "3 phút trước" },
  { name: "Hoàng Nam",  action: "vừa mua",   target: "Acc Genshin AR55",     price: "2.5tr", t: "5 phút trước" },
  { name: "Quỳnh Anh",  action: "đăng tin",  target: "Acc Valorant Radiant", price: "3.2tr", t: "8 phút trước" },
  { name: "Đức Mạnh",   action: "vừa mua",   target: "Acc Liên Quân HT",     price: "480K", t: "12 phút trước" },
];

export default function HeroSection() {
  const [q, setQ] = useState("");
  const [tick, setTick] = useState(0);
  const router = useRouter();

  // Rotate activity feed every 4s.
  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % activitySeed.length), 4000);
    return () => clearInterval(id);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/tim-kiem/${q.trim() ? `?q=${encodeURIComponent(q.trim())}` : ""}`);
  };

  // The featured listing — pin to the highest-value Genshin/Valorant. The other
  // three trending tiles round out the bento.
  const featured = listings.find(l => l.id === "VAL3344") ?? listings[0];
  const trending = listings.filter(l => l.id !== featured.id).slice(0, 3);

  return (
    <section className="relative overflow-hidden">
      {/* Top meta strip: date · live count · region — pretends to be terminal status bar */}
      <div className="border-b" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between text-2xs font-mono-ed uppercase tracking-[0.18em]" style={{ color: "var(--fg3)" }}>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">VN · HÀ NỘI</span>
            <span>{new Date().toLocaleDateString("vi-VN", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex items-center gap-1.5"><span className="live-dot" /> 230 đang online</span>
            <span style={{ color: "var(--fg4)" }}>·</span>
            <span>48,000+ user</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 lg:pt-16 pb-10">

        {/* ──────────── Bento grid: 12 cols ──────────── */}
        <div className="grid grid-cols-12 gap-4 lg:gap-5">

          {/* LEFT — H1 + search + CTAs (cols 1-7 desktop) */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono-ed text-sm" style={{ color: "var(--fg3)" }}>—</span>
                <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--fg2)" }}>
                  Sàn đăng tin acc game số 1 Việt Nam
                </span>
              </div>

              <h1 className="text-display mb-6" style={{ color: "var(--fg)", lineHeight: 0.95 }}>
                Mua bán acc<br/>
                <span style={{ color: "var(--fg3)" }}>không cần lo lắng.</span><br/>
                <span className="grad-orange">Minh bạch, giá thật.</span>
              </h1>

              <p className="text-base sm:text-lg leading-relaxed max-w-lg mb-7" style={{ color: "var(--fg2)" }}>
                Theo dõi giá thực tế. Xem lịch sử giao dịch người bán. Ra quyết định mua như một marketplace thực thụ — không phải một group Facebook.
              </p>
            </div>

            <div>
              {/* Search */}
              <form onSubmit={submit} className="flex items-center gap-2 rounded-xl pl-4 pr-2 h-14 mb-4"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <Search className="w-5 h-5 flex-shrink-0" style={{ color: "var(--fg3)" }} />
                <input
                  type="text" value={q} onChange={e => setQ(e.target.value)}
                  placeholder="Tìm acc, game, hoặc ID tin đăng…"
                  className="flex-1 bg-transparent outline-none text-base"
                  style={{ color: "var(--fg)" }}
                  aria-label="Tìm kiếm"
                />
                <button type="submit" className="h-10 px-5 rounded-lg text-sm font-bold text-white btn-primary cursor-pointer">Tìm</button>
              </form>

              {/* Hot keyword chips */}
              <div className="flex flex-wrap items-center gap-2 mb-7">
                <span className="text-2xs font-mono-ed uppercase tracking-[0.15em]" style={{ color: "var(--fg3)" }}>Hot</span>
                {hotTerms.map(t => (
                  <Link key={t} href={`/tim-kiem/?q=${encodeURIComponent(t)}`}
                    className="text-xs font-medium px-3 py-1 rounded-full transition-colors"
                    style={{ background: "var(--scrim)", border: "1px solid var(--border)", color: "var(--fg2)" }}
                  >{t}</Link>
                ))}
              </div>

              {/* CTA buttons + numeric stats */}
              <div className="flex items-center gap-4 flex-wrap">
                <Link href="/dang-tin/" className="px-6 py-3 rounded-xl text-sm font-bold text-white btn-rose cursor-pointer">
                  Đăng tin miễn phí
                </Link>
                <Link href="/tim-kiem/" className="px-6 py-3 rounded-xl text-sm font-semibold btn-ghost cursor-pointer" style={{ color: "var(--fg2)" }}>
                  Khám phá thị trường
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT — featured listing card (cols 8-12 desktop) */}
          <Link href={`/acc/${featured.id}/`} className="col-span-12 lg:col-span-5 group">
            <article className="card overflow-hidden h-full" style={{ borderColor: "var(--border)" }}>
              <div className="relative h-64 sm:h-72 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgFor(featured.id, 900, 600)} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.65))" }} />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="font-mono-ed text-2xs px-2 py-0.5 rounded uppercase tracking-wide" style={{ background: "rgba(0,0,0,0.55)", color: "white" }}>★ Featured</span>
                  <span className="badge badge-hot">Hot</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-white/80 mb-0.5">{featured.game} · {featured.rank}</div>
                    <div className="font-mono-ed text-3xl font-semibold text-white leading-none">{featured.price}<span className="text-base">đ</span></div>
                  </div>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.55)" }}>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold leading-snug mb-3 line-clamp-2" style={{ color: "var(--fg)" }}>{featured.title}</h3>
                <div className="font-mono-ed flex items-center gap-3 text-2xs" style={{ color: "var(--fg3)" }}>
                  <span>#{featured.id}</span>
                  <span style={{ color: "var(--fg4)" }}>·</span>
                  <span>{featured.watchers} đang xem</span>
                  <span style={{ color: "var(--fg4)" }}>·</span>
                  <span style={{ color: (featured.priceTrend7d ?? 0) >= 0 ? "#10b981" : "#f43f5e" }}>
                    {(featured.priceTrend7d ?? 0) >= 0 ? "▲" : "▼"} {Math.abs(featured.priceTrend7d ?? 0).toFixed(1)}% / 7d
                  </span>
                </div>
              </div>
            </article>
          </Link>

          {/* ROW 2 — 3 trending tiles (col 1-7 grouped) + activity feed (col 8-12) */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-3 gap-3">
            {trending.map((l, i) => (
              <Link key={l.id} href={`/acc/${l.id}/`} className="card overflow-hidden group">
                <div className="relative h-24 sm:h-28 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imgFor(l.id, 300, 200)} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.6))" }} />
                  <div className="absolute top-1.5 left-1.5 font-mono-ed text-2xs font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>#{(i + 1).toString().padStart(2, "0")}</div>
                  <div className="absolute bottom-1.5 left-1.5 right-1.5">
                    <div className="text-2xs text-white/80 truncate">{l.game}</div>
                    <div className="font-mono-ed text-sm font-semibold text-white">{l.price}đ</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ACTIVITY FEED — terminal-style */}
          <div className="col-span-12 lg:col-span-5 card p-4 overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <span className="live-dot" />
              <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--fg2)" }}>Live activity</span>
              <span className="ml-auto font-mono-ed text-2xs" style={{ color: "var(--fg4)" }}>·last 1h</span>
            </div>
            <ul className="space-y-2">
              {activitySeed.map((a, i) => {
                const active = i === tick;
                return (
                  <li
                    key={i}
                    className="font-mono-ed text-xs flex items-center gap-2 transition-opacity duration-300"
                    style={{ opacity: active ? 1 : 0.55, color: "var(--fg2)" }}
                  >
                    <span style={{ color: active ? "#10b981" : "var(--fg4)" }}>{active ? "●" : "○"}</span>
                    <span className="truncate flex-1">
                      <strong style={{ color: "var(--fg)" }}>{a.name}</strong>{" "}
                      <span style={{ color: "var(--fg3)" }}>{a.action}</span>{" "}
                      <span>{a.target}</span>
                    </span>
                    <span style={{ color: "var(--fg4)" }}>{a.price}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Trust strip — text-only with dot separators */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-14 pt-8 text-xs font-mono-ed uppercase tracking-[0.15em]" style={{ borderTop: "1px solid var(--border)", color: "var(--fg3)" }}>
          {["SSL 256-bit","KYC CCCD","Hỗ trợ 24/7","Đánh giá thật","Tuân thủ pháp luật VN"].map((t, i, arr) => (
            <span key={t} className="flex items-center gap-x-6">
              <span>{t}</span>
              {i < arr.length - 1 && <span style={{ color: "var(--fg4)" }}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
