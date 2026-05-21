import { Star, Eye, Clock, BadgeCheck, ChevronRight, Shield, Flame } from "lucide-react";

const listings = [
  { id:1, game:"LMHT", color:"#7c3aed", accent:"#4f46e5",
    title:"Acc LMHT Kim Cương I — 80 tướng + 15 skin legendary",
    rank:"Kim Cương I", price:"850.000đ", oldPrice:"1.200.000đ",
    seller:"NguyenGamer", verified:true, rating:4.9, reviews:127,
    views:"2.4k", posted:"2 giờ trước",
    tags:["80+ tướng","15 skin","Email gốc"],
    hot: true },
  { id:2, game:"Free Fire", color:"#f43f5e", accent:"#dc2626",
    title:"Acc Free Fire Thách Đấu — Skin súng hiếm, avatar độc",
    rank:"Thách Đấu", price:"650.000đ", oldPrice:"",
    seller:"FFmaster88", verified:true, rating:4.7, reviews:89,
    views:"1.8k", posted:"5 giờ trước",
    tags:["30+ skin","Email gốc","Garena VN"],
    hot: true },
  { id:3, game:"PUBG", color:"#f59e0b", accent:"#d97706",
    title:"Acc PUBG Conqueror — Bộ trang phục siêu hiếm, RP cao",
    rank:"Conqueror", price:"1.200.000đ", oldPrice:"1.800.000đ",
    seller:"PUBGking99", verified:false, rating:4.5, reviews:43,
    views:"3.1k", posted:"1 ngày trước",
    tags:["Conqueror","25 outfit","RP Max"],
    hot: false },
  { id:4, game:"Genshin", color:"#a78bfa", accent:"#7c3aed",
    title:"Acc Genshin AR55 — 12 nhân vật 5★, nhiều C6",
    rank:"AR55", price:"2.500.000đ", oldPrice:"",
    seller:"GenshinVN", verified:true, rating:5.0, reviews:31,
    views:"4.2k", posted:"3 giờ trước",
    tags:["12 nhân vật 5★","C6 nhiều NV","Welkin x12"],
    hot: true },
  { id:5, game:"Liên Quân", color:"#10b981", accent:"#059669",
    title:"Acc Liên Quân Huyền Thoại — Full tướng VN Server",
    rank:"Huyền Thoại", price:"480.000đ", oldPrice:"700.000đ",
    seller:"LienQuan2024", verified:true, rating:4.8, reviews:67,
    views:"1.2k", posted:"30 phút trước",
    tags:["Full tướng VN","15 trang phục","S5 rank"],
    hot: false },
  { id:6, game:"Valorant", color:"#06b6d4", accent:"#0284c7",
    title:"Acc Valorant Radiant — 20 agent + skin Vandal hiếm",
    rank:"Radiant", price:"3.200.000đ", oldPrice:"",
    seller:"ValoProVN", verified:true, rating:4.9, reviews:22,
    views:"5.6k", posted:"1 giờ trước",
    tags:["Radiant","20 agent","Vandal hiếm"],
    hot: true },
];

export default function FeaturedListings() {
  return (
    <section id="listings" className="py-24 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-4 h-4" style={{ color: "#f43f5e" }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#f43f5e" }}>Nổi Bật</span>
            </div>
            <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-russo),sans-serif" }}>
              <span style={{ color: "var(--fg)" }}>Tin Đăng </span>
              <span className="grad-rose">Hôm Nay</span>
            </h2>
          </div>
          <button className="hidden sm:flex items-center gap-1 text-sm font-medium pb-1 cursor-pointer transition-colors hover:text-purple-400" style={{ color: "var(--fg3)" }}>
            Xem tất cả <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 p-4 rounded-xl mb-8 text-xs"
          style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)", color: "#fcd34d" }}
          role="note">
          <Shield className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
          <span style={{ color: "#fbbf24" }}>
            <strong>Lưu ý:</strong> Đây là nội dung do người dùng tự đăng. ShopAccGame.net chỉ cung cấp nền tảng quảng cáo — không trực tiếp mua bán và không bảo lãnh giao dịch. Người dùng tự thỏa thuận và chịu trách nhiệm.
          </span>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map((item) => (
            <article key={item.id}
              className="relative group rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer border-glow-hover"
              style={{ background: "var(--surface)" }}
              aria-label={item.title}
            >
              {/* Top color bar */}
              <div className="h-[3px]" style={{ background: `linear-gradient(90deg,${item.color},${item.accent})` }} />

              {/* HOT badge */}
              {item.hot && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="tag" style={{ background: "#f43f5e22", color: "#f43f5e", border: "1px solid #f43f5e44" }}>
                    🔥 Hot
                  </span>
                </div>
              )}

              <div className="p-5">
                {/* Game + verified */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="tag" style={{ background: item.color + "22", color: item.color, border: `1px solid ${item.color}44` }}>
                    {item.game}
                  </span>
                  {item.verified && (
                    <span className="flex items-center gap-1 text-xs" style={{ color: "#10b981" }}>
                      <BadgeCheck className="w-3.5 h-3.5" /> Đã xác minh
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-semibold text-[13px] leading-snug mb-3 line-clamp-2" style={{ color: "var(--fg)" }}>
                  {item.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map(t => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-lg font-medium" style={{ background: "rgba(255,255,255,0.05)", color: "var(--fg2)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Rank */}
                <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: "var(--fg3)" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                  Rank: <span style={{ color: item.color, fontWeight: 600 }}>{item.rank}</span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[11px] mb-0.5" style={{ color: "var(--fg3)" }}>Giá đăng</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold" style={{ fontFamily: "var(--font-russo),sans-serif", color: item.color }}>
                        {item.price}
                      </span>
                      {item.oldPrice && (
                        <span className="text-xs line-through" style={{ color: "var(--fg3)" }}>{item.oldPrice}</span>
                      )}
                    </div>
                  </div>
                  <button
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white transition-all duration-200 cursor-pointer opacity-90 group-hover:opacity-100"
                    style={{ background: `linear-gradient(135deg,${item.color},${item.accent})`, boxShadow: `0 4px 16px ${item.color}44` }}
                    aria-label={`Xem: ${item.title}`}
                  >
                    Xem Chi Tiết
                  </button>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 text-[11px]" style={{ borderTop: "1px solid var(--border)", color: "var(--fg3)" }}>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" style={{ color: "#f59e0b" }} fill="#f59e0b" />
                    <span style={{ color: "#fbbf24", fontWeight: 600 }}>{item.rating}</span>
                    <span>({item.reviews})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{item.views}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{item.posted}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-10">
          <button className="px-8 py-3.5 rounded-2xl font-semibold text-sm btn-ghost cursor-pointer" style={{ color: "var(--fg2)" }}>
            Xem Tất Cả 12,500+ Tin Đăng →
          </button>
        </div>
      </div>
    </section>
  );
}
