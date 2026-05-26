"use client";
import { useState } from "react";
import Link from "next/link";
import { Trophy, Eye, Heart, Clock, BadgeCheck, ArrowRight, Star, Sparkles, Shield, Filter, Crown, Swords, Wand2, Crosshair, Globe } from "lucide-react";
import { listings as all, gameCategories as tabs } from "@/data/listings";
import { useFavorites } from "@/lib/favorites";
import { useToast } from "@/components/Toast";

const gameIcons: Record<string, typeof Trophy> = {
  lmht: Swords,
  ff: Crosshair,
  pubg: Crosshair,
  genshin: Wand2,
  lq: Crown,
  valo: Globe,
};

const badgeMap: Record<string, string> = {
  hot: "badge-hot",
  sale: "badge-sale",
  new: "badge-new",
  vip: "badge-vip",
};
const badgeLabel: Record<string, string> = {
  hot: "🔥 Hot",
  sale: "% Sale",
  new: "✨ Mới",
  vip: "★ VIP",
};

export default function GameListings() {
  const [tab, setTab] = useState("all");
  const [sort, setSort] = useState("newest");
  const { isFav, toggle } = useFavorites();
  const { push } = useToast();

  const filtered = (tab === "all" ? all : all.filter(a => a.gameKey === tab)).slice().sort((a,b) => {
    if (sort === "price") return a.priceNum - b.priceNum;
    if (sort === "hot") return (b.favs ?? 0) - (a.favs ?? 0);
    return 0; // newest = original order
  });

  return (
    <section id="listings" className="py-16 lg:py-24 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4" style={{ color: "#f97316" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#f97316" }}>Tin Đăng</span>
            </div>
            <h2 className="text-display-3" style={{ fontFamily: "var(--font-gilroy),sans-serif" }}>
              <span style={{ color: "var(--fg)" }}>Acc Game </span>
              <span className="grad-orange">Mới Nhất</span>
            </h2>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs hidden sm:inline" style={{ color: "var(--fg3)" }}>Sắp xếp:</span>
            <div className="flex gap-1 p-1 rounded-xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              {[
                { k:"newest", l:"Mới nhất" },
                { k:"price",  l:"Giá thấp" },
                { k:"hot",    l:"Hot" },
              ].map(s => (
                <button key={s.k} onClick={()=>setSort(s.k)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                  style={{
                    background: sort === s.k ? "var(--purple)" : "transparent",
                    color:      sort === s.k ? "white" : "var(--fg2)",
                  }}
                >{s.l}</button>
              ))}
            </div>
            <button className="hidden sm:flex w-9 h-9 rounded-xl items-center justify-center btn-ghost cursor-pointer" aria-label="Bộ lọc">
              <Filter className="w-4 h-4" style={{ color: "var(--fg2)" }} />
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2.5 p-3.5 rounded-xl mb-6 text-xs"
          style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.18)" }}>
          <Shield className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#fbbf24" }} />
          <span style={{ color: "#fcd34d" }}>
            <strong>Lưu ý:</strong> Tin đăng do người dùng tự tạo. ShopAccGame.net chỉ là nền tảng quảng cáo trung gian — không trực tiếp mua bán và không bảo lãnh giao dịch.
          </span>
        </div>

        {/* Game tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
          {tabs.map(t => (
            <button key={t.key} onClick={()=>setTab(t.key)}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer"
              style={{
                background: tab === t.key
                  ? `${t.color || "#f97316"}`
                  : "var(--surface)",
                color: tab === t.key ? "white" : "var(--fg2)",
                border: `1px solid ${tab === t.key ? "transparent" : "var(--border)"}`,
                boxShadow: tab === t.key ? "var(--shadow-sm)" : "none",
              }}
            >
              {t.label}
              <span className="text-2xs px-1.5 py-0.5 rounded font-bold"
                style={{ background: tab === t.key ? "var(--scrim4)" : "var(--scrim2)", color: tab === t.key ? "white" : "var(--fg3)" }}>
                {t.count.toLocaleString()}
              </span>
            </button>
          ))}
        </div>

        {/* Listing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(item => (
            <Link key={item.id} href={`/acc/${item.id}/`} className="contents" aria-label={item.title}>
            <article className="relative card card-hover overflow-hidden group cursor-pointer">

              {/* Badge */}
              {item.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <span className={`badge ${badgeMap[item.badge]}`}>{badgeLabel[item.badge]}</span>
                </div>
              )}

              {/* Preview */}
              <div className={`relative h-40 ${item.preview} hex-grid overflow-hidden`}>
                {/* Rank shield centerpiece */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="rank-shield w-14 h-14"
                      style={{ background:`${item.accent}` }}>
                      {(() => { const G = gameIcons[item.gameKey] || Trophy; return <G className="w-5 h-5 text-white drop-shadow" />; })()}
                    </div>
                    <div className="absolute -inset-2 -z-10 rounded-full opacity-40 blur-xl" style={{ background:item.color }} />
                  </div>
                </div>

                {/* Heart button */}
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); const nowFav = toggle(item.id); push(nowFav ? "Đã thêm vào yêu thích" : "Đã bỏ yêu thích", "success"); }}
                  className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all cursor-pointer ${isFav(item.id) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  style={{ background: isFav(item.id) ? "#f43f5e" : "rgba(0,0,0,0.4)" }}
                  aria-label="Yêu thích"
                >
                  <Heart className={`w-4 h-4 text-white ${isFav(item.id) ? "fill-current" : ""}`} />
                </button>

                {/* Top-right ID */}
                <div className="absolute top-3 right-3 group-hover:opacity-0 transition-opacity text-2xs font-mono font-bold px-2 py-0.5 rounded backdrop-blur-md text-white/80"
                  style={{ background:"rgba(0,0,0,.3)" }}>#{item.id}</div>

                {/* Bottom-left rank */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-lg backdrop-blur-md"
                  style={{ background:"rgba(0,0,0,.4)" }}>
                  <Trophy className="w-3 h-3 text-white" />
                  <span className="text-2xs font-bold text-white uppercase tracking-wider">{item.rank}</span>
                </div>

                {/* Bottom-right meta */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-2xs text-white/90">
                  <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-md backdrop-blur-md" style={{ background:"rgba(0,0,0,.4)" }}>
                    <Eye className="w-3 h-3" />{item.views}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-4">
                {/* Game + verified */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge" style={{ background: item.color + "22", color: item.color, border: `1px solid ${item.color}44` }}>
                    {item.game}
                  </span>
                  {item.verified && (
                    <span className="flex items-center gap-1 text-2xs font-semibold" style={{ color: "#10b981" }}>
                      <BadgeCheck className="w-3 h-3" /> Đã xác minh
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold leading-snug mb-3 line-clamp-2 min-h-[2.4rem]" style={{ color: "var(--fg)" }}>
                  {item.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.slice(0,3).map(t => (
                    <span key={t} className="text-2xs px-1.5 py-0.5 rounded-md font-medium" style={{ background: "var(--scrim)", color: "var(--fg2)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-end justify-between pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-bold" style={{ fontFamily: "var(--font-gilroy),sans-serif", color: item.color }}>
                        {item.price}<span className="text-xs">đ</span>
                      </span>
                    </div>
                    {item.oldPrice && (
                      <div className="text-2xs line-through" style={{ color: "var(--fg4)" }}>{item.oldPrice}đ</div>
                    )}
                  </div>
                  <button className="px-3 py-2 rounded-xl text-xs font-bold text-white transition-all cursor-pointer"
                    style={{
                      background: `${item.color}`,
                    }}
                  >
                    Xem <ArrowRight className="w-3 h-3 inline ml-0.5" />
                  </button>
                </div>

                {/* Footer meta */}
                <div className="flex items-center justify-between mt-3 pt-3 text-2xs" style={{ borderTop: "1px solid var(--border)", color: "var(--fg3)" }}>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-current" style={{ color: "#fbbf24" }} /> 4.9</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.posted}</span>
                </div>
              </div>
            </article>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Link href="/tim-kiem/" className="px-8 py-3.5 rounded-2xl font-semibold text-sm btn-ghost cursor-pointer inline-flex items-center gap-2" style={{ color: "var(--fg2)" }}>
            Xem tất cả 12,500+ tin đăng
            <ArrowRight className="w-4 h-4 bounce-x" />
          </Link>
        </div>
      </div>
    </section>
  );
}
