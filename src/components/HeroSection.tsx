"use client";
import { useState } from "react";
import { Search, Flame, Star, Trophy, Shield, Zap, ArrowRight, Sparkles, TrendingUp, Users, Eye, Crown, Wand2, Crosshair } from "lucide-react";

const hot = ["LMHT Kim Cương","Free Fire Thách Đấu","PUBG Conqueror","Genshin AR55","Valorant Radiant"];

const cards = [
  {
    id: "ACC8425", game: "LMHT", rank: "Kim Cương",
    price: "850K", oldPrice: "1.2tr", discount: "30%",
    icon: Crown, preview: "preview-lmht",
    color: "#a78bfa", accent: "#7c3aed",
    rotate: "-6deg",
    pos: { top: "0px", left: "10%" },
    z: 3,
  },
  {
    id: "ACC9012", game: "Genshin", rank: "AR55",
    price: "2.5tr", oldPrice: "",  discount: "",
    icon: Wand2, preview: "preview-genshin",
    color: "#c4b5fd", accent: "#7c3aed",
    rotate: "3deg",
    pos: { top: "70px", right: "5%" },
    z: 2,
  },
  {
    id: "ACC7733", game: "Free Fire", rank: "Thách Đấu",
    price: "650K", oldPrice: "950K", discount: "32%",
    icon: Crosshair, preview: "preview-ff",
    color: "#fb7185", accent: "#f43f5e",
    rotate: "-2deg",
    pos: { top: "180px", left: "5%" },
    z: 1,
  },
];

export default function HeroSection() {
  const [q, setQ] = useState("");

  return (
    <section className="relative overflow-hidden section-py section-px scanlines">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/4 w-[800px] h-[600px] rounded-full opacity-30 float"
        style={{ background:"radial-gradient(ellipse,#7c3aed 0%,transparent 60%)", filter:"blur(80px)" }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full opacity-25 float2"
        style={{ background:"radial-gradient(ellipse,#f43f5e 0%,transparent 60%)", filter:"blur(100px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ═════════ LEFT — Content ═════════ */}
          <div className="lg:col-span-7 max-w-2xl">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-wider"
              style={{ background:"rgba(124,58,237,0.15)", border:"1px solid rgba(124,58,237,0.35)", color:"#c4b5fd" }}>
              <span className="live-dot" />
              <span>Live · <span style={{ color:"#10b981" }}>230 online</span></span>
              <span className="opacity-40">·</span>
              <Flame className="w-3 h-3" style={{ color:"#f43f5e" }} />
              <span className="grad-rose">#1 VN</span>
            </div>

            <h1 className="mb-5 tracking-tight glitch-hover cursor-default" style={{ fontFamily:"var(--font-russo),sans-serif", fontSize:"clamp(2.2rem,5vw,4rem)", lineHeight:1.05 }}>
              <span className="block" style={{ color:"var(--fg)" }}>Mua Bán</span>
              <span className="block">
                <span className="grad-purple text-glow-pink">Acc Game</span>
                {" "}
                <span style={{ color:"var(--fg)" }}>Uy Tín</span>
              </span>
              <span className="block grad-rose">Giá Tốt Nhất 2025</span>
            </h1>

            <p className="text-base sm:text-lg mb-8 leading-relaxed max-w-lg" style={{ color:"var(--fg2)" }}>
              Sàn đăng tin trung gian kết nối <strong className="text-white">48,000+</strong> người mua &amp; bán acc game.
              An toàn — Minh bạch — Không trung gian giữ tiền.
            </p>

            {/* Search */}
            <div className="mb-5">
              <div className="relative p-[2px] rounded-2xl"
                style={{ background:"linear-gradient(135deg,rgba(124,58,237,.7),rgba(244,63,94,.5) 50%,rgba(124,58,237,.3))" }}>
                <div className="flex items-center gap-2 rounded-2xl pl-5 pr-2 h-14" style={{ background:"var(--surface)" }}>
                  <Search className="w-5 h-5 flex-shrink-0" style={{ color:"var(--fg3)" }} />
                  <input
                    type="text" value={q} onChange={e=>setQ(e.target.value)}
                    placeholder="Tìm acc LMHT, PUBG, Free Fire, Genshin..."
                    className="flex-1 bg-transparent outline-none text-sm sm:text-base"
                    style={{ color:"var(--fg)" }}
                    aria-label="Tìm kiếm"
                  />
                  <button className="h-10 px-5 rounded-xl text-sm font-bold text-white btn-primary cursor-pointer flex items-center gap-1.5">
                    <Search className="w-4 h-4" />
                    <span className="hidden sm:inline">Tìm Acc</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap mt-4">
                <span className="text-xs flex items-center gap-1 font-semibold" style={{ color:"var(--fg3)" }}>
                  <Flame className="w-3 h-3" style={{ color:"#f43f5e" }} /> Hot:
                </span>
                {hot.map(t => (
                  <button key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 cursor-pointer"
                    style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", color:"var(--fg2)" }}
                  >{t}</button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap mb-8">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white btn-rose cursor-pointer">
                <Zap className="w-4 h-4" /> Đăng Tin Miễn Phí
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold btn-ghost cursor-pointer" style={{ color:"var(--fg2)" }}>
                Xem Tin Đăng <ArrowRight className="w-4 h-4 bounce-x" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6" style={{ borderTop:"1px solid var(--border)" }}>
              {[
                { val:"12,500+", lbl:"Tin đăng",   icon:TrendingUp, c:"#a78bfa" },
                { val:"48K+",    lbl:"Thành viên", icon:Users,      c:"#fb7185" },
                { val:"4.9★",    lbl:"Đánh giá",   icon:Star,       c:"#fbbf24" },
              ].map(({val,lbl,icon:Icon,c}) => (
                <div key={lbl}>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Icon className="w-3.5 h-3.5" style={{ color:c }} />
                    <span className="text-xl sm:text-2xl font-bold" style={{ fontFamily:"var(--font-russo),sans-serif", color:c }}>{val}</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest" style={{ color:"var(--fg3)" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ═════════ RIGHT — 3 Floating Cards (v2 layout + v3 styling) ═════════ */}
          <div className="lg:col-span-5 relative hidden md:block">
            <div className="relative h-[560px] max-w-md mx-auto">

              {/* ── Floating chip: Viewers (top) ── */}
              <div className="absolute -top-2 left-0 z-30 flex items-center gap-2 px-3 py-2 rounded-xl float"
                style={{ background:"rgba(20,20,50,.95)", backdropFilter:"blur(12px)", border:"1px solid rgba(167,139,250,.4)", boxShadow:"0 8px 24px rgba(0,0,0,.5)" }}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:"rgba(167,139,250,.2)" }}>
                  <Eye className="w-3.5 h-3.5" style={{ color:"#a78bfa" }} />
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color:"var(--fg3)" }}>Đang Xem</div>
                  <div className="text-sm font-bold" style={{ color:"#a78bfa" }}>5,234</div>
                </div>
              </div>

              {/* ── Floating chip: Rating (middle right) ── */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-2 z-30 flex items-center gap-2 px-3 py-2 rounded-xl float2"
                style={{ background:"rgba(20,20,50,.95)", backdropFilter:"blur(12px)", border:"1px solid rgba(251,191,36,.4)", boxShadow:"0 8px 24px rgba(0,0,0,.5)" }}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:"rgba(251,191,36,.2)" }}>
                  <Star className="w-3.5 h-3.5 fill-current" style={{ color:"#fbbf24" }} />
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color:"var(--fg3)" }}>Rating</div>
                  <div className="text-sm font-bold" style={{ color:"#fbbf24" }}>4.9 / 5</div>
                </div>
              </div>

              {/* ── 3 Stacked Cards ── */}
              {cards.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.id}
                    className="absolute card overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:z-40"
                    style={{
                      width: "280px",
                      transform: `rotate(${c.rotate})`,
                      top: c.pos.top,
                      left: c.pos.left,
                      right: c.pos.right,
                      zIndex: c.z,
                      boxShadow: "0 16px 48px rgba(0,0,0,.5), 0 0 0 1px rgba(124,58,237,.15)",
                    }}
                  >
                    {/* Ribbon (only if discount) */}
                    {c.discount && (
                      <div className="ribbon" style={{ background:"linear-gradient(135deg,#f43f5e,#dc2626)" }}>
                        -{c.discount}
                      </div>
                    )}

                    {/* Preview area */}
                    <div className={`relative h-32 ${c.preview} hex-grid overflow-hidden`}>
                      {/* Rank shield center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="rank-shield w-14 h-14"
                            style={{ background:`linear-gradient(135deg,${c.color},${c.accent})`, boxShadow:`0 6px 20px ${c.accent}66` }}>
                            <Icon className="w-5 h-5 text-white drop-shadow" />
                          </div>
                          <div className="absolute -inset-2 -z-10 rounded-full opacity-40 blur-xl" style={{ background: c.accent }} />
                        </div>
                      </div>

                      {/* Top-right ID */}
                      <div className="absolute top-2.5 right-2.5 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded backdrop-blur-md text-white/80"
                        style={{ background:"rgba(0,0,0,.35)" }}>#{c.id}</div>

                      {/* Bottom-left rank */}
                      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-1.5 py-0.5 rounded-md backdrop-blur-md"
                        style={{ background:"rgba(0,0,0,.4)" }}>
                        <Trophy className="w-2.5 h-2.5 text-white" />
                        <span className="text-[9px] font-bold text-white uppercase tracking-wider">{c.rank}</span>
                      </div>
                    </div>

                    {/* Content footer */}
                    <div className="p-3">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="badge" style={{ background:c.accent+"22", color:c.color, border:`1px solid ${c.accent}44`, fontSize:"9px", padding:"2px 8px" }}>
                          {c.game}
                        </span>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-lg font-bold" style={{ fontFamily:"var(--font-russo),sans-serif", color:c.color }}>
                              {c.price}
                            </span>
                            {c.oldPrice && (
                              <span className="text-[10px] line-through" style={{ color:"var(--fg4)" }}>{c.oldPrice}</span>
                            )}
                          </div>
                        </div>
                        <button className="px-2.5 py-1.5 rounded-lg text-[10px] font-bold text-white cursor-pointer flex items-center gap-1"
                          style={{ background:`linear-gradient(135deg,${c.accent},${c.color})`, boxShadow:`0 3px 10px ${c.accent}55` }}>
                          Xem <ArrowRight className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* ── Notification "Vừa mua" (bottom) ── */}
              <div className="absolute -bottom-1 left-2 z-30 flex items-center gap-2.5 px-3 py-2 rounded-xl pulse-soft"
                style={{ background:"rgba(20,20,50,.95)", backdropFilter:"blur(12px)", border:"1px solid rgba(16,185,129,.4)", boxShadow:"0 8px 24px rgba(0,0,0,.5)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:"rgba(16,185,129,.18)" }}>
                  <Zap className="w-4 h-4" style={{ color:"#10b981" }} />
                </div>
                <div className="leading-tight">
                  <div className="text-[11px] font-bold" style={{ color:"#10b981" }}>Vừa mua thành công!</div>
                  <div className="text-[10px]" style={{ color:"var(--fg3)" }}>Anh Minh · LMHT KC1 · 2 phút</div>
                </div>
              </div>

              {/* Decorative orbs */}
              <div className="absolute top-12 right-8 w-2.5 h-2.5 rounded-full float opacity-70" style={{ background:"#a78bfa", boxShadow:"0 0 14px #a78bfa" }} />
              <div className="absolute bottom-32 left-12 w-2 h-2 rounded-full float2 opacity-60" style={{ background:"#fbbf24", boxShadow:"0 0 12px #fbbf24" }} />
              <div className="absolute top-1/3 right-16 w-3 h-3 rounded-full float opacity-40" style={{ background:"#f43f5e", boxShadow:"0 0 16px #f43f5e" }} />
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-16 pt-8" style={{ borderTop:"1px solid var(--border)" }}>
          {[
            { t:"Bảo mật SSL 256-bit", i:Shield,     c:"#10b981" },
            { t:"Xác minh CCCD",       i:Sparkles,   c:"#a78bfa" },
            { t:"Hỗ trợ 24/7",         i:Zap,        c:"#f59e0b" },
            { t:"Đánh giá thật",       i:Star,       c:"#fbbf24" },
            { t:"Tuân thủ pháp luật VN", i:Shield,   c:"#06b6d4" },
          ].map(({t,i:Icon,c}) => (
            <div key={t} className="flex items-center gap-1.5 text-xs font-medium" style={{ color:"var(--fg3)" }}>
              <Icon className="w-3.5 h-3.5" style={{ color:c }} />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
