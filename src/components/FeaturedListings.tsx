import { Shield, Star, Clock, Eye, ChevronRight, BadgeCheck } from "lucide-react";

const listings = [
  {
    id: 1,
    game: "LMHT",
    gameColor: "#7C3AED",
    title: "Acc LMHT Kim Cương 1 - 80 tướng - Full skin",
    rank: "Kim Cương I",
    price: "850.000đ",
    seller: "NguyenGamer",
    verified: true,
    rating: 4.9,
    reviews: 127,
    views: "2.4k",
    posted: "2 giờ trước",
    server: "Máy chủ VN",
    highlights: ["80+ tướng", "15 skin", "Không bị ban"],
  },
  {
    id: 2,
    game: "Free Fire",
    gameColor: "#F43F5E",
    title: "Acc Free Fire Thách Đấu - Nhiều skin súng hiếm",
    rank: "Thách Đấu",
    price: "650.000đ",
    seller: "FFmaster88",
    verified: true,
    rating: 4.7,
    reviews: 89,
    views: "1.8k",
    posted: "5 giờ trước",
    server: "VN Server",
    highlights: ["30+ skin súng", "Garena VN", "Email gốc"],
  },
  {
    id: 3,
    game: "PUBG Mobile",
    gameColor: "#F59E0B",
    title: "Acc PUBG Conqueror - Nhiều outfit độc lạ",
    rank: "Conqueror",
    price: "1.200.000đ",
    seller: "PUBGking99",
    verified: false,
    rating: 4.5,
    reviews: 43,
    views: "3.1k",
    posted: "1 ngày trước",
    server: "Asia",
    highlights: ["Conqueror frame", "25 bộ trang phục", "RP Season cao"],
  },
  {
    id: 4,
    game: "Genshin",
    gameColor: "#A78BFA",
    title: "Acc Genshin AR55 - Nhiều nhân vật 5 sao",
    rank: "AR55",
    price: "2.500.000đ",
    seller: "GenshinVN",
    verified: true,
    rating: 5.0,
    reviews: 31,
    views: "4.2k",
    posted: "3 giờ trước",
    server: "Asia",
    highlights: ["12 nhân vật 5*", "C6 nhiều nhân vật", "AR55"],
  },
  {
    id: 5,
    game: "Liên Quân",
    gameColor: "#10B981",
    title: "Acc Liên Quân Huyền Thoại - Full tướng VN",
    rank: "Huyền Thoại",
    price: "480.000đ",
    seller: "LienQuan2024",
    verified: true,
    rating: 4.8,
    reviews: 67,
    views: "1.2k",
    posted: "30 phút trước",
    server: "VN",
    highlights: ["Full tướng VN", "15 trang phục", "Huyền Thoại S5"],
  },
  {
    id: 6,
    game: "Valorant",
    gameColor: "#06B6D4",
    title: "Acc Valorant Radiant - Agent đầy đủ",
    rank: "Radiant",
    price: "3.200.000đ",
    seller: "ValoProVN",
    verified: true,
    rating: 4.9,
    reviews: 22,
    views: "5.6k",
    posted: "1 giờ trước",
    server: "SEA",
    highlights: ["Radiant rank", "20 agent", "Skin Vandal hiếm"],
  },
];

export default function FeaturedListings() {
  return (
    <section id="listings" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2
            className="text-3xl sm:text-4xl mb-2"
            style={{
              fontFamily: "var(--font-russo), sans-serif",
              color: "var(--color-foreground)",
            }}
          >
            Tin Đăng{" "}
            <span className="neon-text-rose" style={{ color: "var(--color-accent)" }}>
              Nổi Bật
            </span>
          </h2>
          <p className="text-sm" style={{ color: "var(--color-muted-text)" }}>
            Các tin đăng được xem nhiều nhất hôm nay
          </p>
        </div>
        <button
          className="hidden sm:flex items-center gap-1 text-sm transition-colors duration-200 hover:text-purple-300 cursor-pointer"
          style={{ color: "var(--color-muted-text)" }}
        >
          Xem tất cả <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Disclaimer */}
      <div
        className="flex items-start gap-3 p-4 rounded-xl border mb-8 text-sm"
        style={{
          background: "#F59E0B0D",
          borderColor: "#F59E0B33",
          color: "#F59E0B",
        }}
        role="note"
        aria-label="Lưu ý pháp lý"
      >
        <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <p style={{ color: "#FCD34D", lineHeight: 1.6 }}>
          <strong>Lưu ý:</strong> Các tin đăng dưới đây là nội dung do người dùng tự đăng.
          ShopAccGame.net chỉ cung cấp nền tảng quảng cáo — không trực tiếp mua bán, không bảo lãnh giao dịch.
          Người mua và người bán tự thỏa thuận và chịu trách nhiệm về giao dịch của mình.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {listings.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border overflow-hidden transition-all duration-300 card-glow cursor-pointer group hover:scale-[1.01]"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
            role="article"
            aria-label={item.title}
          >
            {/* Card header */}
            <div
              className="h-2 w-full"
              style={{ background: `linear-gradient(90deg, ${item.gameColor}, ${item.gameColor}88)` }}
            />

            <div className="p-5">
              {/* Game badge + verified */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-semibold"
                  style={{
                    background: item.gameColor + "22",
                    color: item.gameColor,
                    border: `1px solid ${item.gameColor}44`,
                  }}
                >
                  {item.game}
                </span>
                <div className="flex items-center gap-2">
                  {item.verified && (
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "var(--color-success)" }}
                      title="Người bán đã xác minh"
                    >
                      <BadgeCheck className="w-3.5 h-3.5" />
                      Xác minh
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-semibold text-sm mb-2 line-clamp-2 leading-snug"
                style={{ color: "var(--color-foreground)" }}
              >
                {item.title}
              </h3>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs px-2 py-0.5 rounded-md"
                    style={{
                      background: "var(--color-muted)",
                      color: "var(--color-muted-text)",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Rank + Server */}
              <div
                className="flex items-center gap-3 text-xs mb-4"
                style={{ color: "var(--color-muted-text)" }}
              >
                <span>
                  <span style={{ color: item.gameColor }}>●</span> {item.rank}
                </span>
                <span>• {item.server}</span>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-xl font-bold"
                    style={{
                      fontFamily: "var(--font-russo), sans-serif",
                      color: "var(--color-accent)",
                    }}
                  >
                    {item.price}
                  </div>
                </div>
                <button
                  className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 hover:opacity-90 cursor-pointer"
                  style={{ background: "var(--color-primary)", color: "#fff" }}
                  aria-label={`Xem chi tiết: ${item.title}`}
                >
                  Xem Chi Tiết
                </button>
              </div>

              {/* Footer meta */}
              <div
                className="flex items-center justify-between mt-3 pt-3 border-t text-xs"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-muted-text)",
                }}
              >
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3" style={{ color: "var(--color-gold)" }} />
                  <span style={{ color: "var(--color-gold)" }}>{item.rating}</span>
                  <span>({item.reviews} đánh giá)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {item.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.posted}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          className="px-8 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 hover:border-purple-500 hover:text-purple-300 cursor-pointer"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-foreground)",
          }}
        >
          Xem Tất Cả Tin Đăng ({">"}12,000 tin)
        </button>
      </div>
    </section>
  );
}
