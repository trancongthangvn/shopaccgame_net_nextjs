import { Scale, FileText, AlertCircle, Info, Shield } from "lucide-react";

const items = [
  { icon:Info,        color:"#7c3aed", title:"Nền Tảng Đăng Tin Trung Gian",
    body:`ShopAccGame.net hoạt động theo mô hình "classified ads" (rao vặt trực tuyến), tuân thủ Luật Thương mại điện tử và Nghị định 52/2013/NĐ-CP. Chúng tôi không trực tiếp mua bán hay sở hữu bất kỳ tài khoản game nào trên nền tảng.` },
  { icon:Scale,       color:"#a78bfa", title:"Trách Nhiệm Pháp Lý",
    body:`Người đăng tin chịu hoàn toàn trách nhiệm về tính chính xác của thông tin. ShopAccGame.net không chịu trách nhiệm về tranh chấp giữa các thành viên và có quyền xóa nội dung vi phạm mà không cần thông báo.` },
  { icon:AlertCircle, color:"#f59e0b", title:"Lưu Ý Về Tài Khoản Game",
    body:`Mua bán tài khoản game có thể vi phạm Điều khoản Dịch vụ của nhà phát hành. Người dùng tự chịu rủi ro nếu tài khoản bị khóa sau giao dịch. ShopAccGame.net không thể can thiệp vào quyết định của nhà phát hành game.` },
  { icon:FileText,    color:"#10b981", title:"Bảo Vệ Người Tiêu Dùng",
    body:`Tranh chấp nghiêm trọng: liên hệ Cục Cạnh tranh và Bảo vệ người tiêu dùng (VCCA) hoặc cơ quan công an. Nền tảng sẵn sàng cung cấp thông tin theo yêu cầu của cơ quan chức năng có thẩm quyền.` },
];

const laws = ["Luật TM 2005 (sửa 2019)","NĐ 52/2013/NĐ-CP","NĐ 13/2023/NĐ-CP","Luật CNTT 2006","TT 47/2014/TT-BCT","Luật BVNTD 2023"];

export default function LegalSection() {
  return (
    <section id="legal" className="py-16 lg:py-24 px-4 sm:px-6" style={{ background: "var(--bg2)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
            style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.3)" }}>
            <Scale className="w-3.5 h-3.5" style={{ color: "#c4b5fd" }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#c4b5fd" }}>Tuân Thủ Pháp Luật VN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl mb-3" style={{ fontFamily: "var(--font-gilroy),sans-serif" }}>
            <span style={{ color: "var(--fg)" }}>Điều Khoản </span>
            <span className="grad-purple">& Pháp Lý</span>
          </h2>
        </div>

        <div className="space-y-3 mb-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.color + "1a", border: `1px solid ${item.color}33` }}>
                    <Icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-sm" style={{ fontFamily: "var(--font-gilroy),sans-serif", color: "var(--fg)" }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed pl-12" style={{ color: "var(--fg2)" }}>{item.body}</p>
              </div>
            );
          })}
        </div>

        {/* Legal basis */}
        <div className="rounded-2xl p-5" style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.18)" }}>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4" style={{ color: "#a78bfa" }} />
            <h3 className="text-sm font-semibold" style={{ color: "var(--purple3)" }}>Cơ Sở Pháp Lý Áp Dụng</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {laws.map(l => (
              <div key={l} className="flex items-center gap-2 text-xs" style={{ color: "var(--fg2)" }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--purple)" }} />
                {l}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs mt-5" style={{ color: "var(--fg3)" }}>
          Cập nhật: 05/2025 · Liên hệ pháp lý: <span style={{ color: "var(--purple3)" }}>legal@shopaccgame.net</span>
        </p>
      </div>
    </section>
  );
}
