import { BadgeCheck, Eye, MessageSquare, PhoneCall, Lock, FileText, AlertTriangle } from "lucide-react";

const features = [
  { icon:BadgeCheck, title:"Người Bán Xác Minh",   color:"#10b981", desc:"Đăng ký xác minh CCCD để tăng uy tín và nhận badge xanh." },
  { icon:Eye,        title:"Tin Đăng Minh Bạch",   color:"#7c3aed", desc:"Hiển thị thời gian, lượt xem, đánh giá thực từ người mua." },
  { icon:MessageSquare, title:"Hệ Thống Đánh Giá", color:"#a78bfa", desc:"Người mua để lại review sau giao dịch, xây dựng uy tín." },
  { icon:PhoneCall,  title:"Báo Cáo Lừa Đảo",     color:"#f43f5e", desc:"Xử lý tin vi phạm trong 24 giờ làm việc." },
  { icon:Lock,       title:"Bảo Mật Dữ Liệu",      color:"#06b6d4", desc:"Thông tin mã hóa SSL, không chia sẻ bên thứ ba." },
  { icon:FileText,   title:"Điều Khoản Rõ Ràng",   color:"#f59e0b", desc:"Quy tắc sử dụng công khai, cập nhật định kỳ." },
];

const warnings = [
  "Không chuyển tiền trước khi nhận và kiểm tra kỹ tài khoản game",
  "Ưu tiên thanh toán qua MoMo / ZaloPay có bảo vệ người tiêu dùng",
  "Mua bán tài khoản có thể vi phạm ToS của nhà phát hành game",
  "Nền tảng không bảo lãnh cho bất kỳ giao dịch nào giữa thành viên",
  "Gặp sự cố tranh chấp: liên hệ VCCA hoặc cơ quan công an",
];

export default function TrustSection() {
  return (
    <section className="py-24 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#10b981" }}>An Toàn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-russo),sans-serif" }}>
            <span style={{ color: "var(--fg)" }}>Giao Dịch </span>
            <span className="grad-cyan">Thông Minh</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title}
                className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 border-glow-hover"
                style={{ background: "var(--surface)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: f.color + "1a", border: `1px solid ${f.color}33` }}>
                  <Icon className="w-4.5 h-4.5" style={{ color: f.color, width: 18, height: 18 }} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--fg)" }}>{f.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--fg2)" }}>{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Warning box */}
        <div className="rounded-2xl p-6" style={{ background: "rgba(244,63,94,0.06)", border: "1px solid rgba(244,63,94,0.2)" }}>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(244,63,94,0.15)" }}>
              <AlertTriangle className="w-4 h-4" style={{ color: "#f43f5e" }} />
            </div>
            <h3 className="font-bold text-sm" style={{ fontFamily: "var(--font-russo),sans-serif", color: "#fb7185" }}>
              Cảnh Báo An Toàn Giao Dịch
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {warnings.map((w, i) => (
              <div key={i} className="flex items-start gap-2 text-xs" style={{ color: "#fca5a5" }}>
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#f43f5e" }} />
                {w}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
