"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Flame, Star, Trophy, Shield, Zap, ArrowRight, Sparkles, TrendingUp, Users, Eye, Crown, Wand2, Crosshair } from "lucide-react";

const hot = ["LMHT Kim Cương","Free Fire Thách Đấu","PUBG Conqueror","Genshin AR55","Valorant Radiant"];

const cards = [
  {
    id: "ACC8425", game: "LMHT", rank: "Kim Cương",
    price: "850K", oldPrice: "1.2tr", discount: "30%",
    icon: Crown, preview: "preview-lmht",
    color: "#60a5fa", accent: "#3b82f6",
    rotate: "-6deg",
    pos: { top: "20px", left: "0%" },
    z: 3,
  },
  {
    id: "ACC9012", game: "Genshin", rank: "AR55",
    price: "2.5tr", oldPrice: "",  discount: "",
    icon: Wand2, preview: "preview-genshin",
    color: "#c4b5fd", accent: "#6d28d9",
    rotate: "4deg",
    pos: { top: "150px", right: "0%" },
    z: 2,
  },
  {
    id: "ACC7733", game: "Free Fire", rank: "Thách Đấu",
    price: "650K", oldPrice: "950K", discount: "32%",
    icon: Crosshair, preview: "preview-ff",
    color: "#fb7185", accent: "#f43f5e",
    rotate: "-3deg",
    pos: { top: "300px", left: "8%" },
    z: 1,
  },
];

export default function HeroSection() {
  const [q, setQ] = useState("");
  const router = useRouter();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/tim-kiem/${q.trim() ? `?q=${encodeURIComponent(q.trim())}` : ""}`);
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 px-4 sm:px-6">
      {/* Background — single subtle grid, no glow orbs */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* ═════════ LEFT — Content ═════════ */}
          <div className="lg:col-span-7 max-w-2xl">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold"
              style={{ background:"var(--scrim)", border:"1px solid var(--border)", color:"var(--fg2)" }}>
              <span className="live-dot" />
              <span><span style={{ color:"#10b981" }}>230</span> đang online</span>
            </div>

            <h1 className="text-display mb-5 cursor-default">
              <span className="block" style={{ color:"var(--fg)" }}>Mua Bán Acc Game</span>
              <span className="block" style={{ color:"var(--fg)" }}>
                Uy Tín, <span className="grad-orange">Giá Tốt</span>
              </span>
              <span className="block text-3xl sm:text-4xl mt-2 font-bold" style={{ color:"var(--fg3)" }}>cho game thủ Việt Nam</span>
            </h1>

            <p className="text-base sm:text-lg mb-8 leading-relaxed max-w-lg" style={{ color:"var(--fg2)" }}>
              Sàn đăng tin trung gian kết nối <strong style={{ color: "var(--fg)" }}>48,000+</strong> người mua &amp; bán acc game.
              An toàn — Minh bạch — Không trung gian giữ tiền.
            </p>

            {/* Search */}
            <div className="mb-5">
              <form onSubmit={submitSearch} className="flex items-center gap-2 rounded-2xl pl-5 pr-2 h-14"
                style={{ background:"var(--surface)", border:"1px solid var(--border)" }}>
                <Search className="w-5 h-5 flex-shrink-0" style={{ color:"var(--fg3)" }} />
                <input
                  type="text" value={q} onChange={e=>setQ(e.target.value)}
                  placeholder="Tìm acc LMHT, PUBG, Free Fire, Genshin..."
                  className="flex-1 bg-transparent outline-none text-sm sm:text-base"
                  style={{ color:"var(--fg)" }}
                  aria-label="Tìm kiếm"
                />
                <button type="submit" className="h-10 px-5 rounded-xl text-sm font-bold text-white btn-primary cursor-pointer flex items-center gap-1.5">
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Tìm Acc</span>
                </button>
              </form>

              <div className="flex items-center gap-2 flex-wrap mt-4">
                <span className="text-xs flex items-center gap-1 font-semibold" style={{ color:"var(--fg3)" }}>
                  <Flame className="w-3 h-3" style={{ color:"#f43f5e" }} /> Hot:
                </span>
                {hot.map(t => (
                  <Link key={t} href={`/tim-kiem/?q=${encodeURIComponent(t)}`}
                    className="px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 cursor-pointer"
                    style={{ background:"var(--scrim)", border:"1px solid var(--scrim2)", color:"var(--fg2)" }}
                  >{t}</Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap mb-8">
              <Link href="/dang-tin/" className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white btn-rose cursor-pointer">
                <Zap className="w-4 h-4" /> Đăng Tin Miễn Phí
              </Link>
              <Link href="/tim-kiem/" className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold btn-ghost cursor-pointer" style={{ color:"var(--fg2)" }}>
                Xem Tin Đăng <ArrowRight className="w-4 h-4 bounce-x" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6" style={{ borderTop:"1px solid var(--border)" }}>
              {[
                { val:"12,500+", lbl:"Tin đăng",   icon:TrendingUp, c:"#f97316" },
                { val:"48K+",    lbl:"Thành viên", icon:Users,      c:"#fb7185" },
                { val:"4.9★",    lbl:"Đánh giá",   icon:Star,       c:"#fbbf24" },
              ].map(({val,lbl,icon:Icon,c}) => (
                <div key={lbl}>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Icon className="w-3.5 h-3.5" style={{ color:c }} />
                    <span className="text-xl sm:text-2xl font-bold" style={{ fontFamily:"var(--font-gilroy),sans-serif", color:c }}>{val}</span>
                  </div>
                  <div className="text-2xs uppercase tracking-widest" style={{ color:"var(--fg3)" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ═════════ RIGHT — 3 Floating Cards (v2 layout + v3 styling) ═════════ */}
          <div className="lg:col-span-5 relative hidden md:block">
            <div className="relative h-[600px] max-w-lg mx-auto">

              {/* Floating decorations removed — they were the dead giveaway "AI hero" pattern. */}

              {/* ── 3 Stacked Cards ── */}
              {cards.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.id}
                    className="absolute card overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:z-40"
                    style={{
                      width: "280px",
                      top: c.pos.top,
                      left: c.pos.left,
                      right: c.pos.right,
                      zIndex: c.z,
                      boxShadow: "var(--shadow)",
                    }}
                  >
                    {/* Ribbon (only if discount) */}
                    {c.discount && (
                      <div className="ribbon" style={{ background: "#f43f5e" }}>
                        -{c.discount}
                      </div>
                    )}

                    {/* Preview area */}
                    <div className={`relative h-32 ${c.preview} hex-grid overflow-hidden`}>
                      {/* Rank shield center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="rank-shield w-14 h-14"
                            style={{ background: c.color }}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Top-right ID */}
                      <div className="absolute top-2.5 right-2.5 text-2xs font-mono font-bold px-1.5 py-0.5 rounded backdrop-blur-md text-white/80"
                        style={{ background:"rgba(0,0,0,.35)" }}>#{c.id}</div>

                      {/* Bottom-left rank */}
                      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-1.5 py-0.5 rounded-md backdrop-blur-md"
                        style={{ background:"rgba(0,0,0,.4)" }}>
                        <Trophy className="w-2.5 h-2.5 text-white" />
                        <span className="text-2xs font-bold text-white uppercase tracking-wider">{c.rank}</span>
                      </div>
                    </div>

                    {/* Content footer */}
                    <div className="p-3">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="badge text-2xs" style={{ background:c.accent+"22", color:c.color, border:`1px solid ${c.accent}44`, padding:"2px 8px" }}>
                          {c.game}
                        </span>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-lg font-bold" style={{ fontFamily:"var(--font-gilroy),sans-serif", color:c.color }}>
                              {c.price}
                            </span>
                            {c.oldPrice && (
                              <span className="text-2xs line-through" style={{ color:"var(--fg4)" }}>{c.oldPrice}</span>
                            )}
                          </div>
                        </div>
                        <Link href={`/tim-kiem/?game=${c.game === "LMHT" ? "lmht" : c.game === "Genshin" ? "genshin" : "ff"}`} className="px-2.5 py-1.5 rounded-lg text-2xs font-bold text-white cursor-pointer flex items-center gap-1"
                          style={{ background: c.color }}>
                          Xem <ArrowRight className="w-2.5 h-2.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* ── Notification "Vừa mua" (bottom-right) ── */}
              <div className="absolute -bottom-2 right-0 z-30 flex items-center gap-2.5 px-3 py-2 rounded-xl pulse-soft"
                style={{ background:"rgba(20,20,20,.95)", backdropFilter:"blur(12px)", border:"1px solid rgba(16,185,129,.4)", boxShadow:"0 8px 24px rgba(0,0,0,.5)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:"rgba(16,185,129,.18)" }}>
                  <Zap className="w-4 h-4" style={{ color:"#10b981" }} />
                </div>
                <div className="leading-tight">
                  <div className="text-2xs font-bold" style={{ color:"#10b981" }}>Vừa mua thành công!</div>
                  <div className="text-2xs" style={{ color:"var(--fg3)" }}>Anh Minh · LMHT KC1 · 2 phút</div>
                </div>
              </div>

              {/* Floating neon dots removed */}
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-16 pt-8" style={{ borderTop:"1px solid var(--border)" }}>
          {[
            { t:"Bảo mật SSL 256-bit", i:Shield,     c:"#10b981" },
            { t:"Xác minh CCCD",       i:Sparkles,   c:"#f97316" },
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
