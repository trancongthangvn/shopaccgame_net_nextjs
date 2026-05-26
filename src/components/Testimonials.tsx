import { Star, Quote, BadgeCheck } from "lucide-react";

const reviews = [
  {
    name: "Nguyễn Minh Tuấn", role: "Game thủ LMHT 7 năm", avatar: "MT", color: "#7c3aed",
    rating: 5,
    text: "Đã mua 3 acc LMHT trên shopaccgame.net, lần nào cũng đúng mô tả. Người bán rất uy tín và phản hồi nhanh. Đáng tin cậy nhất so với các sàn khác mình từng dùng.",
    bought: "Acc LMHT Kim Cương 1",
    date: "12/05/2026"
  },
  {
    name: "Trần Thu Hà", role: "Streamer Genshin", avatar: "TH", color: "#f43f5e",
    rating: 5,
    text: "Mình bán 5 acc Genshin trong 2 tháng, tin đăng nổi bật giúp tiếp cận rất nhiều người mua. Hệ thống xác minh giúp giao dịch an toàn hơn nhiều so với chợ tự phát.",
    bought: "Người bán xác minh",
    date: "08/05/2026"
  },
  {
    name: "Lê Văn Phong", role: "PUBG Pro Player", avatar: "LP", color: "#f59e0b",
    rating: 5,
    text: "Trang web có nhiều tin đăng chất lượng. Mình tìm được acc PUBG Conqueror đúng yêu cầu trong vòng 1 giờ. Giao dịch trực tiếp với người bán nên giá rất tốt.",
    bought: "Acc PUBG Conqueror",
    date: "05/05/2026"
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star className="w-4 h-4 fill-current" style={{ color: "#fbbf24" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#fbbf24" }}>Đánh Giá Người Dùng</span>
            <Star className="w-4 h-4 fill-current" style={{ color: "#fbbf24" }} />
          </div>
          <h2 className="text-display-3 mb-3" style={{ fontFamily: "var(--font-gilroy),sans-serif" }}>
            <span style={{ color: "var(--fg)" }}>3,200+ Game Thủ </span>
            <span className="grad-gold">Tin Tưởng</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#fbbf24" }} />)}
            </div>
            <span className="font-bold" style={{ color: "#fbbf24" }}>4.9/5</span>
            <span style={{ color: "var(--fg3)" }}>· 3,247 đánh giá</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <article key={i} className="card card-hover p-6 relative overflow-hidden">
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 opacity-10" style={{ color: r.color }} />

              {/* Rating */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: "#fbbf24" }} />
                ))}
              </div>

              {/* Body */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--fg2)" }}>
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,${r.color},${r.color}cc)` }}>
                  {r.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold truncate" style={{ color: "var(--fg)" }}>{r.name}</span>
                    <BadgeCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#10b981" }} />
                  </div>
                  <div className="text-2xs" style={{ color: "var(--fg3)" }}>{r.role}</div>
                </div>
              </div>

              {/* Bought */}
              <div className="mt-3 text-2xs flex items-center justify-between" style={{ color: "var(--fg3)" }}>
                <span className="px-2 py-1 rounded-md font-medium" style={{ background: r.color + "18", color: r.color }}>
                  {r.bought}
                </span>
                <span>{r.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
