"use client";
import { useState } from "react";
import Link from "next/link";
import { Heart, Clock, BadgeCheck, Star, Shield, Filter, Eye, ArrowRight } from "lucide-react";
import { listings as all, gameCategories as tabs } from "@/data/listings";
import { useFavorites } from "@/lib/favorites";
import { useToast } from "@/components/Toast";
import ListingImage from "@/components/ListingImage";
import SectionHead from "@/components/SectionHead";
import ListingStats from "@/components/ListingStats";

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

        <SectionHead
          index="02"
          eyebrow="Tin đăng"
          title="Tất cả"
          titleAccent="acc game"
          subtitle="Danh sách acc mới đăng, lọc theo game hoặc sắp xếp theo giá/độ hot."
          rightHref="/tim-kiem/"
          rightLabel="Xem tất cả"
        />

        {/* Sort row — sits below the editorial head */}
        <div className="flex items-center gap-2 mb-6 justify-end">
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
                  background: sort === s.k ? "var(--fg)" : "transparent",
                  color:      sort === s.k ? "var(--bg)" : "var(--fg2)",
                }}
              >{s.l}</button>
            ))}
          </div>
          <button className="hidden sm:flex w-9 h-9 rounded-xl items-center justify-center btn-ghost cursor-pointer" aria-label="Bộ lọc">
            <Filter className="w-4 h-4" style={{ color: "var(--fg2)" }} />
          </button>
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

              {/* Preview — real placeholder image */}
              <ListingImage id={item.id} className="h-44" w={600} h={400}>
                {/* Heart button */}
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); const nowFav = toggle(item.id); push(nowFav ? "Đã thêm vào yêu thích" : "Đã bỏ yêu thích", "success"); }}
                  className={`absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all cursor-pointer ${isFav(item.id) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  style={{ background: isFav(item.id) ? "#f43f5e" : "rgba(0,0,0,0.45)" }}
                  aria-label="Yêu thích"
                >
                  <Heart className={`w-4 h-4 text-white ${isFav(item.id) ? "fill-current" : ""}`} />
                </button>

                {/* Top-right ID */}
                <div className="absolute top-3 right-3 group-hover:opacity-0 transition-opacity text-2xs font-mono font-medium px-2 py-0.5 rounded text-white/85"
                  style={{ background:"rgba(0,0,0,.4)" }}>#{item.id}</div>

                {/* Bottom-left rank */}
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded text-2xs font-semibold text-white uppercase tracking-wide"
                  style={{ background:"rgba(0,0,0,.5)" }}>
                  {item.rank}
                </div>

                {/* Bottom-right views */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 text-2xs text-white/90 px-1.5 py-0.5 rounded" style={{ background:"rgba(0,0,0,.45)" }}>
                  <Eye className="w-3 h-3" />{item.views}
                </div>
              </ListingImage>

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

                {/* Price + small meta — editorial mono treatment */}
                <div className="flex items-end justify-between pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                  <div>
                    <div className="font-mono-ed text-xl font-semibold leading-none" style={{ color: "var(--fg)" }}>
                      {item.price}<span className="text-xs" style={{ color: "var(--fg3)" }}>đ</span>
                    </div>
                    {item.oldPrice && (
                      <div className="font-mono-ed text-2xs line-through mt-1" style={{ color: "var(--fg4)" }}>{item.oldPrice}đ</div>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-2xs font-medium" style={{ color: "var(--fg3)" }}>
                    <Star className="w-3 h-3 fill-current" style={{ color: "#fbbf24" }} /> 4.9
                    <span style={{ color: "var(--fg4)" }}>·</span>
                    <Clock className="w-3 h-3" /> {item.posted}
                  </div>
                </div>

                {/* Marketplace stats line */}
                <ListingStats l={item} />
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
