"use client";
import { useState } from "react";
import { Trophy, Eye, Heart, Clock, BadgeCheck, ArrowRight, Star, Sparkles, Shield, Filter, Crown, Swords, Wand2, Crosshair, Globe } from "lucide-react";

const gameIcons: Record<string, typeof Trophy> = {
  lmht: Swords,
  ff: Crosshair,
  pubg: Crosshair,
  genshin: Wand2,
  lq: Crown,
  valo: Globe,
};

type Listing = {
  id: string; game: string; gameKey: string; title: string;
  rank: string; price: string; oldPrice?: string;
  views: string; favs?: number; posted: string;
  verified?: boolean; tags: string[];
  preview: string; color: string; accent: string;
  badge?: "hot" | "new" | "vip" | "sale";
};

const all: Listing[] = [
  { id:"LMHT8425", game:"LMHT", gameKey:"lmht", title:"Acc LMHT Kim Cương 1 — 80 tướng + 15 skin legendary, email gốc", rank:"Kim Cương 1", price:"850.000", oldPrice:"1.200.000", views:"2.4k", favs:48, posted:"2 giờ trước", verified:true, tags:["80+ tướng","15 skin","Email gốc"], preview:"preview-lmht", color:"#7c3aed", accent:"#a78bfa", badge:"sale" },
  { id:"LMHT8542", game:"LMHT", gameKey:"lmht", title:"Acc LMHT Cao Thủ — Full tướng + 200 skin, all rune trang", rank:"Cao Thủ", price:"1.890.000", views:"3.1k", favs:67, posted:"4 giờ trước", verified:true, tags:["Full tướng","200 skin","Cao Thủ"], preview:"preview-lmht", color:"#7c3aed", accent:"#a78bfa", badge:"hot" },
  { id:"FF7733", game:"Free Fire", gameKey:"ff", title:"Acc Free Fire Thách Đấu — Skin súng MP40 Cobra cực hiếm", rank:"Thách Đấu", price:"650.000", oldPrice:"950.000", views:"1.8k", favs:35, posted:"5 giờ trước", verified:true, tags:["MP40 Cobra","30+ skin","Garena VN"], preview:"preview-ff", color:"#f43f5e", accent:"#fb7185", badge:"sale" },
  { id:"FF7891", game:"Free Fire", gameKey:"ff", title:"Acc Free Fire Cao Cấp — Diamond max, full skin nhân vật", rank:"Bậc Thầy", price:"380.000", views:"1.1k", favs:21, posted:"6 giờ trước", verified:false, tags:["Full skin NV","Diamond","Email gốc"], preview:"preview-ff", color:"#f43f5e", accent:"#fb7185", badge:"new" },
  { id:"PUBG2024", game:"PUBG", gameKey:"pubg", title:"Acc PUBG Conqueror — Glacier M416, Pharaoh X-Suit", rank:"Conqueror", price:"1.200.000", oldPrice:"1.800.000", views:"3.1k", favs:89, posted:"1 ngày trước", verified:false, tags:["Conqueror","X-Suit","Glacier"], preview:"preview-pubg", color:"#f59e0b", accent:"#fbbf24", badge:"vip" },
  { id:"GS9012", game:"Genshin", gameKey:"genshin", title:"Genshin AR55 — 12 nhân vật 5★ (Hutao C2, Zhongli C0, Raiden C0)", rank:"AR55", price:"2.500.000", views:"4.2k", favs:128, posted:"3 giờ trước", verified:true, tags:["12 NV 5★","Hutao C2","Whale acc"], preview:"preview-genshin", color:"#a78bfa", accent:"#c4b5fd", badge:"vip" },
  { id:"LQ2024", game:"Liên Quân", gameKey:"lq", title:"Acc Liên Quân Huyền Thoại — Full 110 tướng VN Server", rank:"Huyền Thoại", price:"480.000", oldPrice:"700.000", views:"1.2k", favs:42, posted:"30 phút trước", verified:true, tags:["110 tướng","15 trang phục","S5 rank"], preview:"preview-lq", color:"#10b981", accent:"#34d399", badge:"sale" },
  { id:"VAL3344", game:"Valorant", gameKey:"valo", title:"Acc Valorant Radiant — 20 agent + Vandal Prime Skin", rank:"Radiant", price:"3.200.000", views:"5.6k", favs:156, posted:"1 giờ trước", verified:true, tags:["Radiant","20 agent","Prime Vandal"], preview:"preview-valo", color:"#06b6d4", accent:"#22d3ee", badge:"hot" },
];

const tabs = [
  { key:"all",     label:"Tất Cả",      count:12500 },
  { key:"lmht",    label:"LMHT",        count:3200, color:"#7c3aed" },
  { key:"ff",      label:"Free Fire",   count:2100, color:"#f43f5e" },
  { key:"pubg",    label:"PUBG",        count:1850, color:"#f59e0b" },
  { key:"genshin", label:"Genshin",     count:980,  color:"#a78bfa" },
  { key:"lq",      label:"Liên Quân",   count:1420, color:"#10b981" },
  { key:"valo",    label:"Valorant",    count:760,  color:"#06b6d4" },
];

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

  const filtered = tab === "all" ? all : all.filter(a => a.gameKey === tab);

  return (
    <section id="listings" className="py-16 lg:py-24 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-6 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4" style={{ color: "#a78bfa" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#a78bfa" }}>Tin Đăng</span>
            </div>
            <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-russo),sans-serif" }}>
              <span style={{ color: "var(--fg)" }}>Acc Game </span>
              <span className="grad-purple">Mới Nhất</span>
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
                  ? `linear-gradient(135deg,${t.color || "#7c3aed"},${t.color ? t.color : "#a855f7"})`
                  : "var(--surface)",
                color: tab === t.key ? "white" : "var(--fg2)",
                border: `1px solid ${tab === t.key ? "transparent" : "var(--border)"}`,
                boxShadow: tab === t.key ? `0 4px 16px ${t.color || "#7c3aed"}44` : "none",
              }}
            >
              {t.label}
              <span className="text-[10px] px-1.5 py-0.5 rounded font-bold"
                style={{ background: tab === t.key ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)", color: tab === t.key ? "white" : "var(--fg3)" }}>
                {t.count.toLocaleString()}
              </span>
            </button>
          ))}
        </div>

        {/* Listing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(item => (
            <article key={item.id} className="relative card card-hover overflow-hidden group cursor-pointer" aria-label={item.title}>

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
                      style={{ background:`linear-gradient(135deg,${item.accent},${item.color})`, boxShadow:`0 8px 24px ${item.color}66` }}>
                      {(() => { const G = gameIcons[item.gameKey] || Trophy; return <G className="w-5 h-5 text-white drop-shadow" />; })()}
                    </div>
                    <div className="absolute -inset-2 -z-10 rounded-full opacity-40 blur-xl" style={{ background:item.color }} />
                  </div>
                </div>

                {/* Heart button */}
                <button
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                  style={{ background: "rgba(0,0,0,0.4)" }}
                  aria-label="Yêu thích"
                >
                  <Heart className="w-4 h-4 text-white" />
                </button>

                {/* Top-right ID */}
                <div className="absolute top-3 right-3 group-hover:opacity-0 transition-opacity text-[9px] font-mono font-bold px-2 py-0.5 rounded backdrop-blur-md text-white/80"
                  style={{ background:"rgba(0,0,0,.3)" }}>#{item.id}</div>

                {/* Bottom-left rank */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-lg backdrop-blur-md"
                  style={{ background:"rgba(0,0,0,.4)" }}>
                  <Trophy className="w-3 h-3 text-white" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">{item.rank}</span>
                </div>

                {/* Bottom-right meta */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[10px] text-white/90">
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
                    <span className="flex items-center gap-1 text-[10px] font-semibold" style={{ color: "#10b981" }}>
                      <BadgeCheck className="w-3 h-3" /> Đã xác minh
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-[13px] font-semibold leading-snug mb-3 line-clamp-2 min-h-[2.4rem]" style={{ color: "var(--fg)" }}>
                  {item.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.slice(0,3).map(t => (
                    <span key={t} className="text-[10px] px-1.5 py-0.5 rounded-md font-medium" style={{ background: "rgba(255,255,255,0.05)", color: "var(--fg2)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-end justify-between pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-bold" style={{ fontFamily: "var(--font-russo),sans-serif", color: item.color }}>
                        {item.price}<span className="text-xs">đ</span>
                      </span>
                    </div>
                    {item.oldPrice && (
                      <div className="text-[11px] line-through" style={{ color: "var(--fg4)" }}>{item.oldPrice}đ</div>
                    )}
                  </div>
                  <button className="px-3 py-2 rounded-xl text-xs font-bold text-white transition-all cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg,${item.color},${item.accent})`,
                      boxShadow: `0 4px 14px ${item.color}44`,
                    }}
                  >
                    Xem <ArrowRight className="w-3 h-3 inline ml-0.5" />
                  </button>
                </div>

                {/* Footer meta */}
                <div className="flex items-center justify-between mt-3 pt-3 text-[10px]" style={{ borderTop: "1px solid var(--border)", color: "var(--fg3)" }}>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-current" style={{ color: "#fbbf24" }} /> 4.9</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.posted}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <button className="px-8 py-3.5 rounded-2xl font-semibold text-sm btn-ghost cursor-pointer inline-flex items-center gap-2" style={{ color: "var(--fg2)" }}>
            Xem tất cả 12,500+ tin đăng
            <ArrowRight className="w-4 h-4 bounce-x" />
          </button>
        </div>
      </div>
    </section>
  );
}
