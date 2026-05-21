"use client";
import { useEffect, useState } from "react";
import { Flame, Trophy, Eye, Heart, ArrowRight, Zap } from "lucide-react";

const deals = [
  { id:"FS001", game:"LMHT", title:"Acc LMHT Cao Thủ — 100 tướng + 50 skin", rank:"Cao Thủ", price:"1.490.000", oldPrice:"2.500.000", discount:40, sold:8, total:10, views:"5.2k", preview:"preview-lmht",    color:"#7c3aed" },
  { id:"FS002", game:"Genshin", title:"Genshin AR55 — Hutao C2 + Zhongli C0",       rank:"AR55",    price:"2.290.000", oldPrice:"3.800.000", discount:39, sold:5, total:8,  views:"4.1k", preview:"preview-genshin", color:"#a78bfa" },
  { id:"FS003", game:"PUBG", title:"PUBG Conqueror — Glacier M416 + UMP45",       rank:"Conqueror", price:"890.000",   oldPrice:"1.500.000", discount:41, sold:12,total:15, views:"3.8k", preview:"preview-pubg",    color:"#f59e0b" },
  { id:"FS004", game:"Valorant", title:"Valorant Immortal — Vandal Prime + Skin",  rank:"Immortal", price:"1.690.000", oldPrice:"2.900.000", discount:42, sold:3, total:6,  views:"6.4k", preview:"preview-valo",    color:"#06b6d4" },
];

export default function FlashSale() {
  const [time, setTime] = useState({ h: 5, m: 42, s: 17 });

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
    <section id="flash" className="py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background flame effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20"
        style={{ background: "radial-gradient(ellipse,#f43f5e 0%,transparent 60%)", filter: "blur(80px)" }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-5 h-5 wiggle" style={{ color: "#f43f5e" }} />
              <span className="text-xs font-bold uppercase tracking-widest grad-rose">Flash Sale</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ background: "#f43f5e" }}>HOT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-russo),sans-serif" }}>
              <span style={{ color: "var(--fg)" }}>Giảm Sốc </span>
              <span className="grad-rose">Đến 50%</span>
            </h2>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--fg3)" }}>Kết thúc trong:</span>
            <div className="flex items-center gap-1">
              {[{l:"GIỜ",v:time.h},{l:"PHÚT",v:time.m},{l:"GIÂY",v:time.s}].map((u,i,arr) => (
                <span key={u.l} className="flex items-center gap-1">
                  <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex flex-col items-center justify-center font-mono font-bold tabular-nums text-white"
                    style={{ background: "linear-gradient(135deg,#f43f5e,#dc2626)", boxShadow: "0 4px 12px rgba(244,63,94,0.3)" }}>
                    <span className="text-sm sm:text-base leading-none">{pad(u.v)}</span>
                    <span className="text-[7px] mt-0.5 opacity-80">{u.l}</span>
                  </span>
                  {i < arr.length - 1 && <span className="font-bold" style={{ color: "#f43f5e" }}>:</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deals.map(d => {
            const soldPct = Math.round((d.sold / d.total) * 100);
            const remaining = d.total - d.sold;
            return (
              <article key={d.id} className="relative card card-hover overflow-hidden group cursor-pointer">
                {/* Discount badge */}
                <div className="absolute top-3 left-3 z-10 w-12 h-12 rounded-full flex flex-col items-center justify-center text-white font-bold"
                  style={{ background: "linear-gradient(135deg,#f43f5e,#dc2626)", boxShadow: "0 4px 12px rgba(244,63,94,0.5)", fontFamily: "var(--font-russo),sans-serif" }}>
                  <span className="text-sm leading-none">-{d.discount}%</span>
                </div>

                {/* Sold-out warning */}
                {remaining <= 3 && (
                  <div className="absolute top-3 right-3 z-10 badge badge-hot animate-pulse">
                    Còn {remaining}
                  </div>
                )}

                {/* Preview */}
                <div className={`relative h-40 ${d.preview} overflow-hidden`}>
                  <div className="absolute inset-0 dot-bg opacity-30" />
                  {/* Hover heart */}
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                    style={{ background: "rgba(0,0,0,0.4)", color: "white" }}
                    aria-label="Yêu thích"
                  >
                    <Heart className="w-4 h-4" />
                  </button>

                  {/* Bottom info on preview */}
                  <div className="absolute bottom-3 left-3 flex flex-col gap-1">
                    <span className="text-[10px] font-mono font-bold text-white/70">#{d.id}</span>
                    <div className="flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-white/90" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{d.rank}</span>
                    </div>
                  </div>

                  {/* Views */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] text-white/70">
                    <Eye className="w-3 h-3" />{d.views}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="badge mb-2" style={{ background: d.color + "22", color: d.color, border: `1px solid ${d.color}44` }}>
                    {d.game}
                  </div>
                  <h3 className="text-sm font-semibold leading-snug mb-3 line-clamp-2 min-h-[2.5rem]" style={{ color: "var(--fg)" }}>
                    {d.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl font-bold" style={{ fontFamily: "var(--font-russo),sans-serif", color: "#f43f5e" }}>
                      {d.price}<span className="text-xs">đ</span>
                    </span>
                    <span className="text-xs line-through" style={{ color: "var(--fg4)" }}>{d.oldPrice}đ</span>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-2">
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="h-full rounded-full relative shimmer-bg"
                        style={{ width: `${soldPct}%`, background: "linear-gradient(90deg,#f59e0b,#f43f5e)" }} />
                    </div>
                    <div className="flex items-center justify-between mt-1.5 text-[10px]">
                      <span className="font-semibold" style={{ color: "#fbbf24" }}>🔥 Đã bán {d.sold}/{d.total}</span>
                      <span style={{ color: "var(--fg3)" }}>{soldPct}%</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-3 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-white btn-rose cursor-pointer">
                    <Zap className="w-3.5 h-3.5" /> Mua Ngay
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-3 rounded-xl font-semibold text-sm btn-ghost cursor-pointer inline-flex items-center gap-2" style={{ color: "var(--fg2)" }}>
            Xem tất cả flash sale <ArrowRight className="w-4 h-4 bounce-x" />
          </button>
        </div>
      </div>
    </section>
  );
}
