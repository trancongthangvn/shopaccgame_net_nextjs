import { Zap, ArrowRight, Star } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%,#7c3aed14,transparent)" }} />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10 float"
        style={{ background: "radial-gradient(circle,#7c3aed,transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-10 float2"
        style={{ background: "radial-gradient(circle,#f43f5e,transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative max-w-3xl mx-auto text-center z-10">
        {/* Stars */}
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" fill="#f59e0b" style={{ color: "#f59e0b" }} />)}
          <span className="ml-2 text-sm font-semibold" style={{ color: "#fbbf24" }}>4.9/5 — 3,200+ đánh giá</span>
        </div>

        <h2 className="mb-5 leading-tight" style={{ fontFamily: "var(--font-russo),sans-serif", fontSize: "clamp(2rem,5vw,3.5rem)" }}>
          <span style={{ color: "var(--fg)" }}>Có Acc Game</span><br />
          <span className="grad-rose">Muốn Bán Nhanh?</span>
        </h2>

        <p className="text-base mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: "var(--fg2)" }}>
          Đăng tin miễn phí, tiếp cận <strong style={{ color: "var(--fg)" }}>48,000+</strong> người mua tiềm năng mỗi ngày.
          Tin nổi bật đạt <strong style={{ color: "var(--fg)" }}>5,000+ lượt xem</strong> trong 24 giờ đầu.
        </p>

        {/* Cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 text-left">
          {[
            { title:"Miễn Phí", desc:"Đăng tin cơ bản không mất phí", color:"#10b981" },
            { title:"Nổi Bật", desc:"Gói ưu tiên từ 29.000đ/3 ngày", color:"#f59e0b" },
            { title:"Premium", desc:"Top đầu kết quả tìm kiếm", color:"#9f67ff" },
          ].map(p => (
            <div key={p.title} className="p-4 rounded-2xl border-glow-hover" style={{ background: "var(--surface)" }}>
              <div className="text-xs font-bold mb-1" style={{ color: p.color, fontFamily: "var(--font-russo),sans-serif" }}>{p.title}</div>
              <div className="text-xs" style={{ color: "var(--fg2)" }}>{p.desc}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white btn-rose cursor-pointer">
            <Zap className="w-4 h-4" /> Đăng Tin Ngay — Miễn Phí
          </button>
          <button className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold btn-ghost cursor-pointer" style={{ color: "var(--fg2)" }}>
            Xem Bảng Giá <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs mt-6" style={{ color: "var(--fg3)" }}>
          Bằng việc đăng ký, bạn đồng ý với{" "}
          <a href="#legal" className="underline hover:text-purple-400 transition-colors" style={{ color: "var(--purple3)" }}>Điều khoản sử dụng</a>
          {" "}và{" "}
          <a href="#legal" className="underline hover:text-purple-400 transition-colors" style={{ color: "var(--purple3)" }}>Chính sách bảo mật</a>
        </p>
      </div>
    </section>
  );
}
