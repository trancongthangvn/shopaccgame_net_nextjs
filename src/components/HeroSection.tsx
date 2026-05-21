"use client";
import { useState } from "react";
import { Search, Flame, Star, TrendingUp, Shield, Zap, ArrowRight, Sparkles, Users, Trophy } from "lucide-react";

const hot = ["LMHT Kim Cương","Free Fire Thách Đấu","PUBG Conqueror","Genshin AR55","Valorant Radiant"];

const previewCards = [
  { game: "LMHT",     id: "ACC8425", rank: "Kim Cương", price: "850K", oldPrice: "1.2M", views: "2.4k", preview: "preview-lmht",    rotate: "rotate-[-6deg]", offset: "translate-y-2" },
  { game: "Genshin",  id: "ACC9012", rank: "AR55",      price: "2.5M", oldPrice: "",     views: "4.2k", preview: "preview-genshin", rotate: "rotate-[3deg]",  offset: "" },
  { game: "Free Fire",id: "ACC7733", rank: "Thách Đấu", price: "650K", oldPrice: "950K", views: "1.8k", preview: "preview-ff",      rotate: "rotate-[-2deg]", offset: "translate-y-6" },
];

export default function HeroSection() {
  const [q, setQ] = useState("");

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">

      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-32 left-1/4 w-[700px] h-[500px] rounded-full opacity-30 float"
        style={{ background: "radial-gradient(ellipse,#7c3aed 0%,transparent 65%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 -right-32 w-[600px] h-[500px] rounded-full opacity-25 float2"
        style={{ background: "radial-gradient(ellipse,#f43f5e 0%,transparent 65%)", filter: "blur(100px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Content */}
          <div className="lg:col-span-7">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs font-bold uppercase tracking-wider"
              style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.35)", color: "#c4b5fd" }}>
              <span className="live-dot" />
              <span>Live · 230 người đang xem</span>
              <span className="opacity-50">|</span>
              <Flame className="w-3 h-3" style={{ color: "#f43f5e" }} />
              <span style={{ color: "var(--rose2)" }}>#1 VN</span>
            </div>

            <h1 className="mb-5" style={{ fontFamily: "var(--font-russo),sans-serif", fontSize: "clamp(2.4rem,5.5vw,4.5rem)" }}>
              <span className="block" style={{ color: "var(--fg)" }}>Mua Bán</span>
              <span className="block">
                <span className="grad-purple text-glow-pink">Acc Game</span>
                {" "}
                <span style={{ color: "var(--fg)" }}>Uy Tín</span>
              </span>
              <span className="block grad-rose">Giá Tốt Nhất 2025</span>
            </h1>

            <p className="text-base sm:text-lg mb-8 max-w-xl leading-relaxed" style={{ color: "var(--fg2)" }}>
              Sàn đăng tin trung gian — kết nối 48,000+ người mua &amp; bán acc game mỗi ngày.
              An toàn, minh bạch, không trung gian giữ tiền.
            </p>

            {/* Search */}
            <div className="mb-6 max-w-xl">
              <div className="relative p-[1.5px] rounded-2xl" style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.6),rgba(244,63,94,0.4),rgba(124,58,237,0.2))" }}>
                <div className="flex items-center gap-2 rounded-2xl pl-4 pr-2 py-2" style={{ background: "var(--surface)" }}>
                  <Search className="w-5 h-5" style={{ color: "var(--fg3)" }} />
                  <input
                    type="text" value={q} onChange={e=>setQ(e.target.value)}
                    placeholder="Tìm acc LMHT, PUBG, Free Fire, Genshin..."
                    className="flex-1 bg-transparent outline-none text-sm py-2"
                    style={{ color: "var(--fg)" }}
                    aria-label="Tìm kiếm"
                  />
                  <button className="px-5 py-2.5 rounded-xl text-sm font-bold text-white btn-primary cursor-pointer flex items-center gap-1.5">
                    <Search className="w-4 h-4" /> Tìm
                  </button>
                </div>
              </div>

              {/* Hot tags */}
              <div className="flex items-center gap-2 flex-wrap mt-3">
                <span className="text-xs flex items-center gap-1" style={{ color: "var(--fg3)" }}>
                  <Flame className="w-3 h-3" style={{ color: "#f43f5e" }} /> Hot:
                </span>
                {hot.map(t => (
                  <button key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--fg2)" }}
                  >{t}</button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-xl pt-6" style={{ borderTop: "1px solid var(--border)" }}>
              {[
                { val:"12,500+", lbl:"Tin đăng", icon:TrendingUp, c:"#a78bfa" },
                { val:"48K+",    lbl:"Thành viên", icon:Users,    c:"#fb7185" },
                { val:"4.9★",    lbl:"Đánh giá",  icon:Star,     c:"#fbbf24" },
              ].map(({val,lbl,icon:Icon,c}) => (
                <div key={lbl}>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon className="w-3.5 h-3.5" style={{ color: c }} />
                    <span className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-russo),sans-serif", color: c }}>{val}</span>
                  </div>
                  <div className="text-[11px] uppercase tracking-wider" style={{ color: "var(--fg3)" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating preview cards (industry pattern) */}
          <div className="lg:col-span-5 relative hidden md:block">
            <div className="relative h-[520px] max-w-md mx-auto">

              {/* Decorative orbs */}
              <div className="absolute top-4 right-8 w-3 h-3 rounded-full float" style={{ background: "#a78bfa", boxShadow: "0 0 16px #a78bfa" }} />
              <div className="absolute bottom-32 left-0 w-2 h-2 rounded-full float2" style={{ background: "#fbbf24", boxShadow: "0 0 12px #fbbf24" }} />
              <div className="absolute top-1/2 right-0 w-4 h-4 rounded-full float" style={{ background: "#f43f5e", boxShadow: "0 0 16px #f43f5e", opacity: .8 }} />

              {/* Card stack */}
              {previewCards.map((c, i) => (
                <div key={c.id}
                  className={`absolute card card-hover overflow-hidden cursor-pointer transition-all ${c.rotate} ${c.offset}`}
                  style={{
                    width: "300px",
                    top: `${i * 130}px`,
                    left: `${i % 2 === 0 ? "20px" : "auto"}`,
                    right: `${i % 2 === 1 ? "20px" : "auto"}`,
                    zIndex: 3 - i,
                    boxShadow: "0 16px 48px rgba(0,0,0,.5), 0 0 0 1px rgba(124,58,237,.15)",
                  }}
                >
                  {/* Preview area */}
                  <div className={`relative h-32 ${c.preview} overflow-hidden`}>
                    <div className="absolute inset-0 dot-bg opacity-30" />
                    <div className="absolute top-3 left-3 badge badge-vip">{c.game}</div>
                    {c.oldPrice && (
                      <div className="absolute top-3 right-3 badge badge-sale">SALE</div>
                    )}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                      <Trophy className="w-3 h-3 text-white/70" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/90">{c.rank}</span>
                    </div>
                    <div className="absolute bottom-3 right-3 text-[10px] font-mono font-bold text-white/60">#{c.id}</div>
                  </div>

                  {/* Footer */}
                  <div className="p-3 flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold" style={{ fontFamily: "var(--font-russo),sans-serif", color: "var(--fg)" }}>
                        {c.price}
                      </div>
                      {c.oldPrice && (
                        <div className="text-[11px] line-through" style={{ color: "var(--fg3)" }}>{c.oldPrice}</div>
                      )}
                    </div>
                    <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-white btn-primary cursor-pointer">
                      Xem <ArrowRight className="w-3 h-3 inline ml-0.5" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Floating notification card */}
              <div className="absolute bottom-0 left-0 card p-3 pulse-soft" style={{ background: "rgba(20,20,50,.9)", backdropFilter: "blur(8px)", borderColor: "rgba(16,185,129,.3)" }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16,185,129,.15)" }}>
                    <Zap className="w-4 h-4" style={{ color: "#10b981" }} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold" style={{ color: "#10b981" }}>Vừa mua thành công!</div>
                    <div className="text-[10px]" style={{ color: "var(--fg3)" }}>Anh Minh · LMHT KC1 · 2 phút trước</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-16 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          {[
            { t:"Bảo mật SSL",     i:Shield, c:"#10b981" },
            { t:"Xác minh CCCD",   i:Sparkles, c:"#a78bfa" },
            { t:"Hỗ trợ 24/7",     i:Zap, c:"#f59e0b" },
            { t:"Đánh giá thật",   i:Star, c:"#fbbf24" },
            { t:"Tuân thủ pháp luật", i:Shield, c:"#06b6d4" },
          ].map(({t,i:Icon,c}) => (
            <div key={t} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--fg3)" }}>
              <Icon className="w-3.5 h-3.5" style={{ color: c }} />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
