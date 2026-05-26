"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, BadgeCheck, Trophy, Eye, Clock, Star, Shield, MessageCircle, Phone, Share2, Flag, ChevronRight } from "lucide-react";
import type { Listing } from "@/data/listings";
import { listings } from "@/data/listings";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import { useFavorites } from "@/lib/favorites";
import { useToast } from "@/components/Toast";

export default function ListingDetail({ listing: l }: { listing: Listing }) {
  const { isFav, toggle } = useFavorites();
  const { push } = useToast();
  const [showBuy, setShowBuy] = useState(false);

  const related = listings.filter(x => x.gameKey === l.gameKey && x.id !== l.id).slice(0, 4);

  const handleFav = () => {
    const now = toggle(l.id);
    push(now ? "Đã thêm vào yêu thích" : "Đã bỏ yêu thích", "success");
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) await navigator.share({ title: l.title, url });
      else { await navigator.clipboard.writeText(url); push("Đã sao chép liên kết", "success"); }
    } catch { /* user cancelled */ }
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs mb-6 flex-wrap" style={{ color: "var(--fg3)" }}>
          <Link href="/" className="hover:opacity-80 transition-opacity">Trang chủ</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/tim-kiem/?game=${l.gameKey}`} className="hover:opacity-80 transition-opacity">{l.game}</Link>
          <ChevronRight className="w-3 h-3" />
          <span style={{ color: "var(--fg2)" }}>#{l.id}</span>
        </nav>

        <Link href="/" className="inline-flex items-center gap-1.5 text-sm mb-4 hover:opacity-80 transition-opacity" style={{ color: "var(--fg2)" }}>
          <ArrowLeft className="w-4 h-4" /> Quay lại
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT — preview + description */}
          <div className="lg:col-span-2 space-y-6">

            {/* Hero preview */}
            <div className={`relative h-72 sm:h-96 rounded-2xl ${l.preview} hex-grid overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rank-shield w-28 h-28"
                  style={{ background: `${l.accent}`, boxShadow: `0 16px 48px ${l.color}66` }}>
                  <Trophy className="w-10 h-10 text-white" />
                </div>
              </div>
              {l.badge && (
                <div className="absolute top-4 left-4">
                  <span className={`badge ${l.badge === "hot" ? "badge-hot" : l.badge === "sale" ? "badge-sale" : l.badge === "new" ? "badge-new" : "badge-vip"}`}>
                    {l.badge === "hot" ? "🔥 Hot" : l.badge === "sale" ? "% Sale" : l.badge === "new" ? "✨ Mới" : "★ VIP"}
                  </span>
                </div>
              )}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-md" style={{ background: "rgba(0,0,0,0.4)" }}>
                <Trophy className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">{l.rank}</span>
              </div>
              <div className="absolute bottom-4 right-4 text-xs font-mono px-2 py-1 rounded backdrop-blur-md text-white/80" style={{ background: "rgba(0,0,0,0.4)" }}>
                #{l.id}
              </div>
            </div>

            {/* Title + meta */}
            <div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="badge" style={{ background: l.color + "22", color: l.color, border: `1px solid ${l.color}44` }}>
                  {l.game}
                </span>
                {l.verified && (
                  <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: "#10b981" }}>
                    <BadgeCheck className="w-3.5 h-3.5" /> Đã xác minh
                  </span>
                )}
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--fg3)" }}>
                  <Eye className="w-3.5 h-3.5" /> {l.views}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: "var(--fg3)" }}>
                  <Clock className="w-3.5 h-3.5" /> {l.posted}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-2" style={{ color: "var(--fg)" }}>
                {l.title}
              </h1>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {l.tags.map(t => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-lg font-medium" style={{ background: "var(--scrim)", color: "var(--fg2)" }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="card p-5">
              <h2 className="text-lg font-bold mb-3" style={{ color: "var(--fg)" }}>Mô tả chi tiết</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg2)" }}>
                {l.description || "Người bán chưa cung cấp mô tả chi tiết. Liên hệ trực tiếp để biết thêm thông tin."}
              </p>
            </div>

            {/* Safety notice */}
            <div className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}>
              <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#fbbf24" }} />
              <div className="text-xs leading-relaxed" style={{ color: "#fcd34d" }}>
                <strong>An toàn giao dịch:</strong> Luôn kiểm tra tài khoản trước khi thanh toán. Khuyến nghị dùng dịch vụ trung gian uy tín. ShopAccGame.net chỉ là nền tảng đăng tin, không bảo lãnh giao dịch.
              </div>
            </div>
          </div>

          {/* RIGHT — sticky purchase panel */}
          <aside className="space-y-4 lg:sticky lg:top-20 self-start">

            {/* Price card */}
            <div className="card p-5">
              <div className="text-xs uppercase tracking-wider font-bold mb-1" style={{ color: "var(--fg3)" }}>Giá bán</div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-extrabold" style={{ color: l.color, fontFamily: "var(--font-gilroy),sans-serif" }}>
                  {l.price}<span className="text-lg">đ</span>
                </span>
                {l.oldPrice && (
                  <span className="text-sm line-through" style={{ color: "var(--fg4)" }}>{l.oldPrice}đ</span>
                )}
              </div>

              <button
                onClick={() => setShowBuy(true)}
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white mb-2.5 transition-all cursor-pointer"
                style={{
                  background: `${l.color}`,
                  boxShadow: `0 8px 24px ${l.color}55`,
                }}
              >
                Mua ngay
              </button>

              <button
                onClick={handleFav}
                className="w-full py-3 rounded-xl text-sm font-semibold mb-2 transition-all cursor-pointer flex items-center justify-center gap-2"
                style={{
                  background: isFav(l.id) ? "rgba(244,63,94,0.12)" : "var(--scrim)",
                  border: `1px solid ${isFav(l.id) ? "rgba(244,63,94,0.4)" : "var(--border)"}`,
                  color: isFav(l.id) ? "#f43f5e" : "var(--fg2)",
                }}
              >
                <Heart className={`w-4 h-4 ${isFav(l.id) ? "fill-current" : ""}`} />
                {isFav(l.id) ? "Đã lưu" : "Yêu thích"}
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button onClick={handleShare} className="py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer" style={{ background: "var(--scrim)", border: "1px solid var(--border)", color: "var(--fg2)" }}>
                  <Share2 className="w-3.5 h-3.5" /> Chia sẻ
                </button>
                <button onClick={() => push("Đã ghi nhận báo cáo. Cảm ơn bạn.", "info")} className="py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer" style={{ background: "var(--scrim)", border: "1px solid var(--border)", color: "var(--fg2)" }}>
                  <Flag className="w-3.5 h-3.5" /> Báo cáo
                </button>
              </div>
            </div>

            {/* Seller card */}
            {l.seller && (
              <div className="card p-5">
                <div className="text-xs uppercase tracking-wider font-bold mb-3" style={{ color: "var(--fg3)" }}>Người bán</div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                    style={{ background: `${l.color}` }}>
                    {l.seller.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold" style={{ color: "var(--fg)" }}>{l.seller.name}</div>
                    <div className="flex items-center gap-2 text-2xs" style={{ color: "var(--fg3)" }}>
                      <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-current" style={{ color: "#fbbf24" }} /> {l.seller.rating}</span>
                      <span>· {l.seller.sales} giao dịch</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => push("Đang kết nối với người bán…", "info")} className="py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer text-white btn-primary">
                    <MessageCircle className="w-3.5 h-3.5" /> Chat
                  </button>
                  <button onClick={() => push("Số điện thoại đã sao chép: 09xx xxx xxx", "success")} className="py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer" style={{ background: "var(--scrim)", border: "1px solid var(--border)", color: "var(--fg2)" }}>
                    <Phone className="w-3.5 h-3.5" /> Gọi
                  </button>
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Related listings */}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--fg)" }}>Tin {l.game} liên quan</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map(r => (
                <Link key={r.id} href={`/acc/${r.id}/`} className="card card-hover overflow-hidden">
                  <div className={`relative h-28 ${r.preview} hex-grid`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rank-shield w-10 h-10" style={{ background: `${r.accent}` }}>
                        <Trophy className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-xs font-semibold leading-snug line-clamp-2 mb-2 min-h-[2.2rem]" style={{ color: "var(--fg)" }}>{r.title}</div>
                    <div className="text-base font-bold" style={{ color: r.color }}>{r.price}đ</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <FloatingChat />

      {/* Buy modal */}
      {showBuy && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4" onClick={() => setShowBuy(false)} style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
          <div onClick={e => e.stopPropagation()} className="w-full max-w-md rounded-2xl p-6" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <h3 className="text-lg font-bold mb-1" style={{ color: "var(--fg)" }}>Xác nhận mua acc</h3>
            <p className="text-sm mb-4" style={{ color: "var(--fg2)" }}>Bạn sắp gửi yêu cầu mua tin <strong style={{ color: "var(--fg)" }}>#{l.id}</strong>.</p>

            <div className="rounded-xl p-4 mb-4" style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
              <div className="flex justify-between text-sm mb-1.5"><span style={{ color: "var(--fg3)" }}>Giá:</span><strong style={{ color: l.color }}>{l.price}đ</strong></div>
              <div className="flex justify-between text-sm mb-1.5"><span style={{ color: "var(--fg3)" }}>Phí trung gian:</span><span style={{ color: "var(--fg2)" }}>Miễn phí</span></div>
              <div className="flex justify-between text-sm pt-2 mt-2" style={{ borderTop: "1px solid var(--border)" }}><span style={{ color: "var(--fg)" }}><strong>Tổng:</strong></span><strong style={{ color: l.color }}>{l.price}đ</strong></div>
            </div>

            <div className="flex gap-2">
              <button onClick={() => setShowBuy(false)} className="flex-1 py-3 rounded-xl text-sm font-semibold cursor-pointer" style={{ background: "var(--scrim)", border: "1px solid var(--border)", color: "var(--fg2)" }}>
                Huỷ
              </button>
              <button onClick={() => { setShowBuy(false); push("Yêu cầu đã gửi! Người bán sẽ liên hệ trong 5 phút.", "success"); }} className="flex-1 py-3 rounded-xl text-sm font-bold text-white cursor-pointer" style={{ background: `${l.color}` }}>
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
