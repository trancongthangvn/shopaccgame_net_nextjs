import { Zap, ArrowRight, Star, Check } from "lucide-react";

const plans = [
  { name:"Cơ Bản",   price:"Miễn Phí", color:"#10b981", popular:false,
    feats:["Đăng tin không giới hạn","Hiển thị trong 7 ngày","Hỗ trợ cơ bản"] },
  { name:"Nổi Bật",  price:"29.000đ/3 ngày", color:"#f59e0b", popular:true,
    feats:["Hiển thị top trang chủ","Badge HOT trên tin","Hỗ trợ ưu tiên 24/7","Lượt xem tăng x5"] },
  { name:"Premium",  price:"149.000đ/tuần", color:"#a78bfa", popular:false,
    feats:["Top 1 kết quả tìm kiếm","Banner trang chủ","Tin pinned 7 ngày","Tư vấn 1-1"] },
];

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%,rgba(124,58,237,0.1),transparent)" }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#fbbf24" }} />)}
            <span className="ml-2 text-sm font-semibold" style={{ color: "#fbbf24" }}>4.9/5 từ 3,247 đánh giá</span>
          </div>
          <h2 className="mb-3" style={{ fontFamily: "var(--font-russo),sans-serif", fontSize: "clamp(1.8rem,4.5vw,3rem)" }}>
            <span style={{ color: "var(--fg)" }}>Bán Acc </span>
            <span className="grad-rose">Nhanh Chóng?</span>
          </h2>
          <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: "var(--fg2)" }}>
            Đăng tin và tiếp cận <strong className="text-white">48,000+</strong> người mua tiềm năng.
            Chọn gói phù hợp với nhu cầu của bạn.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {plans.map(p => (
            <div key={p.name}
              className={`card p-6 relative transition-all ${p.popular ? "scale-100 md:scale-105" : ""}`}
              style={{
                background: p.popular ? `linear-gradient(135deg,${p.color}1a,var(--surface))` : "var(--surface)",
                borderColor: p.popular ? p.color + "66" : "var(--border)",
              }}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ background: `linear-gradient(135deg,${p.color},#f97316)`, boxShadow: `0 4px 12px ${p.color}66` }}>
                  ★ Phổ biến nhất
                </div>
              )}

              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: p.color }}>{p.name}</div>
              <div className="text-3xl font-bold mb-5" style={{ fontFamily: "var(--font-russo),sans-serif", color: "var(--fg)" }}>
                {p.price}
              </div>

              <ul className="space-y-2 mb-6">
                {p.feats.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--fg2)" }}>
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: p.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl text-sm font-bold cursor-pointer transition-all ${p.popular ? "text-white" : ""}`}
                style={p.popular ? {
                  background: `linear-gradient(135deg,${p.color},#f97316)`,
                  boxShadow: `0 4px 14px ${p.color}44`,
                } : {
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  color: "var(--fg)",
                }}>
                {p.popular ? "Bắt Đầu Ngay" : "Chọn Gói"}
              </button>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3">
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white btn-rose cursor-pointer">
              <Zap className="w-4 h-4" /> Đăng Tin Miễn Phí
            </button>
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold btn-ghost cursor-pointer" style={{ color: "var(--fg2)" }}>
              Xem Bảng Giá Chi Tiết <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs mt-5" style={{ color: "var(--fg3)" }}>
            Bằng việc đăng ký, bạn đồng ý với{" "}
            <a href="#legal" className="underline hover:text-purple-400 transition-colors" style={{ color: "var(--purple3)" }}>Điều khoản</a>{" "}và{" "}
            <a href="#legal" className="underline hover:text-purple-400 transition-colors" style={{ color: "var(--purple3)" }}>Chính sách bảo mật</a>
          </p>
        </div>
      </div>
    </section>
  );
}
