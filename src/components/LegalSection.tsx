import { Scale, FileText, AlertCircle, Info } from "lucide-react";

const legalPoints = [
  {
    icon: Info,
    title: "Nền Tảng Đăng Tin Trung Gian",
    color: "#7C3AED",
    content: `ShopAccGame.net (tên miền shopaccgame.net) là nền tảng cung cấp dịch vụ đăng tin quảng cáo
    theo mô hình "classified ads" (rao vặt trực tuyến). Chúng tôi không trực tiếp mua bán, trao đổi,
    hay sở hữu bất kỳ tài khoản game nào được đăng trên nền tảng. Hoạt động của nền tảng
    tuân thủ Luật Thương mại điện tử và Nghị định 52/2013/NĐ-CP về thương mại điện tử Việt Nam.`,
  },
  {
    icon: Scale,
    title: "Trách Nhiệm Pháp Lý",
    color: "#A78BFA",
    content: `Theo quy định, người đăng tin chịu hoàn toàn trách nhiệm về tính chính xác của thông tin đăng tải.
    ShopAccGame.net không chịu trách nhiệm về tranh chấp phát sinh từ giao dịch giữa các thành viên.
    Nền tảng có quyền xóa bỏ nội dung vi phạm điều khoản sử dụng mà không cần thông báo trước.
    Người dùng đồng ý với điều khoản này khi sử dụng dịch vụ.`,
  },
  {
    icon: AlertCircle,
    title: "Lưu Ý Về Tài Khoản Game",
    color: "#F59E0B",
    content: `Việc mua bán tài khoản game (tài sản ảo trong game) có thể vi phạm Điều khoản Dịch vụ
    của các nhà phát hành game. Người dùng tự chịu rủi ro nếu tài khoản bị khóa hoặc thu hồi
    sau giao dịch. ShopAccGame.net không thể can thiệp vào quyết định của nhà phát hành game đối
    với các tài khoản đã giao dịch trên nền tảng.`,
  },
  {
    icon: FileText,
    title: "Bảo Vệ Người Tiêu Dùng",
    color: "#10B981",
    content: `Người dùng có quyền báo cáo tin đăng lừa đảo qua hệ thống báo cáo nội bộ. Trường hợp
    phát sinh tranh chấp nghiêm trọng, người dùng có thể liên hệ cơ quan bảo vệ người tiêu dùng
    (Cục Cạnh tranh và Bảo vệ người tiêu dùng - VCCA) hoặc cơ quan công an. Nền tảng sẵn sàng
    cung cấp thông tin theo yêu cầu của cơ quan chức năng có thẩm quyền.`,
  },
];

export default function LegalSection() {
  return (
    <section
      id="legal"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--color-background-2)" }}
      aria-labelledby="legal-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4 text-sm"
            style={{
              borderColor: "#A78BFA44",
              background: "#A78BFA11",
              color: "#A78BFA",
            }}
          >
            <Scale className="w-4 h-4" />
            Tuân Thủ Pháp Luật Việt Nam
          </div>
          <h2
            id="legal-heading"
            className="text-3xl sm:text-4xl mb-3"
            style={{
              fontFamily: "var(--font-russo), sans-serif",
              color: "var(--color-foreground)",
            }}
          >
            Điều Khoản &{" "}
            <span style={{ color: "var(--color-secondary)" }}>Pháp Lý</span>
          </h2>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: "var(--color-muted-text)" }}>
            Chúng tôi cam kết vận hành minh bạch, tuân thủ đầy đủ quy định pháp luật
            Việt Nam về thương mại điện tử
          </p>
        </div>

        <div className="space-y-5">
          {legalPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="rounded-2xl border p-6"
                style={{
                  background: "var(--color-surface)",
                  borderColor: point.color + "33",
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: point.color + "22", color: point.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3
                    className="font-bold text-base"
                    style={{
                      fontFamily: "var(--font-russo), sans-serif",
                      color: "var(--color-foreground)",
                    }}
                  >
                    {point.title}
                  </h3>
                </div>
                <p
                  className="text-sm leading-relaxed pl-12"
                  style={{ color: "var(--color-muted-text)" }}
                >
                  {point.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Legal basis */}
        <div
          className="mt-8 p-5 rounded-2xl border"
          style={{
            background: "#7C3AED0D",
            borderColor: "#7C3AED33",
          }}
        >
          <h3
            className="text-sm font-semibold mb-3"
            style={{ color: "var(--color-secondary)" }}
          >
            Cơ Sở Pháp Lý Áp Dụng:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Luật Thương mại 2005 (sửa đổi 2019)",
              "Nghị định 52/2013/NĐ-CP về TMĐT",
              "Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu",
              "Luật Công nghệ thông tin 2006",
              "Thông tư 47/2014/TT-BCT về TMĐT",
              "Luật Bảo vệ quyền lợi người tiêu dùng 2023",
            ].map((law) => (
              <li
                key={law}
                className="flex items-center gap-2 text-xs"
                style={{ color: "var(--color-muted-text)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--color-primary)" }}
                />
                {law}
              </li>
            ))}
          </ul>
        </div>

        <p
          className="text-center text-xs mt-6"
          style={{ color: "var(--color-muted-text)" }}
        >
          Cập nhật lần cuối: Tháng 5/2025 • Mọi thắc mắc về pháp lý:{" "}
          <span style={{ color: "var(--color-secondary)" }}>legal@shopaccgame.net</span>
        </p>
      </div>
    </section>
  );
}
