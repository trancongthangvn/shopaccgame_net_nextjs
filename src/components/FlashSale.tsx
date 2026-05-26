"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, Heart, ArrowRight, Zap } from "lucide-react";
import { useFavorites } from "@/lib/favorites";
import { useToast } from "@/components/Toast";
import ListingImage from "@/components/ListingImage";

const gameKeyMap: Record<string, string> = {
  LMHT: "lmht",
  Genshin: "genshin",
  PUBG: "pubg",
  Valorant: "valo",
};

const deals = [
  { id:"FS001", game:"LMHT",     title:"Acc LMHT Cao Thủ — 100 tướng + 50 skin",     rank:"Cao Thủ",   price:"1.490.000", oldPrice:"2.500.000", discount:40, sold:8, total:10, views:"5.2k", preview:"preview-lmht",    color:"#60a5fa" },
  { id:"FS002", game:"Genshin",  title:"Genshin AR55 — Hutao C2 + Zhongli C0",         rank:"AR55",      price:"2.290.000", oldPrice:"3.800.000", discount:39, sold:5, total:8,  views:"4.1k", preview:"preview-genshin", color:"#c4b5fd" },
  { id:"FS003", game:"PUBG",     title:"PUBG Conqueror — Glacier M416 + UMP45",       rank:"Conqueror", price:"890.000",   oldPrice:"1.500.000", discount:41, sold:12,total:15, views:"3.8k", preview:"preview-pubg",    color:"#fbbf24" },
  { id:"FS004", game:"Valorant", title:"Valorant Immortal — Vandal Prime + Skin Set", rank:"Immortal",  price:"1.690.000", oldPrice:"2.900.000", discount:42, sold:3, total:6,  views:"6.4k", preview:"preview-valo",    color:"#22d3ee" },
];

export default function FlashSale() {
  const [time, setTime] = useState({ h: 5, m: 42, s: 17 });
  const { isFav, toggle } = useFavorites();
  const { push } = useToast();

  useEffect(() => {
    const t = setInterval(() => {
      setTime(p => {
        let {h,m,s} = p; s--;
        if(s<0){s=59;m--} if(m<0){m=59;h--} if(h<0){h=5;m=42;s=17}
        return {h,m,s};
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <section id="flash" className="py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="badge badge-hot">🔥 Flash Sale</span>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color:"var(--fg3)" }}>Giảm sốc · Có hạn</span>
            </div>
            <h2 className="section-heading-line text-display-3 mb-2" style={{ fontFamily:"var(--font-gilroy),sans-serif" }}>
              <span style={{ color:"var(--fg)" }}>Giảm Sốc </span>
              <span className="grad-rose">Đến 50%</span>
            </h2>
            <p className="text-sm" style={{ color:"var(--fg3)" }}>Khuyến mãi giới hạn — chỉ áp dụng hôm nay</p>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-bold hidden sm:inline" style={{ color:"var(--fg3)" }}>Kết thúc:</span>
            <div className="flex items-center gap-1.5">
              {[{l:"GIỜ",v:time.h},{l:"PHÚT",v:time.m},{l:"GIÂY",v:time.s}].map((u,i,arr) => (
                <span key={u.l} className="flex items-center gap-1.5">
                  <span className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex flex-col items-center justify-center font-mono font-bold tabular-nums text-white"
                    style={{ background: "#f43f5e" }}>
                    <span className="text-base sm:text-lg leading-none">{pad(u.v)}</span>
                    <span className="text-2xs mt-1 opacity-80 tracking-wider">{u.l}</span>
                  </span>
                  {i < arr.length - 1 && <span className="text-2xl font-bold" style={{ color:"#f43f5e" }}>:</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {deals.map(d => {
            const soldPct = Math.round((d.sold / d.total) * 100);
            const remaining = d.total - d.sold;

            return (
              <Link key={d.id} href={`/tim-kiem/?game=${gameKeyMap[d.game] ?? "all"}`} className="contents">
              <article className="relative card card-hover overflow-hidden group cursor-pointer">
                {/* Ribbon discount badge */}
                <div className="ribbon" style={{ background: "#f43f5e" }}>
                  -{d.discount}%
                </div>

                {/* Sold-out warning */}
                {remaining <= 3 && (
                  <div className="absolute top-3 right-3 z-10 badge badge-hot pulse-soft">
                    Còn {remaining}
                  </div>
                )}

                {/* Preview — real placeholder image */}
                <ListingImage id={d.id} className="h-44" w={600} h={400}>
                  {/* Heart on hover */}
                  <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); const nowFav = toggle(d.id); push(nowFav ? "Đã thêm vào yêu thích" : "Đã bỏ yêu thích", "success"); }}
                    className={`absolute top-3 right-12 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all cursor-pointer z-20 ${isFav(d.id) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                    style={{ background: isFav(d.id) ? "#f43f5e" : "rgba(0,0,0,.45)", color:"white" }} aria-label="Yêu thích">
                    <Heart className={`w-4 h-4 ${isFav(d.id) ? "fill-current" : ""}`} />
                  </button>

                  {/* Bottom-left rank */}
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded text-2xs font-semibold text-white uppercase tracking-wide"
                    style={{ background:"rgba(0,0,0,.5)" }}>
                    {d.rank}
                  </div>

                  {/* Bottom-right views */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 text-2xs text-white/90 px-1.5 py-0.5 rounded"
                    style={{ background:"rgba(0,0,0,.45)" }}>
                    <Eye className="w-3 h-3" />{d.views}
                  </div>

                  {/* Top-right ID */}
                  <div className="absolute top-3 right-3 text-2xs font-mono font-medium px-2 py-0.5 rounded text-white/85"
                    style={{ background:"rgba(0,0,0,.4)" }}>#{d.id}</div>
                </ListingImage>

                {/* Content */}
                <div className="p-4">
                  <span className="badge mb-2 inline-flex" style={{ background:d.color+"22", color:d.color, border:`1px solid ${d.color}44` }}>
                    {d.game}
                  </span>
                  <h3 className="text-sm font-semibold leading-snug mb-3 line-clamp-2 min-h-[2.4rem]" style={{ color:"var(--fg)" }}>
                    {d.title}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-bold" style={{ fontFamily:"var(--font-gilroy),sans-serif", color:"#f43f5e" }}>
                      {d.price}<span className="text-xs">đ</span>
                    </span>
                    <span className="text-xs line-through" style={{ color:"var(--fg4)" }}>{d.oldPrice}đ</span>
                  </div>

                  {/* Progress */}
                  <div className="mb-3">
                    <div className="h-2 rounded-full overflow-hidden" style={{ background:"var(--scrim)" }}>
                      <div className="h-full rounded-full shimmer-bg"
                        style={{ width:`${soldPct}%`, background: "#f97316" }} />
                    </div>
                    <div className="flex items-center justify-between mt-1.5 text-2xs">
                      <span className="font-bold" style={{ color:"#fbbf24" }}>🔥 Đã bán {d.sold}/{d.total}</span>
                      <span style={{ color:"var(--fg3)" }}>{soldPct}%</span>
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-white btn-rose cursor-pointer">
                    <Zap className="w-3.5 h-3.5" /> Mua Ngay
                  </div>
                </div>
              </article>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/tim-kiem/" className="px-6 py-3 rounded-xl font-semibold text-sm btn-ghost cursor-pointer inline-flex items-center gap-2" style={{ color:"var(--fg2)" }}>
            Xem tất cả flash sale <ArrowRight className="w-4 h-4 bounce-x" />
          </Link>
        </div>
      </div>
    </section>
  );
}
