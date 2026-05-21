"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Gamepad2, Menu, X, Zap, Search, Heart, User } from "lucide-react";

const links = [
  { label: "Trang Chủ",   href: "/" },
  { label: "Tin Đăng",    href: "#listings" },
  { label: "Flash Sale",  href: "#flash",   hot: true },
  { label: "Hướng Dẫn",   href: "#how-it-works" },
  { label: "Pháp Lý",     href: "#legal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,7,15,0.85)" : "rgba(7,7,15,0.4)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(124,58,237,0.2)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="relative w-9 h-9 rounded-xl btn-primary flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-white relative z-10" />
          </div>
          <span className="text-base font-bold leading-none" style={{ fontFamily: "var(--font-gilroy),sans-serif" }}>
            <span className="grad-purple">Shop</span><span className="grad-rose">Acc</span><span className="text-white">Game</span>
            <span className="text-xs ml-0.5" style={{ color: "var(--fg3)" }}>.net</span>
          </span>
        </Link>

        {/* Inline search (desktop) */}
        <div className="hidden lg:flex flex-1 max-w-md">
          <div className="flex items-center gap-2 w-full rounded-xl px-3 h-9 transition-colors border focus-within:border-purple-500"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.06)" }}>
            <Search className="w-4 h-4" style={{ color: "var(--fg3)" }} />
            <input
              type="text"
              placeholder="Tìm acc LMHT, Free Fire, PUBG..."
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "var(--fg)" }}
              aria-label="Tìm kiếm"
            />
            <kbd className="hidden md:inline text-2xs px-1.5 py-0.5 rounded font-mono" style={{ background: "rgba(255,255,255,0.06)", color: "var(--fg3)" }}>⌘K</kbd>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5 flex-shrink-0">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="relative px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/5"
              style={{ color: "var(--fg2)" }}
            >
              {l.label}
              {l.hot && (
                <span className="absolute -top-0.5 -right-0.5 text-2xs px-1 rounded font-bold text-white" style={{ background: "#f43f5e" }}>HOT</span>
              )}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 ml-auto md:ml-0">
          <button className="hidden sm:flex w-9 h-9 rounded-lg items-center justify-center hover:bg-white/5 transition-colors cursor-pointer" style={{ color: "var(--fg2)" }} aria-label="Yêu thích">
            <Heart className="w-4 h-4" />
          </button>
          <button className="hidden sm:flex w-9 h-9 rounded-lg items-center justify-center hover:bg-white/5 transition-colors cursor-pointer" style={{ color: "var(--fg2)" }} aria-label="Tài khoản">
            <User className="w-4 h-4" />
          </button>
          <button className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-bold text-white btn-rose cursor-pointer">
            <Zap className="w-3.5 h-3.5" /> Đăng Tin
          </button>

          {/* Mobile menu */}
          <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/5 cursor-pointer" style={{ color: "var(--fg)" }} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t px-4 py-3 space-y-1" style={{ background: "rgba(7,7,15,0.98)", borderColor: "rgba(124,58,237,0.2)" }}>
          <div className="flex items-center gap-2 rounded-xl px-3 h-10 mb-3"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <Search className="w-4 h-4" style={{ color: "var(--fg3)" }} />
            <input placeholder="Tìm kiếm..." className="flex-1 bg-transparent outline-none text-sm" style={{ color: "var(--fg)" }} />
          </div>
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors"
              style={{ color: "var(--fg2)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
              {l.hot && <span className="text-2xs px-1.5 rounded font-bold text-white" style={{ background: "#f43f5e" }}>HOT</span>}
            </a>
          ))}
          <div className="pt-2">
            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white btn-rose cursor-pointer">
              <Zap className="w-3.5 h-3.5" /> Đăng Tin Miễn Phí
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
