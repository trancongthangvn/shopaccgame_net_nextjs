import { UserPlus, PenLine, MessageSquare, Handshake, ArrowRight } from "lucide-react";

const steps = [
  { n:"01", icon:UserPlus,      title:"Đăng Ký",         color:"#7c3aed",
    desc:"Tạo tài khoản miễn phí với email hoặc số điện thoại. Xác minh danh tính để tăng uy tín." },
  { n:"02", icon:PenLine,       title:"Đăng Tin",         color:"#f43f5e",
    desc:"Mô tả chi tiết tài khoản game: rank, số tướng, skin, server và thông tin liên lạc." },
  { n:"03", icon:MessageSquare, title:"Người Mua Liên Hệ",color:"#a78bfa",
    desc:"Người quan tâm liên hệ trực tiếp qua hệ thống tin nhắn nội bộ hoặc thông tin để lại." },
  { n:"04", icon:Handshake,     title:"Tự Giao Dịch",    color:"#10b981",
    desc:"Hai bên tự thỏa thuận giá cả, thanh toán và bàn giao tài khoản. Nền tảng không can thiệp." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#9f67ff" }}>Quy Trình</span>
          </div>
          <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-russo),sans-serif" }}>
            <span style={{ color: "var(--fg)" }}>Hoạt Động </span>
            <span className="grad-purple">Như Thế Nào?</span>
          </h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "var(--fg3)" }}>
            4 bước đơn giản — minh bạch, không trung gian giữ tiền
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative group">
                {/* Arrow connector */}
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-10 -right-3 z-10 items-center justify-center w-6 h-6">
                    <ArrowRight className="w-4 h-4" style={{ color: s.color + "66" }} />
                  </div>
                )}

                <div className="relative rounded-2xl p-6 h-full transition-all duration-300 border-glow-hover" style={{ background: "var(--surface)" }}>
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at top left,${s.color}10,transparent 60%)` }} />

                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-4xl font-bold leading-none select-none"
                    style={{ fontFamily: "var(--font-russo),sans-serif", color: s.color + "18" }}>
                    {s.n}
                  </div>

                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg,${s.color}28,${s.color}12)`, border: `1px solid ${s.color}33` }}>
                    <Icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>

                  <h3 className="font-bold text-base mb-3 relative" style={{ fontFamily: "var(--font-russo),sans-serif", color: "var(--fg)" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed relative" style={{ color: "var(--fg2)" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-8 p-5 rounded-2xl text-sm leading-relaxed text-center"
          style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.18)", color: "var(--fg2)" }}>
          <strong style={{ color: "var(--purple3)" }}>Quan trọng:</strong> ShopAccGame.net là sàn đăng tin quảng cáo (classified ads). Chúng tôi không tham gia, không giữ tiền, và không chịu trách nhiệm về tranh chấp giữa các bên.
        </div>
      </div>
    </section>
  );
}
