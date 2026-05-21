import {
  Shield,
  BadgeCheck,
  AlertTriangle,
  PhoneCall,
  Lock,
  FileText,
  Eye,
  MessageSquare,
} from "lucide-react";

const trustFeatures = [
  {
    icon: BadgeCheck,
    title: "Người Bán Xác Minh",
    desc: "Người bán có thể đăng ký xác minh danh tính qua CCCD để tăng uy tín",
    color: "#10B981",
  },
  {
    icon: Eye,
    title: "Tin Đăng Minh Bạch",
    desc: "Mọi tin đăng hiển thị thời gian, lượt xem, đánh giá từ người mua",
    color: "#7C3AED",
  },
  {
    icon: MessageSquare,
    title: "Hệ Thống Đánh Giá",
    desc: "Người mua để lại đánh giá sau giao dịch, giúp cộng đồng tham khảo",
    color: "#A78BFA",
  },
  {
    icon: PhoneCall,
    title: "Hỗ Trợ Báo Cáo",
    desc: "Báo cáo tin đăng lừa đảo, chúng tôi xử lý trong 24 giờ làm việc",
    color: "#F43F5E",
  },
  {
    icon: Lock,
    title: "Bảo Mật Thông Tin",
    desc: "Thông tin cá nhân được mã hóa và không chia sẻ với bên thứ ba",
    color: "#06B6D4",
  },
  {
    icon: FileText,
    title: "Điều Khoản Rõ Ràng",
    desc: "Quy tắc sử dụng nền tảng được công bố công khai và cập nhật định kỳ",
    color: "#F59E0B",
  },
];

const warnings = [
  "Không chuyển tiền trước khi nhận tài khoản game (trừ khi có thỏa thuận rõ ràng)",
  "Kiểm tra kỹ thông tin tài khoản trước khi thanh toán",
  "Ưu tiên giao dịch qua Zalo Pay / MoMo (có bảo vệ người tiêu dùng)",
  "Việc mua bán tài khoản game có thể vi phạm điều khoản của nhà phát hành game",
  "Nền tảng không bảo lãnh cho bất kỳ giao dịch nào giữa các thành viên",
];

export default function TrustSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2
          className="text-3xl sm:text-4xl mb-3"
          style={{
            fontFamily: "var(--font-russo), sans-serif",
            color: "var(--color-foreground)",
          }}
        >
          An Toàn &{" "}
          <span className="neon-text-purple" style={{ color: "var(--color-secondary)" }}>
            Uy Tín
          </span>
        </h2>
        <p className="text-sm max-w-xl mx-auto" style={{ color: "var(--color-muted-text)" }}>
          Chúng tôi xây dựng môi trường đăng tin minh bạch, hỗ trợ cộng đồng giao dịch thông minh
        </p>
      </div>

      {/* Trust Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {trustFeatures.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 card-glow"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: f.color + "22", color: f.color }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3
                  className="font-semibold text-sm mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-muted-text)" }}>
                  {f.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Warning Box */}
      <div
        className="rounded-2xl border p-6"
        style={{
          background: "#F43F5E0A",
          borderColor: "#F43F5E33",
        }}
        role="complementary"
        aria-label="Cảnh báo an toàn giao dịch"
      >
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" style={{ color: "#F43F5E" }} />
          <h3
            className="font-bold text-base"
            style={{
              fontFamily: "var(--font-russo), sans-serif",
              color: "#FB7185",
            }}
          >
            Cảnh Báo An Toàn Giao Dịch
          </h3>
        </div>
        <ul className="space-y-2">
          {warnings.map((w, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#FCA5A5" }}>
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#F43F5E" }}
              />
              {w}
            </li>
          ))}
        </ul>
      </div>

      {/* Security badges */}
      <div className="flex items-center justify-center gap-8 mt-10 flex-wrap">
        {[
          { icon: Shield, label: "SSL Secured" },
          { icon: Lock, label: "Mã hóa dữ liệu" },
          { icon: BadgeCheck, label: "Xác minh thành viên" },
          { icon: FileText, label: "Tuân thủ pháp luật VN" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 text-sm"
            style={{ color: "var(--color-muted-text)" }}
          >
            <Icon className="w-4 h-4" style={{ color: "var(--color-success)" }} />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
