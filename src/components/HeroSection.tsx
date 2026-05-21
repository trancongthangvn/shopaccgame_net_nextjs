"use client";
import { useState } from "react";
import { Search, TrendingUp, Shield, Users, Zap } from "lucide-react";

const trending = ["LMHT", "Free Fire", "PUBG", "Genshin", "Valorant"];

const stats = [
  { label: "Tin đăng", value: "12,500+", icon: TrendingUp },
  { label: "Thành viên", value: "48,000+", icon: Users },
  { label: "Giao dịch/ngày", value: "320+", icon: Zap },
];

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative overflow-hidden grid-bg scanlines min-h-[540px] flex items-center">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #7C3AED22 0%, transparent 70%)",
        }}
      />

      {/* Decorative orbs */}
      <div
        className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-10 float-anim"
        style={{
          background:
            "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-10 left-10 w-48 h-48 rounded-full opacity-10 float-anim"
        style={{
          background: "radial-gradient(circle, #F43F5E 0%, transparent 70%)",
          filter: "blur(40px)",
          animationDelay: "2s",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-sm"
          style={{
            borderColor: "var(--color-border-glow)",
            background: "#7C3AED18",
            color: "var(--color-secondary)",
          }}
        >
          <Shield className="w-4 h-4" />
          Sàn đăng tin uy tín — Minh bạch & An toàn
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl mb-4 leading-tight"
          style={{ fontFamily: "var(--font-russo), sans-serif" }}
        >
          <span className="neon-text-purple" style={{ color: "var(--color-secondary)" }}>
            Tìm Acc Game
          </span>
          <br />
          <span style={{ color: "var(--color-foreground)" }}>Chất Lượng Nhất</span>
          <br />
          <span className="neon-text-rose" style={{ color: "var(--color-accent)" }}>
            Giá Tốt Nhất
          </span>
        </h1>

        <p
          className="text-lg mb-10 max-w-2xl mx-auto"
          style={{ color: "var(--color-muted-text)" }}
        >
          Nền tảng đăng tin mua bán tài khoản game hàng đầu Việt Nam.
          Tìm kiếm từ hàng nghìn tin đăng được xác minh, giao dịch trực tiếp giữa người mua và người bán.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div
            className="flex items-center gap-3 rounded-2xl border p-2 transition-all duration-300"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border-glow)",
              boxShadow: "0 0 24px #7C3AED33",
            }}
          >
            <Search
              className="w-5 h-5 ml-2 flex-shrink-0"
              style={{ color: "var(--color-muted-text)" }}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm kiếm: LMHT rank Kim Cương, PUBG nhiều skin..."
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "var(--color-foreground)" }}
              aria-label="Tìm kiếm tài khoản game"
            />
            <button
              className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 cursor-pointer flex-shrink-0"
              style={{ background: "var(--color-primary)", color: "#fff" }}
              aria-label="Tìm kiếm"
            >
              Tìm Kiếm
            </button>
          </div>
        </div>

        {/* Trending tags */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <span className="text-xs" style={{ color: "var(--color-muted-text)" }}>
            Phổ biến:
          </span>
          {trending.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 rounded-full text-xs border transition-all duration-200 hover:border-purple-500 hover:text-purple-300 cursor-pointer"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-muted-text)",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="text-center">
              <div
                className="text-xl sm:text-2xl font-bold"
                style={{
                  fontFamily: "var(--font-russo), sans-serif",
                  color: "var(--color-secondary)",
                }}
              >
                {value}
              </div>
              <div className="flex items-center justify-center gap-1 text-xs mt-1"
                style={{ color: "var(--color-muted-text)" }}>
                <Icon className="w-3 h-3" />
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
