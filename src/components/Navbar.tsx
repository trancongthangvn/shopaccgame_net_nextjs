"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Gamepad2, Menu, X, Zap, Search, Heart, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/lib/auth";
import { useFavorites } from "@/lib/favorites";

const links = [
  { label: "Trang Chủ",   href: "/" },
  { label: "Tin Đăng",    href: "/#listings" },
  { label: "Flash Sale",  href: "/#flash",   hot: true },
  { label: "Hướng Dẫn",   href: "/#how-it-works" },
  { label: "Pháp Lý",     href: "/#legal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [q, setQ] = useState("");
  const router = useRouter();
  const { user } = useAuth();
  const { ids: favIds } = useFavorites();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    router.push(`/tim-kiem/?q=${encodeURIComponent(q.trim())}`);
    setQ("");
    setOpen(false);
  };

  const openSearch = () => {
    if (typeof window !== "undefined") window.dispatchEvent(new Event("search:open"));
  };

  return (
    <header
      className="sticky top-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg-top)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid var(--nav-border)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="relative w-9 h-9 rounded-xl btn-primary flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-white relative z-10" />
          </div>
          <span className="text-base font-bold leading-none" style={{ fontFamily: "var(--font-gilroy),sans-serif" }}>
            <span className="grad-orange">Shop</span><span className="grad-rose">Acc</span><span style={{ color: "var(--fg)" }}>Game</span>
            <span className="text-xs ml-0.5" style={{ color: "var(--fg3)" }}>.net</span>
          </span>
        </Link>

        {/* Inline search (desktop) */}
        <form onSubmit={submitSearch} className="hidden lg:flex flex-1 max-w-md">
          <div className="flex items-center gap-2 w-full rounded-xl px-3 h-9 transition-colors border focus-within:border-orange-500"
            style={{ background: "var(--scrim)", borderColor: "var(--border)" }}>
            <Search className="w-4 h-4" style={{ color: "var(--fg3)" }} />
            <input
              type="text"
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Tìm acc LMHT, Free Fire, PUBG..."
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: "var(--fg)" }}
              aria-label="Tìm kiếm"
            />
            <button type="button" onClick={openSearch} className="hidden md:inline text-2xs px-1.5 py-0.5 rounded font-mono cursor-pointer" style={{ background: "var(--scrim2)", color: "var(--fg3)" }} aria-label="Tìm nhanh">⌘K</button>
          </div>
        </form>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 flex-shrink-0">
          {links.map((l) => (
            <Link key={l.label} href={l.href}
              className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-[var(--scrim2)] whitespace-nowrap ${l.hot ? 'pr-9' : ''}`}
              style={{ color: "var(--fg2)" }}
            >
              {l.label}
              {l.hot && (
                <span className="absolute top-1/2 -translate-y-1/2 right-1.5 text-2xs px-1.5 py-0.5 rounded font-bold text-white leading-none" style={{ background: "#f43f5e" }}>HOT</span>
              )}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 ml-auto md:ml-0">
          <ThemeToggle />
          <Link href="/tai-khoan/" className="relative hidden sm:flex w-9 h-9 rounded-lg items-center justify-center hover:bg-[var(--scrim2)] transition-colors cursor-pointer" style={{ color: "var(--fg2)" }} aria-label="Yêu thích">
            <Heart className="w-4 h-4" />
            {favIds.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full text-2xs font-bold text-white flex items-center justify-center" style={{ background: "#f43f5e" }}>
                {favIds.length}
              </span>
            )}
          </Link>
          <Link href={user ? "/tai-khoan/" : "/dang-nhap/"} className="hidden sm:flex w-9 h-9 rounded-lg items-center justify-center hover:bg-[var(--scrim2)] transition-colors cursor-pointer" style={{ color: "var(--fg2)" }} aria-label={user ? "Tài khoản" : "Đăng nhập"}>
            {user ? (
              <span className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-white text-xs" style={{ background: "#f97316" }}>
                {user.name.charAt(0).toUpperCase()}
              </span>
            ) : (
              <User className="w-4 h-4" />
            )}
          </Link>
          <Link href="/dang-tin/" className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-bold text-white btn-rose cursor-pointer">
            <Zap className="w-3.5 h-3.5" /> Đăng Tin
          </Link>

          {/* Mobile menu */}
          <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center hover:bg-[var(--scrim2)] cursor-pointer" style={{ color: "var(--fg)" }} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t px-4 py-3 space-y-1" style={{ background: "var(--nav-mobile-bg)", borderColor: "var(--nav-border)" }}>
          <form onSubmit={submitSearch} className="flex items-center gap-2 rounded-xl px-3 h-10 mb-3"
            style={{ background: "var(--scrim)", border: "1px solid var(--border)" }}>
            <Search className="w-4 h-4" style={{ color: "var(--fg3)" }} />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Tìm kiếm..." className="flex-1 bg-transparent outline-none text-sm" style={{ color: "var(--fg)" }} />
          </form>
          {links.map((l) => (
            <Link key={l.label} href={l.href}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-[var(--scrim2)] transition-colors"
              style={{ color: "var(--fg2)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
              {l.hot && <span className="text-2xs px-1.5 rounded font-bold text-white" style={{ background: "#f43f5e" }}>HOT</span>}
            </Link>
          ))}
          <Link href={user ? "/tai-khoan/" : "/dang-nhap/"} onClick={() => setOpen(false)} className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium hover:bg-[var(--scrim2)] transition-colors" style={{ color: "var(--fg2)" }}>
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {user ? user.name : "Đăng nhập"}</span>
          </Link>
          <div className="pt-2">
            <Link href="/dang-tin/" onClick={() => setOpen(false)} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white btn-rose cursor-pointer">
              <Zap className="w-3.5 h-3.5" /> Đăng Tin Miễn Phí
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
