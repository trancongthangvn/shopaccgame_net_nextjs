import { UserPlus, PenLine, MessageSquare, Handshake } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Đăng Ký Tài Khoản",
    desc: "Tạo tài khoản miễn phí với email hoặc số điện thoại. Xác minh danh tính để tăng uy tín.",
    color: "#7C3AED",
  },
  {
    step: "02",
    icon: PenLine,
    title: "Đăng Tin Quảng Cáo",
    desc: "Mô tả chi tiết tài khoản game của bạn: rank, số tướng, skin, giá bán và thông tin liên lạc.",
    color: "#F43F5E",
  },
  {
    step: "03",
    icon: MessageSquare,
    title: "Người Mua Liên Hệ",
    desc: "Người quan tâm sẽ liên hệ trực tiếp với bạn qua hệ thống tin nhắn nội bộ hoặc thông tin để lại.",
    color: "#A78BFA",
  },
  {
    step: "04",
    icon: Handshake,
    title: "Tự Thỏa Thuận & Giao Dịch",
    desc: "Hai bên tự thỏa thuận giá cả, phương thức thanh toán và bàn giao tài khoản. Nền tảng không can thiệp.",
    color: "#10B981",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--color-background-2)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl mb-3"
            style={{
              fontFamily: "var(--font-russo), sans-serif",
              color: "var(--color-foreground)",
            }}
          >
            Cách Thức{" "}
            <span className="neon-text-purple" style={{ color: "var(--color-secondary)" }}>
              Hoạt Động
            </span>
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: "var(--color-muted-text)" }}>
            Quy trình đơn giản, minh bạch — không có bên trung gian giữ tiền
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-full h-px z-0"
                    style={{
                      background: `linear-gradient(90deg, ${s.color}44, transparent)`,
                    }}
                  />
                )}

                <div
                  className="relative z-10 rounded-2xl border p-6 transition-all duration-300 card-glow h-full"
                  style={{
                    background: "var(--color-surface)",
                    borderColor: s.color + "33",
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: s.color + "22", color: s.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="text-4xl font-bold opacity-20 mt-0.5"
                      style={{
                        fontFamily: "var(--font-russo), sans-serif",
                        color: s.color,
                        lineHeight: 1,
                      }}
                    >
                      {s.step}
                    </span>
                  </div>

                  <h3
                    className="font-semibold mb-2 text-base"
                    style={{
                      fontFamily: "var(--font-russo), sans-serif",
                      color: "var(--color-foreground)",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-text)" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important note */}
        <div
          className="mt-10 p-5 rounded-2xl border text-sm leading-relaxed"
          style={{
            background: "#7C3AED0D",
            borderColor: "#7C3AED33",
            color: "var(--color-muted-text)",
          }}
        >
          <strong style={{ color: "var(--color-secondary)" }}>Quan trọng:</strong>{" "}
          ShopAccGame.net hoạt động như một sàn đăng tin quảng cáo (classified ads). Chúng tôi
          không tham gia vào quá trình mua bán, không giữ tiền của bất kỳ bên nào, và không
          chịu trách nhiệm về tranh chấp giữa người mua và người bán. Người dùng nên thận trọng
          khi giao dịch và ưu tiên gặp mặt trực tiếp hoặc sử dụng dịch vụ thanh toán có bảo vệ.
        </div>
      </div>
    </section>
  );
}
