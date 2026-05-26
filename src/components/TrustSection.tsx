import { BadgeCheck, Eye, MessageSquare, PhoneCall, Lock, FileText, AlertTriangle, ShieldCheck } from "lucide-react";

const features = [
  { icon:BadgeCheck,    title:"Người Bán Xác Minh",   color:"#10b981", desc:"Đăng ký xác minh CCCD để tăng uy tín và nhận badge xanh." },
  { icon:Eye,           title:"Tin Đăng Minh Bạch",   color:"#f97316", desc:"Thời gian đăng, lượt xem, đánh giá đều hiển thị công khai." },
  { icon:MessageSquare, title:"Hệ Thống Đánh Giá",    color:"#fb923c", desc:"Review thật từ người mua giúp cộng đồng tham khảo dễ dàng." },
  { icon:PhoneCall,     title:"Báo Cáo Lừa Đảo",      color:"#f43f5e", desc:"Xử lý tin vi phạm trong vòng 24 giờ làm việc." },
  { icon:Lock,          title:"Bảo Mật Dữ Liệu",      color:"#06b6d4", desc:"SSL 256-bit, không chia sẻ thông tin với bên thứ ba." },
  { icon:FileText,      title:"Điều Khoản Rõ Ràng",   color:"#f59e0b", desc:"Quy tắc sử dụng công khai, cập nhật định kỳ." },
];

const warnings = [
  "Không chuyển tiền trước khi nhận và kiểm tra kỹ tài khoản game",
  "Ưu tiên thanh toán qua MoMo / ZaloPay có bảo vệ người tiêu dùng",
  "Mua bán acc có thể vi phạm ToS của nhà phát hành game",
  "Nền tảng không bảo lãnh cho bất kỳ giao dịch nào",
];

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
            style={{ background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.3)" }}>
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#06b6d4" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#06b6d4" }}>An Toàn</span>
          </div>
          <h2 className="text-display-3" style={{ fontFamily: "var(--font-gilroy),sans-serif" }}>
            <span style={{ color: "var(--fg)" }}>Giao Dịch </span>
            <span className="grad-cyan">Thông Minh</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {features.map(({icon:Icon,title,color,desc}) => (
            <div key={title} className="card card-hover p-5 flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: `linear-gradient(135deg,${color}26,${color}10)`, border: `1px solid ${color}33` }}>
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--fg)" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--fg2)" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning */}
        <div className="rounded-2xl p-6" style={{ background: "rgba(244,63,94,0.06)", border: "1px solid rgba(244,63,94,0.2)" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(244,63,94,0.15)" }}>
              <AlertTriangle className="w-4 h-4" style={{ color: "#f43f5e" }} />
            </div>
            <h3 className="font-bold text-sm" style={{ fontFamily: "var(--font-gilroy),sans-serif", color: "#fb7185" }}>
              Cảnh Báo An Toàn Khi Giao Dịch
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-12">
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
