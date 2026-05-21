import { Zap, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, #7C3AED18 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 grid-bg opacity-40"
        style={{ pointerEvents: "none" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-sm"
          style={{
            borderColor: "#F43F5E44",
            background: "#F43F5E11",
            color: "#FB7185",
          }}
        >
          <Zap className="w-4 h-4" />
          Miễn phí đăng tin cơ bản
        </div>

        <h2
          className="text-3xl sm:text-5xl mb-5 leading-tight"
          style={{
            fontFamily: "var(--font-russo), sans-serif",
            color: "var(--color-foreground)",
          }}
        >
          Bạn Có Acc Game{" "}
          <span className="neon-text-rose" style={{ color: "var(--color-accent)" }}>
            Muốn Bán?
          </span>
        </h2>

        <p
          className="text-base mb-8 max-w-xl mx-auto leading-relaxed"
          style={{ color: "var(--color-muted-text)" }}
        >
          Đăng tin miễn phí, tiếp cận hàng nghìn người mua tiềm năng mỗi ngày.
          Tin đăng nổi bật có thể chạm 5,000+ lượt xem trong 24 giờ đầu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 cursor-pointer neon-border-rose"
            style={{ background: "var(--color-accent)", color: "#fff" }}
          >
            <Zap className="w-5 h-5" />
            Đăng Tin Ngay — Miễn Phí
          </button>
          <button
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base border transition-all duration-200 hover:border-purple-500 cursor-pointer"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-foreground)",
            }}
          >
            Xem Bảng Giá Gói Nổi Bật
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p
          className="text-xs mt-6"
          style={{ color: "var(--color-muted-text)" }}
        >
          Bằng việc đăng ký, bạn đồng ý với{" "}
          <a
            href="#legal"
            className="underline transition-colors duration-200 hover:text-purple-300"
            style={{ color: "var(--color-secondary)" }}
          >
            Điều khoản sử dụng
          </a>{" "}
          và{" "}
          <a
            href="#legal"
            className="underline transition-colors duration-200 hover:text-purple-300"
            style={{ color: "var(--color-secondary)" }}
          >
            Chính sách bảo mật
          </a>{" "}
          của ShopAccGame.net
        </p>
      </div>
    </section>
  );
}
