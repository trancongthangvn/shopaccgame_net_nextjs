"use client";
import { useState } from "react";
import { Search, Flame, Star, Trophy, Shield, Zap, BadgeCheck, Eye, Heart, ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";

const hot = ["LMHT Kim Cương","Free Fire Thách Đấu","PUBG Conqueror","Genshin AR55","Valorant Radiant"];

export default function HeroSection() {
  const [q, setQ] = useState("");

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/3 w-[800px] h-[600px] rounded-full opacity-30 -translate-x-1/2 float"
        style={{ background:"radial-gradient(ellipse,#7c3aed 0%,transparent 60%)", filter:"blur(80px)" }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] rounded-full opacity-25 float2"
        style={{ background:"radial-gradient(ellipse,#f43f5e 0%,transparent 60%)", filter:"blur(100px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ═════════ LEFT — Content ═════════ */}
          <div className="lg:col-span-7 max-w-2xl">

            {/* Top pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-wider"
              style={{ background:"rgba(124,58,237,0.15)", border:"1px solid rgba(124,58,237,0.35)", color:"#c4b5fd" }}>
              <span className="live-dot" />
              <span>Live · <span style={{ color:"#10b981" }}>230 online</span></span>
              <span className="opacity-40">·</span>
              <Flame className="w-3 h-3" style={{ color:"#f43f5e" }} />
              <span className="grad-rose">#1 VN</span>
            </div>

            {/* H1 — controlled width */}
            <h1 className="mb-5 tracking-tight" style={{ fontFamily:"var(--font-russo),sans-serif", fontSize:"clamp(2.2rem,5vw,4rem)", lineHeight:1.05 }}>
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

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap mb-8">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white btn-rose cursor-pointer">
                <Zap className="w-4 h-4" /> Đăng Tin Miễn Phí
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold btn-ghost cursor-pointer" style={{ color:"var(--fg2)" }}>
                Xem Tin Đăng <ArrowRight className="w-4 h-4 bounce-x" />
              </button>
            </div>

            {/* Stats inline */}
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

          {/* ═════════ RIGHT — Main Showcase Card ═════════ */}
          <div className="lg:col-span-5 relative">

            {/* Floating chip top-left */}
            <div className="absolute -top-2 -left-3 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl float"
              style={{ background:"rgba(20,20,50,.95)", backdropFilter:"blur(12px)", border:"1px solid rgba(124,58,237,.4)", boxShadow:"0 8px 24px rgba(0,0,0,.5)" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:"rgba(167,139,250,.2)" }}>
                <Eye className="w-3.5 h-3.5" style={{ color:"#a78bfa" }} />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color:"var(--fg3)" }}>Đang Xem</div>
                <div className="text-sm font-bold" style={{ color:"#a78bfa" }}>5,234 lượt</div>
              </div>
            </div>

            {/* Floating chip right-middle */}
            <div className="absolute top-1/3 -right-2 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl float2"
              style={{ background:"rgba(20,20,50,.95)", backdropFilter:"blur(12px)", border:"1px solid rgba(251,191,36,.4)", boxShadow:"0 8px 24px rgba(0,0,0,.5)" }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:"rgba(251,191,36,.2)" }}>
                <Star className="w-3.5 h-3.5 fill-current" style={{ color:"#fbbf24" }} />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color:"var(--fg3)" }}>Rating</div>
                <div className="text-sm font-bold" style={{ color:"#fbbf24" }}>4.9 / 5.0</div>
              </div>
            </div>

            {/* Floating notification bottom-left */}
            <div className="absolute -bottom-3 -left-3 z-20 flex items-center gap-2.5 px-3 py-2 rounded-xl pulse-soft"
              style={{ background:"rgba(20,20,50,.95)", backdropFilter:"blur(12px)", border:"1px solid rgba(16,185,129,.4)", boxShadow:"0 8px 24px rgba(0,0,0,.5)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:"rgba(16,185,129,.18)" }}>
                <Zap className="w-4 h-4" style={{ color:"#10b981" }} />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] font-bold" style={{ color:"#10b981" }}>Vừa mua thành công</div>
                <div className="text-[10px]" style={{ color:"var(--fg3)" }}>Anh Minh · LMHT KC1 · 2 phút</div>
              </div>
            </div>

            {/* ═════ Main Showcase Card ═════ */}
            <div className="border-anim rounded-3xl overflow-hidden mx-auto max-w-md lg:max-w-none"
              style={{ boxShadow:"0 24px 64px rgba(0,0,0,.5), 0 0 0 1px rgba(124,58,237,.2)" }}>
              <div className="rounded-3xl overflow-hidden" style={{ background:"var(--surface)" }}>

                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3" style={{ background:"rgba(124,58,237,.08)", borderBottom:"1px solid rgba(124,58,237,.15)" }}>
                  <div className="flex items-center gap-2">
                    <span className="badge badge-vip">⭐ VIP Featured</span>
                    <span className="flex items-center gap-1 text-[10px] font-bold" style={{ color:"#10b981" }}>
                      <BadgeCheck className="w-3 h-3" /> Đã xác minh
                    </span>
                  </div>
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors hover:bg-white/5 cursor-pointer" aria-label="Yêu thích">
                    <Heart className="w-3.5 h-3.5" style={{ color:"var(--fg3)" }} />
                  </button>
                </div>

                {/* Preview area */}
                <div className="relative preview-lmht hex-grid h-56 sm:h-64">
                  {/* Corner ribbon */}
                  <div className="ribbon" style={{ background:"linear-gradient(135deg,#f43f5e,#dc2626)" }}>-30%</div>

                  {/* Top-right meta */}
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded backdrop-blur-md text-white/90"
                      style={{ background:"rgba(0,0,0,.3)" }}>#ACC8425</span>
                  </div>

                  {/* Champion silhouette area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Rank shield */}
                      <div className="rank-shield w-24 h-24 mb-3"
                        style={{ background:"linear-gradient(135deg,#fbbf24,#f59e0b)", boxShadow:"0 8px 32px rgba(245,158,11,.5)" }}>
                        <Trophy className="w-9 h-9 text-white drop-shadow-lg" />
                      </div>
                      {/* Glow under shield */}
                      <div className="absolute -inset-4 -z-10 rounded-full opacity-50 blur-2xl" style={{ background:"#f59e0b" }} />
                    </div>
                  </div>

                  {/* Bottom-left: rank label */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg backdrop-blur-md"
                    style={{ background:"rgba(0,0,0,.4)" }}>
                    <Trophy className="w-3 h-3 text-white" />
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">Kim Cương 1</span>
                  </div>
                  {/* Bottom-right: views */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] font-medium text-white/90 px-2 py-1 rounded-lg backdrop-blur-md"
                    style={{ background:"rgba(0,0,0,.4)" }}>
                    <Eye className="w-3 h-3" /> 5.2k
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge" style={{ background:"rgba(124,58,237,.2)", color:"#a78bfa", border:"1px solid rgba(124,58,237,.4)" }}>
                      Liên Minh Huyền Thoại
                    </span>
                  </div>

                  <h3 className="text-base font-bold leading-snug mb-3" style={{ color:"var(--fg)" }}>
                    Acc LMHT Kim Cương 1 — 80 tướng + 15 skin legendary
                  </h3>

                  {/* Mini stats grid */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { l:"Tướng",  v:"80+" },
                      { l:"Skin",   v:"15"  },
                      { l:"Win %",  v:"68%" },
                    ].map(s => (
                      <div key={s.l} className="text-center p-2 rounded-xl" style={{ background:"rgba(255,255,255,.04)" }}>
                        <div className="text-base font-bold" style={{ fontFamily:"var(--font-russo),sans-serif", color:"#a78bfa" }}>{s.v}</div>
                        <div className="text-[9px] uppercase tracking-wider" style={{ color:"var(--fg3)" }}>{s.l}</div>
                      </div>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-end justify-between pt-3" style={{ borderTop:"1px solid var(--border)" }}>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color:"var(--fg3)" }}>Giá bán</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold" style={{ fontFamily:"var(--font-russo),sans-serif", color:"#fb7185" }}>
                          850K<span className="text-xs">đ</span>
                        </span>
                        <span className="text-xs line-through" style={{ color:"var(--fg4)" }}>1.2tr</span>
                      </div>
                    </div>
                    <button className="px-4 py-2.5 rounded-xl text-xs font-bold text-white btn-primary cursor-pointer flex items-center gap-1.5">
                      Xem Acc <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
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
