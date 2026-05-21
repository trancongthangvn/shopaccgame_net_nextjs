import { Search, MessageSquare, Handshake, ArrowRight } from "lucide-react";

const steps = [
  { n:"01", icon:Search,         title:"Tìm Kiếm",    color:"#7c3aed", c2:"#a855f7",
    desc:"Lọc tin đăng theo game, rank, giá. So sánh và chọn acc phù hợp với nhu cầu của bạn." },
  { n:"02", icon:MessageSquare,  title:"Liên Hệ",     color:"#f43f5e", c2:"#fb7185",
    desc:"Chat trực tiếp với người bán qua hệ thống nội bộ. Xác minh thông tin trước khi giao dịch." },
  { n:"03", icon:Handshake,      title:"Giao Dịch",   color:"#10b981", c2:"#34d399",
    desc:"Hai bên tự thỏa thuận thanh toán và bàn giao acc. Nền tảng không can thiệp hay giữ tiền." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ background: "var(--bg2)" }}>
      <div className="absolute inset-0 dot-bg opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#10b981" }}>Quy Trình</span>
          <h2 className="text-3xl sm:text-4xl mt-2 mb-3" style={{ fontFamily: "var(--font-russo),sans-serif" }}>
            <span style={{ color: "var(--fg)" }}>Mua Bán </span>
            <span className="grad-green">Chỉ 3 Bước</span>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "var(--fg2)" }}>
            Quy trình đơn giản — không trung gian giữ tiền, không phí ẩn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative group">
                {/* Connector */}
                {i < 2 && (
                  <div className="hidden md:flex absolute top-12 -right-4 lg:-right-5 z-10 w-8 h-8 rounded-full items-center justify-center"
                    style={{ background: "var(--bg2)" }}>
                    <ArrowRight className="w-4 h-4" style={{ color: s.color + "88" }} />
                  </div>
                )}

                <div className="card card-hover p-6 lg:p-8 h-full relative">
                  {/* Big number */}
                  <div className="absolute top-4 right-4 text-5xl font-bold leading-none select-none opacity-10"
                    style={{ fontFamily: "var(--font-russo),sans-serif", color: s.color }}>
                    {s.n}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative"
                    style={{
                      background: `linear-gradient(135deg,${s.color},${s.c2})`,
                      boxShadow: `0 8px 24px ${s.color}44`,
                    }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "var(--font-russo),sans-serif", color: "var(--fg)" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--fg2)" }}>{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-10 max-w-3xl mx-auto p-5 rounded-2xl text-sm text-center"
          style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.18)" }}>
          <strong style={{ color: "var(--purple3)" }}>Quan trọng:</strong>
          <span style={{ color: "var(--fg2)" }}> ShopAccGame.net là sàn đăng tin quảng cáo (classified ads). Chúng tôi không tham gia mua bán, không giữ tiền, và không chịu trách nhiệm về tranh chấp giữa các bên.</span>
        </div>
      </div>
    </section>
  );
}
