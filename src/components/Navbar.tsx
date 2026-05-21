"use client";
import { useState } from "react";
import Link from "next/link";
import { Shield, Menu, X, ChevronDown, Gamepad2, Zap } from "lucide-react";

const games = [
  "Liên Minh Huyền Thoại",
  "PUBG Mobile",
  "Free Fire",
  "Genshin Impact",
  "Valorant",
  "Liên Quân Mobile",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(15,15,35,0.92)",
        backdropFilter: "blur(16px)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 glitch flex-shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center pulse-glow"
              style={{ background: "var(--color-primary)" }}
            >
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-lg font-bold neon-text-purple hidden sm:block"
              style={{ fontFamily: "var(--font-russo), sans-serif" }}
            >
              ShopAcc<span style={{ color: "var(--color-accent)" }}>Game</span>
              <span style={{ color: "var(--color-muted-text)" }}>.net</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm transition-colors duration-200 hover:text-purple-400"
              style={{ color: "var(--color-muted-text)" }}
            >
              Trang Chủ
            </Link>

            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm transition-colors duration-200 hover:text-purple-400 cursor-pointer"
                style={{ color: "var(--color-muted-text)" }}
                onMouseEnter={() => setGamesOpen(true)}
                onMouseLeave={() => setGamesOpen(false)}
                aria-haspopup="true"
                aria-expanded={gamesOpen}
              >
                Danh Mục Game
                <ChevronDown className="w-4 h-4" />
              </button>
              {gamesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-52 rounded-xl border py-2 shadow-2xl"
                  style={{
                    background: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                  onMouseEnter={() => setGamesOpen(true)}
                  onMouseLeave={() => setGamesOpen(false)}
                >
                  {games.map((g) => (
                    <Link
                      key={g}
                      href={`#listings`}
                      className="block px-4 py-2 text-sm transition-colors duration-150 hover:bg-purple-900/30"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {g}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#how-it-works"
              className="text-sm transition-colors duration-200 hover:text-purple-400"
              style={{ color: "var(--color-muted-text)" }}
            >
              Hướng Dẫn
            </Link>
            <Link
              href="#legal"
              className="text-sm transition-colors duration-200 hover:text-purple-400"
              style={{ color: "var(--color-muted-text)" }}
            >
              Điều Khoản
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              className="text-sm px-4 py-2 rounded-lg border transition-all duration-200 hover:border-purple-500 cursor-pointer"
              style={{
                color: "var(--color-foreground)",
                borderColor: "var(--color-border)",
              }}
            >
              Đăng Nhập
            </button>
            <button
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 cursor-pointer neon-border-rose"
              style={{
                background: "var(--color-accent)",
                color: "#fff",
              }}
            >
              <Zap className="w-4 h-4" />
              Đăng Tin Ngay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg cursor-pointer transition-colors duration-200"
            style={{ color: "var(--color-foreground)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 py-4 space-y-3"
          style={{
            background: "var(--color-background-2)",
            borderColor: "var(--color-border)",
          }}
        >
          {["Trang Chủ", "Danh Mục Game", "Hướng Dẫn", "Điều Khoản"].map((item) => (
            <Link
              key={item}
              href="#"
              className="block py-2 text-sm transition-colors duration-200 hover:text-purple-400"
              style={{ color: "var(--color-muted-text)" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              className="w-full text-sm px-4 py-2.5 rounded-lg border transition-all duration-200 cursor-pointer"
              style={{
                color: "var(--color-foreground)",
                borderColor: "var(--color-border)",
              }}
            >
              Đăng Nhập
            </button>
            <button
              className="w-full flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-lg font-semibold cursor-pointer"
              style={{ background: "var(--color-accent)", color: "#fff" }}
            >
              <Zap className="w-4 h-4" />
              Đăng Tin Ngay
            </button>
          </div>
          <div
            className="flex items-center gap-2 pt-2 text-xs"
            style={{ color: "var(--color-muted-text)" }}
          >
            <Shield className="w-3 h-3 flex-shrink-0" style={{ color: "var(--color-success)" }} />
            Nền tảng đăng tin trung gian — giao dịch do người dùng tự thỏa thuận
          </div>
        </div>
      )}
    </nav>
  );
}
