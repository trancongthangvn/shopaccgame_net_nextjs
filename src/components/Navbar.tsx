"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Gamepad2, Menu, X, Zap, Bell, Search, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Trang Chủ", href: "/" },
  { label: "Danh Mục", href: "#categories", sub: true },
  { label: "Hướng Dẫn", href: "#how-it-works" },
  { label: "Pháp Lý", href: "#legal" },
];

const games = ["Liên Minh Huyền Thoại","Free Fire","PUBG Mobile","Genshin Impact","Liên Quân","Valorant","Minecraft"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,7,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124,58,237,0.15)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-xl btn-primary opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-full h-full rounded-xl flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
          </div>
          <span className="text-[15px] font-bold" style={{ fontFamily: "var(--font-russo),sans-serif" }}>
            <span className="grad-purple">ShopAcc</span>
            <span className="grad-rose">Game</span>
            <span style={{ color: "var(--fg3)" }}>.net</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            l.sub ? (
              <div key={l.label} className="relative" onMouseLeave={() => setSubOpen(false)}>
                <button
                  onMouseEnter={() => setSubOpen(true)}
                  className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/5 cursor-pointer"
                  style={{ color: "var(--fg2)" }}
                >
                  {l.label} <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>
                {subOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-52 rounded-2xl p-1.5 shadow-2xl border"
                    style={{ background: "var(--surface2)", borderColor: "var(--border2)" }}
                  >
                    {games.map((g) => (
                      <a key={g} href="#categories"
                        className="block px-3 py-2 rounded-xl text-sm transition-colors hover:bg-white/5"
                        style={{ color: "var(--fg2)" }}
                        onClick={() => setSubOpen(false)}
                      >{g}</a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={l.label} href={l.href}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/5"
                style={{ color: "var(--fg2)" }}
              >{l.label}</Link>
            )
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <button className="p-2.5 rounded-xl transition-colors hover:bg-white/5 cursor-pointer" style={{ color: "var(--fg3)" }} aria-label="Tìm kiếm">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-2.5 rounded-xl transition-colors hover:bg-white/5 cursor-pointer relative" style={{ color: "var(--fg3)" }} aria-label="Thông báo">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full" style={{ background: "var(--rose)" }} />
          </button>
          <div className="w-px h-5 mx-1" style={{ background: "var(--border)" }} />
          <button className="px-4 py-2 rounded-xl text-sm font-medium transition-colors btn-ghost cursor-pointer" style={{ color: "var(--fg2)" }}>
            Đăng Nhập
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white btn-rose cursor-pointer">
            <Zap className="w-3.5 h-3.5" /> Đăng Tin
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl transition-colors hover:bg-white/5 cursor-pointer" style={{ color: "var(--fg)" }} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t" style={{ background: "rgba(7,7,20,0.98)", borderColor: "var(--border)" }}>
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-white/5"
                style={{ color: "var(--fg2)" }}
                onClick={() => setOpen(false)}
              >{l.label}</a>
            ))}
            <div className="pt-3 flex gap-2">
              <button className="flex-1 py-2.5 rounded-xl text-sm font-medium btn-ghost cursor-pointer" style={{ color: "var(--fg2)" }}>Đăng Nhập</button>
              <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold text-white btn-rose cursor-pointer">
                <Zap className="w-3.5 h-3.5" /> Đăng Tin
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
