"use client";
import { useState } from "react";
import { Search, Flame, TrendingUp, Users, Zap, ArrowRight, Shield } from "lucide-react";

const hot = ["LMHT Kim Cương","Free Fire Thách Đấu","PUBG Conqueror","Genshin AR55","Valorant Radiant"];

const stats = [
  { val: "12,500+", label: "Tin đăng", icon: TrendingUp, color: "#9f67ff" },
  { val: "48K+",    label: "Thành viên", icon: Users,     color: "#f43f5e" },
  { val: "99.2%",   label: "Phản hồi",  icon: Zap,        color: "#f59e0b" },
];

export default function HeroSection() {
  const [q, setQ] = useState("");

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden scanline-hero noise">

      {/* ── Deep background layers ── */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Purple blob top-center */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-25 float"
        style={{ background: "radial-gradient(ellipse,#7c3aed 0%,transparent 65%)", filter: "blur(80px)" }} />
      {/* Rose blob bottom-left */}
      <div className="absolute bottom-0 -left-32 w-[600px] h-[400px] rounded-full opacity-15 float2"
        style={{ background: "radial-gradient(ellipse,#f43f5e 0%,transparent 65%)", filter: "blur(100px)" }} />
      {/* Cyan blob right */}
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse,#06b6d4 0%,transparent 65%)", filter: "blur(80px)" }} />

      {/* ── Decorative orbs ── */}
      <div className="absolute top-1/4 left-[8%] w-3 h-3 rounded-full opacity-60 float" style={{ background: "#9f67ff", boxShadow: "0 0 12px #9f67ff" }} />
      <div className="absolute top-2/3 left-[15%] w-2 h-2 rounded-full opacity-40 float2" style={{ background: "#f43f5e", boxShadow: "0 0 8px #f43f5e" }} />
      <div className="absolute top-1/3 right-[12%] w-2 h-2 rounded-full opacity-50 float" style={{ background: "#06b6d4", boxShadow: "0 0 8px #06b6d4" }} />
      <div className="absolute bottom-1/4 right-[20%] w-4 h-4 rounded-full opacity-30 float2" style={{ background: "#f59e0b", boxShadow: "0 0 14px #f59e0b" }} />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 text-center w-full">

        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold uppercase tracking-wider"
          style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.35)", color: "#c4b5fd" }}>
          <Flame className="w-3.5 h-3.5" style={{ color: "#f43f5e" }} />
          #1 Sàn Đăng Tin Acc Game Việt Nam
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#10b981", boxShadow: "0 0 6px #10b981" }} />
          <span style={{ color: "#10b981" }}>ONLINE</span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-russo),sans-serif", fontSize: "clamp(2.8rem,7vw,5.5rem)" }}>
          <span className="block" style={{ color: "var(--fg)" }}>Mua Bán</span>
          <span className="block grad-purple text-glow-purple">Tài Khoản Game</span>
          <span className="block" style={{ color: "var(--fg)" }}>Uy Tín Nhất</span>
        </h1>

        <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--fg2)" }}>
          Nền tảng đăng tin trung gian — kết nối hàng nghìn người mua &amp; bán<br className="hidden sm:block" />
          tài khoản game mỗi ngày với mức giá tốt nhất thị trường.
        </p>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative p-[1px] rounded-2xl" style={{ background: "linear-gradient(135deg,#7c3aed66,#f43f5e33,#7c3aed22)" }}>
            <div className="flex items-center gap-3 rounded-2xl px-4 py-2" style={{ background: "var(--surface)" }}>
              <Search className="w-5 h-5 flex-shrink-0" style={{ color: "var(--fg3)" }} />
              <input
                type="text"
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Tìm kiếm: LMHT Kim Cương, PUBG Conqueror, Genshin AR55..."
                className="flex-1 bg-transparent outline-none text-sm py-2"
                style={{ color: "var(--fg)", caretColor: "#9f67ff" }}
                aria-label="Tìm kiếm tài khoản game"
              />
              <button
                className="flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold text-white btn-primary cursor-pointer"
                aria-label="Tìm kiếm"
              >
                Tìm Ngay
              </button>
            </div>
          </div>
        </div>

        {/* Hot searches */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          <span className="flex items-center gap-1 text-xs" style={{ color: "var(--fg3)" }}>
            <Flame className="w-3 h-3" style={{ color: "#f43f5e" }} /> Hot:
          </span>
          {hot.map((tag) => (
            <button key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer hover:scale-105"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "var(--fg2)" }}
            >{tag}</button>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap">
          {stats.map(({ val, label, icon: Icon, color }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4" style={{ color }} />
                <span className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "var(--font-russo),sans-serif", color }}>
                  {val}
                </span>
              </div>
              <span className="text-xs" style={{ color: "var(--fg3)" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white btn-rose cursor-pointer">
            <Zap className="w-4 h-4" /> Đăng Tin Miễn Phí
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm btn-ghost cursor-pointer" style={{ color: "var(--fg2)" }}>
            Xem Tin Đăng <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-xs flex items-center justify-center gap-1.5" style={{ color: "var(--fg3)" }}>
          <Shield className="w-3 h-3" style={{ color: "#10b981" }} />
          Nền tảng đăng tin trung gian — không mua bán trực tiếp, không giữ tiền
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom,transparent,var(--bg))" }} />
    </section>
  );
}
